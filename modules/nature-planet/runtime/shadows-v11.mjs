// One cached directional shadow map. No per-frame hooks or character casters.
export function shadowMeshPolicy(mesh) {
  const materials = (Array.isArray(mesh.material) ? mesh.material : [mesh.material]).filter(Boolean);
  const name = mesh.name || '';
  const sea = /(?:UnifiedSea|OffshoreMarks|DistantWaveMarks|SeaSurface|OceanSurface)/i.test(name) ||
    materials.some(m => /(?:ContinuousDepth|DistantWaveMarks|SeaSurface)/i.test(m.name || ''));
  const opaque = materials.length > 0 && materials.every(m => m.visible !== false &&
    !m.transparent && (m.opacity ?? 1) >= 1 && !(m.transmission > 0) &&
    !/glass/i.test(m.name || '')) && !/glass/i.test(name);
  return { castShadow: opaque && !sea, receiveShadow: opaque && !sea };
}

export function createStaticShadowsV11(THREE, { renderer, scene, sun, outputDir, search = '' }) {
  const enabled = outputDir === 'output_streets_v11' && new URLSearchParams(search).get('shadows') !== 'off';
  const stats = { enabled, mapSize: 0, updatesRequested: 0, casters: 0, receivers: 0 };
  if (!enabled) return { refresh: () => false, stats };
  const max = Math.min(2048, renderer.capabilities?.maxTextureSize || 2048);
  const size = 2 ** Math.floor(Math.log2(Math.max(1, max)));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFShadowMap;
  renderer.shadowMap.autoUpdate = false;
  renderer.shadowMap.needsUpdate = false;
  sun.castShadow = true;
  sun.shadow.mapSize.set(size, size);
  sun.shadow.autoUpdate = false;
  sun.shadow.needsUpdate = false;
  sun.shadow.bias = -0.00015;
  sun.shadow.normalBias = 0.035;
  stats.mapSize = size;
  scene.add(sun.target);
  const direction = sun.position.clone().sub(sun.target.position).normalize();
  if (!direction.lengthSq()) direction.set(-40, 85, 50).normalize();

  function refresh(root, data) {
    if (!root?.traverse) return false;
    root.updateMatrixWorld(true);
    const bounds = new THREE.Box3();
    let casters = 0, receivers = 0;
    root.traverse(mesh => {
      if (!mesh.isMesh) return;
      Object.assign(mesh, shadowMeshPolicy(mesh));
      if (mesh.castShadow) casters++;
      if (mesh.receiveShadow) receivers++;
      if (!mesh.castShadow && !mesh.receiveShadow) return;
      // Geometry-only bounds avoid a large transparent ocean child expanding the frustum.
      const geometry = mesh.geometry;
      if (geometry && !geometry.boundingBox) geometry.computeBoundingBox();
      if (geometry?.boundingBox) bounds.union(geometry.boundingBox.clone().applyMatrix4(mesh.matrixWorld));
    });
    stats.casters = casters;
    stats.receivers = receivers;
    // Include all six regions and the arrival peninsula even where geometry has gaps.
    for (const region of [...(data?.regions || []), ...(data?.landingZone ? [data.landingZone] : [])]) {
      for (const p of region.boundary || []) {
        const point = [p[0], p[2] ?? region.terrainHeight ?? region.center?.[2] ?? 0, -p[1]];
        if (point.every(Number.isFinite)) bounds.expandByPoint(new THREE.Vector3(...point));
      }
    }
    if (!casters || bounds.isEmpty() || ![...bounds.min.toArray(), ...bounds.max.toArray()].every(Number.isFinite)) {
      // No opaque geometry: no map render needed, including a transparent-only scene.
      return false;
    }
    const center = bounds.getCenter(new THREE.Vector3());
    const radius = bounds.getSize(new THREE.Vector3()).length() / 2;
    sun.target.position.copy(center);
    sun.position.copy(center).addScaledVector(direction, radius + 20);
    sun.target.updateMatrixWorld(true);
    sun.updateMatrixWorld(true);
    const camera = sun.shadow.camera;
    camera.position.copy(sun.position);
    camera.lookAt(center);
    camera.updateMatrixWorld(true);
    const lightBounds = new THREE.Box3();
    for (const x of [bounds.min.x, bounds.max.x]) for (const y of [bounds.min.y, bounds.max.y]) for (const z of [bounds.min.z, bounds.max.z]) {
      lightBounds.expandByPoint(new THREE.Vector3(x, y, z).applyMatrix4(camera.matrixWorldInverse));
    }
    const padding = 3;
    camera.left = lightBounds.min.x - padding;
    camera.right = lightBounds.max.x + padding;
    camera.bottom = lightBounds.min.y - padding;
    camera.top = lightBounds.max.y + padding;
    camera.near = Math.max(0.1, -lightBounds.max.z - padding);
    camera.far = Math.max(camera.near + 1, -lightBounds.min.z + padding);
    camera.updateProjectionMatrix();
    // Three consumes both flags on the next render, then keeps this map frozen.
    sun.shadow.needsUpdate = true;
    renderer.shadowMap.needsUpdate = true;
    stats.updatesRequested++;
    stats.bounds = { min: bounds.min.toArray(), max: bounds.max.toArray() };
    return true;
  }
  return { refresh, stats };
}
