import {afterEach, describe, expect, it, vi} from 'vitest';
import {PhonicsLab} from '../src/english/phonics';

function fixture() {
  const pending: VoidFunction[] = [];
  class TestImage {
    complete = true;
    naturalWidth = 0;
    assignments: string[] = [];
    getAttribute(name: string) { return name === 'src' ? 'images/example.webp' : null; }
    set src(value: string) { this.assignments.push(value); }
  }
  const image = new TestImage();
  const listeners = new Map<string, EventListener>();
  const signals: AbortSignal[] = [];
  let retry: {dataset: Record<string, string>; textContent: string; setAttribute: ReturnType<typeof vi.fn>} | undefined;
  const shell = {append(button: typeof retry) { retry = button; }};
  const host = {
    dataset: {}, innerHTML: '',
    addEventListener(name: string, listener: EventListener, options: AddEventListenerOptions) {
      listeners.set(name, listener); signals.push(options.signal!);
    },
    contains: (target: unknown) => target === image,
    querySelector: (selector: string) => selector === '.ph-image-retry' ? retry : selector === '.ph-shell' ? shell : null,
    querySelectorAll: () => [image],
  };
  vi.stubGlobal('HTMLImageElement', TestImage);
  vi.stubGlobal('document', {
    addEventListener: vi.fn(),
    createElement: () => ({dataset: {}, textContent: '', setAttribute: vi.fn()}),
  });
  vi.stubGlobal('window', {});
  vi.stubGlobal('queueMicrotask', (callback: VoidFunction) => pending.push(callback));
  const lab = new PhonicsLab(host as unknown as HTMLElement);
  const error = () => listeners.get('error')!({target: image} as unknown as Event);
  const flush = () => {
    for (const callback of pending.splice(0)) callback();
  };
  return {lab, image, pending, signals, error, flush, retry: () => retry};
}

afterEach(() => vi.unstubAllGlobals());

describe('phonics image recovery', () => {
  it('retries a failed image once at the original URL and offers an explicit retry after another failure', () => {
    const f = fixture();
    f.error();
    expect(f.image.assignments).toEqual([]);
    f.flush();
    expect(f.image.assignments).toEqual(['images/example.webp']);
    f.error(); f.error();
    expect(f.pending).toHaveLength(0);
    expect(f.retry()?.dataset.action).toBe('retry-images');
    expect(f.retry()?.setAttribute).toHaveBeenCalledWith('aria-label', '重新載入教材圖片');
    f.lab.destroy();
  });

  it('prevents a queued image retry after leaving and aborts the module event listeners', () => {
    const f = fixture();
    f.error();
    expect(f.pending).toHaveLength(1);
    f.lab.destroy();
    expect(f.signals.every(signal => signal.aborted)).toBe(true);
    f.flush();
    expect(f.image.assignments).toEqual([]);
  });
});
