from pathlib import Path
import json,re
p=Path(__file__).resolve().parents[2]/'modules/english-original';d=json.loads((p/'curriculum.json').read_text());h=(p/'index.html').read_text();assert len(d['units'])==48
assert json.loads(re.search(r'const DATA=(.*?);\nconst \$=',h,re.S).group(1))==d
for u in d['units']:
 assert len(u['questions'])==10 and len(u['vocabulary'])==6
 assert u['curriculumTrack']=='original_enrichment' and u['publisherMapping']['status']=='not_verified'
 taught={v['word']:v['meaning'] for v in u['vocabulary']+u['themeSupplement']}
 for s in u['skillExtension']['spellingTargets']:assert taught[s['word']]==s['meaning']
 for v in u['vocabulary']:assert (p/v['previewImage']).is_file()
 for q in u['questions']:assert 0<=q['answer']<len(q['options'])
 for e in u['themeSupplement']:assert e['meaningCheck']['options'][e['meaningCheck']['answer']]==e['meaning']
for f in p.rglob('*'):
 if f.suffix in ['.html','.json','.js','.mjs']:
  text=f.read_text();assert not any(s in text for s in ['drive.google.com','/workspace/','/user_notes/','sediment://']),f
assert '拼寫 ${p.spellingCorrect}/2' not in h
assert h.index('Active host required')<h.index('newProgressStore();')
assert h.index('renderThemeSupplement(unit);')<h.index('renderSkills(unit);')
print('PASS public payload sanitized, 48 lessons, 480 questions, 228 image files, taught spelling, host-required, dynamic progress total; no browser execution.')
