// Yuyu's established identity: long chestnut hair, amber eyes, yellow star clip,
// lavender star pyjamas and cream slippers. No external image or model dependency.
export function createYuyu(THREE, { own, color, mesh }) {
  const root = new THREE.Group(); root.name = 'yuyu-character';
  const body = new THREE.Group(); body.name = 'yuyu-rig'; root.add(body);
  const skin = color(0xffd8bb, { roughness: .72, metalness: 0 });
  const lavender = color(0xb6a0e5, { roughness: .9, metalness: 0 });
  const cuffs = color(0xd3bdf0, { roughness: .9, metalness: 0 });
  const cream = color(0xffefd0, { roughness: .9, metalness: 0 });
  const brown = color(0x573422, { roughness: .73, metalness: 0 });
  const hairLight = color(0x815036, { roughness: .75, metalness: 0 });
  const white = color(0xfff9ed, { roughness: .55, metalness: 0 });
  const iris = color(0x99532b, { roughness: .35, metalness: 0 });
  const ink = color(0x2e1a1a, { roughness: .58, metalness: 0 });
  const pink = color(0xee9e99, { roughness: .85, metalness: 0 });
  const gold = color(0xffd66b, { roughness: .58, metalness: .05 });
  function oval(parent, mat, pos, scale, name) {
    const item = mesh(parent, new THREE.SphereGeometry(1, 48, 36), mat, pos);
    item.scale.set(...scale); if (name) item.name = name; return item;
  }
  function line(parent, points, radius, mat, name) {
    const curve = new THREE.CatmullRomCurve3(points.map(p => new THREE.Vector3(...p)));
    const item = mesh(parent, new THREE.TubeGeometry(curve, 32, radius, 10, false), mat);
    if (name) item.name = name; return item;
  }
  function star(parent, x, y, z, size, mat, name, turn=0) {
    const shape = new THREE.Shape();
    for (let i=0;i<10;i++) {
      const angle=Math.PI/2+i*Math.PI/5, r=i%2 ? size*.46 : size;
      const px=Math.cos(angle)*r, py=Math.sin(angle)*r;
      if (i===0) shape.moveTo(px,py); else shape.lineTo(px,py);
    }
    shape.closePath();
    const cloth=/pyjama|trouser|sleeve/.test(name||'');
    const item=mesh(parent,new THREE.ExtrudeGeometry(shape,{depth:cloth?.001:.012,bevelEnabled:true,bevelSegments:3,steps:1,bevelSize:cloth?.001:size*.07,bevelThickness:cloth?.001:.008}),mat,[x,y,z]);
    item.rotation.z=turn; if(name)item.name=name; return item;
  }
  // Tailored, soft pyjamas rather than a cone-shaped dress.
  const profile=[[.245,.70],[.26,.74],[.255,.82],[.24,1.05],[.225,1.18],[.18,1.27],[.105,1.30]].map(([r,y])=>new THREE.Vector2(r,y));
  const torso=mesh(body,new THREE.LatheGeometry(profile,64),lavender);torso.scale.z=.71;torso.name='yuyu-pyjama-top';
  oval(body,lavender,[0,.70,-.025],[.23,.13,.13],'yuyu-pyjama-hip');
  const hem=oval(body,cuffs,[0,.72,.003],[.262,.025,.18]);
  line(body,[[-.23,.72,.09],[0,.70,.178],[.23,.72,.09]],.012,cream);
  oval(body,skin,[0,1.31,.015],[.092,.12,.09]);
  for(const s of [-1,1]) {
    const collar=oval(body,cream,[s*.075,1.25,.162],[.085,.035,.012]); collar.rotation.z=s*.42;
  }
  line(body,[[0,1.2,.177],[.012,1,.178],[.013,.76,.178]],.008,cream);
  for(const y of [1.16,.99,.82]) oval(body,cream,[.037,y,.18],[.021,.021,.012]);
  for(const [x,y,z,r,turn] of [[-.13,1.1,.16,.049,.2],[.16,.91,.15,.047,-.3],[-.13,.8,.16,.035,.5]]) star(body,x,y,z,r,cream,'yuyu-pyjama-star',turn);
  const legs=[], feet=[], arms=[];
  for(const s of [-1,1]) {
    const leg=new THREE.Group(); leg.position.set(s*.128,.73,0); body.add(leg); legs.push(leg);
    oval(leg,lavender,[0,-.25,0],[.103,.30,.117],'yuyu-pyjama-leg');
    oval(leg,cuffs,[0,-.49,.003],[.107,.055,.122]);
    line(leg,[[-.093,-.50,.04],[0,-.515,.12],[.093,-.50,.04]],.01,cream);
    const foot=oval(leg,cream,[0,-.60,.07],[.125,.092,.19],'yuyu-cream-slipper'); feet.push(foot);
    const slipperStar=star(leg,0,-.54,.16,.052,gold,'yuyu-slipper-star'); slipperStar.rotation.x=-.8;
    star(leg,s*.024,-.24,.112,.038,cream,'yuyu-trouser-star',s*.4);
    const arm=new THREE.Group(); arm.position.set(s*.255,1.20,0); body.add(arm); arms.push(arm);
    arm.rotation.z=s*.13;
    oval(arm,lavender,[s*.035,-.18,0],[.095,.235,.105],'yuyu-sleeve');
    oval(arm,cuffs,[s*.045,-.345,.006],[.1,.052,.111]);
    oval(arm,cream,[s*.047,-.373,.013],[.098,.014,.107]);
    oval(arm,skin,[s*.05,-.435,.017],[.071,.096,.063],'yuyu-hand');
    oval(arm,skin,[-s*.002,-.42,.062],[.032,.046,.031]);
    star(arm,s*.04,-.18,.103,.037,cream,'yuyu-sleeve-star',s*.3);
  }
  // Tapered flowing locks grow from the crown instead of separate round beads.
  function hairLock(parent, points, width, depth, mat=brown, name='yuyu-hair-lock') {
    const curve=new THREE.CatmullRomCurve3(points.map(p=>new THREE.Vector3(...p)));
    const vertices=[], indices=[], rings=40, sides=18;
    for(let j=0;j<=rings;j++) {
      const t=j/rings, p=curve.getPoint(t), tangent=curve.getTangent(t);
      const across=new THREE.Vector3(tangent.y,-tangent.x,0).normalize();
      const taper=Math.max(.015,Math.pow(1-t,.38))*(.85+.15*Math.sin(t*Math.PI));
      for(let i=0;i<sides;i++) {
        const a=i/sides*Math.PI*2;
        const q=p.clone().addScaledVector(across,Math.cos(a)*width*taper);
        q.z+=Math.sin(a)*depth*taper;vertices.push(q.x,q.y,q.z);
        if(j<rings){const k=j*sides+i,n=j*sides+(i+1)%sides;indices.push(k,k+sides,n,n,k+sides,n+sides);}
      }
    }
    const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(vertices,3));g.setIndex(indices);g.computeVertexNormals();
    const lock=mesh(parent,g,mat);lock.name=name;return lock;
  }
  oval(body,brown,[0,1.35,-.17],[.36,.47,.22],'yuyu-long-hair');
  for(let i=0;i<7;i++) {
    const x=(i-3)*.096;
    hairLock(body,[[x,1.80,-.18],[x*1.25,1.39,-.28],[x*1.16,1.04,-.25],[x*.9+.035,.87+Math.abs(i-3)*.025,-.19]],.077,.095,i%3===1?hairLight:brown,'yuyu-back-lock');
  }
  const head=new THREE.Group(); head.position.y=1.62; body.add(head); head.name='yuyu-face';
  const face=oval(head,skin,[0,0,0],[.335,.35,.286],'yuyu-cheeks');
  // One continuous cheek-to-chin surface prevents a visible jaw seam.
  const facePositions=face.geometry.attributes.position;
  for(let i=0;i<facePositions.count;i++) {const y=facePositions.getY(i);if(y<0) facePositions.setX(i,facePositions.getX(i)*(1+y*.12));}
  face.geometry.computeVertexNormals();
  const faceColors=[],skinTone=new THREE.Color(0xffd8bb),cheekTone=new THREE.Color(0xf3aaa3);
  for(let i=0;i<facePositions.count;i++) {
    const x=facePositions.getX(i),y=facePositions.getY(i),z=facePositions.getZ(i);
    const amount=z>.45?.6*Math.exp(-(((Math.abs(x)-.63)/.19)**2)-(((y+.34)/.14)**2)):0;
    const c=skinTone.clone().lerp(cheekTone,amount);faceColors.push(c.r,c.g,c.b);
  }
  face.geometry.setAttribute('color',new THREE.Float32BufferAttribute(faceColors,3));
  face.material=color(0xffffff,{vertexColors:true,roughness:.8,metalness:0});
  for(const s of [-1,1]) {
    oval(head,skin,[s*.318,-.05,-.01],[.058,.082,.05]);
    oval(head,pink,[s*.333,-.05,.027],[.021,.037,.009]);
  }
  const crownGeometry=new THREE.SphereGeometry(.365,64,48);
  const crownPositions=crownGeometry.attributes.position;
  for(let i=0;i<crownPositions.count;i++) {
    const x=crownPositions.getX(i),y=crownPositions.getY(i),z=crownPositions.getZ(i);
    const phi=Math.atan2(z,x),t=Math.acos(THREE.MathUtils.clamp(y/.365,-1,1))/Math.PI;
    const end=1.22+.81*(1-Math.sin(phi))*.5,theta=t*end;
    crownPositions.setXYZ(i,.365*Math.sin(theta)*Math.cos(phi),.365*Math.cos(theta),.365*Math.sin(theta)*Math.sin(phi));
  }
  crownGeometry.computeVertexNormals();
  const cap=mesh(head,crownGeometry,brown,[0,.015,-.035]);
  cap.scale.set(1,1.05,.95); cap.name='yuyu-hair-crown';
  for(const s of [-1,1]) {
    hairLock(head,[[s*.27,.20,.02],[s*.325,-.02,.035],[s*.32,-.31,.04],[s*.25,-.55,-.015]],.071,.087);
    hairLock(head,[[s*.30,.15,-.07],[s*.37,-.13,-.08],[s*.37,-.38,-.12],[s*.29,-.66,-.13]],.055,.07,hairLight);
  }
  const bangs=[
    [[.055,.355,.08],[-.12,.30,.245],[-.26,.12,.23],[-.285,.035,.185]],
    [[.075,.36,.11],[-.025,.28,.305],[-.13,.15,.29],[-.20,.095,.245]],
    [[.11,.36,.11],[.08,.29,.31],[.035,.19,.31],[-.065,.13,.286]],
    [[.13,.35,.11],[.235,.28,.24],[.285,.16,.20],[.26,.06,.18]]
  ];
  bangs.forEach((points,i)=>{
    hairLock(head,points,i===3?.061:.067,.035,brown,'yuyu-fringe-lock');
    for(const offset of [-.018,.014]) line(head,points.slice(0,3).map(([x,y,z])=>[x+offset,y,z+.033]),.0025,hairLight,'yuyu-fine-hair-strand');
  });
  line(head,[[.07,.354,.15],[-.03,.30,.32],[-.1,.21,.322]],.005,hairLight);
  line(head,[[.14,.354,.15],[.22,.27,.283],[.265,.18,.25]],.005,hairLight);
  for(const s of [-1,1]) {
    // Layered almond eyes, not featureless black beads.
    oval(head,white,[s*.117,-.018,.267],[.087,.105,.013],'yuyu-eye-white');
    oval(head,iris,[s*.116,-.026,.282],[.058,.082,.010],'yuyu-amber-iris');
    oval(head,ink,[s*.116,-.017,.290],[.027,.054,.006],'yuyu-pupil');
    oval(head,white,[s*.116-.019,.017,.297],[.018,.022,.006],'yuyu-eye-catchlight');
    oval(head,white,[s*.116+.017,-.06,.296],[.008,.010,.005]);
    line(head,[[s*.043,.028,.279],[s*.09,.082,.278],[s*.15,.078,.272],[s*.192,.035,.252]],.0055,ink);
    line(head,[[s*.182,.055,.261],[s*.203,.073,.25],[s*.212,.09,.24]],.0045,ink,'yuyu-eyelash');
    line(head,[[s*.06,.137,.265],[s*.12,.157,.268],[s*.18,.135,.25]],.005,brown,'yuyu-eyebrow');

  }
  oval(head,skin,[0,-.095,.286],[.021,.019,.015],'yuyu-nose');
  line(head,[[-.064,-.178,.255],[-.03,-.198,.271],[.015,-.2,.271],[.061,-.178,.256]],.0045,ink,'yuyu-smile');
  // Genuine five-point star and pink centre, matching the original reference.
  const clip=star(head,-.285,.16,.267,.108,gold,'yuyu-yellow-star-clip',-.22);
  clip.rotation.y=-.2;
  oval(head,pink,[-.285,.16,.294],[.024,.024,.012],'yuyu-clip-pink-centre');
  body.rotation.y=.54;
  function animate(time,walking,reduced=false) {
    const stride=walking&&!reduced?Math.sin(time*.015):0;
    legs.forEach((leg,i)=>{leg.rotation.x=stride*(i?-.32:.32);});
    arms.forEach((arm,i)=>{arm.rotation.x=stride*(i?.22:-.22);});
  }
  return {root,body,feet,legs,arms,head,animate};
}
