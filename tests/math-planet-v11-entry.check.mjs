import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {createUnitEntryController, unitEntryEligibility} from '../modules/math-mission-map/planet-unit-entry.mjs';
import {buildV11Region as buildRegion, v11RegionURLs as regionURLs} from '../modules/math-mission-map/v11-host/region.mjs';

function fixture(overrides = {}) {
  let time = 1000;
  const calls = {start: [], select: [], move: [], saved: [], errors: []};
  const units = ['one', 'two'].map(id => ({id, showStart: true, showProgress: true, round: 2, pct: 67, atLimit: false, start() { calls.start.push(id); }}));
  const context = {landed: true, coursesReady: true, canExplore: true, walking: false, units,
    landmarks: [{id: 'one', x: 0, z: 0}, {id: 'two', x: 8, z: 0}],
    exploration: {grade: 1, mode: 'surface', position: [.2, .3], selectedId: 'one', view: 'overview'}, ...overrides};
  const entry = createUnitEntryController({getContext: () => context, now: () => time, timeOrigin: 1700000000000,
    onSelect(id) { context.exploration = {...context.exploration, selectedId: id}; calls.select.push(id); },
    onNavigate(point, id) { calls.move.push({point, id}); context.walking = true; },
    onBeforeStart(state) { calls.saved.push(state); }, onError: error => calls.errors.push(error)});
  const event = (options = {}) => ({button: 0, detail: 1, pointerType: 'mouse', pointerId: 1, isPrimary: true,
    clientX: 100, clientY: 120, timeStamp: time, preventDefault() {}, ...options});
  function mouse(id = 'one', options = {}) {
    entry.click(id, event(options)); time += 100; entry.click(id, event({...options, detail: 2}));
    return entry.doubleClick(id, event({...options, detail: 2}));
  }
  function tap(id = 'one', options = {}) {
    const down = event({pointerType: 'touch', ...options}); entry.pointerDown(id, down); time += 50;
    return entry.pointerUp(id, event({pointerType: 'touch', ...options}));
  }
  return {context, entry, calls, event, mouse, tap, advance(ms) { time += ms; }, get time() { return time; }};
}

test('mouse single click selects nearby without walking; double click invokes original start once', () => {
  const h = fixture();
  assert.equal(h.entry.click('one', h.event()).kind, 'selected');
  assert.deepEqual(h.calls.start, []); assert.deepEqual(h.calls.move, []);
  h.advance(100); h.entry.click('one', h.event({detail: 2}));
  assert.equal(h.entry.doubleClick('one', h.event({detail: 2})).kind, 'started');
  h.entry.start('one'); h.entry.doubleClick('one', h.event()); h.mouse();
  assert.deepEqual(h.calls.start, ['one']);
});

test('touch and pen double taps work without browser dblclick and ignore compatibility clicks', () => {
  for (const pointerType of ['touch', 'pen']) {
    const h = fixture();
    assert.equal(h.tap('one', {pointerType}).kind, 'selected');
    h.entry.click('one', h.event({pointerType, detail: 1}));
    h.advance(100);
    assert.equal(h.tap('one', {pointerType, pointerId: 8, clientX: 104, clientY: 123}).kind, 'started');
    h.entry.click('one', h.event({pointerType: 'mouse', detail: 1}));
    h.entry.doubleClick('one', h.event({pointerType: 'mouse', detail: 2}));
    h.tap('one', {pointerType});
    assert.deepEqual(h.calls.start, ['one']); assert.deepEqual(h.calls.move, []);
  }
});

test('far clicks only navigate; arrival never starts or completes an earlier double tap', () => {
  const h = fixture();
  h.entry.click('two', h.event());
  assert.deepEqual(h.calls.move, [{point: [8, 0], id: 'two'}]);
  h.mouse('two'); assert.deepEqual(h.calls.start, []);
  h.context.exploration.position = [8, 0]; h.context.walking = false; h.advance(1000);
  h.tap('two'); assert.deepEqual(h.calls.start, []);
  h.advance(100); h.tap('two'); assert.deepEqual(h.calls.start, ['two']);
});

test('strict near boundary rejects 1.8, farther and non-finite positions', () => {
  for (const distance of [0, 1.79, 1.799, 1.8, 1.81, 9, NaN, Infinity]) {
    const h = fixture(); h.context.exploration.position = [distance, 0];
    assert.equal(unitEntryEligibility(h.context, 'one').allowed, Number.isFinite(distance) && distance < 1.8);
    assert.equal(h.entry.start('one').kind === 'started', Number.isFinite(distance) && distance < 1.8);
  }
});

