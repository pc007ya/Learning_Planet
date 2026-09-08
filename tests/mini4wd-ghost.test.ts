import {describe,it,expect} from 'vitest';
import {GhostRecorder,ghostAt} from '../src/experiments/mini4wd-ghost';
import {createCar,DEFAULT_SETUP,stepCar,STEP} from '../src/experiments/mini4wd-physics';
describe('same-track ghost replay',()=>{
  it('records an actual completed run and replays start, middle and finish',()=>{
    const r=new GhostRecorder(),c=createCar();r.start(c);
    for(let i=0;i<240*80&&!c.finished;i++){stepCar(c,DEFAULT_SETUP,STEP,true,'flat');r.sample(c);}
    const lap=r.finish(c,DEFAULT_SETUP,'flat')!;expect(lap.track).toBe('flat');expect(lap.frames.length).toBeGreaterThan(100);expect(lap.frames.length).toBeLessThan(3603);
    expect(ghostAt(lap,-1).x).toBe(createCar().x);expect(ghostAt(lap,999).x).toBe(c.x);
    expect(ghostAt(lap,lap.time/2).time).toBe(lap.time/2);expect(lap.setup).not.toBe(DEFAULT_SETUP);
    const before=lap.frames[0].x;c.x=123;expect(lap.frames[0].x).toBe(before);
  });
  it('interpolates across wrapped headings through the short arc',()=>{
    const c=createCar();const a={...c,time:0,yaw:Math.PI-.1},b={...c,time:1,x:10,yaw:-Math.PI+.1};
    const p=ghostAt({frames:[a,b],setup:{...DEFAULT_SETUP},track:'bridge',time:1},.5);
    expect(p.yaw).toBeCloseTo(Math.PI);expect(p.x).toBeCloseTo((a.x+10)/2);
  });
  it('never promotes stopped, off-track or overlong sessions',()=>{
    const r=new GhostRecorder(),c=createCar();r.start(c);expect(r.finish(c,DEFAULT_SETUP,'flat')).toBeUndefined();
    c.finished=true;c.offTrack=true;expect(r.finish(c,DEFAULT_SETUP,'flat')).toBeUndefined();
    c.offTrack=false;c.time=121;expect(r.finish(c,DEFAULT_SETUP,'flat')).toBeUndefined();
  });
  it('bounds memory and resets samples for the next run',()=>{
    const r=new GhostRecorder(),c=createCar();r.start(c);for(let i=1;i<8000;i++){c.time=i/30;r.sample(c);}c.time=120;c.finished=true;
    expect(r.finish(c,DEFAULT_SETUP,'jump')!.frames.length).toBeLessThanOrEqual(3602);
    const fresh=createCar();r.start(fresh);fresh.finished=true;fresh.time=1;expect(r.finish(fresh,DEFAULT_SETUP,'flat')!.frames.length).toBe(2);
  });
});
