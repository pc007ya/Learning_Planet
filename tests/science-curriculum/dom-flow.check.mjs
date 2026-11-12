import test from 'node:test';import assert from'node:assert/strict';import{readFileSync}from'node:fs';
import{parseHTML}from'linkedom';
import{openScienceCurriculum}from'../../modules/science-curriculum/launch.mjs';
import{acquireProgressLease}from'../../modules/science-curriculum/session-lock.mjs';
import{createCurriculumEngine}from'../../modules/science-curriculum/engine.mjs';
const catalog=JSON.parse(readFileSync(new URL('../../data/science-curriculum/catalog.json',import.meta.url)));const content=JSON.parse(readFileSync(new URL('../../data/science-curriculum/exercises.json',import.meta.url)));
// Full authored candidate data; no synthetic padding of bank counts.
const domContent=content;
const testLocks={held:new Set(),async request(key,options,callback){await Promise.resolve();if(this.held.has(key))return callback(null);this.held.add(key);try{return await callback({name:key});}finally{this.held.delete(key);}}};
const storageMap=new Map();let failFetch=false,historyBacks=0,contentOverride=null;
function setup(){
 const {window:domWindow}=parseHTML('<!doctype html><html><head></head><body><button id="opener">入口</button></body></html>');
 const window=new Proxy(domWindow,{get(target,key){return key==='navigator'?globalThis.navigator:Reflect.get(target,key)}});
 globalThis.window=window;globalThis.document=window.document;Object.defineProperty(globalThis,'navigator',{configurable:true,value:{locks:testLocks}});globalThis.location={hostname:'localhost',href:'http://localhost/science-curriculum-preview.html'};
 globalThis.history={state:{host:'original'},pushState(s){this.state=s},replaceState(s){this.state=s},back(){this.state={host:'original'};historyBacks++;window.dispatchEvent(new window.Event('popstate'))}};
 globalThis.localStorage={getItem:k=>storageMap.get(k)||null,setItem:(k,v)=>storageMap.set(k,v)};
 globalThis.speechSynthesis=window.speechSynthesis={cancel(){},getVoices(){return[]},speak(){}};globalThis.SpeechSynthesisUtterance=function(text){this.text=text};window.SpeechSynthesisUtterance=SpeechSynthesisUtterance;
 window.HTMLElement.prototype.showModal=function(){this.open=true};window.HTMLElement.prototype.close=function(){this.open=false};window.HTMLElement.prototype.focus=function(){Object.defineProperty(document,'activeElement',{configurable:true,value:this})};document.querySelector('#opener').focus();
 globalThis.fetch=async url=>{if(failFetch&&String(url).endsWith('exercises.json'))return new Response('',{status:503});if(String(url).endsWith('exercises.json'))return new Response(JSON.stringify(contentOverride||domContent),{status:200});return new Response(readFileSync(new URL(url)),{status:200,headers:{'Content-Type':'application/json'}})};
 return window;
}
function buttons(){return [...document.querySelectorAll('button')]}function clickText(text){const b=buttons().find(b=>b.textContent===text);assert.ok(b,'button '+text);b.click();return b}function click(s){const b=document.querySelector(s);assert.ok(b,s);b.click();return b}const tick=()=>new Promise(r=>setTimeout(r,10));
function chooseAndSubmit(selector){const b=click(selector);const submit=document.querySelector('.sc-submit');if(submit&&!submit.disabled)submit.click();return b;}
async function waitFor(selector){for(let i=0;i<50;i++){if(document.querySelector(selector))return;await tick()}throw Error('Not found '+selector)}
test('DOM flow: all24cells, quiz save/resume, no cross-unit corruption, tasks and dismissal',async()=>{
 setup();storageMap.clear();localStorage.setItem('lp-profiles','DO-NOT-CHANGE');const close=await openScienceCurriculum({grade:1,learnerId:'test-a'});assert.equal(document.querySelectorAll('dialog').length,1);assert.equal(await openScienceCurriculum({grade:1,learnerId:'test-a'}),close);assert.equal(document.querySelectorAll('dialog').length,1);
 for(const p of ['康軒','南一'])for(let g=1;g<=6;g++)for(const t of [1,2]){clickText(g+'年級');clickText(p);clickText(t===1?'上學期':'下學期');assert.equal(document.querySelectorAll('.sc-card').length,catalog.units.filter(u=>u.grade===g&&u.publisher===p&&u.semester===t).length)}
 clickText('1年級');clickText('康軒');clickText('上學期');const uid=document.querySelector('[data-unit-id]').dataset.unitId;click('[data-unit-id]');const qid=document.querySelector('.sc-question').dataset.questionId;chooseAndSubmit('[data-option-index]');chooseAndSubmit('[data-option-index]');const key='lp-science-curriculum-candidate-v2:test-a';let s=JSON.parse(localStorage.getItem(key));assert.equal(Object.keys(s.units[uid].active.answers).length,1);assert.equal(document.querySelectorAll('[data-option-index][disabled]').length,4);
 clickText('← 單元列表');buttons().filter(b=>b.textContent==='實作與反思')[1].click();clickText('← 單元列表');s=JSON.parse(localStorage.getItem(key));assert.equal(Object.keys(s.units).length,1);
 close();assert.equal(document.querySelectorAll('dialog').length,0);assert.equal(document.activeElement.id,'opener');await openScienceCurriculum({grade:1,learnerId:'test-a'});click('[data-unit-id]');assert.equal(document.querySelector('.sc-question').dataset.questionId,qid);assert.equal(document.querySelectorAll('[data-option-index][disabled]').length,4);
 while(document.querySelector('.sc-question')){if(document.querySelector('[data-option-index]:not([disabled])'))chooseAndSubmit('[data-option-index]');click('.sc-next')}
 s=JSON.parse(localStorage.getItem(key));assert.equal(s.units[uid].attempts.length,1);assert.equal(s.units[uid].attempts[0].total,s.units[uid].attempts[0].answers.length);assert.equal(new Set(s.units[uid].attempts[0].answers.map(a=>a.questionId)).size,s.units[uid].attempts[0].total);
 clickText('實作與反思');const taskId=document.querySelector('.sc-task').dataset.taskId;const input=document.querySelector('textarea');input.value='<script>not executable</script>觀察';input.dispatchEvent(new window.Event('input'));const checkbox=document.querySelector('input[type=checkbox]');checkbox.checked=true;checkbox.dispatchEvent(new window.Event('change'));s=JSON.parse(localStorage.getItem(key));assert.equal(s.tasks[taskId].note,input.value);assert.equal(s.tasks[taskId].assessment,'self_check_not_verified');assert.equal(document.querySelectorAll('.sc-task script').length,0);assert.equal(localStorage.getItem('lp-profiles'),'DO-NOT-CHANGE');clickText('← 返回自然星球');
});
test('failed data load is retryable and does not modify saved records',async()=>{setup();const before=[...storageMap];failFetch=true;await openScienceCurriculum({learnerId:'load-failure'});assert.ok(document.body.textContent.includes('課程暫時無法開啟'));assert.deepEqual([...storageMap],before);failFetch=false;clickText('重試');await waitFor('.sc-grid');clickText('← 返回自然星球');});
test('corrupt progress is preserved instead of silently reset',async()=>{setup();const key='lp-science-curriculum-candidate-v2:corrupt';localStorage.setItem(key,'ORIGINAL-CORRUPT');await openScienceCurriculum({learnerId:'corrupt'});assert.match(document.body.textContent,/原資料保留/);click('[data-unit-id]');assert.equal(document.querySelector('.sc-question'),null);assert.equal(localStorage.getItem(key),'ORIGINAL-CORRUPT');clickText('← 返回自然星球');});
test('learner change closes overlay before any further action',async()=>{setup();let active=true;await openScienceCurriculum({learnerId:'switch',isActive:()=>active});active=false;clickText('2年級');assert.equal(document.querySelectorAll('dialog').length,0);});
test('browser history pop closes the overlay without extra back navigation',async()=>{setup();await openScienceCurriculum({learnerId:'history'});const before=historyBacks;window.dispatchEvent(new window.Event('popstate'));assert.equal(document.querySelectorAll('dialog').length,0);assert.equal(historyBacks,before);});
test('audited existing reading tokens load and preference persists',async()=>{setup();await openScienceCurriculum({learnerId:'readings'});clickText('ㄅ 注音');await waitFor('ruby');assert.ok(document.querySelectorAll('ruby rt').length>0);assert.equal(JSON.parse(localStorage.getItem('lp-science-curriculum-candidate-v2:readings')).settings.zhuyin,true);clickText('← 返回自然星球');await openScienceCurriculum({learnerId:'readings'});assert.ok(document.querySelectorAll('ruby rt').length>0);clickText('← 返回自然星球');});
test('multi-session observations persist as self-records and reject empty entries',async()=>{
 setup();storageMap.clear();await openScienceCurriculum({learnerId:'observations'});clickText('實作與反思');
 const taskId=document.querySelector('.sc-task').dataset.taskId;const k='lp-science-curriculum-candidate-v2:observations';clickText('加入這次紀錄');assert.equal(localStorage.getItem(k),null);assert.match(document.body.textContent,/請填日期/);
 const note=document.querySelector('textarea[aria-label="這次觀察紀錄"]');note.value='<img src=x onerror=alert(1)>今天觀察到變化';const b=clickText('加入這次紀錄');b.click();
 const state=JSON.parse(localStorage.getItem(k));assert.equal(state.tasks[taskId].observations.length,1);assert.equal(state.tasks[taskId].observations[0].assessment,'self_record_not_verified');assert.ok(state.tasks[taskId].observations[0].note.includes('<img'));assert.equal(document.querySelectorAll('.sc-observation-row img').length,0);
 clickText('← 返回自然星球');await openScienceCurriculum({learnerId:'observations'});clickText('實作與反思');assert.equal(document.querySelectorAll('.sc-observation-row').length,1);assert.match(document.querySelector('.sc-observation-row').textContent,/今天觀察到變化/);clickText('← 返回自然星球');
});
test('new rounds always contain ten questions and preserve legacy short-round preference as history',async()=>{
 setup();storageMap.clear();const k='lp-science-curriculum-candidate-v2:round-length';localStorage.setItem(k,JSON.stringify({schemaVersion:1,units:{},tasks:{},settings:{roundCount:3}}));await openScienceCurriculum({grade:1,learnerId:'round-length'});assert.equal(buttons().some(b=>['3題','5題'].includes(b.textContent)),false);click('[data-unit-id]');let state=JSON.parse(localStorage.getItem(k));assert.equal(state.settings.roundCount,3);assert.equal(Object.values(state.units)[0].active.requestedCount,10);assert.equal(Object.values(state.units)[0].active.questions.length,10);clickText('← 返回自然星球');
 await openScienceCurriculum({grade:6,learnerId:'round-length'});click('[data-unit-id]');state=JSON.parse(localStorage.getItem(k));assert.equal(Object.values(state.units).at(-1).active.questions.length,10);clickText('← 返回自然星球');
});

