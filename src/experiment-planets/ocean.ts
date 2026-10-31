import * as T from 'three';
import {Stage,type World} from './core';
import {OCEAN_SAMPLES,OCEAN_FACTORS,shapeFractionAt,oceanForces,advanceOceanBody,oceanRestCondition,judgeOceanChallenge,type OceanSample,type OceanTrial} from './ocean-model';

const SURFACE=1.15,FLOOR=-2.05;
const clamp=(x:number,a:number,b:number)=>Math.max(a,Math.min(b,x));
function material(color:number,roughness=.55,metalness=.03){return new T.MeshStandardMaterial({color,roughness,metalness});}
function cube(x:number,y:number,z:number,m:T.Material){return new T.Mesh(new T.BoxGeometry(x,y,z),m);}
function ball(radius:number,m:T.Material){return new T.Mesh(new T.SphereGeometry(radius,40,28),m);}
function texture(kind:'wood'|'stone'|'ball'){
 const canvas=document.createElement('canvas');canvas.width=canvas.height=256;const ctx=canvas.getContext('2d')!;
 if(kind==='ball'){
  const colors=['#f57d65','#fff2d4','#61c9d2','#fff2d4','#f7cd57','#fff2d4'];
  colors.forEach((c,i)=>{ctx.fillStyle=c;ctx.fillRect(i*256/6,0,256/6+1,256);});
 }else{
  const image=ctx.createImageData(256,256);for(let y=0;y<256;y++)for(let x=0;x<256;x++){
   const hash=Math.sin(x*12.9898+y*78.233)*43758.5453,noise=(hash-Math.floor(hash))-.5;
   const grain=kind==='wood'?Math.sin(y*.23+Math.sin(x*.035)*2)*12+Math.sin(y*.73+x*.025)*4:noise*27+Math.sin(x*.4+y*.5)*4;
   const base=kind==='wood'?[187,124,62]:[127,139,145];const i=(y*256+x)*4;
   for(let c=0;c<3;c++)image.data[i+c]=clamp(base[c]+grain+noise*7,0,255);image.data[i+3]=255;
  }ctx.putImageData(image,0,0);
 }
 const tex=new T.CanvasTexture(canvas);tex.colorSpace=T.SRGBColorSpace;tex.wrapS=tex.wrapT=T.RepeatWrapping;tex.anisotropy=4;return tex;
}
// Each rounded section is area-normalized to the former rectangular section.
// Thus the tapered hull's exact submerged-volume polynomial stays unchanged.
function hull(m:T.Material){
 const group=new T.Group(),segments=64,levels=16,areaRatio=.92703733865,normalizer=1/Math.sqrt(areaRatio);
 function point(t:number,angle:number,inset=0){const a=(.825+.175*t-inset)*normalizer,b=(.325+.25*t-inset)*normalizer;return new T.Vector3(a*Math.sign(Math.cos(angle))*Math.sqrt(Math.abs(Math.cos(angle))),-.35+.7*t,b*Math.sign(Math.sin(angle))*Math.sqrt(Math.abs(Math.sin(angle))));}
 function skin(inner=false){const positions:number[]=[],uv:number[]=[],indices:number[]=[];for(let j=0;j<=levels;j++){const t=inner?.245+.755*j/levels:j/levels;for(let i=0;i<=segments;i++){const p=point(t,i/segments*Math.PI*2,inner?.105:0);positions.push(p.x,p.y,p.z);uv.push(i/segments*3,j/levels);}}for(let j=0;j<levels;j++)for(let i=0;i<segments;i++){const k=j*(segments+1)+i;indices.push(k,k+1,k+segments+2,k,k+segments+2,k+segments+1);}const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(positions,3));g.setAttribute('uv',new T.Float32BufferAttribute(uv,2));g.setIndex(indices);g.computeVertexNormals();const mesh=new T.Mesh(g,m);mesh.material.side=T.DoubleSide;return mesh;}
 group.add(skin(),skin(true));
 for(const [t,inset] of [[0,0],[.245,.105]]){const outline=new T.Shape(Array.from({length:segments},(_,i)=>{const p=point(t,i/segments*Math.PI*2,inset);return new T.Vector2(p.x,p.z);}));const floor=new T.Mesh(new T.ShapeGeometry(outline),m);floor.rotation.x=Math.PI/2;floor.position.y=-.35+.7*t;group.add(floor);}

 for(const [t,color,r] of [[1,0x263f54,.035],[.52,0xe7dbc1,.014]] as const){const points=Array.from({length:segments},(_,i)=>point(t,i/segments*Math.PI*2));const rim=new T.Mesh(new T.TubeGeometry(new T.CatmullRomCurve3(points,true),128,r,8,true),material(color,.45,.12));group.add(rim);}
 for(const x of [-.4,.35]){const bench=cube(.20,.055,.82,material(0xd9ab6e,.62));bench.position.set(x,.18,0);group.add(bench);}
 return group;
}
function submarine():T.Group{
 const group=new T.Group(),paint=new T.MeshPhysicalMaterial({color:0xe6ab36,roughness:.3,metalness:.32,clearcoat:.6,clearcoatRoughness:.22}),trim=material(0x354d60,.27,.65);
 // The pressure hull remains the calibrated horizontal capsule: r=.35, cylinder=.95.
 const body=new T.Mesh(new T.CapsuleGeometry(.35,.95,20,64),paint);body.rotation.z=Math.PI/2;group.add(body);
 const glass=new T.MeshPhysicalMaterial({color:0x2689a9,roughness:.08,metalness:.35,clearcoat:1});
 for(const x of [-.29,.04,.37]){const bezel=new T.Mesh(new T.TorusGeometry(.105,.021,12,40),trim);bezel.position.set(x,.035,.339);group.add(bezel);const window=new T.Mesh(new T.SphereGeometry(.095,32,20),glass);window.scale.z=.25;window.position.set(x,.035,.349);group.add(window);for(let i=0;i<6;i++){const bolt=ball(.008,material(0xd0dde0,.22,.7));bolt.position.set(x+.111*Math.cos(i*Math.PI/3),.035+.111*Math.sin(i*Math.PI/3),.359);group.add(bolt);}}
 const sail=new T.Mesh(new T.CapsuleGeometry(.115,.16,12,24),paint);sail.scale.z=1.25;sail.position.set(-.17,.40,0);group.add(sail);
 const mast=new T.Mesh(new T.CylinderGeometry(.022,.022,.21,16),trim);mast.position.set(-.16,.65,0);group.add(mast);const eye=new T.Mesh(new T.CapsuleGeometry(.029,.10,8,16),trim);eye.rotation.z=Math.PI/2;eye.position.set(-.11,.76,0);group.add(eye);
 for(const x of [-.43,.43]){const seam=new T.Mesh(new T.TorusGeometry(.351,.006,8,64),trim);seam.rotation.y=Math.PI/2;seam.position.x=x;group.add(seam);}
 // Thin control surfaces and ballast vents are decorative; displacement uses pressure hull only.
 for(const angle of [0,Math.PI/2,Math.PI,Math.PI*1.5]){const finShape=new T.Shape();finShape.moveTo(-.48,.18);finShape.lineTo(-.73,.315);finShape.quadraticCurveTo(-.80,.33,-.84,.29);finShape.lineTo(-.83,.08);finShape.closePath();const fin=new T.Mesh(new T.ExtrudeGeometry(finShape,{depth:.025,bevelEnabled:true,bevelSize:.012,bevelThickness:.012,bevelSegments:2,steps:1}),trim);fin.rotation.x=angle;fin.position.z=-.012;group.add(fin);}
 const shroud=new T.Mesh(new T.TorusGeometry(.235,.025,12,48),trim);shroud.rotation.y=Math.PI/2;shroud.position.x=-.94;group.add(shroud);
 const propeller=new T.Group();propeller.name='ocean-propeller';for(let i=0;i<4;i++){const blade=new T.Mesh(new T.SphereGeometry(1,16,12),material(0xb79653,.3,.65));blade.scale.set(.018,.16,.048);blade.position.y=.09;const pivot=new T.Group();pivot.rotation.x=i*Math.PI/2;pivot.add(blade);propeller.add(pivot);}propeller.position.x=-.94;group.add(propeller);
 for(let i=0;i<5;i++){const vent=cube(.065,.014,.008,trim);vent.position.set(-.29+i*.115,-.205,.28);group.add(vent);}
 return group;
}
function rock(radius:number,m:T.MeshStandardMaterial){
 // Horizontal-section area is normalized analytically, retaining ellipsoid cap volumes.
 const geometry=new T.SphereGeometry(radius,48,24),p=geometry.attributes.position;
 for(let i=0;i<p.count;i++){const x=p.getX(i),y=p.getY(i),z=p.getZ(i),angle=Math.atan2(z,x),a=.11*Math.sin((y/radius+1)*1.7),b=.065;const f=(1+a*Math.sin(3*angle)+b*Math.cos(5*angle))/Math.sqrt(1+(a*a+b*b)/2);p.setXYZ(i,x*f,y,z*f);}
 geometry.computeVertexNormals();m.flatShading=true;return new T.Mesh(geometry,m);
}

