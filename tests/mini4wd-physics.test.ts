import {describe,it,expect} from 'vitest';
import {createCar,stepCar,collideCars,DEFAULT_SETUP,STEP,TRACK,trackPoint,nearestTrack,type Setup} from '../src/experiments/mini4wd-physics';
import {PARTS,completeParts,canInstall,removePart} from '../src/experiments/mini4wd-parts';
const run=(s:Setup)=>{const c=createCar();for(let i=0;i<240*35&&!c.finished&&!c.offTrack;i++)stepCar(c,s);return c;};
describe('mini4wd physical behavior',()=>{
  it('completes three ordered laps with contact and ballistic landing',()=>{const c=run(DEFAULT_SETUP);expect(c.finished).toBe(true);expect(c.lapTimes).toHaveLength(3);expect(c.contacts).toBeGreaterThan(0);expect(c.landings).toBeGreaterThan(0);expect(c.distance).toBeGreaterThanOrEqual(3*TRACK.length);});
  it('does not move without power at rest',()=>{const c=createCar();for(let i=0;i<1000;i++)stepCar(c,DEFAULT_SETUP,STEP,false);expect(c.distance).toBe(0);});
  it('color cannot change performance, real setup does',()=>{const baseline=run(DEFAULT_SETUP);expect(run({...DEFAULT_SETUP,color:'#ff794f'})).toEqual(baseline);const low=run({...DEFAULT_SETUP,gear:5});expect(Math.abs(low.time-baseline.time)).toBeGreaterThan(.2);});
  it('accelerates faster with greater reduction at launch',()=>{const a=createCar(),b=createCar();for(let i=0;i<25;i++){stepCar(a,{...DEFAULT_SETUP,gear:3.5});stepCar(b,{...DEFAULT_SETUP,gear:5});}expect(b.vx).toBeGreaterThan(a.vx);});
  it('resolves car impact with momentum transfer and no gain in kinetic energy',()=>{const a=createCar(),b=createCar();a.x=0;b.x=2;a.vx=15;b.vx=0;collideCars(a,b,DEFAULT_SETUP,DEFAULT_SETUP);expect(a.vx).toBeLessThan(15);expect(b.vx).toBeGreaterThan(0);expect(a.vx*a.vx+b.vx*b.vx).toBeLessThanOrEqual(225.001);});
  it('uses consistent track geometry around both bends',()=>{for(let i=0;i<100;i++){const s=i/100*TRACK.length,p=trackPoint(s),q=nearestTrack(p.x,p.z);expect(q.offset).toBeCloseTo(0,8);expect(q.s).toBeCloseTo(s,8);}});
  it('high-speed contact cannot tunnel through a rail',()=>{const c=createCar();c.vz=-100;for(let i=0;i<30;i++)stepCar(c,DEFAULT_SETUP);expect(Math.abs(nearestTrack(c.x,c.z).offset)).toBeLessThan(TRACK.width/2);expect(Number.isFinite(c.omega)).toBe(true);});
});
describe('mini4wd assembly dependencies',()=>{
  it('requires axle then rim then individual tire',()=>{const built=new Set(['chassis']);expect(canInstall('tire-fl',built)).toBe(false);for(const id of ['motor','gears','shaft','axles','rim-fl']){expect(canInstall(id,built)).toBe(true);built.add(id);}expect(canInstall('tire-fl',built)).toBe(true);expect(canInstall('tire-fr',built)).toBe(false);});
  it('requires all wheels before shell, and reverse removal order',()=>{const built=completeParts();expect(removePart('rim-fl',built)).toBe(false);expect(removePart('shell',built)).toBe(true);expect(removePart('tire-fl',built)).toBe(true);expect(canInstall('shell',built)).toBe(false);expect(removePart('rim-fl',built)).toBe(true);expect(removePart('chassis',built)).toBe(false);expect(new Set(PARTS.map(p=>p.id)).size).toBe(PARTS.length);});
});
