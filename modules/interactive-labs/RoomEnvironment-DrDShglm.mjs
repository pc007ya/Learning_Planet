import { j as w, n as u, b as M, a0 as g, a1 as A, a, I as v, O as b, a2 as y } from "./RoundedBoxGeometry-5pHu4LnG.mjs";
class S extends w {
  constructor() {
    super();
    const s = new u();
    s.deleteAttribute("uv");
    const e = new M({ side: g }), f = new M(), m = new A(16777215, 900, 28, 2);
    m.position.set(0.418, 16.199, 0.3), this.add(m);
    const n = new a(s, e);
    n.position.set(-0.757, 13.219, 0.717), n.scale.set(31.713, 28.305, 28.591), this.add(n);
    const i = new v(s, f, 6), t = new b();
    t.position.set(-10.906, 2.009, 1.846), t.rotation.set(0, -0.195, 0), t.scale.set(2.328, 7.905, 4.651), t.updateMatrix(), i.setMatrixAt(0, t.matrix), t.position.set(-5.607, -0.754, -0.758), t.rotation.set(0, 0.994, 0), t.scale.set(1.97, 1.534, 3.955), t.updateMatrix(), i.setMatrixAt(1, t.matrix), t.position.set(6.167, 0.857, 7.803), t.rotation.set(0, 0.561, 0), t.scale.set(3.927, 6.285, 3.687), t.updateMatrix(), i.setMatrixAt(2, t.matrix), t.position.set(-2.017, 0.018, 6.124), t.rotation.set(0, 0.333, 0), t.scale.set(2.002, 4.566, 2.064), t.updateMatrix(), i.setMatrixAt(3, t.matrix), t.position.set(2.291, -0.756, -2.621), t.rotation.set(0, -0.286, 0), t.scale.set(1.546, 1.552, 1.496), t.updateMatrix(), i.setMatrixAt(4, t.matrix), t.position.set(-2.193, -0.369, -5.547), t.rotation.set(0, 0.516, 0), t.scale.set(3.875, 3.487, 2.986), t.updateMatrix(), i.setMatrixAt(5, t.matrix), this.add(i);
    const r = new a(s, o(50));
    r.position.set(-16.116, 14.37, 8.208), r.scale.set(0.1, 2.428, 2.739), this.add(r);
    const c = new a(s, o(50));
    c.position.set(-16.109, 18.021, -8.207), c.scale.set(0.1, 2.425, 2.751), this.add(c);
    const d = new a(s, o(17));
    d.position.set(14.904, 12.198, -1.832), d.scale.set(0.15, 4.265, 6.331), this.add(d);
    const l = new a(s, o(43));
    l.position.set(-0.462, 8.89, 14.52), l.scale.set(4.38, 5.441, 0.088), this.add(l);
    const x = new a(s, o(20));
    x.position.set(3.235, 11.486, -12.541), x.scale.set(2.5, 2, 0.1), this.add(x);
    const p = new a(s, o(100));
    p.position.set(0, 20, 0), p.scale.set(1, 0.1, 1), this.add(p);
  }
  /**
   * Frees internal resources. This method should be called
   * when the environment is no longer required.
   */
  dispose() {
    const s = /* @__PURE__ */ new Set();
    this.traverse((e) => {
      e.isMesh && (s.add(e.geometry), s.add(e.material));
    });
    for (const e of s)
      e.dispose();
  }
}
function o(h) {
  return new y({
    color: 0,
    emissive: 16777215,
    emissiveIntensity: h
  });
}
export {
  S as R
};
