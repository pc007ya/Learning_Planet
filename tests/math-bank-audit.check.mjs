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
