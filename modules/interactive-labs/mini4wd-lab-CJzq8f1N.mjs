import { G as I, M as ut, D as W, a as H, B as lt, F as st, b as B, V as T, c as V, d as G, T as ct, R as N, C as _, e as St, f as Pt, O as qt, I as tt, g as mt, S as ft, W as Tt, P as At, A as Ct, h as Et, H as It, i as Lt, j as jt, k as Bt, l as K, m as Rt, n as J, o as Dt, p as F, q as it } from "./RoundedBoxGeometry-CQPJIpnr.mjs";
import { R as Ht } from "./RoomEnvironment-CAidMGg-.mjs";
import { S as Gt } from "./narration-DCI2AWPz.mjs";
const at = ["fl", "fr", "rl", "rr"], Q = ["左前", "右前", "左後", "右後"], S = [
  { id: "chassis", name: "底盤", count: 1, needs: [], voice: "底盤固定所有零件，是四驅車的骨架。" },
  { id: "motor", name: "馬達", count: 1, needs: ["chassis"], voice: "電流經過馬達，電能轉成轉動。它不需要先往後拉。" },
  { id: "gears", name: "減速齒輪組", count: 1, needs: ["motor"], voice: "小齒輪帶動較大的齒輪，轉得比較慢，輪端扭力比較大。" },
  { id: "shaft", name: "傳動軸", count: 1, needs: ["gears"], voice: "中間的長軸把馬達動力傳到前輪，是四輪驅動的重要連接。" },
  { id: "axles", name: "前後輪軸", count: 2, needs: ["shaft"], voice: "兩根輪軸連接左右輪圈，齒輪把動力送到前後輪軸。" },
  ...at.map((s, t) => ({ id: "rim-" + s, name: Q[t] + "輪圈", count: 1, needs: ["axles"], voice: Q[t] + "輪圈套在輪軸上，輪胎再套在輪圈外面。" })),
  ...at.map((s, t) => ({ id: "tire-" + s, name: Q[t] + "輪胎", count: 1, needs: ["rim-" + s], voice: Q[t] + "輪胎接觸地面。摩擦讓輪子的轉動變成前進。" })),
  { id: "rollers", name: "導輪", count: 4, needs: ["chassis"], voice: "四個小導輪接觸軌道護欄，幫忙引導車頭轉彎。" },
  { id: "switch", name: "開關與接點", count: 1, needs: ["motor"], voice: "開關閉合，電池、馬達與導線形成完整迴路；打開開關，馬達就不再得到電力。" },
  { id: "battery-a", name: "電池 A", count: 1, needs: ["switch"], voice: "這兩顆電池串聯。依正負標記安裝，接點會把它們接成供電迴路。" },
  { id: "battery-b", name: "電池 B", count: 1, needs: ["battery-a"], voice: "第二顆電池依相反方向放置，底盤接點將兩顆串聯。" },
  { id: "shell", name: "車殼", count: 1, needs: ["rollers", "battery-b", ...at.map((s) => "tire-" + s)], voice: "最後扣上車殼。外觀與配重不同，試跑結果也可能不同。" }
], rt = () => new Set(S.map((s) => s.id));
function gt(s, t) {
  return S.find((e) => e.id === s)?.needs.every((e) => t.has(e)) ?? !1;
}
function Ft(s, t) {
  return s === "chassis" || S.some((e) => t.has(e.id) && e.needs.includes(s)) ? !1 : t.delete(s);
}
function Ot(s) {
  return `${s.gear}:1・${s.tire === "grip" ? "抓地胎" : "硬胎"} ${s.diameter} mm・${s.shell === "arrow" ? "箭羽" : "尾翼"}・${s.ballast === "center" ? "中央" : "後方"}配重`;
}
function zt(s, t) {
  const e = Math.exp(-Math.pow((s + 0.14) / 0.56, 2)), i = 0.5 + 0.075 * Math.exp(-Math.pow((s + 0.88) / 0.38, 2)) + 0.065 * Math.exp(-Math.pow((s - 0.9) / 0.35, 2)) - 0.16 * Math.pow(Math.abs(s) / 1.43, 6), a = 0.87 + 0.035 * Math.exp(-Math.pow((s + 0.85) / 0.45, 2)) - 0.16 * Math.pow(Math.max(0, s) / 1.43, 4), r = a + 0.025 + 0.23 * e, h = Math.abs(t), l = 0.6 + 0.08 * Math.exp(-Math.pow((Math.abs(s) - 0.96) / 0.32, 4)), n = h < 0.65 ? G.lerp(r, a, Math.pow(h / 0.65, 3)) : G.lerp(a, l, Math.pow((h - 0.65) / 0.35, 0.7));
  return new T(s, n, t * i);
}
function j(s, t, e, i, a = 0, r = 48, h = 24) {
  const c = [], l = [];
  for (let o = 0; o <= r; o++) for (let d = 0; d <= h; d++) {
    const m = zt(G.lerp(s, t, o / r), G.lerp(e, i, d / h));
    m.y += a, c.push(m.x, m.y, m.z);
  }
  for (let o = 0; o < r; o++) for (let d = 0; d < h; d++) {
    const m = o * (h + 1) + d, f = m + h + 1;
    l.push(m, m + 1, f, f, m + 1, f + 1);
  }
  const n = new lt();
  return n.setAttribute("position", new st(c, 3)), n.setIndex(l), n.computeVertexNormals(), n;
}
function Ut() {
  const s = new I(), t = new I(), e = new ut({ color: 2738687, metalness: 0.42, roughness: 0.24, clearcoat: 1, side: W }), i = new ut({ color: 530213, metalness: 0.35, roughness: 0.12, clearcoat: 1, side: W }), a = new H({ color: 1055532, roughness: 0.55, metalness: 0.25, side: W }), r = new H({ color: 15267327, roughness: 0.3, metalness: 0.25, side: W }), h = new H({ color: 12581631, emissive: 6676479, emissiveIntensity: 0.6 }), c = new H({ color: 16725074, emissive: 16717624, emissiveIntensity: 0.5 }), l = (o, d, m = s) => {
    const f = new B(o, d);
    return f.castShadow = !0, f.receiveShadow = !0, m.add(f), f;
  }, n = (o, d, m, f, w, z, $, p = s) => {
    const u = l(new V(o, d, m), $, p);
    return u.position.set(f, w, z), u;
  };
  l(j(-1.43, 1.43, -1, 1), e);
  for (const o of [-1.43, 1.43]) {
    const d = [], m = [];
    for (let w = 0; w <= 32; w++) {
      const z = zt(o, w / 16 - 1);
      if (d.push(z.x, z.y, z.z, z.x, 0.4, z.z), w < 32) {
        const $ = w * 2;
        m.push($, $ + 1, $ + 2, $ + 1, $ + 3, $ + 2);
      }
    }
    const f = new lt();
    f.setAttribute("position", new st(d, 3)), f.setIndex(m), f.computeVertexNormals(), l(f, e);
  }
  l(j(0.19, 0.61, -0.6, 0.6, 7e-3, 24, 20), i), l(j(-0.79, -0.44, -0.57, 0.57, 7e-3, 20, 20), i);
  for (const o of [-1, 1]) {
    l(j(-0.4, 0.19, o * 0.53, o * 0.74, 9e-3, 28, 12), i), l(j(0.65, 1.36, o * 0.23, o * 0.33, 0.01, 24, 4), r), l(j(-1.35, -0.83, o * 0.23, o * 0.33, 0.01, 20, 4), r), l(j(-0.42, 0.13, o * 0.24, o * 0.32, 0.01, 18, 4), r), l(j(-0.72, -0.38, o * 0.83, o * 0.98, 8e-3, 14, 6), a), n(1.4, 0.035, 0.045, 0, 0.425, o * 0.5, a);
    const d = l(j(1.18, 1.225, o * 0.47, o * 0.84, 0.015, 8, 10), h);
    d.name = "headlight", n(0.018, 0.025, 0.2, 1.44, 0.667, o * 0.235, h), n(0.015, 0.032, 0.28, -1.44, 0.79, o * 0.205, c);
  }
  n(0.018, 0.075, 0.45, 1.437, 0.52, 0, a), n(0.16, 0.035, 0.88, 1.36, 0.402, 0, a), n(0.17, 0.045, 0.88, -1.36, 0.4, 0, a);
  for (const o of [-0.27, -0.09, 0.09, 0.27]) n(0.24, 0.065, 0.025, -1.32, 0.39, o, a);
  s.add(t), n(0.28, 0.045, 1.18, -1.16, 1.08, 0, e, t);
  for (const o of [-0.38, 0.38]) n(0.065, 0.22, 0.035, -1.16, 0.97, o, a, t);
  for (const o of [-0.6, 0.6]) n(0.29, 0.11, 0.035, -1.16, 1.1, o, e, t);
  return { root: s, wing: t, paint: e, materials: [e, i, a, r, h, c] };
}
class vt {
  root = new I();
  parts = /* @__PURE__ */ new Map();
  wheels = [];
  gears = [];
  rotor = new I();
  shellMaterials = [];
  skins = [];
  rubber = [];
  wheelParts = [];
  wings = new I();
  ballast = new I();
  constructor() {
    for (const p of S) {
      const u = new I();
      u.userData.part = p.id, this.parts.set(p.id, u), this.root.add(u);
    }
    const t = (p, u = 0.1) => new H({ color: p, metalness: u, roughness: 0.35 }), e = t(1319992, 0.45), i = t(13294819, 0.8), a = t(16759127, 0.55), r = t(15069179, 0.25), h = (p, u, k, y = 0, v = 0, g = 0) => {
      const b = new B(u, k.clone());
      return b.position.set(y, v, g), b.castShadow = !0, b.receiveShadow = !0, p.add(b), b;
    }, c = (p, u, k, y, v, g = 0, b = 0, q = 0) => h(p, new N(u, k, y, 2, Math.min(u, k, y) * 0.18), v, g, b, q), l = (p, u, k, y, v, g, b, q = "z") => {
      const A = h(p, new _(u, u, k, 20), y, v, g, b);
      return q === "z" && (A.rotation.x = Math.PI / 2), q === "x" && (A.rotation.z = Math.PI / 2), A;
    }, n = this.parts.get("chassis");
    c(n, 2.7, 0.15, 1.18, e, 0, 0.34);
    for (const p of [-0.55, 0.55]) c(n, 2.6, 0.19, 0.09, i, 0, 0.47, p);
    for (const p of [-1.28, 1.28]) {
      c(n, 0.18, 0.12, 1.75, e, p, 0.39);
      for (const u of [-0.8, 0.8]) l(n, 0.055, 0.1, a, p, 0.48, u, "y");
    }
    const o = this.parts.get("motor");
    l(o, 0.2, 0.68, i, -0.74, 0.62, 0), c(o, 0.33, 0.29, 0.14, e, -0.74, 0.62, -0.4), o.add(this.rotor), this.rotor.position.set(-0.74, 0.62, 0.41), c(this.rotor, 0.31, 0.055, 0.05, a);
    const d = this.parts.get("gears");
    for (const [p, u, k, y] of [[-0.74, 0.62, 0.44, 0.1], [-0.98, 0.54, 0.44, 0.18], [0.94, 0.43, 0.43, 0.18]]) {
      const v = new I();
      v.position.set(p, u, k), d.add(v), this.gears.push(v), l(v, y, 0.075, a, 0, 0, 0);
      for (let g = 0; g < 16; g++) {
        const b = g * Math.PI / 8, q = c(v, 0.07, 0.07, 0.075, a, Math.cos(b) * y, Math.sin(b) * y, 0);
        q.rotation.z = b;
      }
    }
    l(this.parts.get("shaft"), 0.035, 1.94, i, 0, 0.5, 0.43, "x");
    for (const p of [-0.96, 0.96]) l(this.parts.get("axles"), 0.045, 1.62, i, p, 0.26, 0);
    ["fl", "fr", "rl", "rr"].forEach((p, u) => {
      const k = u < 2 ? 0.96 : -0.96, y = u % 2 ? -0.76 : 0.76, v = this.parts.get("rim-" + p), g = this.parts.get("tire-" + p);
      for (const M of [v, g])
        M.position.set(k, 0.26, y), M.userData.home = M.position.clone(), this.wheelParts.push(M);
      const b = new I();
      v.add(b), this.wheels.push(b);
      const q = t(2569542), A = l(g, 0.26, 0.24, q, 0, 0, 0);
      this.rubber.push(A.material);
      for (const M of [-1, 1]) {
        l(b, 0.175, 0.025, i, 0, 0, 0.135 * M), l(b, 0.065, 0.04, a, 0, 0, 0.152 * M);
        for (let C = 0; C < 5; C++) {
          const L = C * Math.PI * 2 / 5, R = c(b, 0.15, 0.035, 0.04, e, Math.cos(L) * 0.11, Math.sin(L) * 0.11, 0.153 * M);
          R.rotation.z = L;
        }
        h(g, new ct(0.222, 0.012, 4, 24), r, 0, 0, 0.124 * M);
      }
    });
    const m = this.parts.get("rollers");
    for (const p of [-1.28, 1.28]) for (const u of [-0.88, 0.88])
      l(m, 0.13, 0.11, r, p, 0.52, u, "y"), l(m, 0.04, 0.14, a, p, 0.54, u, "y");
    for (const [p, u] of ["battery-a", "battery-b"].entries()) {
      const k = this.parts.get(u), y = p ? 0.22 : -0.22;
      l(k, 0.145, 1.02, t(p ? 16747596 : 4377557), 0.15, 0.62, y, "x"), l(k, 0.1, 0.035, i, p ? -0.38 : 0.68, 0.62, y, "x"), c(k, 0.015, 0.085, 0.018, r, p ? -0.405 : 0.705, 0.64, y), c(k, 0.015, 0.018, 0.085, r, p ? -0.405 : 0.705, 0.64, y);
    }
    const f = this.parts.get("switch");
    c(f, 0.23, 0.12, 0.18, a, 0.95, 0.53, -0.3), c(f, 0.09, 0.08, 0.14, e, 0.93, 0.62, -0.3);
    const w = (p, u) => h(f, new St(new Pt(p.map((k) => new T(...k))), 20, 0.017, 6, !1), t(u));
    w([[0.95, 0.55, -0.3], [1.15, 0.5, -0.4], [0.7, 0.5, -0.4], [0.68, 0.62, -0.22]], 16738390), w([[-0.38, 0.62, -0.22], [-0.48, 0.49, 0], [-0.38, 0.62, 0.22]], 14992227), w([[0.68, 0.62, 0.22], [0.8, 0.48, 0.52], [-0.7, 0.48, 0.52], [-0.74, 0.63, 0.35]], 5672959), w([[-0.74, 0.63, -0.35], [-1.1, 0.5, -0.49], [0.95, 0.55, -0.3]], 5672959);
    const z = this.parts.get("shell"), $ = Ut();
    z.add($.root), this.wings = $.wing, this.skins = [$.paint], this.shellMaterials = $.materials, n.add(this.ballast), l(this.ballast, 0.16, 0.08, a, 0, 0.43, 0, "y");
    for (const [p, u] of this.parts)
      u.userData.home || (u.userData.home = u.position.clone()), u.name = p;
  }
  configure(t) {
    this.skins.forEach((e) => e.color.set(t.color)), this.rubber.forEach((e) => {
      e.color.set(t.tire === "grip" ? 2175814 : 6845829), e.roughness = t.tire === "grip" ? 0.92 : 0.45;
    }), this.wings.visible = t.shell === "wing", this.ballast.position.x = t.ballast === "rear" ? -0.67 : 0;
    for (const e of this.wheelParts) e.scale.setScalar(t.diameter / 26);
  }
  layout(t, e, i, a) {
    let r = 0;
    for (const [h, c] of this.parts) {
      const l = c.userData.home;
      if (c.visible = t.has(h), c.position.copy(l), e && h !== "chassis") {
        const n = Math.floor(r / 5), o = r % 5;
        c.position.add(new T((o - 2) * 1.18, (n + 1) * 0.62, (n - 1) * 1.2));
      }
      r++;
    }
    for (const h of this.shellMaterials)
      h.transparent !== i && (h.needsUpdate = !0), h.transparent = i, h.opacity = i ? 0.12 : 1, h.depthWrite = !i;
  }
  animate(t, e = !1, i = 4, a = 0.26) {
    const r = -t / a;
    for (const h of this.wheels) h.rotation.z = r;
    this.gears.forEach((h, c) => h.rotation.z = r * (c === 0 ? -i : 1)), this.rotor.rotation.z = e ? -r * i : 0;
  }
  dispose() {
    const t = /* @__PURE__ */ new Set(), e = /* @__PURE__ */ new Set();
    this.root.traverse((i) => {
      i instanceof B && (t.add(i.geometry), (Array.isArray(i.material) ? i.material : [i.material]).forEach((a) => e.add(a)));
    }), t.forEach((i) => i.dispose()), e.forEach((i) => i.dispose());
  }
}
const X = { gear: 4, tire: "grip", diameter: 26, shell: "arrow", ballast: "center", color: "#29c9ff" }, P = { straight: 18, radius: 12, width: 5, length: 72 + 24 * Math.PI }, Y = 1 / 240, et = (s, t, e) => Math.max(t, Math.min(e, s));
function ot(s) {
  const { straight: t, radius: e, length: i } = P;
  if (s = (s % i + i) % i, s < 2 * t) return { x: s - t, z: -e, tx: 1, tz: 0 };
  if (s -= 2 * t, s < Math.PI * e) {
    const r = s / e - Math.PI / 2;
    return { x: t + e * Math.cos(r), z: e * Math.sin(r), tx: -Math.sin(r), tz: Math.cos(r) };
  }
  if (s -= Math.PI * e, s < 2 * t) return { x: t - s, z: e, tx: -1, tz: 0 };
  const a = (s - 2 * t) / e + Math.PI / 2;
  return { x: -t + e * Math.cos(a), z: e * Math.sin(a), tx: -Math.sin(a), tz: Math.cos(a) };
}
function wt(s, t) {
  const e = P.straight, i = P.radius, a = et(s, -e, e), r = s - a, h = Math.hypot(r, t) || 1e-5, c = r / h, l = t / h;
  let n = 0;
  if (s >= -e && s <= e) n = t < 0 ? s + e : 2 * e + Math.PI * i + e - s;
  else if (s > e) n = 2 * e + (Math.atan2(t, r) + Math.PI / 2) * i;
  else {
    let o = Math.atan2(t, r);
    o < Math.PI / 2 && (o += 2 * Math.PI), n = 4 * e + Math.PI * i + (o - Math.PI / 2) * i;
  }
  return { offset: h - i, nx: c, nz: l, s: (n % P.length + P.length) % P.length };
}
function Z(s, t, e = "jump") {
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
function nt(s) {
  return {
    mass: 0.116 + (s.shell === "wing" ? 0.014 : 6e-3) + 8e-3,
    radius: s.diameter / 100,
    grip: s.tire === "grip" ? 1.15 : 0.63,
    rolling: s.tire === "grip" ? 0.012 : 8e-3,
    inertia: (0.116 + 0.014 + 8e-3) * 1.12,
    rollLimit: s.ballast === "center" ? 1 : 0.78
  };
}
function O(s = 0) {
  const t = 3 - s * 3, e = ot(t);
  return { id: s, x: e.x, z: e.z, y: 0, vx: 0, vz: 0, vy: 0, yaw: 0, omega: 0, pitch: 0, roll: 0, distance: 0, lastS: (t % P.length + P.length) % P.length, time: 0, lap: 0, lapTimes: [], lapStart: 0, contacts: 0, landings: 0, impact: 0, offTrack: !1, finished: !1, airborne: !1, maxSpeed: 0 };
}
function bt(s, t, e = Y, i = !0, a = "jump") {
  if (s.offTrack || s.finished) return;
  e = et(e, 0, 1 / 120);
  const r = nt(t), h = 196, c = Math.cos(s.yaw), l = Math.sin(s.yaw), n = s.vx * c + s.vz * l, o = -s.vx * l + s.vz * c, d = Z(s.x, s.z, a);
  if (!d.gap && s.y <= d.height + 0.018 && s.vy <= d.slope * s.vx + 0.05) {
    const p = 133.33333333333334 * Math.PI * 2 / t.gear * r.radius, u = i ? 12e-4 * t.gear * 0.78 / (r.radius * 0.05) * Math.max(0, 1 - Math.max(0, n) / p) : 0, k = r.rolling + Math.abs(n) * 25e-5, y = (u - (Math.abs(n) > 0.05 ? k : 0)) / (r.mass * 0.05), v = et(-o * 16, -r.grip * h, r.grip * h), g = -h * d.slope / (1 + d.slope * d.slope);
    s.vx += (c * y - l * v + g) * e, s.vz += (l * y + c * v) * e, s.omega *= Math.exp(-4 * e), s.y = d.height, s.vy = d.slope * s.vx, s.pitch += (Math.atan(d.slope * c) - s.pitch) * Math.min(1, e * 18), s.roll *= Math.exp(-10 * e), s.airborne = !1;
  } else
    s.vy -= h * e, s.airborne = !0, s.pitch += (t.ballast === "rear" ? 0.18 : -0.13) * e;
  s.x += s.vx * e, s.z += s.vz * e, s.y += s.vy * e, s.yaw += s.omega * e;
  const f = Z(s.x, s.z, a);
  if (!f.gap && s.y < f.height) {
    const p = Math.max(0, -s.vy);
    if (s.y = f.height, s.vy = 0, s.airborne && p > 3) {
      s.landings++, s.impact = Math.max(s.impact, p / 50);
      const u = et(p * (t.ballast === "rear" ? 5e-3 : 25e-4), 0, 0.35);
      s.vx *= 1 - u, s.vz *= 1 - u, s.roll = t.ballast === "rear" ? 0.11 : 0.03;
    }
    s.airborne = !1;
  }
  if (s.y < 1.8)
    for (const p of [-1.28, 1.28]) for (const u of [-0.88, 0.88]) {
      const k = p * c - u * l, y = p * l + u * c, v = wt(s.x + k, s.z + y), g = P.width / 2 - 0.13, b = Math.abs(v.offset) - g;
      if (b > 0) {
        const q = v.offset > 0 ? -1 : 1, A = v.nx * q, M = v.nz * q;
        s.x += A * b * 0.65, s.z += M * b * 0.65;
        const C = (s.vx - s.omega * y) * A + (s.vz + s.omega * k) * M;
        if (C < 0) {
          const L = k * M - y * A, R = -1.12 * C / (1 / r.mass + L * L / r.inertia);
          s.vx += R * A / r.mass, s.vz += R * M / r.mass, s.omega += L * R / r.inertia, s.vx *= 0.997, s.vz *= 0.997, -C > 2 && s.impact < 0.06 && s.contacts++, s.impact = Math.max(s.impact, Math.min(1, -C / 40));
        }
      }
    }
  const w = wt(s.x, s.z);
  if (s.y < -2.5 || Math.abs(w.offset) > P.width / 2 + 1.8) {
    s.offTrack = !0;
    return;
  }
  let z = w.s - s.lastS;
  z > P.length / 2 && (z -= P.length), z < -P.length / 2 && (z += P.length), Math.abs(z) < 3 && (s.distance += z), s.lastS = w.s, s.time += e;
  const $ = Math.max(0, Math.floor(s.distance / P.length));
  $ > s.lap && (s.lap = $, s.lapTimes.push(s.time - s.lapStart), s.lapStart = s.time, $ >= 3 && (s.finished = !0)), s.impact *= Math.exp(-9 * e), s.maxSpeed = Math.max(s.maxSpeed, Math.hypot(s.vx, s.vz));
}
function Vt(s, t, e, i) {
  if (!(s.offTrack || t.offTrack || Math.abs(s.y - t.y) > 0.8))
    for (const a of [-0.7, 0.7]) for (const r of [-0.7, 0.7]) {
      const h = t.x + Math.cos(t.yaw) * r - s.x - Math.cos(s.yaw) * a, c = t.z + Math.sin(t.yaw) * r - s.z - Math.sin(s.yaw) * a, l = Math.hypot(h, c);
      if (l >= 1.5 || l < 1e-5) continue;
      const n = h / l, o = c / l, d = nt(e).mass, m = nt(i).mass, f = 1 / d + 1 / m, w = 1.5 - l;
      s.x -= n * w / (d * f), s.z -= o * w / (d * f), t.x += n * w / (m * f), t.z += o * w / (m * f);
      const z = (t.vx - s.vx) * n + (t.vz - s.vz) * o;
      if (z < 0) {
        const $ = -1.2 * z / f;
        s.vx -= $ * n / d, s.vz -= $ * o / d, t.vx += $ * n / m, t.vz += $ * o / m, s.impact = t.impact = 0.65;
      }
    }
}
function xt(s) {
  const t = new I(), e = new qt(), i = (v) => new H({ color: v, roughness: 0.46, metalness: 0.06 }), a = (v, g, b = 0, q = 0, A = 0) => {
    const M = new B(v, g);
    return M.position.set(b, q, A), M.receiveShadow = !0, M.castShadow = !0, t.add(M), M;
  }, r = i(16772304), h = i(2445931), c = i(5159853), l = i(16761702);
  a(new N(69, 1.1, 35, 3, 1), i(12157774), 0, -1, 0), a(new N(67, 0.2, 33, 3, 0.8), i(2508379), 0, -0.38, 0), a(new N(44, 0.3, 14, 3, 2), i(7121568), 0, -0.17, 0);
  const n = 360, o = new tt(new V(1, 0.72, 0.17), r, n * 2), d = new tt(new V(1, 0.06, 0.22), r, n * 2), m = new tt(new V(0.035, 0.018, P.width), h, n);
  let f = 0, w = 0;
  const z = [], $ = [], p = [];
  for (let v = 0; v < n; v++) {
    const g = ot(v / n * P.length), b = ot((v + 1) / n * P.length), q = Z(g.x, g.z, s), A = Z(b.x, b.z, s);
    if (q.gap || A.gap) continue;
    const M = z.length / 3, C = new mt(s === "jump" && g.z < -8 && g.x > -6 && g.x < 1 ? 16762477 : 15003369);
    for (const [D, kt] of [[g, q], [b, A]]) for (const pt of [-1, 1])
      z.push(D.x - D.tz * pt * P.width / 2, kt.height, D.z + D.tx * pt * P.width / 2), $.push(C.r, C.g, C.b);
    p.push(M, M + 2, M + 1, M + 1, M + 2, M + 3);
    const L = b.x - g.x, R = b.z - g.z, dt = Math.hypot(L, R), $t = Math.atan2(A.height - q.height, dt);
    for (const D of [-1, 1])
      e.position.set((g.x + b.x) / 2 - g.tz * D * P.width / 2, (q.height + A.height) / 2 + 0.36, (g.z + b.z) / 2 + g.tx * D * P.width / 2), e.rotation.set(0, -Math.atan2(R, L), 0), e.rotateZ($t), e.scale.set(dt * 1.04, 1, 1), e.updateMatrix(), o.setMatrixAt(f, e.matrix), o.setColorAt(f, new mt(Math.floor(v / 15) % 2 ? 15788764 : D === 1 ? 4107956 : 15041136)), e.position.y += 0.37, e.updateMatrix(), d.setMatrixAt(f++, e.matrix);
    v % 12 === 0 && (e.position.set(g.x, q.height + 0.012, g.z), e.rotation.set(0, -Math.atan2(g.tz, g.tx), 0), e.scale.set(1, 1, 1), e.updateMatrix(), m.setMatrixAt(w++, e.matrix)), q.height > 0.15 && v % 10 === 0 && a(new V(0.32, q.height + 0.32, 4), h, g.x, (q.height - 0.32) / 2, g.z);
  }
  o.count = d.count = f, m.count = w, o.castShadow = !0, t.add(o, d, m);
  const u = new lt();
  u.setAttribute("position", new st(z, 3)), u.setAttribute("color", new st($, 3)), u.setIndex(p), u.computeVertexNormals(), a(u, new H({ vertexColors: !0, side: W, roughness: 0.82 }));
  for (const v of [-14.85, -9.15]) a(new _(0.16, 0.2, 3.4, 12), c, -15, 1.7, v);
  a(new N(0.45, 0.65, 6.3, 2, 0.18), l, -15, 3.4, -12);
  for (let v = 0; v < 10; v++) for (let g = 0; g < 2; g++) a(new V(0.42, 0.024, 0.49), v % 2 === g ? h : r, -15 + g * 0.42, 0.02, -14.2 + v * 0.49);
  const k = a(new ft(2, 24, 16), i(15119707), 0, 2, 0), y = a(new ct(2.65, 0.13, 8, 48), r, 0, 2, 0);
  y.rotation.x = 1.2, y.rotation.y = 0.24, k.rotation.y = 0.4, a(new _(2.8, 3, 0.35, 32), h, 0, 0.15, 0);
  for (const v of [-17, -11, 11, 17]) for (const g of [-3.4, 3.4])
    a(new _(0.12, 0.16, 1.2, 8), i(11171916), v, 0.6, g), a(new ft(0.85, 12, 8), i(v < 0 ? 9554063 : 6929070), v, 1.4, g).scale.y = 1.15;
  return t;
}
function yt(s) {
  const t = /* @__PURE__ */ new Set(), e = /* @__PURE__ */ new Set();
  s.traverse((i) => {
    i instanceof B && (t.add(i.geometry), (Array.isArray(i.material) ? i.material : [i.material]).forEach((a) => e.add(a)), i instanceof tt && i.dispose());
  }), t.forEach((i) => i.dispose()), e.forEach((i) => i.dispose()), s.clear();
}
class Wt {
  constructor(t) {
    this.stage = t, this.renderer = new Tt({ antialias: !0, alpha: !0, powerPreference: "low-power" }), this.renderer.setPixelRatio(1), this.renderer.shadowMap.enabled = !0, this.renderer.shadowMap.type = At, this.renderer.toneMapping = Ct, this.renderer.domElement.setAttribute("aria-label", "四驅車模型，可拖動旋轉，也可點零件"), this.renderer.domElement.tabIndex = 0, t.append(this.renderer.domElement);
    const e = new Ht(), i = new Et(this.renderer);
    this.environment = i.fromScene(e, 0.04), this.scene.environment = this.environment.texture, this.scene.environmentIntensity = 0.4, this.renderer.toneMappingExposure = 0.85, e.dispose(), i.dispose(), this.scene.add(new It(13036287, 2504790, 1.1));
    const a = new Lt(16774096, 1.8);
    a.position.set(12, 35, -18), a.castShadow = !0, a.shadow.mapSize.set(1024, 1024), Object.assign(a.shadow.camera, { left: -40, right: 40, top: 32, bottom: -32 }), a.shadow.bias = -2e-4, this.scene.add(a);
    const r = new B(new _(2.25, 2.3, 0.18, 64), new H({ color: 1583683, metalness: 0.45, roughness: 0.35 }));
    r.position.y = -0.16, r.receiveShadow = !0, this.plinth.add(r);
    const h = new B(new ct(2.17, 0.012, 6, 100), new jt({ color: 7137535 }));
    h.rotation.x = Math.PI / 2, h.position.y = -0.058, this.plinth.add(h), this.scene.add(this.plinth, this.car.root, this.arena, this.rival.root), this.rival.root.visible = !1, this.buildTrack(), this.arena.visible = !1, this.observer = new ResizeObserver(() => {
      this.resize(), this.wake();
    }), this.observer.observe(t);
    const c = this.abort.signal, l = this.renderer.domElement;
    l.addEventListener("pointerdown", (n) => {
      this.race || (this.dragging = { x: n.clientX, y: n.clientY, yaw: this.orbit.yaw, pitch: this.orbit.pitch, id: n.pointerId, moved: !1 }, l.setPointerCapture(n.pointerId));
    }, { signal: c }), l.addEventListener("pointermove", (n) => {
      if (!this.dragging) return;
      const o = this.dragging, d = n.clientX - o.x, m = n.clientY - o.y;
      Math.hypot(d, m) > 5 && (o.moved = !0), this.orbit.yaw = o.yaw - d * 8e-3, this.orbit.pitch = Math.max(0.15, Math.min(1.35, o.pitch + m * 6e-3)), this.wake();
    }, { signal: c }), l.addEventListener("pointerup", (n) => {
      if (!this.dragging) return;
      const o = this.dragging.moved;
      if (this.dragging = void 0, l.hasPointerCapture(n.pointerId) && l.releasePointerCapture(n.pointerId), !o) {
        const d = l.getBoundingClientRect(), m = new Bt();
        m.setFromCamera(new K((n.clientX - d.left) / d.width * 2 - 1, 1 - (n.clientY - d.top) / d.height * 2), this.camera);
        for (const f of m.intersectObject(this.car.root, !0)) {
          let w = f.object;
          for (; w && !w.userData.part; ) w = w.parent;
          if (w && w.visible) {
            this.onPick?.(w.userData.part);
            break;
          }
        }
      }
    }, { signal: c }), l.addEventListener("pointercancel", () => {
      this.dragging = void 0;
    }, { signal: c }), l.addEventListener("keydown", (n) => {
      ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(n.key) && !this.race && (n.preventDefault(), this.orbit.yaw += n.key === "ArrowLeft" ? -0.12 : n.key === "ArrowRight" ? 0.12 : 0, this.orbit.pitch = Math.max(0.15, Math.min(1.35, this.orbit.pitch + (n.key === "ArrowUp" ? 0.1 : n.key === "ArrowDown" ? -0.1 : 0))), this.wake()), n.key.toLowerCase() === "c" && this.setCamera(!this.first);
    }, { signal: c }), document.addEventListener("visibilitychange", () => {
      document.hidden ? (cancelAnimationFrame(this.frame), this.frame = 0, this.previous = 0, this.gain?.gain.setTargetAtTime(0, this.audio.currentTime, 0.05)) : this.wake();
    }, { signal: c }), l.addEventListener("webglcontextlost", (n) => {
      n.preventDefault(), this.pause(), this.stage.dispatchEvent(new CustomEvent("mini4wd-error", { bubbles: !0, detail: "3D 畫面暫停，請返回後重新開啟。" }));
    }, { signal: c }), this.scene.add(this.halo), this.halo.visible = !1, this.halo.material.depthTest = !1, this.halo.renderOrder = 20, this.balloon = document.createElement("span"), this.balloon.className = "m4-balloon", this.balloon.hidden = !0, t.append(this.balloon), this.resize(), this.wake();
  }
  stage;
  track = "flat";
  car = new vt();
  state = O();
  setup = { ...X };
  onUpdate;
  onPick;
  renderer;
  scene = new Rt();
  camera = new J(42, 1, 0.025, 300);
  environment;
  halo = new Dt(new F(), 16768137);
  balloon;
  arena = new I();
  plinth = new I();
  rival = new vt();
  rivalState = O(1);
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
  installed = rt();
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
  look = new T();
  goal = new T();
  target = new T();
  wind;
  windGain;
  explodedBounds = new it();
  explodedCorners = [];
  buildTrack() {
    this.arena.add(xt(this.track));
  }
  resize() {
    const t = Math.max(1, this.stage.clientWidth), e = Math.max(1, this.stage.clientHeight), i = Math.min(1, 1280 / t, 800 / e);
    this.renderer.setSize(Math.round(t * i), Math.round(e * i), !1), this.camera.aspect = t / e, this.camera.updateProjectionMatrix();
  }
  setMode(t) {
    this.pause(), this.race = t, this.arena.visible = t, this.plinth.visible = !t, this.rival.root.visible = t && this.compare, this.power = !1, this.car.root.position.set(0, 0, 0), this.car.root.rotation.set(0, 0, 0), this.camera.fov = t ? 65 : 42, this.camera.updateProjectionMatrix(), this.previous = 0, this.layout(), this.wake();
  }
  configure(t) {
    this.setup = { ...t }, this.car.configure(t), this.wake();
  }
  setParts(t, e, i, a = "") {
    this.installed = new Set(t), e && !this.exploded && (this.orbit.zoom = 5.2), this.exploded = e, this.xray = i, this.selected = a, this.layout(), this.wake();
  }
  layout() {
    if (this.car.layout(this.race ? rt() : this.installed, this.race ? 0 : Number(this.exploded), !this.race && this.xray, this.race ? "" : this.selected), this.exploded) {
      const t = new F();
      for (const e of this.car.parts.values()) e.visible && t.union(new F().setFromObject(e));
      t.getBoundingSphere(this.explodedBounds), this.explodedCorners = [];
      for (const e of this.car.parts.values()) if (e.visible) {
        const i = new F().setFromObject(e);
        for (const a of [i.min.x, i.max.x]) for (const r of [i.min.y, i.max.y]) for (const h of [i.min.z, i.max.z]) this.explodedCorners.push(new T(a, r, h).sub(this.explodedBounds.center));
      }
    }
  }
  setCamera(t) {
    this.first = t, this.previous = 0, this.wake();
  }
  setTrack(t) {
    this.track !== t && (this.pause(), yt(this.arena), this.track = t, this.buildTrack(), this.reset(), this.wake());
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
    this.state = O(), this.rivalState = O(1), this.rival.root.visible = !1, this.distance = 0, this.wake();
  }
  run(t = !1) {
    this.state = O(), this.rivalState = O(1), this.compare = t, this.rival.root.visible = t, this.rival.configure({ ...X, color: "#ff9266" }), this.running = !0, this.accumulator = 0, this.distance = 0, this.wake();
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
    const t = {}, e = this.renderer.getSize(new K());
    this.renderer.setSize(160, 110, !1);
    const i = new J(35, 160 / 110, 0.01, 100);
    this.plinth.visible = !1;
    for (const [a, r] of this.car.parts) {
      for (const [m, f] of this.car.parts) f.visible = m === a;
      const h = a === "gears" ? this.car.gears[1] : a === "rollers" ? r.children[0] : r, c = r.children.map((m) => m.visible);
      h !== r && r.children.forEach((m, f) => m.visible = a === "rollers" ? f < 2 : m === h);
      const l = new F().setFromObject(h), n = l.getCenter(new T()), o = l.getBoundingSphere(new it()).radius, d = o / Math.sin(G.degToRad(17.5)) * 0.92;
      i.position.copy(n).add(new T(0.85, 0.6, 1).normalize().multiplyScalar(d)), i.lookAt(n), this.renderer.render(this.scene, i), t[a] = this.renderer.domElement.toDataURL("image/png"), r.children.forEach((m, f) => m.visible = c[f]);
    }
    return this.renderer.setSize(e.x, e.y, !1), this.plinth.visible = !0, this.layout(), this.wake(), t;
  }
  trackThumbnails() {
    const t = {}, e = this.renderer.getSize(new K());
    this.renderer.setSize(256, 144, !1), this.car.root.visible = !1, this.plinth.visible = !1;
    const i = new J(40, 256 / 144, 0.1, 300);
    i.position.set(43, 59, 58), i.lookAt(0, 0, 0);
    for (const a of ["flat", "bridge", "jump"]) {
      const r = xt(a);
      this.scene.add(r), this.renderer.render(this.scene, i), t[a] = this.renderer.domElement.toDataURL("image/png"), this.scene.remove(r), yt(r);
    }
    return this.car.root.visible = !0, this.plinth.visible = !0, this.renderer.setSize(e.x, e.y, !1), this.wake(), t;
  }
  optionThumbnails() {
    const t = {}, e = this.renderer.getSize(new K());
    this.renderer.setSize(200, 120, !1), this.plinth.visible = !1;
    const i = new J(35, 200 / 120, 0.01, 100), a = [["tire:grip", "tire-fl", { tire: "grip" }], ["tire:hard", "tire-fl", { tire: "hard" }], ["diameter:26", "tire-fl", { diameter: 26 }], ["diameter:30", "tire-fl", { diameter: 30 }], ["shell:arrow", "shell", { shell: "arrow" }], ["shell:wing", "shell", { shell: "wing" }]];
    for (const [r, h, c] of a) {
      this.car.configure({ ...this.setup, ...c });
      for (const [f, w] of this.car.parts) w.visible = f === h;
      const l = this.car.parts.get(h), n = new F().setFromObject(l), o = n.getCenter(new T()), d = n.getBoundingSphere(new it()).radius, m = (r.startsWith("diameter:") ? 0.36 : d) / Math.sin(G.degToRad(17.5)) * 1.1;
      i.position.copy(o).add(new T(0.85, 0.6, 1).normalize().multiplyScalar(m)), i.lookAt(o), this.renderer.render(this.scene, i), t[r] = this.renderer.domElement.toDataURL("image/png");
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
        for (this.accumulator += i; this.accumulator >= Y; )
          bt(this.state, this.setup, Y, !0, this.track), this.compare && (bt(this.rivalState, X, Y, !0, this.track), Vt(this.state, this.rivalState, this.setup, X)), this.accumulator -= Y;
        this.distance += Math.hypot(this.state.vx, this.state.vz) * i, (this.state.finished || this.state.offTrack) && (this.running = !1);
      }
      for (const [o, d] of [[this.car, this.state], [this.rival, this.rivalState]])
        o.root.position.set(d.x, d.y + (o === this.car ? (this.setup.diameter - 26) / 100 : 0), d.z), o.root.rotation.set(0, -d.yaw, 0), o.root.rotateZ(d.pitch), o.root.rotateX(d.roll), o.animate(this.distance, !0, o === this.car ? this.setup.gear : 4, o === this.car ? this.setup.diameter / 100 : 0.26);
      const r = this.state, h = new T(Math.cos(r.yaw), 0, Math.sin(r.yaw)), c = new T(r.x, r.y, r.z), l = Math.hypot(r.vx, r.vz);
      this.goal.copy(c).addScaledVector(h, this.first ? 1.4 : -6.5).add(new T(0, this.first ? 1.2 : 3.8, 0)), this.target.copy(c).addScaledVector(h, this.first ? 9 : 5).add(new T(0, 0.7, 0));
      const n = e ? 1 : 1 - Math.exp(-i * (this.first ? 18 : 7));
      this.camera.position.lerp(this.goal, n), this.look.lerp(this.target, n), this.reduced || (this.camera.position.y += Math.sin(t * 0.025) * Math.min(0.035, l * 1e-3) + r.impact * 0.08), this.camera.lookAt(this.look), this.camera.fov += (65 + Math.min(9, l * 0.18) - this.camera.fov) * (e ? 1 : 0.08), !this.running && r.time === 0 && (this.camera.position.set(18, 48, 56), this.camera.lookAt(0, 0, 0), this.camera.fov = 46), this.camera.updateProjectionMatrix();
    } else if (this.car.root.position.set(0, (this.setup.diameter - 26) / 100, 0), this.car.root.rotation.set(0, 0, 0), this.power && (this.distance += i * 1.8, this.car.animate(this.distance, !0, this.setup.gear, this.setup.diameter / 100)), this.exploded) {
      const r = Math.tan(G.degToRad(this.camera.fov / 2)), h = r * this.camera.aspect, c = new T(Math.cos(this.orbit.yaw), Math.sin(this.orbit.pitch), Math.sin(this.orbit.yaw)).normalize(), l = new T().crossVectors(new T(0, 1, 0), c).normalize(), n = new T().crossVectors(c, l);
      let o = 1;
      for (const d of this.explodedCorners) o = Math.max(o, d.dot(c) + Math.max(Math.abs(d.dot(n)) / r, Math.abs(d.dot(l)) / h));
      this.camera.position.copy(this.explodedBounds.center).addScaledVector(c, o * 1.12 * this.orbit.zoom / 5.2), this.camera.lookAt(this.explodedBounds.center);
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
      const r = this.halo.box.getCenter(new T()).project(this.camera);
      this.balloon.textContent = String(S.findIndex((h) => h.id === this.selected) + 1), this.balloon.style.left = Math.max(6, Math.min(this.stage.clientWidth - 32, (r.x + 1) * this.stage.clientWidth / 2)) + "px", this.balloon.style.top = Math.max(6, Math.min(this.stage.clientHeight - 32, (1 - r.y) * this.stage.clientHeight / 2)) + "px";
    }
    this.renderer.render(this.scene, this.camera), (t - this.lastUI > 100 || this.state.finished || this.state.offTrack) && (this.onUpdate?.(this.state), this.lastUI = t), this.running || this.power ? this.wake() : this.previous = 0;
  }
  destroy() {
    this.dead = !0, cancelAnimationFrame(this.frame), this.abort.abort(), this.observer.disconnect(), this.car.dispose(), this.rival.dispose(), this.arena.traverse((t) => {
      t instanceof B && (t.geometry.dispose(), (Array.isArray(t.material) ? t.material : [t.material]).forEach((e) => e.dispose()));
    }), this.plinth.traverse((t) => {
      t instanceof B && (t.geometry.dispose(), t.material.dispose());
    }), this.halo.geometry.dispose(), this.halo.material.dispose(), this.balloon.remove(), this.environment.dispose(), this.renderer.dispose(), this.oscillator?.stop(), this.wind?.stop(), this.audio?.close(), this.renderer.domElement.remove();
  }
}
function Nt(s) {
  let t = "", e = !1;
  for (let i = 0; i <= 60; i++) {
    const a = -12 + i * 0.4, r = Z(a, -12, s);
    if (r.gap) {
      e = !1;
      continue;
    }
    t += (e ? "L" : "M") + i * 2 + " " + (30 - r.height * 19) + " ", e = !0;
  }
  return `<svg class="m4-track-profile" viewBox="0 0 120 36" aria-hidden="true"><path d="${t}" fill="none" stroke="#ffe29b" stroke-width="5" stroke-linecap="round"/></svg>`;
}
function Xt(s) {
  const t = s * 12, e = 46 / (t + 12), i = t * e, a = 12 * e, r = (h, c, l, n, o) => `<polygon points="${Array.from({ length: n * 4 }, (m, f) => {
    const w = f * Math.PI * 2 / (n * 4), z = l * (f % 4 === 0 || f % 4 === 3 ? 0.89 : 1);
    return `${h + Math.cos(w) * z},${c + Math.sin(w) * z}`;
  }).join(" ")}" fill="${o}" stroke="#fff3c5" stroke-width=".8"/><circle cx="${h}" cy="${c}" r="${l * 0.3}" fill="#183148"/><circle cx="${h - l * 0.1}" cy="${c - l * 0.1}" r="${l * 0.1}" fill="#fff7dc"/>`;
  return `<svg viewBox="0 0 150 100" aria-hidden="true">${r(52 - a, 52, a, 12, "#75e4d1")}${r(52 + i * 0.85, 52, i, t, "#f9c667")}</svg>`;
}
function Yt(s) {
  return `<svg viewBox="0 0 160 100" aria-hidden="true"><rect x="27" y="19" width="105" height="63" rx="22" fill="#7dd8e0" stroke="#e1fcff" stroke-width="2"/><path d="M109 32l14 18-14 18" fill="#173955"/><path d="M39 34h45v32H39z" fill="#243d56"/><circle cx="${s ? 43 : 78}" cy="50" r="17" fill="#ffc965" stroke="#fff4c7" stroke-width="3"/><circle cx="${s ? 43 : 78}" cy="50" r="5" fill="#ba7332"/><path d="M35 10h20m45 0h20M35 90h20m45 0h20" stroke="#152437" stroke-width="12" stroke-linecap="round"/></svg>`;
}
function _t(s, t) {
  const e = (i) => `<img src="${t[i] || ""}" alt="">`;
  return `<div class="m4-picture-prompt" aria-hidden="true">${s === 0 ? `<b>?</b><i>→</i>${e("motor")}<i>→</i>${e("rim-fl")}` : s === 1 ? `${e("motor")}<i>→</i><b>?</b><i>→</i>${e("rim-fl")}` : `<span class="m4-rail-picture">${e("shell")}<b>?</b><i>↪</i></span>`}</div>`;
}
const Mt = { back: "M15 5 8 12l7 7M8 12h13", voice: "m4 9 4 0 5-4v14l-5-4H4zM17 8q6 4 0 8", replay: "M5 8a8 8 0 1 1-1 8M5 3v5h5", quiz: "m5 16 11-11 3 3-11 11-4 1zM14 7l3 3", notes: "M5 3h14v18H5zM8 8h8M8 12h8M8 16h5", learn: "M3 5q5-3 9 0 5-3 9 0v15q-5-3-9 0-4-3-9 0zM12 5v15", parts: "M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z", build: "m4 20 9-9M14 4a5 5 0 0 0 6 6l-4-1-1-4z", tune: "M4 7h16M4 17h16M8 4v6M16 14v6", race: "M5 21V3m0 1h14l-3 5 3 5H5", camera: "M3 7h5l2-3h4l2 3h5v13H3zM15 13a3 3 0 1 1-6 0 3 3 0 0 1 6 0", power: "M12 3v9M6 5a9 9 0 1 0 12 0", play: "m8 4 12 8-12 8z", stop: "M6 6h12v12H6z", next: "m9 5 7 7-7 7", prev: "m15 5-7 7 7 7", remove: "M5 12h14", plus: "M5 12h14M12 5v14", explode: "m9 9-6-6m0 5V3h5M15 15l6 6m0-5v5h-5M3 21l6-6M15 9l6-6", eye: "M2 12q10-15 20 0-10 15-20 0M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0", check: "m4 12 5 5L20 6" }, ht = (s) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${Mt[s] || Mt.parts}"/></svg>`, x = (s, t, e = s) => `<button type="button" data-m4="${s}" aria-label="${t}" title="${t}">${ht(e)}<span>${t}</span></button>`, U = { flat: "平道", bridge: "坡橋", jump: "跳台" }, E = [
  { title: "電池讓車跑起來", text: "閉合開關，看馬達和四輪轉動。", voice: "電池經過接點和開關，形成完整電路，馬達把電能轉成轉動。按電源，看看馬達和四個輪圈。這台車不需要回拉。", part: "battery-a" },
  { title: "小齒輪，大力量", text: "馬達轉 4 圈，輪軸轉 1 圈。", voice: "現在是四比一減速。馬達轉四圈，輪軸轉一圈。較大的減速比可以增加輪端扭力，但降低空載輪速。", part: "gears" },
  { title: "動力送到四個輪子", text: "沿著長軸，找出前後輪軸。", voice: "馬達帶動減速齒輪，再經過長傳動軸，把動力送到前後輪軸，帶動四個輪圈和輪胎。這是軸傳動四輪驅動的簡化教學模型。", part: "shaft" },
  { title: "怎麼沿著彎道跑？", text: "導輪碰護欄，輪胎抓住地面。", voice: "小導輪受到護欄推力，車身就改變方向。輪胎和地面的摩擦也影響穩定性。第一人稱是車頭攝影機，不是駕駛座。", part: "rollers" }
];
class Qt {
  constructor(t) {
    this.host = t, t.innerHTML = `<section class="m4-lab" aria-label="四驅車研究所"><header class="m4-header">${x("back", "返回")}<h2>四驅車研究所</h2><nav class="m4-helpers" aria-label="實驗小幫手">${x("voice", "語音")}${x("replay", "重聽")}${x("notes", "紀錄")}${x("quiz", "考題")}</nav></header><nav class="m4-nav" aria-label="探索步驟">${[["learn", "原理"], ["parts", "零件"], ["build", "組裝"], ["tune", "改裝"], ["race", "試跑"]].map(([a, r]) => x(a, r)).join("")}</nav><div class="m4-layout"><section class="m4-scene"><div class="m4-stage"></div><div class="m4-scene-tag">原創教學車 · 星羽 01</div><div class="m4-view-tools">${x("explode", "拆開", "explode")}${x("xray", "透視", "eye")}${x("zoom-in", "放大", "plus")}${x("zoom-out", "縮小", "remove")}</div><button class="m4-snap" data-m4="install" hidden aria-label="安裝選取零件">${ht("plus")}<span>裝到車上</span></button><div class="m4-hud" hidden><div><b data-speed>0.0</b><small>km/h · 模擬</small></div><div><b data-lap>0 / 3</b><small>完成圈數</small></div><div><b data-time>0.0</b><small>秒</small></div></div><div class="m4-overlay" hidden></div><div class="m4-countdown" hidden></div><p class="m4-status" role="status" aria-live="polite">電池讓車跑起來</p></section><aside class="m4-tools" aria-label="操作面板"></aside></div></section>`, this.root = t.querySelector(".m4-lab");
    const e = this.root.querySelector(".m4-nav");
    this.root.querySelector(".m4-header").insertBefore(e, this.root.querySelector(".m4-helpers")), e.querySelector('[data-m4="parts"]').remove();
    const i = document.createElement("details");
    i.className = "m4-bom", i.innerHTML = '<summary aria-label="展開或收起零件表">☷</summary><div class="m4-bom-body"></div>', this.root.querySelector(".m4-scene").append(i), this.root.querySelector('[data-m4="quiz"] svg').outerHTML = '<img class="m4-pencil" src="images/experiments/car-v4/pencil.png" alt="">';
    try {
      this.view = new Wt(this.root.querySelector(".m4-stage")), this.view.configure(this.setup), this.thumbnails = this.view.thumbnails(), this.optionPhotos = this.view.optionThumbnails(), this.trackPhotos = this.view.trackThumbnails(), this.view.onPick = (a) => this.select(a), this.view.onUpdate = (a) => this.updateRace(a);
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
    }, { signal: this.abort.signal }), this.render(), this.voice.last = E[0].voice;
  }
  host;
  track = "flat";
  trackPhotos = {};
  optionPhotos = {};
  root;
  view;
  voice = new Gt();
  abort = new AbortController();
  page = "learn";
  previous = "learn";
  lesson = 0;
  partPage = 0;
  selected = "";
  installed = rt();
  started = !1;
  setup = { ...X };
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
      const i = E[this.lesson];
      t.innerHTML = `<div class="m4-lesson-cards">${E.map((a, r) => `<button class="m4-object-card" data-m4="lesson-${r}" aria-label="${a.title}" aria-pressed="${this.lesson === r}"><img src="${this.thumbnails[a.part] || ""}" alt=""><span>${["電池", "齒輪", "傳動", "導輪"][r]}</span></button>`).join("")}</div><div class="m4-dock-actions">${x("power", this.powered ? "關閉電源" : "開啟電源", "power")}${x("replay", "聽解說")}${x("lesson-next", this.lesson === 3 ? "去組裝" : "下一步", "next")}</div><p class="m4-sr">${i.voice}</p>`;
    } else if (this.page === "parts" || this.page === "build") {
      const i = S.slice(this.partPage * 4, this.partPage * 4 + 4);
      t.innerHTML = `<div class="m4-eyebrow">${this.page === "build" ? "我的組裝" : "BOM · 教學零件表"} <b>${this.installed.size} / ${S.length}</b></div><div class="m4-part-grid">${i.map((a) => `<button type="button" data-part="${a.id}" aria-label="${a.name}，${a.count}${a.count === 1 ? "組或件" : "件"}${this.installed.has(a.id) ? "，已安裝" : ""}" aria-pressed="${a.id === this.selected}"><img src="${this.thumbnails[a.id] || ""}" alt="" draggable="false"><span>${a.name}</span><small>× ${a.count} ${this.installed.has(a.id) ? "✓" : ""}</small></button>`).join("")}</div><div class="m4-pager">${x("part-prev", "上一頁", "prev")}${this.page === "build" ? '<button data-m4="next-part" class="m4-find-next">找下一件</button>' : `<span>${this.partPage + 1} / ${Math.ceil(S.length / 4)}</span>`}${x("part-next", "下一頁", "next")}</div><p class="m4-part-description"></p><div class="m4-two">${this.page === "build" ? x("install", "安裝", "plus") + x("remove", "拆下", "remove") : x("build", "開始組裝", "build") + x("replay", "聽用途")}</div>`, this.describePart();
    } else if (this.page === "tune") this.renderTune(t);
    else if (this.page === "race") t.innerHTML = `<div class="m4-track-cards">${Object.keys(U).map((i) => `<button class="m4-object-card" data-m4="track-${i}" aria-label="${U[i]}賽道" aria-pressed="${this.track === i}" ${this.running ? "disabled" : ""}><img src="${this.trackPhotos[i] || ""}" alt="">${Nt(i)}<span>${U[i]}</span></button>`).join("")}</div><div class="m4-race-options">${x("camera", this.first ? "車頭視角" : "追車視角", "camera")}${x("sound", this.sound ? "聲音開" : "聲音關", "voice")}<button data-m4="motion" aria-label="穩定鏡頭" aria-pressed="${this.reduced}">${ht("eye")}</button>${x("collision", "雙車碰撞測試", "parts")}</div><div class="m4-dock-actions"><button class="m4-go" data-m4="run" aria-label="開始試跑"><img src="images/experiments/mini4wd-v2/race-flag.png" alt=""><span>出發</span></button>${x("stop", "停止", "stop")}</div>`;
    else if (this.page === "notes") {
      const i = this.records.slice(this.recordPage * 2, this.recordPage * 2 + 2);
      t.innerHTML = `<h3>我的測試</h3><p>一次只換一個條件，再跑同一條賽道。</p><div class="m4-pager">${x("record-prev", "上一頁", "prev")}<span>${this.records.length ? this.recordPage + 1 : 0} / ${Math.ceil(this.records.length / 2)}</span>${x("record-next", "下一頁", "next")}</div>${x("return", "回到實驗", "back")}`, e.innerHTML = `<h3>比較試跑結果</h3>${i.length ? i.map((a, r) => `<article class="m4-record"><b>第 ${this.recordPage * 2 + r + 1} 次 · ${a.finished ? "完成三圈" : "中途停止"}</b><p>${U[a.track]} · ${Ot(a.setup)}</p><div><strong>${a.time.toFixed(2)} <small>秒</small></strong><strong>${(a.max * 0.18).toFixed(1)} <small>km/h 最高</small></strong></div><p>護欄撞擊 ${a.contacts} 次 · 落地 ${a.landings} 次</p></article>`).join("") : "<p>還沒有紀錄。把車組好，去試跑吧！</p>"}`;
    } else {
      const a = [{ q: "哪個零件提供電能？", ids: ["battery-a", "shell", "rollers"], answer: "battery-a" }, { q: "哪個零件把動力送到前輪？", ids: ["shell", "shaft", "battery-a"], answer: "shaft" }, { q: "哪個零件會碰護欄，引導轉彎？", ids: ["rollers", "battery-a", "rim-fl"], answer: "rollers" }][this.quizIndex];
      t.innerHTML = `<h3>看圖想一想</h3><p>${this.quizIndex + 1} / 3</p>${x("replay", "聽題目")}${x("quiz-next", "下一題", "next")}${x("return", "回到實驗", "back")}`, e.innerHTML = `<h3>${a.q}</h3>${_t(this.quizIndex, this.thumbnails)}<div class="m4-answer-grid">${a.ids.map((r) => `<button data-answer="${r}" aria-label="${S.find((h) => h.id === r).name}"><img src="${this.thumbnails[r] || ""}" alt="${S.find((h) => h.id === r).name}"></button>`).join("")}</div><p class="m4-feedback" role="status">點一張圖片</p>`, this.voice.last = a.q;
    }
    this.view || t.querySelectorAll("button").forEach((i) => {
      ["run", "collision", "power"].includes(i.dataset.m4 || "") && (i.disabled = !0);
    });
    for (const i of ["run", "collision"]) {
      const a = t.querySelector(`[data-m4="${i}"]`);
      a && (a.disabled = this.installed.size !== S.length || !this.view || this.running);
    }
    this.renderBom(), this.view?.setParts(this.installed, this.exploded, this.xray, this.selected);
  }
  bomPage = 0;
  renderBom() {
    const t = this.root.querySelector(".m4-bom-body");
    this.root.querySelector(".m4-bom").hidden = ["race", "quiz", "notes"].includes(this.page), t.innerHTML = S.slice(this.bomPage * 4, this.bomPage * 4 + 4).map((e) => '<button data-part="' + e.id + '" aria-pressed="' + (e.id === this.selected) + '"><b>' + (S.indexOf(e) + 1) + "</b><span>" + e.name + "</span></button>").join("") + '<div class="m4-pager">' + x("bom-prev", "上一頁零件", "prev") + "<span>" + (this.bomPage + 1) + "/5</span>" + x("bom-next", "下一頁零件", "next") + "</div>";
  }
  renderTune(t) {
    const e = [
      { name: "齒輪", part: "gears", items: [["gear:3.5", "3.5 : 1"], ["gear:4", "4 : 1"], ["gear:5", "5 : 1"]] },
      { name: "輪胎", part: "tire-fl", items: [["tire:grip", "抓地"], ["tire:hard", "硬胎"]] },
      { name: "大小", part: "rim-fl", items: [["diameter:26", "26 mm"], ["diameter:30", "30 mm"]] },
      { name: "車殼", part: "shell", items: [["shell:arrow", "流線"], ["shell:wing", "尾翼"]] },
      { name: "配重", part: "chassis", items: [["ballast:center", "中央"], ["ballast:rear", "後方"]] },
      { name: "車色", part: "shell", items: [["color:#29c9ff", "天藍"], ["color:#ff794f", "橘紅"], ["color:#b59aff", "星紫"]] }
    ], i = e[this.tunePage];
    t.innerHTML = '<nav class="m4-category-tabs" aria-label="改裝分類">' + e.map((a, r) => '<button data-m4="category-' + r + '" aria-label="' + a.name + '" aria-pressed="' + (r === this.tunePage) + '"><img src="' + (this.thumbnails[a.part] || "") + '" alt=""><span>' + a.name + "</span></button>").join("") + '</nav><div class="m4-tune-cards" role="group" aria-label="' + i.name + '">' + i.items.map(([a, r]) => {
      const [h, c] = a.split(":"), l = h === "gear" ? Xt(Number(c)) : h === "ballast" ? Yt(c === "rear") : h === "color" ? '<i class="m4-color-orb" style="--paint:' + c + '"></i>' : '<img src="' + (this.optionPhotos[a] || "") + '" alt="">';
      return '<button class="m4-object-card" data-choice="' + a + '" aria-label="' + r + '" aria-pressed="' + (String(this.setup[h]) === c) + '">' + l + "<span>" + r + "</span></button>";
    }).join("") + '</div><div class="m4-dock-actions"><button class="m4-go" data-m4="race" aria-label="去試跑"><img src="images/experiments/mini4wd-v2/race-flag.png" alt=""><span>試跑</span></button></div>';
  }
  action(t) {
    if (/^category-[0-5]$/.test(t)) {
      this.tunePage = Number(t.slice(-1)), this.render(), this.tell(["齒輪", "輪胎", "輪徑", "車殼", "配重", "車色"][this.tunePage]);
      return;
    }
    if (/^lesson-[0-3]$/.test(t)) {
      this.lesson = Number(t.slice(-1)), this.selected = E[this.lesson].part, this.xray = !0, this.render(), this.tell(E[this.lesson].text, E[this.lesson].voice);
      return;
    }
    if (t.startsWith("track-") && !this.running) {
      const e = t.slice(6);
      e in U && (this.stop(), this.track = e, this.view?.setTrack(e), this.render(), this.tell(U[e], e === "flat" ? "平坦的跑道，先練習三圈。" : e === "bridge" ? "連續的坡橋，觀察上坡和下坡的速度。" : "斜坡後面有缺口，觀察車子起跳和落地。"));
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
      if (this.installed.size !== S.length) {
        this.tell("先把車組好，再觀察通電。");
        return;
      }
      this.powered = !this.powered, this.view?.setPower(this.powered), this.tell(this.powered ? "電路接通，四輪一起轉。" : "電路打開，馬達停止。"), this.render();
    } else if (t === "lesson-prev" || t === "lesson-next") {
      if (t === "lesson-next" && this.lesson === 3) {
        this.switchPage("build");
        return;
      }
      this.lesson = Math.max(0, Math.min(3, this.lesson + (t === "lesson-next" ? 1 : -1))), this.selected = E[this.lesson].part, this.render(), this.tell(E[this.lesson].text, E[this.lesson].voice);
    } else if (t === "part-prev" || t === "part-next")
      this.partPage = (this.partPage + (t === "part-next" ? 1 : 4)) % 5, this.render();
    else if (t === "install") this.install();
    else if (t === "remove")
      Ft(this.selected, this.installed) ? (this.tell("拆下了。可以再装回去。"), this.render()) : this.tell(this.selected === "chassis" ? "底盤留在工作台上。" : "先拆下裝在它上面的零件。");
    else if (t === "next-part") {
      const e = S.find((i) => !this.installed.has(i.id) && gt(i.id, this.installed));
      e ? (this.partPage = Math.floor(S.indexOf(e) / 4), this.select(e.id), this.render()) : this.tell("組裝完成！去改裝，或到賽道試跑。");
    } else t === "camera" ? (this.first = !this.first, this.view?.setCamera(this.first), this.render()) : t === "sound" ? (this.sound = !this.sound, this.view?.setSound(this.sound), this.render()) : t === "motion" ? (this.reduced = !this.reduced, this.view?.setReduced(this.reduced), this.render()) : t === "run" || t === "collision" ? this.run(t === "collision") : t === "stop" ? (this.stop(), this.render()) : t === "record-prev" || t === "record-next" ? (this.recordPage = Math.max(0, Math.min(Math.ceil(this.records.length / 2) - 1, this.recordPage + (t === "record-next" ? 1 : -1))), this.render()) : t === "quiz-next" && (this.quizIndex = (this.quizIndex + 1) % 3, this.render(), this.voice.replay());
  }
  switchPage(t) {
    if (t === this.page) return;
    (t === "notes" || t === "quiz") && (["notes", "quiz"].includes(this.page) || (this.previous = this.page)), this.stop(), this.powered = !1, this.voice.stop(), this.page = t, t === "build" && !this.started && (this.started = !0, this.installed = /* @__PURE__ */ new Set(["chassis"]), this.selected = "motor", this.partPage = 0, this.exploded = !1, this.xray = !1), t === "learn" && (this.selected = E[this.lesson].part), t === "parts" && (this.exploded = !0), (t === "tune" || t === "build") && (this.exploded = !1), this.view?.setMode(t === "race"), this.render();
    const e = t === "build" ? "點零件，再點「安裝」。也可以拖到車上。" : t === "race" ? "三圈試跑。先選鏡頭，再出發！" : t === "parts" ? "點一個零件，看看它的工作。" : t === "tune" ? "一次只換一個條件，去試跑比較。" : t === "learn" ? E[this.lesson].text : t === "notes" ? "比較同一條賽道的結果。" : "看圖，找出答案。";
    this.tell(e, t === "learn" ? E[this.lesson].voice : e), t === "quiz" && (this.voice.last = this.root.querySelector(".m4-overlay h3").textContent || "");
  }
  select(t) {
    if (!S.some((i) => i.id === t)) return;
    this.selected = t, this.bomPage = Math.floor(S.findIndex((i) => i.id === t) / 4), this.renderBom(), this.view?.setParts(this.installed, this.exploded, this.xray, t), this.describePart(), this.root.querySelectorAll("[data-part]").forEach((i) => i.setAttribute("aria-pressed", String(i.dataset.part === t))), this.root.querySelector(".m4-snap").hidden = this.page !== "build" || this.installed.has(t);
    const e = S.find((i) => i.id === t);
    this.tell(e.name, e.voice);
  }
  describePart() {
    const t = S.find((i) => i.id === this.selected), e = this.root.querySelector(".m4-part-description");
    e && (e.textContent = t.voice);
  }
  install() {
    if (this.page === "build") {
      if (this.installed.has(this.selected)) {
        this.tell("這個零件已經裝好了。");
        return;
      }
      if (!gt(this.selected, this.installed)) {
        const t = S.find((e) => e.id === this.selected).needs.filter((e) => !this.installed.has(e)).map((e) => S.find((i) => i.id === e).name);
        this.tell(`先裝好：${t.join("、")}`);
        return;
      }
      this.installed.add(this.selected), this.tell(this.installed.size === S.length ? "完成了！這台就是你要試跑的車。" : "喀！裝好了。找下一個零件吧。"), this.render();
    }
  }
  choose(t) {
    const [e, i] = t.split(":");
    ({ gear: ["3.5", "4", "5"], tire: ["grip", "hard"], diameter: ["26", "30"], shell: ["arrow", "wing"], ballast: ["center", "rear"], color: ["#29c9ff", "#ff794f", "#b59aff"] })[e]?.includes(i) && (this.setup = { ...this.setup, [e]: e === "gear" || e === "diameter" ? Number(i) : i }, this.view?.configure(this.setup), this.render(), this.tell(e === "color" ? "換了車色，性能不變。" : e === "gear" ? "齒比改好了。比較加速與三圈時間。" : "設定改好了，去同一條賽道比較。"));
  }
  async run(t) {
    if (!this.view || this.running || this.installed.size !== S.length) return;
    this.view.reset(), this.running = !0, this.recorded = !1;
    const e = ++this.sequence;
    this.render(), this.voice.stop();
    const i = this.root.querySelector(".m4-countdown");
    i.hidden = !1;
    for (const a of ["3", "2", "1"]) {
      if (e !== this.sequence || this.dead) return;
      i.textContent = a, await new Promise((r) => setTimeout(r, 650));
    }
    e !== this.sequence || this.dead || (i.hidden = !0, this.tell(t ? "橘車是標準設定，觀察擦撞與掉速。" : "出發！觀察彎道和落地。"), this.view.run(t));
  }
  stop() {
    this.sequence++, this.root.querySelector(".m4-countdown").hidden = !0, this.running && this.view && this.view.state.time > 0 && this.saveRecord(this.view.state), this.running = !1, this.view?.pause();
  }
  updateRace(t) {
    this.page === "race" && (this.root.querySelector("[data-speed]").textContent = (Math.hypot(t.vx, t.vz) * 0.18).toFixed(1), this.root.querySelector("[data-lap]").textContent = `${t.lap} / 3`, this.root.querySelector("[data-time]").textContent = t.time.toFixed(1), this.running && (t.finished || t.offTrack) && (this.running = !1, this.saveRecord(t), this.tell(t.finished ? `完成三圈！${t.time.toFixed(2)} 秒。` : "車子離開賽道了。回去調整輪胎與配重，再試一次。"), this.render()));
  }
  saveRecord(t) {
    this.recorded || (this.recorded = !0, this.records.push({ setup: { ...this.setup }, track: this.track, time: t.time, max: t.maxSpeed, contacts: t.contacts, landings: t.landings, finished: t.finished }));
  }
  answer(t) {
    const e = ["battery-a", "shaft", "rollers"][this.quizIndex], i = t === e ? "答對了！" + S.find((a) => a.id === e).voice : "再想想。點語音，聽聽題目。";
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
  Qt as Mini4wdLab
};
