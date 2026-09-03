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

  it('anchors measurement rays at the protractor centre and renders a complete balance', () => {
    expect(html).toContain('left:50%;bottom:0;width:84px;height:4px;background:#ff6fae');
    expect(html).toContain('transform:rotate({{ protractorRotate }}deg)');
    expect(html).toContain('left:50%;bottom:-7px;width:18px;height:18px');
    expect(html).toContain('width:142px;height:18px;transform:translateX(-50%)');
    expect(html).toContain('width:17px;height:86px;transform:translateX(-50%)');
    expect(html).toContain('border-bottom:6px solid #7c5cff');
    expect(html).toContain('beamTilt, counterTilt: -beamTilt');
  });

  it('uses recorded HsiaoChen presenter lines with type-specific hints', () => {
    const clips = ['welcome', 'ready', 'correct', 'wrong', 'urgent', 'hint-counting', 'hint-clock', 'hint-columns', 'hint-shape', 'hint-line', 'hint-weight', 'hint-generic'];
    for (const clip of clips) {
      expect(existsSync(new URL(`../audio/math-presenter/v1/${clip}-v1.mp3`, import.meta.url))).toBe(true);
    }
    expect(html).toContain('function mathPresenterHintAudio(question)');
    expect(html).toContain('this.playPresenterVoice(');
    expect(html).toContain('if (this.presenterVoiceAudio)');
    expect(html).toContain('audio.onended = () =>');
    expect(html).toContain('s.locked && q ? q.explain : ""');
    const presenterVoiceBody = html.match(/playPresenterVoice\(source, fallbackText, followupText\) \{([\s\S]*?)\n  \}/)?.[1] || '';
    expect(presenterVoiceBody).not.toContain('this.state.speechMuted');
  });

  it('retains the existing science confirmation and classic feedback paths', () => {
    expect(html).toContain('confirmSciAnswer()');
    expect(html).toContain('showSciConfirm:');
    expect(html).toContain('showClassicFeedback: s.locked && !isMathMaster');
  });
});
