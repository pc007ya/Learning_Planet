import {describe,it,expect} from 'vitest';
import {readFileSync} from 'node:fs';
import {surfaceField,shellRadius,EARTH_RADIUS,EQUATOR_OFFSET,shoreLevel} from '../src/tides3d/science';
import {radians,tideHeight,tideAmplitude} from '../src/tides/model';
describe('3D equilibrium shell and linked equatorial observation',()=>{
 it('matches the existing equatorial field after its constant latitude offset is removed',()=>{
  for(const a of [0,45,90,135,180,270])for(let t=0;t<360;t+=5){expect(surfaceField(Math.cos(radians(t)),0,-Math.sin(radians(t)),a)-EQUATOR_OFFSET).toBeCloseTo(tideHeight(t,a),10);expect(shoreLevel(t,a)).toBe(tideHeight(t,a));}
 });
 it('has two opposite bulges, nonzero neap tides, and never intersects the Earth',()=>{
  for(const a of [0,45,90,180,270])for(let lat=-90;lat<=90;lat+=5)for(let lon=0;lon<360;lon+=5){const y=Math.sin(radians(lat)),x=Math.cos(radians(lat))*Math.cos(radians(lon)),z=Math.cos(radians(lat))*Math.sin(radians(lon));expect(shellRadius(x,y,z,a)).toBeGreaterThan(EARTH_RADIUS);expect(surfaceField(x,y,z,a)).toBeCloseTo(surfaceField(-x,-y,-z,a),10);}
  expect(2*tideAmplitude(0)).toBeCloseTo(2.92);expect(2*tideAmplitude(90)).toBeCloseTo(1.08);
 });
 it('preserves zero spherical mean without clipping the low water',()=>{let sum=0,n=0;for(let i=0;i<100;i++){const y=-1+(i+.5)*2/100;for(let j=0;j<120;j++){const a=j/120*Math.PI*2,r=Math.sqrt(1-y*y);sum+=surfaceField(r*Math.cos(a),y,r*Math.sin(a),45);n++;}}expect(sum/n).toBeCloseTo(0,3);});
});
describe('review revision keeps existing modules and offers real 3D',()=>{
 it('loads only from the new standalone lesson and preserves both classic shells',()=>{const html=readFileSync('experiments/3d/earth-moon/tides/index.html','utf8');expect(html).toContain('modules/tides3d/tides3d.js');expect(readFileSync('index.html','utf8')).not.toContain('modules/tides3d');expect(readFileSync('experiments/3d/earth-moon/tides/classic.html','utf8')).toContain('modules/tides/tides.js');expect(readFileSync('experiments/3d/earth-moon/classic.html','utf8')).toContain('modules/experiment-planets/planet.js');});
 it('uses the project textures, actual sunlight, OrbitControls and captured direct interaction',()=>{const s=readFileSync('src/tides3d/stage.ts','utf8');for(const text of ['earth-surface-equirect-v02.png','moon-lroc-2k.jpg','OrbitControls','setPointerCapture','shellRadius','pagehide'])if(text!=='pagehide')expect(s).toContain(text);expect(readFileSync('src/tides3d/app.ts','utf8')).toContain('pagehide');});
});
