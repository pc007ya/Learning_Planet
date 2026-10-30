// Reproducible CI browser acceptance. Run against a local static server on 4173.
import { chromium } from 'playwright';
import { mkdir, writeFile } from 'node:fs/promises';
import assert from 'node:assert/strict';
const browser=await chromium.launch({headless:true});
const results=[];
await mkdir('artifacts/tides',{recursive:true});
try{
  for(const size of [{width:1024,height:600},{width:1024,height:768},{width:1280,height:720},{width:390,height:844}]){
    const context=await browser.newContext({viewport:size,hasTouch:true});
    const page=await context.newPage();const errors=[];
    page.on('pageerror',error=>errors.push(String(error)));
    const requests=[];page.on('request',r=>requests.push(r.url()));
    assert((await page.goto('http://127.0.0.1:4173/experiments/3d/earth-moon/tides/classic.html'))?.ok());
    await page.locator('body[data-tides-ready=true]').waitFor();
    for(let step=0;step<4;step++){
      await page.locator(`[data-step="${step}"]`).click();
      const fit=await page.evaluate(()=>({pageH:document.documentElement.scrollHeight,pageW:document.documentElement.scrollWidth,h:innerHeight,w:innerWidth,side:document.querySelector('aside').scrollHeight-document.querySelector('aside').clientHeight,asideBottom:document.querySelector('aside').getBoundingClientRect().bottom,footerTop:document.querySelector('footer').getBoundingClientRect().top}));
      assert(fit.pageH<=fit.h+1&&fit.pageW<=fit.w+1&&fit.side<=1&&fit.asideBottom<=fit.footerTop,'layout '+JSON.stringify({size,step,fit}));
      await page.screenshot({path:`artifacts/tides/${size.width}x${size.height}-step${step+1}.png`});
    }
    await page.locator('[data-step="2"]').click();
    for(const a of [0,90,180,270]){
      await page.locator(`[data-angle="${a}"]`).click();
      assert.equal(await page.locator('#moon').getAttribute('aria-valuenow'),String(a));
      assert((await page.locator('#scene').textContent()).includes(a%180===0?'2.92':'1.08'));
    }
    await page.locator('#moon').press('Home');await page.locator('#moon').press('ArrowUp');
    assert.equal(await page.locator('#moon').getAttribute('aria-valuenow'),'5');
    await page.locator('#moon').press('Home');
    const moon=await page.locator('#moon').boundingBox();
    const target=await page.locator('#scene').evaluate(e=>{const m=e.getScreenCTM();return {x:m.a*300+m.e,y:m.d*35+m.f};});
    await page.mouse.move(moon.x+moon.width/2,moon.y+moon.height/2);await page.mouse.down();await page.mouse.move(target.x,target.y,{steps:12});await page.mouse.up();
    assert.equal(await page.locator('#moon').getAttribute('aria-valuenow'),'90');
    // Actual touch input through the browser's device protocol, not synthetic DOM events.
    const cdp=await context.newCDPSession(page);
    const top=await page.locator('#moon').boundingBox();
    const left=await page.locator('#scene').evaluate(e=>{const m=e.getScreenCTM();return {x:m.a*158+m.e,y:m.d*177+m.f};});
    await cdp.send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:[{x:top.x+top.width/2,y:top.y+top.height/2,id:0}]});
    await cdp.send('Input.dispatchTouchEvent',{type:'touchMove',touchPoints:[{...left,id:0}]});
    await cdp.send('Input.dispatchTouchEvent',{type:'touchEnd',touchPoints:[]});
    assert.equal(await page.locator('#moon').getAttribute('aria-valuenow'),'180');
    await page.locator('#play').click();await page.waitForTimeout(150);await page.locator('#play').click();
    const angle=await page.locator('#moon').getAttribute('aria-valuenow');await page.waitForTimeout(150);assert.equal(await page.locator('#moon').getAttribute('aria-valuenow'),angle);
    await page.locator('#quiz-open').click();await page.locator('[data-answer="0"]').click();assert((await page.locator('#quiz-feedback').textContent()).includes('再看看'));
    await page.locator('[data-answer="90"]').click();assert((await page.locator('#quiz-feedback').textContent()).includes('答對'));
    await page.screenshot({path:`artifacts/tides/${size.width}x${size.height}-quiz.png`});
    await page.locator('#dialog-close').click();assert.equal(await page.locator('#moon').getAttribute('aria-valuenow'),angle);
    await page.locator('#reset').click();assert.equal(await page.locator('#moon').getAttribute('aria-valuenow'),'0');
    assert(!requests.some(url=>/three|planet\.js|\.glb|\.gltf/.test(url)),'tide page unexpectedly loads 3D resources');
    assert.deepEqual(errors,[]);results.push({size,status:'PASS',checks:['four-step-layout','phase-and-range','keyboard','mouse-drag','touch-drag','play-pause','quiz-return','reset','no-three']});
    await context.close();
  }
}finally{await browser.close();await writeFile('artifacts/tides/results.json',JSON.stringify(results,null,2));}
console.log(JSON.stringify(results,null,2));
