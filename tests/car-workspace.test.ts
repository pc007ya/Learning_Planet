import { describe, it, expect, vi } from 'vitest';
import * as T from 'three';
import { Mechanism } from '../src/experiments/mechanism';
import { readFileSync } from 'node:fs';

function setup() {
  const status = { textContent: '' };
  const host = { dataset: {}, querySelector: () => status, querySelectorAll: () => [] };
  const model = Object.assign(Object.create(Mechanism.prototype), {
    kind: 'car', host, root: new T.Group(), parts: [], wheels: [], gears: [],
    camera: new T.OrthographicCamera(), stage: { clientWidth: 760, clientHeight: 500 },
    carMode: 'rotate', mode: 'whole', amount: 0, target: 0, yaw: -.55,
    pullValue: .5, wake: vi.fn(),
  });
  return { model, host, status };
}
describe('child-friendly car modes', () => {
  it('prepares a complete side view and wider framing before pull testing', () => {
    const { model, host } = setup();
    model.setCarMode('explode'); model.frame(.2);
    model.setCarMode('test'); model.frame(.016);
    expect(host.dataset).toEqual({ carMode: 'test' });
    expect(model.mode).toBe('whole'); expect(model.amount).toBe(0);
    expect(model.root.rotation.x).toBe(0); expect(model.root.rotation.y).toBe(0);
    expect(model.camera.right).toBeGreaterThanOrEqual(5.8);
  });
  it('keeps driving inside the wide frame and returns to an assembled rotate view', () => {
    const { model } = setup(); model.setCarMode('test'); model.setCar(1, 3.6, true);
    expect(model.root.position.x).toBeCloseTo(1.8);
    model.setCarMode('rotate'); expect(model.mode).toBe('whole'); expect(model.root.position.x).toBe(0);
    expect(model.yaw).toBe(-.55);
  });
  it('can turn every mode off without leaving an exploded model', () => {
    const { model, host } = setup(); model.setCarMode('explode'); model.setCarMode('idle');
    expect(host.dataset).toEqual({ carMode: 'idle' }); expect(model.target).toBe(0);
  });
  it('uses switches and illustrated roads while keeping questions in the header', () => {
    const code = readFileSync('src/experiments/mechanism.ts','utf8');
    const lab = readFileSync('src/experiments/lab.ts','utf8');
    const experience = readFileSync('src/experiments/experience.ts','utf8');
    expect(code).toContain('role="switch" data-car-mode="rotate"');
    expect(code).toContain("this.carMode!=='test'");
    expect(lab).toContain('data-road="smooth"'); expect(lab).toContain('data-road="rough"');
    expect(lab).toContain('<input type="hidden" data-input="pull"');
    expect(experience).toContain('pencil.png');
    expect(experience).toContain('data-car-read');
  });
  it('anchors the wheel contact to the generated road in side view', () => {
    const { model } = setup(); model.setCarMode('test'); model.frame(.016);
    const contact = new T.Vector3(0,-.445,0).project(model.camera);
    expect((1-contact.y)/2).toBeCloseTo(.64);
  });
});
