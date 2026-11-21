from pathlib import Path
import importlib.util,unittest,json
spec=importlib.util.spec_from_file_location('splitter',Path(__file__).with_name('two-pages-stage.py'));m=importlib.util.module_from_spec(spec);spec.loader.exec_module(m)
class Paths(unittest.TestCase):
 def check(self,before,after):
  result,n=m.rewrite_asset_paths(before);self.assertEqual(result,after);self.assertEqual(m.rewrite_asset_paths(result),(after,0))
 def test_relative(self):self.check('images/story/x.png','https://pc007ya.github.io/Learning_Planet_Assets/images/story/x.png')
 def test_root(self):self.check('/images/story/x.png','https://pc007ya.github.io/Learning_Planet_Assets/images/story/x.png')
 def test_dot(self):self.check('../../images/story/x.png','https://pc007ya.github.io/Learning_Planet_Assets/images/story/x.png')
 def test_html(self):self.check('<img src="/images/story/x.png">','<img src="https://pc007ya.github.io/Learning_Planet_Assets/images/story/x.png">')
 def test_unquoted(self):self.check('<img src=images/story/x.png>','<img src=https://pc007ya.github.io/Learning_Planet_Assets/images/story/x.png>')
 def test_css(self):self.check("url('../images/science/x.png')","url('https://pc007ya.github.io/Learning_Planet_Assets/images/science/x.png')")
 def test_template(self):self.check('`images/story/${book}/${page}.png`','`https://pc007ya.github.io/Learning_Planet_Assets/images/story/${book}/${page}.png`')
 def test_json(self):self.check('{"image":"images/story-vocabulary/x.webp"}','{"image":"https://pc007ya.github.io/Learning_Planet_Assets/images/story-vocabulary/x.webp"}')
 def test_absolute(self):
  for url in ['https://example.com/images/story/x.png','http://example.com/images/science/x.png','//example.com/images/story/x.png','https://example.com/?next=images/story/x.png','data:text/plain,images/story/x.png']:
   with self.subTest(url=url):self.check(url,url)
 def test_already_rewritten(self):self.check('https://pc007ya.github.io/Learning_Planet_Assets/images/story/x.png','https://pc007ya.github.io/Learning_Planet_Assets/images/story/x.png')
 def test_unrelated_path(self):
  for p in ['other/images/story/x.png','myimages/story/x.png','/images/storybook/x.png']:
   with self.subTest(p=p):self.check(p,p)
 def test_guard(self):
  old='t.image.startsWith("images/")?t.image:base+t.image';new=m.patch_reader_guard(old);self.assertNotEqual(old,new);self.assertEqual(m.patch_reader_guard(new),new)
if __name__=='__main__':unittest.main()
