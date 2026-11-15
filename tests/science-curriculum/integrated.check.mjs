import test from 'node:test';import assert from 'node:assert/strict';import fs from 'node:fs/promises';
import {loadIntegratedCurriculum} from '../../modules/science-curriculum/scoped-data.mjs';
import {validateCandidateData,createCurriculumEngine} from '../../modules/science-curriculum/engine.mjs';
import {integrateProgress} from '../../modules/science-curriculum/integration-progress.mjs';
const read=async p=>JSON.parse(await fs.readFile(new URL(p,import.meta.url)));const get=async u=>new Response(await fs.readFile(u));
test('12 integrated scopes retain every source activity and question exactly once, valid aliases and only selected downloads',async()=>{
 const original=await read('../../data/science-curriculum/catalog.json'),content=await read('../../data/science-curriculum/exercises.json');let sources=[],activities=[],questions=[];let count=0;
 for(let grade=1;grade<=6;grade++)for(let semester=1;semester<=2;semester++){
  const calls=[];const d=await loadIntegratedCurriculum({grade,semester},{fetcher:async u=>{calls.push(String(u));return get(u)}});
  assert.equal(calls.length,2);assert.ok(calls.every(u=>u.includes(`all-g${grade}-t${semester}-`)));assert.equal(validateCandidateData(d.catalog,d.content).valid,true);
  sources.push(...d.catalog.units.flatMap(u=>u.source_unit_ids));activities.push(...d.catalog.units.flatMap(u=>u.activities.map(a=>a.id)));questions.push(...d.content.questions.map(q=>q.id));count+=d.catalog.units.length;
  for(const u of d.catalog.units){assert.ok(createCurriculumEngine(d.catalog,d.content).createCycleRound(u.id,{allowCandidate:true}).questions.length===10);}
 }
 assert.equal(count,88);assert.deepEqual(sources.sort(),original.units.map(u=>u.id).sort());assert.deepEqual(activities.sort(),original.units.flatMap(u=>u.activities.map(a=>a.id)).sort());assert.deepEqual(questions.sort(),content.questions.map(q=>q.id).sort());
});
test('old source deep link selects correct integrated grade and semester; map does not fetch exercise data',async()=>{const calls=[];const d=await loadIntegratedCurriculum({grade:1},{unitId:'s-na-g6-t2-u01',exercises:false,fetcher:async u=>{calls.push(String(u));return get(u)}});assert.equal(d.scope.grade,6);assert.equal(d.scope.semester,2);assert.equal(calls.length,1);assert.ok(d.catalog.units.some(u=>u.source_unit_ids.includes('s-na-g6-t2-u01')))});
test('source records are preserved and copying is idempotent',()=>{let state={units:{na:{attempts:[{id:'a'}],seen:['q'],active:{id:'r',unitId:'na'}}}};const catalog={units:[{id:'kh',source_unit_ids:['kh','na']}]};integrateProgress(state,catalog);assert.equal(state.units.kh.active.unitId,'kh');assert.equal(state.units.na.active.unitId,'na');const snapshot=structuredClone(state);integrateProgress(state,catalog);assert.deepEqual(state,snapshot)});

test('shared inquiry tasks remain reachable from every applicable source unit in every scope',async()=>{
 const original=await read('../../data/science-curriculum/catalog.json'),content=await read('../../data/science-curriculum/exercises.json');
 const originalUnits=new Map(original.units.map(u=>[u.id,u]));
 for(let grade=1;grade<=6;grade++)for(let semester=1;semester<=2;semester++){
  const d=await loadIntegratedCurriculum({grade,semester},{fetcher:get});
  const alias=new Map(d.catalog.units.flatMap(u=>u.source_unit_ids.map(id=>[id,u.id])));
  const engine=createCurriculumEngine(d.catalog,d.content);
  const expected=content.tasks.filter(t=>(t.applicable_unit_ids||[t.unit_id]).some(id=>{const u=originalUnits.get(id);return u.grade===grade&&u.semester===semester}));
  assert.deepEqual(d.content.tasks.map(t=>t.id).sort(),expected.map(t=>t.id).sort());
  for(const source of expected){
   const task=d.content.tasks.find(t=>t.id===source.id);
   assert.equal(task.source_unit_id,source.unit_id);
   const applicable=[...new Set((source.applicable_unit_ids||[source.unit_id]).filter(id=>alias.has(id)).map(id=>alias.get(id)))];
   assert.ok(applicable.includes(task.unit_id));
   assert.deepEqual([...(task.applicable_unit_ids||[task.unit_id])].sort(),[...applicable].sort());
   for(const id of applicable)assert.ok(engine.getTasks(id,{allowCandidate:true}).some(t=>t.id===source.id),`${source.id} missing from ${id}`);
   assert.deepEqual(task.dependencies,source.dependencies);
   const {unit_id,source_unit_id,applicable_unit_ids,...unchanged}=task;
   const {unit_id:oldPrimary,applicable_unit_ids:oldApplicable,...originalFields}=source;
   assert.deepEqual(unchanged,originalFields);
  }
 }
});
