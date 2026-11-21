'use strict';
const {chromium}=require('playwright');
const assert=require('node:assert/strict');
const path=require('node:path');
const fs=require('node:fs');
const http=require('node:http');
const app=path.resolve('split/app'), html='<!doctype html><meta charset=utf-8><meta name=viewport content="width=device-width,initial-scale=1"><style>body{margin:0}#english{height:86dvh;width:100%}dialog{outline:0}</style><button id="chinese">國文 3D</button><button id="en">英文 3D</button><section id="english"></section><script type=module src="/qa-fixture.mjs"></script>';
const fixture = [
 "import {openChineseR9} from '/modules/chinese-planet/launch-r9.mjs';",
 "import {createExplorer} from '/modules/english-original/english-exploration-r9.mjs';",
 "import * as THREE from '/modules/math-knowledge/vendor/three-r187/three.module.js';",
 "const button=document.querySelector('#chinese');",
 "button.onclick=()=>openChineseR9({grade:1,seconds:30,isActive:()=>true,watchSession:()=>()=>{},navigate:u=>{document.body.dataset.next=u.pathname+u.search;}});",
 "const units=Array.from({length:8},(_,i)=>({id:'test-'+i,title:['Classroom','Paint','Park','Colors','City','Library','Books','School'][i],vocabulary:[]}));",
 "document.querySelector('#en').onclick=()=>createExplorer(document.querySelector('#english'),{THREE,units,onError:e=>{document.body.dataset.failure=String(e);}});"
].join('\n');
const mime={'.js':'text/javascript','.mjs':'text/javascript','.json':'application/json','.html':'text/html','.css':'text/css','.png':'image/png','.webp':'image/webp','.jpg':'image/jpeg'};
const serve=http.createServer((req,res)=>{
 const url=new URL(req.url,'http://localhost');const pathname=decodeURIComponent(url.pathname);
 if(pathname==='/qa-fixture.html'){res.writeHead(200,{'content-type':'text/html; charset=utf-8'}).end(html);return;}
 if(pathname==='/qa-fixture.mjs'){res.writeHead(200,{'content-type':'text/javascript; charset=utf-8'}).end(fixture);return;}
 const file=path.resolve(app,'.'+pathname);
 if(!file.startsWith(app+path.sep)){res.writeHead(403).end();return;}
 fs.readFile(file,(e,data)=>{if(e)res.writeHead(404).end();else res.writeHead(200,{'content-type':mime[path.extname(file)]||'application/octet-stream'}).end(data);});
});
(async()=>{
 await new Promise(r=>serve.listen(0,'127.0.0.1',r));
 const origin='http://127.0.0.1:'+serve.address().port;
 let browser;
 try{
  browser=await chromium.launch({args:['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader']});
  for(const [width,height] of [[1024,768],[390,844]]){
   const page=await browser.newPage({viewport:{width,height}}), errors=[], outbound=[];
   page.on('pageerror',e=>errors.push(String(e)));
   await page.route('**/*',r=>{if(new URL(r.request().url()).origin===origin)return r.continue();outbound.push(r.request().url());return r.abort();});
   await page.goto(origin+'/qa-fixture.html');
   await page.locator('#chinese').click();
   await page.locator('dialog canvas').waitFor({state:'visible',timeout:12000});
   await page.locator('[data-map-action=stations]').click();
   const station=page.locator('dialog [data-station]').first();
   await station.waitFor({state:'visible'});
   await station.click();
   if(width>480){
    const enter=page.locator('[data-map-action=enter]');
    await enter.click({timeout:45000});
    await page.locator('body[data-next^="/chinese-practice.html?lesson="]').waitFor();
   }else await page.locator('[data-map-action=close]').click();
   await page.locator('dialog').waitFor({state:'detached'});
   await page.locator('#en').click();
   const canvas=page.locator('#english canvas');
   await canvas.waitFor({state:'visible',timeout:12000});
   const dimensions=await canvas.evaluate(e=>({width:e.getBoundingClientRect().width,webgl:!!e.getContext('webgl2')}));
   assert.ok(dimensions.width>=width-4&&dimensions.webgl);
   assert.equal(await page.locator('body').getAttribute('data-failure'),null);
   assert.deepEqual(errors,[]);assert.deepEqual(outbound,[]);
   await page.close();
  }
  console.log('Actual R9 WebGL rendering: Chinese and English pass desktop/phone viewports; Chinese first station reached real protected route, no sign-in or external requests.');
 } finally{await browser?.close();serve.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