test('landing, resource, walking, selection and callback gates are checked again at activation', () => {
  const mutations = [
    h => h.context.landed = false, h => h.context.coursesReady = false, h => h.context.canExplore = false,
    h => h.context.walking = true, h => h.context.exploration.mode = 'orbit',
    h => h.context.exploration.selectedId = 'two', h => h.context.exploration.position = [2, 0],
    h => h.context.units[0].showStart = false, h => h.context.units[0].start = undefined,
    h => h.context.units = [], h => h.context.landmarks = [],
  ];
  for (const mutate of mutations) {
    const h = fixture(); h.entry.click('one', h.event()); h.advance(100); h.entry.click('one', h.event({detail: 2}));
    mutate(h); h.entry.doubleClick('one', h.event({detail: 2}));
    assert.deepEqual(h.calls.start, []); assert.deepEqual(h.calls.saved, []);
  }
});

test('daily limit blocks both gesture and explicit start without mutating host progress', () => {
  for (const round of [0, 1, 2, 3]) for (const atLimit of [false, true]) {
    const h = fixture(); Object.assign(h.context.units[0], {round, atLimit});
    const before = JSON.stringify(h.context.units);
    h.mouse();
    assert.equal(h.calls.start.length, round < 3 && !atLimit ? 1 : 0);
    assert.equal(JSON.stringify(h.context.units), before);
  }
  const h = fixture(); h.tap(); h.context.units[0].atLimit = true; h.advance(100); h.tap();
  assert.deepEqual(h.calls.start, []);
});

test('near unselected unit selects and starts only its exact original callback', () => {
  const h = fixture(); h.context.landmarks[1].x = 1;
  h.mouse('two'); assert.deepEqual(h.calls.start, ['two']);
  assert.equal(h.calls.saved[0].selectedId, 'two');
  assert.deepEqual(h.calls.saved[0].position, [.2, .3]); assert.deepEqual(h.calls.move, []);
});

test('touch jitter is tolerated; dragging beyond slop then returning does not count as a tap', () => {
  const h = fixture(); h.tap(); h.advance(100);
  h.entry.pointerDown('one', h.event({pointerType: 'touch'}));
  h.entry.pointerMove('one', h.event({pointerType: 'touch', clientX: 113}));
  h.entry.pointerMove('one', h.event({pointerType: 'touch', clientX: 100})); h.advance(50);
  assert.equal(h.entry.pointerUp('one', h.event({pointerType: 'touch'})).kind, 'ignored');
  h.tap(); assert.deepEqual(h.calls.start, []); h.advance(100); h.tap(); assert.deepEqual(h.calls.start, ['one']);
});

test('different units, distant tap locations and mixed input cannot combine into a double activation', () => {
  for (const variation of ['unit', 'location', 'mixed']) {
    const h = fixture(); h.context.landmarks[1].x = 1; h.tap(); h.advance(100);
    if (variation === 'unit') h.tap('two');
    if (variation === 'location') h.tap('one', {clientX: 140});
    if (variation === 'mixed') { h.advance(1000); h.entry.click('one', h.event()); h.entry.doubleClick('one', h.event({detail: 2})); }
    assert.deepEqual(h.calls.start, []);
  }
});

test('cancel, lost capture, navigation invalidation and disposal prevent stale pointer completion', () => {
  for (const operation of ['pointerCancel', 'cancel', 'dispose']) {
    const h = fixture(); h.tap(); h.advance(100); h.entry.pointerDown('one', h.event({pointerType: 'touch'}));
    h.entry[operation](); h.advance(50); h.entry.pointerUp('one', h.event({pointerType: 'touch'}));
    assert.deepEqual(h.calls.start, []);
    if (operation === 'dispose') { h.advance(1000); h.mouse(); h.entry.start('one'); assert.deepEqual(h.calls.start, []); }
  }
});

