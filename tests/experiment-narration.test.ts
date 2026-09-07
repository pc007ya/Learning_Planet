import { afterEach, describe, expect, it, vi } from 'vitest';
import { LabExperience } from '../src/experiments/experience';

// Exercise narration without mounting WebGL or requesting OS audio in the test runner.
function setup(enabled = true) {
  const status = { textContent: '' };
  const synth = { cancel: vi.fn(), speak: vi.fn(), getVoices: () => [{ lang: 'en-US' }, { lang: 'zh-TW' }] };
  vi.stubGlobal('window', { speechSynthesis: synth });
  vi.stubGlobal('SpeechSynthesisUtterance', class { constructor(public text: string) {} });
  const narrator = Object.assign(Object.create(LabExperience.prototype), {
    enabled, lastText: '', host: { querySelector: () => status },
  }) as { say(text: string, explicit?: boolean): void; stop(): void; lastText: string };
  return { narrator, synth, status };
}
afterEach(() => vi.unstubAllGlobals());
describe('experiment narration', () => {
  it('does not autoplay before consent but allows explicit replay', () => {
    const { narrator, synth } = setup(false);
    narrator.say('齒輪會傳遞轉動。'); expect(synth.speak).not.toHaveBeenCalled();
    narrator.say('齒輪會傳遞轉動。', true); expect(synth.speak).toHaveBeenCalledOnce();
  });
  it('uses Traditional Chinese device voice at a child-friendly pace', () => {
    const { narrator, synth } = setup(); narrator.say('一起來探索！');
    expect(synth.speak.mock.calls[0][0]).toMatchObject({ text: '一起來探索！', lang: 'zh-TW', rate: .88, voice: { lang: 'zh-TW' } });
  });
  it('replaces old speech and ignores stale completion callbacks', () => {
    const { narrator, synth, status } = setup(); narrator.say('第一個零件');
    const first = synth.speak.mock.calls[0][0]; narrator.say('第二個零件');
    const second = synth.speak.mock.calls[1][0]; second.onstart(); first.onend();
    expect(status.textContent).toBe('✦ 正在講解…');
    expect(synth.cancel).toHaveBeenCalledTimes(2); expect(narrator.lastText).toBe('第二個零件');
  });
  it('keeps a readable fallback when speech is unavailable or fails', () => {
    const { narrator, synth, status } = setup(); narrator.say('試試看');
    synth.speak.mock.calls[0][0].onerror({ error: 'synthesis-failed' });
    expect(status.textContent).toContain('語音未播放');
    vi.stubGlobal('window', {}); narrator.say('試試看'); expect(status.textContent).toContain('此裝置無語音');
  });
});
