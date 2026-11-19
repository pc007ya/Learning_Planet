/** Original English garden. Footprints are shared by rendering and collision tests. */
export function themeFor(unit){
 const t=unit.title.toLowerCase();
 if(/happy school day/.test(t))return 'plaza';
 if(/color|show/.test(t))return 'art';
 if(/old|time|calendar|routine|often|morning|saturday|sunday/.test(t))return 'clock';
 if(/toy|play|club/.test(t))return 'play';
 if(/animal/.test(t))return 'animal';
 if(/body|rest/.test(t))return 'sport';
 if(/feel|friend|family|picnic|like|share|help|visitor/.test(t))return 'garden';
 if(/fruit|shop|milk|apple|clothes/.test(t))return 'market';
 if(/park|season|sunflower|beach|trip/.test(t))return 'nature';
 if(/classroom|school|class|pencil|bag|room/.test(t))return 'school';
 return 'library';
}
export function coastFactor(a){return .98+.075*Math.sin(a*3)+.045*Math.cos(a*5);}
export function gardenFootprints(nodes){return nodes.map(n=>({x:n.x,z:n.z-.6,r:.94,unitId:n.id,theme:themeFor(n)}));}
export function gardenEntries(nodes){return nodes.map((n,i)=>{const prev=nodes[(i+nodes.length-1)%nodes.length],next=nodes[(i+1)%nodes.length],dx=next.x-prev.x,dz=next.z-prev.z,len=Math.hypot(dx,dz)||1;return{x:n.x-dz/len*.45,z:n.z+.5+dx/len*.45,r:.18};});}
export function createGardenNavigation(nodes){
 const obstacles=[...gardenFootprints(nodes),...gardenEntries(nodes),{x:-6.1,z:.1,r:.64},{x:5.8,z:-1.9,r:.64}],step=.2;
 const safe=p=>Number.isFinite(p.x)&&Number.isFinite(p.z)&&Math.hypot(p.x/7.35,p.z/4.15)<coastFactor(Math.atan2(p.z/4.15,p.x/7.35))&&(!((p.x/3.48)**2+(p.z/.94)**2<1)||Math.abs(p.x)<.38)&&!obstacles.some(o=>Math.hypot(p.x-o.x,p.z-o.z)<o.r);
 const clear=(a,b)=>{const n=Math.max(1,Math.ceil(Math.hypot(b.x-a.x,b.z-a.z)/.035));for(let i=0;i<=n;i++){const t=i/n;if(!safe({x:a.x+(b.x-a.x)*t,z:a.z+(b.z-a.z)*t}))return false;}return true;};
 const grid=new Map(),key=(x,z)=>`${x},${z}`;
 for(let x=-37;x<=37;x++)for(let z=-21;z<=21;z++){const p={x:x*step,z:z*step,gx:x,gz:z};if(safe(p))grid.set(key(x,z),p);}
 function nearest(p){let found=null,d=Infinity;for(const n of grid.values()){const dist=Math.hypot(p.x-n.x,p.z-n.z);if(dist<d&&clear(p,n)){found=n;d=dist;}}return found;}
 function path(from,to){if(!safe(from)||!safe(to))return null;if(clear(from,to))return[to];const start=nearest(from),goal=nearest(to);if(!start||!goal)return null;const open=[start],closed=new Set(),cost=new Map([[start,0]]),previous=new Map();while(open.length){open.sort((a,b)=>cost.get(a)+Math.hypot(a.x-goal.x,a.z-goal.z)-cost.get(b)-Math.hypot(b.x-goal.x,b.z-goal.z));const p=open.shift();if(p===goal){const out=[to];for(let n=goal;n;n=previous.get(n))out.unshift({x:n.x,z:n.z});return out;}closed.add(p);for(let dx=-1;dx<=1;dx++)for(let dz=-1;dz<=1;dz++){if(!dx&&!dz)continue;const n=grid.get(key(p.gx+dx,p.gz+dz));if(!n||closed.has(n)||!clear(p,n))continue;const v=cost.get(p)+Math.hypot(dx,dz)*step;if(v<(cost.get(n)??Infinity)){cost.set(n,v);previous.set(n,p);if(!open.includes(n))open.push(n);}}}return null;}
 return {safe,clear,path,obstacles};
}
export function buildGarden(T,{scene,nodes,mesh,color,own}){
 const palette={cream:color(0xf1d8ad),wood:color(0x78513b),teal:color(0x3e9297),leaf:color(0x599567),water:color(0x55aeb6,{roughness:.32}),gold:color(0xe9b74b),pink:color(0xcc8394),blue:color(0x7093bf)};
 function box(p,size,mat,pos){return mesh(p,new T.BoxGeometry(...size),mat,pos);}
 function ball(p,r,mat,pos,scale){const m=mesh(p,new T.SphereGeometry(r,20,14),mat,pos);if(scale)m.scale.set(...scale);return m;}
 function cylinder(p,rt,rb,h,mat,pos,sides=20){return mesh(p,new T.CylinderGeometry(rt,rb,h,sides),mat,pos);}
 function group(x=0,y=0,z=0){const g=new T.Group();g.position.set(x,y,z);scene.add(g);return g;}
 function shape(rx,rz){const s=new T.Shape();for(let i=0;i<=64;i++){const a=i/64*Math.PI*2,k=coastFactor(a),x=Math.cos(a)*rx*k,z=Math.sin(a)*rz*k;if(i)s.lineTo(x,-z);else s.moveTo(x,-z);}s.closePath();return s;}
 function land(rx,rz,depth,y,mat){const g=new T.ExtrudeGeometry(shape(rx,rz),{depth,bevelEnabled:true,bevelSize:.12,bevelThickness:.035,bevelSegments:2,steps:1});g.translate(0,0,-depth);const m=mesh(scene,g,mat,[0,y,0]);m.rotation.x=-Math.PI/2;return m;}
 land(8.05,4.8,.62,-.12,color(0x967559));land(8.03,4.78,.16,-.015,color(0xe8cf9b));land(7.8,4.52,.08,.035,color(0x8bb78c));
 // Shallow bay in the meadow; the middle wooden footbridge is the only pond crossing.
 const pond=mesh(scene,new T.CircleGeometry(1,64),palette.water,[0,.09,0]);pond.rotation.x=-Math.PI/2;pond.scale.set(3.35,.79,1);
 const shore=mesh(scene,new T.TorusGeometry(1,.055,8,64),color(0xd4c293),[0,.085,0]);shore.rotation.x=-Math.PI/2;shore.scale.set(3.4,.86,1);
 const road=color(0xd6c29d);
 const points=nodes.map(n=>new T.Vector3(n.x,0,n.z+.5));
 function curvedRoad(points,closed=false){const curve=new T.CatmullRomCurve3(points,closed,'catmullrom',.4);const g=new T.TubeGeometry(curve,128,.24,8,closed);const roadMesh=mesh(scene,g,road,[0,.1,0]);roadMesh.scale.y=.12;return curve;}
 const mainPath=curvedRoad(points,true);
 curvedRoad([new T.Vector3(0,0,-2),new T.Vector3(-.13,0,-1.6),new T.Vector3(0,0,-1.05)]);
 curvedRoad([new T.Vector3(0,0,1.05),new T.Vector3(.65,0,1.35),new T.Vector3(.9,0,2.2),new T.Vector3(.4,0,2.9),new T.Vector3(-.4,0,3.1)]);
 // Small path-edge paving accents, not an artificial movement restriction.
 for(let i=0;i<36;i++){const p=mainPath.getPoint(i/36),t=mainPath.getTangent(i/36),side=i%2?1:-1;ball(scene,.045,color(0xc9bb9b),[p.x+t.z*.28*side,.12,p.z-t.x*.28*side],[1.4,.4,1]);}
 for(let z=-1.05;z<=1.05;z+=.16)box(scene,[1.12,.1,.14],z%2?palette.cream:palette.wood,[0,.16,z]);
 for(const x of [-.55,.55]){box(scene,[.04,.05,2.25],palette.wood,[x,.47,0]);for(const z of [-1,-.5,0,.5,1])cylinder(scene,.035,.04,.44,palette.wood,[x,.26,z],8);}
 function tree(x,z,size=1,tint=palette.leaf){cylinder(scene,.055*size,.09*size,.62*size,palette.wood,[x,.38*size,z],10);ball(scene,.31*size,tint,[x,.88*size,z],[1,1.2,1]);ball(scene,.23*size,tint,[x-.15*size,.74*size,z+.08*size]);}
 function flower(x,z,c=palette.pink){cylinder(scene,.01,.013,.22,palette.leaf,[x,.18,z],6);for(let j=0;j<5;j++){const a=j/5*Math.PI*2;ball(scene,.042,c,[x+Math.cos(a)*.045,.31,z+Math.sin(a)*.045]);}ball(scene,.025,palette.gold,[x,.32,z]);}
 // Shore decorations stay outside the navigation boundary, including their canopy.
 for(let i=0;i<34;i++){const a=i/34*Math.PI*2,x=Math.cos(a)*7.6*coastFactor(a),z=Math.sin(a)*4.42*coastFactor(a);if(i%3===0)tree(x,z,.75+(i%4)*.1,i%2?palette.leaf:color(0x6a9c8d));else if(i%3===1)ball(scene,.18,color(0x949c8a),[x,.15,z],[1.4,.7,1]);else for(let k=0;k<3;k++)flower(x+k*.1,z, i%2?palette.pink:palette.gold);}
 function door(g,x=0,z=.33){box(g,[.17,.34,.035],palette.wood,[x,.24,z]);ball(g,.018,palette.gold,[x+.05,.24,z+.03]);}
 function window(g,x,y,z){box(g,[.16,.18,.025],palette.teal,[x,y,z]);box(g,[.018,.18,.035],palette.cream,[x,y,z+.01]);box(g,[.16,.018,.035],palette.cream,[x,y,z+.01]);}
 function roof(g,mat,y=.9){const r=mesh(g,new T.ConeGeometry(.67,.4,4),mat,[0,y,0]);r.rotation.y=Math.PI/4;return r;}
 function school(g){box(g,[.93,.62,.62],palette.cream,[0,.4,0]);roof(g,palette.teal);door(g);window(g,-.3,.48,.33);window(g,.3,.48,.33);cylinder(g,.02,.02,.65,palette.wood,[.47,.97,0]);box(g,[.23,.14,.02],palette.gold,[.58,1.2,0]);}
 function art(g){box(g,[.55,.44,.5],palette.cream,[-.16,.3,0]);roof(g,palette.pink,.72).scale.set(.7,.8,.85);const easel=box(g,[.36,.44,.035],palette.wood,[.32,.4,.25]);easel.rotation.x=-.12;box(g,[.3,.33,.04],color(0xfff1d3),[.32,.46,.28]);for(let i=0;i<4;i++)ball(g,.048,[palette.teal,palette.gold,palette.pink,palette.blue][i],[.24+i%2*.14,.39+Math.floor(i/2)*.14,.31]);for(const x of [-.1,.08])cylinder(g,.075,.07,.19,[palette.blue,palette.gold][x>0?1:0],[x,.18,.4]);}
 function clock(g){box(g,[.55,.95,.55],palette.cream,[0,.56,0]);roof(g,palette.blue,1.2).scale.set(.7,.7,.7);const face=cylinder(g,.23,.23,.045,color(0xfff1d3),[0,.86,.3],32);face.rotation.x=Math.PI/2;box(g,[.02,.17,.04],palette.wood,[0,.91,.34]);const hand=box(g,[.13,.02,.04],palette.wood,[.055,.86,.34]);door(g,0,.3);for(const x of [-.4,.4]){cylinder(g,.07,.07,.28,palette.pink,[x,.2,0]);ball(g,.12,palette.gold,[x,.44,0]);}}
 function play(g){const colors=[palette.teal,palette.pink,palette.gold];for(let i=0;i<3;i++){box(g,[.3,.3,.3],colors[i],[i*.28-.28,.25,0]);const cap=mesh(g,new T.ConeGeometry(.21,.28,4),colors[(i+1)%3],[i*.28-.28,.53,0]);cap.rotation.y=Math.PI/4;}box(g,[.3,.08,.8],palette.blue,[.33,.29,.2]).rotation.x=.42;for(const x of [-.43,-.16])ball(g,.09,palette.wood,[x,.18,.4]);box(g,[.45,.17,.23],palette.gold,[-.29,.3,.4]);}
 function animal(g){for(const x of [-.5,.5])for(const z of [-.43,.43])cylinder(g,.025,.025,.28,palette.wood,[x,.2,z],8);for(const z of [-.43,.43])box(g,[1.02,.045,.04],palette.wood,[0,.3,z]);const hay=color(0xcda451);box(g,[.3,.23,.3],hay,[-.27,.19,-.18]);for(const [x,z,c]of[[.13,.15,0xf7ead1],[-.2,.23,0xb8a497]]){const mat=color(c);ball(g,.16,mat,[x,.24,z],[1,.85,1.3]);ball(g,.1,mat,[x,.37,z+.12]);for(const dx of [-.045,.045])ball(g,.035,mat,[x+dx,.51,z+.12],[.7,2.2,.7]);for(const dx of [-.035,.035])ball(g,.012,palette.wood,[x+dx,.4,z+.2]);}}
 function sport(g){box(g,[1.05,.04,.85],color(0xc47f65),[0,.1,0]);const line=color(0xf8e8c4);for(const x of [-.44,.44])box(g,[.02,.01,.72],line,[x,.125,0]);for(const z of [-.35,.35])box(g,[.9,.01,.02],line,[0,.125,z]);for(const x of [-.36,.36])cylinder(g,.025,.025,.75,palette.wood,[x,.47,-.32],8);box(g,[.75,.035,.035],line,[0,.84,-.32]);box(g,[.6,.4,.015],color(0x9ebaae,{transparent:true,opacity:.55}),[0,.59,-.33]);ball(g,.13,palette.gold,[.2,.25,.2]);}
 function garden(g){for(let i=0;i<6;i++){const a=i*Math.PI/3;ball(g,.17,i%2?palette.pink:palette.gold,[Math.cos(a)*.35,.19,Math.sin(a)*.35],[1,.45,1]);}cylinder(g,.21,.27,.22,palette.cream,[0,.2,0]);const heart=new T.Shape();heart.moveTo(0,0);heart.bezierCurveTo(-.38,.24,-.17,.6,0,.34);heart.bezierCurveTo(.17,.6,.38,.24,0,0);const h=mesh(g,new T.ExtrudeGeometry(heart,{depth:.08,bevelEnabled:true,bevelSize:.025,bevelThickness:.025,bevelSegments:2,steps:1}),palette.pink,[0,.39,0]);h.rotation.y=-.15;}
 function market(g){box(g,[.9,.4,.5],palette.cream,[0,.3,0]);for(let i=0;i<6;i++)box(g,[.16,.08,.74],i%2?palette.cream:palette.pink,[-.4+i*.16,.72,0]);for(const x of [-.43,.43])cylinder(g,.025,.025,.7,palette.wood,[x,.4,.23],8);for(let i=0;i<9;i++)ball(g,.065,[palette.gold,palette.pink,palette.leaf][i%3],[(i%3-1)*.23,.56,Math.floor(i/3)*.14-.12]);}
 function nature(g){cylinder(g,.3,.4,.2,palette.wood,[0,.17,0]);for(let i=0;i<5;i++){const a=i*1.3,x=Math.sin(a)*.3,z=Math.cos(a)*.3;cylinder(g,.018,.02,.65,palette.leaf,[x,.56,z],8);for(let j=0;j<7;j++){const t=j*Math.PI*2/7;ball(g,.07,palette.gold,[x+Math.cos(t)*.12,.9+Math.sin(t)*.12,z]);}ball(g,.085,palette.wood,[x,.9,z+.015]);}}
 function library(g){box(g,[.9,.65,.65],palette.cream,[0,.41,0]);roof(g,palette.blue,.95);door(g);for(const x of [-.32,.32])window(g,x,.5,.34);for(let i=0;i<4;i++)box(g,[.09,.25,.16],[palette.pink,palette.teal,palette.gold,palette.blue][i],[-.15+i*.1,.93,.05]);}
 function plaza(g){cylinder(g,.39,.45,.16,palette.cream,[0,.15,0]);cylinder(g,.33,.33,.03,palette.water,[0,.25,0]);cylinder(g,.08,.13,.55,palette.cream,[0,.45,0]);ball(g,.14,palette.gold,[0,.8,0]);for(const x of [-.42,.42]){box(g,[.2,.06,.48],palette.wood,[x,.26,0]);for(const z of [-.16,.16])box(g,[.04,.22,.04],palette.wood,[x,.13,z]);}}
 const builders={school,art,clock,play,animal,sport,garden,market,nature,library,plaza};
 const footprints=gardenFootprints(nodes);
 for(const f of footprints){const g=group(f.x,.1,f.z);g.name=`english-${f.theme}-${f.unitId}`;g.scale.setScalar(1.25);builders[f.theme](g);}
 // Sculpted rocky headlands and clustered plants break the flat coastline silhouette.
 for(const [x,z]of[[-6.1,.1],[5.8,-1.9]]){ball(scene,.62,color(0x858e78),[x,.2,z],[1,.85,.85]);ball(scene,.38,color(0xa0aa8f),[x-.22,.55,z+.06],[.9,.8,1]);ball(scene,.29,color(0x71916d),[x+.2,.58,z-.06],[1.2,.65,1]);tree(x-.25,z-.15,.85);}
 // Clustered shrubs inside each landmark's already-blocked footprint, never over a road.
 footprints.forEach((f,i)=>{for(let k=0;k<3;k++){const a=Math.PI+k*.6;ball(scene,.12,i%2?palette.leaf:color(0x8da56b),[f.x+Math.cos(a)*.67,.16,f.z+Math.sin(a)*.67],[1.2,.7,1]);}});
 // Water lilies and a moving duck family use the pond, outside the footbridge.
 for(const x of [-2.6,-1.9,1.5,2.4]){const lily=mesh(scene,new T.CircleGeometry(.16,16),palette.leaf,[x,.11,.2*Math.sin(x)]);lily.rotation.x=-Math.PI/2;ball(scene,.055,palette.pink,[x,.16,.2*Math.sin(x)]);}
 const ducks=[];for(let i=0;i<3;i++){const g=group(-1.1-i*.28,.17,.08+i*.13);ball(g,.11,palette.gold,[0,0,0],[1.4,.8,1]);ball(g,.065,palette.gold,[.1,.09,0]);const beak=mesh(g,new T.ConeGeometry(.025,.07,8),palette.pink,[.18,.09,0]);beak.rotation.z=-Math.PI/2;ducks.push(g);}
 return {animate:t=>ducks.forEach((d,i)=>{d.position.y=.17+Math.sin(t*1.7+i)*.016;d.rotation.y=Math.sin(t*.3+i)*.2;})};
}
