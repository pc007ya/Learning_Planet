const TAU=Math.PI*2;
export const ROAD_RADIUS=10;
export const PORCH_RADIUS=12.5;
export const HOUSE_RADIUS=14.05;
export const RIBBON_WIDTH=.73;
export const TERRAIN_RADIUS=17.3;
export const wrap=a=>((a+Math.PI)%TAU+TAU)%TAU-Math.PI;
export const polar=(angle,r)=>[Math.sin(angle)*r,Math.cos(angle)*r];
export const stationsOnRing=stations=>stations.map((item,i)=>({...item,angle:-.42+i*TAU/Math.max(stations.length,1)}));
export function canWalk(x,z,stations){
 const r=Math.hypot(x,z),a=Math.atan2(x,z);
 if(Math.abs(r-ROAD_RADIUS)<RIBBON_WIDTH)return true;
 return r>=ROAD_RADIUS&&r<=PORCH_RADIUS+.18&&stations.some(s=>Math.abs(wrap(a-s.angle))*r<RIBBON_WIDTH);
}
function mix(a,b,t){return a+(b-a)*t;}
function bezier(a,b,c,d,t){return mix(mix(mix(a,b,t),mix(b,c,t),t),mix(mix(b,c,t),mix(c,d,t),t),t);}
export function walkRoute(start,finish){
 const fromAngle=Math.atan2(start[0],start[1]),r=Math.hypot(...start);
 const delta=wrap(finish.angle-fromAngle);
 const total=Math.abs(delta);
 const segments=[];
 if(total<1e-4){
  for(let i=0;i<=16;i++)segments.push(polar(finish.angle,mix(r,PORCH_RADIUS,i/16)));
  return segments;
 }
 const sign=Math.sign(delta),k=Math.min(.055,total/3),startCurve=r>ROAD_RADIUS+.3;
 if(startCurve){
  for(let i=0;i<=16;i++)segments.push(polar(fromAngle,mix(r,ROAD_RADIUS+.50,i/16)));
  for(let i=1;i<=14;i++){const t=i/14;segments.push(polar(fromAngle+bezier(0,0,k*.43,k,t)*sign,bezier(ROAD_RADIUS+.50,ROAD_RADIUS+.22,ROAD_RADIUS,ROAD_RADIUS,t)));}
 }else segments.push(start);
 const startTrim=startCurve?k:0, endTrim=k;
 const n=Math.max(1,Math.ceil((total-startTrim-endTrim)*ROAD_RADIUS/.12));
 for(let i=1;i<=n;i++)segments.push(polar(fromAngle+sign*mix(startTrim,total-endTrim,i/n),ROAD_RADIUS));
 for(let i=1;i<=14;i++){const t=i/14;segments.push(polar(finish.angle+bezier(-k,-k*.43,0,0,t)*sign,bezier(ROAD_RADIUS,ROAD_RADIUS,ROAD_RADIUS+.22,ROAD_RADIUS+.50,t)));}
 for(let i=1;i<=16;i++)segments.push(polar(finish.angle,mix(ROAD_RADIUS+.50,PORCH_RADIUS,i/16)));
 return segments;
}
