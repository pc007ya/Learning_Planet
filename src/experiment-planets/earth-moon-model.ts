/** Solar directions are an ideal fixed solstice-like configuration, not clock predictions. */
export type Vector={x:number;y:number;z:number};
const r=(d:number)=>d*Math.PI/180;
export function observerNormal(longitude:number,latitude:number,spinDegrees:number,tiltDegrees=23.4):Vector{const lon=r(longitude+180),lat=r(latitude),spin=r(spinDegrees),tilt=r(-tiltDegrees);const x0=-Math.cos(lon)*Math.cos(lat),z0=Math.sin(lon)*Math.cos(lat),y0=Math.sin(lat),x=x0*Math.cos(spin)+z0*Math.sin(spin),z=-x0*Math.sin(spin)+z0*Math.cos(spin);return {x:x*Math.cos(tilt)-y0*Math.sin(tilt),y:x*Math.sin(tilt)+y0*Math.cos(tilt),z};}
export function solarAltitude(normal:Vector){return Math.asin(Math.max(-1,Math.min(1,normal.x)))*180/Math.PI;}
export function moonAltitude(normal:Vector,angle:number){return Math.asin(Math.max(-1,Math.min(1,normal.x*Math.cos(r(angle))-normal.z*Math.sin(r(angle)))))*180/Math.PI;}
export function lunarLitFraction(angle:number){return (1-Math.cos(r(angle)))/2;}
export function spinForHour(longitude:number,hour:number){return (180+(hour-12)*15-(longitude+180)+720)%360;}
export function judgeMoonConfiguration(angle:number,normal:Vector,moved:boolean,timeChanged:boolean){const lit=lunarLitFraction(angle),sun=solarAltitude(normal),moon=moonAltitude(normal,angle);if(!moved||!timeChanged)return {passed:false,message:'請親手移動月球，也轉動地球或改觀察時段。'};if(lit<.97)return {passed:false,message:'先排出接近滿月：地球在日月之間，亮面超過 97%。'};if(sun>=-5)return {passed:false,message:'月相已接近滿月，再讓觀測點轉入夜面。'};if(moon<=5)return {passed:false,message:'觀測點在夜面，但月球還在地平線附近。再轉動地球觀察。'};return {passed:true,message:'完成！滿月和太陽在地球兩邊。觀測點轉到夜面時，月亮可在地平線上。實際月出時間還受軌道與地形影響。'};}
