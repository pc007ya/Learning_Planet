/**
 * Visual quality layer for the v11 planet runtime.
 *
 * Only lighting, sky, shadows and material response are touched here. Geometry,
 * walk surfaces, station anchors and the authored GLB stay byte-identical, so
 * navigation and lesson entry behave exactly as before.
 */

/** Pick a rendering tier from device hints. `?planetQuality=low|medium|high` overrides. */
export function pickQualityTier(win) {
  try {
    const forced = new URLSearchParams(win?.location?.search || '').get('planetQuality');
    if (['low', 'medium', 'high'].includes(forced)) return forced;
  } catch { /* ignore malformed URLs */ }
  const nav = win?.navigator || {};
  const memory = Number(nav.deviceMemory) || 8;
  const cores = Number(nav.hardwareConcurrency) || 8;
  const coarse = win?.matchMedia?.('(pointer: coarse)')?.matches === true;
  const mobileUA = /iPhone|iPod|Android.+Mobile/i.test(nav.userAgent || '');
  if (memory <= 2 || cores <= 2) return 'low';
  if (mobileUA || coarse) return 'medium';
  return 'high';
}

export const QUALITY_SETTINGS = {
  low:    { pixelRatio: 1,    antialias: false, shadows: false, shadowSize: 0,    envMap: false },
  medium: { pixelRatio: 1.5,  antialias: true,  shadows: true,  shadowSize: 1024, envMap: true },
  high:   { pixelRatio: 2,    antialias: true,  shadows: true,  shadowSize: 2048, envMap: true }
};

// Twilight "learning planet" palette. SKY.horizon tints the PMREM environment map,
// while the main scene background & fog use SKY.ground (0x14263b) so the ocean edge
// blends seamlessly with zero tone-mapping seam in overview mode.
const SKY = { zenith: 0x0b1638, mid: 0x183d60, horizon: 0x5fb4c9, ground: 0x14263b };

const SKY_VERTEX = /* glsl */`
varying vec3 vDir;
void main(){
  vDir = normalize(position);
  vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  gl_Position = p.xyww;
}`;
const SKY_FRAGMENT = /* glsl */`
uniform vec3 zenith; uniform vec3 mid; uniform vec3 horizon; uniform vec3 ground; uniform vec3 sunDir; uniform float stars;
varying vec3 vDir;
float hash(vec3 p){ p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
void main(){
  vec3 d = normalize(vDir);
  float h = d.y;
  vec3 col = h > 0.0
    ? mix(mix(horizon, mid, smoothstep(0.0, 0.22, h)), zenith, smoothstep(0.18, 0.75, h))
    : mix(horizon, ground, smoothstep(0.0, 0.25, -h));
  // Soft sun glow, kept warm and low so it reads as late afternoon.
  float s = max(dot(d, normalize(sunDir)), 0.0);
  col += vec3(1.0, 0.78, 0.52) * (pow(s, 48.0) * 0.55 + pow(s, 6.0) * 0.12) * smoothstep(-0.02, 0.08, h);
  // Sparse procedural stars high in the sky.
  if (stars > 0.0 && h > 0.25) {
    vec3 cell = floor(d * 220.0);
    float n = hash(cell);
    float twinkle = step(0.9965, n) * smoothstep(0.25, 0.6, h);
    col += vec3(0.85, 0.92, 1.0) * twinkle * stars;
  }
  gl_FragColor = vec4(col, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`;

/** Gradient sky dome that follows the camera. Rendered first, never depth-tested. */
export function createSkyDome(THREE, sunDirection) {
  const material = new THREE.ShaderMaterial({
    name: 'V11_SkyDome',
    uniforms: {
      zenith: { value: new THREE.Color(SKY.zenith) },
      mid: { value: new THREE.Color(SKY.mid) },
      horizon: { value: new THREE.Color(SKY.horizon) },
      ground: { value: new THREE.Color(SKY.ground) },
      sunDir: { value: sunDirection.clone().normalize() },
      stars: { value: 1 }
    },
    vertexShader: SKY_VERTEX,
    fragmentShader: SKY_FRAGMENT,
    side: THREE.BackSide,
    depthWrite: false,
    depthTest: false,
    fog: false
  });
  const dome = new THREE.Mesh(new THREE.SphereGeometry(1, 48, 24), material);
  dome.name = 'V11_SkyDome';
  dome.scale.setScalar(400);
  dome.renderOrder = -1000;
  dome.frustumCulled = false;
  dome.matrixAutoUpdate = true;
  return dome;
}

