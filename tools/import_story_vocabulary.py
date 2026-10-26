"""Import approved individual cards, without altering words or source artwork."""
import argparse,csv,hashlib,json,re
from pathlib import Path
from concurrent.futures import ThreadPoolExecutor
from PIL import Image
parser=argparse.ArgumentParser();parser.add_argument('source',type=Path);parser.add_argument('--audit-only',action='store_true');args=parser.parse_args()
source=args.source; root=Path(__file__).resolve().parents[1]
books=[];words=[];missing=[]
def norm(s):return re.sub(r'[_\s]+',' ',s).replace('’',"'").casefold().strip()
for d in sorted((d for d in source.iterdir() if d.is_dir() and re.match(r'^\d+\.',d.name)),key=lambda d:int(d.name.split('.')[0])):
 book=int(d.name.split('.')[0]);title=d.name.split('.',1)[1].split('_單字卡')[0];records=[]
 mf=d/'manifest.json'
 if mf.exists():
  m=json.loads(mf.read_text());records=next((m[k] for k in ['cards','words','files','records'] if isinstance(m.get(k),list)),[])
 labels={};ordered=[]
 for r in records:
  fn=r.get('filename',r.get('file',''));en=r.get('english',r.get('label_en',r.get('word','')));zh=r.get('traditional_chinese',r.get('label_zh',r.get('zh','')))
  if fn and en and zh:labels[fn]=(en,zh);ordered.append(fn)
 for f in sorted(d.glob('*.txt')):
  for line in f.read_text(encoding='utf-8-sig').splitlines():
   mat=re.match(r'^(\d+_[^\t]+\.png)\t([^\t]+)\t(.+)$',line)
   if not mat:mat=re.match(r'^(\d+_.+?\.png)\s*(?:—\s*)?([^：]+)：(.+)$',line)
   if mat:
    fn,en,zh=mat.groups();labels[fn]=(en.strip(),zh.strip())
    if fn not in ordered:ordered.append(fn)
 for f in d.glob('*.csv'):
  for r in csv.DictReader(f.open(encoding='utf-8-sig')):
   if r.get('檔名') and r.get('英文') and r.get('繁體中文'):
    fn=r['檔名'];labels[fn]=(r['英文'],r['繁體中文']);
    if fn not in ordered:ordered.append(fn)
 if book==54:
  vocab=json.loads((source.parent/'英文繪本/54.瑜瑜與海底世界/ebook/vocabulary.json').read_text())
  for r in vocab:
   fn='54_'+r['word'].capitalize().replace(' ','_')+'.png';labels[fn]=(r['word'],r['zh']);ordered.append(fn)
 if book==55:
  text=(source.parent/'英文繪本/55.瑜瑜與孩子們去遊樂園/55_瑜瑜與孩子們去遊樂園.md').read_text()
  for r in json.loads((d/'製作與裁切紀錄.json').read_text())['cards']:
   en=r['word'];zh=''
   for line in text.splitlines():
    parts=[x.strip().strip('*') for x in line.split('|')]
    for i,x in enumerate(parts[:-1]):
     if norm(x)==norm(en):zh=parts[i+1];break
    if zh:break
   labels[r['file']]=(en,zh);ordered.append(r['file'])
 files={f.name:f for f in d.rglob('*.png') if re.match(r'^0?'+str(book)+r'_.+\.png$',f.name)}
 ordered=list(dict.fromkeys(ordered+[f for f in sorted(files) if f not in ordered]))
 count=0
 for fn in ordered:
  if fn not in files:continue
  if fn not in labels or not all(labels[fn]):missing.append((book,fn));continue
  en,zh=labels[fn];count+=1;f=files[fn];sid=f'{book:02d}-{count:02d}';sha=hashlib.sha256(f.read_bytes()).hexdigest()
  words.append(dict(id=sid,book=book,bookTitle=title,order=count,word=en,meaning=zh,image=f'images/story-vocabulary/{book:02d}/{sid}.webp',source=str(f.relative_to(source)),sourceSha256=sha))
 books.append(dict(number=book,title=title,count=count))
print('Books',len(books),'Cards',len(words),'Missing labels',missing)
assert not missing,missing
assert len(books)==55 and all(b['count'] for b in books)
if args.audit_only:raise SystemExit
# Lossless format conversion only: preserve full dimensions, colors and transparency.
def export(w):
 f=source/w['source'];dest=root/w['image'];dest.parent.mkdir(parents=True,exist_ok=True)
 with Image.open(f) as im:
  im.save(dest,'WEBP',lossless=True,method=4,exact=True)
  w['width'],w['height']=im.size
with ThreadPoolExecutor(max_workers=6) as pool:list(pool.map(export,words))
out=dict(version=1,books=books,words=words,totalCards=len(words),uniqueWords=len({norm(w['word']) for w in words}))
(root/'data/story-vocabulary.json').write_text(json.dumps(out,ensure_ascii=False,separators=(',',':'))+'\n')
print('Exported',len(words),'cards; distinct terms:',out['uniqueWords'])
