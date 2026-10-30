import {describe,it,expect} from 'vitest';
import {observerNormal,solarAltitude,moonAltitude,lunarLitFraction,spinForHour,judgeMoonConfiguration} from '../src/experiment-planets/earth-moon-model';
describe('linked geographic observer and lunar illumination',()=>{
 it('normal stays unit and day/night follows the same rotating surface point',()=>{for(let spin=0;spin<360;spin+=5){const n=observerNormal(121,23.7,spin);expect(Math.hypot(n.x,n.y,n.z)).toBeCloseTo(1,12);expect(solarAltitude(n)>0).toBe(n.x>0);}});
 it('matches noon and midnight signs at Taiwan in the ideal fixed solar geometry',()=>{expect(solarAltitude(observerNormal(121,23.7,spinForHour(121,12)))).toBeGreaterThan(80);expect(solarAltitude(observerNormal(121,23.7,spinForHour(121,0)))).toBeLessThan(-40);});
 it('full moon and Sun have opposite local altitudes and phases are continuous',()=>{for(let spin=0;spin<360;spin+=13){const n=observerNormal(121,23.7,spin);expect(moonAltitude(n,180)).toBeCloseTo(-solarAltitude(n),10);}expect(lunarLitFraction(0)).toBe(0);expect(lunarLitFraction(90)).toBeCloseTo(.5);expect(lunarLitFraction(180)).toBe(1);expect(lunarLitFraction(91)).toBeGreaterThan(lunarLitFraction(90));});
 it('requires both real configuration changes and consistent full-moon night geometry',()=>{const n=observerNormal(121,23.7,spinForHour(121,0));expect(judgeMoonConfiguration(180,n,false,true).passed).toBe(false);expect(judgeMoonConfiguration(90,n,true,true).passed).toBe(false);expect(judgeMoonConfiguration(180,n,true,true).passed).toBe(true);});
});
