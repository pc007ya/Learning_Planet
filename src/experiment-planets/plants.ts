import * as T from 'three';
import {Stage,type World} from './core';
import {advancePlantHydration,plantBalance,plantRecoveryGoal,PLANT_DEFAULTS,type PlantConditions} from './plants-model';

const MODEL_NOTE='這是加速的理想植物示意，指數不是實際流量；第 7 天不代表真實植物必然長到這個高度。藍白粒子是水與水氣的追蹤符號，水氣本身看不見。太陽圖像表示光照條件，不代表實際太陽方位。根吸收水和礦物質，植物的糖主要由光合作用製造。';
const color=(hex:number,roughness=.55)=>new T.MeshStandardMaterial({color:hex,roughness,metalness:.02});
function pipe(points:T.Vector3[],radius:number,material:T.Material){return new T.Mesh(new T.TubeGeometry(new T.CatmullRomCurve3(points),32,radius,7,false),material);}
function leafGeometry(length:number,width:number){
 const vertices:number[]=[],uvs:number[]=[],indices:number[]=[];const rows=22,cols=8;
 for(let i=0;i<=rows;i++){const t=i/rows,half=width*Math.pow(Math.sin(Math.PI*t),.78)*(.98-.2*t);for(let j=0;j<=cols;j++){const across=j/cols*2-1;vertices.push(length*t,.12*Math.sin(Math.PI*t)+.13*across*across*Math.sin(Math.PI*t),half*across);uvs.push(t,j/cols);}}
 for(let i=0;i<rows;i++)for(let j=0;j<cols;j++){const a=i*(cols+1)+j,b=a+cols+1;indices.push(a,b,a+1,b,b+1,a+1);}
 const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(vertices,3));g.setAttribute('uv',new T.Float32BufferAttribute(uvs,2));g.setIndex(indices);g.computeVertexNormals();return g;
}
function soilTexture(){
 const canvas=document.createElement('canvas');canvas.width=canvas.height=256;const c=canvas.getContext('2d')!;c.fillStyle='#513b27';c.fillRect(0,0,256,256);let seed=32;
 for(let i=0;i<1200;i++){seed=(seed*1664525+1013904223)>>>0;const x=seed%256;seed=(seed*1664525+1013904223)>>>0;const y=seed%256;const r=1+seed%4;c.fillStyle=['#765339','#9e7752','#312a20','#be9b6c'][i%4];c.beginPath();c.ellipse(x,y,r,r*.65,(i%6)*.5,0,Math.PI*2);c.fill();}
 const texture=new T.CanvasTexture(canvas);texture.colorSpace=T.SRGBColorSpace;return texture;
}
function makeCan(){
 const can=new T.Group();const blue=new T.MeshStandardMaterial({color:0x5eafc4,roughness:.3,metalness:.35});
 const body=new T.Mesh(new T.CylinderGeometry(.34,.30,.55,36),blue);can.add(body);
 const rim=new T.Mesh(new T.TorusGeometry(.32,.035,10,36),color(0xd4edf0,.25));rim.rotation.x=Math.PI/2;rim.position.y=.275;can.add(rim);
 const handle=new T.Mesh(new T.TorusGeometry(.31,.055,10,36,Math.PI*1.4),blue);handle.position.set(.32,.03,0);handle.rotation.z=-Math.PI*.2;can.add(handle);
 can.add(pipe([new T.Vector3(-.22,-.1,0),new T.Vector3(-.55,.05,0),new T.Vector3(-.92,.4,0)],.065,blue));
 const rose=new T.Mesh(new T.CylinderGeometry(.13,.10,.10,24),color(0xd5e9ed,.3));rose.position.set(-.96,.44,0);rose.rotation.z=Math.PI*.25;can.add(rose);
 return can;
}
function validConditions(input:Record<string,unknown>):PlantConditions{
 const c={...PLANT_DEFAULTS};for(const key of Object.keys(c) as (keyof PlantConditions)[]){const allowed:Record<keyof PlantConditions,string[]>={light:['enough','shade','strong'],water:['enough','dry','flood'],soil:['rich','poor'],air:['normal','low'],days:['one','seven']};if(allowed[key].includes(String(input[key])))(c as unknown as Record<string,string>)[key]=String(input[key]);}return c;
}

