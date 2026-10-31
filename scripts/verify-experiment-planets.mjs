import {chromium} from 'playwright';
import {mkdir,writeFile} from 'node:fs/promises';
import assert from 'node:assert/strict';

const root=process.env.EXPERIMENT_BASE_URL||'http://127.0.0.1:4173/experiments/3d/';
const allPlanets=['ocean-buoyancy','magnet','earth-moon','plants','weather','force-motion'];
const planets=process.env.EXPERIMENT_ONLY?process.env.EXPERIMENT_ONLY.split(','):allPlanets;assert(planets.length&&planets.every(id=>allPlanets.includes(id)),'Invalid EXPERIMENT_ONLY filter');
const allSizes=[{width:1440,height:900},{width:1280,height:720},{width:1024,height:600},{width:1024,height:768},{width:390,height:844},{width:360,height:780}];
const sizes=process.env.EXPERIMENT_SIZE?allSizes.filter(s=>`${s.width}x${s.height}`===process.env.EXPERIMENT_SIZE):allSizes;assert(sizes.length,'Invalid EXPERIMENT_SIZE filter');
const output='artifacts/experiment-planets';await mkdir(output,{recursive:true});
const browser=await chromium.launch({headless:true,...(process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE?{executablePath:process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE}:{}),args:['--enable-webgl','--use-angle=swiftshader','--disable-dev-shm-usage']});
const results=[],errors=[];let matrixComplete=false;const selection={planets,sizes,expectedCases:planets.length*sizes.length};const reportName=process.env.EXPERIMENT_ONLY||process.env.EXPERIMENT_SIZE?`acceptance-${planets.join('-')}-${process.env.EXPERIMENT_SIZE||'all-sizes'}.json`:'acceptance.json';async function report(complete=false){await writeFile(`${output}/${reportName}`,JSON.stringify({selection,complete,commit:process.env.GITHUB_SHA||null,results,errors},null,2));}
const plainText=async(page,selector)=>page.locator(selector).evaluate(el=>{const clone=el.cloneNode(true);clone.querySelectorAll('rt').forEach(rt=>rt.remove());return clone.textContent||'';});
const pause=async page=>{if(await page.locator('#ep-play').getAttribute('aria-pressed')==='true')await page.locator('#ep-play').click();assert.equal(await page.locator('#ep-play').getAttribute('aria-pressed'),'false');};
const choose=async(page,group,value)=>{await page.locator(`button[data-group="${group}"]`).click();await page.locator(`button[data-control="${group}"][data-value="${value}"]`).click();assert.equal(await page.locator(`button[data-control="${group}"][data-value="${value}"]`).getAttribute('aria-pressed'),'true');};
async function diagnostics(page){return page.locator('#ep-scene').evaluate(el=>Object.fromEntries(Object.entries(el.dataset).filter(([key])=>/^(ocean|magnet|material|plant|force|earth|sunAltitude|moonAltitude|moonLit|weather)/.test(key)&&!key.endsWith('HitPx'))));}
async function layout(page,{scene=true,dialog=false}={}){
 const data=await page.evaluate(({scene,dialog})=>{
  const visible=el=>{const css=getComputedStyle(el),r=el.getBoundingClientRect();return css.display!=='none'&&css.visibility!=='hidden'&&r.width>0&&r.height>0;};
  const rect=el=>{const r=el.getBoundingClientRect();return {x:r.x,y:r.y,w:r.width,h:r.height,right:r.right,bottom:r.bottom};};
  const side=document.querySelector('.ep-side'),footer=document.querySelector('.ep-footer'),world=document.querySelector('#ep-scene');
  const scope=dialog?document.querySelector('#ep-quiz'):document.querySelector('.ep-shell');
  const buttons=[...scope.querySelectorAll('button')].filter(visible).map(el=>({...rect(el),name:el.getAttribute('aria-label')||el.textContent,id:el.id}));
  const labels=scene?[...world.querySelectorAll('.ep-world-label')].filter(visible).map(el=>({...rect(el),text:el.textContent,font:parseFloat(getComputedStyle(el).fontSize)})):[];
  const host=rect(world),dlg=document.querySelector('#ep-quiz');
  return {pane:document.body.dataset.pane,reading:document.body.dataset.reading,viewport:{w:innerWidth,h:innerHeight},page:{w:document.documentElement.scrollWidth,h:document.documentElement.scrollHeight},side:{...rect(side),overflow:side.scrollHeight-side.clientHeight},footer:rect(footer),buttons,labels,host,labelState:world.dataset.labelLayout,dialog:dialog?{...rect(dlg),overflow:dlg.scrollHeight-dlg.clientHeight}:null};
 },{scene,dialog});
 assert(data.page.w<=data.viewport.w+1&&data.page.h<=data.viewport.h+3,'Page overflow '+JSON.stringify(data));
 if(!dialog){assert(data.side.overflow<=3&&data.side.bottom<=data.footer.y+1,'Sidebar/footer overlap '+JSON.stringify(data));}
 for(const b of data.buttons){assert(b.w>=43.5&&b.h>=43.5,'Touch target under 44px '+JSON.stringify(b));assert(b.x>=-1&&b.y>=-1&&b.right<=data.viewport.w+1&&b.bottom<=data.viewport.h+1,'Clipped interactive control '+JSON.stringify(b));}
 if(scene){assert.equal(data.labelState,'clear','Unplaced necessary labels '+JSON.stringify(data));for(const label of data.labels){assert(label.font>=12,'Unreadable label '+JSON.stringify(label));assert(label.x>=data.host.x+3&&label.y>=data.host.y+3&&label.right<=data.host.right-3&&label.bottom<=data.host.bottom-3,'Clipped label '+JSON.stringify(label));}}
 if(dialog)assert(data.dialog.overflow<=3&&data.dialog.y>=0&&data.dialog.bottom<=data.viewport.h+1,'Dialog overflow '+JSON.stringify(data));
 return data;
}
async function waitLabels(page){await page.waitForFunction(()=>document.querySelector('#ep-scene')?.dataset.labelLayout==='clear',{},{timeout:2500});}
async function modelInteraction(page,planet){
 const host=page.locator('#ep-scene');
 if(planet==='ocean-buoyancy'){
  await choose(page,'object','stone');assert(Math.abs(Number(await host.getAttribute('data-ocean-weight'))-2.6487)<.02,'Stone mass/gravity not linked');
  const before=Number(await host.getAttribute('data-ocean-height'));await page.locator('#ep-observe').click();await page.waitForFunction(y=>Number(document.querySelector('#ep-scene').dataset.oceanHeight)<y-.06,before,{timeout:5000});
 }else if(planet==='magnet'){
  await choose(page,'pole','same');await choose(page,'distance','near');const before=Number(await host.getAttribute('data-magnet-x'));await page.locator('#ep-observe').click();await page.waitForFunction(x=>Number(document.querySelector('#ep-scene').dataset.magnetX)>x+.015,before,{timeout:5000});assert(Number(await host.getAttribute('data-magnet-force'))>0,'Same poles must repel');
 }else if(planet==='plants'){
  await choose(page,'water','dry');const before=Number(await host.getAttribute('data-plant-hydration'));await page.locator('#ep-observe').click();await page.waitForFunction(h=>Number(document.querySelector('#ep-scene').dataset.plantHydration)<h-1,before,{timeout:5000});assert.equal(await host.getAttribute('data-plant-water'),'dry');
 }else if(planet==='weather'){
  await choose(page,'air','cool');const before=Number(await page.locator('#ep-metrics .ep-metric').first().locator('strong').textContent());await page.locator('#ep-observe').click();await page.waitForFunction(t=>Number(document.querySelector('#ep-metrics strong').textContent)<t-.2,before,{timeout:5000});
 }else if(planet==='force-motion'){
  await choose(page,'force','strong');await choose(page,'mass','light');await choose(page,'surface','smooth');await page.locator('#ep-observe').click();await page.waitForFunction(()=>Number(document.querySelector('#ep-scene').dataset.forceVelocity)>.1,{},{timeout:5000});const data=await host.evaluate(el=>({...el.dataset}));assert.equal(Number(data.forceApplied),8);assert(Math.abs(Number(data.forceAcceleration)-(Number(data.forceApplied)+Number(data.forceFriction)))<.03,'Signed net force, mass and acceleration disagree '+JSON.stringify(data));
 }else{
  await choose(page,'phase','full');await choose(page,'time','night');assert.equal(Number(await host.getAttribute('data-earth-angle')),180);assert.equal(Number(await host.getAttribute('data-moon-lit')),1);assert(Number(await host.getAttribute('data-sun-altitude'))<0,'Night control not linked to observer sunlight');assert(Number(await host.getAttribute('data-moon-altitude'))>0,'Full moon should be above ideal night horizon');assert.equal(await page.locator('.ep-moon-handle').getAttribute('aria-valuenow'),'180');
 }
 await pause(page);
}
async function verifyQuiz(page,planet,reading,suffix){
 const before=await diagnostics(page);await page.locator('#ep-quiz-open').click();await page.locator('#ep-quiz').waitFor({state:'visible'});assert.equal(await page.locator('#ep-quiz button[data-answer]').count(),4);
 const id=planet==='ocean-buoyancy'?'ocean':planet;
 for(let i=0;i<4;i++)assert.equal(await page.locator(`#ep-quiz button[data-answer="${i}"] svg`).getAttribute('data-quiz-scene'),`${id}-${i}`);
 await layout(page,{scene:false,dialog:true});await page.locator(`button[data-answer="${planet==='force-motion'?0:1}"]`).click();assert((await plainText(page,'#ep-quiz-feedback')).startsWith('答對'),'Quiz answer mapping is wrong');if(reading)assert(await page.locator('#ep-quiz-feedback ruby').count()>0,'Dynamic quiz feedback lost phonetics');await layout(page,{scene:false,dialog:true});
 await page.screenshot({timeout:45000,path:`${output}/${suffix}-quiz-${reading?'on':'off'}.png`});await page.locator('#ep-quiz-close').click();await page.locator('#ep-quiz').waitFor({state:'hidden'});assert.deepEqual(await diagnostics(page),before,'Opening/closing quiz changed the paused experiment');
}
try{
 const hub=await browser.newPage({viewport:{width:1024,height:600},deviceScaleFactor:1});const response=await hub.goto(root,{waitUntil:'domcontentloaded'});assert(response?.ok(),'Hub unavailable');assert.equal(await hub.locator('.card').count(),6);await hub.screenshot({timeout:45000,path:`output/hub-1024x600.png`.replace('output',output)});await hub.close();
 for(const size of sizes)for(const planet of planets){
  const context=await browser.newContext({viewport:size,deviceScaleFactor:1});const page=await context.newPage();page.setDefaultTimeout(10000);const pageErrors=[];const appChunks=new Set();page.on('response',response=>{if(/\/chunks\/app-[^/]+\.js/.test(response.url()))appChunks.add(response.url());});page.on('pageerror',error=>pageErrors.push(String(error)));const suffix=`${planet}-${size.width}x${size.height}`;
  try{
   const response=await page.goto(root+planet+'/',{waitUntil:'domcontentloaded',timeout:30000});assert(response?.ok(),'Lesson unavailable '+response?.status());await page.locator('body[data-planet-ready="true"]').waitFor({timeout:20000});await page.evaluate(()=>document.fonts.ready);assert.equal(await page.locator('#ep-scene canvas').count(),1);assert.equal(await page.locator('#ep-zhuyin').getAttribute('aria-pressed'),'false');
   assert(await page.evaluate(()=>{const canvas=document.querySelector('#ep-scene canvas'),sample=document.createElement('canvas');sample.width=sample.height=64;const ctx=sample.getContext('2d');ctx.drawImage(canvas,0,0,64,64);const p=ctx.getImageData(0,0,64,64).data;let count=0;for(let i=0;i<p.length;i+=4)if(p[i]+p[i+1]+p[i+2]>170)count++;return count>25;}),'WebGL scene did not paint');
   for(const reading of [false,true]){
    await page.locator('#ep-reset').click();await pause(page);if(reading)await page.locator('#ep-zhuyin').click();assert.equal(await page.locator('#ep-zhuyin').getAttribute('aria-pressed'),String(reading));if(reading){assert(await page.locator('#ep-question ruby').count()>0);assert.equal(await page.locator('ruby ruby').count(),0);assert(await page.locator('.zhuyin-word').count()>0,'Missing whole-word phonetics');assert.equal(await page.locator('.zhuyin-word .zhuyin-word').count(),0);}else{assert.equal(await page.locator('ruby').count(),0);assert.equal(await page.locator('.zhuyin-word').count(),0);}
    for(const view of ['orbit','front','top']){await page.locator(`button[data-view="${view}"]`).click();await waitLabels(page);await layout(page);}
    await page.locator('button[data-view="orbit"]').click();await waitLabels(page);await page.screenshot({timeout:45000,path:`${output}/${suffix}-scene-${reading?'on':'off'}.png`});
    await modelInteraction(page,planet);await waitLabels(page);await layout(page);if(reading)assert(await page.locator('#ep-message ruby').count()>0,'Dynamic control feedback lost phonetics');await verifyQuiz(page,planet,reading,suffix);
    await page.locator('button[data-pane="records"]').click();await page.locator('#ep-record').click();assert(await page.locator('.ep-record').count()>0,'Comparison snapshot missing');await layout(page,{scene:size.width>700});await page.locator('button[data-pane="controls"]').click();await waitLabels(page);
    await page.locator('button[data-pane="challenge"]').click();await page.locator('#ep-check').click();assert(await plainText(page,'#ep-message'),'Challenge must give an explanation');if(reading)assert(await page.locator('#ep-message ruby').count()>0);await layout(page);await page.locator('button[data-pane="controls"]').click();
   }
   const saved=await diagnostics(page);await page.goto(root,{waitUntil:'domcontentloaded'});await page.goBack({waitUntil:'domcontentloaded'});await page.locator('body[data-planet-ready="true"]').waitFor({timeout:20000});assert.equal(await page.locator('#ep-zhuyin').getAttribute('aria-pressed'),'true');assert.deepEqual(await diagnostics(page),saved,'Return navigation did not preserve model state');
   await page.locator('#ep-zhuyin').press('Enter');assert.equal(await page.locator('ruby').count(),0);assert.equal(await page.locator('.zhuyin-word').count(),0);for(let cycle=0;cycle<2;cycle++){await page.locator('#ep-zhuyin').click();assert(await page.locator('.zhuyin-word').count()>0);assert.equal(await page.locator('ruby ruby,.zhuyin-word .zhuyin-word').count(),0);await page.locator('#ep-zhuyin').click();assert.equal(await page.locator('ruby,.zhuyin-word').count(),0);}await page.reload({waitUntil:'domcontentloaded'});await page.locator('body[data-planet-ready="true"]').waitFor({timeout:20000});assert.equal(await page.locator('#ep-zhuyin').getAttribute('aria-pressed'),'false');assert.deepEqual(pageErrors,[],'Browser errors');results.push({planet,size,appChunks:[...appChunks],status:'PASS',states:['reading-off','reading-on'],checks:['WebGL-painted','44px-controls','no-overflow','three-camera-label-layouts','model-readout-link','picture-quiz-feedback-return','comparison-record','operation-challenge-feedback','navigation-and-reading-persistence']});console.log('PASS',suffix);
  }catch(error){errors.push({planet,size,appChunks:[...appChunks],message:String(error),pageErrors});console.error('FAIL',suffix,String(error));await page.screenshot({timeout:45000,path:`${output}/${suffix}-failure.png`}).catch(()=>{});}finally{await context.close();await report();}
 }
 matrixComplete=true;
}finally{await browser.close();await report(matrixComplete);}
if(errors.length){console.error(JSON.stringify(errors,null,2));process.exitCode=1;}
