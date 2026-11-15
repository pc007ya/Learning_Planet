"""Reproducible, lossless source-preserving integration by grade/semester."""
import pathlib,json,copy,sys
root=pathlib.Path(__file__).resolve().parents[1]/'data/science-curriculum'
c=json.loads((root/'catalog.json').read_text());e=json.loads((root/'exercises.json').read_text());groups=json.loads((root/'integration-map.json').read_text())['groups'];out=root/'scoped'
original={u['id']:u for u in c['units']};mapping={i:g['canonical_id'] for g in groups for i in g['source_unit_ids']}
assert len(mapping)==len(original) and set(mapping)==set(original)
for grade in range(1,7):
 for term in [1,2]:
  cc=copy.deepcopy(c);cc['integrated']=True;cc['units']=[]
  chosen=[g for g in groups if (g['grade'],g['semester'])==(grade,term)];ids={i for g in chosen for i in g['source_unit_ids']}
  for group in chosen:
   u=copy.deepcopy(original[group['canonical_id']]);u.update(title=group['title'],source_unit_ids=group['source_unit_ids'],source_titles=group['source_titles'],source_ids=list(dict.fromkeys(original[i]['source_id'] for i in group['source_unit_ids'])))
   u['activities']=[copy.deepcopy(a) for i in group['source_unit_ids'] for a in original[i]['activities']];cc['units'].append(u)
  cc['sources']={k:v for k,v in c['sources'].items() if k in {original[i]['source_id'] for i in ids}}
  ee=copy.deepcopy(e);ee['questions']=[copy.deepcopy(q) for q in e['questions'] if q['unit_id'] in ids];ee['tasks']=[copy.deepcopy(t) for t in e['tasks'] if ids.intersection(t.get('applicable_unit_ids',[t['unit_id']]))]
  for q in ee['questions']:q['source_unit_id']=q['unit_id'];q['unit_id']=mapping[q['unit_id']]
  for task in ee['tasks']:
   source_id=task['unit_id'];task['source_unit_id']=source_id
   applicable=list(dict.fromkeys(mapping[i] for i in task.get('applicable_unit_ids',[source_id]) if i in ids))
   # A shared task keeps its ID and source primary, but needs a valid primary in this scope.
   task['unit_id']=mapping[source_id] if source_id in ids else applicable[0]
   if 'applicable_unit_ids' in task:task['applicable_unit_ids']=applicable
  task_by_id={t['id']:t for t in ee['tasks']}
  for task in ee['tasks']:
   for dep_id in task.get('dependencies',[]):
    assert dep_id in task_by_id,'Missing scoped dependency '+dep_id
    dep=task_by_id[dep_id]
    assert set(task.get('applicable_unit_ids',[task['unit_id']])) <= set(dep.get('applicable_unit_ids',[dep['unit_id']])), 'Unreachable scoped dependency '+dep_id
  qids={q['id'] for q in ee['questions']}
  for k in ['excluded_from_core','corrections']:ee['question_policy'][k]=[v for v in ee['question_policy'][k] if v['question_id'] in qids]
  # Keep duplicate source rows/IDs for saved rounds; only exclude exact semantic duplicates from NEW draws.
  corrections={v['question_id']:v['fields'] for v in ee['question_policy']['corrections']};excluded={v['question_id'] for v in ee['question_policy']['excluded_from_core']};seen={}
  for row in ee['questions']:
   q={**row,**corrections.get(row['id'],{})}
   if q['id'] in excluded:continue
   key=json.dumps([q['unit_id'],q['stem'],q['options'],q['answer_index'],q['explanation'],q.get('core_practice_eligible',True)],ensure_ascii=False)
   if key in seen:ee['question_policy']['excluded_from_core'].append({'question_id':q['id'],'reason':'整併後與 '+seen[key]+' 完全相同，保留來源及舊紀錄，新的核心練習不重複抽取。'})
   else:seen[key]=q['id']
  for name,data in [('catalog',cc),('exercises',ee)]:
   path=out/f'all-g{grade}-t{term}-{name}.json';text=json.dumps(data,ensure_ascii=False,separators=(',',':'))+'\n'
   if '--verify' in sys.argv:
    assert path.exists() and path.read_text()==text,'Stale integration '+str(path)
   else:path.write_text(text)
