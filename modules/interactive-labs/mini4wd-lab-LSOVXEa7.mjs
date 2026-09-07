import { G as R, T as dt, M as Z, B as ct, F as pt, D as ut, a as E, V as C, b as G, R as gt, C as J, c as vt, d as wt, W as bt, P as xt, A as yt, e as Mt, H as zt, f as $t, g as K, h as St, i as st, S as kt, j as it, k as j, I as at, O as Pt, l as qt } from "./RoundedBoxGeometry-Dk2Gjff_.mjs";
import { R as Tt } from "./RoomEnvironment-Cu4CyHxx.mjs";
import { S as At } from "./narration-DCI2AWPz.mjs";
const _ = ["fl", "fr", "rl", "rr"], X = ["左前", "右前", "左後", "右後"], M = [
  { id: "chassis", name: "底盤", count: 1, needs: [], voice: "底盤固定所有零件，是四驅車的骨架。" },
  { id: "motor", name: "馬達", count: 1, needs: ["chassis"], voice: "電流經過馬達，電能轉成轉動。它不需要先往後拉。" },
  { id: "gears", name: "減速齒輪組", count: 1, needs: ["motor"], voice: "小齒輪帶動較大的齒輪，轉得比較慢，輪端扭力比較大。" },
  { id: "shaft", name: "傳動軸", count: 1, needs: ["gears"], voice: "中間的長軸把馬達動力傳到前輪，是四輪驅動的重要連接。" },
  { id: "axles", name: "前後輪軸", count: 2, needs: ["shaft"], voice: "兩根輪軸連接左右輪圈，齒輪把動力送到前後輪軸。" },
  ..._.map((s, t) => ({ id: "rim-" + s, name: X[t] + "輪圈", count: 1, needs: ["axles"], voice: X[t] + "輪圈套在輪軸上，輪胎再套在輪圈外面。" })),
  ..._.map((s, t) => ({ id: "tire-" + s, name: X[t] + "輪胎", count: 1, needs: ["rim-" + s], voice: X[t] + "輪胎接觸地面。摩擦讓輪子的轉動變成前進。" })),
  { id: "rollers", name: "導輪", count: 4, needs: ["chassis"], voice: "四個小導輪接觸軌道護欄，幫忙引導車頭轉彎。" },
  { id: "switch", name: "開關與接點", count: 1, needs: ["motor"], voice: "開關閉合，電池、馬達與導線形成完整迴路；打開開關，馬達就不再得到電力。" },
  { id: "battery-a", name: "電池 A", count: 1, needs: ["switch"], voice: "這兩顆電池串聯。依正負標記安裝，接點會把它們接成供電迴路。" },
  { id: "battery-b", name: "電池 B", count: 1, needs: ["battery-a"], voice: "第二顆電池依相反方向放置，底盤接點將兩顆串聯。" },
  { id: "shell", name: "車殼", count: 1, needs: ["rollers", "battery-b", ..._.map((s) => "tire-" + s)], voice: "最後扣上車殼。外觀與配重不同，試跑結果也可能不同。" }
], Q = () => new Set(M.map((s) => s.id));
function rt(s, t) {
  return M.find((e) => e.id === s)?.needs.every((e) => t.has(e)) ?? !1;
}
function Et(s, t) {
  return s === "chassis" || M.some((e) => t.has(e.id) && e.needs.includes(s)) ? !1 : t.delete(s);
}
function Ct(s) {
  return `${s.gear}:1・${s.tire === "grip" ? "抓地胎" : "硬胎"} ${s.diameter} mm・${s.shell === "arrow" ? "箭羽" : "尾翼"}・${s.ballast === "center" ? "中央" : "後方"}配重`;
}
class nt {
  root = new R();
  parts = /* @__PURE__ */ new Map();
  wheels = [];
  gears = [];
  rotor = new R();
  skins = [];
  rubber = [];
  wheelParts = [];
  wings = new R();
  ballast = new R();
  constructor() {
    for (const h of M) {
      const c = new R();
      c.userData.part = h.id, this.parts.set(h.id, c), this.root.add(c);
    }
    const t = (h, c = 0.1) => new G({ color: h, metalness: c, roughness: 0.35 }), e = t(1319992, 0.45), i = t(13294819, 0.8), a = t(16759127, 0.55), n = t(15069179, 0.25), o = (h, c, m, f = 0, $ = 0, q = 0) => {
      const y = new E(c, m.clone());
      return y.position.set(f, $, q), y.castShadow = !0, y.receiveShadow = !0, h.add(y), y;
    }, l = (h, c, m, f, $, q = 0, y = 0, D = 0) => o(h, new gt(c, m, f, 2, Math.min(c, m, f) * 0.18), $, q, y, D), d = (h, c, m, f, $, q, y, D = "z") => {
      const U = o(h, new J(c, c, m, 20), f, $, q, y);
      return D === "z" && (U.rotation.x = Math.PI / 2), D === "x" && (U.rotation.z = Math.PI / 2), U;
    }, r = this.parts.get("chassis");
    l(r, 2.7, 0.15, 1.18, e, 0, 0.34);
    for (const h of [-0.55, 0.55]) l(r, 2.6, 0.19, 0.09, i, 0, 0.47, h);
    for (const h of [-1.28, 1.28]) {
      l(r, 0.18, 0.12, 1.75, e, h, 0.39);
      for (const c of [-0.8, 0.8]) d(r, 0.055, 0.1, a, h, 0.48, c, "y");
    }
    const p = this.parts.get("motor");
    d(p, 0.2, 0.68, i, -0.74, 0.62, 0), l(p, 0.33, 0.29, 0.14, e, -0.74, 0.62, -0.4), p.add(this.rotor), this.rotor.position.set(-0.74, 0.62, 0.41), l(this.rotor, 0.31, 0.055, 0.05, a);
    const b = this.parts.get("gears");
    for (const [h, c, m, f] of [[-0.74, 0.62, 0.44, 0.1], [-0.98, 0.54, 0.44, 0.18], [0.94, 0.43, 0.43, 0.18]]) {
      const $ = new R();
      $.position.set(h, c, m), b.add($), this.gears.push($), d($, f, 0.075, a, 0, 0, 0);
      for (let q = 0; q < 16; q++) {
        const y = q * Math.PI / 8, D = l($, 0.07, 0.07, 0.075, a, Math.cos(y) * f, Math.sin(y) * f, 0);
        D.rotation.z = y;
      }
    }
    d(this.parts.get("shaft"), 0.035, 1.94, i, 0, 0.5, 0.43, "x");
    for (const h of [-0.96, 0.96]) d(this.parts.get("axles"), 0.045, 1.62, i, h, 0.26, 0);
    ["fl", "fr", "rl", "rr"].forEach((h, c) => {
      const m = c < 2 ? 0.96 : -0.96, f = c % 2 ? -0.76 : 0.76, $ = this.parts.get("rim-" + h), q = this.parts.get("tire-" + h);
      for (const I of [$, q])
        I.position.set(m, 0.26, f), I.userData.home = I.position.clone(), this.wheelParts.push(I);
      const y = new R();
      $.add(y), this.wheels.push(y);
      const D = t(2569542), U = d(q, 0.26, 0.24, D, 0, 0, 0);
      this.rubber.push(U.material);
      for (const I of [-1, 1]) {
        d(y, 0.175, 0.025, i, 0, 0, 0.135 * I), d(y, 0.065, 0.04, a, 0, 0, 0.152 * I);
        for (let W = 0; W < 5; W++) {
          const N = W * Math.PI * 2 / 5, ft = l(y, 0.15, 0.035, 0.04, e, Math.cos(N) * 0.11, Math.sin(N) * 0.11, 0.153 * I);
          ft.rotation.z = N;
        }
        o(q, new dt(0.222, 0.012, 4, 24), n, 0, 0, 0.124 * I);
      }
    });
    const z = this.parts.get("rollers");
    for (const h of [-1.28, 1.28]) for (const c of [-0.88, 0.88])
      d(z, 0.13, 0.11, n, h, 0.52, c, "y"), d(z, 0.04, 0.14, a, h, 0.54, c, "y");
    for (const [h, c] of ["battery-a", "battery-b"].entries()) {
      const m = this.parts.get(c), f = h ? 0.22 : -0.22;
      d(m, 0.145, 1.02, t(h ? 16747596 : 4377557), 0.15, 0.62, f, "x"), d(m, 0.1, 0.035, i, h ? -0.38 : 0.68, 0.62, f, "x"), l(m, 0.015, 0.085, 0.018, n, h ? -0.405 : 0.705, 0.64, f), l(m, 0.015, 0.018, 0.085, n, h ? -0.405 : 0.705, 0.64, f);
    }
    const P = this.parts.get("switch");
    l(P, 0.23, 0.12, 0.18, a, 0.95, 0.53, -0.3), l(P, 0.09, 0.08, 0.14, e, 0.93, 0.62, -0.3);
    const w = (h, c) => o(P, new vt(new wt(h.map((m) => new C(...m))), 20, 0.017, 6, !1), t(c));
    w([[0.95, 0.55, -0.3], [1.15, 0.5, -0.4], [0.7, 0.5, -0.4], [0.68, 0.62, -0.22]], 16738390), w([[-0.38, 0.62, -0.22], [-0.48, 0.49, 0], [-0.38, 0.62, 0.22]], 14992227), w([[0.68, 0.62, 0.22], [0.8, 0.48, 0.52], [-0.7, 0.48, 0.52], [-0.74, 0.63, 0.35]], 5672959), w([[-0.74, 0.63, -0.35], [-1.1, 0.5, -0.49], [0.95, 0.55, -0.3]], 5672959);
    const T = this.parts.get("shell"), u = new Z({ color: 2738687, metalness: 0.28, roughness: 0.23, clearcoat: 1 });
    this.skins.push(u);
    const g = [[-1.25, 0.48, 0.68], [-0.85, 0.56, 0.77], [-0.25, 0.42, 1.04], [0.35, 0.34, 1.02], [0.9, 0.4, 0.72], [1.43, 0.15, 0.53]], A = [];
    for (const [h, c, m] of g) A.push(h, 0.55, -c, h, m, -c * 0.55, h, m, c * 0.55, h, 0.55, c);
    const S = [];
    for (let h = 0; h < g.length - 1; h++) for (let c = 0; c < 3; c++) {
      const m = h * 4 + c, f = m + 4;
      S.push(m, f, m + 1, f, f + 1, m + 1);
    }
    const k = new ct();
    k.setAttribute("position", new pt(A, 3)), k.setIndex(S), k.computeVertexNormals(), u.side = ut, o(T, k, u);
    const H = l(T, 0.61, 0.18, 0.36, new Z({ color: 1123128, metalness: 0.65, roughness: 0.1, clearcoat: 1 }), 0, 1);
    H.rotation.z = -0.035;
    for (const h of [-0.39, 0.39]) {
      const c = l(T, 0.95, 0.035, 0.12, n, 0.66, 0.76, h * 0.8);
      c.rotation.z = -0.3, l(T, 0.3, 0.025, 0.1, a, -0.85, 0.79, h);
    }
    T.add(this.wings), l(this.wings, 0.35, 0.09, 1.64, u, -1.08, 1.01);
    for (const h of [-0.55, 0.55]) l(this.wings, 0.1, 0.33, 0.08, e, -1.1, 0.84, h);
    r.add(this.ballast), d(this.ballast, 0.16, 0.08, a, 0, 0.43, 0, "y"), this.skins = [], T.traverse((h) => {
      h instanceof E && h.material instanceof Z && h.material.color.getHex() === 2738687 && this.skins.push(h.material);
    });
    for (const [h, c] of this.parts)
      c.userData.home || (c.userData.home = c.position.clone()), c.name = h;
  }
  configure(t) {
    this.skins.forEach((e) => e.color.set(t.color)), this.rubber.forEach((e) => {
      e.color.set(t.tire === "grip" ? 2175814 : 6845829), e.roughness = t.tire === "grip" ? 0.92 : 0.45;
    }), this.wings.visible = t.shell === "wing", this.ballast.position.x = t.ballast === "rear" ? -0.67 : 0;
    for (const e of this.wheelParts) e.scale.setScalar(t.diameter / 26);
  }
  layout(t, e, i, a) {
    let n = 0;
    for (const [o, l] of this.parts) {
      const d = l.userData.home;
      if (l.visible = t.has(o), l.position.copy(d), e && o !== "chassis") {
        const r = Math.floor(n / 5), p = n % 5;
        l.position.add(new C((p - 2) * 1.18, (r + 1) * 0.62, (r - 1) * 1.2));
      }
      n++, l.traverse((r) => {
        if (r instanceof E) {
          const p = Array.isArray(r.material) ? r.material : [r.material];
          for (const b of p)
            b instanceof G && (b.emissive.setHex(a === o ? 2249049 : 0), b.emissiveIntensity = a === o ? 0.7 : 0);
        }
      });
    }
    for (const o of this.skins)
      o.transparent = i, o.opacity = i ? 0.16 : 1, o.depthWrite = !i;
  }
  animate(t, e = !1, i = 4, a = 0.26) {
    const n = -t / a;
    for (const o of this.wheels) o.rotation.z = n;
    this.gears.forEach((o, l) => o.rotation.z = n * (l === 0 ? -i : 1)), this.rotor.rotation.z = e ? -n * i : 0;
  }
  dispose() {
    const t = /* @__PURE__ */ new Set(), e = /* @__PURE__ */ new Set();
    this.root.traverse((i) => {
      i instanceof E && (t.add(i.geometry), (Array.isArray(i.material) ? i.material : [i.material]).forEach((a) => e.add(a)));
    }), t.forEach((i) => i.dispose()), e.forEach((i) => i.dispose());
  }
}
const V = { gear: 4, tire: "grip", diameter: 26, shell: "arrow", ballast: "center", color: "#29c9ff" }, x = { straight: 18, radius: 12, width: 5, length: 72 + 24 * Math.PI }, tt = 1 / 240, Y = (s, t, e) => Math.max(t, Math.min(e, s));
function O(s) {
  const { straight: t, radius: e, length: i } = x;
  if (s = (s % i + i) % i, s < 2 * t) return { x: s - t, z: -e, tx: 1, tz: 0 };
  if (s -= 2 * t, s < Math.PI * e) {
    const n = s / e - Math.PI / 2;
    return { x: t + e * Math.cos(n), z: e * Math.sin(n), tx: -Math.sin(n), tz: Math.cos(n) };
  }
  if (s -= Math.PI * e, s < 2 * t) return { x: t - s, z: e, tx: -1, tz: 0 };
  const a = (s - 2 * t) / e + Math.PI / 2;
  return { x: -t + e * Math.cos(a), z: e * Math.sin(a), tx: -Math.sin(a), tz: Math.cos(a) };
}
function ot(s, t) {
  const e = x.straight, i = x.radius, a = Y(s, -e, e), n = s - a, o = Math.hypot(n, t) || 1e-5, l = n / o, d = t / o;
  let r = 0;
  if (s >= -e && s <= e) r = t < 0 ? s + e : 2 * e + Math.PI * i + e - s;
  else if (s > e) r = 2 * e + (Math.atan2(t, n) + Math.PI / 2) * i;
  else {
    let p = Math.atan2(t, n);
    p < Math.PI / 2 && (p += 2 * Math.PI), r = 4 * e + Math.PI * i + (p - Math.PI / 2) * i;
  }
  return { offset: o - i, nx: l, nz: d, s: (r % x.length + x.length) % x.length };
}
function F(s, t) {
  return t < -8 && s > -6 && s < 1 ? { height: (s + 6) * 0.18, slope: 0.18, gap: !1 } : t < -8 && s >= 1 && s < 5 ? { height: -4, slope: 0, gap: !0 } : { height: 0, slope: 0, gap: !1 };
}
function et(s) {
  return {
    mass: 0.116 + (s.shell === "wing" ? 0.014 : 6e-3) + 8e-3,
    radius: s.diameter / 100,
    grip: s.tire === "grip" ? 1.15 : 0.63,
    rolling: s.tire === "grip" ? 0.012 : 8e-3,
    inertia: (0.116 + 0.014 + 8e-3) * 1.12,
    rollLimit: s.ballast === "center" ? 1 : 0.78
  };
}
function B(s = 0) {
  const t = 3 - s * 3, e = O(t);
  return { id: s, x: e.x, z: e.z, y: 0, vx: 0, vz: 0, vy: 0, yaw: 0, omega: 0, pitch: 0, roll: 0, distance: 0, lastS: (t % x.length + x.length) % x.length, time: 0, lap: 0, lapTimes: [], lapStart: 0, contacts: 0, landings: 0, impact: 0, offTrack: !1, finished: !1, airborne: !1, maxSpeed: 0 };
}
function ht(s, t, e = tt, i = !0) {
  if (s.offTrack || s.finished) return;
  e = Y(e, 0, 1 / 120);
  const a = et(t), n = 196, o = Math.cos(s.yaw), l = Math.sin(s.yaw), d = s.vx * o + s.vz * l, r = -s.vx * l + s.vz * o, p = F(s.x, s.z);
  if (!p.gap && s.y <= p.height + 0.018 && s.vy <= p.slope * s.vx + 0.05) {
    const u = 133.33333333333334 * Math.PI * 2 / t.gear * a.radius, g = i ? 12e-4 * t.gear * 0.78 / (a.radius * 0.05) * Math.max(0, 1 - Math.max(0, d) / u) : 0, A = a.rolling + Math.abs(d) * 25e-5, S = (g - (Math.abs(d) > 0.05 ? A : 0)) / (a.mass * 0.05), k = Y(-r * 16, -a.grip * n, a.grip * n);
    s.vx += (o * S - l * k) * e, s.vz += (l * S + o * k) * e, s.omega *= Math.exp(-4 * e), s.y = p.height, s.vy = p.slope * s.vx, s.pitch += (Math.atan(p.slope * o) - s.pitch) * Math.min(1, e * 18), s.roll *= Math.exp(-10 * e), s.airborne = !1;
  } else
    s.vy -= n * e, s.airborne = !0, s.pitch += (t.ballast === "rear" ? 0.18 : -0.13) * e;
  s.x += s.vx * e, s.z += s.vz * e, s.y += s.vy * e, s.yaw += s.omega * e;
  const z = F(s.x, s.z);
  if (!z.gap && s.y < z.height) {
    const u = Math.max(0, -s.vy);
    if (s.y = z.height, s.vy = 0, s.airborne && u > 3) {
      s.landings++, s.impact = Math.max(s.impact, u / 50);
      const g = Y(u * (t.ballast === "rear" ? 5e-3 : 25e-4), 0, 0.35);
      s.vx *= 1 - g, s.vz *= 1 - g, s.roll = t.ballast === "rear" ? 0.11 : 0.03;
    }
    s.airborne = !1;
  }
  if (s.y < 1.8)
    for (const u of [-1.28, 1.28]) for (const g of [-0.88, 0.88]) {
      const A = u * o - g * l, S = u * l + g * o, k = ot(s.x + A, s.z + S), H = x.width / 2 - 0.13, h = Math.abs(k.offset) - H;
      if (h > 0) {
        const c = k.offset > 0 ? -1 : 1, m = k.nx * c, f = k.nz * c;
        s.x += m * h * 0.65, s.z += f * h * 0.65;
        const $ = (s.vx - s.omega * S) * m + (s.vz + s.omega * A) * f;
        if ($ < 0) {
          const q = A * f - S * m, y = -1.12 * $ / (1 / a.mass + q * q / a.inertia);
          s.vx += y * m / a.mass, s.vz += y * f / a.mass, s.omega += q * y / a.inertia, s.vx *= 0.997, s.vz *= 0.997, -$ > 2 && s.impact < 0.06 && s.contacts++, s.impact = Math.max(s.impact, Math.min(1, -$ / 40));
        }
      }
    }
  const P = ot(s.x, s.z);
  if (s.y < -2.5 || Math.abs(P.offset) > x.width / 2 + 1.8) {
    s.offTrack = !0;
    return;
  }
  let w = P.s - s.lastS;
  w > x.length / 2 && (w -= x.length), w < -x.length / 2 && (w += x.length), Math.abs(w) < 3 && (s.distance += w), s.lastS = P.s, s.time += e;
  const T = Math.max(0, Math.floor(s.distance / x.length));
  T > s.lap && (s.lap = T, s.lapTimes.push(s.time - s.lapStart), s.lapStart = s.time, T >= 3 && (s.finished = !0)), s.impact *= Math.exp(-9 * e), s.maxSpeed = Math.max(s.maxSpeed, Math.hypot(s.vx, s.vz));
}
function It(s, t, e, i) {
  if (!(s.offTrack || t.offTrack || Math.abs(s.y - t.y) > 0.8))
    for (const a of [-0.7, 0.7]) for (const n of [-0.7, 0.7]) {
      const o = t.x + Math.cos(t.yaw) * n - s.x - Math.cos(s.yaw) * a, l = t.z + Math.sin(t.yaw) * n - s.z - Math.sin(s.yaw) * a, d = Math.hypot(o, l);
      if (d >= 1.5 || d < 1e-5) continue;
      const r = o / d, p = l / d, b = et(e).mass, z = et(i).mass, P = 1 / b + 1 / z, w = 1.5 - d;
      s.x -= r * w / (b * P), s.z -= p * w / (b * P), t.x += r * w / (z * P), t.z += p * w / (z * P);
      const T = (t.vx - s.vx) * r + (t.vz - s.vz) * p;
      if (T < 0) {
        const u = -1.2 * T / P;
        s.vx -= u * r / b, s.vz -= u * p / b, t.vx += u * r / z, t.vz += u * p / z, s.impact = t.impact = 0.65;
      }
    }
}
class Lt {
  constructor(t) {
    this.stage = t, this.renderer = new bt({ antialias: !0, alpha: !0, preserveDrawingBuffer: !0 }), this.renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5)), this.renderer.shadowMap.enabled = !0, this.renderer.shadowMap.type = xt, this.renderer.toneMapping = yt, this.renderer.domElement.setAttribute("aria-label", "四驅車模型，可拖動旋轉，也可點零件"), this.renderer.domElement.tabIndex = 0, t.append(this.renderer.domElement);
    const e = new Tt(), i = new Mt(this.renderer);
    this.environment = i.fromScene(e, 0.04), this.scene.environment = this.environment.texture, e.dispose(), i.dispose(), this.scene.add(new zt(13036287, 2504790, 2.2));
    const a = new $t(16774096, 3.6);
    a.position.set(12, 35, -18), a.castShadow = !0, a.shadow.mapSize.set(1024, 1024), Object.assign(a.shadow.camera, { left: -40, right: 40, top: 32, bottom: -32 }), a.shadow.bias = -2e-4, this.scene.add(a);
    const n = new E(new J(3, 3.1, 0.18, 64), new G({ color: 2505566, metalness: 0.45, roughness: 0.35 }));
    n.position.y = -0.16, n.receiveShadow = !0, this.plinth.add(n);
    const o = new E(new dt(2.86, 0.018, 6, 100), new K({ color: 7137535 }));
    o.rotation.x = Math.PI / 2, o.position.y = -0.058, this.plinth.add(o), this.scene.add(this.plinth, this.car.root, this.arena, this.rival.root), this.rival.root.visible = !1, this.buildTrack(), this.arena.visible = !1, this.observer = new ResizeObserver(() => {
      this.resize(), this.wake();
    }), this.observer.observe(t);
    const l = this.abort.signal, d = this.renderer.domElement;
    d.addEventListener("pointerdown", (r) => {
      this.race || (this.dragging = { x: r.clientX, y: r.clientY, yaw: this.orbit.yaw, pitch: this.orbit.pitch, id: r.pointerId, moved: !1 }, d.setPointerCapture(r.pointerId));
    }, { signal: l }), d.addEventListener("pointermove", (r) => {
      if (!this.dragging) return;
      const p = this.dragging, b = r.clientX - p.x, z = r.clientY - p.y;
      Math.hypot(b, z) > 5 && (p.moved = !0), this.orbit.yaw = p.yaw - b * 8e-3, this.orbit.pitch = Math.max(0.15, Math.min(1.35, p.pitch + z * 6e-3)), this.wake();
    }, { signal: l }), d.addEventListener("pointerup", (r) => {
      if (!this.dragging) return;
      const p = this.dragging.moved;
      if (this.dragging = void 0, d.hasPointerCapture(r.pointerId) && d.releasePointerCapture(r.pointerId), !p) {
        const b = d.getBoundingClientRect(), z = new St();
        z.setFromCamera(new st((r.clientX - b.left) / b.width * 2 - 1, 1 - (r.clientY - b.top) / b.height * 2), this.camera);
        for (const P of z.intersectObject(this.car.root, !0)) {
          let w = P.object;
          for (; w && !w.userData.part; ) w = w.parent;
          if (w && w.visible) {
            this.onPick?.(w.userData.part);
            break;
          }
        }
      }
    }, { signal: l }), d.addEventListener("pointercancel", () => {
      this.dragging = void 0;
    }, { signal: l }), d.addEventListener("keydown", (r) => {
      ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(r.key) && !this.race && (r.preventDefault(), this.orbit.yaw += r.key === "ArrowLeft" ? -0.12 : r.key === "ArrowRight" ? 0.12 : 0, this.orbit.pitch = Math.max(0.15, Math.min(1.35, this.orbit.pitch + (r.key === "ArrowUp" ? 0.1 : r.key === "ArrowDown" ? -0.1 : 0))), this.wake()), r.key.toLowerCase() === "c" && this.setCamera(!this.first);
    }, { signal: l }), document.addEventListener("visibilitychange", () => {
      document.hidden ? (cancelAnimationFrame(this.frame), this.frame = 0, this.previous = 0, this.gain?.gain.setTargetAtTime(0, this.audio.currentTime, 0.05)) : this.wake();
    }, { signal: l }), d.addEventListener("webglcontextlost", (r) => {
      r.preventDefault(), this.pause(), this.stage.dispatchEvent(new CustomEvent("mini4wd-error", { bubbles: !0, detail: "3D 畫面暫停，請返回後重新開啟。" }));
    }, { signal: l }), this.resize(), this.wake();
  }
  stage;
  car = new nt();
  state = B();
  setup = { ...V };
  onUpdate;
  onPick;
  renderer;
  scene = new kt();
  camera = new it(42, 1, 0.025, 300);
  environment;
  arena = new R();
  plinth = new R();
  rival = new nt();
  rivalState = B(1);
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
  orbit = { yaw: 0.75, pitch: 0.52, zoom: 6.8 };
  installed = Q();
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
  look = new C();
  goal = new C();
  target = new C();
  wind;
  windGain;
  buildTrack() {
    const e = new G({ color: 3229540, roughness: 0.89 }), i = new G({ color: 4186351, metalness: 0.3, roughness: 0.3 }), a = new j(1, 0.8, 0.13), n = new at(a, i, 480);
    n.castShadow = !0;
    const o = new Pt();
    let l = 0;
    const d = [], r = [];
    for (let u = 0; u < 240; u++) {
      const g = u / 240 * x.length, A = (u + 1) / 240 * x.length, S = O(g), k = O(A), H = F(S.x, S.z), h = F(k.x, k.z), c = Math.hypot(S.x - k.x, S.z - k.z);
      for (const f of [-1, 1])
        o.position.set((S.x + k.x) / 2 - S.tz * f * x.width / 2, 0.4 + Math.max(0, H.height), (S.z + k.z) / 2 + S.tx * f * x.width / 2), o.rotation.set(0, -Math.atan2(S.tz, S.tx), 0), o.scale.set(c * 1.08, 1, 1), o.updateMatrix(), n.setMatrixAt(l++, o.matrix);
      if (H.gap || h.gap) continue;
      const m = d.length / 3;
      for (const f of [S, k]) for (const $ of [-1, 1]) d.push(f.x - f.tz * $ * x.width / 2, Math.max(0, F(f.x, f.z).height), f.z + f.tx * $ * x.width / 2);
      r.push(m, m + 1, m + 2, m + 1, m + 3, m + 2);
    }
    n.count = l, this.arena.add(n), e.side = ut;
    const p = new ct();
    p.setAttribute("position", new pt(d, 3)), p.setIndex(r), p.computeVertexNormals();
    const b = new E(p, e);
    b.receiveShadow = !0, this.arena.add(b);
    const z = new E(new j(78, 0.7, 44), new G({ color: 1386304, roughness: 0.7 }));
    z.position.y = -1.2, z.receiveShadow = !0, this.arena.add(z);
    const P = new at(new j(0.18, 0.015, 0.45), new K({ color: 16768115 }), 90);
    for (let u = 0; u < 90; u++) {
      const g = O(u / 90 * x.length);
      o.position.set(g.x - g.tz * 1.9, 0.015 + Math.max(0, F(g.x, g.z).height), g.z + g.tx * 1.9), o.rotation.set(0, -Math.atan2(g.tz, g.tx), 0), o.scale.set(1, 1, 1), o.updateMatrix(), P.setMatrixAt(u, o.matrix);
    }
    this.arena.add(P);
    for (let u = 0; u < 10; u++) for (let g = 0; g < 2; g++) {
      const A = new E(new j(0.45, 0.025, 0.48), new K({ color: (u + g) % 2 ? 16055295 : 1122876 }));
      A.position.set(-15 + g * 0.45, 0.018, -14.2 + u * 0.48), this.arena.add(A);
    }
    const w = new G({ color: 6977279, metalness: 0.3, roughness: 0.3 });
    for (const u of [-15, -9]) {
      const g = new E(new j(0.35, 4, 0.35), w);
      g.position.set(-15, 2, u), this.arena.add(g);
    }
    const T = new E(new j(0.35, 0.7, 6.4), w);
    T.position.set(-15, 4, -12), this.arena.add(T);
    for (let u = 0; u < 12; u++) {
      const g = O(u / 12 * x.length), A = new E(new J(0.07, 0.1, 3, 8), i);
      A.position.set(g.x - g.tz * 4, 1, g.z + g.tx * 4), this.arena.add(A);
    }
  }
  resize() {
    const t = Math.max(1, this.stage.clientWidth), e = Math.max(1, this.stage.clientHeight);
    this.renderer.setSize(t, e, !1), this.camera.aspect = t / e, this.camera.updateProjectionMatrix();
  }
  setMode(t) {
    this.pause(), this.race = t, this.arena.visible = t, this.plinth.visible = !t, this.rival.root.visible = t && this.compare, this.power = !1, this.car.root.position.set(0, 0, 0), this.car.root.rotation.set(0, 0, 0), this.camera.fov = t ? 65 : 42, this.camera.updateProjectionMatrix(), this.previous = 0, this.layout(), this.wake();
  }
  configure(t) {
    this.setup = { ...t }, this.car.configure(t), this.wake();
  }
  setParts(t, e, i, a = "") {
    this.installed = new Set(t), this.exploded = e, this.xray = i, this.selected = a, this.layout(), this.wake();
  }
  layout() {
    this.car.layout(this.race ? Q() : this.installed, this.race ? 0 : Number(this.exploded), !this.race && this.xray, this.race ? "" : this.selected);
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
    this.state = B(), this.rivalState = B(1), this.rival.root.visible = !1, this.distance = 0, this.wake();
  }
  run(t = !1) {
    this.state = B(), this.rivalState = B(1), this.compare = t, this.rival.root.visible = t, this.rival.configure({ ...V, color: "#ff9266" }), this.running = !0, this.accumulator = 0, this.distance = 0, this.wake();
  }
  pause() {
    this.running = !1, this.power = !1, this.gain && this.gain.gain.setTargetAtTime(0, this.audio.currentTime, 0.05), this.windGain && this.windGain.gain.setTargetAtTime(0, this.audio.currentTime, 0.05), this.wake();
  }
  setSound(t) {
    if (this.sound = t, t && !this.audio)
      try {
        this.audio = new AudioContext(), this.oscillator = this.audio.createOscillator(), this.gain = this.audio.createGain(), this.oscillator.type = "sawtooth", this.gain.gain.value = 0, this.oscillator.connect(this.gain), this.gain.connect(this.audio.destination), this.oscillator.start();
        const e = this.audio.createBuffer(1, this.audio.sampleRate, this.audio.sampleRate), i = e.getChannelData(0);
        for (let n = 0; n < i.length; n++) i[n] = Math.random() * 2 - 1;
        this.wind = this.audio.createBufferSource(), this.wind.buffer = e, this.wind.loop = !0;
        const a = this.audio.createBiquadFilter();
        a.type = "lowpass", a.frequency.value = 1100, this.windGain = this.audio.createGain(), this.windGain.gain.value = 0, this.wind.connect(a), a.connect(this.windGain), this.windGain.connect(this.audio.destination), this.wind.start();
      } catch {
        this.sound = !1;
      }
    t ? this.audio?.resume() : (this.gain && (this.gain.gain.value = 0), this.windGain && (this.windGain.gain.value = 0));
  }
  thumbnails() {
    const t = {}, e = this.renderer.getSize(new st());
    this.renderer.setSize(160, 110, !1);
    const i = new it(35, 160 / 110, 0.01, 100);
    this.plinth.visible = !1;
    for (const [a, n] of this.car.parts) {
      for (const [p, b] of this.car.parts) b.visible = p === a;
      const o = new qt().setFromObject(n), l = o.getCenter(new C()), d = o.getSize(new C()), r = Math.max(d.x, d.y, d.z) * 2.4 + 0.3;
      i.position.copy(l).add(new C(r * 0.72, r * 0.7, r)), i.lookAt(l), this.renderer.render(this.scene, i), t[a] = this.renderer.domElement.toDataURL("image/png");
    }
    return this.renderer.setSize(e.x, e.y, !1), this.plinth.visible = !0, this.layout(), this.wake(), t;
  }
  wake() {
    !this.dead && !this.frame && !document.hidden && (this.frame = requestAnimationFrame((t) => this.render(t)));
  }
  render(t) {
    if (this.frame = 0, this.dead) return;
    const e = !this.previous, i = e ? 0 : Math.min(0.05, (t - this.previous) / 1e3);
    if (this.previous = t, this.race) {
      if (this.running) {
        for (this.accumulator += i; this.accumulator >= tt; )
          ht(this.state, this.setup), this.compare && (ht(this.rivalState, V), It(this.state, this.rivalState, this.setup, V)), this.accumulator -= tt;
        this.distance += Math.hypot(this.state.vx, this.state.vz) * i, (this.state.finished || this.state.offTrack) && (this.running = !1);
      }
      for (const [r, p] of [[this.car, this.state], [this.rival, this.rivalState]])
        r.root.position.set(p.x, p.y + (r === this.car ? (this.setup.diameter - 26) / 100 : 0), p.z), r.root.rotation.set(0, -p.yaw, 0), r.root.rotateZ(p.pitch), r.root.rotateX(p.roll), r.animate(this.distance, !0, r === this.car ? this.setup.gear : 4, r === this.car ? this.setup.diameter / 100 : 0.26);
      const a = this.state, n = new C(Math.cos(a.yaw), 0, Math.sin(a.yaw)), o = new C(a.x, a.y, a.z), l = Math.hypot(a.vx, a.vz);
      this.goal.copy(o).addScaledVector(n, this.first ? 1.4 : -6.5).add(new C(0, this.first ? 1.2 : 3.8, 0)), this.target.copy(o).addScaledVector(n, this.first ? 9 : 5).add(new C(0, 0.7, 0));
      const d = e ? 1 : 1 - Math.exp(-i * (this.first ? 18 : 7));
      this.camera.position.lerp(this.goal, d), this.look.lerp(this.target, d), this.reduced || (this.camera.position.y += Math.sin(t * 0.025) * Math.min(0.035, l * 1e-3) + a.impact * 0.08), this.camera.lookAt(this.look), this.camera.fov += (65 + Math.min(9, l * 0.18) - this.camera.fov) * (e ? 1 : 0.08), this.camera.updateProjectionMatrix();
    } else {
      this.car.root.position.set(0, (this.setup.diameter - 26) / 100, 0), this.car.root.rotation.set(0, 0, 0), this.power && (this.distance += i * 1.8, this.car.animate(this.distance, !0, this.setup.gear, this.setup.diameter / 100));
      const a = this.orbit.zoom * (this.exploded ? 1.5 : 1);
      this.camera.position.set(Math.cos(this.orbit.yaw) * a, Math.sin(this.orbit.pitch) * a + 0.5, Math.sin(this.orbit.yaw) * a), this.camera.lookAt(0, this.exploded ? 1.1 : 0.4, 0);
    }
    if (this.audio && this.gain && this.oscillator) {
      const a = this.sound && (this.running || this.power);
      this.gain.gain.setTargetAtTime(a ? 0.015 : 0, this.audio.currentTime, 0.05), this.oscillator.frequency.setTargetAtTime(100 + (this.race ? Math.hypot(this.state.vx, this.state.vz) * 13 : 130), this.audio.currentTime, 0.08), this.windGain?.gain.setTargetAtTime(a && this.race ? Math.min(0.045, Math.hypot(this.state.vx, this.state.vz) * 7e-4) + this.state.impact * 0.045 : 0, this.audio.currentTime, 0.03);
    }
    this.renderer.render(this.scene, this.camera), (t - this.lastUI > 100 || this.state.finished || this.state.offTrack) && (this.onUpdate?.(this.state), this.lastUI = t), this.running || this.power ? this.wake() : this.previous = 0;
  }
  destroy() {
    this.dead = !0, cancelAnimationFrame(this.frame), this.abort.abort(), this.observer.disconnect(), this.car.dispose(), this.rival.dispose(), this.arena.traverse((t) => {
      t instanceof E && (t.geometry.dispose(), (Array.isArray(t.material) ? t.material : [t.material]).forEach((e) => e.dispose()));
    }), this.plinth.traverse((t) => {
      t instanceof E && (t.geometry.dispose(), t.material.dispose());
    }), this.environment.dispose(), this.renderer.dispose(), this.oscillator?.stop(), this.wind?.stop(), this.audio?.close(), this.renderer.domElement.remove();
  }
}
const lt = { back: "M15 5 8 12l7 7M8 12h13", voice: "m4 9 4 0 5-4v14l-5-4H4zM17 8q6 4 0 8", replay: "M5 8a8 8 0 1 1-1 8M5 3v5h5", quiz: "m5 16 11-11 3 3-11 11-4 1zM14 7l3 3", notes: "M5 3h14v18H5zM8 8h8M8 12h8M8 16h5", learn: "M3 5q5-3 9 0 5-3 9 0v15q-5-3-9 0-4-3-9 0zM12 5v15", parts: "M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z", build: "m4 20 9-9M14 4a5 5 0 0 0 6 6l-4-1-1-4z", tune: "M4 7h16M4 17h16M8 4v6M16 14v6", race: "M5 21V3m0 1h14l-3 5 3 5H5", camera: "M3 7h5l2-3h4l2 3h5v13H3zM15 13a3 3 0 1 1-6 0 3 3 0 0 1 6 0", power: "M12 3v9M6 5a9 9 0 1 0 12 0", play: "m8 4 12 8-12 8z", stop: "M6 6h12v12H6z", next: "m9 5 7 7-7 7", prev: "m15 5-7 7 7 7", remove: "M5 12h14", plus: "M5 12h14M12 5v14", explode: "m9 9-6-6m0 5V3h5M15 15l6 6m0-5v5h-5M3 21l6-6M15 9l6-6", eye: "M2 12q10-15 20 0-10 15-20 0M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0", check: "m4 12 5 5L20 6" }, mt = (s) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${lt[s] || lt.parts}"/></svg>`, v = (s, t, e = s) => `<button type="button" data-m4="${s}" aria-label="${t}" title="${t}">${mt(e)}<span>${t}</span></button>`, L = [
  { title: "電池讓車跑起來", text: "閉合開關，看馬達和四輪轉動。", voice: "電池經過接點和開關，形成完整電路，馬達把電能轉成轉動。按電源，看看馬達和四個輪圈。這台車不需要回拉。", part: "battery-a" },
  { title: "小齒輪，大力量", text: "馬達轉 4 圈，輪軸轉 1 圈。", voice: "現在是四比一減速。馬達轉四圈，輪軸轉一圈。較大的減速比可以增加輪端扭力，但降低空載輪速。", part: "gears" },
  { title: "動力送到四個輪子", text: "沿著長軸，找出前後輪軸。", voice: "馬達帶動減速齒輪，再經過長傳動軸，把動力送到前後輪軸，帶動四個輪圈和輪胎。這是軸傳動四輪驅動的簡化教學模型。", part: "shaft" },
  { title: "怎麼沿著彎道跑？", text: "導輪碰護欄，輪胎抓住地面。", voice: "小導輪受到護欄推力，車身就改變方向。輪胎和地面的摩擦也影響穩定性。第一人稱是車頭攝影機，不是駕駛座。", part: "rollers" }
];
class Ht {
  constructor(t) {
    this.host = t, t.innerHTML = `<section class="m4-lab" aria-label="四驅車研究所"><header class="m4-header">${v("back", "返回")}<h2>四驅車研究所</h2><nav class="m4-helpers" aria-label="實驗小幫手">${v("voice", "語音")}${v("replay", "重聽")}${v("notes", "紀錄")}${v("quiz", "考題")}</nav></header><nav class="m4-nav" aria-label="探索步驟">${[["learn", "原理"], ["parts", "零件"], ["build", "組裝"], ["tune", "改裝"], ["race", "試跑"]].map(([e, i]) => v(e, i)).join("")}</nav><div class="m4-layout"><section class="m4-scene"><div class="m4-stage"></div><div class="m4-scene-tag">原創教學車 · 星羽 01</div><div class="m4-view-tools">${v("explode", "拆開", "explode")}${v("xray", "透視", "eye")}${v("zoom-in", "放大", "plus")}${v("zoom-out", "縮小", "remove")}</div><button class="m4-snap" data-m4="install" hidden aria-label="安裝選取零件">${mt("plus")}<span>裝到車上</span></button><div class="m4-hud" hidden><div><b data-speed>0.0</b><small>km/h · 模擬</small></div><div><b data-lap>0 / 3</b><small>完成圈數</small></div><div><b data-time>0.0</b><small>秒</small></div></div><div class="m4-overlay" hidden></div><div class="m4-countdown" hidden></div><p class="m4-status" role="status" aria-live="polite">電池讓車跑起來</p></section><aside class="m4-tools" aria-label="操作面板"></aside></div></section>`, this.root = t.querySelector(".m4-lab");
    try {
      this.view = new Lt(this.root.querySelector(".m4-stage")), this.view.configure(this.setup), this.thumbnails = this.view.thumbnails(), this.view.onPick = (e) => this.select(e), this.view.onUpdate = (e) => this.updateRace(e);
    } catch (e) {
      console.error("Mini 4WD WebGL", e), this.tell("這個裝置未能開啟 3D。請啟用硬體加速，或換支援 WebGL 的瀏覽器。");
    }
    this.root.addEventListener("click", (e) => {
      const i = e.target.closest("button");
      i && (i.dataset.part ? this.select(i.dataset.part) : i.dataset.choice ? this.choose(i.dataset.choice) : i.dataset.answer ? this.answer(i.dataset.answer) : this.action(i.dataset.m4 || ""));
    }, { signal: this.abort.signal }), this.root.addEventListener("pointerdown", (e) => this.dragStart(e), { signal: this.abort.signal }), this.root.addEventListener("pointermove", (e) => this.dragMove(e), { signal: this.abort.signal }), this.root.addEventListener("pointerup", (e) => this.dragEnd(e), { signal: this.abort.signal }), this.root.addEventListener("pointercancel", () => this.clearDrag(), { signal: this.abort.signal }), this.root.addEventListener("mini4wd-error", (e) => {
      this.stop(), this.tell(e.detail);
    }, { signal: this.abort.signal }), document.addEventListener("visibilitychange", () => {
      document.hidden && (this.stop(), this.voice.stop(), this.clearDrag(), this.render());
    }, { signal: this.abort.signal }), this.render(), this.voice.last = L[0].voice;
  }
  host;
  root;
  view;
  voice = new At();
  abort = new AbortController();
  page = "learn";
  previous = "learn";
  lesson = 0;
  partPage = 0;
  selected = "battery-a";
  installed = Q();
  started = !1;
  setup = { ...V };
  thumbnails = {};
  exploded = !1;
  xray = !0;
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
    for (const i of ["learn", "parts", "build", "tune", "race"]) this.root.querySelector(`[data-m4="${i}"]`).setAttribute("aria-pressed", String(i === this.page));
    this.root.querySelector(".m4-view-tools").hidden = ["race", "notes", "quiz"].includes(this.page), this.root.querySelector(".m4-hud").hidden = this.page !== "race", this.root.querySelector(".m4-snap").hidden = this.page !== "build" || this.installed.has(this.selected), this.root.querySelector('[data-m4="explode"]').setAttribute("aria-pressed", String(this.exploded)), this.root.querySelector('[data-m4="xray"]').setAttribute("aria-pressed", String(this.xray));
    const t = this.root.querySelector(".m4-tools"), e = this.root.querySelector(".m4-overlay");
    if (e.hidden = !["quiz", "notes"].includes(this.page), e.innerHTML = "", this.page === "learn") {
      const i = L[this.lesson];
      t.innerHTML = `<div class="m4-eyebrow">原理 ${this.lesson + 1} / ${L.length}</div><h3>${i.title}</h3><img class="m4-part-hero" src="${this.thumbnails[i.part] || ""}" alt="${M.find((a) => a.id === i.part).name}"><p>${this.lesson === 1 ? `馬達轉 ${this.setup.gear} 圈，輪軸轉 1 圈。` : i.text}</p><div class="m4-two">${v("power", this.powered ? "關閉電源" : "開啟電源", "power")}${v("replay", "聽解說")}</div><div class="m4-pager">${v("lesson-prev", "上一步", "prev")}<span>${this.lesson + 1} / 4</span>${v("lesson-next", this.lesson === 3 ? "去組裝" : "下一步", "next")}</div>`;
    } else if (this.page === "parts" || this.page === "build") {
      const i = M.slice(this.partPage * 4, this.partPage * 4 + 4);
      t.innerHTML = `<div class="m4-eyebrow">${this.page === "build" ? "我的組裝" : "BOM · 教學零件表"} <b>${this.installed.size} / ${M.length}</b></div><div class="m4-part-grid">${i.map((a) => `<button type="button" data-part="${a.id}" aria-label="${a.name}，${a.count}${a.count === 1 ? "組或件" : "件"}${this.installed.has(a.id) ? "，已安裝" : ""}" aria-pressed="${a.id === this.selected}"><img src="${this.thumbnails[a.id] || ""}" alt="" draggable="false"><span>${a.name}</span><small>× ${a.count} ${this.installed.has(a.id) ? "✓" : ""}</small></button>`).join("")}</div><div class="m4-pager">${v("part-prev", "上一頁", "prev")}${this.page === "build" ? '<button data-m4="next-part" class="m4-find-next">找下一件</button>' : `<span>${this.partPage + 1} / ${Math.ceil(M.length / 4)}</span>`}${v("part-next", "下一頁", "next")}</div><p class="m4-part-description"></p><div class="m4-two">${this.page === "build" ? v("install", "安裝", "plus") + v("remove", "拆下", "remove") : v("build", "開始組裝", "build") + v("replay", "聽用途")}</div>`, this.describePart();
    } else if (this.page === "tune") this.renderTune(t);
    else if (this.page === "race") t.innerHTML = `<div class="m4-eyebrow">星環測試道</div><h3>讓作品跑三圈</h3><p>直線 · 彎道 · 小跳台</p><div class="m4-race-map" aria-label="封閉橢圓賽道，包含跳台"><svg viewBox="0 0 240 130" aria-hidden="true"><path d="M70 30h100a35 35 0 0 1 0 70H70a35 35 0 0 1 0-70Z" fill="none" stroke="#5bd9f0" stroke-width="18"/><path d="m105 30 17-8v8m-65 7v-14" fill="none" stroke="#ffdb7e" stroke-width="5"/></svg></div><div class="m4-two">${v("camera", this.first ? "車頭視角" : "追車視角", "camera")}${v("sound", this.sound ? "聲音開" : "聲音關", "voice")}</div><button data-m4="motion" aria-pressed="${this.reduced}">穩定鏡頭 ${this.reduced ? "✓" : ""}</button><div class="m4-two">${v("run", "開始試跑", "play")}${v("stop", "停止", "stop")}</div>${v("collision", "雙車碰撞測試", "race")}<p class="m4-small">${this.installed.size === M.length ? "試跑結果會加入紀錄。" : "先把零件裝齊，再出發。"}</p>`;
    else if (this.page === "notes") {
      const i = this.records.slice(this.recordPage * 2, this.recordPage * 2 + 2);
      t.innerHTML = `<h3>我的測試</h3><p>一次只換一個條件，再跑同一條賽道。</p><div class="m4-pager">${v("record-prev", "上一頁", "prev")}<span>${this.records.length ? this.recordPage + 1 : 0} / ${Math.ceil(this.records.length / 2)}</span>${v("record-next", "下一頁", "next")}</div>${v("return", "回到實驗", "back")}`, e.innerHTML = `<h3>比較試跑結果</h3>${i.length ? i.map((a, n) => `<article class="m4-record"><b>第 ${this.recordPage * 2 + n + 1} 次 · ${a.finished ? "完成三圈" : "中途停止"}</b><p>${Ct(a.setup)}</p><div><strong>${a.time.toFixed(2)} <small>秒</small></strong><strong>${(a.max * 0.18).toFixed(1)} <small>km/h 最高</small></strong></div><p>護欄撞擊 ${a.contacts} 次 · 落地 ${a.landings} 次</p></article>`).join("") : "<p>還沒有紀錄。把車組好，去試跑吧！</p>"}`;
    } else {
      const a = [{ q: "哪個零件提供電能？", ids: ["battery-a", "shell", "rollers"], answer: "battery-a" }, { q: "哪個零件把動力送到前輪？", ids: ["shell", "shaft", "battery-a"], answer: "shaft" }, { q: "哪個零件會碰護欄，引導轉彎？", ids: ["rollers", "battery-a", "rim-fl"], answer: "rollers" }][this.quizIndex];
      t.innerHTML = `<h3>看圖想一想</h3><p>${this.quizIndex + 1} / 3</p>${v("replay", "聽題目")}${v("quiz-next", "下一題", "next")}${v("return", "回到實驗", "back")}`, e.innerHTML = `<h3>${a.q}</h3><div class="m4-answer-grid">${a.ids.map((n) => `<button data-answer="${n}" aria-label="${M.find((o) => o.id === n).name}"><img src="${this.thumbnails[n] || ""}" alt="${M.find((o) => o.id === n).name}"></button>`).join("")}</div><p class="m4-feedback" role="status">點一張圖片</p>`, this.voice.last = a.q;
    }
    this.view || t.querySelectorAll("button").forEach((i) => {
      ["run", "collision", "power"].includes(i.dataset.m4 || "") && (i.disabled = !0);
    });
    for (const i of ["run", "collision"]) {
      const a = t.querySelector(`[data-m4="${i}"]`);
      a && (a.disabled = this.installed.size !== M.length || !this.view || this.running);
    }
    this.view?.setParts(this.installed, this.exploded, this.xray, this.selected);
  }
  renderTune(t) {
    const e = this.tunePage === 0 ? [
      ["齒比", [["gear:3.5", "3.5 : 1"], ["gear:4", "4 : 1"], ["gear:5", "5 : 1"]]],
      ["輪胎", [["tire:grip", "抓地胎"], ["tire:hard", "硬胎"]]],
      ["輪徑", [["diameter:26", "26 mm"], ["diameter:30", "30 mm"]]]
    ] : [["外殼", [["shell:arrow", "箭羽"], ["shell:wing", "尾翼"]]], ["配重", [["ballast:center", "中央"], ["ballast:rear", "後方"]]], ["車色", [["color:#29c9ff", "天藍"], ["color:#ff794f", "橘紅"], ["color:#b59aff", "星紫"]]]];
    t.innerHTML = `<div class="m4-eyebrow">${this.tunePage === 0 ? "動力與輪胎" : "外殼與配重"}</div>${e.map(([i, a]) => `<fieldset><legend>${i}</legend><div class="m4-choices">${a.map(([n, o]) => {
      const [l, d] = n.split(":");
      return `<button data-choice="${n}" aria-pressed="${String(this.setup[l]) === d}">${l === "color" ? `<i style="background:${d}"></i>` : ""}${o}</button>`;
    }).join("")}</div></fieldset>`).join("")}<div class="m4-pager">${v("tune-prev", "上一頁", "prev")}<span>${this.tunePage + 1} / 2</span>${v("tune-next", "下一頁", "next")}</div><p class="m4-small">車色只改外觀。改裝結果以試跑比較。</p>${v("race", "去試跑", "race")}`;
  }
  action(t) {
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
      this.lesson = Math.max(0, Math.min(3, this.lesson + (t === "lesson-next" ? 1 : -1))), this.selected = L[this.lesson].part, this.render(), this.tell(L[this.lesson].text, L[this.lesson].voice);
    } else if (t === "part-prev" || t === "part-next")
      this.partPage = (this.partPage + (t === "part-next" ? 1 : 4)) % 5, this.render();
    else if (t === "install") this.install();
    else if (t === "remove")
      Et(this.selected, this.installed) ? (this.tell("拆下了。可以再装回去。"), this.render()) : this.tell(this.selected === "chassis" ? "底盤留在工作台上。" : "先拆下裝在它上面的零件。");
    else if (t === "next-part") {
      const e = M.find((i) => !this.installed.has(i.id) && rt(i.id, this.installed));
      e ? (this.partPage = Math.floor(M.indexOf(e) / 4), this.select(e.id), this.render()) : this.tell("組裝完成！去改裝，或到賽道試跑。");
    } else t === "tune-prev" || t === "tune-next" ? (this.tunePage = 1 - this.tunePage, this.render()) : t === "camera" ? (this.first = !this.first, this.view?.setCamera(this.first), this.render()) : t === "sound" ? (this.sound = !this.sound, this.view?.setSound(this.sound), this.render()) : t === "motion" ? (this.reduced = !this.reduced, this.view?.setReduced(this.reduced), this.render()) : t === "run" || t === "collision" ? this.run(t === "collision") : t === "stop" ? (this.stop(), this.render()) : t === "record-prev" || t === "record-next" ? (this.recordPage = Math.max(0, Math.min(Math.ceil(this.records.length / 2) - 1, this.recordPage + (t === "record-next" ? 1 : -1))), this.render()) : t === "quiz-next" && (this.quizIndex = (this.quizIndex + 1) % 3, this.render(), this.voice.replay());
  }
  switchPage(t) {
    if (t === this.page) return;
    (t === "notes" || t === "quiz") && (["notes", "quiz"].includes(this.page) || (this.previous = this.page)), this.stop(), this.powered = !1, this.voice.stop(), this.page = t, t === "build" && !this.started && (this.started = !0, this.installed = /* @__PURE__ */ new Set(["chassis"]), this.selected = "motor", this.partPage = 0, this.exploded = !1, this.xray = !1), t === "learn" && (this.selected = L[this.lesson].part, this.xray = !0), t === "parts" && (this.exploded = !0), (t === "tune" || t === "build") && (this.exploded = !1), this.view?.setMode(t === "race"), this.render();
    const e = t === "build" ? "點零件，再點「安裝」。也可以拖到車上。" : t === "race" ? "三圈試跑。先選鏡頭，再出發！" : t === "parts" ? "點一個零件，看看它的工作。" : t === "tune" ? "一次只換一個條件，去試跑比較。" : t === "learn" ? L[this.lesson].text : t === "notes" ? "比較同一條賽道的結果。" : "看圖，找出答案。";
    this.tell(e, t === "learn" ? L[this.lesson].voice : e), t === "quiz" && (this.voice.last = this.root.querySelector(".m4-overlay h3").textContent || "");
  }
  select(t) {
    if (!M.some((i) => i.id === t)) return;
    this.selected = t, this.view?.setParts(this.installed, this.exploded, this.xray, t), this.describePart(), this.root.querySelectorAll("[data-part]").forEach((i) => i.setAttribute("aria-pressed", String(i.dataset.part === t))), this.root.querySelector(".m4-snap").hidden = this.page !== "build" || this.installed.has(t);
    const e = M.find((i) => i.id === t);
    this.tell(e.name, e.voice);
  }
  describePart() {
    const t = M.find((i) => i.id === this.selected), e = this.root.querySelector(".m4-part-description");
    e && (e.textContent = t.voice);
  }
  install() {
    if (this.page === "build") {
      if (this.installed.has(this.selected)) {
        this.tell("這個零件已經裝好了。");
        return;
      }
      if (!rt(this.selected, this.installed)) {
        const t = M.find((e) => e.id === this.selected).needs.filter((e) => !this.installed.has(e)).map((e) => M.find((i) => i.id === e).name);
        this.tell(`先裝好：${t.join("、")}`);
        return;
      }
      this.installed.add(this.selected), this.tell(this.installed.size === M.length ? "完成了！這台就是你要試跑的車。" : "喀！裝好了。找下一個零件吧。"), this.render();
    }
  }
  choose(t) {
    const [e, i] = t.split(":");
    ({ gear: ["3.5", "4", "5"], tire: ["grip", "hard"], diameter: ["26", "30"], shell: ["arrow", "wing"], ballast: ["center", "rear"], color: ["#29c9ff", "#ff794f", "#b59aff"] })[e]?.includes(i) && (this.setup = { ...this.setup, [e]: e === "gear" || e === "diameter" ? Number(i) : i }, this.view?.configure(this.setup), this.render(), this.tell(e === "color" ? "換了車色，性能不變。" : e === "gear" ? "齒比改好了。比較加速與三圈時間。" : "設定改好了，去同一條賽道比較。"));
  }
  async run(t) {
    if (!this.view || this.running || this.installed.size !== M.length) return;
    this.view.reset(), this.running = !0, this.recorded = !1;
    const e = ++this.sequence;
    this.render(), this.voice.stop();
    const i = this.root.querySelector(".m4-countdown");
    i.hidden = !1;
    for (const a of ["3", "2", "1"]) {
      if (e !== this.sequence || this.dead) return;
      i.textContent = a, await new Promise((n) => setTimeout(n, 650));
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
    this.recorded || (this.recorded = !0, this.records.push({ setup: { ...this.setup }, time: t.time, max: t.maxSpeed, contacts: t.contacts, landings: t.landings, finished: t.finished }));
  }
  answer(t) {
    const e = ["battery-a", "shaft", "rollers"][this.quizIndex], i = t === e ? "答對了！" + M.find((a) => a.id === e).voice : "再想想。點語音，聽聽題目。";
    this.root.querySelector(".m4-feedback").textContent = i, this.voice.say(i);
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
  Ht as Mini4wdLab
};
