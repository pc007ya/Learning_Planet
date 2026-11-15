import pathlib,json,copy,sys
root=pathlib.Path(__file__).resolve().parents[1]/'data/science-curriculum'
c=json.loads((root/'catalog.json').read_text());e=json.loads((root/'exercises.json').read_text());out=root/'scoped';out.mkdir(exist_ok=True)
for p,code in [('康軒','kh'),('南一','na')]:
 for g in range(1,7):
  for t in [1,2]:
   units=[u for u in c['units'] if (u['publisher'],u['grade'],u['semester'])==(p,g,t)];ids={u['id'] for u in units}; cc=copy.deepcopy(c);cc['units']=units;cc['sources']={k:v for k,v in c['sources'].items() if k in {u['source_id'] for u in units}}
   ee=copy.deepcopy(e);ee['questions']=[q for q in e['questions'] if q['unit_id'] in ids];qids={q['id'] for q in ee['questions']};ee['tasks']=[v for v in ee['tasks'] if v['unit_id'] in ids]
   for v in ee['tasks']:
    if 'applicable_unit_ids' in v:v['applicable_unit_ids']=[i for i in v['applicable_unit_ids'] if i in ids]
   for k in ['excluded_from_core','corrections']:ee['question_policy'][k]=[v for v in ee['question_policy'][k] if v['question_id'] in qids]
   for name,j in [('catalog',cc),('exercises',ee)]:
    path=out/f'{code}-g{g}-t{t}-{name}.json';text=json.dumps(j,ensure_ascii=False,separators=(',',':'))+'\n'
    if '--verify' in sys.argv:
     if not path.exists() or path.read_text()!=text:raise SystemExit('Stale scoped curriculum: '+str(path))
    else:path.write_text(text)
