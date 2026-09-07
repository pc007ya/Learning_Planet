import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';

describe('tablet experiment workspace contract', () => {
  const code = readFileSync('src/experiments/experience.ts', 'utf8');
  const css = readFileSync('styles/interactive-labs.css', 'utf8');
  it('keeps secondary learning activities accessible in a modal, not removed', () => {
    for (const item of ['.il-observations', '.il-assessment', '.mech-parent', '.mech-part-info']) expect(code).toContain(item);
    expect(code).toContain('showModal()'); expect(code).toContain('this.dialog.close()');
  });
  it('requires a gesture for narration and supports replay, cancellation and fallback', () => {
    expect(code).toContain('private enabled = false');
    expect(code).toContain('data-helper="replay"');
    expect(code).toContain("utterance.lang = 'zh-TW'");
    expect(code).toContain('window.speechSynthesis.cancel()');
    expect(code).toContain('此裝置無語音');
    expect(code).toContain('this.observer.disconnect()');
  });
  it('uses a bounded landscape workspace and preserves small-screen scrolling', () => {
    expect(css).toContain('(min-height:600px) and (orientation:landscape)');
    expect(css).toContain('height:100svh');
    expect(css).toContain('prefers-reduced-motion');
    expect(css).not.toContain('body:has(.il-shell) { overflow:hidden');
  });
});
