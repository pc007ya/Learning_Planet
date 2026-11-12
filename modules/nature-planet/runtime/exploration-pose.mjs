/** Original native-object articulation. Source Blender XYZ, forward -Y.
 * Fixed-heading forward/backstep patrol: the SAME signed path parameter drives
 * the root and IK. Reversals retrace contact trajectories, never rotate soles.
 * Typed output buffers are caller-owned; evaluation performs no allocation.
 */
export const GAIT=Object.freeze({cycleSeconds:2.4,strideLength:.70,stanceFraction:.62,stepLift:.20,upperLeg:.60,lowerLeg:.65,hipHeight:1.30,hipWidth:.46,soleDepth:.16,bobAmplitude:.012,speed:.70/(.62*2.4)});
const TAU=2*Math.PI,prepared=new WeakSet(),cache=new WeakMap();
const finite3=p=>Array.isArray(p)&&p.length===3&&p.every(x=>Number.isFinite(x)&&Math.abs(x)<=500);
const close=(a,b,e=1e-7)=>Math.abs(a-b)<=e;
export function prepareMechPatrol(route){
  if(!route||typeof route!=='object')return null;
  if(prepared.has(route))return route;if(cache.has(route))return cache.get(route);cache.set(route,null);
  const {endpoints,cycles,speed}=route,ramp=route.rampSeconds??.6,dwell=route.dwellSeconds??1,phase=route.phase??0;
  if(route.version!==1||route.type!=='backstep-patrol'||route.space!=='blender-xyz-world'||!Array.isArray(endpoints)||endpoints.length!==2||!endpoints.every(finite3)||!Number.isInteger(cycles)||cycles<1||cycles>40||!close(speed,GAIT.speed,1e-12)||!Number.isFinite(ramp)||ramp<.2||ramp>2||!Number.isFinite(dwell)||dwell<.5||dwell>10||!Number.isFinite(phase)||phase<0||phase>=1)return null;
  const a=endpoints[0],b=endpoints[1],dx=b[0]-a[0],dy=b[1]-a[1],length=Math.hypot(dx,dy),travel=cycles*GAIT.cycleSeconds;
  if(!close(a[2],b[2],1e-9)||!close(length,travel*GAIT.speed,1e-6)||ramp>=travel)return null;
  const result=Object.freeze({version:1,type:'backstep-patrol',space:route.space,x:a[0],y:a[1],z:a[2],dx:dx/length,dy:dy/length,yaw:Math.atan2(dy,dx)+Math.PI/2,length,cycles,travel,ramp,dwell,legSeconds:travel+ramp,period:2*(travel+ramp+dwell),phase});
  prepared.add(result);cache.set(route,result);return result;
}
export function createPatrolState(){return {parameter:0,rate:0,offset:new Float64Array(3),direction:1,dwelling:false};}
function easeDistance(t,r){return t/2-r*Math.sin(Math.PI*t/r)/(2*Math.PI);}
export function evaluateMechPatrol(route,seconds,out=createPatrolState()){
  const r=prepareMechPatrol(route);out.parameter=out.rate=0;out.offset.fill(0);out.dwelling=true;out.direction=1;
  if(!r||!Number.isFinite(seconds))return out;
  const cycle=((seconds/r.period+r.phase)%1+1)%1*r.period,half=r.legSeconds+r.dwell,reverse=cycle>=half,t=reverse?cycle-half:cycle;
  let distance,rate;
  if(t>=r.legSeconds){distance=r.travel;rate=0;}else if(t<r.ramp){distance=easeDistance(t,r.ramp);rate=(1-Math.cos(Math.PI*t/r.ramp))/2;}else if(t<=r.travel){distance=t-r.ramp/2;rate=1;}else{const left=r.legSeconds-t;distance=r.travel-easeDistance(left,r.ramp);rate=(1-Math.cos(Math.PI*left/r.ramp))/2;}
  out.parameter=reverse?r.travel-distance:distance;out.rate=reverse?-rate:rate;out.direction=reverse?-1:1;out.dwelling=t>=r.legSeconds;
  const d=GAIT.speed*out.parameter;out.offset[0]=r.dx*d;out.offset[1]=r.dy*d;return out;
}
export function createNativePose(){return {bodyZ:GAIT.hipHeight,rootBob:0,angles:new Float64Array(10),footY:new Float64Array(2),footZ:new Float64Array(2),stance:new Uint8Array(2)};}
/** angles = hipL,kneeL,ankleL,hipR,kneeR,ankleR,armL,armR,scanner,tail.
 * gaitSeconds is a signed path parameter, never wall-clock time.
 */
