import * as THREE from '../math-knowledge/vendor/three-r187/three.module.js';
import {mergeGeometries} from '../math-mission-map/v11/vendor/BufferGeometryUtils.js';
import {createYuyu} from '../math-mission-map/v11/planet-yuyu.mjs';
import {riverLayout,CHANNEL_HALF,RAMP_HALF} from './river-crossing-r7.mjs';
import {buildDistricts,route as districtRoute,insideBank} from './district-layout-r7.mjs';
import {addChineseLessonLandmark} from './lesson-landmarks-r9.mjs';
import {ROAD_RADIUS,PORCH_RADIUS,HOUSE_RADIUS,RIBBON_WIDTH,polar,canWalk,walkRoute} from './paths.mjs';

const themes=[
 [0x7dbea0,0x336d62,0xe97465,0xffcb70,0xea97b9],
 [0x9fbf79,0x446c50,0xdd7948,0xf9c76d,0xf0a881],
 [0x79b4bd,0x345b73,0x4f91b0,0xfece80,0xaa92cc],
 [0x9faccf,0x4d547e,0x7b6ab4,0xf7bd6c,0xc49fda],
 [0xb1ad83,0x595c46,0x975d6c,0xf9d88b,0xe8896d],
 [0x7c9ba4,0x3d5167,0x506c90,0xf1c481,0xa98ec5]
];
export function mountWorld(container,stations,grade,{onArrive,onPick,onUnavailable,onZoom},{
 makeRenderer=options=>new THREE.WebGLRenderer(options),
 win=container.ownerDocument.defaultView,
 doc=container.ownerDocument,
}={}){
 const scene=new THREE.Scene(), palette=themes[grade-1]||themes[0], level=Math.max(1,Math.min(6,grade));
 const district=level===1&&stations.length>=6&&stations.length<=8?buildDistricts(stations):null;
 const river=district?null:riverLayout(stations,level);
 const anchors=new Map(district?.stations.map(a=>[a.course.id,a]));
 scene.background=new THREE.Color(0x24475d);
 scene.fog=new THREE.FogExp2(0x24475d,.008);
 const cam=new THREE.PerspectiveCamera(40,1,.1,160);
 const renderer=makeRenderer({alpha:false,antialias:true,powerPreference:'low-power'});
 renderer.setPixelRatio(Math.min(win.devicePixelRatio||1,1.40));
 renderer.outputColorSpace=THREE.SRGBColorSpace;
 renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.04;
 container.append(renderer.domElement);
 const geometries=new Set(),materials=new Set(),materialCache=new Map();
 let dead=false,observer=null,frame=0,cleanupListeners=()=>{};
 function dispose(){
  if(dead)return;dead=true;
  if(frame)win.cancelAnimationFrame(frame);
  observer?.disconnect();cleanupListeners();
  renderer.domElement.remove();for(const g of geometries)g.dispose();for(const m of materials)m.dispose();
  renderer.dispose();renderer.forceContextLoss();
 }
 try{
 const own=x=>{(x.isMaterial?materials:geometries).add(x);return x;};
 const color=(value,opts={})=>{
  const key=JSON.stringify([value,opts]);if(!materialCache.has(key))materialCache.set(key,own(new THREE.MeshStandardMaterial({color:value,roughness:.84,...opts})));return materialCache.get(key);
 };
 function mesh(parent,geom,mat,pos){const m=new THREE.Mesh(own(geom),mat);if(pos)m.position.set(...pos);parent.add(m);return m;}
 const boxGeo=new THREE.BoxGeometry(1,1,1), sphereGeo=new THREE.SphereGeometry(1,11,7), cylGeo=new THREE.CylinderGeometry(1,1,1,10);
 const cub=(group,x,y,z,w,h,d,mat)=>{const m=mesh(group,boxGeo,mat,[x,y,z]);m.scale.set(w,h,d);return m;};
 const oval=(group,x,y,z,w,h,d,mat)=>{const m=mesh(group,sphereGeo,mat,[x,y,z]);m.scale.set(w,h,d);return m;};
 const tube=(group,x,y,z,w,h,d,mat)=>{const m=mesh(group,cylGeo,mat,[x,y,z]);m.scale.set(w,h,d);return m;};
 const hemi=new THREE.HemisphereLight(0xffeee0,0x657b91,2.3);scene.add(hemi);
 const sun=new THREE.DirectionalLight(0xffdfaf,2.5);sun.position.set(-10,18,4);scene.add(sun);
 const rim=new THREE.DirectionalLight(0x93cfec,.85);rim.position.set(11,10,-12);scene.add(rim);
 const lawn=color(palette[0]),base=color(palette[1]),sand=color(0xe4c289),path=color(0xf4d9a7),wood=color(0x8a5447),paper=color(0xffebc2),dark=color(0x433d48),gold=color(palette[3],{emissive:palette[3],emissiveIntensity:.28});
 const roof=[color(palette[2]),color(palette[4]),color(0x438f8d)],foliage=[color(palette[1]),color(0x699876),color(palette[4])];
 const rocks=[color(0x6d7f87),color(0x94a4a4),color(0x5e717b)];
 const terrain=new THREE.Group();scene.add(terrain);
 // One continuous shoreline mesh. The lane and its house foundations
 // deliberately stay on a level annulus; raised hinterland does not alter moves.
 const phase=(level-1)*1.29, raise=(x,z)=>river?.height(x,z)||0, dryLand=(x,z,margin=0)=>!river||Math.abs(river.measure(x,z))>=CHANNEL_HALF+margin;
 const shore=a=>17.25+.43*Math.sin(3*a+phase)+.31*Math.cos(5*a-.34*phase)+.22*Math.sin(8*a+phase)+(river?-.79*Math.pow(Math.max(0,Math.cos(a-river.angle)),2)+.50*Math.pow(Math.max(0,Math.cos(a-river.angle-Math.PI)),2):0);
 const smooth=x=>{const t=Math.min(1,Math.max(0,x));return t*t*(3-2*t);};
 const floor=(x,z)=>{
  const r=Math.hypot(x,z),a=Math.atan2(x,z);
  if(r<8.5){const shape=Math.sin(a*2+phase),peak=(.13+level*.083)*(.48+.52*shape*shape);const height=river&&river.measure(x,z)>0?1.05*smooth((river.measure(x,z)-1.10)/1.85):0;
   return raise(x,z)+smooth((8.5-r)/2.1)*smooth((r-2.7)/2.2)*(peak+height);}
  if(r>15.25&&r<16.7){const shape=Math.sin(a*3+phase);return raise(x,z)+smooth((r-15.25)/.45)*smooth((16.7-r)/.59)*(.15+level*.048)*shape*shape;}
  return raise(x,z);
 };
 function bands(parent,rings,mat,steps=96,name=''){
  const points=[],idx=[],uv=[];
  for(const ring of rings)for(let j=0;j<steps;j++){const a=j*2*Math.PI/steps;const [r,y]=ring(a);const [x,z]=polar(a,r);points.push(x,y,z);uv.push(j/steps,y);}
  for(let i=0;i<rings.length-1;i++)for(let j=0;j<steps;j++){
   const a=i*steps+j,b=i*steps+(j+1)%steps,c=a+steps,d=b+steps;
   idx.push(a,c,b,b,c,d);
  }
  const geo=new THREE.BufferGeometry();geo.setAttribute('position',new THREE.Float32BufferAttribute(points,3));geo.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));geo.setIndex(idx);geo.computeVertexNormals();
  const m=mesh(parent,geo,mat);m.name=name;return m;
 }
 // Clip at the two exact banks instead of painting a false channel.
 function cutBank(meshObj){
  if(!river)return meshObj;
  const source=meshObj.geometry, attrs=source.attributes, keys=Object.keys(attrs).filter(x=>x!=='normal'), positions=attrs.position;
  const strides=keys.map(k=>attrs[k].itemSize), channels=keys.map(()=>[]), indices=[];
  function v(i){return keys.map(k=>Array.from(attrs[k].array.slice(i*attrs[k].itemSize,(i+1)*attrs[k].itemSize)));}
  const sd=point=>river.measure(point[0][0],point[0][2]);
  function emit(poly){const offset=channels[0].length/strides[0];for(let i=2;i<poly.length;i++)indices.push(offset,offset+i-1,offset+i);for(const point of poly)for(let j=0;j<keys.length;j++)channels[j].push(...point[j]);}
  for(let i=0;i<source.index.count;i+=3){
   const tri=[v(source.index.array[i]),v(source.index.array[i+1]),v(source.index.array[i+2])],dist=tri.map(sd);
   for(const sign of [-1,1]){
    const poly=[];
    for(let j=0;j<3;j++){
     const k=(j+1)%3,a=tri[j],b=tri[k],u=dist[j]*sign-CHANNEL_HALF,w=dist[k]*sign-CHANNEL_HALF;
     if(u>=0)poly.push(a);
     if((u<0)!==(w<0)){const t=u/(u-w);poly.push(a.map((tuple,h)=>tuple.map((f,tj)=>f+(b[h][tj]-f)*t)));}
    }
    if(poly.length>=3)emit(poly);
   }
  }
  const g=new THREE.BufferGeometry();for(let j=0;j<keys.length;j++)g.setAttribute(keys[j],new THREE.Float32BufferAttribute(channels[j],strides[j]));
  g.setIndex(indices);g.computeVertexNormals();meshObj.geometry=own(g);return meshObj;
 }
 function flatRing(parent,r,w,mat,y){const m=mesh(parent,new THREE.RingGeometry(r-w,r+w,120),mat,[0,y,0]);m.rotation.x=-Math.PI/2;return m;}
 const plan=new THREE.Group();scene.add(plan);
 const sea=mesh(scene,new THREE.PlaneGeometry(240,240),color(0x347b8d,{roughness:.77}),[0,-1.34,0]);sea.rotation.x=-Math.PI/2;
 if(!district){
 const land=(a,r)=>[r,floor(...polar(a,r))], lifted=(a,r,y)=>[r,y+raise(...polar(a,r))];
 const centers=[.002,.8,2.7,3.5,4.6,5.6,6.6,7.4,8.25,9.1,10.9,12.4,14.9,15.6,16.1];
 const terrainMat=own(new THREE.MeshStandardMaterial({color:0xffffff,roughness:.92,vertexColors:true}));
 const landTop=bands(terrain,[...centers.map(r=>a=>land(a,r)),a=>lifted(a,shore(a)-.3,-.13)],terrainMat,96,'字旅島地面');
 const positions=landTop.geometry.getAttribute('position'), colors=[];
 const verdure=new THREE.Color(palette[0]), shaded=verdure.clone().lerp(new THREE.Color(palette[1]),.33), dry=verdure.clone().lerp(new THREE.Color(0xdac37a),.36);
 const upperColor=new THREE.Color(0xa1a760),lowerColor=new THREE.Color(0x628b71);
 for(let i=0;i<positions.count;i++){
  const x=positions.getX(i),z=positions.getZ(i),r=Math.hypot(x,z),a=Math.atan2(x,z), mottling=.35+.25*Math.sin(x*.9+Math.cos(z*.8))+.2*Math.sin(z*1.13+phase);
  const east=river&&river.measure(x,z)>0;
  const district=east?upperColor:lowerColor;
  const tone=verdure.clone().lerp(r>13.4?dry:shaded,mottling);
  if(river)tone.lerp(district,r>8.9&&r<12.8?.27:.52);
  colors.push(tone.r,tone.g,tone.b);
 }
 landTop.geometry.setAttribute('color',new THREE.Float32BufferAttribute(colors,3));cutBank(landTop);
 const edges=[
  [-.13,-.31,-.30,-.07,color(0xc5a576)],[-.31,-.53,-.07,.09,sand],
  [-.53,-.74,.09,.14,color(0xa88167)],[-.74,-1.31,.14,.03,base],
  [-1.31,-2.10,.03,-.54,dark]
 ];
 for(const [hi,low,s0,s1,mat] of edges)cutBank(bands(terrain,[a=>lifted(a,shore(a)+s0,hi),a=>lifted(a,shore(a)+s1,low)],mat,96,'海岸地層'));
 bands(terrain,[a=>[shore(a),-1.29],a=>[shore(a)+1.28,-1.29]],color(0x68a8aa),96,'淺水灣');
 for(let i=0;i<2;i++){
  const w=a=>.025+.053*Math.pow(.5+.5*Math.sin(a*11+phase+i),2);
  const r=a=>shore(a)+.51+i*1.08+.09*Math.sin(a*7+phase);
  bands(terrain,[a=>[r(a)-w(a),-1.27],a=>[r(a)+w(a),-1.27]],color(i?0x89bec4:0xbed9cf),120,'潮線');
 }
 function upperLane(width,offset,mat,step=144){return bands(terrain,[
  a=>lifted(a,ROAD_RADIUS-width,offset),a=>lifted(a,ROAD_RADIUS+width,offset)
 ],mat,step,'課程步道');}
 upperLane(RIBBON_WIDTH+.095,.008,color(0xbc9e72));
 upperLane(RIBBON_WIDTH,.014,path);
 if(river){
  // Sloped chalk banks cover the clipped grass edges down to the channel.
  const span=18.4,{ux,uz,offset}=river;
  for(const sign of [-1,1]){
   const off=offset+sign*CHANNEL_HALF;
   const p=[],uv=[],index=[];
   let previous=null;
   for(let i=0;i<=172;i++){
    const u=-span+2*span*i/172,x=ux*off+uz*u,z=uz*off-ux*u,r=Math.hypot(x,z),a=Math.atan2(x,z);
    if(r>shore(a)-.14){previous=null;continue;}
    const y=floor(x,z)-.15*smooth((r-(shore(a)-1.30))/.90),j=p.length/3;
    p.push(x,y,z,x+ux*sign*(-.12),-1.48,z+uz*sign*(-.12));uv.push(i/172,1,i/172,0);
    if(previous!==null){const k=previous;index.push(k,j,k+1,k+1,j,j+1);}previous=j;
   }
   const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(p,3));g.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));g.setIndex(index);g.computeVertexNormals();
   mesh(terrain,g,color(0xa0856f,{side:THREE.DoubleSide})).name='河道岸壁';
  }
 }
 if(river){
  // Opaque inset surfaces end inside the real banks. No decking or walk height changes.
  const {ux,uz,offset}=river;
  function stream(w,y,mat,wave=0){
   const pos=[],uv=[],indices=[];
   for(let i=0;i<=100;i++){
    const along=(i-50)*.305, fade=Math.sin(Math.PI*i/100),shift=Math.sin(along*1.1)*wave;
    for(const side of [-1,1]){const n=offset+shift+side*w*fade;pos.push(ux*n+uz*along,y,uz*n-ux*along);uv.push(side===-1?0:1,i/100);}
    if(i<100){const k=i*2;indices.push(k,k+2,k+1,k+1,k+2,k+3);}
   }
   const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(pos,3));g.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));g.setIndex(indices);g.computeVertexNormals();
   mesh(terrain,g,mat).name='河面色帶';
  }
  stream(.785,-.71,color(0x499caa,{roughness:.68,side:THREE.DoubleSide}));
  stream(.31,-.704,color(0x69bac1,{roughness:.68,side:THREE.DoubleSide}),.11);
  for(let i=-5;i<=5;i++){
   const along=i*2.20+.21,n=offset+Math.sin(i*1.65)*.36;
   const glint=oval(terrain,ux*n+uz*along,-.696,uz*n-ux*along,.016,.005,.18+.12*Math.abs(Math.cos(i)),color(0xa3d6cf));glint.rotation.y=river.angle-Math.PI/2;
  }
 }
 }else{
  function terrainSurface(center,profile,scales,ys,paints,name){
   const points=[],idx=[],uv=[],width=profile.length-1;
   for(let lane=0;lane<scales.length;lane++)for(let i=0;i<width;i++){
    const q=profile[i],scale=scales[lane];
    points.push(center.x+(q.x-center.x)*scale,ys[lane],center.z+(q.z-center.z)*scale);uv.push(i/width,scale);
   }
   for(let row=0;row<scales.length-1;row++)for(let i=0;i<width;i++){
    const a=row*width+i,b=row*width+(i+1)%width,c=a+width,d=b+width;idx.push(a,b,c,b,d,c);
   }
   const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(points,3));g.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));g.setIndex(idx);g.computeVertexNormals();
   mesh(terrain,g,paints).name=name;
  }
  for(const [i,profile] of district.islandProfiles.entries()){
   const c=district.centers[i];
   terrainSurface(c,profile,[.0004,.45,.67,1],[c.y,c.y,c.y,c.y],color(i?0xa1aa70:0x73a58b),'島面');
   terrainSurface(c,profile,[1,1.035,1.025,1.04],[c.y,c.y-.22,c.y-.46,-1.43],color(i?0x865d49:0x8b7968),'島岸岩層');
   terrainSurface(c,profile,[1,1.11],[-1.23,-1.23],color(0x61a5a5),'淺水距岸');
   terrainSurface(c,profile,[1.09,1.106],[-1.209,-1.209],color(0x9bc8ba),'沿岸白浪');
   for(let j=0;j<12;j++){
    const q=profile[(j*47+i*13)%179],scale=.33+(j%3)*.052;
    oval(terrain,c.x+(q.x-c.x)*scale,c.y+.12,c.z+(q.z-c.z)*scale,.25,.22,.28,foliage[j%3]);
   }
  }
  const joints=new Set();
  for(const e of district.edges){
   const {vertices,index}=e.deck,g=new THREE.BufferGeometry(),d=e.kind==='bridge';
   g.setAttribute('position',new THREE.Float32BufferAttribute(vertices.flatMap(v=>[v.x,v.y+.020,v.z]),3));
   g.setAttribute('uv',new THREE.Float32BufferAttribute(vertices.flatMap((_,i)=>[i%2,Math.floor(i/2)/(vertices.length/2)]),2));g.setIndex(index);g.computeVertexNormals();
   mesh(terrain,g,d?color(0xd9ac7b):path).name=d?'雙島共用橋面':'雙島共用步道';
   joints.add(e.a);joints.add(e.b);
   if(d)for(let j=12;j<vertices.length/2-12;j+=12){
    const a=vertices[j*2],b=vertices[j*2+1];
    for(const [side,q] of [a,b].entries()){
     tube(terrain,q.x,q.y+.22,q.z,.058,.40,.058,wood);
     oval(terrain,q.x,q.y+.43,q.z,.072,.061,.072,gold);
     if(j>12){const h=vertices[(j-12)*2+side];timber(terrain,[h.x,h.y+.32,h.z],[q.x,q.y+.32,q.z],.026,wood);}
    }
   }
  }
  for(const id of joints){const p=district.nodes.get(id);tube(terrain,p.x,p.y+.012,p.z,.665,.018,.665,path).name='圓形接點';}
 }
 const books=(group,x,y,z,turn)=>{
  const b=new THREE.Group();b.position.set(x,y,z);b.rotation.y=turn;group.add(b);
  for(let j=0;j<3;j++){
    cub(b,0,j*.145,0,1.04,.113,.64,roof[j]);cub(b,.045,j*.145+.015,.09,.94,.066,.52,paper);
    cub(b,-.479,j*.145+.025,0,.09,.165,.67,roof[j]);
  }return b;
 };
 function tree(x,z,s,i){
  const group=new THREE.Group();group.position.set(x,district?(insideBank({x,z},1)?.76:0):floor(x,z),z);group.scale.setScalar(s);terrain.add(group);
  tube(group,0,.43,0,.095,.86,.095,wood);
  if((i+level)%4===0||level===4){
   for(let k=0;k<3;k++){const g=mesh(group,new THREE.ConeGeometry(.57-.105*k,.52,10),foliage[k===2?1:0],[.03*k,.72+.27*k,0]);g.rotation.y=k*.30;}
  }else{
   oval(group,-.18,1.02,.08,.51,.58,.42,foliage[i%3]);oval(group,.27,.89,-.12,.43,.42,.4,foliage[(i+1)%3]);
   oval(group,.1,1.34,.06,.39,.44,.39,foliage[i%3]);
   if(level===1||level===5)for(let k=0;k<5;k++){const [xx,zz]=polar(k*2.4,.26);oval(group,xx,1.43+.11*Math.sin(k*2),zz,.11,.09,.11,foliage[2]);}
  }
 }
 if(!district)for(let i=0;i<31;i++){
  const a=i*2.399963, r=i%4===0?15.9:3.5+(i*173%49)/10;
  const [x,z]=polar(a,r);
  if(!dryLand(x,z,1.0)||r>12&&r>shore(a)-.72)continue;
  if(!dryLand(x,z,.75))continue;
  if(r>12&&stations.some(s=>Math.abs(Math.atan2(Math.sin(s.angle-a),Math.cos(s.angle-a)))<.12))continue;
  tree(x,z,.68+(i*73%48)/100,i);
 }
 if(!district)for(let i=0;i<22;i++){
  const a=i*2.399963+1.61,r=i%2?shore(a)-.32:6.6,[x,z]=polar(a,r);
  if(!dryLand(x,z,.52))continue;
  const crag=mesh(terrain,new THREE.DodecahedronGeometry(.37+(i%3)*.10),rocks[i%3],[x,floor(x,z)+(r>15?-.14:.09),z]);crag.scale.set(1,.66,.82);crag.rotation.set(i*.22,i*1.39,i*.18);
 }
 // Enlarged civic square on the lower bank, leaving the canal open.
 if(district)for(const [i,c] of district.centers.entries()){
  for(let j=0;j<8;j++){const [dx,dz]=polar(.38+j*2.4,1.8+j%3*.37);tree(c.x+dx,c.z+dz,.72+(j%4)*.13,j+i*8);}
 }
 const civic=new THREE.Group();
 if(district){const c=district.centers[0];civic.position.set(c.x,c.y,c.z);civic.scale.setScalar(.84);}
 if(river){civic.position.set(-river.ux*2.02,0,-river.uz*2.02);civic.scale.setScalar(1.30);}
 terrain.add(civic);
 for(const r of [2.68,2.29,1.83])tube(civic,0,.048+(2.68-r)*.12,0,r,.105,r,sand);
 tube(civic,0,.23,0,1.54,.10,1.54,color(0x5babb5));
 flatRing(civic,1.52,.075,paper,.292);
 tube(civic,0,.30,0,.55,.16,.55,wood);books(civic,0,.57,0,.23);
 for(let i=0;i<10;i++){const [x,z]=polar(i*Math.PI/5,2.45);oval(civic,x,.16,z,.10,.13,.10,gold);}
 const stone=color(0x8f9291),bronze=color(0x89705b),lacquer=color(0xa65140),ridge=color(0x413b52);
 const darkRed=color(0x8c3f3f),shell=color(0xcf804e),shade=color(0x618773),white=color(0xffe3bd);
 const ivoryStone=color(0xc8aa81);
 const pickables=[];
 function timber(group,a,b,r,mat){
  const v=new THREE.Vector3(...a),w=new THREE.Vector3(...b),d=w.clone().sub(v);const c=v.addScaledVector(d,.5);
  const sh=tube(group,c.x,c.y,c.z,r,d.length(),r,mat);sh.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),d.normalize());return sh;
 }
 // Eaves curve upward at the corners, with real ridges and matching trim.
 function hip(g,y,w,d,h,mat){
  const v=[],idx=[],uv=[],n=12;
  for(let u=0;u<=n;u++){
   const q=u/n,t=2*q-1,limit=1-.33*Math.abs(t)**3;
   for(let j=0;j<=n;j++){
    const p=j/n,o=2*p-1;
    const x=t*w*.5,z=o*d*.5*limit;
    const edge=.10*Math.abs(t)**5*Math.abs(o)**2;
    v.push(x,y+h*(1-Math.abs(o)**.73)*(1-.2*Math.abs(t)**5)+edge,z);uv.push(q,p);
    if(u<n&&j<n){const a=u*(n+1)+j,b=a+1,c=a+n+1,e=c+1;idx.push(a,b,c,b,e,c);}
   }
  }
  const geo=new THREE.BufferGeometry();geo.setAttribute('position',new THREE.Float32BufferAttribute(v,3));geo.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));geo.setIndex(idx);geo.computeVertexNormals();
  mesh(g,geo,mat);
  for(const side of [-1,1]){
   const coords=[];
   for(let k=0;k<=10;k++){const t=k/5-1;coords.push([t*w*.5,y+.10*Math.abs(t)**5,side*d*.5*(1-.33*Math.abs(t)**3)]);}
   for(let k=1;k<coords.length;k++)timber(g,coords[k-1],coords[k],.027,ridge);
  }
  cub(g,0,y+h,0,w*.76,.061,.08,ridge);
  for(const side of [-1,1])oval(g,side*w*.39,y+h,0,.07,.084,.061,gold);
 }
 function columns(g,x,z,y,h,mat){
  tube(g,x,y+h*.5,z,.055,h,.055,mat);
  cub(g,x,y+.035,z,.17,.07,.17,stone);
  cub(g,x,y+h-.04,z,.14,.08,.14,wood);
 }
 function lantern(g,x,y,z,scale=1){
  timber(g,[x,y+.24*scale,z],[x,y+.09*scale,z],.016,wood);
  oval(g,x,y,z,.10*scale,.12*scale,.10*scale,lacquer);
  tube(g,x,y+.085*scale,z,.061*scale,.029*scale,.061*scale,gold);
  timber(g,[x,y-.08*scale,z],[x,y-.17*scale,z],.020,gold);
 }
 for(const [i,s] of stations.entries()){
  const anchor=anchors.get(s.id),[x,z]=anchor?[anchor.house.x,anchor.house.z]:polar(s.angle,HOUSE_RADIUS),[px,pz]=polar(s.angle,(ROAD_RADIUS+PORCH_RADIUS)/2);
  const g=new THREE.Group();g.name='課程入口建築';g.position.set(x,.02+(anchor?.house.y??raise(x,z)),z);g.rotation.y=anchor?.face??(s.angle+Math.PI);plan.add(g);
  if(anchor){
   g.scale.x=g.scale.z=.83;
   const q=anchor.porch,len=Math.hypot(x-q.x,z-q.z);
   const porchWalk=cub(plan,x+(q.x-x)*.54,anchor.house.y+.004,z+(q.z-z)*.54,.67,.023,len*.91,path);porchWalk.rotation.y=anchor.face;
  }else{
  const connector=cub(plan,px,.016+raise(px,pz),pz,RIBBON_WIDTH*1.98,.023,PORCH_RADIUS-ROAD_RADIUS+.38,path);connector.rotation.y=s.angle;
  const [porchX,porchZ]=polar(s.angle,PORCH_RADIUS-.06);
  tube(plan,porchX,.019+raise(porchX,porchZ),porchZ,.70,.021,.70,path);
  }
  const visualScale=anchor?1.10:1.24;
  g.scale.y=visualScale;
  const foundation=cub(g,0,.078,0,1.72,.16,1.62,stone);if(anchor)foundation.name='雙島房屋地基';
  cub(g,0,.165,0,1.60,.075,1.42,sand);
  cub(g,0,.077,.915,.53,.145,.37,stone);
  const art=addChineseLessonLandmark(g,i,{THREE,mesh,cub,oval,tube,timber,hip,columns,color,paper,wood,gold,stone});
  // Local-space measured bounds include visible eaves, blades and antennae as
  // pickable areas without creating collision surfaces or moving the porch.
  const bounds=new THREE.Box3(),localParts=new THREE.Matrix4(),center=new THREE.Vector3(),size=new THREE.Vector3();
  function collect(node,parent){
   node.updateMatrix();const matrix=parent.clone().multiply(node.matrix);
   if(node.isMesh){
    node.geometry.computeBoundingBox();bounds.union(node.geometry.boundingBox.clone().applyMatrix4(matrix));
   }
   for(const child of node.children)collect(child,matrix);
  }
  collect(art,localParts);bounds.min.y=Math.min(.25,bounds.min.y);bounds.expandByScalar(.036);
  bounds.getCenter(center);bounds.getSize(size);
  const hit=cub(g,...center.toArray(),...size.toArray(),stone);hit.visible=false;hit.userData.hitOnly=true;hit.userData.station=s.id;pickables.push(hit);
 }
 // Off-road details never collide with course access.
 if(!district)for(let i=0;i<16;i++){
  const a=i*2.39996+1.4,r=i%2?8.14:16.1,[x,z]=polar(a,r);
  if(!dryLand(x,z,1.0)||r>12&&r>shore(a)-.72)continue;
  if(!dryLand(x,z,.75))continue;
  if(r>12&&stations.some(s=>Math.abs(Math.atan2(Math.sin(s.angle-a),Math.cos(s.angle-a)))<.15))continue;
  const bloom=color(i%2?0xef85a8:0xf3ca72);
  for(let j=0;j<5;j++){const [dx,dz]=polar(j*1.2566,.115);oval(terrain,x+dx,floor(x,z)+.104,z+dz,.10,.072,.10,bloom);}
  oval(terrain,x,floor(x,z)+.133,z,.061,.061,.061,gold);
 }
 if(!district)for(let i=0;i<8;i++){
  const a=i*Math.PI/4 + .15,[x,z]=polar(a,7.4);
  if(!dryLand(x,z,.70))continue;
  const bench=new THREE.Group();bench.position.set(x,floor(x,z)+.01,z);bench.rotation.y=a;terrain.add(bench);
  cub(bench,0,.28,0,.71,.1,.27,wood);cub(bench,0,.46,-.11,.71,.23,.08,wood);
  for(const sign of [-1,1])cub(bench,sign*.24,.13,0,.085,.26,.18,wood);
 }
 if(river){
  const yDeck=(x,z)=>.027+raise(x,z);
  const bridgeWidth=.88;
  for(const [b,root] of river.roots.entries()){
   const getEdge=d=>{
    let delta=.001;
    while(delta<.48&&Math.abs(river.measure(...polar(root+d*delta,ROAD_RADIUS)))<RAMP_HALF+.23)delta+=.001;
    return root+d*delta;
   };
   const from=getEdge(-1),to=getEdge(1),n=30,across=6,stride=across+1;
   const deckRoot=new THREE.Group();deckRoot.name='走行石拱橋 '+(b+1);terrain.add(deckRoot);
   let last=null;
   const geoPoints=[],brUV=[],index=[];
   for(let i=0;i<=n;i++){
    const a=from+(to-from)*i/n;const pair=[-1,1].map(side=>polar(a,ROAD_RADIUS+side*bridgeWidth));
    const chunk=pair.map(([x,z])=>[x,yDeck(x,z),z]);
    for(let j=0;j<=across;j++){
     const [x,z]=polar(a,ROAD_RADIUS+bridgeWidth*(2*j/across-1));
     geoPoints.push(x,yDeck(x,z),z);brUV.push(i/n,j/across);
     if(i<n&&j<across){const k=i*stride+j;index.push(k,k+1,k+stride,k+stride,k+1,k+stride+1);}
    }
    const rail=chunk.map(([x,y,z])=>[x,y+.35,z]);
    if(last)for(let side=0;side<2;side++){
     timber(deckRoot,last[side],rail[side],.028,wood);
     const a=last[side],q=rail[side];timber(deckRoot,[a[0],a[1]-.133,a[2]],[q[0],q[1]-.133,q[2]],.017,bronze);
    }
    if(i%5===0)for(const [x,y,z] of rail){
     tube(deckRoot,x,y-.20,z,.038,.47,.038,wood);
     oval(deckRoot,x,y+.054,z,.057,.059,.057,i===0||i===n?gold:ivoryStone);
    }
    if(i%4===2){
     // Thin engraved slat joints sit below the shoes.
     const [A,C]=chunk;
     timber(deckRoot,[A[0],A[1]-.005,A[2]],[C[0],C[1]-.005,C[2]],.010,bronze);
    }
    if([4,11,19,26].includes(i))for(const [x,y,z] of rail){
     const abutment=tube(deckRoot,x,(y-1.73)*.5,z,.090,y+1.06,.09,stone);abutment.visible=true;
    }
    last=rail;
   }
   const brGeo=new THREE.BufferGeometry();brGeo.setAttribute('position',new THREE.Float32BufferAttribute(geoPoints,3));brGeo.setAttribute('uv',new THREE.Float32BufferAttribute(brUV,2));brGeo.setIndex(index);brGeo.computeVertexNormals();
   mesh(deckRoot,brGeo,color(0xdab586)).name='行走橋面 (elevation matched)';
  }
 }
 // Sightseeing pier spans land to shallows. The course lane stays separate.
 if(!district){
 const facing=.77+level*.22;
 const dock=new THREE.Group();dock.name='臨海瞭望碼頭';dock.rotation.y=facing;terrain.add(dock);
 const dockStart=shore(facing)-1.00, dockEnd=shore(facing)+2.68;
 function dockY(r){const t=(r-dockStart)/(dockEnd-dockStart);return .05+Math.sin(Math.PI*t)*.33;}
 for(let i=0;i<=20;i++){
  const r=dockStart+(dockEnd-dockStart)*i/20,y=dockY(r);
  cub(dock,0,y,r,1.25,.088,.166,i%3===0?lacquer:wood);
  for(const d of [-1,1]){
   if(i%4===0){
    tube(dock,d*.495,(y-1.35)*.5,r,.043,y+1.35,.043,bronze);
    tube(dock,d*.495,y+.325,r,.043,.65,.043,wood);
    oval(dock,d*.495,y+.67,r,.070,.071,.070,gold);
   }
   if(i>0){const prev=r-(dockEnd-dockStart)/20;timber(dock,[d*.495,dockY(prev)+.49,prev],[d*.495,y+.49,r],.025,wood);}
  }
 }
 cub(dock,0,-.047,dockEnd+.60,2.15,.16,1.33,wood);
 for(const d of [-1,1]){
  columns(dock,d*.75,dockEnd+.9,.02,1.55,lacquer);
  lantern(dock,d*.75,1.18,dockEnd+.9);
  tube(dock,d*.75,-.62,dockEnd+.6,.10,1.22,.10,bronze);
 }
 const gate=new THREE.Group();gate.position.set(0,.12,dockEnd+1.55);dock.add(gate);hip(gate,1.53,2.05,1.16,.33,roof[0]);
 }
 // Main civic landmark changes by grade (school, tea garden, pavilion, etc).
 const court=new THREE.Group();court.name='中央字旅廣場';court.rotation.y=-.58+level*.37;civic.add(court);
 if(level===2||level===4||level===6){
  court.position.set(0,.28,0);
  for(const side of [-1,1])for(const z of [-.85,.85]){
   columns(court,side*.80,z,0,1.59,lacquer);lantern(court,side*.80,1.38,z,1.36);
  }
  hip(court,1.59,2.64,2.40,.58,roof[0]);
  if(level===6){cub(court,0,1.98,0,1.20,.35,.96,white);hip(court,2.19,1.61,1.48,.45,roof[1]);}
 }else{
  court.position.set(0,.30,0);
  for(const d of [-1,1]){
   const x=d*1.76,z=.20;columns(court,x,z,0,1.70,lacquer);lantern(court,x,1.36,z,1.42);
  }
  hip(court,1.75,3.89,1.16,.36,roof[1]);
  if(river){
   const crown=new THREE.Group();crown.position.set(0,2.01,-.03);court.add(crown);
   cub(crown,0,.22,0,1.34,.49,.62,paper);
   for(const d of [-1,1])columns(crown,d*.60,.22,0,.53,lacquer);
   hip(crown,.53,1.96,1.31,.42,roof[0]);
   oval(crown,0,1.015,0,.113,.18,.113,gold);
  }
  cub(court,0,1.49,.23,1.79,.25,.16,lacquer);
  for(let i=0;i<5;i++)cub(court,(i-2)*.26,1.49,.35,.085,.10,.016,gold);
 }
 if(river){
  // Distinct inland vistas stay wholly inside the ring; they are not lesson entrances.
  const {ux,uz,angle,offset}=river;
  function landmark(n,u){
   const x=ux*n+uz*u,z=uz*n-ux*u;
   const landmark=new THREE.Group();landmark.position.set(x,floor(x,z),z);landmark.rotation.y=angle;terrain.add(landmark);return landmark;
  }
  // Upper-bank archive on a cut-stone terrace, with a roof silhouette visible at overview scale.
  const archive=landmark(offset+2.12,.35);archive.name='上岸藏書樓';
  for(const [i,[w,d,y]] of [[2.95,2.50,-.11],[2.60,2.23,.10],[2.31,1.96,.30]].entries())cub(archive,0,y-(i===0?.27:0),0,w,i===0?.96:.42,d,i%2?ivoryStone:stone);
  cub(archive,0,1.05,-.24,1.90,1.23,1.34,paper);
  for(const d of [-1,1]){columns(archive,d*.92,.67,.36,1.47,lacquer);lantern(archive,d*.76,1.34,.76,1.27);}
  hip(archive,1.83,2.66,2.04,.56,roof[0]);
  cub(archive,0,2.43,-.07,1.20,.59,.83,paper);
  hip(archive,2.70,1.76,1.36,.47,roof[1]);
  cub(archive,0,1.22,.475,1.02,.46,.055,wood);
  for(const u of [-.33,0,.33])cub(archive,u,1.22,.518,.184,.36,.037,gold);
  for(let i=0;i<3;i++)cub(archive,0,.26-i*.10,.91+i*.17,1.12-i*.09,.11,.26,ivoryStone);
  // Lower-bank terraced tea garden, with repeat-free organic silhouette.
  const tea=landmark(-1.65,-5.42);tea.name='下岸茶園';
  for(const [i,[w,d,y]] of [[1.56,1.21,-.10],[1.34,1.02,.15],[1.11,.87,.36]].entries()){
   tube(tea,0,y-(i===0?.13:0),0,w,i===0?.57:.31,d,i===1?stone:shade);
   for(let j=0;j<7-i;j++){const a=(j+1)*2.4+i;oval(tea,Math.sin(a)*w*.70,y+.27,Math.cos(a)*d*.68,.26,.19,.23,foliage[i]);}
  }
  for(const d of [-1,1])columns(tea,d*.58,0,.55,1.05,wood);
  hip(tea,1.59,1.66,1.24,.37,roof[2]);lantern(tea,0,1.27,.57);
  const teaStack=books(tea,0,.65,.12,.35);teaStack.scale.setScalar(.64);
 }
 if(district){
  const c=district.centers[1],archive=new THREE.Group();archive.name='上岸藏書樓';archive.position.set(c.x,c.y,c.z-.18);terrain.add(archive);
  for(const [wide,deep,h,dy,mat] of [[4.30,3.66,.20,.065,stone],[3.95,3.24,.24,.23,ivoryStone],[3.48,2.88,.21,.43,stone]])cub(archive,0,dy,0,wide,h,deep,mat);
  for(let i=0;i<6;i++)cub(archive,0,.055+i*.070,2.21-i*.159,1.36,.10,.23,ivoryStone);
  archive.scale.y=1.23;
  cub(archive,0,.91,-.21,2.44,1.20,1.56,paper);
  for(const d of [-1,1]){columns(archive,d*1.20,.73,.37,1.40,lacquer);lantern(archive,d*1.00,1.35,.87,1.26);}
  hip(archive,1.77,3.34,2.38,.59,roof[0]);cub(archive,0,2.42,0,1.50,.55,.94,paper);hip(archive,2.69,2.04,1.68,.54,roof[1]);
  cub(archive,0,1.16,.60,.95,.38,.045,wood);
  for(const dx of [-.31,0,.31])cub(archive,dx,1.16,.631,.18,.27,.024,gold);
  const h=district.centers[0],market=new THREE.Group();market.name='雙棚港灣市集';market.position.set(h.x-1.25,h.y,h.z-2.08);terrain.add(market);
  // Two open market wings leave the civic court visually distinct from the high archive.
  for(const wing of [-1,1]){
   const a=new THREE.Group();a.position.x=wing*1.02;a.rotation.y=wing*.20;market.add(a);
   for(const dx of [-.51,.51])for(const dz of [-.47,.47])columns(a,dx,dz,.015,1.06,wood);
   hip(a,1.07,1.36,1.37,.38,color(wing===-1?0x347d80:0x527d9a));
   cub(a,0,.42,.28,.98,.14,.33,wood);
   const crate=books(a,.12,.54,.21,.20);crate.scale.setScalar(.46);
  }
 }
 const amber=color(0xed933d), ivory=color(0xffdfa5), ink=color(0x43394d), waterWake=color(0xaed3c9);
 const ducks=[];
 for(let i=0;i<3;i++){
  const duck=new THREE.Group();duck.name='港灣游鴨';scene.add(duck);ducks.push(duck);
  duck.scale.setScalar((district?1.55:river?1.22:1)*(i?(district?.73-.06*i:.67-.08*i):1));
  oval(duck,0,0,0,.34,.22,.47,ivory);oval(duck,0,.235,.28,.24,.24,.23,ivory);
  oval(duck,0,.19,.478,.132,.061,.168,amber);oval(duck,0,.144,.521,.11,.041,.11,gold);
  for(const side of [-1,1]){
   oval(duck,.162*side,.28,.405,.034,.042,.034,ink);
   oval(duck,.181*side,.295,.424,.013,.013,.012,paper);
   const wing=oval(duck,.274*side,.032,-.084,.086,.154,.29,sand);wing.rotation.x=-.19;
  }
  const tail=oval(duck,0,.097,-.34,.19,.13,.24,ivory);tail.rotation.x=-.49;
  oval(duck,0,-.15,-.43,.15,.017,.49,waterWake);
 }
 const sampan=new THREE.Group();sampan.name='港灣客船';scene.add(sampan);if(district||river)sampan.scale.setScalar(district?1.53:1.24);
 const hull=oval(sampan,0,-.065,0,.49,.235,1.07,wood);
 oval(sampan,0,.046,.01,.455,.12,.995,bronze);oval(sampan,0,.141,0,.362,.047,.847,sand);
 for(const side of [-1,1]){
  timber(sampan,[side*.08,.15,-.78],[side*.407,.14,-.25],.026,wood);
  timber(sampan,[side*.407,.14,-.25],[side*.36,.17,.43],.026,wood);
  timber(sampan,[side*.36,.17,.43],[side*.08,.224,.93],.026,wood);
  for(const dz of [-.47,.33])timber(sampan,[side*.31,.13,dz],[side*.27,.65,dz],.025,wood);
 }
 hip(sampan,.61,.69,.93,.16,district?color(0x3b8d93):roof[0]);lantern(sampan,0,.42,.42,.64);
 if(district){
  tube(sampan,0,.75,-.38,.030,1.18,.030,wood);
  const flag=cub(sampan,.175,1.25,-.38,.31,.21,.028,color(0xffc864));flag.rotation.z=.24;
  for(const side of [-1,1]){
   oval(sampan,side*.16,-.093,-1.51,.052,.018,.56,waterWake);
   oval(sampan,side*.31,-.096,-1.90,.047,.015,.47,waterWake);
  }
 }
 oval(sampan,0,-.11,-1.11,.235,.017,.72,waterWake);
 const shuttle=new THREE.Group();shuttle.name='高岸接駁機';scene.add(shuttle);if(district||river)shuttle.scale.setScalar(district?1.29:1.18);
 const glass=color(0x88cbd8,{metalness:.16,roughness:.40});
 oval(shuttle,0,0,-.05,.52,.28,1.03,roof[0]);oval(shuttle,0,.205,.22,.35,.21,.56,glass);
 oval(shuttle,0,-.11,.14,.39,.08,.81,paper);
 for(const side of [-1,1]){
  const wing=oval(shuttle,side*.50,-.065,-.29,.55,.071,.40,bronze);wing.rotation.y=side*.40;
  oval(shuttle,side*.65,-.032,-.31,.157,.14,.52,dark);
  oval(shuttle,side*.65,-.035,-.76,.113,.111,.10,gold);
  oval(shuttle,side*.96,-.01,-.50,.068,.052,.091,gold);
 }
 const fox=new THREE.Group();fox.name='港邊赤狐';(district?scene:terrain).add(fox);
 const foxA=.84+level*.87,[fx,fz]=district?[district.centers[0].x-.76,district.centers[0].z+.94]:polar(foxA,6.1);
 const foxX=dryLand(fx,fz,.8)?fx:-river.ux*6.2,foxZ=dryLand(fx,fz,.8)?fz:-river.uz*6.2;
 fox.position.set(foxX,district?0:floor(foxX,foxZ),foxZ);fox.rotation.y=foxA-.48;if(river||district)fox.scale.setScalar(1.46);
 oval(fox,0,.226,-.065,.173,.17,.29,shell);oval(fox,0,.374,.171,.15,.151,.145,shell);
 oval(fox,0,.325,.251,.121,.072,.119,white);oval(fox,0,.344,.354,.052,.029,.047,ink);
 for(const sign of [-1,1]){
  const ear=mesh(fox,new THREE.ConeGeometry(.078,.19,8),darkRed,[sign*.094,.536,.138]);ear.rotation.z=sign*-.18;
  oval(fox,sign*.098,.385,.274,.02,.026,.021,ink);
  for(const z of [-.24,.108])oval(fox,sign*.12,.095,z,.066,.092,.070,darkRed);
 }
 const brush=oval(fox,.12,.214,-.34,.12,.112,.25,shell);brush.rotation.y=-.46;
 const brushEnd=oval(fox,.185,.22,-.532,.095,.09,.103,white);brushEnd.rotation.y=-.49;
 // Bake non-moving architecture and plants by material (one draw call per
 // material instead of hundreds of per-house meshes). Keep original click hulls.
 function batch(sources,target) {
  target.updateMatrixWorld(true);
  const byMaterial=new Map(),invert=target.matrixWorld.clone().invert();
  for(const source of sources){
   source.updateMatrixWorld(true);
   source.traverse(item=>{
    if(!item.isMesh||!item.visible||item.userData.hitOnly)return;
    const mat=item.material,base=item.geometry;
    const plain=!mat.vertexColors&&!mat.map&&!mat.emissive.getHex()&&mat.roughness===.84&&mat.metalness===0&&mat.side===THREE.FrontSide;
    const key=plain?(base.index?'opaque-indexed':'opaque-flat'):mat,parts=byMaterial.get(key)||[];
    const geom=base.clone().applyMatrix4(invert.clone().multiply(item.matrixWorld));
    if(plain){const channels=new Float32Array(geom.attributes.position.count*3),c=mat.color;
     for(let k=0;k<channels.length;k+=3){channels[k]=c.r;channels[k+1]=c.g;channels[k+2]=c.b;}
     geom.setAttribute('color',new THREE.BufferAttribute(channels,3));
    }
    parts.push({item,geom});byMaterial.set(key,parts);
   });
  }
  for(const [key,parts] of byMaterial){
   if(parts.length>1){
    const fused=mergeGeometries(parts.map(p=>p.geom),false);
    if(fused){
     const mat=typeof key==='string'?color(0xffffff,{vertexColors:true}):key;
     mesh(target,fused,mat);for(const {item} of parts)item.visible=false;
    }
   }
   for(const {geom} of parts)geom.dispose();
  }
 }
 const districtDirection=new THREE.Vector3(),frameRight=new THREE.Vector3();
 const frameUp=new THREE.Vector3(),preferred=new THREE.Vector3();
 let bounds=[],mapTarget=new THREE.Vector3(),mapRange=0,snapFraming=false;
 if(district){
  const rows=[];scene.updateMatrixWorld(true);
  for(const source of [terrain,plan])source.traverse(o=>{
   if(!o.isMesh||!o.visible||o.userData.hitOnly)return;
   if(o.name==='島面'||o.name==='島岸岩層'||o.name==='沿岸白浪'||o.name==='淺水距岸'){
    const p=o.geometry.attributes.position;
    for(let i=0;i<p.count;i++)rows.push(new THREE.Vector3().fromBufferAttribute(p,i).applyMatrix4(o.matrixWorld));
    return;
   }
   if(!o.geometry.boundingBox)o.geometry.computeBoundingBox();
   const {min,max}=o.geometry.boundingBox;
   for(const x of [min.x,max.x])for(const y of [min.y,max.y])for(const z of [min.z,max.z])
    rows.push(new THREE.Vector3(x,y,z).applyMatrix4(o.matrixWorld));
  });
  // Include the projected ferry/duck shore band, but not distant horizon.
  for(const x of [-6.8,6.8])for(const z of [9.7,12.4])rows.push(new THREE.Vector3(x,-1.27,z));
  bounds=rows;
 }
 function fitDistrict(aspect){
  const t=Math.max(0,Math.min(1,(aspect-1.05)/.85));
  districtDirection.set(.32-.13*t,.99-.30*t,.88+.03*t).normalize();
  frameRight.set(districtDirection.z,0,-districtDirection.x).normalize();
  frameUp.crossVectors(districtDirection,frameRight).normalize();
  const frameBounds=bounds.map(q=>[q.dot(frameRight),q.dot(frameUp),q.dot(districtDirection)]);
  let left=Infinity,right=-Infinity,bottom=Infinity,top=-Infinity;
  for(const [x,y] of frameBounds){left=Math.min(left,x);right=Math.max(right,x);bottom=Math.min(bottom,y);top=Math.max(top,y);}
  mapTarget.set(0,0,0).addScaledVector(frameRight,(left+right)/2).addScaledVector(frameUp,(bottom+top)/2);
  const x=mapTarget.dot(frameRight),y=mapTarget.dot(frameUp),d=mapTarget.dot(districtDirection);
  const fy=Math.tan(cam.fov*Math.PI/360),fx=Math.max(.23,aspect)*fy;
  mapRange=0;
  for(const [px,py,pd] of frameBounds)
   mapRange=Math.max(mapRange,pd-d+Math.max(Math.abs(px-x)/(fx*.90),Math.abs(py-y)/(fy*.88)));
  snapFraming=true;
 }
 batch([terrain,plan],scene);
 for(const group of [...ducks,sampan,shuttle,...(district?[fox]:[])])batch([group],group);
 const actor=createYuyu(THREE,{own,color,mesh});
 scene.add(actor.root);
 const initial=polar(-.65,ROAD_RADIUS);
 let districtNode=district?.spawnAt;
 const spawn=district?district.nodes.get(districtNode):{x:initial[0],y:raise(...initial),z:initial[1]};
 actor.root.position.set(spawn.x,.038+spawn.y,spawn.z);actor.root.scale.setScalar(.84);
 const ray=new THREE.Raycaster(),ndc=new THREE.Vector2(), target=new THREE.Vector3(),viewTarget=new THREE.Vector3();let last=0,route=[],index=0,wanted=null,near=false,yaw=-.53;
 const reduced=win.matchMedia('(prefers-reduced-motion: reduce)').matches;
 function select(station){
  if(dead)return false;
  const p=actor.root.position;
  // Selection is only permitted from the spawn or after arrival; the model still guards its road mask.
  if(wanted)return false;
  let next;
  if(district){
   const goal=anchors.get(station.id)?.id;if(!goal)return false;
   const course=districtRoute(district,districtNode,goal);if(!course)return false;
   next=course.slice(1).map(q=>[q.x,q.z,q.y]);
  }else{
   if(!canWalk(p.x,p.z,stations))return false;
   next=walkRoute([p.x,p.z],station);
   if(next.some(([x,z])=>!canWalk(x,z,stations)))return false;
  }
  wanted=station.id;route=next;index=0;return true;
 }
 function resize(){if(dead)return;const w=container.clientWidth,h=container.clientHeight;if(w&&h){cam.aspect=w/h;cam.updateProjectionMatrix();if(district)fitDistrict(cam.aspect);renderer.setSize(w,h,false);}}
 observer=new win.ResizeObserver(resize);observer.observe(container);resize();
 function pointer(e){
  if(dead||e.button!==0)return;
  const box=renderer.domElement.getBoundingClientRect();
  ndc.set(((e.clientX-box.left)/box.width)*2-1,1-((e.clientY-box.top)/box.height)*2);
  ray.setFromCamera(ndc,cam);const selected=ray.intersectObjects(pickables,false)[0]?.object.userData.station;
  if(selected)onPick(selected);
 }
 const onContextLoss=e=>{e.preventDefault();dispose();onUnavailable('3D 顯示中斷，可切回練習簿或重新開啟。');};
 const tick=(t)=>{
  frame=0;if(dead||doc.hidden){last=0;return;}
  try{
  const dt=last?Math.min(.044,(t-last)/1000):0;last=t;
  let move=dt*6.0,moved=0;
  while(move>0&&index<route.length){
   const p=actor.root.position,[x,z,y]=route[index],dx=x-p.x,dz=z-p.z,d=Math.hypot(dx,dz);
   if(d>.004){yaw=Math.atan2(dx,dz);const step=Math.min(move,d);p.x+=dx*step/d;p.z+=dz*step/d;if(district)p.y+=(y+.038-p.y)*step/d;move-=step;moved+=step;}
   if(Math.hypot(x-p.x,z-p.z)<.004)index++;else break;
  }
  if(!district)actor.root.position.y=.028+raise(actor.root.position.x,actor.root.position.z);
  actor.root.rotation.y+=Math.atan2(Math.sin(yaw-actor.root.rotation.y),Math.cos(yaw-actor.root.rotation.y))*Math.min(1,dt*15);
  actor.animate(t/1000,moved>0,reduced);
  if(wanted&&index>=route.length){const id=wanted;wanted=null;if(district)districtNode=anchors.get(id).id;onArrive(id);}
  const clock=reduced?0:t/1000;
  for(const [i,duck] of ducks.entries()){
   if(district){
    const u=clock*.91-.56*i,x=-3.55+2.25*Math.sin(u),z=10.78+.80*Math.cos(u)+.24*i;
    duck.position.set(x,-1.20+Math.sin(clock*4+i)*.041,z);
    duck.rotation.y=Math.atan2(2.25*Math.cos(u),-.80*Math.sin(u));duck.rotation.z=.10*Math.sin(clock*5+i);
   }else{
    const da=clock*.11-.70-.093*i,[dx,dz]=polar(da,19.77+i*.16);
    duck.position.set(dx,-1.18+Math.sin(clock*4+i)*.032,dz);duck.rotation.y=da+Math.PI*.50;
   }
  }
  if(!district){
  const ba=-clock*.134+1.13,[bx,bz]=polar(ba,21.8);sampan.position.set(bx,-1.13+Math.sin(clock*2)*.046,bz);sampan.rotation.set(Math.sin(clock*1.8)*.023,ba-Math.PI*.50,Math.sin(clock*1.4)*.035);
  const sa=clock*.20+2.1,[sx,sz]=polar(sa,19.3);shuttle.position.set(sx,3.0+Math.sin(clock*1.6)*.33,sz);shuttle.rotation.set(.065,sa+Math.PI*.50,-.11);
  }else{
   const ferry=clock*.32-.54,ferryX=7.27*Math.sin(ferry),ferryZ=10.95+1.10*Math.cos(ferry);
   sampan.position.set(ferryX,-1.13+Math.sin(clock*3)*.073,ferryZ);
   sampan.rotation.set(Math.sin(clock*2)*.032,Math.atan2(7.27*Math.cos(ferry),-1.10*Math.sin(ferry)),Math.sin(clock*3)*.054);
   const fly=clock*.59+.42;
   shuttle.position.set(4.48+3.8*Math.cos(fly),3.18+.27*Math.sin(clock*2.20),-5.61+2.15*Math.sin(fly));
   shuttle.rotation.set(.06,Math.atan2(-3.8*Math.sin(fly),2.15*Math.cos(fly)),-.12);
   fox.rotation.y=foxA-.48+.19*Math.sin(clock*1.8);
   fox.position.x=foxX+.15*Math.sin(clock*1.35);
   fox.position.z=foxZ+.09*Math.cos(clock*1.7);
  }
  const p=actor.root.position;
  target.set(near?p.x*.82:0,near?.45+p.y:0,near?p.z*.82:0);
  const a=reduced||!dt||snapFraming?1:1-Math.exp(-dt*4);snapFraming=false;
  if(district&&!near)target.copy(mapTarget);
  if(district&&near)target.set(p.x,p.y+.54,p.z);
  viewTarget.lerp(target,a);
  if(district){
   const distance=near?Math.max(15.9,10.4/Math.max(.30,cam.aspect)):mapRange;
   preferred.copy(viewTarget).addScaledVector(districtDirection,distance);
   cam.position.lerp(preferred,a);
  }else{
  const fit=Math.max(.95,1.13/Math.max(.4,cam.aspect));
  const scale=near?.54*Math.max(1,.77/Math.max(.4,cam.aspect)):fit;
  cam.position.x+=(viewTarget.x+21*scale-cam.position.x)*a;
  cam.position.y+=(viewTarget.y+39*scale-cam.position.y)*a;
  cam.position.z+=(viewTarget.z+31*scale-cam.position.z)*a;
  }
  cam.lookAt(viewTarget);renderer.render(scene,cam);
  if(!dead)frame=win.requestAnimationFrame(tick);
  }catch(error){dispose();onUnavailable('3D 顯示中斷，可切回練習簿或重新開啟。');console.warn('Chinese 3D renderer interrupted:',error);}
 };
 const wake=()=>{if(!dead&&!doc.hidden&&!frame)frame=win.requestAnimationFrame(tick);};
 doc.addEventListener('visibilitychange',wake);
 renderer.domElement.addEventListener('pointerup',pointer);renderer.domElement.addEventListener('webglcontextlost',onContextLoss);wake();
 cleanupListeners=()=>{
  doc.removeEventListener('visibilitychange',wake);renderer.domElement.removeEventListener('pointerup',pointer);
  renderer.domElement.removeEventListener('webglcontextlost',onContextLoss);
 };
 return {select,setNear(value){near=!!value;onZoom?.(near);},dispose};
 }catch(error){dispose();throw error;}
}
