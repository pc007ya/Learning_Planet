import { afterEach, describe, expect, it, vi } from 'vitest';
import { SceneNarration } from '../src/experiments/narration';

afterEach(() => vi.unstubAllGlobals());
describe('scene narration visibility', () => {
  it('keeps late async speech silent in the background and supports visible replay', () => {
    const synth = { cancel: vi.fn(), speak: vi.fn(), getVoices: () => [] };
    vi.stubGlobal('window', { speechSynthesis: synth }); vi.stubGlobal('speechSynthesis', synth);
    vi.stubGlobal('SpeechSynthesisUtterance', class { constructor(public text: string) {} });
    vi.stubGlobal('document', { hidden: true });
    const voice = new SceneNarration(); voice.enabled = true;
    voice.say('新的操作提示'); voice.replay();
    expect(synth.speak).not.toHaveBeenCalled(); expect(voice.last).toBe('新的操作提示');
    vi.stubGlobal('document', { hidden: false }); voice.replay();
    expect(synth.speak).toHaveBeenCalledOnce();
  });
});
