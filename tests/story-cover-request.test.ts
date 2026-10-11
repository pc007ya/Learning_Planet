import {afterEach, describe, expect, it, vi} from 'vitest';
import {createDeferredCover} from '../src/story/cover-request';

function fixture() {
  const images: TestImage[] = [];
  class TestImage {
    onload: (() => void) | null = null;
    onerror: (() => void) | null = null;
    decoding = ''; fetchPriority = '';
    attrs = new Map<string, string>();
    constructor() { images.push(this); }
    set src(value: string) { this.attrs.set('src', value); }
    removeAttribute(name: string) { this.attrs.delete(name); }
  }
  vi.stubGlobal('Image', TestImage);
  const hooks = {start: vi.fn(), loaded: vi.fn(), failed: vi.fn()};
  return {images, hooks, request: createDeferredCover('images/original-cover.png', hooks)};
}
afterEach(() => vi.unstubAllGlobals());

describe('story cover request lifetime', () => {
  it('requests no closed covers and shares repeated preview selection until completion', () => {
    const f = fixture();
    expect(f.images).toHaveLength(0);
    f.request.load(); f.request.load();
    expect(f.images).toHaveLength(1);
    expect(f.images[0].attrs.get('src')).toBe('images/original-cover.png');
    expect(f.images[0].fetchPriority).toBe('low');
    f.images[0].onload!(); f.request.load();
    expect(f.hooks.loaded).toHaveBeenCalledTimes(1);
    expect(f.images).toHaveLength(1);
  });
  it('cancels an unfinished preview and ignores its late completion when another book is selected', () => {
    const f = fixture(); f.request.load();
    const late = f.images[0].onload!;
    f.request.cancel(); late();
    expect(f.images[0].attrs.has('src')).toBe(false);
    expect(f.hooks.loaded).not.toHaveBeenCalled();
    f.request.load(); f.images[1].onload!();
    expect(f.hooks.loaded).toHaveBeenCalledTimes(1);
  });
  it('allows a failed preview to retry at the original URL without automatic loops', () => {
    const f = fixture(); f.request.load(); f.images[0].onerror!();
    expect(f.hooks.failed).toHaveBeenCalledTimes(1);
    expect(f.images).toHaveLength(1);
    f.request.load();
    expect(f.images[1].attrs.get('src')).toBe('images/original-cover.png');
  });
  it('releases pending images on exit and prevents late callbacks or future requests', () => {
    const f = fixture(); f.request.load();
    const lateError = f.images[0].onerror!;
    const lateLoad = f.images[0].onload!;
    f.request.dispose(); lateError(); lateLoad(); f.request.load();
    expect(f.images[0].attrs.has('src')).toBe(false);
    expect(f.hooks.failed).not.toHaveBeenCalled();
    expect(f.hooks.loaded).not.toHaveBeenCalled();
    expect(f.images).toHaveLength(1);
  });
});
