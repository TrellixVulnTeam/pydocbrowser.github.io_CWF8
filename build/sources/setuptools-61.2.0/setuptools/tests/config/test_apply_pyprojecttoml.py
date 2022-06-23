"""Make sure that applying the configuration from pyproject.toml is equivalent to
applying a similar configuration from setup.cfg
"""
import io
import re
from pathlib import Path
from urllib.request import urlopen
from unittest.mock import Mock

import pytest
from ini2toml.api import Translator

import setuptools  # noqa ensure monkey patch to metadata
from setuptools.dist import Distribution
from setuptools.config import setupcfg, pyprojecttoml
from setuptools.config import expand
from setuptools.config._apply_pyprojecttoml import _WouldIgnoreField, _some_attrgetter
from setuptools.command.egg_info import write_requirements


EXAMPLES = (Path(__file__).parent / "setupcfg_examples.txt").read_text()
EXAMPLE_URLS = [x for x in EXAMPLES.splitlines() if not x.startswith("#")]
DOWNLOAD_DIR = Path(__file__).parent / "downloads"


def makedist(path, **attrs):
    return Distribution({"src_root": path, **attrs})


@pytest.mark.parametrize("url", EXAMPLE_URLS)
@pytest.mark.filterwarnings("ignore")
@pytest.mark.uses_network
def test_apply_pyproject_equivalent_to_setupcfg(url, monkeypatch, tmp_path):
    monkeypatch.setattr(expand, "read_attr", Mock(return_value="0.0.1"))
    setupcfg_example = retrieve_file(url, DOWNLOAD_DIR)
    pyproject_example = Path(tmp_path, "pyproject.toml")
    toml_config = Translator().translate(setupcfg_example.read_text(), "setup.cfg")
    pyproject_example.write_text(toml_config)

    dist_toml = pyprojecttoml.apply_configuration(makedist(tmp_path), pyproject_example)
    dist_cfg = setupcfg.apply_configuration(makedist(tmp_path), setupcfg_example)

    pkg_info_toml = core_metadata(dist_toml)
    pkg_info_cfg = core_metadata(dist_cfg)
    assert pkg_info_toml == pkg_info_cfg

    if any(getattr(d, "license_files", None) for d in (dist_toml, dist_cfg)):
        assert set(dist_toml.license_files) == set(dist_cfg.license_files)

    if any(getattr(d, "entry_points", None) for d in (dist_toml, dist_cfg)):
        print(dist_cfg.entry_points)
        ep_toml = {(k, *sorted(i.replace(" ", "") for i in v))
                   for k, v in dist_toml.entry_points.items()}
        ep_cfg = {(k, *sorted(i.replace(" ", "") for i in v))
                  for k, v in dist_cfg.entry_points.items()}
        assert ep_toml == ep_cfg

    if any(getattr(d, "package_data", None) for d in (dist_toml, dist_cfg)):
        pkg_data_toml = {(k, *sorted(v)) for k, v in dist_toml.package_data.items()}
        pkg_data_cfg = {(k, *sorted(v)) for k, v in dist_cfg.package_data.items()}
        assert pkg_data_toml == pkg_data_cfg

    if any(getattr(d, "data_files", None) for d in (dist_toml, dist_cfg)):
        data_files_toml = {(k, *sorted(v)) for k, v in dist_toml.data_files}
        data_files_cfg = {(k, *sorted(v)) for k, v in dist_cfg.data_files}
        assert data_files_toml == data_files_cfg

    assert set(dist_toml.install_requires) == set(dist_cfg.install_requires)
    if any(getattr(d, "extras_require", None) for d in (dist_toml, dist_cfg)):
        if (
            "testing" in dist_toml.extras_require
            and "testing" not in dist_cfg.extras_require
        ):
            # ini2toml can automatically convert `tests_require` to `testing` extra
            dist_toml.extras_require.pop("testing")
        extra_req_toml = {(k, *sorted(v)) for k, v in dist_toml.extras_require.items()}
        extra_req_cfg = {(k, *sorted(v)) for k, v in dist_cfg.extras_require.items()}
        assert extra_req_toml == extra_req_cfg


