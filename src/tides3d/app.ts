import {learningText,initZhuyin} from './zhuyin';
import {CHALLENGES,judgeChallenge,type ChallengeId} from './challenges';
import { TideStage,type View } from './stage';
import { phase,phasePath,radians,tideAmplitude,wrap } from '../tides/model';
import { shoreLevel } from './science';
import { SceneNarration } from '../experiments/narration';
const $=<T extends HTMLElement>(id:string)=>document.getElementById(id) as T;
const moonMode=document.body.dataset.lesson==='moon';
const base=new URL(document.body.dataset.root||'../../../../',document.baseURI);
const narration=new SceneNarration();let stage:TideStage|undefined;let angle=45,observer=270,spin=0,playing=false,demo=false;let lastSpoken='';let pausedByOverlay=false;
const saveKey='lp:tides3d:learning:v1:'+ (moonMode?'moon':'tides');let restoredStep=0;
let mission:ChallengeId|null=null,missionMoved=false,missionPassed=false;const completed=new Set<ChallengeId>();
function savedText(){try{const local=localStorage.getItem(saveKey);if(local)return local;}catch{/* private browsing */}try{return sessionStorage.getItem(saveKey)||sessionStorage.getItem('lp:tides3d:review:'+(moonMode?'moon':'tides'))||'{}';}catch{return '{}';}}
try{const saved=JSON.parse(savedText());if(Number.isFinite(saved.angle))angle=wrap(saved.angle);if(Number.isFinite(saved.observer))observer=wrap(saved.observer);if(Number.isFinite(saved.spin))spin=saved.spin;if(Number.isInteger(saved.step)&&saved.step>=0&&saved.step<4)restoredStep=saved.step;for(const c of CHALLENGES)if(Array.isArray(saved.completed)&&saved.completed.includes(c.id))completed.add(c.id);if(!moonMode&&CHALLENGES.some(c=>c.id===saved.mission)){mission=saved.mission;missionPassed=completed.has(mission as ChallengeId)&&judgeChallenge(mission as ChallengeId,angle,true).passed;missionMoved=missionPassed;}}catch{/* optional browser storage */}
function remember(){const text=JSON.stringify({angle,observer,spin,step:Number(document.body.dataset.step)||0,mission,completed:[...completed]});try{localStorage.setItem(saveKey,text);}catch{/* session-only fallback */}try{sessionStorage.setItem(saveKey,text);}catch{/* state still works in memory */}}
const steps=moonMode?[
 ['陽光照到哪裡？','先看亮面與夜面。空白處拖動，可以從不同方向觀察。','地球只有朝向太陽的一半被照亮。'],
 ['月球可以直接拖','抓住「月球」沿軌道移動。注意：從太空看亮面，和從地球看月相不同。','試著讓日、地、月排成一直線。'],
 ['地球看見什麼月相？','拖動或點月相圖卡，對照旁邊的「地球視角」。','新月、上弦、滿月、下弦都可以親手排出來。'],
 ['月球怎麼改變海水？','進入潮汐探險，讓月球、海水殼、海岸與曲線一起變化。','原本的地球觀測台與其他實驗均保留。']
]:[
 ['海水為什麼升降？','看海岸水尺，再轉動金色觀測點。它走過海水較高、較低的位置。','這是假想赤道海岸；不是台灣實際潮時。'],
 ['為什麼兩側都隆起？','旋轉視角，找出近月側與遠月側。月球拉著整個地球，近側較多、遠側較少。','遠側也被吸引，不是月球把海水推開。'],
 ['大潮、小潮怎麼來？','拖月球，對照地球視角月相、立體水殼與曲線。試試直角和一直線。','小潮仍有潮汐；日月相加的方向也會改變隆起方向。'],
 ['模型可以預報潮時嗎？','不可以。真實海岸的地形、海深、摩擦與天氣，都會改變潮汐。','月亮在頭頂，也不代表當地正好滿潮。']
];
function speak(text:string){lastSpoken=text;narration.say(text);}
function feedback(text:string){learningText($('feedback'),text);speak(text);}
function phaseSvg(a:number){return `<svg viewBox="-26 -26 52 52" aria-hidden="true"><circle r="24" fill="#132b45" stroke="#9bb1c5"/><path d="${phasePath(a)}" fill="#f6efd9"/></svg>`;}
function selectStep(n:number){if(mission&&n!==2){mission=null;missionPassed=false;renderMission();selectAux(matchMedia('(max-width:700px)').matches?'space':'shore');}document.body.dataset.step=String(n);document.querySelectorAll<HTMLButtonElement>('button[data-step]').forEach(b=>b.setAttribute('aria-current',Number(b.dataset.step)===n?'step':'false'));const s=steps[n];learningText($('question'),s[0]);learningText($('instruction'),s[1]);learningText($('science-note'),s[2]);learningText($('step-title'),`${n+1} / 4 · ${moonMode?'地月觀察':'潮汐探險'}`);learningText($('goal'),moonMode?'操作目標：移動月球，看看亮面如何改變。':n===0?'操作目標：改變觀測點，找到海岸高、低水位。':n===1?'操作目標：轉到俯視，指出兩側隆起。':n===2?'操作目標：排出小潮，再排出大潮。':'操作目標：知道模型和真實預報的差別。');if(n===3){$('official').hidden=false;if(moonMode){$<HTMLAnchorElement>('official').href='./tides/';$<HTMLAnchorElement>('official').target='_self';learningText($('official'),'進入立體潮汐探險 →');}}else $('official').hidden=true;speak(s[0]+' '+s[1]+' '+s[2]);renderMission();remember();}
function setPlaying(value:boolean){playing=value;if(stage){stage.playing=value;stage.wake();}$('play').setAttribute('aria-pressed',String(value));learningText($('play'),value?'Ⅱ 暫停':'▷ 播放');}
function sync(){
 const p=phase(angle),range=2*tideAmplitude(angle),h=shoreLevel(observer,angle);
 $('phase-view').innerHTML=phaseSvg(angle);learningText($('phase-name'),p.name);learningText($('phase-detail'),`地球視角 · 受光約 ${Math.round(p.lit*100)}%`);
 learningText($('range'),moonMode?Math.round(angle)+'°':range.toFixed(2));if(!moonMode)learningText($('shore-height'),(h>=0?'+':'')+h.toFixed(2));learningText($('angle-readout'),`月球 ${Math.round(angle)%360}° · 觀測點 ${Math.round(observer)%360}°`);
 document.querySelectorAll<HTMLButtonElement>('[data-angle]').forEach(b=>b.setAttribute('aria-pressed',String(Math.abs(wrap(angle)-Number(b.dataset.angle))<1)));
 const data=Array.from({length:181},(_,i)=>`${24+i*1.58},${70-25*shoreLevel(i*2,angle)}`);
 $('curve-line').setAttribute('points',data.join(' '));$('curve-point').setAttribute('cx',String(24+observer/360*284.4));$('curve-point').setAttribute('cy',String(70-25*h));
 if(!moonMode){const y=89-h*17;$('sea').setAttribute('d',`M0 ${y}Q35 ${y-3} 70 ${y}T140 ${y}T210 ${y}T320 ${y}V170H0Z`);$('water-mark').setAttribute('cy',String(y));
 learningText($('shore-state'),h>.7?'水位較高':h<-.7?'水位較低':'水位在中間');}else $('earth-moon-portrait').innerHTML=phaseSvg(angle);stage?.update(angle,observer,spin);renderMission();
}
function changed(kind:'moon'|'observer',value:number){if(!demo)setPlaying(false);if(kind==='moon'){if(mission&&!demo&&Math.abs(value-angle)>.5){missionMoved=true;missionPassed=false;}angle=wrap(value);}else{const delta=value-observer;observer=wrap(value);spin+=delta;}sync();}
function stopDrag(){remember();const p=phase(angle);feedback(moonMode?`觀察到了：${p.name}。月球位於 ${Math.round(angle)}°，地球看見約 ${Math.round(p.lit*100)}% 的亮面。`:`觀察到了：${p.name}，示意潮差 ${ (2*tideAmplitude(angle)).toFixed(2)}；海岸相對水位 ${shoreLevel(observer,angle).toFixed(2)}。`);}
function selectAux(value:string){document.body.dataset.aux=value;document.querySelectorAll<HTMLButtonElement>('button[data-aux]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.aux===value)));$('shore-panel').hidden=value!=='shore';$('curve-panel').hidden=value!=='curve';$('model-panel').hidden=value!=='model';if($('mission-panel'))$('mission-panel').hidden=value!=='mission';}
function chooseView(view:View){stage?.setView(view);document.querySelectorAll<HTMLButtonElement>('button[data-view]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.view===view)));}
function reset(){missionMoved=false;missionPassed=false;demo=false;setPlaying(false);angle=45;observer=270;spin=0;chooseView('space');sync();feedback('已回到斜角觀察。試試拖月球或切到俯視。');}
function openOverlay(title:string,html:string){pausedByOverlay=playing;setPlaying(false);narration.stop();learningText($('dialog-title'),title);$('dialog-content').innerHTML=html;$<HTMLDialogElement>('dialog').showModal();$('close-dialog').focus();}
function renderMission(){
 if(moonMode||!$('mission-panel'))return;
 document.body.dataset.mission=String(!!mission);$('mission-tab').hidden=!mission;$('mission-check').hidden=!mission;$('mission-exit').hidden=!mission;$('play').hidden=!!mission;$('demo').hidden=!!mission;
 if(!mission)return;
 const c=CHALLENGES.find(c=>c.id===mission)!;const index=CHALLENGES.indexOf(c);
 learningText($('question'),`任務 ${index+1}：${c.title}`);learningText($('goal'),c.target);learningText($('mission-target'),c.target);learningText($('mission-hint'),c.hint);
 learningText($('mission-current'),`目前 ${ (2*tideAmplitude(angle)).toFixed(2)} · 月球 ${Math.round(angle)}°`);
 $('mission-progress').innerHTML=CHALLENGES.map((v,i)=>`<li class="${completed.has(v.id)?'done':''}">${completed.has(v.id)?'✓':i+1} ${v.title}</li>`).join('');
 learningText($('mission-check'),missionPassed?(completed.size===CHALLENGES.length?'完成':'下一關'):'檢查');
}
function startMission(){
 if(completed.size===CHALLENGES.length)completed.clear();mission=CHALLENGES.find(c=>!completed.has(c.id))?.id||CHALLENGES[0].id;missionMoved=false;missionPassed=false;demo=false;setPlaying(false);angle=45;selectStep(2);chooseView('space');sync();selectAux(matchMedia('(max-width:700px)').matches?'space':'mission');remember();feedback(CHALLENGES.find(c=>c.id===mission)!.hint);
}
function checkMission(){
 if(!mission)return;
 if(missionPassed){const next=CHALLENGES.find(c=>!completed.has(c.id));if(!next){endMission();feedback('三關完成！你用日月位置，調出了大潮、小潮和中間潮差。進度保存在這個瀏覽器。');return;}mission=next.id;missionMoved=false;missionPassed=false;angle=45;sync();remember();feedback(next.hint);return;}
 const result=judgeChallenge(mission,angle,missionMoved&&!playing&&!demo);if(result.passed){completed.add(mission);missionPassed=true;remember();}renderMission();feedback(result.message);
}
function endMission(){mission=null;missionPassed=false;selectAux(matchMedia('(max-width:700px)').matches?'space':'shore');selectStep(Number(document.body.dataset.step)||2);renderMission();remember();}
function setupMission(){
 if(moonMode)return;
 $('aux-home').insertAdjacentHTML('beforeend','<section class="aux-panel" id="mission-panel" hidden aria-label="操作考核目標"><strong id="mission-target"></strong><p id="mission-current"></p><ol id="mission-progress"></ol><p class="mission-hint" id="mission-hint"></p><small>本機記錄 · 不跨裝置同步</small></section>');
 document.querySelector('.aux-tabs')!.insertAdjacentHTML('beforeend','<button id="mission-tab" data-aux="mission" hidden>任務</button>');
 $('demo').insertAdjacentHTML('beforebegin','<button id="mission-check" hidden>檢查</button><button id="mission-exit" hidden>退出</button>');
 $('mission-check').onclick=checkMission;$('mission-exit').onclick=endMission;
}
function showQuiz(){
 const question=moonMode?'哪一張是滿月的位置？地球在太陽和月球之間。':'選出日月成直角的一張。小潮仍然有海水升降。';
 const cards=[0,90,180,270].map((a,i)=>`<button data-answer="${a}"><svg viewBox="0 0 140 90" aria-hidden="true"><circle cx="105" cy="45" r="15" fill="#ffd18a"/><circle cx="50" cy="45" r="15" fill="#6bc2db"/><circle cx="${50+30*Math.cos(radians(a))}" cy="${45-30*Math.sin(radians(a))}" r="7" fill="#eee7d2"/></svg><span>圖 ${i+1} · ${phase(a).name}</span></button>`).join('');
 openOverlay(moonMode?'看圖找滿月':'看圖找小潮',(!moonMode?`<div class="mission-start"><button id="start-mission">${completed.size===CHALLENGES.length?'重玩三關':'動手考核'} · ${completed.size}/3 關</button><small>親手調位置，用模型檢查。進度留在本機。</small></div>`:'')+'<p>'+question+'</p><div class="quiz-cards">'+cards+'</div><p id="answer-feedback" role="status">選一張圖卡。</p>');
 if($('start-mission'))$('start-mission').onclick=()=>{$<HTMLDialogElement>('dialog').close();startMission();};
 document.querySelectorAll<HTMLButtonElement>('[data-answer]').forEach(b=>b.onclick=()=>{
  const correct=moonMode?Number(b.dataset.answer)===180:Number(b.dataset.answer)%180!==0;
  const text=moonMode?(correct?'答對！地球在日月之間時，從地球看見月球的整個亮面。':'再觀察。找出地球在太陽和月球之間的一張。'):(correct?'答對！日月成直角，小潮的潮差較小，仍有潮汐。':'再觀察。日月排成一直線時，通常是大潮。');
  learningText($('answer-feedback'),text);speak(text);
 });
}
async function boot(){
 setupMission();initZhuyin(()=>stage?.wake());
 document.body.dataset.lesson=moonMode?'moon':'tides';if(moonMode){document.querySelector<HTMLElement>('.model-badge')!.textContent='天體大小與距離已放大';document.querySelector<HTMLElement>('.world-hint')!.textContent='拖月球改變位置 · 空白處轉視角';$('shore-panel').setAttribute('aria-label','從地球看月相');document.querySelector<HTMLElement>('.range small')!.textContent='月球位置';$('shore-panel').innerHTML='<div id="earth-moon-portrait"></div><p>這是從地球看見的月相。它和太空中俯視月球的亮面不同。</p><p>拖月球，親手排出四種月相。</p>';document.querySelector<HTMLElement>('[data-aux="shore"]')!.textContent='地球視角';$('model-panel').innerHTML='<strong>太陽只照亮一半月球</strong><p>我們看見的亮面比例，隨日、地、月的位置而改變。新月不是月球消失。</p><p>地球視角以北方朝上示意；不模擬日月食、緯度與真實日曆。</p>';}learningText($('title'),moonMode?'地球與月球 · 立體觀測':'潮汐 · 立體觀測');$('tide-link').hidden=!moonMode;document.querySelectorAll<HTMLButtonElement>('[data-angle]').forEach(b=>{b.innerHTML=phaseSvg(Number(b.dataset.angle))+`<span>${phase(Number(b.dataset.angle)).name}</span>`;b.onclick=()=>{demo=false;changed('moon',Number(b.dataset.angle));stopDrag();};});
 document.querySelectorAll<HTMLButtonElement>('button[data-step]').forEach(b=>b.onclick=()=>selectStep(Number(b.dataset.step)));
 document.querySelectorAll<HTMLButtonElement>('[data-view]').forEach(b=>b.onclick=()=>{chooseView(b.dataset.view as View);feedback('已切換觀測視角。空白處拖動可繼續旋轉。');});
 document.querySelectorAll<HTMLButtonElement>('button[data-aux]').forEach(b=>b.onclick=()=>selectAux(b.dataset.aux||'shore'));
 $('play').onclick=()=>{demo=false;setPlaying(!playing);};$('reset').onclick=reset;$('zoom-in').onclick=()=>stage?.zoom(.85);$('zoom-out').onclick=()=>stage?.zoom(1.17);
 if($('observer-back'))$('observer-back').onclick=()=>changed('observer',observer-20);if($('observer-next'))$('observer-next').onclick=()=>changed('observer',observer+20);
 $('demo').onclick=()=>{demo=true;angle=0;observer=270;chooseView('top');setPlaying(true);feedback(moonMode?'示範：月球沿軌道移動。看地球視角的亮面變化；按暫停可接手操作。':'示範：月球沿軌道移動。看一直線與直角的潮差；按暫停可接手操作。');};
 $('help').onclick=()=>{if(mission){const c=CHALLENGES.find(c=>c.id===mission)!;openOverlay(c.title,'<p>'+c.target+'</p><p>'+c.hint+'</p>');return;}const s=steps[Number(document.body.dataset.step)||0];openOverlay(s[0],'<p>'+s[1]+'</p><p>'+s[2]+'</p>');};$('quiz').onclick=showQuiz;$('voice').onclick=()=>{narration.enabled=!narration.enabled;$('voice').setAttribute('aria-pressed',String(narration.enabled));if(narration.enabled)narration.say(lastSpoken,true);else narration.stop();};$('replay').onclick=()=>narration.say(lastSpoken,true);
 $('sources').onclick=()=>openOverlay('模型、素材與限制','<p>地表與月球沿用學習星球原觀測台已入庫貼圖，沒有複製 X 或銅匠素材。地表／晨昏線沿用原觀測台光照做法；原模組不變。</p><p>海水殼是理想平衡潮 P₂ 模型，厚度、潮幅、天體大小與距離都誇大。赤道海岸與曲線取同一模型相對赤道平均水位的變化，不代表全球平均或實際公尺。細波紋只表示水面光感，不是流體或海流模擬；暫停時停止，減少動態設定下不播放波紋。</p><p>不是各海岸每天都固定兩次滿潮；月球在頭頂也不能判斷當地潮時。不是台灣潮時預報。</p><p><a href="https://www.noaa.gov/education/resource-collections/ocean-coasts/tides" target="_blank" rel="noopener">NOAA 潮汐原理</a> · <a href="https://science.nasa.gov/moon/tides/" target="_blank" rel="noopener">NASA 潮汐</a> · <a href="https://www.cwa.gov.tw/V8/C/M/tide.html" target="_blank" rel="noopener">中央氣象署</a></p>');
 $('close-dialog').onclick=()=>$<HTMLDialogElement>('dialog').close();$('dialog').addEventListener('close',()=>{narration.stop();if(pausedByOverlay)feedback('已暫停在原位置。按播放繼續。');});
 const media=matchMedia('(max-width:700px)');const adapt=()=>{const target=media.matches?$('mobile-aux'):$('aux-home');const phaseOptions=document.querySelector<HTMLElement>('.phase-options')!;const actions=document.querySelector<HTMLElement>('.actions')!;if(media.matches){$('phase-home').after(phaseOptions);$('actions-home').after(actions);}else{document.querySelector('.world')!.append(phaseOptions,actions);}for(const id of ['shore-panel','curve-panel','model-panel','mission-panel'])if($(id))target.append($(id));selectAux(mission?(media.matches?'space':'mission'):(media.matches?'space':'shore'));};media.addEventListener('change',adapt);adapt();selectStep(restoredStep);sync();
 try{stage=await TideStage.create($('space'),base,changed,stopDrag,dt=>{if(!dt)return;angle=wrap(angle+dt*(demo?15:6));if(!moonMode){observer=wrap(observer+dt*12);spin+=dt*12;}sync();},moonMode);$('loading').hidden=true;document.body.dataset.tides3dReady='true';sync();}catch(error){console.error(error);learningText($('loading'),'立體場景載入失敗。可以重整，或先使用旁邊的2D輔助圖。');document.body.dataset.tides3dReady='error';}
 document.addEventListener('visibilitychange',()=>{if(document.hidden){setPlaying(false);narration.stop();}});window.addEventListener('pagehide',()=>{remember();narration.stop();stage?.dispose();},{once:true});
}
window.addEventListener('pageshow',event=>{if(event.persisted)location.reload();});
void boot();
