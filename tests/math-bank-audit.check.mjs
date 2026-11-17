import assert from 'node:assert/strict';
import test from 'node:test';
import {bankAudit,mathBankRuntime} from './helpers/math-bank-runtime.mjs';
test('audit visits every catalog unit in grades one through six and checks all three difficulty settings',()=>{
 const rows=bankAudit();
 assert.equal(rows.length,148);
 assert.deepEqual([...new Set(rows.map(row=>row.grade))].sort(),[1,2,3,4,5,6]);
 for(const row of rows){
  if(row.status==='separate-mode')continue;
  assert.equal(row.invalidChoices,0,row.id);
  assert.equal(row.counts.length,3,row.id);
  assert.ok(row.counts.every(count=>count>0),row.id);
 }
});
test('two-digit exact division never generates three-digit dividends and its pool has at least 50 questions',()=>{
 const runtime=mathBankRuntime(97);const seen=new Set();
 for(let run=0;run<12;run++) for(const q of runtime.app.buildMath('u39',0)){
  const [,dividend,divisor]=q.stem.match(/^(\d+) ÷ (\d+)/);
  assert.ok(Number(dividend)>=10&&Number(dividend)<=99,q.stem);
  assert.ok(Number(divisor)>=1&&Number(divisor)<=9,q.stem);
  assert.equal(Number(dividend)/Number(divisor),q.ans);
  seen.add(q.stem);
 }
 assert.ok(seen.size>=50,String(seen.size));
});
test('capacity conversions always provide four distinct choices with exactly one correct answer',()=>{
 const runtime=mathBankRuntime(3);
 for(let run=0;run<30;run++)for(const q of runtime.app.buildMath('u55',run%3)){
  assert.equal(q.opts.length,4);
  assert.equal(new Set(q.opts).size,4,q.stem);
  assert.equal(q.opts.filter(option=>option===q.ans).length,1,q.stem);
 }
});
test('all 138 standard math banks supply 50 distinct questions at every difficulty, not duplicate padding',()=>{
 for(const seed of [3,97])for(const row of bankAudit(seed)){
  if(row.status==='separate-mode')continue;
  assert.deepEqual(row.counts,[50,50,50],row.id);
  assert.deepEqual(row.distinctPerRound,[50,50,50],row.id);
  assert.equal(row.invalidChoices,0,row.id);
 }
});
test('expanded number banks preserve the answers implied by their figures',()=>{
 const runtime=mathBankRuntime(31);
 for(const id of ['u3','u7','u104','u107','u10','u17','u11','u12','u50','u61','u62']){
  for(const q of runtime.app.buildMath(id,0)){
   assert.ok(q.opts.includes(q.ans),id);
   if(id==='u104')assert.equal(q.ans,q.figData.total-q.figData.known);
   if(id==='u10'||id==='u17')assert.equal(q.ans,`${q.figData.num}/${q.figData.den}`);
   if(id==='u11')assert.ok(Number(q.ans.split('/')[1])<q.figData.b);
   if(id==='u50')assert.equal(q.ans,q.figData.cells.flat().reduce((sum,n)=>sum+n,0));
   if(id==='u12')assert.equal(q.ans,q.figData.ch*2+q.figData.rb*4);
   if(id==='u61')assert.equal(q.ans,Number(q.stem.match(/^\d+/)[0])*10);
   if(id==='u62')assert.equal(Number(q.ans),Number(q.stem.match(/^有 (\d+)/)[1])+q.figData.num/10);
  }
 }
});
test('50-question make-ten bank assesses sums, missing addends and split remainders accurately',()=>{
 const runtime=mathBankRuntime(43);
 const qs=runtime.app.buildMath('u108',0);
 assert.equal(qs.length,50);
 assert.equal(new Set(qs.map(q=>q.questionKey)).size,50);
 assert.ok(qs.some(q=>q.answerType==='missing-addend'));
 assert.ok(qs.some(q=>q.answerType==='split-remainder'));
 for(const q of qs){
  const [a,b]=q.operands;
  assert.equal(q.ans,q.answerType==='missing-addend'?b:q.answerType==='split-remainder'?b-(10-a):a+b);
  assert.ok(q.opts.includes(q.ans));
  assert.equal(new Set(q.opts).size,4);
 }
});
test('extended make-ten keys and adaptive retries retain their answer type without repeating excluded questions',()=>{
 const runtime=mathBankRuntime(43),engine=runtime.LearningPlanetMathEngine;
 const qs=runtime.app.buildMath('u108',0);
 for(const q of qs){
  assert.equal(engine.canonicalQuestionKey(q),q.questionKey);
  if(!q.answerType)continue;
  const excluded=qs.filter(other=>other!==q).map(other=>other.questionKey);
  const retry=engine.generateRelatedQuestion(q,{excludeKeys:excluded});
  if(retry){assert.equal(retry.answerType,q.answerType);assert.ok(!excluded.includes(retry.questionKey));assert.notEqual(retry.questionKey,q.questionKey);}
 }
});
