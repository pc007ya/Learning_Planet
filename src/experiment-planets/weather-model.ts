/** One closed, well-mixed 1 m³ teaching air box over a finite water reservoir.
 * Tetens saturation curve + ideal-gas vapour density; bulk cloud growth and
 * runoff times are illustrative, not a forecast or resolved cloud physics. */
export type WeatherControls={sun:'strong'|'weak';humidity:'wet'|'dry';air:'cool'|'warm';cooling?:number};
export type WeatherState={temperature:number;vapour:number;cloud:number;sea:number;surface:number;ground:number;growth:number;cloudAge:number;time:number;evaporated:number;condensed:number;rained:number;returned:number;rainRate:number;evaporationRate:number};
export const weatherDefaults:WeatherControls={sun:'strong',humidity:'wet',air:'warm'};
export function saturationDensity(celsius:number){
 if(!Number.isFinite(celsius)||celsius<-40||celsius>60)throw new RangeError('模型溫度範圍為 −40 至 60°C');
 const vapourPressure=6.112*Math.exp(17.67*celsius/(celsius+243.5));
 return 216.7*vapourPressure/(celsius+273.15);
}
export function dewPoint(vapour:number,celsius:number){
 if(!(vapour>0)||!Number.isFinite(vapour))return -40;
 const e=vapour*(celsius+273.15)/216.7;
 const log=Math.log(e/6.112);return Math.max(-40,Math.min(60,243.5*log/(17.67-log)));
}
export function createWeatherState():WeatherState{return {temperature:28,vapour:18,cloud:0,sea:120,surface:0,ground:0,growth:0,cloudAge:0,time:0,evaporated:0,condensed:0,rained:0,returned:0,rainRate:0,evaporationRate:0};}
export function waterTotal(s:WeatherState){return s.vapour+s.cloud+s.sea+s.surface+s.ground;}
export function setHumidity(s:WeatherState,value:'wet'|'dry'){
 const target=value==='wet'?18:5,transfer=Math.min(s.sea,target-s.vapour);s.sea-=transfer;s.vapour+=transfer;
}
export function stepWeather(s:WeatherState,c:WeatherControls,seconds:number){
 if(!Number.isFinite(seconds)||seconds<0)throw new RangeError('時間不可為負值');
 let remain=Math.min(seconds,120);while(remain>1e-9){const dt=Math.min(.05,remain);remain-=dt;advance(s,c,dt);}return s;
}
function advance(s:WeatherState,c:WeatherControls,dt:number){
 s.time+=dt;
 const warm=c.sun==='strong'?30:26;const target=typeof c.cooling==='number'?warm-(warm-12)*Math.max(0,Math.min(1,c.cooling)):c.air==='cool'?12:warm;
 s.temperature+=(target-s.temperature)*(1-Math.exp(-dt/4));
 const sat=saturationDensity(s.temperature);
 // Evaporation is strongest when heated and the air is unsaturated. No visible
 // particles stand for vapour; the scene shows an explicitly labelled path.
 s.evaporationRate=(c.sun==='strong'?.36:.07)*Math.max(0,1-s.vapour/sat);
 const evaporation=Math.min(s.sea,s.evaporationRate*dt);s.sea-=evaporation;s.vapour+=evaporation;s.evaporated+=evaporation;
 if(s.vapour>sat){const condensation=s.vapour-sat;s.vapour-=condensation;s.cloud+=condensation;s.condensed+=condensation;}
 else if(s.cloud>0){const evaporationCloud=Math.min(s.cloud,(sat-s.vapour)*(1-Math.exp(-dt*.55)));s.cloud-=evaporationCloud;s.vapour+=evaporationCloud;}
 if(s.cloud>.06){s.cloudAge+=dt;s.growth=Math.min(1,s.growth+dt*.11*Math.min(1,s.cloud/1.4));}
 else {s.cloudAge=0;s.growth=0;}
 // A cloud is not automatically rain. Collision/coalescence is represented by
 // a finite growth interval and a cloud-water threshold, not a wet/cool switch.
 s.rainRate=s.cloudAge>=5&&s.growth>=.99&&s.cloud>.3?.24*(s.cloud-.3):0;
 const rain=Math.min(s.cloud,s.rainRate*dt);s.cloud-=rain;s.surface+=rain*.65;s.ground+=rain*.35;s.rained+=rain;
 const surfaceReturn=s.surface*(1-Math.exp(-dt*.25));s.surface-=surfaceReturn;
 const groundReturn=s.ground*(1-Math.exp(-dt*.045));s.ground-=groundReturn;
 s.sea+=surfaceReturn+groundReturn;s.returned+=surfaceReturn+groundReturn;
}
export function weatherPhase(s:WeatherState){return s.rainRate>.02?'rain':s.cloud>.06?'cloud':s.evaporationRate>.02?'evaporation':'clear';}
export function relativeHumidity(s:WeatherState){return 100*s.vapour/saturationDensity(s.temperature);}