PEP621_EXAMPLE = """\
[project]
name = "spam"
version = "2020.0.0"
description = "Lovely Spam! Wonderful Spam!"
readme = "README.rst"
requires-python = ">=3.8"
license = {file = "LICENSE.txt"}
keywords = ["egg", "bacon", "sausage", "tomatoes", "Lobster Thermidor"]
authors = [
  {email = "hi@pradyunsg.me"},
  {name = "Tzu-Ping Chung"}
]
maintainers = [
  {name = "Brett Cannon", email = "brett@python.org"}
]
classifiers = [
  "Development Status :: 4 - Beta",
  "Programming Language :: Python"
]

dependencies = [
  "httpx",
  "gidgethub[httpx]>4.0.0",
  "django>2.1; os_name != 'nt'",
  "django>2.0; os_name == 'nt'"
]

[project.optional-dependencies]
test = [
  "pytest < 5.0.0",
  "pytest-cov[all]"
]

[project.urls]
homepage = "http://example.com"
documentation = "http://readthedocs.org"
repository = "http://github.com"
changelog = "http://github.com/me/spam/blob/master/CHANGELOG.md"

[project.scripts]
spam-cli = "spam:main_cli"

[project.gui-scripts]
spam-gui = "spam:main_gui"

[project.entry-points."spam.magical"]
tomatoes = "spam:main_tomatoes"
"""

PEP621_EXAMPLE_SCRIPT = """
def main_cli(): pass
def main_gui(): pass
def main_tomatoes(): pass
"""


def _pep621_example_project(tmp_path, readme="README.rst"):
    pyproject = tmp_path / "pyproject.toml"
    text = PEP621_EXAMPLE
    replacements = {'readme = "README.rst"': f'readme = "{readme}"'}
    for orig, subst in replacements.items():
        text = text.replace(orig, subst)
    pyproject.write_text(text)

    (tmp_path / readme).write_text("hello world")
    (tmp_path / "LICENSE.txt").write_text("--- LICENSE stub ---")
    (tmp_path / "spam.py").write_text(PEP621_EXAMPLE_SCRIPT)
    return pyproject


def test_pep621_example(tmp_path):
    """Make sure the example in PEP 621 works"""
    pyproject = _pep621_example_project(tmp_path)
    dist = pyprojecttoml.apply_configuration(makedist(tmp_path), pyproject)
    assert dist.metadata.license == "--- LICENSE stub ---"
    assert set(dist.metadata.license_files) == {"LICENSE.txt"}


@pytest.mark.parametrize(
    "readme, ctype",
    [
        ("Readme.txt", "text/plain"),
        ("readme.md", "text/markdown"),
        ("text.rst", "text/x-rst"),
    ]
)
def test_readme_content_type(tmp_path, readme, ctype):
    pyproject = _pep621_example_project(tmp_path, readme)
    dist = pyprojecttoml.apply_configuration(makedist(tmp_path), pyproject)
    assert dist.metadata.long_description_content_type == ctype


def test_undefined_content_type(tmp_path):
    pyproject = _pep621_example_project(tmp_path, "README.tex")
    with pytest.raises(ValueError, match="Undefined content type for README.tex"):
        pyprojecttoml.apply_configuration(makedist(tmp_path), pyproject)


def test_no_explicit_content_type_for_missing_extension(tmp_path):
    pyproject = _pep621_example_project(tmp_path, "README")
    dist = pyprojecttoml.apply_configuration(makedist(tmp_path), pyproject)
    assert dist.metadata.long_description_content_type is None


# TODO: After PEP 639 is accepted, we have to move the license-files
#       to the `project` table instead of `tool.setuptools`
def test_license_and_license_files(tmp_path):
    pyproject = _pep621_example_project(tmp_path, "README")
    text = pyproject.read_text(encoding="utf-8")

    # Sanity-check
    assert 'license = {file = "LICENSE.txt"}' in text
    assert "[tool.setuptools]" not in text

    text += '\n[tool.setuptools]\nlicense-files = ["_FILE*"]\n'
    pyproject.write_text(text, encoding="utf-8")
    (tmp_path / "_FILE.txt").touch()
    (tmp_path / "_FILE.rst").touch()

    # Would normally match the `license_files` glob patterns, but we want to exclude it
    # by being explicit. On the other hand, its contents should be added to `license`
    (tmp_path / "LICENSE.txt").write_text("LicenseRef-Proprietary\n", encoding="utf-8")

    dist = pyprojecttoml.apply_configuration(makedist(tmp_path), pyproject)
    assert set(dist.metadata.license_files) == {"_FILE.rst", "_FILE.txt"}
    assert dist.metadata.license == "LicenseRef-Proprietary\n"


