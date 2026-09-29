import {simplifyDesk} from './desk-icons.mjs';
import {createMultiplication,placeOne,multiplicationHint,multiplicationRecap} from './multiplication-model.mjs';
import {MultiplicationView} from './three-view.js';

const root=document.querySelector('#math-teaching');
let demo=createMultiplication(3,4),practice=createMultiplication(3,4);
let mode='demo',solved=false,timer=null,view,feedback='',hint=false,array=false,voiceOn=false;
const state=()=>mode==='demo'?demo:practice;
const button=(id,label,disabled=false)=>`<button type="button" data-action="${id}" ${disabled?'disabled':''}>${label}</button>`;

try{view=new MultiplicationView(group=>place(group));}
catch{feedback='此裝置改用平面教具，仍可完成全部操作。';}

function stop(){clearTimeout(timer);timer=null;}
function stopSpeech(){if('speechSynthesis' in window)window.speechSynthesis.cancel();}
function speak(message){
  if(!voiceOn||!('speechSynthesis' in window))return;
  stopSpeech();
  const utterance=new SpeechSynthesisUtterance(message);
  utterance.lang='zh-TW';utterance.rate=.88;
  const voice=window.speechSynthesis.getVoices().find(item=>item.lang.toLowerCase()==='zh-tw');
  if(voice)utterance.voice=voice;
  window.speechSynthesis.speak(utterance);
}
function explain(){
  const s=state();
  return `每組放 ${s.a} 個積木，共有 ${s.b} 組。${mode==='practice'?'請依序把積木放進托盤。':'看每一組如何放滿積木。'}${s.placed?'目前已放 '+s.placed+' 個。':''}`;
}
function setNumbers(a,b){
  let valid=false;
  try{
    const next=createMultiplication(a,b);
    stop();stopSpeech();
    demo=next;practice=createMultiplication(a,b);
    mode='demo';solved=false;array=false;hint=false;feedback='';valid=true;
  }catch(error){feedback=error.message;}
  render();
  if(valid)speak(explain());
}
function place(group,announce=true){
  const s=state();if(view?.busy)return;
  const next=placeOne(s,group);
  if(next===s){feedback='請先放滿發亮的這一組，每組數量要相同。';speak(feedback);render();return;}
  if(mode==='demo')demo=next;else practice=next;
  feedback='';hint=false;render();
  if(next.placed===next.a*next.b)speak(`全部放好了。每組 ${next.a} 個，共 ${next.b} 組，總共有幾個？`);
  else if(announce)speak(`已放 ${next.placed} 個。${multiplicationHint(next)}`);
}
function play(){
  if(mode!=='demo')return;
  stop();if(demo.placed===demo.a*demo.b)demo=createMultiplication(demo.a,demo.b);
  speak(explain());
  const tick=()=>{
    if(document.hidden){stop();return;}
    place(Math.floor(demo.placed/demo.a),false);
    if(demo.placed<demo.a*demo.b)timer=setTimeout(tick,650);
    else timer=null;
    render();
  };
  timer=setTimeout(tick,650);render();
}
function render(){
  const s=state(),done=s.placed===s.a*s.b;
  const basketLabel=array?'看分組托盤':'排成長方形';
  root.innerHTML=`<div class="mw multiplication-desk"><header>${button('exit','← 返回數學')}<div><small>LEARNING PLANET · MATH DESK</small><h1>乘法立體教學</h1></div></header><div class="layout"><section class="desk"><div class="desk-top"><div class="equation" aria-label="每組數量乘以組數"><input data-factor="a" type="number" min="1" max="9" step="1" inputmode="numeric" aria-label="每組數量（被乘數）" value="${s.a}"><span aria-hidden="true">×</span><input data-factor="b" type="number" min="1" max="9" step="1" inputmode="numeric" aria-label="組數（乘數）" value="${s.b}"><span aria-hidden="true">＝</span><output>${solved||mode==='demo'&&done?s.a*s.b:'？'}</output></div><div class="desk-tools"><button type="button" data-action="voice" class="icon-tool" aria-label="${voiceOn?'關閉語音說明':'開啟語音說明'}" aria-pressed="${voiceOn}" title="${voiceOn?'關閉語音說明':'開啟語音說明'}">${voiceOn?'🔊':'🔇'}</button><button type="button" data-action="random" class="icon-tool" aria-label="隨機出一題" title="隨機出一題">🎲</button><button type="button" data-action="array" class="icon-tool basket-tool" aria-label="${basketLabel}" aria-pressed="${array}" title="${basketLabel}" ${done?'':'disabled'}><img src="images/math-master/v1/objects/basket-v2.png" alt=""></button><span class="tag">${mode==='demo'?'看示範':mode==='practice'?'動手做':'回顧'}</span></div></div><div class="boards three-boards"></div><div class="mul-summary">每組 ${s.a} 個，共 ${s.b} 組。已放 ${s.placed} 個。<br>${Array(s.b).fill(s.a).join('＋')}${done?'＝'+s.a*s.b:''}</div></section><aside><div class="modes">${button('demo','示範')}${button('practice','操作')}${button('review','回顧',!solved)}</div><h3>${mode==='review'?'你做到了！':done?'算算總數':'一組一組放'}</h3>${mode==='review'?multiplicationRecap(s).map(t=>`<p>${t}</p>`).join(''):`<p>每組放 ${s.a} 個，依序完成 ${s.b} 組。</p>${hint?`<p class="hint">${multiplicationHint(s)}</p>`:''}`}${mode==='practice'&&done&&!solved?'<form class="answer"><label>總共有幾個？<input name="answer" aria-label="計算結果" type="number" min="1" max="81" required></label><button>確認答案</button></form>':''}<p class="mul-status" role="status">${feedback}</p><div class="actions">${mode==='demo'?button('play',timer?'暫停示範':'播放示範')+button('step','只看下一步',done):mode==='practice'?button('place','放入一顆積木',done)+button('hint','給我提示'):button('replay','重播示範')}${button('reset','這題重來')}</div><p class="caption">點亮色托盤或使用放入按鈕。每顆積木代表 1；不計時、不扣星幣。</p></aside></div></div>`;
  simplifyDesk(root);
  const host=root.querySelector('.boards');
  if(view){host.replaceChildren(view.element);view.update(s,mode,array,false);}
  else{
    host.className='flat-groups';
    host.innerHTML=Array.from({length:s.b},(_,g)=>`<button data-group="${g}" ${mode!=='practice'||done?'disabled':''}>第 ${g+1} 組：${'🟨'.repeat(Math.max(0,Math.min(s.a,s.placed-g*s.a)))||'空'}</button>`).join('');
  }
}