/** Small PMREM environment so metal, glass and glossy plastic pick up sky reflections. */
function createEnvironment(THREE, renderer, sunDirection) {
  if (typeof renderer?.getContext !== 'function' || !THREE.PMREMGenerator) return null;
  const envScene = new THREE.Scene();
  const dome = createSkyDome(THREE, sunDirection);
  dome.material.uniforms.stars.value = 0;
  dome.material.depthTest = true;
  dome.scale.setScalar(50);
  envScene.add(dome);
  // Two soft "studio" panels: a warm key matching the sun and a cool sky fill.
  const panel = (color, intensity, pos, size) => {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(size, size), new THREE.MeshBasicMaterial({ color, side: THREE.DoubleSide }));
    m.material.color.multiplyScalar(intensity);
    m.position.copy(pos); m.lookAt(0, 0, 0); envScene.add(m); return m;
  };
  panel(0xffe2bd, 6, sunDirection.clone().normalize().multiplyScalar(30), 14);
  panel(0xbfe8ff, 2.2, new THREE.Vector3(30, 18, -20), 22);
  const pmrem = new THREE.PMREMGenerator(renderer);
  const target = pmrem.fromScene(envScene, 0.035);
  pmrem.dispose();
  envScene.traverse(o => { o.geometry?.dispose(); o.material?.dispose(); });
  return target;
}

// The sea surface and its painted wave marks never cast shadows (they are flat and
// huge). Sea creatures use LP_Ocean_* materials and still cast normally.
function isOcean(object) {
  if ([].concat(object.material || []).some(m => /^Ocean_V8|^Coast_/.test(m?.name || ''))) return true;
  for (let node = object; node; node = node.parent) if (/^(Ocean_Surface|Ocean_V8|Coast_)/.test(node.name || '')) return true;
  return false;
}

/**
 * Install renderer settings, lights, sky and environment.
 * Returns hooks the runtime calls after the terrain loads and every frame.
 */
