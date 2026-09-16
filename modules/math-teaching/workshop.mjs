import {lessons,createState,currentStep,act,answer,recap} from './model.mjs';
import {TeachingView} from './three-view.js';
const root=document.querySelector('#math-teaching');
const params=new URLSearchParams(location.search),requestedLesson=params.get('lesson');
const lessonKeys=Object.keys(lessons).filter(k=>!Object.hasOwn(lessons,requestedLesson)||k===requestedLesson);
if(params.get('max')==='50')for(const l of Object.values(lessons))l.examples=l.examples.filter(([a,b])=>a<=50&&b<=50&&(l.sign==='−'||a+b<=50));
const drafts=new Map();let kind=lessonKeys[0],mode='demo',timer=null,sound=false,feedback='',hints=0;
const fresh=(k,index=0)=>({index,demo:createState(k,...lessons[k].examples[index]),practice:createState(k,...lessons[k].examples[index]),solved:false,hints:0});
Object.keys(lessons).forEach(k=>drafts.set(k,fresh(k)));
const draft=()=>drafts.get(kind), state=()=>draft()[mode==='demo'?'demo':'practice'];
const btn=(id,text,extra='')=>`<button type="button" data-action="${id}" ${extra}>${text}</button>`;
let topView=false,view;
try{view=new TeachingView(()=>{if(mode==='practice')advance();},text=>{feedback=text;render();});}catch(error){console.warn('3D unavailable; using accessible flat teaching desk',error);}
function stop(){clearTimeout(timer);timer=null;window.speechSynthesis?.cancel();}
function say(text){if(!sound||!window.speechSynthesis)return;window.speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(text);u.lang='zh-TW';u.rate=.88;window.speechSynthesis.speak(u);}
function piece(type,index,side,enabled){return `<button type="button" class="piece ${enabled?'active':''}" data-piece="${type}" data-side="${side}" aria-label="${side==='left'?'左':'右'}邊第 ${index+1} ${type==='unit'?'個一':'個十'}" ${mode!=='practice'?'disabled':''}><span class="${type==='unit'?'unit':'rod'}" aria-hidden="true">${type==='rod'?'<i></i>'.repeat(10):''}</span></button>`;}
function board(s,side){
  const left=side==='left',step=currentStep(s),subtract=s.kind==='sub';
  const u=left?s.u:subtract?s.removedU:s.ru,t=left?s.t:subtract?s.removedT:s.rt;
  const active=mode==='practice'&&(subtract?left:!left);
  const title=left?(subtract?'還剩下':'合在一起'):(subtract?'已拿走':s.kind==='ten'&&!step?'剩下的':'待移入');
  const units=Array.from({length:u},(_,i)=>piece('unit',i,side,active&&step?.action==='unit')).join('');
  return `<section class="board ${side}" aria-label="${title}"><h2>${title}<span>${t*10+u}</span></h2>${s.kind==='ten'&&left?`<div class="tenframe" aria-label="十格框：已放 ${u} 個"><!-- 每格固定一個一 -->${Array.from({length:10},(_,i)=>`<div class="cell">${i<u?'<span class="unit"></span>':''}</div>`).join('')}</div>`:`${s.kind!=='ten'?`<div class="zone-label">十位 · 一根是 10</div><div class="pieces">${Array.from({length:t},(_,i)=>piece('rod',i,side,active&&step?.action==='rod')).join('')||'<span class="caption">0 個十</span>'}</div>`:''}<div class="zone-label">個位 · 一顆是 1</div><div class="pieces">${units||'<span class="caption">0 個一</span>'}</div>`}</section>`;
}
function render(){
  const focused=document.activeElement;const focusLabel=root.contains(focused)?focused?.getAttribute('aria-label'):null;const focusAction=root.contains(focused)?focused?.dataset.action:null;
  const s=state(),step=currentStep(s),done=!step,l=lessons[kind];
  const complete=draft().solved;const progress=done?100:Math.min(90,s.events.length*7);
  root.innerHTML=`<div class="mw"><header>${btn('exit','←','aria-label="返回數學"')}<div><small>LEARNING PLANET · MATH DESK</small><h1>數學互動教學桌</h1></div>${btn('sound',sound?'聲音：開':'聲音：關',`class="sound" aria-pressed="${sound}"`)}</header>
  <nav aria-label="選擇教學課程">${lessonKeys.map(k=>btn(`lesson-${k}`,lessons[k].title,`aria-current="${k===kind}"`)).join('')}</nav>
  <div class="layout"><section class="desk"><div class="desk-top"><div class="equation">${s.a} ${l.sign} ${s.b} ＝ ${mode==='review'||(done&&mode==='demo')||complete?answer(s):'？'}</div><span class="tag">${mode==='demo'?'看示範':mode==='practice'?'動手做':'回顧'}</span></div><div class="boards">${board(s,'left')}${board(s,'right')}</div><div class="desk-bottom"><span class="conservation">${s.kind==='sub'?`原來 ${s.a} ＝ 剩下 ${s.t*10+s.u} ＋ 拿走 ${s.removedT*10+s.removedU}`:`總數不變：${s.t*10+s.u} ＋ ${s.rt*10+s.ru}`}</span>${step?.action==='exchange'?btn('exchange',s.kind==='add'?'10 個一 → 1 個十':'1 個十 → 10 個一',mode==='practice'?'':'disabled'):''}</div><span class="caption">${mode==='practice'?'點綠框內的積木來操作；鍵盤也可以用 Tab 與 Enter。':l.subtitle}</span></section>
  <aside><div class="modes" aria-label="教學階段">${btn('mode-demo','示範',`aria-pressed="${mode==='demo'}"`)}${btn('mode-practice','操作',`aria-pressed="${mode==='practice'}"`)}${btn('mode-review','回顧',`aria-pressed="${mode==='review'}" ${!complete?'disabled':''}`)}</div><div class="progress"><i style="width:${progress}%"></i></div>
  ${mode==='review'?`<h3>你做到了！</h3><div class="recap">${recap(s).map((line,i)=>`<p>${i+1}. ${line}</p>`).join('')}</div><div class="note">這題用了 ${draft().hints} 次提示。這是教學練習，不扣星幣、不計時。</div>`:`<h3>${done?'數一數結果':step.title}</h3><p class="instruction">${done?(mode==='demo'?recap(s).at(-1):'積木操作完成！現在剩下／合起來是多少？'):step.instruction}</p>${hints&&step?`<div class="hint">${step.hint}${hints>1?'<br>找綠框的物件，一次只點一個。':''}${hints>2?'<br>也可以回「示範」看相同步驟。':''}</div>`:''}${done&&mode==='practice'&&!complete?'<form class="answer"><input aria-label="計算結果" inputmode="numeric" autocomplete="off" maxlength="3" placeholder="答案"><button type="submit">確認</button></form>':''}`}
  <p class="feedback" role="status">${feedback}</p><div class="actions">${mode==='demo'?`${btn('play',timer?'暫停示範':'▶ 播放示範','class="primary"')}${btn('step','只看下一步',done?'disabled':'')}${btn('mode-practice','換我試試')}`:mode==='review'?`${btn('next','換一題試試','class="primary"')}${btn('replay-review','聽回顧')}`:`${btn('hint','給我提示',done?'disabled':'')}${complete?btn('mode-review','看回顧','class="primary"'):''}`}${btn('reset','↶ 這題重來')}</div></aside></div></div>`;
  if(view){const boards=root.querySelector('.boards');boards.classList.add('three-boards');boards.replaceChildren(view.element);const labels=document.createElement('div');labels.className='scene-labels';labels.innerHTML=`<span>${s.kind==='sub'?'剩下':'合在一起'}：${s.t} 個十、${s.u} 個一</span><span>${s.kind==='sub'?'拿走':'另一組'}：${s.kind==='sub'?s.removedT:s.rt} 個十、${s.kind==='sub'?s.removedU:s.ru} 個一</span>`;boards.append(labels);view.update(s,mode,step);root.querySelector('.desk-bottom').insertAdjacentHTML('beforeend',btn('camera',topView?'切換立體':'切換俯視',`aria-pressed="${topView}"`));if(mode==='practice'&&step&&step.action!=='exchange')root.querySelector('.actions').insertAdjacentHTML('afterbegin',btn('3d-next',step.action==='unit'?'移動一顆積木':'移動一根十位棒','class="primary"'));root.querySelector('.desk>.caption').textContent='點亮色積木，或拖到另一側托盤。換十／拆十請點積木或下方按鈕。';}
  const focusTarget=[...root.querySelectorAll('button,input')].find(el=>!el.disabled&&((focusLabel&&el.getAttribute('aria-label')===focusLabel)||(focusAction&&el.dataset.action===focusAction)));
  if(focused&&root!==focused&&(focusLabel||focusAction))(focusTarget||root.querySelector('.piece.active')||root.querySelector('input')||root.querySelector('[data-action="mode-practice"]'))?.focus({preventScroll:true});
}
function advance(){const s=state(),step=currentStep(s);if(!step||view?.busy)return false;draft()[mode==='demo'?'demo':'practice']=act(s,step.action);hints=0;feedback=step.action==='exchange'?'換好了，總數沒有改變。':'';render();if(!view)root.querySelector('.boards')?.classList.add('pulse');say(currentStep(state())?.instruction||recap(state()).at(-1));return true;}
function play(){if(mode!=='demo')return;const tick=()=>{if(document.hidden){stop();render();return;}if(!currentStep(state())){timer=null;render();return;}advance();const narration=currentStep(state())?.instruction||recap(state()).at(-1);timer=setTimeout(tick,sound?Math.max(3000,narration.length*250):1500);render();};timer=setTimeout(tick,800);render();}
root.addEventListener('submit',e=>{e.preventDefault();const input=root.querySelector('input');if(!input||currentStep(state())||mode!=='practice')return;const raw=input.value.trim();if(!/^\d{1,3}$/.test(raw)||Number(raw)!==answer(state())){feedback='再數一次：每根十位棒是 10，每顆積木是 1。';say(feedback);render();return;}draft().solved=true;feedback='答對了！去回顧剛才怎麼做到的。';say(feedback);render();});
root.addEventListener('click',e=>{
  const b=e.target.closest('button');if(!b||b.disabled)return;
  if(b.dataset.piece){if(mode!=='practice')return;const s=state(),step=currentStep(s),side=s.kind==='sub'?'left':'right';if(!step||b.dataset.side!==side||b.dataset.piece!==step.action){feedback='先照這一步的提示，找綠框裡的物件。';say(feedback);render();return;}advance();return;}
  const id=b.dataset.action;if(!id)return;
  if(id==='camera'){topView=!topView;view?.setTop(topView);render();return;}
  if(id==='3d-next'){if(mode==='practice')advance();return;}
  if(id==='sound'){sound=!sound;if(!sound)window.speechSynthesis?.cancel();else say(currentStep(state())?.instruction||recap(state()).join(''));render();return;}
  if(id==='exit'){stop();if(window.parent!==window)window.parent.postMessage({type:'math-teaching-close'},location.origin);else location.href='index.html';return;}
  if(id==='play'){if(timer){stop();render();}else{if(!currentStep(state()))draft().demo=createState(kind,...lessons[kind].examples[draft().index]);play();}return;}
  if(id==='step'){stop();advance();return;}
  if(id==='exchange'){if(mode==='practice'&&currentStep(state())?.action==='exchange')advance();return;}
  if(id==='hint'){hints++;draft().hints++;feedback='';render();say(currentStep(state())?.hint||'');return;}
  if(id==='replay-review'){sound=true;say(recap(state()).join(''));render();return;}
  stop();feedback='';hints=0;
  if(id.startsWith('lesson-')){kind=id.slice(7);mode='demo';}
  if(id.startsWith('mode-')){const next=id.slice(5);if(next==='review'&&!draft().solved)return;mode=next;}
  if(id==='reset'){const key=mode==='demo'?'demo':'practice';draft()[key]=createState(kind,...lessons[kind].examples[draft().index]);if(key==='practice'){draft().solved=false;draft().hints=0;}if(mode==='review')mode='practice';}
  if(id==='next'){const index=(draft().index+1)%lessons[kind].examples.length;drafts.set(kind,fresh(kind,index));mode='practice';}
  render();
});
document.addEventListener('visibilitychange',()=>{if(document.hidden){stop();render();}});window.addEventListener('pagehide',()=>{stop();view?.destroy();});render();
