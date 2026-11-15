// Presentation only: rewards must be committed by the host before this is created.
const number = value => Math.max(0, Number.isFinite(Number(value)) ? Number(value) : 0);
export function resultFrame(elapsed, {score,total,reward={}}) {
  const ease=(value,start,duration)=>Math.round(value*(1-Math.pow(1-Math.max(0,Math.min(1,(elapsed-start)/duration)),3)));
  const accepted=['awarded','already-awarded'].includes(reward.status);
  const before=number(reward.beforeXp), after=number(reward.totalXp);
  return {correct:ease(score,195,676),percent:ease(total?Math.round(score/total*100):0,559,936),xp:accepted?ease(number(reward.xp),1170,806):0,coins:accepted?ease(number(reward.coins),1690,676):0,totalXp:before+ease(Math.max(0,after-before),1495,1040),ready:elapsed>=3120};
}
export function createResultPresenter({document,score,total,reward={},onReturn,onRetry,onTasks}) {
  total=Math.floor(number(total));score=Math.min(total,Math.floor(number(score)));
  const win=document.defaultView||globalThis;
  const make=(tag,cls,text)=>{const n=document.createElement(tag);if(cls)n.className=cls;if(text!=null)n.textContent=text;return n;};
  const element=make('section','sc-result');element.setAttribute('aria-label','練習結算');
  const particles=make('div','sc-result-coins');particles.setAttribute('aria-hidden','true');for(let i=0;i<5;i++)particles.append(make('i'));element.append(particles,make('p','sc-result-kicker','CHALLENGE COMPLETE'),make('h1',null,'完成這次探索！'));
  const stars=make('div','sc-result-stars');stars.setAttribute('aria-hidden','true');for(let i=1;i<=5;i++)stars.append(make('span',i<=Math.max(1,Math.ceil(score/Math.max(1,total)*5))?'is-lit':'','★'));element.append(stars);
  const main=make('div','sc-result-main'),ring=make('div','sc-result-ring');
  const ns='http://www.w3.org/2000/svg',svg=document.createElementNS(ns,'svg');svg.setAttribute('viewBox','0 0 120 120');svg.setAttribute('aria-hidden','true');
  let value;for(const cls of ['sc-result-track','sc-result-value']){const c=document.createElementNS(ns,'circle');for(const [k,v] of Object.entries({cx:60,cy:60,r:46,class:cls}))c.setAttribute(k,v);svg.append(c);if(cls==='sc-result-value')value=c;}
  const percent=make('strong'),ringCopy=make('div','sc-result-ring-copy');ringCopy.append(percent,make('small',null,'正確率'));ring.append(svg,ringCopy);
  const correct=make('strong'),copy=make('div','sc-result-score');copy.append(correct,make('p',null,'答對題目'));main.append(ring,copy);element.append(main);
  const accepted=['awarded','already-awarded'].includes(reward.status);
  const counters=make('div','sc-result-counters'),xp=make('strong'),coins=make('strong');for(const [label,node,cls] of [['學習經驗',xp,'xp'],['星星幣',coins,'coin']]){const box=make('div',cls);box.append(make('span',null,label),node);counters.append(box);}element.append(counters);
  const status=make('p','sc-result-status',reward.status==='pending'?'正在確認獎勵入帳…':reward.status==='awarded'?'獎勵已入帳':reward.status==='already-awarded'?'本回獎勵已領取，不會重複入帳':reward.status==='failed'?'獎勵入帳失敗，本次未確認入帳。':'本次未提供帳戶獎勵，僅保留練習紀錄。');status.setAttribute('role','status');element.append(status);
  const level=make('div','sc-result-level'),levelText=make('span'),levelCount=make('span'),head=make('div','sc-result-level-head'),track=make('div','sc-result-level-track'),fill=make('div','sc-result-level-value');head.append(levelText,levelCount);track.append(fill);level.append(head,track);level.hidden=!accepted;element.append(level);
  const levelUp=make('p','sc-result-level-up');levelUp.hidden=true;element.append(levelUp);
  const actions=make('div','sc-result-actions'),listeners=[];
  for(const [label,callback,primary] of [['再挑戰一次',onRetry,true],['返回自然星球',onReturn,false],['實作與反思',onTasks,false]])if(typeof callback==='function'){const b=make('button',primary?'is-primary':'',label);b.type='button';const fn=()=>{if(!disposed)callback();};b.addEventListener('click',fn);listeners.push([b,fn]);actions.append(b);}element.append(actions);
  let disposed=false,raf=null,start=null;
  function paint(elapsed){const f=resultFrame(elapsed,{score,total,reward});correct.textContent=`${f.correct} / ${total}`;percent.textContent=f.percent+'%';value.setAttribute('stroke-dasharray','289');value.setAttribute('stroke-dashoffset',String(289*(1-f.percent/100)));xp.textContent=accepted?`＋${f.xp} XP`:reward.status==='pending'?'待確認':'未入帳';coins.textContent=accepted?`＋${f.coins} 星星幣`:reward.status==='pending'?'待確認':'未入帳';levelText.textContent='Lv. '+(Math.floor(f.totalXp/100)+1);levelCount.textContent=(f.totalXp%100)+' / 100 XP';fill.style.width=(f.totalXp%100)+'%';for(const [b]of listeners)b.disabled=!f.ready;const upgraded=accepted&&Math.floor(number(reward.totalXp)/100)>Math.floor(number(reward.beforeXp)/100);levelUp.hidden=!(f.ready&&upgraded);if(upgraded)levelUp.textContent='LEVEL UP! 升到 Lv. '+(Math.floor(number(reward.totalXp)/100)+1);}
  const reduced=win.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  const request=win.requestAnimationFrame?.bind(win),cancel=win.cancelAnimationFrame?.bind(win);
  function tick(now){if(disposed)return;if(start==null)start=now;const elapsed=now-start;paint(elapsed);if(elapsed<3120)raf=request(tick);else raf=null;}
  paint(reduced||!request?3120:0);if(!reduced&&request)raf=request(tick);
  return {element,dispose(){disposed=true;if(raf!=null)cancel?.(raf);raf=null;for(const [b,fn]of listeners)b.removeEventListener('click',fn);}};
}