test('secondary touches, mismatched pointer IDs and long presses never open a course', () => {
  for (const variation of ['secondary', 'id', 'long', 'multitouch', 'wrong-target']) {
    const h = fixture(); h.tap(); h.advance(100); h.entry.pointerDown('one', h.event({pointerType: 'touch'}));
    if (variation === 'multitouch') h.entry.pointerDown('one', h.event({pointerType: 'touch', pointerId: 2, isPrimary: false}));
    h.advance(variation === 'long' ? 500 : 50);
    h.entry.pointerUp(variation === 'wrong-target' ? 'two' : 'one', h.event({pointerType: 'touch', pointerId: variation === 'id' ? 2 : 1, isPrimary: variation !== 'secondary'}));
    assert.deepEqual(h.calls.start, []);
  }
});

test('expired, out-of-order, future, malformed and old-grade events cannot open a course', () => {
  for (const variation of ['expired', 'out-of-order', 'future', 'malformed', 'grade']) {
    const h = fixture(); h.entry.click('one', h.event()); h.advance(100); h.entry.click('one', h.event({detail: 2}));
    const timeStamp = variation === 'expired' ? h.time - 751 : variation === 'out-of-order' ? h.time - 5 : variation === 'future' ? h.time + 100 : variation === 'malformed' ? NaN : h.time;
    if (variation === 'grade') h.context.exploration.grade = 2;
    h.entry.doubleClick('one', h.event({detail: 2, timeStamp})); assert.deepEqual(h.calls.start, []);
  }
  const h = fixture(); h.tap(); h.advance(100); h.entry.pointerDown('one', h.event({pointerType: 'touch'})); h.advance(800);
  h.entry.pointerUp('one', h.event({pointerType: 'touch', timeStamp: h.time - 800})); assert.deepEqual(h.calls.start, []);
});

test('slow separate taps do not start, while epoch timestamp browsers are supported', () => {
  const h = fixture(); h.tap(); h.advance(501); h.tap(); assert.deepEqual(h.calls.start, []);
  const g = fixture(); g.entry.click('one', g.event({timeStamp: 1700000000000 + g.time})); g.advance(100);
  g.entry.click('one', g.event({detail: 2, timeStamp: 1700000000000 + g.time}));
  g.entry.doubleClick('one', g.event({detail: 2, timeStamp: 1700000000000 + g.time})); assert.deepEqual(g.calls.start, ['one']);
});

test('keyboard click remains selection/navigation; explicit start uses the same safe callback', () => {
  const h = fixture(); h.entry.click('one', h.event({detail: 0})); h.entry.click('one', h.event({detail: 0}));
  h.entry.doubleClick('one', h.event({detail: 2})); assert.deepEqual(h.calls.start, []);
  assert.equal(h.entry.start('one').kind, 'started'); assert.deepEqual(h.calls.start, ['one']);
});

test('return state is saved before callback, cloned, and preserves grade, view and exact position', () => {
  const h = fixture();
  h.context.units[0].start = () => { assert.equal(h.calls.saved.length, 1); h.calls.start.push('one'); };
  const before = structuredClone(h.context.exploration); h.mouse();
  assert.deepEqual(h.calls.saved[0], {...before, resumeSurface: true});
  assert.notEqual(h.calls.saved[0].position, h.context.exploration.position);
  assert.deepEqual(h.context.exploration, before);
  h.calls.saved[0].position[0] = 42; assert.equal(h.context.exploration.position[0], .2);
});

test('async pending course is started once, then an unchanged map can retry after host failure', async () => {
  const h = fixture(); let resolve;
  h.context.units[0].start = () => { h.calls.start.push('one'); return new Promise(r => resolve = r); };
  h.mouse(); h.advance(2000); h.mouse(); h.entry.start('one'); assert.deepEqual(h.calls.start, ['one']);
  resolve(); await Promise.resolve(); h.entry.start('one'); assert.deepEqual(h.calls.start, ['one', 'one']);
  resolve(); await Promise.resolve();
});

test('sync and async errors release pending state, and disposed handlers cannot reopen', async () => {
  for (const async of [false, true]) {
    const h = fixture(); const error = Error('load failed');
    h.context.units[0].start = () => { h.calls.start.push('one'); if (async) return Promise.reject(error); throw error; };
    h.entry.start('one'); await Promise.resolve(); assert.deepEqual(h.calls.errors, [error]);
    h.advance(1000); h.entry.start('one'); await Promise.resolve(); assert.equal(h.calls.start.length, 2);
    h.entry.dispose(); h.advance(1000); h.entry.start('one'); assert.equal(h.calls.start.length, 2);
  }
});