test('identity changes block answer and task writes before the watcher tick',async()=>{
 setup();storageMap.clear();let active=true;await openScienceCurriculum({learnerId:'stale-answer',isActive:()=>active});click('[data-unit-id]');const key='lp-science-curriculum-candidate-v2:stale-answer';const before=localStorage.getItem(key);active=false;chooseAndSubmit('[data-option-index]');assert.equal(localStorage.getItem(key),before);assert.equal(document.querySelectorAll('dialog').length,0);
 active=true;await openScienceCurriculum({learnerId:'stale-task',isActive:()=>active});clickText('實作與反思');const input=document.querySelector('textarea');active=false;input.value='不能寫到前位學生';input.dispatchEvent(new window.Event('input'));assert.equal(localStorage.getItem('lp-science-curriculum-candidate-v2:stale-task'),null);assert.equal(document.querySelectorAll('dialog').length,0);
});

test('changed task instructions preserve notes and archive old checks instead of blessing new rubrics',async()=>{
 setup();storageMap.clear();await openScienceCurriculum({learnerId:'task-version'});clickText('實作與反思');const tid=document.querySelector('.sc-task').dataset.taskId;const box=document.querySelector('input[type=checkbox]');box.checked=true;box.dispatchEvent(new window.Event('change'));const note=document.querySelector('textarea');note.value='保留我的原觀察';note.dispatchEvent(new window.Event('input'));clickText('← 返回自然星球');
 contentOverride=structuredClone(content);contentOverride.version+='-changed';contentOverride.tasks.find(t=>t.id===tid).rubric[0]='全新的觀察要求，需重新檢查';await openScienceCurriculum({learnerId:'task-version'});clickText('實作與反思');assert.equal(document.querySelector('input[type=checkbox]').checked,false);assert.equal(document.querySelector('textarea').value,'保留我的原觀察');assert.match(document.body.textContent,/重新自評/);const next=document.querySelector('input[type=checkbox]');next.checked=true;next.dispatchEvent(new window.Event('change'));const saved=JSON.parse(localStorage.getItem('lp-science-curriculum-candidate-v2:task-version')).tasks[tid];assert.equal(saved.priorAssessments.length,1);assert.equal(saved.priorAssessments[0].checks[0],true);assert.equal(saved.note,'保留我的原觀察');assert.equal(saved.curriculumVersion,contentOverride.version);clickText('← 返回自然星球');contentOverride=null;
});
test('dependent upper-grade tasks use readable names and accessible local links',async()=>{setup();await openScienceCurriculum({grade:5,learnerId:'dependency'});clickText('下學期');const cards=[...document.querySelectorAll('.sc-card')],card=cards.find(c=>c.querySelector('[data-unit-id]').dataset.unitId==='s-kh-g5-t2-u04');assert.ok(card);[...card.querySelectorAll('button')].find(b=>b.textContent==='實作與反思').click();const t=document.querySelector('[data-task-id="s-kh-g5-t2-u04-task03"]');assert.doesNotMatch(t.querySelector('.sc-task-prompt').textContent,/s-kh-g/);assert.match(t.querySelector('.sc-task-prompt').textContent,/探索任務 2/);t.querySelector('.sc-task-dependencies button').click();assert.equal(document.activeElement.dataset.taskId,'s-kh-g5-t2-u04-task02');clickText('← 返回自然星球');});
test('long inquiry shows labeled steps and keeps the adult safety instruction visible',async()=>{setup();await openScienceCurriculum({grade:5,learnerId:'steps'});clickText('下學期');const card=[...document.querySelectorAll('.sc-card')].find(c=>c.querySelector('[data-unit-id]').dataset.unitId==='s-kh-g5-t2-u04');[...card.querySelectorAll('button')].find(b=>b.textContent==='實作與反思').click();const t=document.querySelector('[data-task-id="s-kh-g5-t2-u04-task02"]'),source=content.tasks.find(x=>x.id===t.dataset.taskId);assert.equal(t.querySelectorAll('.sc-task-steps li').length,source.instruction_steps.length);assert.equal([...t.querySelectorAll('.sc-step-text')].map(p=>p.textContent).join(''),source.prompt);assert.match(t.textContent,/請成人或老師陪同/);assert.equal(t.querySelectorAll('.sc-task-prompt').length,0);clickText('← 返回自然星球');});
test('speech cancellation is silent and real playback errors remain actionable',async()=>{setup();await openScienceCurriculum({learnerId:'speech-events'});click('[data-unit-id]');const spoken=[];window.speechSynthesis.speak=u=>spoken.push(u);clickText('🔊 聽題目');assert.equal(spoken[0].lang,'zh-TW');assert.equal(spoken[0].rate,.8);const staleError=spoken[0].onerror;chooseAndSubmit('[data-option-index]');staleError({error:'canceled'});assert.doesNotMatch(document.body.textContent,/朗讀未能播放/);clickText('🔊 聽題目');spoken[1].onerror({error:'interrupted'});assert.doesNotMatch(document.body.textContent,/朗讀未能播放/);clickText('🔊 聽題目');spoken[2].onerror({error:'synthesis-unavailable'});assert.match(document.body.textContent,/朗讀未能播放/);assert.ok(document.querySelector('.sc-feedback'));clickText('← 返回自然星球');});
test('hidden pages stop speech and close removes the visibility listener',async()=>{setup();let cancels=0,spoken;window.speechSynthesis.cancel=()=>cancels++;window.speechSynthesis.speak=u=>spoken=u;await openScienceCurriculum({learnerId:'speech-hidden'});click('[data-unit-id]');clickText('🔊 聽題目');const prior=spoken.onerror,before=cancels;Object.defineProperty(document,'hidden',{configurable:true,value:true});document.dispatchEvent(new window.Event('visibilitychange'));assert.ok(cancels>before);prior({error:'canceled'});assert.doesNotMatch(document.body.textContent,/朗讀未能播放/);clickText('← 返回自然星球');const after=cancels;document.dispatchEvent(new window.Event('visibilitychange'));assert.equal(cancels,after);});
test('modal Tab and Shift-Tab wrap without intercepting browser shortcuts',async()=>{setup();await openScienceCurriculum({learnerId:'focus-wrap'});const dialog=document.querySelector('dialog'),all=[...dialog.querySelectorAll('button:not([disabled])')],first=all[0],last=all.at(-1);const key=(shift=false,ctrl=false)=>{const e=new window.Event('keydown',{bubbles:true,cancelable:true});Object.assign(e,{key:'Tab',shiftKey:shift,ctrlKey:ctrl});dialog.dispatchEvent(e);return e;};last.focus();assert.equal(key().defaultPrevented,true);assert.equal(document.activeElement,first);assert.equal(key(true).defaultPrevented,true);assert.equal(document.activeElement,last);assert.equal(key(false,true).defaultPrevented,false);assert.equal(document.activeElement,last);clickText('← 返回自然星球');});

