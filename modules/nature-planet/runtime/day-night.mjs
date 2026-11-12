/** Six real Earth hours = one planetary day. UTC epoch alignment is shared by all grades.
 * The clock follows wall time, including hidden tabs and remounts; it never accrues frame deltas.
 * Night keeps a readable moonlit floor. Bulbs and halos use at most three batched draws,
 * no shadows, no post-processing and no per-building point lights.
 */
export const EARTH_DAY_MS = 6 * 60 * 60 * 1000;
const TAU=Math.PI*2, clamp=n=>Math.max(0,Math.min(1,n));
const smooth=(a,b,n)=>{const t=clamp((n-a)/(b-a));return t*t*(3-2*t);};
const modulo=(n,d)=>((n%d)+d)%d;
export function samplePlanetDay(timestamp=Date.now(),previewHour=null) {
  if(!Number.isFinite(timestamp))throw new TypeError('A finite wall-clock timestamp is required');
  if(previewHour!==null&&(!Number.isFinite(previewHour)||previewHour<0||previewHour>=24))throw new RangeError('Preview hour must be in [0,24)');
  const phase=previewHour===null?modulo(timestamp,EARTH_DAY_MS)/EARTH_DAY_MS:previewHour/24;
  const hour=phase*24, angle=(phase-.25)*TAU, altitude=Math.sin(angle);
  const daylight=smooth(-.16,.30,altitude),night=1-daylight;
  const twilight=(1-smooth(.04,.38,Math.abs(altitude)))*.72;
  const minute=Math.floor(hour*60+1e-9)%1440;
  return {mode:previewHour===null?'live':'preview',earthHoursPerDay:6,phase,hour,minute,time:`${String(Math.floor(minute/60)).padStart(2,'0')}:${String(minute%60).padStart(2,'0')}`,period:hour<5||hour>=20?'night':hour<8?'dawn':hour<17?'day':'dusk',daylight,night,twilight,angle,altitude,hemisphereIntensity:1.42+.28*daylight,sunIntensity:3.3*daylight,moonIntensity:.86*night,exposure:1.28-.1*daylight};
}

