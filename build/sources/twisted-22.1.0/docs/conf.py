#
# Twisted documentation build configuration file, created by
# sphinx-quickstart on Tue Jan 14 11:31:15 2014.
#
# This file is execfile()d with the current directory set to its
# containing dir.
#
# Note that not all possible configuration values are present in this
# autogenerated file.
#
# All configuration values have a default; values that are commented out
# serve to show the default.

import os
import pathlib
import subprocess
import sys
from datetime import date
from pprint import pprint

# If extensions (or modules to document with autodoc) are in another directory,
# add these directories to sys.path here. If the directory is relative to the
# documentation root, use os.path.abspath to make it absolute, like shown here.
sys.path.insert(0, os.path.abspath("./_extensions"))
sys.path.insert(0, os.path.abspath(".."))

# -- General configuration ------------------------------------------------

# See setup.cfg for the Sphinx version required to build the documentation.
# needs_sphinx is not use to avoid duplication and getting these values
# out of sync.

# Add any Sphinx extension module names here, as strings. They can be
# extensions coming with Sphinx (named 'sphinx.ext.*') or your custom
# ones.
extensions = [
    "sphinx.ext.intersphinx",
    "pydoctor.sphinx_ext.build_apidocs",
]

try:
    import rst2pdf.pdfbuilder

    extensions.append("rst2pdf.pdfbuilder")
except ImportError:
    pass

extensions.append("traclinks")

from twisted import version as twisted_version_object

# Add any paths that contain templates here, relative to this directory.
templates_path = ["_templates"]

# The suffix of source filenames.
source_suffix = ".rst"

# The encoding of source files.
# source_encoding = 'utf-8-sig'

# The master toctree document.
master_doc = "index"

_today = date.today()
# General information about the project.
project = "Twisted"
copyright = "{}, Twisted Matrix Labs. Ver {}. Built on {}".format(
    _today.year,
    twisted_version_object.public(),
    _today.isoformat(),
)

# The version info for the project you're documenting, acts as replacement for
# |version| and |release|, also used in various other places throughout the
# built documents.
#
# The short X.Y version.
version = "{major}.{minor}".format(
    major=twisted_version_object.major, minor=twisted_version_object.minor
)
# The full version, including alpha/beta/rc tags.
release = twisted_version_object.short()

# There are two options for replacing |today|: either, you set today to some
# non-false value, then it is used:
# today = ''
# Else, today_fmt is used as the format for a strftime call.
# today_fmt = '%B %d, %Y'

# List of patterns, relative to source directory, that match files and
# directories to ignore when looking for source files.
exclude_patterns = ["_build"]

# The name of the Pygments (syntax highlighting) style to use.
pygments_style = "sphinx"

# -- Options for HTML output ----------------------------------------------

# The theme to use for HTML and HTML Help pages.  See the documentation for
# a list of builtin themes.

# See Read The Docs environment variables
# https://docs.readthedocs.io/en/stable/builds.html#build-environment
on_rtd = os.environ.get("READTHEDOCS", None) == "True"

if not on_rtd:
    html_theme = "twistedtrac"

# Add any paths that contain custom themes here, relative to this directory.
html_theme_path = ["_themes"]

# Add any paths that contain custom static files (such as style sheets) here,
# relative to this directory. They are copied after the builtin static files,
# so a file named "default.css" will overwrite the builtin "default.css".
html_static_path = ["_static"]


# These paths are either relative to html_static_path
# or fully qualified paths (eg. https://...)
html_js_files = [
    "js/custom.js",
    # Here we have a Sphinx HTML injection hack to make the JS script load without blocking.
    'https://sidecar.gitter.im/dist/sidecar.v1.js" defer hack="',
]

# Output file base name for HTML help builder.
htmlhelp_basename = "Twisteddoc"


# -- Options for LaTeX output ---------------------------------------------

latex_elements = {
    # The paper size ('letterpaper' or 'a4paper').
    #'papersize': 'letterpaper',
    # The font size ('10pt', '11pt' or '12pt').
    #'pointsize': '10pt',
    # Additional stuff for the LaTeX preamble.
    #'preamble': '',
}

# Grouping the document tree into LaTeX files. List of tuples
# (source start file, target name, title,
#  author, documentclass [howto, manual, or own class]).
latex_documents = [
    ("index", "Twisted.tex", "Twisted Documentation", "Twisted Matrix Labs", "manual"),
]


