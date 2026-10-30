import { radians, SOLAR_TIDE, tideHeight } from '../tides/model';
export const EARTH_RADIUS=2;
export const SHELL_BASE=2.30;
export const SHELL_SCALE=.22;
export const EQUATOR_OFFSET=(1+SOLAR_TIDE)/3;
export function surfaceField(x:number,_y:number,z:number,angle:number){
 const m=x*Math.cos(radians(angle))+z*Math.sin(radians(angle));
 return 4/3*((3*m*m-1)/2+SOLAR_TIDE*(3*x*x-1)/2);
}
export function shellRadius(x:number,y:number,z:number,angle:number){return SHELL_BASE+SHELL_SCALE*surfaceField(x,y,z,angle);}
export function shoreLevel(observer:number,moon:number){return tideHeight(observer,moon);}