test('speech error preserves unsubmitted observation, date and focused control',async t=>{
 setup();storageMap.clear();let spoken;window.speechSynthesis.speak=u=>spoken=u;
 const close=await openScienceCurriculum({learnerId:'speech-draft'});t.after(close);clickText('實作與反思');
 const draft=document.querySelector('textarea[aria-label="這次觀察紀錄"]'),date=document.querySelector('input[type=date]');
 draft.value='還沒有按加入的真實觀察';date.value='2026-11-10';const control=clickText('🔊 聽任務');control.focus();
 spoken.onerror({error:'synthesis-unavailable'});
 assert.ok(document.querySelector('textarea[aria-label="這次觀察紀錄"]')===draft,'speech feedback must not replace the form');
 assert.equal(draft.value,'還沒有按加入的真實觀察');assert.equal(date.value,'2026-11-10');assert.equal(document.activeElement,control);
 assert.equal(localStorage.getItem('lp-science-curriculum-candidate-v2:speech-draft'),null,'draft is not auto-saved as observation evidence');
});
test('optional voice inventory failure does not prevent browser default speech',async t=>{
 setup();let spoken;window.speechSynthesis.getVoices=()=>{throw Error('inventory temporarily unavailable')};window.speechSynthesis.speak=u=>spoken=u;
 const close=await openScienceCurriculum({learnerId:'speech-voice-inventory'});t.after(close);click('[data-unit-id]');clickText('🔊 聽題目');
 assert.ok(spoken,'the native default voice should still be attempted');assert.equal(spoken.lang,'zh-TW');assert.equal(spoken.voice,undefined);
});

