import { G as I, M as st, D as V, a as E, B as tt, F as et, b as C, V as T, c as j, d as F, T as pt, R as gt, C as _, e as vt, f as wt, W as bt, P as xt, A as Mt, g as yt, H as zt, h as St, i as Y, j as $t, k as it, S as Pt, l as at, m as kt, n as W, o as rt, I as ot, O as qt, p as Tt, q as At } from "./RoundedBoxGeometry-DFERVGq8.mjs";
import { R as Ct } from "./RoomEnvironment-DwYDT8-q.mjs";
import { S as Et } from "./narration-DCI2AWPz.mjs";
const Z = ["fl", "fr", "rl", "rr"], N = ["左前", "右前", "左後", "右後"], M = [
  { id: "chassis", name: "底盤", count: 1, needs: [], voice: "底盤固定所有零件，是四驅車的骨架。" },
  { id: "motor", name: "馬達", count: 1, needs: ["chassis"], voice: "電流經過馬達，電能轉成轉動。它不需要先往後拉。" },
  { id: "gears", name: "減速齒輪組", count: 1, needs: ["motor"], voice: "小齒輪帶動較大的齒輪，轉得比較慢，輪端扭力比較大。" },
  { id: "shaft", name: "傳動軸", count: 1, needs: ["gears"], voice: "中間的長軸把馬達動力傳到前輪，是四輪驅動的重要連接。" },
  { id: "axles", name: "前後輪軸", count: 2, needs: ["shaft"], voice: "兩根輪軸連接左右輪圈，齒輪把動力送到前後輪軸。" },
  ...Z.map((e, t) => ({ id: "rim-" + e, name: N[t] + "輪圈", count: 1, needs: ["axles"], voice: N[t] + "輪圈套在輪軸上，輪胎再套在輪圈外面。" })),
  ...Z.map((e, t) => ({ id: "tire-" + e, name: N[t] + "輪胎", count: 1, needs: ["rim-" + e], voice: N[t] + "輪胎接觸地面。摩擦讓輪子的轉動變成前進。" })),
  { id: "rollers", name: "導輪", count: 4, needs: ["chassis"], voice: "四個小導輪接觸軌道護欄，幫忙引導車頭轉彎。" },
  { id: "switch", name: "開關與接點", count: 1, needs: ["motor"], voice: "開關閉合，電池、馬達與導線形成完整迴路；打開開關，馬達就不再得到電力。" },
  { id: "battery-a", name: "電池 A", count: 1, needs: ["switch"], voice: "這兩顆電池串聯。依正負標記安裝，接點會把它們接成供電迴路。" },
  { id: "battery-b", name: "電池 B", count: 1, needs: ["battery-a"], voice: "第二顆電池依相反方向放置，底盤接點將兩顆串聯。" },
  { id: "shell", name: "車殼", count: 1, needs: ["rollers", "battery-b", ...Z.map((e) => "tire-" + e)], voice: "最後扣上車殼。外觀與配重不同，試跑結果也可能不同。" }
], K = () => new Set(M.map((e) => e.id));
function nt(e, t) {
  return M.find((s) => s.id === e)?.needs.every((s) => t.has(s)) ?? !1;
}
function It(e, t) {
  return e === "chassis" || M.some((s) => t.has(s.id) && s.needs.includes(e)) ? !1 : t.delete(e);
}
function Lt(e) {
  return `${e.gear}:1・${e.tire === "grip" ? "抓地胎" : "硬胎"} ${e.diameter} mm・${e.shell === "arrow" ? "箭羽" : "尾翼"}・${e.ballast === "center" ? "中央" : "後方"}配重`;
}
function ut(e, t) {
  const s = Math.exp(-Math.pow((e + 0.14) / 0.56, 2)), i = 0.5 + 0.075 * Math.exp(-Math.pow((e + 0.88) / 0.38, 2)) + 0.065 * Math.exp(-Math.pow((e - 0.9) / 0.35, 2)) - 0.16 * Math.pow(Math.abs(e) / 1.43, 6), a = 0.87 + 0.035 * Math.exp(-Math.pow((e + 0.85) / 0.45, 2)) - 0.16 * Math.pow(Math.max(0, e) / 1.43, 4), r = a + 0.025 + 0.23 * s, n = Math.abs(t), d = 0.6 + 0.08 * Math.exp(-Math.pow((Math.abs(e) - 0.96) / 0.32, 4)), h = n < 0.65 ? F.lerp(r, a, Math.pow(n / 0.65, 3)) : F.lerp(a, d, Math.pow((n - 0.65) / 0.35, 0.7));
  return new T(e, h, t * i);
}
function L(e, t, s, i, a = 0, r = 48, n = 24) {
  const c = [], d = [];
  for (let o = 0; o <= r; o++) for (let m = 0; m <= n; m++) {
    const g = ut(F.lerp(e, t, o / r), F.lerp(s, i, m / n));
    g.y += a, c.push(g.x, g.y, g.z);
  }
  for (let o = 0; o < r; o++) for (let m = 0; m < n; m++) {
    const g = o * (n + 1) + m, x = g + n + 1;
    d.push(g, g + 1, x, x, g + 1, x + 1);
  }
  const h = new tt();
  return h.setAttribute("position", new et(c, 3)), h.setIndex(d), h.computeVertexNormals(), h;
}
function Bt() {
  const e = new I(), t = new I(), s = new st({ color: 2738687, metalness: 0.42, roughness: 0.24, clearcoat: 1, side: V }), i = new st({ color: 530213, metalness: 0.35, roughness: 0.12, clearcoat: 1, side: V }), a = new E({ color: 1055532, roughness: 0.55, metalness: 0.25, side: V }), r = new E({ color: 15267327, roughness: 0.3, metalness: 0.25, side: V }), n = new E({ color: 12581631, emissive: 6676479, emissiveIntensity: 0.6 }), c = new E({ color: 16725074, emissive: 16717624, emissiveIntensity: 0.5 }), d = (o, m, g = e) => {
    const x = new C(o, m);
    return x.castShadow = !0, x.receiveShadow = !0, g.add(x), x;
  }, h = (o, m, g, x, b, P, p, l = e) => {
    const u = d(new j(o, m, g), p, l);
    return u.position.set(x, b, P), u;
  };
  d(L(-1.43, 1.43, -1, 1), s);
  for (const o of [-1.43, 1.43]) {
    const m = [], g = [];
    for (let b = 0; b <= 32; b++) {
      const P = ut(o, b / 16 - 1);
      if (m.push(P.x, P.y, P.z, P.x, 0.4, P.z), b < 32) {
        const p = b * 2;
        g.push(p, p + 1, p + 2, p + 1, p + 3, p + 2);
      }
    }
    const x = new tt();
    x.setAttribute("position", new et(m, 3)), x.setIndex(g), x.computeVertexNormals(), d(x, s);
  }
  d(L(0.19, 0.61, -0.6, 0.6, 7e-3, 24, 20), i), d(L(-0.79, -0.44, -0.57, 0.57, 7e-3, 20, 20), i);
  for (const o of [-1, 1]) {
    d(L(-0.4, 0.19, o * 0.53, o * 0.74, 9e-3, 28, 12), i), d(L(0.65, 1.36, o * 0.23, o * 0.33, 0.01, 24, 4), r), d(L(-1.35, -0.83, o * 0.23, o * 0.33, 0.01, 20, 4), r), d(L(-0.42, 0.13, o * 0.24, o * 0.32, 0.01, 18, 4), r), d(L(-0.72, -0.38, o * 0.83, o * 0.98, 8e-3, 14, 6), a), h(1.4, 0.035, 0.045, 0, 0.425, o * 0.5, a);
    const m = d(L(1.18, 1.225, o * 0.47, o * 0.84, 0.015, 8, 10), n);
    m.name = "headlight", h(0.018, 0.025, 0.2, 1.44, 0.667, o * 0.235, n), h(0.015, 0.032, 0.28, -1.44, 0.79, o * 0.205, c);
  }
  h(0.018, 0.075, 0.45, 1.437, 0.52, 0, a), h(0.16, 0.035, 0.88, 1.36, 0.402, 0, a), h(0.17, 0.045, 0.88, -1.36, 0.4, 0, a);
  for (const o of [-0.27, -0.09, 0.09, 0.27]) h(0.24, 0.065, 0.025, -1.32, 0.39, o, a);
  e.add(t), h(0.28, 0.045, 1.18, -1.16, 1.08, 0, s, t);
  for (const o of [-0.38, 0.38]) h(0.065, 0.22, 0.035, -1.16, 0.97, o, a, t);
  for (const o of [-0.6, 0.6]) h(0.29, 0.11, 0.035, -1.16, 1.1, o, s, t);
  return { root: e, wing: t, paint: s, materials: [s, i, a, r, n, c] };
}
class ht {
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
    for (const l of M) {
      const u = new I();
      u.userData.part = l.id, this.parts.set(l.id, u), this.root.add(u);
    }
    const t = (l, u = 0.1) => new E({ color: l, metalness: u, roughness: 0.35 }), s = t(1319992, 0.45), i = t(13294819, 0.8), a = t(16759127, 0.55), r = t(15069179, 0.25), n = (l, u, f, v = 0, k = 0, q = 0) => {
      const y = new C(u, f.clone());
      return y.position.set(v, k, q), y.castShadow = !0, y.receiveShadow = !0, l.add(y), y;
    }, c = (l, u, f, v, k, q = 0, y = 0, S = 0) => n(l, new gt(u, f, v, 2, Math.min(u, f, v) * 0.18), k, q, y, S), d = (l, u, f, v, k, q, y, S = "z") => {
      const $ = n(l, new _(u, u, f, 20), v, k, q, y);
      return S === "z" && ($.rotation.x = Math.PI / 2), S === "x" && ($.rotation.z = Math.PI / 2), $;
    }, h = this.parts.get("chassis");
    c(h, 2.7, 0.15, 1.18, s, 0, 0.34);
    for (const l of [-0.55, 0.55]) c(h, 2.6, 0.19, 0.09, i, 0, 0.47, l);
    for (const l of [-1.28, 1.28]) {
      c(h, 0.18, 0.12, 1.75, s, l, 0.39);
      for (const u of [-0.8, 0.8]) d(h, 0.055, 0.1, a, l, 0.48, u, "y");
    }
    const o = this.parts.get("motor");
    d(o, 0.2, 0.68, i, -0.74, 0.62, 0), c(o, 0.33, 0.29, 0.14, s, -0.74, 0.62, -0.4), o.add(this.rotor), this.rotor.position.set(-0.74, 0.62, 0.41), c(this.rotor, 0.31, 0.055, 0.05, a);
    const m = this.parts.get("gears");
    for (const [l, u, f, v] of [[-0.74, 0.62, 0.44, 0.1], [-0.98, 0.54, 0.44, 0.18], [0.94, 0.43, 0.43, 0.18]]) {
      const k = new I();
      k.position.set(l, u, f), m.add(k), this.gears.push(k), d(k, v, 0.075, a, 0, 0, 0);
      for (let q = 0; q < 16; q++) {
        const y = q * Math.PI / 8, S = c(k, 0.07, 0.07, 0.075, a, Math.cos(y) * v, Math.sin(y) * v, 0);
        S.rotation.z = y;
      }
    }
    d(this.parts.get("shaft"), 0.035, 1.94, i, 0, 0.5, 0.43, "x");
    for (const l of [-0.96, 0.96]) d(this.parts.get("axles"), 0.045, 1.62, i, l, 0.26, 0);
    ["fl", "fr", "rl", "rr"].forEach((l, u) => {
      const f = u < 2 ? 0.96 : -0.96, v = u % 2 ? -0.76 : 0.76, k = this.parts.get("rim-" + l), q = this.parts.get("tire-" + l);
      for (const A of [k, q])
        A.position.set(f, 0.26, v), A.userData.home = A.position.clone(), this.wheelParts.push(A);
      const y = new I();
      k.add(y), this.wheels.push(y);
      const S = t(2569542), $ = d(q, 0.26, 0.24, S, 0, 0, 0);
      this.rubber.push($.material);
      for (const A of [-1, 1]) {
        d(y, 0.175, 0.025, i, 0, 0, 0.135 * A), d(y, 0.065, 0.04, a, 0, 0, 0.152 * A);
        for (let R = 0; R < 5; R++) {
          const G = R * Math.PI * 2 / 5, ft = c(y, 0.15, 0.035, 0.04, s, Math.cos(G) * 0.11, Math.sin(G) * 0.11, 0.153 * A);
          ft.rotation.z = G;
        }
        n(q, new pt(0.222, 0.012, 4, 24), r, 0, 0, 0.124 * A);
      }
    });
    const g = this.parts.get("rollers");
    for (const l of [-1.28, 1.28]) for (const u of [-0.88, 0.88])
      d(g, 0.13, 0.11, r, l, 0.52, u, "y"), d(g, 0.04, 0.14, a, l, 0.54, u, "y");
    for (const [l, u] of ["battery-a", "battery-b"].entries()) {
      const f = this.parts.get(u), v = l ? 0.22 : -0.22;
      d(f, 0.145, 1.02, t(l ? 16747596 : 4377557), 0.15, 0.62, v, "x"), d(f, 0.1, 0.035, i, l ? -0.38 : 0.68, 0.62, v, "x"), c(f, 0.015, 0.085, 0.018, r, l ? -0.405 : 0.705, 0.64, v), c(f, 0.015, 0.018, 0.085, r, l ? -0.405 : 0.705, 0.64, v);
    }
    const x = this.parts.get("switch");
    c(x, 0.23, 0.12, 0.18, a, 0.95, 0.53, -0.3), c(x, 0.09, 0.08, 0.14, s, 0.93, 0.62, -0.3);
    const b = (l, u) => n(x, new vt(new wt(l.map((f) => new T(...f))), 20, 0.017, 6, !1), t(u));
    b([[0.95, 0.55, -0.3], [1.15, 0.5, -0.4], [0.7, 0.5, -0.4], [0.68, 0.62, -0.22]], 16738390), b([[-0.38, 0.62, -0.22], [-0.48, 0.49, 0], [-0.38, 0.62, 0.22]], 14992227), b([[0.68, 0.62, 0.22], [0.8, 0.48, 0.52], [-0.7, 0.48, 0.52], [-0.74, 0.63, 0.35]], 5672959), b([[-0.74, 0.63, -0.35], [-1.1, 0.5, -0.49], [0.95, 0.55, -0.3]], 5672959);
    const P = this.parts.get("shell"), p = Bt();
    P.add(p.root), this.wings = p.wing, this.skins = [p.paint], this.shellMaterials = p.materials, h.add(this.ballast), d(this.ballast, 0.16, 0.08, a, 0, 0.43, 0, "y");
    for (const [l, u] of this.parts)
      u.userData.home || (u.userData.home = u.position.clone()), u.name = l;
  }
  configure(t) {
    this.skins.forEach((s) => s.color.set(t.color)), this.rubber.forEach((s) => {
      s.color.set(t.tire === "grip" ? 2175814 : 6845829), s.roughness = t.tire === "grip" ? 0.92 : 0.45;
    }), this.wings.visible = t.shell === "wing", this.ballast.position.x = t.ballast === "rear" ? -0.67 : 0;
    for (const s of this.wheelParts) s.scale.setScalar(t.diameter / 26);
  }
  layout(t, s, i, a) {
    let r = 0;
    for (const [n, c] of this.parts) {
      const d = c.userData.home;
      if (c.visible = t.has(n), c.position.copy(d), s && n !== "chassis") {
        const h = Math.floor(r / 5), o = r % 5;
        c.position.add(new T((o - 2) * 1.18, (h + 1) * 0.62, (h - 1) * 1.2));
      }
      r++;
    }
    for (const n of this.shellMaterials)
      n.transparent !== i && (n.needsUpdate = !0), n.transparent = i, n.opacity = i ? 0.12 : 1, n.depthWrite = !i;
  }
  animate(t, s = !1, i = 4, a = 0.26) {
    const r = -t / a;
    for (const n of this.wheels) n.rotation.z = r;
    this.gears.forEach((n, c) => n.rotation.z = r * (c === 0 ? -i : 1)), this.rotor.rotation.z = s ? -r * i : 0;
  }
  dispose() {
    const t = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Set();
    this.root.traverse((i) => {
      i instanceof C && (t.add(i.geometry), (Array.isArray(i.material) ? i.material : [i.material]).forEach((a) => s.add(a)));
    }), t.forEach((i) => i.dispose()), s.forEach((i) => i.dispose());
  }
}
const O = { gear: 4, tire: "grip", diameter: 26, shell: "arrow", ballast: "center", color: "#29c9ff" }, z = { straight: 18, radius: 12, width: 5, length: 72 + 24 * Math.PI }, J = 1 / 240, X = (e, t, s) => Math.max(t, Math.min(s, e));
function U(e) {
  const { straight: t, radius: s, length: i } = z;
  if (e = (e % i + i) % i, e < 2 * t) return { x: e - t, z: -s, tx: 1, tz: 0 };
  if (e -= 2 * t, e < Math.PI * s) {
    const r = e / s - Math.PI / 2;
    return { x: t + s * Math.cos(r), z: s * Math.sin(r), tx: -Math.sin(r), tz: Math.cos(r) };
  }
  if (e -= Math.PI * s, e < 2 * t) return { x: t - e, z: s, tx: -1, tz: 0 };
  const a = (e - 2 * t) / s + Math.PI / 2;
  return { x: -t + s * Math.cos(a), z: s * Math.sin(a), tx: -Math.sin(a), tz: Math.cos(a) };
}
function lt(e, t) {
  const s = z.straight, i = z.radius, a = X(e, -s, s), r = e - a, n = Math.hypot(r, t) || 1e-5, c = r / n, d = t / n;
  let h = 0;
  if (e >= -s && e <= s) h = t < 0 ? e + s : 2 * s + Math.PI * i + s - e;
  else if (e > s) h = 2 * s + (Math.atan2(t, r) + Math.PI / 2) * i;
  else {
    let o = Math.atan2(t, r);
    o < Math.PI / 2 && (o += 2 * Math.PI), h = 4 * s + Math.PI * i + (o - Math.PI / 2) * i;
  }
  return { offset: n - i, nx: c, nz: d, s: (h % z.length + z.length) % z.length };
}
function D(e, t) {
  return t < -8 && e > -6 && e < 1 ? { height: (e + 6) * 0.18, slope: 0.18, gap: !1 } : t < -8 && e >= 1 && e < 5 ? { height: -4, slope: 0, gap: !0 } : { height: 0, slope: 0, gap: !1 };
}
function Q(e) {
  return {
    mass: 0.116 + (e.shell === "wing" ? 0.014 : 6e-3) + 8e-3,
    radius: e.diameter / 100,
    grip: e.tire === "grip" ? 1.15 : 0.63,
    rolling: e.tire === "grip" ? 0.012 : 8e-3,
    inertia: (0.116 + 0.014 + 8e-3) * 1.12,
    rollLimit: e.ballast === "center" ? 1 : 0.78
  };
}
function H(e = 0) {
  const t = 3 - e * 3, s = U(t);
  return { id: e, x: s.x, z: s.z, y: 0, vx: 0, vz: 0, vy: 0, yaw: 0, omega: 0, pitch: 0, roll: 0, distance: 0, lastS: (t % z.length + z.length) % z.length, time: 0, lap: 0, lapTimes: [], lapStart: 0, contacts: 0, landings: 0, impact: 0, offTrack: !1, finished: !1, airborne: !1, maxSpeed: 0 };
}
function dt(e, t, s = J, i = !0) {
  if (e.offTrack || e.finished) return;
  s = X(s, 0, 1 / 120);
  const a = Q(t), r = 196, n = Math.cos(e.yaw), c = Math.sin(e.yaw), d = e.vx * n + e.vz * c, h = -e.vx * c + e.vz * n, o = D(e.x, e.z);
  if (!o.gap && e.y <= o.height + 0.018 && e.vy <= o.slope * e.vx + 0.05) {
    const p = 133.33333333333334 * Math.PI * 2 / t.gear * a.radius, l = i ? 12e-4 * t.gear * 0.78 / (a.radius * 0.05) * Math.max(0, 1 - Math.max(0, d) / p) : 0, u = a.rolling + Math.abs(d) * 25e-5, f = (l - (Math.abs(d) > 0.05 ? u : 0)) / (a.mass * 0.05), v = X(-h * 16, -a.grip * r, a.grip * r);
    e.vx += (n * f - c * v) * s, e.vz += (c * f + n * v) * s, e.omega *= Math.exp(-4 * s), e.y = o.height, e.vy = o.slope * e.vx, e.pitch += (Math.atan(o.slope * n) - e.pitch) * Math.min(1, s * 18), e.roll *= Math.exp(-10 * s), e.airborne = !1;
  } else
    e.vy -= r * s, e.airborne = !0, e.pitch += (t.ballast === "rear" ? 0.18 : -0.13) * s;
  e.x += e.vx * s, e.z += e.vz * s, e.y += e.vy * s, e.yaw += e.omega * s;
  const g = D(e.x, e.z);
  if (!g.gap && e.y < g.height) {
    const p = Math.max(0, -e.vy);
    if (e.y = g.height, e.vy = 0, e.airborne && p > 3) {
      e.landings++, e.impact = Math.max(e.impact, p / 50);
      const l = X(p * (t.ballast === "rear" ? 5e-3 : 25e-4), 0, 0.35);
      e.vx *= 1 - l, e.vz *= 1 - l, e.roll = t.ballast === "rear" ? 0.11 : 0.03;
    }
    e.airborne = !1;
  }
  if (e.y < 1.8)
    for (const p of [-1.28, 1.28]) for (const l of [-0.88, 0.88]) {
      const u = p * n - l * c, f = p * c + l * n, v = lt(e.x + u, e.z + f), k = z.width / 2 - 0.13, q = Math.abs(v.offset) - k;
      if (q > 0) {
        const y = v.offset > 0 ? -1 : 1, S = v.nx * y, $ = v.nz * y;
        e.x += S * q * 0.65, e.z += $ * q * 0.65;
        const A = (e.vx - e.omega * f) * S + (e.vz + e.omega * u) * $;
        if (A < 0) {
          const R = u * $ - f * S, G = -1.12 * A / (1 / a.mass + R * R / a.inertia);
          e.vx += G * S / a.mass, e.vz += G * $ / a.mass, e.omega += R * G / a.inertia, e.vx *= 0.997, e.vz *= 0.997, -A > 2 && e.impact < 0.06 && e.contacts++, e.impact = Math.max(e.impact, Math.min(1, -A / 40));
        }
      }
    }
  const x = lt(e.x, e.z);
  if (e.y < -2.5 || Math.abs(x.offset) > z.width / 2 + 1.8) {
    e.offTrack = !0;
    return;
  }
  let b = x.s - e.lastS;
  b > z.length / 2 && (b -= z.length), b < -z.length / 2 && (b += z.length), Math.abs(b) < 3 && (e.distance += b), e.lastS = x.s, e.time += s;
  const P = Math.max(0, Math.floor(e.distance / z.length));
  P > e.lap && (e.lap = P, e.lapTimes.push(e.time - e.lapStart), e.lapStart = e.time, P >= 3 && (e.finished = !0)), e.impact *= Math.exp(-9 * s), e.maxSpeed = Math.max(e.maxSpeed, Math.hypot(e.vx, e.vz));
}
function jt(e, t, s, i) {
  if (!(e.offTrack || t.offTrack || Math.abs(e.y - t.y) > 0.8))
    for (const a of [-0.7, 0.7]) for (const r of [-0.7, 0.7]) {
      const n = t.x + Math.cos(t.yaw) * r - e.x - Math.cos(e.yaw) * a, c = t.z + Math.sin(t.yaw) * r - e.z - Math.sin(e.yaw) * a, d = Math.hypot(n, c);
      if (d >= 1.5 || d < 1e-5) continue;
      const h = n / d, o = c / d, m = Q(s).mass, g = Q(i).mass, x = 1 / m + 1 / g, b = 1.5 - d;
      e.x -= h * b / (m * x), e.z -= o * b / (m * x), t.x += h * b / (g * x), t.z += o * b / (g * x);
      const P = (t.vx - e.vx) * h + (t.vz - e.vz) * o;
      if (P < 0) {
        const p = -1.2 * P / x;
        e.vx -= p * h / m, e.vz -= p * o / m, t.vx += p * h / g, t.vz += p * o / g, e.impact = t.impact = 0.65;
      }
    }
}
class Rt {
  constructor(t) {
    this.stage = t, this.renderer = new bt({ antialias: !0, alpha: !0, powerPreference: "low-power" }), this.renderer.setPixelRatio(1), this.renderer.shadowMap.enabled = !0, this.renderer.shadowMap.type = xt, this.renderer.toneMapping = Mt, this.renderer.domElement.setAttribute("aria-label", "四驅車模型，可拖動旋轉，也可點零件"), this.renderer.domElement.tabIndex = 0, t.append(this.renderer.domElement);
    const s = new Ct(), i = new yt(this.renderer);
    this.environment = i.fromScene(s, 0.04), this.scene.environment = this.environment.texture, this.scene.environmentIntensity = 0.4, this.renderer.toneMappingExposure = 0.85, s.dispose(), i.dispose(), this.scene.add(new zt(13036287, 2504790, 1.1));
    const a = new St(16774096, 1.8);
    a.position.set(12, 35, -18), a.castShadow = !0, a.shadow.mapSize.set(1024, 1024), Object.assign(a.shadow.camera, { left: -40, right: 40, top: 32, bottom: -32 }), a.shadow.bias = -2e-4, this.scene.add(a);
    const r = new C(new _(2.25, 2.3, 0.18, 64), new E({ color: 1583683, metalness: 0.45, roughness: 0.35 }));
    r.position.y = -0.16, r.receiveShadow = !0, this.plinth.add(r);
    const n = new C(new pt(2.17, 0.012, 6, 100), new Y({ color: 7137535 }));
    n.rotation.x = Math.PI / 2, n.position.y = -0.058, this.plinth.add(n), this.scene.add(this.plinth, this.car.root, this.arena, this.rival.root), this.rival.root.visible = !1, this.buildTrack(), this.arena.visible = !1, this.observer = new ResizeObserver(() => {
      this.resize(), this.wake();
    }), this.observer.observe(t);
    const c = this.abort.signal, d = this.renderer.domElement;
    d.addEventListener("pointerdown", (h) => {
      this.race || (this.dragging = { x: h.clientX, y: h.clientY, yaw: this.orbit.yaw, pitch: this.orbit.pitch, id: h.pointerId, moved: !1 }, d.setPointerCapture(h.pointerId));
    }, { signal: c }), d.addEventListener("pointermove", (h) => {
      if (!this.dragging) return;
      const o = this.dragging, m = h.clientX - o.x, g = h.clientY - o.y;
      Math.hypot(m, g) > 5 && (o.moved = !0), this.orbit.yaw = o.yaw - m * 8e-3, this.orbit.pitch = Math.max(0.15, Math.min(1.35, o.pitch + g * 6e-3)), this.wake();
    }, { signal: c }), d.addEventListener("pointerup", (h) => {
      if (!this.dragging) return;
      const o = this.dragging.moved;
      if (this.dragging = void 0, d.hasPointerCapture(h.pointerId) && d.releasePointerCapture(h.pointerId), !o) {
        const m = d.getBoundingClientRect(), g = new $t();
        g.setFromCamera(new it((h.clientX - m.left) / m.width * 2 - 1, 1 - (h.clientY - m.top) / m.height * 2), this.camera);
        for (const x of g.intersectObject(this.car.root, !0)) {
          let b = x.object;
          for (; b && !b.userData.part; ) b = b.parent;
          if (b && b.visible) {
            this.onPick?.(b.userData.part);
            break;
          }
        }
      }
    }, { signal: c }), d.addEventListener("pointercancel", () => {
      this.dragging = void 0;
    }, { signal: c }), d.addEventListener("keydown", (h) => {
      ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(h.key) && !this.race && (h.preventDefault(), this.orbit.yaw += h.key === "ArrowLeft" ? -0.12 : h.key === "ArrowRight" ? 0.12 : 0, this.orbit.pitch = Math.max(0.15, Math.min(1.35, this.orbit.pitch + (h.key === "ArrowUp" ? 0.1 : h.key === "ArrowDown" ? -0.1 : 0))), this.wake()), h.key.toLowerCase() === "c" && this.setCamera(!this.first);
    }, { signal: c }), document.addEventListener("visibilitychange", () => {
      document.hidden ? (cancelAnimationFrame(this.frame), this.frame = 0, this.previous = 0, this.gain?.gain.setTargetAtTime(0, this.audio.currentTime, 0.05)) : this.wake();
    }, { signal: c }), d.addEventListener("webglcontextlost", (h) => {
      h.preventDefault(), this.pause(), this.stage.dispatchEvent(new CustomEvent("mini4wd-error", { bubbles: !0, detail: "3D 畫面暫停，請返回後重新開啟。" }));
    }, { signal: c }), this.scene.add(this.halo), this.halo.visible = !1, this.halo.material.depthTest = !1, this.halo.renderOrder = 20, this.balloon = document.createElement("span"), this.balloon.className = "m4-balloon", this.balloon.hidden = !0, t.append(this.balloon), this.resize(), this.wake();
  }
  stage;
  car = new ht();
  state = H();
  setup = { ...O };
  onUpdate;
  onPick;
  renderer;
  scene = new Pt();
  camera = new at(42, 1, 0.025, 300);
  environment;
  halo = new kt(new W(), 16768137);
  balloon;
  arena = new I();
  plinth = new I();
  rival = new ht();
  rivalState = H(1);
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
  installed = K();
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
  explodedBounds = new rt();
  explodedCorners = [];
  buildTrack() {
    const s = new E({ color: 5538970, roughness: 0.89 }), i = new E({ color: 4186351, metalness: 0.3, roughness: 0.3 }), a = new j(1, 0.8, 0.13), r = new ot(a, i, 480);
    r.castShadow = !0;
    const n = new qt();
    let c = 0;
    const d = [], h = [];
    for (let p = 0; p < 240; p++) {
      const l = p / 240 * z.length, u = (p + 1) / 240 * z.length, f = U(l), v = U(u), k = D(f.x, f.z), q = D(v.x, v.z), y = Math.hypot(f.x - v.x, f.z - v.z);
      for (const $ of [-1, 1])
        n.position.set((f.x + v.x) / 2 - f.tz * $ * z.width / 2, 0.4 + Math.max(0, k.height), (f.z + v.z) / 2 + f.tx * $ * z.width / 2), n.rotation.set(0, -Math.atan2(f.tz, f.tx), 0), n.scale.set(y * 1.08, 1, 1), n.updateMatrix(), r.setMatrixAt(c, n.matrix), r.setColorAt(c++, new Tt(Math.floor(p / 12) % 2 ? 16768907 : 4315365));
      if (k.gap || q.gap) continue;
      const S = d.length / 3;
      for (const $ of [f, v]) for (const A of [-1, 1]) d.push($.x - $.tz * A * z.width / 2, Math.max(0, D($.x, $.z).height), $.z + $.tx * A * z.width / 2);
      h.push(S, S + 1, S + 2, S + 1, S + 3, S + 2);
    }
    r.count = c, this.arena.add(r), s.side = V;
    const o = new tt();
    o.setAttribute("position", new et(d, 3)), o.setIndex(h), o.computeVertexNormals();
    const m = new C(o, s);
    m.receiveShadow = !0, this.arena.add(m);
    const g = new C(new j(78, 0.7, 44), new E({ color: 2911093, roughness: 0.7 }));
    g.position.y = -1.2, g.receiveShadow = !0, this.arena.add(g);
    const x = new ot(new j(0.18, 0.015, 0.45), new Y({ color: 16768115 }), 90);
    for (let p = 0; p < 90; p++) {
      const l = U(p / 90 * z.length);
      n.position.set(l.x - l.tz * 1.9, 0.015 + Math.max(0, D(l.x, l.z).height), l.z + l.tx * 1.9), n.rotation.set(0, -Math.atan2(l.tz, l.tx), 0), n.scale.set(1, 1, 1), n.updateMatrix(), x.setMatrixAt(p, n.matrix);
    }
    this.arena.add(x);
    for (let p = 0; p < 10; p++) for (let l = 0; l < 2; l++) {
      const u = new C(new j(0.45, 0.025, 0.48), new Y({ color: (p + l) % 2 ? 16055295 : 1122876 }));
      u.position.set(-15 + l * 0.45, 0.018, -14.2 + p * 0.48), this.arena.add(u);
    }
    const b = new E({ color: 6977279, metalness: 0.3, roughness: 0.3 });
    for (const p of [-15, -9]) {
      const l = new C(new j(0.35, 4, 0.35), b);
      l.position.set(-15, 2, p), this.arena.add(l);
    }
    const P = new C(new j(0.35, 0.7, 6.4), b);
    P.position.set(-15, 4, -12), this.arena.add(P);
    for (let p = 0; p < 10; p++) {
      const l = -26 + p * 5.5, u = p % 2 ? 20 : -20, f = new C(new At(2.8, 12, 8), new E({ color: p % 2 ? 7585713 : 11917179, roughness: 0.9 }));
      f.position.set(l, -0.6, u), f.scale.y = 0.65, this.arena.add(f);
      const v = new C(new j(1.8, 0.8, 0.05), new E({ color: p % 2 ? 16756099 : 16770202 }));
      v.position.set(l, 2, u), this.arena.add(v);
    }
    for (let p = 0; p < 12; p++) {
      const l = U(p / 12 * z.length), u = new C(new _(0.07, 0.1, 3, 8), i);
      u.position.set(l.x - l.tz * 4, 1, l.z + l.tx * 4), this.arena.add(u);
    }
  }
  resize() {
    const t = Math.max(1, this.stage.clientWidth), s = Math.max(1, this.stage.clientHeight), i = Math.min(1, 1280 / t, 800 / s);
    this.renderer.setSize(Math.round(t * i), Math.round(s * i), !1), this.camera.aspect = t / s, this.camera.updateProjectionMatrix();
  }
  setMode(t) {
    this.pause(), this.race = t, this.arena.visible = t, this.plinth.visible = !t, this.rival.root.visible = t && this.compare, this.power = !1, this.car.root.position.set(0, 0, 0), this.car.root.rotation.set(0, 0, 0), this.camera.fov = t ? 65 : 42, this.camera.updateProjectionMatrix(), this.previous = 0, this.layout(), this.wake();
  }
  configure(t) {
    this.setup = { ...t }, this.car.configure(t), this.wake();
  }
  setParts(t, s, i, a = "") {
    this.installed = new Set(t), s && !this.exploded && (this.orbit.zoom = 5.2), this.exploded = s, this.xray = i, this.selected = a, this.layout(), this.wake();
  }
  layout() {
    if (this.car.layout(this.race ? K() : this.installed, this.race ? 0 : Number(this.exploded), !this.race && this.xray, this.race ? "" : this.selected), this.exploded) {
      new W().setFromObject(this.car.root).getBoundingSphere(this.explodedBounds), this.explodedCorners = [];
      for (const t of this.car.parts.values()) if (t.visible) {
        const s = new W().setFromObject(t);
        for (const i of [s.min.x, s.max.x]) for (const a of [s.min.y, s.max.y]) for (const r of [s.min.z, s.max.z]) this.explodedCorners.push(new T(i, a, r).sub(this.explodedBounds.center));
      }
    }
  }
  setCamera(t) {
    this.first = t, this.previous = 0, this.wake();
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
    this.state = H(), this.rivalState = H(1), this.rival.root.visible = !1, this.distance = 0, this.wake();
  }
  run(t = !1) {
    this.state = H(), this.rivalState = H(1), this.compare = t, this.rival.root.visible = t, this.rival.configure({ ...O, color: "#ff9266" }), this.running = !0, this.accumulator = 0, this.distance = 0, this.wake();
  }
  pause() {
    this.running = !1, this.power = !1, this.gain && this.gain.gain.setTargetAtTime(0, this.audio.currentTime, 0.05), this.windGain && this.windGain.gain.setTargetAtTime(0, this.audio.currentTime, 0.05), this.wake();
  }
  setSound(t) {
    if (this.sound = t, t && !this.audio)
      try {
        this.audio = new AudioContext(), this.oscillator = this.audio.createOscillator(), this.gain = this.audio.createGain(), this.oscillator.type = "sawtooth", this.gain.gain.value = 0, this.oscillator.connect(this.gain), this.gain.connect(this.audio.destination), this.oscillator.start();
        const s = this.audio.createBuffer(1, this.audio.sampleRate, this.audio.sampleRate), i = s.getChannelData(0);
        for (let r = 0; r < i.length; r++) i[r] = Math.random() * 2 - 1;
        this.wind = this.audio.createBufferSource(), this.wind.buffer = s, this.wind.loop = !0;
        const a = this.audio.createBiquadFilter();
        a.type = "lowpass", a.frequency.value = 1100, this.windGain = this.audio.createGain(), this.windGain.gain.value = 0, this.wind.connect(a), a.connect(this.windGain), this.windGain.connect(this.audio.destination), this.wind.start();
      } catch {
        this.sound = !1;
      }
    t ? this.audio?.resume() : (this.gain && (this.gain.gain.value = 0), this.windGain && (this.windGain.gain.value = 0));
  }
  thumbnails() {
    const t = {}, s = this.renderer.getSize(new it());
    this.renderer.setSize(160, 110, !1);
    const i = new at(35, 160 / 110, 0.01, 100);
    this.plinth.visible = !1;
    for (const [a, r] of this.car.parts) {
      for (const [o, m] of this.car.parts) m.visible = o === a;
      const n = new W().setFromObject(r), c = n.getCenter(new T()), d = n.getBoundingSphere(new rt()).radius, h = d / Math.sin(F.degToRad(17.5)) * 1.08;
      i.position.copy(c).add(new T(0.85, 0.6, 1).normalize().multiplyScalar(h)), i.lookAt(c), this.renderer.render(this.scene, i), t[a] = this.renderer.domElement.toDataURL("image/png");
    }
    return this.renderer.setSize(s.x, s.y, !1), this.plinth.visible = !0, this.layout(), this.wake(), t;
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
    const s = !this.previous, i = s ? 0 : Math.min(0.05, (t - this.previous) / 1e3);
    if (this.previous = t, this.race) {
      if (this.running) {
        for (this.accumulator += i; this.accumulator >= J; )
          dt(this.state, this.setup), this.compare && (dt(this.rivalState, O), jt(this.state, this.rivalState, this.setup, O)), this.accumulator -= J;
        this.distance += Math.hypot(this.state.vx, this.state.vz) * i, (this.state.finished || this.state.offTrack) && (this.running = !1);
      }
      for (const [o, m] of [[this.car, this.state], [this.rival, this.rivalState]])
        o.root.position.set(m.x, m.y + (o === this.car ? (this.setup.diameter - 26) / 100 : 0), m.z), o.root.rotation.set(0, -m.yaw, 0), o.root.rotateZ(m.pitch), o.root.rotateX(m.roll), o.animate(this.distance, !0, o === this.car ? this.setup.gear : 4, o === this.car ? this.setup.diameter / 100 : 0.26);
      const r = this.state, n = new T(Math.cos(r.yaw), 0, Math.sin(r.yaw)), c = new T(r.x, r.y, r.z), d = Math.hypot(r.vx, r.vz);
      this.goal.copy(c).addScaledVector(n, this.first ? 1.4 : -6.5).add(new T(0, this.first ? 1.2 : 3.8, 0)), this.target.copy(c).addScaledVector(n, this.first ? 9 : 5).add(new T(0, 0.7, 0));
      const h = s ? 1 : 1 - Math.exp(-i * (this.first ? 18 : 7));
      this.camera.position.lerp(this.goal, h), this.look.lerp(this.target, h), this.reduced || (this.camera.position.y += Math.sin(t * 0.025) * Math.min(0.035, d * 1e-3) + r.impact * 0.08), this.camera.lookAt(this.look), this.camera.fov += (65 + Math.min(9, d * 0.18) - this.camera.fov) * (s ? 1 : 0.08), this.camera.updateProjectionMatrix();
    } else if (this.car.root.position.set(0, (this.setup.diameter - 26) / 100, 0), this.car.root.rotation.set(0, 0, 0), this.power && (this.distance += i * 1.8, this.car.animate(this.distance, !0, this.setup.gear, this.setup.diameter / 100)), this.exploded) {
      const r = Math.tan(F.degToRad(this.camera.fov / 2)), n = r * this.camera.aspect, c = new T(Math.cos(this.orbit.yaw), Math.sin(this.orbit.pitch), Math.sin(this.orbit.yaw)).normalize(), d = new T().crossVectors(new T(0, 1, 0), c).normalize(), h = new T().crossVectors(c, d);
      let o = 1;
      for (const m of this.explodedCorners) o = Math.max(o, m.dot(c) + Math.max(Math.abs(m.dot(h)) / r, Math.abs(m.dot(d)) / n));
      this.camera.position.copy(this.explodedBounds.center).addScaledVector(c, o * 1.12 * this.orbit.zoom / 5.2), this.camera.lookAt(this.explodedBounds.center);
    } else {
      const r = this.orbit.zoom;
      this.camera.position.set(Math.cos(this.orbit.yaw) * r, Math.sin(this.orbit.pitch) * r + 0.5, Math.sin(this.orbit.yaw) * r), this.camera.lookAt(0, 0.4, 0);
    }
    if (this.audio && this.gain && this.oscillator) {
      const r = this.sound && (this.running || this.power);
      this.gain.gain.setTargetAtTime(r ? 0.015 : 0, this.audio.currentTime, 0.05), this.oscillator.frequency.setTargetAtTime(100 + (this.race ? Math.hypot(this.state.vx, this.state.vz) * 13 : 130), this.audio.currentTime, 0.08), this.windGain?.gain.setTargetAtTime(r && this.race ? Math.min(0.045, Math.hypot(this.state.vx, this.state.vz) * 7e-4) + this.state.impact * 0.045 : 0, this.audio.currentTime, 0.03);
    }
    const a = this.car.parts.get(this.selected);
    if (this.halo.visible = !this.race && !!a?.visible, this.balloon.hidden = !this.halo.visible, this.halo.visible && a) {
      this.halo.box.setFromObject(a).expandByScalar(0.06), this.halo.updateMatrixWorld(!0);
      const r = this.halo.box.getCenter(new T()).project(this.camera);
      this.balloon.textContent = String(M.findIndex((n) => n.id === this.selected) + 1), this.balloon.style.left = Math.max(6, Math.min(this.stage.clientWidth - 32, (r.x + 1) * this.stage.clientWidth / 2)) + "px", this.balloon.style.top = Math.max(6, Math.min(this.stage.clientHeight - 32, (1 - r.y) * this.stage.clientHeight / 2)) + "px";
    }
    this.renderer.render(this.scene, this.camera), (t - this.lastUI > 100 || this.state.finished || this.state.offTrack) && (this.onUpdate?.(this.state), this.lastUI = t), this.running || this.power ? this.wake() : this.previous = 0;
  }
  destroy() {
    this.dead = !0, cancelAnimationFrame(this.frame), this.abort.abort(), this.observer.disconnect(), this.car.dispose(), this.rival.dispose(), this.arena.traverse((t) => {
      t instanceof C && (t.geometry.dispose(), (Array.isArray(t.material) ? t.material : [t.material]).forEach((s) => s.dispose()));
    }), this.plinth.traverse((t) => {
      t instanceof C && (t.geometry.dispose(), t.material.dispose());
    }), this.halo.geometry.dispose(), this.halo.material.dispose(), this.balloon.remove(), this.environment.dispose(), this.renderer.dispose(), this.oscillator?.stop(), this.wind?.stop(), this.audio?.close(), this.renderer.domElement.remove();
  }
}
const ct = { back: "M15 5 8 12l7 7M8 12h13", voice: "m4 9 4 0 5-4v14l-5-4H4zM17 8q6 4 0 8", replay: "M5 8a8 8 0 1 1-1 8M5 3v5h5", quiz: "m5 16 11-11 3 3-11 11-4 1zM14 7l3 3", notes: "M5 3h14v18H5zM8 8h8M8 12h8M8 16h5", learn: "M3 5q5-3 9 0 5-3 9 0v15q-5-3-9 0-4-3-9 0zM12 5v15", parts: "M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z", build: "m4 20 9-9M14 4a5 5 0 0 0 6 6l-4-1-1-4z", tune: "M4 7h16M4 17h16M8 4v6M16 14v6", race: "M5 21V3m0 1h14l-3 5 3 5H5", camera: "M3 7h5l2-3h4l2 3h5v13H3zM15 13a3 3 0 1 1-6 0 3 3 0 0 1 6 0", power: "M12 3v9M6 5a9 9 0 1 0 12 0", play: "m8 4 12 8-12 8z", stop: "M6 6h12v12H6z", next: "m9 5 7 7-7 7", prev: "m15 5-7 7 7 7", remove: "M5 12h14", plus: "M5 12h14M12 5v14", explode: "m9 9-6-6m0 5V3h5M15 15l6 6m0-5v5h-5M3 21l6-6M15 9l6-6", eye: "M2 12q10-15 20 0-10 15-20 0M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0", check: "m4 12 5 5L20 6" }, mt = (e) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${ct[e] || ct.parts}"/></svg>`, w = (e, t, s = e) => `<button type="button" data-m4="${e}" aria-label="${t}" title="${t}">${mt(s)}<span>${t}</span></button>`, B = [
  { title: "電池讓車跑起來", text: "閉合開關，看馬達和四輪轉動。", voice: "電池經過接點和開關，形成完整電路，馬達把電能轉成轉動。按電源，看看馬達和四個輪圈。這台車不需要回拉。", part: "battery-a" },
  { title: "小齒輪，大力量", text: "馬達轉 4 圈，輪軸轉 1 圈。", voice: "現在是四比一減速。馬達轉四圈，輪軸轉一圈。較大的減速比可以增加輪端扭力，但降低空載輪速。", part: "gears" },
  { title: "動力送到四個輪子", text: "沿著長軸，找出前後輪軸。", voice: "馬達帶動減速齒輪，再經過長傳動軸，把動力送到前後輪軸，帶動四個輪圈和輪胎。這是軸傳動四輪驅動的簡化教學模型。", part: "shaft" },
  { title: "怎麼沿著彎道跑？", text: "導輪碰護欄，輪胎抓住地面。", voice: "小導輪受到護欄推力，車身就改變方向。輪胎和地面的摩擦也影響穩定性。第一人稱是車頭攝影機，不是駕駛座。", part: "rollers" }
];
class Ft {
  constructor(t) {
    this.host = t, t.innerHTML = `<section class="m4-lab" aria-label="四驅車研究所"><header class="m4-header">${w("back", "返回")}<h2>四驅車研究所</h2><nav class="m4-helpers" aria-label="實驗小幫手">${w("voice", "語音")}${w("replay", "重聽")}${w("notes", "紀錄")}${w("quiz", "考題")}</nav></header><nav class="m4-nav" aria-label="探索步驟">${[["learn", "原理"], ["parts", "零件"], ["build", "組裝"], ["tune", "改裝"], ["race", "試跑"]].map(([a, r]) => w(a, r)).join("")}</nav><div class="m4-layout"><section class="m4-scene"><div class="m4-stage"></div><div class="m4-scene-tag">原創教學車 · 星羽 01</div><div class="m4-view-tools">${w("explode", "拆開", "explode")}${w("xray", "透視", "eye")}${w("zoom-in", "放大", "plus")}${w("zoom-out", "縮小", "remove")}</div><button class="m4-snap" data-m4="install" hidden aria-label="安裝選取零件">${mt("plus")}<span>裝到車上</span></button><div class="m4-hud" hidden><div><b data-speed>0.0</b><small>km/h · 模擬</small></div><div><b data-lap>0 / 3</b><small>完成圈數</small></div><div><b data-time>0.0</b><small>秒</small></div></div><div class="m4-overlay" hidden></div><div class="m4-countdown" hidden></div><p class="m4-status" role="status" aria-live="polite">電池讓車跑起來</p></section><aside class="m4-tools" aria-label="操作面板"></aside></div></section>`, this.root = t.querySelector(".m4-lab");
    const s = this.root.querySelector(".m4-nav");
    this.root.querySelector(".m4-header").insertBefore(s, this.root.querySelector(".m4-helpers")), s.querySelector('[data-m4="parts"]').remove();
    const i = document.createElement("details");
    i.className = "m4-bom", i.innerHTML = '<summary aria-label="展開或收起零件表">☷</summary><div class="m4-bom-body"></div>', this.root.querySelector(".m4-scene").append(i), this.root.querySelector('[data-m4="quiz"] svg').outerHTML = '<img class="m4-pencil" src="images/experiments/car-v4/pencil.png" alt="">';
    try {
      this.view = new Rt(this.root.querySelector(".m4-stage")), this.view.configure(this.setup), this.thumbnails = this.view.thumbnails(), this.view.onPick = (a) => this.select(a), this.view.onUpdate = (a) => this.updateRace(a);
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
    }, { signal: this.abort.signal }), this.render(), this.voice.last = B[0].voice;
  }
  host;
  root;
  view;
  voice = new Et();
  abort = new AbortController();
  page = "learn";
  previous = "learn";
  lesson = 0;
  partPage = 0;
  selected = "battery-a";
  installed = K();
  started = !1;
  setup = { ...O };
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
  tell(t, s = t) {
    this.root.querySelector(".m4-status").textContent = t, this.voice.say(this.page === "learn" && this.lesson === 1 ? `現在是 ${this.setup.gear} 比一減速。馬達轉 ${this.setup.gear} 圈，輪軸轉一圈。減速比增加，輪端扭力增加，但空載輪速降低。` : s);
  }
  render() {
    this.root.dataset.page = this.page;
    for (const i of ["learn", "build", "tune", "race"]) this.root.querySelector(`[data-m4="${i}"]`).setAttribute("aria-pressed", String(i === this.page));
    this.root.querySelector(".m4-view-tools").hidden = ["race", "notes", "quiz"].includes(this.page), this.root.querySelector(".m4-hud").hidden = this.page !== "race", this.root.querySelector(".m4-snap").hidden = this.page !== "build" || this.installed.has(this.selected), this.root.querySelector('[data-m4="explode"]').setAttribute("aria-pressed", String(this.exploded)), this.root.querySelector('[data-m4="xray"]').setAttribute("aria-pressed", String(this.xray));
    const t = this.root.querySelector(".m4-tools"), s = this.root.querySelector(".m4-overlay");
    if (s.hidden = !["quiz", "notes"].includes(this.page), s.innerHTML = "", this.page === "learn") {
      const i = B[this.lesson];
      t.innerHTML = `<div class="m4-eyebrow">原理 ${this.lesson + 1} / ${B.length}</div><h3>${i.title}</h3><img class="m4-part-hero" src="${this.thumbnails[i.part] || ""}" alt="${M.find((a) => a.id === i.part).name}"><p>${this.lesson === 1 ? `馬達轉 ${this.setup.gear} 圈，輪軸轉 1 圈。` : i.text}</p><div class="m4-two">${w("power", this.powered ? "關閉電源" : "開啟電源", "power")}${w("replay", "聽解說")}</div><div class="m4-pager">${w("lesson-prev", "上一步", "prev")}<span>${this.lesson + 1} / 4</span>${w("lesson-next", this.lesson === 3 ? "去組裝" : "下一步", "next")}</div>`;
    } else if (this.page === "parts" || this.page === "build") {
      const i = M.slice(this.partPage * 4, this.partPage * 4 + 4);
      t.innerHTML = `<div class="m4-eyebrow">${this.page === "build" ? "我的組裝" : "BOM · 教學零件表"} <b>${this.installed.size} / ${M.length}</b></div><div class="m4-part-grid">${i.map((a) => `<button type="button" data-part="${a.id}" aria-label="${a.name}，${a.count}${a.count === 1 ? "組或件" : "件"}${this.installed.has(a.id) ? "，已安裝" : ""}" aria-pressed="${a.id === this.selected}"><img src="${this.thumbnails[a.id] || ""}" alt="" draggable="false"><span>${a.name}</span><small>× ${a.count} ${this.installed.has(a.id) ? "✓" : ""}</small></button>`).join("")}</div><div class="m4-pager">${w("part-prev", "上一頁", "prev")}${this.page === "build" ? '<button data-m4="next-part" class="m4-find-next">找下一件</button>' : `<span>${this.partPage + 1} / ${Math.ceil(M.length / 4)}</span>`}${w("part-next", "下一頁", "next")}</div><p class="m4-part-description"></p><div class="m4-two">${this.page === "build" ? w("install", "安裝", "plus") + w("remove", "拆下", "remove") : w("build", "開始組裝", "build") + w("replay", "聽用途")}</div>`, this.describePart();
    } else if (this.page === "tune") this.renderTune(t);
    else if (this.page === "race") t.innerHTML = `<div class="m4-eyebrow">星環測試道</div><h3>讓作品跑三圈</h3><p>直線 · 彎道 · 小跳台</p><div class="m4-race-map" aria-label="封閉橢圓賽道，包含跳台"><svg viewBox="0 0 240 130" aria-hidden="true"><path d="M70 30h100a35 35 0 0 1 0 70H70a35 35 0 0 1 0-70Z" fill="none" stroke="#5bd9f0" stroke-width="18"/><path d="m105 30 17-8v8m-65 7v-14" fill="none" stroke="#ffdb7e" stroke-width="5"/></svg></div><div class="m4-two">${w("camera", this.first ? "車頭視角" : "追車視角", "camera")}${w("sound", this.sound ? "聲音開" : "聲音關", "voice")}</div><button data-m4="motion" aria-pressed="${this.reduced}">穩定鏡頭 ${this.reduced ? "✓" : ""}</button><div class="m4-two">${w("run", "開始試跑", "play")}${w("stop", "停止", "stop")}</div>${w("collision", "雙車碰撞測試", "race")}<p class="m4-small">${this.installed.size === M.length ? "試跑結果會加入紀錄。" : "先把零件裝齊，再出發。"}</p>`;
    else if (this.page === "notes") {
      const i = this.records.slice(this.recordPage * 2, this.recordPage * 2 + 2);
      t.innerHTML = `<h3>我的測試</h3><p>一次只換一個條件，再跑同一條賽道。</p><div class="m4-pager">${w("record-prev", "上一頁", "prev")}<span>${this.records.length ? this.recordPage + 1 : 0} / ${Math.ceil(this.records.length / 2)}</span>${w("record-next", "下一頁", "next")}</div>${w("return", "回到實驗", "back")}`, s.innerHTML = `<h3>比較試跑結果</h3>${i.length ? i.map((a, r) => `<article class="m4-record"><b>第 ${this.recordPage * 2 + r + 1} 次 · ${a.finished ? "完成三圈" : "中途停止"}</b><p>${Lt(a.setup)}</p><div><strong>${a.time.toFixed(2)} <small>秒</small></strong><strong>${(a.max * 0.18).toFixed(1)} <small>km/h 最高</small></strong></div><p>護欄撞擊 ${a.contacts} 次 · 落地 ${a.landings} 次</p></article>`).join("") : "<p>還沒有紀錄。把車組好，去試跑吧！</p>"}`;
    } else {
      const a = [{ q: "哪個零件提供電能？", ids: ["battery-a", "shell", "rollers"], answer: "battery-a" }, { q: "哪個零件把動力送到前輪？", ids: ["shell", "shaft", "battery-a"], answer: "shaft" }, { q: "哪個零件會碰護欄，引導轉彎？", ids: ["rollers", "battery-a", "rim-fl"], answer: "rollers" }][this.quizIndex];
      t.innerHTML = `<h3>看圖想一想</h3><p>${this.quizIndex + 1} / 3</p>${w("replay", "聽題目")}${w("quiz-next", "下一題", "next")}${w("return", "回到實驗", "back")}`, s.innerHTML = `<h3>${a.q}</h3><div class="m4-answer-grid">${a.ids.map((r) => `<button data-answer="${r}" aria-label="${M.find((n) => n.id === r).name}"><img src="${this.thumbnails[r] || ""}" alt="${M.find((n) => n.id === r).name}"></button>`).join("")}</div><p class="m4-feedback" role="status">點一張圖片</p>`, this.voice.last = a.q;
    }
    this.view || t.querySelectorAll("button").forEach((i) => {
      ["run", "collision", "power"].includes(i.dataset.m4 || "") && (i.disabled = !0);
    });
    for (const i of ["run", "collision"]) {
      const a = t.querySelector(`[data-m4="${i}"]`);
      a && (a.disabled = this.installed.size !== M.length || !this.view || this.running);
    }
    this.renderBom(), this.view?.setParts(this.installed, this.exploded, this.xray, this.selected);
  }
  bomPage = 0;
  renderBom() {
    const t = this.root.querySelector(".m4-bom-body");
    this.root.querySelector(".m4-bom").hidden = ["race", "quiz", "notes"].includes(this.page), t.innerHTML = M.slice(this.bomPage * 4, this.bomPage * 4 + 4).map((s) => '<button data-part="' + s.id + '" aria-pressed="' + (s.id === this.selected) + '"><b>' + (M.indexOf(s) + 1) + "</b><span>" + s.name + "</span></button>").join("") + '<div class="m4-pager">' + w("bom-prev", "上一頁零件", "prev") + "<span>" + (this.bomPage + 1) + "/5</span>" + w("bom-next", "下一頁零件", "next") + "</div>";
  }
  renderTune(t) {
    const s = this.tunePage === 0 ? [
      ["齒比", [["gear:3.5", "3.5 : 1"], ["gear:4", "4 : 1"], ["gear:5", "5 : 1"]]],
      ["輪胎", [["tire:grip", "抓地胎"], ["tire:hard", "硬胎"]]],
      ["輪徑", [["diameter:26", "26 mm"], ["diameter:30", "30 mm"]]]
    ] : [["外殼", [["shell:arrow", "箭羽"], ["shell:wing", "尾翼"]]], ["配重", [["ballast:center", "中央"], ["ballast:rear", "後方"]]], ["車色", [["color:#29c9ff", "天藍"], ["color:#ff794f", "橘紅"], ["color:#b59aff", "星紫"]]]];
    t.innerHTML = `<div class="m4-eyebrow">${this.tunePage === 0 ? "動力與輪胎" : "外殼與配重"}</div>${s.map(([i, a]) => `<fieldset><legend>${i}</legend><div class="m4-choices">${a.map(([r, n]) => {
      const [c, d] = r.split(":");
      return `<button data-choice="${r}" aria-pressed="${String(this.setup[c]) === d}">${c === "color" ? `<i style="background:${d}"></i>` : ""}${n}</button>`;
    }).join("")}</div></fieldset>`).join("")}<div class="m4-pager">${w("tune-prev", "上一頁", "prev")}<span>${this.tunePage + 1} / 2</span>${w("tune-next", "下一頁", "next")}</div><p class="m4-small">車色只改外觀。改裝結果以試跑比較。</p>${w("race", "去試跑", "race")}`;
  }
  action(t) {
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
      if (this.installed.size !== M.length) {
        this.tell("先把車組好，再觀察通電。");
        return;
      }
      this.powered = !this.powered, this.view?.setPower(this.powered), this.tell(this.powered ? "電路接通，四輪一起轉。" : "電路打開，馬達停止。"), this.render();
    } else if (t === "lesson-prev" || t === "lesson-next") {
      if (t === "lesson-next" && this.lesson === 3) {
        this.switchPage("build");
        return;
      }
      this.lesson = Math.max(0, Math.min(3, this.lesson + (t === "lesson-next" ? 1 : -1))), this.selected = B[this.lesson].part, this.render(), this.tell(B[this.lesson].text, B[this.lesson].voice);
    } else if (t === "part-prev" || t === "part-next")
      this.partPage = (this.partPage + (t === "part-next" ? 1 : 4)) % 5, this.render();
    else if (t === "install") this.install();
    else if (t === "remove")
      It(this.selected, this.installed) ? (this.tell("拆下了。可以再装回去。"), this.render()) : this.tell(this.selected === "chassis" ? "底盤留在工作台上。" : "先拆下裝在它上面的零件。");
    else if (t === "next-part") {
      const s = M.find((i) => !this.installed.has(i.id) && nt(i.id, this.installed));
      s ? (this.partPage = Math.floor(M.indexOf(s) / 4), this.select(s.id), this.render()) : this.tell("組裝完成！去改裝，或到賽道試跑。");
    } else t === "tune-prev" || t === "tune-next" ? (this.tunePage = 1 - this.tunePage, this.render()) : t === "camera" ? (this.first = !this.first, this.view?.setCamera(this.first), this.render()) : t === "sound" ? (this.sound = !this.sound, this.view?.setSound(this.sound), this.render()) : t === "motion" ? (this.reduced = !this.reduced, this.view?.setReduced(this.reduced), this.render()) : t === "run" || t === "collision" ? this.run(t === "collision") : t === "stop" ? (this.stop(), this.render()) : t === "record-prev" || t === "record-next" ? (this.recordPage = Math.max(0, Math.min(Math.ceil(this.records.length / 2) - 1, this.recordPage + (t === "record-next" ? 1 : -1))), this.render()) : t === "quiz-next" && (this.quizIndex = (this.quizIndex + 1) % 3, this.render(), this.voice.replay());
  }
  switchPage(t) {
    if (t === this.page) return;
    (t === "notes" || t === "quiz") && (["notes", "quiz"].includes(this.page) || (this.previous = this.page)), this.stop(), this.powered = !1, this.voice.stop(), this.page = t, t === "build" && !this.started && (this.started = !0, this.installed = /* @__PURE__ */ new Set(["chassis"]), this.selected = "motor", this.partPage = 0, this.exploded = !1, this.xray = !1), t === "learn" && (this.selected = B[this.lesson].part), t === "parts" && (this.exploded = !0), (t === "tune" || t === "build") && (this.exploded = !1), this.view?.setMode(t === "race"), this.render();
    const s = t === "build" ? "點零件，再點「安裝」。也可以拖到車上。" : t === "race" ? "三圈試跑。先選鏡頭，再出發！" : t === "parts" ? "點一個零件，看看它的工作。" : t === "tune" ? "一次只換一個條件，去試跑比較。" : t === "learn" ? B[this.lesson].text : t === "notes" ? "比較同一條賽道的結果。" : "看圖，找出答案。";
    this.tell(s, t === "learn" ? B[this.lesson].voice : s), t === "quiz" && (this.voice.last = this.root.querySelector(".m4-overlay h3").textContent || "");
  }
  select(t) {
    if (!M.some((i) => i.id === t)) return;
    this.selected = t, this.bomPage = Math.floor(M.findIndex((i) => i.id === t) / 4), this.renderBom(), this.view?.setParts(this.installed, this.exploded, this.xray, t), this.describePart(), this.root.querySelectorAll("[data-part]").forEach((i) => i.setAttribute("aria-pressed", String(i.dataset.part === t))), this.root.querySelector(".m4-snap").hidden = this.page !== "build" || this.installed.has(t);
    const s = M.find((i) => i.id === t);
    this.tell(s.name, s.voice);
  }
  describePart() {
    const t = M.find((i) => i.id === this.selected), s = this.root.querySelector(".m4-part-description");
    s && (s.textContent = t.voice);
  }
  install() {
    if (this.page === "build") {
      if (this.installed.has(this.selected)) {
        this.tell("這個零件已經裝好了。");
        return;
      }
      if (!nt(this.selected, this.installed)) {
        const t = M.find((s) => s.id === this.selected).needs.filter((s) => !this.installed.has(s)).map((s) => M.find((i) => i.id === s).name);
        this.tell(`先裝好：${t.join("、")}`);
        return;
      }
      this.installed.add(this.selected), this.tell(this.installed.size === M.length ? "完成了！這台就是你要試跑的車。" : "喀！裝好了。找下一個零件吧。"), this.render();
    }
  }
  choose(t) {
    const [s, i] = t.split(":");
    ({ gear: ["3.5", "4", "5"], tire: ["grip", "hard"], diameter: ["26", "30"], shell: ["arrow", "wing"], ballast: ["center", "rear"], color: ["#29c9ff", "#ff794f", "#b59aff"] })[s]?.includes(i) && (this.setup = { ...this.setup, [s]: s === "gear" || s === "diameter" ? Number(i) : i }, this.view?.configure(this.setup), this.render(), this.tell(s === "color" ? "換了車色，性能不變。" : s === "gear" ? "齒比改好了。比較加速與三圈時間。" : "設定改好了，去同一條賽道比較。"));
  }
  async run(t) {
    if (!this.view || this.running || this.installed.size !== M.length) return;
    this.view.reset(), this.running = !0, this.recorded = !1;
    const s = ++this.sequence;
    this.render(), this.voice.stop();
    const i = this.root.querySelector(".m4-countdown");
    i.hidden = !1;
    for (const a of ["3", "2", "1"]) {
      if (s !== this.sequence || this.dead) return;
      i.textContent = a, await new Promise((r) => setTimeout(r, 650));
    }
    s !== this.sequence || this.dead || (i.hidden = !0, this.tell(t ? "橘車是標準設定，觀察擦撞與掉速。" : "出發！觀察彎道和落地。"), this.view.run(t));
  }
  stop() {
    this.sequence++, this.root.querySelector(".m4-countdown").hidden = !0, this.running && this.view && this.view.state.time > 0 && this.saveRecord(this.view.state), this.running = !1, this.view?.pause();
  }
  updateRace(t) {
    this.page === "race" && (this.root.querySelector("[data-speed]").textContent = (Math.hypot(t.vx, t.vz) * 0.18).toFixed(1), this.root.querySelector("[data-lap]").textContent = `${t.lap} / 3`, this.root.querySelector("[data-time]").textContent = t.time.toFixed(1), this.running && (t.finished || t.offTrack) && (this.running = !1, this.saveRecord(t), this.tell(t.finished ? `完成三圈！${t.time.toFixed(2)} 秒。` : "車子離開賽道了。回去調整輪胎與配重，再試一次。"), this.render()));
  }
  saveRecord(t) {
    this.recorded || (this.recorded = !0, this.records.push({ setup: { ...this.setup }, time: t.time, max: t.maxSpeed, contacts: t.contacts, landings: t.landings, finished: t.finished }));
  }
  answer(t) {
    const s = ["battery-a", "shaft", "rollers"][this.quizIndex], i = t === s ? "答對了！" + M.find((a) => a.id === s).voice : "再想想。點語音，聽聽題目。";
    this.root.querySelector(".m4-feedback").textContent = i, this.voice.say(i);
  }
  dragStart(t) {
    if (this.page !== "build" || t.button) return;
    const s = t.target.closest("[data-part]");
    if (!s) return;
    this.select(s.dataset.part);
    const i = document.createElement("img");
    i.src = this.thumbnails[this.selected], i.className = "m4-drag", i.alt = "", i.hidden = !0, document.body.append(i), this.drag = { id: this.selected, x: t.clientX, y: t.clientY, pid: t.pointerId, ghost: i, moved: !1 }, this.root.setPointerCapture(t.pointerId);
  }
  dragMove(t) {
    const s = this.drag;
    s && (Math.hypot(t.clientX - s.x, t.clientY - s.y) > 8 && (s.moved = !0), s.moved && (s.ghost.hidden = !1, s.ghost.style.left = `${t.clientX}px`, s.ghost.style.top = `${t.clientY}px`));
  }
  dragEnd(t) {
    const s = this.drag;
    if (s) {
      if (s.moved) {
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
  Ft as Mini4wdLab
};
