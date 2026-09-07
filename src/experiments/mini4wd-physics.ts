/** Educational rigid-body model. Coordinates: 1 unit = 5 cm; seconds; kg.
 * Planar chassis + roller impulses, vertical ballistic flight, damped landing.
 * No scripted path position, no brand-calibrated performance claims. */
export type Setup = { gear: 3.5 | 4 | 5; tire: 'grip' | 'hard'; diameter: 26 | 30; shell: 'arrow' | 'wing'; ballast: 'center' | 'rear'; color: string };
export const DEFAULT_SETUP: Setup = {gear:4,tire:'grip',diameter:26,shell:'arrow',ballast:'center',color:'#29c9ff'};
export const TRACK = {straight:18,radius:12,width:5,length:72+24*Math.PI};
export const STEP = 1/240;
export const clamp = (n:number,a:number,b:number)=>Math.max(a,Math.min(b,n));
export function trackPoint(s:number) {
  const {straight:a,radius:r,length:l}=TRACK;s=((s%l)+l)%l;
  if(s<2*a)return {x:s-a,z:-r,tx:1,tz:0};
  s-=2*a;
  if(s<Math.PI*r){const t=s/r-Math.PI/2;return{x:a+r*Math.cos(t),z:r*Math.sin(t),tx:-Math.sin(t),tz:Math.cos(t)};}
  s-=Math.PI*r;
  if(s<2*a)return{x:a-s,z:r,tx:-1,tz:0};
  const t=(s-2*a)/r+Math.PI/2;return{x:-a+r*Math.cos(t),z:r*Math.sin(t),tx:-Math.sin(t),tz:Math.cos(t)};
}
export function nearestTrack(x:number,z:number){
  const a=TRACK.straight,r=TRACK.radius,cx=clamp(x,-a,a),dx=x-cx,d=Math.hypot(dx,z)||.00001,nx=dx/d,nz=z/d;
  let s=0;
  if(x>=-a&&x<=a)s=z<0?x+a:2*a+Math.PI*r+a-x;
  else if(x>a)s=2*a+(Math.atan2(z,dx)+Math.PI/2)*r;
  else{let t=Math.atan2(z,dx);if(t<Math.PI/2)t+=2*Math.PI;s=4*a+Math.PI*r+(t-Math.PI/2)*r;}
  return {offset:d-r,nx,nz,s:((s%TRACK.length)+TRACK.length)%TRACK.length};
}
/** Launch ramp, gap, and flat landing are shared by renderer and physics. */
export function ground(x:number,z:number){
  if(z<-8 && x>-6 && x<1)return {height:(x+6)*.18,slope:.18,gap:false};
  if(z<-8 && x>=1 && x<5)return {height:-4,slope:0,gap:true};
  return {height:0,slope:0,gap:false};
}
export function parameters(c:Setup){
  return {mass:.116+(c.shell==='wing'?.014:.006)+.008,radius:c.diameter/100,
    grip:c.tire==='grip'?1.15:.63,rolling:c.tire==='grip'?.012:.008,
    inertia:(.116+.014+.008)*1.12,rollLimit:c.ballast==='center'?1:.78};
}
export type CarState = {id:number;x:number;z:number;y:number;vx:number;vz:number;vy:number;yaw:number;omega:number;pitch:number;roll:number;distance:number;lastS:number;time:number;lap:number;lapTimes:number[];lapStart:number;contacts:number;landings:number;impact:number;offTrack:boolean;finished:boolean;airborne:boolean;maxSpeed:number};
export function createCar(id=0):CarState{
  const s=3-id*3,p=trackPoint(s);return{id,x:p.x,z:p.z,y:0,vx:0,vz:0,vy:0,yaw:0,omega:0,pitch:0,roll:0,distance:0,lastS:((s%TRACK.length)+TRACK.length)%TRACK.length,time:0,lap:0,lapTimes:[],lapStart:0,contacts:0,landings:0,impact:0,offTrack:false,finished:false,airborne:false,maxSpeed:0};
}
export function stepCar(c:CarState,setup:Setup,dt=STEP,power=true){
  if(c.offTrack||c.finished)return;
  dt=clamp(dt,0,1/120);const p=parameters(setup),g=196,fx=Math.cos(c.yaw),fz=Math.sin(c.yaw);
  const forward=c.vx*fx+c.vz*fz,lateral=-c.vx*fz+c.vz*fx;
  const road=ground(c.x,c.z),onGround=!road.gap&&c.y<=road.height+.018&&c.vy<=road.slope*c.vx+.05;
  if(onGround){
    const wheelMax=8000/60*Math.PI*2/setup.gear*p.radius;
    const motor=power?.0012*setup.gear*.78/(p.radius*.05)*Math.max(0,1-Math.max(0,forward)/wheelMax):0;
    const drag=p.rolling+Math.abs(forward)*.00025;
    const accel=(motor-(Math.abs(forward)>.05?drag:0))/(p.mass*.05);
    const side=clamp(-lateral*16,-p.grip*g,p.grip*g);
    c.vx+=(fx*accel-fz*side)*dt;c.vz+=(fz*accel+fx*side)*dt;
    c.omega*=Math.exp(-4*dt);c.y=road.height;c.vy=road.slope*c.vx;
    c.pitch+=(Math.atan(road.slope*fx)-c.pitch)*Math.min(1,dt*18);
    c.roll*=Math.exp(-10*dt);c.airborne=false;
  }else{c.vy-=g*dt;c.airborne=true;c.pitch+=(setup.ballast==='rear'?.18:-.13)*dt;}
  c.x+=c.vx*dt;c.z+=c.vz*dt;c.y+=c.vy*dt;c.yaw+=c.omega*dt;
  const nextRoad=ground(c.x,c.z);
  if(!nextRoad.gap&&c.y<nextRoad.height){
    const hit=Math.max(0,-c.vy);c.y=nextRoad.height;c.vy=0;
    if(c.airborne&&hit>3){c.landings++;c.impact=Math.max(c.impact,hit/50);const loss=clamp(hit*(setup.ballast==='rear'?.005:.0025),0,.35);c.vx*=1-loss;c.vz*=1-loss;c.roll=(setup.ballast==='rear'?.11:.03);}
    c.airborne=false;
  }
  // Four front/rear roller contacts push the chassis and impart angular momentum.
  if(c.y<1.8){for(const rx of [-1.28,1.28])for(const rz of [-.88,.88]){
    const ax=rx*fx-rz*fz,az=rx*fz+rz*fx,q=nearestTrack(c.x+ax,c.z+az);
    const edge=TRACK.width/2-.13,penetration=Math.abs(q.offset)-edge;
    if(penetration>0){
      const sign=q.offset>0?-1:1,nx=q.nx*sign,nz=q.nz*sign;
      c.x+=nx*penetration*.65;c.z+=nz*penetration*.65;
      const vn=(c.vx-c.omega*az)*nx+(c.vz+c.omega*ax)*nz;
      if(vn<0){const cross=ax*nz-az*nx,j=-(1.12)*vn/(1/p.mass+cross*cross/p.inertia);c.vx+=j*nx/p.mass;c.vz+=j*nz/p.mass;c.omega+=cross*j/p.inertia;c.vx*=.997;c.vz*=.997;
        if(-vn>2&&c.impact<.06)c.contacts++;c.impact=Math.max(c.impact,Math.min(1,-vn/40));}
    }
  }}
  const q=nearestTrack(c.x,c.z);
  if(c.y< -2.5||Math.abs(q.offset)>TRACK.width/2+1.8){c.offTrack=true;return;}
  let ds=q.s-c.lastS;if(ds>TRACK.length/2)ds-=TRACK.length;if(ds< -TRACK.length/2)ds+=TRACK.length;
  // Incremental ordered progress: backwards movement cannot manufacture laps.
  if(Math.abs(ds)<3)c.distance+=ds;c.lastS=q.s;c.time+=dt;
  const lap=Math.max(0,Math.floor(c.distance/TRACK.length));
  if(lap>c.lap){c.lap=lap;c.lapTimes.push(c.time-c.lapStart);c.lapStart=c.time;if(lap>=3)c.finished=true;}
  c.impact*=Math.exp(-9*dt);c.maxSpeed=Math.max(c.maxSpeed,Math.hypot(c.vx,c.vz));
}
export function collideCars(a:CarState,b:CarState,sa:Setup,sb:Setup){
  if(a.offTrack||b.offTrack||Math.abs(a.y-b.y)>.8)return;
  // Two chassis discs per car provide a stable capsule collision proxy.
  for(const pa of [-.7,.7])for(const pb of [-.7,.7]){
    const dx=b.x+Math.cos(b.yaw)*pb-a.x-Math.cos(a.yaw)*pa,dz=b.z+Math.sin(b.yaw)*pb-a.z-Math.sin(a.yaw)*pa,d=Math.hypot(dx,dz);
    if(d>=1.5||d<.00001)continue;
    const nx=dx/d,nz=dz/d,ma=parameters(sa).mass,mb=parameters(sb).mass,inv=1/ma+1/mb;
    const pen=1.5-d;a.x-=nx*pen/(ma*inv);a.z-=nz*pen/(ma*inv);b.x+=nx*pen/(mb*inv);b.z+=nz*pen/(mb*inv);
    const rel=(b.vx-a.vx)*nx+(b.vz-a.vz)*nz;
    if(rel<0){const j=-(1.2)*rel/inv;a.vx-=j*nx/ma;a.vz-=j*nz/ma;b.vx+=j*nx/mb;b.vz+=j*nz/mb;a.impact=b.impact=.65;}
  }
}
