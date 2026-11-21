import sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).resolve().parents[1] / 'scripts'))
from partition_update_guard import plan

import unittest
class GuardTests(unittest.TestCase):
    def setUp(self):
        self.a={"sha256":"a"*64,"bytes":10}
        self.b={"sha256":"b"*64,"bytes":12}
        self.base={"index.html":self.a,"modules/english/unit.html":self.a,
                   "modules/math/unit.html":self.a,"auth-v2/client.js":self.a}
    def test_preserves_other_subject_and_auth(self):
        curr={**self.base,"modules/english/unit.html":self.b}
        p=plan(self.base,curr,["modules/english/"])
        self.assertEqual(p["completeManifest"]["modules/math/unit.html"],self.a)
        self.assertEqual(p["completeManifest"]["auth-v2/client.js"],self.a)
        self.assertEqual(p["changedBytes"],12)
        self.assertFalse(p["deploy"])
    def test_delta_only_rejected(self):
        with self.assertRaises(ValueError):plan(self.base,{"modules/english/unit.html":self.b},["modules/english"])
    def test_deletion_rejected(self):
        x=dict(self.base);del x["modules/math/unit.html"]
        with self.assertRaises(ValueError):plan(self.base,x,["modules/math"])
    def test_outside_scope(self):
        with self.assertRaises(ValueError):plan(self.base,{**self.base,"index.html":self.b},["modules/english"])
    def test_backend_even_explicit_scope_rejected(self):
        with self.assertRaises(ValueError):plan(self.base,{**self.base,"auth-v2/client.js":self.b},["auth-v2"])
    def test_budget(self):
        with self.assertRaises(ValueError):plan(self.base,self.base,["modules/english"],max_bytes=1)
    def test_noop(self):
        self.assertTrue(plan(self.base,self.base,["modules/english"])["skipPublication"])
    def test_shared_scope_explicit(self):
        self.assertEqual(plan(self.base,{**self.base,"index.html":self.b},["index.html"])["changedPaths"],["index.html"])
    def test_missing_dependency(self):
        with self.assertRaises(ValueError):plan(self.base,self.base,["modules/english"],{"index.html":["missing.js"]})
    def test_traversal(self):
        with self.assertRaises(ValueError):plan(self.base,{**self.base,"../secret":self.a},["modules"])
    def test_bad_hash(self):
        with self.assertRaises(ValueError):plan(self.base,{**self.base,"index.html":{"sha256":"x","bytes":4}},["index.html"])
    def test_directory_boundary(self):
        with self.assertRaises(ValueError):plan(self.base,{**self.base,"modules/english-other/a":self.a},["modules/english"])
unittest.main()
