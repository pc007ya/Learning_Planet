/** One editable candidate session per learner, across same-origin browser tabs. */
export function acquireProgressLease(manager, key, { isActive = () => true } = {}) {
  if (!manager || typeof manager.request !== 'function') return Promise.resolve({ acquired: false, reason: 'unsupported', release() {} });
  let finish, releaseHold = () => {}, settled = false;
  const ready = new Promise(resolve => { finish = resolve; });
  const lease = { acquired: false, reason: 'busy', release() { lease.acquired = false; releaseHold(); } };
  const settle = () => { if (!settled) { settled = true; finish(lease); } };
  try {
    Promise.resolve(manager.request('science-curriculum-session:' + key, { mode: 'exclusive', ifAvailable: true }, async lock => {
      if (!lock || !isActive()) { lease.reason = lock ? 'inactive' : 'busy'; settle(); return; }
      const hold = new Promise(resolve => { releaseHold = resolve; });
      lease.acquired = true; lease.reason = null; settle();
      await hold; lease.acquired = false;
    })).catch(() => { lease.acquired = false; lease.reason = 'error'; settle(); });
  } catch (_) { lease.reason = 'error'; settle(); }
  return ready;
}
