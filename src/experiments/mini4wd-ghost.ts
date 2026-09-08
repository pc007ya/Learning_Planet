import type {CarState,Setup,TrackKind} from './mini4wd-physics';
export type GhostPose=Pick<CarState,'time'|'x'|'y'|'z'|'yaw'|'pitch'|'roll'|'distance'>;
export type GhostLap={track:TrackKind;setup:Setup;frames:GhostPose[];time:number};
const pose=(s:GhostPose):GhostPose=>({time:s.time,x:s.x,y:s.y,z:s.z,yaw:s.yaw,pitch:s.pitch,roll:s.roll,distance:s.distance});
/** Bounded in-memory replay. Only completed solo laps become the next baseline. */
export class GhostRecorder{
  private frames:GhostPose[]=[];
  start(s:GhostPose){this.frames=[pose(s)];}
  sample(s:GhostPose){if(this.frames.length<3601&&s.time-(this.frames.at(-1)?.time??-1)>=1/30-1e-6)this.frames.push(pose(s));}
  finish(s:CarState,setup:Setup,track:TrackKind):GhostLap|undefined{
    if(!s.finished||s.offTrack||s.time>120||!this.frames.length)return;
    if(this.frames.at(-1)!.time<s.time)this.frames.push(pose(s));
    return {track,setup:{...setup},frames:this.frames.map(pose),time:s.time};
  }
}
export function ghostAt(lap:GhostLap,time:number):GhostPose{
  const f=lap.frames;if(time<=f[0].time)return pose(f[0]);if(time>=lap.time)return pose(f[f.length-1]);
  let lo=0,hi=f.length-1;while(hi-lo>1){const mid=(lo+hi)>>1;if(f[mid].time<=time)lo=mid;else hi=mid;}
  const a=f[lo],b=f[hi],t=(time-a.time)/(b.time-a.time),out=pose(a);out.time=time;
  for(const key of ['x','y','z','distance','pitch','roll'] as const)out[key]=a[key]+(b[key]-a[key])*t;
  const delta=Math.atan2(Math.sin(b.yaw-a.yaw),Math.cos(b.yaw-a.yaw));out.yaw=a.yaw+delta*t;return out;
}
