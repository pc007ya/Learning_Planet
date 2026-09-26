import * as T from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { blurRadius, lensImage, prismVertices, tracePrism, signedFocal, pointProjection, type LensKind } from './optics-model';

export type OpticsState = { mode: 'lens' | 'prism'; source: 'rocket' | 'point'; kind: LensKind; focal: number; object: number; screen: number; aperture: number; angle: number; exploded: boolean; rays: boolean; view: 'perspective' | 'side' };
export type DragTarget = 'object' | 'screen' | 'focal' | 'angle';
type Path = { points: T.Vector3[]; color: T.Color };
const AXIS = 2.8;
const V = (x: number, y: number, z = 0) => new T.Vector3(x, y, z);
const gold = new T.MeshStandardMaterial({ color: 0xad7941, metalness: .86, roughness: .25 });
const dark = new T.MeshStandardMaterial({ color: 0x17232e, metalness: .78, roughness: .29 });
const silver = new T.MeshStandardMaterial({ color: 0xaabec5, metalness: .88, roughness: .23 });
const rubber = new T.MeshStandardMaterial({ color: 0x101b22, roughness: .85 });
const glass = new T.MeshPhysicalMaterial({ color: 0xa9e7ee, metalness: 0, roughness: .035, transmission: .94, thickness: .75, ior: 1.51, clearcoat: 1, attenuationColor: new T.Color(0x7fe5fa), attenuationDistance: 2.3 });
function mesh(parent: T.Object3D, geometry: T.BufferGeometry, material: T.Material, position = V(0, 0, 0)): T.Mesh<T.BufferGeometry, T.Material> {
  const result = new T.Mesh(geometry, material); result.position.copy(position); result.castShadow = true; result.receiveShadow = true; parent.add(result); return result;
}
function box(parent: T.Object3D, size: number[], position: number[], mat: T.Material = dark, radius = .04): T.Mesh {
  return mesh(parent, new RoundedBoxGeometry(size[0], size[1], size[2], 2, radius), mat, V(position[0], position[1], position[2]));
}
function cylinder(parent: T.Object3D, r: number, h: number, pos: number[], mat = dark, axis = 'y'): T.Mesh {
  const result = mesh(parent, new T.CylinderGeometry(r, r, h, 64), mat, V(pos[0], pos[1], pos[2]));
  if (axis === 'x') result.rotation.z = Math.PI / 2;
  return result;
}
function ring(parent: T.Object3D, r: number, tube: number, x: number, mat: T.Material = gold, arc = Math.PI * 2): T.Mesh {
  const result = mesh(parent, new T.TorusGeometry(r, tube, 12, 96, arc), mat, V(x, 0, 0)); result.rotation.y = Math.PI / 2; return result;
}
function segment(parent: T.Object3D, a: T.Vector3, b: T.Vector3, radius: number, mat: T.Material): T.Mesh {
  const result = mesh(parent, new T.CylinderGeometry(radius, radius, a.distanceTo(b), 6), mat, a.clone().add(b).multiplyScalar(.5));
  result.quaternion.setFromUnitVectors(V(0, 1, 0), b.clone().sub(a).normalize()); result.castShadow = false; return result;
}
function glow(color: T.ColorRepresentation, opacity = 1): T.MeshBasicMaterial { return new T.MeshBasicMaterial({ color, transparent: true, opacity, blending: T.AdditiveBlending, depthWrite: false }); }
function disposeTree(root: T.Object3D): void {
  root.traverse((node) => { if (node instanceof T.Mesh || node instanceof T.Line || node instanceof T.Points) { node.geometry.dispose(); const mats = Array.isArray(node.material) ? node.material : [node.material]; mats.forEach((mat) => { if (![gold, dark, silver, rubber, glass].includes(mat as T.MeshStandardMaterial)) mat.dispose(); }); } });
}

export class OpticsStage {
  readonly renderer: T.WebGLRenderer;
  readonly scene = new T.Scene();
  readonly camera = new T.PerspectiveCamera(39, 1, .1, 110);
  readonly orbit: OrbitControls;
  readonly root = new T.Group();
  private state: OpticsState;
  private readonly lens = new T.Group();
  private readonly lensParts: T.Group[] = [];
  private readonly lensGlass: T.Mesh;
  private readonly concaveGlass = new T.Group();
  private readonly iris = new T.Group();
  private readonly source = new T.Group();
  private readonly rocketSource = new T.Group();
  private readonly pointSource = new T.Group();
  private readonly screen = new T.Group();
  private readonly prism = new T.Group();
  private readonly prismGlass = new T.Group();
  private readonly lamp = new T.Group();
  private readonly rayGroup = new T.Group();
  private readonly focusGroup = new T.Group();
  private readonly hitTargets: T.Object3D[] = [];
  private readonly labels: { element: HTMLElement; at: () => T.Vector3; mode?: 'lens' | 'prism'; show: () => boolean }[] = [];
  private readonly raycaster = new T.Raycaster();
  private readonly pointer = new T.Vector2();
  private drag?: { target: DragTarget; x: number; worldX: number; initial: number };
  private readonly sourceCanvas = document.createElement('canvas');
  private readonly screenCanvas = document.createElement('canvas');
  private readonly screenTexture: T.CanvasTexture;
  private readonly sourceTarget = new T.WebGLRenderTarget(512, 512);
  private readonly preview: HTMLCanvasElement;
  private readonly pulseGeometry = new T.BufferGeometry();
  private readonly pulses: T.Points;
  private paths: Path[] = [];
  private frame = 0;
  private lastFrame = 0;
  private readonly observer: ResizeObserver;
  private readonly onVisibility = () => { if (document.hidden) cancelAnimationFrame(this.frame); else this.animate(performance.now()); };
  private reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  private destroyed = false;

