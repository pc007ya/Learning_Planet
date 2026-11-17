// Same policy as host seconds()/roundSecondsFor(): ordinary questions, first round.
export const DEFAULT_SECONDS = 30;
export function questionSeconds(value) {
 const n=Number(value); return value!==null && value!=='' && Number.isFinite(n) ? Math.max(5,n) : DEFAULT_SECONDS;
}
export function makeQuestions(unit, random=Math.random) {
 return unit.questions.map(q=>{
  const answer=q.options[q.answer];
  if(!Number.isInteger(q.answer)||!answer||new Set(q.options).size!==q.options.length) throw Error('題庫答案格式錯誤');
  const options=q.options.slice();
  for(let i=options.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[options[i],options[j]]=[options[j],options[i]];}
  return {...q,options,answer};
 });
}
export class PracticeRound {
 constructor(unit,seconds=DEFAULT_SECONDS,now=()=>Date.now(),random=Math.random){this.unit=unit;this.seconds=questionSeconds(seconds);this.now=now;this.questions=makeQuestions(unit,random);this.index=0;this.answers=[];this.phase='reading';this.deadline=0;this.active=true;}
 start(){if(!this.active||this.phase!=='reading')return false;this.phase='question';this.deadline=this.now()+this.seconds*1000;return true;}
 remaining(){return this.phase==='question'?Math.max(0,Math.ceil((this.deadline-this.now())/1000)):0;}
 answer(option){if(!this.active||this.phase!=='question')return false;
 const q=this.questions[this.index];const timedOut=this.now()>=this.deadline;
 if(!timedOut&&!q.options.includes(option))return false;
 this.answers.push({questionId:q.id,answer:timedOut?null:option,correct:!timedOut&&option===q.answer,timedOut});this.phase='feedback';return true;}
 tick(){return this.active&&this.phase==='question'&&this.remaining()===0?this.answer(null):false;}
 next(){if(!this.active||this.phase!=='feedback')return false;
 if(this.index+1===this.questions.length){this.phase='result';return true;}
 this.index++;this.phase='question';this.deadline=this.now()+this.seconds*1000;return true;}
 exit(){this.active=false;this.phase='closed';this.deadline=0;}
}
