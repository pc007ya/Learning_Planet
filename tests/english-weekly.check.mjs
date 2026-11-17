import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
const ctx=vm.createContext({});vm.runInContext(fs.readFileSync('modules/english-original/weekly-bank.js','utf8'),ctx);
const {units,build}=ctx.LPEnglishWeekly;
const curriculum=JSON.parse(fs.readFileSync('modules/english-original/curriculum.json','utf8'));
test('48 distinct original units, 8 each grade, source-aligned vocabulary',()=>{
 assert.equal(units.length,48);assert.equal(new Set(units.map(u=>u.id)).size,48);
 for(let grade=1;grade<=6;grade++) assert.equal(units.filter(u=>u.grade===grade).length,8);
 for(const u of units){const original=curriculum.units.find(x=>x.id===u.sourceUnitId);assert.equal(JSON.stringify(u.vocabulary),JSON.stringify(original.vocabulary.map(v=>({word:v.word,meaning:v.meaning}))));assert.equal(u.publisherAlignment,'not_verified');}
});
test('every unit yields its full quota without repeats, one correct choice and provenance',()=>{
 for(const u of units){const qs=build(u.id,u.maxQuestions,()=>.25);assert.equal(qs.length,u.maxQuestions);assert.equal(new Set(qs.map(q=>q.stem)).size,qs.length);
 for(const q of qs){assert.equal(q.opts.length,3);assert.equal(new Set(q.opts).size,3);assert.equal(q.opts.filter(a=>a===q.ans).length,1);assert.equal(q.curriculumTrack,'original_enrichment');assert.match(q.explain,/非出版社試題/);assert.equal(q.difficulty,1);}}
});
test('bad IDs and quotas fail closed and builds do not mutate the bank',()=>{const before=JSON.stringify(units);for(const n of [-1,NaN,Infinity,1.5,100])assert.throws(()=>build(units[0].id,n));assert.throws(()=>build('u1',1));assert.equal(build(units[0].id,0).length,0);build(units[0].id,2);assert.equal(JSON.stringify(units),before);});
test('weekly wiring preserves old defaults, saved results, and opt-in English',()=>{
 const html=fs.readFileSync('index.html','utf8');const admin=fs.readFileSync('roles/admin.js','utf8');
 assert.match(html,/MATH_UNITS.concat\(CH_UNITS, SCI_UNITS, EN_WEEKLY_UNITS\)/);
 assert.match(html,/unit.kind === "english-weekly" \? window.LPEnglishWeekly.build/);
 assert.doesNotMatch(html.slice(html.indexOf('function defaultWeeklyConfig'),html.indexOf('function readWeeklyConfig')),/weekly-en-/);
 assert.match(html,/id.startsWith\("weekly-en-"\) \? "english"/);
 assert.match(admin,/weeklyTeacherGrades: \[1, 2, 3, 4, 5, 6\]/);
 assert.match(admin,/weeklyModuleRows: allUnits.concat\(EN_WEEKLY_UNITS\)/);
 assert.ok(html.indexOf('if (p.weeklyExam && p.weeklyExam.week') < html.indexOf('window.LPEnglishWeekly.build'));
});
test('actual weekly start builds opted-in English and preserves submitted results',async()=>{
 const html=fs.readFileSync('index.html','utf8');const start=html.indexOf('  async startWeeklyExam() {');const end=html.indexOf('\n  answerWeekly',start);
 assert.ok(end>start);
 const context=vm.createContext({window:{LPEnglishWeekly:{units,build}},EN_WEEKLY_UNITS:units,MATH_UNITS:[],CH_UNITS:[],SCI_UNITS:[],weekKey:()=> '2026-W47',Math,Date});
 const app=vm.runInContext('({'+html.slice(start,end).trim()+'})',context);
 app.state={screen:'weekly',grade:6,currentId:'student',weeklyConfig:{modules:{[units[40].id]:{count:3,difficulty:3}},timeSeconds:45}};
 app.prof=()=>({});app.captureMathNavigation=()=>({});app.matchesMathNavigation=()=>true;app.loadLearningData=async()=>{};app.speakQuestion=()=>{};app.setState=(p,cb)=>{Object.assign(app.state,p);cb?.();};app.flash=m=>{throw Error(m);};
 await app.startWeeklyExam();assert.equal(app.state.screen,'weeklyQuiz');assert.equal(app.state.examQs.length,3);assert.ok(app.state.examQs.every(q=>q.difficulty===1&&q.unitId===units[40].id));
 app.prof=()=>({xp:20,weeklyExam:{week:'2026-W47',submitted:true,review:[{unitId:'u1'}],score:100,total:1,correct:1}});app.startRewardAnimation=()=>{};app.loadLearningData=()=>{throw Error('must not rebuild submitted exam');};
 await app.startWeeklyExam();assert.equal(app.state.screen,'weeklyResult');assert.equal(app.state.examReview[0].unitId,'u1');
});
