/** Ideal equilibrium tide, dimensionless and deliberately exaggerated for teaching.
 * Solar direction is fixed at 0. This is NOT a coastal forecast. */
export const SOLAR_TIDE = .46;
export const radians = (degrees:number) => degrees * Math.PI / 180;
export const wrap = (degrees:number) => ((degrees % 360) + 360) % 360;
export function tideHeight(longitude:number, moonAngle:number):number {
  return Math.cos(2*radians(longitude-moonAngle)) + SOLAR_TIDE*Math.cos(2*radians(longitude));
}
export function tideAmplitude(moonAngle:number):number {
  return Math.hypot(Math.cos(2*radians(moonAngle))+SOLAR_TIDE, Math.sin(2*radians(moonAngle)));
}
export function phase(angle:number):{name:string;lit:number} {
  const a=wrap(angle);
  const names=['新月','眉月','上弦月','盈凸月','滿月','虧凸月','下弦月','殘月'];
  return {name:names[Math.round(a/45)%8],lit:(1-Math.cos(radians(a)))/2};
}
/** Illuminated disk projection; waxing right / waning left in the northern view. */
export function phasePath(angle:number,r=24):string {
  const a=wrap(angle), k=Math.cos(radians(a));
  const side=a<=180?1:-1;
  const pts:string[]=[];
  for(let y=-r;y<=r;y+=1){const x=Math.sqrt(Math.max(0,r*r-y*y));pts.push(`${side*x},${y}`);}
  for(let y=r;y>=-r;y-=1){const x=Math.sqrt(Math.max(0,r*r-y*y));pts.push(`${side*k*x},${y}`);}
  return 'M'+pts.join('L')+'Z';
}
