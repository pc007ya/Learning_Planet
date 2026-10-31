import * as THREE from 'three';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';
import {Stage,type World} from './core';
import {setText} from './reading';
import {trolleyShell,trolleyWheel,brassMass,hardwareBolt,gateDetails} from './force-hardware';
import {advanceCart,cartForces,initialCart,updateComparisonProgress,type CartState,type ForceSettings,type ForceTrial,type ForceSurface} from './force-model';

type Choices={force:'weak'|'strong';mass:'light'|'heavy';surface:ForceSurface;hand:'hold'|'release'};
const START=-3;
const controls=[
 {id:'force',title:'推力大小',values:[{id:'weak',label:'小力 3 N'},{id:'strong',label:'大力 8 N'}]},
 {id:'mass',title:'小車與砝碼',values:[{id:'light',label:'1 kg'},{id:'heavy',label:'2 kg'}]},
 {id:'surface',title:'車底摩擦片與地面',values:[{id:'smooth',label:'平滑'},{id:'rough',label:'粗糙'}]},
 {id:'hand',title:'定力推桿',values:[{id:'hold',label:'持續推'},{id:'release',label:'放手滑行'}]},
] as const;
function material(color:number,metalness=0,roughness=.45){return new THREE.MeshStandardMaterial({color,metalness,roughness});}
function block(w:number,h:number,d:number,color:number,radius=.07,metalness=0){return new THREE.Mesh(new RoundedBoxGeometry(w,h,d,3,radius),material(color,metalness));}
function textSprite(text:string,color='#eafaff',width=1.45){
 const canvas=document.createElement('canvas');canvas.width=512;canvas.height=128;const context=canvas.getContext('2d')!;
 context.fillStyle='#0a1d35e8';context.beginPath();context.roundRect(2,2,508,124,25);context.fill();context.strokeStyle=color;context.lineWidth=3;context.stroke();
 context.fillStyle=color;context.font='bold 52px "Noto Sans TC",sans-serif';context.textAlign='center';context.textBaseline='middle';context.fillText(text,256,66);
 const map=new THREE.CanvasTexture(canvas);map.colorSpace=THREE.SRGBColorSpace;const sprite=new THREE.Sprite(new THREE.SpriteMaterial({map,depthTest:false}));sprite.scale.set(width,width/4,1);sprite.renderOrder=8;return sprite;
}
function surfaceTexture(rough:boolean){
 const canvas=document.createElement('canvas');canvas.width=512;canvas.height=128;const c=canvas.getContext('2d')!;c.fillStyle=rough?'#b88958':'#e2c99b';c.fillRect(0,0,512,128);
 for(let i=0;i<1000;i++){const x=(i*73)%512,y=(i*43)%128;c.fillStyle=rough?(i%2?'#714e32':'#d8b17b'):(i%2?'#bda37235':'#fff3d130');if(rough)c.fillRect(x,y,2+(i%3),2);else c.fillRect(x,y,18+(i%40),1);}
 const texture=new THREE.CanvasTexture(canvas);texture.colorSpace=THREE.SRGBColorSpace;texture.wrapS=texture.wrapT=THREE.RepeatWrapping;texture.repeat.set(2,1);return texture;
}
function spring(length:number){const points=Array.from({length:181},(_,i)=>new THREE.Vector3(i/180*length,Math.sin(i/180*Math.PI*18)*.12,Math.cos(i/180*Math.PI*18)*.12));return new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points),180,.025,6,false),material(0xb9c8d5,.8,.25));}

