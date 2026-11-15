import test from 'node:test';import assert from 'node:assert/strict';import {scienceReward} from '../../modules/science-curriculum/rewards.mjs';
const run={id:'run-1',unitId:'s-kh-g1-t1-u01',rewardEligible:true,finished:true,questions:[{id:'q1'},{id:'q2'}],answers:{q1:{correct:true},q2:{correct:false}}};
test('real score grants math-equivalent rewards without changing math records and never grants twice',()=>{
 const profile={xp:92,coins:10,dailyMastery:{units:{u1:2}},mathQuestionHistory:{u1:['x']},cleared:['u1'],rewardedRuns:['math1'],subjectCorrect:{math:4},xpLedger:[]};
 const a=scienceReward(profile,run);assert.equal(a.profile.xp,100);assert.equal(a.profile.coins,13);assert.equal(a.receipt.beforeXp,92);assert.equal(a.profile.subjectCorrect.math,4);assert.equal(a.profile.subjectCorrect.science,1);
 for(const k of ['dailyMastery','mathQuestionHistory','cleared','rewardedRuns'])assert.deepEqual(a.profile[k],profile[k]);
 const b=scienceReward(a.profile,run);assert.equal(b.receipt.status,'already-awarded');assert.deepEqual(b.profile,a.profile);
});
test('old or incomplete rounds are not retroactively rewarded; perfect gets bonus',()=>{
 for(const r of [{...run,rewardEligible:undefined},{...run,finished:false},{...run,answers:{q1:{correct:true}}}])assert.equal(scienceReward({xp:4,coins:5},r).receipt.status,'unavailable');
 const a=scienceReward({xp:0,coins:0},{...run,answers:{q1:{correct:true},q2:{correct:true}}});assert.equal(a.receipt.coins,16);assert.equal(a.receipt.xp,16);
});
test('receipts remain durable beyond the old 300-run window',()=>{
 let p={xp:0,coins:0};for(let i=0;i<302;i++)p=scienceReward(p,{...run,id:'r'+i}).profile;
 const xp=p.xp;assert.equal(scienceReward(p,{...run,id:'r0'}).profile.xp,xp);assert.equal(Object.keys(p.scienceRewardReceipts).length,302);
});
