import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {parseHTML} from 'linkedom';
import {PracticeRound,makeQuestions,questionSeconds} from '../modules/chinese-grade6/model.mjs';
import {mountPractice} from '../modules/chinese-grade6/app.mjs';
const bank=JSON.parse(fs.readFileSync('modules/chinese-grade6/chinese-grade6-original-skills.json'));
const sources=JSON.parse(fs.readFileSync('modules/chinese-grade6/chinese-grade6-source-map.json'));
test('12 original reading units/120 unique questions kept separate from 36 metadata-only entries',()=>{
 assert.equal(bank.units.length,12);const ids=[];
 for(const u of bank.units){assert.equal(u.questions.length,10);assert.ok(u.passage.length);assert.equal(u.publisher,null);assert.deepEqual(u.publisherLessonIds,[]);assert.equal(u.assessment.masteryClaim,false);for(const q of u.questions){ids.push(q.id);assert.equal(q.options.length,3);assert.equal(new Set(q.options).size,3);assert.ok(q.answer>=0&&q.answer<3);assert.ok(q.explanation);assert.doesNotMatch(q.explanation,/後兩項|前兩項/);}}
 assert.equal(new Set(ids).size,120);assert.equal(sources.lessons.length,36);
 for(const row of sources.lessons){assert.equal(row.contentKind,'publisher_metadata');assert.equal(row.contentImported,false);assert.equal(row.practiceAvailable,false);assert.equal(new URL(row.sourceUrl).hostname,'pedia.cloud.edu.tw');}
 const catalog=fs.readFileSync('src/chinese-practice/catalog.ts','utf8');assert.doesNotMatch(catalog,/chinese-grade6-source-map/);
});
test('all shuffle orders retain source answer value and immutable input',()=>{const before=JSON.stringify(bank);for(const u of bank.units)for(const seed of [0,.2,.5,.9]){const qs=makeQuestions(u,()=>seed);qs.forEach((q,i)=>assert.equal(q.options.filter(o=>o===u.questions[i].options[u.questions[i].answer]).length,1));qs.forEach((q,i)=>assert.equal(q.answer,u.questions[i].options[u.questions[i].answer]));}assert.equal(JSON.stringify(bank),before);});
test('reading is untimed; deadline cannot be extended by back-to-passage or double answer',()=>{let now=0;const r=new PracticeRound(bank.units[0],45,()=>now);now=100000;assert.equal(r.tick(),false);assert.equal(r.start(),true);assert.equal(r.start(),false);assert.equal(r.remaining(),45);now+=45000;assert.equal(r.answer(r.questions[0].answer),true);assert.equal(r.answers[0].timedOut,true);assert.equal(r.answers[0].correct,false);assert.equal(r.answer(r.questions[0].answer),false);r.next();assert.equal(r.remaining(),45);assert.equal(r.answers.length,1);r.exit();assert.equal(r.tick(),false);assert.equal(r.answer(r.questions[1].answer),false);});
test('timer defaults and host supplied policy match ordinary first round',()=>{assert.equal(questionSeconds(null),30);assert.equal(questionSeconds('60'),60);for(const x of ['oops',NaN,Infinity,''])assert.equal(questionSeconds(x),30);assert.equal(questionSeconds(-10),5);const host=fs.readFileSync('index.html','utf8');assert.match(host,/seconds\(\) \{ return this.props.timerSeconds \?\? 30; \}/);assert.match(host,/chinese-grade6.html\?seconds=.*encodeURIComponent\(this.seconds\(\)\)/);});
function ui(){const {document,window}=parseHTML('<main id="test"></main>');const root=document.querySelector('main');let now=0;const callbacks=[];let cancels=0;const app=mountPractice(root,bank,sources,{now:()=>now,seconds:30,schedule:fn=>{callbacks.push(fn);return callbacks.length;},cancel:()=>cancels++});const click=selector=>{const b=root.querySelector(selector);assert.ok(b,selector);b.dispatchEvent(new window.Event('click',{bubbles:true}));};return{root,app,click,callbacks,setNow:n=>now=n,cancels:()=>cancels};}
test('UI requires reading, shows passage and explanation; exits isolate stale callbacks',()=>{const t=ui();assert.match(t.root.textContent,/12課原創閱讀材料、共120題/);t.click('[data-unit]');assert.equal(t.app.getRound().phase,'reading');assert.equal(t.root.querySelectorAll('[data-answer]').length,0);t.click('[data-action="start"]');assert.equal(t.root.querySelectorAll('[data-answer]').length,3);assert.match(t.root.querySelector('summary').textContent,/計時繼續/);t.click('[data-answer="0"]');assert.match(t.root.textContent,/正解：/);assert.ok(t.root.textContent.includes(bank.units[0].questions[0].explanation));const old=t.app.getRound();t.click('[data-action="home"]');assert.equal(old.active,false);t.click('[data-unit]');const current=t.app.getRound();t.setNow(100000);t.callbacks[0]();assert.equal(current.phase,'reading');assert.equal(current.answers.length,0);assert.ok(t.cancels()>0);t.app.destroy();assert.equal(current.active,false);});
test('source UI offers exactly 36 external metadata links, no start lesson action',()=>{const t=ui();t.click('[data-action="sources"]');const links=[...t.root.querySelectorAll('a')].filter(a=>a.href.includes('pedia.cloud.edu.tw'));assert.equal(links.length,36);assert.equal(t.root.querySelectorAll('[data-unit]').length,0);assert.match(t.root.textContent,/教材尚未建置/);assert.match(t.root.textContent,/印刷版次未核/);for(const l of links)assert.equal(l.getAttribute('rel'),'noopener noreferrer');t.app.destroy();});
test('ten answers reach result once, no reward/storage writes',()=>{const t=ui();t.click('[data-unit]');t.click('[data-action="start"]');for(let i=0;i<10;i++){const r=t.app.getRound();const index=r.questions[i].options.indexOf(r.questions[i].answer);t.click(`[data-answer="${index}"]`);t.click('[data-action="next"]');}assert.equal(t.app.getRound().phase,'result');assert.match(t.root.textContent,/答對 10／10 題/);assert.match(t.root.textContent,/不代表能力已達成/);assert.ok(t.cancels()>0);t.app.destroy();});
test('pagehide suspension cancels run but keeps navigation usable on bfcache restore',()=>{const t=ui();t.click('[data-unit]');t.click('[data-action="start"]');const old=t.app.getRound();t.app.suspend();assert.equal(old.active,false);assert.equal(t.app.getRound(),null);t.callbacks[0]();t.click('[data-unit]');assert.equal(t.app.getRound().phase,'reading');t.app.destroy();});
test('batch2 keeps narrative, comparison and functional reading distinct with auditable rationales',()=>{
 const added=bank.units.slice(3,6);assert.deepEqual(added.map(u=>u.id),['zh-original-g6-narrative','zh-original-g6-compare','zh-original-g6-announcement']);
 for(const u of added){assert.equal(u.assessment.roundSize,10);assert.equal(u.assessment.bankComplete,false);assert.ok(new Set(u.questions.map(q=>q.skill)).size>=7);for(const q of u.questions){assert.ok(q.reviewEvidence.length>8);assert.ok(q.explanation.length>15);assert.doesNotMatch(q.explanation,/前兩項|後兩項|第一個選項|第二個選項|第三個選項/);}}
});
test('all twelve units complete correctly after option shuffle and maintain isolated rounds',()=>{
 for(const unit of bank.units){const round=new PracticeRound(unit,30,()=>0,()=>.9);assert.equal(round.start(),true);for(let i=0;i<10;i++){assert.equal(round.answer(round.questions[i].answer),true);assert.equal(round.next(),true);}assert.equal(round.phase,'result');assert.equal(round.answers.filter(a=>a.correct).length,10);assert.equal(round.next(),false);round.exit();}
});
test('batch3 separates poetic meaning, argument scope, and conditional schedule evidence',()=>{
 const added=bank.units.slice(6,9);assert.deepEqual(added.map(u=>u.id),['zh-original-g6-poem','zh-original-g6-argument','zh-original-g6-schedule']);
 for(const u of added){assert.equal(u.questions.length,10);assert.equal(u.assessment.bankComplete,false);assert.ok(new Set(u.questions.map(q=>q.skill)).size>=7);for(const q of u.questions){assert.ok(q.reviewEvidence.length>8);assert.ok(q.explanation.length>15);assert.doesNotMatch(q.explanation,/前兩項|後兩項|第一個選項|第二個選項|第三個選項/);}}
 const schedule=added[2];assert.match(schedule.passage.join(''),/08:50/);assert.match(schedule.passage.join(''),/集合時間與活動結束時間不變/);assert.equal(schedule.questions[5].options[schedule.questions[5].answer],'依原集合時間到圖書室，和班級一起參加');
 const argument=added[1];assert.equal(argument.questions[6].options[argument.questions[6].answer],'不能直接算成支持或反對');
});
test('batch4 distinguishes faithful interview reporting and revisable perspectives',()=>{
 const added=bank.units.slice(9,11);assert.deepEqual(added.map(u=>u.id),['zh-original-g6-interview','zh-original-g6-perspective']);
 for(const u of added){assert.equal(u.questions.length,10);assert.equal(u.assessment.bankComplete,false);assert.ok(new Set(u.questions.map(q=>q.skill)).size>=7);for(const q of u.questions){assert.ok(q.reviewEvidence.length>8);assert.ok(q.explanation.length>15);assert.doesNotMatch(q.explanation,/前兩項|後兩項|第一個選項|第二個選項|第三個選項/);}}
 const [interview,perspective]=added;
 assert.equal(interview.questions[9].options[interview.questions[9].answer],'新紀錄做法是否已降低桌子再次鬆動的次數');
 assert.equal(perspective.questions[7].options[perspective.questions[7].answer],'不能，仍要和老師確認展板能否使用');
});
test('targeted source-check gap retains uncertainty rather than treating newer/official as infallible',()=>{
 const u=bank.units[11];assert.equal(u.id,'zh-original-g6-source-check');assert.equal(u.questions.length,10);assert.match(u.passage.join(''),/虛構/);assert.match(u.passage.join(''),/尚未收到回覆/);
 for(const q of u.questions){assert.ok(q.reviewEvidence.length>8);assert.ok(q.explanation.length>15);assert.doesNotMatch(q.explanation,/前兩項|後兩項|第一個選項|第二個選項|第三個選項/);}
 assert.equal(u.questions[4].options[u.questions[4].answer],'不足，還需要可核對的來源或主辦回覆');
 assert.equal(u.questions[6].options[u.questions[6].answer],'目前完整公告是換場地；較晚的取消傳聞仍待確認');
});
