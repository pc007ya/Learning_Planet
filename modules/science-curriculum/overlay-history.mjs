/** Serialize owned overlay traversals. Never rewrite an unowned host entry. */
const pending = new WeakMap();

export async function waitForOverlayHistory(targetWindow = window) {
  // A parent close may be queued behind a child close while we are awaiting it.
  while (pending.has(targetWindow)) await pending.get(targetWindow);
}

export function leaveOverlayHistory({ window: targetWindow = window, history: targetHistory = history, marker, token, restoreState } = {}) {
  const leave = () => {
    if (!marker || !token || targetHistory.state?.[marker] !== token) return Promise.resolve(false);
    return new Promise((resolve,reject) => {
      const settled = () => { targetWindow.removeEventListener('popstate',settled); resolve(true); };
      targetWindow.addEventListener('popstate',settled);
      try {
        // This is the entry we pushed, not the original entry beneath it.
        // Removing our marker prevents Forward reviving a closed overlay.
        if (restoreState !== undefined) targetHistory.replaceState(restoreState,'');
        targetHistory.back();
      } catch (error) { targetWindow.removeEventListener('popstate',settled); reject(error); }
    });
  };
  const previous = pending.get(targetWindow), completion = previous ? previous.then(leave) : leave();
  pending.set(targetWindow,completion);
  const clear = () => { if (pending.get(targetWindow) === completion) pending.delete(targetWindow); };
  completion.then(clear,clear);
  return completion;
}
