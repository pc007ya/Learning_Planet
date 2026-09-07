import { h as R, B as H, j as T, q as Y, r as Z, d as b, I as _, O as X, s as U, t as E, u as A, k as C, n as x, v as D, V as g, w as N, x as K, y as Q, F as J, z as B, m as G, A as tt, J as et, p as O, a as W, G as v, l as w, K as st, N as at, U as it, X as I, Y as ot, Z as rt, D as nt, W as ct, _ as ht, $ as lt, a0 as dt, P as ut } from "./RoundedBoxGeometry-CV-2QMmK.mjs";
import { L, F as $, i as pt, b as j, c as mt } from "./car-art-D34K7c64.mjs";
import { L as ft } from "./experience-D5QZjYwP.mjs";
class bt extends R {
  constructor() {
    super();
    const t = new H();
    t.deleteAttribute("uv");
    const e = new T({ side: Y }), s = new T(), o = new Z(16777215, 900, 28, 2);
    o.position.set(0.418, 16.199, 0.3), this.add(o);
    const a = new b(t, e);
    a.position.set(-0.757, 13.219, 0.717), a.scale.set(31.713, 28.305, 28.591), this.add(a);
    const i = new _(t, s, 6), r = new X();
    r.position.set(-10.906, 2.009, 1.846), r.rotation.set(0, -0.195, 0), r.scale.set(2.328, 7.905, 4.651), r.updateMatrix(), i.setMatrixAt(0, r.matrix), r.position.set(-5.607, -0.754, -0.758), r.rotation.set(0, 0.994, 0), r.scale.set(1.97, 1.534, 3.955), r.updateMatrix(), i.setMatrixAt(1, r.matrix), r.position.set(6.167, 0.857, 7.803), r.rotation.set(0, 0.561, 0), r.scale.set(3.927, 6.285, 3.687), r.updateMatrix(), i.setMatrixAt(2, r.matrix), r.position.set(-2.017, 0.018, 6.124), r.rotation.set(0, 0.333, 0), r.scale.set(2.002, 4.566, 2.064), r.updateMatrix(), i.setMatrixAt(3, r.matrix), r.position.set(2.291, -0.756, -2.621), r.rotation.set(0, -0.286, 0), r.scale.set(1.546, 1.552, 1.496), r.updateMatrix(), i.setMatrixAt(4, r.matrix), r.position.set(-2.193, -0.369, -5.547), r.rotation.set(0, 0.516, 0), r.scale.set(3.875, 3.487, 2.986), r.updateMatrix(), i.setMatrixAt(5, r.matrix), this.add(i);
    const n = new b(t, S(50));
    n.position.set(-16.116, 14.37, 8.208), n.scale.set(0.1, 2.428, 2.739), this.add(n);
    const d = new b(t, S(50));
    d.position.set(-16.109, 18.021, -8.207), d.scale.set(0.1, 2.425, 2.751), this.add(d);
    const c = new b(t, S(17));
    c.position.set(14.904, 12.198, -1.832), c.scale.set(0.15, 4.265, 6.331), this.add(c);
    const p = new b(t, S(43));
    p.position.set(-0.462, 8.89, 14.52), p.scale.set(4.38, 5.441, 0.088), this.add(p);
    const h = new b(t, S(20));
    h.position.set(3.235, 11.486, -12.541), h.scale.set(2.5, 2, 0.1), this.add(h);
    const l = new b(t, S(100));
    l.position.set(0, 20, 0), l.scale.set(1, 0.1, 1), this.add(l);
  }
  /**
   * Frees internal resources. This method should be called
   * when the environment is no longer required.
   */
  dispose() {
    const t = /* @__PURE__ */ new Set();
    this.traverse((e) => {
      e.isMesh && (t.add(e.geometry), t.add(e.material));
    });
    for (const e of t)
      e.dispose();
  }
}
function S(m) {
  return new U({
    color: 0,
    emissive: 16777215,
    emissiveIntensity: m
  });
}
function gt(m) {
  const t = () => new K({ color: 1478316, metalness: 0.48, roughness: 0.24, clearcoat: 1, clearcoatRoughness: 0.13 }), e = (n, d = 0.2) => new T({ color: n, metalness: d, roughness: 0.3 }), s = (n, d, c = 0, p = 0, h = 0) => {
    const l = new b(n, d);
    return l.position.set(c, p, h), m.add(l), l;
  }, o = (n, d, c, p, h, l, u = 0) => s(new G(n, d, c, 3, Math.min(n, d, c) * 0.28), e(p), h, l, u), a = new E();
  a.moveTo(-1.96, -0.22), a.lineTo(-1.754, -0.22), a.absarc(-1.18, -0.3, 0.58, Math.PI - 0.14, 0.14, !0), a.lineTo(0.606, -0.22), a.absarc(1.18, -0.3, 0.58, Math.PI - 0.14, 0.14, !0), a.lineTo(1.96, -0.22), a.bezierCurveTo(2.06, -0.02, 2.02, 0.34, 1.84, 0.48), a.bezierCurveTo(1.39, 0.6, 0.87, 0.57, 0.54, 0.58), a.lineTo(-1.55, 0.58), a.bezierCurveTo(-1.91, 0.56, -2.03, 0.22, -1.96, -0.22), a.closePath(), s(new A(a, { depth: 1.5, bevelEnabled: !0, bevelSize: 0.045, bevelThickness: 0.045, bevelSegments: 3, curveSegments: 32 }), t(), 0, 0, -0.75);
  const i = new E();
  i.moveTo(-1.43, 0.52), i.lineTo(-1.02, 1.31), i.quadraticCurveTo(-0.96, 1.38, -0.8, 1.38), i.lineTo(0.23, 1.38), i.quadraticCurveTo(0.33, 1.38, 0.4, 1.27), i.lineTo(0.88, 0.55), i.closePath(), s(new A(i, { depth: 1.24, bevelEnabled: !0, bevelSize: 0.045, bevelThickness: 0.04, bevelSegments: 3 }), t(), 0, 0, -0.62);
  const r = (n, d = 1255995) => {
    const c = new Q();
    c.setAttribute("position", new J(n.flat(), 3)), c.setIndex([0, 1, 2, 0, 2, 3]), c.computeVertexNormals();
    const p = e(d, 0.35);
    return p.side = B, p.roughness = 0.16, s(c, p);
  };
  for (const n of [-1, 1]) {
    const d = 0.667 * n;
    r([[-1.29, 0.65, d], [-0.98, 1.27, d], [-0.54, 1.27, d], [-0.54, 0.65, d]]), r([[-0.47, 0.65, d], [-0.47, 1.27, d], [0.26, 1.27, d], [0.72, 0.65, d]]), o(0.055, 0.66, 0.038, 1582382, -0.5, 0.97, d), o(3.16, 0.026, 0.04, 12179163, -0.03, 0.55, 0.801 * n), o(0.27, 0.06, 0.06, 14870505, -0.12, 0.43, 0.815 * n), o(1.08, 0.085, 0.045, 2108725, 0, -0.22, 0.815 * n), s(new C(0.13, 20, 12), e(15855333), 0.67, 0.68, 0.89 * n).scale.set(1.15, 0.8, 0.66);
    for (const h of [-1.18, 1.18]) s(new x(0.588, 0.045, 8, 36, Math.PI), e(2437690), h, -0.3, 0.805 * n);
    const p = new D([new g(-0.49, 0.51, 0.802 * n), new g(-0.49, -0.1, 0.802 * n), new g(0.48, -0.1, 0.802 * n), new g(0.64, 0.5, 0.802 * n)]);
    s(new N(p, 28, 7e-3, 4, !1), e(1466744));
  }
  r([[0.9, 0.65, -0.54], [0.9, 0.65, 0.54], [0.46, 1.28, 0.54], [0.46, 1.28, -0.54]]).name = "front-glazing", r([[-1.43, 0.65, 0.53], [-1.43, 0.65, -0.53], [-1.1, 1.28, -0.53], [-1.1, 1.28, 0.53]]).name = "rear-glazing", o(1.6, 0.07, 1.4, 1518902, -0.33, 1.38), o(1.65, 0.15, 1.44, 16249055, -0.33, 1.45);
  for (const n of [-0.2, 0.2]) o(0.81, 0.015, 0.1, 15855324, 1.2, 0.59, n);
  for (const n of [-0.5, 0.5]) {
    const d = s(new C(0.18, 24, 16), e(16774350, 0.45), 1.985, 0.25, n);
    d.scale.x = 0.27;
    const c = s(new x(0.185, 0.024, 8, 32), e(14410211, 0.8), 2, 0.25, n);
    c.rotation.y = Math.PI / 2, s(new C(0.14, 20, 12), e(12329790), -1.98, 0.24, n).scale.set(0.25, 1.3, 0.7);
  }
  o(0.075, 0.19, 0.66, 1516590, 2.03, -0.015);
  for (const n of [-0.055, 0, 0.055]) o(0.084, 0.014, 0.55, 10926013, 2.04, n);
  o(0.14, 0.12, 1.24, 12766673, 1.98, -0.2), o(0.14, 0.12, 1.24, 12766673, -1.98, -0.2);
}
function kt(m) {
  const t = Math.max(0, Math.min(60, m));
  return { elapsed: t, minutes: t, done: t >= 60, minuteAngle: -t * Math.PI / 30, hourAngle: -t * Math.PI / 360 };
}
function vt(m, t, e) {
  return kt(m + Math.max(0, t) * e / 60);
}
function F(m) {
  const t = z(m).minute;
  return [t, -t / 3, -t / 3, t / 12];
}
function z(m) {
  const t = m * 2 * Math.PI, e = -t * 12 / 36, s = -e * 12 / 48, o = -s * 12 / 60;
  return { motor: t, first: e, second: s, minute: o };
}
const xt = [
  { teeth: 12, r: 0.12, x: -1.08, y: -0.96, z: -0.42 },
  { teeth: 36, r: 0.36, x: -1.08, y: -0.48, z: -0.42 },
  { teeth: 12, r: 0.12, x: -1.08, y: -0.48, z: -0.2 },
  { teeth: 48, r: 0.48, x: -0.72, y: 0, z: -0.2 },
  { teeth: 12, r: 0.12, x: -0.72, y: 0, z: 0.02 },
  { teeth: 60, r: 0.6, x: 0, y: 0, z: 0.02 }
], P = {
  clock: [
    ["case", "鐘殼", "像安全帽，保護裡面的機芯。", "轉到背面，找找裝電池的位置。"],
    ["glass", "透明鏡片", "擋住灰塵，讓我們看得到時間。", "拆開後，鏡片在最前面。"],
    ["dial", "刻度盤", "12 個大刻度，幫我們讀出幾點。", "每相鄰兩個數字相差 5 分鐘。"],
    ["hands", "時針與分針", "長分針走一圈，短時針走一大格。", "試試下方「+1 時」圖示。"],
    ["gears", "傳動齒輪", "馬達經三段減速帶動分針，再經兩段減速帶動時針。", "綠色輪系減速 60 倍；金色輪系再減速 12 倍。各級齒輪與同軸連接完整，為教學設計而非品牌機芯。"],
    ["motor", "線圈與馬達", "收到電路的節拍，就推動齒輪轉動。", "銅色線圈把電能轉成轉動。"],
    ["quartz", "石英與電路", "像小小節拍器，幫忙維持規律節奏。", "石英不是電池；它負責穩定節拍。"],
    ["battery", "電池", "供應石英鐘需要的電能。", "這是電池式石英鐘，不是上發條的機械鐘。"]
  ],
  car: [
    ["shell", "車殼", "保護裡面的零件，也讓車子有漂亮外形。", "打開拆卸開關，找找裡面的零件。"],
    ["chassis", "底盤", "像一塊骨架，把零件固定在一起。", "輪軸和齒輪箱都裝在底盤上。"],
    ["wheels", "輪胎與輪圈", "輪胎接觸地面，把轉動變成前進。", "較粗糙的路面讓模型比較快停下。"],
    ["axles", "前後輪軸", "連接左右車輪，讓輪子一起轉。", "注意後輪軸連著齒輪箱。"],
    ["housing", "齒輪箱外殼", "把小齒輪和彈簧保護起來。", "拆開後，能看到裡面的傳動零件。"],
    ["spring", "捲簧", "往後拉時收緊，把你的能量存起來。", "放手後，捲簧釋放能量；不是電池在推車。"],
    ["gears", "傳動齒輪", "連接捲簧與輪軸，傳遞轉動。", "同樣的回拉量，換路面再比較。"],
    ["clutch", "離合機構", "幫忙切換回拉儲能和放手前進。", "這是原理示意，不同車款的離合結構會不同。"]
  ]
}, yt = {
  case: [-3.3, 0.7, -1.2],
  glass: [3.4, 1.2, 1.8],
  dial: [0, 1.3, 0.8],
  hands: [2.4, -1.8, 1.2],
  gears: [-0.8, -1.1, 0.6],
  motor: [-2.2, -1.9, 0.7],
  quartz: [0.4, -2.25, 0.5],
  battery: [-3.8, -2, 0.4]
};
class wt {
  constructor(t, e, s, o, a, i, r, n) {
    if (this.kind = t, this.scene = e, this.camera = s, this.stage = o, this.host = a, this.wake = r, this.action = n, this.yaw = t === "clock" ? -0.25 : -0.55, a.classList.add("il-mechanism"), o.classList.add("mech-stage"), o.setAttribute("role", "group"), i) {
      const h = new tt(i), l = new bt();
      this.env = h.fromScene(l, 0.04), e.environment = this.env.texture, l.dispose(), h.dispose(), i.toneMapping = et, i.toneMappingExposure = 1.05;
    }
    this.labelLayer = document.createElement("div"), this.labelLayer.className = "mech-labels", this.labelLayer.innerHTML = '<svg class="mech-leaders" aria-hidden="true"></svg>', o.append(this.labelLayer);
    const d = document.createElement("div");
    d.className = "mech-toolbar", d.innerHTML = `<div class="mech-modes" role="group" aria-label="模型觀看方式"><button data-view="whole" aria-pressed="true">完整外觀</button><button data-view="xray" aria-pressed="false">透視裡面</button><button data-view="explode" aria-pressed="false">拆開看看</button></div><div class="mech-adjust"><label>轉個方向<input type="range" data-mech-turn min="-75" max="75" value="${Math.round(this.yaw * 180 / Math.PI)}" aria-label="轉動模型視角"></label><label>拆開多少<input type="range" data-mech-explode min="0" max="100" value="0" aria-label="零件拆開程度"></label></div>`, o.before(d), t === "clock" && (d.innerHTML = '<div class="clock-switches"><button role="switch" data-clock-rotate aria-checked="false" aria-label="旋轉模型" title="旋轉模型">⟳</button><button role="switch" data-clock-explode aria-checked="false" aria-label="拆卸零件" title="拆卸零件">⚙</button><span hidden>☝ 拖動調時</span></div>', a.querySelector(".bp-heading").append(d.firstElementChild), d.remove()), t === "car" && (a.classList.add("il-car-play"), a.dataset.carMode = "rotate", d.innerHTML = '<div class="car-switches" role="group" aria-label="回力車操作模式"><button role="switch" data-car-mode="rotate" aria-checked="true">⟳ 旋轉<i></i></button><button role="switch" data-car-mode="explode" aria-checked="false">⚙ 拆卸<i></i></button><button role="switch" data-car-mode="test" aria-checked="false">🏁 拉力<i></i></button></div>');
    const c = document.createElement("section");
    if (c.className = "mech-tray", c.innerHTML = `<div class="mech-tray-title"><strong>點零件，發現小祕密</strong><span data-discovered>0 / 8</span></div><div class="mech-parts">${P[t].map((h, l) => `<button data-part="${h[0]}" aria-pressed="false"><span>${l + 1}</span>${h[1]}</button>`).join("")}</div><div class="mech-part-info" aria-live="polite"><strong>從外面看，再拆開找找看。</strong><p>點模型上的數字，或點上方的零件名稱。</p></div><details class="mech-parent"><summary>給陪玩的家長</summary><p>先問「你猜這個零件做什麼？」再點名稱一起看。${t === "clock" ? "電池 → 石英與電路 → 馬達 → 齒輪 → 指針。" : "手往後拉 → 輪軸與齒輪 → 捲簧儲能 → 放手帶動車輪。"}此模型以常見結構為基礎，省略部分緊固件與細小傳動零件，並非品牌產品的維修拆裝圖。真實拆解請由成人協助，避免小零件與電池被孩子吞食。</p></details>`, o.closest(".il-scene-panel").append(c), this.partInfo = c.querySelector(".mech-part-info"), t === "clock") {
      const h = document.createElement("details");
      h.className = "mech-bom", h.innerHTML = '<summary aria-label="展開或收起零件表" title="零件">☷</summary>', h.append(c), o.append(h), h.addEventListener("toggle", () => this.wake(), { signal: this.abort.signal }), c.querySelector("strong").textContent = "零件", c.querySelector(".mech-parent p").textContent = "先問「你猜這個零件做什麼？」再點名称。電池與電路控制馬達，綠色三級輪系減速六十倍帶動長分針，金色兩級輪系再減速十二倍帶動短時針。這是完整教學傳動設計，不是品牌維修圖；未模擬電磁場、齒面碰撞及摩擦。實體拆解須由成人協助。";
      const l = document.createElement("div");
      l.className = "clock-zoom", l.innerHTML = '<button data-clock-zoom="1" aria-label="放大模型">＋</button><button data-clock-zoom="-1" aria-label="縮小模型">−</button><button data-clock-zoom="0" aria-label="還原視角">⌂</button>', o.append(l), this.halo = document.createElement("div"), this.halo.className = "mech-selection-halo", this.halo.hidden = !0, o.append(this.halo);
    }
    const p = document.createElement("div");
    p.className = "mech-quick-info", p.setAttribute("aria-live", "polite"), p.innerHTML = "<strong>當個小小拆解師</strong><p>選「拆開看看」，再點一個零件。</p>", a.querySelector("aside .il-controls").before(p), t === "car" && (p.innerHTML = "<strong>選個開關玩玩看</strong><p>轉一轉、拆一拆，再試跑！</p>"), t === "clock" && (p.innerHTML = "<strong>☝ 拖動調時</strong><p>⚙ 拆卸 · ☷ 找零件</p>"), a.addEventListener("click", (h) => {
      const l = h.target.closest("button");
      if (l) {
        if (l.dataset.carMode && this.setCarMode(l.dataset.carMode === this.carMode ? "idle" : l.dataset.carMode), l.dataset.view && (this.setMode(l.dataset.view), d.querySelectorAll("[data-view]").forEach((u) => u.setAttribute("aria-pressed", String(u === l))), d.querySelector("[data-mech-explode]").value = this.mode === "explode" ? "100" : "0"), l.dataset.part && this.select(l.dataset.part, a), l.hasAttribute("data-clock-rotate") && (this.clockRotate = !this.clockRotate, l.setAttribute("aria-checked", String(this.clockRotate))), l.hasAttribute("data-clock-explode")) {
          const u = this.mode !== "explode";
          this.setMode(u ? "explode" : "whole"), l.setAttribute("aria-checked", String(u));
        }
        if ((l.hasAttribute("data-clock-rotate") || l.hasAttribute("data-clock-explode")) && (a.querySelector(".clock-switches > span").textContent = this.clockRotate || this.mode === "explode" ? "☝ 拖動旋轉" : "☝ 拖動調時", p.innerHTML = this.mode === "explode" ? "<strong>☷ 找零件</strong><p>點數字，聽聽它的工作。</p>" : this.clockRotate ? "<strong>☝ 拖動旋轉</strong><p>關閉旋轉，就能調時間。</p>" : "<strong>☝ 拖動調時</strong><p>長分針一圈，短時針一格。</p>"), l.hasAttribute("data-clock-zoom")) {
          const u = Number(l.dataset.clockZoom);
          this.zoom = u ? Math.max(0.75, Math.min(1.5, this.zoom + u * 0.15)) : 1, u || (this.yaw = -0.25), this.wake();
        }
      }
    }, { signal: this.abort.signal }), d.addEventListener("input", (h) => {
      const l = h.target;
      l.hasAttribute("data-mech-turn") ? this.yaw = Number(l.value) * Math.PI / 180 : (this.target = Number(l.value) / 100, this.mode = this.target ? "explode" : "whole", d.querySelectorAll("[data-view]").forEach((u) => u.setAttribute("aria-pressed", String(u.dataset.view === this.mode))), this.skins()), this.wake();
    }, { signal: this.abort.signal }), t === "clock" ? this.clock() : this.car(), e.add(this.root), this.skins(), o.addEventListener("pointerdown", (h) => {
      h.button || h.target.closest("button,details") || t === "car" && this.carMode === "idle" || (this.dragYaw = this.yaw, this.dragPull = this.pullValue, this.dragging = { x: h.clientX, minutes: this.minutes, moved: !1 }, o.setPointerCapture(h.pointerId));
    }, { signal: this.abort.signal }), o.addEventListener("pointermove", (h) => {
      if (!this.dragging) return;
      const l = h.clientX - this.dragging.x;
      Math.abs(l) > 5 && (this.dragging.moved = !0), this.dragging.moved && (t === "car" && this.carMode !== "test" || t === "clock" && this.clockRotate ? this.yaw = this.dragYaw + l * 0.01 : this.mode !== "whole" ? this.yaw = Math.max(-1.3, Math.min(1.3, this.dragYaw + l * 0.01)) : t === "clock" ? this.action(Math.max(0, this.dragging.minutes + l / 2), !1) : this.action(Math.max(0.1, Math.min(1, this.dragPull - l / 180)), !1), this.wake());
    }, { signal: this.abort.signal }), o.addEventListener("pointerup", (h) => {
      if (!this.dragging) return;
      const l = this.dragging.moved;
      if (this.dragging = null, o.hasPointerCapture(h.pointerId) && o.releasePointerCapture(h.pointerId), l && this.mode === "whole" && (t === "clock" && !this.clockRotate || this.carMode === "test")) this.action(-1, !0);
      else if (!l) {
        const u = o.getBoundingClientRect(), f = new O();
        f.setFromCamera(new W((h.clientX - u.left) / u.width * 2 - 1, 1 - (h.clientY - u.top) / u.height * 2), s);
        const k = f.intersectObject(this.root, !0);
        for (const q of k) {
          let M = q.object;
          for (; M && !M.userData.partId; ) M = M.parent;
          if (M?.userData.partId) {
            this.select(M.userData.partId, a);
            break;
          }
        }
      }
    }, { signal: this.abort.signal }), o.addEventListener("pointercancel", () => {
      this.dragging = null;
    }, { signal: this.abort.signal });
  }
  kind;
  scene;
  camera;
  stage;
  host;
  wake;
  action;
  root = new v();
  parts = [];
  mode = "whole";
  amount = 0;
  target = 0;
  yaw;
  handMinute = new v();
  handHour = new v();
  gears = [];
  wheels = [];
  spring;
  labelLayer;
  abort = new AbortController();
  selected = "";
  dragging = null;
  minutes = 0;
  textures = [];
  env;
  partInfo;
  seen = /* @__PURE__ */ new Set();
  carMode = "rotate";
  dragYaw = 0;
  pullValue = 0.5;
  dragPull = 0.5;
  clockRotate = !1;
  zoom = 1;
  halo;
  clockPeek = !1;
  rotor = new v();
  compoundTag;
  driveTags = [];
  setCarMode(t) {
    this.kind === "car" && (this.carMode === "test" && t !== "test" && (this.yaw = -0.55), this.dragging = null, this.carMode = t, this.host.dataset.carMode = t, this.setMode(t === "explode" ? "explode" : "whole"), t === "test" && (this.yaw = 0, this.amount = 0), this.root.position.x = t === "test" ? -this.pullValue * 1.8 : 0, this.host.querySelectorAll("[data-car-mode]").forEach((e) => e.setAttribute("aria-checked", String(e.dataset.carMode === t))), this.host.querySelector(".il-live").textContent = t === "test" ? "側面就位！向左拉車，放手出發。" : t === "explode" ? "點零件聽祕密，也能用手轉方向。" : t === "idle" ? "選一個開關，開始探索！" : "用手左右拖，看看車子的每一面。", this.wake());
  }
  material(t, e = 0.1, s = 0.32) {
    return new T({ color: t, metalness: e, roughness: s });
  }
  mesh(t, e, s, o = 0, a = 0, i = 0, r = 0.1) {
    const n = new b(t, this.material(e, r));
    return n.position.set(o, a, i), s.add(n), n;
  }
  box(t, e, s, o, a, i = 0, r = 0, n = 0) {
    return this.mesh(new G(t, e, s, 3, Math.min(t, e, s) * 0.16), o, a, i, r, n);
  }
  disk(t, e, s, o, a = 0, i = 0, r = 0) {
    const n = this.mesh(new w(t, t, e, 64), s, o, a, i, r, 0.4);
    return n.rotation.x = Math.PI / 2, n;
  }
  part(t, e, s, o = !1) {
    const a = new v();
    a.position.fromArray(e), a.userData.partId = t, this.root.add(a);
    const i = document.createElement("button");
    i.type = "button", i.dataset.part = t, i.textContent = String(P[this.kind].findIndex((n) => n[0] === t) + 1), i.setAttribute("aria-label", P[this.kind].find((n) => n[0] === t)[1]), this.labelLayer.append(i);
    const r = document.createElementNS("http://www.w3.org/2000/svg", "line");
    return this.labelLayer.querySelector("svg").append(r), this.parts.push({ id: t, group: a, home: new g(...e), away: new g(...this.kind === "clock" ? yt[t] : s), skin: o, button: i, line: r }), a;
  }
  gear(t, e, s, o, a, i, r = 14265434) {
    const n = new v();
    n.position.set(o, a, i), s.add(n);
    const d = new E();
    for (let h = 0; h < e * 4; h++) {
      const l = h * Math.PI * 2 / (e * 4), u = t * (h % 4 === 0 || h % 4 === 3 ? 0.9 : 1.05), f = Math.cos(l) * u, k = Math.sin(l) * u;
      h ? d.lineTo(f, k) : d.moveTo(f, k);
    }
    d.closePath();
    const c = this.kind === "clock" && e >= 36, p = new st();
    if (p.absarc(0, 0, t * (c ? 0.68 : 0.16), 0, Math.PI * 2, !0), d.holes.push(p), this.mesh(new A(d, { depth: this.kind === "clock" ? 0.05 : 0.12, bevelEnabled: !0, bevelSize: 8e-3, bevelThickness: 8e-3, bevelSegments: 2 }), r, n, 0, 0, 0, 0.65), c) for (let h = 0; h < 3; h++) {
      const l = h * Math.PI * 2 / 3, u = this.box(0.035, t * 0.62, 0.08, r, n, Math.sin(l) * t * 0.43, Math.cos(l) * t * 0.43, 0.06);
      u.rotation.z = -l;
    }
    return this.disk(t * 0.16, 0.21, 14083563, n, 0, 0, 0.05), this.gears.push(n), n;
  }
  clock() {
    const t = this.part("case", [0, 0, -0.2], [-2.6, 0.35, -1.1], !0);
    this.disk(1.8, 0.5, 2847620, t), this.mesh(new x(1.7, 0.15, 16, 96), 12758396, t, 0, 0, 0.32, 0.8), this.box(0.3, 0.65, 0.5, 2847620, t, -0.95, -1.7), this.box(0.3, 0.65, 0.5, 2847620, t, 0.95, -1.7);
    const e = this.part("glass", [0, 0, 0.7], [3.3, 0.3, 1.4], !0), s = this.disk(1.62, 0.045, 14087679, e);
    s.material.transparent = !0, s.material.opacity = 0.1, s.material.depthWrite = !1, this.mesh(new x(1.64, 0.035, 12, 96), 10470606, e, 0, 0, 0, 0.7);
    const o = this.part("dial", [0, 0, 0.45], [1.5, 0.2, 0.8], !0), a = document.createElement("canvas");
    a.width = 1024, a.height = 1024;
    const i = a.getContext("2d");
    i.translate(512, 512);
    for (let u = 0; u < 60; u++)
      i.save(), i.rotate(u * Math.PI / 30), i.fillStyle = "#26444a", i.fillRect(-2, -465, 4, u % 5 === 0 ? 32 : 13), i.restore();
    i.font = "600 72px system-ui", i.textAlign = "center", i.textBaseline = "middle", i.fillStyle = "#234752";
    for (let u = 1; u <= 12; u++) {
      const f = u * Math.PI / 6;
      i.fillText(String(u), Math.sin(f) * 372, -Math.cos(f) * 372);
    }
    i.font = "20px system-ui", i.fillText("QUARTZ", 0, 220);
    const r = new at(a);
    r.colorSpace = it, this.textures.push(r), this.mesh(new I(1.6, 96), 16314847, o, 0, 0, -6e-3);
    const n = this.mesh(new I(1.6, 96), 16777215, o);
    n.name = "clock-marks", n.material.map = r, n.material.roughness = 0.7, n.material.side = B;
    const d = this.part("hands", [0, 0, 0.57], [2.6, -0.2, 1.1]);
    d.add(this.handMinute, this.handHour), this.box(0.075, 1.31, 0.04, 1412768, this.handMinute, 0, 0.55, 0.07), this.box(0.13, 0.92, 0.05, 11633717, this.handHour, 0, 0.34, 0.02), this.disk(0.1, 0.12, 15056229, d, 0, 0, 0.13);
    const c = this.part("gears", [0, 0, 0.08], [0.05, 0.5, 0.1]);
    this.gear(0.2, 12, c, 0, 0, 0.19, 2212059), this.gear(0.6, 36, c, 0.8, 0, 0.19, 15254129), this.gear(0.16, 10, c, 0.8, 0, -0.04, 15254129), this.compoundTag = document.createElement("span"), this.compoundTag.className = "clock-compound-tag", this.compoundTag.textContent = "10T · 同軸", this.stage.append(this.compoundTag), this.gear(0.64, 40, c, 0, 0, -0.04, 15116615), this.disk(0.055, 0.45, 13490664, c, 0.8, 0, 0.1);
    const p = this.part("motor", [-1.08, -1.16, 0.04], [-1.5, -1.25, 0.35]);
    this.box(0.5, 0.22, 0.2, 12019250, p);
    for (let u = 0; u < 16; u++) this.mesh(new x(0.12, 0.01, 6, 20), 15049082, p, -0.23 + u * 0.03, 0, 0, 0.8).rotation.y = Math.PI / 2;
    this.disk(0.16, 0.08, 9870758, p, 0, 0.2, -0.43), xt.forEach((u, f) => {
      f === 0 ? this.gear(u.r, u.teeth, p, 0, 0.2, -0.38, 7860157) : this.gear(u.r, u.teeth, c, u.x, u.y, u.z, 7860157);
    });
    for (const u of ["馬達12T", "36T", "48T", "60T"]) {
      const f = document.createElement("span");
      f.className = "clock-compound-tag clock-drive-tag", f.textContent = u, this.stage.append(f), this.driveTags.push(f);
    }
    for (const [u, f, k, q] of [[-1.08, -0.48, -0.31, 0.28], [-0.72, 0, -0.09, 0.28], [0, 0, 0.1, 0.26]]) this.disk(0.025, q, 13490664, c, u, f, k);
    this.disk(0.025, 0.4, 13490664, c, 0, 0, 0.39), this.mesh(new w(0.045, 0.045, 0.54, 24, 1, !0), 13490664, c, 0, 0, 0.24).rotation.x = Math.PI / 2;
    const h = this.part("quartz", [0.45, -0.75, 0.05], [0.35, -1.5, 0.2]);
    this.box(0.72, 0.46, 0.06, 2980194, h), this.box(0.22, 0.18, 0.07, 2237738, h, -0.08, 0, 0.06), this.box(0.14, 0.3, 0.1, 12895943, h, 0.23, 0, 0.07), this.rotor.position.set(0, 0.2, -0.28), p.add(this.rotor), this.box(0.22, 0.03, 0.025, 16575637, this.rotor), this.box(0.03, 0.22, 0.025, 16575637, this.rotor);
    const l = this.part("battery", [0, -1.25, -0.48], [-2.6, -1.6, -0.1]);
    this.mesh(new w(0.19, 0.19, 1.25, 32), 13351808, l, 0, 0, 0, 0.6).rotation.z = Math.PI / 2, this.mesh(new w(0.2, 0.2, 0.27, 32), 2371136, l, 0.47, 0, 0).rotation.z = Math.PI / 2, this.mesh(new w(0.09, 0.09, 0.05, 16), 14278628, l, -0.65, 0, 0, 0.8).rotation.z = Math.PI / 2;
  }
  car() {
    const t = this.part("shell", [0, 0.4, 0], [0, 1.9, -0.1], !0);
    gt(t);
    const e = this.part("chassis", [0, 0.25, 0], [0, -1.2, 0]);
    this.box(3.7, 0.16, 1.38, 3883338, e);
    for (const c of [-1.3, 1.3]) for (const p of [-0.52, 0.52])
      this.disk(0.075, 0.09, 14146270, e, c, 0.05, p).rotation.x = 0;
    const s = this.part("wheels", [0, 0, 0], [0, -0.35, 0]);
    for (const c of [-1.18, 1.18]) for (const p of [-0.88, 0.88]) {
      const h = new v();
      h.position.set(c, 0.06, p), h.userData.side = p < 0 ? -1 : 1, s.add(h), this.mesh(new x(0.36, 0.145, 16, 48), 2106923, h).scale.z = 1.2, this.disk(0.28, 0.19, 12174797, h), this.disk(0.235, 0.2, 2438206, h), this.disk(0.09, 0.25, 13359326, h);
      const l = p > 0 ? 0.13 : -0.13;
      this.mesh(new x(0.27, 0.022, 8, 40), 14870763, h, 0, 0, l, 0.8);
      for (let u = 0; u < 5; u++) {
        const f = u * Math.PI * 2 / 5, k = this.box(0.048, 0.17, 0.035, 14542313, h, Math.sin(f) * 0.165, Math.cos(f) * 0.165, l);
        k.rotation.z = -f;
      }
      this.wheels.push(h);
    }
    const o = this.part("axles", [0, 0.07, 0], [0, -0.58, 0]);
    for (const c of [-1.18, 1.18]) this.disk(0.07, 1.83, 13488855, o, c, 0, 0);
    const a = this.part("housing", [-0.65, 0.5, 0], [-0.95, 0.7, -1.7], !0);
    this.box(1.25, 0.65, 0.8, 14801605, a);
    const i = this.part("spring", [-0.58, 0.52, 0.1], [-1.8, 0.6, 1.1]), r = Array.from({ length: 300 }, (c, p) => {
      const h = p * 0.18, l = 0.035 + p * 1e-3;
      return new g(Math.cos(h) * l, Math.sin(h) * l, 0);
    });
    this.spring = this.mesh(new N(new D(r), 300, 0.022, 6, !1), 12108750, i, 0, 0, 0, 0.8);
    const n = this.part("gears", [-0.83, 0.45, 0.36], [0.3, 0.3, 1.2]);
    this.gear(0.27, 18, n, -0.2, 0, 0), this.gear(0.16, 10, n, 0.22, 0, 0.01), this.gear(0.25, 16, n, 0.6, 0, 0.01);
    const d = this.part("clutch", [-1.18, 0.2, 0.45], [1.8, 0.35, 1.1]);
    this.gear(0.2, 10, d, 0, 0, 0, 15848854), this.box(0.24, 0.07, 0.08, 12041153, d, 0.25, 0.05, 0.15);
  }
  setMode(t) {
    this.mode = t, this.target = t === "explode" ? 1 : 0, t !== "whole" && (this.root.position.x = 0), this.skins(), this.wake();
  }
  skins() {
    this.parts.forEach((t) => t.group.traverse((e) => {
      if (e instanceof b) {
        const s = e.material, o = t.id === "glass";
        s.transparent = o || this.mode === "xray" && t.skin, s.opacity = o ? 0.1 : this.mode === "xray" && t.skin ? 0.13 : 1, s.depthWrite = !s.transparent;
      }
    })), this.clockPeek && this.parts.filter((t) => t.skin).forEach((t) => t.group.traverse((e) => {
      if (e instanceof b) {
        const s = e.material;
        s.transparent = !0, s.opacity = t.id === "case" ? 0.08 : 0, s.depthWrite = !1;
      }
    })), this.parts.forEach((t) => t.group.traverse((e) => {
      if (e instanceof b && e.name === "clock-marks") {
        const s = e.material;
        s.transparent = !0, s.opacity = 1, s.depthWrite = !1, this.clockPeek ? (s.emissive.setHex(16777215), s.emissiveMap = s.map, s.emissiveIntensity = 3) : (s.emissive.setHex(0), s.emissiveIntensity = 0);
      }
    })), this.parts.forEach((t) => t.group.traverse((e) => {
      e instanceof b && (e.material.needsUpdate = !0);
    }));
  }
  select(t, e) {
    this.kind === "car" && this.mode === "whole" && !["shell", "wheels"].includes(t) && this.setCarMode("explode"), this.selected = t, this.seen.add(t);
    const s = P[this.kind].find((o) => o[0] === t);
    this.partInfo.innerHTML = `<strong>${s[1]}</strong><p>${s[2]}</p><small>${s[3]}</small>`, e.querySelector(".mech-quick-info").innerHTML = `<strong>${s[1]}</strong><p>${s[2]}</p>`, e.querySelector("[data-discovered]").textContent = `${this.seen.size} / 8`, e.querySelectorAll("[data-part]").forEach((o) => o.setAttribute("aria-pressed", String(o.dataset.part === t))), this.kind === "clock" && this.mode === "whole" && !["case", "glass", "dial", "hands"].includes(t) && (e.querySelector(".mech-quick-info").innerHTML += "<p>在鐘殼裡，打開「拆卸」找找看。</p>"), this.kind === "car" && this.parts.forEach((o) => o.group.traverse((a) => {
      if (a instanceof b) {
        const i = a.material;
        i.emissive.setHex(o.id === t ? 1461081 : 0), i.emissiveIntensity = o.id === t ? 0.5 : 0;
      }
    })), this.wake();
  }
  setClock(t) {
    this.minutes = t;
    const e = F(t), s = z(t);
    this.handMinute.rotation.z = e[0], this.handHour.rotation.z = e[3];
    const o = [...e, s.motor, s.first, s.first, s.second, s.second, s.minute];
    this.gears.forEach((a, i) => a.rotation.z = o[i]), this.rotor.rotation.z = s.motor;
  }
  setClockDemo(t) {
    if (this.host.dataset.clockDemo = String(t), t) {
      this.setMode("whole"), this.amount = 0, this.yaw = 0, this.zoom = 1, this.clockRotate = !1, this.selected = "", this.host.querySelectorAll("[data-clock-rotate],[data-clock-explode]").forEach((s) => s.setAttribute("aria-checked", "false")), this.host.querySelectorAll("[data-part]").forEach((s) => s.setAttribute("aria-pressed", "false"));
      const e = this.stage.querySelector(".mech-bom");
      e && (e.open = !1);
    }
    t ? this.setClockPeek(!0) : (this.skins(), this.wake());
  }
  setClockPeek(t) {
    this.clockPeek = t, this.host.dataset.clockPeek = String(t);
    const e = this.host.querySelector('[data-action="peek"]');
    e?.setAttribute("aria-pressed", String(t)), e?.setAttribute("aria-label", t ? "關閉透視刻度盤" : "透視刻度盤"), this.skins(), this.wake();
  }
  setCar(t, e = 0, s = !1) {
    this.pullValue = t, this.root.position.x = this.carMode === "test" ? -t * 1.8 + e : 0, this.wheels.forEach((o) => o.rotation.z = s ? -e / 0.5 : t * 4), this.spring && this.spring.scale.setScalar(1 - 0.25 * t), this.gears.forEach((o, a) => o.rotation.z = (s ? e * 4 : t * 6) * (a % 2 ? -1 : 1));
  }
  frame(t) {
    this.amount += (this.target - this.amount) * Math.min(1, t * 9), Math.abs(this.amount - this.target) < 1e-3 && (this.amount = this.target), this.root.rotation.set(this.kind === "car" ? this.carMode === "test" ? 0 : 0.24 : 0.03, this.yaw, 0);
    const e = this.stage.clientWidth, s = this.stage.clientHeight;
    if (e && s) {
      const a = this.kind === "clock" && this.stage.querySelector(".mech-bom[open]") ? 260 : 0, i = this.kind === "clock" ? this.stage.querySelector(".clock-transmission[open]") : null, r = i ? i.offsetWidth + 20 : 0, n = this.kind === "clock" ? 2.6 + this.amount * 3.3 : this.carMode === "test" ? 5.8 : 3.3 + this.amount * 1.4, d = Math.max(this.kind === "clock" ? 2.45 + this.amount * 0.9 : 2.35 + this.amount * 0.95, n * s / Math.max(280, e - a - r)) / (this.zoom || 1), c = d * e / s, p = this.kind === "car" ? this.carMode === "test" ? -0.445 + 0.28 * d : 0.45 : 0, h = c * (a - r) / e;
      this.camera.left = -c + h, this.camera.right = c + h, this.camera.top = d + p, this.camera.bottom = -d + p, this.camera.updateProjectionMatrix();
    }
    if (this.parts.forEach((a) => {
      a.group.position.copy(a.home).lerp(a.away, this.amount), a.id === "wheels" && a.group.children.forEach((i) => {
        i.position.z = (i.userData.side || 1) * (0.88 + this.amount * 0.75);
      });
    }), this.root.updateMatrixWorld(!0), this.driveTags?.forEach((a, i) => {
      a.hidden = !this.clockPeek && this.mode !== "explode";
      const r = this.gears[[4, 5, 7, 9][i]].getWorldPosition(new g()).project(this.camera), n = [[-25, 18], [-55, -22], [-55, -35], [15, -48]];
      a.style.left = `${(r.x + 1) * e / 2 + n[i][0]}px`, a.style.top = `${(1 - r.y) * s / 2 + n[i][1]}px`;
    }), this.compoundTag) {
      this.compoundTag.hidden = !this.clockPeek && this.mode !== "explode";
      const a = this.gears[2].getWorldPosition(new g()).project(this.camera);
      this.compoundTag.style.left = `${(a.x + 1) * e / 2 + 14}px`, this.compoundTag.style.top = `${(1 - a.y) * s / 2 + 14}px`;
    }
    if (this.halo) {
      const a = this.parts.find((i) => i.id === this.selected);
      if (this.halo.hidden = !a || this.mode === "whole" && !["case", "glass", "dial", "hands"].includes(this.selected), a) {
        const i = new ot().setFromObject(a.group), r = [];
        for (const c of [i.min.x, i.max.x]) for (const p of [i.min.y, i.max.y]) for (const h of [i.min.z, i.max.z]) {
          const l = new g(c, p, h).project(this.camera);
          r.push({ x: (l.x + 1) * e / 2, y: (1 - l.y) * s / 2 });
        }
        const n = Math.min(...r.map((c) => c.x)) - 8, d = Math.min(...r.map((c) => c.y)) - 8;
        Object.assign(this.halo.style, { left: `${n}px`, top: `${d}px`, width: `${Math.max(...r.map((c) => c.x)) - n + 8}px`, height: `${Math.max(...r.map((c) => c.y)) - d + 8}px` });
      }
    }
    const o = [];
    return this.parts.forEach((a) => {
      const i = a.group.getWorldPosition(new g()).project(this.camera), r = { x: (i.x + 1) * e / 2, y: (1 - i.y) * s / 2 }, d = [[0, 0], [40, 0], [-40, 0], [0, 40], [0, -40], [40, 40], [-40, -40], [60, -40], [-60, 40], [0, 80]].map(([c, p]) => ({ x: Math.max(20, Math.min(e - 20, r.x + c)), y: Math.max(20, Math.min(s - 20, r.y + p)) })).find((c) => o.every((p) => Math.hypot(p.x - c.x, p.y - c.y) > 37)) || r;
      a.button.hidden = this.mode !== "explode" && a.id !== this.selected, a.button.hidden || o.push(d), a.button.style.left = `${d.x}px`, a.button.style.top = `${d.y}px`, a.button.classList.toggle("selected", a.id === this.selected), a.line.setAttribute("x1", String(r.x)), a.line.setAttribute("y1", String(r.y)), a.line.setAttribute("x2", String(d.x)), a.line.setAttribute("y2", String(d.y)), a.line.style.display = a.button.hidden ? "none" : "";
    }), this.amount !== this.target;
  }
  destroy() {
    this.abort.abort(), this.textures.forEach((t) => t.dispose()), this.env?.dispose(), this.scene.environment = null;
  }
}
function Mt(m) {
  const t = F(m);
  return { minute: Math.abs(t[0]) / (2 * Math.PI), compound: Math.abs(t[1]) / (2 * Math.PI), hour: Math.abs(t[3]) / (2 * Math.PI) };
}
const V = (m) => m >= 0.999999 ? String(Math.round(m)) : `1/${Math.round(1 / m)}`;
function St(m) {
  return Object.values(Mt(m)).map(V);
}
function Ct(m) {
  return Object.values(z(m)).map((t) => V(Math.abs(t) / (2 * Math.PI)));
}
const Tt = (m, t) => `<svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="17" fill="${m}" stroke="${m}" stroke-width="8" stroke-dasharray="5 4"/><circle cx="24" cy="24" r="7" fill="#102740"/><text x="24" y="28" text-anchor="middle" fill="white" font-size="11">${t}</text></svg>`, y = (m, t, e, s, o) => `<div class="ct-row">${Tt(m, t)}<div>${e}<strong ${o}>${s} RPM</strong></div></div>`, Et = '<svg viewBox="0 0 32 32" aria-hidden="true"><rect x="4" y="9" width="20" height="15" rx="5" fill="#d49364" stroke="#fff"/><path d="M24 16h5M9 10v13m4-13v13m4-13v13" stroke="#ffe6a2" stroke-width="2"/><path d="M9 26h12" stroke="white" stroke-width="2"/></svg>', $t = '<svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="12" fill="#122c49" stroke="#fff" stroke-width="2"/><path d="M16 16V6" stroke="#72e8f6" stroke-width="3" stroke-linecap="round"/><path d="M16 16l6 4" stroke="#ffe09b" stroke-width="3" stroke-linecap="round"/><circle cx="16" cy="16" r="2" fill="white"/></svg>';
function Pt() {
  return `<details class="clock-transmission" open><summary aria-label="收折或展開轉速圖解">⚙ 轉速圖解 <span>⌃</span></summary><div class="ct-body"><div class="ct-tools"><button data-rpm-speed="1" aria-label="正常速度播放" title="正常速度播放" aria-pressed="false">1×</button><button data-rpm-speed="60" aria-label="60倍速播放" title="60倍速播放" aria-pressed="true">60×</button><button data-drive-page="motor" aria-label="馬達輪系" title="馬達轮系" aria-pressed="true">${Et}</button><button data-drive-page="hands" aria-label="指針輪系" title="指針輪系" aria-pressed="false">${$t}</button><button data-rpm-read aria-label="朗讀轉速圖解" title="朗讀">🔊</button></div><div data-drive-section="motor">${y("#77efbd", "12", "↺ 馬達 · 12T", "60", "data-drive-rpm")}<div class="ct-link">↓ 慢 3 倍</div>${y("#77efbd", "36", "↻ 36T／同軸12T", "20", "data-drive-rpm")}<div class="ct-link">↓ 再慢 4 倍</div>${y("#77efbd", "48", "↺ 48T／同軸12T", "5", "data-drive-rpm")}<div class="ct-link">↓ 再慢 5 倍</div>${y("#77efbd", "60", "↻ 60T → 長分針", "1", "data-drive-rpm")}</div><div data-drive-section="hands" hidden>${y("#52c9d7", "12", "↻ 長分針 · 12T", "1", "data-rpm")}<div class="ct-link">↓ 慢 3 倍 · 反方向</div>${y("#dcbd69", "36", "↺ 36T／同軸10T", "1/3", "data-rpm")}<div class="ct-link">↓ 再慢 4 倍 · 反方向</div>${y("#e2a954", "40", "↻ 短時針 · 40T", "1/12", "data-rpm")}</div><footer>馬達 60 圈＝長針 1 圈<small>長針 12 圈＝短針 1 圈<br>1× 正常走；60× 一分鐘看完一小時。<br>RPM＝每分鐘圈數 · 教學輪系，非品牌機芯。</small><span class="ct-progress"><span data-demo-speed>60×</span> · 已走 <span data-demo-seconds>0分00秒</span> / 1小時</span></footer></div></details>`;
}
class zt {
  constructor(t, e) {
    this.host = t, this.kind = e;
    const s = L[e];
    t.innerHTML = `<div class="il-layout"><section class="il-scene-panel"><div class="il-stage" role="img" aria-label="${s.title}互動場景"></div><p class="il-live" role="status" aria-live="polite">${s.objective}</p></section><aside class="il-panel"><p class="il-kicker">EXPERIMENT PLANET · 互動探索</p><h2>${s.title}</h2><p>${s.objective}</p><div class="il-controls"></div><button type="button" data-action="reset">↺ 重置目前操作</button><details><summary>模型說明</summary><p>${e === "buoyancy" ? "淡水、無水流的簡化模型。物件為示意比例，數值是教學樣本，不是所有同類物品的測量值。浮在水面時，浮力和重量平衡；沉底的物體也受到浮力。" : e === "clock" ? "這是指針與齒輪的傳動示意，不是完整鐘錶內部結構。相鄰外齒輪反向轉動；時針与分針由多級齒輪傳動形成 12:1 的轉速關係。石英鐘通常由電池與馬達驅動，機械鐘另有發條或重錘。" : "這是彈簧式回力車的簡化模型：往後拉 → 齒輪使彈簧儲能 → 放手帶動輪軸 → 摩擦使它停下。行駛距離為模型單位，不代表真實車款的公尺數。"}</p></details></aside></div><section class="il-panel il-observations"><h3>觀察紀錄 <span data-count>0 次</span></h3><p>每次只改一個條件，比較結果。紀錄保留於本次實驗，離開後重新開始。</p><ol class="il-log"></ol></section><section class="il-panel il-assessment"><h3>想一想</h3><p>${s.question}</p><div class="il-answers">${s.choices.map((i, r) => `<button type="button" data-answer="${r}">${i}</button>`).join("")}</div><p class="il-feedback" role="status">先完成至少一次操作與觀察，再回答。</p></section>`, this.stage = t.querySelector(".il-stage"), this.status = t.querySelector(".il-live"), this.log = t.querySelector(".il-log");
    const o = document.createElement("p");
    if (o.className = "il-scene-guide", o.textContent = e === "buoyancy" ? "選物品 → 預測 → 放入水中 → 比較浮沉" : e === "clock" ? "左：指針比例 12:1 ｜ 右：外齒輪反向傳動示意" : "向左回拉 → 彈簧儲能 → 放手帶動輪軸", this.stage.append(o), t.querySelector(".il-controls").innerHTML = e === "buoyancy" ? `<label>① 選物品<select data-input="object">${$.map((i, r) => `<option value="${r}">${i.name}</option>`).join("")}</select></label><p data-sample></p><label>② 先預測<select data-input="prediction"><option value="">請選擇</option><option value="float">浮在水面</option><option value="sink">沉到水底</option><option value="unsure">還不確定</option></select></label><button type="button" data-action="run">③ 放入水中</button><p>也可拖動物品，放手入水。可重複測試，猜錯也能學習。</p>` : e === "clock" ? '<label>轉動分針（分鐘）<input data-input="minutes" type="range" min="0" max="720" step="1" value="0"></label><p data-readout>12:00</p><button type="button" data-action="step">分針前進一圈（60 分鐘）</button><button type="button" data-action="run">▶ 播放／暫停</button><button type="button" data-action="record">記錄目前時間</button><p>可拖曳鐘面指針；滑桿與按鈕也能操作。</p>' : '<label>① 向後拉多少<input data-input="pull" type="range" min="10" max="100" step="10" value="50"></label><p data-readout>回拉量 50%</p><label>② 路面<select data-input="surface"><option value="smooth">較平滑</option><option value="rough">較粗糙</option></select></label><button type="button" data-action="run">③ 放手出發</button><p>也可把車向左拖，放手前進。比較同一回拉量在不同路面的結果。</p>', e === "car") {
      const i = document.createElement("div");
      i.className = "bp-heading", i.innerHTML = "<h2>回力車工坊</h2>", t.querySelector(".il-scene-panel").prepend(i), t.dataset.road = "smooth", t.querySelector(".il-controls").innerHTML = '<input type="hidden" data-input="pull" value="50"><div class="car-roads" role="group" aria-label="選擇路面"><button data-road="smooth" aria-pressed="true" aria-label="平路"><svg viewBox="0 0 100 60" aria-hidden="true"><path d="M8 55 30 5h40l22 50" fill="#547990"/><path d="M50 12v9m0 8v9m0 8v8" stroke="#fff3bb" stroke-width="4"/></svg><span>平路</span></button><button data-road="rough" aria-pressed="false" aria-label="石頭路"><svg viewBox="0 0 100 60" aria-hidden="true"><path d="M8 55 30 5h40l22 50" fill="#675852"/><g fill="#d1b99a" stroke="#8c7664"><path d="m25 37 8-8 12 5-3 11-15 2Z"/><path d="m56 17 8-5 9 7-5 8-12-2Z"/><path d="m52 43 8-10 16 5 3 14-21 3Z"/><path d="m38 15 8-7 6 8-4 9-12-1Z"/></g></svg><span>石頭路</span></button></div><p data-readout>回拉量 50%</p><div class="car-force" role="group" aria-label="回拉力量"><button data-force=".25" aria-label="小力回拉">●</button><button data-force=".5" aria-label="中力回拉">●●</button><button data-force="1" aria-label="大力回拉">●●●</button></div><button data-action="run">🏁 出發</button><p>打開旋轉，用手拖動。打開拆卸，點零件。打開拉力，鏡頭自動轉側面、拉遠；向左拉車，放手出發。也可點圓點選力量，再點出發。</p>';
      const r = document.createElement("div");
      r.className = "car-track", r.setAttribute("aria-hidden", "true"), this.stage.append(r), pt(t);
    }
    if (e === "clock") {
      t.classList.add("il-clock-play");
      const i = document.createElement("div");
      i.className = "bp-heading", i.innerHTML = "<h2>時鐘工坊</h2>", t.querySelector(".il-scene-panel").prepend(i), t.querySelector(".il-controls").innerHTML = '<input type="hidden" data-input="minutes" value="0"><p data-readout>12:00</p><button data-action="step" aria-label="分針前進一圈，時針前進一大格">⟳ <span>+1 時</span></button><button data-action="run" aria-label="播放或暫停指針">▶ / Ⅱ</button><button data-action="record" aria-label="記錄目前時間">📒</button><p>調時時，左右拖動鐘面調整時間。打開旋轉開關，用手轉方向；打開拆卸，點右上零件表找零件。</p>';
      const r = t.querySelector('[data-action="reset"]');
      r.textContent = "↺", r.setAttribute("aria-label", "重新開始"), t.querySelector('[data-action="run"]').insertAdjacentHTML("afterend", '<button data-action="peek" aria-label="透視刻度盤" title="透視刻度盤" aria-pressed="false"><svg viewBox="0 0 32 24" width="32" height="24" aria-hidden="true"><path d="M2 12Q16-5 30 12Q16 29 2 12Z" fill="none" stroke="currentColor" stroke-width="2.5"/><circle cx="16" cy="12" r="5" fill="currentColor"/></svg></button>'), this.stage.insertAdjacentHTML("beforeend", Pt()), this.stage.querySelector(".clock-transmission").addEventListener("toggle", () => this.wake(), { signal: this.abort.signal });
      const n = (d) => `<svg viewBox="0 0 160 160" role="img" aria-label="${d}點"><circle cx="80" cy="80" r="70" fill="#fff5db" stroke="#cba85c" stroke-width="7"/>${Array.from({ length: 12 }, (c, p) => `<circle cx="${80 + 59 * Math.sin(p * Math.PI / 6)}" cy="${80 - 59 * Math.cos(p * Math.PI / 6)}" r="3" fill="#294651"/>`).join("")}<path d="M80 80V25" stroke="#168ba8" stroke-width="6" stroke-linecap="round"/><path d="M80 80L${80 + 36 * Math.sin(d * Math.PI / 6)} ${80 - 36 * Math.cos(d * Math.PI / 6)}" stroke="#a47818" stroke-width="9" stroke-linecap="round"/><circle cx="80" cy="80" r="6" fill="#294651"/></svg>`;
      t.querySelector(".il-assessment > p").innerHTML = `<span class="clock-question">${n(12)}<span aria-label="分針前進一圈">⟳ → ?</span></span>`, t.querySelector(".il-assessment h3").textContent = "分針一圈，時針？", t.querySelector(".il-answers").innerHTML = [12, 12, 1].map((d, c) => `<button data-answer="${c}" aria-label="${s.choices[c]}">${n(d).replace("</svg>", c === 0 ? '<path d="M92 38A44 44 0 1 1 69 37M65 29 70 39 59 43" fill="none" stroke="#b07e16" stroke-width="5" stroke-linecap="round"/></svg>' : c === 2 ? '<path d="M80 37A43 43 0 0 1 102 43" fill="none" stroke="#b07e16" stroke-width="6"/></svg>' : "</svg>")}<span>${c === 0 ? "⟳ 一圈" : c === 1 ? "不動" : "一大格"}</span></button>`).join("");
    }
    t.addEventListener("click", this.click, { signal: this.abort.signal }), t.addEventListener("input", this.input, { signal: this.abort.signal }), this.camera.position.set(0, 0, 12), this.scene.add(new rt(16777215, e === "buoyancy" ? 2 : 0.45));
    const a = new nt(16777215, e === "buoyancy" ? 3 : 1.4);
    a.position.set(-3, 5, 8), this.scene.add(a);
    try {
      this.renderer = new ct({ alpha: !0, antialias: !0 }), this.renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5)), this.stage.append(this.renderer.domElement), e === "buoyancy" && (this.stage.addEventListener("pointerdown", this.pointerDown, { signal: this.abort.signal }), this.stage.addEventListener("pointermove", this.pointerMove, { signal: this.abort.signal }), this.stage.addEventListener("pointerup", this.pointerUp, { signal: this.abort.signal }), this.stage.addEventListener("pointercancel", this.pointerCancel, { signal: this.abort.signal })), this.resize = new ResizeObserver(() => this.resizeScene()), this.resize.observe(this.stage);
    } catch {
      this.stage.innerHTML = '<p class="il-fallback">此裝置無法顯示 3D。仍可使用旁邊的選單與按鈕操作，並閱讀文字觀察結果。</p>';
    }
    e === "buoyancy" && this.buildTank(), e !== "buoyancy" && (this.mechanism = new wt(e, this.scene, this.camera, this.stage, t, this.renderer, () => this.wake(), (i, r) => {
      this.active = !1, e === "clock" ? (this.demoStarted = !1, this.mechanism?.setClockDemo(!1), r || (this.minutes = i), this.updateClock(), r && this.record(`轉動指針到 ${this.clockText()}，分針和時針一起運動。`)) : r ? this.run() : (this.pull = i, t.querySelector('[data-input="pull"]').value = String(Math.round(i * 100)), this.updateCar());
    })), e !== "buoyancy" && (t.querySelector("aside > details > p").textContent = e === "clock" ? "常見的電池式石英鐘：電池供电，石英與電路提供節拍，馬達和多級齒輪帶動指針。本模型省略部分細小零件，不是維修圖。分針和時針保持 12:1 的轉速關係。" : "彈簧式回力車：回拉讓輪軸、齒輪帶動捲簧儲能，放手後由捲簧驅動車輪。拆解圖省略部分緊固件；行駛距離為教學模型單位，不代表真實車款。"), this.scene.add(this.object), this.reset(), this.experience = new ft(t, e), document.addEventListener("visibilitychange", () => {
      this.last = 0, document.hidden || this.wake();
    }, { signal: this.abort.signal }), this.wake();
  }
  host;
  kind;
  renderer;
  scene = new R();
  camera = new ht(-5, 5, 3.6, -3.6, 0.1, 100);
  object = new v();
  mechanism;
  experience;
  abort = new AbortController();
  resize;
  frame = 0;
  last = 0;
  dead = !1;
  active = !1;
  dragging = !1;
  selected = 0;
  prediction = "";
  targetY = 0;
  minutes = 0;
  demoElapsed = 0;
  demoStarted = !1;
  demoCue = -1;
  clockSpeed = 60;
  pull = 0.5;
  rough = !1;
  travel = 0;
  runDistance = 0;
  runElapsed = 0;
  records = 0;
  tested = /* @__PURE__ */ new Set();
  stage;
  status;
  log;
  answerReady = !1;
  mesh(t, e, s = 0, o = 0, a = 0, i = this.scene) {
    const r = new b(t, new T({ color: e, roughness: 0.55, metalness: 0.12 }));
    return r.position.set(s, o, a), i.add(r), r;
  }
  box(t, e, s, o, a, i, r = 0, n) {
    return this.mesh(new H(t, e, s), o, a, i, r, n);
  }
  buildTank() {
    this.box(8.1, 0.12, 0.4, 9233663, 0, -2.65), this.box(0.12, 4.8, 0.4, 9233663, -4, -0.3), this.box(0.12, 4.8, 0.4, 9233663, 4, -0.3);
    const t = this.box(7.9, 2.7, 0.1, 1142430, 0, -1.2, -0.8);
    t.material.transparent = !0, t.material.opacity = 0.55, this.box(7.9, 0.045, 0.1, 8252159, 0, 0.15, 0.1);
    for (let e = 0; e < 6; e++) this.box(0.2, 0.035, 0.1, 16777215, -3.85, -2.3 + e * 0.45, 0.2);
  }
  disposeObject(t) {
    t.traverse((e) => {
      e instanceof b && (e.geometry.dispose(), (Array.isArray(e.material) ? e.material : [e.material]).forEach((o) => o.dispose()));
    });
  }
  buildSample() {
    this.disposeObject(this.object), this.object.clear();
    const t = $[this.selected];
    if (t.id === "stone" && this.mesh(new lt(0.48), t.color, 0, 0, 0, this.object).scale.set(1.25, 0.8, 0.8), t.id === "key" && (this.mesh(new x(0.25, 0.09, 10, 32), t.color, -0.35, 0.05, 0, this.object), this.box(0.85, 0.12, 0.13, t.color, 0.25, 0.05, 0, this.object), this.box(0.12, 0.25, 0.13, t.color, 0.5, -0.08, 0, this.object), this.box(0.12, 0.2, 0.13, t.color, 0.25, -0.05, 0, this.object)), t.id === "boat") {
      const e = new E();
      e.moveTo(-0.9, 0.1), e.lineTo(0.9, 0.1), e.lineTo(0.5, -0.35), e.lineTo(-0.5, -0.35), e.closePath(), this.mesh(new A(e, { depth: 0.4, bevelEnabled: !1 }), t.color, 0, 0, -0.2, this.object);
      const s = new E();
      s.moveTo(-0.5, 0.1), s.lineTo(0, 0.7), s.lineTo(0.5, 0.1), s.closePath(), this.mesh(new dt(s), 16763523, 0, 0, 0.23, this.object);
    }
    if (t.id === "ball")
      for (let e = 0; e < 6; e++) this.mesh(new C(0.7, 12, 24, e * Math.PI / 3, Math.PI / 3), [16741007, 16777215, 6015987, 16777215, 16766045, 16777215][e], 0, 0, 0, this.object);
    t.id === "wood" && this.box(1.1, 0.65, 0.5, t.color, 0, 0, 0, this.object), t.id === "cork" && (this.mesh(new w(0.25, 0.25, 0.7, 24), t.color, 0, 0, 0, this.object).rotation.z = Math.PI / 2), t.id === "coin" && (this.mesh(new w(0.35, 0.35, 0.08, 32), t.color, 0, 0, 0, this.object).rotation.x = Math.PI / 2), t.id === "marble" && this.mesh(new C(0.32, 24, 16), t.color, 0, 0, 0, this.object), this.object.position.set(0, 1.4, 0.4), this.host.querySelector("[data-sample]").textContent = `${t.note} 教學樣本：${t.mass} g，可排水體積上限 ${t.volume} cm³。`;
  }
  resizeScene() {
    const t = this.stage.clientWidth, e = this.stage.clientHeight;
    !t || !e || (this.camera.left = -5, this.camera.right = 5, this.camera.top = Math.max(3.2, 5 * e / t), this.camera.bottom = -this.camera.top, this.camera.updateProjectionMatrix(), this.renderer?.setSize(t, e), this.wake());
  }
  click = (t) => {
    const e = t.target.closest("button");
    if (e) {
      if (e.dataset.drivePage) {
        this.host.querySelectorAll("[data-drive-section]").forEach((s) => s.hidden = s.dataset.driveSection !== e.dataset.drivePage), this.host.querySelectorAll("[data-drive-page]").forEach((s) => s.setAttribute("aria-pressed", String(s === e)));
        return;
      }
      if (e.dataset.rpmSpeed) {
        this.clockSpeed = e.dataset.rpmSpeed === "60" ? 60 : 1, this.updateClockSpeed(), this.last = 0, this.active ? this.updateClock() : this.run(), this.status.textContent = this.clockSpeed === 1 ? "正常速度：一秒走一秒。" : "60倍速：一秒走一分鐘。";
        return;
      }
      if (this.kind === "clock" && e.dataset.action === "peek") {
        const s = this.host.dataset.clockPeek !== "true";
        this.mechanism?.setClockPeek(s), this.status.textContent = s ? "透視開啟：看看齒輪怎麼帶動指針。" : "刻度盤恢復。";
        return;
      }
      if (this.kind === "clock" && (["quiz", "notes", "help"].includes(e.dataset.helper || "") || e.hasAttribute("data-clock-rotate") || e.hasAttribute("data-clock-explode") || e.dataset.action === "step") && (this.active = !1, this.updateClock()), this.kind === "clock" && (e.hasAttribute("data-clock-rotate") || e.hasAttribute("data-clock-explode") || e.dataset.action === "step") && (this.demoStarted = !1, this.mechanism?.setClockDemo(!1)), this.kind === "car" && ((e.dataset.carMode || e.dataset.part) && (this.active = !1), e.dataset.road && (this.active = !1, this.rough = e.dataset.road === "rough", this.host.dataset.road = e.dataset.road, this.host.querySelectorAll("[data-road]").forEach((s) => s.setAttribute("aria-pressed", String(s === e))), this.updateCar(), this.status.textContent = this.rough ? "換成石頭路，試試看能跑多遠。" : "換成平路，用相同力量比較看看。"), e.dataset.force && (this.active = !1, this.pull = Number(e.dataset.force), this.mechanism?.setCarMode("test"), this.updateCar())), e.dataset.answer !== void 0) {
        if (this.kind === "car") {
          const s = Number(e.dataset.answer) === L.car.answer, o = this.answerReady ? s ? "答對了！往後拉車時，能量存在捲簧裡。放手後，捲簧透過齒輪帶動車輪。" : "再想想看！回到實驗，拆開車殼看看捲簧，聽聽它的工作。" : "先回到實驗，完成一次拉車試跑，再來選圖片。";
          this.host.querySelector(".il-feedback").innerHTML = `<span aria-hidden="true">${this.answerReady ? s ? "✓ ⭐" : "🔎 ↶" : "🚗 ↶"}</span><span class="bp-sr">${o}</span>`, this.host.querySelectorAll("[data-answer]").forEach((a) => a.setAttribute("aria-pressed", String(a === e)));
          return;
        }
        this.host.querySelector(".il-feedback").textContent = this.answerReady ? Number(e.dataset.answer) === L[this.kind].answer ? "✓ 完成！你已把操作結果和原理解釋連起來。可以再改一個條件試試。" : "再看看觀察紀錄。答錯沒關係，回到實驗找證據後再回答。" : "先操作並完成一次觀察，再用證據回答。";
        return;
      }
      e.dataset.action === "reset" && this.reset(), e.dataset.action === "run" && this.run(), e.dataset.action === "step" && (this.minutes += 60, this.updateClock(), this.record(`分針前進一圈：現在 ${this.clockText()}，時針前進一大格。`)), e.dataset.action === "record" && this.record(`觀察時間 ${this.clockText()}；分針累計 ${Math.floor(this.minutes / 60)} 圈，時針累計 ${(this.minutes / 720).toFixed(2)} 圈。`), this.wake();
    }
  };
  input = (t) => {
    const e = t.target;
    e.dataset.input === "object" && (this.selected = Number(e.value), this.reset()), e.dataset.input === "prediction" && (this.prediction = e.value), e.dataset.input === "minutes" && (this.active = !1, this.minutes = Number(e.value), this.updateClock(), this.answerReady = this.minutes > 0), e.dataset.input === "pull" && (this.active = !1, this.pull = Number(e.value) / 100, this.updateCar()), e.dataset.input === "surface" && (this.active = !1, this.rough = e.value === "rough", this.updateCar()), this.wake();
  };
  reset() {
    this.active = !1, this.dragging = !1, this.last = 0, this.kind === "clock" && (this.demoStarted = !1, this.demoElapsed = 0, this.clockSpeed = 60, this.updateClockSpeed(), this.mechanism?.setClockDemo(!1), this.mechanism?.setClockPeek(!1)), this.kind === "buoyancy" && (this.prediction = "", this.host.querySelector('[data-input="prediction"]').value = "", this.buildSample()), this.kind === "clock" && (this.minutes = 0, this.updateClock()), this.kind === "car" && (this.pull = 0.5, this.mechanism?.setCarMode("rotate"), this.host.querySelector('[data-input="pull"]').value = "50", this.updateCar()), this.status.textContent = this.kind === "car" ? "用手左右拖，看看車子的每一面。" : this.kind === "clock" ? "☝ 拖動調時 · ⟳ 前進一小時" : "準備好了，改變條件後開始觀察。", this.wake();
  }
  run() {
    if (this.kind === "buoyancy") {
      if (this.active) return;
      if (!this.prediction) {
        this.status.textContent = "請先選擇浮、沉或還不確定，再放入水中。";
        return;
      }
      const t = $[this.selected], e = j(t.mass, t.volume);
      this.targetY = e.floats ? 0.15 + 0.3 - 0.6 * e.fraction : -2.13, this.active = !0, this.status.textContent = `正在觀察${t.name}…`;
    } else if (this.kind === "clock")
      (!this.demoStarted || this.demoElapsed >= 60) && (this.demoElapsed = 0, this.demoStarted = !0, this.demoCue = -1, this.minutes = 0), this.active = !this.active, this.last = 0, this.mechanism?.setClockDemo(!0), this.updateClock(), this.status.textContent = this.active ? this.clockSpeed === 60 ? "60 倍速：一分鐘看完一小時。" : "正常速度：一秒走一秒。" : "Ⅱ 暫停";
    else {
      if (this.active) return;
      this.mechanism?.setCarMode("test"), this.runDistance = mt(this.pull, this.rough), this.travel = 0, this.runElapsed = 0, this.object.position.x = -3.2, this.active = !0, this.status.textContent = "彈簧釋放能量，透過輪軸帶動車輪前進。";
    }
    this.wake();
  }
  record(t) {
    const e = document.createElement("li");
    e.textContent = t, this.log.prepend(e), this.log.children.length > 24 && this.log.lastElementChild?.remove(), this.records++, this.host.querySelector("[data-count]").textContent = `${this.records} 次${this.kind === "buoyancy" ? ` · 已測 ${this.tested.size}/8 種` : ""}`, this.answerReady = !0, this.kind === "clock" && (this.host.querySelector(".il-feedback").textContent = "看圖選一個。");
  }
  clockText() {
    const t = Math.floor(this.minutes) % 720;
    return `${Math.floor(t / 60) || 12}:${String(t % 60).padStart(2, "0")}${this.clockSpeed === 1 ? ":" + String(Math.floor(this.minutes * 60) % 60).padStart(2, "0") : ""}`;
  }
  updateClockSpeed() {
    const t = this.clockSpeed, e = St(t), s = Ct(t);
    this.host.querySelectorAll("[data-rpm-speed]").forEach((o) => o.setAttribute("aria-pressed", String(Number(o.dataset.rpmSpeed) === t))), this.host.querySelectorAll("[data-rpm]").forEach((o, a) => o.textContent = e[a] + " RPM"), this.host.querySelectorAll("[data-drive-rpm]").forEach((o, a) => o.textContent = s[a] + " RPM"), this.host.querySelector("[data-demo-speed]").textContent = `${t}×`;
  }
  updateClock() {
    this.mechanism?.setClock(this.minutes), this.host.querySelector('[data-input="minutes"]').value = String(this.minutes % 721);
    const t = this.host.querySelector("[data-readout]"), e = this.clockText();
    t.textContent !== e && (t.textContent = e);
    const s = this.host.querySelector('[data-action="run"]'), o = this.active ? "Ⅱ" : `▶ ${this.clockSpeed}×`;
    s.textContent !== o && (s.textContent = o);
    const a = String(this.active);
    s.getAttribute("aria-pressed") !== a && s.setAttribute("aria-pressed", a);
    const i = this.active ? "暫停時鐘" : this.demoStarted && this.demoElapsed < 60 ? "繼續時鐘" : "播放時鐘";
    s.getAttribute("aria-label") !== i && s.setAttribute("aria-label", i);
    const r = this.host.querySelector("[data-demo-seconds]"), n = `${Math.floor(this.demoElapsed)}分${String(Math.floor(this.demoElapsed * 60) % 60).padStart(2, "0")}秒`;
    r.textContent !== n && (r.textContent = n);
  }
  updateCar() {
    this.object.position.set(-1.5 - this.pull * 1.7, -1, 0.2), this.mechanism?.setCar(this.pull), this.host.querySelector("[data-readout]").textContent = `回拉量 ${Math.round(this.pull * 100)}% · ${this.rough ? "較粗糙" : "較平滑"}路面`, this.host.querySelectorAll("[data-force]").forEach((t) => t.setAttribute("aria-pressed", String(Number(t.dataset.force) === this.pull)));
  }
  point(t) {
    const e = this.stage.getBoundingClientRect(), s = new O();
    s.setFromCamera(new W((t.clientX - e.left) / e.width * 2 - 1, 1 - (t.clientY - e.top) / e.height * 2), this.camera);
    const o = new g();
    return s.ray.intersectPlane(new ut(new g(0, 0, 1), 0), o), o;
  }
  pointerDown = (t) => {
    if (t.button !== 0) return;
    const e = this.point(t);
    if (!(this.kind === "clock" ? Math.hypot(e.x + 1.6, e.y - 0.45) > 1.9 : Math.hypot(e.x - this.object.position.x, e.y - this.object.position.y) > 1.1)) {
      if (this.kind === "buoyancy" && !this.prediction) {
        this.status.textContent = "請先選擇你的預測，再拖動物品。";
        return;
      }
      this.dragging = !0, this.active = !1, this.stage.setPointerCapture(t.pointerId), t.preventDefault();
    }
  };
  pointerMove = (t) => {
    if (!this.dragging) return;
    const e = this.point(t);
    if (this.kind === "buoyancy" && this.object.position.set(Math.max(-3, Math.min(3, e.x)), Math.max(0.8, Math.min(2.3, e.y)), 0.4), this.kind === "clock") {
      const o = (Math.atan2(e.x + 1.6, e.y - 0.45) / (2 * Math.PI) * 60 + 60) % 60, a = this.minutes % 60;
      let i = o - a;
      i > 30 && (i -= 60), i < -30 && (i += 60), this.minutes = Math.max(0, this.minutes + i), this.updateClock();
    }
    this.kind === "car" && (this.pull = Math.max(0.1, Math.min(1, (-e.x - 1.5) / 1.7)), this.host.querySelector('[data-input="pull"]').value = String(Math.round(this.pull * 100)), this.updateCar()), this.wake();
  };
  pointerUp = (t) => {
    this.dragging && (this.dragging = !1, this.stage.hasPointerCapture(t.pointerId) && this.stage.releasePointerCapture(t.pointerId), this.kind === "clock" ? this.record(`轉動指針到 ${this.clockText()}，兩根指針一起依比例移動。`) : this.run());
  };
  pointerCancel = () => {
    this.dragging = !1, this.active = !1, this.status.textContent = "操作已取消，可重新開始。";
  };
  wake() {
    !this.frame && !this.dead && !document.hidden && (this.frame = requestAnimationFrame(this.tick));
  }
  tick = (t) => {
    if (this.frame = 0, this.dead || document.hidden) {
      this.last = 0;
      return;
    }
    const e = this.last ? Math.max(0, (t - this.last) / 1e3) : 0, s = Math.min(0.05, e || 0.016);
    if (this.last = t, this.active && this.kind === "buoyancy" && (this.object.position.y += (this.targetY - this.object.position.y) * Math.min(1, s * 3), Math.abs(this.object.position.y - this.targetY) < 0.015)) {
      this.active = !1;
      const a = $[this.selected], i = j(a.mass, a.volume);
      this.tested.add(a.id);
      const r = `${a.name}：${i.floats ? "浮在水面" : "沉到水底"}。${i.floats ? "漂浮時浮力與重量平衡。" : "最大浮力仍小於重量；沉底後還有水底的支持力。"}`;
      this.status.textContent = r, this.record(`預測：${this.prediction === "float" ? "浮" : this.prediction === "sink" ? "沉" : "不確定"} → ${r}`);
    }
    if (this.active && this.kind === "clock") {
      const a = vt(this.demoElapsed, e, this.clockSpeed);
      this.demoElapsed = a.elapsed, this.minutes = a.minutes;
      const i = Math.min(3, Math.floor(a.elapsed / 20));
      i !== this.demoCue && (this.demoCue = i, this.host.querySelector(".mech-quick-info").innerHTML = ["<strong>馬達 → 齒輪</strong><p>跟著綠色齒輪看，馬達經三段減速，帶動長分針。</p>", "<strong>分針正在走</strong><p>先慢三倍，再慢四倍，再慢五倍。馬達六十圈，長分針一圈。</p>", "<strong>看看短時針</strong><p>金色齒輪再減速十二倍，帶動短時針。</p>", "<strong>✓ 一小時！</strong><p>分針一圈，時針一大格。</p>"][i]), a.done && (this.active = !1, this.record("一小時示範完成：分針轉一圈，時針轉 30 度，前進一大格。"), this.status.textContent = "✓ 已走 1 小時"), this.updateClock();
    }
    if (this.active && this.kind === "car") {
      this.runElapsed += s;
      const a = Math.min(1, this.runElapsed / 2.5);
      if (this.travel = this.runDistance * (2 * a - a * a), this.object.position.x = -3.2 + this.travel, this.mechanism?.setCar(this.pull * (1 - a), this.travel, !0), a === 1) {
        this.active = !1;
        const i = `回拉 ${Math.round(this.pull * 100)}%／${this.rough ? "較粗糙" : "較平滑"}路面：前進 ${this.travel.toFixed(2)} 模型單位後停下。`;
        this.status.textContent = i, this.record(i);
      }
    }
    const o = this.mechanism?.frame(s);
    this.renderer?.render(this.scene, this.camera), this.active || o ? this.wake() : this.last = 0;
  };
  destroy() {
    this.dead = !0, this.experience?.destroy(), cancelAnimationFrame(this.frame), this.abort.abort(), this.resize?.disconnect(), this.mechanism?.destroy(), this.disposeObject(this.scene), this.renderer?.dispose(), this.renderer?.domElement.remove();
  }
}
export {
  zt as InteractiveLab
};
