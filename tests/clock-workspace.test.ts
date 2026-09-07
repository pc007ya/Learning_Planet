import { describe, it, expect, vi } from 'vitest';
import * as T from 'three';
import { Mechanism } from '../src/experiments/mechanism';
import { readFileSync } from 'node:fs';

describe('compact clock workspace', () => {
  it('puts icon switches in the heading and exposes the hidden coaxial pinion',()=>{
    const code=readFileSync('src/experiments/mechanism.ts','utf8');expect(code).toContain("host.querySelector('.bp-heading')!.append(tools.firstElementChild!);tools.remove()");expect(code).toContain("this.kind==='clock'&&teeth>=36");expect(code).toContain('10T · 同軸');
  });
  it('reserves space for an open BOM without moving the model parts', () => {
    let open=false;
    const root=new T.Group();
    const model=Object.assign(Object.create(Mechanism.prototype),{kind:'clock',root,parts:[],
      camera:new T.OrthographicCamera(),stage:{clientWidth:994,clientHeight:450,querySelector:(selector:string)=>selector==='.mech-bom[open]'&&open?{}:null},
      amount:1,target:1,yaw:-.25,zoom:1,wake:vi.fn()});
    model.frame(.016); const before=model.camera.right;
    open=true; model.frame(.016);
    expect(model.camera.right).toBeGreaterThan(before);
    expect(model.root.position.toArray()).toEqual([0,0,0]);
    expect(model.camera.left+model.camera.right).toBeGreaterThan(0);
  });
  it('keeps clock time independent of rotation and supplies accessible switches', () => {
    const code=readFileSync('src/experiments/mechanism.ts','utf8');
    expect(code).toContain('role="switch" data-clock-rotate');
    expect(code).toContain('role="switch" data-clock-explode');
    expect(code).toContain("bom.append(tray); stage.append(bom)");
    expect(code).toContain("this.halo.className = 'mech-selection-halo'");
    expect(code).toContain("kind==='clock'&&!this.clockRotate");
  });
  it('offers picture choices and no visible clock parameter slider in the new controls', () => {
    const code=readFileSync('src/experiments/lab.ts','utf8');
    expect(code).toContain('<input type="hidden" data-input="minutes"');
    expect(code).toContain('clockPicture(hour)');
    expect(code).toContain("['quiz','notes','help'].includes(button.dataset.helper");
  });
});
