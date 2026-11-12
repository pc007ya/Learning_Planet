import test from 'node:test';
import assert from 'node:assert/strict';
import {parseHTML} from 'linkedom/worker';
import {startPerformanceDiagnostics} from '../../modules/performance-diagnostics/launch.mjs';

function env({observer = true, fallback = false} = {}) {
  const {document, window} = parseHTML('<html><head></head><body><button id="app">App control</button></body></html>');
  const location = new URL('https://learning.example.test/index.html?lpPerf=1&access_token=SECRET');
  let time = 1000, queued = [], entries = [], disconnected = false, callback, observeCalls = [];
  const nav = {name: location.href, entryType: 'navigation', type: 'navigate', responseStart: 100, requestStart: 40, domContentLoadedEventEnd: 400, loadEventEnd: 500, transferSize: 2200};
  const performance = {now: () => time, getEntriesByType: type => type === 'resource' ? entries : type === 'navigation' ? [nav] : [], clearResourceTimings: () => assert.fail('global timings must stay intact')};
  const entry = (extra = {}) => ({name: 'https://learning.example.test/modules/nature-planet/assets/grade1-terrain.glb?token=SECRET', entryType: 'resource', initiatorType: 'fetch', startTime: 100, fetchStart: 100, requestStart: 120, responseStart: 180, responseEnd: 220, duration: 120, transferSize: 1500, encodedBodySize: 1200, decodedBodySize: 2000, ...extra});
  class Observer {
    constructor(cb) { callback = cb; }
    observe(options) { observeCalls.push(options); if (fallback && options.type) throw Error('unsupported buffered observer'); }
    takeRecords() { const result = queued; queued = []; return result; }
    disconnect() { disconnected = true; }
  }
  const options = {location, document, performance, PerformanceObserver: observer ? Observer : null, MutationObserver: window.MutationObserver};
  return {document, window, options, entry, observeCalls,
    get disconnected() { return disconnected; },
    add: value => entries.push(value), clearBuffer: () => { entries = []; }, queue: value => queued.push(value),
    emit: values => callback({getEntries: () => values}), tick: value => { time = value; },
  };
}

const click = (document, label) => {
  const button = [...document.querySelectorAll('#lp-performance-diagnostics button')].find(node => node.textContent === label);
  assert.ok(button, label); assert.equal(button.disabled, false, label); button.click();
};

test('disabled gate does not access DOM, Performance API, observers, storage or browser globals', () => {
  const options = {location: new URL('https://learning.example.test/')};
  for (const key of ['document', 'performance', 'PerformanceObserver', 'MutationObserver']) {
    Object.defineProperty(options, key, {get: () => assert.fail(`${key} must not be accessed`)});
  }
  assert.equal(startPerformanceDiagnostics(options), null);
});

test('panel is collapsed, nonmodal, read-only and singleton; safe DOM never interprets URLs as HTML', () => {
  const e = env(); e.add(e.entry({name: 'https://learning.example.test/%3Cimg%20onerror=bad%3E.glb?secret=SECRET#SECRET', initiatorType: '<img onerror=bad>'}));
  let focusCalls = 0; e.window.HTMLElement.prototype.focus = () => { focusCalls++; };
  const api = startPerformanceDiagnostics(e.options);
  assert.equal(e.document.querySelectorAll('dialog').length, 0);
  assert.equal(e.document.querySelector('details').hasAttribute('open'), false); assert.equal(focusCalls, 0);
  assert.equal(e.document.querySelectorAll('img').length, 0);
  const json = e.document.querySelector('textarea'); assert.equal(json.readOnly, true);
  assert.ok(!json.value.includes('SECRET')); assert.equal(e.document.querySelectorAll('tbody tr').length, 1);
  assert.equal(startPerformanceDiagnostics(e.options), api); assert.equal(e.document.querySelectorAll('#lp-performance-diagnostics').length, 1);
  api.dispose(); assert.equal(e.document.querySelectorAll('#lp-performance-diagnostics').length, 0);
  assert.equal(e.document.querySelectorAll('[data-lp-performance-diagnostics]').length, 0); assert.equal(e.disconnected, true);
});

