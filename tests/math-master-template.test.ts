import { existsSync, readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const presenterFrames = ['hint', 'blink', 'welcome', 'correct', 'wrong', 'retry'];

function pngSize(url: URL) {
  const data = readFileSync(url);
  return { width: data.readUInt32BE(16), height: data.readUInt32BE(20) };
}

describe('Math Master Template', () => {
  it('keeps a reusable fixed shell around dynamic quiz content', () => {
    for (const contract of [
      'quiz-master-shell',
      'math-presenter-card',
      'answer-slot-grid',
      'math-master-submit',
      'math-master-analysis',
      'math-presenter-frame',
    ]) expect(html).toContain(contract);
  });

  it('supports rich AnswerSlot content kinds', () => {
    for (const kind of ['number', 'clock', 'shape', 'length', 'image', 'formula']) {
      expect(html).toContain(`"${kind}"`);
    }
    expect(html).toContain('makeMathAnswerSlot');
  });

  it('uses project art instead of emoji placeholders for counting and guidance', () => {
    expect(html).toContain('images/math-master/v1/apple-red-v1.png');
    expect(html).toContain('images/math-master/v1/apple-green-v1.png');
    expect(html).toContain('images/math-master/v3/presenter/presenter-hint-v1.png');
    expect(html).toContain('images/math-master/v1/back-arrow-v1.svg');
    expect(html).toContain('showClassicAutoNext: !useModernQuizControls');
    expect(html).not.toContain('guide-robot-v1.png');
    for (const asset of ['rabbit-v1.png', 'soap-v1.png', 'ferris-wheel-v1.png', 'basket-v1.png', 'coin-v1.png']) {
      expect(existsSync(new URL(`../images/math-master/v1/objects/${asset}`, import.meta.url))).toBe(true);
    }
    for (const placeholder of ['{{ card.icon }}', '{{ node.icon }}', '{{ weightData.left.icon }}', '{{ weightData.right.icon }}']) {
      expect(html).not.toContain(placeholder);
    }
  });

  it('requires a separate math selection and submit step', () => {
    expect(html).toContain('selectMathAnswer(index)');
    expect(html).toContain('confirmMathAnswer()');
    expect(html).toContain('mathChoice: null');
    expect(html).toContain('showMathSubmit: isMathMaster && !s.locked');
  });

  it('uses a six-frame presenter with useful quiz states', () => {
    expect(html).toContain('--math-side-control-height:176px');
    expect(html).toContain('height:var(--math-side-control-height)');
    expect(html).toContain('mathRobotGuidance');
    for (const state of ['is-welcome', 'is-thinking', 'is-ready', 'is-correct', 'is-wrong', 'is-urgent']) {
      expect(html).toContain(state);
    }
    expect(html).not.toContain('math-presenter-copy');
    expect(html).toContain('@keyframes presenterWrongFrame');
    expect(html).toContain('border:0;border-radius:0;outline:0;background:transparent;box-shadow:none');
    expect(html).toContain('inset:0 0 6px');
    for (const frame of presenterFrames) {
      const url = new URL(`../images/math-master/v3/presenter/presenter-${frame}-v1.png`, import.meta.url);
      expect(existsSync(url)).toBe(true);
      expect(pngSize(url)).toEqual({ width: 288, height: 568 });
    }
    expect(html).toContain('object-fit:contain;object-position:center bottom');
  });

  it('keeps math audio and auto-next controls visually minimal', () => {
    expect(html).toContain('class="quiz-sound-button"');
    expect(html).toContain('class="quiz-sound-label"');
    expect(html).toContain('.math-quiz-focus .is-math-master .quiz-sound-label{display:none!important}');
    expect(html).toContain('.math-quiz-focus .is-math-master .quiz-auto-next>span{display:none!important}');
    expect(html).toContain('.quiz-auto-next b>.sc-interp{display:inline!important;width:auto!important');
    expect(html).toContain('background:transparent!important;box-shadow:none!important');
  });

  it('retains the existing science confirmation and classic feedback paths', () => {
    expect(html).toContain('confirmSciAnswer()');
    expect(html).toContain('showSciConfirm:');
    expect(html).toContain('showClassicFeedback: s.locked && !isMathMaster');
  });
});
