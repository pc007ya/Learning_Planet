const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const {chromium}=require('playwright');
// Run against an unchanged production build/root with the R10 source applied.
// The only replacement is the access transport; the parent launcher, child
// bootstrap, lesson runtime, progress, DOM events and Three are real files.
const root=path.resolve(process.argv[2]||'.'),origin='http://english-r10.invalid';
const mime={'.mjs':'text/javascript','.js':'text/javascript','.html':'text/html','.css':'text/css','.json':'application/json','.webp':'image/webp','.jpg':'image/jpeg','.png':'image/png'};
const authGate='http://english-r10.invalid/auth-v2/page-access.mjs';
const parentHtml='<!doctype html><meta charset="utf-8"><button id="open">進入英文 3D</button><div id="who">測試學員</div><script type="module">\nimport {openEnglishOriginal} from "/modules/english-original/launch.mjs";document.querySelector("#open").onclick=()=>openEnglishOriginal({learnerId:"qa-r10-english",grade:1,isActive:()=>document.querySelector("#who").textContent==="測試學員",initialView:"map"});</script>';
const authFixture='const target=document.querySelector("[data-auth-content]");target.hidden=false;target.inert=false;document.querySelector("#page-auth-status").hidden=true;for(const x of document.querySelectorAll("script[data-auth-script]")){const s=document.createElement("script");if(x.src){s.src=x.src;await new Promise((ok,fail)=>{s.onload=ok;s.onerror=fail;document.head.append(s);});}else{s.textContent=x.textContent;document.head.append(s);}}';
(async()=>{
 const browser=await chromium.launch();
 try{
  for(const [width,height,touch] of [[1170,830,false],[768,955,true],[390,844,true]]){
   const context=await browser.newContext({viewport:{width,height},hasTouch:touch});
   const page=await context.newPage(),errors=[],outbound=[];
   page.on('pageerror',e=>errors.push(e.message));
   await context.route('**/*',async r=>{
    const u=new URL(r.request().url());
    if(u.origin!==origin){outbound.push(u.href);return r.abort();}
    if(u.pathname==='/')return r.fulfill({status:200,contentType:'text/html',body:parentHtml});
    if(u.href===authGate)return r.fulfill({status:200,contentType:'text/javascript',body:authFixture});
    const f=path.resolve(root,'.'+decodeURIComponent(u.pathname));
    if(!f.startsWith(root+path.sep)||!fs.existsSync(f)||!fs.statSync(f).isFile())return r.fulfill({status:404,body:''});
    return r.fulfill({status:200,contentType:mime[path.extname(f)]||'application/octet-stream',path:f});
   });
   await page.goto(origin);await page.locator('#open').click();
   const frame=page.frameLocator('iframe'),stage=frame.locator('#mapStage');
   await stage.locator('canvas').waitFor({state:'visible'});
   const labels=()=>stage.locator('.english-map-labels button:not([hidden])');
   await labels().nth(7).waitFor({state:'visible'});
   assert.equal(await labels().count(),8);
   assert.deepEqual((await labels().allTextContents()).slice(0,2),['Hello, My Classroom','Colors Around Me']);
   assert.equal(await frame.locator('#content').isHidden(),true);
   assert.equal(await frame.locator('#content').locator('h2').count(),0);
   const pos=await stage.locator('canvas').evaluate(async(canvas)=>{
    const [{gardenCameraFit},T]=await Promise.all([import('/modules/english-original/english-exploration-r10.mjs'),import('/modules/math-knowledge/vendor/three-r187/three.module.js')]);
    const r=canvas.getBoundingClientRect(),{aspect,overview}=gardenCameraFit(r.width,r.height),p=.63,t=.08;
    const cam=new T.PerspectiveCamera(43,aspect,.1,100);
    cam.position.set(overview*Math.sin(p)*Math.sin(t),overview*Math.cos(p),overview*Math.sin(p)*Math.cos(t));cam.lookAt(0,0,0);cam.updateMatrixWorld(true);
    for(const [x,y,z] of [[-1.1,.07,-3.05],[0,.211,0],[1.1,.07,3.05],[-5,.07,2.5],[5,.07,2.5]]){
     const q=new T.Vector3(x,y,z).project(cam),a=(1+q.x)*r.width*.5,b=(1-q.y)*r.height*.5;
     if(document.elementFromPoint(r.left+a,r.top+b)===canvas)return [a,b];
    }
    return null;
   });
   assert.ok(pos,'a visible walkable point is not obstructed by labels');
   const c=await stage.locator('canvas').boundingBox();
   if(touch)await page.touchscreen.tap(c.x+pos[0],c.y+pos[1]);
   else await page.mouse.click(c.x+pos[0],c.y+pos[1]);
   await stage.getByRole('status').filter({hasText:'前往地圖位置'}).waitFor({state:'visible'});
   await labels().nth(1)[touch?'tap':'click']();
   const title=frame.locator('#content>h2');
   await title.waitFor({state:'visible',timeout:30000});assert.equal(await title.innerText(),'Colors Around Me');
   assert.equal(await frame.locator('#navigation').isHidden(),true);
   const frameBefore=page.frames()[1].url();
   await frame.locator('#returnEnglishMap')[touch?'tap':'click']();
   await labels().nth(7).waitFor({state:'visible'});
   assert.equal(page.frames()[1].url(),frameBefore);
   assert.equal(await page.locator('#who').innerText(),'測試學員');
   assert.equal(await frame.locator('#content').isHidden(),true);
   assert.deepEqual(outbound,[]);assert.deepEqual(errors,[]);
   await context.close();
  }
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exit(1);});
