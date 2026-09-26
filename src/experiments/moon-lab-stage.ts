import * as T from 'three';
import { moonPosition, moonViewSun } from './moon-lab-model';
import { TAU } from './earth-lab-model';

const vertex = `varying vec2 vUv;varying vec3 vNormal;void main(){vUv=uv;vNormal=normalize(mat3(modelMatrix)*normal);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`;
const fragment = `uniform sampler2D surface;uniform vec3 sun;varying vec2 vUv;varying vec3 vNormal;
void main(){float d=dot(normalize(vNormal),sun);vec3 tex=pow(texture2D(surface,vUv).rgb,vec3(2.2));
gl_FragColor=vec4(tex*(.012+1.7*max(d,0.)),1.);
#include <tonemapping_fragment>
#include <colorspace_fragment>
}`;
const material = (texture: T.Texture, sun: T.Vector3) => new T.ShaderMaterial({ vertexShader: vertex, fragmentShader: fragment, uniforms: { surface: { value: texture }, sun: { value: sun } } });

/** Owns only the added Moon objects and Earth-view inset; no animation loop. */
export class MoonLabStage {
  readonly root = new T.Group();
  readonly guide = new T.Group();
  readonly moon: T.Mesh<T.SphereGeometry, T.ShaderMaterial>;
  private readonly previewScene = new T.Scene();
  private readonly previewCamera = new T.PerspectiveCamera(32, 1, .1, 20);
  private readonly previewRenderer: T.WebGLRenderer;
  private readonly previewSun = new T.Vector3();
  private readonly previewMoon: T.Mesh<T.SphereGeometry, T.ShaderMaterial>;
  private readonly sightLine: T.Line;
  private lastPhase = NaN;

  constructor(private texture: T.Texture, host: HTMLElement) {
    this.moon = new T.Mesh(new T.SphereGeometry(.72, 64, 48), material(texture, new T.Vector3(1, 0, 0)));
    this.root.add(this.moon, this.guide);
    const ring = Array.from({ length: 181 }, (_, i) => new T.Vector3(...moonPosition(i / 180 * TAU)));
    this.guide.add(new T.Line(new T.BufferGeometry().setFromPoints(ring), new T.LineBasicMaterial({ color: 0x8fbdca, transparent: true, opacity: .55 })));
    const outer = new T.Mesh(new T.RingGeometry(5.14, 5.26, 180), new T.MeshBasicMaterial({ color: 0x5b95a7, side: T.DoubleSide, transparent: true, opacity: .13 })); outer.rotation.x = -Math.PI / 2; this.guide.add(outer);
    for (let i = 0; i < 60; i++) {
      const a = i / 60 * TAU;
      const points = [5.38, i % 5 ? 5.44 : 5.56].map(r => new T.Vector3(...moonPosition(a, r)));
      this.guide.add(new T.Line(new T.BufferGeometry().setFromPoints(points), new T.LineBasicMaterial({ color: 0xa5c5d4, transparent: true, opacity: i % 5 ? .2 : .5 })));
    }
    for (const a of [.4, 1.97, 3.54, 5.11]) this.guide.add(new T.ArrowHelper(new T.Vector3(-Math.sin(a), 0, -Math.cos(a)), new T.Vector3(...moonPosition(a)), .5, 0xb5f1df, .19, .12));
    this.sightLine = new T.Line(new T.BufferGeometry().setFromPoints([new T.Vector3(), new T.Vector3()]), new T.LineDashedMaterial({ color: 0xb5f1df, transparent: true, opacity: .5, dashSize: .14, gapSize: .13 })); this.guide.add(this.sightLine);
    // The small near-side marker follows the physical lunar surface.
    const marker = new T.Mesh(new T.RingGeometry(.065, .086, 32), new T.MeshBasicMaterial({ color: 0xb5f1df, side: T.DoubleSide }));
    marker.rotation.y = Math.PI / 2; marker.position.x = .727; this.moon.add(marker);
    this.previewRenderer = new T.WebGLRenderer({ antialias: true, alpha: true });
    this.previewRenderer.setPixelRatio(1); this.previewRenderer.setSize(320, 320, false); this.previewRenderer.setClearColor(0x000000, 0);
    this.previewRenderer.toneMapping = T.ACESFilmicToneMapping; this.previewRenderer.toneMappingExposure = 1.12;
    this.previewRenderer.domElement.setAttribute('role', 'img'); this.previewRenderer.domElement.setAttribute('aria-label', '從地球看到的月相，月球北方朝上');
    host.append(this.previewRenderer.domElement);
    this.previewMoon = new T.Mesh(new T.SphereGeometry(1, 80, 64), material(texture, this.previewSun));
    // Texture longitude 0 points +X before rotating it to face the inset camera +Z.
    this.previewMoon.rotation.y = -Math.PI / 2;
    this.previewScene.add(this.previewMoon); this.previewCamera.position.set(0, 0, 4.4);
  }
  update(phase: number, visible: boolean, guides: boolean): void {
    this.root.visible = visible; this.guide.visible = guides;
    if (!visible) return;
    this.moon.position.set(...moonPosition(phase)); this.moon.rotation.y = phase + Math.PI;
    this.moon.children.forEach(child => { child.visible = guides; });
    this.sightLine.geometry.setFromPoints([new T.Vector3(), this.moon.position]); this.sightLine.computeLineDistances();
    if (phase !== this.lastPhase) {
      this.previewSun.set(...moonViewSun(phase)); this.previewRenderer.render(this.previewScene, this.previewCamera); this.lastPhase = phase;
    }
  }
  dispose(): void {
    this.previewMoon.geometry.dispose(); this.previewMoon.material.dispose(); this.texture.dispose();
    this.previewRenderer.dispose(); this.previewRenderer.domElement.remove();
    // Main-stage scene disposal owns root's geometries/materials.
  }
}
