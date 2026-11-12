import {planEcology,seededRandom,evaluateForaging,ECOLOGY_VERSION} from './ecology-plan.mjs';

/** Standalone authored low-poly ecology. No asset requests, external models, lights, roads or course mutations.
 * Add root to the WORLD scene, not to the rotated GLB root. floor(x, worldZ) returns world Y or null.
 * Call update(elapsedSeconds,{playerPosition,nightFactor}), setReducedMotion(bool), dispose().
 */
export function createEcologyArt(THREE,scene,data,options={}){
  const plan=options.plan||planEcology(data,{grade:options.grade||data.grade,quality:options.lowPower?'low':'normal'});
  const profile=plan.profile,root=new THREE.Group();root.name=ECOLOGY_VERSION;root.userData.ecology=true;
  const ownedGeometry=new Set(),ownedMaterials=new Set(),batches=new Map(),actors=[],patchRecords=[];
  const color=new THREE.Color(),mat4=new THREE.Matrix4(),quat=new THREE.Quaternion(),euler=new THREE.Euler(),vec=new THREE.Vector3(),scale=new THREE.Vector3();
  let disposed=false,reduced=options.reducedMotion===true,mode=['auto','low','static'].includes(options.mode)?options.mode:'auto',lastSeconds=null,visibleSeconds=0;
  const baseGeo={ball:new THREE.IcosahedronGeometry(1,1),rock:new THREE.IcosahedronGeometry(1,0),cylinder:new THREE.CylinderGeometry(1,1,1,7),cone:new THREE.ConeGeometry(1,1,7),box:new THREE.BoxGeometry(1,1,1)};
  for(const g of Object.values(baseGeo))ownedGeometry.add(g);
  const paint=(hex,mult=1)=>{color.setHex(hex).multiplyScalar(mult);return [color.r,color.g,color.b];};
  const getBatch=(target,kind='solid')=>{let all=batches.get(target);if(!all){all=new Map();batches.set(target,all);}if(!all.has(kind))all.set(kind,{position:[],normal:[],color:[]});return all.get(kind);};
  function add(target,geometry,hex,p=[0,0,0],s=[1,1,1],r=[0,0,0],kind='solid'){
    const nonIndex=geometry.index?geometry.toNonIndexed():geometry;
    const b=getBatch(target,kind),pos=nonIndex.getAttribute('position'),norm=nonIndex.getAttribute('normal'),rgb=paint(hex);
    mat4.compose(vec.set(...p),quat.setFromEuler(euler.set(...r)),scale.set(...s));const normalMat=new THREE.Matrix3().getNormalMatrix(mat4),v=new THREE.Vector3(),n=new THREE.Vector3();
    for(let i=0;i<pos.count;i++){v.fromBufferAttribute(pos,i).applyMatrix4(mat4);n.fromBufferAttribute(norm,i).applyMatrix3(normalMat).normalize();b.position.push(v.x,v.y,v.z);b.normal.push(n.x,n.y,n.z);b.color.push(...rgb);}if(nonIndex!==geometry)nonIndex.dispose();
  }
  const ball=(t,c,p,s,r=[0,0,0])=>add(t,baseGeo.ball,c,p,s,r);
  const rock=(t,c,p,s,r=[0,0,0])=>add(t,baseGeo.rock,c,p,s,r);
  const box=(t,c,p,s,r=[0,0,0],kind)=>add(t,baseGeo.box,c,p,s,r,kind);
  const cone=(t,c,p,s,r=[0,0,0])=>add(t,baseGeo.cone,c,p,s,r);
  function branch(t,c,a,b,r1=.08,r2=r1*.6){const mid=new THREE.Vector3(...a).add(new THREE.Vector3(...b)).multiplyScalar(.5),delta=new THREE.Vector3(...b).sub(new THREE.Vector3(...a)),geo=new THREE.CylinderGeometry(r2,r1,delta.length(),6);const q=new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0,1,0),delta.normalize()),rot=new THREE.Euler().setFromQuaternion(q);add(t,geo,c,mid.toArray(),[1,1,1],rot.toArray().slice(0,3));geo.dispose();}
  const darker=(c,m)=>{color.setHex(c).multiplyScalar(m);return color.getHex();};
  function leaf(t,c,origin,length,width,yaw,bend=.3){
    const positions=[],v=[],steps=5;
    for(let i=0;i<=steps;i++){const u=i/steps,w=width*Math.sin(Math.PI*u)*(.9+.1*u);v.push([-w,bend*Math.sin(Math.PI*u),length*u],[w,bend*Math.sin(Math.PI*u),length*u]);}
    for(let i=0;i<steps;i++)for(const ix of [i*2,i*2+1,i*2+2,i*2+1,i*2+3,i*2+2])positions.push(...v[ix]);
    const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));g.computeVertexNormals();add(t,g,c,origin,[1,1,1],[0,yaw,0],'leaf');g.dispose();
  }
  function fern(t,x,z,size,rng){
    for(let i=0;i<7;i++){const a=i*Math.PI*2/7+rng()*.2,len=size*(.65+rng()*.35);for(let j=1;j<=5;j++){const u=j/6,rr=len*u,y=.07+Math.sin(u*Math.PI)*size*.55,px=x+Math.sin(a)*rr,pz=z+Math.cos(a)*rr;for(const side of [-1,1])leaf(t,profile.greens[(i+j)%3],[px,y,pz],len*.28*(1-u*.5),size*.045,a+side*1.0,.08);}}
  }
  function grass(t,x,z,size,rng){for(let i=0;i<5;i++){const a=rng()*Math.PI*2;leaf(t,profile.greens[1+i%2],[x+(rng()-.5)*.15,0,z+(rng()-.5)*.15],size*(.55+rng()*.45),size*.035,a,size*.7);}}
  function flower(t,x,z,size,rng,c=profile.flowers[Math.floor(rng()*profile.flowers.length)]){
    const y=size*(.65+rng()*.35);branch(t,profile.greens[0],[x,0,z],[x+.04,y,z],.025,.018);leaf(t,profile.greens[1],[x,y*.3,z],size*.32,.07,rng()*6,.13);
    for(let i=0;i<5;i++){const a=i*Math.PI*2/5;ball(t,c,[x+Math.sin(a)*size*.13,y,z+Math.cos(a)*size*.13],[size*.12,size*.055,size*.14],[0,a,0]);}ball(t,0xc7a13f,[x,y+.018,z],[size*.065,size*.07,size*.065]);
  }
  function stone(t,x,z,size,rng){rock(t,profile.stone,[x,size*.25,z],[size*.65,size*.42,size*.49],[rng()*.4,rng()*6,rng()*.2]);rock(t,darker(profile.stone,.7),[x+size*.22,size*.1,z-size*.2],[size*.45,size*.19,size*.36]);if(rng()>.45)ball(t,profile.greens[0],[x-size*.12,size*.49,z],[size*.24,size*.05,size*.17]);}
  function tree(t,x,z,height,type,rng){
    const trunk=0x71513a,h=height;
    branch(t,trunk,[x,0,z],[x+.09*h,h*.68,z-.025*h],h*.075,h*.034);
    for(let i=0;i<4;i++){const a=i*Math.PI/2+.4;branch(t,darker(trunk,.8),[x+Math.sin(a)*h*.16,.035,z+Math.cos(a)*h*.16],[x,h*.2,z],h*.027,h*.05);}
    if(type==='palm'){
      for(let i=0;i<8;i++){const a=i*Math.PI/4;leaf(t,profile.greens[i%3],[x+.09*h,h*.7,z],h*.47,h*.09,a,h*.19);for(let j=1;j<4;j++){const u=j/5;leaf(t,profile.greens[i%3],[x+.09*h+Math.sin(a)*u*h*.4,h*.7+Math.sin(u*Math.PI)*h*.19,z+Math.cos(a)*u*h*.4],h*.17,h*.025,a+.85,h*.02);}}
      for(let i=0;i<3;i++)ball(t,0x8c7048,[x+.09*h+(i-1)*.17,h*.66,z+.12],[.13,.18,.13]);return;
    }
    if(type==='conifer'||type==='cedar'){
      for(let i=0;i<4;i++){const y=h*(.36+i*.15),radius=h*(.29-i*.05);branch(t,trunk,[x,y-.08,z],[x+radius*.8,y,z],h*.018,h*.008);if(type==='conifer')cone(t,profile.greens[i%3],[x+.06*h,y+.15*h,z],[radius,h*.45,radius*.86],[0,i*.7,0]);else for(let j=0;j<3;j++){const a=j*2.1+i;ball(t,profile.greens[(i+j)%3],[x+Math.sin(a)*radius*.4,y,z+Math.cos(a)*radius*.4],[radius*.88,h*.12,radius*.66],[0,a,.1]);}}
      return;
    }
    const canopyColor=type==='blossom'?0xdba1ad:type==='maple'?0xa8693e:profile.greens[1];
    for(let i=0;i<6;i++){const a=i*2.39996,spread=h*(i===0?.02:.2),cy=h*(.63+.14*rng()),cx=x+Math.sin(a)*spread,cz=z+Math.cos(a)*spread;
      branch(t,trunk,[x+.05*h,h*.46,z],[cx,cy,cz],h*.025,h*.012);
      const c=i%3===0?darker(canopyColor,.77):i%3===1?canopyColor:darker(canopyColor,1.14);
      ball(t,c,[cx,cy,cz],[h*.23,h*(type==='willow'?.27:.2),h*.23],[0,a,.12]);
      if(type==='willow')for(let j=0;j<3;j++){const aa=a+j*2;ball(t,profile.greens[j%3],[cx+Math.sin(aa)*h*.18,cy-h*.2,cz+Math.cos(aa)*h*.18],[h*.055,h*.22,h*.06],[.12,aa,.13]);}
      if(type==='orchard')for(let j=0;j<3;j++){const aa=a+j*2;ball(t,0xd87940,[cx+Math.sin(aa)*h*.19,cy-h*.07,cz+Math.cos(aa)*h*.19],[h*.032,h*.035,h*.032]);}
    }
    if(type==='mangrove')for(let i=0;i<5;i++){const a=i*1.25;branch(t,trunk,[x,h*.35,z],[x+Math.sin(a)*h*.27,.02,z+Math.cos(a)*h*.27],h*.03,h*.018);}
  }
  function mound(t,radius,height,rng){
    const count=13,rings=[{r:1,y:0},{r:.92,y:.23},{r:.76,y:.65},{r:.49,y:1}],positions=[],colors=[];
    const jitter=Array.from({length:count},()=>.87+rng()*.18),verts=rings.map(r=>Array.from({length:count},(_,i)=>{const a=i/count*Math.PI*2;return [Math.sin(a)*radius*r.r*jitter[i],height*r.y*(.94+rng()*.12),Math.cos(a)*radius*r.r*jitter[i]];}));
    const tri=(a,b,c,hex)=>{positions.push(...a,...c,...b);for(let k=0;k<3;k++)colors.push(...paint(hex));};
    for(let k=0;k<rings.length-1;k++)for(let i=0;i<count;i++){const j=(i+1)%count,c=k===2?profile.greens[i%3]:darker(profile.stone,.68+k*.16+(i%2)*.08);tri(verts[k][i],verts[k+1][i],verts[k][j],c);tri(verts[k][j],verts[k+1][i],verts[k+1][j],c);}
    for(let i=0;i<count;i++)tri(verts.at(-1)[i],[0,height*1.04,0],verts.at(-1)[(i+1)%count],profile.greens[1+i%2]);
    const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));g.setAttribute('color',new THREE.Float32BufferAttribute(colors,3));g.computeVertexNormals();const b=getBatch(t);b.position.push(...positions);b.normal.push(...g.getAttribute('normal').array);b.color.push(...colors);g.dispose();
  }
  function waterGarden(t,r,rng){
    // Opaque inset water and a continuous pebble lip, no transparency sorting or neon glow.
    const basin=new THREE.CylinderGeometry(r*.82,r*.86,.09,17);add(t,basin,profile.water,[0,.045,0],[1,1,.72],[0,0,0],'water');basin.dispose();
    for(let i=0;i<18;i++){const a=i/18*Math.PI*2;stone(t,Math.sin(a)*r*.86,Math.cos(a)*r*.62,.26+rng()*.25,rng);}
    for(let i=0;i<7;i++){const a=i*2.4,rr=r*(.25+rng()*.4);ball(t,profile.greens[1],[Math.sin(a)*rr,.11,Math.cos(a)*rr*.7],[.2,.026,.17]);if(i%3===0)flower(t,Math.sin(a)*rr,Math.cos(a)*rr*.7,.3,rng,0xe3c7cc);}
    for(let i=0;i<8;i++){const a=.2+i*.19,x=Math.sin(a)*r*.77,z=Math.cos(a)*r*.6;branch(t,0x74804a,[x,0,z],[x,.65+rng()*.5,z],.025,.018);ball(t,0x7a5940,[x,.9,z],[.055,.18,.055]);grass(t,x,z,.85,rng);}
  }
  function building(t,kind,rng){
    const wood=0x8c6748,dark=0x584c39,cream=0xc6b99a,roof=plan.grade===3?0x426d5d:plan.grade===6?0x5c6e64:0x795e48;
    box(t,darker(profile.stone,.9),[0,.12,0],[2.65,.24,2.1]);
    const post=(x,z,h=2.1)=>box(t,wood,[x,h/2+.2,z],[.14,h,.14]);
    if(kind==='pergola'){
      for(const x of [-1,1])for(const z of [-.7,.7])post(x,z,2.05);
      for(let i=0;i<7;i++)box(t,wood,[0,2.35,-.88+i*.29],[2.5,.13,.09]);for(const x of [-1,1])box(t,dark,[x,2.22,0],[.16,.18,2.05]);
      for(let i=0;i<12;i++){const a=i*2.4;ball(t,profile.greens[i%3],[Math.sin(a)*1.08,2.4+Math.sin(i)*.08,Math.cos(a)*.7],[.38,.18,.32]);if(i%3===0)flower(t,Math.sin(a),Math.cos(a)*.67,.27,rng,profile.flowers[1]);}
      box(t,wood,[0,.59,.42],[1.5,.14,.42]);for(const x of [-.52,.52])box(t,dark,[x,.33,.42],[.13,.5,.24]);
      return;
    }
    if(kind==='lookout'||kind==='birdhide'){
      const lift=kind==='lookout'?.8:.28;for(const x of [-1,1])for(const z of [-.7,.7])post(x,z,2.2+lift);
      box(t,wood,[0,lift,0],[2.35,.16,1.9]);for(const z of [-.76,.76])for(let i=0;i<3;i++)box(t,wood,[0,lift+.45+i*.22,z],[2.2,.17,.1]);
      // Open horizontal viewing slit, plus a broad gabled roof and readable bench.
      for(const x of [-1.08,1.08])box(t,cream,[x,lift+1.05,0],[.1,1.25,1.5]);
      if(kind==='lookout')for(let i=0;i<4;i++)box(t,wood,[0,lift*(i+1)/4,1.5-i*.14],[.86,.13,.3]);
      roofGable(t,roof,2.5+lift,1.5,1.15);box(t,wood,[0,lift+.4,-.4],[1.5,.13,.38]);
      return;
    }
    box(t,kind==='greenhouse'?0x729686:cream,[0,1.12,0],[2.2,1.8,1.6]);
    for(const x of [-1.12,1.12])for(const z of [-.82,.82])post(x,z,2.0);
    box(t,dark,[0,.85,.817],[.55,1.4,.07]);box(t,wood,[0,.83,.87],[.43,1.25,.06]);ball(t,0xd3b26b,[.14,.84,.92],[.035,.035,.035]);
    for(const x of [-.7,.7]){box(t,dark,[x,1.3,.84],[.56,.62,.06]);box(t,0xa3bbaa,[x,1.3,.88],[.44,.5,.025],undefined,'window');box(t,wood,[x,1.3,.91],[.04,.5,.025]);box(t,wood,[x,1.3,.91],[.45,.035,.025]);box(t,wood,[x,.96,.96],[.62,.12,.24]);const blooms=new THREE.Group();blooms.position.y=1.02;t.add(blooms);for(let k=0;k<3;k++)flower(blooms,x+(k-1)*.16,1.0,.25,rng);}
    roofGable(t,roof,2.08,1.46,1.1);
    if(kind==='greenhouse'){
      for(const x of [-.73,0,.73])box(t,0xabc5b2,[x,2.34,0],[.59,.045,1.7],[0,0,x<0?-.44:.44],'window');
      for(const x of [-1.14,1.14])for(const z of [-.5,0,.5])box(t,0xa4c3ac,[x,1.27,z],[.035,.92,.39],undefined,'window');
      for(let i=0;i<4;i++){const x=-.75+i*.5;box(t,0x9b6d4a,[x,.35,-1.1],[.34,.28,.32]);fern(t,x,-1.1,.45,rng);}
    }else if(kind==='ranger'){box(t,profile.stone,[.67,2.5,-.4],[.35,.9,.35]);box(t,darker(profile.stone,.8),[.67,2.97,-.4],[.43,.1,.43]);}
    else {for(let i=0;i<3;i++){box(t,wood,[-1.35,.25+i*.2,.3],[.34,.17,.5]);ball(t,0xb49954,[-1.35,.8,.3],[.19,.16,.22]);}}
  }
  function roofGable(t,c,y,w,d){for(const side of [-1,1])box(t,darker(c,side===1?.82:1),[side*w*.46,y+.28,0],[w*1.07,.14,d*2],[0,0,-side*.42]);box(t,darker(c,.7),[0,y+.59,0],[.14,.14,d*2+.1]);for(let i=0;i<7;i++)for(const side of [-1,1])box(t,darker(c,1.09),[side*w*.46,y+.36,-d+i*d/3],[w*1.06,.035,.035],[0,0,-side*.42]);}
  function fitFootprint(group,radius){
    group.updateMatrixWorld(true);const inv=group.matrixWorld.clone().invert(),p=new THREE.Vector3();let extent=0;
    group.traverse(child=>{const kinds=batches.get(child);if(!kinds)return;const matrix=inv.clone().multiply(child.matrixWorld);for(const b of kinds.values())for(let i=0;i<b.position.length;i+=3){p.set(b.position[i],b.position[i+1],b.position[i+2]).applyMatrix4(matrix);extent=Math.max(extent,Math.hypot(p.x,p.z));}});
    const factor=extent>radius-.04?(radius-.04)/extent:1;group.scale.multiplyScalar(factor);group.userData.footprintRadius=extent*factor;return extent*factor;
  }
  function patch(item){
    const rng=seededRandom(item.seed),g=new THREE.Group();g.name=item.id;const [x,z,h]=item.p,base=options.floor?options.floor(x,-z):h;if(!Number.isFinite(base))return;
    g.position.set(x,base+.025,-z);g.rotation.y=item.yaw;root.add(g);const r=item.radius;
    switch(item.kind){
      case 'landmark':building(g,item.landmark,rng);for(const side of [-1,1]){fern(g,side*1.7,-.6,.6,rng);for(let i=0;i<3;i++)flower(g,side*1.6,.2+i*.3,.4,rng);}break;
      case 'knoll':{const h=1.1+plan.grade*.16;mound(g,r*.93,h,rng);for(let i=0;i<4;i++){const a=i*2.4;stone(g,Math.sin(a)*r*.75,Math.cos(a)*r*.75,.5+rng()*.4,rng);}const treeGroup=new THREE.Group();treeGroup.position.y=h;g.add(treeGroup);tree(treeGroup,0,0,2.1+plan.grade*.14,item.tree,rng);break;}
      case 'grove':{for(let i=0;i<3;i++){const a=i*2.4,rr=r*.39;tree(g,Math.sin(a)*rr,Math.cos(a)*rr,2.6+rng()*1.5,item.tree,rng);}for(let i=0;i<5;i++){const a=rng()*6.28;fern(g,Math.sin(a)*r*.62,Math.cos(a)*r*.62,.5,rng);}break;}
      case 'watergarden':waterGarden(g,r,rng);break;
      case 'meadow':for(let i=0;i<22;i++){const a=i*2.39996,rr=r*Math.sqrt((i+.5)/22)*.82;if(i%3===0)grass(g,Math.sin(a)*rr,Math.cos(a)*rr,.5,rng);else flower(g,Math.sin(a)*rr,Math.cos(a)*rr,.4+rng()*.35,rng);}break;
      case 'fern':fern(g,0,0,r*.9,rng);break;
      case 'flowers':for(let i=0;i<5;i++){const a=i*2.4;flower(g,Math.sin(a)*r*.45,Math.cos(a)*r*.45,.35+rng()*.3,rng);}break;
      case 'stone':stone(g,0,0,r*1.15,rng);grass(g,r*.5,r*.3,.3,rng);break;
      case 'grass':for(let i=0;i<4;i++){const a=i*2.4;grass(g,Math.sin(a)*r*.4,Math.cos(a)*r*.4,.4+rng()*.2,rng);}break;
      case 'sapling':tree(g,0,0,1.3+rng()*.45,item.tree,rng);break;
    }
    fitFootprint(g,r);patchRecords.push({item,root:g});
  }
  // Animals are silhouette-designed rather than the same sphere with a new colour.
  function creature(item){
    const g=new THREE.Group(),body=new THREE.Group(),head=new THREE.Group(),tail=new THREE.Group(),left=new THREE.Group(),right=new THREE.Group();g.name=item.id;g.add(body,head,tail,left,right);
    const dark=0x303d33,ivory=0xddd5b9,brown=0x9d744c;let winged=false;
    const eye=(x,y,z)=>{for(const s of [-1,1])ball(head,dark,[s*x,y,z],[.028,.035,.028]);};
    const legs=(c,y=.16,len=.3)=>{for(const side of [-1,1])for(const z of [-.23,.23])branch(side<0?left:right,c,[side*.2,y+len,z],[side*.2,y,z],.045,.035);};
    if(['butterfly','bee','dragonfly'].includes(item.kind)){
      ball(body,item.kind==='bee'?0xc49c39:dark,[0,0,0],[.07,.07,.23]);ball(head,dark,[0,.015,.23],[.09,.08,.09]);
      for(const side of [-1,1]){const w=side<0?left:right;if(item.kind==='butterfly'){ball(w,profile.flowers[(item.seed+1)%3],[side*.25,.015,.1],[.3,.035,.25],[0,side*.25,0]);ball(w,profile.flowers[item.seed%3],[side*.2,.015,-.17],[.23,.035,.2]);ball(w,ivory,[side*.33,.05,.15],[.05,.015,.05]);}else{for(const z of [-.12,.12])ball(w,0xb6d1bd,[side*.25,.025,z],[.27,.018,item.kind==='dragonfly'?.055:.1],[0,side*.2,0]);}}
      if(item.kind==='bee')for(const z of [-.12,0,.1])ball(body,dark,[0,0,z],[.075,.075,.025]);else if(item.kind==='dragonfly')ball(tail,0x4b8794,[0,0,-.4],[.035,.035,.28]);winged=true;
    }else if(['duck','sparrow','heron','owl'].includes(item.kind)){
      const heron=item.kind==='heron',owl=item.kind==='owl',duck=item.kind==='duck',c=heron?0xb4c1ba:owl?0x8c7357:duck?0x6b8d68:0x987556;
      ball(body,c,[0,heron?.65:.4,0],[.22,heron?.3:.26,.36]);head.position.set(0,heron?1.12:.67,.23);ball(head,owl?0xab9677:c,[0,0,0],[owl?.25:.16,owl?.24:.18,.18]);
      if(heron)branch(body,ivory,[0,.8,.12],[0,1.15,.23],.055,.045);
      if(owl){for(const side of [-1,1]){ball(head,ivory,[side*.105,.02,.14],[.09,.12,.05]);ball(head,dark,[side*.105,.03,.18],[.039,.045,.025]);cone(head,c,[side*.16,.2,0],[.08,.18,.1],[0,0,-side*.3]);}}else eye(.12,.025,.1);
      cone(head,duck?0xc49a48:0xba8d42,[0,-.03,heron?.3:.2],[duck?.12:.055,heron?.34:.19,.055],[Math.PI/2,0,0]);
      for(const side of [-1,1]){const w=side<0?left:right;w.position.set(side*.19,heron?.7:.43,0);ball(w,darker(c,.75),[side*(item.flying?.22:.08),0,-.06],item.flying?[.3,.035,.19]:[.1,.16,.3],[0,0,-side*.15]);branch(body,0x9b7650,[side*.12,0,.1],[side*.12,heron?.52:.23,0],.025,.025);}
      if(item.flying)winged=true;ball(tail,darker(c,.8),[0,heron?.63:.43,-.34],[.13,.075,.22],[.25,0,0]);
    }else if(['tortoise','frog','crab','hedgehog'].includes(item.kind)){
      const turtle=item.kind==='tortoise',frog=item.kind==='frog',crab=item.kind==='crab',c=crab?0xaf7659:frog?0x719349:turtle?0x75845d:0x8a765d;
      ball(body,c,[0,.22,0],[.35,.23,.43]);head.position.set(0,.22,.37);ball(head,turtle?0x91a473:c,[0,0,0],[.17,.14,.2]);eye(.12,.05,.13);
      if(turtle){for(let i=0;i<6;i++){const a=i*Math.PI/3;rock(body,i%2?0x536849:0x8b936c,[Math.sin(a)*.21,.39,Math.cos(a)*.25],[.12,.06,.13]);}legs(0x91a473,.02,.18);}else if(crab){for(const side of [-1,1])for(let i=0;i<3;i++)branch(side<0?left:right,c,[side*.22,.2,(i-1)*.19],[side*.5,.04,(i-1)*.22],.035,.02);for(const side of [-1,1]){branch(head,c,[side*.25,0,0],[side*.4,.12,.2],.04);ball(head,c,[side*.4,.15,.27],[.1,.1,.14]);}}else if(frog){for(const side of [-1,1]){ball(side<0?left:right,darker(c,.8),[side*.3,.1,-.15],[.2,.13,.24]);ball(head,ivory,[side*.11,.12,.07],[.08,.08,.08]);ball(head,dark,[side*.11,.13,.13],[.03,.04,.02]);}}else{for(let i=0;i<17;i++){const a=i*2.4;cone(body,i%2?0x5d5646:0xb1a389,[Math.sin(a)*.27,.34+(i%3)*.04,Math.cos(a)*.33],[.055,.17,.055],[Math.sin(a)*.65,0,-Math.cos(a)*.65]);}legs(brown,.01,.16);}
    }else{
      const deer=item.kind==='deer',fox=item.kind==='fox',rabbit=item.kind==='rabbit',c=fox?0xb76f3e:deer?0xb18e64:rabbit?0xbaad95:0x9d7654;
      const h=deer?.76:.4;ball(body,c,[0,h,0],[deer?.29:.23,deer?.33:.24,deer?.5:.36]);head.position.set(0,h+.21,.38);ball(head,c,[0,0,0],[.19,.21,.25]);ball(head,fox?ivory:darker(c,1.08),[0,-.08,.2],[.12,.1,.16]);ball(head,dark,[0,-.045,.33],[.055,.045,.04]);eye(.15,.04,.14);
      for(const side of [-1,1]){ball(head,c,[side*.13,rabbit?.34:.2,-.02],[rabbit?.07:.075,rabbit?.26:.15,.07],[0,0,-side*.22]);ball(head,0xbc8c7e,[side*.13,rabbit?.34:.21,.04],[.035,rabbit?.18:.07,.016],[0,0,-side*.22]);}
      if(deer){for(const side of [-1,1]){branch(head,0x6e5a40,[side*.12,.18,-.02],[side*.2,.57,-.05],.027,.015);branch(head,0x6e5a40,[side*.17,.39,-.04],[side*.3,.49,.03],.02,.012);}}
      for(const side of [-1,1])for(const z of [-.24,.24]){const leg=side<0?left:right;branch(leg,c,[side*.17,h-.1,z],[side*.17,.06,z+.035],deer?.055:.075,.045);ball(leg,darker(c,.55),[side*.17,.055,z+.07],[.07,.055,.11]);}
      if(rabbit)ball(tail,ivory,[0,h,-.37],[.12,.13,.13]);else {tail.position.set(0,h,-.3);ball(tail,c,[0,fox?.03:.22,-.22],[fox?.17:.14,fox?.13:.28,.3],[fox?.25:-.6,0,0]);ball(tail,fox?ivory:darker(c,.8),[0,fox?.04:.38,-.43],[.12,.1,.16]);}
      if(deer)for(let i=0;i<8;i++){const a=i*2.4;ball(body,ivory,[Math.sin(a)*.27,h+.12,Math.cos(a)*.35],[.035,.028,.03]);}
    }
    fitFootprint(g,item.radius);const initial=evaluateForaging(item,0),[x,z,h]=initial.p,y=options.floor?options.floor(x,-z):h;if(!Number.isFinite(y))return;g.position.set(x,y+(item.flying?1.4:0),-z);g.rotation.y=initial.heading;
    root.add(g);actors.push({item,root:g,body,head,tail,left,right,winged,headBase:head.position.clone(),elapsed:0});
  }
  for(const item of plan.patches)patch(item);for(const item of plan.actors)creature(item);
  // Merge per-material per-patch first, then merge static world dressing globally. Animals keep articulated joints.
  function material(kind){const m=new THREE.MeshStandardMaterial({vertexColors:true,roughness:kind==='water'?.47:kind==='window'?.65:.94,metalness:0,flatShading:true,side:kind==='leaf'?THREE.DoubleSide:THREE.FrontSide});if(kind==='window'){m.emissive.setHex(0xd8aa59);m.emissiveIntensity=.02;}ownedMaterials.add(m);return m;}
  const materials=new Map();const getMat=k=>{if(!materials.has(k))materials.set(k,material(k));return materials.get(k);};
  root.updateMatrixWorld(true);const staticParents=new Set();for(const {root:g} of patchRecords)g.traverse(o=>staticParents.add(o));const merged=new Map();
  for(const [parent,kinds] of batches)for(const [kind,b] of kinds){
    let output=b,target=parent;
    if(staticParents.has(parent)){if(!merged.has(kind))merged.set(kind,{position:[],normal:[],color:[]});output=merged.get(kind);const p=new THREE.Vector3(),n=new THREE.Vector3(),nm=new THREE.Matrix3().getNormalMatrix(parent.matrixWorld);for(let i=0;i<b.position.length;i+=3){p.set(...b.position.slice(i,i+3)).applyMatrix4(parent.matrixWorld);n.set(...b.normal.slice(i,i+3)).applyMatrix3(nm).normalize();output.position.push(p.x,p.y,p.z);output.normal.push(n.x,n.y,n.z);}output.color.push(...b.color);continue;}
    finish(target,kind,output);
  }
  function finish(target,kind,b){if(!b.position.length)return;const g=new THREE.BufferGeometry();for(const k of ['position','normal','color'])g.setAttribute(k,new THREE.Float32BufferAttribute(b[k],3));g.computeBoundingSphere();ownedGeometry.add(g);const m=new THREE.Mesh(g,getMat(kind));m.name=`ecology-${kind}`;m.castShadow=kind!=='water';m.receiveShadow=true;target.add(m);}
  for(const [kind,b] of merged)finish(root,kind,b);batches.clear();scene.add(root);
  function update(seconds,{playerPosition=null,nightFactor=0}={}){
    if(disposed||!Number.isFinite(seconds))return false;
    const dt=lastSeconds===null?0:Math.max(0,Math.min(.1,seconds-lastSeconds));lastSeconds=seconds;if(!reduced&&mode!=='static')visibleSeconds+=dt;
    const windowMat=materials.get('window');if(windowMat)windowMat.emissiveIntensity=.02+Math.max(0,Math.min(1,nightFactor))*.48;
    for(const a of actors){const {item}=a;const near=playerPosition&&Math.hypot(playerPosition.x-a.root.position.x,playerPosition.z-a.root.position.z)<2.1+item.radius;
      if(!near&&!reduced&&mode!=='static')a.elapsed+=dt;const p=evaluateForaging(item,a.elapsed),[x,z,h]=p.p,ground=options.floor?options.floor(x,-z):h;
      if(!Number.isFinite(ground)){a.root.visible=false;continue;}a.root.visible=true;
      const t=visibleSeconds+item.phase,moving=p.moving&&!near&&!reduced&&mode!=='static',hover=item.flying?1.25+Math.sin(t*.8)*.13:0;
      a.root.position.set(x,ground+hover+(item.kind==='frog'&&moving?Math.max(0,Math.sin(t*4))*.12:0),-z);
      const delta=Math.atan2(Math.sin(p.heading-a.root.rotation.y),Math.cos(p.heading-a.root.rotation.y));a.root.rotation.y+=delta*Math.min(1,dt*5);
      a.head.rotation.x=!moving&&!reduced&&mode!=='static'?Math.sin(t*1.5)*.13:0;a.tail.rotation.y=reduced||mode==='static'?0:Math.sin(t*2)*.13;
      if(a.winged){a.left.rotation.z=reduced||mode==='static'?-.25:Math.sin(t*(item.kind==='butterfly'?9:24))*.9;a.right.rotation.z=-a.left.rotation.z;}
      else {a.left.rotation.x=moving?Math.sin(t*(item.kind==='deer'?5:7))*.17:0;a.right.rotation.x=-a.left.rotation.x;}
    }
    return true;
  }
  const triangles=[...ownedGeometry].reduce((n,g)=>n+(g.index?g.index.count:g.getAttribute('position')?.count||0)/3,0);
  return {root,plan,version:ECOLOGY_VERSION,update,get active(){return !disposed&&!reduced&&mode!=='static'&&actors.length>0;},get interval(){return options.lowPower||mode==='low'?1000/15:1000/30;},get seconds(){return visibleSeconds;},setMode(value){if(disposed||!['auto','low','static'].includes(value))return false;mode=value;lastSeconds=null;return true;},getAdditionalObstacles:()=>patchRecords.filter(p=>['landmark','knoll','grove','stone','sapling','watergarden'].includes(p.item.kind)).map(p=>({x:p.item.p[0],y:p.item.p[1],r:p.item.radius,source:p.item.id})),getFootprints:()=>[...patchRecords.map(p=>({id:p.item.id,radius:p.root.userData.footprintRadius,reserved:p.item.radius})),...actors.map(a=>({id:a.item.id,radius:a.root.userData.footprintRadius,reserved:a.item.radius}))],getStats:()=>({patches:patchRecords.length,actors:actors.length,drawCalls:merged.size+actors.reduce((n,a)=>{let c=0;a.root.traverse(o=>{if(o.isMesh)c++;});return n+c;},0),triangles:Math.round(triangles),profile:profile.name,disposed}),setReducedMotion(value){reduced=value===true;lastSeconds=null;},pause(){lastSeconds=null;},dispose(){if(disposed)return;disposed=true;root.removeFromParent();for(const g of ownedGeometry)g.dispose();for(const m of ownedMaterials)m.dispose();ownedGeometry.clear();ownedMaterials.clear();actors.length=0;patchRecords.length=0;}};
}