  constructor(private host: HTMLElement, preview: HTMLCanvasElement, state: OpticsState, private onDrag: (target: DragTarget, value: number) => void) {
    this.state = state; this.preview = preview;
    this.renderer = new T.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'high-performance' });
    this.renderer.setPixelRatio(Math.min(devicePixelRatio, 1.7));
    this.renderer.setClearColor(0x09111b);
    this.renderer.toneMapping = T.ACESFilmicToneMapping; this.renderer.toneMappingExposure = 1.15;
    this.renderer.shadowMap.enabled = true; this.renderer.shadowMap.type = T.PCFSoftShadowMap;
    this.renderer.domElement.setAttribute('aria-label', '3D 光學平台：拖動物體或成像屏，拖動鏡頭調焦。空白處可轉動視角。');
    host.append(this.renderer.domElement);
    this.scene.fog = new T.FogExp2(0x0b1421, .023);
    const pmrem = new T.PMREMGenerator(this.renderer);
    const environment = new RoomEnvironment(); this.scene.environment = pmrem.fromScene(environment, .04).texture; environment.dispose(); pmrem.dispose();
    this.scene.add(this.root, new T.HemisphereLight(0xc9e8ff, 0x20232e, 1.6));
    const key = new T.DirectionalLight(0xffe4bd, 3.8); key.position.set(0, 9, 5); key.castShadow = true;
    key.shadow.mapSize.set(2048, 2048); Object.assign(key.shadow.camera, { left: -12, right: 12, top: 8, bottom: -8 }); key.shadow.bias = -.0006; this.scene.add(key);
    const rimLight = new T.DirectionalLight(0x58cdff, 3.4); rimLight.position.set(-5, 5, -5); this.scene.add(rimLight);
    const warm = new T.PointLight(0xffb65c, 28, 18, 2); warm.position.set(6, 4, 3); this.scene.add(warm);
    this.camera.position.set(9.6, 7.2, 17.6);
    this.orbit = new OrbitControls(this.camera, this.renderer.domElement);
    this.orbit.target.set(0, 2.0, 0); this.orbit.enableDamping = true; this.orbit.dampingFactor = .09; this.orbit.enablePan = false;
    this.orbit.minDistance = 13; this.orbit.maxDistance = 28; this.orbit.minPolarAngle = .65; this.orbit.maxPolarAngle = Math.PI / 2.05;
    this.orbit.minAzimuthAngle = -.85; this.orbit.maxAzimuthAngle = 1.08;
    this.makeEnvironment();
    this.makeBench();
    this.root.add(this.lens, this.source, this.screen, this.prism, this.lamp, this.rayGroup, this.focusGroup);
    this.lens.position.y = AXIS;
    this.lensGlass = this.makeLens();
    const profile: T.Vector2[] = [];
    for (let i = 0; i <= 32; i++) { const r = i / 32 * 1.36; profile.push(new T.Vector2(r, .065 + .25 * (r / 1.36) ** 2)); }
    for (let i = 32; i >= 0; i--) { const r = i / 32 * 1.36; profile.push(new T.Vector2(r, -.065 - .25 * (r / 1.36) ** 2)); }
    const concave = mesh(this.concaveGlass, new T.LatheGeometry(profile, 96), glass); concave.rotation.z = -Math.PI / 2; this.lens.add(this.concaveGlass);
    this.makeSource(); this.makePrism(); this.makeLamp();
    this.screenCanvas.width = 768; this.screenCanvas.height = 768;
    this.screenTexture = new T.CanvasTexture(this.screenCanvas); this.screenTexture.colorSpace = T.SRGBColorSpace;
    this.makeScreen(); this.captureObject();
    this.pulseGeometry.setAttribute('position', new T.Float32BufferAttribute(new Float32Array(150 * 3), 3));
    this.pulseGeometry.setAttribute('color', new T.Float32BufferAttribute(new Float32Array(150 * 3), 3));
    this.pulses = new T.Points(this.pulseGeometry, new T.PointsMaterial({ size: .048, vertexColors: true, transparent: true, opacity: .92, blending: T.AdditiveBlending, depthWrite: false }));
    this.pulses.frustumCulled = false; this.scene.add(this.pulses);
    this.addLabel('成像屏', () => V(-this.state.screen, 5.15, 0), 'lens');
    this.addLabel('拖動調焦', () => V(0, 4.8, 0), 'lens');
    this.addLabel('移動物體', () => V(this.state.object, 4.8, 0), 'lens', () => this.state.source === 'rocket');
    this.addLabel('點光源 S', () => V(this.state.object, 4.15, 0), 'lens', () => this.state.source === 'point');
    for (const sign of [-1, 1]) for (const multiple of [1, 2]) this.addLabel(multiple === 1 ? 'F' : '2F', () => V(sign * this.state.focal * multiple, .65, 1.62), 'lens', () => this.state.rays && this.state.source === 'point');
    const currentImage = () => lensImage(this.state.object, signedFocal(this.state.kind, this.state.focal));
    this.addLabel('虛像點 S′', () => { const image = currentImage(); return V(-image.distance, AXIS + .8 * image.magnification + .35, 0); }, 'lens', () => { const image = currentImage(); return this.state.source === 'point' && this.state.rays && !image.real && Number.isFinite(image.distance) && Math.abs(image.distance) < 12; });
    this.addLabel('實像點 S′', () => { const image = currentImage(); return V(-image.distance, AXIS + .8 * image.magnification + .4, 0); }, 'lens', () => { const image = currentImage(); return this.state.source === 'point' && this.state.rays && image.real && image.distance <= this.state.screen + .02; });
    this.addLabel('轉動三稜鏡', () => V(0, 4.8, 0), 'prism');
    this.addLabel('白光', () => V(6.5, 4.1, 0), 'prism');
    this.addLabel('彩色光譜', () => V(-3.5, 4.6, 0), 'prism');
    this.renderer.domElement.addEventListener('pointerdown', this.pointerDown, true);
    this.renderer.domElement.addEventListener('pointermove', this.pointerMove);
    this.renderer.domElement.addEventListener('pointerup', this.pointerUp);
    this.renderer.domElement.addEventListener('pointercancel', this.pointerUp);
    this.observer = new ResizeObserver(() => this.resize()); this.observer.observe(host);
    document.addEventListener('visibilitychange', this.onVisibility);
    this.update(state); this.resize(); this.animate(performance.now());
  }

  private makeEnvironment(): void {
    const floor = new T.MeshStandardMaterial({ color: 0x0d1723, roughness: .36, metalness: .25 });
    box(this.root, [80, .2, 60], [0, -.62, 0], floor);
    box(this.root, [36, 14, .3], [0, 5, -7], new T.MeshStandardMaterial({ color: 0x122331, roughness: .8 }));
    for (let x = -15; x <= 15; x += 3) box(this.root, [.025, 12, .035], [x, 5, -6.81], new T.MeshStandardMaterial({ color: 0x24404f, metalness: .5, roughness: .7 }));
    for (const x of [-11, 11]) {
      box(this.root, [.08, 8, .05], [x, 3.7, -6.7], new T.MeshBasicMaterial({ color: 0x317184 }));
      const halo = new T.PointLight(0x377eb5, 25, 14); halo.position.set(x, 4, -4.7); this.root.add(halo);
    }
    // Background instrument display: an original concentric optical diagram.
    const display = new T.Group(); display.position.set(-6.8, 4.3, -6.6);
    [1, 1.45, 1.85].forEach((r) => { const circle = mesh(display, new T.TorusGeometry(r, .012, 4, 100), glow(0x4fa2b3, .35)); circle.rotation.z = .3; });
    segment(display, V(-2.2, 0, 0), V(2.2, 0, 0), .012, glow(0x4fa2b3, .3)); this.root.add(display);
  }

  private makeBench(): void {
    const bench = new T.MeshStandardMaterial({ color: 0x183343, metalness: .65, roughness: .35 });
    box(this.root, [19.9, .56, 5.35], [0, -.03, 0], dark, .14);
    box(this.root, [19.55, .16, 5.1], [0, .33, 0], bench, .06);
    box(this.root, [18.7, .022, .025], [0, .422, 2.45], glow(0x69d6d9, .8) as unknown as T.MeshStandardMaterial, .003);
    for (const z of [-.75, .75]) {
      box(this.root, [18.8, .19, .2], [0, .5, z], silver, .025);
      box(this.root, [18.8, .08, .27], [0, .45, z], dark, .02);
    }
    const ruler = document.createElement('canvas'); ruler.width = 2048; ruler.height = 96;
    const ctx = ruler.getContext('2d')!; ctx.fillStyle = '#112732'; ctx.fillRect(0, 0, 2048, 96);
    ctx.strokeStyle = '#bdcbd0'; ctx.fillStyle = '#bdcbd0'; ctx.font = '24px monospace'; ctx.textAlign = 'center';
    for (let i = 0; i <= 180; i++) { const x = 24 + i * 2000 / 180; const major = i % 10 === 0; ctx.beginPath(); ctx.moveTo(x, 3); ctx.lineTo(x, major ? 41 : i % 5 === 0 ? 29 : 18); ctx.stroke(); if (major) ctx.fillText(String(i - 90), x, 72); }
    const texture = new T.CanvasTexture(ruler); texture.colorSpace = T.SRGBColorSpace;
    const rulerMesh = mesh(this.root, new T.PlaneGeometry(18.4, .63), new T.MeshStandardMaterial({ map: texture, roughness: .55, metalness: .3 }), V(0, .438, 1.69)); rulerMesh.rotation.x = -Math.PI / 2;
    for (const x of [-9.3, 9.3]) for (const z of [-2.2, 2.2]) { cylinder(this.root, .11, .025, [x, .433, z], silver); box(this.root, [.1, .005, .02], [x, .447, z], dark, .002); }
    for (const x of [-8.7, 8.7]) box(this.root, [.65, .43, 4.5], [x, -.46, 0], rubber, .1);
  }

  private stand(group: T.Group, width = 1.8): void {
    box(group, [width, .23, 2], [0, .68, 0], dark, .07);
    box(group, [width * .75, .11, 1.8], [0, .84, 0], gold, .03);
    for (const z of [-.68, .68]) { cylinder(group, .11, 1.2, [0, 1.42, z], silver); cylinder(group, .16, .16, [0, 1, z], dark); }
    cylinder(group, .23, .3, [0, .8, 1.13], gold, 'x');
  }

  private makeLens(): T.Mesh {
    const stand = new T.Group(); stand.position.y = -AXIS; this.stand(stand, 2); this.lens.add(stand);
    const lensGlass = mesh(this.lens, new T.SphereGeometry(1, 64, 48), glass); lensGlass.scale.set(.3, 1.36, 1.36);
    const edge = ring(this.lens, 1.37, .024, 0, new T.MeshBasicMaterial({ color: 0xb8f3ff, transparent: true, opacity: .6 })); edge.castShadow = false;
    for (const sign of [-1, 1]) {
      const part = new T.Group(); part.userData.sign = sign; this.lensParts.push(part); this.lens.add(part);
      ring(part, 1.48, .105, 0, gold);
      ring(part, 1.59, .092, sign * .13, dark);
      ring(part, 1.46, .027, sign * .2, silver);
      for (let i = 0; i < 64; i++) {
        const a = i / 64 * Math.PI * 2;
        const tooth = box(part, [.23, .065, .075], [sign * .13, Math.cos(a) * 1.66, Math.sin(a) * 1.66], i % 8 === 0 ? gold : dark, .01); tooth.rotation.x = -a;
      }
      for (let i = 0; i < 4; i++) { const a = i * Math.PI / 2 + .4; const screw = cylinder(part, .055, .055, [sign * .25, Math.cos(a) * 1.48, Math.sin(a) * 1.48], silver, 'x'); screw.rotation.x = a; }
    }
    // A cutaway barrel leaves the optical aperture visible.
    for (let i = 0; i < 3; i++) ring(this.lens, 1.6, .04, -.34 + i * .34, dark, Math.PI * 1.08).rotation.x = Math.PI * .55;
    this.lens.add(this.iris); this.iris.position.x = -.48;
    const proxy = mesh(this.lens, new T.SphereGeometry(1.75, 12, 12), new T.MeshBasicMaterial({ visible: false })); proxy.scale.x = .5;
    proxy.userData.action = 'focal'; this.hitTargets.push(proxy);
    return lensGlass;
  }

  private rocket(): T.Group {
    const toy = new T.Group();
    const white = new T.MeshStandardMaterial({ color: 0xfff0ca, roughness: .35, metalness: .15 });
    const coral = new T.MeshStandardMaterial({ color: 0xf47736, roughness: .32, metalness: .15 });
    const aqua = new T.MeshStandardMaterial({ color: 0x0b788d, roughness: .21, metalness: .35 });
    cylinder(toy, .31, 1.5, [0, .15, 0], white);
    mesh(toy, new T.ConeGeometry(.32, .64, 40), coral, V(0, 1.22, 0));
    cylinder(toy, .322, .11, [0, .86, 0], coral);
    cylinder(toy, .33, .2, [0, -.64, 0], aqua);
    for (const x of [-.31, .31]) {
      const porthole = ring(toy, .146, .032, x, gold); porthole.position.y = .38;
      const window = mesh(toy, new T.CircleGeometry(.14, 40), new T.MeshStandardMaterial({ color: 0x27bbda, emissive: 0x08647d, emissiveIntensity: .3, metalness: .3, roughness: .1 }), V(x * 1.02, .38, 0)); window.rotation.y = Math.PI / 2; window.material.side = T.DoubleSide;
    }
    for (let i = 0; i < 3; i++) {
      const fin = new T.Shape(); fin.moveTo(0, -.35); fin.lineTo(.65, -1.05); fin.lineTo(.28, -1.04); fin.lineTo(0, -.72);
      const blade = mesh(toy, new T.ExtrudeGeometry(fin, { depth: .09, bevelEnabled: true, bevelSize: .03, bevelThickness: .025, bevelSegments: 2 }), coral);
      blade.rotation.y = i * Math.PI * 2 / 3; blade.position.z = -.045;
    }
    const island = cylinder(toy, .95, .12, [0, -1.13, 0], new T.MeshStandardMaterial({ color: 0x4f9c76, roughness: .86 })); island.scale.x = .72;
    for (let i = 0; i < 3; i++) {
      const tree = new T.Group(); tree.position.set(.1, -1.02, -.7 + i * .64);
      cylinder(tree, .024, .24, [0, .1, 0], gold);
      mesh(tree, new T.ConeGeometry(.12 + i * .014, .42, 7), new T.MeshStandardMaterial({ color: i % 2 ? 0x8fc69b : 0x258a72, roughness: .75 }), V(0, .32, 0)); toy.add(tree);
    }
    return toy;
  }

  private makeSource(): void {
    this.stand(this.source, 1.4);
    cylinder(this.source, 1.13, .15, [0, 1.47, 0], gold);
    cylinder(this.source, 1.08, .12, [0, 1.59, 0], dark);
    const toy = this.rocket(); toy.position.y = AXIS; this.rocketSource.add(toy); this.source.add(this.rocketSource, this.pointSource);
    cylinder(this.pointSource, .045, 1.94, [0, 2.57, 0], silver);
    cylinder(this.pointSource, .1, .18, [0, AXIS + .63, 0], dark);
    mesh(this.pointSource, new T.SphereGeometry(.085, 24, 16), new T.MeshBasicMaterial({ color: 0xfff2be, toneMapped: false }), V(0, AXIS + .8, 0));
    mesh(this.pointSource, new T.SphereGeometry(.18, 24, 16), glow(0xffbe68, .28), V(0, AXIS + .8, 0));
    const proxy = box(this.source, [1.5, 3.7, 2.2], [0, 2.45, 0], new T.MeshStandardMaterial({ visible: false })); proxy.userData.action = 'object'; this.hitTargets.push(proxy);
  }

  private makeScreen(): void {
    this.stand(this.screen, .9);
    for (const z of [-1.79, 1.79]) box(this.screen, [.14, 4.05, .14], [0, AXIS, z], dark);
    for (const y of [AXIS - 2, AXIS + 2]) box(this.screen, [.14, .13, 3.72], [0, y, 0], dark);
    for (const z of [-1.73, 1.73]) box(this.screen, [.028, 3.89, .035], [.085, AXIS, z], gold, .01);
    const screen = mesh(this.screen, new T.PlaneGeometry(3.45, 3.85), new T.MeshBasicMaterial({ map: this.screenTexture, side: T.DoubleSide }), V(.02, AXIS, 0)); screen.rotation.y = Math.PI / 2; screen.castShadow = false;
    screen.userData.action = 'screen'; this.hitTargets.push(screen);
  }

  private makePrism(): void {
    cylinder(this.prism, 1.9, .23, [0, .67, 0], dark);
    cylinder(this.prism, 1.74, .085, [0, .84, 0], gold);
    cylinder(this.prism, 1.68, .04, [0, .91, 0], dark);
    for (let i = 0; i < 72; i++) {
      const a = i / 72 * Math.PI * 2;
      const tick = box(this.prism, [.018, .018, i % 6 ? .09 : .18], [Math.sin(a) * 1.57, .939, Math.cos(a) * 1.57], silver, .002); tick.rotation.y = a;
    }
    const prismShape = new T.Shape(); const vertices = prismVertices(0);
    prismShape.moveTo(vertices[0].x, vertices[0].y); vertices.slice(1).forEach((p) => prismShape.lineTo(p.x, p.y)); prismShape.closePath();
    const geometry = new T.ExtrudeGeometry(prismShape, { depth: 1.55, bevelEnabled: true, bevelSize: .025, bevelThickness: .025, bevelSegments: 3 });
    geometry.translate(0, 0, -.775);
    const prismMaterial = glass.clone(); prismMaterial.transparent = true; prismMaterial.opacity = .35; prismMaterial.transmission = .65; prismMaterial.depthWrite = false;
    const prism = mesh(this.prismGlass, geometry, prismMaterial); prism.scale.x = -1;
    const edges = new T.LineSegments(new T.EdgesGeometry(geometry, 25), new T.LineBasicMaterial({ color: 0xaeebf4, transparent: true, opacity: .66 })); edges.scale.x = -1; this.prismGlass.add(edges);
    this.prismGlass.position.y = AXIS; this.prism.add(this.prismGlass);
    const proxy = mesh(this.prism, new T.SphereGeometry(2, 16, 12), new T.MeshBasicMaterial({ visible: false }), V(0, AXIS, 0)); proxy.userData.action = 'angle'; this.hitTargets.push(proxy);
  }

  private makeLamp(): void {
    this.stand(this.lamp, 1.4);
    cylinder(this.lamp, .55, 1.6, [0, AXIS + .46, 0], dark, 'x');
    cylinder(this.lamp, .59, .1, [-.8, AXIS + .46, 0], gold, 'x');
    const front = mesh(this.lamp, new T.CircleGeometry(.48, 40), glow(0xe8f8ff), V(-.865, AXIS + .46, 0)); front.rotation.y = -Math.PI / 2;
    for (let i = 0; i < 12; i++) { const a = i / 12 * Math.PI * 2; box(this.lamp, [.75, .04, .09], [.22, AXIS + .46 + Math.cos(a) * .56, Math.sin(a) * .56], rubber, .01).rotation.x = -a; }
    this.lamp.position.x = 7;
  }

  private captureObject(): void {
    const sourceScene = new T.Scene(); sourceScene.add(this.rocket(), new T.HemisphereLight(0xffffff, 0x9facb1, 3));
    const light = new T.DirectionalLight(0xffe5b4, 4); light.position.set(-3, 4, 5); sourceScene.add(light);
    const camera = new T.OrthographicCamera(-1.75, 1.75, 1.75, -1.75, .1, 20); camera.position.set(-8, 0, 0); camera.lookAt(0, 0, 0);
    this.renderer.setRenderTarget(this.sourceTarget); this.renderer.setClearColor(0, 0); this.renderer.render(sourceScene, camera);
    const pixels = new Uint8Array(512 * 512 * 4); this.renderer.readRenderTargetPixels(this.sourceTarget, 0, 0, 512, 512, pixels);
    this.sourceCanvas.width = 512; this.sourceCanvas.height = 512; const ctx = this.sourceCanvas.getContext('2d')!; const image = ctx.createImageData(512, 512);
    for (let row = 0; row < 512; row++) image.data.set(pixels.subarray((511 - row) * 2048, (512 - row) * 2048), row * 2048);
    ctx.putImageData(image, 0, 0); this.renderer.setRenderTarget(null); this.renderer.setClearColor(0x09111b, 1); disposeTree(sourceScene);
  }

  private drawProjection(): void {
    const ctx = this.screenCanvas.getContext('2d')!; const size = 768;
    const point = this.state.mode === 'lens' && this.state.source === 'point';
    ctx.clearRect(0, 0, size, size); ctx.fillStyle = this.state.mode === 'lens' && !point ? '#e6e9d9' : '#111c27'; ctx.fillRect(0, 0, size, size);
    ctx.strokeStyle = this.state.mode === 'lens' ? '#c6cebf' : '#253342'; ctx.lineWidth = 1;
    for (let i = 1; i < 12; i++) { ctx.beginPath(); ctx.moveTo(i * 64, 0); ctx.lineTo(i * 64, size); ctx.moveTo(0, i * 64); ctx.lineTo(size, i * 64); ctx.stroke(); }
    if (point) {
      // A point source projects a blur disk even when there is no real image.
      const f = signedFocal(this.state.kind, this.state.focal);
      const projection = pointProjection(this.state.object, f, this.state.screen, .8, this.state.aperture);
      const radius = Math.max(12, projection.radius * size / 3.85);
      const y = size / 2 - projection.height * size / 3.85;
      const gradient = ctx.createRadialGradient(size / 2, y, 0, size / 2, y, radius);
      const brightness = Math.max(.1, Math.min(1, 24 / radius));
      gradient.addColorStop(0, `rgba(255,240,174,${brightness})`); gradient.addColorStop(.85, `rgba(255,199,99,${brightness * .65})`); gradient.addColorStop(1, 'rgba(255,180,70,0)');
      ctx.fillStyle = gradient; ctx.beginPath(); ctx.arc(size / 2, y, radius, 0, Math.PI * 2); ctx.fill();
    } else if (this.state.mode === 'lens') {
      const focal = signedFocal(this.state.kind, this.state.focal);
      const image = lensImage(this.state.object, focal);
      if (image.real) {
        const blur = blurRadius(this.state.object, focal, this.state.screen, this.state.aperture);
        const magnification = this.state.screen / this.state.object;
        const extent = 768 * magnification;
        ctx.save(); ctx.translate(size / 2, size / 2); ctx.rotate(Math.PI); ctx.filter = `blur(${Math.min(105, blur * 768 / 3.85)}px)`;
        ctx.globalAlpha = Math.max(.25, Math.min(1, this.state.aperture / .8)); ctx.drawImage(this.sourceCanvas, -extent / 2, -extent / 2, extent, extent); ctx.restore();
      }
    } else {
      const vertices = prismVertices(this.state.angle);
      for (let i = 0; i < 41; i++) {
        const color = new T.Color().setHSL(.74 * i / 40, 1, .61);
        const trace = tracePrism({ x: -6.1, y: .46 }, vertices, 1.505 + .045 * i / 40, 3.5);
        if (!trace.hitScreen) continue;
        const end = trace.points.at(-1)!; const y = 384 - (end.y + .3) * 768 / 3.85;
        ctx.fillStyle = `#${color.getHexString()}`; ctx.shadowColor = ctx.fillStyle; ctx.shadowBlur = 3; ctx.fillRect(280, y - 2, 208, 4);
      }
      ctx.shadowBlur = 0;
    }
    this.screenTexture.needsUpdate = true;
    this.preview.width = 384; this.preview.height = 300;
    const preview = this.preview.getContext('2d')!; preview.clearRect(0, 0, 384, 300); preview.drawImage(this.screenCanvas, 0, 0, 384, 300);
  }

  private updateIris(): void {
    disposeTree(this.iris); this.iris.clear();
    const opening = this.state.aperture;
    const washer = mesh(this.iris, new T.RingGeometry(opening, 1.37, 64), dark); washer.rotation.y = Math.PI / 2; washer.material.side = T.DoubleSide;
    for (let i = 0; i < 8; i++) { const a = i * Math.PI / 4; const p1 = V(.01, Math.cos(a) * opening, Math.sin(a) * opening); const p2 = V(.01, Math.cos(a + .48) * 1.36, Math.sin(a + .48) * 1.36); segment(this.iris, p1, p2, .009, silver); }
  }

  private addPath(points: T.Vector3[], color: T.ColorRepresentation, opacity = .4): void {
    const c = new T.Color(color); this.paths.push({ points, color: c });
    const geometry = new T.BufferGeometry().setFromPoints(points);
    const line = new T.Line(geometry, new T.LineBasicMaterial({ color: c, transparent: true, opacity, toneMapped: false, depthTest: this.state.mode === 'lens', depthWrite: false })); line.renderOrder = 5; this.rayGroup.add(line);
  }

  private makeRays(): void {
    disposeTree(this.rayGroup); this.rayGroup.clear(); disposeTree(this.focusGroup); this.focusGroup.clear(); this.paths = [];
    if (this.state.mode === 'lens') {
      const { object: u, screen: s, aperture: aperture } = this.state;
      const f = signedFocal(this.state.kind, this.state.focal);
      const colors = [0xffbe7a, 0x82e5ff, 0x99f4d5];
      const point = this.state.source === 'point';
      const sources = point ? [V(u, AXIS + .8, 0)] : [V(u, AXIS + 1.44, 0), V(u, AXIS + .38, 0), V(u, AXIS - .9, .4)];
      sources.forEach((source, index) => {
        for (let ringIndex = 0; ringIndex < 2; ringIndex++) for (let i = 0; i < 18; i++) {
          const angle = i * Math.PI * 2 / 18; const r = aperture * (ringIndex ? .96 : .47);
          const y = Math.sin(angle) * r, z = Math.cos(angle) * r;
          const endY = y + ((y - (source.y - AXIS)) / u - y / f) * s;
          const endZ = z + ((z - source.z) / u - z / f) * s;
          this.addPath([source, V(0, AXIS + y, z), V(-s, AXIS + endY, endZ)], colors[index], ringIndex ? .48 : .2);
        }
      });
      const image = lensImage(u, f);
      if (point) {
      const axis = new T.Line(new T.BufferGeometry().setFromPoints([V(-9.3, AXIS), V(9.3, AXIS)]), new T.LineDashedMaterial({ color: 0xc1d4df, dashSize: .12, gapSize: .12, transparent: true, opacity: .35 })); axis.computeLineDistances(); this.focusGroup.add(axis);
      // Two principal rays: parallel to the axis and through the optical centre.
      const h = .8, source = V(u, AXIS + h, 0);
      const intercepts = [h, 0];
      intercepts.forEach((y, i) => {
        const endY = y + ((y - h) / u - y / f) * s;
        if (Math.abs(y) > aperture) return;
        const hit = V(0, AXIS + y, 0);
        this.addPath([source, hit, V(-s, AXIS + endY, 0)], i === 0 ? 0xffbc64 : 0x7defff, 1);
        if (!image.real && Number.isFinite(image.distance) && Math.abs(image.distance) < 12) {
          const extension = new T.Line(new T.BufferGeometry().setFromPoints([hit, V(-image.distance, AXIS + h * image.magnification, 0)]), new T.LineDashedMaterial({ color: i === 0 ? 0xffbc64 : 0x7defff, dashSize: .12, gapSize: .1, transparent: true, opacity: .9, depthTest: false })); extension.computeLineDistances(); extension.renderOrder = 6; this.focusGroup.add(extension);
        }
      });
      if (Number.isFinite(image.distance) && Math.abs(image.distance) <= 12 && (!image.real || image.distance <= s + .02)) {
        const imagePoint = V(-image.distance, AXIS + h * image.magnification, 0);
        mesh(this.focusGroup, new T.SphereGeometry(.065, 20, 12), new T.MeshBasicMaterial({ color: image.real ? 0xc5faff : 0xeeb2fa, transparent: true, opacity: image.real ? 1 : .65, toneMapped: false }), imagePoint);
        mesh(this.focusGroup, new T.SphereGeometry(.14, 20, 12), glow(image.real ? 0x7ce5fa : 0xeea0ff, .13), imagePoint);
      }
      }
      if (image.real && image.distance < 10) {
        const focusMaterial = new T.MeshBasicMaterial({ color: 0x7aebdc, transparent: true, opacity: .055, side: T.DoubleSide, depthWrite: false });
        const plane = mesh(this.focusGroup, new T.PlaneGeometry(3.3, 3.8), focusMaterial, V(-image.distance, AXIS, 0)); plane.rotation.y = Math.PI / 2;
        for (const z of [-1.65, 1.65]) segment(this.focusGroup, V(-image.distance, .9, z), V(-image.distance, 4.7, z), .008, glow(0x8df4e4, .38));
      }
      // Focal positions on the rail, with independent object and screen distances.
      for (const sign of [-1, 1]) for (const multiple of point ? [1, 2] : [1]) {
        const x = sign * Math.abs(f) * multiple;
        const mark = mesh(this.focusGroup, new T.TorusGeometry(.13, .022, 8, 32), glow(multiple === 1 ? 0xffcd84 : 0x95dfdc, .9), V(x, .64, 1.23)); mark.rotation.x = -Math.PI / 2;
        if (point) { const tick = new T.Line(new T.BufferGeometry().setFromPoints([V(x, AXIS - .12), V(x, AXIS + .12)]), new T.LineBasicMaterial({ color: 0xffdc9c })); this.focusGroup.add(tick); }
      }
    } else {
      const vertices = prismVertices(this.state.angle);
      for (let i = 0; i < 13; i++) {
        const color = new T.Color().setHSL(.74 * i / 12, 1, .56);
        const trace = tracePrism({ x: -6.1, y: .46 }, vertices, 1.505 + .045 * i / 12, 3.5);
        const points = trace.points.map((p) => V(-p.x, AXIS + p.y, .08));
        if (i === 0) { this.addPath(points.slice(0, 2), 0xebf9ff, 1); segment(this.rayGroup, points[0], points[1], .019, glow(0xdff4ff, .45)); }
        if (trace.entered) this.addPath(points.slice(1), color, .88);
      }
      // A narrow white incident beam gives the light a visible volume.
    }
    this.rayGroup.visible = this.state.rays; this.focusGroup.visible = this.state.rays;
  }

  update(state: OpticsState): void {
    const viewChanged = this.state.view !== state.view;
    this.state = { ...state };
    this.source.position.x = state.object; this.source.visible = state.mode === 'lens'; this.lens.visible = state.mode === 'lens';
    this.rocketSource.visible = state.source === 'rocket'; this.pointSource.visible = state.source === 'point';
    this.screen.position.set(state.mode === 'lens' ? -state.screen : -3.5, state.mode === 'lens' ? 0 : -.3, 0);
    this.prism.visible = state.mode === 'prism'; this.lamp.visible = state.mode === 'prism';
    this.prismGlass.rotation.z = -state.angle * Math.PI / 180;
    this.lensGlass.scale.x = .65 / state.focal + .06;
    this.lensGlass.visible = state.kind === 'convex'; this.concaveGlass.visible = state.kind === 'concave';
    this.concaveGlass.scale.x = .7 + .9 / state.focal;
    this.lensParts.forEach((part) => { part.userData.targetX = part.userData.sign * (state.exploded ? .92 : .27); part.rotation.x = (state.focal - 3) * .9; });
    if (viewChanged) this.setView(state.view);
    this.updateIris(); this.makeRays(); this.drawProjection();
  }

  setView(view: OpticsState['view']): void {
    this.camera.position.copy(view === 'side' ? V(.02, 4.1, 22.5) : V(9.6, 7.2, 17.6)); this.orbit.target.set(0, 2, 0); this.orbit.update();
  }

  private addLabel(text: string, at: () => T.Vector3, mode?: 'lens' | 'prism', show = () => true): void {
    const element = document.createElement('div'); element.className = 'object-label'; element.textContent = text; this.host.append(element); this.labels.push({ element, at, mode, show });
  }

  private resize(): void {
    const width = this.host.clientWidth, height = this.host.clientHeight; this.renderer.setSize(width, height, false);
    this.camera.aspect = width / height;
    // Preserve horizontal room for all three instruments on 4:3 tablets.
    this.camera.fov = T.MathUtils.clamp(T.MathUtils.radToDeg(2 * Math.atan(Math.tan(T.MathUtils.degToRad(39 / 2)) * (16 / 9) / this.camera.aspect)), 35, 65);
    this.camera.updateProjectionMatrix();
  }

  private setPointer(event: PointerEvent): void {
    const rect = this.renderer.domElement.getBoundingClientRect(); this.pointer.set((event.clientX - rect.left) / rect.width * 2 - 1, -(event.clientY - rect.top) / rect.height * 2 + 1); this.raycaster.setFromCamera(this.pointer, this.camera);
  }
  private pointerDown = (event: PointerEvent): void => {
    this.setPointer(event);
    const visible = this.hitTargets.filter((target) => { let node: T.Object3D | null = target; while (node) { if (!node.visible) return false; node = node.parent; } return true; });
    const hit = this.raycaster.intersectObjects(visible, false)[0]; if (!hit) return;
    const target = hit.object.userData.action as DragTarget;
    if (target === 'screen' && this.state.mode === 'prism') return;
    this.orbit.enabled = false; event.stopImmediatePropagation();
    this.drag = { target, x: event.clientX, worldX: hit.point.x, initial: target === 'focal' ? this.state.focal : target === 'angle' ? this.state.angle : this.state[target] };
    this.renderer.domElement.setPointerCapture(event.pointerId); this.renderer.domElement.style.cursor = 'grabbing';
  };
  private pointerMove = (event: PointerEvent): void => {
    if (!this.drag) return;
    const { target, x, worldX, initial } = this.drag;
    if (target === 'focal') this.onDrag(target, T.MathUtils.clamp(initial + (event.clientX - x) * .012, 2, 4.5));
    else if (target === 'angle') this.onDrag(target, T.MathUtils.clamp(initial + (event.clientX - x) * .2, -30, 30));
    else {
      this.setPointer(event); const point = new T.Vector3();
      this.raycaster.ray.intersectPlane(new T.Plane(V(0, 1, 0), -AXIS), point);
      const delta = point.x - worldX;
      this.onDrag(target, target === 'object' ? T.MathUtils.clamp(initial + delta, 1, 9) : T.MathUtils.clamp(initial - delta, 2, 9.2));
    }
  };
  private pointerUp = (): void => { this.drag = undefined; this.orbit.enabled = true; this.renderer.domElement.style.cursor = 'grab'; };

  private animate = (time: number): void => {
    if (this.destroyed || document.hidden) return;
    this.frame = requestAnimationFrame(this.animate);
    if (time - this.lastFrame < 32) return; this.lastFrame = time;
    this.orbit.update();
    this.lensParts.forEach((part) => { part.position.x = T.MathUtils.lerp(part.position.x, part.userData.targetX, this.reducedMotion ? 1 : .16); });
    const positions = this.pulseGeometry.getAttribute('position') as T.BufferAttribute;
    const colors = this.pulseGeometry.getAttribute('color') as T.BufferAttribute;
    this.pulses.visible = this.state.rays && !this.reducedMotion;
    const count = Math.min(150, this.paths.length * 2); this.pulseGeometry.setDrawRange(0, count);
    for (let i = 0; i < count; i++) {
      const path = this.paths[i % this.paths.length]; if (!path) continue;
      const lengths = path.points.slice(1).map((p, j) => p.distanceTo(path.points[j])); const total = lengths.reduce((a, b) => a + b, 0);
      let along = ((time * .00023 + i * .137) % 1) * total; let point = path.points[0];
      for (let j = 0; j < lengths.length; j++) { if (along <= lengths[j]) { point = path.points[j].clone().lerp(path.points[j + 1], along / lengths[j]); break; } along -= lengths[j]; }
      positions.setXYZ(i, point.x, point.y, point.z); colors.setXYZ(i, path.color.r, path.color.g, path.color.b);
    }
    positions.needsUpdate = true; colors.needsUpdate = true;
    this.labels.forEach(({ element, at, mode, show }) => {
      element.hidden = mode !== this.state.mode || !show(); if (element.hidden) return;
      const p = at().project(this.camera); element.hidden = p.z > 1;
      element.style.left = `${(p.x * .5 + .5) * this.host.clientWidth}px`; element.style.top = `${(-p.y * .5 + .5) * this.host.clientHeight}px`;
    });
    this.renderer.render(this.scene, this.camera);
  };

  dispose(): void {
    this.destroyed = true; cancelAnimationFrame(this.frame); this.observer.disconnect(); this.orbit.dispose();
    document.removeEventListener('visibilitychange', this.onVisibility); disposeTree(this.scene); this.sourceTarget.dispose(); this.screenTexture.dispose(); this.scene.environment?.dispose(); this.renderer.dispose();
  }
}
