import * as T from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { EARTH_ORBIT_ASSETS } from '../modules/earth-orbit/assets';
import { MoonLabStage } from './moon-lab-stage';
import { MOON_PHASES, moonPosition, moonEarthSpin } from './moon-lab-model';
import { RAD, SEASONS, TAIWAN, TAU, earthSpin, geographicNormal, sunDirection, wrap, type EarthLabState } from './earth-lab-model';

const V = (x = 0, y = 0, z = 0) => new T.Vector3(x, y, z);
const vertex = `varying vec2 vUv; varying vec3 vNormal; varying vec3 vWorld;
void main(){vUv=uv;vNormal=normalize(mat3(modelMatrix)*normal);vec4 world=modelMatrix*vec4(position,1.);vWorld=world.xyz;gl_Position=projectionMatrix*viewMatrix*world;}`;
const earthFragment = `uniform sampler2D surface;uniform vec3 sun;varying vec2 vUv;varying vec3 vNormal;varying vec3 vWorld;
void main(){vec3 n=normalize(vNormal);float d=dot(n,sun);vec3 tex=texture2D(surface,vUv).rgb;tex=pow(tex,vec3(2.2));
float daylight=smoothstep(-.025,.055,d);vec3 base=tex*(.018+daylight*(.3+max(d,0.)*.9));
vec3 view=normalize(cameraPosition-vWorld);float rim=pow(1.-max(dot(n,view),0.),3.5);base+=vec3(.06,.26,.52)*rim*(.15+.85*daylight);
float water=clamp((tex.b-tex.r)*6.,0.,1.);base+=vec3(.65,.75,.7)*pow(max(dot(reflect(-sun,n),view),0.),60.)*water*.4;
gl_FragColor=vec4(base,1.);
#include <tonemapping_fragment>
#include <colorspace_fragment>
}`;
const atmosphereFragment = `uniform vec3 sun;varying vec3 vNormal;varying vec3 vWorld;
void main(){vec3 n=normalize(vNormal);vec3 view=normalize(cameraPosition-vWorld);float edge=pow(1.-abs(dot(n,view)),4.);float day=smoothstep(-.35,.5,dot(n,sun));gl_FragColor=vec4(mix(vec3(.10,.18,.38),vec3(.20,.65,1.),day),edge*.48);}`;
const sunFragment = `varying vec3 vNormal;varying vec3 vWorld;
float hash(vec3 p){return fract(sin(dot(p,vec3(127.1,311.7,74.7)))*43758.5453);}
float noise(vec3 p){vec3 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(mix(hash(i),hash(i+vec3(1,0,0)),f.x),mix(hash(i+vec3(0,1,0)),hash(i+vec3(1,1,0)),f.x),f.y),mix(mix(hash(i+vec3(0,0,1)),hash(i+vec3(1,0,1)),f.x),mix(hash(i+vec3(0,1,1)),hash(i+vec3(1,1,1)),f.x),f.y),f.z);}
void main(){vec3 n=normalize(vNormal);float p=noise(n*16.)*.5+noise(n*38.)*.3+noise(n*85.)*.2;float edge=pow(max(dot(n,normalize(cameraPosition-vWorld)),0.),.4);vec3 col=mix(vec3(1.,.29,.035),vec3(1.,.89,.49),edge);gl_FragColor=vec4(col*(.7+p*.4),1.);}`;

function line(points: T.Vector3[], color: number, opacity = .6, dashed = false): T.Line {
  const mat = dashed ? new T.LineDashedMaterial({ color, transparent: true, opacity, dashSize: .12, gapSize: .1 }) : new T.LineBasicMaterial({ color, transparent: true, opacity });
  const obj = new T.Line(new T.BufferGeometry().setFromPoints(points), mat); obj.computeLineDistances(); return obj;
}
function circle(radius: number, y = 0): T.Vector3[] { return Array.from({ length: 181 }, (_, i) => V(Math.cos(i / 180 * TAU) * radius, y, Math.sin(i / 180 * TAU) * radius)); }
function dispose(root: T.Object3D): void {
  root.traverse(node => { if (node instanceof T.Mesh || node instanceof T.Line || node instanceof T.Points || node instanceof T.Sprite) { node.geometry?.dispose(); const mats = Array.isArray(node.material) ? node.material : [node.material]; mats.forEach(m => m.dispose()); } });
}
type Label = { element: HTMLElement; point: () => T.Vector3; show: () => boolean; offset: { x: number; y: number } };

