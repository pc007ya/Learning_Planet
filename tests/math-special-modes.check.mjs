import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import test from 'node:test';
const html=fs.readFileSync(new URL('../index.html',import.meta.url),'utf8');
const games=JSON.parse(fs.readFileSync(new URL('../math-games.json',import.meta.url),'utf8'));
const junyi=JSON.parse(fs.readFileSync(new URL('../junyi-challenges.json',import.meta.url),'utf8'));
function runtime(){
 const timers=[];let profile={coins:0,xp:0,correctTotal:0,rewardedRuns:[],dailyMastery:{units:{}},xpLedger:[]};
 const ctx=vm.createContext({setTimeout:fn=>{timers.push(fn);return timers.length;},clearTimeout:()=>{},dailyMasteryRound:(p,id)=>p.dailyMastery.units[id]||0,localDateKey:()=> '2026-11-17',normalizeDailyMastery:d=>({units:{...d.units}})});
 const methods=html.slice(html.indexOf('  memoryRoundActive(round)'),html.indexOf('  gachaRoundActive(round)'))+html.slice(html.indexOf('  buildJunyi(unitId)'),html.indexOf('  buildChinese(grade)'));
 vm.runInContext('globalThis.app=new (class {'+methods+'})()',ctx);
 const app=ctx.app;app.state={currentId:'student-1',speechMuted:true,teacher:false,mathGameBank:games,junyiBank:junyi.modules};app.total=()=>50;app.setState=(patch,callback)=>{Object.assign(app.state,typeof patch==='function'?patch(app.state):patch);callback?.();};app.prof=()=>profile;app.patch=fn=>Object.assign(profile,fn(profile));
 return {app,timers,profile};
}
test('all nine special quiz banks preserve authored counts, valid choices and visual mappings',()=>{
 const {app}=runtime();
 for(const m of [...games.modules,...junyi.modules]){
  const qs=(m.id==='u36'||m.id==='u37')?app.buildJunyi(m.id):app.buildMathGame(m.id);
  assert.equal(qs.length,m.questions.length,m.id);
  assert.equal(new Set(m.questions.map(q=>q.id)).size,m.questions.length,m.id);
  for(const q of qs){assert.ok(q.opts.includes(q.ans),m.id+q.stem);assert.equal(new Set(q.opts).size,q.opts.length);assert.ok(q.explain);}
 }
 assert.deepEqual(games.modules.map(m=>m.questions.length),[8,8,8,8,8,8,6]);
 assert.deepEqual(junyi.modules.map(m=>m.questions.length),[25,25]);
 app.total=()=>3;assert.equal(app.buildMathGame('u31').length,3);assert.equal(app.buildJunyi('u36').length,3);
});
test('cube height is z, ground depth is y, and legacy column banks retain vertical columns',()=>{
 const {app}=runtime();
 const wall=app.buildMathGame('u32').find(q=>q.stem.includes('4 列、3 層'));
 assert.equal(new Set(wall.figData.cubes.map(c=>c.left)).size,4);
 assert.deepEqual([...new Set(wall.figData.cubes.map(c=>c.bottom))].sort((a,b)=>a-b),[0,30,60]);
 const ground=app.buildMathGame('u31').find(q=>q.stem.includes('第一層鋪了'));
 assert.equal(Math.max(...ground.figData.cubes.map(c=>c.bottom)),12);
 const legacy=app.buildMathGame('u29').find(q=>q.ans===6&&q.fig==='blockCount');
 assert.equal(legacy.figData.cubes.length,6);assert.ok(legacy.figData.cubes.some(c=>c.bottom===60));
});
test('memory starts with six number/quantity pairs, rejects invalid cards and completes once',()=>{
 const {app,timers,profile}=runtime();app.startMemory('u38');
 assert.equal(app.state.memoryDeck.length,12);assert.equal(app.state.memoryStatus,'preview');
 timers.shift()();assert.equal(app.state.memoryStatus,'play');
 app.flipMemoryCard('missing');assert.equal(app.state.memoryFlipped.length,0);
 for(let value=1;value<=6;value++){
  app.flipMemoryCard('number-'+value);app.flipMemoryCard('quantity-'+value);timers.shift()();
 }
 assert.equal(app.state.memoryStatus,'complete');assert.equal(profile.coins,5);assert.equal(profile.correctTotal,6);assert.equal(app.state.memoryMoves,6);
 app.finishMemory(app.state.memoryMatched);assert.equal(profile.coins,5);assert.equal(profile.dailyMastery.units.u38,1);
});
test('memory mismatch unlocks without reward and stale callbacks cannot cross learner, navigation or restart',()=>{
 const {app,timers,profile}=runtime();app.startMemory('u38');timers.shift()();
 app.flipMemoryCard('number-1');app.flipMemoryCard('quantity-2');timers.shift()();
 assert.equal(app.state.memoryMatched.length,0);assert.equal(app.state.memoryLocked,false);assert.equal(profile.coins,0);
 app.flipMemoryCard('number-1');app.flipMemoryCard('quantity-1');const old=timers.shift();app.state.currentId='student-2';old();assert.equal(app.state.memoryMatched.length,0);assert.equal(profile.coins,0);
 app.startMemory('u38');const preview=timers.shift();app.state.screen='map';preview();assert.equal(app.state.memoryStatus,'preview');
 app.startMemory('u38');const prior=timers.shift();app.startMemory('u38');prior();assert.equal(app.state.memoryStatus,'preview');timers.shift()();assert.equal(app.state.memoryStatus,'play');
});
test('all eight shape puzzles have exactly the stated rotational answer and every solid image exists',()=>{
 const canonical=cells=>{const points=cells.flatMap((row,y)=>[...row].flatMap((v,x)=>v==='1'?[[x,y]]:[]));const minX=Math.min(...points.map(p=>p[0])),minY=Math.min(...points.map(p=>p[1]));return points.map(([x,y])=>[x-minX,y-minY].join(',')).sort().join(';');};
 const rotations=cells=>{const result=[];for(let turn=0;turn<4;turn++){result.push(canonical(cells));cells=Array.from({length:cells[0].length},(_,x)=>cells.map(row=>row[x]).reverse().join(''));}return new Set(result);};
 for(const m of games.modules)for(const q of m.questions){
  if(q.visual?.image)assert.ok(fs.existsSync(new URL('../'+q.visual.image,import.meta.url)),q.id);
  if(q.type!=='gridChoices')continue;
  const valid=rotations(q.visual.target);
  const options=q.visual.choices.filter(c=>valid.has(canonical(c.cells))!==q.stem.includes('不是')).map(c=>c.label);
  assert.deepEqual(options,[q.answer],q.id);
 }
});
test('memory rewards stop after three daily rounds without restricting the six-pair game',()=>{
 const {app,timers,profile}=runtime();
 for(let run=0;run<4;run++){
  app.startMemory('u38');timers.shift()();
  for(let value=1;value<=6;value++){app.flipMemoryCard('number-'+value);app.flipMemoryCard('quantity-'+value);timers.shift()();}
  assert.equal(app.state.memoryStatus,'complete');
 }
 assert.equal(profile.coins,15);assert.equal(profile.xp,15);assert.equal(profile.dailyMastery.units.u38,3);
});
