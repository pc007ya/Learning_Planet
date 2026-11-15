import test from 'node:test';import assert from 'node:assert/strict';import fs from 'node:fs';import vm from 'node:vm';
const source=fs.readFileSync(new URL('../../index.html',import.meta.url),'utf8');
const cards=source.slice(source.indexOf('    const worldUnits ='),source.indexOf('    const showMathMissionMap ='));
test('each low-grade unit uses the original shared card layer with honest progress and direct entry',()=>{
 for(const grade of [1,2]){
  const units=JSON.parse(fs.readFileSync(new URL(`../../data/science-curriculum/scoped/all-g${grade}-t1-catalog.json`,import.meta.url))).units.map(u=>({...u,kind:'curriculum-unit',art:'images/science-unit-art/'+u.id+'.webp',sub:'',tint:'#fff'}));
  const calls=[],app={isLegacyScienceCandidate:()=>false,scienceClassicProgress:()=>({completed:2,totalCorrect:16,totalAnswers:20,hasActive:false}),startUnit:id=>calls.push(id)};
  const ctx={app,subjectUnits:units,s:{subject:'science',grade,currentId:'qa'},p:{},gradeWords:[],localStorage:{},VIDEO_LIB:{},React:{createElement:(...args)=>args},dailyMasteryRound:()=>{throw Error('Must not borrow math scores')},masteryRoman:n=>String(n)};
  const result=vm.runInNewContext('(function(){'+cards+';return worldUnits;}).call(app)',ctx);
  assert.equal(result.length,units.length);assert.ok(result.length>1);
  for(const card of result){assert.equal(card.btnLabel,'開始10題練習');assert.equal(card.showStatus,true);assert.equal(card.showMastery,false);assert.equal(card.showProgress,false);assert.match(card.stateLabel,/已完成 2 回/);card.start();}
  assert.deepEqual(calls,units.map(u=>u.id));
 }
 assert.match(source,/class="subject-world-card"/);assert.doesNotMatch(source.slice(source.indexOf('    const subjectUnits ='),source.indexOf('    const gradeWords =')),/生活單元練習/);
});
test('direct-unit quiz, result and inquiry back actions return to host instead of a nested catalog',()=>{
 const panel=fs.readFileSync(new URL('../../modules/science-curriculum/launch.mjs',import.meta.url),'utf8');
 assert.match(panel,/if\(unitId!=null\)\{close\(\);return;\}/);
 assert.match(panel,/button\('← 單元列表',returnToUnits,'sc-unit-list'\)/);
 assert.match(panel,/button\('← 單元列表',returnToUnits,'sc-back'\)/);
});
