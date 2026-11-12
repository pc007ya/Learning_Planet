import test from 'node:test';
import assert from 'node:assert/strict';
import { createCurriculumEngine, validateCandidateData } from '../../modules/science-curriculum/engine.mjs';
const catalog={units:[{id:'s-kh-g1-t1-u01',grade:1,semester:1,publisher:'康軒',subject:'生活',source_id:'k1',school_year:115,title:'入學',activities:[{id:'a1',title:'同學'}]}]};
const content={questions:[{id:'q1',unit_id:catalog.units[0].id,activity_id:'a1',stem:'同學需要幫忙時，可以怎麼做？',options:['先問他需要什麼幫忙','把他的東西拿走','假裝沒聽見','大聲責備他'],answer_index:0,explanation:'先了解需要，尊重對方再提供幫助。',skill:'apply',difficulty:1,original:true,review_status:'candidate'},{id:'q2',unit_id:catalog.units[0].id,activity_id:'a1',stem:'分享教室用品，可以怎麼做？',options:['輪流使用','藏起來','全部拿走','搶先使用'],answer_index:0,explanation:'約好輪流，讓每個人都有機會。',skill:'apply',difficulty:1,original:true,review_status:'candidate'}],tasks:[{id:'t1',unit_id:catalog.units[0].id,prompt:'練習介紹自己。',rubric:['說出希望別人怎麼稱呼自己','聽完對方介紹再回應'],adult_supervision:false,review_status:'candidate'}]};
test('valid schema and full candidate activity/task references',()=>{
 const result=validateCandidateData(catalog,content);
 assert.equal(result.valid,true);assert.deepEqual(result.activitiesWithoutCandidate,[]);assert.deepEqual(result.unitsWithoutInquiryTask,[]);
});
test('candidate is blocked from production by default',()=>assert.throws(()=>createCurriculumEngine(catalog,content).createRound(catalog.units[0].id),/No reviewed/));
test('unknown IDs reject rather than returning electricity questions',()=>assert.throws(()=>createCurriculumEngine(catalog,content).createRound('s-does-not-exist',{allowCandidate:true}),/Unknown/));
test('short bank returns real length with no duplicates and keeps answer match after shuffling',()=>{
 const r=createCurriculumEngine(catalog,content).createRound(catalog.units[0].id,{allowCandidate:true,rng:()=>0.3});
 assert.equal(r.actualCount,2);assert.equal(new Set(r.questions.map(q=>q.id)).size,2);assert.equal(r.warnings.length,2);
 for(const q of r.questions) assert.equal(q.opts.filter(o=>o===q.ans).length,1);
});
test('unseen questions come first',()=>{
 const r=createCurriculumEngine(catalog,content).createRound(catalog.units[0].id,{count:1,allowCandidate:true,seenQuestionIds:['q1'],rng:()=>0.5});
 assert.equal(r.questions[0].id,'q2');
});
test('round generation does not mutate original content',()=>{
 const before=JSON.stringify(content);createCurriculumEngine(catalog,content).createRound(catalog.units[0].id,{allowCandidate:true});assert.equal(JSON.stringify(content),before);
});
test('filter preserves exact publisher grade semester',()=>{
 const e=createCurriculumEngine(catalog,content);assert.equal(e.listUnits({grade:1,publisher:'康軒',semester:1}).length,1);assert.equal(e.listUnits({publisher:'南一'}).length,0);assert.equal(e.listUnits()[0].reviewedQuestionCount,0);
});
test('rejects duplicated choices, invalid answers and unknown activity',()=>{
 const bad=structuredClone(content);bad.questions[0].options[1]=bad.questions[0].options[0];bad.questions[0].answer_index=4;bad.questions[0].activity_id='missing';assert.equal(validateCandidateData(catalog,bad).errors.length,3);
});
test('rejects wrong grade/subject and duplicate question IDs',()=>{
 const c=structuredClone(catalog);c.units[0].subject='自然科學';assert.equal(validateCandidateData(c,content).valid,false);
 const q=structuredClone(content);q.questions[1].id=q.questions[0].id;assert.equal(validateCandidateData(catalog,q).valid,false);
});
test('count bounds and invalid RNG are explicit',()=>{
 const e=createCurriculumEngine(catalog,content);
 for(const count of [0,51,1.5,NaN]) assert.throws(()=>e.createRound(catalog.units[0].id,{count,allowCandidate:true}),/count/);
 assert.throws(()=>e.createRound(catalog.units[0].id,{allowCandidate:true,rng:()=>1}),/rng/);
});

