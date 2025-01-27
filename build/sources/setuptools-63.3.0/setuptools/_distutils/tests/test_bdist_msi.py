"""Tests for distutils.command.bdist_msi."""
import sys
import unittest
from distutils.tests import support

from .py38compat import check_warnings


@unittest.skipUnless(sys.platform == 'win32', 'these tests require Windows')
class BDistMSITestCase(
    support.TempdirManager, support.LoggingSilencer, unittest.TestCase
):
    def test_minimal(self):
        # minimal test XXX need more tests
        from distutils.command.bdist_msi import bdist_msi

        project_dir, dist = self.create_dist()
        with check_warnings(("", DeprecationWarning)):
            cmd = bdist_msi(dist)
        cmd.ensure_finalized()
