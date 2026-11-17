import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import test from 'node:test';
const context=vm.createContext({});
vm.runInContext(fs.readFileSync(new URL('../modules/math-foundations/model.js',import.meta.url),'utf8'),context);
const F=context.MathFoundations;
function rng(seed=17){return()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/2**32;};}
test('nonstandard length provides 50 distinct grade-one questions without exceeding ten units',()=>{
 for(const seed of [17,3,97]){
  const qs=F.session('u111',50,rng(seed));
  assert.equal(qs.length,50);
  assert.equal(new Set(qs.map(q=>JSON.stringify([q.stem,q.n]))).size,50);
  for(const q of qs){assert.ok(q.n>=1&&q.n<=10);assert.equal(q.ans,q.n);assert.ok(q.opts.includes(q.ans));assert.equal(new Set(q.opts).size,4);assert.ok(q.unitLabel);assert.ok(F.picture(q).includes(q.unitLabel));}
 }
});
test('one-day calendar/date animations highlight the destination, including month/year boundaries',()=>{
 for(const kind of ['calendar','dates']) for(const [y,m,d] of [[2026,12,31],[2024,2,29],[2026,5,18]]){
  const q={kind,variant:1,y,m,d,delta:1,steps:1,stem:'一天後',ans:''};
  const svg=F.picture(q,1);
  const target=F.addDays(y,m,d,1).getUTCDate();
  assert.match(svg,new RegExp('fill="#ffd070"[^>]*\\/><text[^>]*>'+target+'<\\/text>'));
 }
});
test('weekday and month-length questions retain their own highlight semantics',()=>{
 assert.match(F.picture({kind:'calendar',variant:0,y:2026,m:5,d:18,steps:1,stem:'weekday'},1),/fill="#ffd070"[^>]*\/><text[^>]*>18<\/text>/);
 assert.match(F.picture({kind:'dates',variant:0,y:2026,m:2,d:24,steps:1,stem:'days'},1),/fill="#ffd070"[^>]*\/><text[^>]*>28<\/text>/);
});
