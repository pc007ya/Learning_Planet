from pathlib import Path
import shutil,fnmatch,hashlib,json
root=Path(__file__).resolve().parent
excluded=['_site','node_modules','.git','.github','functions','firebase-debug.log','src','tests','modules/math-mission-map/v11/qa','docs','qa','science-curriculum-preview.html','nature-planet-preview.html','*.check.mjs','*.test.mjs']
def ignore(base,names):
 return [n for n in names if any(fnmatch.fnmatchcase((Path(base)/n).relative_to(current).as_posix() if '/' in pat else n,pat) for pat in excluded)]
def stage(name):
 global current
 current=root/name; dest=root/(name+'-site')
 shutil.copytree(current,dest,ignore=ignore)
 (dest/'src').mkdir(exist_ok=True);shutil.copy2(current/'src/firebase-config.js',dest/'src/firebase-config.js')
 p=dest/'index.html';html=p.read_text();token='97690c088436400287798663727583b5';snippet='''<!-- Cloudflare Web Analytics --><script type='module' src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "97690c088436400287798663727583b5"}'></script><!-- End Cloudflare Web Analytics -->'''
 if token not in html:html=html.replace('</body>',snippet+'\n</body>',1) if '</body>' in html else html+'\n'+snippet+'\n';p.write_text(html)
 return {p.relative_to(dest).as_posix():{'sha256':hashlib.file_digest(p.open('rb'),'sha256').hexdigest(),'bytes':p.stat().st_size} for p in sorted(dest.rglob('*')) if p.is_file()}
a=stage('clean');b=stage('cached');different=[p for p in a.keys()|b.keys() if a.get(p)!=b.get(p)];result={'same':a==b,'cleanFiles':len(a),'cachedFiles':len(b),'cleanBytes':sum(x['bytes'] for x in a.values()),'cachedBytes':sum(x['bytes'] for x in b.values()),'differences':different,'method':'Python materialized staging using exact workflow exclude patterns, explicit firebase-config copy and analytics injection; rsync unavailable'}
(root/'stage-comparison.json').write_text(json.dumps(result,indent=2));(root/'clean-stage-manifest.json').write_text(json.dumps(a,sort_keys=True));(root/'cached-stage-manifest.json').write_text(json.dumps(b,sort_keys=True));print(json.dumps(result));raise SystemExit(0 if a==b else 1)
