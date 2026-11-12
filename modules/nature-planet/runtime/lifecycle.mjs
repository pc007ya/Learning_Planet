export function createLifetime() {
  const controller = new AbortController();
  const cleanups = [];
  let disposed = false;
  return {
    get disposed() { return disposed; }, signal: controller.signal,
    own(fn) { if (disposed) fn(); else cleanups.push(fn); return fn; },
    dispose() { if (disposed) return; disposed = true; controller.abort();
      for (const fn of cleanups.reverse()) { try { fn(); } catch { /* Continue all teardown. */ } }
      cleanups.length = 0;
    }
  };
}
export function disposeTree(root) {
  if (!root) return;
  const geometries = new Set(), materials = new Set(), textures = new Set();
  root.traverse(o => {
    if (o.geometry) geometries.add(o.geometry);
    for (const m of o.material ? (Array.isArray(o.material) ? o.material : [o.material]) : []) {
      materials.add(m);
      for (const value of Object.values(m)) if (value?.isTexture) textures.add(value);
    }
  });
  textures.forEach(x => x.dispose()); materials.forEach(x => x.dispose()); geometries.forEach(x => x.dispose());
  root.removeFromParent();
}
export function movementKey(key) {
  return ({w:'up',ArrowUp:'up',s:'down',ArrowDown:'down',a:'left',ArrowLeft:'left',d:'right',ArrowRight:'right',up:'up',down:'down',left:'left',right:'right'})[key] || null;
}
export function editableTarget(target) {
  return !!target?.closest?.('input,textarea,select,[contenteditable]:not([contenteditable="false"])');
}
