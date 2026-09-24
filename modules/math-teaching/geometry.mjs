import {geometryValues} from './geometry-model.mjs';
import {GeometryView} from './three-view.js';
const $=id=>document.getElementById(id),names=['上','下','前','後','右','左'],requestedMode=new URLSearchParams(location.search).get('mode');let s=geometryValues(4,3,2),mode=['perimeter','area','volume','surface'].includes(requestedMode)?requestedMode:'volume',unit='cm',layers=2,spread=0,selected=null,timer=null,view,voiceOn=false,utterance=null;
const spokenUnits={cm:['公分','平方公分','立方公分'],mm:['毫米','平方毫米','立方毫米'],m:['公尺','平方公尺','立方公尺']};
function stopSpeech(){window.speechSynthesis?.cancel();utterance=null;}
function speak(text){
  if(!voiceOn||!text)return;
  if(!window.speechSynthesis||typeof SpeechSynthesisUtterance==='undefined'){$('feedback').textContent='這個瀏覽器沒有語音，請看右邊的文字說明。';voiceOn=false;syncVoiceButton();return;}
  stopSpeech();const u=new SpeechSynthesisUtterance(text);utterance=u;u.lang='zh-TW';u.rate=.88;
  const voices=window.speechSynthesis.getVoices();u.voice=voices.find(v=>/^zh[-_]TW$/i.test(v.lang))||voices.find(v=>/^zh/i.test(v.lang))||null;
  u.onerror=e=>{if(utterance===u&&!['canceled','interrupted'].includes(e.error)){voiceOn=false;syncVoiceButton();$('feedback').textContent='語音暫時無法播放，仍可閱讀右邊的說明。';}};
  try{window.speechSynthesis.speak(u);}catch{voiceOn=false;syncVoiceButton();$('feedback').textContent='語音暫時無法播放，仍可閱讀右邊的說明。';}
}
function syncVoiceButton(){const button=$('voice-toggle');button.setAttribute('aria-pressed',String(voiceOn));button.setAttribute('aria-label',voiceOn?'關閉語音導覽':'開啟語音導覽');button.title=voiceOn?'關閉語音導覽':'開啟後，點各個按鈕可聽題目和說明';button.textContent=voiceOn?'🔊':'🔇';}
function topicSpeech(){const [length,area,volume]=spokenUnits[unit];return {
  perimeter:`周長題。長 ${s.l} ${length}，寬 ${s.w} ${length}。沿外框走一圈，兩條長邊加兩條寬邊，周長是 ${s.perimeter} ${length}。`,
  area:`面積題。每排 ${s.l} 格，共 ${s.w} 排。${s.l} 乘以 ${s.w}，面積是 ${s.area} ${area}。`,
  volume:`體積題。底面每層有 ${s.l} 乘以 ${s.w}，共 ${s.area} 顆單位積木。堆 ${s.h} 層，體積是 ${s.volume} ${volume}。目前顯示 ${layers} 層，共 ${s.area*layers} 顆。`,
  surface:`表面積題。上、下兩面各 ${s.area} ${area}；前、後兩面各 ${s.l*s.h} ${area}；左、右兩面各 ${s.w*s.h} ${area}。六個面加起來是 ${s.surface} ${area}。點選任一面，可以單獨看它。`
}[mode];}
function buttonSpeech(button){const [,area,volume]=spokenUnits[unit];if(button.dataset.mode)return topicSpeech();
  if(button.dataset.unit)return `單位改為${spokenUnits[unit][0]}。${topicSpeech()}`;
  if(button.dataset.face!==undefined)return `${names[selected]}面，面積 ${s.faces[selected]} ${area}。相對的面大小相同。`;
  switch(button.id){
    case 'home':return `已切換三面視角。${topicSpeech()}`;
    case 'top':return `已切換俯視角度。${topicSpeech()}`;
    case 'demo':return timer?`正在逐層堆疊。每層 ${s.area} 顆，完整 ${s.h} 層是 ${s.volume} ${volume}。`:`目前 ${layers} 層，共 ${s.area*layers} 顆積木。`;
    case 'hint':case 'review':return $('feedback').textContent;
    default:return '';
  }
}
try{view=new GeometryView($('scene'),i=>{selected=i;render();speak(`${names[i]}面，面積 ${s.faces[i]} ${spokenUnits[unit][1]}。相對的面大小相同。`);});}catch{$('scene').innerHTML='<p>此裝置無法顯示 3D，仍可調整尺寸查看計算過程。</p>';}
function stop(){clearTimeout(timer);timer=null;}
function render(){
  const planar=['perimeter','area'].includes(mode),power=mode==='perimeter'?'':mode==='volume'?'³':'²',value=s[mode];
  document.querySelectorAll('[data-mode]').forEach(b=>b.setAttribute('aria-pressed',b.dataset.mode===mode));document.querySelectorAll('[data-unit]').forEach(b=>b.setAttribute('aria-pressed',b.dataset.unit===unit));$('height-field').hidden=planar;$('layer-control').hidden=mode!=='volume';$('spread-control').hidden=planar;$('demo').hidden=mode!=='volume';$('layers').max=s.h;$('layers').value=layers;$('layer-value').textContent=`${layers} / ${s.h} 層`;$('spread').value=spread;
  $('concept').textContent={perimeter:'沿外框走一圈',area:'數一數底面方格',volume:'一層一層堆起來',surface:'六個面的面積總和'}[mode];$('result').textContent=`${value} ${unit}${power}`;
  const formulas={perimeter:`2 × (${s.l} ＋ ${s.w}) ＝ ${s.perimeter}`,area:`${s.l} × ${s.w} ＝ ${s.area}`,volume:`${s.l} × ${s.w} × ${s.h} ＝ ${s.volume}`,surface:`2 × (${s.l}×${s.w} ＋ ${s.l}×${s.h} ＋ ${s.w}×${s.h}) ＝ ${s.surface}`};$('formula').textContent=formulas[mode];
  const steps={perimeter:[`兩條長邊，各 ${s.l} ${unit}。`,`兩條寬邊，各 ${s.w} ${unit}。`,`只計算外框，不把裡面的格線算進來。`],area:[`每排 ${s.l} 格，共 ${s.w} 排。`,`共有 ${s.area} 個 ${unit}² 方格。`,`面積是覆蓋的大小，不是外框長度。`],volume:[`每層 ${s.l} × ${s.w} ＝ ${s.area} 顆。`,`目前 ${layers} 層：${s.area*layers} 顆 ${unit}³ 積木。`,`完整 ${s.h} 層，共 ${s.volume} 顆。`],surface:[`上、下：${s.area} × 2`, `前、後：${s.l*s.h} × 2`,`左、右：${s.w*s.h} × 2`]};$('steps').innerHTML=steps[mode].map(t=>`<p>${t}</p>`).join('');$('scene-count').textContent=mode==='volume'?`目前 ${s.area*layers} ／ 完整 ${s.volume} 顆`:mode==='surface'?'點選一個面，查看它的面積':`每小格 1 ${unit}²`;
  $('face-buttons').hidden=mode!=='surface';$('face-buttons').innerHTML=mode==='surface'?names.map((n,i)=>`<button data-face="${i}" aria-pressed="${selected===i}">${n} ${s.faces[i]}</button>`).join(''):'';
  if(mode==='surface'&&selected!==null)$('feedback').textContent=`${names[selected]}面：${s.faces[selected]} ${unit}²；相對的面大小相同。`;
  $('demo').textContent=timer?'Ⅱ 暫停堆疊':'▶ 播放堆疊';view?.update(s,mode,layers,spread,selected,unit);
}
$('dimensions').addEventListener('submit',e=>{e.preventDefault();stop();try{const d=new FormData(e.target);s=geometryValues(Number(d.get('l')),Number(d.get('w')),Number(d.get('h')));layers=s.h;selected=null;$('feedback').textContent='';render();view?.home();speak(topicSpeech());}catch(err){$('feedback').textContent=err.message;speak(err.message);}});
document.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;if(b.dataset.mode){stop();mode=b.dataset.mode;selected=null;spread=0;$('feedback').textContent='';render();view?.home();}if(b.dataset.unit){unit=b.dataset.unit;render();}if(b.dataset.face!==undefined){selected=Number(b.dataset.face);render();}});
$('layers').addEventListener('input',e=>{stop();layers=Number(e.target.value);render();});$('spread').addEventListener('input',e=>{spread=Number(e.target.value);render();});$('home').onclick=()=>view?.home();$('top').onclick=()=>view?.home(true);
$('demo').onclick=()=>{if(timer){stop();render();return;}layers=1;const tick=()=>{layers++;if(layers<s.h)timer=setTimeout(tick,900);else timer=null;render();};if(s.h>1)timer=setTimeout(tick,900);render();};
$('hint').onclick=()=>{$('feedback').textContent={perimeter:'沿青色與橘色外框走一圈。相對的兩條邊一樣長。',area:'先數一排有幾格，再乘上排數。',volume:'把層數拉到 1：每層的顆數，就是底面積。再慢慢增加層數。',surface:'把六個面拆開。同色的兩個面大小相同，所以各算一次再乘 2。'}[mode];};
$('review').onclick=()=>{stop();layers=s.h;spread=mode==='surface'?.65:0;selected=null;render();$('feedback').textContent='回顧：周長算邊，面積算方格，體積算積木，表面積算六個面。';};
$('voice-toggle').onclick=()=>{if(!voiceOn&&(!window.speechSynthesis||typeof SpeechSynthesisUtterance==='undefined')){$('feedback').textContent='這個瀏覽器沒有語音，請看右邊的文字說明。';return;}voiceOn=!voiceOn;syncVoiceButton();if(voiceOn)speak(`語音導覽已開啟。${topicSpeech()}`);else stopSpeech();};
// Delegated after the other button handlers, so narration describes the new state.
document.addEventListener('click',e=>{const button=e.target.closest('button');if(!button||button.id==='voice-toggle'||button.form===$('dimensions')&&button.type==='submit')return;speak(buttonSpeech(button));});
$('back').onclick=e=>{stopSpeech();if(parent!==window){e.preventDefault();parent.postMessage({type:'math-teaching-close'},location.origin);}};document.addEventListener('visibilitychange',()=>{if(document.hidden){stop();stopSpeech();render();}});window.addEventListener('pagehide',()=>{stop();stopSpeech();view?.destroy();});syncVoiceButton();render();view?.home();
