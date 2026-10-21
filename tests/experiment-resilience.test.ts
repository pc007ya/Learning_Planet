import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { InteractiveLab } from '../src/experiments/lab';
import { BuoyancyPlay, FLOAT_ART } from '../src/experiments/buoyancy-play';
import { FLOAT_OBJECTS } from '../src/experiments/models';

vi.mock('three', async importOriginal => ({
  ...await importOriginal<typeof import('three')>(),
  WebGLRenderer: class { constructor() { throw new Error('WebGL unavailable'); } },
}));
vi.mock('../src/experiments/mechanism', () => ({
  Mechanism: class {
    setClock = vi.fn();
    setClockDemo = vi.fn();
    setClockPeek = vi.fn();
    frame = vi.fn(() => false);
    destroy = vi.fn();
  },
}));
vi.mock('../src/experiments/experience', () => ({
  LabExperience: class { destroy = vi.fn(); },
}));

// Exercise the real constructors and registered event handlers without a browser,
// WebGL or speech. This deliberately small DOM fixture is not visual/device QA.
type EventFields = { target?: StubElement; pointerId?: number; button?: number; clientX?: number; clientY?: number };
class EventHub {
  private listeners = new Map<string, Set<EventListener>>();
  addEventListener(type: string, listener: EventListener, options?: { signal?: AbortSignal }) {
    if (options?.signal?.aborted) return;
    const listeners = this.listeners.get(type) || new Set<EventListener>();
    this.listeners.set(type, listeners); listeners.add(listener);
    options?.signal?.addEventListener('abort', () => listeners.delete(listener), { once: true });
  }
  emit(type: string, fields: EventFields = {}) {
    const event = { type, target: this, preventDefault() {}, ...fields } as unknown as Event;
    for (const listener of [...this.listeners.get(type) || []]) listener(event);
  }
}

class StubElement extends EventHub {
  dataset: Record<string, string> = {};
  style: Record<string, string> = {};
  attributes = new Map<string, string>();
  classes = new Set<string>();
  classList = {
    add: (...names: string[]) => names.forEach(name => this.classes.add(name)),
    remove: (...names: string[]) => names.forEach(name => this.classes.delete(name)),
    contains: (name: string) => this.classes.has(name),
    toggle: (name: string, force: boolean) => force ? this.classes.add(name) : this.classes.delete(name),
  };
  children: StubElement[] = [];
  nodes = new Map<string, StubElement>();
  captures = new Set<number>();
  textContent = '';
  className = '';
  value = '';
  src = '';
  alt = '';
  hidden = false;
  disabled = false;
  draggable = false;
  removed = false;
  offsetHeight = 1;
  onHTML?: (value: string, replace: boolean) => void;
  onRelease?: (pointer: number) => void;
  private markup = '';
  constructor(readonly tagName = 'div') { super(); }
  set innerHTML(value: string) { this.markup = value; this.children = []; this.onHTML?.(value, true); }
  get innerHTML() { return this.markup; }
  insertAdjacentHTML(_position: string, value: string) { this.markup += value; this.onHTML?.(value, false); }
  append(...children: StubElement[]) { this.children.push(...children); }
  prepend(...children: StubElement[]) { this.children.unshift(...children); }
  remove() { this.removed = true; }
  get lastElementChild() { return this.children.at(-1); }
  setAttribute(name: string, value: string) { this.attributes.set(name, value); }
  getAttribute(name: string) { return this.attributes.get(name) ?? null; }
  hasAttribute(name: string) { return this.attributes.has(name); }
  querySelector(selector: string): StubElement | null { return this.nodes.get(selector) ?? null; }
  querySelectorAll(_selector: string): StubElement[] { return []; }
  closest(selector: string) {
    return selector === 'button' && this.tagName === 'button'
      || selector === '[data-object]' && this.dataset.object !== undefined
      || selector === '.bp-pool' && this.classes.has('bp-pool') ? this : null;
  }
  getBoundingClientRect() { return { left: 0, top: 0, width: 500, height: 500 }; }
  setPointerCapture = vi.fn((pointer: number) => { this.captures.add(pointer); });
  hasPointerCapture(pointer: number) { return this.captures.has(pointer); }
  releasePointerCapture = vi.fn((pointer: number) => {
    this.captures.delete(pointer);
    // Deliberately synchronous to detect unsafe release-before-clear recursion.
    this.onRelease?.(pointer);
  });
}