test('production rounds never leak unreviewed tasks',()=>{
 const mixed=structuredClone(content);mixed.questions[0].review_status='reviewed';
 const round=createCurriculumEngine(catalog,mixed).createRound(catalog.units[0].id);
 assert.equal(round.questions.length,1);assert.deepEqual(round.tasks,[]);
 mixed.tasks[0].review_status='reviewed';
 assert.equal(createCurriculumEngine(catalog,mixed).createRound(catalog.units[0].id).tasks.length,1);
});
test('task review status is required',()=>{
 const c=structuredClone(content);delete c.tasks[0].review_status;
 assert.equal(validateCandidateData(catalog,c).valid,false);
});
test('returned unit and task objects do not expose mutable source references',()=>{
 const c=structuredClone(content);c.tasks[0].embedded_data={rows:[{value:1}]};
 const e=createCurriculumEngine(catalog,c);const listed=e.listUnits();listed[0].activities[0].title='changed';
 assert.equal(catalog.units[0].activities[0].title,'同學');
 const round=e.createRound(catalog.units[0].id,{allowCandidate:true});round.tasks[0].embedded_data.rows[0].value=99;
 assert.equal(c.tasks[0].embedded_data.rows[0].value,1);
});

test('old114 extensions are excluded from115 core by default',()=>{
 const c=structuredClone(catalog),d=structuredClone(content);c.units[0].activities.push({id:'old114',title:'舊版',scope:'extension_from_114_school_plan'});d.questions.push({...structuredClone(d.questions[0]),id:'q-old',activity_id:'old114'});
 const e=createCurriculumEngine(c,d);assert.equal(e.listUnits()[0].candidateQuestionCount,2);assert.equal(e.listUnits()[0].extensionQuestionCount,1);
 assert.equal(e.createRound(c.units[0].id,{allowCandidate:true}).actualCount,2);assert.equal(e.createRound(c.units[0].id,{allowCandidate:true,includeExtensions:true}).actualCount,3);
});
test('first balanced round samples each activity while available',()=>{
 const c=structuredClone(catalog),d=structuredClone(content);c.units[0].activities.push({id:'a2',title:'第二活動'});d.questions.push({...structuredClone(d.questions[0]),id:'q3',activity_id:'a2'});
 const round=createCurriculumEngine(c,d).createRound(c.units[0].id,{allowCandidate:true,count:2,rng:()=>0.9});assert.equal(new Set(round.questions.map(q=>q.activityId)).size,2);
});
test('shared tasks are reachable by both applicable units without duplicating IDs',()=>{
 const c=structuredClone(catalog),d=structuredClone(content);const second={...structuredClone(c.units[0]),id:'s-na-g1-t1-u01',publisher:'南一',activities:[{id:'b1',title:'同學'}]};c.units.push(second);d.tasks[0].applicable_unit_ids=[c.units[0].id,second.id];d.tasks[0].shared_design_id='shared-01';
 const e=createCurriculumEngine(c,d);assert.equal(e.getTasks(second.id).length,0);assert.equal(e.getTasks(second.id,{allowCandidate:true})[0].id,'t1');assert.equal(e.getTasks(c.units[0].id,{allowCandidate:true})[0].id,'t1');assert.equal(e.validation.tasks,1);assert.deepEqual(e.validation.unitsWithoutInquiryTask,[]);
 d.tasks[0].applicable_unit_ids.push('missing');assert.equal(validateCandidateData(c,d).valid,false);
});
test('task dependencies must be reachable from every unit sharing the task',()=>{const c=structuredClone(catalog),d=structuredClone(content);const other={...structuredClone(c.units[0]),id:'other-unit',publisher:'南一',activities:[{id:'b1',title:'同學'}]};c.units.push(other);d.tasks.push({...structuredClone(d.tasks[0]),id:'t2',unit_id:other.id});d.tasks[0].dependencies=['t2'];assert.equal(validateCandidateData(c,d).valid,false);d.tasks[1].applicable_unit_ids=[other.id,c.units[0].id];assert.equal(validateCandidateData(c,d).valid,true);d.tasks[0].dependencies=['t1'];assert.equal(validateCandidateData(c,d).valid,false);});
test('task instruction cards cannot omit or rewrite safety text',()=>{const d=structuredClone(content);d.tasks[0].instruction_steps=[{label:'準備與練習',text:d.tasks[0].prompt}];assert.equal(validateCandidateData(catalog,d).valid,true);d.tasks[0].instruction_steps[0].text='刪去原指令';assert.equal(validateCandidateData(catalog,d).valid,false);});


