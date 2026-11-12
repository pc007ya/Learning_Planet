// Pointer input only. The host remains the owner of course callbacks and progress.
export const UNIT_ENTRY_DISTANCE = 1.8;
const POINT = value => Array.isArray(value) && value.length === 2 && value.every(Number.isFinite);
const result = (kind, reason) => ({kind, ...(reason ? {reason} : {})});

export function unitEntryEligibility(context, unitId, {requireSelected = true} = {}) {
  const unit = context?.units?.find(item => item.id === unitId);
  const landmark = context?.landmarks?.find(item => item.id === unitId);
  const exploration = context?.exploration;
  let reason = null;
  if (!unit || !landmark) reason = 'unknown-unit';
  else if (context.landed !== true || exploration?.mode !== 'surface') reason = 'not-landed';
  else if (context.coursesReady !== true || context.canExplore !== true) reason = 'not-ready';
  else if (context.walking !== false) reason = 'walking';
  else if (!POINT(exploration.position) || ![landmark.x, landmark.z].every(Number.isFinite) ||
    Math.hypot(exploration.position[0] - landmark.x, exploration.position[1] - landmark.z) >= UNIT_ENTRY_DISTANCE - 1e-9) reason = 'too-far';
  else if (requireSelected && exploration.selectedId !== unitId) reason = 'not-selected';
  else if (unit.showStart !== true || typeof unit.start !== 'function') reason = 'no-start';
  else if (unit.atLimit === true || (unit.showProgress === true && Number(unit.round) >= 3)) reason = 'daily-limit';
  return {allowed: !reason, reason, unit, landmark};
}

/**
 * getContext must read CURRENT state, including synchronous movement/phase refs.
 * onSelect updates selectedId synchronously; onNavigate retains the existing route.
 * onBeforeStart saves the provided return state BEFORE the original unit.start().
 * click selects/navigates only. doubleClick handles the browser's mouse dblclick;
 * pointerDown/Move/Up/Cancel handle touch/pen without depending on native dblclick.
 * cancel invalidates pending gestures on navigation, hide, retry or phase changes.
 * dispose invalidates old handlers on unmount. No listeners or timers are installed.
 */
