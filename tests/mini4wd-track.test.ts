import {describe,it,expect} from 'vitest';
import {readFileSync} from 'node:fs';
import {ground,stepCar,createCar,DEFAULT_SETUP,STEP,type TrackKind} from '../src/experiments/mini4wd-physics';
import {makeToyTrack,disposeTrack} from '../src/experiments/mini4wd-track';
import * as T from 'three';

describe('picture-first toy tracks',()=>{
  it.each(['flat','bridge','jump'] as TrackKind[])('%s has finite geometry and can finish three laps',kind=>{
    const car=createCar();for(let i=0;i<240*40&&!car.finished&&!car.offTrack;i++)stepCar(car,DEFAULT_SETUP,STEP,true,kind);
    expect(car.finished).toBe(true);expect(car.lapTimes).toHaveLength(3);
    const model=makeToyTrack(kind);model.traverse(o=>{if(o instanceof T.Mesh)expect([...o.geometry.attributes.position.array].every(Number.isFinite)).toBe(true);});disposeTrack(model);expect(model.children).toHaveLength(0);
  });
  it('changes actual road height and gap, not just a thumbnail',()=>{
    expect(ground(0,-12,'flat').height).toBe(0);expect(ground(0,-12,'bridge').height).toBe(1.2);
    expect(ground(3,-12,'jump').gap).toBe(true);expect(ground(3,-12,'bridge').gap).toBe(false);
    for(let x=-9;x<10;x+=.5){const d=(ground(x+.001,-12,'bridge').height-ground(x-.001,-12,'bridge').height)/.002;expect(d).toBeCloseTo(ground(x,-12,'bridge').slope,5);}
  });
  it('uses a bottom picture dock with separated generated artwork',()=>{
    const css=readFileSync('styles/mini4wd.css','utf8'),source=readFileSync('src/experiments/mini4wd-lab.ts','utf8');
    expect(css).toContain('grid-template-rows:minmax(0,1fr) 138px');expect(css).not.toContain('1fr) 276px');
    expect(source).not.toContain('<fieldset>');expect(source).not.toContain('<select');expect(source).toContain('optionPhotos');expect(source).toContain('trackPhotos');expect(source).toContain('questionPicture');
    for(const file of ['clubhouse.png','race-flag.png']){const png=readFileSync('images/experiments/mini4wd-v2/'+file);expect(png.subarray(1,4).toString()).toBe('PNG');expect(png.readUInt32BE(16)).toBeGreaterThanOrEqual(1024);if(file==='race-flag.png')expect(png[25]).toBe(6);}
  });
});
