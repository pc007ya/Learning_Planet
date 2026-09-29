import {annotate} from '../math-foundations/zhuyin.mjs';
const F=window.MathConcepts,root=document.querySelector('#app'),id=new URLSearchParams(location.search).get('unit')||'u118',unit=F.byId(id);
const escape=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const icon=(action,glyph,label,disabled=false)=>`<button class="icon" data-action="${action}" aria-label="${label}" title="${label}" ${disabled?'disabled':''}>${glyph}</button>`;
let index=0,q,phase='demo',step=0,timer=null,voice=false,zhuyin=false,feedback='',solved=false,review=false,attempts=0,correct=0;
function stop(){clearTimeout(timer);timer=null;window.speechSynthesis?.cancel();}
function speak(s){if(!voice||!window.speechSynthesis)return;speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(s);u.lang='zh-TW';u.rate=.85;speechSynthesis.speak(u);}
function reset(){stop();step=0;solved=false;review=false;feedback='';render();}
function render(){
 const stage=q.stages[Math.min(step,q.steps-1)],done=step===q.steps,quiz=phase==='quiz',trying=phase==='try';
 const choices=quiz?q.opts:stage.choices,showChoices=!solved&&(quiz||trying&&!done);
 const shown=review||done?q.steps:quiz?0:step;
 root.innerHTML=`<header>${icon('back','←','返回數學')}<div><small>LEARNING PLANET · MATH</small><h1>${escape(unit.title)}</h1></div><span class="voice">${true?`<button class="icon zhuyin-toggle" data-action="zhuyin" aria-pressed="${zhuyin}" aria-label="${zhuyin?'關閉':'開啟'}注音" title="注音">ㄅ</button>`:''}${icon('voice',voice?'🔊':'🔇',voice?'關閉聲音':'開啟聲音')}</span></header><div class="layout"><section class="scene"><h2>${escape(q.stem)}</h2><div class="visual">${F.picture(q,shown)}</div><div class="tools">${q.kind==='arithmetic'?`<button data-case="0" aria-pressed="${q.op==='×'}" aria-label="乘法">×</button><button data-case="1" aria-pressed="${q.op==='÷'}" aria-label="除法">÷</button><a class="lesson-link" href="math-division.html?grade=4" aria-label="長除法教學桌" title="長除法教學桌">⟌</a>`:''}${q.kind==='triangle'?`<button data-case="0" aria-pressed="${!!q.sides}">邊</button><button data-case="1" aria-pressed="${!!q.angles}">角</button>`:''}${q.kind==='circle'?`<label class="rotate-control"><span aria-hidden="true">⟳</span><input type="range" min="0" max="360" step="5" value="${q.angle}" data-angle aria-label="轉動半徑"></label>`:''}${icon('reset','↶','這題重來')}${icon('new','⚄','換一題')}</div></section><aside class="side"><div class="phases">${[['demo','示範'],['try','操作'],['quiz','練習']].map(([mode,label])=>`<button data-phase="${mode}" aria-pressed="${phase===mode}">${label}</button>`).join('')}</div><div class="progress">${quiz?`作答 ${attempts} 次 · 答對 ${correct} 題`:`${step} / ${q.steps}`}</div><p class="stage-prompt">${escape(review?q.explain:quiz?q.hint:done?'完成！':stage.prompt)}</p>${done||review?`<div class="result">${escape(q.ans)}</div>`:''}${phase==='demo'&&step>0&&!review?`<p class="demonstration">${escape(q.stages[step-1].prompt)}<br><strong>${escape(q.stages[step-1].answer)}</strong><br>${escape(q.stages[step-1].explain)}</p>`:''}${showChoices?`<div class="options">${choices.map((a,i)=>`<button data-answer="${i}">${escape(a)}</button>`).join('')}</div>`:''}<p class="feedback" role="status">${escape(feedback)}</p><div class="actions">${phase==='demo'?icon('play',timer?'Ⅱ':'▶',timer?'暫停示範':'播放示範')+icon('step','≫','下一步',done):''}${icon('hint','💡','提示')}${icon('review','⟳','回顧',!solved&&!done)}</div>${solved||done?icon('new','≫','下一題'):''}</aside></div>`;
 if(zhuyin)annotate(root);
}
function advance(){if(step>=q.steps)return;const message=q.stages[step].explain;step++;if(step===q.steps&&phase==='try')solved=true;render();speak(message);}
root.addEventListener('input',e=>{if(e.target.matches('[data-angle]')){q.angle=Number(e.target.value);root.querySelector('.visual').innerHTML=F.picture(q,review?q.steps:phase==='quiz'?0:step);if(zhuyin)annotate(root.querySelector('.visual'));}});
root.addEventListener('click',e=>{
 const b=e.target.closest('button');if(!b||b.disabled)return;
 if(b.dataset.case!==undefined){index=Number(b.dataset.case);q=F.question(id,index);reset();return;}
 if(b.dataset.phase){phase=b.dataset.phase;attempts=0;correct=0;reset();return;}
 if(b.dataset.answer!==undefined){
  if(solved)return;const stage=q.stages[Math.min(step,q.steps-1)],quiz=phase==='quiz',selected=(quiz?q.opts:stage.choices)[Number(b.dataset.answer)],expected=quiz?q.ans:stage.answer;
  if(quiz)attempts++;if(String(selected)===String(expected)){feedback='✓';if(quiz){correct++;solved=true;render();speak('答對了');}else advance();}else{feedback='再試一次。'+(quiz?q.hint:stage.explain);render();speak(feedback);}return;
 }
 const a=b.dataset.action;
 if(a==='play'){if(timer){stop();render();return;}if(step===q.steps)step=0;const tick=()=>{advance();timer=step<q.steps?setTimeout(tick,voice?6500:2200):null;render();};timer=setTimeout(tick,500);render();return;}
 if(a==='zhuyin'){zhuyin=!zhuyin;render();return;}
 if(a==='voice'){voice=!voice;if(!voice)window.speechSynthesis?.cancel();else speak(q.stem);render();return;}
 stop();if(a==='step')advance();if(a==='reset')reset();if(a==='new'){index++;q=F.question(id,index);reset();}if(a==='hint'){feedback=(phase==='quiz'?q.hint:q.stages[Math.min(step,q.steps-1)].explain);render();speak(feedback);}if(a==='review'){review=true;render();speak(q.explain);}
 if(a==='back'){if(parent!==window)parent.postMessage({type:'math-teaching-close'},location.origin);else location.href='index.html';}
});
window.addEventListener('pagehide',stop);document.addEventListener('visibilitychange',()=>{if(document.hidden){stop();if(q)render();}});
if(unit){q=F.question(id);render();}else root.textContent='找不到這個單元。';
