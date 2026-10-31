/** Finite-length dipole classroom model, in scene units and relative force units.
 * Mathematical pole pairs represent the external field; they are not isolated
 * magnetic charges. Near-pole softening prevents singularities. */
export type Pole={x:number;z:number;strength:number};
export type MagnetPose={x:number;z:number;direction:1|-1};
export const MAGNET_HALF_LENGTH=.82;
export function magnetPoles(pose:MagnetPose):Pole[]{return [{x:pose.x+pose.direction*MAGNET_HALF_LENGTH,z:pose.z,strength:1},{x:pose.x-pose.direction*MAGNET_HALF_LENGTH,z:pose.z,strength:-1}];}
export function externalField(x:number,z:number,poses:readonly MagnetPose[],softening=.18){let bx=0,bz=0;for(const pose of poses)for(const p of magnetPoles(pose)){const dx=x-p.x,dz=z-p.z,r2=dx*dx+dz*dz+softening*softening;const f=p.strength/Math.pow(r2,1.5);bx+=dx*f;bz+=dz*f;}return {x:bx,z:bz,magnitude:Math.hypot(bx,bz)};}
export function relativeMagnetForce(left:MagnetPose,right:MagnetPose){let force=0;for(const a of magnetPoles(left))for(const b of magnetPoles(right)){const dx=b.x-a.x,dz=b.z-a.z,r2=dx*dx+dz*dz+.18*.18;force+=a.strength*b.strength*dx/Math.pow(r2,1.5);}return force;}
export function advanceMagnet(x:number,v:number,dt:number,leftX:number,same:boolean){const safeDt=Math.max(0,Math.min(.05,dt));const force=relativeMagnetForce({x:leftX,z:0,direction:1},{x,z:0,direction:same?-1:1});const velocity=(v+Math.max(-6,Math.min(6,force))*safeDt*1.4)*Math.exp(-1.05*safeDt);const min=leftX+2.2,max=4.15;const next=Math.min(max,Math.max(min,x+velocity*safeDt));return {x:next,v:next===min||next===max?0:velocity,force};}
export function integrateFieldLine(start:{x:number;z:number},poses:readonly MagnetPose[],steps=230){const points=[start];let p={...start};for(let i=0;i<steps;i++){const b=externalField(p.x,p.z,poses);if(b.magnitude<.002)break;const h=.065;const next={x:p.x+b.x/b.magnitude*h,z:p.z+b.z/b.magnitude*h};if(Math.abs(next.x)>5.4||Math.abs(next.z)>3.15)break;points.push(next);p=next;if(poses.flatMap(magnetPoles).some(q=>q.strength<0&&Math.hypot(p.x-q.x,p.z-q.z)<.2))break;}return points;}
export function judgeMagnetChallenge(same:boolean,distance:number,moved:boolean,observed:boolean){const passed=same&&distance>=2.2&&distance<=6.5&&moved&&observed;return {passed,message:passed?'完成！你讓同極面對面，放手後磁鐵沿導軌退開。磁力的方向改變了。':!moved?'先親手拖動磁鐵，或用距離圖卡移動，再按觀察。':!same?'先把右磁鐵翻面，讓兩個 N 極面對面。':!observed?'按觀察並放手，看看磁鐵會往哪邊走。':'距離太近或太遠；把右磁鐵移到導軌中間再試。'};}

/** Observable displacement goal; tolerance only absorbs binary decimal rounding. */
export function qualifiesMagnetObservation(reference:number,current:number,elapsed:number,demonstrating=false){return !demonstrating&&elapsed>.35&&Math.abs(current-reference)>=.15-1e-9;}
