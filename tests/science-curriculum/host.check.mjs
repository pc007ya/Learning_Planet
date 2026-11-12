import test from 'node:test';import assert from 'node:assert/strict';import{readFileSync}from'node:fs';import vm from'node:vm';import{isLocalCandidate}from'../../modules/science-curriculum/launch.mjs';
const source=readFileSync(new URL('../../index.html',import.meta.url),'utf8');
test('local preview detector remains accurate but is not the released runtime gate',()=>{assert.equal(isLocalCandidate({hostname:'learnplanet.win'}),false);assert.equal(isLocalCandidate({hostname:'localhost.evil.test'}),false);assert.equal(isLocalCandidate({hostname:'localhost'}),true);});
test('all existing science entry identities and kinds are preserved',()=>{const block=source.match(/const SCI_UNITS = \[[\s\S]*?\n\];/)[0];const units=vm.runInNewContext(block+';SCI_UNITS');assert.equal(units.length,23);assert.equal(units.filter(u=>u.kind==='mindmap').length,4);assert.equal(units.filter(u=>u.kind==='memory').length,1);assert.deepEqual(Array.from(units.map(u=>u.id)).sort(),Array.from({length:23},(_,i)=>'s'+(i+1)).sort());});
test('candidate gateway is not registered in weekly-scoring SCI_UNITS',()=>{assert.match(source,/window\.LPScienceRollout\?\.enabled/);assert.match(source,/async openScienceCurriculumCandidate/);assert.match(source,/if \(!this.state.currentId/);const block=source.match(/const SCI_UNITS = \[[\s\S]*?\n\];/)[0];assert.doesNotMatch(block,/candidate/);});
test('candidate route runs before legacy science fallback',()=>{const start=source.indexOf('async startUnit(id)');const check=source.indexOf('s-curriculum-candidate-g',start);const fallback=source.indexOf('this.buildScience(id, round)',start);assert.ok(check>start&&check<fallback);});
test('released host routes preserve science grades1–6 on all hosts without query flags, while rollback keeps old defaults',()=>{
 const code=readFileSync(new URL('../../home-routes.js',import.meta.url),'utf8');
 for(const hostname of ['localhost','127.0.0.1','learnplanet.win','preview.web.app'])for(const enabled of [false,true])for(let grade=1;grade<=6;grade++){
  const loc=new URL(`http://${hostname}/?scienceCandidate=1`),events={};
  const ctx={LPScienceRollout:{enabled},URL,URLSearchParams,location:loc,history:{pushState(_s,_t,url){const u=new URL(url,loc);loc.href=u.href},replaceState(_s,_t,url){loc.href=new URL(url,loc).href}},document:{baseURI:`http://${hostname}/`,querySelector:()=>null,dispatchEvent(){},addEventListener(){}},Event,requestAnimationFrame:f=>f(),addEventListener:(type,fn)=>events[type]=fn};ctx.window=ctx;
  vm.runInNewContext(code,ctx);const state={screen:'home',subject:'science',grade,teacher:false};const owner={state,setState(patch,done){Object.assign(state,patch);done?.();}};ctx.LPHomeRoutes.sync(owner);state.screen='map';ctx.LPHomeRoutes.sync(owner);assert.equal(loc.searchParams.get('scienceCandidate'),null);events.popstate();assert.equal(state.grade,enabled?grade:3,hostname+' '+enabled+' '+grade);
 }
});
test('released science tabs include living grades while explicit rollback retains the old3to6 tabs',()=>{const expression=source.match(/gradeTabs: (.+?)\.map\(\(g\)/)[1];const grades=(subject,enabled)=>Array.from(vm.runInNewContext(expression,{s:{subject},scienceCurriculumCandidate:enabled}));assert.deepEqual(grades('science',true),[1,2,3,4,5,6]);assert.deepEqual(grades('science',false),[3,4,5,6]);assert.deepEqual(grades('math',true),[1,2,3,4,5,6]);});
test('nature map gateway stays outside scoring and retains direct practice fallback',()=>{assert.match(source,/s-nature-planet-candidate-g/);assert.match(source,/async openNaturePlanetCandidate/);assert.match(source,/const isCurriculumCandidate = u.kind === "curriculum-candidate" \|\| isNatureCandidate/);assert.match(source,/const round = isLib \|\| isExperiment \|\| isCurriculumCandidate \? 0/);assert.match(source,/btnLabel: isNatureCandidate \? "開啟自然3D地圖" : isCurriculumCandidate \? "開啟單元練習"/);const original=source.match(/const SCI_UNITS = \[[\s\S]*?\n\];/)[0];assert.doesNotMatch(original,/nature-planet|candidate/)});

test('host serializes pending direct-practice and map imports with one cross-entry guard',()=>{assert.match(source,/this\.scienceCurriculumOpening \|\| this\.naturePlanetOpening/);assert.match(source,/this\.naturePlanetOpening \|\| this\.scienceCurriculumOpening/)});


test('one explicit release switch is shared by classic host and all three module entry gates',()=>{
 const rollout=readFileSync(new URL('../../science-rollout.js',import.meta.url),'utf8'),context={};vm.runInNewContext(rollout,context);assert.equal(context.LPScienceRollout.enabled,true);assert.equal(Object.isFrozen(context.LPScienceRollout),true);
 assert.ok(source.indexOf('src="./science-rollout.js"')<source.indexOf('src="./home-routes.js'));
 for(const path of ['../../modules/science-curriculum/launch.mjs','../../modules/science-curriculum/nature-entry.mjs','../../modules/nature-planet/launch.mjs']){const text=readFileSync(new URL(path,import.meta.url),'utf8');assert.match(text,/if\s*\(!isScienceCurriculumEnabled\(\)\)/);assert.doesNotMatch(text,/if\s*\(!isLocal(?:Nature)?Candidate\(\)\)/);}
 const entries=source.slice(source.indexOf('  isLegacyScienceCandidate('),source.indexOf('  async openMathKnowledge()'));assert.doesNotMatch(entries,/localhost|scienceCandidate.*1|本機審查|候選練習暫時/);
});

test('released visible entry names and practice notice do not claim a candidate-only or cloud-scored experience',()=>{
 const cards=source.slice(source.indexOf('    const subjectUnits ='),source.indexOf('    const gradeWords ='));assert.match(cards,/自然星球3D地圖/);assert.match(cards,/生活單元練習/);assert.match(cards,/自然單元練習/);assert.doesNotMatch(cards,/（候選）|本機審查/);
 const panel=readFileSync(new URL('../../modules/science-curriculum/launch.mjs',import.meta.url),'utf8');assert.match(panel,/練習紀錄只存這台裝置，不改正式成績；不作能力認證。/);assert.doesNotMatch(panel,/候選審查版|題候選練習|練習候選/);
});


test('home navigation preserves only an explicitly opted-in resource diagnostics flag, including logout reset',()=>{
 const code=readFileSync(new URL('../../home-routes.js',import.meta.url),'utf8');
 for(const query of ['', '?lpPerf=0', '?lpPerf=1']){
  const loc=new URL('https://learnplanet.win/'+query),ctx={LPScienceRollout:{enabled:true},URL,URLSearchParams,location:loc,history:{pushState(_s,_t,url){loc.href=new URL(url,loc).href},replaceState(_s,_t,url){loc.href=new URL(url,loc).href}},document:{baseURI:'https://learnplanet.win/',querySelector:()=>null,dispatchEvent(){},addEventListener(){}},Event,requestAnimationFrame:f=>f(),addEventListener(){}};ctx.window=ctx;vm.runInNewContext(code,ctx);
  const state={screen:'map',subject:'science',grade:1,teacher:false},owner={state,setState(patch,done){Object.assign(state,patch);done?.();}};ctx.LPHomeRoutes.sync(owner);assert.equal(loc.searchParams.get('lpPerf'),query==='?lpPerf=1'?'1':null);ctx.LPHomeRoutes.reset();assert.equal(loc.searchParams.get('lpPerf'),query==='?lpPerf=1'?'1':null);
 }
});
