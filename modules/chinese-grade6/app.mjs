import { PracticeRound,questionSeconds } from './model.mjs';
import { mountWriting } from './writing.mjs';
const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const passage=u=>`<section class="passage" aria-label="原創短文">${u.passage.map(p=>`<p>${esc(p)}</p>`).join('')}</section>`;
function registryPanel(registry){
 if(!registry)return '';
 return `<section class="panel" aria-label="115學年度官方書目核實"><h2>115學年度官方書目核實</h2><p>國語第 ${esc(registry.volume)} 冊 · ${esc(registry.grade)} 年級。保留原有 115 上學期目錄與練習，以下另列書籍層級資料。</p><ul>${registry.publishers.map(p=>`<li><strong>${esc(p.publisher)}</strong>：${esc(p.edition)} · ${esc(p.license)} · 再版修訂文號 ${esc(p.revision)}</li>`).join('')}</ul><p>${esc(registry.scope)}</p><p><a href="${esc(registry.url)}" target="_blank" rel="noopener noreferrer">${esc(registry.sourceTitle)} ↗</a>（文件更新 ${esc(registry.sourceUpdatedAt)}；PDF 第 ${esc(registry.sourcePage)} 頁；核對 ${esc(registry.checkedAt)}）</p></section>`;
}
export function mountPractice(root,bank,sources,{seconds=30,now=()=>Date.now(),schedule=setInterval,cancel=clearInterval,writingOptions={},initialUnit=null}={}){
 let round=null,timer=null,screen='home',writing=null;
 const leaveWriting=()=>{if(writing&&!writing.canLeave())return false;writing?.destroy();writing=null;return true;};
 const stop=()=>{if(timer!==null)cancel(timer);timer=null;round?.exit();round=null;};
 const notice='<p class="notice">六年級基礎閱讀與思辨補充，非出版社課文；未核定對應任何出版社課目的學習目標。不提供注音或朗讀。本頁不儲存姓名、成績或發放獎勵。</p>';
 const heading='<header><a href="index.html">← 學習星球</a><a href="chinese-practice.html">國語生字練習簿</a><button data-action="home">原創練習首頁</button><button data-action="sources">出版社來源對照</button></header>';
 function render(){
  let body='';
  if(screen==='sources')body=`<h1>六上課程來源對照</h1><p>115 上學期 · 36筆出版社目錄資訊，不是已完成教材。教材尚未建置、學習目標待核；不提供出版社課文。逐課對應的印刷版次未核；官方書籍資料另列於下方。</p>${registryPanel(sources.bookRegistry)}${['南一版','康軒版','翰林版'].map(pub=>`<section class="panel"><h2>${pub}</h2><ul>${sources.lessons.filter(l=>l.publisher===pub).map(l=>`<li><a href="${esc(l.sourceUrl)}" target="_blank" rel="noopener noreferrer">${esc(l.title)} ↗</a><div class="notice">教材尚未建置 · 學習目標待核 · ${esc(l.checkedAt)} 核目錄標題</div></li>`).join('')}</ul></section>`).join('')}`;
  else if(!round)body=`<h1>六年級原創能力練習</h1>${notice}<p>${bank.units.length}課原創閱讀材料、共${bank.units.reduce((sum,u)=>sum+u.questions.length,0)}題。每課一回10題，現有題庫每課10題，不代表已完成全部能力題庫。</p><p>先讀短文，不計時。按開始後每題 ${questionSeconds(seconds)} 秒，沿用一般題首回計時；查看短文時時間仍繼續，答完可看解析。</p><div class="cards">${bank.units.map(u=>`<article class="panel"><h2>${esc(u.title)}</h2><p>${esc(u.objective)}</p><button class="primary" data-unit="${esc(u.id)}">閱讀短文 →</button><button data-writing-unit="${esc(u.id)}">自行摘要與提出證據</button></article>`).join('')}</div>`;
  else {const u=round.unit,q=round.questions[round.index];body=`<h1>${esc(u.title)}</h1>${notice}<section class="panel">`;
   if(round.phase==='reading')body+=`${passage(u)}<p>讀完再開始：${round.questions.length}題，每題 ${round.seconds} 秒。</p><button class="primary" data-action="start">我讀完了，開始答題</button>`;
   else if(round.phase==='result')body+=`<h2>本回練習結果</h2><p>答對 ${round.answers.filter(a=>a.correct).length}／${round.questions.length} 題</p><p>這是本回作答結果，不代表能力已達成或題庫完成。可回首頁重新閱讀練習。</p><ol>${round.questions.map((item,i)=>`<li>${esc(item.prompt)}<br>你的答案：${esc(round.answers[i].answer??'未作答（逾時）')}<br>正解：${esc(item.answer)}<p>${esc(item.explanation)}</p></li>`).join('')}</ol><button data-action="home">返回原創練習首頁</button>`;
   else {const feedback=round.phase==='feedback',a=round.answers[round.index];body+=`<p>第 ${round.index+1}／${round.questions.length} 題 · <span class="timer" role="timer" aria-label="剩餘秒數">${feedback?'已作答':round.remaining()+' 秒'}</span></p><details><summary>查看原創短文${feedback?'':'（計時繼續）'}</summary>${passage(u)}</details><h2>${esc(q.prompt)}</h2><div class="options">${q.options.map((opt,i)=>`<button data-answer="${i}" ${feedback?'disabled':''}>${esc(opt)}</button>`).join('')}</div>${feedback?`<div class="feedback" role="status"><strong>${a.timedOut?'時間到':a.correct?'答對了':'再看看短文'}</strong><p>你的答案：${esc(a.answer??'未作答')}<br>正解：${esc(q.answer)}</p><p>${esc(q.explanation)}</p><button class="primary" data-action="next">${round.index===round.questions.length-1?'查看本回結果':'下一題'}</button></div>`:''}`;}
   body+='</section>';}
  root.innerHTML=heading+body;
 }
 function click(event){const headerLink=event.target.closest('header a');if(headerLink&&writing){
  // A new tab/window (or download gesture) does not leave this activity.
  if(event.ctrlKey||event.metaKey||event.shiftKey||event.altKey||(event.button!==undefined&&event.button!==0)||headerLink.target==='_blank')return;
  if(!leaveWriting())event.preventDefault();return;}
 const el=event.target.closest('button');if(!el||!root.contains(el))return;
  if(el.dataset.writingUnit){const u=bank.units.find(x=>x.id===el.dataset.writingUnit);if(!u||!leaveWriting())return;stop();screen='writing';root.innerHTML=heading+'<section id="writing-panel"></section>';writing=mountWriting(root.querySelector('#writing-panel'),u,writingOptions);return;}
  if(el.dataset.unit){if(!leaveWriting())return;const u=bank.units.find(x=>x.id===el.dataset.unit);if(!u)return;stop();screen='practice';round=new PracticeRound(u,seconds,now);render();return;}
  const action=el.dataset.action;
  if(action==='home'||action==='sources'){if(!leaveWriting())return;stop();screen=action;render();return;}
  if(!round)return;
  if(action==='start'&&round.start()){const active=round;timer=schedule(()=>{if(round!==active||!active.active)return;if(active.tick())render();else{const node=root.querySelector('.timer');if(node&&active.phase==='question')node.textContent=active.remaining()+' 秒';}},250);render();}
  else if(action==='next'&&round.next()){if(round.phase==='result'&&timer!==null){cancel(timer);timer=null;}render();}
  else if(el.dataset.answer!==undefined){const opt=round.questions[round.index].options[Number(el.dataset.answer)];if(round.answer(opt))render();}
 }
 const starting=typeof initialUnit==='string'&&bank.units.find(u=>u.id===initialUnit);
 if(starting){screen='practice';round=new PracticeRound(starting,seconds,now);}
 root.addEventListener('click',click);render();
 return {isDirty:()=>!!writing?.isDirty(),getWriting:()=>writing,suspend(){writing?.destroy();writing=null;stop();screen='home';render();},destroy(){writing?.destroy();writing=null;stop();root.removeEventListener('click',click);},getRound:()=>round};
}
const root=typeof document!=='undefined'?document.querySelector('#grade6-app'):null;
if(root){Promise.all(['chinese-grade6-original-skills.json','chinese-grade6-source-map.json'].map(async name=>{const r=await fetch(new URL(name,import.meta.url));if(!r.ok)throw Error('load');return r.json();})).then(([bank,sources])=>{
 const params=new URLSearchParams(location.search);
 const app=mountPractice(root,bank,sources,{seconds:questionSeconds(params.get('seconds')),initialUnit:params.get('unit')});window.addEventListener('pagehide',()=>app.suspend());window.addEventListener('beforeunload',event=>{if(app.isDirty()){event.preventDefault();event.returnValue='';}});
 }).catch(()=>{root.innerHTML='<h1>教材暫時無法載入</h1><p>請重新整理再試，未建立任何作答紀錄。</p><a href="index.html">返回學習星球</a>';});}
