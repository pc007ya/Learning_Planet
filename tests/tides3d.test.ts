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
 it('loads only from the new standalone lesson and preserves both classic shells',()=>{const html=readFileSync('experiments/3d/earth-moon/tides/index.html','utf8');expect(html).toContain('modules/tides3d/tides3d.js');expect(readFileSync('index.html','utf8')).not.toContain('modules/tides3d');expect(readFileSync('experiments/3d/earth-moon/tides/classic.html','utf8')).toContain('modules/tides/tides.js');expect(readFileSync('experiments/3d/earth-moon/classic.html','utf8')).toContain('modules/experiment-planets/legacy.js');});
 it('uses the project textures, actual sunlight, OrbitControls and captured direct interaction',()=>{const s=readFileSync('src/tides3d/stage.ts','utf8');for(const text of ['earth-surface-equirect-v02.png','moon-lroc-2k.jpg','OrbitControls','setPointerCapture','shellRadius','pagehide'])if(text!=='pagehide')expect(s).toContain(text);expect(readFileSync('src/tides3d/app.ts','utf8')).toContain('pagehide');});
});

import {judgeChallenge} from '../src/tides3d/challenges';
describe('hands-on assessment uses the physical model',()=>{
 it('requires an actual adjustment instead of accepting an untouched target',()=>{expect(judgeChallenge('spring',0,false).passed).toBe(false);expect(judgeChallenge('neap',90,false).passed).toBe(false);});
 it('accepts both alignments for spring and rejects the perpendicular case',()=>{for(const a of [0,180,359,7])expect(judgeChallenge('spring',a,true).passed).toBe(true);for(const a of [45,90,270])expect(judgeChallenge('spring',a,true).passed).toBe(false);});
 it('accepts both quarter positions for neap without removing tides',()=>{for(const a of [90,270]){const result=judgeChallenge('neap',a,true);expect(result.passed).toBe(true);expect(result.range).toBeCloseTo(1.08);}expect(judgeChallenge('neap',0,true).passed).toBe(false);});
 it('requires fine adjustment for a numeric range; none of the four preset answers suffice',()=>{for(const a of [0,90,180,270])expect(judgeChallenge('middle',a,true).passed).toBe(false);expect(judgeChallenge('middle',50,true).passed).toBe(true);expect(judgeChallenge('middle',130,true).passed).toBe(true);expect(judgeChallenge('middle',45,true).message).toContain('偏大');expect(judgeChallenge('middle',90,true).message).toContain('偏小');});
 it('does not accept invalid state',()=>{expect(judgeChallenge('middle',NaN,true).passed).toBe(false);});
});

import {placeLabels,intersects} from '../src/tides3d/labels';
describe('camera-independent readable annotation placement',()=>{
 it('separates the quarter-moon caption from the near-side direction',()=>{
  const labels=[{id:'moon',x:440,y:96,width:90,height:27,handle:27},{id:'near',x:440,y:128,width:80,height:27},{id:'water',x:345,y:152,width:135,height:27}];
  const placed=placeLabels(labels,[{x:413,y:69,width:54,height:54},{x:0,y:0,width:940,height:44}],940,518);
  expect(placed.size).toBe(3);const rectangles=[...placed.values()];for(let i=0;i<rectangles.length;i++)for(let j=i+1;j<rectangles.length;j++)expect(intersects(rectangles[i],rectangles[j],9)).toBe(false);
 });
 it('keeps long mobile captions away from controls and viewport edges',()=>{
  const blocked=[{x:0,y:0,width:342,height:40},{x:8,y:238,width:236,height:44},{x:100,y:130,width:54,height:54}];
  const placed=placeLabels([{id:'back',x:127,y:157,width:220,height:28,handle:27},{id:'coast',x:145,y:190,width:104,height:28,handle:24}],blocked,342,310);
  expect(placed.size).toBe(2);for(const rect of placed.values()){expect(rect.x).toBeGreaterThanOrEqual(8);expect(rect.x+rect.width).toBeLessThanOrEqual(334);for(const obstacle of blocked)expect(intersects(rect,obstacle,9)).toBe(false);}
 });
 it('respects reserved panels as the camera moves through important angles',()=>{
  const panels=[{x:0,y:0,width:680,height:45},{x:12,y:330,width:250,height:44},{x:440,y:300,width:225,height:104}];
  for(const angle of [0,45,90,180,270]){const a=angle*Math.PI/180;const placed=placeLabels([{id:'moon',x:340+150*Math.cos(a),y:190+100*Math.sin(a),width:90,height:28,handle:27},{id:'near',x:340+110*Math.cos(a),y:190+80*Math.sin(a),width:80,height:28}],panels,680,420);expect(placed.size).toBe(2);for(const r of placed.values())for(const p of panels)expect(intersects(r,p,9)).toBe(false);}
 });
});

import {tideReadings} from '../src/tides3d/zhuyin';
describe('tide lesson Traditional Chinese readings',()=>{
 it('uses Taiwan scientific readings and context-sensitive polyphones',()=>{
  const readings=(s:string)=>tideReadings(s).map(t=>t.reading);
  expect(readings('潮汐月相')).toEqual(['ㄔㄠˊ','ㄒㄧˋ','ㄩㄝˋ','ㄒㄧㄤˋ']);
  expect(readings('為什麼旋轉重設空白')).toEqual(['ㄨㄟˋ','ㄕㄣˊ','ㄇㄜ˙','ㄒㄩㄢˊ','ㄓㄨㄢˇ','ㄔㄨㄥˊ','ㄕㄜˋ','ㄎㄨㄥˋ','ㄅㄞˊ']);
  expect(readings('上弦小潮仍有潮汐')).not.toContain('');
 });
 it('preserves every character, punctuation and numerical model value',()=>{
  const text='小潮仍有潮汐，示意潮差 1.08；月球 90°。';expect(tideReadings(text).map(t=>t.char).join('')).toBe(text);
 });
});