test('speech retry clears stale errors without replacing the question or changing focus',async t=>{
 setup();const spoken=[];window.speechSynthesis.speak=u=>spoken.push(u);
 const close=await openScienceCurriculum({learnerId:'speech-retry'});t.after(close);click('[data-unit-id]');const question=document.querySelector('.sc-question');
 const control=clickText('🔊 聽題目');control.focus();spoken[0].onerror({error:'synthesis-unavailable'});
 assert.match(document.querySelector('.sc-speech-status').textContent,/語音服務目前無法使用/);assert.ok(document.querySelector('.sc-question')===question);
 clickText('🔊 聽題目');assert.equal(document.querySelector('.sc-speech-status').hidden,true);spoken[1].onstart();assert.match(document.querySelector('.sc-speech-status').textContent,/正在朗讀/);
 assert.ok(document.activeElement===control);spoken[1].onend();assert.equal(document.querySelector('.sc-speech-status').hidden,true);assert.ok(document.querySelector('.sc-question')===question);
});
for(const [code,expected] of [
 ['synthesis-unavailable','語音服務目前無法使用'],['language-unavailable','不支援所需的中文語音'],['voice-unavailable','目前選用的語音無法使用'],
 ['audio-busy','音訊目前忙碌'],['audio-hardware','音訊輸出目前無法使用'],['network','語音服務連線失敗'],['not-allowed','未允許這次朗讀'],
 ['text-too-long','長度限制'],['synthesis-failed','暫時無法完成'],['arbitrary <img> secret text','暫時無法完成'],['toString','暫時無法完成']
])test('speech error code gives bounded actionable feedback: '+code,async t=>{
 setup();storageMap.clear();let spoken;window.speechSynthesis.speak=u=>spoken=u;const close=await openScienceCurriculum({learnerId:'speech-errors'});t.after(close);click('[data-unit-id]');clickText('🔊 聽題目');spoken.onerror({error:code});
 const status=document.querySelector('.sc-speech-status');assert.ok(status.textContent.includes(expected));assert.equal(status.hidden,false);assert.equal(document.querySelectorAll('.sc-speech-status').length,1);assert.doesNotMatch(status.textContent,/<img>|secret/);
 chooseAndSubmit('[data-option-index]');assert.ok(document.querySelector('.sc-feedback'));assert.equal(document.querySelector('.sc-speech-status').hidden,true);
});
test('missing speech API keeps observation drafts and focus intact',async t=>{
 setup();window.speechSynthesis=null;const close=await openScienceCurriculum({learnerId:'speech-missing'});t.after(close);clickText('實作與反思');
 const draft=document.querySelector('textarea[aria-label="這次觀察紀錄"]');draft.value='保留未送出的草稿';const control=clickText('🔊 聽任務');control.focus();clickText('🔊 聽任務');
 assert.match(document.querySelector('.sc-speech-status').textContent,/沒有朗讀功能/);assert.ok(document.querySelector('textarea[aria-label="這次觀察紀錄"]')===draft);assert.equal(draft.value,'保留未送出的草稿');assert.ok(document.activeElement===control);
});
test('synchronous speech exceptions retain form state and allow another attempt',async t=>{
 setup();window.speechSynthesis.speak=()=>{throw Error('native failure')};const close=await openScienceCurriculum({learnerId:'speech-throw'});t.after(close);clickText('實作與反思');
 const draft=document.querySelector('textarea[aria-label="這次觀察紀錄"]');draft.value='保留草稿';clickText('🔊 聽任務');assert.match(document.querySelector('.sc-speech-status').textContent,/朗讀未能播放/);assert.ok(document.querySelector('textarea[aria-label="這次觀察紀錄"]')===draft);
 let spoken;window.speechSynthesis.speak=u=>spoken=u;clickText('🔊 聽任務');assert.ok(spoken);assert.equal(document.querySelector('.sc-speech-status').hidden,true);assert.equal(draft.value,'保留草稿');
});
test('delayed voice inventories stay synchronous and select a voice on a later click',async t=>{
 setup();let voices=[],spoken=[],insideClick=false;window.speechSynthesis.getVoices=()=>voices;window.speechSynthesis.speak=u=>{assert.equal(insideClick,true);spoken.push(u)};
 const close=await openScienceCurriculum({grade:6,learnerId:'speech-voices-delayed'});t.after(close);click('[data-unit-id]');insideClick=true;clickText('🔊 聽題目');insideClick=false;assert.equal(spoken[0].voice,undefined);assert.equal(spoken[0].rate,.9);
 const voice={lang:'zh-TW',name:'Test-only voice'};voices=[{lang:'en-US',name:'Other'},voice];insideClick=true;clickText('🔊 聽題目');insideClick=false;assert.equal(spoken[1].voice,voice);
 const staleStart=spoken[1].onstart,staleEnd=spoken[1].onend;close();staleStart();staleEnd();assert.equal(document.querySelectorAll('dialog').length,0);
});

