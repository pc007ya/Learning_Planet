/** Six real Earth hours = one planetary day. UTC epoch alignment is shared by all grades.
 * The clock follows wall time, including hidden tabs and remounts; it never accrues frame deltas.
 * Night keeps a readable moonlit floor. Bulbs and halos use at most three batched draws,
 * no post-processing and no per-building point lights.
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
  return {mode:previewHour===null?'live':'preview',earthHoursPerDay:6,phase,hour,minute,time:`${String(Math.floor(minute/60)).padStart(2,'0')}:${String(minute%60).padStart(2,'0')}`,period:hour<5||hour>=20?'night':hour<8?'dawn':hour<17?'day':'dusk',daylight,night,twilight,angle,altitude,hemisphereIntensity:1.38-.56*daylight,sunIntensity:2.05*daylight,moonIntensity:.88*night,exposure:1.22-.26*daylight};
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
function isWaterMesh(object){
  if(object.name==='Nature_water')return true;
  for(const m of [].concat(object.material||[]))if(/^(?:water|Ocean_V8|Coast_)/i.test(m?.name||''))return true;
  return false;
}
function createEnvironment(THREE,renderer){
  if(typeof renderer?.getContext!=='function'||!THREE.PMREMGenerator)return null;
  const envScene=new THREE.Scene();
  envScene.background=new THREE.Color('#6a97bd');
  const hemi=new THREE.HemisphereLight(0xd9f1ff,0x27576d,1.8);
  envScene.add(hemi);
  const key=new THREE.Mesh(new THREE.PlaneGeometry(24,24),new THREE.MeshBasicMaterial({color:0xfff1d8,side:THREE.DoubleSide}));
  key.material.color.multiplyScalar(2.4);key.position.set(-22,30,18);key.lookAt(0,0,0);envScene.add(key);
  const pmrem=new THREE.PMREMGenerator(renderer);
  const target=pmrem.fromScene(envScene,0.04);
  pmrem.dispose();
  key.geometry.dispose();key.material.dispose();
  return target;
}
export function createDayNight(THREE,scene,renderer,{now=()=>Date.now(),previewHour=null,lowPower=false}={}) {
  let disposed=false,last=-Infinity,snapshot=null,terrainBound=false;
  const shadowsEnabled=!lowPower&&Boolean(renderer?.shadowMap);
  const group=new THREE.Group();group.name='Planet_DayNight';scene.add(group);
  const sky=new THREE.HemisphereLight(0xd5efff,0x526173,.82),sun=new THREE.DirectionalLight(0xffe9ca,2.05),moon=new THREE.DirectionalLight(0xc2dcff,.88),rim=new THREE.DirectionalLight(0x9bd3ff,.38);
  sky.name='Planet_Sky_Light';sun.name='Planet_Sun';moon.name='Planet_Moon';rim.name='Planet_Rim_Light';
  sun.castShadow=false;moon.castShadow=false;rim.castShadow=false;rim.position.set(55,42,-65);
  group.add(sky,sun,sun.target,moon,rim);
  if(shadowsEnabled&&sun.shadow){
    renderer.shadowMap.enabled=true;
    renderer.shadowMap.type=THREE.PCFSoftShadowMap;
    sun.shadow.mapSize.set(2048,2048);
    sun.shadow.camera.near=10;sun.shadow.camera.far=260;
    sun.shadow.camera.left=-90;sun.shadow.camera.right=90;sun.shadow.camera.top=90;sun.shadow.camera.bottom=-90;
    sun.shadow.bias=-0.0004;sun.shadow.normalBias=0.04;sun.shadow.radius=2.5;
  }
  let envTarget=null;
  if(!lowPower){try{envTarget=createEnvironment(THREE,renderer);}catch{envTarget=null;}}
  const original={background:scene.background?.clone?.(),fog:scene.fog?.color.clone(),exposure:renderer.toneMappingExposure,environment:scene.environment,environmentIntensity:scene.environmentIntensity,shadowMapEnabled:renderer?.shadowMap?.enabled};
  if(envTarget){scene.environment=envTarget.texture;if('environmentIntensity'in scene)scene.environmentIntensity=.35;}
  const daySun=new THREE.Color('#ffedd2'),warmSun=new THREE.Color('#ffbe85');
  const daySky=new THREE.Color('#6f99bc'),nightSky=new THREE.Color('#1d3354'),warmSky=new THREE.Color('#bd8472'),dayGround=new THREE.Color('#536374'),nightGround=new THREE.Color('#60708b'),dayHemi=new THREE.Color('#d8f0ff'),nightHemi=new THREE.Color('#a6c5ff');
  const bindings=[],materialTweaks=[],shadowStates=[],cloned=new Map(),effects=[];let bulbs=0,stations=0,unmatched=[];
  function bindShadows(root){
    if(disposed||!root||!shadowsEnabled)return;
    root.traverse(o=>{
      if(!o.isMesh||o.userData?.dayNightEffect)return;
      shadowStates.push({o,cast:o.castShadow,receive:o.receiveShadow});
      const water=isWaterMesh(o);
      o.receiveShadow=true;
      o.castShadow=!water;
    });
  }
  function apply(force=false){
    if(disposed)return false;const time=now();if(!force&&time>=last&&time-last<1000)return false;last=time;
    const next=samplePlanetDay(time,previewHour),changed=!snapshot||next.minute!==snapshot.minute||next.mode!==snapshot.mode;snapshot=next;
    scene.background?.copy(nightSky).lerp(daySky,next.daylight).lerp(warmSky,next.twilight*.38);if(scene.fog)scene.fog.color.copy(scene.background);
    sky.color.copy(nightHemi).lerp(dayHemi,next.daylight);sky.groundColor.copy(nightGround).lerp(dayGround,next.daylight);sky.intensity=next.hemisphereIntensity;
    sun.intensity=next.sunIntensity;sun.color.copy(daySun).lerp(warmSun,next.twilight);sun.position.set(-Math.cos(next.angle)*80,Math.max(24,next.altitude*92),50);sun.target.position.set(0,0,0);sun.target.updateMatrixWorld();
    sun.castShadow=shadowsEnabled&&next.daylight>.08;
    moon.intensity=next.moonIntensity;moon.position.set(45,75,-35);
    rim.intensity=.22+.24*next.daylight+.16*next.twilight;
    if(envTarget&&'environmentIntensity'in scene)scene.environmentIntensity=.18+.22*next.daylight;
    renderer.toneMappingExposure=next.exposure;
    for(const m of cloned.values())m.emissiveIntensity=.025+2.2*next.night;
    for(const e of effects){e.visible=next.night>.002;e.material.uniforms.strength.value=next.night;if(e.material.uniforms.pixelHeight)e.material.uniforms.pixelHeight.value=renderer.domElement?.height||720;}
    return changed;
  }
  function bindTerrain(terrain,data,{floor,shadowRoots=[]}={}) {
    if(disposed||terrainBound)return false;terrainBound=true;terrain.updateMatrixWorld(true);const centers=[];
    const seenMat=new Set();
    terrain.traverse(o=>{if(!o.isMesh||!o.material)return;const originalMaterial=o.material,materials=Array.isArray(originalMaterial)?originalMaterial:[originalMaterial];let touched=false;
      const replaced=materials.map((m,i)=>{
        if(!seenMat.has(m)&&!isWaterMesh(o)&&!/light|lamp|glass|emissive/i.test(m.name||'')){
          seenMat.add(m);
          materialTweaks.push({m,roughness:m.roughness,envMapIntensity:m.envMapIntensity});
          if(typeof m.roughness==='number'&&m.roughness<.78&&(m.metalness??0)<.15)m.roughness=.78;
          if('envMapIntensity'in m)m.envMapIntensity=Math.min(m.envMapIntensity??.42,.42);
        }
        const lamp=m.name==='V11_Street_light'||m.name==='V10_Bridge_WarmLamp'||(/entry.?lamp/i.test(o.name)&&m.name==='LP_light');if(!lamp||!m.emissive)return m;touched=true;
        if(!cloned.has(m)){const copy=m.clone();copy.name=m.name+'__dayNight';cloned.set(m,copy);}
        centers.push(...lampCenters(THREE,o,Array.isArray(originalMaterial)?i:null));return cloned.get(m);});
      if(touched){bindings.push([o,originalMaterial]);o.material=Array.isArray(originalMaterial)?replaced:replaced[0];}});
    bindShadows(terrain);
    for(const root of shadowRoots)bindShadows(root);
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
  return {get active(){return !disposed;},interval:1000,update:apply,bindTerrain,bindShadows,
    getState(){return {...snapshot,streetAndEntryBulbs:bulbs,unitHalos:stations,unmatchedStations:[...unmatched],effectDrawCalls:effects.length,shadowLights:sun.castShadow?1:0};},
    setPreview(hour=null){if(disposed||hour!==null&&(!Number.isFinite(hour)||hour<0||hour>=24))return false;previewHour=hour;apply(true);return true;},
    dispose(){if(disposed)return;disposed=true;for(const [o,m] of bindings)o.material=m;for(const {m,roughness,envMapIntensity} of materialTweaks){m.roughness=roughness;if('envMapIntensity'in m)m.envMapIntensity=envMapIntensity;}for(const {o,cast,receive} of shadowStates){o.castShadow=cast;o.receiveShadow=receive;}for(const m of cloned.values())m.dispose();for(const e of effects){e.geometry.dispose();e.material.dispose();}envTarget?.dispose?.();sun.shadow?.map?.dispose?.();if(scene.environment===envTarget?.texture)scene.environment=original.environment||null;if('environmentIntensity'in scene&&original.environmentIntensity!==undefined)scene.environmentIntensity=original.environmentIntensity;if(renderer?.shadowMap&&original.shadowMapEnabled!==undefined)renderer.shadowMap.enabled=original.shadowMapEnabled;group.removeFromParent();if(original.background)scene.background.copy(original.background);if(original.fog&&scene.fog)scene.fog.color.copy(original.fog);renderer.toneMappingExposure=original.exposure;bindings.length=materialTweaks.length=shadowStates.length=effects.length=0;cloned.clear();}};
}
