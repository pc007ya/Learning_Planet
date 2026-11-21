import {WIDTH,projectOnEdge,route,triangleY} from './district-layout-r7.mjs';
import {ROAD_RADIUS,PORCH_RADIUS,RIBBON_WIDTH,polar,canWalk,wrap} from './paths.mjs';

const validPoint=p=>p&&Number.isFinite(p.x)&&Number.isFinite(p.z);
const distance=(a,b)=>Math.hypot(a.x-b.x,a.z-b.z);
const length=points=>points.slice(1).reduce((n,p,i)=>n+distance(p,points[i]),0);
const edgePart=(p,id)=>id===p.edge.a ?
 [p.q,...p.edge.samples.slice(0,p.segment+1).reverse()] :
 [p.q,...p.edge.samples.slice(p.segment+1)];
function project(layout,position,checkSurface){
 let found=null;
 for(const e of layout.edges){
  const p=projectOnEdge(position,e);
  if(p.dist>WIDTH+.001||found&&found.dist<=p.dist)continue;
  if(checkSurface&&triangleY(position,e.deck)===undefined&&
     ![e.a,e.b].some(id=>distance(position,layout.nodes.get(id))<.65))continue;
  found={...p,edge:e};
 }
 return found;
}
/** Stay on the authored ribbon/ramp centerline. Terrain and water never join the graph. */
export function districtGroundRoute(layout,start,finish,{stationId,sourceNode}={}){
 if(!validPoint(start)||!validPoint(finish))return null;
 const from=sourceNode?null:project(layout,start,false);
 const to=stationId?null:project(layout,finish,true);
 if(!sourceNode&&!from||!stationId&&!to)return null;
 const sourceChoices=sourceNode?[[sourceNode,[layout.nodes.get(sourceNode)]]]:
 [from.edge.a,from.edge.b].map(id=>[id,edgePart(from,id)]);
 const targetChoices=stationId?[[stationId,[layout.nodes.get(stationId)]]]:
 [to.edge.a,to.edge.b].map(id=>[id,edgePart(to,id).reverse()]);
 let best=null,cost=Infinity;
 function candidate(points){
  const result=points.filter((q,i)=>!i||distance(q,points[i-1])>.00001);
  const value=length(result);
  if(value<cost){cost=value;best=result;}
 }
 if(from&&to&&from.edge===to.edge){
  const e=from.edge,f=from.segment+from.t,t=to.segment+to.t;
  const between=e.samples.slice(Math.floor(Math.min(f,t))+1,Math.ceil(Math.max(f,t)));
  candidate([start,from.q,...(f>t?between.reverse():between),to.q]);
 }
 for(const [a,lead] of sourceChoices)for(const [b,tail] of targetChoices){
  if(!layout.nodes.has(a)||!layout.nodes.has(b))continue;
  const middle=route(layout,a,b);
  if(middle)candidate([start,...lead,...middle,...tail]);
 }
 return best;
}
function segmentSafe(a,b,stations){
 const count=Math.max(1,Math.ceil(distance(a,b)/.04));
 for(let i=0;i<=count;i++){const t=i/count;if(!canWalk(a.x+(b.x-a.x)*t,a.z+(b.z-a.z)*t,stations))return false;}
 return true;
}
/** Ring and radial approaches are exactly the geometry used by station paths. */
export function ringGroundRoute(stations,start,finish,height=()=>0){
 if(!validPoint(start)||!validPoint(finish)||!canWalk(start.x,start.z,stations)||!canWalk(finish.x,finish.z,stations))return null;
 const at=p=>{const r=Math.hypot(p.x,p.z),a=Math.atan2(p.x,p.z);
  if(r<ROAD_RADIUS+RIBBON_WIDTH-.02)return {a,r:ROAD_RADIUS};
  const s=stations.find(s=>Math.abs(wrap(a-s.angle))*r<RIBBON_WIDTH);
  return s?{a:s.angle,r:Math.min(PORCH_RADIUS,r)}:null;
 };
 const aa=at(start),bb=at(finish);if(!aa||!bb)return null;
 const p=(a,r)=>{const [x,z]=polar(a,r);return {x,z,y:height(x,z)};};
 const a=p(aa.a,aa.r),b=p(bb.a,bb.r),turn=wrap(bb.a-aa.a);
 const steps=Math.max(1,Math.ceil(Math.abs(turn)*ROAD_RADIUS/.12));
 const points=[start,a,p(aa.a,ROAD_RADIUS),...Array.from({length:steps},(_,i)=>p(aa.a+turn*(i+1)/steps,ROAD_RADIUS)),b];
 if(segmentSafe(b,finish,stations))points.push({...finish,y:height(finish.x,finish.z)});
 if(points.some((q,i)=>i&&!segmentSafe(points[i-1],q,stations)))return null;
 return points.filter((q,i)=>!i||distance(q,points[i-1])>.00001);
}
export function placementForLessonLabels(labels,width,height){
 const used=[],out=[];
 for(const entry of labels){
  if(!entry.visible){out.push({...entry,display:false});continue;}
  const w=Math.min(width-12,entry.width),h=Math.min(height-12,entry.height);
  if(w<=0||h<=0){out.push({...entry,display:false});continue;}
  const bound=(v,min,max)=>Math.max(min,Math.min(v,max));
  const candidates=[];
  for(const dx of [0,-.72,.72,-1.34,1.34])for(const dy of [0,-1,1,-2,2,-3,3]){
   const left=bound(entry.x-w/2+dx*w,5,width-w-5),top=bound(entry.y-h+dy*(h+5),5,height-h-5);
   const overlap=(top<51&&left+w>width-121?(51-top)*w:0)+used.reduce((n,p)=>n+Math.max(0,Math.min(p.left+p.w+3,left+w+3)-Math.max(p.left-3,left-3))*Math.max(0,Math.min(p.top+p.h+3,top+h+3)-Math.max(p.top-3,top-3)),0);
   candidates.push({left,top,w,h,score:overlap*100+Math.abs(left+w/2-entry.x)+Math.abs(top+h-entry.y)});
  }
  const box=candidates.sort((a,b)=>a.score-b.score)[0];used.push(box);out.push({...entry,...box,display:true});
 }
 return out;
}
