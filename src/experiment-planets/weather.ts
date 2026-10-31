import * as T from 'three';
import {type World,type Stage} from './core';
import {createWeatherState,stepWeather,setHumidity,relativeHumidity,dewPoint,weatherPhase,saturationDensity,type WeatherControls,type WeatherState} from './weather-model';

const clamp=T.MathUtils.clamp;
// Smooth analytic ridges and drainage incision; the teaching physics stays separate.
function riverXZ(t:number){return new T.Vector2(2.55-4.65*t,.05+1.25*Math.sin(t*Math.PI*.78)+.12*Math.sin(t*7));}
function rawSurface(x:number,z:number){
 const coast=-.85+.22*Math.sin(z*1.2)+.09*Math.sin(z*2.7);
 const inland=1/(1+Math.exp(-(x-coast)*3.8));
 const spine=2.8*Math.exp(-((x-2.7-.32*Math.sin(z*1.7))**2/1.15+(z+.8)**2/4.8));
 const shoulders=.62*Math.exp(-((x-4.3)**2/2.8+(z-1.6)**2/3.2));
 const relief=(Math.sin(x*3.1+z*1.2)*Math.sin(z*2.4-x*.8)*.10+Math.sin(x*6-z*3)*.025)*Math.min(1,Math.max(0,spine));
 return -1.72+inland*(1.12+spine+shoulders+relief);
}
// Shared monotone water/bed profile: every downstream sample loses height.
const riverProfile:number[]=[];
for(let i=0;i<=256;i++){const p=riverXZ(i/256),natural=rawSurface(p.x,p.y)-.10;riverProfile.push(i===0?natural:Math.min(natural,riverProfile[i-1]-.0015));}
function riverHeight(t:number){const q=clamp(t,0,1)*256,i=Math.min(255,Math.floor(q));return Math.max(-1.005,T.MathUtils.lerp(riverProfile[i],riverProfile[i+1],q-i));}
class RunoffCurve extends T.Curve<T.Vector3>{constructor(){super();}getPoint(t:number,target=new T.Vector3()){const p=riverXZ(t);return target.set(p.x,riverHeight(t),p.y);}}
const lakeLevel=.16;
function surface(x:number,z:number){
 let y=rawSurface(x,z);
 const t=clamp((2.55-x)/4.65,0,1),p=riverXZ(t),distance=Math.hypot(x-p.x,z-p.y),width=.055+.065*t;
 if(distance<width+.22){const blend=1-T.MathUtils.smoothstep(distance,width*.95,width+.22);y=T.MathUtils.lerp(y,riverHeight(t)-.045,blend);}
 const r=Math.hypot((x-3.8)/.61,(z-1.65)/.366);
 if(r<1.35){const bowl=lakeLevel-.19*(1-r*r);y=T.MathUtils.lerp(y,bowl,1-T.MathUtils.smoothstep(r,1,1.35));}
 return y;
}
const material=(color:number,roughness=.8)=>new T.MeshStandardMaterial({color,roughness,metalness:.02});
function mesh(g:T.BufferGeometry,m:T.Material){return new T.Mesh(g,m);}
function softCloudTexture(){
 const canvas=document.createElement('canvas');canvas.width=canvas.height=128;const c=canvas.getContext('2d')!;
 // Original procedural volume sprite: no retrieved or third-party image assets.
 for(let i=0;i<36;i++){const x=27+(Math.sin(i*19.1)*.5+.5)*74,y=27+(Math.cos(i*11.8)*.5+.5)*74,r=15+(i%5)*3;const gradient=c.createRadialGradient(x,y,1,x,y,r);gradient.addColorStop(0,'rgba(255,255,255,.16)');gradient.addColorStop(.5,'rgba(255,255,255,.09)');gradient.addColorStop(1,'rgba(255,255,255,0)');c.fillStyle=gradient;c.fillRect(x-r,y-r,r*2,r*2);}
 const texture=new T.CanvasTexture(canvas);texture.colorSpace=T.SRGBColorSpace;return texture;
}
function arrowOn(path:T.Curve<T.Vector3>,t:number,color:number){const p=path.getPoint(t),dir=path.getTangent(t);return new T.ArrowHelper(dir,p,.27,color,.10,.075);}
export function createWeather(stage:Stage):World {
 const root=stage.worldRoot,scene=stage.scene;const state=createWeatherState();const choice:WeatherControls={sun:'strong',humidity:'wet',air:'warm'};
 let running=true,observedEvaporation=false,observedCloud=false,observedWetRain=false,observedDryWarm=false,operated=false,demoTime=-1,phase=0;let operationTime=0,operationCondensed=0,operationRain=0;let observing=false,teachingStep=0;
 function manualOperation(){if(!operated){operationTime=state.time;operationCondensed=state.condensed;operationRain=state.rained;}operated=true;demoTime=-1;}
 const cleanups:(()=>void)[]=[];
 scene.background=new T.Color(0x172e49);scene.fog=new T.Fog(0x172e49,22,50);
 stage.camera.position.set(9,7.2,12.8);stage.camera.lookAt(0,.3,0);
 const terrainGeometry=new T.PlaneGeometry(12,7,160,96);terrainGeometry.rotateX(-Math.PI/2);const pos=terrainGeometry.attributes.position;const colors=[];
 for(let i=0;i<pos.count;i++){const x=pos.getX(i),z=pos.getZ(i),y=surface(x,z);pos.setY(i,y);const slope=Math.hypot(surface(x+.03,z)-surface(x-.03,z),surface(x,z+.03)-surface(x,z-.03))/.06;const color=new T.Color(0x25482d);if(y<-.93)color.setHex(0x93815d);else if(slope>1.15||y>1.3)color.lerp(new T.Color(0x59675e),clamp((slope-.5)*.5+(y-.7)*.3,0,.85));else color.lerp(new T.Color(0x48643a),clamp(y*.2+.25,0,.6));color.offsetHSL(0,0,(Math.sin(x*8+z*3)*Math.sin(z*7)*.012));colors.push(color.r,color.g,color.b);}
 terrainGeometry.setAttribute('color',new T.Float32BufferAttribute(colors,3));terrainGeometry.computeVertexNormals();const terrain=mesh(terrainGeometry,new T.MeshStandardMaterial({vertexColors:true,roughness:.94}));terrain.receiveShadow=true;root.add(terrain);
 const base=mesh(new T.BoxGeometry(12,.5,7),material(0x3b5367));base.position.y=-2.08;root.add(base);
 const normalData=new Uint8Array(128*128*4);for(let y=0;y<128;y++)for(let x=0;x<128;x++){const n=(y*128+x)*4;normalData[n]=128+Math.cos(x*.31+y*.13)*24;normalData[n+1]=128+Math.sin(y*.28-x*.09)*23;normalData[n+2]=250;normalData[n+3]=255;}const seaNormal=new T.DataTexture(normalData,128,128);seaNormal.wrapS=seaNormal.wrapT=T.RepeatWrapping;seaNormal.repeat.set(5,5);seaNormal.needsUpdate=true;
 const water=mesh(new T.PlaneGeometry(5.3,6.85,44,30),new T.MeshPhysicalMaterial({color:0x146d88,roughness:.24,metalness:.08,clearcoat:.8,clearcoatRoughness:.22,normalMap:seaNormal,normalScale:new T.Vector2(.3,.3),transparent:true,opacity:.9,side:T.DoubleSide}));water.rotation.x=-Math.PI/2;water.position.set(-3.3,-1.02,0);root.add(water);
 // Continuous terrain-following front section with softly undulating strata.
 for(let layer=0;layer<4;layer++){const vertices:number[]=[],indices:number[]=[];for(let i=0;i<=120;i++){const x=-6+i*.1,top=surface(x,3.5),base=-2.32;const f0=layer/4,f1=(layer+1)/4;const wave=Math.sin(x*1.4)*.025*Math.sin(f0*Math.PI);vertices.push(x,T.MathUtils.lerp(top,base,f0)+wave,3.505,x,T.MathUtils.lerp(top,base,f1),3.505);if(i<120){const n=i*2;indices.push(n,n+1,n+2,n+1,n+3,n+2);}}const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(vertices,3));g.setIndex(indices);g.computeVertexNormals();root.add(mesh(g,new T.MeshStandardMaterial({color:[0x7d8259,0xae9870,0x8c765c,0x656b67][layer],roughness:1,side:T.DoubleSide})));}
 // River ribbon follows the analytic ground at every sample instead of floating tube sections.
 const riverCurve=new RunoffCurve();const rv:number[]=[],ri:number[]=[];for(let i=0;i<100;i++){const t=i/99,p=riverXZ(t),next=riverXZ(Math.min(1,t+.01)),direction=next.sub(p).normalize(),width=.055+.065*t;for(const side of [-1,1]){const x=p.x-direction.y*width*side,z=p.y+direction.x*width*side;rv.push(x,riverHeight(t),z);}if(i<99){const n=i*2;ri.push(n,n+1,n+2,n+1,n+3,n+2);}}const rg=new T.BufferGeometry();rg.setAttribute('position',new T.Float32BufferAttribute(rv,3));rg.setIndex(ri);rg.computeVertexNormals();root.add(mesh(rg,new T.MeshPhysicalMaterial({color:0x499daf,roughness:.23,metalness:.05,clearcoat:.7,side:T.DoubleSide})));
 const groundCurve=new T.CatmullRomCurve3([new T.Vector3(2.6,-1.45,3.64),new T.Vector3(2.2,-1.8,3.64),new T.Vector3(.4,-1.84,3.64),new T.Vector3(-1.2,-1.78,3.64),new T.Vector3(-2.6,-1.18,2.7)]);
 const groundLine=mesh(new T.TubeGeometry(groundCurve,48,.035,8,false),new T.MeshStandardMaterial({color:0x64c7d7,emissive:0x125477,emissiveIntensity:.5}));root.add(groundLine);
 // A small lake makes accumulation distinct from falling rain and runoff.
 const lake=mesh(new T.CircleGeometry(.61,48),new T.MeshPhysicalMaterial({color:0x3cb2d2,roughness:.15,clearcoat:1,metalness:.1}));lake.rotation.x=-Math.PI/2;lake.scale.set(1,.6,1);lake.position.set(3.8,lakeLevel+.006,1.65);root.add(lake);
 // Small mixed tree groups, scaled to the mountain rather than oversized cones.
 for(let i=0;i<32;i++){const x=.05+(i*.817)%5.5,z=-2.8+(i*1.713)%5.9,y=surface(x,z);if(y>.95||y<-.76)continue;const tree=new T.Group();tree.position.set(x,y,z);const scale=.65+(Math.sin(i*9)*.5+.5)*.5;tree.scale.setScalar(scale);const trunk=mesh(new T.CylinderGeometry(.022,.034,.30,7),material(0x72523c));trunk.position.y=.14;tree.add(trunk);for(let n=0;n<3;n++){const crown=mesh(new T.SphereGeometry(.15,12,9),material([0x365c3f,0x456f49,0x537d50][n]));crown.scale.set(1,.95+n*.15,.85);crown.position.set(Math.sin(i+n)*.055,.32+n*.08,Math.cos(i+n)*.045);tree.add(crown);}root.add(tree);}
 const sunlight=new T.DirectionalLight(0xffd998,1.8);sunlight.position.set(-5,8,2);scene.add(sunlight);
 const sun=mesh(new T.SphereGeometry(.48,40,28),new T.MeshBasicMaterial({color:0xffdc92}));sun.position.set(-4.1,3.3,-1);root.add(sun);
 const sunHalo=mesh(new T.SphereGeometry(.58,32,24),new T.MeshBasicMaterial({color:0xffd479,transparent:true,opacity:.15,depthWrite:false}));sunHalo.position.copy(sun.position);root.add(sunHalo);
 for(let i=0;i<7;i++){const light=new T.ArrowHelper(new T.Vector3(.12,-1,0).normalize(),new T.Vector3(-4.8+i*.29,2.65,.15),.55,0xf9d596,.1,.055);root.add(light);}
 const liftCurve=new T.CatmullRomCurve3([new T.Vector3(-3.3,-.7,.2),new T.Vector3(-3.1,.55,.1),new T.Vector3(-2,2.15,0),new T.Vector3(.5,2.9,-.3)]);
 const transportArrows=Array.from({length:8},(_,i)=>{const a=arrowOn(liftCurve,i/8,0xf5d17c);root.add(a);return a;});
 const cloud=new T.Group();cloud.position.set(1.25,2.65,-.3);root.add(cloud);const cloudTexture=softCloudTexture();const cloudSprites:T.Sprite[]=[];
 for(let i=0;i<34;i++){const sprite=new T.Sprite(new T.SpriteMaterial({map:cloudTexture,color:i%3===0?0xb5c9d6:0xf5fbff,transparent:true,opacity:0,depthWrite:false}));sprite.position.set(Math.sin(i*2.3)*(1.0+(i%3)*.13),.12+Math.abs(Math.cos(i*1.7))*.28,Math.sin(i*1.1)*.55);sprite.scale.set(1.8+(i%4)*.16,1.05+(i%3)*.13,1);cloud.add(sprite);cloudSprites.push(sprite);}
 // One continuous irregular cloud envelope: shaded underside and rounded rising top.
 const cloudVolumeGeometry=new T.SphereGeometry(1,64,40);const cloudVertices=cloudVolumeGeometry.attributes.position;
 for(let i=0;i<cloudVertices.count;i++){const x=cloudVertices.getX(i),y=cloudVertices.getY(i),z=cloudVertices.getZ(i);const detail=1+.085*Math.sin(x*8+z*4)*Math.cos(y*9-z*5)+.045*Math.sin(z*13+x*7);cloudVertices.setXYZ(i,x*1.6*detail,(y<0?y*.25:y*.75)*detail+.1,z*.68*detail);}
 cloudVolumeGeometry.computeVertexNormals();const cloudVolumeMaterial=new T.MeshStandardMaterial({color:0xd3e0e7,roughness:1,transparent:true,opacity:0,depthWrite:false});const cloudVolume=mesh(cloudVolumeGeometry,cloudVolumeMaterial);cloud.add(cloudVolume);
 // Narrow teaching-focus keepouts; no terrain-wide rectangle that would exhaust label space.
 const mountainLabelKeepout=mesh(new T.BoxGeometry(2.1,2.7,1.9),new T.MeshBasicMaterial({transparent:true,opacity:0,depthWrite:false,colorWrite:false}));mountainLabelKeepout.position.set(2.65,.65,-.6);mountainLabelKeepout.userData.noFit=true;root.add(mountainLabelKeepout);stage.protectLabelArea(mountainLabelKeepout);stage.protectLabelArea(cloudVolume);
 const parcel=new T.Group();parcel.position.set(-.55,1.05,.25);root.add(parcel);
 const parcelGlass=mesh(new T.SphereGeometry(.35,28,20),new T.MeshPhysicalMaterial({color:0xe5bd62,roughness:.1,transparent:true,opacity:.1,depthWrite:false}));parcel.add(parcelGlass);
 const parcelRing=mesh(new T.TorusGeometry(.42,.025,10,56),new T.MeshBasicMaterial({color:0xffd37f}));parcel.add(parcelRing);
 const hit=mesh(new T.SphereGeometry(1.1,16,12),new T.MeshBasicMaterial({transparent:true,opacity:0,depthWrite:false}));parcel.add(hit);
 const bindStage=stage as Stage & {bindDrag?:(target:T.Object3D,move:(p:T.Vector3)=>void,plane?:T.Plane)=>()=>void;label?:(text:string,anchor:T.Object3D|T.Vector3)=>HTMLElement};
 const airHandle=document.createElement('button');airHandle.className='ep-weather-handle';airHandle.type='button';airHandle.textContent='↕';airHandle.setAttribute('role','slider');airHandle.setAttribute('aria-label','拖動空氣團，向上冷卻，向下變暖');airHandle.setAttribute('aria-orientation','vertical');airHandle.setAttribute('aria-valuemin','0');airHandle.setAttribute('aria-valuemax','100');airHandle.style.cssText='position:absolute;left:0;top:0;width:48px;height:48px;min-width:48px;min-height:48px;transform:translate(-50%,-50%);padding:0;border-radius:50%;border:2px solid #ffd37f;background:#153247e8;color:#ffe1a0;font-size:25px;z-index:4;touch-action:none;cursor:grab;pointer-events:auto';stage.host.append(airHandle);
 function updateAirHandle(){stage.camera.updateMatrixWorld();const point=parcel.getWorldPosition(new T.Vector3()).project(stage.camera);airHandle.hidden=point.z>1||Math.abs(point.x)>1||Math.abs(point.y)>1;airHandle.style.left=((point.x*.5+.5)*stage.host.clientWidth)+'px';airHandle.style.top=((-point.y*.5+.5)*stage.host.clientHeight)+'px';const height=Math.round(clamp((parcel.position.y-.65)/2.55,0,1)*100);airHandle.setAttribute('aria-valuenow',String(height));airHandle.setAttribute('aria-valuetext',`空氣團示意高度 ${height}%，越高越冷`);updateInsetPresentation();}
 function moveAir(point:T.Vector3){parcel.position.x=clamp(point.x,-1,1);parcel.position.y=clamp(point.y,.65,3.2);choice.cooling=clamp((parcel.position.y-.65)/2.55,0,1);choice.air=choice.cooling>.5?'cool':'warm';manualOperation();visual();}
 if(bindStage.bindDrag)cleanups.push(bindStage.bindDrag(parcel,moveAir,new T.Plane(new T.Vector3(0,0,1),-.25)));
 const pointerAbort=new AbortController(),ray=new T.Raycaster(),dragPlane=new T.Plane(new T.Vector3(0,0,1),-.25),dragPoint=new T.Vector3(),dragOffset=new T.Vector3();let dragPointer:number|null=null;
 function projectPointer(e:PointerEvent){const rect=stage.host.getBoundingClientRect();ray.setFromCamera(new T.Vector2((e.clientX-rect.left)/rect.width*2-1,-(e.clientY-rect.top)/rect.height*2+1),stage.camera);return ray.ray.intersectPlane(dragPlane,dragPoint);}
 airHandle.addEventListener('pointerdown',e=>{e.preventDefault();e.stopPropagation();if(!projectPointer(e))return;dragPointer=e.pointerId;dragOffset.copy(parcel.position).sub(dragPoint);stage.orbit.enabled=false;airHandle.style.cursor='grabbing';airHandle.setPointerCapture(e.pointerId);},{signal:pointerAbort.signal});
 airHandle.addEventListener('pointermove',e=>{if(dragPointer!==e.pointerId)return;e.preventDefault();e.stopPropagation();if(projectPointer(e)){moveAir(dragPoint.clone().add(dragOffset));stage.notify();}},{signal:pointerAbort.signal});
 const endAirDrag=(e:PointerEvent)=>{if(dragPointer!==e.pointerId)return;dragPointer=null;stage.orbit.enabled=true;airHandle.style.cursor='grab';if(airHandle.hasPointerCapture(e.pointerId))airHandle.releasePointerCapture(e.pointerId);stage.notify();};for(const event of ['pointerup','pointercancel','lostpointercapture'])airHandle.addEventListener(event,endAirDrag as EventListener,{signal:pointerAbort.signal});
 airHandle.addEventListener('keydown',e=>{if(!['ArrowUp','ArrowDown','ArrowLeft','ArrowRight','Home','End'].includes(e.key))return;e.preventDefault();e.stopPropagation();const p=parcel.position.clone();if(e.key==='Home')p.y=.65;else if(e.key==='End')p.y=3.2;else if(e.key==='ArrowUp'||e.key==='ArrowDown')p.y+=e.key==='ArrowUp'?.15:-.15;else p.x+=e.key==='ArrowRight'?.15:-.15;moveAir(p);stage.notify();},{signal:pointerAbort.signal});
 stage.orbit.addEventListener('change',updateAirHandle);const handleResize=new ResizeObserver(updateAirHandle);handleResize.observe(stage.host);cleanups.push(()=>{pointerAbort.abort();handleResize.disconnect();stage.orbit.removeEventListener('change',updateAirHandle);airHandle.remove();});
 const parcelCaption=new T.Object3D();parcelCaption.position.y=.8;parcel.add(parcelCaption);const vapourCaption=new T.Object3D();vapourCaption.position.set(-2.9,.8,.15);root.add(vapourCaption);const groundwaterCaption=new T.Object3D();groundwaterCaption.position.set(1.1,-1.75,3.65);root.add(groundwaterCaption);
 if(bindStage.label){const airLabel=bindStage.label('空氣團 ↑ 冷卻',parcelCaption);airLabel.dataset.tether='true';bindStage.label('水氣不可見',vapourCaption);bindStage.label('地下回流',groundwaterCaption);}
 const rainPositions=new Float32Array(90*6);const rainGeometry=new T.BufferGeometry();rainGeometry.setAttribute('position',new T.BufferAttribute(rainPositions,3));const rainMaterial=new T.LineBasicMaterial({color:0xa7e6ff,transparent:true,opacity:0});const rain=new T.LineSegments(rainGeometry,rainMaterial);root.add(rain);
 const flowDots=Array.from({length:11},(_,i)=>{const dot=mesh(new T.SphereGeometry(i<6?.055:.04,10,8),new T.MeshBasicMaterial({color:i<6?0xa2ecf9:0x8fd7dc}));root.add(dot);return dot;});
 // An inset shows liquid droplets, distinct from the invisible vapour path.
 const dropletInset=new T.Group();dropletInset.position.set(6.6,3.1,-.7);dropletInset.scale.setScalar(1.15);dropletInset.userData.noFit=true;root.add(dropletInset);
 // A floating rounded window, rather than a dark hole in the hillside.
 const frameShape=new T.Shape();frameShape.moveTo(-.63,-.7);frameShape.lineTo(.63,-.7);frameShape.quadraticCurveTo(.75,-.7,.75,-.58);frameShape.lineTo(.75,.58);frameShape.quadraticCurveTo(.75,.7,.63,.7);frameShape.lineTo(-.63,.7);frameShape.quadraticCurveTo(-.75,.7,-.75,.58);frameShape.lineTo(-.75,-.58);frameShape.quadraticCurveTo(-.75,-.7,-.63,-.7);
 const insetBack=mesh(new T.ShapeGeometry(frameShape,12),new T.MeshBasicMaterial({color:0x102d43,transparent:true,opacity:.96,side:T.DoubleSide}));insetBack.position.z=-.08;dropletInset.add(insetBack);
 const framePoints=frameShape.getPoints(12).map(p=>new T.Vector3(p.x,p.y,.015));const insetFrame=new T.LineLoop(new T.BufferGeometry().setFromPoints(framePoints),new T.LineBasicMaterial({color:0xa8e8fa}));dropletInset.add(insetFrame);
 const insetHeader=mesh(new T.BoxGeometry(1.4,.16,.025),new T.MeshBasicMaterial({color:0x27556d}));insetHeader.position.set(0,.57,-.015);dropletInset.add(insetHeader);for(let i=0;i<3;i++){const dot=mesh(new T.CircleGeometry(.025,12),new T.MeshBasicMaterial({color:0xa8e8fa}));dot.position.set(-.56+i*.09,.57,.01);dropletInset.add(dot);}
 const insetConnector=new T.Group();insetConnector.userData.noFit=true;root.add(insetConnector);const connectorPositions=new Float32Array(19*3);const connectorGeometry=new T.BufferGeometry();connectorGeometry.setAttribute('position',new T.BufferAttribute(connectorPositions,3));const connectorLine=new T.Line(connectorGeometry,new T.LineDashedMaterial({color:0xa8e8fa,dashSize:.10,gapSize:.055,transparent:true,opacity:.9}));insetConnector.add(connectorLine);const sourceRing=mesh(new T.TorusGeometry(.11,.014,8,24),new T.MeshBasicMaterial({color:0xc4f2fc}));insetConnector.add(sourceRing);
 function updateInsetPresentation(){const active=state.cloud>.06&&(teachingStep===1||teachingStep===2);dropletInset.visible=active;insetConnector.visible=active;dropletInset.quaternion.copy(stage.camera.quaternion);dropletInset.updateWorldMatrix(true,true);const source=cloud.localToWorld(new T.Vector3(.8,.05,.5)),end=dropletInset.localToWorld(new T.Vector3(-.76,0,.02)),middle=source.clone().lerp(end,.5).add(new T.Vector3(0,.35,0));const curve=new T.QuadraticBezierCurve3(source,middle,end);for(let i=0;i<19;i++){const p=curve.getPoint(i/18);connectorPositions.set([p.x,p.y,p.z],i*3);}connectorGeometry.attributes.position.needsUpdate=true;connectorLine.computeLineDistances();sourceRing.position.copy(source);sourceRing.quaternion.copy(stage.camera.quaternion);}
 stage.protectLabelArea(dropletInset);
 const smallDroplets=Array.from({length:14},(_,i)=>{const d=mesh(new T.SphereGeometry(.035+(i%3)*.008,14,10),new T.MeshPhysicalMaterial({color:0xc6f5ff,roughness:.12,metalness:.04,clearcoat:1}));dropletInset.add(d);return d;});
 const grownDrop=mesh(new T.SphereGeometry(.13,24,18),new T.MeshPhysicalMaterial({color:0x9fe9ff,roughness:.08,metalness:.03,clearcoat:1}));dropletInset.add(grownDrop);
 const insetCaption=new T.Object3D();insetCaption.position.y=-1.35;dropletInset.add(insetCaption);if(bindStage.label)bindStage.label('雲滴放大示意',insetCaption);
 const groups=[{id:'sun',title:'太陽加熱',values:[{id:'strong',label:'較強'},{id:'weak',label:'較弱'}]},{id:'humidity',title:'空氣水氣',values:[{id:'wet',label:'較多'},{id:'dry',label:'較少'}]},{id:'air',title:'空氣狀態',values:[{id:'cool',label:'變冷'},{id:'warm',label:'溫暖'}]}] as const;
 function visual(){
  stage.host.dataset.weatherAirX=parcel.position.x.toFixed(4);stage.host.dataset.weatherAirY=parcel.position.y.toFixed(4);updateAirHandle();
  vapourCaption.visible=teachingStep===0;groundwaterCaption.visible=teachingStep===3;
  const cloudFraction=1-Math.exp(-Math.max(0,state.cloud)/1.2);cloudSprites.forEach((s,i)=>{s.material.opacity=cloudFraction*(.13+(i%3)*.035);s.material.color.setHex(state.rainRate>.02?(i%3===0?0x829eae:0xd3e2e9):(i%3===0?0xc6dae4:0xf5fbff));});cloudVolumeMaterial.opacity=cloudFraction*.94;cloudVolumeMaterial.color.setHex(state.rainRate>.02?0x879ba9:0xc8d8e2);cloud.visible=state.cloud>.015;
  sunlight.intensity=choice.sun==='strong'?1.8:.55;sun.scale.setScalar(choice.sun==='strong'?1:.75);sunHalo.visible=choice.sun==='strong';
  rainMaterial.opacity=clamp(state.rainRate/.5,0,.75);rain.visible=state.rainRate>.005;
  for(let i=0;i<90;i++){const x=-.15+(i*1.73%3.4),z=-.85+(i*.91%2.1),floor=surface(x,z)+.04,y=3.15-((phase*2+i*.37)%Math.max(.2,3.15-floor));rainPositions.set([x,y,z,x+.025,y+.16,z],i*6);}rainGeometry.attributes.position.needsUpdate=true;
  transportArrows.forEach((a,i)=>{const t=(i/8+phase*.025)%1;a.position.copy(liftCurve.getPoint(t));a.setDirection(liftCurve.getTangent(t));a.visible=state.evaporationRate>.005;});
  flowDots.forEach((dot,i)=>{const curve=i<6?riverCurve:groundCurve;dot.position.copy(curve.getPoint((phase*(i<6?.11:.035)+i*.11)%1));dot.visible=i<6?state.surface>.005:state.ground>.005;});
  smallDroplets.forEach((d,i)=>{const a=i*2.4+phase*.2,r=.13+(i%4)*.09;const toward=state.growth;d.position.set(Math.cos(a)*r*(1-toward*.8),Math.sin(a)*r*(1-toward*.8),.05+(i%3)*.04);d.visible=state.cloud>.06;d.scale.setScalar(1-toward*.45);});grownDrop.visible=state.cloud>.06;grownDrop.scale.setScalar(.3+state.growth*.9);grownDrop.position.set(0,state.rainRate>.02?-.45*((phase*.7)%1):0,.1);
  dropletInset.visible=state.cloud>.06&&(teachingStep===1||teachingStep===2);insetConnector.visible=dropletInset.visible;
  seaNormal.offset.set(phase*.006,phase*.004);water.scale.z=1+Math.sin(phase*.7)*.004;
 }
 function markObservation(){if(state.evaporated>.15)observedEvaporation=true;if(state.cloud>.06&&state.condensed>.1)observedCloud=true;if(state.rained>.08&&state.rainRate>.005)observedWetRain=true;if(choice.humidity==='dry'&&choice.air==='warm'&&state.cloud<.06&&state.time>1)observedDryWarm=true;}
 function reset(){Object.assign(state,createWeatherState());Object.assign(choice,{sun:'strong',humidity:'wet',air:'warm'});delete choice.cooling;observedEvaporation=observedCloud=observedWetRain=observedDryWarm=operated=false;demoTime=-1;observing=false;operationTime=operationCondensed=operationRain=0;running=true;parcel.position.set(-.55,1.05,.25);visual();}
 visual();
 return {
  name:'天氣與水循環',intro:'把空氣團拖高，觀察冷卻、成雲、雲滴長大，再看雨水怎麼回到海洋。',controls:groups,
  modelNote:'加速的單空氣盒示意，不是天氣預報。空氣團上升用冷卻條件代替，未解氣壓或風場；雲滴、雨與回流水量及尺度誇張。假設有凝結核，只示範暖雲碰併成雨，未含冰晶。水氣不可見，金色箭頭只是輸送路徑。',
  sourceLinks:[{label:'NOAA：雲如何形成',url:'https://www.noaa.gov/jetstream/clouds/how-clouds-form'},{label:'NOAA：雲滴碰撞與合併',url:'https://www.noaa.gov/jetstream/global/learning-lesson-atmospheric-collisions'}],
  steps:[{title:'看蒸發',question:'太陽一出來，就一定下雨嗎？',detail:'先保持空氣溫暖，比較加熱較強與較弱；水氣看不見。'},{title:'讓雲形成',question:'水氣怎麼變成看得見的雲？',detail:'把金色空氣團向上拖，或選「變冷」。等空氣接近飽和，再看雲滴出現。'},{title:'雲不等於雨',question:'有雲就會馬上下雨嗎？',detail:'保持適合的水氣與冷卻，等雲滴成長；看放大鏡裡的小水滴。'},{title:'追蹤回流',question:'落到地面的水會去哪裡？',detail:'追蹤藍色河流與剖面的地下回流，再把空氣調成乾燥溫暖比較。'}],
  missions:[{title:'蒸發',detail:'讓溫暖空氣實際接收蒸發的水氣，再觀察。'},{title:'水氣凝結',detail:'讓有水氣的空氣冷卻，等到雲滴真正形成後觀察。'},{title:'降雨與比較',detail:'觀察雲滴成長後降雨，再觀察乾燥溫暖的無雲狀態。'}],
  quiz:{question:'水氣較多的空氣變冷，形成雲之後會怎樣？',answers:['形成雲就立刻全部下雨','雲滴還要成長，才可能成為雨滴','看見藍色水氣分子就是雲','只要陽光強就一定下雨'],correct:1,explanation:'水氣達飽和可凝結成雲滴；雲滴還要碰撞、合併等成長過程，才可能形成能落下的雨滴。'},
  selected(id){return id in choice?String(choice[id as keyof WeatherControls]):'';},
  choose(id,value){if(!groups.some(g=>g.id===id&&g.values.some(v=>v.id===value)))return;manualOperation();running=true;if(id==='humidity'){choice.humidity=value as 'wet'|'dry';setHumidity(state,choice.humidity);}else if(id==='sun')choice.sun=value as 'strong'|'weak';else{choice.air=value as 'cool'|'warm';delete choice.cooling;parcel.position.y=choice.air==='cool'?3.05:1.05;}visual();},
  observe(){observing=true;markObservation();},completed(){return [observedEvaporation,observedCloud,observedWetRain&&observedDryWarm];},
  metrics(){return [{label:'空氣溫度',value:state.temperature.toFixed(1),unit:'°C'},{label:'相對濕度',value:Math.min(110,relativeHumidity(state)).toFixed(0),unit:'%'},{label:'雲滴成長',value:Math.round(state.growth*100),unit:'%'},{label:'露點',value:dewPoint(state.vapour,state.temperature).toFixed(1),unit:'°C'},{label:'模型時間',value:state.time.toFixed(1),unit:'秒（加速）'},{label:'雲水量',value:state.cloud.toFixed(2),unit:'g（盒內）'},{label:'累積降水',value:state.rained.toFixed(2),unit:'g（示意）'},{label:'回流水量',value:state.returned.toFixed(2),unit:'g（示意）'}];},
  status(){return state.rainRate>.02?'降雨・地表與地下回流':state.cloud>.06?(state.vapour<saturationDensity(state.temperature)-.1?'雲滴逐漸蒸發':state.cloudAge<1.5?'凝結成雲':`雲滴成長 ${Math.round(state.growth*100)}%`):state.rained>.1&&state.surface+state.ground>.05?'蒸發・雨水回流':'蒸發・水氣輸送';},
  readout(){const status=weatherPhase(state);return status==='rain'?'雲滴成長後降雨，河流與地下水正在回流。':status==='cloud'?`已形成雲滴，成長 ${Math.round(state.growth*100)}%；有雲不等於立刻下雨。`:choice.air==='cool'?'空氣正在冷卻，等水氣達飽和。':'水面正在蒸發；溫暖空氣不一定有雲。';},
  challenge(){return {title:'先成雲，再降雨',target:'親手讓有水氣的空氣冷卻，等雲滴成長到降雨，再按檢查。',hint:'先有水氣，再冷卻；雲滴還要長大。只有切到「變冷」並不算完成。'};},
  checkChallenge(){const passed=operated&&state.time-operationTime>=5&&state.condensed-operationCondensed>.1&&state.rained-operationRain>.02&&state.cloudAge>=5&&state.growth>=.99&&state.rainRate>.005;return {passed,message:passed?'完成！水氣先凝結成雲滴，經過成長才降雨；雨水正回流。':!operated?'先親手改變水氣或空氣狀態，示範不代替操作。':state.cloud<.06?'先讓有足夠水氣的空氣冷卻到飽和。':state.growth<.99?'雲已形成，但雲滴還在長大；繼續觀察。':'目前沒有正在降雨，試著維持水氣較多、空氣變冷。'};},
  demo(){reset();demoTime=0;operated=false;},setPlaying(value){running=value;stage.host.dataset.playing=String(value);},setStep(index){teachingStep=clamp(Math.round(index),0,3);if(index===0&&state.time<.1)choice.air='warm';visual();},
  tick(dt){if(!running||dt<=0)return;phase+=dt;if(demoTime>=0){demoTime+=dt;if(demoTime>2&&demoTime<2.2){choice.air='cool';parcel.position.y=3.05;}if(demoTime>16&&demoTime<16.2){choice.air='warm';choice.humidity='dry';setHumidity(state,'dry');parcel.position.y=1.05;}if(demoTime>26)demoTime=-1;}stepWeather(state,choice,dt*2);if(observing)markObservation();visual();},
  snapshot(){return {choice:{...choice},state:{...state},observations:[observedEvaporation,observedCloud,observedWetRain,observedDryWarm],operated,operationTime,operationCondensed,operationRain,observing,teachingStep,parcelPosition:{x:parcel.position.x,y:parcel.position.y}};},
  restore(saved){const c=saved.choice as Record<string,unknown>|undefined,s=saved.state as Partial<WeatherState>|undefined;if(c){for(const g of groups){const v=c[g.id];if(g.values.some(x=>x.id===v))(choice as unknown as Record<string,unknown>)[g.id]=v;}if(typeof c.cooling==='number'&&Number.isFinite(c.cooling))choice.cooling=clamp(c.cooling,0,1);}if(s){for(const key of Object.keys(state) as (keyof WeatherState)[]){const value=s[key];if(typeof value==='number'&&Number.isFinite(value)&&value>=0)state[key]=value;}}if(Array.isArray(saved.observations))[observedEvaporation,observedCloud,observedWetRain,observedDryWarm]=saved.observations.map(Boolean);teachingStep=typeof saved.teachingStep==='number'?clamp(Math.round(saved.teachingStep),0,3):0;operated=saved.operated===true;observing=saved.observing===true;operationTime=typeof saved.operationTime==='number'?Math.max(0,saved.operationTime):0;operationCondensed=typeof saved.operationCondensed==='number'?Math.max(0,saved.operationCondensed):0;operationRain=typeof saved.operationRain==='number'?Math.max(0,saved.operationRain):0;const position=saved.parcelPosition as {x?:unknown;y?:unknown}|undefined;if(position&&typeof position.x==='number'&&Number.isFinite(position.x))parcel.position.x=clamp(position.x,-1,1);if(position&&typeof position.y==='number'&&Number.isFinite(position.y))parcel.position.y=clamp(position.y,.65,3.2);else parcel.position.y=typeof choice.cooling==='number'?.65+choice.cooling*2.55:choice.air==='cool'?3.05:1.05;visual();},
  reset,dispose(){cleanups.forEach(f=>f());cloudTexture.dispose();seaNormal.dispose();scene.remove(sunlight);sunlight.dispose();},
 };
}