test('non-destructive corrections apply to new questions, leave source rows untouched and cannot leak mutable state',()=>{
 const c=structuredClone(content);c.question_policy={excluded_from_core:[],corrections:[{question_id:'q1',reason:'Fix terminology',fields:{stem:'修正後題幹',options:['甲','乙','丙','丁'],answer_index:2,explanation:'修正後解析'}}]};const before=JSON.stringify(c.questions),e=createCurriculumEngine(catalog,c),q=e.getQuestion('q1');assert.equal(q.stem,'修正後題幹');assert.equal(q.options[q.answer_index],'丙');q.options[2]='mutated';assert.equal(e.getQuestion('q1').options[2],'丙');const r=e.createRound(catalog.units[0].id,{allowCandidate:true});assert.equal(r.questions.find(q=>q.id==='q1').ans,'丙');assert.equal(JSON.stringify(c.questions),before);
});
test('retained old questions are never reissued, even when legacy extensions are requested',()=>{
 const c=structuredClone(content);c.question_policy={corrections:[],excluded_from_core:[{question_id:'q1',reason:'Near duplicate retained for historical records'}]};const e=createCurriculumEngine(catalog,c);assert.equal(e.isCoreQuestion('q1'),false);assert.equal(e.isCoreQuestion('q2'),true);assert.equal(e.getQuestion('q1').id,'q1');assert.equal(e.getQuestion('unknown'),null);const u=e.listUnits()[0];assert.equal(u.candidateQuestionCount,1);assert.equal(u.retainedQuestionCount,1);assert.equal(u.extensionQuestionCount,0);assert.deepEqual(e.createRound(u.id,{allowCandidate:true,includeExtensions:true}).questions.map(q=>q.id),['q2']);assert.deepEqual(c.questions,content.questions);
});
test('malformed policy, unknown references and unsafe corrections fail before any round',()=>{
 const valid={excluded_from_core:[],corrections:[]};for(const policy of [null,[],{}, {...valid,excluded_from_core:[{question_id:'missing',reason:'why'}]},{...valid,excluded_from_core:[{question_id:'q1',reason:''}]},{...valid,corrections:[{question_id:'q1',reason:'why',fields:{unit_id:'another'}}]},{...valid,corrections:[{question_id:'q1',reason:'why',fields:{options:['A','A','B','C']}}]},{...valid,corrections:[{question_id:'q1',reason:'why',fields:{answer_index:4}}]},{...valid,excluded_from_core:[{question_id:'q1',reason:'why'},{question_id:'q1',reason:'duplicate'}]}]){const c=structuredClone(content);c.question_policy=policy;assert.equal(validateCandidateData(catalog,c).valid,false);assert.throws(()=>createCurriculumEngine(catalog,c));}
});
