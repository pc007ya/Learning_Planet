import { Stage, type World } from './core';

type PlanetId = 'ocean'|'magnet'|'earth-moon'|'plants'|'weather'|'force-motion';
const allowed:PlanetId[]=['ocean','magnet','earth-moon','plants','weather','force-motion'];
const body=document.body;
const id=body.dataset.planet as PlanetId;
const host=document.getElementById('ep-scene');
const controls=document.getElementById('ep-controls');
const missions=document.getElementById('ep-missions');
const message=document.getElementById('ep-message');
const readout=document.getElementById('ep-readout');
const progress=document.getElementById('ep-progress');
const quiz=document.getElementById('ep-quiz');
const quizBody=document.getElementById('ep-quiz-body');
const reward=document.getElementById('ep-reward');
const log=document.getElementById('ep-log');
let voice=true;
let mode:'guide'|'free'='guide';
let tab:'object'|'conditions'='object';
let world:World|null=null;
let stage:Stage|null=null;
let completedAtStart:number[]=[];
let quizPassed=false;
let rewarded=false;
const key='lp:experiment-planets:v1:'+id;
function currentSave():{missions:number[];quizPassed:boolean;rewarded:boolean}{
  try {
    const saved=JSON.parse(localStorage.getItem(key)||'{}') as {missions?:unknown;quizPassed?:unknown;rewarded?:unknown};
    return {missions:Array.isArray(saved.missions)?saved.missions.filter((x):x is number=>typeof x==='number'&&x>=0&&x<8):[],quizPassed:saved.quizPassed===true,rewarded:saved.rewarded===true};
  }catch{return {missions:[],quizPassed:false,rewarded:false};}
}
function save(){
  try{localStorage.setItem(key,JSON.stringify({missions:completedAtStart,quizPassed,rewarded,updatedAt:Date.now()}));}
  catch { if(log)log.textContent='無法使用本機儲存，這次的學習紀錄只保留在目前頁面。'; }
}
function say(text:string){
  if(!voice||!('speechSynthesis' in window))return;
  window.speechSynthesis.cancel();
  const utterance=new SpeechSynthesisUtterance(text);
  utterance.lang='zh-TW';utterance.rate=.88;utterance.pitch=1.1;
  window.speechSynthesis.speak(utterance);
}
function setText(el:HTMLElement|null,text:string){if(el)el.textContent=text;}
function sync(){
  if(!world)return;
  setText(readout,world.readout());
  const done=world.completed().map((yes,i)=>yes||completedAtStart.includes(i));
  completedAtStart=done.flatMap((yes,i)=>yes?[i]:[]);
  if(quizPassed && done.every(Boolean))rewarded=true;
  if(id==='earth-moon')document.body.dataset.phase=world.selected('phase');
  setText(progress,done.filter(Boolean).length+' / '+done.length+' 項任務');
  if(missions){
    missions.innerHTML=world.missions.map((m,i)=>
      '<li class="'+(done[i]?'is-done':'')+'"><span aria-hidden="true">'+(done[i]?'✓':(i+1))+'</span><div><strong>'+m.title+'</strong><small>'+m.detail+'</small></div></li>'
    ).join('');
  }
  if(reward)reward.textContent=rewarded?'已獲本模組成就：20 XP・5 星幣（本機紀錄）':done.every(Boolean)?'任務完成！點上方鉛筆作答領取本機成就':'完成任務再挑戰考題';
  if(log)log.textContent=done.filter(Boolean).length+' 項已完成。成就目前只儲存在此瀏覽器，尚未併入主站帳戶。';
  save();
}
function showControls(){
  if(!world||!controls)return;
  const groups= id==='ocean'?world.controls.filter(x=>tab==='object'?x.id==='object':x.id!=='object'):world.controls;
  controls.innerHTML=groups.map(group=>'<fieldset class="ep-group"><legend>'+group.title+'</legend><div class="ep-options">'+group.values.map(v=>
    '<button type="button" data-control="'+group.id+'" data-value="'+v.id+'" aria-pressed="'+(world!.selected(group.id)===v.id)+'">'+v.label+'</button>'
  ).join('')+'</div></fieldset>').join('');
}
function selectTab(next:'object'|'conditions'){
  tab=next;
  body.dataset.tab=tab;
  document.querySelectorAll<HTMLButtonElement>('[data-control-tab]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.controlTab===tab)));
  showControls();
}
function handleQuiz(){
  if(!world||!quiz||!quizBody)return;
  const q=world.quiz;
  const complete=completedAtStart.length===world.missions.length;
  quizBody.innerHTML='<h2>看圖想一想</h2><p>'+q.question+'</p><div class="ep-answers">'+q.answers.map((answer,i)=>
    '<button type="button" data-answer="'+i+'"><span aria-hidden="true">'+(i+1)+'</span>'+answer+'</button>').join('')+'</div><p id="ep-quiz-feedback" role="status">'+
    (complete?'請挑一張答案卡。':'可以先試答；要完成任務才能領取成就。')+'</p>';
  quiz.hidden=false;
  const button=quiz.querySelector<HTMLElement>('[data-answer]');
  button?.focus();
}
function closeQuiz(){if(quiz)quiz.hidden=true;}
function handleAnswer(answer:number){
  if(!world||!quiz)return;
  const feedback=document.getElementById('ep-quiz-feedback');
  const correct=answer===world.quiz.correct;
  if(feedback)feedback.textContent=(correct?'答對了！ ':'再觀察一下。 ')+world.quiz.explanation;
  if(correct){
    quizPassed=true;
    if(completedAtStart.length===world.missions.length&&!rewarded)rewarded=true;
    sync();
  }
  quiz.querySelectorAll<HTMLButtonElement>('[data-answer]').forEach(b=>{b.setAttribute('aria-pressed',String(Number(b.dataset.answer)===answer));});
  say((feedback?.textContent)||'');
}
function observe(){
  if(!world)return;
  world.observe();
  sync();
  const t=world.readout();
  setText(message,'觀察完成。'+t);
  say(t);
}
function reset(){
  if(!world)return;
  world.reset();
  completedAtStart=[];
  quizPassed=false;
  // A completed reward is earned once; restarting never grants it again.
  sync();showControls();closeQuiz();setText(message,'重新開始探索！選好條件後按「放入／觀察」。');
}
function installEvents(){
  document.getElementById('ep-observe')?.addEventListener('click',observe);
  document.getElementById('ep-reset')?.addEventListener('click',reset);
  document.getElementById('ep-quiz-open')?.addEventListener('click',handleQuiz);
  document.getElementById('ep-quiz-close')?.addEventListener('click',closeQuiz);
  document.getElementById('ep-voice')?.addEventListener('click',event=>{
    voice=!voice;(event.currentTarget as HTMLButtonElement).setAttribute('aria-pressed',String(voice));
    if(!voice&&'speechSynthesis' in window)window.speechSynthesis.cancel();
    else if(world)say(world.intro);
  });
  document.getElementById('ep-replay')?.addEventListener('click',()=>world&&say(world.intro+' '+world.readout()));
  controls?.addEventListener('click',event=>{
    const button=(event.target as Element).closest<HTMLButtonElement>('[data-control][data-value]');
    if(!button||!world)return;
    world.choose(button.dataset.control||'',button.dataset.value||'');
    controls.querySelectorAll<HTMLButtonElement>('[data-control="'+button.dataset.control+'"]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
    sync();setText(message,world.readout());
  });
  document.querySelectorAll<HTMLButtonElement>('[data-control-tab]').forEach(b=>b.addEventListener('click',()=>selectTab(b.dataset.controlTab as 'object'|'conditions')));
  document.querySelectorAll<HTMLButtonElement>('[data-mode]').forEach(b=>b.addEventListener('click',()=>{
    mode=b.dataset.mode==='free'?'free':'guide';
    body.dataset.mode=mode;
    document.querySelectorAll<HTMLButtonElement>('[data-mode]').forEach(x=>x.setAttribute('aria-pressed',String(x.dataset.mode===mode)));
  }));
  quiz?.addEventListener('click',event=>{
    const option=(event.target as Element).closest<HTMLButtonElement>('[data-answer]');
    if(option)handleAnswer(Number(option.dataset.answer));
  });
  document.querySelectorAll<HTMLButtonElement>('[data-move]').forEach(b=>b.addEventListener('click',()=>world?.move?.(b.dataset.move||'')));
  window.addEventListener('keydown',event=>{
    if(!world?.move||!['ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(event.key))return;
    if(event.target instanceof HTMLButtonElement||event.target instanceof HTMLInputElement)return;
    event.preventDefault();world.move(event.key.replace('Arrow','').toLowerCase());
  });
  window.addEventListener('pagehide',()=>{if('speechSynthesis' in window)window.speechSynthesis.cancel();world?.dispose();stage?.destroy();},{once:true});
  document.addEventListener('visibilitychange',()=>{if(document.hidden&&'speechSynthesis' in window)window.speechSynthesis.cancel();});
}
async function boot(){
  if(!allowed.includes(id)||!host){setText(message,'找不到這顆實驗星球。請返回實驗列表。');return;}
  installEvents();
  try{
    stage=new Stage(host,id==='ocean');
    world=id==='ocean' ? (await import('./ocean')).createOcean(stage) : (await import('./five')).createOther(stage,id);
    stage.onFrame=(dt:number)=>world?.tick(dt);
    setText(document.getElementById('ep-title'),world.name);
    setText(document.getElementById('ep-intro'),world.intro);
    document.body.dataset.planetReady='true';
    const stored=currentSave();
    completedAtStart=stored.missions;
    quizPassed=stored.quizPassed;
    rewarded=stored.rewarded;
    document.getElementById('ep-dpad')?.classList.toggle('is-hidden',id!=='ocean');
    document.getElementById('ep-tab-bar')?.classList.toggle('is-hidden',id!=='ocean');
    if(id!=='ocean')body.dataset.tab='conditions';
    setText(document.getElementById('ep-observe'),id==='ocean'?'放入水中':'觀察變化');
    selectTab(id==='ocean'?'object':'conditions');
    sync();
    setText(message,'選好條件後，按「'+(id==='ocean'?'放入水中':'觀察變化')+'」。');
  }catch(error){
    console.error('Experiment planet initialization failed',error);
    setText(message,'這顆星球載入失敗。請返回實驗列表後重試。');
    stage?.destroy();
  }
}
void boot();