/** Find disconnected bulb components even when the exporter merges all lamps into one mesh. */
export function lampCenters(THREE,mesh,materialIndex=null) {
  const g=mesh.geometry,p=g?.attributes?.position;if(!p)return [];
  const count=p.count,parent=new Int32Array(count),keys=new Map();for(let i=0;i<count;i++)parent[i]=i;
  const find=i=>{while(parent[i]!==i){parent[i]=parent[parent[i]];i=parent[i];}return i;};
  const union=(a,b)=>{a=find(a);b=find(b);if(a!==b)parent[b]=a;};
  const used=new Set(),idx=g.index,at=i=>idx?idx.getX(i):i;
  const ranges=materialIndex===null?[{start:0,count:idx?.count??count}]:(g.groups||[]).filter(x=>x.materialIndex===materialIndex);
  for(const r of ranges)for(let i=r.start;i<r.start+r.count;i+=3){const a=at(i),b=at(i+1),c=at(i+2);used.add(a);used.add(b);used.add(c);union(a,b);union(b,c);}
  for(const i of used){const key=[p.getX(i),p.getY(i),p.getZ(i)].map(n=>Math.round(n*1e4)).join(',');if(keys.has(key))union(i,keys.get(key));else keys.set(key,i);}
  const boxes=new Map();for(const i of used){const root=find(i);if(!boxes.has(root))boxes.set(root,new THREE.Box3());boxes.get(root).expandByPoint(new THREE.Vector3().fromBufferAttribute(p,i));}
  return [...boxes.values()].map(b=>b.getCenter(new THREE.Vector3()).applyMatrix4(mesh.matrixWorld));
}
/** A flat additive pool clears the raised road/plaza surface, never nearby cliffs. */
export function effectGroundHeight(x,z,base,radius,floor) {
  let support=base+.085; // Authored approach slabs sit 0.075 above the region ground.
  if(typeof floor==='function')for(const ratio of [0,.69]){
    const count=ratio===0?1:12;
    for(let i=0;i<count;i++){const angle=i/count*TAU,y=floor(x+Math.cos(angle)*radius*ratio,z+Math.sin(angle)*radius*ratio);
      if(Number.isFinite(y)&&y<=base+.45)support=Math.max(support,y);}
  }
  return support+.035;
}
function glowMaterial(THREE,ring=false) {
  return new THREE.ShaderMaterial({transparent:true,depthWrite:false,depthTest:true,side:THREE.DoubleSide,blending:THREE.AdditiveBlending,toneMapped:false,
    uniforms:{strength:{value:0},tint:{value:new THREE.Color(ring?'#8de6ff':'#ffdd9a')}},
    vertexShader:'varying vec2 vUv; void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*instanceMatrix*vec4(position,1.0);}',
    fragmentShader:`varying vec2 vUv; uniform float strength; uniform vec3 tint; void main(){float r=length(vUv-.5)*2.;float glow=${ring?'(1.-smoothstep(.72,1.,r))*(.14+.58*exp(-pow((r-.69)*10.,2.)))':'pow(max(0.,1.-r),2.)*.62'};gl_FragColor=vec4(tint,glow*strength);}`});
}
function pools(THREE,entries,material,name) {
  const mesh=new THREE.InstancedMesh(new THREE.PlaneGeometry(2,2),material,entries.length);mesh.name=name;mesh.userData.dayNightEffect=true;
  const dummy=new THREE.Object3D();for(let i=0;i<entries.length;i++){const e=entries[i];dummy.position.set(e.x,e.y,e.z);dummy.rotation.set(-Math.PI/2,0,0);dummy.scale.set(e.radius,e.radius,1);dummy.updateMatrix();mesh.setMatrixAt(i,dummy.matrix);}mesh.instanceMatrix.needsUpdate=true;mesh.computeBoundingSphere();mesh.raycast=()=>{};return mesh;
}
function bulbGlows(THREE,centers) {
  const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.Float32BufferAttribute(centers.flatMap(p=>p.toArray()),3));
  const material=new THREE.ShaderMaterial({transparent:true,depthWrite:false,depthTest:true,blending:THREE.AdditiveBlending,toneMapped:false,
    uniforms:{strength:{value:0},pixelHeight:{value:720}},
    vertexShader:'uniform float pixelHeight;void main(){vec4 mv=modelViewMatrix*vec4(position,1.);gl_Position=projectionMatrix*mv;gl_PointSize=clamp(pixelHeight*projectionMatrix[1][1]*.52/max(1.,-mv.z),2.,52.);}',
    fragmentShader:'uniform float strength;void main(){float r=length(gl_PointCoord-.5)*2.;float a=pow(max(0.,1.-r),2.);gl_FragColor=vec4(1.,.78,.38,a*strength);}' });
  const points=new THREE.Points(geometry,material);points.name='Planet_Night_Lamp_Glows';points.raycast=()=>{};return points;
}
export function createDayNight(THREE,scene,renderer,{now=()=>Date.now(),previewHour=null}={}) {
  let disposed=false,last=-Infinity,snapshot=null,terrainBound=false;
  const group=new THREE.Group();group.name='Planet_DayNight';scene.add(group);
  const sky=new THREE.HemisphereLight(0xd5efff,0x596274,1.7),sun=new THREE.DirectionalLight(0xffe5c5,3.3),moon=new THREE.DirectionalLight(0xc6deff,.86);
  sky.name='Planet_Sky_Light';sun.name='Planet_Sun';moon.name='Planet_Moon';sun.castShadow=moon.castShadow=false;group.add(sky,sun,moon);
  const daySun=new THREE.Color('#ffe5c5'),warmSun=new THREE.Color('#ffcf9c');
  const daySky=new THREE.Color('#799eb9'),nightSky=new THREE.Color('#263e60'),warmSky=new THREE.Color('#b68986'),dayGround=new THREE.Color('#596274'),nightGround=new THREE.Color('#66738d'),dayHemi=new THREE.Color('#d5efff'),nightHemi=new THREE.Color('#afcaff');
  const original={background:scene.background?.clone?.(),fog:scene.fog?.color.clone(),exposure:renderer.toneMappingExposure};
  const bindings=[],cloned=new Map(),effects=[];let bulbs=0,stations=0,unmatched=[];
  function apply(force=false){
    if(disposed)return false;const time=now();if(!force&&time>=last&&time-last<1000)return false;last=time;
    const next=samplePlanetDay(time,previewHour),changed=!snapshot||next.minute!==snapshot.minute||next.mode!==snapshot.mode;snapshot=next;
    scene.background?.copy(nightSky).lerp(daySky,next.daylight).lerp(warmSky,next.twilight*.35);if(scene.fog)scene.fog.color.copy(scene.background);
    sky.color.copy(nightHemi).lerp(dayHemi,next.daylight);sky.groundColor.copy(nightGround).lerp(dayGround,next.daylight);sky.intensity=next.hemisphereIntensity;
    sun.intensity=next.sunIntensity;sun.color.copy(daySun).lerp(warmSun,next.twilight);sun.position.set(-Math.cos(next.angle)*80,Math.max(18,next.altitude*90),50);
    moon.intensity=next.moonIntensity;moon.position.set(45,75,-35);renderer.toneMappingExposure=next.exposure;
    for(const m of cloned.values())m.emissiveIntensity=.025+2.2*next.night;
    for(const e of effects){e.visible=next.night>.002;e.material.uniforms.strength.value=next.night;if(e.material.uniforms.pixelHeight)e.material.uniforms.pixelHeight.value=renderer.domElement?.height||720;}
    return changed;
  }
  function bindTerrain(terrain,data,{floor}={}) {
    if(disposed||terrainBound)return false;terrainBound=true;terrain.updateMatrixWorld(true);const centers=[];
    terrain.traverse(o=>{if(!o.isMesh||!o.material)return;const originalMaterial=o.material,materials=Array.isArray(originalMaterial)?originalMaterial:[originalMaterial];let touched=false;
      const replaced=materials.map((m,i)=>{const lamp=m.name==='V11_Street_light'||m.name==='V10_Bridge_WarmLamp'||(/entry.?lamp/i.test(o.name)&&m.name==='LP_light');if(!lamp||!m.emissive)return m;touched=true;
        if(!cloned.has(m)){const copy=m.clone();copy.name=m.name+'__dayNight';cloned.set(m,copy);}
        centers.push(...lampCenters(THREE,o,Array.isArray(originalMaterial)?i:null));return cloned.get(m);});
      if(touched){bindings.push([o,originalMaterial]);o.material=Array.isArray(originalMaterial)?replaced:replaced[0];}});
    // Deduplicate coincident bulb primitive components, retaining authored bulb centers.
    const unique=[...new Map(centers.map(p=>[p.toArray().map(v=>v.toFixed(3)).join(','),p])).values()];bulbs=unique.length;
    const floorAt=(x,z,fallback)=>{const y=typeof floor==='function'?floor(x,z):null;return Number.isFinite(y)?y:fallback;};
    const lamps=unique.map(p=>({x:p.x,y:effectGroundHeight(p.x,p.z,floorAt(p.x,p.z,p.y-2.4),2.35),z:p.z,radius:2.35}));
    const halos=[];for(const s of data.stationsData||[]){const p=s.p||s.entry;if(!Array.isArray(p)||p.length!==3||!p.every(Number.isFinite)){unmatched.push(s.id);continue;}
      const x=p[0],z=-p[1],y=p[2];halos.push({x,y:effectGroundHeight(x,z,y,4.5,floor),z,radius:4.5});}
    stations=halos.length;
    for(const [entries,material,name] of [[lamps,glowMaterial(THREE),'Planet_Night_Street_Pools'],[halos,glowMaterial(THREE,true),'Planet_Night_Unit_Halos']]){const mesh=pools(THREE,entries,material,name);effects.push(mesh);group.add(mesh);}
    const glows=bulbGlows(THREE,unique);effects.push(glows);group.add(glows);apply(true);return true;
  }
  apply(true);
  return {get active(){return !disposed;},interval:1000,update:apply,bindTerrain,
    getState(){return {...snapshot,streetAndEntryBulbs:bulbs,unitHalos:stations,unmatchedStations:[...unmatched],effectDrawCalls:effects.length,shadowLights:0};},
    setPreview(hour=null){if(disposed||hour!==null&&(!Number.isFinite(hour)||hour<0||hour>=24))return false;previewHour=hour;apply(true);return true;},
    dispose(){if(disposed)return;disposed=true;for(const [o,m] of bindings)o.material=m;for(const m of cloned.values())m.dispose();for(const e of effects){e.geometry.dispose();e.material.dispose();}group.removeFromParent();if(original.background)scene.background.copy(original.background);if(original.fog&&scene.fog)scene.fog.color.copy(original.fog);renderer.toneMappingExposure=original.exposure;bindings.length=effects.length=0;cloned.clear();}};
}
