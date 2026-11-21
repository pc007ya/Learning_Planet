import {ROAD_RADIUS,HOUSE_RADIUS,PORCH_RADIUS,polar} from './paths.mjs';
export const CHANNEL_HALF=.82, BANK_RISE=.68, RAMP_HALF=1.63;
export function riverLayout(stations,grade){
 if(grade!==1||stations.length<2)return null;
 let best=null;
 for(const offset of [3.9,4.4,4.9,5.3,3.4,2.8]){
  for(let i=0;i<180;i++){
   const angle=i*Math.PI/90;const [ux,uz]=polar(angle,1),measure=(x,z)=>ux*x+uz*z-offset;
   let clearance=Infinity,left=0,right=0;
   for(const s of stations){
    const atRoad=measure(...polar(s.angle,ROAD_RADIUS)),atHouse=measure(...polar(s.angle,HOUSE_RADIUS));
    if(Math.sign(atRoad)!==Math.sign(atHouse)){clearance=0;break;}
    clearance=Math.min(clearance,Math.abs(atRoad),Math.abs(atHouse)-.24);if(atRoad>0)right++;else left++;
   }
   if(!left||!right||clearance<1.60)continue;
   const score=clearance+.20*Math.min(left,right)-.20*Math.abs(offset-4.2)-.06*Math.abs(angle-1.0);
   if(!best||score>best.score)best={angle,offset,measure,ux,uz,clearance,score};
  }
 }
 if(!best)return null;
 const {angle,offset,measure}=best;
 const roots=[angle+Math.acos(offset/ROAD_RADIUS),angle-Math.acos(offset/ROAD_RADIUS)];
 const height=(x,z)=>{const t=Math.max(0,Math.min(1,(measure(x,z)+RAMP_HALF)/(2*RAMP_HALF)));return BANK_RISE*t*t*(3-2*t);};
 return {...best,height,roots,half:CHANNEL_HALF,porchRadius:PORCH_RADIUS};
}