# -- Options for manual page output ---------------------------------------

# One entry per manual page. List of tuples
# (source start file, name, description, authors, manual section).
man_pages = [("index", "twisted", "Twisted Documentation", ["Twisted Matrix Labs"], 1)]


# -- Options for Texinfo output -------------------------------------------

# Grouping the document tree into Texinfo files. List of tuples
# (source start file, target name, title, author,
#  dir menu entry, description, category)
texinfo_documents = [
    (
        "index",
        "Twisted",
        "Twisted Documentation",
        "Twisted Matrix Labs",
        "Twisted",
        "One line description of project.",
        "Miscellaneous",
    ),
]


# -- Options for Epub output ----------------------------------------------

# Bibliographic Dublin Core info.
epub_title = "Twisted"
epub_author = "Twisted Matrix Labs"
epub_publisher = "Twisted Matrix Labs"
epub_copyright = "2020, Twisted Matrix Labs"


# -- Extension configuration ----------------------------------------------
_git_reference = subprocess.run(
    ["git", "rev-parse", "--abbrev-ref", "HEAD"],
    text=True,
    encoding="utf8",
    capture_output=True,
    check=True,
).stdout


print(f"== Environment dump for {_git_reference} ===")
pprint(dict(os.environ))
print("======")

# Base url for API docs
api_base_url = f"/documents/{release}/api/"
if on_rtd:
    # For a PR the link is like:
    # https://twisted--1422.org.readthedocs.build/en/1422/
    # For a release:
    # https://docs.twistedmatrix.com/en/twisted-20.3.0/
    # https://docs.twistedmatrix.com/en/latest/
    api_base_url = "/{}/{}/api/".format(
        os.environ["READTHEDOCS_LANGUAGE"],
        os.environ["READTHEDOCS_VERSION"],
    )

# Try to find URL fragment for the GitHub source page based on current
# branch or tag.

if _git_reference == "HEAD":
    # It looks like the branch has no name.
    # Fallback to commit ID.
    _git_reference = subprocess.getoutput("git rev-parse HEAD")

if os.environ.get("READTHEDOCS", "") == "True":
    rtd_version = os.environ.get("READTHEDOCS_VERSION", "")
    if "." in rtd_version:
        # It looks like we have a tag build.
        _git_reference = rtd_version

_source_root = pathlib.Path(__file__).parent.parent / "src"
pydoctor_args = [
    "--quiet",
    f"--html-viewsource-base=https://github.com/twisted/twisted/tree/{_git_reference}/src",
    "--project-name=Twisted",
    "--project-url=https://twistedmatrix.com/",
    "--system-class=twisted.python._pydoctor.TwistedSystem",
    "--docformat=epytext",
    "--intersphinx=https://docs.python.org/3/objects.inv",
    "--intersphinx=https://cryptography.io/en/latest/objects.inv",
    "--intersphinx=https://pyopenssl.readthedocs.io/en/stable/objects.inv",
    "--intersphinx=https://hyperlink.readthedocs.io/en/stable/objects.inv",
    "--intersphinx=https://twisted.org/constantly/docs/objects.inv",
    "--intersphinx=https://twisted.org/incremental/docs/objects.inv",
    "--intersphinx=https://python-hyper.org/projects/hyper-h2/en/stable/objects.inv",
    "--intersphinx=https://priority.readthedocs.io/en/stable/objects.inv",
    "--intersphinx=https://zopeinterface.readthedocs.io/en/latest/objects.inv",
    "--intersphinx=https://automat.readthedocs.io/en/latest/objects.inv",
    f"--project-base-dir={_source_root}",
    "--html-output={outdir}/api",
    str(_source_root / "twisted"),
]

pydoctor_url_path = "/en/{rtd_version}/api/"

traclinks_base_url = "https://twistedmatrix.com/trac"

# A dict mapping unique IDs (which can be used to disambiguate references) to a
# tuple of (<external sphinx documentation URI>, <inventory file location>).
# The inventory file may be None to use the default location at the given URI.
intersphinx_mapping = {
    "py3": ("https://docs.python.org/3", None),
    "zopeinterface": ("https://zopeinterface.readthedocs.io/en/latest", None),
}
# How long to cache remote inventories. Positive is a number of days,
# negative means infinite. The default is 5 days, which should be fine
# for standard library documentation that does not typically change
# significantly after release.
# intersphinx_cache_limit = 5