test('reentrant save callbacks cannot double start and explicit cancellation stops the launch', () => {
  const h = fixture(); let entry, saved = 0, started = 0;
  const context = h.context; context.units[0].start = () => started++;
  entry = createUnitEntryController({getContext: () => context, onBeforeStart() { saved++; entry.start('one'); }});
  entry.start('one'); assert.equal(saved, 1); assert.equal(started, 1);
  const cancel = createUnitEntryController({getContext: () => context, onBeforeStart() { cancel.cancel(); }});
  assert.equal(cancel.start('one').reason, 'cancelled'); assert.equal(started, 1);
});

const host = fs.readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const originalCourses = vm.runInNewContext('(' + host.match(/const MATH_UNITS = (\[[\s\S]*?\n\]);/)[1] + ')');
const originalStart = host.match(/start: (\(\) => this\.startUnit\(u\.id\)),/)[1];
const makeStart = new Function('u', 'return ' + originalStart);
for (const grade of [1, 2, 3]) {
  const graph = await import(`../modules/math-knowledge/grade${grade}.mjs`);
  const metadata = JSON.parse(fs.readFileSync(new URL(regionURLs(grade).metadataURL)));
  const region = buildRegion(grade, graph, metadata), courses = originalCourses.filter(course => course.grade === grade);
  test(`grade ${grade}: every original unit uses its host start callback and exact course return state`, () => {
    assert.equal(courses.length, [0, 27, 28, 23][grade]); assert.deepEqual([...region.courseIds], [...courses.map(course => course.id)]);
    for (const landmark of region.landmarks) for (const method of ['mouse', 'touch']) {
      const calls = [];
      const units = courses.map(course => ({...course, showStart: true, showProgress: true, round: 2, atLimit: false,
        start: makeStart.call({startUnit: id => calls.push(id)}, course)}));
      const position = [landmark.x, landmark.z];
      const h = fixture({units, landmarks: region.landmarks, exploration: {grade, mode: 'surface', selectedId: landmark.id, position, view: 'near'}});
      if (method === 'mouse') h.mouse(landmark.id);
      else { h.tap(landmark.id); h.advance(100); h.tap(landmark.id); }
      assert.deepEqual(calls, [landmark.id], `${method} ${landmark.id}`);
      assert.deepEqual(h.calls.saved[0], {grade, mode: 'surface', selectedId: landmark.id, position, view: 'near', resumeSurface: true});
      assert.ok(units.every(unit => unit.round === 2));
      // A fresh component on returning from the original course can enter again.
      const returned = fixture({units, landmarks: region.landmarks, exploration: h.calls.saved[0]});
      assert.equal(returned.entry.start(landmark.id).kind, 'started'); assert.deepEqual(calls, [landmark.id, landmark.id]);
    }
  });
}


test('press begun while far away or walking cannot become a candidate after arrival', () => {
  for (const input of ['mouse', 'touch']) for (const state of ['far', 'walking']) {
    const h = fixture();
    if (state === 'far') h.context.exploration.position = [4, 0];
    else h.context.walking = true;
    h.entry.pointerDown('one', h.event({pointerType: input}));
    h.context.exploration.position = [0, 0]; h.context.walking = false; h.advance(50);
    h.entry.pointerUp('one', h.event({pointerType: input}));
    if (input === 'mouse') h.entry.click('one', h.event());
    h.advance(100);
    if (input === 'touch') h.tap();
    else { h.entry.pointerDown('one', h.event()); h.entry.click('one', h.event({detail: 2})); h.entry.doubleClick('one', h.event({detail: 2})); }
    assert.deepEqual(h.calls.start, [], input + ' ' + state);
  }
});

test('normal implicit capture release preserves a tap, interrupted capture cancels it', () => {
  const h = fixture(); h.tap(); h.entry.lostPointerCapture('one', h.event({pointerType: 'touch'})); h.advance(100);
  assert.equal(h.tap().kind, 'started'); assert.deepEqual(h.calls.start, ['one']);
  const g = fixture(); g.tap(); g.advance(100); g.entry.pointerDown('one', g.event({pointerType: 'touch'}));
  g.entry.lostPointerCapture('one', g.event({pointerType: 'touch'})); g.advance(50);
  g.entry.pointerUp('one', g.event({pointerType: 'touch'})); assert.deepEqual(g.calls.start, []);
});
