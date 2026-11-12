/** Nature ecology art pack. Coordinates here retain the scene's Blender XY/Z convention. */
export const ECOLOGY_VERSION = 'nature-ecology-astra-v1';
export const GRADE_ECOLOGY = Object.freeze({
  1: {name:'種子與果樹的家',trees:['orchard','broadleaf','blossom','orchard'],flowers:[0xeebf43,0xe68788,0xf2d778],landmarks:['seedhouse','pergola','birdhide','seedhouse'],fauna:['hedgehog','sparrow','rabbit','butterfly'],greens:[0x2b593c,0x4c7c42,0x759544],stone:0x94896a,water:0x398f91},
  2: {name:'溪流與四季村落',trees:['willow','blossom','broadleaf','willow'],flowers:[0xe8bd59,0xbb8cba,0xe69e92],landmarks:['birdhide','pergola','seedhouse','birdhide'],fauna:['duck','frog','dragonfly','sparrow'],greens:[0x235b47,0x438864,0x8aab60],stone:0x879c8e,water:0x287e92},
  3: {name:'層層植物探險園',trees:['broadleaf','palm','orchard','broadleaf'],flowers:[0xecb450,0xd37ba4,0xe88855],landmarks:['greenhouse','seedhouse','pergola','greenhouse'],fauna:['butterfly','bee','tortoise','squirrel'],greens:[0x194e39,0x37794b,0x7b994b],stone:0x8c8b6e,water:0x277f87},
  4: {name:'季節山林觀察站',trees:['conifer','maple','broadleaf','conifer'],flowers:[0xbc8cac,0xe8c55c,0xd48868],landmarks:['lookout','seedhouse','pergola','lookout'],fauna:['deer','squirrel','owl','butterfly'],greens:[0x244e43,0x4c7450,0x889355],stone:0x858776,water:0x377f88},
  5: {name:'岩層與濕地生態谷',trees:['willow','mangrove','conifer','mangrove'],flowers:[0xe2c772,0xb18cba,0xd47d85],landmarks:['birdhide','lookout','birdhide','pergola'],fauna:['heron','crab','dragonfly','frog'],greens:[0x214d43,0x477664,0x809c61],stone:0x637876,water:0x286f83},
  6: {name:'高地森林保育區',trees:['cedar','conifer','maple','cedar'],flowers:[0xd99ab6,0xc4b05c,0xc98d6c],landmarks:['ranger','lookout','ranger','greenhouse'],fauna:['fox','deer','owl','butterfly'],greens:[0x25493d,0x416850,0x73855e],stone:0x7c7e72,water:0x3a7784}
});
export function seededRandom(seed=1){let n=seed>>>0;return()=>{n+=0x6D2B79F5;let t=n;t=Math.imul(t^t>>>15,t|1);t^=t+Math.imul(t^t>>>7,t|61);return((t^t>>>14)>>>0)/4294967296;};}
export function distanceToSegment(p,a,b){const dx=b[0]-a[0],dy=b[1]-a[1],d=dx*dx+dy*dy,t=d?Math.max(0,Math.min(1,((p[0]-a[0])*dx+(p[1]-a[1])*dy)/d)):0;return Math.hypot(p[0]-a[0]-dx*t,p[1]-a[1]-dy*t);}
export function inPolygon(p,polygon){let inside=false;for(let i=0,j=polygon.length-1;i<polygon.length;j=i++){const a=polygon[i],b=polygon[j];if((a[1]>p[1])!==(b[1]>p[1])&&p[0]<(b[0]-a[0])*(p[1]-a[1])/(b[1]-a[1])+a[0])inside=!inside;}return inside;}
export function makeClearance(data,{roadHalfWidth=1.3,entranceRadius=1.8}={}){
  const nodes=new Map((data.nodes||[]).map(n=>[n.id,n.p]));
  const roads=(data.edges||[]).map(([a,b])=>[nodes.get(a),nodes.get(b)]).filter(([a,b])=>a&&b);
  const fixed=(data.obstacles||[]).map(o=>({p:[o.x,o.y],r:o.r}));
  for(const s of data.stationsData||[]){fixed.push({p:s.p,r:3.1});if(s.entry)fixed.push({p:s.entry,r:entranceRadius});}
  for(const p of [data.spawn,data.landingZone?.rocket?.p].filter(Boolean))fixed.push({p,r:5});
  // Keep the swept disk of all previous animated inhabitants, not just their spawn.
  for(const a of data.ambientLife?.actors||[]){const points=a.motion?.route?.points;if(points?.length){for(let i=0;i<points.length;i++){const p=points[i],q=points[(i+1)%points.length];roads.push([[a.p[0]+p[0],a.p[1]+p[1]],[a.p[0]+q[0],a.p[1]+q[1]]]);}}else if(a.p)fixed.push({p:a.p,r:a.sweptRadiusBound||1});}
  const occupied=[];
  const free=(p,r,region,{ignoreOccupied=false}={})=>{
    if(!p?.every(Number.isFinite)||!region?.boundary?.length||!inPolygon(p,region.boundary))return false;
    if(region.boundary.some((v,i)=>distanceToSegment(p,v,region.boundary[(i+1)%region.boundary.length])<r+.5))return false;
    if(roads.some(([a,b])=>distanceToSegment(p,a,b)<roadHalfWidth+r))return false;
    if(fixed.some(o=>Math.hypot(p[0]-o.p[0],p[1]-o.p[1])<o.r+r+.35))return false;
    return ignoreOccupied||!occupied.some(o=>Math.hypot(p[0]-o.p[0],p[1]-o.p[1])<o.r+r+.25);
  };
  const segmentFree=(a,b,r,region,options)=>{const length=Math.hypot(b[0]-a[0],b[1]-a[1]),n=Math.max(1,Math.ceil(length/.2));for(let i=0;i<=n;i++){const t=i/n;if(!free([a[0]+(b[0]-a[0])*t,a[1]+(b[1]-a[1])*t],r+.12,region,options))return false;}return true;};
  return {free,segmentFree,reserve(p,r){occupied.push({p:[p[0],p[1]],r});},occupied,roads};
}
const span=region=>({minX:Math.min(...region.boundary.map(p=>p[0])),maxX:Math.max(...region.boundary.map(p=>p[0])),minY:Math.min(...region.boundary.map(p=>p[1])),maxY:Math.max(...region.boundary.map(p=>p[1]))});
const flying=kind=>['butterfly','bee','dragonfly','owl','sparrow'].includes(kind);
/** Never mutates course/road/obstacle data. Missing space causes omission, not placement over paths. */
export function planEcology(data,{grade=data.grade||1,quality='normal'}={}){
  if(!GRADE_ECOLOGY[grade])throw new RangeError('Ecology grade must be 1–6');
  const profile=GRADE_ECOLOGY[grade],rng=seededRandom(grade*17219+6331),clear=makeClearance(data),patches=[],actors=[];
  const regions=data.regions||[];
  for(let ri=0;ri<regions.length;ri++){
    const region=regions[ri],b=span(region),candidate=()=>[b.minX+rng()*(b.maxX-b.minX),b.minY+rng()*(b.maxY-b.minY)],height=region.center?.[2]||0;
    const add=(kind,r,attempts=650)=>{for(let n=0;n<attempts;n++){const p=candidate();if(!clear.free(p,r,region))continue;clear.reserve(p,r);const item={id:`ecology-g${grade}-${region.id}-${kind}-${patches.length}`,regionId:region.id,regionIndex:ri,kind,p:[...p,height],radius:r,yaw:rng()*Math.PI*2,seed:Math.floor(rng()*1e8),tree:profile.trees[ri%4],landmark:profile.landmarks[ri%4]};patches.push(item);return item;}return null;};
    // Silhouette first: one authored landmark, then asymmetrical rock terraces and groves.
    add('landmark',2.45);add('knoll',2.35);add('grove',1.9);add('grove',1.65);
    if(grade===2||grade===5||ri===1)add('watergarden',1.75);else add('meadow',1.6);
    const budget=quality==='low'?7:13;
    for(let j=0;j<budget;j++)add(['fern','flowers','stone','grass','sapling'][j%5],j%5===4?.78:.68,140);
    // Independent bounded foraging trails: irregular route, pause at each stop, reverse on return.
    const num=quality==='low'?1:3;
    for(let ai=0;ai<num;ai++){
      const kind=profile.fauna[(ri+ai)%profile.fauna.length],isFlying=flying(kind),r=isFlying?.35:['deer','heron','fox'].includes(kind)?.65:.45;
      let route=null;
      for(let attempt=0;attempt<180&&!route;attempt++){
        const start=candidate();if(!clear.free(start,r+.15,region))continue;const points=[start];
        for(let step=0;step<5;step++){
          const last=points.at(-1);let next=null;
          for(let k=0;k<30;k++){const angle=rng()*Math.PI*2,length=1.2+rng()*2.7,p=[last[0]+Math.cos(angle)*length,last[1]+Math.sin(angle)*length];if(points.some(q=>Math.hypot(p[0]-q[0],p[1]-q[1])<.8))continue;if(clear.segmentFree(last,p,r,region)){next=p;break;}}
          if(!next)break;points.push(next);
        }
        if(points.length>=3)route=points;
      }
      if(route){for(let i=0;i<route.length-1;i++){const a=route[i],b=route[i+1],n=Math.ceil(Math.hypot(b[0]-a[0],b[1]-a[1])/.35);for(let j=0;j<=n;j++)clear.reserve([a[0]+(b[0]-a[0])*j/n,a[1]+(b[1]-a[1])*j/n],r+.12);}
        actors.push({id:`ecology-g${grade}-${region.id}-${kind}-${ai}`,kind,regionId:region.id,route:route.map(p=>[...p,height]),radius:r,flying:isFlying,seed:Math.floor(rng()*1e8),speed:isFlying?.9:['tortoise','hedgehog','frog'].includes(kind)?.25:.5,phase:rng()*20});}
    }
  }
  return {version:ECOLOGY_VERSION,grade,profile,patches,actors};
}
/** Exact straight-segment geometry, eased arrival/departure and dwell. No Catmull-Rom corner overshoot. */
export function evaluateForaging(actor,seconds){
  const points=actor.route;if(points.length<2)return {p:points[0],heading:0,moving:false};
  const stops=[...points,...points.slice(1,-1).reverse()],legs=stops.map((a,i)=>{const b=stops[(i+1)%stops.length],length=Math.hypot(b[0]-a[0],b[1]-a[1]);return {a,b,travel:length/actor.speed,dwell:1.3+(i%3)*.55};});
  const duration=legs.reduce((n,l)=>n+l.travel+l.dwell,0);let t=((seconds+actor.phase)%duration+duration)%duration;
  for(const leg of legs){if(t<leg.dwell)return {p:leg.a.slice(),heading:Math.atan2(leg.b[0]-leg.a[0],-(leg.b[1]-leg.a[1])),moving:false};t-=leg.dwell;if(t<leg.travel){const u=t/leg.travel,s=u*u*(3-2*u);return {p:leg.a.map((v,i)=>v+(leg.b[i]-v)*s),heading:Math.atan2(leg.b[0]-leg.a[0],-(leg.b[1]-leg.a[1])),moving:true};}t-=leg.travel;}
  return {p:points[0].slice(),heading:0,moving:false};
}
