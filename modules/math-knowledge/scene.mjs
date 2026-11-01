import * as THREE from './vendor/three-r187/three.module.js';
import { groups, edges } from './grade1.mjs';

export function createUniverse(stage, labels) {
  if (THREE.REVISION !== '187') throw new Error('This knowledge map requires Three.js r187.');
  const scene = new THREE.Scene();
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'low-power' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.7));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.setClearColor(0x080c22, 0);
  renderer.domElement.setAttribute('aria-hidden', 'true');
  stage.prepend(renderer.domElement);
  const camera = new THREE.OrthographicCamera(-60, 60, 42, -42, .1, 500);
  camera.position.set(0, -3, 150);
  camera.lookAt(0, -3, 0);
  const world = new THREE.Group();
  scene.add(world);
  let width = 1, height = 1, zoom = 1, paused = false, hidden = false, disposed = false, extensions = false;
  let current = { topics: [], selected: '', group: 'all', adjacent: new Set(), records: {} };
  let lastFrame = 0, elapsed = 0, dirty = true, frameId;
  const resources = new Set();
  const own = value => { resources.add(value); return value; };
  const sphere = own(new THREE.SphereGeometry(.52, 14, 10));
  const glowCanvas = document.createElement('canvas');
  glowCanvas.width = glowCanvas.height = 128;
  const glowContext = glowCanvas.getContext('2d');
  const gradient = glowContext.createRadialGradient(64, 64, 0, 64, 64, 64);
  gradient.addColorStop(0, 'rgba(255,255,255,1)');
  gradient.addColorStop(.08, 'rgba(255,255,255,.8)');
  gradient.addColorStop(.24, 'rgba(255,255,255,.16)');
  gradient.addColorStop(1, 'rgba(255,255,255,0)');
  glowContext.fillStyle = gradient;
  glowContext.fillRect(0, 0, 128, 128);
  const glowTexture = own(new THREE.CanvasTexture(glowCanvas));
  const pointsTexture = glowTexture;
  let randomSeed = 108;
  function random() { randomSeed = (randomSeed * 1664525 + 1013904223) >>> 0; return randomSeed / 4294967296; }

  // Soft, layered nebulae are generated locally; no remote image or CDN dependency.
  const fog = new THREE.Group();
  world.add(fog);
  const cloudCenters = [[-26,19,'#455a9c'],[-2,-9,'#62478f'],[35,15,'#874f7b'],[-37,-25,'#255d6b'],[34,-25,'#775345']];
  for (const [cx, cy, color] of cloudCenters) {
    for (let i = 0; i < 13; i++) {
      const material = own(new THREE.SpriteMaterial({ map: glowTexture, color, transparent: true, opacity: .10 + random() * .09, depthWrite: false, blending: THREE.AdditiveBlending }));
      const cloud = new THREE.Sprite(material);
      cloud.position.set(cx + (random() - .5) * 24, cy + (random() - .5) * 22, -10 - random() * 8);
      cloud.scale.set(30 + random() * 35, 20 + random() * 30, 1);
      fog.add(cloud);
    }
  }
  const starPositions = [], starColors = [];
  for (let i = 0; i < 1450; i++) {
    starPositions.push((random() - .5) * 240, (random() - .5) * 180, -20 - random() * 35);
    const shade = new THREE.Color().setHSL(.57 + random() * .2, .2 + random() * .3, .45 + random() * .45);
    starColors.push(shade.r, shade.g, shade.b);
  }
  const starGeometry = own(new THREE.BufferGeometry());
  starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starPositions, 3));
  starGeometry.setAttribute('color', new THREE.Float32BufferAttribute(starColors, 3));
  const starMaterial = own(new THREE.PointsMaterial({ size: .45, map: pointsTexture, transparent: true, opacity: .9, vertexColors: true, depthWrite: false, blending: THREE.AdditiveBlending, sizeAttenuation: false }));
  const stars = new THREE.Points(starGeometry, starMaterial);
  scene.add(stars);
  const nodeMeshes = new Map(), edgeMeshes = [];
  const edgeGroup = new THREE.Group(), nodesGroup = new THREE.Group();
  world.add(edgeGroup, nodesGroup);

  function buildTopics(topics) {
    for (const node of topics) {
      if (nodeMeshes.has(node.id)) continue;
      const color = groups.find(g => g.id === node.group).color;
      const material = own(new THREE.MeshBasicMaterial({ color, transparent: true }));
      const mesh = new THREE.Mesh(sphere, material);
      mesh.position.set(...node.position);
      const haloMat = own(new THREE.SpriteMaterial({ map: glowTexture, color, transparent: true, opacity: .8, depthWrite: false, blending: THREE.AdditiveBlending }));
      const halo = new THREE.Sprite(haloMat);
      halo.scale.setScalar(6);
      mesh.add(halo);
      nodesGroup.add(mesh);
      nodeMeshes.set(node.id, { mesh, halo, color, node });
    }
    for (const edge of edges) {
      if (edgeMeshes.some(row => row.edge === edge)) continue;
      const from = nodeMeshes.get(edge.from), to = nodeMeshes.get(edge.to);
      if (!from || !to) continue;
      const start = from.mesh.position.clone(), end = to.mesh.position.clone();
      const middle = start.clone().lerp(end, .5);
      middle.z += 2 + start.distanceTo(end) * .05;
      const curve = new THREE.QuadraticBezierCurve3(start, middle, end);
      const geometry = own(new THREE.BufferGeometry().setFromPoints(curve.getPoints(36)));
      const material = own(new THREE.LineBasicMaterial({ color: '#a3a4d0', transparent: true, opacity: .14, depthWrite: false }));
      const line = new THREE.Line(geometry, material);
      edgeGroup.add(line);
      const particle = new THREE.Sprite(own(new THREE.SpriteMaterial({ map: glowTexture, color: '#efdcff', transparent: true, opacity: .8, depthWrite: false, blending: THREE.AdditiveBlending })));
      particle.scale.setScalar(1.3);
      edgeGroup.add(particle);
      edgeMeshes.push({ edge, line, curve, particle, offset: random() });
    }
  }

  function resize() {
    if (stage.hidden || !stage.clientWidth) return;
    width = stage.clientWidth;
    height = stage.clientHeight;
    renderer.setSize(width, height, false);
    const aspect = width / height;
    world.scale.y = aspect < .95 ? 1.65 : 1;
    const desiredHeight = extensions ? 104 : 89;
    const visibleHeight = Math.max(desiredHeight, 119 / aspect) / zoom;
    camera.left = -visibleHeight * aspect / 2;
    camera.right = visibleHeight * aspect / 2;
    camera.top = visibleHeight / 2;
    camera.bottom = -visibleHeight / 2;
    camera.position.y = extensions ? -9 : -3;
    camera.lookAt(0, camera.position.y, 0);
    camera.updateProjectionMatrix();
    dirty = true;
    projectLabels();
  }
  const projected = new THREE.Vector3();
  function projectLabels() {
    labels.style.visibility = "visible";
    world.updateMatrixWorld();
    camera.updateMatrixWorld();
    for (const label of labels.querySelectorAll('[data-select]')) {
      const entry = nodeMeshes.get(label.dataset.select);
      if (!entry) continue;
      entry.mesh.getWorldPosition(projected);
      projected.project(camera);
      const x = (projected.x * .5 + .5) * width;
      const y = (-projected.y * .5 + .5) * height + 9;
      label.style.left = `${x}px`;
      label.style.top = `${y}px`;
      label.style.visibility = x < -35 || x > width + 35 || y < 42 || y > height - 62 ? 'hidden' : 'visible';
    }
  }

  function update(value) {
    current = value;
    paused = value.paused;
    extensions = value.extensions;
    buildTopics(value.topics);
    const visible = new Set(value.topics.map(n => n.id));
    for (const [id, entry] of nodeMeshes) {
      entry.mesh.visible = visible.has(id);
      const dim = value.group !== 'all' && value.group !== entry.node.group;
      const practiced = entry.node.units.some(unitId => value.records[unitId]?.practiced);
      entry.mesh.material.color.set(id === value.selected ? '#ffe0a0' : practiced ? '#91edd6' : '#788496');
      entry.mesh.material.opacity = dim ? .18 : practiced || id === value.selected ? 1 : .4;
      entry.halo.material.color.set(practiced ? '#91edd6' : id === value.selected ? '#ffe0a0' : '#788496');
      entry.halo.material.opacity = dim ? .1 : practiced ? .95 : id === value.selected ? .8 : .18;
      entry.mesh.scale.setScalar(id === value.selected ? 1.4 : 1);
    }
    for (const row of edgeMeshes) {
      row.line.visible = visible.has(row.edge.from) && visible.has(row.edge.to);
      const active = row.edge.from === value.selected || row.edge.to === value.selected;
      const bothPlayed = [row.edge.from, row.edge.to].every(id => nodeMeshes.get(id).node.units.some(unitId => value.records[unitId]?.practiced));
      const inGroup = value.group === 'all' || [row.edge.from, row.edge.to].every(id => nodeMeshes.get(id).node.group === value.group);
      row.line.material.opacity = inGroup ? active ? .62 : bothPlayed ? .38 : .075 : .025;
      row.line.material.color.set(active ? '#dac3ff' : bothPlayed ? '#91dfc5' : '#788496');
      row.particle.material.color.set(bothPlayed ? '#b7f8d5' : '#efdcff');
      row.particle.visible = (active || bothPlayed && inGroup) && row.line.visible && !paused;
    }
    resize();
  }
  function zoomBy(multiplier) { zoom = THREE.MathUtils.clamp(zoom * multiplier, .7, 2.8); resize(); }
  function reset() { zoom = 1; world.rotation.set(0, 0, 0); resize(); }
  const pointers = new Map();
  let previousDistance = 0;
  function pointerDown(event) {
    if (event.target.closest('button') || event.button && event.button !== 0) return;
    stage.setPointerCapture(event.pointerId);
    pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
    previousDistance = 0;
  }
  function pointerMove(event) {
    if (!pointers.has(event.pointerId)) return;
    const before = pointers.get(event.pointerId);
    pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
    if (pointers.size >= 2) {
      const [a, b] = [...pointers.values()];
      const distance = Math.hypot(a.x - b.x, a.y - b.y);
      if (previousDistance > 0) zoomBy(distance / previousDistance);
      previousDistance = distance;
    } else {
      world.rotation.y = THREE.MathUtils.clamp(world.rotation.y + (event.clientX - before.x) * .003, -.5, .5);
      world.rotation.x = THREE.MathUtils.clamp(world.rotation.x + (event.clientY - before.y) * .002, -.35, .35);
      dirty = true;
      projectLabels();
    }
  }
  function pointerUp(event) { pointers.delete(event.pointerId); previousDistance = 0; }
  function wheel(event) { event.preventDefault(); zoomBy(Math.exp(-event.deltaY * .001)); }
  function keyboard(event) {
    if (event.target !== stage) return;
    if (event.key === '+' || event.key === '=') { event.preventDefault(); zoomBy(1.12); }
    if (event.key === '-') { event.preventDefault(); zoomBy(1 / 1.12); }
    if (event.key === 'Home' || event.key === '0') { event.preventDefault(); reset(); }
  }
  const bindings = [['pointerdown', pointerDown], ['pointermove', pointerMove], ['pointerup', pointerUp], ['pointercancel', pointerUp], ['wheel', wheel, { passive: false }], ['keydown', keyboard]];
  for (const args of bindings) stage.addEventListener(...args);
  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(stage);
  function animate(now) {
    if (disposed) return;
    frameId = requestAnimationFrame(animate);
    if (hidden || document.hidden || now - lastFrame < 32 || paused && !dirty) return;
    elapsed += Math.min((now - lastFrame) / 1000, .1);
    lastFrame = now;
    if (!paused) {
      stars.rotation.z = Math.sin(elapsed * .025) * .008;
      starMaterial.opacity = .85 + Math.sin(elapsed * .65) * .1;
      for (const row of edgeMeshes) if (row.particle.visible) row.particle.position.copy(row.curve.getPoint((elapsed * .08 + row.offset) % 1));
    }
    renderer.render(scene, camera);
    dirty = false;
  }
  renderer.domElement.addEventListener('webglcontextlost', event => {
    event.preventDefault();
    document.getElementById('list-view')?.click();
    document.getElementById('map-view').disabled = true;
    document.getElementById('connection-status').textContent += '・3D 已暫停，請用概念清單繼續探索。';
  });
  frameId = requestAnimationFrame(animate);
  resize();
  return {
    revision: THREE.REVISION, update, projectLabels, zoomBy, reset,
    setVisible(visible) { hidden = !visible; if (visible) resize(); },
    dispose() {
      disposed = true;
      cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      for (const args of bindings) stage.removeEventListener(...args);
      for (const resource of resources) resource.dispose?.();
      renderer.dispose();
      renderer.domElement.remove();
    }
  };
}