export function createUnitEntryController({
  getContext, onSelect = () => {}, onNavigate = () => {}, onBeforeStart = () => {}, onError = () => {},
  now = () => globalThis.performance?.now?.() ?? Date.now(),
  timeOrigin = globalThis.performance?.timeOrigin ?? 0,
  doublePressMs = 500, maxTapMs = 450, tapSlop = 12, doubleTapSlop = 28,
  maxEventAgeMs = 750, cooldownMs = 700,
} = {}) {
  if (typeof getContext !== 'function') throw new TypeError('getContext is required');
  let disposed = false, active = null, tap = null, mouse = null, mousePress = null, generation = 0;
  let touchUntil = -Infinity, blockedUntil = -Infinity, pending = false;
  const clear = () => { active = null; tap = null; mouse = null; mousePress = null; generation++; };
  const blocked = () => disposed || pending || now() < blockedUntil;
  const kindOf = event => event?.pointerType || event?.nativeEvent?.pointerType || '';
  const isTouch = event => ['touch', 'pen'].includes(kindOf(event));
  const stamp = event => {
    let value = event?.timeStamp ?? event?.nativeEvent?.timeStamp;
    if (value == null) return now();
    if (!Number.isFinite(value)) return NaN;
    if (value > 1e12) value -= timeOrigin;
    return value;
  };
  function fresh(event) {
    const age = now() - stamp(event);
    return Number.isFinite(age) && age >= -50 && age <= maxEventAgeMs;
  }
  function canChoose(context, id) {
    return !blocked() && context?.landed === true && context.coursesReady === true &&
      context.canExplore === true && context.exploration?.mode === 'surface' &&
      context.units?.some(item => item.id === id) && context.landmarks?.some(item => item.id === id);
  }
  function choose(id) {
    let context = getContext();
    if (!canChoose(context, id)) { clear(); return result('blocked', 'not-ready'); }
    const landmark = context.landmarks.find(item => item.id === id);
    if (!POINT(context.exploration.position) || ![landmark.x, landmark.z].every(Number.isFinite)) {
      clear(); return result('blocked', 'invalid-position');
    }
    onSelect(id);
    context = getContext();
    if (!canChoose(context, id) || context.exploration.selectedId !== id) { clear(); return result('blocked', 'not-selected'); }
    const nearby = Math.hypot(context.exploration.position[0] - landmark.x, context.exploration.position[1] - landmark.z) < UNIT_ENTRY_DISTANCE - 1e-9;
    if (nearby && context.walking === false) return result('selected');
    clear();
    onNavigate([landmark.x, landmark.z], id);
    return result('navigating');
  }
  function start(id) {
    if (blocked()) return result('blocked', disposed ? 'disposed' : 'launch-pending');
    const context = getContext(), eligibility = unitEntryEligibility(context, id);
    clear();
    if (!eligibility.allowed) return result('blocked', eligibility.reason);
    // Latch before callbacks: saving return state may itself synchronously rerender.
    blockedUntil = now() + cooldownMs;
    pending = true;
    const launchGeneration = generation;
    const finish = () => { pending = false; };
    const fail = error => { finish(); if (!disposed) onError(error); };
    try {
      onBeforeStart({...context.exploration, position: [...context.exploration.position], selectedId: id, mode: 'surface', resumeSurface: true});
      if (disposed || generation !== launchGeneration) { finish(); return result('blocked', 'cancelled'); }
      const outcome = eligibility.unit.start();
      if (outcome && typeof outcome.then === 'function') Promise.resolve(outcome).then(finish, fail);
      else finish();
      return result('started');
    } catch (error) { fail(error); return result('blocked', 'start-failed'); }
  }
  function click(id, event) {
    if (!fresh(event)) { clear(); return result('ignored', 'stale-event'); }
    const keyboard = event?.detail === 0;
    const touchCompatibility = !keyboard && (isTouch(event) || event?.nativeEvent?.sourceCapabilities?.firesTouchEvents || now() < touchUntil);
    if (touchCompatibility) return result('ignored', 'touch-compatibility');
    if (event?.button != null && event.button !== 0) { clear(); return result('ignored', 'non-primary'); }
    const previous = mouse, press = mousePress;
    mousePress = null;
    const chosen = choose(id);
    if (chosen.kind !== 'selected' || keyboard || !event || (press && (!press.eligible || press.id !== id || press.generation !== generation))) { mouse = null; tap = null; return chosen; }
    tap = null;
    const context = getContext();
    if (!unitEntryEligibility(context, id).allowed) { mouse = null; return chosen; }
    const time = now(), eventStamp = stamp(event);
    const repeat = previous?.id === id && previous.grade === context.exploration.grade &&
      time - previous.time <= doublePressMs && eventStamp >= previous.stamp;
    mouse = {id, grade: context.exploration.grade, time, stamp: eventStamp, count: repeat ? previous.count + 1 : 1};
    return chosen;
  }
  function doubleClick(id, event) {
    if (isTouch(event) || now() < touchUntil) return result('ignored', 'touch-compatibility');
    const pair = mouse;
    mouse = null;
    if (!fresh(event) || !pair || pair.id !== id || pair.count < 2 || now() - pair.time > doublePressMs ||
      pair.grade !== getContext()?.exploration?.grade || stamp(event) < pair.stamp || (event?.button != null && event.button !== 0)) {
      clear(); return result('ignored', 'no-matching-double-click');
    }
    event?.preventDefault?.();
    return start(id);
  }
  function pointerDown(id, event) {
    if (!isTouch(event)) {
      tap = null;
      mousePress = {id, generation, eligible: !blocked() && fresh(event) && event?.isPrimary !== false &&
        (event?.button == null || event.button === 0) && unitEntryEligibility(getContext(), id, {requireSelected: false}).allowed};
      return result('ignored', 'mouse-pointer');
    }
    mousePress = null; mouse = null;
    if (!fresh(event) || event.isPrimary === false || (event.button != null && event.button !== 0) ||
      ![event.clientX, event.clientY, event.pointerId].every(Number.isFinite) || !canChoose(getContext(), id) || active) {
      clear(); touchUntil = now() + maxEventAgeMs; return result('ignored', 'invalid-pointer');
    }
    active = {id, pointerId: event.pointerId, type: kindOf(event), x: event.clientX, y: event.clientY,
      time: now(), stamp: stamp(event), generation, grade: getContext().exploration.grade, moved: false,
      eligible: unitEntryEligibility(getContext(), id, {requireSelected: false}).allowed};
    return result('tracking');
  }
  function pointerMove(id, event) {
    if (!active || active.pointerId !== event.pointerId) return result('ignored');
    if (id !== active.id || !fresh(event) || ![event.clientX, event.clientY].every(Number.isFinite) ||
      Math.hypot(event.clientX - active.x, event.clientY - active.y) > tapSlop) {
      active.moved = true; tap = null;
    }
    return result('tracking');
  }
  function pointerUp(id, event) {
    if (!isTouch(event)) return result('ignored', 'mouse-pointer');
    const press = active;
    active = null;
    touchUntil = now() + maxEventAgeMs;
    if (!press || !fresh(event) || press.id !== id || press.pointerId !== event.pointerId ||
      press.type !== kindOf(event) || event.isPrimary === false || press.moved || press.generation !== generation ||
      press.grade !== getContext()?.exploration?.grade || stamp(event) < press.stamp || now() - press.time > maxTapMs ||
      ![event.clientX, event.clientY].every(Number.isFinite) || Math.hypot(event.clientX - press.x, event.clientY - press.y) > tapSlop) {
      clear(); return result('ignored', 'invalid-tap');
    }
    const previous = tap, chosen = choose(id), context = getContext();
    if (chosen.kind !== 'selected' || !press.eligible || !unitEntryEligibility(context, id).allowed) { tap = null; return chosen; }
    const time = now(), eventStamp = stamp(event);
    if (previous?.id === id && previous.grade === context.exploration.grade && time - previous.time <= doublePressMs &&
      eventStamp >= previous.stamp && Math.hypot(event.clientX - previous.x, event.clientY - previous.y) <= doubleTapSlop) {
      event.preventDefault?.();
      return start(id);
    }
    tap = {id, grade: context.exploration.grade, time, stamp: eventStamp, x: event.clientX, y: event.clientY};
    return chosen;
  }
  function cancel() { clear(); }
  function pointerCancel() { touchUntil = now() + maxEventAgeMs; clear(); }
  // Implicit touch capture is normally released AFTER pointerup. Do not erase
  // its completed first tap; only an interrupted, still-active press is cancelled.
  function lostPointerCapture(id, event) {
    if (active && active.id === id && active.pointerId === event?.pointerId) pointerCancel();
  }
  function dispose() { disposed = true; clear(); }
  return {click, doubleClick, pointerDown, pointerMove, pointerUp, pointerCancel, lostPointerCapture, start, cancel, dispose};
}