export class EarthLabStage {
  readonly renderer: T.WebGLRenderer;
  readonly camera = new T.PerspectiveCamera(38, 1, .1, 250);
  readonly scene = new T.Scene();
  readonly orbit: OrbitControls;
  private readonly earthRoot = new T.Group();
  private readonly tiltRoot = new T.Group();
  private readonly spinRoot = new T.Group();
  private readonly guideRoot = new T.Group();
  private readonly globe: T.Mesh<T.SphereGeometry, T.ShaderMaterial>;
  private readonly atmosphere: T.Mesh<T.SphereGeometry, T.ShaderMaterial>;
  private readonly sunRoot = new T.Group();
  private readonly yearRoot = new T.Group();
  private readonly rays = new T.Group();
  private readonly terminator: T.Line;
  private readonly marker = new T.Group();
  private readonly axis: T.Line;
  private readonly labels: Label[] = [];
  private readonly sunVector = V(1, 0, 0);
  private readonly earthCenter = V();
  private readonly observer: ResizeObserver;
  private readonly raycaster = new T.Raycaster();
  private readonly ndc = new T.Vector2();
  private readonly rayMaterial = new T.LineBasicMaterial({ color: 0xffd599, transparent: true, opacity: .34 });
  private readonly rayGeometry = new T.BufferGeometry();
  private readonly lightPaths: T.LineSegments;
  private readonly texture: T.Texture;
  private readonly lunar: MoonLabStage;
  private radius = 2.35;
  private state: EarthLabState;
  private frame = 0;
  private lastTime = 0;
  private motionUntil = 0;
  private destroyed = false;
  private drag?: { pointer: number; x: number; hour: number };
  private topView = false;
  private readonly onVisibility = () => { if (document.hidden) { cancelAnimationFrame(this.frame); this.frame = 0; } else { this.lastTime = 0; this.wake(); } };
  private readonly onControlChange = () => this.wake();