function button(dataset: Record<string, string>) {
  const element = new StubElement('button'); element.dataset = dataset; return element;
}
const labs: Array<{ destroy(): void }> = [];
beforeEach(() => vi.useFakeTimers());
afterEach(() => {
  for (const lab of labs.splice(0)) lab.destroy();
  vi.useRealTimers(); vi.unstubAllGlobals(); vi.clearAllMocks();
});

function fixture() {
  const host = new StubElement();
  const stage = new StubElement(); stage.classList.add('bp-pool');
  const objects = FLOAT_OBJECTS.map((_, index) => button({ object: String(index) }));
  const predictions = [button({ predict: 'float' }), button({ predict: 'sink' })];
  const drop = button({}); drop.setAttribute('data-drop', '');
  const reset = button({ action: 'reset' }), run = button({ action: 'run' }), step = button({ action: 'step' });
  const nodes = host.nodes;
  nodes.set('.il-stage', stage); nodes.set('.bp-pool', stage);
  nodes.set('[data-action="reset"]', reset); nodes.set('[data-action="run"]', run);
  const selectorList = ['.il-live', '.il-log', '.il-scene-panel', '.il-controls', '.il-assessment > p',
    '.il-assessment h3', '.il-answers', 'aside > details > p', '[data-input="minutes"]', '[data-readout]',
    '[data-count]', '.il-feedback', '.mech-quick-info', '.bp-sample', '[data-prompt]', '.bp-result', '[data-tested]'];
  for (const selector of selectorList) nodes.set(selector, new StubElement());
  objects.forEach((element, index) => {
    nodes.set(`[data-object="${index}"]`, element);
    element.onRelease = pointerId => host.emit('lostpointercapture', { pointerId, target: element });
  });
  host.querySelectorAll = selector => selector === '[data-object]' ? objects
    : selector === '[data-predict]' ? predictions
      : selector === '[data-object],[data-predict],[data-drop]' ? [...objects, ...predictions, drop] : [];
  // Preserve DOM removal semantics for the exact subtree the WebGL catch once
  // erased. Returning permanent fake readouts would hide that regression.
  stage.onHTML = (html, replace) => {
    if (replace) {
      stage.nodes.clear(); nodes.delete('[data-demo-speed]'); nodes.delete('[data-demo-seconds]');
    }
    if (html.includes('class="clock-transmission"')) {
      stage.nodes.set('.clock-transmission', new StubElement());
      nodes.set('[data-demo-speed]', new StubElement()); nodes.set('[data-demo-seconds]', new StubElement());
    }
  };
  const doc = Object.assign(new EventHub(), { hidden: false, createElement: (tag: string) => new StubElement(tag) });
  const win = new EventHub();
  let nextFrame = 0;
  const raf = vi.fn((_callback: FrameRequestCallback) => ++nextFrame);
  vi.stubGlobal('document', doc); vi.stubGlobal('window', win);
  vi.stubGlobal('requestAnimationFrame', raf); vi.stubGlobal('cancelAnimationFrame', vi.fn());
  const click = (target: StubElement) => host.emit('click', { target });
  const pointer = (type: string, pointerId: number, target = objects[0], x = 250, y = 250) =>
    host.emit(type, { pointerId, target, button: 0, clientX: x, clientY: y });
  return { host, stage, objects, predictions, drop, reset, run, step, nodes, doc, win, raf, click, pointer };
}

function buoyancyFixture() {
  const f = fixture();
  const lab = new BuoyancyPlay(f.host as unknown as HTMLElement); labs.push(lab);
  const ghost = f.host.children.find(element => element.className === 'bp-ghost')!;
  const startDrag = () => {
    f.click(f.predictions[1]); f.pointer('pointerdown', 11, f.objects[0], 20, 20);
    f.pointer('pointermove', 11);
    expect(ghost.hidden).toBe(false); expect(f.stage.classList.contains('is-drop-target')).toBe(true);
  };
  return { ...f, lab, ghost, startDrag };
}