export function installVisualQuality(THREE, { renderer, scene, win, tier = pickQualityTier(win) }) {
  const settings = QUALITY_SETTINGS[tier] || QUALITY_SETTINGS.medium;
  const owned = [];
  const sunOffset = new THREE.Vector3(-46, 78, 40);
  const sunDirection = sunOffset.clone().normalize();

  renderer.setPixelRatio?.(Math.min(win?.devicePixelRatio || 1, settings.pixelRatio));
  renderer.toneMappingExposure = 1.08;
  if (renderer.shadowMap && settings.shadows) {
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  }

  scene.background = new THREE.Color(SKY.ground);
  scene.fog = new THREE.Fog(SKY.ground, 140, 340);
  const sky = createSkyDome(THREE, sunDirection);
  // Cameras always look downward in follow/overview, so the upper dome is only needed in PMREM.
  sky.visible = false;
  scene.add(sky);
  owned.push(sky.geometry, sky.material);

  // Cool sky fill from above, teal bounce from the ocean below.
  const hemi = new THREE.HemisphereLight(0xcfeaff, 0x2d6f80, 1.25);
  hemi.name = 'V11_SkyFill';
  scene.add(hemi);
  // Warm low sun: gives buildings and island cliffs a readable light/shadow side.
  const sun = new THREE.DirectionalLight(0xffe3c0, 3.1);
  sun.name = 'V11_Sun';
  sun.position.copy(sunOffset);
  scene.add(sun, sun.target);
  // Gentle cool rim from behind the camera's usual heading separates silhouettes from the sea.
  const rim = new THREE.DirectionalLight(0x9fd8ff, 0.9);
  rim.name = 'V11_Rim';
  rim.position.set(60, 40, -70);
  scene.add(rim);

  let shadowExtent = 0;
  if (settings.shadows && sun.shadow) {
    sun.castShadow = true;
    sun.shadow.mapSize.set(settings.shadowSize, settings.shadowSize);
    sun.shadow.bias = -0.0004;
    sun.shadow.normalBias = 0.06;
    sun.shadow.radius = 3;
    sun.shadow.camera.near = 1;
    sun.shadow.camera.far = 260;
  }
  function setShadowExtent(extent) {
    if (!sun.castShadow || extent === shadowExtent) return;
    shadowExtent = extent;
    const cam = sun.shadow.camera;
    cam.left = -extent; cam.right = extent; cam.top = extent; cam.bottom = -extent;
    cam.updateProjectionMatrix();
  }
  setShadowExtent(48);

  let envTarget = null;
  if (settings.envMap) {
    try { envTarget = createEnvironment(THREE, renderer, sunDirection); } catch { envTarget = null; }
    if (envTarget) {
      scene.environment = envTarget.texture;
      if ('environmentIntensity' in scene) scene.environmentIntensity = 0.55;
    }
  }

  /** Called once after the GLB is in the scene. */
  function polishTerrain(root) {
    root.traverse(object => {
      if (!object.isMesh) return;
      const ocean = isOcean(object);
      object.receiveShadow = settings.shadows;
      object.castShadow = settings.shadows && !ocean;
      for (const material of [].concat(object.material || [])) {
        if (!material || material.userData.v11Polished) continue;
        material.userData.v11Polished = true;
        const name = material.name || '';
        if (/glass/i.test(name)) {
          // Brighter, clearer glass domes that actually reflect the sky.
          material.roughness = Math.min(material.roughness ?? 0.15, 0.08);
          if ('envMapIntensity' in material) material.envMapIntensity = 1.6;
        } else if (/Ocean_V8/i.test(name)) {
          material.roughness = 0.65;
          if ('envMapIntensity' in material) material.envMapIntensity = 0.28;
        } else if (/Coast_/i.test(name)) {
          material.roughness = 0.42;
          if ('envMapIntensity' in material) material.envMapIntensity = 0.65;
        } else if (/Terrain_VertexColor|Paving|Plaza|road|deck|RegionTop|rock/i.test(name)) {
          if ('envMapIntensity' in material) material.envMapIntensity = 0.45;
        } else if ((material.metalness ?? 0) > 0.2) {
          if ('envMapIntensity' in material) material.envMapIntensity = 1.2;
        }
        material.needsUpdate = true;
      }
    });
  }

  /** Character gets cast/receive shadows so Yuyu is grounded on the paving. */
  function polishActor(root) {
    root.traverse(object => { if (object.isMesh) { object.castShadow = settings.shadows; object.receiveShadow = settings.shadows; } });
  }

  /** Keep sky centred on the camera and the shadow frustum centred on what we look at. */
  function update(camera, focus, overview) {
    sky.position.copy(camera.position);
    if (!sun.castShadow) return;
    setShadowExtent(overview ? 125 : 48);
    // Snap to shadow texels so moving the camera does not make shadow edges crawl.
    const texel = (shadowExtent * 2) / settings.shadowSize;
    const fx = Math.round(focus.x / texel) * texel, fz = Math.round(focus.z / texel) * texel;
    sun.target.position.set(fx, focus.y, fz);
    sun.position.set(fx + sunOffset.x, focus.y + sunOffset.y, fz + sunOffset.z);
    sun.target.updateMatrixWorld();
  }

  function dispose() {
    for (const item of owned) item.dispose?.();
    envTarget?.dispose?.();
    sun.shadow?.map?.dispose?.();
    if (scene.environment === envTarget?.texture) scene.environment = null;
  }

  return { tier, settings, sun, hemi, rim, sky, polishTerrain, polishActor, update, dispose };
}
