import { waitForOverlayHistory } from './overlay-history.mjs';

// A practice panel and the nature map are alternative root overlays. Only an
// explicitly owned map child may coexist with its root. Close handles are
// published before loading, so handoff never waits for network/GPU readiness.
const windows = new WeakMap();
export async function claimRootOverlay({ window: targetWindow = window, isActive = () => true } = {}) {
  let state = windows.get(targetWindow);
  if (!state) { state = { request: 0, current: null }; windows.set(targetWindow, state); }
  const request = ++state.request;
  if (state.current) {
    try { await state.current.close(); } catch (_) { /* cleanup precedes callbacks */ }
  }
  await waitForOverlayHistory(targetWindow);
  if (request !== state.request || !isActive()) return null;
  let publish, closing = false, released = false, completion = null;
  const handle = new Promise(resolve => { publish = resolve; });
  const owner = {
    isActive: () => !closing && !released && state.current === owner && isActive(),
    publishClose(close) { publish(close); },
    close() {
      if (completion) return completion;
      closing = true;
      completion = handle.then(close => close?.()).finally(() => owner.release());
      return completion;
    },
    release() {
      released = true; publish(null);
      if (state.current === owner) state.current = null;
    },
  };
  state.current = owner;
  return owner;
}