describe('experiment resilience with real constructors', () => {
  it('keeps clock controls working when WebGL initialization fails', () => {
    const f = fixture();
    const lab = new InteractiveLab(f.host as unknown as HTMLElement, 'clock'); labs.push(lab);
    expect(f.stage.innerHTML).toContain('此裝置無法顯示 3D');
    expect(f.stage.querySelector('.clock-transmission')).not.toBeNull();
    expect(f.nodes.get('[data-demo-speed]')?.textContent).toBe('60×');
    f.click(f.step);
    expect(f.nodes.get('[data-readout]')?.textContent).toBe('1:00');
    expect(f.nodes.get('.il-log')?.children).toHaveLength(1);
    f.click(f.run);
    expect(f.run.getAttribute('aria-pressed')).toBe('true');
    f.raf.mock.calls.at(-1)![0](1000); f.raf.mock.calls.at(-1)![0](2000);
    expect(f.nodes.get('[data-readout]')?.textContent).toBe('12:01');
    expect(f.nodes.get('[data-demo-seconds]')?.textContent).toBe('1分00秒');
    f.click(f.run); expect(f.run.getAttribute('aria-pressed')).toBe('false');
  });

  it('ignores secondary pointer events and clicks without changing the held object or prediction', () => {
    const f = buoyancyFixture(); f.startDrag();
    f.pointer('pointerdown', 22, f.objects[1]); f.pointer('pointermove', 22, f.objects[1], 400, 400);
    f.pointer('pointerup', 22, f.objects[1]); f.pointer('pointercancel', 22, f.objects[1]);
    f.pointer('lostpointercapture', 22, f.objects[1]);
    for (const target of [f.objects[1], f.predictions[0], f.drop, f.stage]) f.click(target);
    expect(f.nodes.get('.bp-sample')?.src).toBe(`${FLOAT_ART}${FLOAT_OBJECTS[0].id}.png`);
    expect(f.predictions[1].getAttribute('aria-pressed')).toBe('true');
    expect(f.objects[0].hasPointerCapture(11)).toBe(true);
    expect(f.objects[1].setPointerCapture).not.toHaveBeenCalled();
    expect(f.ghost.hidden).toBe(false); expect(f.ghost.style.left).toBe('250px');
    expect(f.drop.disabled).toBe(false);
    f.pointer('pointerup', 11); f.pointer('pointerup', 11);
    expect(f.objects[0].releasePointerCapture).toHaveBeenCalledOnce();
    expect(f.ghost.hidden).toBe(true);
    vi.advanceTimersByTime(1400);
    expect(f.nodes.get('.il-log')?.children).toHaveLength(1);
    expect(f.nodes.get('.il-log')?.children[0].textContent).toContain(`${FLOAT_OBJECTS[0].name}：猜沉`);
  });

  it('lets reset cancel capture and clear the ghost without accepting a later release', () => {
    const f = buoyancyFixture(); f.startDrag(); f.click(f.reset);
    expect(f.objects[0].hasPointerCapture(11)).toBe(false);
    expect(f.objects[0].releasePointerCapture).toHaveBeenCalledOnce();
    expect(f.ghost.hidden).toBe(true); expect(f.stage.classList.contains('is-drop-target')).toBe(false);
    expect(f.predictions.every(element => element.getAttribute('aria-pressed') === 'false')).toBe(true);
    f.pointer('pointerup', 11); vi.advanceTimersByTime(2000);
    expect(f.nodes.get('.il-log')?.children).toHaveLength(0);
    f.click(f.objects[1]);
    expect(f.nodes.get('.bp-sample')?.src).toBe(`${FLOAT_ART}${FLOAT_OBJECTS[1].id}.png`);
  });

  it.each(['pointercancel', 'lostpointercapture', 'blur', 'visibilitychange'] as const)(
    'cleans up the owning drag through the registered %s listener', reason => {
      const f = buoyancyFixture(); f.startDrag();
      if (reason === 'blur') f.win.emit('blur');
      else if (reason === 'visibilitychange') { f.doc.hidden = true; f.doc.emit('visibilitychange'); }
      else {
        if (reason === 'lostpointercapture') f.objects[0].captures.delete(11);
        f.pointer(reason, 11);
      }
      expect(f.objects[0].hasPointerCapture(11)).toBe(false);
      expect(f.ghost.hidden).toBe(true); expect(f.stage.classList.contains('is-drop-target')).toBe(false);
      f.pointer('pointerup', 11); vi.advanceTimersByTime(2000);
      expect(f.nodes.get('.il-log')?.children).toHaveLength(0);
    },
  );

  it('releases capture, removes the ghost and unregisters input when destroyed', () => {
    const f = buoyancyFixture(); f.startDrag(); f.lab.destroy(); labs.splice(labs.indexOf(f.lab), 1);
    expect(f.objects[0].hasPointerCapture(11)).toBe(false);
    expect(f.ghost.hidden).toBe(true); expect(f.ghost.removed).toBe(true);
    f.pointer('pointerdown', 22, f.objects[1]); f.pointer('pointerup', 11);
    expect(f.objects[1].setPointerCapture).not.toHaveBeenCalled();
    vi.advanceTimersByTime(2000); expect(f.nodes.get('.il-log')?.children).toHaveLength(0);
  });
});
