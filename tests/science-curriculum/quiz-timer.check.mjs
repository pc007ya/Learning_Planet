import test from 'node:test';
import assert from 'node:assert/strict';
import {secondsRemaining,timeoutAnswer,isSavedAnswer} from '../../modules/science-curriculum/quiz-timer.mjs';
import {createProgressStore} from '../../modules/science-curriculum/store.mjs';
const memory=()=>{const m=new Map();return {getItem:k=>m.get(k)||null,setItem:(k,v)=>m.set(k,v)}};
const run=()=>({id:'run',unitId:'u',version:'v',started:1,questions:[{id:'q',stem:'?',opts:['a','b','c','d'],ans:'a',explain:'e'}],answers:{},index:0,warnings:[],finished:false,questionDeadline:31000,rewardEligible:true});
test('deadline remains stable across rerenders, suspension and final five seconds',()=>{
  assert.equal(secondsRemaining(31000,1000),30);assert.equal(secondsRemaining(31000,25999),6);assert.equal(secondsRemaining(31000,26000),5);assert.equal(secondsRemaining(31000,31000),0);assert.equal(secondsRemaining(31000,90000),0);
});
test('timeout is not a fabricated selection; strict validation rejects false claims',()=>{
 assert.deepEqual(timeoutAnswer('q',9),{questionId:'q',selected:null,correct:false,timedOut:true,time:9});
 for(const patch of [{selected:'a'},{correct:true},{timedOut:false}])assert.equal(isSavedAnswer({...timeoutAnswer('q',9),...patch}),false);
 assert.ok(isSavedAnswer({questionId:'q',selected:'a',correct:true,time:9}));
});
test('deadline and timeout survive reload and completion, while legacy runs remain valid',()=>{
 const m=memory(),s=createProgressStore(m,'a');assert.ok(s.update(x=>x.units.u={attempts:[],seen:['q'],active:run()}));
 const r=createProgressStore(m,'a');assert.equal(r.read().units.u.active.questionDeadline,31000);
 assert.ok(r.update(x=>{const u=x.units.u;u.active.answers.q=timeoutAnswer('q',32000);u.active.finished=true;u.attempts.push({id:'run',answers:[timeoutAnswer('q',32000)],correct:0,total:1});}));
 assert.equal(createProgressStore(m,'a').read().units.u.attempts[0].correct,0);
 const old=run();old.unitId='old';delete old.questionDeadline;delete old.rewardEligible;assert.ok(r.update(x=>x.units.old={attempts:[],seen:[],active:old}));
});
test('lost identity or lease cannot save timeout',()=>{
 const m=memory();let allowed=true;const s=createProgressStore(m,'a',{canWrite:()=>allowed});s.update(x=>x.units.u={attempts:[],seen:[],active:run()});allowed=false;
 assert.equal(s.update(x=>x.units.u.active.answers.q=timeoutAnswer('q')),false);assert.deepEqual(createProgressStore(m,'a').read().units.u.active.answers,{});
});

import {localDay,dailyQuestionSeconds,startQuestionClock,resumeQuestionClock} from '../../modules/science-curriculum/quiz-timer.mjs';
test('local-day real perfect rounds advance 30/25/20; failures and duplicate receipts do not',()=>{
 const now=new Date(2026,10,15,10).getTime();
 const perfect=(id)=>({id,completed:now,total:1,correct:1,answers:[{correct:true}]});
 assert.equal(dailyQuestionSeconds([],now),30);
 assert.equal(dailyQuestionSeconds([perfect('a')],now),25);
 assert.equal(dailyQuestionSeconds([perfect('a'),perfect('a')],now),25);
 assert.equal(dailyQuestionSeconds([perfect('a'),perfect('b'),perfect('c')],now),20);
 assert.equal(dailyQuestionSeconds([{...perfect('a'),correct:0}],now),30);
 assert.equal(dailyQuestionSeconds([perfect('a')],new Date(2026,10,16,0).getTime()),30);
});
test('explicit reentry restores full budget; background expiration unchanged; stale unanswered resume preserves answers',()=>{
 const now=new Date(2026,10,15,10).getTime(),r=run();startQuestionClock(r,[],now);
 assert.equal(secondsRemaining(r.questionDeadline,now),30);
 resumeQuestionClock(r,[],now+3600000);
 assert.equal(secondsRemaining(r.questionDeadline,now+3600000),30);
 assert.equal(secondsRemaining(r.questionDeadline,now+3700000),0);
 const old=run(),before=JSON.stringify(old.answers);resumeQuestionClock(old,[],now);
 assert.equal(secondsRemaining(old.questionDeadline,now),30);assert.equal(JSON.stringify(old.answers),before);assert.equal(old.id,'run');
 old.answers.q=timeoutAnswer('q',now);const snapshot=structuredClone(old);resumeQuestionClock(old,[],now+3600000);assert.deepEqual(old,snapshot);
});
test('switching question starts full daily budget and next day restarts 30 without resetting prior answers',()=>{
 const now=new Date(2026,10,15,23,59).getTime(),r=run(),a=[{id:'a',completed:now,total:1,correct:1,answers:[{correct:true}]}];
 startQuestionClock(r,a,now);assert.equal(secondsRemaining(r.questionDeadline,now),25);
 startQuestionClock(r,a,now+1000);assert.equal(secondsRemaining(r.questionDeadline,now+1000),25);
 const tomorrow=new Date(2026,10,16,0).getTime();resumeQuestionClock(r,a,tomorrow);assert.equal(secondsRemaining(r.questionDeadline,tomorrow),30);assert.equal(r.timerDay,localDay(tomorrow));
});
