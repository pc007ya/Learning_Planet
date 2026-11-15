/** A receipt and balances are saved together by the host; never touches math mastery. */
export function scienceReward(profile,run,{title='自然單元練習',date=new Date().toISOString().slice(0,10)}={}) {
 const unavailable={status:'unavailable',xp:0,coins:0};
 if(!run?.rewardEligible||!run.finished||typeof run.id!=='string'||!Array.isArray(run.questions)||!run.questions.length)return{profile,receipt:unavailable};
 if(!run.answers||Object.keys(run.answers).length!==run.questions.length)return{profile,receipt:unavailable};
 const answers=run.questions.map(q=>run.answers[q.id]);
 if(answers.some(a=>!a||typeof a.correct!=='boolean'))return{profile,receipt:unavailable};
 const previous=profile.scienceRewardReceipts?.[run.id];
 if(previous)return{profile,receipt:{...previous,status:'already-awarded'}};
 const score=answers.filter(a=>a.correct).length,total=answers.length,xp=score*8,coins=score*3+(score===total?10:0),beforeXp=Number(profile.xp)||0;
 const receipt={status:'awarded',runId:run.id,unitId:run.unitId,xp,coins,beforeXp,totalXp:beforeXp+xp,score,total,date};
 const updated={...profile,xp:beforeXp+xp,coins:(Number(profile.coins)||0)+coins,
  correctTotal:(Number(profile.correctTotal)||0)+score,answeredTotal:Math.max(Number(profile.answeredTotal)||0,Number(profile.correctTotal)||0)+total,
  subjectCorrect:{...profile.subjectCorrect,science:(Number(profile.subjectCorrect?.science)||0)+score},
  scienceRewardReceipts:{...profile.scienceRewardReceipts,[run.id]:receipt},
  xpLedger:[{id:'science:'+run.id,date,amount:xp,source:title,detail:score+'/'+total+' · 自然練習'} ,...(profile.xpLedger||[])].slice(0,500),
  log:[{icon:'⭐',tint:'#fff6e0',text:'自然答題獎勵星星幣',amount:'+'+coins,color:'#ffb020',when:'剛剛'},{icon:'✅',tint:'#e6f7ee',text:'完成「'+title+'」'+score+'/'+total,amount:'+'+xp+' XP',color:'#35c98a',when:'剛剛'},...(profile.log||[])].slice(0,8)};
 return {profile:updated,receipt};
}