root.addEventListener('focusin',event=>{if(event.target.matches('[data-factor]'))stop();});
root.addEventListener('keydown',event=>{
  if(event.key==='Enter'&&event.target.matches('[data-factor]')){event.preventDefault();event.target.blur();}
});
root.addEventListener('focusout',event=>{
  if(!event.target.matches('[data-factor]'))return;
  const a=Number(root.querySelector('[data-factor="a"]').value);
  const b=Number(root.querySelector('[data-factor="b"]').value);
  if(a!==state().a||b!==state().b)setNumbers(a,b);
});
root.addEventListener('submit',event=>{
  event.preventDefault();
  const s=practice;if(mode!=='practice'||s.placed!==s.a*s.b)return;
  solved=Number(new FormData(event.target).get('answer'))===s.a*s.b;
  feedback=solved?'答對了！可以打開回顧。':'再用連加算一次，每組的數量相同。';
  speak(feedback);render();
});
root.addEventListener('click',event=>{
  const el=event.target.closest('button');if(!el||el.disabled)return;
  if(el.dataset.group!==undefined){place(Number(el.dataset.group));return;}
  const id=el.dataset.action;if(!id)return;
  if(id==='exit'){
    stop();stopSpeech();
    if(parent!==window)parent.postMessage({type:'math-teaching-close'},location.origin);
    else location.href='index.html';
    return;
  }
  if(id==='voice'){
    if(!('speechSynthesis' in window)){feedback='此瀏覽器不支援語音說明。';render();return;}
    voiceOn=!voiceOn;if(voiceOn)speak(explain());else stopSpeech();render();return;
  }
  if(id==='random'){
    setNumbers(1+Math.floor(Math.random()*9),1+Math.floor(Math.random()*9));
    return;
  }
  if(id==='play'){if(timer){stop();render();}else play();return;}
  stop();
  if(id==='step'||id==='place'){place(Math.floor(state().placed/state().a));return;}
  if(id==='hint'){hint=true;speak(multiplicationHint(state()));}
  if(['demo','practice','review'].includes(id)){
    if(id==='review'&&!solved)return;
    mode=id;array=false;feedback='';speak(id==='review'?multiplicationRecap(state()).join(' '):explain());
  }
  if(id==='array'){array=!array;speak(array?'看，同樣的積木也可以排成長方形，總數沒有改變。':'現在改看分組托盤，每一組的數量相同。');}
  if(id==='reset'||id==='replay'){
    const s=state();if(id==='replay')mode='demo';
    if(mode==='demo')demo=createMultiplication(s.a,s.b);
    else{practice=createMultiplication(s.a,s.b);mode='practice';solved=false;}
    array=false;feedback='';hint=false;speak(explain());
  }
  render();
});
document.addEventListener('visibilitychange',()=>{if(document.hidden){stop();stopSpeech();view?.finish();render();}});
window.addEventListener('pagehide',()=>{stop();stopSpeech();view?.destroy();});
render();
