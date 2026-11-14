/** Original geometry-only sky candidates. Own all resources; no source-world edits. */
export function createSkyModel(T,kind){
 if(!['pterosaur','alien-ray','survey-satellite','round-balloon'].includes(kind))throw Error('Unknown sky model');
 const root=new T.Group();root.name='Sky_'+kind;const joints=[],geometries=new Set(),materials=new Set();
 const mat=(name,color,extra={})=>{const m=new T.MeshStandardMaterial({name,color,roughness:.72,...extra});materials.add(m);return m;};
 const clay=mat('warm-clay','#aa7154'),cream=mat('warm-ivory','#eddbb5'),dark=mat('eyes','#172b2e',{roughness:.35}),green=mat('leaf-teal','#357d78'),glow=mat('soft-organic-light','#b1d7a0',{emissive:'#548b69',emissiveIntensity:.25}),metal=mat('warm-probe-shell','#c9c6ac',{metalness:.5,roughness:.4}),blue=mat('solar-cells','#244d72',{metalness:.35,roughness:.32}),wood=mat('woven-basket','#956542');
 function mesh(name,g,m,p=[0,0,0],s=[1,1,1],parent=root){geometries.add(g);const o=new T.Mesh(g,m);o.name=name;o.position.set(...p);o.scale.set(...s);parent.add(o);return o;}
 const sphere=(name,m,p,s,parent=root)=>mesh(name,new T.SphereGeometry(1,40,28),m,p,s,parent);
 const tube=(name,points,r,m,parent=root)=>mesh(name,new T.TubeGeometry(new T.CatmullRomCurve3(points.map(p=>new T.Vector3(...p))),32,r,10,false),m,[0,0,0],[1,1,1],parent);
 function wing(side,m,span){const joint=new T.Group();joint.position.set(side*.18,0,.15);joint.name='FinJoint_'+side;root.add(joint);joints.push({node:joint,side,axis:'z',amplitude:kind==='pterosaur'?.32:.18});const p=[],indices=[],nu=48,nv=10;
  for(let i=0;i<=nu;i++)for(let j=0;j<=nv;j++){const u=i/nu,v=j/nv,lead=.7-1.25*u+.18*Math.sin(Math.PI*u),trail=-.7-.12*u+.11*Math.sin(u*Math.PI*3);p.push(side*span*u,.18*Math.sin(Math.PI*u)*Math.sin(Math.PI*v),lead+(trail-lead)*v);}
  for(let i=0;i<nu;i++)for(let j=0;j<nv;j++){const a=i*(nv+1)+j,b=a+nv+1;indices.push(a,b,a+1,b,b+1,a+1);}const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(p,3));g.setIndex(indices);g.computeVertexNormals();m.side=T.DoubleSide;mesh('Membrane_'+side,g,m,[0,0,0],[1,1,1],joint);
  for(const u of [.22,.44,.67,.88])tube('WingRib_'+side+'_'+u,[[0,0,.55],[side*span*u*.5,.07,.5-u*.3],[side*span*u,.015,-.67-u*.08]],.024,kind==='pterosaur'?clay:green,joint);
 }
 if(kind==='pterosaur'){
  sphere('Body',clay,[0,0,0],[.32,.36,.9]);sphere('Breast',cream,[0,-.11,.18],[.25,.23,.68]);wing(-1,cream,3.25);wing(1,cream,3.25);
  tube('Neck',[[0,.1,.6],[0,.42,1.02],[0,.7,1.35]],.18,clay);sphere('Head',clay,[0,.7,1.43],[.24,.23,.39]);const beak=mesh('LongBeak',new T.ConeGeometry(.17,.85,40),cream,[0,.66,1.99]);beak.rotation.x=Math.PI/2;
  const crest=mesh('HeadCrest',new T.ConeGeometry(.17,.85,32),clay,[0,.84,.99],[.65,1,1]);crest.rotation.x=-Math.PI/2-.23;
  for(const side of [-1,1]){sphere('Eye_'+side,dark,[side*.216,.77,1.58],[.047,.058,.06]);tube('Leg_'+side,[[side*.15,-.15,-.45],[side*.21,-.42,-.64],[side*.2,-.46,-.94]],.045,clay);for(const dx of [-.045,0,.045])tube('Claw',[[side*.2+dx,-.46,-.91],[side*.2+dx,-.49,-1.1]],.014,cream);}
  tube('Tail',[[0,0,-.75],[0,.03,-1.15],[0,.1,-1.6]],.055,clay);
 }else if(kind==='alien-ray'){
  sphere('OrganicBody',green,[0,0,0],[.54,.22,.93]);sphere('SoftBelly',cream,[0,-.12,.06],[.43,.12,.72]);wing(-1,glow,2.18);wing(1,glow,2.18);tube('CurvedTail',[[0,0,-.7],[.1,.06,-1.5],[-.18,.14,-2.3],[.12,.25,-2.8]],.04,green);
  for(const side of [-1,1]){sphere('Eye_'+side,dark,[side*.28,.16,.6],[.08,.06,.12]);tube('Feelers',[[side*.26,.04,.77],[side*.43,.05,1.15],[side*.52,.19,1.23]],.028,glow);for(let i=0;i<8;i++)sphere('NaturalSpot',glow,[side*(.45+i*.15),.025,.42-i*.1],[.034,.025,.046]);}
 }else if(kind==='survey-satellite'){
  const bus=mesh('HexagonalInstrumentBus',new T.CylinderGeometry(.52,.52,.85,6,1),metal);bus.rotation.x=Math.PI/2;
  for(const side of [-1,1]){tube('PanelBoom',[[0,0,0],[side*.95,0,0]],.045,metal);const panel=new T.Group();panel.position.x=side*1.5;root.add(panel);joints.push({node:panel,axis:'y',side,amplitude:.12});mesh('SolarBacking',new T.BoxGeometry(1.35,.055,1.05),metal,[0,0,0],[1,1,1],panel);for(let x=0;x<6;x++)for(let z=0;z<4;z++)mesh('PhotovoltaicCell',new T.BoxGeometry(.195,.012,.225),blue,[-.55+x*.22,.035,-.37+z*.245],[1,1,1],panel);}
  const profile=Array.from({length:17},(_,i)=>{const r=i/16*.52;return new T.Vector2(r,r*r*.65);});const dish=mesh('ParabolicDish',new T.LatheGeometry(profile,64),cream,[0,.47,0]);dish.material.side=T.DoubleSide;tube('Receiver',[[0,.47,0],[0,.94,0]],.025,metal);sphere('ReceiverTip',dark,[0,.94,0],[.065,.065,.065]);const lens=mesh('SurveyOptics',new T.CylinderGeometry(.17,.17,.18,48),dark,[0,0,.52]);lens.rotation.x=Math.PI/2;sphere('Beacon',glow,[0,-.46,-.2],[.055,.055,.055]);
 }else{
  const colors=['#d5a34f','#638d79','#dcd0a4','#648da1'];
  for(let stripe=0;stripe<12;stripe++){const material=mat('WovenEnvelope_'+stripe,colors[stripe%4]);const g=new T.SphereGeometry(2.25,12,56,stripe*Math.PI/6,Math.PI/6,0,2.65);mesh('RoundEnvelope_'+stripe,g,material,[0,1.3,0]);}
  const neck=mesh('EnvelopeNeck',new T.CylinderGeometry(2.25*Math.sin(2.65),.4,.42,96,8,true),cream,[0,-.895,0]);neck.material.side=T.DoubleSide;
  mesh('BasketBody',new T.CylinderGeometry(.58,.48,.65,4,8),wood,[0,-2.28,0]).rotation.y=Math.PI/4;
  for(let i=0;i<4;i++){const a=Math.PI/4+i*Math.PI/2,x=Math.cos(a)*.58,z=Math.sin(a)*.58;tube('SuspensionRope',[[x,-1.95,z],[x*.9,-1.25,z*.9],[x*.7,-1.11,z*.7]],.023,cream);}
  for(let j=0;j<7;j++){const o=mesh('BasketWeaveRing',new T.TorusGeometry(.61-j*.012,.021,8,4),cream,[0,-1.99-j*.085,0]);o.rotation.x=Math.PI/2;o.rotation.z=Math.PI/4;}
  for(let face=0;face<4;face++)for(let i=0;i<8;i++){const a=face*Math.PI/2,u=-.36+i*.103,top=[Math.cos(a)*.405-Math.sin(a)*u,-1.98,Math.sin(a)*.405+Math.cos(a)*u],bottom=[top[0]*.83,-2.59,top[2]*.83];tube('BasketWeaveUpright',[bottom,top],.012,cream);}
  mesh('BurnerFrame',new T.BoxGeometry(.3,.13,.3),metal,[0,-1.52,0]);
 }
 function pose(seconds){for(const j of joints)j.node.rotation[j.axis]=j.side*Math.sin(seconds*(kind==='pterosaur'?2.6:.8))*j.amplitude;root.updateMatrixWorld(true);}
 let dead=false;return{root,kind,joints,pose,dispose(){if(dead)return;dead=true;root.removeFromParent();for(const g of geometries)g.dispose();for(const m of materials)m.dispose();}};
}