test('buffered observer captures pre-import, deferred GLB/question data and entries removed from global buffer', () => {
  const e = env(); e.add(e.entry()); const api = startPerformanceDiagnostics(e.options);
  assert.deepEqual(e.observeCalls, [{type: 'resource', buffered: true}]);
  const late = e.entry({name: 'https://learning.example.test/data/science-curriculum/exercises.json?private=SECRET', startTime: 400});
  e.emit([late]); e.clearBuffer();
  e.queue(e.entry({name: 'https://learning.example.test/modules/scene.json', startTime: 500}));
  const snapshot = api.refresh(); assert.equal(snapshot.resources.length, 3);
  assert.equal(snapshot.observationMode, 'buffered-observer');
  assert.ok(snapshot.resources.some(r => r.url.endsWith('exercises.json')));
  assert.equal(JSON.parse(e.document.querySelector('textarea').value).resources.length, 3); api.dispose();
});

test('manual marks/reset/collapse/close do not clear browser cache or affect app control clicks', () => {
  const e = env(); let appClicks = 0; e.document.querySelector('#app').addEventListener('click', () => appClicks++);
  const api = startPerformanceDiagnostics(e.options);
  click(e.document, '開始此階段'); e.tick(1300);
  e.emit([e.entry({startTime: 1100})]); click(e.document, '結束此階段');
  assert.equal(api.refresh().phases[0].elapsedMs, 300);
  assert.equal(api.refresh().phases[0].resources.count, 1);
  e.document.querySelector('#app').click(); assert.equal(appClicks, 1);
  click(e.document, '重設顯示'); assert.equal(api.refresh().resources.length, 0);
  assert.match(e.document.querySelector('[role=status]').textContent, /快取未改變/);
  click(e.document, '關閉檢查'); assert.equal(api.refresh(), null); api.dispose();
  assert.equal(e.document.querySelector('#app').textContent, 'App control');
  const replacement = startPerformanceDiagnostics(e.options); assert.notEqual(replacement, api); replacement.dispose();
});

test('unsupported buffered option falls back to an observer plus initial buffer', () => {
  const e = env({fallback: true}); e.add(e.entry()); const api = startPerformanceDiagnostics(e.options);
  assert.equal(api.refresh().observationMode, 'observer-with-initial-buffer');
  assert.deepEqual(e.observeCalls[1], {entryTypes: ['resource']}); assert.equal(api.refresh().resources.length, 1); api.dispose();
});

test('missing observer remains usable but explicitly reports incomplete manual-only measurement', () => {
  const e = env({observer: false}); e.add(e.entry()); const api = startPerformanceDiagnostics(e.options);
  assert.equal(api.refresh().observationMode, 'manual');
  assert.match(e.document.querySelector('#lp-performance-diagnostics').textContent, /需手動更新/); api.dispose();
});

test('panel follows app dialogs without opening or closing them and returns after dismissal', async () => {
  const e = env(); const api = startPerformanceDiagnostics(e.options);
  const dialog = e.document.createElement('dialog'); dialog.setAttribute('open', '');
  e.document.body.append(dialog); await new Promise(resolve => setTimeout(resolve, 0));
  assert.equal(api.element.parentNode, dialog);
  const child = e.document.createElement('dialog'); child.setAttribute('open', ''); e.document.body.append(child);
  await new Promise(resolve => setTimeout(resolve, 0)); assert.equal(api.element.parentNode, child);
  child.remove(); await new Promise(resolve => setTimeout(resolve, 0)); assert.equal(api.element.parentNode, dialog);
  dialog.removeAttribute('open'); await new Promise(resolve => setTimeout(resolve, 0));
  assert.equal(api.element.parentNode, e.document.body); assert.equal(dialog.isConnected, true);
  api.dispose(); assert.equal(dialog.isConnected, true);
});