test('speech status follows the clicked task without duplicating or moving draft controls',async t=>{
 setup();let spoken;window.speechSynthesis.speak=u=>spoken=u;const close=await openScienceCurriculum({learnerId:'speech-near-control'});t.after(close);clickText('實作與反思');
 const controls=[...document.querySelectorAll('.sc-speak')];assert.ok(controls.length>1);const drafts=[...document.querySelectorAll('textarea[aria-label="這次觀察紀錄"]')];drafts.forEach((d,i)=>d.value='未加入觀察 '+i);
 for(const control of [controls.at(-1),controls[0],controls.at(-1)]){control.focus();control.click();spoken.onerror({error:'synthesis-failed'});const status=document.querySelector('.sc-speech-status');assert.ok(control.nextElementSibling===status);assert.equal(document.querySelectorAll('.sc-speech-status').length,1);assert.ok(document.activeElement===control);}
 drafts.forEach((d,i)=>{assert.equal(d.value,'未加入觀察 '+i);assert.ok(d.isConnected)});
});

function finishRound(){while(document.querySelector('.sc-question')){if(document.querySelector('[data-option-index]:not([disabled])'))chooseAndSubmit('[data-option-index]:not([disabled])');click('.sc-next');}}
test('three rounds use thirty different questions and the fourth begins a declared new cycle',async t=>{
 setup();storageMap.clear();const close=await openScienceCurriculum({learnerId:'three-cycles'});t.after(close);click('[data-unit-id]');const key='lp-science-curriculum-candidate-v2:three-cycles',unitId=Object.keys(JSON.parse(localStorage.getItem(key)).units)[0],rounds=[];
 for(let i=0;i<4;i++){const state=JSON.parse(localStorage.getItem(key));rounds.push(state.units[unitId].active.questions.map(q=>q.id));assert.equal(rounds[i].length,10);assert.equal(new Set(rounds[i]).size,10);finishRound();if(i<3)clickText('再練一回');}
 assert.equal(new Set(rounds.slice(0,3).flat()).size,30);const state=JSON.parse(localStorage.getItem(key));assert.equal(state.units[unitId].questionPool.cycle,2);assert.equal(state.units[unitId].attempts.length,4);
});
test('reopening an unfinished round keeps its IDs, answers and reservation without drawing again',async t=>{
 setup();storageMap.clear();await openScienceCurriculum({learnerId:'resume-deck'});click('[data-unit-id]');chooseAndSubmit('[data-option-index]');const key='lp-science-curriculum-candidate-v2:resume-deck',before=JSON.parse(localStorage.getItem(key)),unitId=Object.keys(before.units)[0];clickText('← 返回自然星球');
 const close=await openScienceCurriculum({learnerId:'resume-deck',unitId});t.after(close);const after=JSON.parse(localStorage.getItem(key));assert.deepEqual(after.units[unitId].active,before.units[unitId].active);assert.deepEqual(after.units[unitId].questionPool,before.units[unitId].questionPool);assert.equal(document.querySelectorAll('[data-option-index][disabled]').length,4);
 finishRound();clickText('再練一回');const next=JSON.parse(localStorage.getItem(key));assert.equal(new Set([...before.units[unitId].active.questions,...next.units[unitId].active.questions].map(q=>q.id)).size,20);
});
test('legacy five-question run is archived intact and its allocated IDs are not drawn again',async t=>{
 setup();storageMap.clear();const unitId=catalog.units[0].id,old=createCurriculumEngine(catalog,domContent).createRound(unitId,{count:5,allowCandidate:true}),q=old.questions[0];
 const active={id:'old-five',unitId,requestedCount:5,version:'old-version',started:1,questions:old.questions,answers:{[q.id]:{questionId:q.id,selected:q.ans,correct:true,time:2}},index:1,warnings:old.warnings,finished:false};
 const key='lp-science-curriculum-candidate-v2:legacy-five';localStorage.setItem(key,JSON.stringify({schemaVersion:1,units:{[unitId]:{attempts:[],seen:[],active}},tasks:{saved:{note:'保留舊觀察',checks:[true]}},settings:{roundCount:5}}));
 const close=await openScienceCurriculum({learnerId:'legacy-five',unitId});t.after(close);const state=JSON.parse(localStorage.getItem(key));assert.deepEqual(state.units[unitId].interrupted[0],active);assert.equal(state.units[unitId].active.questions.length,10);assert.equal(new Set([...old.questions,...state.units[unitId].active.questions].map(x=>x.id)).size,15);assert.equal(state.tasks.saved.note,'保留舊觀察');assert.equal(state.settings.roundCount,5);
});
test('a failed reservation never exposes a playable round or claims it was saved',async t=>{
 setup();storageMap.clear();const close=await openScienceCurriculum({learnerId:'reserve-quota'});t.after(close);const save=localStorage.setItem;localStorage.setItem=()=>{throw Error('quota')};click('[data-unit-id]');assert.equal(document.querySelector('.sc-question'),null);assert.equal(localStorage.getItem('lp-science-curriculum-candidate-v2:reserve-quota'),null);assert.match(document.body.textContent,/未能保存/);localStorage.setItem=save;click('[data-unit-id]');assert.ok(document.querySelector('.sc-question'));
});
test('banks smaller than thirty fail closed without changing stored progress',async t=>{
 setup();storageMap.clear();const unitId=catalog.units[0].id;contentOverride=structuredClone(domContent);let kept=0;contentOverride.questions=contentOverride.questions.filter(q=>q.unit_id!==unitId||++kept<=29);t.after(()=>contentOverride=null);const close=await openScienceCurriculum({learnerId:'short-deck',unitId});t.after(close);assert.equal(document.querySelector('.sc-question'),null);assert.match(document.body.textContent,/至少30題/);assert.equal(localStorage.getItem('lp-science-curriculum-candidate-v2:short-deck'),null);
});
test('direct map entry chooses the exact unit and rejects an unknown ID without fallback',async t=>{
 setup();storageMap.clear();const unit=catalog.units.find(u=>u.publisher==='南一'&&u.grade===6&&u.semester===2);await openScienceCurriculum({learnerId:'direct-unit',grade:1,publisher:'康軒',semester:1,unitId:unit.id});assert.ok(document.querySelector('.sc-question'));const state=JSON.parse(localStorage.getItem('lp-science-curriculum-candidate-v2:direct-unit'));assert.deepEqual(Object.keys(state.units),[unit.id]);assert.ok(state.units[unit.id].active.questions.every(q=>q.unitId===unit.id));clickText('← 返回自然星球');
 const close=await openScienceCurriculum({learnerId:'unknown-unit',unitId:'unknown'});t.after(close);assert.match(document.body.textContent,/指定.*單元不存在/);assert.equal(document.querySelector('.sc-question'),null);assert.equal(localStorage.getItem('lp-science-curriculum-candidate-v2:unknown-unit'),null);
});
test('missing Web Locks prevents editing or allocation and explains the limitation',async t=>{
 setup();storageMap.clear();navigator.locks=null;const close=await openScienceCurriculum({learnerId:'no-web-lock'});t.after(close);assert.match(document.body.textContent,/Web Locks/);assert.equal(document.querySelector('[data-unit-id]'),null);assert.equal(localStorage.getItem('lp-science-curriculum-candidate-v2:no-web-lock'),null);
});
test('a second tab for the same learner cannot allocate until the first releases its session',async t=>{
 setup();storageMap.clear();const key='lp-science-curriculum-candidate-v2:busy-tab',other=await acquireProgressLease(testLocks,key);t.after(()=>other.release());await openScienceCurriculum({learnerId:'busy-tab'});assert.match(document.body.textContent,/另一個分頁/);assert.equal(localStorage.getItem(key),null);assert.equal(document.querySelector('[data-unit-id]'),null);clickText('← 返回自然星球');other.release();await tick();const close=await openScienceCurriculum({learnerId:'busy-tab'});t.after(close);click('[data-unit-id]');assert.equal(Object.values(JSON.parse(localStorage.getItem(key)).units)[0].questionPool.usedIds.length,10);
});
test('stale answer buttons cannot answer a newer question or overwrite progress',async t=>{
 setup();storageMap.clear();const close=await openScienceCurriculum({learnerId:'stale-button'});t.after(close);click('[data-unit-id]');const old=chooseAndSubmit('[data-option-index]');click('.sc-next');const key='lp-science-curriculum-candidate-v2:stale-button',before=localStorage.getItem(key);old.click();assert.equal(localStorage.getItem(key),before);assert.equal(document.querySelector('.sc-feedback'),null);
});
test('failed answer save leaves the question unscored and retryable',async t=>{
 setup();storageMap.clear();const close=await openScienceCurriculum({learnerId:'answer-quota'});t.after(close);click('[data-unit-id]');const save=localStorage.setItem,key='lp-science-curriculum-candidate-v2:answer-quota',before=localStorage.getItem(key);localStorage.setItem=()=>{throw Error('quota')};chooseAndSubmit('[data-option-index]');assert.equal(localStorage.getItem(key),before);assert.equal(document.querySelector('.sc-feedback'),null);assert.equal(document.querySelectorAll('[data-option-index][disabled]').length,0);localStorage.setItem=save;chooseAndSubmit('[data-option-index]');assert.ok(document.querySelector('.sc-feedback'));
});

