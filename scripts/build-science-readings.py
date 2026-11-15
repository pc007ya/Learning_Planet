#!/usr/bin/env python3
"""Build subject-specific dictionary subset. Supply original MOE JSON as argument.
No dictionary definitions are copied. Keep attribution and unchanged pronunciation values.
"""
import json,re,sys,hashlib
from pathlib import Path
root=Path(__file__).resolve().parents[1]
def read(p):return json.loads(p.read_text())
def corpus():
 out=[]
 for scope in ['', 'legacy/']:
  for q in read(root/f'data/science-curriculum/{scope}exercises.json')['questions']:
   for field in ['stem','explanation']:out.append((q['id'],field,q[field]))
   for i,t in enumerate(q['options']):out.append((q['id'],f'option{i}',t))
  for u in read(root/f'data/science-curriculum/{scope}catalog.json')['units']:
   out.append((u['id'],'title',u['title']))
   for a in u.get('activities',[]):out.append((a['id'],'title',a['title']))
 return out
if __name__=='__main__':
 source=Path(sys.argv[1]);entries=read(source);rows=corpus();texts='\n'.join(r[2] for r in rows);lex={};amb={}
 for e in entries:
  t=e['title']
  if not re.fullmatch(r'[\u3400-\u9fff]+',t) or t not in texts:continue
  rs={h.get('bopomofo','') for h in e.get('heteronyms',[])}
  rs={r for r in rs if len(r.split())==len(t) and re.fullmatch(r'[ㄅ-ㄩ˙ˊˇˋ\s]+',r)}
  if len(rs)==1:lex[t]=next(iter(rs)).split()
  elif rs:amb[t]=sorted(rs)
 for name in ['sounds-single.json','sounds-single-grades45.json']:
  for c,r in read(root/'src/chinese-practice'/name).items():lex.setdefault(c,[r])
 ctx=read(root/'modules/science-curriculum/readings/context.json');chars=ctx['characters'].split()
 for i in range(0,len(chars),2):lex[chars[i]]=[chars[i+1]]
 for t,r in ctx['phrases'].items():
  assert len(t)==len(r.split()),t
  lex[t]=r.split()
 out={'version':1,'source':'教育部重編國語辭典修訂本（g0v JSON 格式轉換）＋既有單音字表＋固定教學語料語境補充','source_sha256':hashlib.sha256(source.read_bytes()).hexdigest(),'lexicon':lex,'contextPhrases':{k:v.split() for k,v in ctx['phrases'].items()}}
 dest=root/'modules/science-curriculum/readings/lexicon.json';dest.write_text(json.dumps(out,ensure_ascii=False,separators=(',',':'))+'\n')
 print(f'{len(rows)} text fields; {len(lex)} readings; {dest.stat().st_size} bytes')
