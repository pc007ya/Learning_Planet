'use strict';
const {chromium}=require('playwright');
const fs=require('node:fs');
const path=require('node:path');
const http=require('node:http');
const assert=require('node:assert/strict');
const app=process.cwd();
const html=`<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><style>body{margin:0}</style><button id="open">國文 3D</button><script type="module" src="/qa-r10.mjs"></script>`;
const entry=`
import {openChineseR9} from '/modules/chinese-planet/launch-r9.mjs';
let active=true,notify;
window.qaExpire=()=>{active=false;notify?.();};
const button=document.querySelector('#open');
button.onclick=()=>openChineseR9({grade:1,seconds:30,expectedUid:'fixture-student',isActive:()=>active,watchSession:cb=>{notify=cb;return()=>{notify=null;};}});
`;
const mockAuth=`
export const auth={};
export function onAuthStateChanged(_auth,on){
 const handle=setTimeout(()=>on({uid:sessionStorage.getItem('qa-other-uid')?'other-fixture':'fixture-student',async getIdTokenResult(){return {claims:{role:'student'}};}}),800);
 return ()=>clearTimeout(handle);
}
`;
const mime={'.js':'text/javascript','.mjs':'text/javascript','.json':'application/json','.html':'text/html','.css':'text/css','.png':'image/png','.webp':'image/webp','.jpg':'image/jpeg','.svg':'image/svg+xml'};
const server=http.createServer((req,res)=>{
 const p=decodeURIComponent(new URL(req.url,'http://localhost').pathname);
 if(p==='/qa-r10.html')return res.writeHead(200,{'content-type':'text/html; charset=utf-8'}).end(html);
 if(p==='/qa-r10.mjs')return res.writeHead(200,{'content-type':'text/javascript'}).end(entry);
 if(p==='/auth-v2/firebase-client.js')return res.writeHead(200,{'content-type':'text/javascript'}).end(mockAuth);
 const filename=path.resolve(app,'.'+p);
 if(!filename.startsWith(app+path.sep))return res.writeHead(403).end();
 fs.readFile(filename,(e,data)=>e?res.writeHead(404).end():res.writeHead(200,{'content-type':mime[path.extname(filename)]||'application/octet-stream'}).end(data));
});
(async()=>{
 await new Promise(r=>server.listen(0,'127.0.0.1',r));
 let browser;
 try {
 const origin='http://127.0.0.1:'+server.address().port;
 browser=await chromium.launch({args:['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader']});
 for(const [width,height,hasTouch] of [[875,863,false],[390,844,true]]){
  const page=await browser.newPage({viewport:{width,height},hasTouch});
  const errors=[], blocked=[];
  page.on('pageerror',e=>errors.push(String(e)));
  await page.route('**/*',route=>new URL(route.request().url()).origin===origin?route.continue():(blocked.push(route.request().url()),route.abort()));
  await page.goto(origin+'/qa-r10.html');
  await page.locator('#open').click();
  const map=page.locator('dialog canvas');
  await map.waitFor({state:'visible',timeout:20000});
  const choose=async()=>{
   await page.locator('[data-map-action=stations]').click();
   const station=page.locator('dialog [data-station]').first();
   const id=await station.getAttribute('data-station');
   await station.click();await page.locator('[data-map-action=enter]').click({timeout:50000});
   return id;
  };
  const lessonId=await choose();
  const frame=page.locator('dialog iframe');
  assert.equal(await page.locator('dialog').count(),1);
  assert.equal(page.url(),origin+'/qa-r10.html');
  assert.match(await frame.getAttribute('src'),/chinese-practice\.html\?lesson=/);
  const child=page.frameLocator('dialog iframe');
  await child.locator('[data-map-selected]').waitFor({state:'visible',timeout:20000});
  assert.equal(await child.locator('[data-map-selected]').getAttribute('data-map-lesson'),new URL(await frame.getAttribute('src')).searchParams.get('lesson'));
  assert.equal(await child.locator('#practice-app').getAttribute('data-auth-uid'),'fixture-student');
  assert.ok(!(await map.isVisible()));
  const back=child.locator('header button[data-action=return]');
  if(hasTouch)await back.tap();else await back.click();
  await frame.waitFor({state:'detached'});
  await map.waitFor({state:'visible'});
  assert.equal(page.url(),origin+'/qa-r10.html');
  assert.equal(await page.locator('dialog').count(),1);
  // Reopen the already reached station: return did not reset map position or choice.
  if(width>480){
   await page.evaluate(()=>sessionStorage.setItem('qa-other-uid','1'));
   await page.locator('[data-map-action=enter]').click();
   await page.locator('dialog').getByText(/課程暫時無法驗證/).waitFor({timeout:20000});
   assert.ok(!(await frame.isVisible()));
  }
  await page.evaluate(()=>window.qaExpire());
  assert.equal(await page.locator('dialog').count(),0);
  assert.deepEqual(errors,[]);assert.deepEqual(blocked,[]);
  console.log(width,height,lessonId,'real workbook protected navigation + in-place return; no external requests');
  await page.close();
 }
 } finally{await browser?.close();server.close();}
})().catch(error=>{console.error(error);process.exitCode=1;});