export function createOcean(stage:Stage):World{
 const root=stage.worldRoot;const ownTextures:T.Texture[]=[];const abort=new AbortController();
 // A fixed teaching work envelope keeps above-water specimens visible after restoring a submerged trial.
 stage.setWorkingBounds(new T.Box3(new T.Vector3(-4.05,-2.55,-2.25),new T.Vector3(4.05,3.2,2.25)));
 const state:Record<string,string>={object:'wood',water:'fresh',mass:'normal',volume:'normal'};
 const seen=new Set<string>();const trials:OceanTrial[]=[];let trialRecorded=false,lastStep=-1,stableTime=0;
 let time=0,verticalSpeed=0,ready=false,playing=true,releaseTime=0,dragging:number|null=null;
 const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
 const standardCamera=new T.Vector3(6.5,4.1,9.7);stage.camera.position.copy(standardCamera);stage.camera.lookAt(0,.2,0);
 stage.scene.background=new T.Color(0x071a2c);stage.scene.fog=new T.Fog(0x071a2c,15,35);
 if(stage.renderer){stage.renderer.toneMappingExposure=1.12;stage.renderer.shadowMap.enabled=true;stage.renderer.shadowMap.type=T.PCFSoftShadowMap;}
 stage.scene.traverse(o=>{if(o instanceof T.HemisphereLight)o.intensity=1.5;if(o instanceof T.DirectionalLight){o.intensity=2;o.castShadow=true;o.shadow.mapSize.set(1024,1024);}});
 const rimMat=material(0x718b9c,.23,.78),baseMat=material(0x183347,.32,.38);
 const base=cube(8.1,.3,4.45,baseMat);base.position.y=FLOOR-.24;base.receiveShadow=true;root.add(base);
 const sand=cube(7.35,.13,3.6,material(0xbcb295,.9));sand.position.y=FLOOR-.085;sand.receiveShadow=true;root.add(sand);
 const glass=new T.MeshPhysicalMaterial({color:0xb1ebf2,roughness:.08,metalness:.12,transparent:true,opacity:.085,depthWrite:false,side:T.DoubleSide});
 for(const x of [-3.7,3.7]){const wall=cube(.045,3.55,3.7,glass);wall.position.set(x,-.33,0);root.add(wall);}
 for(const z of [-1.85,1.85]){const wall=cube(7.4,3.55,.035,glass);wall.position.set(0,-.33,z);root.add(wall);}
 for(const x of [-3.72,3.72])for(const z of [-1.87,1.87]){const post=cube(.065,3.62,.065,rimMat);post.position.set(x,-.3,z);root.add(post);}
 for(const z of [-1.87,1.87]){const rail=cube(7.5,.07,.07,rimMat);rail.position.set(0,1.51,z);root.add(rail);}
 for(const x of [-3.72,3.72]){const rail=cube(.07,.07,3.8,rimMat);rail.position.set(x,1.51,0);root.add(rail);}
 const waterBody=cube(7.33,SURFACE-FLOOR,3.6,new T.MeshBasicMaterial({color:0x168aa5,transparent:true,opacity:.055,depthWrite:false,side:T.BackSide}));waterBody.position.y=(SURFACE+FLOOR)/2;root.add(waterBody);
 const waterMaterial=new T.ShaderMaterial({transparent:true,depthWrite:false,side:T.DoubleSide,uniforms:{time:{value:0},sea:{value:0}},vertexShader:`uniform float time;varying vec3 vWorld;varying vec3 vNormal;void main(){vec3 p=position;p.z+=.014*sin(p.x*3.1+time*.9)+.008*cos(p.y*4.3-time*.7);vec4 w=modelMatrix*vec4(p,1.);vWorld=w.xyz;vNormal=normalize(mat3(modelMatrix)*normal);gl_Position=projectionMatrix*viewMatrix*w;}`,fragmentShader:`uniform float time;uniform float sea;varying vec3 vWorld;varying vec3 vNormal;void main(){vec3 eye=normalize(cameraPosition-vWorld);float f=pow(1.-abs(dot(eye,vNormal)),3.);float ripple=sin(vWorld.x*5.+sin(vWorld.z*3.+time*.8))*sin(vWorld.z*6.-time*.6);vec3 base=mix(vec3(.12,.55,.65),vec3(.07,.43,.58),sea);vec3 col=base+vec3(.22,.35,.34)*f+max(ripple,0.)*.025;gl_FragColor=vec4(col,.17+f*.26);}`});
 const surface=new T.Mesh(new T.PlaneGeometry(7.33,3.6,64,32),waterMaterial);surface.rotation.x=-Math.PI/2;surface.position.y=SURFACE;surface.renderOrder=3;root.add(surface);
 // A continuous waterline marks the fixed ideal-water surface, not a measurement ruler.
 const waterLine=cube(7.32,.025,.035,material(0x96f5ee,.25));waterLine.position.set(0,SURFACE,1.81);root.add(waterLine);
 const specimen=new T.Group();specimen.position.set(-.3,2.1,.05);specimen.name='ocean-specimen';root.add(specimen);
 const woodTexture=texture('wood'),stoneTexture=texture('stone'),ballTexture=texture('ball');ownTextures.push(woodTexture,stoneTexture,ballTexture);
 let specimenVisual=new T.Group();specimen.add(specimenVisual);let height=.84;
 const arrowUp=new T.ArrowHelper(new T.Vector3(0,1,0),new T.Vector3(2.55,-.1,1.1),.4,0x6de9ec,.16,.10);
 const arrowDown=new T.ArrowHelper(new T.Vector3(0,-1,0),new T.Vector3(3.05,-.1,1.1),.4,0xffa887,.16,.10);root.add(arrowUp,arrowDown);
 const upShaft=new T.Mesh(new T.CylinderGeometry(.022,.022,1,12),new T.MeshBasicMaterial({color:0x6de9ec})),downShaft=new T.Mesh(new T.CylinderGeometry(.022,.022,1,12),new T.MeshBasicMaterial({color:0xffa887}));root.add(upShaft,downShaft);

 const vessel=submarine();vessel.scale.setScalar(.44);vessel.position.set(-2.55,-1.43,.6);root.add(vessel);vessel.visible=false;
 const navigationLabel=stage.label('導航小艇',vessel);navigationLabel.hidden=true;
 const buoyancyAnchor=new T.Vector3(2.55,.65,1.1);const forceCaption=stage.label('浮力↑・重力↓',buoyancyAnchor);forceCaption.style.maxWidth='none';forceCaption.style.whiteSpace='nowrap';
 const floatButtons=document.createElement('button');floatButtons.type='button';floatButtons.className='ep-ocean-handle';floatButtons.setAttribute('aria-label','拖動寶物；方向鍵移動，空白鍵放開');floatButtons.setAttribute('role','slider');floatButtons.setAttribute('aria-valuemin','0');floatButtons.setAttribute('aria-valuemax','100');floatButtons.tabIndex=0;
 Object.assign(floatButtons.style,{position:'absolute',width:'48px',height:'48px',minWidth:'48px',minHeight:'48px',border:'1px dashed #f4e2a9aa',borderRadius:'50%',background:'transparent',padding:'0',zIndex:'4',touchAction:'none',cursor:'grab'});stage.host.append(floatButtons);
 // Explicit close inspection changes the camera only on a deliberate press, never while dragging.
 const closeView=document.createElement('button');closeView.type='button';closeView.className='ep-ocean-near';closeView.textContent='近看';closeView.setAttribute('aria-label','近看主實驗物件');closeView.setAttribute('aria-pressed','false');Object.assign(closeView.style,{minWidth:'44px',minHeight:'44px',position:'absolute',right:'10px',bottom:'10px',zIndex:'5',padding:'0 10px'});stage.host.append(closeView);
 closeView.addEventListener('click',()=>{const active=closeView.getAttribute('aria-pressed')!=='true';closeView.setAttribute('aria-pressed',String(active));closeView.textContent=active?'全景':'近看';if(!active){stage.setView('front');return;}specimen.updateMatrixWorld(true);const box=new T.Box3().setFromObject(specimenVisual),size=box.getSize(new T.Vector3()),h=stage.host.clientHeight,tan=Math.tan(T.MathUtils.degToRad(stage.camera.fov/2)),target=new T.Vector3(specimen.position.x,clamp(specimen.position.y,-.2,.4),specimen.position.z);const desired=Math.min(190,stage.host.clientWidth*.55),distance=Math.max(3.4,size.x*h/(2*tan*desired),(box.max.y-target.y)*1.1/tan,(target.y-FLOOR)*1.06/tan);const direction=new T.Vector3(.20,.17,1).normalize();stage.orbit.target.copy(target);stage.camera.position.copy(target).addScaledVector(direction,distance);stage.orbit.update();stage.renderOnce();},{signal:abort.signal});

 const configs=[
  {id:'object',title:'選一個寶物',values:(Object.entries(OCEAN_SAMPLES) as [OceanSample,typeof OCEAN_SAMPLES[OceanSample]][]).map(([id,o])=>({id,label:o.label}))},
  {id:'water',title:'水的種類',values:[{id:'fresh',label:'淡水'},{id:'sea',label:'海水'}]},
  {id:'mass',title:'重量',values:[{id:'light',label:'減輕'},{id:'normal',label:'原來'},{id:'heavy',label:'加重'}]},
  {id:'volume',title:'體積',values:[{id:'light',label:'縮小'},{id:'normal',label:'原來'},{id:'heavy',label:'放大'}]},
 ];
 function parameters(){const sample=OCEAN_SAMPLES[state.object as OceanSample];return {sample,mass:sample.mass*OCEAN_FACTORS[state.mass],volume:sample.volume*OCEAN_FACTORS[state.volume],fluid:state.water==='sea'?1.025:1};}
 function forces(){const p=parameters();const fraction=shapeFractionAt(p.sample.shape,specimen.position.y,height,SURFACE);return {...oceanForces(p.mass,p.volume,p.fluid,fraction),fraction};}
 function marker(){return [state.object,state.water,state.mass,state.volume].join('|');}
 function trial():OceanTrial{const f=forces(),p=parameters();return {elapsedSeconds:releaseTime,massG:p.mass,volumeCm3:p.volume,fluidDensity:p.fluid,object:state.object as OceanSample,water:state.water,mass:state.mass,volume:state.volume,fraction:f.fraction,weightN:f.weightN,buoyantN:f.buoyantN,tendency:f.tendency};}
 function updateDiagnostic(){const f=forces();stage.host.dataset.oceanFraction=f.fraction.toFixed(5);stage.host.dataset.oceanBuoyant=f.buoyantN.toFixed(5);stage.host.dataset.oceanWeight=f.weightN.toFixed(5);stage.host.dataset.oceanHeight=specimen.position.y.toFixed(4);stage.host.dataset.oceanState=f.tendency;stage.host.dataset.oceanTrials=String(trials.length);stage.host.dataset.oceanStable=String(stableTime>.5);stage.host.dataset.oceanRecordSeconds=trials.length?(trials[trials.length-1].elapsedSeconds??0).toFixed(3):'';
  // Both arrows share one auto-scaled linear force scale per observation; zero has no arrow.
  const forceScale=1.4/Math.max(f.buoyantN,f.weightN,.001),upLength=Math.max(.025,f.buoyantN*forceScale),downLength=f.weightN*forceScale;arrowUp.visible=f.buoyantN>.002;arrowDown.visible=true;arrowUp.setLength(upLength,Math.min(.18,upLength*.35),Math.min(.1,upLength*.25));arrowDown.setLength(downLength,Math.min(.18,downLength*.35),Math.min(.1,downLength*.25));const forceOrigin=specimen.position.clone();forceOrigin.z+=.7;arrowUp.position.copy(forceOrigin);arrowDown.position.copy(forceOrigin);upShaft.visible=arrowUp.visible;upShaft.scale.y=upLength;upShaft.position.copy(forceOrigin).add(new T.Vector3(0,upLength/2,0));downShaft.scale.y=downLength;downShaft.position.copy(forceOrigin).add(new T.Vector3(0,-downLength/2,0));buoyancyAnchor.copy(forceOrigin).add(new T.Vector3(.8,.3,0));
  const navigating=document.body.dataset.navigation==='true';vessel.visible=navigating;navigationLabel.hidden=!navigating;
  const p=specimen.position.clone().project(stage.camera),w=stage.host.clientWidth,h=stage.host.clientHeight;floatButtons.style.left=`${clamp((p.x*.5+.5)*w-24,4,w-52)}px`;floatButtons.style.top=`${clamp((-p.y*.5+.5)*h-24,4,h-52)}px`;floatButtons.setAttribute('aria-valuenow',String(Math.round(f.fraction*100)));floatButtons.setAttribute('aria-valuetext',`浸沒 ${Math.round(f.fraction*100)}%，浮力 ${f.buoyantN.toFixed(2)} 牛頓`);
 }
 function release(){ready=true;releaseTime=0;trialRecorded=false;stableTime=0;verticalSpeed=0;seen.add(marker());playing=true;updateDiagnostic();stage.notify();}
 function clearVisual(){specimen.remove(specimenVisual);specimenVisual.traverse(o=>{if(o instanceof T.Mesh){o.geometry.dispose();const ms=Array.isArray(o.material)?o.material:[o.material];ms.forEach(m=>m.dispose());}});specimenVisual=new T.Group();specimen.add(specimenVisual);}
 function refresh(resetPosition=false){const p=parameters();clearVisual();let scale=Math.cbrt(p.volume/100);let mesh:T.Object3D;
  if(state.object==='wood'){const wood=material(0xffffff,.78);wood.map=woodTexture;mesh=cube(.95,.84,.6/(.95*.84),wood);height=.84*scale;}
  else if(state.object==='boat'){const wood=material(0xffffff,.62);wood.map=woodTexture;mesh=hull(wood);scale*=Math.cbrt(.6/(.7*(1.65*.65+(1.65*.5+.35*.65)/2+.35*.5/3)));height=.7*scale;}
  else if(state.object==='submarine'){mesh=submarine();scale*=Math.cbrt(.6/(Math.PI*.35*.35*.95+4/3*Math.PI*.35**3));height=.7*scale;}
  else {const m=material(state.object==='stone'?0xffffff:state.object==='ball'?0xffffff:0xa3a1e1,state.object==='stone'?.96:.28,state.object==='neutral'?.18:.02);m.map=state.object==='stone'?stoneTexture:state.object==='ball'?ballTexture:null;const radius=Math.cbrt(.6*3/(4*Math.PI));mesh=state.object==='stone'?rock(radius,m):ball(radius,m);height=2*radius*scale;if(state.object==='stone'){mesh.scale.set(1.13,.88,1/(1.13*.88));height*=.88;}if(state.object==='neutral'){for(const a of [0,Math.PI/2]){const band=new T.Mesh(new T.TorusGeometry(Math.cbrt(.6*3/(4*Math.PI))+.002,.012,10,48),material(0xd8f8ff,.22,.3));band.rotation.x=a;mesh.add(band);}}}
  mesh.scale.multiplyScalar(scale);mesh.traverse(o=>{if(o instanceof T.Mesh){o.castShadow=true;o.receiveShadow=true;}});specimenVisual.add(mesh);
  waterMaterial.uniforms.sea.value=state.water==='sea'?1:0;
  stableTime=0;if(resetPosition||!ready){specimen.position.set(-.3,2.1,.05);verticalSpeed=0;ready=false;}else{specimen.position.y=Math.max(FLOOR+height/2,specimen.position.y);releaseTime=0;trialRecorded=false;stableTime=0;}
  updateDiagnostic();
 }
 const ray=new T.Raycaster(),pointer=new T.Vector2(),dragPlane=new T.Plane(),intersection=new T.Vector3();let draggedOffset=new T.Vector3();
 const orbit=()=> (stage as Stage&{orbit?:{enabled:boolean}}).orbit;
 function startDrag(e:PointerEvent){const canvas=stage.renderer?.domElement;if(!canvas)return;const rect=canvas.getBoundingClientRect();pointer.set((e.clientX-rect.left)/rect.width*2-1,-(e.clientY-rect.top)/rect.height*2+1);ray.setFromCamera(pointer,stage.camera);
  if(e.currentTarget!==floatButtons&&!ray.intersectObject(specimen,true).length)return;
  e.preventDefault();e.stopImmediatePropagation();dragging=e.pointerId;(e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);const direction=stage.camera.getWorldDirection(new T.Vector3());direction.y=0;direction.normalize();dragPlane.setFromNormalAndCoplanarPoint(direction,specimen.position);ray.ray.intersectPlane(dragPlane,intersection);draggedOffset.copy(specimen.position).sub(intersection);if(orbit())orbit()!.enabled=false;floatButtons.style.cursor='grabbing';
 }
 function drag(e:PointerEvent){if(dragging!==e.pointerId)return;e.preventDefault();e.stopImmediatePropagation();const rect=stage.renderer!.domElement.getBoundingClientRect();pointer.set((e.clientX-rect.left)/rect.width*2-1,-(e.clientY-rect.top)/rect.height*2+1);ray.setFromCamera(pointer,stage.camera);if(ray.ray.intersectPlane(dragPlane,intersection)){intersection.add(draggedOffset);specimen.position.set(clamp(intersection.x,-2.65,1.65),clamp(intersection.y,FLOOR+height/2,2.5),clamp(intersection.z,-1,1));verticalSpeed=0;updateDiagnostic();}}
 function endDrag(e:PointerEvent){if(dragging!==e.pointerId)return;e.preventDefault();e.stopImmediatePropagation();dragging=null;if(orbit())orbit()!.enabled=true;floatButtons.style.cursor='grab';release();}
 for(const element of [stage.renderer?.domElement,floatButtons])if(element){element.addEventListener('pointerdown',startDrag as EventListener,{capture:true,signal:abort.signal});element.addEventListener('pointermove',drag as EventListener,{capture:true,signal:abort.signal});for(const event of ['pointerup','pointercancel','lostpointercapture'])element.addEventListener(event,endDrag as EventListener,{capture:true,signal:abort.signal});}
 floatButtons.addEventListener('keydown',e=>{if(!['ArrowLeft','ArrowRight','ArrowUp','ArrowDown',' ','Enter'].includes(e.key))return;e.preventDefault();e.stopPropagation();if(e.key===' '||e.key==='Enter'){release();return;}ready=false;specimen.position.x=clamp(specimen.position.x+(e.key==='ArrowRight'?.22:e.key==='ArrowLeft'?-.22:0),-2.65,1.65);specimen.position.y=clamp(specimen.position.y+(e.key==='ArrowUp'?.22:e.key==='ArrowDown'?-.22:0),FLOOR+height/2,2.5);verticalSpeed=0;updateDiagnostic();},{signal:abort.signal});
 refresh(true);
 const world:World={
  name:'海洋浮力實驗星球',intro:'拖寶物放進透明水槽。看水線、排開的水與兩支力箭頭一起變化。',controls:configs,
  steps:[{title:'猜浮沉',question:'木塊與石頭，誰會浮？',detail:'先選寶物預測，再放入水中。青色向上是浮力，橘色向下是重力。'},{title:'改體積',question:'重量不變，體積變大呢？',detail:'選密度球，固定淡水和原來重量，只改體積，留下沉與浮的比較。'},{title:'換水',question:'同一個物件，換海水呢？',detail:'固定寶物、重量與體積，只換淡水和海水，比較浸沒比例。'},{title:'壓載艙',question:'潛水艇怎麼控制浮沉？',detail:'固定外殼體積，只改重量。原來重量接近中性浮力，加重會下沉。'}],
  missions:[{title:'浮與沉',detail:'把木塊和石頭各放進水中一次'},{title:'體積的秘密',detail:'密度球選淡水與原來重量，試過縮小和放大'},{title:'海水不一樣',detail:'密度球原來大小，分別測淡水與海水'},{title:'潛水艇壓載',detail:'小潛水艇試過減輕與加重'},{title:'中性浮力',detail:'密度球在淡水中，重量與體積選原來'}],
  modelNote:'理想靜水模型。球／等截面積岩石、盒形、水平膠囊與等截面積圓角梯形船殼分別計算排水體積；主外形用同一體積比例，附屬零件不計排水。青色水線是固定水面，不是刻度；導航小艇不參與浮力實驗。船艙視為密封，不模擬進水、波浪或流體渦流。兩支力箭頭同次等比例、自動縮尺，跨次比較請看牛頓讀數。水底另有支持力，沉底時不能把浮力當作零。',
  sourceLinks:[{label:'OpenStax：浮力與阿基米德原理',url:'https://openstax.org/books/university-physics-volume-1/pages/14-4-archimedes-principle-and-buoyancy'}],
  quiz:{question:'同一顆密度球、同樣重量，體積變大後可能浮起，因為？',answers:['只要顏色變亮就會浮','排開更多水，能得到足夠浮力','下沉時完全沒有浮力','重量自己消失了'],correct:1,explanation:'浮力等於排開的水的重量。只改體積會改變整體密度，浮起穩定時浮力與重力相等；沉底還有水底的支持力。'},
  selected(id){return state[id]||'';},choose(id,value){if(!configs.some(c=>c.id===id&&c.values.some(v=>v.id===value)))return;state[id]=value;refresh(id==='object');},observe(){release();},
  completed(){return [[...seen].some(k=>k.startsWith('wood|'))&&[...seen].some(k=>k.startsWith('stone|')),seen.has('neutral|fresh|normal|light')&&seen.has('neutral|fresh|normal|heavy'),seen.has('neutral|fresh|normal|normal')&&seen.has('neutral|sea|normal|normal'),[...seen].some(k=>k.startsWith('submarine|')&&k.includes('|light|'))&&[...seen].some(k=>k.startsWith('submarine|')&&k.includes('|heavy|')),seen.has('neutral|fresh|normal|normal')];},
  metrics(){const f=forces();return [{label:'浮力',value:f.buoyantN.toFixed(2),unit:'N'},{label:'重力',value:f.weightN.toFixed(2),unit:'N'},{label:'排水量',value:f.displacedCm3.toFixed(0),unit:'cm³'},{label:'浸沒',value:Math.round(f.fraction*100),unit:'%'}];},
  readout(){const p=parameters(),f=forces();const condition=!ready?'準備放入':specimen.position.y<=FLOOR+height/2+.01?'已沉底，水底也在支持':f.tendency==='neutral'?'接近中性浮力':f.tendency==='float'?'浮起，找受力平衡':'下沉，浮力仍存在';return `${p.sample.label} ${p.mass.toFixed(0)} g／${p.volume.toFixed(0)} cm³ · 密度 ${(p.mass/p.volume).toFixed(2)} g/cm³ · ${condition}`;},
  challenge(){return {title:'讓同一顆球由沉變浮',target:'密度球、淡水、原來重量。先縮小沉底，再放大浮起。',hint:'只改體積，兩次都放入水中，等自由浮沉穩定。'};},
  checkChallenge(){return judgeOceanChallenge(trials,trial(),ready&&stableTime>.5);},
  records(){return trials.map(t=>{const sample=OCEAN_SAMPLES[t.object],mass=t.massG??sample.mass*OCEAN_FACTORS[t.mass],volume=t.volumeCm3??sample.volume*OCEAN_FACTORS[t.volume];return {label:`${sample.label} ${mass.toFixed(0)}g／${volume.toFixed(0)}cm³ · ${t.water==='sea'?'海水':'淡水'}`,value:`浮 ${t.buoyantN.toFixed(2)}／重 ${t.weightN.toFixed(2)} N · 浸沒 ${Math.round(t.fraction*100)}% · 排水 ${(volume*t.fraction).toFixed(0)}cm³`};});},
  demo(){Object.assign(state,{object:'neutral',water:'fresh',mass:'normal',volume:'heavy'});refresh(true);release();},setPlaying(v){playing=v;},
  tick(dt){if(playing){time+=dt;if(!reduced)waterMaterial.uniforms.time.value=time;if(ready&&dragging===null){releaseTime+=dt;const p=parameters(),next=advanceOceanBody({shape:p.sample.shape,mass:p.mass,volume:p.volume,fluid:p.fluid,height,y:specimen.position.y,velocity:verticalSpeed},dt);specimen.position.y=next.y;verticalSpeed=next.velocity;const current=forces(),touchingFloor=specimen.position.y<=FLOOR+height/2+.001&&current.tendency==='sink';if(oceanRestCondition(current.netN,verticalSpeed,touchingFloor)&&releaseTime>2)stableTime+=dt;else stableTime=0;const stable=stableTime>.5;if(stable&&!trialRecorded){trials.push(trial());if(trials.length>24)trials.shift();trialRecorded=true;}}}updateDiagnostic();},
  move(direction){vessel.position.x=clamp(vessel.position.x+(direction==='right'?.2:direction==='left'?-.2:0),-3.2,-1.8);vessel.position.y=clamp(vessel.position.y+(direction==='up'?.2:direction==='down'?-.2:0),-1.8,.4);},
  setStep(index){if(index===lastStep)return;lastStep=index;Object.assign(state,{object:index===3?'submarine':index===1||index===2?'neutral':'wood',water:'fresh',mass:'normal',volume:'normal'});ready=false;refresh(true);},
  snapshot(){return {state:{...state},position:specimen.position.toArray(),navigatorPosition:vessel.position.toArray(),ready,seen:[...seen],trials:[...trials]};},
  restore(value){const saved=value.state as Record<string,string>|undefined;if(saved)for(const c of configs)if(c.values.some(v=>v.id===saved[c.id]))state[c.id]=saved[c.id];refresh(true);if(Array.isArray(value.position)&&value.position.length===3&&value.position.every(v=>typeof v==='number'&&Number.isFinite(v))){specimen.position.fromArray(value.position as number[]);specimen.position.x=clamp(specimen.position.x,-2.65,1.65);specimen.position.y=clamp(specimen.position.y,FLOOR+height/2,2.5);}ready=value.ready===true;if(Array.isArray(value.navigatorPosition)&&value.navigatorPosition.length===3&&value.navigatorPosition.every(v=>typeof v==='number'&&Number.isFinite(v))){vessel.position.fromArray(value.navigatorPosition as number[]);vessel.position.x=clamp(vessel.position.x,-3.2,-1.8);vessel.position.y=clamp(vessel.position.y,-1.8,.4);}if(Array.isArray(value.seen))value.seen.filter(v=>typeof v==='string').forEach(v=>seen.add(v));if(Array.isArray(value.trials))for(const t of value.trials.slice(-24))if(t&&typeof t==='object'&&Number.isFinite((t as OceanTrial).fraction))trials.push(t as OceanTrial);updateDiagnostic();},
  reset(){seen.clear();trials.length=0;Object.assign(state,{object:'wood',water:'fresh',mass:'normal',volume:'normal'});ready=false;playing=true;lastStep=-1;vessel.position.set(-2.55,-1.43,.6);refresh(true);},
  dispose(){abort.abort();floatButtons.remove();closeView.remove();ownTextures.forEach(t=>t.dispose());waterMaterial.dispose();},
 };
 return world;
}