export function createForceMotion(stage:Stage):World{
 const root=stage.worldRoot;const ownTextures:THREE.Texture[]=[];const labels:THREE.Sprite[]=[];
 const data:Choices={force:'weak',mass:'light',surface:'smooth',hand:'hold'};
 let cart=initialCart(),playing=true,running=false,motor=false,runFair=true,runSettings:ForceSettings={force:3,mass:1,surface:'smooth'},startAcceleration=0;
 let earned=updateComparisonProgress([]);let trials:ForceTrial[]=[],step=0,demoMode=false,demoLeg=0,demoWait=0,recorded=false,dragging:number|null=null,dragOffset=0,dragLastX=0,dragLastTime=0,dragVelocity=0;
 let releaseVelocity=0,coastingTime=0,coastCompleted=false,lastStatus='先選條件，再按觀察。';
 const abort=new AbortController();
 stage.scene.background=new THREE.Color(0x091c31);stage.scene.fog=new THREE.Fog(0x091c31,25,65);
 const addLabel=(text:string,position:THREE.Vector3,color?:string,width?:number)=>{const s=textSprite(text,color,width);s.position.copy(position);root.add(s);labels.push(s);ownTextures.push(s.material.map!);return s;};
 const platform=block(10,.36,4.3,0x30485d,.16,.35);platform.position.y=-1.25;platform.receiveShadow=true;root.add(platform);
 const footMat=material(0x1c2c40,.65,.3);for(const x of [-4,4])for(const z of [-1.5,1.5]){const foot=new THREE.Mesh(new THREE.CylinderGeometry(.16,.23,.7,20),footMat);foot.position.set(x,-1.75,z);root.add(foot);}
 const rail=block(9.6,.17,1.6,0xe2c99b,.035);rail.position.set(0,-.935,0);rail.receiveShadow=true;root.add(rail);
 const smoothMap=surfaceTexture(false),roughMap=surfaceTexture(true);ownTextures.push(smoothMap,roughMap);(rail.material as THREE.MeshStandardMaterial).map=smoothMap;
 for(const z of [-.91,.91]){const edge=block(9.65,.17,.12,0x97b5c8,.025,.8);edge.position.set(0,-.91,z);root.add(edge);
  const groove=block(9.5,.018,.026,0x344958,.005,.55);groove.position.set(0,-.814,z);root.add(groove);
  for(const x of [-4.4,-2,0,2,4.4])hardwareBolt(root,x,-.812,z,.8);
 }
 for(const z of [-1.76,1.76]){const channel=block(8.9,.085,.15,0x9aaeb9,.025,.75);channel.position.set(0,-1.045,z);root.add(channel);for(const x of [-4,0,4])hardwareBolt(root,x,-.994,z);}
 for(const x of [-4.65,4.65])for(const z of [-1.82,1.82])hardwareBolt(root,x,-1.057,z,1.3);
 // Metre marks and the 4 m light gate belong to the same fixed track in every condition.
 for(let i=0;i<=70;i++){const x=START+i/10;if(x>4.2)break;const tick=block(.014,.012,i%10===0?.29:.13,0x193e55,.002);tick.position.set(x,-.842,.68);root.add(tick);if(i%10===0)addLabel(String(i/10)+' m',new THREE.Vector3(x,-.72,1.13),'#c9e9f2',.46);}
 for(const [x,label,color] of [[START,'起點',0x63ddbb],[START+4,'4 m 光電門',0xffc678]] as const){
  const gate=new THREE.Group();gate.position.x=x;
  for(const z of [-1.04,1.04]){const pole=block(.09,1.3,.09,color,.02,.4);pole.position.set(0,-.22,z);gate.add(pole);const foot=block(.4,.08,.3,0x152f48,.03,.3);foot.position.set(0,-.85,z);gate.add(foot);}
  const beam=new THREE.Mesh(new THREE.CylinderGeometry(.008,.008,2.05,8),new THREE.MeshBasicMaterial({color,transparent:true,opacity:.55}));beam.rotation.x=Math.PI/2;beam.position.y=-.28;gate.add(beam);gateDetails(gate);root.add(gate);stage.label(label,new THREE.Vector3(x,.68,-1.05));
 }
 const endPlate=block(.2,.82,1.6,0xe6a363,.06);endPlate.position.set(4.47,-.5,0);root.add(endPlate);for(const z of [-.4,.4]){const coil=spring(.45);coil.position.set(3.94,-.52,z);root.add(coil);}addLabel('緩衝區',new THREE.Vector3(4.4,.24,0),'#ffd8a2',1.05);
 const car=new THREE.Group();car.name='force-cart';root.add(car);stage.protectLabelArea(car);
 car.add(trolleyShell());
 const wheelGroups:THREE.Group[]=[];
 for(const x of [-.49,.49])for(const z of [-.52,.52]){const wheel=trolleyWheel();wheel.position.set(x,0,z);car.add(wheel);wheelGroups.push(wheel);}
 for(const x of [-.49,.49]){const axle=new THREE.Mesh(new THREE.CylinderGeometry(.045,.045,1.17,16),material(0xc4d4da,.9,.2));axle.rotation.x=Math.PI/2;axle.position.x=x;car.add(axle);}
 const brake=block(.62,.08,.47,0x9b5745,.02);brake.position.y=-.24;car.add(brake);const padLabel=textSprite('摩擦片','#ffc49d',1.2);padLabel.position.set(0,-.12,.88);car.add(padLabel);labels.push(padLabel);ownTextures.push(padLabel.material.map!);
 const weights:THREE.Mesh[]=[];
 for(let i=0;i<2;i++){const weight=brassMass();weight.position.set(0,.64+i*.305,0);car.add(weight);weights.push(weight);}
 const massLabel=textSprite('1 kg','#ffe4a7',.8);massLabel.position.set(0,1.08,0);car.add(massLabel);labels.push(massLabel);ownTextures.push(massLabel.material.map!);
 // A controlled actuator follows the trolley; its gauge reports the commanded constant force.
 const actuator=new THREE.Group();const housing=block(.46,.27,.36,0xcedce5,.06,.6);actuator.add(housing);const rod=new THREE.Mesh(new THREE.CylinderGeometry(.042,.042,.45,16),material(0x97b5c8,.85,.2));rod.rotation.z=Math.PI/2;rod.position.x=.32;actuator.add(rod);car.add(actuator);actuator.position.set(-1.05,.33,0);
 const gaugeFace=new THREE.Mesh(new THREE.CircleGeometry(.16,32),material(0xf0f7fa,.1));gaugeFace.position.set(-.05,.08,.19);actuator.add(gaugeFace);const gaugeNeedle=block(.014,.12,.015,0xee7963,.003);gaugeNeedle.position.set(-.05,.08,.205);actuator.add(gaugeNeedle);
 const pushArrow=new THREE.ArrowHelper(new THREE.Vector3(1,0,0),new THREE.Vector3(),1,0x68e7bf,.2,.12);const frictionArrow=new THREE.ArrowHelper(new THREE.Vector3(-1,0,0),new THREE.Vector3(),1,0xffb476,.2,.12);const netArrow=new THREE.ArrowHelper(new THREE.Vector3(1,0,0),new THREE.Vector3(),1,0x88caff,.2,.12);root.add(pushArrow,frictionArrow,netArrow);
 const pushLabel=addLabel('推力',new THREE.Vector3(),'#8bf3ce',.85);pushLabel.position.set(0,1,0);
 const frictionLabel=addLabel('摩擦力',new THREE.Vector3(),'#ffc28e',1.05);const netLabel=addLabel('淨力',new THREE.Vector3(),'#9dd7ff',.8);
 const pushCaption=stage.label('推力',pushLabel),frictionCaption=stage.label('摩擦力',frictionLabel),netCaption=stage.label('淨力',netLabel);for(const label of [pushLabel,frictionLabel,netLabel])label.material.visible=false;
 for(const [caption,color] of [[pushCaption,'#8bf3ce'],[frictionCaption,'#ffc28e'],[netCaption,'#9dd7ff']] as const){caption.style.color=color;caption.style.borderColor=color;caption.style.whiteSpace='nowrap';caption.style.maxWidth='none';}
 function settings(force=motor?(data.force==='strong'?8:3):0):ForceSettings{return {force,mass:data.mass==='heavy'?2:1,surface:data.surface};}
 function updateMassStack(){const heavy=data.mass==='heavy';weights[1].visible=heavy;const lowerHandle=weights[0].getObjectByName('mass-folding-handle');if(lowerHandle)lowerHandle.visible=!heavy;}
 function redrawMass(){updateMassStack();const texture=massLabel.material.map!,canvas=texture.image as HTMLCanvasElement,c=canvas.getContext('2d')!;c.clearRect(0,0,512,128);c.fillStyle='#0a1d35e8';c.beginPath();c.roundRect(2,2,508,124,25);c.fill();c.strokeStyle='#ffe4a7';c.lineWidth=3;c.stroke();c.fillStyle='#ffe4a7';c.font='bold 52px sans-serif';c.textAlign='center';c.textBaseline='middle';c.fillText(data.mass==='heavy'?'2 kg':'1 kg',256,66);texture.needsUpdate=true;}
 function visuals(){
  car.position.set(START+cart.x,-.565,0);updateMassStack();for(const wheel of wheelGroups)wheel.rotation.z=-cart.x/.28;
  const railMat=rail.material as THREE.MeshStandardMaterial;const map=data.surface==='rough'?roughMap:smoothMap;if(railMat.map!==map){railMat.map=map;railMat.roughness=data.surface==='rough'?.95:.4;railMat.needsUpdate=true;}
  const applied=settings().force,forces=cartForces(settings(),cart.v);const active=!cart.hitBuffer;if(active){cart.a=forces.acceleration;cart.friction=forces.friction;cart.netForce=forces.netForce;}
  const updateArrow=(arrow:THREE.ArrowHelper,value:number,y:number,z:number,label:THREE.Sprite)=>{arrow.visible=active&&Math.abs(value)>.02;label.visible=arrow.visible;if(!arrow.visible)return;arrow.setDirection(new THREE.Vector3(Math.sign(value),0,0));arrow.position.set(car.position.x,y,z);arrow.setLength(Math.max(.22,Math.abs(value)*.19),.18,.1);label.position.set(car.position.x+Math.sign(value)*Math.max(.45,Math.abs(value)*.1),y+.24,z);};
  updateArrow(pushArrow,applied,.42,.92,pushLabel);updateArrow(frictionArrow,forces.friction,-.2,1.15,frictionLabel);updateArrow(netArrow,forces.netForce,1.25,0,netLabel);setText(pushCaption,`推力 ${applied<0?'←':'→'} ${Math.abs(applied).toFixed(1)} N`);setText(frictionCaption,`${stage.host.clientWidth<550?'摩擦':'摩擦力'} ${forces.friction<0?'←':'→'} ${Math.abs(forces.friction).toFixed(2)} N`);setText(netCaption,`淨力 ${forces.netForce<0?'←':'→'} ${Math.abs(forces.netForce).toFixed(2)} N`);
  gaugeNeedle.rotation.z=-.75+(applied/8)*1.5;rod.scale.y=motor?1:.4;
  stage.host.dataset.forcePosition=cart.x.toFixed(3);stage.host.dataset.forceVelocity=cart.v.toFixed(3);stage.host.dataset.forceAcceleration=cart.a.toFixed(3);stage.host.dataset.forceApplied=String(applied);stage.host.dataset.forceFriction=forces.friction.toFixed(3);stage.host.dataset.forceTrials=String(trials.length);
 }
 function launch(demonstration=false){
  cart=initialCart();data.hand='hold';motor=true;running=true;playing=true;recorded=false;runFair=!demonstration;stage.host.dataset.playing='true';runSettings=settings();startAcceleration=cartForces(runSettings,0).acceleration;releaseVelocity=0;coastingTime=0;lastStatus=startAcceleration===0?'推力被靜摩擦平衡：小車還沒有動。':'從起點出發，光電門正在計時。';visuals();
 }
 function release(){data.hand='release';if(motor&&Math.abs(cart.v)>.2){releaseVelocity=Math.abs(cart.v);coastingTime=0;}motor=false;lastStatus='已放手：仍在滑行；摩擦力會使速度慢慢減少。';visuals();}
 function trialComplete(){
  if(recorded||cart.finishTime===null)return;recorded=true;trials.push({...runSettings,time:cart.finishTime,acceleration:startAcceleration,fair:runFair});earned=updateComparisonProgress(trials,earned);trials=trials.slice(-8);motor=false;lastStatus=runFair?'4 m 量測完成，推桿已自動放手。':'已通過光電門；示範或中途改條件，不列入公平比較。';
 }
 const canvas=stage.renderer?.domElement;
 const raycaster=new THREE.Raycaster(),pointer=new THREE.Vector2(),plane=new THREE.Plane(new THREE.Vector3(0,1,0),.565),intersection=new THREE.Vector3();
 const hit=new THREE.Mesh(new THREE.BoxGeometry(1.9,1.4,1.6),new THREE.MeshBasicMaterial({colorWrite:false,depthWrite:false}));hit.position.y=.25;car.add(hit);
 function pick(event:PointerEvent){if(!canvas)return false;const rect=canvas.getBoundingClientRect();pointer.set((event.clientX-rect.left)/rect.width*2-1,-(event.clientY-rect.top)/rect.height*2+1);raycaster.setFromCamera(pointer,stage.camera);return true;}
 function orbit(value:boolean){const controls=(stage as Stage&{orbit?:{enabled:boolean}}).orbit;if(controls)controls.enabled=value;}
 if(canvas){canvas.addEventListener('pointerdown',event=>{if(!pick(event)||!raycaster.intersectObject(hit).length)return;event.preventDefault();event.stopImmediatePropagation();if(!raycaster.ray.intersectPlane(plane,intersection))return;dragging=event.pointerId;dragOffset=intersection.x-car.position.x;dragLastX=cart.x;dragLastTime=event.timeStamp;dragVelocity=0;motor=false;running=false;runFair=false;demoMode=false;orbit(false);canvas.setPointerCapture(event.pointerId);},{capture:true,signal:abort.signal});
  canvas.addEventListener('pointermove',event=>{if(dragging!==event.pointerId||!pick(event)||!raycaster.ray.intersectPlane(plane,intersection))return;event.preventDefault();const nextX=Math.max(-.8,Math.min(6,intersection.x-dragOffset-START));const elapsed=Math.max(.016,(event.timeStamp-dragLastTime)/1000);dragVelocity=Math.max(-4,Math.min(4,(nextX-dragLastX)/elapsed));dragLastX=nextX;dragLastTime=event.timeStamp;cart={...initialCart(nextX),v:0};lastStatus='手動移動不列入4 m比較；放開後可觀察滑行。';visuals();stage.notify();},{signal:abort.signal});
  const endDrag=(event:PointerEvent)=>{if(dragging!==event.pointerId)return;dragging=null;orbit(true);cart.v=event.timeStamp-dragLastTime>100?0:dragVelocity;motor=false;data.hand='release';playing=true;stage.host.dataset.playing='true';running=Math.abs(cart.v)>.01;releaseVelocity=Math.abs(cart.v);coastingTime=0;runFair=false;recorded=true;lastStatus='已放開小車；要公平測量，請回起點重新觀察。';stage.notify();};
  for(const name of ['pointerup','pointercancel','lostpointercapture'])canvas.addEventListener(name,event=>endDrag(event as PointerEvent),{signal:abort.signal});
 }
 redrawMass();visuals();
 const world:World={
  name:'力與運動實驗室',intro:'拖動小車，或從起點測量4 m。一次只改一個條件，再比較到達時間。',controls,
  steps:[{title:'推力',question:'大力一定比小力更快嗎？',detail:'保持質量和地面相同，分別完成小力、大力的4 m測量。'},{title:'質量',question:'同樣的力，重車會怎樣？',detail:'固定大力與平滑地面，只加一個砝碼，比較兩次到達時間。'},{title:'摩擦',question:'粗糙面讓車怎麼改變？',detail:'固定大力與質量，換地面。車底摩擦片的阻力會改變。'},{title:'放手',question:'放手後，小車會立刻停嗎？',detail:'起步後選放手，觀察速度。留下足夠的距離，讓摩擦力慢慢使車停下。'}],
  modelNote:'水平直線模型；車底摩擦片代表整車等效接觸阻力，假設其正向力為整車重量。使用靜摩擦門檻與定值動摩擦；不是自由滾輪的精確模型，輪軸慣量、空氣阻力忽略。1場景單位=1 m；示意車外形不按真實比例。抵達4 m光電門記錄時間，末端緩衝區另作非彈性停車。',
  sourceLinks:[{label:'NASA：牛頓運動定律',url:'https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/newtons-laws-of-motion/'},{label:'OpenStax：靜摩擦與動摩擦',url:'https://openstax.org/books/university-physics-volume-1/pages/6-2-friction'}],
  missions:[{title:'只改推力',detail:'同一質量、地面，完成小力與大力的4 m測量。'},{title:'只改質量',detail:'同一推力、地面，完成輕車與重車的4 m測量。'},{title:'只改地面',detail:'同一推力、質量，比較平滑與粗糙的4 m測量。'}],
  quiz:{question:'同一車、同一地面，推力加大而超過靜摩擦後，哪個觀察合理？',answers:['加速度變大，較快通過4 m門','質量變成零','摩擦力一定消失','放手瞬間速度一定變零'],correct:0,explanation:'加速度取決於淨力除以質量。放手後仍可能滑行，摩擦力會逐漸使速度減少。'},
  selected(id){return data[id as keyof Choices]||'';},
  choose(id,value){const group=controls.find(c=>c.id===id);if(!group?.values.some(v=>v.id===value))return;demoMode=false;if(id==='hand'){if(value==='release')release();else{data.hand='hold';motor=running;lastStatus='定力推桿已接手；中途改變條件不列公平比較。';runFair=false;}}else{if(running){runFair=false;lastStatus='條件已改變；本次不列公平比較。重新觀察可回起點測量。';}Object.assign(data,{[id]:value});if(id==='mass')redrawMass();}visuals();},
  observe(){demoMode=false;launch();},completed(){return [earned.force,earned.mass,earned.surface];},
  readout(){return `${lastStatus} 位移 ${cart.x.toFixed(2)} m；速度 ${cart.v.toFixed(2)} m/s；加速度 ${cart.a.toFixed(2)} m/s²。${cart.finishTime!==null?' 4 m：'+cart.finishTime.toFixed(2)+'秒。':''}`;},
  status(){return !playing?'已暫停':cart.hitBuffer?'緩衝區停車':motor?(Math.abs(cart.v)<.001?'推力與靜摩擦平衡':'定力推進'):running?'放手滑行':'起點待測';},
  metrics(){const f=cartForces(settings(),cart.v);return [{label:'速度',value:cart.v.toFixed(2),unit:'m/s'},{label:'位移',value:cart.x.toFixed(2),unit:'m'},{label:'加速度',value:cart.a.toFixed(2),unit:'m/s²'},{label:'時間',value:cart.t.toFixed(2),unit:'s'},{label:'推力',value:settings().force.toFixed(1),unit:'N'},{label:'摩擦力',value:f.friction.toFixed(2),unit:'N'}];},
  records(){return trials.map((t,i)=>({label:`${i+1} · ${t.force} N／${t.mass} kg／${t.surface==='smooth'?'平滑':'粗糙'}${t.fair?'':'（不列比較）'}`,value:`4 m：${t.time.toFixed(2)} s；起步加速度 ${t.acceleration.toFixed(2)} m/s²`}));},
  challenge(){return step===3?{title:'放手仍滑行',target:'讓車在放手後仍前進，再靠摩擦停下，不碰緩衝區。',hint:'選粗糙面、大力；剛起步就放手，留出停車距離。'}:{title:'一次只改一個條件',target:step===1?'固定推力、地面，比較兩種質量。':step===2?'固定推力、質量，比較兩種地面。':'固定質量、地面，比較兩種推力。',hint:step===1?'先選大力、平滑地面；1 kg與2 kg各測一次。':step===2?'先選大力、1 kg；平滑與粗糙各測一次。':'先選平滑、1 kg；小力、大力各測一次，不改其他條件。'};},
  checkChallenge(){const passed=step===3?coastCompleted:earned[step===1?'mass':step===2?'surface':'force'];return {passed,message:passed?(step===3?'完成！放手後仍滑行，摩擦使車慢慢停下。':'完成！你只改一個條件，用兩次有效量測比較了加速度與時間。'):(step===3?'還沒完成。起步後放手，觀察滑行並留出摩擦停車距離。':'還需要兩次只改一個條件的有效4 m量測；未起動或中途改條件不算。')};},
  demo(){Object.assign(data,{force:'weak',mass:'light',surface:'smooth',hand:'hold'});redrawMass();demoMode=true;demoLeg=0;demoWait=0;launch(true);},
  setPlaying(value){playing=value;stage.host.dataset.playing=String(value);if(value&&motor&&!cart.hitBuffer)running=true;},setStep(index){step=Math.max(0,Math.min(3,index));},
  tick(dt){if(!playing||dragging!==null||dt<=0){visuals();return;}
   if(demoMode&&demoWait>0){demoWait-=dt;if(demoWait<=0){data.force='strong';demoLeg=1;launch(true);}return;}
   if(!running)return;const wasFinished=cart.finishTime!==null;cart=advanceCart(cart,settings(),dt);trialComplete();
   if(releaseVelocity>.2&&!motor){if(Math.abs(cart.v)>.01)coastingTime+=dt;else if(coastingTime>.15&&!cart.hitBuffer){coastCompleted=true;lastStatus='放手後仍前進，現在因摩擦停下；沒有碰到緩衝區。';}}
   if(cart.hitBuffer){motor=false;running=false;lastStatus='已進入緩衝區，推桿關閉；這次停車含緩衝力。';}
   else if(!motor&&Math.abs(cart.v)<.001)running=false;
   if(demoMode&&!wasFinished&&cart.finishTime!==null){if(demoLeg===0){motor=false;running=false;demoWait=.8;}else{demoMode=false;playing=false;running=false;lastStatus='示範完成：同車同地面，大力較快。示範紀錄不列任務，請親手量測。';}}
   visuals();if(!running&&!demoMode){playing=false;stage.host.dataset.playing='false';stage.notify();}
  },
  reset(){Object.assign(data,{force:'weak',mass:'light',surface:'smooth',hand:'hold'});cart=initialCart();motor=false;running=false;playing=true;demoMode=false;recorded=false;lastStatus='已回到起點；先預測，再觀察。';redrawMass();visuals();},
  snapshot(){return {version:2,data:{...data},cart:{...cart},trials:trials.map(t=>({...t})),earned:{...earned},running,motor,runFair,runSettings:{...runSettings},startAcceleration,recorded,releaseVelocity,coastingTime,coastCompleted};},
  restore(value){if(value.version!==2)return;const stored=value.data as Record<string,unknown>|undefined;if(stored)for(const control of controls)if(control.values.some(v=>v.id===stored[control.id]))Object.assign(data,{[control.id]:stored[control.id]});const saved=value.cart as Partial<CartState>|undefined;if(saved&&typeof saved.x==='number'&&Number.isFinite(saved.x)){cart={...initialCart(Math.max(-1,Math.min(6.7,saved.x))),v:typeof saved.v==='number'&&Number.isFinite(saved.v)?Math.max(-50,Math.min(50,saved.v)):0,t:typeof saved.t==='number'&&Number.isFinite(saved.t)?Math.max(0,Math.min(600,saved.t)):0,finishTime:typeof saved.finishTime==='number'?saved.finishTime:null};}if(Array.isArray(value.trials))trials=value.trials.filter((t):t is ForceTrial=>t&&[3,8].includes(t.force)&&[1,2].includes(t.mass)&&['smooth','rough'].includes(t.surface)&&Number.isFinite(t.time)&&t.time>0&&Number.isFinite(t.acceleration)&&typeof t.fair==='boolean').slice(-8);const savedEarned=value.earned as Record<string,unknown>|undefined;earned=updateComparisonProgress(trials,{force:savedEarned?.force===true,mass:savedEarned?.mass===true,surface:savedEarned?.surface===true});coastCompleted=value.coastCompleted===true;motor=value.motor===true;running=Boolean(value.running);playing=false;stage.host.dataset.playing='false';runFair=value.runFair===true;const savedRun=value.runSettings as Partial<ForceSettings>|undefined;if(savedRun&&[3,8].includes(savedRun.force||0)&&[1,2].includes(savedRun.mass||0)&&['smooth','rough'].includes(savedRun.surface||''))runSettings=savedRun as ForceSettings;else runSettings=settings();startAcceleration=cartForces(runSettings,0).acceleration;recorded=value.recorded===true||cart.finishTime!==null;releaseVelocity=typeof value.releaseVelocity==='number'&&Number.isFinite(value.releaseVelocity)?Math.max(0,value.releaseVelocity):0;coastingTime=typeof value.coastingTime==='number'&&Number.isFinite(value.coastingTime)?Math.max(0,value.coastingTime):0;lastStatus='已還原本機量測；目前暫停。可繼續或重新觀察。';redrawMass();visuals();},
  dispose(){abort.abort();orbit(true);labels.forEach(label=>label.material.dispose());ownTextures.forEach(texture=>texture.dispose());},
 };
 return world;
}
