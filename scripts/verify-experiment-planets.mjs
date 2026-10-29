import { chromium } from 'playwright';
import { mkdir } from 'node:fs/promises';

const root='http://127.0.0.1:4173/experiments/3d/';
const planets=['ocean-buoyancy','magnet','earth-moon','plants','weather','force-motion'];
const sizes=[{width:1024,height:600},{width:1024,height:768},{width:1280,height:720}];
const browser=await chromium.launch({headless:true,args:['--enable-webgl','--use-angle=swiftshader','--disable-web-security']});
const errors=[];
await mkdir('artifacts/experiment-planets',{recursive:true});
try{
  for(const size of sizes){
    for(const planet of planets){
      if(size!==sizes[0]&&planet!=='ocean-buoyancy')continue;
      const page=await browser.newPage({viewport:size,deviceScaleFactor:1});
      page.on('pageerror',error=>errors.push(planet+': '+String(error)));
      const target=root+planet+'/';
      const response=await page.goto(target,{waitUntil:'networkidle',timeout:30000});
      if(!response?.ok())throw Error(target+' '+response?.status());
      await page.locator('body[data-planet-ready="true"]').waitFor({timeout:15000});
      await page.locator('#ep-controls button').first().waitFor();
      const fits=await page.evaluate(()=>{
        const shell=document.querySelector('.ep-shell');
        const side=document.querySelector('.ep-side');
        const rect=(node)=>node?.getBoundingClientRect();
        return {
          noPageScroll: document.documentElement.scrollHeight<=window.innerHeight+3,
          controlsVisible:side&&side.scrollHeight<=side.clientHeight+4,
          sceneSize:rect(document.querySelector('#ep-scene')),
          canvasCount:document.querySelectorAll('#ep-scene canvas').length,
          shell:rect(shell),
        };
      });
      if(!fits.noPageScroll||!fits.controlsVisible)errors.push(planet+' overflow at '+size.width+'x'+size.height+' '+JSON.stringify(fits));
      if(fits.canvasCount!==1)errors.push(planet+' WebGL canvas unavailable at '+size.width+'x'+size.height);
      const suffix=planet+'-'+size.width+'x'+size.height;
      await page.screenshot({path:'artifacts/experiment-planets/'+suffix+'-scene.png'});
      await page.locator('#ep-observe').click();
      await page.locator('#ep-quiz-open').click();
      await page.locator('#ep-quiz').waitFor({state:'visible'});
      await page.locator('#ep-quiz [data-answer]').first().waitFor();
      if(planet==='ocean-buoyancy')await page.screenshot({path:'artifacts/experiment-planets/'+suffix+'-quiz.png'});
      await page.locator('#ep-quiz-close').click();
      await page.locator('#ep-quiz').waitFor({state:'hidden'});
      await page.close();
      console.log('PASS',suffix,'canvas',fits.canvasCount,'scroll',fits.noPageScroll);
    }
  }
}finally{
  await browser.close();
}
if(errors.length){console.error(errors.join('\n'));process.exitCode=1;}
