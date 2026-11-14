import { waitForOverlayHistory } from './overlay-history.mjs';
import { claimRootOverlay } from './overlay-owner.mjs';
import { openNaturePlanet } from '../nature-planet/launch.mjs';
import { isScienceCurriculumEnabled } from './rollout.mjs';
import { openScienceCurriculum } from './launch.mjs?v=20261112-v3';

let session = null;
/** The map owns exploration; its explicitly owned child owns local records. */
export async function openNaturePracticePlanet({ grade = 1, publisher = '康軒', semester = 1, learnerId = 'preview', catalog, isActive = () => true, onClose, onOpen, container = null, onClassic, initialExploration, onExplorationChange } = {}) {
  if (!isScienceCurriculumEnabled()) throw Error('自然星球暫時未開放。');
  await waitForOverlayHistory(window);
  if (session && (session.closing || !session.isActive())) await session.close();
  if (!isActive()) return () => Promise.resolve();
  if (session && session.learnerId === String(learnerId) && session.grade === grade && session.publisher === publisher && session.semester === semester && session.container === container && session.onClose === onClose) return session.close;
  const owner = await claimRootOverlay({ window, isActive });
  if (!owner?.isActive()) { owner?.release(); return () => Promise.resolve(); }
  let mapClose = null, childClose = null, childHandle = null, closePromise = null;
  let resolveMapHandle; const mapHandle = new Promise(resolve => { resolveMapHandle = resolve; });
  let closed = false, closing = false, childOpen = false;
  const finish = () => {
    if (closed) return;
    closed = true;
    childClose?.(true, 'map-closed'); childClose = null;
    resolveMapHandle(null); owner.release();
    if (session === current) session = null;
    try { onClose?.(); } catch (_) { /* consumer callbacks cannot retain a session */ }
  };
  const close = () => {
    if (closePromise) return closePromise;
    if (closed) return Promise.resolve();
    closing = true;
    closePromise = (async () => {
      // Handles are published on mount, before either data or GPU readiness.
      // Stop writes now, then settle child history before parent history.
      const child = childClose || (childHandle ? await childHandle : null);
      if (child) await child(false, 'parent-close');
      const map = mapClose || await mapHandle;
      if (!closed) { if (map) await map(); if (!closed) finish(); }
    })();
    return closePromise;
  };
  const current = { close, isActive: () => isActive() && owner.isActive(), learnerId: String(learnerId), grade, publisher, semester, container, onClose, get closing() { return closing; } };
  session = current; owner.publishClose(close);
  try { onOpen?.(close); } catch (error) { resolveMapHandle(null); finish(); throw error; }
  try {
    mapClose = await openNaturePlanet({ grade, publisher, semester, catalog, container, onClassic, initialExploration, onExplorationChange,
      // While a child is open, it checks identity and closes its history first.
      isActive: () => !closed && (childOpen || (!closing && owner.isActive())),
      onOpen: handle => { mapClose = handle; resolveMapHandle(handle); if (closed) handle(true); },
      onClose: finish,
      onEnterUnit: async (unitId, { onReturn }) => {
        if (closed || closing || !owner.isActive()) return false;
        childOpen = true; let returned = false, resolveChild;
        const ready = new Promise(resolve => { resolveChild = resolve; }); childHandle = ready;
        const returnToMap = () => {
          if (returned) return;
          returned = true; childOpen = false; childClose = null;
          if (childHandle === ready) childHandle = null;
          if (!closed) onReturn();
        };
        try {
          const closePractice = await openScienceCurriculum({ unitId, learnerId, parentSession: owner,
            isActive: () => !closed && !closing && owner.isActive(), onClose: returnToMap,
            onOpen: handle => { childClose = handle; resolveChild(handle); if (closed) handle(true, 'map-closed'); } });
          resolveChild(closePractice);
          // An inactive opening may return before mounting, without onClose.
          if (closed || closing || returned || !owner.isActive()) {
            await closePractice?.(closed, 'inactive'); returnToMap(); return false;
          }
          childClose = closePractice;
          return true;
        } catch (error) { resolveChild(null); returnToMap(); throw error; }
      }
    });
    resolveMapHandle(mapClose);
    if (closed) mapClose?.(true);
    else if (closing || !owner.isActive()) await close();
    return close;
  } catch (error) { resolveMapHandle(null); finish(); throw error; }
}