export function createPlants(stage:Stage):World{
 const root=stage.worldRoot;const conditions:PlantConditions={...PLANT_DEFAULTS};
 stage.scene.background=new T.Color(0x102a32);stage.scene.fog=new T.Fog(0x102a32,19,42);
 stage.camera.position.set(6,4.5,8.6);stage.camera.lookAt(0,.6,0);
 const orbit=stage.orbit;orbit.target.set(0,.6,0);orbit.update();
 const fill=new T.PointLight(0xa0ddba,5,12,2);fill.position.set(-3,4,2);stage.scene.add(fill);
 const pedestal=new T.Mesh(new T.CylinderGeometry(2.55,2.68,.28,64),new T.MeshStandardMaterial({color:0x21474f,roughness:.36,metalness:.22}));pedestal.position.y=-2.02;pedestal.userData.noFit=true;root.add(pedestal);
 const rimLight=new T.Mesh(new T.TorusGeometry(2.56,.025,8,96),new T.MeshBasicMaterial({color:0x70d5cf}));rimLight.rotation.x=Math.PI/2;rimLight.position.y=-1.86;rimLight.userData.noFit=true;root.add(rimLight);
 const pot=new T.Group();root.add(pot);
 const potMat=new T.MeshStandardMaterial({color:0xb56c48,roughness:.68,metalness:.03,side:T.DoubleSide});
 const outline=[new T.Vector2(.67,-1.85),new T.Vector2(.73,-1.8),new T.Vector2(.97,-.54),new T.Vector2(1.03,-.52),new T.Vector2(1.03,-.40),new T.Vector2(.91,-.40),new T.Vector2(.89,-.58),new T.Vector2(.66,-1.75)];
 const ceramic=new T.Mesh(new T.LatheGeometry(outline,64),potMat);pot.add(ceramic);
 const lip=new T.Mesh(new T.TorusGeometry(.97,.075,12,64),color(0xd19a70,.65));lip.rotation.x=Math.PI/2;lip.position.y=-.44;pot.add(lip);
 for(let i=0;i<3;i++){const band=new T.Mesh(new T.TorusGeometry(.74+i*.075,.013,5,64),color(0xd39b72));band.rotation.x=Math.PI/2;band.position.y=-1.5+i*.4;pot.add(band);}
 const soilMap=soilTexture();const soilMat=new T.MeshStandardMaterial({color:0x72503b,map:soilMap,roughness:.98,transparent:true,opacity:1});
 const soil=new T.Mesh(new T.CylinderGeometry(.88,.66,1.25,48),soilMat);soil.position.y=-1.08;pot.add(soil);
 const soilSurface=new T.Mesh(new T.CircleGeometry(.88,48),new T.MeshStandardMaterial({map:soilMap,roughness:.95}));soilSurface.rotation.x=-Math.PI/2;soilSurface.position.y=-.445;root.add(soilSurface);
 const rootMat=new T.MeshStandardMaterial({color:0xe7d6ab,roughness:.78});
 const roots=new T.Group();root.add(roots);
 const rootPaths:T.CatmullRomCurve3[]=[];
 for(let i=0;i<10;i++){const a=i*Math.PI*2/10;const end=new T.Vector3(Math.cos(a)*(.48+i%3*.12),-1.60+(i%2)*.14,Math.sin(a)*.55);const points=[new T.Vector3(0,-.38,0),new T.Vector3(Math.cos(a)*.15,-.72,Math.sin(a)*.15),new T.Vector3(end.x*.8,-1.10,end.z*.8),end];const curve=new T.CatmullRomCurve3(points);rootPaths.push(curve);roots.add(new T.Mesh(new T.TubeGeometry(curve,28,.026,7,false),rootMat));
  for(let j=0;j<3;j++){const origin=curve.getPoint(.4+j*.18);const branch=[origin,origin.clone().add(new T.Vector3(Math.cos(a+.9)*.18,-.1,Math.sin(a+.9)*.18)),origin.clone().add(new T.Vector3(Math.cos(a+.9)*.29,-.23,Math.sin(a+.9)*.29))];roots.add(pipe(branch,.011,rootMat));}
 }
 const plant=new T.Group();plant.position.y=-.41;root.add(plant);
 const stemMat=color(0x4e9b54,.6);const stem=new T.Mesh(new T.CylinderGeometry(.052,.085,2.6,16),stemMat);stem.position.y=1.3;plant.add(stem);
 const xylem=new T.Group();plant.add(xylem);
 const transportMaterials=[new T.MeshStandardMaterial({color:0x5edbe4,emissive:0x2a8399,emissiveIntensity:.4,roughness:.3}),new T.MeshStandardMaterial({color:0xf2d08b,roughness:.5})];
 for(const [i,x] of [-.035,.035].entries()){const vessel=new T.Mesh(new T.CylinderGeometry(.015,.015,2.6,8),transportMaterials[i]);vessel.position.set(x,1.3,.075);xylem.add(vessel);}
 const leaves:T.Group[]=[];const blades:T.Mesh[]=[];const leafMats:T.MeshStandardMaterial[]=[];
 for(let i=0;i<8;i++){
  const g=new T.Group();g.position.y=.30+i*.29;g.rotation.y=(i%2?Math.PI:0)+(i%3-.8)*.24;plant.add(g);leaves.push(g);
  const len=1.15-(i>5?(i-5)*.18:0),width=.39-(i>5?(i-5)*.06:0);
  const leafMat=new T.MeshStandardMaterial({color:i%2?0x4d9e52:0x62b563,roughness:.68,metalness:.01,envMapIntensity:.35,side:T.DoubleSide});leafMats.push(leafMat);
  const leaf=new T.Mesh(leafGeometry(len,width),leafMat);leaf.name='leaf-blade';g.add(leaf);blades.push(leaf);
  const veinMat=new T.MeshStandardMaterial({color:0xb4d98a,roughness:.6});
  g.add(pipe([new T.Vector3(0,.008,0),new T.Vector3(len*.5,.13,0),new T.Vector3(len,.01,0)],.011,veinMat));
  for(let j=1;j<6;j++){const t=j/7,half=width*Math.pow(Math.sin(Math.PI*t),.78)*(.98-.2*t);for(const side of [-1,1])g.add(pipe([new T.Vector3(len*t,.12*Math.sin(Math.PI*t)+.012,0),new T.Vector3(len*(t+.09),.17*Math.sin(Math.PI*t),side*half*.8)],.004,veinMat));}
  const petiole=pipe([new T.Vector3(0,0,0),new T.Vector3(.2,.06,0)],.022,stemMat);g.add(petiole);
 }
 const bud=new T.Group();for(const side of [-1,1]){const shoot=new T.Mesh(leafGeometry(.31,.105),color(0x5c9d3e,.65));shoot.rotation.z=Math.PI/2+side*.17;shoot.rotation.y=side*.28;shoot.position.z=side*.025;shoot.castShadow=true;bud.add(shoot);}bud.position.y=2.7;plant.add(bud);
 const sunGroup=new T.Group();sunGroup.position.set(-2.2,.45,0);root.add(sunGroup);
 const sun=new T.Mesh(new T.SphereGeometry(.38,40,28),new T.MeshStandardMaterial({color:0xffd57c,emissive:0xffb948,emissiveIntensity:1.2,roughness:.4}));sunGroup.add(sun);
 const sunHalo=new T.Mesh(new T.SphereGeometry(.49,32,20),new T.MeshBasicMaterial({color:0xffd277,transparent:true,opacity:.13,depthWrite:false}));sunGroup.add(sunHalo);
 const sunLight=new T.PointLight(0xffd392,5,12,2);sunLight.position.set(-3,4,2);stage.scene.add(sunLight);
 const lightRays=new T.Group();root.add(lightRays);
 for(let i=0;i<5;i++){const dir=new T.Vector3(1,.5,(i-2)*.16).normalize();lightRays.add(new T.ArrowHelper(dir,new T.Vector3(-1.82,.64,0),1.2,0xffde8a,.13,.06));}
 const can=makeCan();const canHit=new T.Mesh(new T.SphereGeometry(1,12,8),new T.MeshBasicMaterial({transparent:true,opacity:0,depthWrite:false}));canHit.name='watering-can-touch-target';canHit.userData.noFit=true;can.add(canHit);const canHome=new T.Vector3(1.8,-1.55,1.2);can.position.copy(canHome);can.name='watering-can';root.add(can);
 const waterDropMat=new T.MeshStandardMaterial({color:0x74e7ec,emissive:0x1f6b7c,emissiveIntensity:.55,roughness:.15,transparent:true,opacity:.9});
 const waterDrops=Array.from({length:36},(_,i)=>{const drop=new T.Mesh(new T.SphereGeometry(.029+(i%3)*.007,8,6),waterDropMat);drop.visible=false;root.add(drop);return drop;});
 const steam=Array.from({length:18},(_,i)=>{const dot=new T.Mesh(new T.SphereGeometry(.018+(i%2)*.008,8,6),new T.MeshBasicMaterial({color:0xd0f8ed,transparent:true,opacity:.7,depthWrite:false}));dot.visible=false;root.add(dot);return dot;});
 const pourDrops=Array.from({length:14},()=>{const drop=new T.Mesh(new T.SphereGeometry(.035,8,6),waterDropMat);drop.visible=false;root.add(drop);return drop;});
 // One focal label per teaching step keeps the mobile water route visible.
 const flowLabel=stage.label('水路',new T.Vector3(-.65,-1.15,.5));
 const leafLabel=stage.label('葉片',new T.Vector3(1.15,1.2,.4));
 const lightLabel=stage.label('光照',new T.Vector3(-2.2,-.45,0));
 stage.protectLabelArea?.(plant);stage.protectLabelArea?.(roots);stage.protectLabelArea?.(sun);
 let teachingStep=0;

 function updateCanHit(){const distance=stage.camera.position.distanceTo(can.getWorldPosition(new T.Vector3()));const height=Math.max(180,stage.host.clientHeight||180);const radius=Math.max(.58,54*distance*Math.tan(T.MathUtils.degToRad(stage.camera.fov/2))/height);canHit.scale.setScalar(radius);stage.host.dataset.plantCanHitPx=String(Math.round(radius*height/(Math.max(.1,distance)*Math.tan(T.MathUtils.degToRad(stage.camera.fov/2)))));}
 orbit.addEventListener?.('change',updateCanHit);const hitResize=typeof ResizeObserver!=='undefined'?new ResizeObserver(updateCanHit):null;hitResize?.observe(stage.host);
 pedestal.receiveShadow=true;ceramic.castShadow=true;ceramic.receiveShadow=true;soilSurface.receiveShadow=true;stem.castShadow=true;stem.receiveShadow=true;for(const blade of blades){blade.castShadow=true;blade.receiveShadow=true;}can.traverse(o=>{if(o instanceof T.Mesh&&o!==canHit){o.castShadow=true;o.receiveShadow=true;}});
 const data:Record<string,string>={...PLANT_DEFAULTS,view:'whole'};
 const controls:World['controls']=[
  {id:'light',title:'光照',values:[{id:'shade',label:'太少'},{id:'enough',label:'適量'},{id:'strong',label:'強烈'}]},
  {id:'water',title:'土壤水分',values:[{id:'dry',label:'缺水'},{id:'enough',label:'適量'},{id:'flood',label:'積水'}]},
  {id:'soil',title:'土壤養分',values:[{id:'rich',label:'充足'},{id:'poor',label:'不足'}]},
  {id:'air',title:'二氧化碳',values:[{id:'normal',label:'正常空氣'},{id:'low',label:'供應不足'}]},
  {id:'days',title:'生長示意',values:[{id:'one',label:'第 1 天'},{id:'seven',label:'第 7 天'}]},
  {id:'view',title:'看裡面',values:[{id:'whole',label:'整株'},{id:'cutaway',label:'根與莖'}]},
 ];
 let hydration=plantBalance(conditions).targetHydration,clock=0,playing=true,pouring=0,demoTime:number|null=null,observing=false,wasDry=false;
 const completed=[false,false,false];
 const observations:{conditions:PlantConditions;hydration:number;photo:number;time:number}[]=[];
 function syncConditions(){Object.assign(conditions,validConditions(data));}
 function record(){if(demoTime!==null)return;const p=plantBalance(conditions,hydration);if(conditions.water==='dry'&&p.turgor<.35){wasDry=true;completed[1]=true;}if(p.photosynthesis>.7&&p.turgor>.7&&conditions.days==='seven'&&conditions.soil==='rich'&&conditions.water==='enough'&&conditions.light==='enough'&&conditions.air==='normal')completed[0]=true;
  const match=observations.find(o=>o.conditions.water===conditions.water&&o.conditions.soil===conditions.soil&&o.conditions.air===conditions.air&&o.conditions.days===conditions.days&&o.conditions.light!==conditions.light&&Math.abs(o.hydration-hydration)<.2);if(match&&conditions.water==='enough'&&hydration>.6)completed[2]=true;
 }
 function visual(){updateCanHit();const p=plantBalance(conditions,hydration);const cut=data.view==='cutaway';ceramic.castShadow=!cut;flowLabel.style.display=cut?'':'none';leafLabel.style.display=!cut&&teachingStep!==2?'':'none';lightLabel.style.display=!cut&&teachingStep===2?'':'none';potMat.transparent=cut;potMat.opacity=cut?.15:1;soilMat.opacity=cut?.12:1;(soilSurface.material as T.Material).transparent=cut;(soilSurface.material as T.Material).opacity=cut?.12:1;roots.visible=cut;xylem.visible=cut;stemMat.transparent=cut;stemMat.opacity=cut?.32:1;
  const growth=.86+.48*p.growth;plant.scale.setScalar(growth);const stemHeight=conditions.days==='seven'?2.6:1.8;stem.scale.y=stemHeight/2.6;stem.position.y=stemHeight/2;for(const vessel of xylem.children){vessel.scale.y=stemHeight/2.6;vessel.position.y=stemHeight/2;}bud.position.y=stemHeight+.06;
  leaves.forEach((g,i)=>{g.rotation.z=.28-(1-p.turgor)*1.15;g.position.y=(.30+i*.29);g.visible=i<5||conditions.days==='seven';g.scale.setScalar(i<5?1:.6+.4*p.growth);leafMats[i].color.setHSL(.23+.09*p.turgor,.56+.12*p.turgor,.19+.06*p.turgor,T.SRGBColorSpace);});
  sunGroup.scale.setScalar(conditions.light==='shade'?.68:conditions.light==='strong'?1.12:1);sunLight.intensity=conditions.light==='shade'?1:conditions.light==='strong'?7:5;lightRays.visible=conditions.light!=='shade';soilSurface.material instanceof T.MeshStandardMaterial&&soilSurface.material.color.setHex(conditions.water==='dry'?0xc6a986:conditions.water==='flood'?0x514a3a:0x806046);
  stage.host.dataset.plantWater=conditions.water;stage.host.dataset.plantView=data.view;stage.host.dataset.plantHydration=String(Math.round(hydration*100));stage.host.dataset.plantPhotosynthesis=String(Math.round(p.photosynthesis*100));stage.host.dataset.plantFlow=!playing?'paused':p.uptake>.1?'moving':'limited';
 }
 const canvas=stage.renderer?.domElement;const abort=new AbortController();let canMoved=false;
 const unbindCan=stage.bindDrag(can,point=>{canMoved=true;demoTime=null;can.position.set(T.MathUtils.clamp(point.x,-1.2,3),T.MathUtils.clamp(point.y,-.6,3),1.2);can.rotation.z=can.position.x<1.7?.35:0;},new T.Plane(new T.Vector3(0,0,1),-1.2));
 canvas?.addEventListener('pointerup',()=>{if(!canMoved)return;canMoved=false;can.updateMatrixWorld(true);const tip=new T.Vector3(-.96,.44,0).applyMatrix4(can.matrixWorld);if(Math.abs(tip.x)<1&&tip.y>-.1){data.water='enough';syncConditions();pouring=2.6;observing=true;}else{can.position.copy(canHome);can.rotation.z=0;}stage.notify();},{signal:abort.signal});
 canvas?.addEventListener('pointercancel',()=>{canMoved=false;can.position.copy(canHome);can.rotation.z=0;},{signal:abort.signal});
 visual();
 const world:World={
  name:'植物的水與光',intro:'旋轉盆栽，追蹤水從根到葉。拖水壺澆水，或用圖卡比較條件；指數是理想示意。',controls,
  steps:[{title:'水去哪裡',question:'根吸進的水，最後到哪裡？',detail:'切到「根與莖」，追蹤藍色水點從根向上移動；水也會經葉片散到空氣。'},{title:'葉片站起來',question:'缺水的葉片，可以恢復嗎？',detail:'先選缺水並觀察，再給適量水。看水分指數和葉片，恢復需要示意時間。'},{title:'公平比較',question:'只改光照，會看見什麼？',detail:'把水、土壤和空氣固定，只切換光照；先觀察再比較讀數。'},{title:'照顧挑戰',question:'把缺水植物救回來',detail:'保留缺水觀察，再調整水、光、土壤與空氣，讓葉片恢復。'}],
  missions:[{title:'健康生長',detail:'第 7 天，水、光與養分適當，觀察高光合指數。'},{title:'看見缺水',detail:'選缺水，等葉片下垂、水分低於 35，再觀察。'},{title:'只改光照',detail:'保持水、養分、空氣、日數相同，觀察兩種光照。'}],
  quiz:{question:'植物葉片下垂時，哪個做法是合理的實驗？',answers:['不看土壤就一直加水','先看土壤與水分，給適量水並等葉片恢復','只把植物拉高','把二氧化碳完全拿走'],correct:1,explanation:'水分支持細胞的膨壓，缺水可能讓葉片下垂；積水也會使根部缺氧。要看條件與讀數，不是水越多越好。'},
  modelNote:MODEL_NOTE,sourceLinks:[{label:'OSU：植物環境與水分',url:'https://extension.oregonstate.edu/catalog/em-9903-environmental-factors-affecting-plant-growth'},{label:'OpenStax：光合作用',url:'https://openstax.org/books/biology-2e/pages/8-1-overview-of-photosynthesis'}],
  selected(id){return data[id]||'';},
  choose(id,value){if(!controls.some(g=>g.id===id&&g.values.some(v=>v.id===value)))return;data[id]=value;demoTime=null;syncConditions();observing=false;visual();},
  observe(){observing=true;record();const p=plantBalance(conditions,hydration);observations.push({conditions:{...conditions},hydration,photo:p.photosynthesis,time:clock});if(observations.length>20)observations.shift();},
  completed(){return [...completed];},
  readout(){const p=plantBalance(conditions,hydration);return `水分 ${Math.round(p.turgor*100)}｜光合 ${Math.round(p.photosynthesis*100)}｜蒸散 ${Math.round(p.transpiration*100)}（相對指數）${conditions.water==='flood'?'；積水讓根部缺氧':conditions.water==='dry'?'；根部缺水':conditions.air==='low'?'；二氧化碳限制光合作用':''}`;},
  metrics(){const p=plantBalance(conditions,hydration);const leafState=p.turgor<.35?'下垂':p.turgor<.7?(conditions.water==='enough'?'恢復中':'逐漸下垂'):'挺立';return [{label:'葉片水分',value:Math.round(p.turgor*100),unit:'指數'},{label:'光合作用',value:Math.round(p.photosynthesis*100),unit:'指數'},{label:'葉片蒸散',value:Math.round(p.transpiration*100),unit:'指數'},{label:'生長示意',value:conditions.days==='seven'?7:1,unit:'天'},{label:'葉片狀態',value:leafState},{label:'示意時間',value:clock.toFixed(1),unit:'s'}];},
  challenge(){return {title:'讓缺水的葉片恢復',target:'先觀察水分低於 35，再讓水分恢復到 70 以上，並保持適量水、光與養分。',hint:'不要一直加水：積水會讓根部缺氧。先缺水觀察，再選適量水並播放。'};},
  checkChallenge(){return plantRecoveryGoal(conditions,hydration,wasDry);},
  demo(){demoTime=0;playing=true;data.water='dry';data.view='cutaway';syncConditions();observing=false;visual();},
  setPlaying(value){playing=value;visual();},
  setStep(index){teachingStep=index;data.view=index===0?'cutaway':'whole';visual();},
  tick(dt){if(!playing||dt<=0)return;clock+=dt;if(demoTime!==null){demoTime+=dt;if(demoTime>4&&data.water==='dry'){data.water='enough';syncConditions();pouring=2.6;}if(demoTime>9)demoTime=null;}
   hydration=advancePlantHydration(hydration,conditions,dt);const p=plantBalance(conditions,hydration);if(observing)record();visual();
   const plantScale=plant.scale.x;
   waterDrops.forEach((drop,i)=>{const t=(clock*(.25+.45*p.uptake)+i/36)%1;drop.visible=data.view==='cutaway'&&p.uptake>.05;if(t<.38){const path=rootPaths[i%rootPaths.length];drop.position.copy(path.getPoint(1-t/.38));}else{const stemT=(t-.38)/.62;drop.position.set(Math.sin(i*2)*.035,(-.41+stemT*(conditions.days==='seven'?2.6:1.8)*plantScale),.11);}});
   steam.forEach((dot,i)=>{const t=(clock*(.2+.45*p.transpiration)+i/18)%1;dot.visible=p.transpiration>.1;const leaf=leaves[i%5];const start=new T.Vector3(.65,.15,0);leaf.localToWorld(start);root.worldToLocal(start);dot.position.copy(start).add(new T.Vector3(Math.sin(i*3)*t*.25,t*.85,.18));(dot.material as T.MeshBasicMaterial).opacity=(1-t)*.55;});
   if(pouring>0){pouring-=dt;can.rotation.z=.35;pourDrops.forEach((drop,i)=>{drop.visible=true;const t=(clock*1.5+i/14)%1;const start=new T.Vector3(-.96,.44,0);can.localToWorld(start);root.worldToLocal(start);drop.position.copy(start).lerp(new T.Vector3((i%3-.8)*.12,-.44,.1),t);});if(pouring<=0){can.position.copy(canHome);can.rotation.z=0;}}else pourDrops.forEach(drop=>drop.visible=false);
  },
  snapshot(){return {conditions:{...conditions},view:data.view,hydration,clock,wasDry,completed:[...completed],observations:observations.map(o=>({...o,conditions:{...o.conditions}}))};},
  restore(saved){if(saved.conditions&&typeof saved.conditions==='object')Object.assign(data,validConditions(saved.conditions as Record<string,unknown>));data.view=saved.view==='cutaway'?'cutaway':'whole';syncConditions();if(typeof saved.hydration==='number'&&Number.isFinite(saved.hydration))hydration=T.MathUtils.clamp(saved.hydration,0,1);if(typeof saved.clock==='number'&&Number.isFinite(saved.clock))clock=Math.max(0,saved.clock);wasDry=saved.wasDry===true;observations.length=0;if(Array.isArray(saved.observations))for(const o of saved.observations.slice(-20)){if(!o||typeof o!=='object')continue;const row=o as Record<string,unknown>;if(!row.conditions||typeof row.conditions!=='object'||typeof row.hydration!=='number'||typeof row.photo!=='number'||typeof row.time!=='number'||![row.hydration,row.photo,row.time].every(Number.isFinite))continue;observations.push({conditions:validConditions(row.conditions as Record<string,unknown>),hydration:T.MathUtils.clamp(row.hydration,0,1),photo:T.MathUtils.clamp(row.photo,0,1),time:Math.max(0,row.time)});}if(Array.isArray(saved.completed))for(let i=0;i<3;i++)completed[i]=saved.completed[i]===true;visual();},
  reset(){Object.assign(data,PLANT_DEFAULTS,{view:'whole'});syncConditions();hydration=plantBalance(conditions).targetHydration;clock=0;demoTime=null;wasDry=false;observing=false;completed.fill(false);observations.length=0;can.position.copy(canHome);can.rotation.z=0;visual();},
  dispose(){unbindCan();hitResize?.disconnect();orbit.removeEventListener?.('change',updateCanHit);abort.abort();stage.scene.remove(fill,sunLight);soilMap.dispose();},
 };
 return world;
}
