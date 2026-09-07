import {it,expect} from 'vitest';
import {clockDrive,clockTrain,CLOCK_DRIVE_GEARS as gears} from '../src/experiments/clock-demo';
import {driveRPMLabels} from '../src/experiments/clock-transmission';
it('connects all three gear pairs on the same plane at their pitch distance',()=>{
  for(const [a,b] of [[0,1],[2,3],[4,5]]){const x=gears[a],y=gears[b];expect(x.z).toBe(y.z);expect(Math.hypot(x.x-y.x,x.y-y.y)).toBeCloseTo(x.r+y.r);expect(x.r/x.teeth).toBeCloseTo(y.r/y.teeth);}
  for(const [a,b] of [[1,2],[3,4]]){expect(gears[a].x).toBe(gears[b].x);expect(gears[a].y).toBe(gears[b].y);}
  expect(gears[5].x).toBe(0);expect(gears[5].y).toBe(0);
});
it('derives minute and hour hands from motor through all meshes',()=>{
  for(const time of [0,.5,1,30,60,720]){const {motor,first,second,minute}=clockDrive(time);expect(motor*12+first*36).toBeCloseTo(0);expect(first*12+second*48).toBeCloseTo(0);expect(second*12+minute*60).toBeCloseTo(0);expect(clockTrain(time)[0]).toBe(minute);expect(clockTrain(time)[3]).toBeCloseTo(-motor/720);}
  expect(driveRPMLabels(1)).toEqual(['1','1/3','1/12','1/60']);expect(driveRPMLabels(60)).toEqual(['60','20','5','1']);
});
