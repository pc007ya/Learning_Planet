import * as THREE from "../math-knowledge/vendor/three-r187/three.module.js";

const PALETTES = [
  { land: 0x675ac8, band: 0x8ca8ff, light: 0xc9b6ff },
  { land: 0x217b87, band: 0x57c3ce, light: 0xa8ffec },
  { land: 0x9765aa, band: 0xea93d5, light: 0xffb8ea },
  { land: 0x6a69a6, band: 0xd9a969, light: 0xffdc9d },
];

export function createMissionScene(stage, points, { route, selected, onProject, onUnavailable }) {
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "low-power" });
  const canvas = renderer.domElement;
  canvas.setAttribute("aria-hidden", "true");
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.65));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  stage.querySelector(".math-mission-surface").append(canvas);

  const palette = PALETTES[route % PALETTES.length];
  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(-12, 12, 8, -8, .1, 100);
  const anchors = points.map(([x, y]) => new THREE.Vector3((x - .5) * 21.2, 1.28, (y - .49) * 23));
  const projected = new THREE.Vector3();
  const resources = new Set();
  const own = item => { resources.add(item); return item; };
  const solid = (color, options) => own(new THREE.MeshStandardMaterial({ color, roughness: .77, ...options }));
  const glow = (color, opacity = 1) => own(new THREE.MeshBasicMaterial({ color, transparent: opacity < 1, opacity }));
  const top = solid(palette.land);
  const edge = solid(palette.band);
  const stone = solid(0x2a245e, { flatShading: true });
  const darkStone = solid(0x1b194a, { flatShading: true });
  const crystal = solid(palette.light, { emissive: palette.band, emissiveIntensity: .25, flatShading: true });
  const pearl = glow(palette.light, .88);
  const selectionRing = glow(0xf8dd97);
  const deckGeometry = own(new THREE.CylinderGeometry(1.56, 1.66, .26, 8));
  const ledgeGeometry = own(new THREE.CylinderGeometry(1.66, 1.62, .15, 8));
  const rockGeometry = own(new THREE.CylinderGeometry(1.62, .63, .78, 8));
  const coreGeometry = own(new THREE.CylinderGeometry(.63, .06, .84, 8));
  const ringGeometry = own(new THREE.TorusGeometry(1.78, .029, 6, 40));
  const crystalGeometry = own(new THREE.OctahedronGeometry(.28));
  const dustGeometry = own(new THREE.IcosahedronGeometry(.085, 0));

  function mesh(parent, geometry, material, x, y, z) {
    const item = new THREE.Mesh(geometry, material);
    item.position.set(x, y, z);
    parent.add(item);
    return item;
  }

  scene.add(new THREE.HemisphereLight(0xe8dcff, 0x43386a, 2.15));
  const sun = new THREE.DirectionalLight(0xffe8cb, 2.15);
  sun.position.set(-5, 10, 6);
  scene.add(sun);
  const rim = new THREE.DirectionalLight(0x79bdff, .9);
  rim.position.set(8, 5, -6);
  scene.add(rim);

  const highlights = anchors.map((anchor, i) => {
    const island = new THREE.Group();
    island.position.set(anchor.x, 0, anchor.z);
    island.rotation.y = .18 + (i % 3) * .22;
    scene.add(island);
    mesh(island, coreGeometry, darkStone, 0, -1.2, 0);
    mesh(island, rockGeometry, stone, 0, -.39, 0);
    mesh(island, ledgeGeometry, edge, 0, .04, 0);
    mesh(island, deckGeometry, top, 0, .23, 0);
    const ring = mesh(island, ringGeometry, selectionRing, 0, .42, 0);
    ring.rotation.x = -Math.PI / 2;
    for (const [x, z, scale] of [[-.88, -.63, 1], [-1.14, -.27, .65], [.99, .51, .72]]) {
      const shard = mesh(island, crystalGeometry, crystal, x, .59, z);
      shard.scale.set(scale, scale * 1.65, scale);
      shard.rotation.z = x < 0 ? .2 : -.25;
    }
    return ring;
  });

  const routeMaterial = glow(palette.band, .57);
  for (let i = 1; i < anchors.length; i++) {
    const a = anchors[i - 1];
    const b = anchors[i];
    const start = new THREE.Vector3(a.x, .06, a.z);
    const end = new THREE.Vector3(b.x, .06, b.z);
    const middle = start.clone().lerp(end, .5);
    middle.y = -.38;
    const arc = new THREE.QuadraticBezierCurve3(start, middle, end);
    const line = own(new THREE.TubeGeometry(arc, 12, .047, 5, false));
    mesh(scene, line, routeMaterial, 0, 0, 0);
    for (const t of [.35, .5, .65]) {
      const p = arc.getPoint(t);
      mesh(scene, dustGeometry, pearl, p.x, p.y, p.z);
    }
  }

  for (let i = 0; i < 28; i++) {
    const x = Math.sin(i * 2.41) * (5 + i % 7);
    const z = Math.cos(i * 1.82) * (3 + i % 6);
    if (anchors.some(p => Math.hypot(p.x - x, p.z - z) < 2)) continue;
    const shard = mesh(scene, dustGeometry, i % 3 ? routeMaterial : pearl, x, -1.6 + (i % 5) * .41, z);
    shard.scale.setScalar(i % 6 === 0 ? 2.2 : .72);
  }

  let width = 0;
  let height = 0;
  let angle = 0;
  let drag;
  let lost = false;
  let frame = 0;
  const listeners = new AbortController();

  function render() {
    frame = 0;
    if (lost || !width || !height) return;
    camera.position.set(Math.sin(angle) * 21, 20, Math.cos(angle) * 21);
    camera.lookAt(0, -.1, 0);
    camera.updateMatrixWorld();
    renderer.render(scene, camera);
    onProject(anchors.map(anchor => {
      projected.copy(anchor).project(camera);
      return [(projected.x + 1) / 2, (1 - projected.y) / 2];
    }));
  }

  function schedule() {
    if (!lost && !frame) frame = requestAnimationFrame(render);
  }

  function resize() {
    width = stage.clientWidth;
    height = stage.clientHeight;
    if (!width || !height) return;
    const aspect = width / height;
    const halfWidth = Math.max(11.65, 7.55 * aspect);
    const halfHeight = halfWidth / aspect;
    Object.assign(camera, { left: -halfWidth, right: halfWidth, top: halfHeight, bottom: -halfHeight });
    camera.updateProjectionMatrix();
    renderer.setSize(width, height, false);
    schedule();
  }

  function rotate(delta) {
    angle = THREE.MathUtils.clamp(angle + delta, -.43, .43);
    schedule();
  }

  function select(index) {
    highlights.forEach((ring, i) => { ring.visible = i === index; });
    schedule();
  }

  function listen(type, handler) {
    stage.addEventListener(type, handler, { signal: listeners.signal });
  }

  listen("pointerdown", event => {
    if (drag || event.button !== 0 || event.target.closest("button")) return;
    drag = { id: event.pointerId, startX: event.clientX, startY: event.clientY, x: event.clientX, active: false };
  });
  listen("pointermove", event => {
    if (drag?.id !== event.pointerId) return;
    if (!drag.active) {
      const dx = Math.abs(event.clientX - drag.startX);
      const dy = Math.abs(event.clientY - drag.startY);
      if (dy > 9 && dy > dx) { drag = null; return; }
      if (dx < 7) return;
      drag.active = true;
      stage.setPointerCapture(event.pointerId);
      stage.classList.add("is-dragging");
    }
    rotate((drag.x - event.clientX) * .0035);
    drag.x = event.clientX;
  });
  function endDrag(event) {
    if (drag?.id !== event.pointerId) return;
    drag = null;
    stage.classList.remove("is-dragging");
  }
  listen("pointerup", endDrag);
  listen("pointercancel", endDrag);
  listen("lostpointercapture", endDrag);
  listen("pointerleave", event => { if (!drag?.active) endDrag(event); });
  canvas.addEventListener("webglcontextlost", () => {
    lost = true;
    canvas.remove();
    onUnavailable();
  }, { signal: listeners.signal });

  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(stage);
  select(selected);
  resize();
  return {
    rotate,
    select,
    reset() { angle = 0; schedule(); },
    dispose() {
      lost = true;
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      listeners.abort();
      stage.classList.remove("is-dragging");
      for (const item of resources) item.dispose();
      renderer.dispose();
      renderer.forceContextLoss();
      canvas.remove();
    },
  };
}