test('math-style panel keeps selection separate from submission and shows analysis afterwards',async t=>{
 setup();storageMap.clear();const close=await openScienceCurriculum({learnerId:'math-panel'});t.after(close);click('[data-unit-id]');const key='lp-science-curriculum-candidate-v2:math-panel',before=localStorage.getItem(key);assert.ok(document.querySelector('.sc-math-master>.sc-progress'));assert.ok(document.querySelector('.sc-math-rail .sc-presenter img'));assert.equal(document.querySelectorAll('.sc-math-options [data-option-index]').length,4);assert.equal(document.querySelector('.sc-submit').disabled,true);assert.ok(document.querySelector('.sc-analysis-placeholder'));assert.equal(document.querySelector('.sc-feedback'),null);
 click('[data-option-index="1"]');assert.equal(localStorage.getItem(key),before);assert.equal(document.querySelector('.sc-submit').disabled,false);assert.equal(document.querySelector('[data-option-index="1"]').getAttribute('aria-pressed'),'true');assert.equal(document.activeElement.dataset.optionIndex,'1');click('[data-option-index="2"]');assert.equal(localStorage.getItem(key),before);assert.equal(document.querySelector('[data-option-index="2"]').getAttribute('aria-pressed'),'true');const submit=click('.sc-submit');const state=JSON.parse(localStorage.getItem(key)),run=Object.values(state.units)[0].active;assert.equal(Object.keys(run.answers).length,1);assert.equal(Object.values(run.answers)[0].selected,run.questions[0].opts[2]);assert.ok(document.querySelector('.sc-analysis.sc-feedback'));assert.equal(document.querySelectorAll('[data-option-index][disabled]').length,4);const after=localStorage.getItem(key);submit.click();assert.equal(localStorage.getItem(key),after);
});

test('new active learner can open before the stale identity watcher ticks',async()=>{
 setup();storageMap.clear();let oldActive=true;await openScienceCurriculum({learnerId:'immediate-old',isActive:()=>oldActive});click('[data-unit-id]');const key='lp-science-curriculum-candidate-v2:immediate-old',before=localStorage.getItem(key);oldActive=false;const close=await openScienceCurriculum({grade:2,learnerId:'immediate-new'});assert.equal(document.querySelectorAll('dialog').length,1);click('[data-unit-id]');assert.equal(localStorage.getItem(key),before);assert.ok(JSON.parse(localStorage.getItem('lp-science-curriculum-candidate-v2:immediate-new')).units['s-kh-g2-t1-u01']);await close();
});
