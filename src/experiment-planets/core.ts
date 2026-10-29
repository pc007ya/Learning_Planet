import * as THREE from 'three';

export interface World {
  readonly name: string;
  readonly intro: string;
  readonly controls: ReadonlyArray<{ id: string; title: string; values: ReadonlyArray<{ id: string; label: string }> }>;
  readonly missions: ReadonlyArray<{ title: string; detail: string }>;
  readonly quiz: { question: string; answers: readonly [string, string, string, string]; correct: number; explanation: string };
  selected(id: string): string;
  choose(id: string, value: string): void;
  observe(): void;
  completed(): boolean[];
  readout(): string;
  tick(dt: number): void;
  reset(): void;
  dispose(): void;
  move?(direction: string): void;
}

export class Stage {
  readonly scene = new THREE.Scene();
  readonly camera = new THREE.PerspectiveCamera(42, 1, 0.1, 200);
  readonly renderer: THREE.WebGLRenderer | null;
  readonly worldRoot = new THREE.Group();
  private running = false;
  private disposed = false;
  private visible = true;
  private last = 0;
  private frameId = 0;
  private abort = new AbortController();
  private resizeObserver: ResizeObserver | null = null;
  private intersection: IntersectionObserver | null = null;
  onFrame: (dt: number) => void = () => {};
  constructor(readonly host: HTMLElement, readonly ocean = false) {
    this.scene.background = new THREE.Color(ocean ? 0x086277 : 0x101f43);
    this.scene.fog = new THREE.Fog(this.scene.background, 15, 42);
    this.scene.add(this.worldRoot);
    this.camera.position.set(7, 5.6, 10.8);
    this.camera.lookAt(0, .25, 0);
    this.scene.add(new THREE.HemisphereLight(0xf0faff, 0x33516c, 2.2));
    const sun = new THREE.DirectionalLight(0xfff5d4, 2.5);
    sun.position.set(-3, 11, 7);
    this.scene.add(sun);
    let renderer: THREE.WebGLRenderer | null = null;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'low-power' });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.55;
      host.append(renderer.domElement);
    } catch (error) {
      console.warn('3D renderer unavailable, experiment controls remain accessible', error);
      const fallback = document.createElement('p');
      fallback.className = 'ep-webgl-fallback';
      fallback.textContent = '此裝置目前無法顯示 3D，仍可用右側圖卡進行觀察與答題。';
      host.append(fallback);
    }
    this.renderer = renderer;
    this.resizeObserver = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(() => this.resize()) : null;
    this.resizeObserver?.observe(host);
    window.addEventListener('resize', this.resize, { signal: this.abort.signal });
    document.addEventListener('visibilitychange', this.visibility, { signal: this.abort.signal });
    window.addEventListener('pagehide', () => this.stop(), { signal: this.abort.signal });
    this.intersection = typeof IntersectionObserver !== 'undefined'
      ? new IntersectionObserver(entries => { this.visible = entries.some(x => x.isIntersecting); if (this.visible) this.start(); else this.stop(); })
      : null;
    this.intersection?.observe(host);
    this.resize();
    this.start();
  }
  private resize = () => {
    const width = Math.max(200, this.host.clientWidth);
    const height = Math.max(180, this.host.clientHeight);
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer?.setSize(width, height, false);
    this.renderOnce();
  };
  private visibility = () => { if (document.hidden) this.stop(); else this.start(); };
  private frame = (now: number) => {
    if (!this.running || this.disposed) return;
    const dt = Math.min(.05, Math.max(0, (now - (this.last || now)) / 1000));
    this.last = now;
    this.onFrame(dt);
    this.renderer?.render(this.scene, this.camera);
    this.frameId = requestAnimationFrame(this.frame);
  };
  renderOnce() { this.renderer?.render(this.scene, this.camera); }
  start() {
    if (this.running || this.disposed || document.hidden || !this.visible) return;
    this.running = true; this.last = 0;
    this.frameId = requestAnimationFrame(this.frame);
  }
  stop() { this.running = false; cancelAnimationFrame(this.frameId); }
  destroy() {
    if (this.disposed) return;
    this.disposed = true; this.stop(); this.abort.abort();
    this.intersection?.disconnect(); this.resizeObserver?.disconnect();
    this.worldRoot.traverse(object => {
      if (!(object instanceof THREE.Mesh || object instanceof THREE.Line)) return;
      object.geometry.dispose();
      const materials = Array.isArray(object.material) ? object.material : [object.material];
      for (const m of materials) m.dispose();
    });
    this.scene.clear();
    this.renderer?.dispose();
    this.renderer?.domElement.remove();
  }
}

export function mat(color: number, opacity = 1) {
  return new THREE.MeshStandardMaterial({ color, roughness: .75, metalness: .03, transparent: opacity < 1, opacity, flatShading: true });
}
export function box(w: number, h: number, d: number, color: number) {
  return new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat(color));
}
export function sphere(r: number, color: number, seg = 14) {
  return new THREE.Mesh(new THREE.SphereGeometry(r, seg, 10), mat(color));
}
export function tube(r: number, h: number, color: number) {
  return new THREE.Mesh(new THREE.CylinderGeometry(r, r, h, 12), mat(color));
}
