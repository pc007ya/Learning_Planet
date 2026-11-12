import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {
  isPerformanceDiagnosticsEnabled, safeResourceURL, resourceSnapshot, navigationSnapshot,
  classifyResource, createTimingCollector, formatMilliseconds, formatBytes,
  MAX_RESOURCE_ENTRIES, MAX_STAGES,
} from '../../modules/performance-diagnostics/timing.mjs';

const base = 'https://learning.example.test/index.html?lpPerf=1&token=PRIVATE#secret';
const resource = (changes = {}) => ({
  entryType: 'resource', name: 'https://learning.example.test/modules/nature-planet/assets/grade1-terrain.glb?v=2',
  startTime: 100, fetchStart: 100, domainLookupStart: 105, domainLookupEnd: 107,
  connectStart: 107, secureConnectionStart: 110, connectEnd: 115, requestStart: 116,
  responseStart: 140, responseEnd: 160, duration: 60, transferSize: 1300,
  encodedBodySize: 1000, decodedBodySize: 2000, initiatorType: 'fetch', ...changes,
});

test('query gate is exact and ignores absent, malformed or duplicate opt-ins', () => {
  for (const search of ['', '?x=lpPerf=1', '?lpPerf=0', '?lpPerf=true', '?lpPerf=1&lpPerf=0', '?lpPerf=01']) {
    assert.equal(isPerformanceDiagnosticsEnabled({search}), false, search);
  }
  assert.equal(isPerformanceDiagnosticsEnabled({search: '?lpPerf=1&v=4'}), true);
  assert.equal(isPerformanceDiagnosticsEnabled(null), false);
});