export function evaluateMechPose(gaitSeconds,activeSeconds,out=createNativePose()){
  if(!Number.isFinite(gaitSeconds)||!Number.isFinite(activeSeconds))throw new TypeError('Pose times must be finite');
  const o=GAIT,angle=TAU*gaitSeconds/o.cycleSeconds;out.bodyZ=o.hipHeight+o.bobAmplitude*Math.cos(2*angle);out.rootBob=0;
  for(let side=0;side<2;side++){
    const p=((gaitSeconds/o.cycleSeconds+side*.5)%1+1)%1;let y,z;
    if(p<o.stanceFraction){y=o.strideLength*(p/o.stanceFraction-.5);z=o.soleDepth;out.stance[side]=1;}else{
      const u=(p-o.stanceFraction)/(1-o.stanceFraction),u2=u*u,u3=u2*u,m=o.speed*(1-o.stanceFraction)*o.cycleSeconds;
      y=(2*u3-3*u2+1)*o.strideLength/2+(u3-2*u2+u)*m+(-2*u3+3*u2)*(-o.strideLength/2)+(u3-u2)*m;
      z=o.soleDepth+o.stepLift*Math.sin(Math.PI*u)**2;out.stance[side]=0;
    }
    out.footY[side]=y;out.footZ[side]=z;const down=out.bodyZ-z,d=Math.hypot(y,down);
    const hip=Math.atan2(y,down)-Math.acos(Math.max(-1,Math.min(1,(o.upperLeg**2+d*d-o.lowerLeg**2)/(2*o.upperLeg*d))));
    const knee=Math.PI-Math.acos(Math.max(-1,Math.min(1,(o.upperLeg**2+o.lowerLeg**2-d*d)/(2*o.upperLeg*o.lowerLeg))));
    const i=side*3;out.angles[i]=hip;out.angles[i+1]=knee;out.angles[i+2]=-hip-knee;
  }
  // Upper-body idle remains live during endpoint dwell. It does not disturb soles.
  out.angles[6]=-.105*Math.sin(angle)-.015*Math.sin(activeSeconds*.8);out.angles[7]=.105*Math.sin(angle)+.015*Math.sin(activeSeconds*.8);out.angles[8]=.22*Math.sin(activeSeconds*.8);out.angles[9]=0;return out;
}
export function evaluateRotorPose(seconds,out=createNativePose()){
  if(!Number.isFinite(seconds))throw new TypeError('Pose time must be finite');
  out.rootBob=.035*Math.sin(1.6*seconds);out.angles[0]=(22*seconds)%TAU;out.angles[1]=-(22*seconds)%TAU;out.angles[8]=.25*Math.sin(.7*seconds);out.angles[9]=.10*Math.sin(1.2*seconds);return out;
}

/** Piloted-mech arms are an opt-in native contract. Legacy ten-angle pose and
 * all path/leg arithmetic above remain unchanged. Source rotations are absolute
 * parent-local X pitches, not deltas from the artist's exported rest pose.
 * activeSeconds keeps all upper-body joints alive through planted endpoint dwell.
 */
export const PILOTED_ARM_LIMITS=Object.freeze({shoulder:Object.freeze([-.195,.035]),elbow:Object.freeze([-.78,-.62]),wrist:Object.freeze([.135,.205])});
export function createPilotedArmPose(){return new Float64Array(6);}
export function evaluatePilotedArmPose(gaitSeconds,activeSeconds,out=createPilotedArmPose()){
  if(!Number.isFinite(gaitSeconds)||!Number.isFinite(activeSeconds))throw new TypeError('Pose times must be finite');
  const angle=TAU*gaitSeconds/GAIT.cycleSeconds;
  for(let side=0;side<2;side++){
    const phase=side===0?Math.PI:0,i=side*3;
    out[i]=-.08+.10*Math.sin(angle+phase)+.015*Math.sin(.8*activeSeconds+phase);
    out[i+1]=-.70+.06*Math.sin(angle+phase+.6)+.02*Math.sin(.8*activeSeconds+phase+.6);
    out[i+2]=.17+.025*Math.sin(angle+phase)+.01*Math.sin(.8*activeSeconds+phase+.4);
  }
  return out;
}
