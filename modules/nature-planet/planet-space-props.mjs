import * as THREE from '../math-knowledge/vendor/three-r187/three.module.js';
import { GLTFLoader } from '../math-knowledge/vendor/three-r187/addons/loaders/GLTFLoader.js';

export const SPACE_PROPS_URL = new URL('../../assets/models/grade1-space-props/grade1-space-props-v1.glb', import.meta.url).href;
export const SPACE_PROPS_META_URL = new URL('../../assets/models/grade1-space-props/grade1-space-props-v1.json', import.meta.url).href;
export const SPACE_PROPS_LIMITS = Object.freeze({ bytes:1000000, triangles:30000, meshes:32, materials:16 });

// The props are authored in the existing terrain's world coordinates. This
// module never moves the terrain, edits a route, creates colliders or runs RAF.
export function inspectSpaceProps(root, bytes) {
  if (!Number.isFinite(bytes) || bytes <= 0 || bytes > SPACE_PROPS_LIMITS.bytes) throw new Error('Space props exceed the 1 MB transfer budget.');
  let triangles = 0, meshes = 0;
  const materials = new Set();
  root?.traverse(object => {
    if (!object.isMesh) return;
    meshes++;
    const geometry = object.geometry, positions = geometry?.getAttribute('position');
    if (!positions || positions.itemSize !== 3) throw new Error('Space prop positions are invalid.');
    for (const value of positions.array) if (!Number.isFinite(value)) throw new Error('Space props contain non-finite geometry.');
    const count = geometry.index?.count ?? positions.count;
    if (count % 3) throw new Error('Space props contain invalid triangle data.');
    triangles += count / 3 * (object.isInstancedMesh ? object.count : 1);
    for (const material of Array.isArray(object.material) ? object.material : [object.material]) if (material) materials.add(material);
  });
  const metrics = { bytes, triangles, meshes, materials:materials.size };
  if (!meshes) throw new Error('Space props contain no meshes.');
  for (const key of Object.keys(SPACE_PROPS_LIMITS)) if (metrics[key] > SPACE_PROPS_LIMITS[key]) throw new Error(`Space props exceed the ${key} budget.`);
  root.updateMatrixWorld(true);
  const box = new THREE.Box3().setFromObject(root);
  if (box.isEmpty() || ![...box.min.toArray(),...box.max.toArray()].every(Number.isFinite)) throw new Error('Space prop bounds are invalid.');
  return { ...metrics, bounds:{min:box.min.toArray(),max:box.max.toArray()} };
}

function validateBinary(buffer) {
  if (buffer.byteLength < 20 || buffer.byteLength > SPACE_PROPS_LIMITS.bytes) throw new Error('Space props have an invalid GLB size.');
  const view = new DataView(buffer);
  if (view.getUint32(0,true) !== 0x46546c67 || view.getUint32(4,true) !== 2 || view.getUint32(8,true) !== buffer.byteLength) throw new Error('Space props must be a valid glTF 2.0 GLB.');
  const length = view.getUint32(12,true);
  if (view.getUint32(16,true) !== 0x4e4f534a || length > buffer.byteLength-20) throw new Error('Space prop GLB metadata is invalid.');
  const data = JSON.parse(new TextDecoder().decode(new Uint8Array(buffer,20,length)));
  if ([...(data.buffers||[]),...(data.images||[])].some(item => item.uri && !item.uri.startsWith('data:'))) throw new Error('Space props must not request external buffers or images.');
}

function releaseTree(root) {
  const resources = new Set(), bitmaps = new Set();
  root?.traverse(object => {
    if (object.geometry) resources.add(object.geometry);
    if (object.isInstancedMesh || object.isSkinnedMesh) object.dispose?.();
    if (object.skeleton) resources.add(object.skeleton);
    for (const material of Array.isArray(object.material) ? object.material : [object.material]) {
      if (!material) continue;
      resources.add(material);
      for (const value of Object.values(material)) if (value?.isTexture) {
        resources.add(value); if (value.image?.close) bitmaps.add(value.image);
      }
    }
  });
  resources.forEach(resource => resource.dispose()); bitmaps.forEach(bitmap => bitmap.close());
}

