import {annotate} from './zhuyin.mjs';
const F=window.MathFoundations,root=document.querySelector('#app'),id=new URLSearchParams(location.search).get('unit')||'u109',unit=F.byId(id);
let index=0,q,phase='demo',step=0,timer=null,voice=false,feedback='',solved=false,review=false,answer='',digits=[0,0,0,0],correct=0,attempts=0;
let zhuyin=false;
const escape=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const icon=(id,s,label,disabled=false)=>`<button class="icon" data-action="${id}" aria-label="${label}" title="${label}" ${disabled?'disabled':''}>${s}</button>`;
function stop(){clearTimeout(timer);timer=null;window.speechSynthesis?.cancel();}
function speak(s){if(!voice||!window.speechSynthesis)return;window.speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(s);u.lang='zh-TW';u.rate=.88;window.speechSynthesis.speak(u);}
function reset(){stop();step=0;solved=false;review=false;feedback='';answer='';digits=[0,0,0,0];render();}
function next(){index++;q=F.question(id,index);reset();}
function render(){
 const trying=phase==='try',isPlace=q.kind==='place',shown=review?q.steps:phase==='quiz'?(['calendar','dates'].includes(q.kind)?0:q.steps):step;
 let picQ=q;if(trying&&isPlace&&!review)picQ={...q,digits};
 const ready=trying&&isPlace?digits.reduce((n,v)=>n*10+v,0)===q.n:step===q.steps;
 root.innerHTML=`<header>${icon('back','←','返回數學')}<div><small>LEARNING PLANET · MATH</small><h1>${escape(unit.title)}</h1></div><span class="voice">${unit.grade<=2?`<button class="icon zhuyin-toggle" data-action="zhuyin" aria-label="${zhuyin?'關閉注音':'開啟注音'}" title="${zhuyin?'關閉注音':'開啟注音'}" aria-pressed="${zhuyin}">ㄅ</button>`:''}${icon('voice',voice?'🔊':'🔇',voice?'關閉聲音':'開啟聲音')}</span></header><div class="layout"><section class="scene"><h2>${trying&&isPlace?`組出 ${q.n}`:escape(q.stem)}</h2><div class="visual">${F.picture(picQ,trying&&isPlace?4:shown)}</div><div class="tools">${q.kind==='compare'?`<button data-case="0" aria-pressed="${q.measure==='capacity'}">容量</button><button data-case="1" aria-pressed="${q.measure==='weight'}">重量</button>`:''}${trying&&isPlace&&!review?['千','百','十','個'].map((label,i)=>id==='u109'&&i===0?'':`<label>${label}<input type="number" data-digit="${i}" aria-label="${label}位" min="0" max="9" value="${digits[i]}"></label>`).join(''):trying&&!review?icon('step',q.kind==='subtract'?'−':q.kind==='calendar'||q.kind==='dates'?'→':'＋',operationLabel(),step===q.steps):''}${icon('reset','↶','這題重來')}${icon('new','⚄','換一題')}</div></section><aside class="side"><div class="phases"><button data-phase="demo" aria-pressed="${phase==='demo'}">示範</button><button data-phase="try" aria-pressed="${trying}">操作</button><button data-phase="quiz" aria-pressed="${phase==='quiz'}">練習</button></div><div class="progress">${phase==='quiz'?`作答 ${attempts} 次 · 答對 ${correct} 題`:shown+' / '+q.steps}</div><p>${escape(review?q.explain:q.hint)}</p>${phase==='demo'&&step===q.steps?`<div class="result">${escape(q.ans)}</div>`:''}${(phase==='quiz'||trying&&!isPlace&&ready)&&!solved?`<div class="options">${q.opts.map((option,i)=>`<button data-answer="${i}">${escape(option)}</button>`).join('')}</div>`:''}${trying&&isPlace&&!solved?icon('check','✓','確認位值'):''}<p class="feedback" role="status">${escape(feedback)}</p><div class="actions">${phase==='demo'?icon('play',timer?'Ⅱ':'▶',timer?'暫停示範':'播放示範')+icon('step','≫','下一步',step===q.steps):''}${icon('hint','💡','提示')}${icon('review','⟳','回顧',!solved&&step!==q.steps&&phase!=='quiz')}</div>${solved?icon('new','≫','下一題'):''}</aside></div>`;
 if(unit.grade<=2&&zhuyin)annotate(root);
}
function operationLabel(){return ({subtract:'拿走一個',length:'接上一個單位',area:'覆蓋一格',calendar:'往後一天',dates:'往後一天',compare:q.measure==='weight'?'比較砝碼':'倒入一杯',litres:'倒入 100 mL'})[q.kind]||'下一步';}
function advance(){step=Math.min(q.steps,step+1);render();if(step===q.steps)speak(q.explain);}
function check(ok){if(solved)return;if(phase==='quiz')attempts++;if(ok){solved=true;if(phase==='quiz')correct++;feedback='✓ 答對了';}else feedback='再試一次。'+q.hint;speak(feedback);render();}
root.addEventListener('input',e=>{if(e.target.dataset.digit!==undefined){const n=Number(e.target.value);if(Number.isInteger(n)&&n>=0&&n<=9){digits[Number(e.target.dataset.digit)]=n;const focused=Number(e.target.dataset.digit);render();root.querySelector(`[data-digit="${focused}"]`).focus();}}});
root.addEventListener('click',e=>{const b=e.target.closest('button');if(!b||b.disabled)return;
 if(b.dataset.case!==undefined){index=Number(b.dataset.case);q=F.question(id,index);reset();return;}
 if(b.dataset.phase){phase=b.dataset.phase;correct=0;attempts=0;reset();return;}
 if(b.dataset.answer!==undefined){check(String(q.opts[Number(b.dataset.answer)])===String(q.ans));return;}
 const a=b.dataset.action;
 if(a==='zhuyin'){zhuyin=!zhuyin;try{localStorage.setItem('math-zhuyin',zhuyin?'on':'off');}catch{}render();return;}
 if(a==='play'){if(timer){stop();render();return;}if(step===q.steps)step=0;const tick=()=>{step++;timer=step<q.steps?setTimeout(tick,700):null;render();if(!timer)speak(q.explain);};timer=setTimeout(tick,700);render();return;}
 stop();if(a==='step')advance();if(a==='reset')reset();if(a==='new')next();if(a==='hint'){feedback=q.hint;render();speak(feedback);}if(a==='review'){review=true;render();speak(q.explain);}if(a==='check')check(digits.reduce((n,v)=>n*10+v,0)===q.n);
 if(a==='voice'){voice=!voice;render();if(voice)speak(q.stem);}
 if(a==='back'){if(parent!==window)parent.postMessage({type:'math-teaching-close'},location.origin);else location.href='index.html';}
});
window.addEventListener('pagehide',stop);document.addEventListener('visibilitychange',()=>{if(document.hidden){stop();if(q)render();}});
if(!unit)root.textContent='找不到這個單元。';else{q=F.question(id,index);render();}