  constructor(private host: HTMLElement, texture: T.Texture, moonTexture: T.Texture, state: EarthLabState, private onDrag: (kind: 'hour' | 'season' | 'moonPhase', value: number) => void, private onTick: (dt: number) => void) {
    this.texture = texture; this.state = state;
    this.renderer = new T.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
    this.renderer.setPixelRatio(Math.min(devicePixelRatio, 1.8)); this.renderer.setClearColor(0x060d1b);
    this.renderer.toneMapping = T.ACESFilmicToneMapping; this.renderer.toneMappingExposure = 1.12;
    const canvas = this.renderer.domElement; canvas.tabIndex = 0; canvas.setAttribute('role', 'img'); canvas.setAttribute('aria-label', '互動地球：拖曳地球改變時間或公轉位置；空白處旋轉視角；方向鍵調整，空白鍵播放或暫停。'); host.append(canvas);
    this.orbit = new OrbitControls(this.camera, canvas); this.orbit.enablePan = false; this.orbit.enableDamping = true; this.orbit.dampingFactor = .1; this.orbit.minPolarAngle = .05; this.orbit.maxPolarAngle = Math.PI * .83;
    this.orbit.addEventListener('change', this.onControlChange);
    const surface = new T.ShaderMaterial({ vertexShader: vertex, fragmentShader: earthFragment, uniforms: { surface: { value: texture }, sun: { value: this.sunVector } } });
    this.globe = new T.Mesh(new T.SphereGeometry(1, 96, 64), surface);
    this.atmosphere = new T.Mesh(new T.SphereGeometry(1.032, 64, 48), new T.ShaderMaterial({ vertexShader: vertex, fragmentShader: atmosphereFragment, uniforms: { sun: { value: this.sunVector } }, transparent: true, blending: T.AdditiveBlending, depthWrite: false }));
    this.earthRoot.add(this.tiltRoot, this.atmosphere); this.tiltRoot.add(this.spinRoot, this.guideRoot); this.spinRoot.add(this.globe, this.marker); this.scene.add(this.earthRoot, this.yearRoot, this.sunRoot, this.rays);
    this.axis = line([V(0, -1.3), V(0, 1.3)], 0xb1f2dc, .95); this.guideRoot.add(this.axis);
    this.guideRoot.add(line(circle(1.009), 0x7ce3ed, .52));
    for (const latitude of [-66.5, -23.5, 23.5, 66.5]) this.guideRoot.add(line(circle(Math.cos(latitude * RAD) * 1.009, Math.sin(latitude * RAD) * 1.009), 0x7facc9, .28, true));
    const north = new T.Mesh(new T.ConeGeometry(.028, .10, 12), new T.MeshBasicMaterial({ color: 0xb1f2dc })); north.position.y = 1.35; this.guideRoot.add(north);
    // Taiwan location is attached to the rotating geographic sphere, not the camera.
    const at = V(...geographicNormal(TAIWAN.latitude, TAIWAN.longitude, 0, 0));
    this.marker.position.copy(at.clone().multiplyScalar(1.02)); this.marker.quaternion.setFromUnitVectors(V(0, 0, 1), at);
    const pin = new T.Mesh(new T.SphereGeometry(.023, 16, 12), new T.MeshBasicMaterial({ color: 0xffd68e })); this.marker.add(pin);
    const halo = new T.Mesh(new T.RingGeometry(.035, .047, 36), new T.MeshBasicMaterial({ color: 0xffd68e, side: T.DoubleSide, transparent: true, opacity: .8 })); this.marker.add(halo);
    this.terminator = line(circle(1.011), 0xffd69a, .52); this.earthRoot.add(this.terminator);
    this.lightPaths = new T.LineSegments(this.rayGeometry, this.rayMaterial); this.rays.add(this.lightPaths);
    this.makeSun(); this.makeYear(); this.makeStars();
    this.lunar = new MoonLabStage(moonTexture, document.querySelector<HTMLElement>('#moon-view')!); this.scene.add(this.lunar.root);
    MOON_PHASES.forEach(p => this.label(p.label, () => V(...moonPosition(p.angle, 6)), () => this.state.mode === 'moon' && this.state.guides && Math.abs(Math.atan2(Math.sin(this.state.moonPhase - p.angle), Math.cos(this.state.moonPhase - p.angle))) > .18));
    this.label('月球 · 拖動', () => this.lunar.moon.position.clone().add(V(0, 1.05)), () => this.state.mode === 'moon', true);
    this.label('地球', () => V(0, -1.8), () => this.state.mode === 'moon');
    this.label('臺灣', () => this.marker.getWorldPosition(V()), () => this.state.mode !== 'year' && this.markerVisible(), true, { x: 42, y: -18 });
    this.label('N · 地軸', () => this.tiltRoot.localToWorld(V(0, 1.45, 0)), () => this.state.guides && this.state.mode !== 'moon');
    this.label('S', () => this.tiltRoot.localToWorld(V(0, -1.4, 0)), () => this.state.guides && this.state.mode !== 'moon');
    this.label('太陽光', () => this.state.mode === 'moon' ? V(4, .4, 2.6) : this.state.mode === 'year' ? V(0, 1.75, 0) : this.sunVector.clone().multiplyScalar(6), () => this.state.mode !== 'moon' || this.state.rays, true);
    this.observer = new ResizeObserver(() => this.resize()); this.observer.observe(host);
    canvas.addEventListener('pointerdown', this.pointerDown, true); canvas.addEventListener('pointermove', this.pointerMove); canvas.addEventListener('pointerup', this.pointerUp); canvas.addEventListener('pointercancel', this.pointerUp); canvas.addEventListener('keydown', this.keyDown);
    document.addEventListener('visibilitychange', this.onVisibility);
    this.update(state); this.home(); this.resize(); this.wake();
  }
  static async create(host: HTMLElement, state: EarthLabState, onDrag: (kind: 'hour' | 'season' | 'moonPhase', value: number) => void, onTick: (dt: number) => void): Promise<EarthLabStage> {
    const [texture, moonTexture] = await Promise.all([EARTH_ORBIT_ASSETS.earthSurface, './images/science/earth-lab/v1/moon-lroc-2k.jpg'].map(path => new T.TextureLoader().loadAsync(path)));
    // Custom shader explicitly linearizes the inherited image, hence no automatic sRGB decode.
    texture.colorSpace = T.NoColorSpace; texture.anisotropy = 4;
    moonTexture.colorSpace = T.NoColorSpace; moonTexture.anisotropy = 4;
    return new EarthLabStage(host, texture, moonTexture, state, onDrag, onTick);
  }
  private makeSun(): void {
    const sun = new T.Mesh(new T.SphereGeometry(1.18, 64, 40), new T.ShaderMaterial({ vertexShader: vertex, fragmentShader: sunFragment })); this.sunRoot.add(sun);
    const c = document.createElement('canvas'); c.width = c.height = 128; const ctx = c.getContext('2d')!;
    const gradient = ctx.createRadialGradient(64, 64, 18, 64, 64, 64); gradient.addColorStop(0, '#ffda9daa'); gradient.addColorStop(.4, '#ffb25748'); gradient.addColorStop(1, '#ff9c3300'); ctx.fillStyle = gradient; ctx.fillRect(0, 0, 128, 128);
    const texture = new T.CanvasTexture(c); const glow = new T.Sprite(new T.SpriteMaterial({ map: texture, color: 0xffc284, blending: T.AdditiveBlending, transparent: true, depthWrite: false })); glow.scale.setScalar(7); this.sunRoot.add(glow);
  }
  private makeYear(): void {
    this.yearRoot.add(line(circle(8), 0x86bbd1, .52), line(circle(8.2), 0x26435c, .4));
    const plate = new T.Mesh(new T.RingGeometry(7.91, 8.09, 180), new T.MeshBasicMaterial({ color: 0x264e6b, side: T.DoubleSide, transparent: true, opacity: .22 })); plate.rotation.x = -Math.PI / 2; this.yearRoot.add(plate);
    for (let i = 0; i < 72; i++) { const a = i / 72 * TAU; this.yearRoot.add(line([V(Math.cos(a) * 8.35, 0, Math.sin(a) * 8.35), V(Math.cos(a) * (i % 6 ? 8.44 : 8.64), 0, Math.sin(a) * (i % 6 ? 8.44 : 8.64))], 0x7893a4, i % 6 ? .25 : .55)); }
    SEASONS.forEach(s => {
      const pos = V(...sunDirection(s.angle)).multiplyScalar(-8);
      const tick = new T.Mesh(new T.SphereGeometry(.065, 12, 8), new T.MeshBasicMaterial({ color: 0x8abcc4 })); tick.position.copy(pos); this.yearRoot.add(tick);
      this.label(`${s.label} · ${s.date}`, () => pos.clone().multiplyScalar(1.2), () => this.state.mode === 'year');
    });
    // Counterclockwise revolution seen from north.
    for (const a of [.7, 2.3, 3.9, 5.5]) {
      const origin = V(-Math.sin(a) * 8, 0, -Math.cos(a) * 8), dir = V(-Math.cos(a), 0, Math.sin(a));
      this.yearRoot.add(new T.ArrowHelper(dir, origin, .55, 0xa4dbd0, .25, .14));
    }
  }
  private makeStars(): void {
    const coords: number[] = []; let seed = 73; const rand = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };
    for (let i = 0; i < 1050; i++) { const a = rand() * TAU, y = rand() * 2 - 1, r = 60 + rand() * 50; const m = Math.sqrt(1 - y * y); coords.push(r * Math.cos(a) * m, r * y, r * Math.sin(a) * m); }
    const geo = new T.BufferGeometry(); geo.setAttribute('position', new T.Float32BufferAttribute(coords, 3)); this.scene.add(new T.Points(geo, new T.PointsMaterial({ color: 0xabc7e5, size: .085, transparent: true, opacity: .65, sizeAttenuation: true })));
  }
  private label(text: string, point: () => T.Vector3, show: () => boolean, accent = false, offset = { x: 0, y: 0 }): void {
    const element = document.createElement('span'); element.className = `world-label${accent ? ' accent' : ''}`; element.textContent = text; this.host.append(element); this.labels.push({ element, point, show, offset });
  }
  private markerVisible(): boolean {
    const p = this.marker.getWorldPosition(V()), n = p.clone().sub(this.earthCenter).normalize(); return n.dot(this.camera.position.clone().sub(p).normalize()) > .02;
  }
  update(state: EarthLabState): void {
    const modeChanged = this.state.mode !== state.mode; this.state = { ...state };
    this.sunVector.set(...(state.mode === 'moon' ? [1, 0, 0] as [number, number, number] : sunDirection(state.season))); this.radius = state.mode === 'day' ? 2.35 : state.mode === 'moon' ? 1.4 : 1.08;
    this.earthCenter.copy(this.sunVector).multiplyScalar(state.mode === 'year' ? -8 : 0);
    this.earthRoot.position.copy(this.earthCenter); this.earthRoot.scale.setScalar(this.radius);
    this.tiltRoot.rotation.z = -state.tilt * RAD; this.spinRoot.rotation.y = state.mode === 'moon' ? moonEarthSpin(state) : earthSpin(state.season, state.tilt, state.hour);
    this.guideRoot.visible = state.guides && state.mode !== 'moon'; this.terminator.visible = state.guides && state.mode !== 'moon'; this.marker.visible = state.mode !== 'year';
    this.marker.scale.setScalar(state.mode === 'moon' ? 1.6 : 1);
    this.lunar.update(state.moonPhase, state.mode === 'moon', state.guides);
    this.terminator.quaternion.setFromUnitVectors(V(0, 1, 0), this.sunVector);
    this.yearRoot.visible = state.mode === 'year'; this.sunRoot.position.copy(state.mode === 'year' ? V() : this.sunVector.clone().multiplyScalar(14)); this.sunRoot.scale.setScalar(state.mode === 'year' ? 1 : 1.8);
    this.sunRoot.visible = state.mode !== 'moon';
    this.renderer.domElement.setAttribute('aria-label', state.mode === 'moon' ? '互動月球：拖曳月球改變月相；空白處旋轉視角；方向鍵調整，空白鍵播放或暫停。' : '互動地球：拖曳地球改變時間或公轉位置；空白處旋轉視角；方向鍵調整，空白鍵播放或暫停。');
    this.rays.visible = state.rays;
    this.updateRays(); this.earthRoot.updateMatrixWorld(true);
    if (modeChanged) this.home(); this.wake();
  }
  private updateRays(): void {
    const vertices: number[] = []; const across = V().crossVectors(this.sunVector, V(0, 1, 0)).normalize();
    if (this.state.mode === 'moon') {
      // Parallel sunlight; deliberately not tracing eclipses in this phase-only model.
      for (const z of [2.5, 2.9, 3.3]) vertices.push(6.5, 0, z, 3, 0, z, 4.2, 0, z, 4.4, 0, z + .1, 4.2, 0, z, 4.4, 0, z - .1);
      for (const center of [this.earthCenter, this.lunar.moon.position]) {
        const r = center === this.earthCenter ? this.radius : .72;
        for (const z of [-.45, 0, .45]) {
          const end = center.clone().add(V(Math.sqrt(r * r - z * z), 0, z)), start = end.clone().add(V(3, 0, 0));
          vertices.push(...start.toArray(), ...end.toArray());
          const tip = start.clone().lerp(end, .4);
          vertices.push(...tip.toArray(), ...tip.clone().add(V(.2, 0, .1)).toArray(), ...tip.toArray(), ...tip.clone().add(V(.2, 0, -.1)).toArray());
        }
      }
      this.rayGeometry.setAttribute('position', new T.Float32BufferAttribute(vertices, 3)); this.rayGeometry.computeBoundingSphere(); return;
    }
    const count = this.state.mode === 'day' ? 7 : 3;
    for (let i = 0; i < count; i++) {
      const offset = (i - (count - 1) / 2) * this.radius * (count === 7 ? .26 : .55);
      for (const height of (count === 7 ? [-.7, 0, .7] : [0])) {
        const o = across.clone().multiplyScalar(offset).add(V(0, height, 0));
        const depth = Math.sqrt(Math.max(0, this.radius ** 2 - o.lengthSq()));
        const end = this.earthCenter.clone().add(o).addScaledVector(this.sunVector, depth + .012);
        const start = this.earthCenter.clone().add(o).addScaledVector(this.sunVector, this.state.mode === 'day' ? 8 : 6.5);
        vertices.push(...start.toArray(), ...end.toArray());
        const arrow = start.clone().lerp(end, .4), wing = across.clone().multiplyScalar(.1);
        vertices.push(...arrow.toArray(), ...arrow.clone().addScaledVector(this.sunVector, .2).add(wing).toArray(), ...arrow.toArray(), ...arrow.clone().addScaledVector(this.sunVector, .2).sub(wing).toArray());
      }
    }
    this.rayGeometry.setAttribute('position', new T.Float32BufferAttribute(vertices, 3)); this.rayGeometry.computeBoundingSphere();
  }
  home(): void {
    this.topView = false;
    this.orbit.minDistance = this.state.mode === 'day' ? 5.8 : 15; this.orbit.maxDistance = this.state.mode === 'day' ? 17 : 38;
    this.orbit.target.set(0, 0, 0);
    if (this.state.mode === 'day') this.camera.position.set(6.2, 3.5, -10.9); else if (this.state.mode === 'moon') { this.camera.position.copy(this.taiwanNormal().add(V(0, .6, 0)).normalize().multiplyScalar(23.4)); this.orbit.minDistance = 11; this.orbit.maxDistance = 30; } else this.camera.position.set(15.1, 16, 21.5);
    this.orbit.update(); this.wake();
  }
  focusTaiwan(): void {
    if (this.state.mode === 'year') return;
    const n = this.taiwanNormal();
    // Keep the lunar orbit in frame; move only the camera, never the geographic pin.
    if (this.state.mode === 'moon') n.add(V(0, .6, 0)).normalize();
    this.camera.position.copy(n.multiplyScalar(this.state.mode === 'moon' ? 23.4 : 10.2)); this.orbit.target.set(0, 0, 0); this.topView = false; this.orbit.update(); this.wake();
  }
  private taiwanNormal(): T.Vector3 { return V(...geographicNormal(TAIWAN.latitude, TAIWAN.longitude, this.state.mode === 'moon' ? moonEarthSpin(this.state) : earthSpin(this.state.season, this.state.tilt, this.state.hour), this.state.tilt)); }
  zoom(factor: number): void { const offset = this.camera.position.clone().sub(this.orbit.target); offset.multiplyScalar(factor).clampLength(this.orbit.minDistance, this.orbit.maxDistance); this.camera.position.copy(this.orbit.target).add(offset); this.orbit.update(); this.wake(); }
  toggleView(): void { if (this.topView) { this.home(); return; } this.topView = true; this.camera.position.set(.01, this.state.mode === 'day' ? 11.8 : 28, .01); this.orbit.target.set(0, 0, 0); this.orbit.update(); this.wake(); }
  private resize(): void { const w = this.host.clientWidth, h = this.host.clientHeight; this.renderer.setSize(w, h); this.camera.aspect = w / h; this.camera.fov = w > 760 ? 38 : 60; this.camera.setViewOffset(w, h, 0, w > 760 ? 28 : -90, w, h); this.camera.updateProjectionMatrix(); this.wake(); }
  private pick(event: PointerEvent): void { const rect = this.renderer.domElement.getBoundingClientRect(); this.ndc.set((event.clientX - rect.left) / rect.width * 2 - 1, -(event.clientY - rect.top) / rect.height * 2 + 1); this.raycaster.setFromCamera(this.ndc, this.camera); }
  private pointerDown = (event: PointerEvent): void => {
    this.pick(event); if (!this.raycaster.intersectObject(this.state.mode === 'moon' ? this.lunar.moon : this.globe).length) return;
    this.orbit.enabled = false; event.stopImmediatePropagation(); this.renderer.domElement.setPointerCapture(event.pointerId);
    this.drag = { pointer: event.pointerId, x: event.clientX, hour: this.state.hour };
  };
  private pointerMove = (event: PointerEvent): void => {
    if (!this.drag || this.drag.pointer !== event.pointerId) return;
    if (this.state.mode === 'day') this.onDrag('hour', wrap(this.drag.hour + (event.clientX - this.drag.x) / 16, 24));
    else { this.pick(event); const p = this.raycaster.ray.intersectPlane(new T.Plane(V(0, 1, 0), 0), V()); if (p && p.length() > .5) this.onDrag(this.state.mode === 'moon' ? 'moonPhase' : 'season', wrap(this.state.mode === 'moon' ? Math.atan2(-p.z, p.x) : Math.atan2(-p.x, -p.z))); }
  };
  private pointerUp = (event: PointerEvent): void => { if (!this.drag || event.pointerId !== this.drag.pointer) return; this.drag = undefined; this.orbit.enabled = true; if (this.renderer.domElement.hasPointerCapture(event.pointerId)) this.renderer.domElement.releasePointerCapture(event.pointerId); };
  private keyDown = (event: KeyboardEvent): void => {
    if (['ArrowLeft', 'ArrowRight'].includes(event.key)) { event.preventDefault(); const sign = event.key === 'ArrowLeft' ? -1 : 1; this.onDrag(this.state.mode === 'day' ? 'hour' : this.state.mode === 'moon' ? 'moonPhase' : 'season', this.state.mode === 'day' ? wrap(this.state.hour + sign * .5, 24) : wrap((this.state.mode === 'moon' ? this.state.moonPhase : this.state.season) + sign * RAD * 5)); }
    if (event.code === 'Space') { event.preventDefault(); document.querySelector<HTMLButtonElement>('[data-action=play]')?.click(); }
  };
  wake(): void { if (this.destroyed || document.hidden) return; this.motionUntil = performance.now() + 350; if (!this.frame) this.frame = requestAnimationFrame(this.render); }
  private render = (time: number): void => {
    this.frame = 0; if (this.destroyed || document.hidden) return;
    const dt = this.lastTime ? Math.min((time - this.lastTime) / 1000, .05) : 0; this.lastTime = time;
    if (this.state.playing) this.onTick(dt);
    this.orbit.update(); this.scene.updateMatrixWorld(); this.renderer.render(this.scene, this.camera);
    const w = this.host.clientWidth, h = this.host.clientHeight;
    const panels = Array.from(document.querySelectorAll<HTMLElement>('.topbar,.intro,.observation-panel,.view-tools,.dock,#info-card')).filter(el => !el.hidden).map(el => el.getBoundingClientRect());
    this.labels.forEach(label => {
      const p = label.point().project(this.camera), x = (p.x * .5 + .5) * w + label.offset.x, y = (-p.y * .5 + .5) * h + label.offset.y;
      const overlaps = panels.some(r => x + 32 > r.left && x - 32 < r.right && y + 12 > r.top && y - 12 < r.bottom);
      const show = label.show() && !overlaps && p.z > -1 && p.z < 1 && Math.abs(p.x) < .96 && Math.abs(p.y) < .9; label.element.hidden = !show;
      if (show) { const half = label.element.offsetWidth / 2 + 6; label.element.style.left = `${Math.max(half, Math.min(w - half, x))}px`; label.element.style.top = `${y}px`; }
    });
    if ((this.state.playing || time < this.motionUntil) && !this.frame) this.frame = requestAnimationFrame(this.render);
  };
  dispose(): void {
    this.destroyed = true; cancelAnimationFrame(this.frame); this.observer.disconnect(); document.removeEventListener('visibilitychange', this.onVisibility);
    this.orbit.removeEventListener('change', this.onControlChange); this.orbit.dispose(); const c = this.renderer.domElement;
    c.removeEventListener('pointerdown', this.pointerDown, true); c.removeEventListener('pointermove', this.pointerMove); c.removeEventListener('pointerup', this.pointerUp); c.removeEventListener('pointercancel', this.pointerUp); c.removeEventListener('keydown', this.keyDown);
    this.lunar.dispose(); this.sunRoot.traverse(o => { if (o instanceof T.Sprite) o.material.map?.dispose(); }); dispose(this.scene); this.texture.dispose(); this.renderer.dispose(); c.remove(); this.labels.forEach(l => l.element.remove());
  }
}