export function createSpaceProps(scene, {
  url = SPACE_PROPS_URL, metadataURL = SPACE_PROPS_META_URL,
  fetcher = globalThis.fetch, loader = new GLTFLoader(), signal,
  visible = true, onState = () => {}, onLoaded = () => {},
} = {}) {
  let root = null, metadata = null, metrics = null, state = 'idle', error = null;
  let disposed = false, controller = null, pending = null, readyPromise = null, attempt = 0;
  let desiredVisible = !!visible;
  const released = new WeakSet();
  function release(candidate) {
    if (!candidate || released.has(candidate)) return;
    released.add(candidate); scene.remove(candidate); releaseTree(candidate);
  }
  function report(next, message = '') {
    state = next; error = next === 'error' ? message : null;
    if (!disposed) onState({ status:next, message, metrics, error });
  }
  async function read(url, limit, signal) {
    const response = await fetcher(url,{signal,cache:'no-cache'});
    if (!response.ok) throw new Error(`Space props unavailable (${response.status}).`);
    if (Number(response.headers?.get?.('content-length')) > limit) throw new Error('Space props exceed the transfer budget.');
    const buffer = await response.arrayBuffer();
    if (buffer.byteLength > limit) throw new Error('Space props exceed the transfer budget.');
    return buffer;
  }
  function retry() {
    if (disposed) return Promise.resolve(null);
    if (pending) return pending;
    if (root) return Promise.resolve({root,metadata,metrics});
    const current = ++attempt, currentController = new AbortController(); controller = currentController;
    readyPromise = Promise.resolve().then(async () => {
      if (disposed || currentController.signal.aborted) return null;
      report('loading','正在載入太空載具。');
      let candidate = null;
      try {
        const [buffer,metaBuffer] = await Promise.all([
          read(url,SPACE_PROPS_LIMITS.bytes,currentController.signal),
          read(metadataURL,200000,currentController.signal),
        ]);
        if (disposed || currentController.signal.aborted || current !== attempt) return null;
        validateBinary(buffer);
        const data = JSON.parse(new TextDecoder().decode(metaBuffer));
        if (data.bytes !== buffer.byteLength || !/^[a-f0-9]{64}$/i.test(data.sha256 || '')) throw new Error('Space prop manifest does not match the model.');
        if (globalThis.crypto?.subtle) {
          const digest = await globalThis.crypto.subtle.digest('SHA-256',buffer);
          const hash = Array.from(new Uint8Array(digest),byte => byte.toString(16).padStart(2,'0')).join('');
          if (hash !== data.sha256.toLowerCase()) throw new Error('Space prop model hash does not match its manifest.');
        }
        if (disposed || currentController.signal.aborted || current !== attempt) return null;
        const gltf = await loader.parseAsync(buffer,''); candidate = gltf.scene;
        if (disposed || currentController.signal.aborted || current !== attempt) { release(candidate); return null; }
        const inspected = inspectSpaceProps(candidate,buffer.byteLength);
        if (data.triangles !== inspected.triangles || data.materials !== inspected.materials || data.drawMeshes !== inspected.meshes) throw new Error('Space prop geometry does not match its manifest.');
        candidate.name = 'grade-one-space-props';
        candidate.userData = {...candidate.userData,decorative:true,interactive:false,walkable:false};
        candidate.traverse(object => {
          if (!object.isMesh) return;
          object.userData = {...object.userData,decorative:true,interactive:false,walkable:false};
          // Even a future scene-wide picker must not turn decorations into roads.
          object.raycast = () => {};
          const materials = Array.isArray(object.material) ? object.material : [object.material];
          object.castShadow = materials.some(material => material && (!material.transparent || material.opacity >= .5));
          object.receiveShadow = true;
        });
        candidate.visible = desiredVisible; root = candidate; metadata = data; metrics = inspected;
        scene.add(root); root.updateMatrixWorld(true);
        report('ready','太空載具已載入。');
        if (disposed || currentController.signal.aborted || current !== attempt) { release(candidate); return null; }
        onLoaded({root,metadata,metrics});
        if (disposed || currentController.signal.aborted || current !== attempt) return null;
        return {root,metadata,metrics};
      } catch (cause) {
        release(candidate); if (candidate === root) root = null;
        if (!disposed && !currentController.signal.aborted && current === attempt) report('error',cause?.message || 'Space props could not load.');
        currentController.abort(); return null;
      } finally {
        if (current === attempt) pending = null;
      }
    });
    pending = readyPromise; return readyPromise;
  }
  function dispose() {
    if (disposed) return;
    disposed = true; attempt++; state = 'disposed'; controller?.abort();
    signal?.removeEventListener('abort',dispose); release(root); root = null;
  }
  signal?.addEventListener('abort',dispose,{once:true});
  if (signal?.aborted) dispose();
  readyPromise = disposed ? Promise.resolve(null) : retry();
  return {
    retry, dispose,
    setVisible(value) { desiredVisible = !!value; if (root && !disposed) root.visible = desiredVisible; },
    get ready() { return readyPromise; }, get root() { return root; },
    get state() { return state; }, get error() { return error; },
    get metrics() { return metrics; }, get metadata() { return metadata; },
  };
}
