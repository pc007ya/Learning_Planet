import {chromium} from 'playwright';
import {mkdir,writeFile} from 'node:fs/promises';
import assert from 'node:assert/strict';
const root='http://127.0.0.1:4173/experiments/3d/earth-moon/';
const browser=await chromium.launch({headless:true,args:['--enable-webgl','--use-angle=swiftshader']});
const results=[];await mkdir('artifacts/tides3d',{recursive:true});
try{
 for(const size of [{width:1440,height:900},{width:1280,height:720},{width:1024,height:600},{width:1024,height:768},{width:390,height:844},{width:360,height:780}]){
  const context=await browser.newContext({viewport:size,hasTouch:true});const page=await context.newPage();const errors=[];page.on('pageerror',e=>errors.push(String(e)));page.on('console',m=>{if(m.type()==='error'&&!m.location().url?.endsWith('favicon.ico'))errors.push(m.text());});
  await page.goto(root+'tides/');await page.locator('body[data-tides3d-ready=true]').waitFor({timeout:30000});await page.evaluate(()=>document.fonts.ready);
  assert.equal(await page.locator('#space canvas').count(),1);
  const fits=await page.evaluate(()=>{const a=document.querySelector('aside'),footer=document.querySelector('footer').getBoundingClientRect();return {h:innerHeight,w:innerWidth,pageH:document.documentElement.scrollHeight,pageW:document.documentElement.scrollWidth,sideOverflow:a.scrollHeight-a.clientHeight,sideBottom:a.getBoundingClientRect().bottom,footerTop:footer.top};});
  assert(fits.pageW<=fits.w+1&&fits.sideOverflow<=2&&fits.sideBottom<=fits.footerTop,'Overlap '+JSON.stringify({size,fits}));
  const handle=await page.locator('.world-handle.moon').boundingBox();assert(handle.width>=44&&handle.height>=44);
  for(const a of [0,45,90,180,270]){
   if(a===45)await page.locator('#reset').click();else await page.locator(`[data-angle="${a}"]`).click();
   assert.equal(await page.locator('.world-handle.moon').getAttribute('aria-valuenow'),String(a));await page.locator(`#space[data-render-angle="${a}"]`).waitFor({state:'visible'});
   await page.screenshot({path:`artifacts/tides3d/${size.width}x${size.height}-angle-${a}.png`});
   assert((await page.locator('#range').textContent()).includes(a%180===0?'2.92':a===45?'2.20':'1.08'));
  }
  await page.locator('.world-handle.moon').press('Home');await page.locator('.world-handle.moon').press('ArrowRight');assert.equal(await page.locator('.world-handle.moon').getAttribute('aria-valuenow'),'5');
  await page.locator('[data-view=top]').click();await page.waitForTimeout(150);let moon=await page.locator('.world-handle.moon').boundingBox();await page.mouse.move(moon.x+moon.width/2,moon.y+moon.height/2);await page.mouse.down();await page.mouse.move(moon.x-70,moon.y+80,{steps:10});await page.mouse.up();assert.notEqual(await page.locator('.world-handle.moon').getAttribute('aria-valuenow'),'5');
  const beforeTouch=await page.locator('.world-handle.moon').getAttribute('aria-valuenow');moon=await page.locator('.world-handle.moon').boundingBox();const cdp=await context.newCDPSession(page);await cdp.send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:[{x:moon.x+moon.width/2,y:moon.y+moon.height/2,id:0}]});await cdp.send('Input.dispatchTouchEvent',{type:'touchMove',touchPoints:[{x:moon.x+80,y:moon.y+60,id:0}]});await cdp.send('Input.dispatchTouchEvent',{type:'touchEnd',touchPoints:[]});assert.notEqual(await page.locator('.world-handle.moon').getAttribute('aria-valuenow'),beforeTouch);
  const beforeCamera=await page.locator('#space').getAttribute('data-camera');const box=await page.locator('#space').boundingBox();await page.mouse.move(box.x+80,box.y+100);await page.mouse.down();await page.mouse.move(box.x+150,box.y+130,{steps:10});await page.mouse.up();await page.waitForTimeout(200);assert.notEqual(await page.locator('#space').getAttribute('data-camera'),beforeCamera);
  await page.locator('[data-angle="0"]').click();await page.locator('button[data-aux=shore]').click();await page.locator('#observer-back').click();const shore=await page.locator('#shore-height').textContent();await page.locator('#observer-next').click();assert.notEqual(await page.locator('#shore-height').textContent(),shore);await page.screenshot({path:`artifacts/tides3d/${size.width}x${size.height}-shore.png`});
  await page.locator('button[data-aux=curve]').click();await page.screenshot({path:`artifacts/tides3d/${size.width}x${size.height}-curve.png`});
  if(size.width<700)await page.locator('button[data-aux=space]').click();
  await page.locator('#quiz').click();await page.locator('[data-answer="90"]').click();assert((await page.locator('#answer-feedback').textContent()).includes('答對'));await page.screenshot({path:`artifacts/tides3d/${size.width}x${size.height}-quiz.png`});await page.locator('#close-dialog').click();
  await page.locator('#demo').click();await page.waitForTimeout(200);await page.locator('#play').click();assert.equal(await page.locator('#play').getAttribute('aria-pressed'),'false');
  await page.getByRole('link',{name:'返回上一個實驗入口'}).click();await page.locator('body[data-tides3d-ready=true]').waitFor({timeout:30000});assert.equal(await page.locator('body').getAttribute('data-lesson'),'moon');await page.locator('[data-angle="180"]').click();await page.locator('#quiz').click();await page.locator('[data-answer="180"]').click();assert((await page.locator('#answer-feedback').textContent()).includes('答對'));await page.locator('#close-dialog').click();await page.screenshot({path:`artifacts/tides3d/${size.width}x${size.height}-moon-entry.png`});
  assert.deepEqual(errors,[]);results.push({size,fits,handle:{width:handle.width,height:handle.height},status:'PASS'});await context.close();
 }
}finally{await browser.close();await writeFile('artifacts/tides3d/results.json',JSON.stringify(results,null,2));}
console.log(JSON.stringify(results,null,2));
