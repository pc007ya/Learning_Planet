import {it,expect} from 'vitest';
import {advanceClockDemo} from '../src/experiments/clock-demo';
it('runs 60 times faster rather than only changing rate labels',()=>{
  expect(advanceClockDemo(0,10,1).minutes).toBeCloseTo(1/6);
  expect(advanceClockDemo(0,10,60).minutes).toBe(10);
});
it('changes speed without resetting accumulated time',()=>{
  const slow=advanceClockDemo(12,6,1);expect(slow.minutes).toBeCloseTo(12.1);
  const fast=advanceClockDemo(slow.elapsed,6,60);expect(fast.minutes).toBeCloseTo(18.1);
  expect(advanceClockDemo(fast.elapsed,0,1).minutes).toBe(fast.minutes);
});
it('stops after an hour of simulated time in either mode',()=>{
  expect(advanceClockDemo(0,3600,1).done).toBe(true);expect(advanceClockDemo(0,60,60).done).toBe(true);
  expect(advanceClockDemo(59.9,10,60).minutes).toBe(60);
});
