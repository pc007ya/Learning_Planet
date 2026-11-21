import {STATION_LANDMARK_VARIANTS,buildStationLandmarkVariant} from './english-station-landmarks-r9.mjs';
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
export function stationLandmarkKind(unit){
 return STATION_LANDMARK_VARIANTS[unit.id]?.kind??themeFor(unit);
}
export function gardenStationLabel(unit){
 return STATION_LANDMARK_VARIANTS[unit.id]?.label??themeFor(unit).toUpperCase();
}
export function coastFactor(a){return .98+.075*Math.sin(a*3)+.045*Math.cos(a*5);}
export function gardenFootprints(nodes){return nodes.map(n=>({x:n.x,z:n.z-.6,r:.94,unitId:n.id,theme:themeFor(n)}));}
export function gardenEntries(nodes){return nodes.map((n,i)=>{const prev=nodes[(i+nodes.length-1)%nodes.length],next=nodes[(i+1)%nodes.length],dx=next.x-prev.x,dz=next.z-prev.z,len=Math.hypot(dx,dz)||1;return{x:n.x-dz/len*.45,z:n.z+.5+dx/len*.45,r:.18};});}
// Tread height comes from the same envelope as the rendered bridge. Actors
// approach from either side and do not clip through the raised deck.
export const GARDEN_BRIDGE = Object.freeze({
 walkHalfWidth:.38, deckHalfWidth:.56, flatHalfLength:.8, end:1.10,
 groundY:.08, deckY:.211
});
export function gardenSurfaceHeight({x,z}){
 const b=GARDEN_BRIDGE,t=Math.min(1,Math.max(0,(b.end-Math.abs(z))/(b.end-b.flatHalfLength)));
 const edge=Math.min(1,Math.max(0,(b.deckHalfWidth-Math.abs(x))/(b.deckHalfWidth-b.walkHalfWidth)));
 return b.groundY+(b.deckY-b.groundY)*t*t*(3-2*t)*edge*edge*(3-2*edge);
}
// Greedy line-of-sight simplification followed by local quadratic fillets.
// Every returned segment still passes the same coast/water/collision test;
// if a corner cannot be rounded safely, retain it.
export function smoothGardenPath(from, points, clear){
 const poly=[from];
 for(let i=0;i<points.length;){
  let j=points.length-1;
  while(j>i&&!clear(poly.at(-1),points[j]))--j;
  poly.push(points[j]); i=j+1;
 }
 const out=[];
 const towards=(a,b,r)=>{
  const len=Math.hypot(b.x-a.x,b.z-a.z)||1;
  return {x:a.x+(b.x-a.x)*r/len,z:a.z+(b.z-a.z)*r/len};
 };
 for(let i=1;i<poly.length-1;i++){
  const a=poly[i-1],b=poly[i],c=poly[i+1];
  const r=Math.min(.28,Math.hypot(a.x-b.x,a.z-b.z)/3,Math.hypot(c.x-b.x,c.z-b.z)/3);
  if(r<.02){out.push(b);continue;}
  const u=towards(b,a,r),v=towards(b,c,r),arc=[u];
  for(let k=1;k<=4;k++){
   const t=k/4,h=1-t;
   arc.push({x:h*h*u.x+2*h*t*b.x+t*t*v.x,z:h*h*u.z+2*h*t*b.z+t*t*v.z});
  }
  if(clear(out.at(-1)??from,u)&&arc.every((p,k)=>!k||clear(arc[k-1],p))&&clear(v,c))out.push(...arc);
  else out.push(b);
 }
 out.push(poly.at(-1));
 return out;
}
export function createGardenNavigation(nodes){
 const obstacles=[...gardenFootprints(nodes),...gardenEntries(nodes),{x:-6.1,z:.1,r:.64},{x:5.8,z:-1.9,r:.64}],step=.2;
 const safe=p=>Number.isFinite(p.x)&&Number.isFinite(p.z)&&Math.hypot(p.x/7.35,p.z/4.15)<coastFactor(Math.atan2(p.z/4.15,p.x/7.35))&&(!((p.x/3.48)**2+(p.z/.94)**2<1)||Math.abs(p.x)<GARDEN_BRIDGE.walkHalfWidth)&&!obstacles.some(o=>Math.hypot(p.x-o.x,p.z-o.z)<o.r);
 const clear=(a,b)=>{const n=Math.max(1,Math.ceil(Math.hypot(b.x-a.x,b.z-a.z)/.035));for(let i=0;i<=n;i++){const t=i/n;if(!safe({x:a.x+(b.x-a.x)*t,z:a.z+(b.z-a.z)*t}))return false;}return true;};
 const grid=new Map(),key=(x,z)=>`${x},${z}`;
 for(let x=-37;x<=37;x++)for(let z=-21;z<=21;z++){const p={x:x*step,z:z*step,gx:x,gz:z};if(safe(p))grid.set(key(x,z),p);}
 function nearest(p){let found=null,d=Infinity;for(const n of grid.values()){const dist=Math.hypot(p.x-n.x,p.z-n.z);if(dist<d&&clear(p,n)){found=n;d=dist;}}return found;}
 function path(from,to){if(!safe(from)||!safe(to))return null;if(clear(from,to))return[to];const start=nearest(from),goal=nearest(to);if(!start||!goal)return null;const open=[start],closed=new Set(),cost=new Map([[start,0]]),previous=new Map();while(open.length){open.sort((a,b)=>cost.get(a)+Math.hypot(a.x-goal.x,a.z-goal.z)-cost.get(b)-Math.hypot(b.x-goal.x,b.z-goal.z));const p=open.shift();if(p===goal){const out=[to];for(let n=goal;n;n=previous.get(n))out.unshift({x:n.x,z:n.z});return smoothGardenPath(from,out,clear);}closed.add(p);for(let dx=-1;dx<=1;dx++)for(let dz=-1;dz<=1;dz++){if(!dx&&!dz)continue;const n=grid.get(key(p.gx+dx,p.gz+dz));if(!n||closed.has(n)||!clear(p,n))continue;const v=cost.get(p)+Math.hypot(dx,dz)*step;if(v<(cost.get(n)??Infinity)){cost.set(n,v);previous.set(n,p);if(!open.includes(n))open.push(n);}}}return null;}
 return {safe,clear,path,obstacles};
}
// Derive visible routes from the same traversable paths the player uses.
export function gardenRoadPaths(nodes,nav=createGardenNavigation(nodes)){
 const stations=nodes.map(n=>({x:n.x,z:n.z+.5}));
 if(!stations.length)return [];
 const join=(a,b)=>nav.path(a,b);
 const loop=[stations[0]];
 for(let i=0;i<stations.length&&stations.length>1;i++){
  const leg=join(stations[i],stations[(i+1)%stations.length]);
  if(leg)loop.push(...leg);else return [];
 }
 const paths=loop.length>1?[{name:'village-loop',points:loop}]:[];
 for(const side of [-1,1]){
  const mouth={x:0,z:side*(GARDEN_BRIDGE.end+.015)};
  const options=stations.filter(p=>Math.sign(p.z)===side).sort((a,b)=>Math.hypot(a.x,a.z-mouth.z)-Math.hypot(b.x,b.z-mouth.z));
  for(const station of options){
   const leg=join(mouth,station);
   if(leg){// The road must overlap the last visible wooden tread, not just stop
    // at the nominal deck limit. Keep the approach to the old mouth intact.
    const cap={x:0,z:side*(GARDEN_BRIDGE.end-.055)};
    paths.push({name:side<0?'north-bridge-access':'south-bridge-access',points:[cap,mouth,...leg]});break;}
  }
 }
 return paths;
}
// Use the painted paths as a bidirectional graph for automatic station
// walks. Always include the physical bridge deck, never cut across the lawn
// or water between station stops. A free-roaming player rejoins the nearest
// visible safe point before following the route.
// Test the entire line segment against the exact rendered ribbon, not
// just a sample of its points. Triangle segments are clipped and unioned.
function makeRibbonCoverage(roads,nav){
 const triangles=[];
 for(const road of roads){
  const {vertices,indices}=gardenRoadMeshData(road.points,nav,false);
  for(let i=0;i<indices.length;i+=3){
   const p=indices.slice(i,i+3).map(k=>({x:vertices[k*3],z:vertices[k*3+2]}));
   triangles.push({p,minX:Math.min(...p.map(q=>q.x)),maxX:Math.max(...p.map(q=>q.x)),
    minZ:Math.min(...p.map(q=>q.z)),maxZ:Math.max(...p.map(q=>q.z))});
  }
 }
 return function inside(a,b){
  const eps=2e-8, intervals=[];
  const minX=Math.min(a.x,b.x),maxX=Math.max(a.x,b.x),minZ=Math.min(a.z,b.z),maxZ=Math.max(a.z,b.z);
  // Leave the existing bridge deck, ramps and their walking height intact.
  if(minX<=.67&&maxX>=-.67&&minZ<=1.18&&maxZ>=-1.18)return false;
  if(!nav.clear(a,b))return false;
  for(const {p,minX:x0,maxX:x1,minZ:z0,maxZ:z1} of triangles){
   if(maxX<x0-eps||minX>x1+eps||maxZ<z0-eps||minZ>z1+eps)continue;
   let lo=0,hi=1;
   for(let j=0;j<3;j++){
    const u=p[j],v=p[(j+1)%3],dx=v.x-u.x,dz=v.z-u.z;
    const f=dx*(a.z-u.z)-dz*(a.x-u.x),g=dx*(b.z-u.z)-dz*(b.x-u.x);
    if(f>eps&&g>eps){lo=1;hi=0;break;}
    if(f>eps)lo=Math.max(lo,(eps-f)/(g-f));
    if(g>eps)hi=Math.min(hi,(eps-f)/(g-f));
   }
   if(lo<=hi)intervals.push([lo,hi]);
  }
  intervals.sort((a,b)=>a[0]-b[0]);
  let end=0;
  for(const [lo,hi] of intervals){if(lo>end+1e-8)return false;end=Math.max(end,hi);if(end>=1-1e-8)return true;}
  return false;
 };
}
function softenStationTurns(points,covered){
 const distance=(a,b)=>Math.hypot(a.x-b.x,a.z-b.z);
 function angle(a,b,c){
  const d=distance(a,b)*distance(b,c);
  return !d?0:Math.acos(Math.max(-1,Math.min(1,((b.x-a.x)*(c.x-b.x)+(b.z-a.z)*(c.z-b.z))/d)));
 }
 function take(i,dir,amount){
  for(let j=i+dir;j>=0&&j<points.length;j+=dir){
   const a=points[j-dir],b=points[j],d=distance(a,b);
   if(d>=amount&&d>0){const t=amount/d;return {j,p:{x:a.x+(b.x-a.x)*t,z:a.z+(b.z-a.z)*t}};}
   amount-=d;
  }
  return null;
 }
 for(let i=1;i<points.length-1;i++){
  const corner=points[i],incoming=points[i-1],outgoing=points[i+1],old=angle(incoming,corner,outgoing);
  if(old<Math.PI*95/180)continue;
  for(const r of [.52,.38,.26,.18,.12,.08,.05]){
   const left=take(i,-1,r),right=take(i,1,r);
   if(!left||!right)continue;
   const arc=[left.p];
   for(let n=1;n<8;n++){
    const t=n/8,s=1-t;
    arc.push({x:s*s*left.p.x+2*s*t*corner.x+t*t*right.p.x,z:s*s*left.p.z+2*s*t*corner.z+t*t*right.p.z});
   }
   arc.push(right.p);
   if(arc.some((p,j)=>j&&distance(p,arc[j-1])<.006))continue;
   const check=[points[left.j],...arc,points[right.j]];
   const quality=Math.max(...check.slice(1,-1).map((p,j)=>angle(check[j],p,check[j+2])));
   if(quality>old*.68||check.slice(1).some((p,j)=>distance(check[j],p)>.000001&&!covered(check[j],p)))continue;
   points.splice(left.j+1,right.j-left.j-1,...arc);
   i=left.j+arc.length;break;
  }
 }
 return points;
}
export function createGardenRoadRouting(roads,nav){
 const vertices=new Map();
 const same=(a,b)=>Math.hypot(a.x-b.x,a.z-b.z)<1e-7;
 const key=({x,z})=>`${x.toFixed(7)},${z.toFixed(7)}`;
 function node(p){
  const id=key(p);let v=vertices.get(id);
  if(!v){v={x:p.x,z:p.z,links:new Map()};vertices.set(id,v);}
  return v;
 }
 function link(a,b){
  if(a===b||!nav.clear(a,b))return;
  const d=Math.hypot(a.x-b.x,a.z-b.z);a.links.set(b,d);b.links.set(a,d);
 }
 function add(points){
  let prev=node(points[0]);
  for(let i=1;i<points.length;i++){
   const a=points[i-1],b=points[i],n=Math.max(1,Math.ceil(Math.hypot(b.x-a.x,b.z-a.z)/.16));
   for(let j=1;j<=n;j++){
    const t=j/n,v=node(j===n?b:{x:a.x+(b.x-a.x)*t,z:a.z+(b.z-a.z)*t});
    link(prev,v);prev=v;
   }
  }
 }
 for(const road of roads)add(road.points);
 const north=roads.find(r=>r.name==='north-bridge-access'),south=roads.find(r=>r.name==='south-bridge-access');
 if(north&&south)add([north.points[0],south.points[0]]);
 const distance=(a,b)=>Math.hypot(a.x-b.x,a.z-b.z);
 let coverage;
 return function routeOnRoad(from,to){
  if(!nav.safe(from)||!nav.safe(to))return null;
  const goal=vertices.get(key(to));
  if(!goal)return null;
  if(same(from,to))return [to];
  let start=vertices.get(key(from)),approach=[];
  if(!start){
   let best=Infinity;
   for(const v of vertices.values()){
    const d=distance(from,v);
    if(d<best&&nav.clear(from,v)){start=v;best=d;}
   }
  }
  if(!start){
   // Terrain walking is only a local lead-in when obstacles hide the paved
   // graph (for example standing behind a cottage). Do not shortcut stops.
   const nearest=[...vertices.values()].sort((a,b)=>distance(from,a)-distance(from,b));
   for(const v of nearest.slice(0,16)){
    const lead=nav.path(from,v);
    if(lead){start=v;approach=lead;break;}
   }
  }
  if(!start)return null;
  const open=[start],cost=new Map([[start,0]]),prev=new Map(),closed=new Set();
  while(open.length){
   open.sort((a,b)=>(cost.get(a)+distance(a,goal))-(cost.get(b)+distance(b,goal)));
   const v=open.shift();
   if(v===goal){
    const chain=[{x:to.x,z:to.z}];
    for(let p=prev.get(v);p;p=prev.get(p))chain.unshift({x:p.x,z:p.z});
    if(same(chain[0],start))chain.shift();
    // Remove only collinear samples. Unconstrained smoothing would drive
    // the actor off the centerline, especially on bridge-access curves.
    const out=[];
    for(const p of chain){
     const a=out.length>1?out.at(-2):start,b=out.at(-1);
     if(b){
      const u=distance(a,b),w=distance(b,p),chord=distance(a,p);
      if(u+w-chord<1e-9&&nav.clear(a,p))out.pop();
     }
     out.push(p);
    }
    const [origin,...smooth]=softenStationTurns([start,...out],(a,b)=>(coverage??=makeRibbonCoverage(roads,nav))(a,b));
    // Preserve any free-roam approach and the exact destination snap.
    const lead=approach.length?approach.slice():same(from,origin)?[]:[{x:origin.x,z:origin.z}];
    if(!smooth.length)return lead.length&&same(lead.at(-1),to)?lead:[...lead,to];
    return [...lead,...smooth];
   }
   closed.add(v);
   for(const [n,d] of v.links){
    if(closed.has(n))continue;
    const next=cost.get(v)+d;
    if(next<(cost.get(n)??Infinity)){cost.set(n,next);prev.set(n,v);if(!open.includes(n))open.push(n);}
   }
  }
  return null;
 };
}
function sampleRoad(points){
 const sampled=[points[0]];
 for(let i=1;i<points.length;i++){
  const a=sampled.at(-1),b=points[i],d=Math.hypot(b.x-a.x,b.z-a.z);
  if(d<1e-5)continue;
  const count=Math.ceil(d/.035);
  for(let j=1;j<=count;j++){const t=j/count;sampled.push({x:a.x+(b.x-a.x)*t,z:a.z+(b.z-a.z)*t});}
 }
 return sampled;
}
export function gardenRoadRibbon(points,nav){
 const samples=sampleRoad(points),rows=[];
 for(let i=0;i<samples.length;i++){
  const p=samples[i],a=samples[Math.max(0,i-1)],b=samples[Math.min(samples.length-1,i+1)];
  const dx=b.x-a.x,dz=b.z-a.z,dist=Math.hypot(dx,dz)||1;
  function edge(side){
   for(const w of [.24,.18,.12,.08,.04,.02,0]){
    const candidate={x:p.x+side*dz/dist*w,z:p.z-side*dx/dist*w};
    if(nav.clear(p,candidate)&&(!rows.length||nav.clear(rows.at(-1)[side===1?0:1],candidate)))return candidate;
   }
   return p;
  }
  rows.push([edge(1),edge(-1)]);
 }
 return rows;
}
function triangleCoverage(a,b,c,nav){
 const d=8;
 for(let i=0;i<=d;i++)for(let j=0;j<=d-i;j++){
  const k=d-i-j;
  if(!nav.safe({x:Math.fround((a.x*i+b.x*j+c.x*k)/d),z:Math.fround((a.z*i+b.z*j+c.z*k)/d)}))return false;
 }
 return true;
}
// Shrink only affected joins, preserving continuous ribbon rows between spans.
export function gardenRoadMeshData(points,nav,includeFringe=true){
 const rows=gardenRoadRibbon(points,nav),centers=sampleRoad(points);
 const zip=(a,b)=>[[a[0],a[1],b[0]],[a[1],b[1],b[0]]];
 for(let pass=0;pass<12;pass++){
  const narrow=new Set();
  for(let i=1;i<rows.length;i++)
   if(zip(rows[i-1],rows[i]).some(tri=>!triangleCoverage(...tri,nav))){narrow.add(i-1);narrow.add(i);}
  if(!narrow.size)break;
  for(const i of narrow)rows[i]=rows[i].map(p=>({x:(p.x+centers[i].x)/2,z:(p.z+centers[i].z)/2}));
 }
 const bridgeAccess=points[0].x===0&&Math.abs(Math.abs(points[0].z)-(GARDEN_BRIDGE.end-.055))<1e-7;
 const vertices=rows.flatMap(row=>row.flatMap(p=>{
  const blend=bridgeAccess&&Math.abs(p.x)<GARDEN_BRIDGE.walkHalfWidth?
   Math.min(1,Math.max(0,(GARDEN_BRIDGE.end+.07-Math.abs(p.z))/.035)):0;
  const y=.102+(.075-.102)*blend;
  return [Math.fround(p.x),y,Math.fround(p.z)];
 })),indices=[];
 for(let i=1;i<rows.length;i++){
  const a=(i-1)*2,b=i*2;
  for(const ids of [[a,a+1,b],[a+1,b+1,b]]){
   const [u,v,w]=ids.map(k=>({x:vertices[k*3],z:vertices[k*3+2]}));
   const normalY=(v.z-u.z)*(w.x-u.x)-(v.x-u.x)*(w.z-u.z);
   if(Math.abs(normalY)<=1e-10||!triangleCoverage(u,v,w,nav))continue;
   if(normalY>0)indices.push(...ids);else indices.push(ids[0],ids[2],ids[1]);
  }
 }
 // In the southeast, extend the *existing* unclipped ribbon sub-triangles
 // out to the circular keep-outs. Fine radial resolution removes large
 // shoulders left by the legacy discrete widths, and the underlying
 // triangles are never shrunk/rejected as side effect of a fill.
 if(includeFringe&&!bridgeAccess){
  const baseCount=vertices.length/3,baseIndices=indices,validEdges=new Set();
  for(let i=0;i<baseIndices.length;i+=3)for(let j=0;j<3;j++){
   const a=baseIndices[i+j],b=baseIndices[i+(j+1)%3];
   if(Math.abs(a-b)===2)validEdges.add(Math.min(a,b));
  }
  const point=i=>({x:vertices[i*3],z:vertices[i*3+2]});
  const extend=(i,side)=>{
   const p=centers[i],old=point(i*2+side);
   const clamp=x=>Math.max(0,Math.min(1,x));
   const aroundSix=clamp(1-Math.abs(p.z-3.0)/.27);
   const blend=clamp((p.x-1.80)/(.62-.39*aroundSix))*clamp((p.z-.47)/.47);
   const dx=old.x-p.x,dz=old.z-p.z,d=Math.hypot(dx,dz);
   // Round the south perimeter at station 7 with one continuous
   // same-height outer shoulder. Never fill toward its bridge spur.
   if(p.x>-.94&&p.x<.34&&p.z>3.00&&dz>.07){
    const l=-.94,r=.34,t=(p.x-l)/(r-l),t2=t*t,t3=t2*t;
    const round=(2*t3-3*t2+1)*3.208+(t3-2*t2+t)*.25*(r-l)
        +(-2*t3+3*t2)*3.313+(t3-t2)*-.035*(r-l)
        +.053*16*t2*(1-t)*(1-t);
    const q={x:old.x,z:Math.fround(Math.max(old.z,round))};
    return nav.clear(old,q)?q:old;
   }
   if(!blend||d<.012||d>.239)return old;
   const pt=w=>({x:Math.fround(p.x+dx/d*w),z:Math.fround(p.z+dz/d*w)});
   let lo=d,hi=.24;
   for(let k=0;k<9;k++){
    const mid=(lo+hi)/2;
    if(nav.clear(p,pt(mid)))lo=mid;else hi=mid;
   }
   return pt(d+Math.max(0,lo-d-.002)*blend);
  };
  const ext=Array.from({length:baseCount},(_,i)=>extend(Math.floor(i/2),i%2));
  const fringeId=new Map();
  function id(i){
   if(!fringeId.has(i)){const p=ext[i];fringeId.set(i,vertices.length/3);vertices.push(p.x,.102,p.z);}
   return fringeId.get(i);
  }
  for(let i=0;i+2<baseCount;i++){
   if(!validEdges.has(i))continue;
   const a=point(i),b=point(i+2),c=ext[i],d=ext[i+2];
   // Add only faces connected to a real base edge; a detached outer face
   // cannot survive rejection of the neighboring triangle.
   const add=(tri)=>{
    const [p,q,r]=tri.map(point),norm=(q.z-p.z)*(r.x-p.x)-(q.x-p.x)*(r.z-p.z);
    if(Math.abs(norm)<1e-10||!triangleCoverage(p,q,r,nav))return false;
    indices.push(...(norm>0?tri:[tri[0],tri[2],tri[1]]));return true;
   };
   if((a.x===c.x&&a.z===c.z)&&(b.x===d.x&&b.z===d.z))continue;
   const ac=Math.hypot(a.x-c.x,a.z-c.z),bd=Math.hypot(b.x-d.x,b.z-d.z);
   if(ac<1e-6){add([i,i+2,id(i+2)]);continue;}
   if(bd<1e-6){add([i,i+2,id(i)]);continue;}
   if(add([i,i+2,id(i)]))add([i+2,id(i),id(i+2)]);
   else if(add([i,i+2,id(i+2)]))add([i,id(i),id(i+2)]);
  }
 }
 return {vertices,indices};
}
// Flocks stay in the pond; the ferry always uses a distinct outer-water loop.
export function gardenDuckPose(t,i){
 const a=t*.55-i*.44;
 return {x:-1.72+.88*Math.cos(a),z:.32*Math.sin(a),y:.165+Math.sin(t*2-i)*.018,
  heading:Math.atan2(-.32*Math.cos(a),-.88*Math.sin(a))};
}
export function gardenFerryPose(t){
 const a=t*.16+.63;
 return {x:10.94*Math.cos(a),z:6.98*Math.sin(a),y:-.44+.024*Math.sin(t*2.1),
  heading:Math.atan2(-6.98*Math.cos(a),-10.94*Math.sin(a))};
}
// The road's station coordinates stay on the existing graph. Give the
// outside of each visibly bent loop join a round shoulder, without
// touching the bridge ramps, centerline, or physical collision geometry.
export function gardenJunctionCorners(roads,nav){
 const named=roads.find(r=>r.name==='village-loop');if(!named)return [];
 const loop=named.points.slice(0,-1),out=[],seen=new Set(),n=28;
 for(let i=0;i<loop.length;i++){
  const p=loop[i],a=loop[(i+loop.length-1)%loop.length],b=loop[(i+1)%loop.length];
  const u={x:p.x-a.x,z:p.z-a.z},v={x:b.x-p.x,z:b.z-p.z};
  const lu=Math.hypot(u.x,u.z),lv=Math.hypot(v.x,v.z);
  if(!lu||!lv)continue;
  const dot=(u.x*v.x+u.z*v.z)/(lu*lv);
  if(dot>.935)continue; // approximately 21°, including the upper ring bend
  const id=`${p.x.toFixed(2)},${p.z.toFixed(2)}`;if(seen.has(id))continue;seen.add(id);
  const dx=u.x/lu-v.x/lv,dz=u.z/lu-v.z/lv,len=Math.hypot(dx,dz)||1;
  // Avoid slapping a large disk on the inside of a street. This adds at most 0.11 world units
  // only on the outward side, with the flare strongest at the hairpin.
  const swell=.056+.054*Math.max(0,1-dot)/2;
  const edge=[];
  for(let j=0;j<n;j++){
   const t=j*2*Math.PI/n,ex=Math.cos(t),ez=Math.sin(t);
   const r=.24+swell*Math.pow(Math.max(0,(dx*ex+dz*ez)/len),1.5);
   let q=p;
   for(const k of [1,.87,.75,.62,.5,.37,.25,.13]){
    const c={x:Math.fround(p.x+ex*r*k),z:Math.fround(p.z+ez*r*k)};
    if(nav.clear(p,c)){q=c;break;}
   }
   edge.push(q);
  }
  const triangles=[];
  for(let j=0;j<n;j++){
   const a=edge[(j+1)%n],b=edge[j];
   if(a===p||b===p||!triangleCoverage(p,a,b,nav))continue;
   triangles.push([p,a,b]);
  }
  if(triangles.length)out.push(triangles);
 }
 return out;
}
export const ENGLISH_HEADLAND_FORMS=Object.freeze([
 [[-.20,.44,.02,.24,.33,.21],[.19,.42,.08,.24,.29,.27],[.02,.61,-.12,.21,.22,.21]],
 [[-.13,.37,.02,.34,.25,.24],[.03,.53,.02,.28,.16,.21],[.08,.66,.03,.18,.11,.16]],
 [[-.20,.54,-.03,.14,.46,.14],[.09,.66,-.11,.15,.57,.15],[.22,.47,.14,.13,.35,.13]],
 [[-.16,.44,.02,.29,.21,.23],[.05,.61,-.03,.24,.18,.23],[.20,.74,-.07,.17,.13,.16]],
 [[-.24,.55,.02,.11,.42,.16],[.22,.56,.02,.12,.43,.16],[0,.91,.02,.29,.11,.16]],
 [[-.17,.52,.01,.18,.31,.22],[.12,.50,-.05,.22,.28,.20],[.04,.75,-.12,.14,.29,.14],[.20,.70,.08,.13,.19,.11]]
]);
export const ENGLISH_GRADE_LANDSCAPES=Object.freeze([
 Object.freeze({grass:0x8bb78c,sand:0xe8cf9b,rock:0x967559,water:0x55aeb6,tree:0x599567}),
 Object.freeze({grass:0xa6c18a,sand:0xe9d394,rock:0xa48054,water:0x60aab9,tree:0x648d58}),
 Object.freeze({grass:0x7fb8a0,sand:0xd2c29d,rock:0x817c66,water:0x459fa8,tree:0x45866e}),
 Object.freeze({grass:0xaabb87,sand:0xe3c595,rock:0x9f765d,water:0x68afaf,tree:0xa28654}),
 Object.freeze({grass:0x9cbfa9,sand:0xe0d4b0,rock:0x7e8880,water:0x65adae,tree:0x5c8f81}),
 Object.freeze({grass:0x96b3a8,sand:0xc8cfb0,rock:0x737c86,water:0x518aa6,tree:0x537d77})
]);
// Decorative promontories live outside the walkable ellipse and inside
// the ferry orbit. Separate grade silhouettes, not paths or clickable stops.
export const ENGLISH_GRADE_SHORE_PROMONTORIES=Object.freeze([
 [[5.7,-4.27,.94,.59,1.05,1.12],[8.12,-1.35,.73,.52,.64,.46]],   // coastal village
 [[-6.2,-3.62,.91,.67,.93,.67],[-5.45,4.4,.89,.54,.56,1.91]],   // orchard bluff
 [[5.7,-4.27,.91,.59,1.26,.34],[-8.25,-1.45,.86,.57,1.12,2.61]], // rocky inlet
 [[-6.2,-3.62,.91,.59,.64,1.61],[6.1,3.93,.95,.55,.88,.78]],    // sandstone tiers
 [[-5.45,4.4,.91,.55,.73,2.21],[8.12,-1.35,.72,.56,1.04,2.67]],// misty grove
 [[6.1,3.93,.89,.55,1.19,1.47],[-8.25,-1.45,.81,.56,1.34,2.21]] // slate headlands
]);
export function gardenShorePromontoryRings(grade){
 const gi=Math.min(5,Math.max(0,(grade??1)-1));
 return ENGLISH_GRADE_SHORE_PROMONTORIES[gi].map(([x,z,rx,rz,height,yaw],i)=>{
  const k=1+gi+i*2;
  return [[1,-.59],[1.03,-.35],[.92,-.29],[.79,-.24],[.71,height*.35],[.55,height*.73],[.32,height*1.04],[0,height*1.13]].map(([r,y],row)=>
   Array.from({length:36},(_,j)=>{
    const a=j/36*Math.PI*2,shape=1+.08*Math.sin(3*a+k*.92)+.05*Math.cos(5*a-k*.62);
    const ux=Math.cos(a)*r*rx*shape,uz=Math.sin(a)*r*rz*shape;
    const shift=row/7;
    return [x+ux*Math.cos(yaw)-uz*Math.sin(yaw)-shift*.12*Math.sign(x), y+r*.06*Math.sin(2*a+k),z+ux*Math.sin(yaw)+uz*Math.cos(yaw)-shift*.08*Math.sign(z)];
   }));
 });
}
// Strictly additive contour for the rendered outer shore: broaden the
// southeast cove shoulder without clipping any route or moving collision.
export function gardenVisualShoreFactor(a,grade){
 const phase=[.51,.63,.49,.56,.68,.54][(grade??1)-1]??.51;
 const lobe=(b,w)=>{const t=Math.abs(Math.atan2(Math.sin(a-b),Math.cos(a-b)))/w;return t>=Math.PI/2?0:Math.cos(t)**5;};
 const bump=.018*lobe(phase,.32)+.011*lobe(-2.15+phase/2,.37);
 return coastFactor(a)+bump;
}
export const GARDEN_LANDMARK_DISTRICTS=Object.freeze([
 ['lantern', 'windmill'], ['greenhouse', 'windmill'], ['lantern','observatory'],
 ['clock-gate','greenhouse'], ['pagoda','lantern'], ['observatory','clock-gate']
].map(Object.freeze));
// Clay-model coloration: broad districts and a graded waterline are
// generated from x/z, never from navigation or lesson state.
export function gardenMeadowTone(x,z,grade){
 const t=(grade??1)*.65,wet=Math.exp(-((z+.03*Math.sin(x*1.25))**2)/2.05);
 const field=.5+.26*Math.sin(x*.48+z*.81+t)+.15*Math.sin(x*.91-z*.39-t);
 const grain=.018*Math.sin(x*18.1+Math.sin(z*7.6))+.013*Math.sin(z*19.7-x*15.9);
 return {warm:Math.max(0,Math.min(.49,.60*(field-.26)+grain)),
  wet:Math.max(0,Math.min(.46,.31*wet+.095*Math.cos(z*.51-x*.22+t)))};
}
export const GARDEN_WETLAND_BEDS=Object.freeze([
 [2.20,.01,.37,.26,.46],[2.86,.04,.24,.22,.31]
].map(Object.freeze));
export function buildGarden(T,{scene,nodes,mesh,color,own,nav=createGardenNavigation(nodes),roads=gardenRoadPaths(nodes,nav),grade=nodes[0]?.grade}){
 const landscape=ENGLISH_GRADE_LANDSCAPES[grade-1]??ENGLISH_GRADE_LANDSCAPES[0];
 const palette={cream:color(0xf1d8ad),wood:color(0x78513b),teal:color(0x3e9297),leaf:color(landscape.tree),water:color(landscape.water,{roughness:.32}),gold:color(0xe9b74b),pink:color(0xcc8394),blue:color(0x7093bf),ink:color(0x304b57),glass:color(0xa8d9d9),lightWood:color(0xd29b6f),chalk:color(0xfff3cf),bark:color(0x574b41)};
 function box(p,size,mat,pos){return mesh(p,new T.BoxGeometry(...size),mat,pos);}
 const spheres=new Map();
 function ball(p,r,mat,pos,scale=[1,1,1]){
  const lod=r<.075?8:r<.24?12:20;
  if(!spheres.has(lod))spheres.set(lod,new T.SphereGeometry(1,lod,lod===20?14:lod===12?8:6));
  const m=mesh(p,spheres.get(lod),mat,pos);
  m.scale.set(...scale.map(v=>r*v));m.castShadow=r>=.15;return m;
 }
 function cylinder(p,rt,rb,h,mat,pos,sides=20){return mesh(p,new T.CylinderGeometry(rt,rb,h,sides),mat,pos);}
 function group(x=0,y=0,z=0){const g=new T.Group();g.position.set(x,y,z);scene.add(g);return g;}
 function shape(rx,rz){const s=new T.Shape();for(let i=0;i<160;i++){const a=i/160*Math.PI*2,k=gardenVisualShoreFactor(a,grade),x=Math.cos(a)*rx*k,z=Math.sin(a)*rz*k;if(i)s.lineTo(x,-z);else s.moveTo(x,-z);}s.closePath();return s;}
 function land(rx,rz,depth,y,mat,project=false){const g=new T.ExtrudeGeometry(shape(rx,rz),{depth,bevelEnabled:true,bevelSize:.12,bevelThickness:.035,bevelSegments:3,steps:1});g.translate(0,0,-depth);
  if(project){
   const pos=g.attributes.position,uv=g.attributes.uv;
   for(let i=0;i<pos.count;i++)uv.setXY(i,.5+pos.getX(i)/18,.5-pos.getY(i)/12);
   uv.needsUpdate=true;
  }
  const m=mesh(scene,g,mat,[0,y,0]);m.rotation.x=-Math.PI/2;return m;}
 const size=96,earth=new T.Color(landscape.grass),sunny=new T.Color(0xa3ba55),
       marsh=new T.Color(0x3b846f),pixel=new T.Color(),rgb=new Uint8Array(size*size*4);
 for(let j=0;j<size;j++)for(let i=0;i<size;i++){
  const {warm,wet}=gardenMeadowTone((i/(size-1)-.5)*18,(j/(size-1)-.5)*12,grade);
  pixel.copy(earth).lerp(sunny,warm).lerp(marsh,wet).convertLinearToSRGB();
  const k=4*(j*size+i);
  rgb.set([Math.round(pixel.r*255),Math.round(pixel.g*255),Math.round(pixel.b*255),255],k);
 }
 const dyedGround=own(new T.DataTexture(rgb,size,size,T.RGBAFormat));
 dyedGround.colorSpace=T.SRGBColorSpace;dyedGround.minFilter=dyedGround.magFilter=T.LinearFilter;dyedGround.needsUpdate=true;
 land(8.05,4.8,.62,-.12,color(landscape.rock));land(8.03,4.78,.16,-.015,color(landscape.sand));
 land(7.8,4.52,.08,.035,color(0xffffff,{map:dyedGround}),true).name='english-dyed-meadow';
 // Batched terrain mesh: low wet-rock bands, pale tidal edge and raised
 // grass shelves in one draw per promontory. All existing roads are intact.
 const layers=[new T.Color(landscape.rock).multiplyScalar(.6),
  new T.Color(landscape.rock),new T.Color(landscape.sand),
  new T.Color(landscape.sand).lerp(new T.Color(landscape.rock),.6),
  new T.Color(landscape.rock),new T.Color(landscape.grass).multiplyScalar(.88),
  new T.Color(landscape.grass)];
 const shoreMat=color(0xffffff,{vertexColors:true});
 gardenShorePromontoryRings(grade).forEach((rings,j)=>{
  const pos=[],rgb=[];
  for(let r=0;r<rings.length-1;r++)for(let k=0;k<rings[r].length;k++){
   const l=(k+1)%rings[r].length,a=rings[r][k],b=rings[r][l],
    c=rings[r+1][k],d=rings[r+1][l];
   const tint=layers[r].clone().multiplyScalar(1+.035*Math.sin(k*.53+j));
   for(const pt of r===rings.length-2?[a,c,b]:[a,c,b,b,c,d]){
    pos.push(...pt);rgb.push(tint.r,tint.g,tint.b);
   }
  }
  const geometry=new T.BufferGeometry();
  geometry.setAttribute('position',new T.Float32BufferAttribute(pos,3));
  geometry.setAttribute('color',new T.Float32BufferAttribute(rgb,3));
  geometry.computeVertexNormals();
  const form=mesh(scene,geometry,shoreMat);form.name=`english-coast-shelf-${grade??1}-${j}`;
 });

 // Shallow bay in the meadow; the middle wooden footbridge is the only pond crossing.
 const pond=mesh(scene,new T.CircleGeometry(1,64),palette.water,[0,.09,0]);pond.rotation.x=-Math.PI/2;pond.scale.set(3.35,.79,1);
 const shore=mesh(scene,new T.TorusGeometry(1,.055,8,64),color(0xd4c293),[0,.085,0]);shore.rotation.x=-Math.PI/2;shore.scale.set(3.4,.86,1);
 // Stepped wetlands far from the bridge, entirely inside the unchanged
 // non-walkable east half of the pond. Grade changes reed colours/height.
 const peat=color(0x616c4b),moss=color([0x7b8d4d,0x839345,0x719959,0xa39158,0x819474,0x69948b][grade-1]??0x7b8d4d);
 const bloom=color([0xe8b351,0xa35678,0xffcc7b,0xe1a464,0xc494ba,0xe2cb73][grade-1]??0xe8b351);
 const marshGrade=(grade??1)-1;
 for(const [i,[x,z,rx,rz,h]] of GARDEN_WETLAND_BEDS.entries()){
  const root=group(x,0,z);root.name=`english-wetland-${i}`;
  const base=cylinder(root,1,1,.11,peat,[0,.11,0],14);base.scale.set(rx,1,rz);base.rotation.y=.2;
  const turf=cylinder(root,.76,.98,.094,moss,[0,.197,0],14);turf.scale.set(rx,1,rz);turf.rotation.y=.2;
  for(let j=0;j<5;j++){
   const a=(j+i+marshGrade*.24)*Math.PI*2/5,stem=h*(.60+.10*(j%3)),dx=.53*rx*Math.cos(a),dz=.53*rz*Math.sin(a);
   const blade=cylinder(root,.012,.022,stem,palette.leaf,[dx,.236+stem/2,dz],5);blade.rotation.z=.19*Math.sin(a);
   if(j%2===0)ball(root,.044,bloom,[dx,.224+stem,dz],[.61,1.9,.72]);
  }
 }
 const road=color(0xd6c29d);
 for(const {name,points} of roads){
  const {vertices,indices}=gardenRoadMeshData(points,nav);
  const ribbon=new T.BufferGeometry();
  ribbon.setAttribute('position',new T.Float32BufferAttribute(vertices,3));ribbon.setIndex(indices);ribbon.computeVertexNormals();
  const roadMesh=mesh(scene,ribbon,road);roadMesh.name=`english-road-${name}`;roadMesh.castShadow=false;
 }
 const rounded=gardenJunctionCorners(roads,nav).flat(2);
 if(rounded.length){
  const geo=new T.BufferGeometry();
  geo.setAttribute('position',new T.Float32BufferAttribute(rounded.flatMap(p=>[p.x,.1005,p.z]),3));
  geo.computeVertexNormals();
  const caps=mesh(scene,geo,road);caps.name='english-road-rounded-junctions';caps.castShadow=false;
 }
 const b=GARDEN_BRIDGE,deckWidth=b.deckHalfWidth*2,sideOf=Math.sign;
 // Alternating timber treads with tiny seams, a continuous dark stringer,
 // lower rail, and rounded post caps. All treads follow the walking grade.
 const timber=color(0xa87955),trim=color(0x664634),cap=color(0xd4a36d);
 for(let i=-7;i<=7;i++){
  const z=i*.145,y=gardenSurfaceHeight({x:0,z});
  if(Math.abs(i)===7){
   // Ramp end reaches the nominal deck edge with its top aligned to the
   // walk profile, rather than burying the tilted board in the grass.
   const start=sideOf(z)*.9445,end=sideOf(z)*b.end,center=(start+end)/2;
   const ramp=new T.BoxGeometry(deckWidth,.07,Math.abs(end-start));
   const position=ramp.attributes.position;
   for(let k=0;k<position.count;k++)position.setY(k,
    gardenSurfaceHeight({x:0,z:center+position.getZ(k)})+(position.getY(k)>0?0:-.07));
   ramp.computeVertexNormals();
   mesh(scene,ramp,timber,[0,0,center]);
   continue;
  }
  const tread=box(scene,[deckWidth,.07,.141],i%3?timber:cap,[0,y-.036,z]);
  tread.rotation.x=-Math.atan2(gardenSurfaceHeight({x:0,z:z+.02})-gardenSurfaceHeight({x:0,z:z-.02}),.04);
 }
 for(const x of [-.53,.53]){
  box(scene,[.045,.08,2.24],trim,[x,.127,0]);
  box(scene,[.04,.055,2.18],timber,[x,.45,0]);
  box(scene,[.028,.025,2.15],trim,[x,.32,0]);
  for(const z of [-1,-.5,0,.5,1]){
   const y=gardenSurfaceHeight({x:0,z});
   cylinder(scene,.034,.04,.49-y,trim,[x,(.49+y)/2,z],10);
   ball(scene,.044,cap,[x,.49,z],[1,.6,1]);
  }
 }
 function tree(x,z,size=1,tint=palette.leaf){cylinder(scene,.055*size,.09*size,.62*size,palette.wood,[x,.38*size,z],10);ball(scene,.31*size,tint,[x,.88*size,z],[1,1.2,1]);ball(scene,.23*size,tint,[x-.15*size,.74*size,z+.08*size]);}
 function flower(x,z,c=palette.pink){cylinder(scene,.01,.013,.22,palette.leaf,[x,.18,z],6);for(let j=0;j<5;j++){const a=j/5*Math.PI*2;ball(scene,.042,c,[x+Math.cos(a)*.045,.31,z+Math.sin(a)*.045]);}ball(scene,.025,palette.gold,[x,.32,z]);}
 // Shore decorations stay outside the navigation boundary, including their canopy.
 for(let i=0;i<34;i++){const a=i/34*Math.PI*2,x=Math.cos(a)*7.6*coastFactor(a),z=Math.sin(a)*4.42*coastFactor(a);if(i%3===0){
  const seed=(i+(grade??1)*3)%7,tint=seed>3?palette.leaf:color([0x678b60,0xa59a56,0x5e9487,0x738955][seed]);
  if(seed%3===0){
   cylinder(scene,.035,.065,.39,palette.wood,[x,.25,z],8);
   for(let j=0;j<3;j++)mesh(scene,new T.ConeGeometry(.31-j*.063,.43,8),tint,[x,.52+j*.175,z]).rotation.y=i*.27;
  }else if(seed%3===1){
   const lean=cylinder(scene,.047,.059,.57,palette.wood,[x,.335,z],8);lean.rotation.z=.11;
   ball(scene,.27,tint,[x+.092,.71,z],[1.46,.66,1.05]);
   ball(scene,.22,tint,[x-.11,.57,z-.09],[1.1,.62,.92]);
  }else tree(x,z,.77+(i%4)*.10,tint);
 }else if(i%3===1)ball(scene,.18,color(0x949c8a),[x,.15,z],[1.4,.7,1]);else for(let k=0;k<3;k++)flower(x+k*.1,z, i%2?palette.pink:palette.gold);}
 function door(g,x=0,z=.33){box(g,[.17,.34,.035],palette.wood,[x,.24,z]);ball(g,.018,palette.gold,[x+.05,.24,z+.03]);}
 function window(g,x,y,z){box(g,[.16,.18,.025],palette.teal,[x,y,z]);box(g,[.018,.18,.035],palette.cream,[x,y,z+.01]);box(g,[.16,.018,.035],palette.cream,[x,y,z+.01]);}
 function roof(g,mat,y=.9){const r=mesh(g,new T.ConeGeometry(.67,.4,4),mat,[0,y,0]);r.rotation.y=Math.PI/4;return r;}
 function school(g){
  const blue=color(0x447e88),mortar=color(0xe9b478),brick=color(0xbe7a61);
  box(g,[1.02,.14,.67],mortar,[0,.17,0]);
  box(g,[.94,.52,.58],palette.cream,[0,.48,0]);
  box(g,[.97,.08,.64],brick,[0,.72,0]);
  roof(g,blue,.91).scale.set(1,.82,.88);
  box(g,[.28,.36,.29],brick,[0,.84,.17]);roof(g,blue,1.1).scale.set(.34,.45,.36);
  const bell=ball(g,.066,palette.gold,[0,.92,.329],[.9,1.1,.65]);bell.name='school-bell';
  for(const x of [-.31,.31]){
   window(g,x,.53,.306);box(g,[.24,.05,.065],mortar,[x,.409,.327]);
   box(g,[.068,.23,.032],brick,[x*.61,.53,.307]);
  }
  box(g,[.28,.09,.18],mortar,[0,.125,.37]);door(g,0,.312);
  for(const x of [-.19,.19])cylinder(g,.027,.04,.37,mortar,[x,.36,.34],8);
  box(g,[.44,.055,.17],blue,[0,.575,.345]);
 }
 function art(g){box(g,[.55,.44,.5],palette.cream,[-.16,.3,0]);roof(g,palette.pink,.72).scale.set(.7,.8,.85);const easel=box(g,[.36,.44,.035],palette.wood,[.32,.4,.25]);easel.rotation.x=-.12;box(g,[.3,.33,.04],color(0xfff1d3),[.32,.46,.28]);for(let i=0;i<4;i++)ball(g,.048,[palette.teal,palette.gold,palette.pink,palette.blue][i],[.24+i%2*.14,.39+Math.floor(i/2)*.14,.31]);for(const x of [-.1,.08])cylinder(g,.075,.07,.19,[palette.blue,palette.gold][x>0?1:0],[x,.18,.4]);}
 function clock(g){box(g,[.55,.95,.55],palette.cream,[0,.56,0]);roof(g,palette.blue,1.2).scale.set(.7,.7,.7);const face=cylinder(g,.23,.23,.045,color(0xfff1d3),[0,.86,.3],32);face.rotation.x=Math.PI/2;box(g,[.02,.17,.04],palette.wood,[0,.91,.34]);const hand=box(g,[.13,.02,.04],palette.wood,[.055,.86,.34]);door(g,0,.3);for(const x of [-.4,.4]){cylinder(g,.07,.07,.28,palette.pink,[x,.2,0]);ball(g,.12,palette.gold,[x,.44,0]);}}
 function play(g){const colors=[palette.teal,palette.pink,palette.gold];for(let i=0;i<3;i++){box(g,[.3,.3,.3],colors[i],[i*.28-.28,.25,0]);const cap=mesh(g,new T.ConeGeometry(.21,.28,4),colors[(i+1)%3],[i*.28-.28,.53,0]);cap.rotation.y=Math.PI/4;}box(g,[.3,.08,.8],palette.blue,[.33,.29,.2]).rotation.x=.42;for(const x of [-.43,-.16])ball(g,.09,palette.wood,[x,.18,.4]);box(g,[.45,.17,.23],palette.gold,[-.29,.3,.4]);}
 function animal(g){for(const x of [-.5,.5])for(const z of [-.43,.43])cylinder(g,.025,.025,.28,palette.wood,[x,.2,z],8);for(const z of [-.43,.43])box(g,[1.02,.045,.04],palette.wood,[0,.3,z]);const hay=color(0xcda451);box(g,[.3,.23,.3],hay,[-.27,.19,-.18]);for(const [x,z,c]of[[.13,.15,0xf7ead1],[-.2,.23,0xb8a497]]){const mat=color(c);ball(g,.16,mat,[x,.24,z],[1,.85,1.3]);ball(g,.1,mat,[x,.37,z+.12]);for(const dx of [-.045,.045])ball(g,.035,mat,[x+dx,.51,z+.12],[.7,2.2,.7]);for(const dx of [-.035,.035])ball(g,.012,palette.wood,[x+dx,.4,z+.2]);}}
 function sport(g){box(g,[1.05,.04,.85],color(0xc47f65),[0,.1,0]);const line=color(0xf8e8c4);for(const x of [-.44,.44])box(g,[.02,.01,.72],line,[x,.125,0]);for(const z of [-.35,.35])box(g,[.9,.01,.02],line,[0,.125,z]);for(const x of [-.36,.36])cylinder(g,.025,.025,.75,palette.wood,[x,.47,-.32],8);box(g,[.75,.035,.035],line,[0,.84,-.32]);box(g,[.6,.4,.015],color(0x9ebaae,{transparent:true,opacity:.55}),[0,.59,-.33]);ball(g,.13,palette.gold,[.2,.25,.2]);}
 function garden(g){for(let i=0;i<6;i++){const a=i*Math.PI/3;ball(g,.17,i%2?palette.pink:palette.gold,[Math.cos(a)*.35,.19,Math.sin(a)*.35],[1,.45,1]);}cylinder(g,.21,.27,.22,palette.cream,[0,.2,0]);const heart=new T.Shape();heart.moveTo(0,0);heart.bezierCurveTo(-.38,.24,-.17,.6,0,.34);heart.bezierCurveTo(.17,.6,.38,.24,0,0);const h=mesh(g,new T.ExtrudeGeometry(heart,{depth:.08,bevelEnabled:true,bevelSize:.025,bevelThickness:.025,bevelSegments:2,steps:1}),palette.pink,[0,.39,0]);h.rotation.y=-.15;}
 function market(g){
  const rose=color(0xb95968);
  box(g,[.98,.075,.65],palette.lightWood,[0,.18,0]);
  box(g,[.78,.29,.4],palette.cream,[0,.34,.05]);box(g,[.86,.06,.53],palette.wood,[0,.51,.05]);
  for(const x of [-.43,.43])for(const z of [-.27,.31])cylinder(g,.022,.027,.66,palette.wood,[x,.55,z],8);
  for(let i=0;i<7;i++){
   const x=(i-3)*.131,mat=i%2?palette.chalk:rose;
   const sail=box(g,[.133,.054,.699],mat,[x,.905,.035]);sail.rotation.x=.2;
   const fringe=box(g,[.13,.085,.038],mat,[x,.81,.381]);fringe.rotation.x=.12;
  }
  for(let row=0;row<2;row++)for(let i=0;i<3;i++){
   const x=(i-1)*.23,z=row*.17-.08,fruit=[palette.leaf,palette.gold,rose][i];
   ball(g,.046,fruit,[x,.589,z],[1.03,.91,1.04]);ball(g,.033,fruit,[x+.043,.585,z+.05]);
  }
  for(const x of [-.18,.18])box(g,[.25,.065,.035],palette.lightWood,[x,.31,.263]);
 }
 function nature(g){cylinder(g,.3,.4,.2,palette.wood,[0,.17,0]);for(let i=0;i<5;i++){const a=i*1.3,x=Math.sin(a)*.3,z=Math.cos(a)*.3;cylinder(g,.018,.02,.65,palette.leaf,[x,.56,z],8);for(let j=0;j<7;j++){const t=j*Math.PI*2/7;ball(g,.07,palette.gold,[x+Math.cos(t)*.12,.9+Math.sin(t)*.12,z]);}ball(g,.085,palette.wood,[x,.9,z+.015]);}}
 function library(g){
  const indigo=color(0x576282),vellum=color(0xe8c994);
  box(g,[.98,.11,.68],vellum,[0,.18,0]);
  // Octagonal reading room and curved roof give it a different silhouette from the school.
  cylinder(g,.48,.5,.49,palette.cream,[0,.46,0],8).rotation.y=Math.PI/8;
  cylinder(g,.52,.53,.094,indigo,[0,.72,0],8).rotation.y=Math.PI/8;
  const dome=mesh(g,new T.SphereGeometry(.49,20,10,0,Math.PI*2,0,Math.PI/2),indigo,[0,.764,0]);
  dome.scale.y=.73;
  ball(g,.059,palette.gold,[0,1.13,0]);
  for(const x of [-.31,.31]){
   box(g,[.155,.20,.034],palette.ink,[x,.55,.424]);
   box(g,[.106,.152,.041],palette.glass,[x,.55,.438]);
   box(g,[.008,.153,.048],vellum,[x,.55,.444]);
  }
  door(g,0,.477);
  // A pair of open book covers with lagged pages as the entry emblem.
  for(const side of [-1,1]){
   const cover=box(g,[.15,.115,.025],palette.pink,[side*.072,.766,.45]);
   cover.rotation.z=-side*.21;
   const pages=box(g,[.133,.094,.02],palette.chalk,[side*.071,.768,.469]);pages.rotation.z=-side*.21;
  }
 }
 function plaza(g){cylinder(g,.39,.45,.16,palette.cream,[0,.15,0]);cylinder(g,.33,.33,.03,palette.water,[0,.25,0]);cylinder(g,.08,.13,.55,palette.cream,[0,.45,0]);ball(g,.14,palette.gold,[0,.8,0]);for(const x of [-.42,.42]){box(g,[.2,.06,.48],palette.wood,[x,.26,0]);for(const z of [-.16,.16])box(g,[.04,.22,.04],palette.wood,[x,.13,z]);}}
 const builders={school,art,clock,play,animal,sport,garden,market,nature,library,plaza};
 const footprints=gardenFootprints(nodes);
 for(const f of footprints){
  const kind=stationLandmarkKind({id:f.unitId,title:nodes.find(n=>n.id===f.unitId).title});
  const g=group(f.x,.1,f.z);g.name=`english-${kind}-${f.unitId}`;g.scale.setScalar(1.25);
  if(kind===f.theme)builders[f.theme](g);
  else buildStationLandmarkVariant(T,g,kind,{mesh,box,ball,cylinder,palette});
 }
 // Tall recognisable district anchors inside the two existing .64
 // collision disks. Neither the outer terrace nor the roof is a stop.
 const ridge=color(landscape.rock),ledge=color(landscape.sand),
       brick=color([0xc87562,0xaa7248,0xb86e63,0xb77957,0x7c668a,0x607a96][grade-1]??0xc87562);
 const towerRoof=color([0x445f85,0x65865d,0x417681,0x9a574f,0x4d697b,0x476485][grade-1]??0x445f85);
 const firs=color(landscape.tree);
 function cone(p,r,h,mat,at,n=12){return mesh(p,new T.ConeGeometry(r,h,n),mat,at);}
 function anchors(h,kind){
  // All visual parts stay well inside the terrain's existing keep-out disk.
  switch(kind){
   case 'lantern':
    cylinder(h,.21,.27,.79,palette.chalk,[0,.81,0],14);
    for(const y of [.62,.91])cylinder(h,.225,.25,.13,brick,[0,y,0],14);
    cylinder(h,.265,.24,.085,towerRoof,[0,1.24,0],14);
    cylinder(h,.184,.195,.29,palette.glass,[0,1.41,0],12);
    for(let k=0;k<4;k++){const a=k/4*Math.PI*2;cylinder(h,.017,.017,.33,towerRoof,[.183*Math.cos(a),1.41,.183*Math.sin(a)],7);}
    cone(h,.254,.29,towerRoof,[0,1.70,0],12);ball(h,.047,palette.gold,[0,1.86,0]);break;
   case 'windmill':
    cylinder(h,.244,.325,.75,palette.chalk,[0,.79,0],10);
    cone(h,.33,.32,brick,[0,1.27,0],10);
    ball(h,.077,palette.gold,[0,1.24,.294]);
    for(let k=0;k<4;k++){
     const a=k*Math.PI/2+.28;
     box(h,[.094,.33,.035],palette.wood,[-.21*Math.sin(a),1.23+.21*Math.cos(a),.295]).rotation.z=a;
     box(h,[.16,.19,.039],palette.chalk,[-.31*Math.sin(a),1.23+.31*Math.cos(a),.303]).rotation.z=a;
    }
    box(h,[.155,.27,.03],palette.wood,[0,.57,.31]);break;
   case 'greenhouse':
    box(h,[.64,.36,.65],palette.glass,[0,.63,0]);
    const dr=mesh(h,new T.CylinderGeometry(.455,.455,.65,4,1,false,Math.PI/4),palette.glass,[0,.83,0]);dr.rotation.z=Math.PI/2;dr.scale.y=.83;
    for(const x of [-.322,0,.322])for(const z of [-.326,.326])
     box(h,[.035,.46,.033],towerRoof,[x,.67,z]);
    box(h,[.675,.039,.682],towerRoof,[0,.48,0]);box(h,[.675,.034,.68],towerRoof,[0,.82,0]);
    ball(h,.18,firs,[.11,.67,.24],[.85,1.45,.66]);break;
   case 'observatory':
    cylinder(h,.38,.42,.42,palette.chalk,[0,.65,0],12);
    cylinder(h,.435,.423,.09,towerRoof,[0,.87,0],12);
    mesh(h,new T.SphereGeometry(.38,16,8,0,Math.PI*2,0,Math.PI/2),towerRoof,[0,.92,0]).scale.y=.78;
    box(h,[.12,.18,.035],palette.glass,[0,.70,.412]);
    const tube=cylinder(h,.08,.084,.48,palette.wood,[.07,1.21,.07],12);
    tube.rotation.set(.45,0,-.9);ball(h,.07,palette.glass,[.25,1.35,.13]);break;
   case 'clock-gate':
    for(const x of [-.2,.2]){box(h,[.13,.64,.34],ledge,[x,.75,0]);cone(h,.156,.24,brick,[x,1.15,0],4).rotation.y=Math.PI/4;}
    box(h,[.52,.15,.38],towerRoof,[0,1.04,0]);
    const clock=cylinder(h,.133,.133,.057,palette.chalk,[0,1.16,.2],20);clock.rotation.x=Math.PI/2;
    box(h,[.018,.12,.025],palette.ink,[0,1.193,.24]);box(h,[.09,.016,.027],palette.ink,[.04,1.16,.24]);break;
   case 'pagoda':
    for(const [i,r] of [.4,.31,.235].entries()){
     cylinder(h,r*.66,r*.75,.30,palette.chalk,[0,.58+i*.3,0],6);
     cone(h,r,.23,i%2?brick:towerRoof,[0,.76+i*.3,0],6);
    }
    cylinder(h,.023,.036,.20,palette.gold,[0,1.49,0],8);break;
  }
 }
 for(const [idx,[x,z]] of [[-6.1,.1],[5.8,-1.9]].entries()){
  const h=group(x,0,z),kind=(GARDEN_LANDMARK_DISTRICTS[grade-1]??GARDEN_LANDMARK_DISTRICTS[0])[idx];
  h.name=`english-district-${grade??1}-${kind}`;
  const bed=cylinder(h,.54,.60,.18,ridge,[0,.16,0],14);bed.rotation.y=.12+idx*.21;
  const band=cylinder(h,.49,.54,.105,ledge,[0,.291,0],14);band.rotation.y=bed.rotation.y;
  cylinder(h,.454,.486,.10,firs,[0,.389,0],14).rotation.y=bed.rotation.y;
  anchors(h,kind);
 }
 // Clustered shrubs inside each landmark's already-blocked footprint, never over a road.
 footprints.forEach((f,i)=>{for(let k=0;k<3;k++){const a=Math.PI+k*.6;ball(scene,.12,i%2?palette.leaf:color(0x8da56b),[f.x+Math.cos(a)*.67,.16,f.z+Math.sin(a)*.67],[1.2,.7,1]);}});
 // Water lilies, small ripples and a family swimming in an independent oval.
 for(const x of [-2.69,-1.04,1.5,2.4]){
  const lily=mesh(scene,new T.CircleGeometry(.16,16),palette.leaf,[x,.11,.53*Math.sin(x)]);
  lily.rotateX(-Math.PI/2);lily.castShadow=false;
  ball(scene,.055,palette.pink,[x,.16,.53*Math.sin(x)]);
 }
 const wakeMat=color(0xb6dcda,{roughness:1}),headMat=color(0xf3d378),beakMat=color(0xd98748);
 const ducks=[];
 for(let i=0;i<3;i++){
  const g=group(),size=i?.84:1.24;g.name=i?'english-duckling':'english-duck';g.scale.setScalar(size);
  ball(g,.117,headMat,[0,0,0],[1.28,.88,1]);ball(g,.068,headMat,[.112,.085,0]);
  mesh(g,new T.ConeGeometry(.028,.064,8),beakMat,[.186,.079,0]).rotation.z=-Math.PI/2;
  for(const side of [-1,1])ball(g,.009,palette.ink,[.142,.102,side*.05]).castShadow=false;
  const ripple=mesh(g,new T.RingGeometry(.16,.18,20),wakeMat,[-.06,-.066,0]);ripple.rotateX(-Math.PI/2);ripple.castShadow=false;ripple.scale.x=1.36;
  ducks.push({g,ripple,size});
 }
 const ferry=group();ferry.name='english-mail-ferry';ferry.scale.setScalar(1.22);
 const hull=ball(ferry,.53,palette.teal,[0,.11,0],[1.13,.36,.63]);hull.name='ferry-hull';
 ball(ferry,.46,palette.cream,[0,.21,0],[1.15,.10,.65]);
 box(ferry,[.36,.23,.37],palette.cream,[-.03,.34,0]);box(ferry,[.41,.07,.42],palette.pink,[-.03,.48,0]);
 for(const z of [-.191,.191])box(ferry,[.20,.118,.028],palette.glass,[-.018,.36,z]).castShadow=false;
 cylinder(ferry,.027,.037,.16,palette.ink,[-.19,.54,0],8);
 // A bow pennant and high-contrast life rings make its job readable at full view.
 cylinder(ferry,.013,.014,.38,palette.wood,[.31,.38,0],7);
 const pennant=mesh(ferry,new T.CircleGeometry(.092,3),color(0xe9b74b,{side:T.DoubleSide}),[.37,.54,0]);pennant.rotation.z=-Math.PI/6;
 const ringGeo=new T.TorusGeometry(.052,.016,6,12);
 for(const z of [-.246,.246]){
  const ring=mesh(ferry,ringGeo,palette.pink,[.27,.255,z]);ring.castShadow=false;
 }
 const foam=mesh(ferry,new T.RingGeometry(.36,.39,28),wakeMat,[-.33,-.094,0]);foam.rotateX(-Math.PI/2);foam.scale.x=1.84;foam.castShadow=false;
 // Raised color contours and headland plants give the shore depth outside
 // the walking boundary without adding obstructions to the shared route.
 const stone=color(0xa5a98a),lichen=color(0x6c9f78);
 for(const idx of [0,1,7,13,14,18,22,27,28,33]){
  const a=idx*Math.PI*2/34,q=coastFactor(a);
  const x=Math.cos(a)*7.80*q,z=Math.sin(a)*4.61*q;
  ball(scene,.23,stone,[x,.095,z],[1.37,.64,.9]).castShadow=false;
  ball(scene,.134,lichen,[x,.175,z],[1.27,.49,.87]).castShadow=false;
 }
 function animate(t){
  ducks.forEach(({g,ripple,size},i)=>{const {x,y,z,heading}=gardenDuckPose(t,i);g.position.set(x,y,z);g.rotation.y=heading;ripple.position.y=(.104-y)/size;});
  const {x,y,z,heading}=gardenFerryPose(t);ferry.position.set(x,y,z);ferry.rotation.y=heading;foam.position.y=(-.535-y)/ferry.scale.y;
 }
 animate(0);
 return {animate};
}
