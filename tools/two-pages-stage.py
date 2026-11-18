from pathlib import Path
import json,shutil,hashlib,re,subprocess,argparse
PREFIXES=('images/story/','images/story-vocabulary/','images/science/','images/math-grade1/')
BASE='/Learning_Planet_Assets/'
text_ext={'.js','.mjs','.json','.html','.css','.svg'}

# Match only standalone path tokens, never a suffix inside a URL/path.
pattern=re.compile(r'''(?P<boundary>^|[\s"'`(=])(?P<relative>(?:(?:\.\./|\./)+|/)?)(?P<asset>images/(?:story/|story-vocabulary/|science/|math-grade1/))''',re.MULTILINE)

def rewrite_asset_paths(text):
 count=0
 def replace(match):
  nonlocal count
  # '=' is needed for unquoted HTML attrs, but must not rewrite URL query values.
  start=match.start()
  token_start=max([text.rfind(c,0,start) for c in " \t\r\n\"'`(<"])+1
  token_prefix=text[token_start:start]
  if re.match(r'^[A-Za-z][A-Za-z0-9+.-]*:',token_prefix) or token_prefix.startswith('//'):
   return match.group(0)
  count+=1
  return match.group('boundary')+BASE+match.group('asset')
 return pattern.sub(replace,text),count

def patch_reader_guard(text):
 old='t.image.startsWith("images/")'
 new='(t.image.startsWith("images/") || t.image.startsWith("/Learning_Planet_Assets/"))'
 return re.sub(re.escape(old)+r'(?!\s*\|\|\s*t\.image\.startsWith\("/Learning_Planet_Assets/"\))',lambda _:new,text)

def main():
 parser=argparse.ArgumentParser(description='Offline two-Pages staging candidate; NEVER deploys')
 parser.add_argument('source');parser.add_argument('output');args=parser.parse_args()
 ROOT=Path(args.source).resolve();OUT=Path(args.output).resolve()
 if not ROOT.is_dir() or OUT==ROOT or ROOT in OUT.parents or OUT in ROOT.parents:raise SystemExit('Require disjoint source/output directories')
 if OUT.exists():raise SystemExit('Output must be a fresh directory')
 OUT.mkdir(parents=True)
 manifest={}; rewrites={}; original={}; syntax=[]
 for p in sorted(ROOT.rglob('*')):
  if not p.is_file():continue
  rel=p.relative_to(ROOT).as_posix(); data=p.read_bytes(); original[rel]=hashlib.sha256(data).hexdigest(); unit='assets' if rel.startswith(PREFIXES) else 'app'
  if unit=='app' and p.suffix in text_ext:
   text=data.decode('utf-8'); text,count=rewrite_asset_paths(text)
   if count:
    rewrites[rel]=count
    # Existing story reader distinguishes global asset paths from book-relative paths.
    # This is an exact expression patch, not a broad src setter interception.
    text=patch_reader_guard(text)
    data=text.encode('utf-8')
   if p.suffix=='.json':json.loads(data)
  dest=OUT/unit/rel;dest.parent.mkdir(parents=True,exist_ok=True);dest.write_bytes(data)
  manifest[rel]={'unit':unit,'bytes':len(data),'sha256':hashlib.sha256(data).hexdigest(),'url':BASE+rel if unit=='assets' else '/Learning_Planet/'+rel}
  if rel in rewrites and p.suffix in {'.js','.mjs'}:syntax.append(str(dest))
 for unit in ('app','assets'):(OUT/unit/'.nojekyll').write_text('')
 (OUT/'assets/index.html').write_text('<!doctype html><meta charset="utf-8"><meta name="robots" content="noindex"><title>Learning Planet assets</title><p>Public learning assets. No sign-in here.</p>')
 assert len(manifest)==len(original)
 assert not any(k.endswith(('.js','.mjs','.html')) and v['unit']=='assets' for k,v in manifest.items())
 assert all(v['sha256']==original[k] for k,v in manifest.items() if v['unit']=='assets')
 assert all(v['unit']=='app' and v['sha256']==original[k] for k,v in manifest.items() if k.startswith(('auth-v2/','roles/','src/firebase-config')))
 assert all(v['unit']=='app' for k,v in manifest.items() if k.endswith('.html'))
 for unit in ('app','assets'):assert sum(v['bytes'] for v in manifest.values() if v['unit']==unit)<1_000_000_000
 # Whole moved prefix must be absent from app and complete at asset destination.
 assert all(not(OUT/'app'/k).exists() and (OUT/'assets'/k).is_file() for k,v in manifest.items() if v['unit']=='assets')
 for f in syntax:subprocess.run(['node','--check',f],check=True,capture_output=True)
 report={'baselineFiles':len(manifest),'app':{'files':1+sum(v['unit']=='app' for v in manifest.values()),'bytes':sum(v['bytes'] for v in manifest.values() if v['unit']=='app')},'assets':{'files':1+sum(v['unit']=='assets' for v in manifest.values()),'bytes':sum(v['bytes'] for v in manifest.values() if v['unit']=='assets')},'rewrittenFiles':rewrites,'jsSyntaxChecked':len(syntax),'binaryChanges':0,'authChanges':0,'deploy':False,'blockers':['Second dedicated repository and Pages endpoint do not exist yet','Browser runtime and dynamic resource coverage must pass before deployment','Root-relative asset URLs only describe same-owner GitHub Pages; formal custom domain routing unverified','Very little growth headroom; no lossy compression applied']}
 for unit in ('app','assets'):
  files=[p for p in (OUT/unit).rglob('*') if p.is_file()]
  report[unit]={'files':len(files),'bytes':sum(p.stat().st_size for p in files)}
  assert report[unit]['bytes']<1_000_000_000
 (OUT/'split-manifest.json').write_text(json.dumps(manifest,sort_keys=True));(OUT/'split-report.json').write_text(json.dumps(report,indent=2));print(json.dumps(report))

if __name__ == "__main__":
 main()