class TestPresetField:
    def pyproject(self, tmp_path, dynamic, extra_content=""):
        content = f"[project]\nname = 'proj'\ndynamic = {dynamic!r}\n"
        if "version" not in dynamic:
            content += "version = '42'\n"
        file = tmp_path / "pyproject.toml"
        file.write_text(content + extra_content, encoding="utf-8")
        return file

    @pytest.mark.parametrize(
        "attr, field, value",
        [
            ("install_requires", "dependencies", ["six"]),
            ("classifiers", "classifiers", ["Private :: Classifier"]),
        ]
    )
    def test_not_listed_in_dynamic(self, tmp_path, attr, field, value):
        """For the time being we just warn if the user pre-set values (e.g. via
        ``setup.py``) but do not include them in ``dynamic``.
        """
        pyproject = self.pyproject(tmp_path, [])
        dist = makedist(tmp_path, **{attr: value})
        msg = re.compile(f"defined outside of `pyproject.toml`:.*{field}", re.S)
        with pytest.warns(_WouldIgnoreField, match=msg):
            dist = pyprojecttoml.apply_configuration(dist, pyproject)

        # TODO: Once support for pyproject.toml config stabilizes attr should be None
        dist_value = _some_attrgetter(f"metadata.{attr}", attr)(dist)
        assert dist_value == value

    @pytest.mark.parametrize(
        "attr, field, value",
        [
            ("install_requires", "dependencies", []),
            ("extras_require", "optional-dependencies", {}),
            ("install_requires", "dependencies", ["six"]),
            ("classifiers", "classifiers", ["Private :: Classifier"]),
        ]
    )
    def test_listed_in_dynamic(self, tmp_path, attr, field, value):
        pyproject = self.pyproject(tmp_path, [field])
        dist = makedist(tmp_path, **{attr: value})
        dist = pyprojecttoml.apply_configuration(dist, pyproject)
        dist_value = _some_attrgetter(f"metadata.{attr}", attr)(dist)
        assert dist_value == value

    def test_optional_dependencies_dont_remove_env_markers(self, tmp_path):
        """
        Internally setuptools converts dependencies with markers to "extras".
        If ``install_requires`` is given by ``setup.py``, we have to ensure that
        applying ``optional-dependencies`` does not overwrite the mandatory
        dependencies with markers (see #3204).
        """
        # If setuptools replace its internal mechanism that uses `requires.txt`
        # this test has to be rewritten to adapt accordingly
        extra = "\n[project.optional-dependencies]\nfoo = ['bar>1']\n"
        pyproject = self.pyproject(tmp_path, ["dependencies"], extra)
        install_req = ['importlib-resources (>=3.0.0) ; python_version < "3.7"']
        dist = makedist(tmp_path, install_requires=install_req)
        dist = pyprojecttoml.apply_configuration(dist, pyproject)
        assert "foo" in dist.extras_require
        assert ':python_version < "3.7"' in dist.extras_require
        egg_info = dist.get_command_obj("egg_info")
        write_requirements(egg_info, tmp_path, tmp_path / "requires.txt")
        reqs = (tmp_path / "requires.txt").read_text(encoding="utf-8")
        assert "importlib-resources" in reqs
        assert "bar" in reqs


# --- Auxiliary Functions ---


NAME_REMOVE = ("http://", "https://", "github.com/", "/raw/")


def retrieve_file(url, download_dir):
    file_name = url.strip()
    for part in NAME_REMOVE:
        file_name = file_name.replace(part, '').strip().strip('/:').strip()
    file_name = re.sub(r"[^\-_\.\w\d]+", "_", file_name)
    path = Path(download_dir, file_name)
    if not path.exists():
        download_dir.mkdir(exist_ok=True, parents=True)
        download(url, path)
    return path


def download(url, dest):
    with urlopen(url) as f:
        data = f.read()

    with open(dest, "wb") as f:
        f.write(data)

    assert Path(dest).exists()


def core_metadata(dist) -> str:
    with io.StringIO() as buffer:
        dist.metadata.write_pkg_file(buffer)
        value = "\n".join(buffer.getvalue().strip().splitlines())

    # ---- DIFF NORMALISATION ----
    # PEP 621 is very particular about author/maintainer metadata conversion, so skip
    value = re.sub(r"^(Author|Maintainer)(-email)?:.*$", "", value, flags=re.M)
    # May be redundant with Home-page
    value = re.sub(r"^Project-URL: Homepage,.*$", "", value, flags=re.M)
    # May be missing in original (relying on default) but backfilled in the TOML
    value = re.sub(r"^Description-Content-Type:.*$", "", value, flags=re.M)
    # ini2toml can automatically convert `tests_require` to `testing` extra
    value = value.replace("Provides-Extra: testing\n", "")
    # Remove empty lines
    value = re.sub(r"^\s*$", "", value, flags=re.M)
    value = re.sub(r"^\n", "", value, flags=re.M)

    return value