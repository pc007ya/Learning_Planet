import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import * as T from 'three';
import { buildCarBody } from '../src/experiments/car-body';

describe('original car artwork and illustrated questions', () => {
  it('ships distinct, complete images and matched background dimensions', () => {
    const names = ['track-smooth','track-rough','pencil','question-pull','spring','paint','air'];
    const files = names.map(name => readFileSync(`images/experiments/car-v4/${name}.png`));
    expect(new Set(files.map(file => createHash('sha256').update(file).digest('hex'))).size).toBe(7);
    for (const file of files) {
      expect(file.subarray(1,4).toString()).toBe('PNG');
      expect(file.readUInt32BE(16)).toBeGreaterThanOrEqual(512);
      expect(file.readUInt32BE(20)).toBeGreaterThanOrEqual(512);
    }
    expect(files[0].subarray(16,24)).toEqual(files[1].subarray(16,24));
    for (const file of files.slice(2)) expect(file[25]).toBe(6); // independent RGBA cutouts
  });
  it('builds a finite, multi-part shell with enamel paint and actual glazing geometry', () => {
    const shell = new T.Group(); buildCarBody(shell);
    const bounds = new T.Box3().setFromObject(shell);
    expect(bounds.isEmpty()).toBe(false);
    expect(bounds.min.toArray().every(Number.isFinite)).toBe(true);
    expect(bounds.max.toArray().every(Number.isFinite)).toBe(true);
    expect(shell.children.length).toBeGreaterThan(30);
    expect(shell.children.some(child => (child as T.Mesh).material instanceof T.MeshPhysicalMaterial)).toBe(true);
    expect(shell.children.filter(child => (child as T.Mesh).geometry.type === 'BufferGeometry')).toHaveLength(6);
    shell.traverse(child => { if (child instanceof T.Mesh) { child.geometry.dispose(); (child.material as T.Material).dispose(); } });
  });
  it('offers picture choices, screen-reader labels and explicit question narration', () => {
    const art = readFileSync('src/experiments/car-art.ts','utf8');
    expect(art).toContain("['spring','paint','air']");
    expect(art).toContain('question-pull.png');
    expect(art).toContain('aria-label="聽題目"');
    expect(art).toContain('aria-pressed="false"');
    expect(art).toContain('class="bp-sr"');
  });
});
