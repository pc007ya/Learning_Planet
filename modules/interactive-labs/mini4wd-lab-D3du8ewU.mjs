import { G as C, M as vt, D as Z, a as G, B as J, F as Y, b as E, V as A, c as N, d as F, C as V, R as X, T as ut, e as Pt, f as qt, O as Tt, I as it, g as wt, S as bt, W as At, P as Ct, A as It, h as Et, H as Gt, i as Lt, j as jt, k as Rt, l as tt, m as Bt, n as et, o as Dt, p as O, q as ht } from "./RoundedBoxGeometry-CQPJIpnr.mjs";
import { R as Ht } from "./RoomEnvironment-CAidMGg-.mjs";
import { S as Ft } from "./narration-DCI2AWPz.mjs";
const lt = ["fl", "fr", "rl", "rr"], st = ["左前", "右前", "左後", "右後"], P = [
  { id: "chassis", name: "底盤", count: 1, needs: [], voice: "底盤固定所有零件，是四驅車的骨架。" },
  { id: "motor", name: "馬達", count: 1, needs: ["chassis"], voice: "電流經過馬達，電能轉成轉動。它不需要先往後拉。" },
  { id: "gears", name: "減速齒輪組", count: 1, needs: ["motor"], voice: "小齒輪帶動較大的齒輪，轉得比較慢，輪端扭力比較大。" },
  { id: "shaft", name: "傳動軸", count: 1, needs: ["gears"], voice: "中間的長軸把馬達動力傳到前輪，是四輪驅動的重要連接。" },
  { id: "axles", name: "前後輪軸", count: 2, needs: ["shaft"], voice: "兩根輪軸連接左右輪圈，齒輪把動力送到前後輪軸。" },
  ...lt.map((s, t) => ({ id: "rim-" + s, name: st[t] + "輪圈", count: 1, needs: ["axles"], voice: st[t] + "輪圈套在輪軸上，輪胎再套在輪圈外面。" })),
  ...lt.map((s, t) => ({ id: "tire-" + s, name: st[t] + "輪胎", count: 1, needs: ["rim-" + s], voice: st[t] + "輪胎接觸地面。摩擦讓輪子的轉動變成前進。" })),
  { id: "rollers", name: "導輪", count: 4, needs: ["chassis"], voice: "四個小導輪接觸軌道護欄，幫忙引導車頭轉彎。" },
  { id: "switch", name: "開關與接點", count: 1, needs: ["motor"], voice: "開關閉合，電池、馬達與導線形成完整迴路；打開開關，馬達就不再得到電力。" },
  { id: "battery-a", name: "電池 A", count: 1, needs: ["switch"], voice: "這兩顆電池串聯。依正負標記安裝，接點會把它們接成供電迴路。" },
  { id: "battery-b", name: "電池 B", count: 1, needs: ["battery-a"], voice: "第二顆電池依相反方向放置，底盤接點將兩顆串聯。" },
  { id: "shell", name: "車殼", count: 1, needs: ["rollers", "battery-b", ...lt.map((s) => "tire-" + s)], voice: "最後扣上車殼。外觀與配重不同，試跑結果也可能不同。" }
], at = () => new Set(P.map((s) => s.id));
function xt(s, t) {
  return P.find((e) => e.id === s)?.needs.every((e) => t.has(e)) ?? !1;
}
function Vt(s, t) {
  return s === "chassis" || P.some((e) => t.has(e.id) && e.needs.includes(s)) ? !1 : t.delete(s);
}
function Ot(s) {
  return `${s.gear}:1・${s.tire === "grip" ? "抓地胎" : "硬胎"} ${s.diameter} mm・${s.shell === "arrow" ? "箭羽" : "尾翼"}・${s.ballast === "center" ? "中央" : "後方"}配重`;
}
function rt(s, t) {
  const e = Math.exp(-Math.pow((s + 0.2) / 0.53, 4)), i = 0.465 + 0.09 * Math.exp(-Math.pow((s + 0.9) / 0.36, 2)) + 0.1 * Math.exp(-Math.pow((s - 0.92) / 0.36, 2)) - 0.12 * Math.pow(Math.abs(s) / 1.43, 8), a = 0.85 + 0.025 * Math.exp(-Math.pow((s + 0.85) / 0.45, 2)) - 0.26 * Math.pow(Math.max(0, s) / 1.43, 3), r = a + 0.025 + 0.205 * e, o = Math.abs(t), l = 0.735 + 0.055 * Math.exp(-Math.pow((Math.abs(s) - 0.96) / 0.34, 4)) - 0.19 * Math.pow(Math.abs(s) / 1.43, 8), c = o < 0.65 ? F.lerp(r, a, (1 - Math.cos(Math.PI * o / 0.65)) / 2) : F.lerp(a, l, Math.sin((o - 0.65) / 0.35 * Math.PI / 2));
  return new A(s, c, t * i);
}
function I(s, t, e, i, a = 0, r = 48, o = 24) {
  const h = [], l = [];
  for (let n = 0; n <= r; n++) for (let d = 0; d <= o; d++) {
    const w = rt(F.lerp(s, t, n / r), F.lerp(e, i, d / o));
    w.y += a, h.push(w.x, w.y, w.z);
  }
  for (let n = 0; n < r; n++) for (let d = 0; d < o; d++) {
    const w = n * (o + 1) + d, x = w + o + 1;
    l.push(w, w + 1, x, x, w + 1, x + 1);
  }
  const c = new J();
  return c.setAttribute("position", new Y(h, 3)), c.setIndex(l), c.computeVertexNormals(), c;
}
function Ut() {
  const s = new C(), t = new C(), e = new C(), i = new C();
  s.add(e, i), e.name = "streamline-shell", i.name = "open-wheel-shell", i.visible = !1;
  const a = new vt({ color: 2738687, metalness: 0.42, roughness: 0.24, clearcoat: 1, side: Z }), r = new vt({ color: 1521485, metalness: 0.25, roughness: 0.08, clearcoat: 1, side: Z });
  r.transparent = !0, r.opacity = 0.88, r.depthWrite = !1, r.userData.normalOpacity = 0.88;
  const o = new G({ color: 1055532, roughness: 0.55, metalness: 0.25, side: Z }), h = new G({ color: 15267327, roughness: 0.3, metalness: 0.25, side: Z }), l = new G({ color: 12581631, emissive: 6676479, emissiveIntensity: 0.6 }), c = new G({ color: 16725074, emissive: 16717624, emissiveIntensity: 0.5 }), n = (u, z, g = e) => {
    const p = new E(u, z);
    return p.castShadow = !0, p.receiveShadow = !0, g.add(p), p;
  }, d = (u, z, g, p, b, y, m, f = e) => {
    const v = n(new N(u, z, g), m, f);
    return v.position.set(p, b, y), v;
  };
  n(I(-1.43, 1.43, -1, 1), a);
  for (const u of [-1, 1]) {
    const z = [], g = [];
    for (let b = 0; b <= 80; b++) {
      const y = -1.43 + b * 2.86 / 80, m = rt(y, u), f = 0.43 + 0.28 * Math.exp(-Math.pow((Math.abs(y) - 0.96) / 0.34, 4));
      if (z.push(m.x, m.y, m.z, m.x, Math.min(m.y, f), m.z), b < 80) {
        const v = b * 2;
        g.push(v, v + 1, v + 2, v + 1, v + 3, v + 2);
      }
    }
    const p = new J();
    p.setAttribute("position", new Y(z, 3)), p.setIndex(g), p.computeVertexNormals(), n(p, a);
  }
  for (const u of [-1.43, 1.43]) {
    const z = [], g = [];
    for (let b = 0; b <= 32; b++) {
      const y = rt(u, b / 16 - 1);
      if (z.push(y.x, y.y, y.z, y.x, 0.4, y.z), b < 32) {
        const m = b * 2;
        g.push(m, m + 1, m + 2, m + 1, m + 3, m + 2);
      }
    }
    const p = new J();
    p.setAttribute("position", new Y(z, 3)), p.setIndex(g), p.computeVertexNormals(), n(p, a);
  }
  n(I(0.02, 0.48, -0.58, 0.58, 7e-3, 28, 24), r), n(I(-0.79, -0.44, -0.57, 0.57, 7e-3, 20, 20), r);
  for (const u of [-1, 1]) {
    n(I(-0.47, 0.03, u * 0.5, u * 0.8, 9e-3, 28, 16), r), n(I(0.65, 1.36, u * 0.23, u * 0.33, 0.01, 24, 4), h), n(I(-1.35, -0.83, u * 0.23, u * 0.33, 0.01, 20, 4), h), n(I(-0.42, 0.13, u * 0.24, u * 0.32, 0.01, 18, 4), h), n(I(-0.72, -0.38, u * 0.83, u * 0.98, 8e-3, 14, 6), o), d(1.4, 0.035, 0.045, 0, 0.425, u * 0.5, o);
    const z = n(I(1.18, 1.225, u * 0.47, u * 0.84, 0.015, 8, 10), l);
    z.name = "headlight", d(0.018, 0.025, 0.2, 1.44, 0.525, u * 0.235, l), d(0.015, 0.032, 0.28, -1.44, 0.71, u * 0.205, c);
  }
  d(0.018, 0.055, 0.45, 1.437, 0.465, 0, o), d(0.16, 0.035, 0.88, 1.36, 0.402, 0, o), d(0.17, 0.045, 0.88, -1.36, 0.4, 0, o);
  for (const u of [-0.27, -0.09, 0.09, 0.27]) d(0.24, 0.065, 0.025, -1.32, 0.39, u, o);
  s.add(t);
  const w = d(0.3, 0.045, 1.15, -1.16, 1.03, 0, a, t);
  w.rotation.z = -0.1;
  for (const u of [-0.38, 0.38]) d(0.065, 0.25, 0.045, -1.16, 0.885, u, o, t);
  for (const u of [-0.59, 0.59]) d(0.31, 0.12, 0.035, -1.16, 1.05, u, a, t);
  const x = I(-1.4, 1.43, -1, 1);
  x.scale(1, 1, 0.62), n(x, a, i);
  const M = I(-0.65, 0.43, -0.55, 0.55, 0.012);
  M.scale(1, 1, 0.62), n(M, r, i);
  for (const u of [-1, 1]) {
    const z = I(-0.58, 0.8, u * 0.45, u * 0.99, 0.015);
    n(z, a, i);
    const g = [], p = [];
    for (let f = 0; f <= 32; f++) {
      const v = -0.58 + f * 1.38 / 32, S = rt(v, u * 0.99);
      if (g.push(v, S.y + 0.015, S.z, v, 0.45, S.z), f < 32) {
        const q = f * 2;
        p.push(q, q + 1, q + 2, q + 1, q + 3, q + 2);
      }
    }
    const b = new J();
    b.setAttribute("position", new Y(g, 3)), b.setIndex(p), b.computeVertexNormals(), n(b, a, i);
    const y = I(-0.31, 0.23, u * 0.8, u * 0.95, 0.021);
    n(y, o, i);
    const m = I(0.53, 1.36, u * 0.24, u * 0.39, 0.012);
    m.scale(1, 1, 0.62), n(m, h, i), d(0.24, 0.045, 0.47, 1.25, 0.48, u * 0.4, a, i), d(0.27, 0.11, 0.035, 1.25, 0.51, u * 0.63, o, i), d(0.055, 0.025, 0.15, 1.37, 0.53, u * 0.32, l, i), d(0.025, 0.19, 0.24, 0.79, 0.65, u * 0.32, a, i);
  }
  return t.visible = !1, { root: s, wing: t, street: e, racer: i, paint: a, materials: [a, r, o, h, l, c] };
}
function Wt() {
  const s = new C();
  s.name = "moulded-chassis";
  const t = new G({ color: 3492704, roughness: 0.8, metalness: 0.12 }), e = new G({ color: 6587031, roughness: 0.65, metalness: 0.15 }), i = new G({ color: 12241357, roughness: 0.28, metalness: 0.8 }), a = new G({ color: 14462565, roughness: 0.3, metalness: 0.7 });
  function r(o, h, l, c, n, d, w, x = t) {
    const M = new E(new X(h, l, c, 2, Math.min(h, l, c) * 0.2), x);
    return M.name = o, M.position.set(n, d, w), M.castShadow = !0, M.receiveShadow = !0, s.add(M), M;
  }
  r("tray-floor", 2.62, 0.075, 1.06, 0, 0.315, 0);
  for (const o of [-1, 1]) {
    r("perimeter-rail", 2.52, 0.16, 0.065, 0, 0.415, o * 0.53), r("battery-cradle", 1.14, 0.055, 0.12, 0.15, 0.465, o * 0.22, e), r("battery-bay-wall", 1.17, 0.17, 0.045, 0.15, 0.44, o * 0.4);
    for (const h of [-0.43, 0.73]) r("battery-contact", 0.025, 0.15, 0.23, h, 0.57, o * 0.22, a);
    for (const h of [-1.1, -0.45, 0.45, 1.1]) r("cross-rib", 0.045, 0.06, 0.16, h, 0.38, o * 0.43, e);
    r("motor-saddle", 0.41, 0.12, 0.08, -0.74, 0.435, o * 0.23, e);
  }
  r("battery-divider", 1.17, 0.1, 0.045, 0.15, 0.41, 0, e);
  for (const o of [-1.03, 0.98]) {
    r("axle-housing", 0.25, 0.13, 1.1, o, 0.36, 0);
    for (const h of [-0.43, 0.43]) r("bearing-seat", 0.16, 0.17, 0.14, o, 0.36, h, e);
    r("gearbox-base", 0.44, 0.055, 0.26, o, 0.4, 0.43, e);
    for (const h of [0.3, 0.56]) r("gearbox-wall", 0.42, 0.16, 0.035, o, 0.47, h);
  }
  for (const o of [-1.28, 1.28]) {
    r("bumper-spine", 0.12, 0.095, 1.72, o, 0.405, 0);
    for (const h of [-1, 1]) {
      const l = r("roller-brace", 0.52, 0.075, 0.1, o * 0.83, 0.385, h * 0.65, e);
      l.rotation.y = h * o * 0.48;
      const c = new E(new V(0.085, 0.1, 0.1, 16), e);
      c.position.set(o, 0.46, h * 0.88), c.name = "roller-mount", s.add(c);
      const n = new E(new V(0.035, 0.035, 0.02, 12), i);
      n.position.set(o, 0.517, h * 0.88), n.name = "mount-screw", s.add(n);
    }
  }
  for (const o of [-1.15, 0.83]) for (const h of [-0.34, 0.34]) r("shell-latch", 0.12, 0.16, 0.075, o, 0.47, h, e);
  return s;
}
class ct {
  root = new C();
  parts = /* @__PURE__ */ new Map();
  wheels = [];
  gears = [];
  rotor = new C();
  shellMaterials = [];
  street = new C();
  racer = new C();
  skins = [];
  rubber = [];
  wheelParts = [];
  wings = new C();
  ballast = new C();
  constructor() {
    for (const g of P) {
      const p = new C();
      p.userData.part = g.id, this.parts.set(g.id, p), this.root.add(p);
    }
    const t = (g, p = 0.1) => new G({ color: g, metalness: p, roughness: 0.35 }), e = t(1319992, 0.45), i = t(13294819, 0.8), a = t(16759127, 0.55), r = t(15069179, 0.25), o = (g, p, b, y = 0, m = 0, f = 0) => {
      const v = new E(p, b.clone());
      return v.position.set(y, m, f), v.castShadow = !0, v.receiveShadow = !0, g.add(v), v;
    }, h = (g, p, b, y, m, f = 0, v = 0, S = 0) => o(g, new X(p, b, y, 2, Math.min(p, b, y) * 0.18), m, f, v, S), l = (g, p, b, y, m, f, v, S = "z") => {
      const q = o(g, new V(p, p, b, 20), y, m, f, v);
      return S === "z" && (q.rotation.x = Math.PI / 2), S === "x" && (q.rotation.z = Math.PI / 2), q;
    }, c = this.parts.get("chassis");
    c.add(Wt());
    const n = this.parts.get("motor");
    l(n, 0.2, 0.68, i, -0.74, 0.62, 0), h(n, 0.33, 0.29, 0.14, e, -0.74, 0.62, -0.4), n.add(this.rotor), this.rotor.position.set(-0.74, 0.62, 0.41), h(this.rotor, 0.31, 0.055, 0.05, a);
    const d = this.parts.get("gears");
    for (const [g, p, b, y] of [[-0.74, 0.62, 0.44, 0.1], [-0.98, 0.54, 0.44, 0.18], [0.94, 0.43, 0.43, 0.18]]) {
      const m = new C();
      m.position.set(g, p, b), d.add(m), this.gears.push(m), l(m, y, 0.075, a, 0, 0, 0);
      for (let f = 0; f < 16; f++) {
        const v = f * Math.PI / 8, S = h(m, 0.07, 0.07, 0.075, a, Math.cos(v) * y, Math.sin(v) * y, 0);
        S.rotation.z = v;
      }
    }
    l(this.parts.get("shaft"), 0.035, 1.94, i, 0, 0.5, 0.43, "x");
    for (const g of [-0.96, 0.96]) l(this.parts.get("axles"), 0.045, 1.62, i, g, 0.26, 0);
    ["fl", "fr", "rl", "rr"].forEach((g, p) => {
      const b = p < 2 ? 0.96 : -0.96, y = p % 2 ? -0.76 : 0.76, m = this.parts.get("rim-" + g), f = this.parts.get("tire-" + g);
      for (const $ of [m, f])
        $.position.set(b, 0.26, y), $.userData.home = $.position.clone(), this.wheelParts.push($);
      const v = new C();
      m.add(v), this.wheels.push(v);
      const S = t(2569542), q = l(f, 0.26, 0.24, S, 0, 0, 0);
      this.rubber.push(q.material);
      for (const $ of [-1, 1]) {
        l(v, 0.175, 0.025, i, 0, 0, 0.135 * $), l(v, 0.065, 0.04, a, 0, 0, 0.152 * $);
        for (let L = 0; L < 5; L++) {
          const R = L * Math.PI * 2 / 5, B = h(v, 0.15, 0.035, 0.04, e, Math.cos(R) * 0.11, Math.sin(R) * 0.11, 0.153 * $);
          B.rotation.z = R;
        }
        o(f, new ut(0.222, 0.012, 4, 24), r, 0, 0, 0.124 * $);
      }
    });
    const w = this.parts.get("rollers");
    for (const g of [-1.28, 1.28]) for (const p of [-0.88, 0.88])
      l(w, 0.13, 0.11, r, g, 0.52, p, "y"), l(w, 0.04, 0.14, a, g, 0.54, p, "y");
    for (const [g, p] of ["battery-a", "battery-b"].entries()) {
      const b = this.parts.get(p), y = g ? 0.22 : -0.22;
      l(b, 0.145, 1.02, t(g ? 16747596 : 4377557), 0.15, 0.62, y, "x"), l(b, 0.1, 0.035, i, g ? -0.38 : 0.68, 0.62, y, "x"), h(b, 0.015, 0.085, 0.018, r, g ? -0.405 : 0.705, 0.64, y), h(b, 0.015, 0.018, 0.085, r, g ? -0.405 : 0.705, 0.64, y);
    }
    const x = this.parts.get("switch");
    h(x, 0.23, 0.12, 0.18, a, 0.95, 0.53, -0.3), h(x, 0.09, 0.08, 0.14, e, 0.93, 0.62, -0.3);
    const M = (g, p) => o(x, new Pt(new qt(g.map((b) => new A(...b))), 20, 0.017, 6, !1), t(p));
    M([[0.95, 0.55, -0.3], [1.15, 0.5, -0.4], [0.7, 0.5, -0.4], [0.68, 0.62, -0.22]], 16738390), M([[-0.38, 0.62, -0.22], [-0.48, 0.49, 0], [-0.38, 0.62, 0.22]], 14992227), M([[0.68, 0.62, 0.22], [0.8, 0.48, 0.52], [-0.7, 0.48, 0.52], [-0.74, 0.63, 0.35]], 5672959), M([[-0.74, 0.63, -0.35], [-1.1, 0.5, -0.49], [0.95, 0.55, -0.3]], 5672959);
    const u = this.parts.get("shell"), z = Ut();
    u.add(z.root), this.wings = z.wing, this.street = z.street, this.racer = z.racer, this.skins = [z.paint], this.shellMaterials = z.materials, c.add(this.ballast), l(this.ballast, 0.16, 0.08, a, 0, 0.43, 0, "y");
    for (const [g, p] of this.parts)
      p.userData.home || (p.userData.home = p.position.clone()), p.name = g;
  }
  configure(t) {
    this.skins.forEach((e) => e.color.set(t.color)), this.rubber.forEach((e) => {
      e.color.set(t.tire === "grip" ? 2175814 : 6845829), e.roughness = t.tire === "grip" ? 0.92 : 0.45;
    }), this.wings.visible = t.shell === "wing", this.street.visible = t.shell === "arrow", this.racer.visible = t.shell === "wing", this.ballast.position.x = t.ballast === "rear" ? -0.67 : 0;
    for (const e of this.wheelParts) e.scale.setScalar(t.diameter / 26);
  }
  layout(t, e, i, a) {
    let r = 0;
    for (const [o, h] of this.parts) {
      const l = h.userData.home;
      if (h.visible = t.has(o), h.position.copy(l), e && o !== "chassis") {
        const c = Math.floor(r / 5), n = r % 5;
        h.position.add(new A((n - 2) * 1.18, (c + 1) * 0.62, (c - 1) * 1.2));
      }
      r++;
    }
    for (const o of this.shellMaterials) {
      const h = i ? 0.12 : o.userData.normalOpacity ?? 1, l = h < 1;
      o.transparent !== l && (o.needsUpdate = !0), o.transparent = l, o.opacity = h, o.depthWrite = !l;
    }
  }
  animate(t, e = !1, i = 4, a = 0.26) {
    const r = -t / a;
    for (const o of this.wheels) o.rotation.z = r;
    this.gears.forEach((o, h) => o.rotation.z = r * (h === 0 ? -i : 1)), this.rotor.rotation.z = e ? -r * i : 0;
  }
  dispose() {
    const t = /* @__PURE__ */ new Set(), e = /* @__PURE__ */ new Set();
    this.root.traverse((i) => {
      i instanceof E && (t.add(i.geometry), (Array.isArray(i.material) ? i.material : [i.material]).forEach((a) => e.add(a)));
    }), t.forEach((i) => i.dispose()), e.forEach((i) => i.dispose());
  }
}
const _ = { gear: 4, tire: "grip", diameter: 26, shell: "arrow", ballast: "center", color: "#29c9ff" }, T = { straight: 18, radius: 12, width: 5, length: 72 + 24 * Math.PI }, K = 1 / 240, ot = (s, t, e) => Math.max(t, Math.min(e, s));
function dt(s) {
  const { straight: t, radius: e, length: i } = T;
  if (s = (s % i + i) % i, s < 2 * t) return { x: s - t, z: -e, tx: 1, tz: 0 };
  if (s -= 2 * t, s < Math.PI * e) {
    const r = s / e - Math.PI / 2;
    return { x: t + e * Math.cos(r), z: e * Math.sin(r), tx: -Math.sin(r), tz: Math.cos(r) };
  }
  if (s -= Math.PI * e, s < 2 * t) return { x: t - s, z: e, tx: -1, tz: 0 };
  const a = (s - 2 * t) / e + Math.PI / 2;
  return { x: -t + e * Math.cos(a), z: e * Math.sin(a), tx: -Math.sin(a), tz: Math.cos(a) };
}
function yt(s, t) {
  const e = T.straight, i = T.radius, a = ot(s, -e, e), r = s - a, o = Math.hypot(r, t) || 1e-5, h = r / o, l = t / o;
  let c = 0;
  if (s >= -e && s <= e) c = t < 0 ? s + e : 2 * e + Math.PI * i + e - s;
  else if (s > e) c = 2 * e + (Math.atan2(t, r) + Math.PI / 2) * i;
  else {
    let n = Math.atan2(t, r);
    n < Math.PI / 2 && (n += 2 * Math.PI), c = 4 * e + Math.PI * i + (n - Math.PI / 2) * i;
  }
  return { offset: o - i, nx: h, nz: l, s: (c % T.length + T.length) % T.length };
}
function Q(s, t, e = "jump") {
  if (e === "flat") return { height: 0, slope: 0, gap: !1 };
  if (e === "bridge") {
    if (t < -8 && s > -10 && s < 10) {
      const i = (s + 10) / 20;
      return { height: 1.2 * (1 - Math.cos(i * Math.PI * 2)) / 2, slope: 1.2 * Math.PI / 20 * Math.sin(i * Math.PI * 2), gap: !1 };
    }
    return { height: 0, slope: 0, gap: !1 };
  }
  return t < -8 && s > -6 && s < 1 ? { height: (s + 6) * 0.18, slope: 0.18, gap: !1 } : t < -8 && s >= 1 && s < 5 ? { height: -4, slope: 0, gap: !0 } : { height: 0, slope: 0, gap: !1 };
}
function pt(s) {
  return {
    mass: 0.116 + (s.shell === "wing" ? 0.014 : 6e-3) + 8e-3,
    radius: s.diameter / 100,
    grip: s.tire === "grip" ? 1.15 : 0.63,
    rolling: s.tire === "grip" ? 0.012 : 8e-3,
    inertia: (0.116 + 0.014 + 8e-3) * 1.12,
    rollLimit: s.ballast === "center" ? 1 : 0.78
  };
}
function U(s = 0) {
  const t = 3 - s * 3, e = dt(t);
  return { id: s, x: e.x, z: e.z, y: 0, vx: 0, vz: 0, vy: 0, yaw: 0, omega: 0, pitch: 0, roll: 0, distance: 0, lastS: (t % T.length + T.length) % T.length, time: 0, lap: 0, lapTimes: [], lapStart: 0, contacts: 0, landings: 0, impact: 0, offTrack: !1, finished: !1, airborne: !1, maxSpeed: 0 };
}
function Mt(s, t, e = K, i = !0, a = "jump") {
  if (s.offTrack || s.finished) return;
  e = ot(e, 0, 1 / 120);
  const r = pt(t), o = 196, h = Math.cos(s.yaw), l = Math.sin(s.yaw), c = s.vx * h + s.vz * l, n = -s.vx * l + s.vz * h, d = Q(s.x, s.z, a);
  if (!d.gap && s.y <= d.height + 0.018 && s.vy <= d.slope * s.vx + 0.05) {
    const g = 133.33333333333334 * Math.PI * 2 / t.gear * r.radius, p = i ? 12e-4 * t.gear * 0.78 / (r.radius * 0.05) * Math.max(0, 1 - Math.max(0, c) / g) : 0, b = r.rolling + Math.abs(c) * 25e-5, y = (p - (Math.abs(c) > 0.05 ? b : 0)) / (r.mass * 0.05), m = ot(-n * 16, -r.grip * o, r.grip * o), f = -o * d.slope / (1 + d.slope * d.slope);
    s.vx += (h * y - l * m + f) * e, s.vz += (l * y + h * m) * e, s.omega *= Math.exp(-4 * e), s.y = d.height, s.vy = d.slope * s.vx, s.pitch += (Math.atan(d.slope * h) - s.pitch) * Math.min(1, e * 18), s.roll *= Math.exp(-10 * e), s.airborne = !1;
  } else
    s.vy -= o * e, s.airborne = !0, s.pitch += (t.ballast === "rear" ? 0.18 : -0.13) * e;
  s.x += s.vx * e, s.z += s.vz * e, s.y += s.vy * e, s.yaw += s.omega * e;
  const x = Q(s.x, s.z, a);
  if (!x.gap && s.y < x.height) {
    const g = Math.max(0, -s.vy);
    if (s.y = x.height, s.vy = 0, s.airborne && g > 3) {
      s.landings++, s.impact = Math.max(s.impact, g / 50);
      const p = ot(g * (t.ballast === "rear" ? 5e-3 : 25e-4), 0, 0.35);
      s.vx *= 1 - p, s.vz *= 1 - p, s.roll = t.ballast === "rear" ? 0.11 : 0.03;
    }
    s.airborne = !1;
  }
  if (s.y < 1.8)
    for (const g of [-1.28, 1.28]) for (const p of [-0.88, 0.88]) {
      const b = g * h - p * l, y = g * l + p * h, m = yt(s.x + b, s.z + y), f = T.width / 2 - 0.13, v = Math.abs(m.offset) - f;
      if (v > 0) {
        const S = m.offset > 0 ? -1 : 1, q = m.nx * S, $ = m.nz * S;
        s.x += q * v * 0.65, s.z += $ * v * 0.65;
        const L = (s.vx - s.omega * y) * q + (s.vz + s.omega * b) * $;
        if (L < 0) {
          const R = b * $ - y * q, B = -1.12 * L / (1 / r.mass + R * R / r.inertia);
          s.vx += B * q / r.mass, s.vz += B * $ / r.mass, s.omega += R * B / r.inertia, s.vx *= 0.997, s.vz *= 0.997, -L > 2 && s.impact < 0.06 && s.contacts++, s.impact = Math.max(s.impact, Math.min(1, -L / 40));
        }
      }
    }
  const M = yt(s.x, s.z);
  if (s.y < -2.5 || Math.abs(M.offset) > T.width / 2 + 1.8) {
    s.offTrack = !0;
    return;
  }
  let u = M.s - s.lastS;
  u > T.length / 2 && (u -= T.length), u < -T.length / 2 && (u += T.length), Math.abs(u) < 3 && (s.distance += u), s.lastS = M.s, s.time += e;
  const z = Math.max(0, Math.floor(s.distance / T.length));
  z > s.lap && (s.lap = z, s.lapTimes.push(s.time - s.lapStart), s.lapStart = s.time, z >= 3 && (s.finished = !0)), s.impact *= Math.exp(-9 * e), s.maxSpeed = Math.max(s.maxSpeed, Math.hypot(s.vx, s.vz));
}
function Nt(s, t, e, i) {
  if (!(s.offTrack || t.offTrack || Math.abs(s.y - t.y) > 0.8))
    for (const a of [-0.7, 0.7]) for (const r of [-0.7, 0.7]) {
      const o = t.x + Math.cos(t.yaw) * r - s.x - Math.cos(s.yaw) * a, h = t.z + Math.sin(t.yaw) * r - s.z - Math.sin(s.yaw) * a, l = Math.hypot(o, h);
      if (l >= 1.5 || l < 1e-5) continue;
      const c = o / l, n = h / l, d = pt(e).mass, w = pt(i).mass, x = 1 / d + 1 / w, M = 1.5 - l;
      s.x -= c * M / (d * x), s.z -= n * M / (d * x), t.x += c * M / (w * x), t.z += n * M / (w * x);
      const u = (t.vx - s.vx) * c + (t.vz - s.vz) * n;
      if (u < 0) {
        const z = -1.2 * u / x;
        s.vx -= z * c / d, s.vz -= z * n / d, t.vx += z * c / w, t.vz += z * n / w, s.impact = t.impact = 0.65;
      }
    }
}
function zt(s) {
  const t = new C(), e = new Tt(), i = (m) => new G({ color: m, roughness: 0.46, metalness: 0.06 }), a = (m, f, v = 0, S = 0, q = 0) => {
    const $ = new E(m, f);
    return $.position.set(v, S, q), $.receiveShadow = !0, $.castShadow = !0, t.add($), $;
  }, r = i(16772304), o = i(2445931), h = i(5159853), l = i(16761702);
  a(new X(69, 1.1, 35, 3, 1), i(12157774), 0, -1, 0), a(new X(67, 0.2, 33, 3, 0.8), i(2508379), 0, -0.38, 0), a(new X(44, 0.3, 14, 3, 2), i(7121568), 0, -0.17, 0);
  const c = 360, n = new it(new N(1, 0.72, 0.17), r, c * 2), d = new it(new N(1, 0.06, 0.22), r, c * 2), w = new it(new N(0.035, 0.018, T.width), o, c);
  let x = 0, M = 0;
  const u = [], z = [], g = [];
  for (let m = 0; m < c; m++) {
    const f = dt(m / c * T.length), v = dt((m + 1) / c * T.length), S = Q(f.x, f.z, s), q = Q(v.x, v.z, s);
    if (S.gap || q.gap) continue;
    const $ = u.length / 3, L = new wt(s === "jump" && f.z < -8 && f.x > -6 && f.x < 1 ? 16762477 : 15003369);
    for (const [D, St] of [[f, S], [v, q]]) for (const gt of [-1, 1])
      u.push(D.x - D.tz * gt * T.width / 2, St.height, D.z + D.tx * gt * T.width / 2), z.push(L.r, L.g, L.b);
    g.push($, $ + 2, $ + 1, $ + 1, $ + 2, $ + 3);
    const R = v.x - f.x, B = v.z - f.z, ft = Math.hypot(R, B), $t = Math.atan2(q.height - S.height, ft);
    for (const D of [-1, 1])
      e.position.set((f.x + v.x) / 2 - f.tz * D * T.width / 2, (S.height + q.height) / 2 + 0.36, (f.z + v.z) / 2 + f.tx * D * T.width / 2), e.rotation.set(0, -Math.atan2(B, R), 0), e.rotateZ($t), e.scale.set(ft * 1.04, 1, 1), e.updateMatrix(), n.setMatrixAt(x, e.matrix), n.setColorAt(x, new wt(Math.floor(m / 15) % 2 ? 15788764 : D === 1 ? 4107956 : 15041136)), e.position.y += 0.37, e.updateMatrix(), d.setMatrixAt(x++, e.matrix);
    m % 12 === 0 && (e.position.set(f.x, S.height + 0.012, f.z), e.rotation.set(0, -Math.atan2(f.tz, f.tx), 0), e.scale.set(1, 1, 1), e.updateMatrix(), w.setMatrixAt(M++, e.matrix)), S.height > 0.15 && m % 10 === 0 && a(new N(0.32, S.height + 0.32, 4), o, f.x, (S.height - 0.32) / 2, f.z);
  }
  n.count = d.count = x, w.count = M, n.castShadow = !0, t.add(n, d, w);
  const p = new J();
  p.setAttribute("position", new Y(u, 3)), p.setAttribute("color", new Y(z, 3)), p.setIndex(g), p.computeVertexNormals(), a(p, new G({ vertexColors: !0, side: Z, roughness: 0.82 }));
  for (const m of [-14.85, -9.15]) a(new V(0.16, 0.2, 3.4, 12), h, -15, 1.7, m);
  a(new X(0.45, 0.65, 6.3, 2, 0.18), l, -15, 3.4, -12);
  for (let m = 0; m < 10; m++) for (let f = 0; f < 2; f++) a(new N(0.42, 0.024, 0.49), m % 2 === f ? o : r, -15 + f * 0.42, 0.02, -14.2 + m * 0.49);
  const b = a(new bt(2, 24, 16), i(15119707), 0, 2, 0), y = a(new ut(2.65, 0.13, 8, 48), r, 0, 2, 0);
  y.rotation.x = 1.2, y.rotation.y = 0.24, b.rotation.y = 0.4, a(new V(2.8, 3, 0.35, 32), o, 0, 0.15, 0);
  for (const m of [-17, -11, 11, 17]) for (const f of [-3.4, 3.4])
    a(new V(0.12, 0.16, 1.2, 8), i(11171916), m, 0.6, f), a(new bt(0.85, 12, 8), i(m < 0 ? 9554063 : 6929070), m, 1.4, f).scale.y = 1.15;
  return t;
}
function kt(s) {
  const t = /* @__PURE__ */ new Set(), e = /* @__PURE__ */ new Set();
  s.traverse((i) => {
    i instanceof E && (t.add(i.geometry), (Array.isArray(i.material) ? i.material : [i.material]).forEach((a) => e.add(a)), i instanceof it && i.dispose());
  }), t.forEach((i) => i.dispose()), e.forEach((i) => i.dispose()), s.clear();
}
const H = (s) => ({ time: s.time, x: s.x, y: s.y, z: s.z, yaw: s.yaw, pitch: s.pitch, roll: s.roll, distance: s.distance });
class Xt {
  frames = [];
  start(t) {
    this.frames = [H(t)];
  }
  sample(t) {
    this.frames.length < 3601 && t.time - (this.frames.at(-1)?.time ?? -1) >= 1 / 30 - 1e-6 && this.frames.push(H(t));
  }
  finish(t, e, i) {
    if (!(!t.finished || t.offTrack || t.time > 120 || !this.frames.length))
      return this.frames.at(-1).time < t.time && this.frames.push(H(t)), { track: i, setup: { ...e }, frames: this.frames.map(H), time: t.time };
  }
}
function Yt(s, t) {
  const e = s.frames;
  if (t <= e[0].time) return H(e[0]);
  if (t >= s.time) return H(e[e.length - 1]);
  let i = 0, a = e.length - 1;
  for (; a - i > 1; ) {
    const n = i + a >> 1;
    e[n].time <= t ? i = n : a = n;
  }
  const r = e[i], o = e[a], h = (t - r.time) / (o.time - r.time), l = H(r);
  l.time = t;
  for (const n of ["x", "y", "z", "distance", "pitch", "roll"]) l[n] = r[n] + (o[n] - r[n]) * h;
  const c = Math.atan2(Math.sin(o.yaw - r.yaw), Math.cos(o.yaw - r.yaw));
  return l.yaw = r.yaw + c * h, l;
}
class Zt {
  constructor(t) {
    this.stage = t, this.renderer = new At({ antialias: !0, alpha: !0, powerPreference: "low-power" }), this.renderer.setPixelRatio(1), this.renderer.shadowMap.enabled = !0, this.renderer.shadowMap.type = Ct, this.renderer.toneMapping = It, this.renderer.domElement.setAttribute("aria-label", "四驅車模型，可拖動旋轉，也可點零件"), this.renderer.domElement.tabIndex = 0, t.append(this.renderer.domElement);
    const e = new Ht(), i = new Et(this.renderer);
    this.environment = i.fromScene(e, 0.04), this.scene.environment = this.environment.texture, this.scene.environmentIntensity = 0.4, this.renderer.toneMappingExposure = 0.85, e.dispose(), i.dispose(), this.scene.add(new Gt(13036287, 2504790, 1.1));
    const a = new Lt(16774096, 1.8);
    a.position.set(12, 35, -18), a.castShadow = !0, a.shadow.mapSize.set(1024, 1024), Object.assign(a.shadow.camera, { left: -40, right: 40, top: 32, bottom: -32 }), a.shadow.bias = -2e-4, this.scene.add(a);
    const r = new E(new V(2.25, 2.3, 0.18, 64), new G({ color: 1583683, metalness: 0.45, roughness: 0.35 }));
    r.position.y = -0.16, r.receiveShadow = !0, this.plinth.add(r);
    const o = new E(new ut(2.17, 0.012, 6, 100), new jt({ color: 7137535 }));
    o.rotation.x = Math.PI / 2, o.position.y = -0.058, this.plinth.add(o), this.scene.add(this.plinth, this.car.root, this.arena, this.rival.root), this.rival.root.visible = !1, this.buildTrack(), this.arena.visible = !1, this.observer = new ResizeObserver(() => {
      this.resize(), this.wake();
    }), this.observer.observe(t);
    const h = this.abort.signal, l = this.renderer.domElement;
    l.addEventListener("pointerdown", (c) => {
      this.race || (this.dragging = { x: c.clientX, y: c.clientY, yaw: this.orbit.yaw, pitch: this.orbit.pitch, id: c.pointerId, moved: !1 }, l.setPointerCapture(c.pointerId));
    }, { signal: h }), l.addEventListener("pointermove", (c) => {
      if (!this.dragging) return;
      const n = this.dragging, d = c.clientX - n.x, w = c.clientY - n.y;
      Math.hypot(d, w) > 5 && (n.moved = !0), this.orbit.yaw = n.yaw - d * 8e-3, this.orbit.pitch = Math.max(0.15, Math.min(1.35, n.pitch + w * 6e-3)), this.wake();
    }, { signal: h }), l.addEventListener("pointerup", (c) => {
      if (!this.dragging) return;
      const n = this.dragging.moved;
      if (this.dragging = void 0, l.hasPointerCapture(c.pointerId) && l.releasePointerCapture(c.pointerId), !n) {
        const d = l.getBoundingClientRect(), w = new Rt();
        w.setFromCamera(new tt((c.clientX - d.left) / d.width * 2 - 1, 1 - (c.clientY - d.top) / d.height * 2), this.camera);
        for (const x of w.intersectObject(this.car.root, !0)) {
          let M = x.object;
          for (; M && !M.userData.part; ) M = M.parent;
          if (M && M.visible) {
            this.onPick?.(M.userData.part);
            break;
          }
        }
      }
    }, { signal: h }), l.addEventListener("pointercancel", () => {
      this.dragging = void 0;
    }, { signal: h }), l.addEventListener("keydown", (c) => {
      ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(c.key) && !this.race && (c.preventDefault(), this.orbit.yaw += c.key === "ArrowLeft" ? -0.12 : c.key === "ArrowRight" ? 0.12 : 0, this.orbit.pitch = Math.max(0.15, Math.min(1.35, this.orbit.pitch + (c.key === "ArrowUp" ? 0.1 : c.key === "ArrowDown" ? -0.1 : 0))), this.wake()), c.key.toLowerCase() === "c" && this.setCamera(!this.first);
    }, { signal: h }), document.addEventListener("visibilitychange", () => {
      document.hidden ? (cancelAnimationFrame(this.frame), this.frame = 0, this.previous = 0, this.gain?.gain.setTargetAtTime(0, this.audio.currentTime, 0.05)) : this.wake();
    }, { signal: h }), l.addEventListener("webglcontextlost", (c) => {
      c.preventDefault(), this.pause(), this.stage.dispatchEvent(new CustomEvent("mini4wd-error", { bubbles: !0, detail: "3D 畫面暫停，請返回後重新開啟。" }));
    }, { signal: h }), this.scene.add(this.halo), this.halo.visible = !1, this.halo.material.depthTest = !1, this.halo.renderOrder = 20, this.balloon = document.createElement("span"), this.balloon.className = "m4-balloon", this.balloon.hidden = !0, t.append(this.balloon), this.resize(), this.wake();
  }
  stage;
  track = "flat";
  ghosts = /* @__PURE__ */ new Map();
  recording = new Xt();
  ghost;
  activeGhost;
  savedGhost = !1;
  hasGhost() {
    return this.ghosts.has(this.track);
  }
  ghostTime() {
    return this.activeGhost?.time;
  }
  isCollisionRun() {
    return this.compare;
  }
  hideGhost() {
    this.activeGhost = void 0, this.ghost && (this.ghost.root.visible = !1), this.wake();
  }
  car = new ct();
  state = U();
  setup = { ..._ };
  onUpdate;
  onPick;
  renderer;
  scene = new Bt();
  camera = new et(42, 1, 0.025, 300);
  environment;
  halo = new Dt(new O(), 16768137);
  balloon;
  arena = new C();
  plinth = new C();
  rival = new ct();
  rivalState = U(1);
  race = !1;
  running = !1;
  power = !1;
  first = !1;
  reduced = !0;
  frame = 0;
  previous = 0;
  accumulator = 0;
  distance = 0;
  lastUI = 0;
  dead = !1;
  orbit = { yaw: 0.75, pitch: 0.38, zoom: 5.2 };
  installed = at();
  exploded = !1;
  xray = !1;
  selected = "";
  observer;
  abort = new AbortController();
  dragging;
  audio;
  oscillator;
  gain;
  sound = !1;
  compare = !1;
  look = new A();
  goal = new A();
  target = new A();
  wind;
  windGain;
  explodedBounds = new ht();
  explodedCorners = [];
  buildTrack() {
    this.arena.add(zt(this.track));
  }
  resize() {
    const t = Math.max(1, this.stage.clientWidth), e = Math.max(1, this.stage.clientHeight), i = Math.min(1, 1280 / t, 800 / e);
    this.renderer.setSize(Math.round(t * i), Math.round(e * i), !1), this.camera.aspect = t / e, this.camera.updateProjectionMatrix();
  }
  setMode(t) {
    this.pause(), this.race = t, this.arena.visible = t, this.plinth.visible = !t, this.rival.root.visible = t && this.compare, this.ghost && (this.ghost.root.visible = t && !!this.activeGhost), this.power = !1, this.car.root.position.set(0, 0, 0), this.car.root.rotation.set(0, 0, 0), this.camera.fov = t ? 65 : 42, this.camera.updateProjectionMatrix(), this.previous = 0, this.layout(), this.wake();
  }
  configure(t) {
    this.setup = { ...t }, this.car.configure(t), this.wake();
  }
  setParts(t, e, i, a = "") {
    this.installed = new Set(t), e && !this.exploded && (this.orbit.zoom = 5.2), this.exploded = e, this.xray = i, this.selected = a, this.layout(), this.wake();
  }
  layout() {
    if (this.car.layout(this.race ? at() : this.installed, this.race ? 0 : Number(this.exploded), !this.race && this.xray, this.race ? "" : this.selected), this.exploded) {
      const t = new O();
      for (const e of this.car.parts.values()) e.visible && t.union(new O().setFromObject(e));
      t.getBoundingSphere(this.explodedBounds), this.explodedCorners = [];
      for (const e of this.car.parts.values()) if (e.visible) {
        const i = new O().setFromObject(e);
        for (const a of [i.min.x, i.max.x]) for (const r of [i.min.y, i.max.y]) for (const o of [i.min.z, i.max.z]) this.explodedCorners.push(new A(a, r, o).sub(this.explodedBounds.center));
      }
    }
  }
  setCamera(t) {
    this.first = t, this.previous = 0, this.wake();
  }
  setTrack(t) {
    this.track !== t && (this.pause(), kt(this.arena), this.track = t, this.buildTrack(), this.reset(), this.wake());
  }
  setReduced(t) {
    this.reduced = t, this.wake();
  }
  setPower(t) {
    this.power = t, this.wake();
  }
  zoom(t) {
    this.orbit.zoom = Math.max(4, Math.min(11, this.orbit.zoom + t)), this.wake();
  }
  reset() {
    this.state = U(), this.rivalState = U(1), this.rival.root.visible = !1, this.ghost && (this.ghost.root.visible = !1), this.activeGhost = void 0, this.distance = 0, this.wake();
  }
  run(t = !1, e = !1) {
    this.state = U(), this.rivalState = U(1), this.compare = t, this.rival.root.visible = t, this.rival.configure({ ..._, color: "#ff9266" }), this.activeGhost = !t && e ? this.ghosts.get(this.track) : void 0, this.activeGhost && (this.ghost || (this.ghost = new ct(), this.scene.add(this.ghost.root)), this.ghost.configure(this.activeGhost.setup), this.ghost.layout(at(), 0, !1, ""), this.ghost.root.traverse((i) => {
      if (i instanceof E) {
        i.castShadow = !1, i.receiveShadow = !1;
        for (const a of Array.isArray(i.material) ? i.material : [i.material])
          a.transparent = !0, a.opacity = 0.3, a.depthWrite = !1, a instanceof G && (a.color.set(11840767), a.emissive.set(6575303), a.emissiveIntensity = 0.45);
      }
    })), this.ghost && (this.ghost.root.visible = !!this.activeGhost), this.recording.start(this.state), this.savedGhost = !1, this.running = !0, this.accumulator = 0, this.distance = 0, this.wake();
  }
  pause() {
    this.running = !1, this.power = !1, this.gain && this.gain.gain.setTargetAtTime(0, this.audio.currentTime, 0.05), this.windGain && this.windGain.gain.setTargetAtTime(0, this.audio.currentTime, 0.05), this.wake();
  }
  setSound(t) {
    if (this.sound = t, t && !this.audio)
      try {
        this.audio = new AudioContext(), this.oscillator = this.audio.createOscillator(), this.gain = this.audio.createGain(), this.oscillator.type = "sawtooth", this.gain.gain.value = 0, this.oscillator.connect(this.gain), this.gain.connect(this.audio.destination), this.oscillator.start();
        const e = this.audio.createBuffer(1, this.audio.sampleRate, this.audio.sampleRate), i = e.getChannelData(0);
        for (let r = 0; r < i.length; r++) i[r] = Math.random() * 2 - 1;
        this.wind = this.audio.createBufferSource(), this.wind.buffer = e, this.wind.loop = !0;
        const a = this.audio.createBiquadFilter();
        a.type = "lowpass", a.frequency.value = 1100, this.windGain = this.audio.createGain(), this.windGain.gain.value = 0, this.wind.connect(a), a.connect(this.windGain), this.windGain.connect(this.audio.destination), this.wind.start();
      } catch {
        this.sound = !1;
      }
    t ? this.audio?.resume() : (this.gain && (this.gain.gain.value = 0), this.windGain && (this.windGain.gain.value = 0));
  }
  thumbnails() {
    const t = {}, e = this.renderer.getSize(new tt());
    this.renderer.setSize(160, 110, !1);
    const i = new et(35, 160 / 110, 0.01, 100);
    this.plinth.visible = !1;
    for (const [a, r] of this.car.parts) {
      for (const [w, x] of this.car.parts) x.visible = w === a;
      const o = a === "gears" ? this.car.gears[1] : a === "rollers" ? r.children[0] : r, h = r.children.map((w) => w.visible);
      o !== r && r.children.forEach((w, x) => w.visible = a === "rollers" ? x < 2 : w === o);
      const l = new O().setFromObject(o), c = l.getCenter(new A()), n = l.getBoundingSphere(new ht()).radius, d = n / Math.sin(F.degToRad(17.5)) * 0.92;
      i.position.copy(c).add(new A(0.85, 0.6, 1).normalize().multiplyScalar(d)), i.lookAt(c), this.renderer.render(this.scene, i), t[a] = this.renderer.domElement.toDataURL("image/png"), r.children.forEach((w, x) => w.visible = h[x]);
    }
    return this.renderer.setSize(e.x, e.y, !1), this.plinth.visible = !0, this.layout(), this.wake(), t;
  }
  trackThumbnails() {
    const t = {}, e = this.renderer.getSize(new tt());
    this.renderer.setSize(256, 144, !1), this.car.root.visible = !1, this.plinth.visible = !1;
    const i = new et(40, 256 / 144, 0.1, 300);
    i.position.set(43, 59, 58), i.lookAt(0, 0, 0);
    for (const a of ["flat", "bridge", "jump"]) {
      const r = zt(a);
      this.scene.add(r), this.renderer.render(this.scene, i), t[a] = this.renderer.domElement.toDataURL("image/png"), this.scene.remove(r), kt(r);
    }
    return this.car.root.visible = !0, this.plinth.visible = !0, this.renderer.setSize(e.x, e.y, !1), this.wake(), t;
  }
  optionThumbnails() {
    const t = {}, e = this.renderer.getSize(new tt());
    this.renderer.setSize(200, 120, !1), this.plinth.visible = !1;
    const i = new et(35, 200 / 120, 0.01, 100), a = [["tire:grip", "tire-fl", { tire: "grip" }], ["tire:hard", "tire-fl", { tire: "hard" }], ["diameter:26", "tire-fl", { diameter: 26 }], ["diameter:30", "tire-fl", { diameter: 30 }], ["shell:arrow", "shell", { shell: "arrow" }], ["shell:wing", "shell", { shell: "wing" }]];
    for (const [r, o, h] of a) {
      this.car.configure({ ...this.setup, ...h });
      for (const [x, M] of this.car.parts) M.visible = x === o;
      const l = this.car.parts.get(o), c = new O().setFromObject(l), n = c.getCenter(new A()), d = c.getBoundingSphere(new ht()).radius, w = (r.startsWith("diameter:") ? 0.36 : d) / Math.sin(F.degToRad(17.5)) * 1.1;
      i.position.copy(n).add(new A(0.85, 0.6, 1).normalize().multiplyScalar(w)), i.lookAt(n), this.renderer.render(this.scene, i), t[r] = this.renderer.domElement.toDataURL("image/png");
    }
    return this.car.configure(this.setup), this.layout(), this.plinth.visible = !0, this.renderer.setSize(e.x, e.y, !1), this.wake(), t;
  }
  wake() {
    !this.dead && !this.frame && !document.hidden && (this.frame = requestAnimationFrame((t) => this.render(t)));
  }
  render(t) {
    if (this.frame = 0, this.dead) return;
    if (this.previous && t - this.previous < 1e3 / 30) {
      this.wake();
      return;
    }
    const e = !this.previous, i = e ? 0 : Math.min(0.05, (t - this.previous) / 1e3);
    if (this.previous = t, this.race) {
      if (this.running) {
        for (this.accumulator += i; this.accumulator >= K; )
          Mt(this.state, this.setup, K, !0, this.track), this.compare ? (Mt(this.rivalState, _, K, !0, this.track), Nt(this.state, this.rivalState, this.setup, _)) : this.recording.sample(this.state), this.accumulator -= K;
        this.distance += Math.hypot(this.state.vx, this.state.vz) * i, (this.state.finished || this.state.offTrack) && (this.running = !1);
      }
      if (this.state.finished && !this.compare && !this.savedGhost) {
        const n = this.recording.finish(this.state, this.setup, this.track);
        n && this.ghosts.set(this.track, n), this.savedGhost = !0;
      }
      if (this.activeGhost && this.ghost) {
        const n = Yt(this.activeGhost, this.state.time);
        this.ghost.root.position.set(n.x, n.y + (this.activeGhost.setup.diameter - 26) / 100, n.z), this.ghost.root.rotation.set(0, -n.yaw, 0), this.ghost.root.rotateZ(n.pitch), this.ghost.root.rotateX(n.roll), this.ghost.animate(n.distance, !0, this.activeGhost.setup.gear, this.activeGhost.setup.diameter / 100);
      }
      for (const [n, d] of [[this.car, this.state], [this.rival, this.rivalState]])
        n.root.position.set(d.x, d.y + (n === this.car ? (this.setup.diameter - 26) / 100 : 0), d.z), n.root.rotation.set(0, -d.yaw, 0), n.root.rotateZ(d.pitch), n.root.rotateX(d.roll), n.animate(this.distance, !0, n === this.car ? this.setup.gear : 4, n === this.car ? this.setup.diameter / 100 : 0.26);
      const r = this.state, o = new A(Math.cos(r.yaw), 0, Math.sin(r.yaw)), h = new A(r.x, r.y, r.z), l = Math.hypot(r.vx, r.vz);
      if (this.goal.copy(h).addScaledVector(o, this.first ? 1.4 : -6.5).add(new A(0, this.first ? 1.2 : 3.8, 0)), this.target.copy(h).addScaledVector(o, this.first ? 9 : 5).add(new A(0, 0.7, 0)), !this.first && this.activeGhost && this.ghost) {
        const n = h.distanceTo(this.ghost.root.position);
        n < 24 && (this.goal.addScaledVector(o, -Math.min(8, n * 0.4)), this.goal.y += Math.min(5, n * 0.2), this.target.lerp(this.ghost.root.position, 0.3));
      }
      const c = e ? 1 : 1 - Math.exp(-i * (this.first ? 18 : 7));
      this.camera.position.lerp(this.goal, c), this.look.lerp(this.target, c), this.reduced || (this.camera.position.y += Math.sin(t * 0.025) * Math.min(0.035, l * 1e-3) + r.impact * 0.08), this.camera.lookAt(this.look), this.camera.fov += (65 + Math.min(9, l * 0.18) - this.camera.fov) * (e ? 1 : 0.08), !this.running && r.time === 0 && (this.camera.position.set(18, 48, 56), this.camera.lookAt(0, 0, 0), this.camera.fov = 46), this.camera.updateProjectionMatrix();
    } else if (this.car.root.position.set(0, (this.setup.diameter - 26) / 100, 0), this.car.root.rotation.set(0, 0, 0), this.power && (this.distance += i * 1.8, this.car.animate(this.distance, !0, this.setup.gear, this.setup.diameter / 100)), this.exploded) {
      const r = Math.tan(F.degToRad(this.camera.fov / 2)), o = r * this.camera.aspect, h = new A(Math.cos(this.orbit.yaw), Math.sin(this.orbit.pitch), Math.sin(this.orbit.yaw)).normalize(), l = new A().crossVectors(new A(0, 1, 0), h).normalize(), c = new A().crossVectors(h, l);
      let n = 1;
      for (const d of this.explodedCorners) n = Math.max(n, d.dot(h) + Math.max(Math.abs(d.dot(c)) / r, Math.abs(d.dot(l)) / o));
      this.camera.position.copy(this.explodedBounds.center).addScaledVector(h, n * 1.12 * this.orbit.zoom / 5.2), this.camera.lookAt(this.explodedBounds.center);
    } else {
      const r = this.orbit.zoom;
      this.camera.position.set(Math.cos(this.orbit.yaw) * r, Math.sin(this.orbit.pitch) * r + 0.5, Math.sin(this.orbit.yaw) * r), this.camera.lookAt(0, 0.4, 0);
    }
    if (this.audio && this.gain && this.oscillator) {
      const r = this.sound && (this.running || this.power);
      this.gain.gain.setTargetAtTime(r ? 0.015 : 0, this.audio.currentTime, 0.05), this.oscillator.frequency.setTargetAtTime(100 + (this.race ? Math.hypot(this.state.vx, this.state.vz) * 13 : 130), this.audio.currentTime, 0.08), this.windGain?.gain.setTargetAtTime(r && this.race ? Math.min(0.045, Math.hypot(this.state.vx, this.state.vz) * 7e-4) + this.state.impact * 0.045 : 0, this.audio.currentTime, 0.03);
    }
    this.car.root.updateMatrixWorld(!0);
    const a = this.car.parts.get(this.selected);
    if (this.halo.visible = !this.race && !!a?.visible, this.balloon.hidden = !this.halo.visible, this.halo.visible && a) {
      this.halo.box.setFromObject(a).expandByScalar(0.06), this.halo.updateMatrixWorld(!0);
      const r = this.halo.box.getCenter(new A()).project(this.camera);
      this.balloon.textContent = String(P.findIndex((o) => o.id === this.selected) + 1), this.balloon.style.left = Math.max(6, Math.min(this.stage.clientWidth - 32, (r.x + 1) * this.stage.clientWidth / 2)) + "px", this.balloon.style.top = Math.max(6, Math.min(this.stage.clientHeight - 32, (1 - r.y) * this.stage.clientHeight / 2)) + "px";
    }
    this.renderer.render(this.scene, this.camera), (t - this.lastUI > 100 || this.state.finished || this.state.offTrack) && (this.onUpdate?.(this.state), this.lastUI = t), this.running || this.power ? this.wake() : this.previous = 0;
  }
  destroy() {
    this.dead = !0, cancelAnimationFrame(this.frame), this.abort.abort(), this.observer.disconnect(), this.car.dispose(), this.rival.dispose(), this.ghost?.dispose(), this.ghosts.clear(), this.arena.traverse((t) => {
      t instanceof E && (t.geometry.dispose(), (Array.isArray(t.material) ? t.material : [t.material]).forEach((e) => e.dispose()));
    }), this.plinth.traverse((t) => {
      t instanceof E && (t.geometry.dispose(), t.material.dispose());
    }), this.halo.geometry.dispose(), this.halo.material.dispose(), this.balloon.remove(), this.environment.dispose(), this.renderer.dispose(), this.oscillator?.stop(), this.wind?.stop(), this.audio?.close(), this.renderer.domElement.remove();
  }
}
function _t(s) {
  let t = "", e = !1;
  for (let i = 0; i <= 60; i++) {
    const a = -12 + i * 0.4, r = Q(a, -12, s);
    if (r.gap) {
      e = !1;
      continue;
    }
    t += (e ? "L" : "M") + i * 2 + " " + (30 - r.height * 19) + " ", e = !0;
  }
  return `<svg class="m4-track-profile" viewBox="0 0 120 36" aria-hidden="true"><path d="${t}" fill="none" stroke="#ffe29b" stroke-width="5" stroke-linecap="round"/></svg>`;
}
function Kt(s) {
  const t = s * 12, e = 46 / (t + 12), i = t * e, a = 12 * e, r = (o, h, l, c, n) => `<polygon points="${Array.from({ length: c * 4 }, (w, x) => {
    const M = x * Math.PI * 2 / (c * 4), u = l * (x % 4 === 0 || x % 4 === 3 ? 0.89 : 1);
    return `${o + Math.cos(M) * u},${h + Math.sin(M) * u}`;
  }).join(" ")}" fill="${n}" stroke="#fff3c5" stroke-width=".8"/><circle cx="${o}" cy="${h}" r="${l * 0.3}" fill="#183148"/><circle cx="${o - l * 0.1}" cy="${h - l * 0.1}" r="${l * 0.1}" fill="#fff7dc"/>`;
  return `<svg viewBox="0 0 150 100" aria-hidden="true">${r(52 - a, 52, a, 12, "#75e4d1")}${r(52 + i * 0.85, 52, i, t, "#f9c667")}</svg>`;
}
function Jt(s) {
  return `<svg viewBox="0 0 160 100" aria-hidden="true"><rect x="27" y="19" width="105" height="63" rx="22" fill="#7dd8e0" stroke="#e1fcff" stroke-width="2"/><path d="M109 32l14 18-14 18" fill="#173955"/><path d="M39 34h45v32H39z" fill="#243d56"/><circle cx="${s ? 43 : 78}" cy="50" r="17" fill="#ffc965" stroke="#fff4c7" stroke-width="3"/><circle cx="${s ? 43 : 78}" cy="50" r="5" fill="#ba7332"/><path d="M35 10h20m45 0h20M35 90h20m45 0h20" stroke="#152437" stroke-width="12" stroke-linecap="round"/></svg>`;
}
function Qt(s, t) {
  const e = (i) => `<img src="${t[i] || ""}" alt="">`;
  return `<div class="m4-picture-prompt" aria-hidden="true">${s === 0 ? `<b>?</b><i>→</i>${e("motor")}<i>→</i>${e("rim-fl")}` : s === 1 ? `${e("motor")}<i>→</i><b>?</b><i>→</i>${e("rim-fl")}` : `<span class="m4-rail-picture">${e("shell")}<b>?</b><i>↪</i></span>`}</div>`;
}
const mt = { back: "M15 5 8 12l7 7M8 12h13", voice: "m4 9 4 0 5-4v14l-5-4H4zM17 8q6 4 0 8", replay: "M5 8a8 8 0 1 1-1 8M5 3v5h5", quiz: "m5 16 11-11 3 3-11 11-4 1zM14 7l3 3", notes: "M5 3h14v18H5zM8 8h8M8 12h8M8 16h5", learn: "M3 5q5-3 9 0 5-3 9 0v15q-5-3-9 0-4-3-9 0zM12 5v15", parts: "M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z", build: "m4 20 9-9M14 4a5 5 0 0 0 6 6l-4-1-1-4z", tune: "M4 7h16M4 17h16M8 4v6M16 14v6", race: "M5 21V3m0 1h14l-3 5 3 5H5", camera: "M3 7h5l2-3h4l2 3h5v13H3zM15 13a3 3 0 1 1-6 0 3 3 0 0 1 6 0", power: "M12 3v9M6 5a9 9 0 1 0 12 0", play: "m8 4 12 8-12 8z", stop: "M6 6h12v12H6z", next: "m9 5 7 7-7 7", prev: "m15 5-7 7 7 7", remove: "M5 12h14", plus: "M5 12h14M12 5v14", explode: "m9 9-6-6m0 5V3h5M15 15l6 6m0-5v5h-5M3 21l6-6M15 9l6-6", eye: "M2 12q10-15 20 0-10 15-20 0M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0", check: "m4 12 5 5L20 6" }, nt = (s) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${mt[s] || mt.parts}"/></svg>`;
mt.ghost = "M5 20V9a7 7 0 0 1 14 0v11l-3-2-4 2-4-2-3 2M9 9v2M15 9v2";
const k = (s, t, e = s) => `<button type="button" data-m4="${s}" aria-label="${t}" title="${t}">${nt(e)}<span>${t}</span></button>`, W = { flat: "平道", bridge: "坡橋", jump: "跳台" }, j = [
  { title: "電池讓車跑起來", text: "閉合開關，看馬達和四輪轉動。", voice: "電池經過接點和開關，形成完整電路，馬達把電能轉成轉動。按電源，看看馬達和四個輪圈。這台車不需要回拉。", part: "battery-a" },
  { title: "小齒輪，大力量", text: "馬達轉 4 圈，輪軸轉 1 圈。", voice: "現在是四比一減速。馬達轉四圈，輪軸轉一圈。較大的減速比可以增加輪端扭力，但降低空載輪速。", part: "gears" },
  { title: "動力送到四個輪子", text: "沿著長軸，找出前後輪軸。", voice: "馬達帶動減速齒輪，再經過長傳動軸，把動力送到前後輪軸，帶動四個輪圈和輪胎。這是軸傳動四輪驅動的簡化教學模型。", part: "shaft" },
  { title: "怎麼沿著彎道跑？", text: "導輪碰護欄，輪胎抓住地面。", voice: "小導輪受到護欄推力，車身就改變方向。輪胎和地面的摩擦也影響穩定性。第一人稱是車頭攝影機，不是駕駛座。", part: "rollers" }
];
class ie {
  constructor(t) {
    this.host = t, t.innerHTML = `<section class="m4-lab" aria-label="四驅車研究所"><header class="m4-header">${k("back", "返回")}<h2>四驅車研究所</h2><nav class="m4-helpers" aria-label="實驗小幫手">${k("voice", "語音")}${k("replay", "重聽")}${k("notes", "紀錄")}${k("quiz", "考題")}</nav></header><nav class="m4-nav" aria-label="探索步驟">${[["learn", "原理"], ["parts", "零件"], ["build", "組裝"], ["tune", "改裝"], ["race", "試跑"]].map(([a, r]) => k(a, r)).join("")}</nav><div class="m4-layout"><section class="m4-scene"><div class="m4-stage"></div><div class="m4-scene-tag">原創教學車 · 星羽 01</div><div class="m4-view-tools">${k("explode", "拆開", "explode")}${k("xray", "透視", "eye")}${k("zoom-in", "放大", "plus")}${k("zoom-out", "縮小", "remove")}</div><button class="m4-snap" data-m4="install" hidden aria-label="安裝選取零件">${nt("plus")}<span>裝到車上</span></button><div class="m4-hud" hidden><div><b data-speed>0.0</b><small>km/h · 模擬</small></div><div><b data-lap>0 / 3</b><small>完成圈數</small></div><div><b data-time>0.0</b><small>秒</small></div></div><div class="m4-overlay" hidden></div><div class="m4-countdown" hidden></div><p class="m4-status" role="status" aria-live="polite">電池讓車跑起來</p></section><aside class="m4-tools" aria-label="操作面板"></aside></div></section>`, this.root = t.querySelector(".m4-lab"), this.root.querySelector(".m4-hud").insertAdjacentHTML("beforeend", "<div data-shadow hidden><b>—</b><small>影子 · 上次秒數</small></div>");
    const e = this.root.querySelector(".m4-nav");
    this.root.querySelector(".m4-header").insertBefore(e, this.root.querySelector(".m4-helpers")), e.querySelector('[data-m4="parts"]').remove();
    const i = document.createElement("details");
    i.className = "m4-bom", i.innerHTML = '<summary aria-label="展開或收起零件表">☷</summary><div class="m4-bom-body"></div>', this.root.querySelector(".m4-scene").append(i), this.root.querySelector('[data-m4="quiz"] svg').outerHTML = '<img class="m4-pencil" src="images/experiments/car-v4/pencil.png" alt="">';
    try {
      this.view = new Zt(this.root.querySelector(".m4-stage")), this.view.configure(this.setup), this.thumbnails = this.view.thumbnails(), this.optionPhotos = this.view.optionThumbnails(), this.trackPhotos = this.view.trackThumbnails(), this.view.onPick = (a) => this.select(a), this.view.onUpdate = (a) => this.updateRace(a);
    } catch (a) {
      console.error("Mini 4WD WebGL", a), this.tell("這個裝置未能開啟 3D。請啟用硬體加速，或換支援 WebGL 的瀏覽器。");
    }
    this.root.addEventListener("click", (a) => {
      const r = a.target.closest("button");
      r && (r.dataset.part ? this.select(r.dataset.part) : r.dataset.choice ? this.choose(r.dataset.choice) : r.dataset.answer ? this.answer(r.dataset.answer) : this.action(r.dataset.m4 || ""));
    }, { signal: this.abort.signal }), this.root.addEventListener("pointerdown", (a) => this.dragStart(a), { signal: this.abort.signal }), this.root.addEventListener("pointermove", (a) => this.dragMove(a), { signal: this.abort.signal }), this.root.addEventListener("pointerup", (a) => this.dragEnd(a), { signal: this.abort.signal }), this.root.addEventListener("pointercancel", () => this.clearDrag(), { signal: this.abort.signal }), this.root.addEventListener("mini4wd-error", (a) => {
      this.stop(), this.tell(a.detail);
    }, { signal: this.abort.signal }), document.addEventListener("visibilitychange", () => {
      document.hidden && (this.stop(), this.voice.stop(), this.clearDrag(), this.render());
    }, { signal: this.abort.signal }), this.render(), this.voice.last = j[0].voice;
  }
  host;
  shadow = !1;
  track = "flat";
  trackPhotos = {};
  optionPhotos = {};
  root;
  view;
  voice = new Ft();
  abort = new AbortController();
  page = "learn";
  previous = "learn";
  lesson = 0;
  partPage = 0;
  selected = "";
  installed = at();
  started = !1;
  setup = { ..._ };
  thumbnails = {};
  exploded = !1;
  xray = !1;
  powered = !1;
  first = !1;
  sound = !1;
  reduced = !0;
  running = !1;
  recorded = !1;
  records = [];
  recordPage = 0;
  tunePage = 0;
  quizIndex = 0;
  drag;
  sequence = 0;
  dead = !1;
  tell(t, e = t) {
    this.root.querySelector(".m4-status").textContent = t, this.voice.say(this.page === "learn" && this.lesson === 1 ? `現在是 ${this.setup.gear} 比一減速。馬達轉 ${this.setup.gear} 圈，輪軸轉一圈。減速比增加，輪端扭力增加，但空載輪速降低。` : e);
  }
  render() {
    this.root.dataset.page = this.page;
    for (const i of ["learn", "build", "tune", "race"]) this.root.querySelector(`[data-m4="${i}"]`).setAttribute("aria-pressed", String(i === this.page));
    this.root.querySelector(".m4-view-tools").hidden = ["race", "notes", "quiz"].includes(this.page), this.root.querySelector(".m4-hud").hidden = this.page !== "race", this.root.querySelector(".m4-snap").hidden = this.page !== "build" || this.installed.has(this.selected), this.root.querySelector('[data-m4="explode"]').setAttribute("aria-pressed", String(this.exploded)), this.root.querySelector('[data-m4="xray"]').setAttribute("aria-pressed", String(this.xray));
    const t = this.root.querySelector(".m4-tools"), e = this.root.querySelector(".m4-overlay");
    if (e.hidden = !["quiz", "notes"].includes(this.page), e.innerHTML = "", this.page === "learn") {
      const i = j[this.lesson];
      t.innerHTML = `<div class="m4-lesson-cards">${j.map((a, r) => `<button class="m4-object-card" data-m4="lesson-${r}" aria-label="${a.title}" aria-pressed="${this.lesson === r}"><img src="${this.thumbnails[a.part] || ""}" alt=""><span>${["電池", "齒輪", "傳動", "導輪"][r]}</span></button>`).join("")}</div><div class="m4-dock-actions">${k("power", this.powered ? "關閉電源" : "開啟電源", "power")}${k("replay", "聽解說")}${k("lesson-next", this.lesson === 3 ? "去組裝" : "下一步", "next")}</div><p class="m4-sr">${i.voice}</p>`;
    } else if (this.page === "parts" || this.page === "build") {
      const i = P.slice(this.partPage * 4, this.partPage * 4 + 4);
      t.innerHTML = `<div class="m4-eyebrow">${this.page === "build" ? "我的組裝" : "BOM · 教學零件表"} <b>${this.installed.size} / ${P.length}</b></div><div class="m4-part-grid">${i.map((a) => `<button type="button" data-part="${a.id}" aria-label="${a.name}，${a.count}${a.count === 1 ? "組或件" : "件"}${this.installed.has(a.id) ? "，已安裝" : ""}" aria-pressed="${a.id === this.selected}"><img src="${this.thumbnails[a.id] || ""}" alt="" draggable="false"><span>${a.name}</span><small>× ${a.count} ${this.installed.has(a.id) ? "✓" : ""}</small></button>`).join("")}</div><div class="m4-pager">${k("part-prev", "上一頁", "prev")}${this.page === "build" ? '<button data-m4="next-part" class="m4-find-next">找下一件</button>' : `<span>${this.partPage + 1} / ${Math.ceil(P.length / 4)}</span>`}${k("part-next", "下一頁", "next")}</div><p class="m4-part-description"></p><div class="m4-two">${this.page === "build" ? k("install", "安裝", "plus") + k("remove", "拆下", "remove") : k("build", "開始組裝", "build") + k("replay", "聽用途")}</div>`, this.describePart();
    } else if (this.page === "tune") this.renderTune(t);
    else if (this.page === "race") t.innerHTML = `<div class="m4-track-cards">${Object.keys(W).map((i) => `<button class="m4-object-card" data-m4="track-${i}" aria-label="${W[i]}賽道" aria-pressed="${this.track === i}" ${this.running ? "disabled" : ""}><img src="${this.trackPhotos[i] || ""}" alt="">${_t(i)}<span>${W[i]}</span></button>`).join("")}</div><div class="m4-race-options">${k("camera", this.first ? "車頭視角" : "追車視角", "camera")}${k("sound", this.sound ? "聲音開" : "聲音關", "voice")}<button data-m4="motion" aria-label="穩定鏡頭" aria-pressed="${this.reduced}">${nt("eye")}</button>${k("collision", "雙車碰撞測試", "parts")}<button data-m4="ghost" aria-label="挑戰影子車" title="同一跑道上一趟完成的自己" aria-pressed="${this.shadow}" ${this.running ? "disabled" : ""}>${nt("ghost")}</button></div><div class="m4-dock-actions"><button class="m4-go" data-m4="run" aria-label="開始試跑"><img src="images/experiments/mini4wd-v2/race-flag.png" alt=""><span>出發</span></button>${k("stop", "停止", "stop")}</div>`;
    else if (this.page === "notes") {
      const i = this.records.slice(this.recordPage * 2, this.recordPage * 2 + 2);
      t.innerHTML = `<h3>我的測試</h3><p>一次只換一個條件，再跑同一條賽道。</p><div class="m4-pager">${k("record-prev", "上一頁", "prev")}<span>${this.records.length ? this.recordPage + 1 : 0} / ${Math.ceil(this.records.length / 2)}</span>${k("record-next", "下一頁", "next")}</div>${k("return", "回到實驗", "back")}`, e.innerHTML = `<h3>比較試跑結果</h3>${i.length ? i.map((a, r) => `<article class="m4-record"><b>第 ${this.recordPage * 2 + r + 1} 次 · ${a.finished ? "完成三圈" : "中途停止"}</b><p>${W[a.track]} · ${Ot(a.setup)}</p><div><strong>${a.time.toFixed(2)} <small>秒</small></strong><strong>${(a.max * 0.18).toFixed(1)} <small>km/h 最高</small></strong></div><p>護欄撞擊 ${a.contacts} 次 · 落地 ${a.landings} 次</p></article>`).join("") : "<p>還沒有紀錄。把車組好，去試跑吧！</p>"}`;
    } else {
      const a = [{ q: "哪個零件提供電能？", ids: ["battery-a", "shell", "rollers"], answer: "battery-a" }, { q: "哪個零件把動力送到前輪？", ids: ["shell", "shaft", "battery-a"], answer: "shaft" }, { q: "哪個零件會碰護欄，引導轉彎？", ids: ["rollers", "battery-a", "rim-fl"], answer: "rollers" }][this.quizIndex];
      t.innerHTML = `<h3>看圖想一想</h3><p>${this.quizIndex + 1} / 3</p>${k("replay", "聽題目")}${k("quiz-next", "下一題", "next")}${k("return", "回到實驗", "back")}`, e.innerHTML = `<h3>${a.q}</h3>${Qt(this.quizIndex, this.thumbnails)}<div class="m4-answer-grid">${a.ids.map((r) => `<button data-answer="${r}" aria-label="${P.find((o) => o.id === r).name}"><img src="${this.thumbnails[r] || ""}" alt="${P.find((o) => o.id === r).name}"></button>`).join("")}</div><p class="m4-feedback" role="status">點一張圖片</p>`, this.voice.last = a.q;
    }
    this.view || t.querySelectorAll("button").forEach((i) => {
      ["run", "collision", "power"].includes(i.dataset.m4 || "") && (i.disabled = !0);
    });
    for (const i of ["run", "collision"]) {
      const a = t.querySelector(`[data-m4="${i}"]`);
      a && (a.disabled = this.installed.size !== P.length || !this.view || this.running);
    }
    this.renderBom(), this.view?.setParts(this.installed, this.exploded, this.xray, this.selected);
  }
  bomPage = 0;
  renderBom() {
    const t = this.root.querySelector(".m4-bom-body");
    this.root.querySelector(".m4-bom").hidden = ["race", "quiz", "notes"].includes(this.page), t.innerHTML = P.slice(this.bomPage * 4, this.bomPage * 4 + 4).map((e) => '<button data-part="' + e.id + '" aria-pressed="' + (e.id === this.selected) + '"><b>' + (P.indexOf(e) + 1) + "</b><span>" + e.name + "</span></button>").join("") + '<div class="m4-pager">' + k("bom-prev", "上一頁零件", "prev") + "<span>" + (this.bomPage + 1) + "/5</span>" + k("bom-next", "下一頁零件", "next") + "</div>";
  }
  renderTune(t) {
    const e = [
      { name: "齒輪", part: "gears", items: [["gear:3.5", "3.5 : 1"], ["gear:4", "4 : 1"], ["gear:5", "5 : 1"]] },
      { name: "輪胎", part: "tire-fl", items: [["tire:grip", "抓地"], ["tire:hard", "硬胎"]] },
      { name: "大小", part: "rim-fl", items: [["diameter:26", "26 mm"], ["diameter:30", "30 mm"]] },
      { name: "車殼", part: "shell", items: [["shell:arrow", "流線"], ["shell:wing", "競技"]] },
      { name: "配重", part: "chassis", items: [["ballast:center", "中央"], ["ballast:rear", "後方"]] },
      { name: "車色", part: "shell", items: [["color:#29c9ff", "天藍"], ["color:#ff794f", "橘紅"], ["color:#b59aff", "星紫"]] }
    ], i = e[this.tunePage];
    t.innerHTML = '<nav class="m4-category-tabs" aria-label="改裝分類">' + e.map((a, r) => '<button data-m4="category-' + r + '" aria-label="' + a.name + '" aria-pressed="' + (r === this.tunePage) + '"><img src="' + (this.thumbnails[a.part] || "") + '" alt=""><span>' + a.name + "</span></button>").join("") + '</nav><div class="m4-tune-cards" role="group" aria-label="' + i.name + '">' + i.items.map(([a, r]) => {
      const [o, h] = a.split(":"), l = o === "gear" ? Kt(Number(h)) : o === "ballast" ? Jt(h === "rear") : o === "color" ? '<i class="m4-color-orb" style="--paint:' + h + '"></i>' : '<img src="' + (this.optionPhotos[a] || "") + '" alt="">';
      return '<button class="m4-object-card" data-choice="' + a + '" aria-label="' + r + '" aria-pressed="' + (String(this.setup[o]) === h) + '">' + l + "<span>" + r + "</span></button>";
    }).join("") + '</div><div class="m4-dock-actions"><button class="m4-go" data-m4="race" aria-label="去試跑"><img src="images/experiments/mini4wd-v2/race-flag.png" alt=""><span>試跑</span></button></div>';
  }
  action(t) {
    if (/^category-[0-5]$/.test(t)) {
      this.tunePage = Number(t.slice(-1)), this.render(), this.tell(["齒輪", "輪胎", "輪徑", "車殼", "配重", "車色"][this.tunePage]);
      return;
    }
    if (/^lesson-[0-3]$/.test(t)) {
      this.lesson = Number(t.slice(-1)), this.selected = j[this.lesson].part, this.xray = !0, this.render(), this.tell(j[this.lesson].text, j[this.lesson].voice);
      return;
    }
    if (t.startsWith("track-") && !this.running) {
      const e = t.slice(6);
      e in W && (this.stop(), this.track = e, this.shadow = !1, this.view?.setTrack(e), this.render(), this.tell(W[e], e === "flat" ? "平坦的跑道，先練習三圈。" : e === "bridge" ? "連續的坡橋，觀察上坡和下坡的速度。" : "斜坡後面有缺口，觀察車子起跳和落地。"));
      return;
    }
    if (t === "bom-prev" || t === "bom-next") {
      this.bomPage = (this.bomPage + (t === "bom-next" ? 1 : 4)) % 5, this.renderBom();
      return;
    }
    if (["learn", "parts", "build", "tune", "race", "notes", "quiz"].includes(t)) {
      this.switchPage(t);
      return;
    }
    if (t === "back")
      this.stop(), this.host.closest(".il-shell")?.querySelector(".il-back")?.click();
    else if (t === "voice")
      this.voice.enabled = !this.voice.enabled, this.root.querySelector('[data-m4="voice"]').setAttribute("aria-pressed", String(this.voice.enabled)), this.voice.enabled ? this.voice.replay() : this.voice.stop();
    else if (t === "replay") this.voice.replay();
    else if (t === "return") this.switchPage(this.previous);
    else if (t === "explode")
      this.exploded = !this.exploded, this.render();
    else if (t === "xray")
      this.xray = !this.xray, this.render();
    else if (t === "zoom-in" || t === "zoom-out") this.view?.zoom(t === "zoom-in" ? -0.7 : 0.7);
    else if (t === "power") {
      if (this.installed.size !== P.length) {
        this.tell("先把車組好，再觀察通電。");
        return;
      }
      this.powered = !this.powered, this.view?.setPower(this.powered), this.tell(this.powered ? "電路接通，四輪一起轉。" : "電路打開，馬達停止。"), this.render();
    } else if (t === "lesson-prev" || t === "lesson-next") {
      if (t === "lesson-next" && this.lesson === 3) {
        this.switchPage("build");
        return;
      }
      this.lesson = Math.max(0, Math.min(3, this.lesson + (t === "lesson-next" ? 1 : -1))), this.selected = j[this.lesson].part, this.render(), this.tell(j[this.lesson].text, j[this.lesson].voice);
    } else if (t === "part-prev" || t === "part-next")
      this.partPage = (this.partPage + (t === "part-next" ? 1 : 4)) % 5, this.render();
    else if (t === "install") this.install();
    else if (t === "remove")
      Vt(this.selected, this.installed) ? (this.tell("拆下了。可以再装回去。"), this.render()) : this.tell(this.selected === "chassis" ? "底盤留在工作台上。" : "先拆下裝在它上面的零件。");
    else if (t === "next-part") {
      const e = P.find((i) => !this.installed.has(i.id) && xt(i.id, this.installed));
      e ? (this.partPage = Math.floor(P.indexOf(e) / 4), this.select(e.id), this.render()) : this.tell("組裝完成！去改裝，或到賽道試跑。");
    } else if (t === "camera")
      this.first = !this.first, this.view?.setCamera(this.first), this.render();
    else if (t === "sound")
      this.sound = !this.sound, this.view?.setSound(this.sound), this.render();
    else if (t === "motion")
      this.reduced = !this.reduced, this.view?.setReduced(this.reduced), this.render();
    else if (t === "ghost") {
      if (!this.view?.hasGhost()) {
        this.tell("先完成三圈，留下影子！", "先在這條跑道完成三圈，就能留下影子。下一次打開影子按鈕，和上一次的自己比賽。影子不會碰撞，只在這次實驗中保留。");
        return;
      }
      this.shadow = !this.shadow, this.shadow || this.view.hideGhost(), this.render(), this.tell(this.shadow ? "影子陪跑，挑戰自己！" : "影子休息。", "淡紫色的車是上一次完成的自己，不會和你的車碰撞。一次只改一個條件，看看誰先到終點。");
    } else t === "run" || t === "collision" ? this.run(t === "collision") : t === "stop" ? (this.stop(), this.render()) : t === "record-prev" || t === "record-next" ? (this.recordPage = Math.max(0, Math.min(Math.ceil(this.records.length / 2) - 1, this.recordPage + (t === "record-next" ? 1 : -1))), this.render()) : t === "quiz-next" && (this.quizIndex = (this.quizIndex + 1) % 3, this.render(), this.voice.replay());
  }
  switchPage(t) {
    if (t === this.page) return;
    (t === "notes" || t === "quiz") && (["notes", "quiz"].includes(this.page) || (this.previous = this.page)), this.stop(), this.powered = !1, this.voice.stop(), this.page = t, t === "build" && !this.started && (this.started = !0, this.installed = /* @__PURE__ */ new Set(["chassis"]), this.selected = "motor", this.partPage = 0, this.exploded = !1, this.xray = !1), t === "learn" && (this.selected = j[this.lesson].part), t === "parts" && (this.exploded = !0), (t === "tune" || t === "build") && (this.exploded = !1), this.view?.setMode(t === "race"), this.render();
    const e = t === "build" ? "點零件，再點「安裝」。也可以拖到車上。" : t === "race" ? "三圈試跑。先選鏡頭，再出發！" : t === "parts" ? "點一個零件，看看它的工作。" : t === "tune" ? "一次只換一個條件，去試跑比較。" : t === "learn" ? j[this.lesson].text : t === "notes" ? "比較同一條賽道的結果。" : "看圖，找出答案。";
    this.tell(e, t === "learn" ? j[this.lesson].voice : e), t === "quiz" && (this.voice.last = this.root.querySelector(".m4-overlay h3").textContent || "");
  }
  select(t) {
    if (!P.some((i) => i.id === t)) return;
    this.selected = t, this.bomPage = Math.floor(P.findIndex((i) => i.id === t) / 4), this.renderBom(), this.view?.setParts(this.installed, this.exploded, this.xray, t), this.describePart(), this.root.querySelectorAll("[data-part]").forEach((i) => i.setAttribute("aria-pressed", String(i.dataset.part === t))), this.root.querySelector(".m4-snap").hidden = this.page !== "build" || this.installed.has(t);
    const e = P.find((i) => i.id === t);
    this.tell(e.name, e.voice);
  }
  describePart() {
    const t = P.find((i) => i.id === this.selected), e = this.root.querySelector(".m4-part-description");
    e && (e.textContent = t.voice);
  }
  install() {
    if (this.page === "build") {
      if (this.installed.has(this.selected)) {
        this.tell("這個零件已經裝好了。");
        return;
      }
      if (!xt(this.selected, this.installed)) {
        const t = P.find((e) => e.id === this.selected).needs.filter((e) => !this.installed.has(e)).map((e) => P.find((i) => i.id === e).name);
        this.tell(`先裝好：${t.join("、")}`);
        return;
      }
      this.installed.add(this.selected), this.tell(this.installed.size === P.length ? "完成了！這台就是你要試跑的車。" : "喀！裝好了。找下一個零件吧。"), this.render();
    }
  }
  choose(t) {
    const [e, i] = t.split(":");
    ({ gear: ["3.5", "4", "5"], tire: ["grip", "hard"], diameter: ["26", "30"], shell: ["arrow", "wing"], ballast: ["center", "rear"], color: ["#29c9ff", "#ff794f", "#b59aff"] })[e]?.includes(i) && (this.setup = { ...this.setup, [e]: e === "gear" || e === "diameter" ? Number(i) : i }, this.view?.configure(this.setup), this.render(), this.tell(e === "color" ? "換了車色，性能不變。" : e === "gear" ? "齒比改好了。比較加速與三圈時間。" : "設定改好了，去同一條賽道比較。"));
  }
  async run(t) {
    if (!this.view || this.running || this.installed.size !== P.length) return;
    this.view.reset(), this.running = !0, this.recorded = !1;
    const e = ++this.sequence;
    this.render(), this.voice.stop();
    const i = this.root.querySelector(".m4-countdown");
    i.hidden = !1;
    for (const a of ["3", "2", "1"]) {
      if (e !== this.sequence || this.dead) return;
      i.textContent = a, await new Promise((r) => setTimeout(r, 650));
    }
    e !== this.sequence || this.dead || (i.hidden = !0, this.view.run(t, this.shadow), this.tell(t ? "橘車是標準設定，觀察擦撞與掉速。" : this.view.ghostTime() !== void 0 ? "淡紫色是上次的自己！" : "出發！觀察彎道和落地。"));
  }
  stop() {
    this.sequence++, this.root.querySelector(".m4-countdown").hidden = !0, this.running && this.view && this.view.state.time > 0 && this.saveRecord(this.view.state), this.running = !1, this.view?.pause();
  }
  updateRace(t) {
    if (this.page !== "race") return;
    const e = this.root.querySelector("[data-shadow]");
    if (e.hidden = this.view?.ghostTime() === void 0, e.hidden || (e.querySelector("b").textContent = this.view.ghostTime().toFixed(2)), this.root.querySelector("[data-speed]").textContent = (Math.hypot(t.vx, t.vz) * 0.18).toFixed(1), this.root.querySelector("[data-lap]").textContent = `${t.lap} / 3`, this.root.querySelector("[data-time]").textContent = t.time.toFixed(1), this.running && (t.finished || t.offTrack)) {
      this.running = !1, this.saveRecord(t);
      const i = this.view?.ghostTime(), a = this.view?.isCollisionRun() ? "雙車測試完成" : i === void 0 ? "影子已記住！" : Math.abs(t.time - i) < 0.02 ? "和影子同時到！" : `${t.time < i ? "快了" : "慢了"} ${Math.abs(t.time - i).toFixed(2)} 秒`;
      this.tell(t.finished ? `三圈 ${t.time.toFixed(2)} 秒 · ${a}` : "車子離開賽道了。回去調整輪胎與配重，再試一次。"), this.render();
    }
  }
  saveRecord(t) {
    this.recorded || (this.recorded = !0, this.records.push({ setup: { ...this.setup }, track: this.track, time: t.time, max: t.maxSpeed, contacts: t.contacts, landings: t.landings, finished: t.finished }));
  }
  answer(t) {
    const e = ["battery-a", "shaft", "rollers"][this.quizIndex], i = t === e ? "答對了！" + P.find((a) => a.id === e).voice : "再想想。點語音，聽聽題目。";
    this.root.querySelector(".m4-feedback").textContent = t === e ? "✓ 答對了" : "↻ 再試試", this.voice.say(i);
  }
  dragStart(t) {
    if (this.page !== "build" || t.button) return;
    const e = t.target.closest("[data-part]");
    if (!e) return;
    this.select(e.dataset.part);
    const i = document.createElement("img");
    i.src = this.thumbnails[this.selected], i.className = "m4-drag", i.alt = "", i.hidden = !0, document.body.append(i), this.drag = { id: this.selected, x: t.clientX, y: t.clientY, pid: t.pointerId, ghost: i, moved: !1 }, this.root.setPointerCapture(t.pointerId);
  }
  dragMove(t) {
    const e = this.drag;
    e && (Math.hypot(t.clientX - e.x, t.clientY - e.y) > 8 && (e.moved = !0), e.moved && (e.ghost.hidden = !1, e.ghost.style.left = `${t.clientX}px`, e.ghost.style.top = `${t.clientY}px`));
  }
  dragEnd(t) {
    const e = this.drag;
    if (e) {
      if (e.moved) {
        const i = this.root.querySelector(".m4-stage").getBoundingClientRect();
        t.clientX >= i.left && t.clientX <= i.right && t.clientY >= i.top && t.clientY <= i.bottom ? this.install() : this.tell("拖到車上，放手就會對準安裝位置。");
      }
      this.clearDrag();
    }
  }
  clearDrag() {
    this.drag && (this.root.hasPointerCapture(this.drag.pid) && this.root.releasePointerCapture(this.drag.pid), this.drag.ghost.remove(), this.drag = void 0);
  }
  destroy() {
    this.dead = !0, this.stop(), this.abort.abort(), this.clearDrag(), this.voice.stop(), this.view?.destroy();
  }
}
export {
  ie as Mini4wdLab
};
