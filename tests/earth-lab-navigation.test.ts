import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';
import { describe, expect, it, vi } from 'vitest';

function host() {
  const elements: any[] = [], listeners = new Map();
  const opener = { isConnected: true, focus: vi.fn() };
  const document = {
    activeElement: opener,
    querySelector: () => elements.find(el => el.tag === 'dialog' && !el.removed),
    createElement: (tag: string) => {
      const el: any = { tag, dataset: {}, style: {}, contentWindow: {}, events: {},
        setAttribute: vi.fn(), append: vi.fn(), showModal: vi.fn(), close: vi.fn(),
        addEventListener: (name: string, fn: Function) => { el.events[name] = fn; },
        remove: () => { el.removed = true; } };
      elements.push(el); return el;
    },
    body: { append: vi.fn() },
  };
  const window: any = { addEventListener: (name: string, fn: Function) => listeners.set(name, fn), removeEventListener: (name: string) => listeners.delete(name) };
  const code = readFileSync(new URL('../modules/earth-lab/launch.mjs', import.meta.url), 'utf8')
    .replace('export function', 'function').replace('import.meta.url', JSON.stringify('https://example.org/Learning_Planet/modules/earth-lab/launch.mjs'));
  runInNewContext(code, { window, document, URL, location: { origin: 'https://example.org' } });
  return { window, elements, listeners, opener };
}

describe('Earth lab keeps its host mounted', () => {
  it('opens once without navigating or persisting identity, then returns focus to the host', () => {
    const h = host(); h.window.LearningPlanetEarthLab.open(); h.window.LearningPlanetEarthLab.open();
    expect(h.elements).toHaveLength(2);
    const [dialog, frame] = h.elements;
    expect(frame.src).toBe('https://example.org/Learning_Planet/science-earth-lab.html');
    h.listeners.get('message')({ origin: 'https://evil.example', source: frame.contentWindow, data: { type: 'earth-lab-close' } });
    h.listeners.get('message')({ origin: 'https://example.org', source: {}, data: { type: 'earth-lab-close' } });
    expect(dialog.removed).toBeUndefined();
    h.listeners.get('message')({ origin: 'https://example.org', source: frame.contentWindow, data: { type: 'earth-lab-close' } });
    expect(dialog.removed && frame.removed).toBe(true);
    expect(h.listeners.size).toBe(0); expect(h.opener.focus).toHaveBeenCalledOnce();
  });
  it('Escape closes and permits reopening', () => {
    const h = host(); h.window.LearningPlanetEarthLab.open();
    const preventDefault = vi.fn(); h.elements[0].events.cancel({ preventDefault });
    expect(preventDefault).toHaveBeenCalledOnce();
    h.window.LearningPlanetEarthLab.open(); expect(h.elements).toHaveLength(4);
  });
  it('has only the top-bar voice control', () => {
    const html = readFileSync(new URL('../science-earth-lab.html', import.meta.url), 'utf8');
    expect(html).not.toContain('data-action="replay"');
    expect(html.match(/data-action="voice"/g)).toHaveLength(1);
  });
});
