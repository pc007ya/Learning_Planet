/** Horizontal cart with a visible sliding brake pad; wheel inertia and air drag are omitted. */
export const FORCE_GRAVITY=9.81;
export const FORCE_SURFACES={smooth:{static:.12,kinetic:.08},rough:{static:.35,kinetic:.22}} as const;
export type ForceSurface=keyof typeof FORCE_SURFACES;
export type ForceSettings={force:number;mass:number;surface:ForceSurface};
export type CartState={x:number;v:number;t:number;a:number;friction:number;netForce:number;finishTime:number|null;hitBuffer:boolean};
export type ForceTrial=ForceSettings&{time:number;acceleration:number;fair:boolean};
export function initialCart(x=0):CartState{return {x,v:0,t:0,a:0,friction:0,netForce:0,finishTime:null,hitBuffer:false};}
export function cartForces(settings:ForceSettings,velocity:number){
 if(!Number.isFinite(settings.force)||!Number.isFinite(settings.mass)||settings.mass<=0||!Number.isFinite(velocity)||!(settings.surface in FORCE_SURFACES))throw new RangeError('推力、質量或地面條件不合法');
 const coefficients=FORCE_SURFACES[settings.surface],normal=settings.mass*FORCE_GRAVITY;
 const stuck=Math.abs(velocity)<1e-8&&Math.abs(settings.force)<=coefficients.static*normal;
 const friction=stuck?-settings.force:-Math.sign(Math.abs(velocity)>1e-8?velocity:settings.force)*coefficients.kinetic*normal;
 return {friction,netForce:settings.force+friction,acceleration:(settings.force+friction)/settings.mass,stuck};
}
/** Event-aware 120 Hz integration: friction may stop a cart but cannot reverse it by itself. */
export function advanceCart(previous:CartState,settings:ForceSettings,dt:number):CartState{
 if(!Number.isFinite(dt)||dt<0)throw new RangeError('經過時間必須是有限非負值');
 cartForces(settings,previous.v);
 const next={...previous};let remaining=dt;
 while(remaining>1e-10){
  const h=Math.min(remaining,1/120);remaining-=h;
  const oldX=next.x,oldT=next.t,oldV=next.v;const forces=cartForces(settings,next.v);let dx=next.v*h+.5*forces.acceleration*h*h;
  let velocity=next.v+forces.acceleration*h;
  if(next.v!==0&&Math.sign(next.v)!==Math.sign(velocity)&&Math.abs(settings.force)<=FORCE_SURFACES[settings.surface].static*settings.mass*FORCE_GRAVITY){
   const stoppingTime=-next.v/forces.acceleration;dx=next.v*stoppingTime+.5*forces.acceleration*stoppingTime*stoppingTime;velocity=0;
  }
  next.x+=dx;next.v=Math.abs(velocity)<1e-9?0:velocity;next.t+=h;
  next.a=forces.acceleration;next.friction=forces.friction;next.netForce=forces.netForce;
  if(next.finishTime===null&&oldX<4&&next.x>=4){
   const distance=4-oldX;
   const crossing=Math.abs(forces.acceleration)>1e-9?2*distance/(Math.sqrt(Math.max(0,oldV**2+2*forces.acceleration*distance))+oldV):h*(4-oldX)/(next.x-oldX);
   // Linear interpolation is bounded to this 8.3ms step; records are shown to 0.01s.
   next.finishTime=oldT+(Number.isFinite(crossing)&&crossing>=0&&crossing<=h?crossing:h*(4-oldX)/(next.x-oldX));
  }
  if(next.x>=6.7||next.x<=-1){next.x=Math.max(-1,Math.min(6.7,next.x));next.v=0;next.a=0;next.netForce=0;next.hitBuffer=true;break;}
 }
 const finalForces=cartForces(settings,next.v);
 if(!next.hitBuffer){next.a=finalForces.acceleration;next.friction=finalForces.friction;next.netForce=finalForces.netForce;}
 return next;
}
export function fairComparison(trials:readonly ForceTrial[],variable:'force'|'mass'|'surface'){
 const valid=trials.filter(t=>t.fair&&t.time>0&&Number.isFinite(t.time));
 return valid.some((a,i)=>valid.slice(i+1).some(b=>{
  const sameOther=(['force','mass','surface'] as const).filter(k=>k!==variable).every(k=>a[k]===b[k]);
  if(!sameOther||a[variable]===b[variable])return false;
  if(variable==='force')return a.force>b.force?a.acceleration>b.acceleration&&a.time<b.time:b.acceleration>a.acceleration&&b.time<a.time;
  if(variable==='mass')return a.mass<b.mass?a.acceleration>b.acceleration&&a.time<b.time:b.acceleration>a.acceleration&&b.time<a.time;
  return a.surface==='smooth'?a.acceleration>b.acceleration&&a.time<b.time:b.acceleration>a.acceleration&&b.time<a.time;
 }));
}

export type ComparisonVariable='force'|'mass'|'surface';
export type ComparisonProgress=Record<ComparisonVariable,boolean>;
/** Achievement survives the bounded display history; older saves are derived from their valid measurements. */
export function updateComparisonProgress(trials:readonly ForceTrial[],previous:Partial<ComparisonProgress>={}):ComparisonProgress{
 return {force:previous.force===true||fairComparison(trials,'force'),mass:previous.mass===true||fairComparison(trials,'mass'),surface:previous.surface===true||fairComparison(trials,'surface')};
}