test('all URL credentials, query and fragment values are excluded before retention', () => {
  assert.equal(safeResourceURL('https://name:password@cdn.test/scene.glb?access_token=SECRET#private', base), 'https://cdn.test/scene.glb');
  assert.equal(safeResourceURL('./questions.json?token=SECRET#part', base), 'https://learning.example.test/questions.json');
  assert.equal(safeResourceURL('data:text/plain,SECRET', base), '[non-HTTP resource]');
  assert.equal(safeResourceURL('blob:https://host.test/SECRET', base), '[non-HTTP resource]');
  assert.equal(safeResourceURL('https://[invalid', base), '[unavailable URL]');
  const r = resourceSnapshot(resource({name: 'https://u:p@cdn.test/file?token=SECRET#secret'}), base);
  assert.ok(!JSON.stringify(r).includes('SECRET'));
  for (const name of ['https://securetoken.googleapis.com/v1/token?key=SECRET', 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword', '/auth/callback?code=SECRET', '/session/user']) {
    assert.equal(resourceSnapshot(resource({name}), base), null, name);
  }
});

test('resource timings retain actual fetch, first-byte, response, size and initiator measurements', () => {
  const r = resourceSnapshot(resource(), base);
  assert.equal(r.durationMs, 60); assert.equal(r.transferBytes, 1300); assert.equal(r.initiatorType, 'fetch');
  assert.equal(r.stages.fetchStartMs, 100); assert.equal(r.stages.requestStartMs, 116);
  assert.equal(r.stages.responseStartMs, 140); assert.equal(r.stages.dnsMs, 2);
  assert.equal(r.stages.connectMs, 8); assert.equal(r.stages.tlsMs, 5);
  assert.equal(r.stages.requestToFirstByteMs, 24); assert.equal(r.stages.responseDownloadMs, 20);
  assert.equal(r.source, 'network-transfer-observed');
});

test('zero transfer is ambiguous; explicit cache and SW information remain separate', () => {
  const zero = classifyResource(resource({transferSize: 0}), base);
  assert.equal(zero.source, 'zero-transfer-ambiguous');
  assert.match(zero.sourceLabel, /不能單獨判定/);
  assert.equal(classifyResource(resource({transferSize: 0, deliveryType: 'cache'}), base).source, 'browser-reported-cache');
  const sw = classifyResource(resource({workerStart: 80, transferSize: 0}), base);
  assert.equal(sw.serviceWorkerObserved, true); assert.equal(sw.source, 'zero-transfer-ambiguous');
});

test('cross-origin restricted details are null rather than fabricated zero-duration stages', () => {
  const r = resourceSnapshot(resource({name: 'https://other.test/scene.glb?token=secret', requestStart: 0, responseStart: 0, transferSize: 0, encodedBodySize: 0, decodedBodySize: 0}), base);
  assert.equal(r.durationMs, 60); assert.equal(r.transferBytes, 0);
  assert.equal(r.timingAccess, 'cross-origin-restricted-or-unavailable');
  assert.match(r.timingAccessLabel, /Timing-Allow-Origin/);
  assert.equal(r.stages.requestToFirstByteMs, null); assert.equal(r.stages.responseDownloadMs, null);
  assert.equal(r.stages.dnsMs, null); assert.equal(r.encodedBodyBytes, null);
  assert.equal(resourceSnapshot(resource({name: 'https://other.test/file'}), base).timingAccess, 'exposed');
});

test('navigation distinguishes full TTFB from request TTFB and pending load', () => {
  const nav = navigationSnapshot({...resource(), entryType: 'navigation', name: base, type: 'reload', domInteractive: 180, domContentLoadedEventEnd: 190, loadEventEnd: 0}, base);
  assert.equal(nav.ttfbFromNavigationStartMs, 140); assert.equal(nav.requestToFirstByteMs, 24);
  assert.equal(nav.domContentLoadedMs, 190); assert.equal(nav.loadEventEndMs, null);
  assert.equal(nav.type, 'reload'); assert.ok(!nav.url.includes('?'));
  assert.equal(navigationSnapshot(null, base), null);
});

test('formatting does not turn unavailable values into zero', () => {
  assert.equal(formatMilliseconds(null), '未提供'); assert.equal(formatMilliseconds(NaN), '未提供');
  assert.equal(formatMilliseconds(0), '0.00 ms'); assert.equal(formatMilliseconds(1.2345), '1.23 ms');
  assert.equal(formatBytes(null), '未提供'); assert.equal(formatBytes(0), '0 B');
  assert.equal(formatBytes(2048), '2.0 KiB'); assert.equal(formatBytes(1048576), '1.00 MiB');
});

test('collector deduplicates observer/buffer entries and remains bounded across repeated refresh', () => {
  const collector = createTimingCollector({base, performance: {now: () => 1000, getEntriesByType: () => []}, limit: 3});
  const entries = Array.from({length: 15}, (_, i) => resource({startTime: 20 + Math.floor(i / 3), name: `https://learning.example.test/r${i}.json?token=SECRET`}));
  collector.addEntries(entries); collector.addEntries(entries); collector.addEntries(entries);
  const s = collector.snapshot();
  assert.equal(s.resources.length, 3); assert.equal(s.droppedResourceCount, 12);
  assert.equal(s.summary.observedTransferBytes, 3900); assert.equal(s.summary.summedResourceDurationsMs, 180);
  assert.equal(s.summary.longestResourceMs, 60); assert.ok(!JSON.stringify(s).includes('SECRET'));
  assert.ok(!JSON.stringify(s).includes('PRIVATE'));
  assert.equal(createTimingCollector({base, performance: {now: () => 0}, limit: 999999}).snapshot().retainedResourceLimit, MAX_RESOURCE_ENTRIES);
});

test('sub-millisecond requests remain separate; snapshots cannot mutate retained rows', () => {
  const collector = createTimingCollector({base, performance: {now: () => 1000}});
  collector.addEntries([resource({startTime: 100.001}), resource({startTime: 100.002})]);
  const s = collector.snapshot(); assert.equal(s.resources.length, 2);
  s.resources[0].stages.dnsMs = 10000;
  assert.equal(collector.snapshot().resources[0].stages.dnsMs, 2);
});

test('phase marks use monotonic elapsed time, track actual new resources and reset only local display', () => {
  let time = 100;
  const performance = {now: () => time, clearResourceTimings: () => assert.fail('must not clear global timing'), clearMarks: () => assert.fail('must not mutate global marks')};
  const collector = createTimingCollector({base, performance});
  assert.equal(collector.startStage(), true); assert.equal(collector.startStage(), false);
  collector.addEntries([resource({startTime: 90}), resource({startTime: 120})]);
  time = 300; assert.equal(collector.endStage(), true); assert.equal(collector.endStage(), false);
  const s = collector.snapshot(); assert.equal(s.phases[0].elapsedMs, 200); assert.equal(s.phases[0].resources.count, 1);
  collector.resetDisplay(); collector.addEntries([resource({startTime: 120}), resource({startTime: 310})]);
  assert.equal(collector.snapshot().resources.length, 1); assert.equal(collector.snapshot().phases.length, 0);
  assert.equal(collector.snapshot().displayGeneration, 1);
  for (let i = 0; i < 50; i++) { collector.startStage(); time++; collector.endStage(); }
  assert.equal(collector.snapshot().phases.length, MAX_STAGES);
});

test('modules have no network, storage, cache, global clear or HTML injection APIs', async () => {
  for (const file of ['timing.mjs', 'launch.mjs']) {
    const source = await readFile(new URL(`../../modules/performance-diagnostics/${file}`, import.meta.url), 'utf8');
    const uncommented = source.replace(/\/\*[\s\S]*?\*\//g, '').replace(/^\s*\/\/.*$/gm, '');
    assert.doesNotMatch(uncommented, /\b(?:fetch|sendBeacon|XMLHttpRequest|WebSocket|setInterval|clearResourceTimings|clearMarks|clearMeasures)\s*\(/);
    assert.doesNotMatch(uncommented, /\b(?:localStorage|sessionStorage|indexedDB|caches|innerHTML|outerHTML|insertAdjacentHTML)\b/);
    assert.doesNotMatch(uncommented, /document\.cookie|location\.(?:assign|replace)|history\./);
  }
});
