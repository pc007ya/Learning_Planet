/** Local geometry/routing fixture. Not used by any published build. */
export const WIDTH=.67;
const COAST=1.50;
const TAU=2*Math.PI, A=.65, BANK_Y=[0,.76];
const C=[[-8.15,.25],[8.15,-.15]];
const STOPS=[[.98,1.94,3.06,4.44],[.08,1.11,4.36,5.43]];
const sum=(a,b)=>({x:a.x+b.x,y:a.y+b.y,z:a.z+b.z});
const sub=(a,b)=>({x:a.x-b.x,y:a.y-b.y,z:a.z-b.z});
const times=(a,s)=>({x:a.x*s,y:a.y*s,z:a.z*s});
const mix=(a,b,t)=>sum(a,times(sub(b,a),t));
const d2=(a,b)=>Math.hypot(a.x-b.x,a.z-b.z);
const clamp=t=>Math.max(0,Math.min(1,t));
function ring(bank,t,scale=1){
 const [cx,cz]=C[bank], s=Math.sin(t), c=Math.cos(t);
 const r=bank===0?1+.17*Math.sin(2*t+.7)+.12*Math.cos(3*t+.35):1-.14*Math.cos(2*t+.60)+.13*Math.cos(3*t-1.1);
 return {x:cx+scale*(bank===0?4.25:4.1)*r*c,y:BANK_Y[bank],z:cz+scale*(bank===0?6.05:5.30)*r*s};
}
function coast(bank,t){
 const bump=Math.max(...STOPS[bank].map(a=>Math.cos(a-t)));
 const f=clamp((bump-Math.cos(.38))/(1-Math.cos(.38)));
 return ring(bank,t,COAST+.19*f*f*(3-2*f));
}
const points=(n,f)=>Array.from({length:n+1},(_,i)=>f(i/n));
export function insideBank(p,bank){
 const [cx,cz]=C[bank], dx=(p.x-cx)/(bank===0?4.25:4.1),dz=(p.z-cz)/(bank===0?6.05:5.30);
 const edge=coast(bank,Math.atan2(dz,dx));
 return d2(p,{x:cx,z:cz})<=d2(edge,{x:cx,z:cz})+1e-8;
}
/** Every edge's samples drive navigation, the painted width mask and the actual ribbon triangles. */
export function ribbon(samples,width=WIDTH){
 const vertices=[],index=[];
 for(let i=0;i<samples.length;i++){
  const p=samples[i],d=sub(samples[Math.min(i+1,samples.length-1)],samples[Math.max(0,i-1)]),n=Math.hypot(d.x,d.z);
  for(const side of [-1,1])vertices.push({x:p.x-side*width*d.z/n,y:p.y,z:p.z+side*width*d.x/n});
  if(i<samples.length-1){const k=i*2;index.push(k,k+1,k+2,k+1,k+3,k+2);}
 }
 return {vertices,index};
}
export function buildDistricts(catalog){
 if(catalog.length<6||catalog.length>8||new Set(catalog.map(s=>s.id)).size!==catalog.length)throw Error('unsupported curriculum fixture');
 const nodes=new Map(),edges=[],stations=[],north=[],south=[],adj=new Map();
 const addNode=(id,p)=>{nodes.set(id,p);adj.set(id,[]);};
 function edge(a,b,samples,kind){
  const id=edges.length,length=samples.slice(1).reduce((k,p,i)=>k+d2(p,samples[i]),0);
  const e={id,a,b,samples,kind,length,deck:ribbon(samples)};
  edges.push(e);adj.get(a).push(e);adj.get(b).push(e);
 }
 // Three conservative porch-facing stations per bank, plus one at each unused rear slot.
 const positions=STOPS;
 let cursor=0;
 for(const bank of [0,1]){
  const up=bank===0?A:Math.PI-A,dn=bank===0?TAU-A:Math.PI+A;
  north.push('north:'+bank);south.push('south:'+bank);
  const joins=[{a:up,id:north[bank]},{a:dn,id:south[bank]}];
  const count=bank===0?Math.ceil(catalog.length/2):Math.floor(catalog.length/2);
  for(let i=0;i<count;i++){
   const course=catalog[cursor++],a=positions[bank][i],j='join:'+cursor,id='lesson:'+course.id;
   const p=ring(bank,a),house=ring(bank,a,1.36);
   const q=mix(house,p,Math.min(.88,1.075/d2(house,p)));
   addNode(id,q);joins.push({a,id:j});
   stations.push({course,id,bank,angle:a,porch:q,house,face:Math.atan2(q.x-house.x,q.z-house.z)});
  }
  for(const {a,id} of joins)addNode(id,ring(bank,a));
  for(const {angle:a,id,porch,course} of stations.filter(o=>o.bank===bank)){
   const j=joins.find(q=>q.a===a).id,p=nodes.get(j);
   edge(j,id,points(24,t=>mix(p,porch,t)),'porch');
   if(!course.id)throw Error('catalog id is required');
  }
  joins.sort((a,b)=>a.a-b.a);
  for(let i=0;i<joins.length;i++){
   const a=joins[i],b=joins[(i+1)%joins.length],dt=(b.a-a.a+TAU)%TAU;
   edge(a.id,b.id,points(Math.ceil(100*dt),t=>ring(bank,a.a+dt*t)),'lane');
  }
 }
 for(const [pair,sign] of [[north,1],[south,-1]]){
  const [a,b]=pair.map(id=>nodes.get(id));
  const deckPath=t=>{const p=mix(a,b,t);return {...p,z:p.z+sign*.28*Math.sin(Math.PI*t)**2};};
  const open=points(170,deckPath).map((p,i)=>!insideBank(p,0)&&!insideBank(p,1)?i:-1).filter(i=>i>=0);
  const from=(open[0]+1)/170,to=(open.at(-1)-1)/170;
  edge(pair[0],pair[1],points(170,t=>{const u=clamp((t-from)/(to-from));return {...deckPath(t),y:.76*u*u*(3-2*u)};}),'bridge');
 }
 addNode('spawn',stations[0].porch);
 // Spawn is an alias of first porch, not a zero-length geometry edge.
 const islandProfiles=C.map((_,bank)=>points(180,t=>coast(bank,TAU*t)));
 return {nodes,edges,adj,stations,islandProfiles,centers:C.map(([x,z],i)=>({x,y:BANK_Y[i],z})),spawnAt:stations[0].id};
}
export function route(layout,start,end,off=new Set()){
 if(start==='spawn')start=layout.spawnAt;
 if(start===end)return [layout.nodes.get(start)];
 const dist=new Map([[start,0]]), prev=new Map(),queue=new Set(layout.adj.keys());
 while(queue.size){
  const u=[...queue].reduce((a,b)=>(dist.get(a)??Infinity)<=(dist.get(b)??Infinity)?a:b);
  if(!dist.has(u)||u===end)break;
  queue.delete(u);
  for(const e of layout.adj.get(u)){
   if(off.has(e.id))continue;
   const v=e.a===u?e.b:e.a,k=dist.get(u)+e.length;
   if(k<(dist.get(v)??Infinity)){dist.set(v,k);prev.set(v,{u,e});}
  }
 }
 if(!prev.has(end))return null;
 const chunks=[];
 for(let x=end;x!==start;){const {u,e}=prev.get(x);chunks.unshift(e.a===u?e.samples:[...e.samples].reverse());x=u;}
 const joinPoints=[];
 function trim(a,atEnd,distance){
  const p=atEnd?[...a].reverse():a,j=p[0];let rem=distance;
  for(let i=1;i<p.length;i++){const span=d2(p[i-1],p[i]);if(rem<=span){const c=mix(p[i-1],p[i],rem/span);return [c,i,j];}rem-=span;}
  return [p.at(-1),p.length-1,j];
 }
 for(let i=0;i<chunks.length;i++){
  const a=chunks[i],b=chunks[i+1];
  if(!b){joinPoints.push(...a);break;}
  const cut=Math.min(.30,d2(a[0],a.at(-1))*.26,d2(b[0],b.at(-1))*.26);
  if(cut<.027){joinPoints.push(...a.slice(0,-1));continue;}
  const [p,pi,center]=trim(a,true,cut),[q,qi]=trim(b,false,cut);
  joinPoints.push(...a.slice(0,a.length-pi),...points(12,t=>mix(mix(p,center,t),mix(center,q,t),t)));
  chunks[i+1]=b.slice(qi);
 }
 return joinPoints;
}
export function projectOnEdge(p,e){
 let best;
 for(let i=1;i<e.samples.length;i++){
  const a=e.samples[i-1],b=e.samples[i],d=sub(b,a),v=sub(p,a),t=clamp((v.x*d.x+v.z*d.z)/(d.x*d.x+d.z*d.z));
  const q=mix(a,b,t),dist=d2(p,q);
  if(!best||dist<best.dist)best={q,dist,segment:i-1,t};
 }
 return best;
}
export function triangleY(p,mesh){
 const c=(u,v,w)=>(v.x-u.x)*(w.z-u.z)-(v.z-u.z)*(w.x-u.x);
 for(let i=0;i<mesh.index.length;i+=3){
  const [a,b,d]=mesh.index.slice(i,i+3).map(j=>mesh.vertices[j]),k=c(a,b,d);
  const u=c(p,b,d)/k,v=c(a,p,d)/k,w=c(a,b,p)/k;
  if(u>=-1e-8&&v>=-1e-8&&w>=-1e-8)return u*a.y+v*b.y+w*d.y;
 }
}
