import { h as z, B as I, j as S, q as O, r as F, d as m, I as W, O as Y, s as V, t as C, u as T, k as M, n as y, v as j, V as b, w as H, x as Z, y as X, F as _, z as R, m as D, A as U, J as Q, p as N, a as B, G as x, l as w, K as J, N as K, U as tt, X as $, Y as et, Z as st, D as at, W as it, _ as ot, $ as nt, a0 as rt, P as ht } from "./RoundedBoxGeometry-CV-2QMmK.mjs";
import { L, F as E, i as ct, b as q, c as lt } from "./car-art-D34K7c64.mjs";
import { L as dt } from "./experience-TQ8ufTZL.mjs";
class ut extends z {
  constructor() {
    super();
    const t = new I();
    t.deleteAttribute("uv");
    const e = new S({ side: O }), s = new S(), n = new F(16777215, 900, 28, 2);
    n.position.set(0.418, 16.199, 0.3), this.add(n);
    const a = new m(t, e);
    a.position.set(-0.757, 13.219, 0.717), a.scale.set(31.713, 28.305, 28.591), this.add(a);
    const i = new W(t, s, 6), o = new Y();
    o.position.set(-10.906, 2.009, 1.846), o.rotation.set(0, -0.195, 0), o.scale.set(2.328, 7.905, 4.651), o.updateMatrix(), i.setMatrixAt(0, o.matrix), o.position.set(-5.607, -0.754, -0.758), o.rotation.set(0, 0.994, 0), o.scale.set(1.97, 1.534, 3.955), o.updateMatrix(), i.setMatrixAt(1, o.matrix), o.position.set(6.167, 0.857, 7.803), o.rotation.set(0, 0.561, 0), o.scale.set(3.927, 6.285, 3.687), o.updateMatrix(), i.setMatrixAt(2, o.matrix), o.position.set(-2.017, 0.018, 6.124), o.rotation.set(0, 0.333, 0), o.scale.set(2.002, 4.566, 2.064), o.updateMatrix(), i.setMatrixAt(3, o.matrix), o.position.set(2.291, -0.756, -2.621), o.rotation.set(0, -0.286, 0), o.scale.set(1.546, 1.552, 1.496), o.updateMatrix(), i.setMatrixAt(4, o.matrix), o.position.set(-2.193, -0.369, -5.547), o.rotation.set(0, 0.516, 0), o.scale.set(3.875, 3.487, 2.986), o.updateMatrix(), i.setMatrixAt(5, o.matrix), this.add(i);
    const r = new m(t, v(50));
    r.position.set(-16.116, 14.37, 8.208), r.scale.set(0.1, 2.428, 2.739), this.add(r);
    const d = new m(t, v(50));
    d.position.set(-16.109, 18.021, -8.207), d.scale.set(0.1, 2.425, 2.751), this.add(d);
    const c = new m(t, v(17));
    c.position.set(14.904, 12.198, -1.832), c.scale.set(0.15, 4.265, 6.331), this.add(c);
    const u = new m(t, v(43));
    u.position.set(-0.462, 8.89, 14.52), u.scale.set(4.38, 5.441, 0.088), this.add(u);
    const l = new m(t, v(20));
    l.position.set(3.235, 11.486, -12.541), l.scale.set(2.5, 2, 0.1), this.add(l);
    const h = new m(t, v(100));
    h.position.set(0, 20, 0), h.scale.set(1, 0.1, 1), this.add(h);
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
function v(g) {
  return new V({
    color: 0,
    emissive: 16777215,
    emissiveIntensity: g
  });
}
function pt(g) {
  const t = () => new Z({ color: 1478316, metalness: 0.48, roughness: 0.24, clearcoat: 1, clearcoatRoughness: 0.13 }), e = (r, d = 0.2) => new S({ color: r, metalness: d, roughness: 0.3 }), s = (r, d, c = 0, u = 0, l = 0) => {
    const h = new m(r, d);
    return h.position.set(c, u, l), g.add(h), h;
  }, n = (r, d, c, u, l, h, p = 0) => s(new D(r, d, c, 3, Math.min(r, d, c) * 0.28), e(u), l, h, p), a = new C();
  a.moveTo(-1.96, -0.22), a.lineTo(-1.754, -0.22), a.absarc(-1.18, -0.3, 0.58, Math.PI - 0.14, 0.14, !0), a.lineTo(0.606, -0.22), a.absarc(1.18, -0.3, 0.58, Math.PI - 0.14, 0.14, !0), a.lineTo(1.96, -0.22), a.bezierCurveTo(2.06, -0.02, 2.02, 0.34, 1.84, 0.48), a.bezierCurveTo(1.39, 0.6, 0.87, 0.57, 0.54, 0.58), a.lineTo(-1.55, 0.58), a.bezierCurveTo(-1.91, 0.56, -2.03, 0.22, -1.96, -0.22), a.closePath(), s(new T(a, { depth: 1.5, bevelEnabled: !0, bevelSize: 0.045, bevelThickness: 0.045, bevelSegments: 3, curveSegments: 32 }), t(), 0, 0, -0.75);
  const i = new C();
  i.moveTo(-1.43, 0.52), i.lineTo(-1.02, 1.31), i.quadraticCurveTo(-0.96, 1.38, -0.8, 1.38), i.lineTo(0.23, 1.38), i.quadraticCurveTo(0.33, 1.38, 0.4, 1.27), i.lineTo(0.88, 0.55), i.closePath(), s(new T(i, { depth: 1.24, bevelEnabled: !0, bevelSize: 0.045, bevelThickness: 0.04, bevelSegments: 3 }), t(), 0, 0, -0.62);
  const o = (r, d = 1255995) => {
    const c = new X();
    c.setAttribute("position", new _(r.flat(), 3)), c.setIndex([0, 1, 2, 0, 2, 3]), c.computeVertexNormals();
    const u = e(d, 0.35);
    return u.side = R, u.roughness = 0.16, s(c, u);
  };
  for (const r of [-1, 1]) {
    const d = 0.667 * r;
    o([[-1.29, 0.65, d], [-0.98, 1.27, d], [-0.54, 1.27, d], [-0.54, 0.65, d]]), o([[-0.47, 0.65, d], [-0.47, 1.27, d], [0.26, 1.27, d], [0.72, 0.65, d]]), n(0.055, 0.66, 0.038, 1582382, -0.5, 0.97, d), n(3.16, 0.026, 0.04, 12179163, -0.03, 0.55, 0.801 * r), n(0.27, 0.06, 0.06, 14870505, -0.12, 0.43, 0.815 * r), n(1.08, 0.085, 0.045, 2108725, 0, -0.22, 0.815 * r), s(new M(0.13, 20, 12), e(15855333), 0.67, 0.68, 0.89 * r).scale.set(1.15, 0.8, 0.66);
    for (const l of [-1.18, 1.18]) s(new y(0.588, 0.045, 8, 36, Math.PI), e(2437690), l, -0.3, 0.805 * r);
    const u = new j([new b(-0.49, 0.51, 0.802 * r), new b(-0.49, -0.1, 0.802 * r), new b(0.48, -0.1, 0.802 * r), new b(0.64, 0.5, 0.802 * r)]);
    s(new H(u, 28, 7e-3, 4, !1), e(1466744));
  }
  o([[0.9, 0.65, -0.54], [0.9, 0.65, 0.54], [0.46, 1.28, 0.54], [0.46, 1.28, -0.54]]).name = "front-glazing", o([[-1.43, 0.65, 0.53], [-1.43, 0.65, -0.53], [-1.1, 1.28, -0.53], [-1.1, 1.28, 0.53]]).name = "rear-glazing", n(1.6, 0.07, 1.4, 1518902, -0.33, 1.38), n(1.65, 0.15, 1.44, 16249055, -0.33, 1.45);
  for (const r of [-0.2, 0.2]) n(0.81, 0.015, 0.1, 15855324, 1.2, 0.59, r);
  for (const r of [-0.5, 0.5]) {
    const d = s(new M(0.18, 24, 16), e(16774350, 0.45), 1.985, 0.25, r);
    d.scale.x = 0.27;
    const c = s(new y(0.185, 0.024, 8, 32), e(14410211, 0.8), 2, 0.25, r);
    c.rotation.y = Math.PI / 2, s(new M(0.14, 20, 12), e(12329790), -1.98, 0.24, r).scale.set(0.25, 1.3, 0.7);
  }
  n(0.075, 0.19, 0.66, 1516590, 2.03, -0.015);
  for (const r of [-0.055, 0, 0.055]) n(0.084, 0.014, 0.55, 10926013, 2.04, r);
  n(0.14, 0.12, 1.24, 12766673, 1.98, -0.2), n(0.14, 0.12, 1.24, 12766673, -1.98, -0.2);
}
function mt(g) {
  const t = Math.max(0, Math.min(60, g));
  return { elapsed: t, minutes: t, done: t >= 60, minuteAngle: -t * Math.PI / 30, hourAngle: -t * Math.PI / 360 };
}
function ft(g) {
  const t = -g * Math.PI / 30;
  return [t, -t / 3, -t / 3, t / 12];
}
const A = {
  clock: [
    ["case", "鐘殼", "像安全帽，保護裡面的機芯。", "轉到背面，找找裝電池的位置。"],
    ["glass", "透明鏡片", "擋住灰塵，讓我們看得到時間。", "拆開後，鏡片在最前面。"],
    ["dial", "刻度盤", "12 個大刻度，幫我們讀出幾點。", "每相鄰兩個數字相差 5 分鐘。"],
    ["hands", "時針與分針", "長分針走一圈，短時針走一大格。", "試試下方「+1 時」圖示。"],
    ["gears", "傳動齒輪", "一顆帶一顆，把轉動傳到指針。", "相鄰的外齒輪轉向相反。這裡省略了部分細小齒輪。"],
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
}, bt = {
  case: [-3.3, 0.7, -1.2],
  glass: [3.4, 1.2, 1.8],
  dial: [0, 1.3, 0.8],
  hands: [2.4, -1.8, 1.2],
  gears: [-0.8, -1.1, 0.6],
  motor: [-2.2, -1.9, 0.7],
  quartz: [0.4, -2.25, 0.5],
  battery: [-3.8, -2, 0.4]
};
class gt {
  constructor(t, e, s, n, a, i, o, r) {
    if (this.kind = t, this.scene = e, this.camera = s, this.stage = n, this.host = a, this.wake = o, this.action = r, this.yaw = t === "clock" ? -0.25 : -0.55, a.classList.add("il-mechanism"), n.classList.add("mech-stage"), n.setAttribute("role", "group"), i) {
      const l = new U(i), h = new ut();
      this.env = l.fromScene(h, 0.04), e.environment = this.env.texture, h.dispose(), l.dispose(), i.toneMapping = Q, i.toneMappingExposure = 1.05;
    }
    this.labelLayer = document.createElement("div"), this.labelLayer.className = "mech-labels", this.labelLayer.innerHTML = '<svg class="mech-leaders" aria-hidden="true"></svg>', n.append(this.labelLayer);
    const d = document.createElement("div");
    d.className = "mech-toolbar", d.innerHTML = `<div class="mech-modes" role="group" aria-label="模型觀看方式"><button data-view="whole" aria-pressed="true">完整外觀</button><button data-view="xray" aria-pressed="false">透視裡面</button><button data-view="explode" aria-pressed="false">拆開看看</button></div><div class="mech-adjust"><label>轉個方向<input type="range" data-mech-turn min="-75" max="75" value="${Math.round(this.yaw * 180 / Math.PI)}" aria-label="轉動模型視角"></label><label>拆開多少<input type="range" data-mech-explode min="0" max="100" value="0" aria-label="零件拆開程度"></label></div>`, n.before(d), t === "clock" && (d.innerHTML = '<div class="clock-switches"><button role="switch" data-clock-rotate aria-checked="false" aria-label="旋轉模型">⟳ 旋轉</button><button role="switch" data-clock-explode aria-checked="false" aria-label="拆卸零件">⚙ 拆卸</button><span>☝ 拖動調時</span></div>'), t === "car" && (a.classList.add("il-car-play"), a.dataset.carMode = "rotate", d.innerHTML = '<div class="car-switches" role="group" aria-label="回力車操作模式"><button role="switch" data-car-mode="rotate" aria-checked="true">⟳ 旋轉<i></i></button><button role="switch" data-car-mode="explode" aria-checked="false">⚙ 拆卸<i></i></button><button role="switch" data-car-mode="test" aria-checked="false">🏁 拉力<i></i></button></div>');
    const c = document.createElement("section");
    if (c.className = "mech-tray", c.innerHTML = `<div class="mech-tray-title"><strong>點零件，發現小祕密</strong><span data-discovered>0 / 8</span></div><div class="mech-parts">${A[t].map((l, h) => `<button data-part="${l[0]}" aria-pressed="false"><span>${h + 1}</span>${l[1]}</button>`).join("")}</div><div class="mech-part-info" aria-live="polite"><strong>從外面看，再拆開找找看。</strong><p>點模型上的數字，或點上方的零件名稱。</p></div><details class="mech-parent"><summary>給陪玩的家長</summary><p>先問「你猜這個零件做什麼？」再點名稱一起看。${t === "clock" ? "電池 → 石英與電路 → 馬達 → 齒輪 → 指針。" : "手往後拉 → 輪軸與齒輪 → 捲簧儲能 → 放手帶動車輪。"}此模型以常見結構為基礎，省略部分緊固件與細小傳動零件，並非品牌產品的維修拆裝圖。真實拆解請由成人協助，避免小零件與電池被孩子吞食。</p></details>`, n.closest(".il-scene-panel").append(c), this.partInfo = c.querySelector(".mech-part-info"), t === "clock") {
      const l = document.createElement("details");
      l.className = "mech-bom", l.innerHTML = '<summary aria-label="展開或收起零件表" title="零件">☷</summary>', l.append(c), n.append(l), l.addEventListener("toggle", () => this.wake(), { signal: this.abort.signal }), c.querySelector("strong").textContent = "零件";
      const h = document.createElement("div");
      h.className = "clock-zoom", h.innerHTML = '<button data-clock-zoom="1" aria-label="放大模型">＋</button><button data-clock-zoom="-1" aria-label="縮小模型">−</button><button data-clock-zoom="0" aria-label="還原視角">⌂</button>', n.append(h), this.halo = document.createElement("div"), this.halo.className = "mech-selection-halo", this.halo.hidden = !0, n.append(this.halo);
    }
    const u = document.createElement("div");
    u.className = "mech-quick-info", u.setAttribute("aria-live", "polite"), u.innerHTML = "<strong>當個小小拆解師</strong><p>選「拆開看看」，再點一個零件。</p>", a.querySelector("aside .il-controls").before(u), t === "car" && (u.innerHTML = "<strong>選個開關玩玩看</strong><p>轉一轉、拆一拆，再試跑！</p>"), t === "clock" && (u.innerHTML = "<strong>☝ 拖動調時</strong><p>⚙ 拆卸 · ☷ 找零件</p>"), a.addEventListener("click", (l) => {
      const h = l.target.closest("button");
      if (h) {
        if (h.dataset.carMode && this.setCarMode(h.dataset.carMode === this.carMode ? "idle" : h.dataset.carMode), h.dataset.view && (this.setMode(h.dataset.view), d.querySelectorAll("[data-view]").forEach((p) => p.setAttribute("aria-pressed", String(p === h))), d.querySelector("[data-mech-explode]").value = this.mode === "explode" ? "100" : "0"), h.dataset.part && this.select(h.dataset.part, a), h.hasAttribute("data-clock-rotate") && (this.clockRotate = !this.clockRotate, h.setAttribute("aria-checked", String(this.clockRotate))), h.hasAttribute("data-clock-explode")) {
          const p = this.mode !== "explode";
          this.setMode(p ? "explode" : "whole"), h.setAttribute("aria-checked", String(p));
        }
        if ((h.hasAttribute("data-clock-rotate") || h.hasAttribute("data-clock-explode")) && (d.querySelector(".clock-switches > span").textContent = this.clockRotate || this.mode === "explode" ? "☝ 拖動旋轉" : "☝ 拖動調時", u.innerHTML = this.mode === "explode" ? "<strong>☷ 找零件</strong><p>點數字，聽聽它的工作。</p>" : this.clockRotate ? "<strong>☝ 拖動旋轉</strong><p>關閉旋轉，就能調時間。</p>" : "<strong>☝ 拖動調時</strong><p>長分針一圈，短時針一格。</p>"), h.hasAttribute("data-clock-zoom")) {
          const p = Number(h.dataset.clockZoom);
          this.zoom = p ? Math.max(0.75, Math.min(1.5, this.zoom + p * 0.15)) : 1, p || (this.yaw = -0.25), this.wake();
        }
      }
    }, { signal: this.abort.signal }), d.addEventListener("input", (l) => {
      const h = l.target;
      h.hasAttribute("data-mech-turn") ? this.yaw = Number(h.value) * Math.PI / 180 : (this.target = Number(h.value) / 100, this.mode = this.target ? "explode" : "whole", d.querySelectorAll("[data-view]").forEach((p) => p.setAttribute("aria-pressed", String(p.dataset.view === this.mode))), this.skins()), this.wake();
    }, { signal: this.abort.signal }), t === "clock" ? this.clock() : this.car(), e.add(this.root), this.skins(), n.addEventListener("pointerdown", (l) => {
      l.button || l.target.closest("button,details") || t === "car" && this.carMode === "idle" || (this.dragYaw = this.yaw, this.dragPull = this.pullValue, this.dragging = { x: l.clientX, minutes: this.minutes, moved: !1 }, n.setPointerCapture(l.pointerId));
    }, { signal: this.abort.signal }), n.addEventListener("pointermove", (l) => {
      if (!this.dragging) return;
      const h = l.clientX - this.dragging.x;
      Math.abs(h) > 5 && (this.dragging.moved = !0), this.dragging.moved && (t === "car" && this.carMode !== "test" || t === "clock" && this.clockRotate ? this.yaw = this.dragYaw + h * 0.01 : this.mode !== "whole" ? this.yaw = Math.max(-1.3, Math.min(1.3, this.dragYaw + h * 0.01)) : t === "clock" ? this.action(Math.max(0, this.dragging.minutes + h / 2), !1) : this.action(Math.max(0.1, Math.min(1, this.dragPull - h / 180)), !1), this.wake());
    }, { signal: this.abort.signal }), n.addEventListener("pointerup", (l) => {
      if (!this.dragging) return;
      const h = this.dragging.moved;
      if (this.dragging = null, n.hasPointerCapture(l.pointerId) && n.releasePointerCapture(l.pointerId), h && this.mode === "whole" && (t === "clock" && !this.clockRotate || this.carMode === "test")) this.action(-1, !0);
      else if (!h) {
        const p = n.getBoundingClientRect(), f = new N();
        f.setFromCamera(new B((l.clientX - p.left) / p.width * 2 - 1, 1 - (l.clientY - p.top) / p.height * 2), s);
        const P = f.intersectObject(this.root, !0);
        for (const G of P) {
          let k = G.object;
          for (; k && !k.userData.partId; ) k = k.parent;
          if (k?.userData.partId) {
            this.select(k.userData.partId, a);
            break;
          }
        }
      }
    }, { signal: this.abort.signal }), n.addEventListener("pointercancel", () => {
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
  root = new x();
  parts = [];
  mode = "whole";
  amount = 0;
  target = 0;
  yaw;
  handMinute = new x();
  handHour = new x();
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
  rotor = new x();
  setCarMode(t) {
    this.kind === "car" && (this.carMode === "test" && t !== "test" && (this.yaw = -0.55), this.dragging = null, this.carMode = t, this.host.dataset.carMode = t, this.setMode(t === "explode" ? "explode" : "whole"), t === "test" && (this.yaw = 0, this.amount = 0), this.root.position.x = t === "test" ? -this.pullValue * 1.8 : 0, this.host.querySelectorAll("[data-car-mode]").forEach((e) => e.setAttribute("aria-checked", String(e.dataset.carMode === t))), this.host.querySelector(".il-live").textContent = t === "test" ? "側面就位！向左拉車，放手出發。" : t === "explode" ? "點零件聽祕密，也能用手轉方向。" : t === "idle" ? "選一個開關，開始探索！" : "用手左右拖，看看車子的每一面。", this.wake());
  }
  material(t, e = 0.1, s = 0.32) {
    return new S({ color: t, metalness: e, roughness: s });
  }
  mesh(t, e, s, n = 0, a = 0, i = 0, o = 0.1) {
    const r = new m(t, this.material(e, o));
    return r.position.set(n, a, i), s.add(r), r;
  }
  box(t, e, s, n, a, i = 0, o = 0, r = 0) {
    return this.mesh(new D(t, e, s, 3, Math.min(t, e, s) * 0.16), n, a, i, o, r);
  }
  disk(t, e, s, n, a = 0, i = 0, o = 0) {
    const r = this.mesh(new w(t, t, e, 64), s, n, a, i, o, 0.4);
    return r.rotation.x = Math.PI / 2, r;
  }
  part(t, e, s, n = !1) {
    const a = new x();
    a.position.fromArray(e), a.userData.partId = t, this.root.add(a);
    const i = document.createElement("button");
    i.type = "button", i.dataset.part = t, i.textContent = String(A[this.kind].findIndex((r) => r[0] === t) + 1), i.setAttribute("aria-label", A[this.kind].find((r) => r[0] === t)[1]), this.labelLayer.append(i);
    const o = document.createElementNS("http://www.w3.org/2000/svg", "line");
    return this.labelLayer.querySelector("svg").append(o), this.parts.push({ id: t, group: a, home: new b(...e), away: new b(...this.kind === "clock" ? bt[t] : s), skin: n, button: i, line: o }), a;
  }
  gear(t, e, s, n, a, i, o = 14265434) {
    const r = new x();
    r.position.set(n, a, i), s.add(r);
    const d = new C();
    for (let u = 0; u < e * 4; u++) {
      const l = u * Math.PI * 2 / (e * 4), h = t * (u % 4 === 0 || u % 4 === 3 ? 0.9 : 1.05), p = Math.cos(l) * h, f = Math.sin(l) * h;
      u ? d.lineTo(p, f) : d.moveTo(p, f);
    }
    d.closePath();
    const c = new J();
    return c.absarc(0, 0, t * 0.16, 0, Math.PI * 2, !0), d.holes.push(c), this.mesh(new T(d, { depth: 0.12, bevelEnabled: !0, bevelSize: 0.012, bevelThickness: 0.012, bevelSegments: 2 }), o, r, 0, 0, 0, 0.65), this.disk(t * 0.16, 0.21, 14083563, r, 0, 0, 0.05), this.gears.push(r), r;
  }
  clock() {
    const t = this.part("case", [0, 0, -0.2], [-2.6, 0.35, -1.1], !0);
    this.disk(1.8, 0.5, 2847620, t), this.mesh(new y(1.7, 0.15, 16, 96), 12758396, t, 0, 0, 0.32, 0.8), this.box(0.3, 0.65, 0.5, 2847620, t, -0.95, -1.7), this.box(0.3, 0.65, 0.5, 2847620, t, 0.95, -1.7);
    const e = this.part("glass", [0, 0, 0.7], [3.3, 0.3, 1.4], !0), s = this.disk(1.62, 0.045, 14087679, e);
    s.material.transparent = !0, s.material.opacity = 0.1, s.material.depthWrite = !1, this.mesh(new y(1.64, 0.035, 12, 96), 10470606, e, 0, 0, 0, 0.7);
    const n = this.part("dial", [0, 0, 0.45], [1.5, 0.2, 0.8], !0), a = document.createElement("canvas");
    a.width = 1024, a.height = 1024;
    const i = a.getContext("2d");
    i.translate(512, 512);
    for (let p = 0; p < 60; p++)
      i.save(), i.rotate(p * Math.PI / 30), i.fillStyle = "#26444a", i.fillRect(-2, -465, 4, p % 5 === 0 ? 32 : 13), i.restore();
    i.font = "600 72px system-ui", i.textAlign = "center", i.textBaseline = "middle", i.fillStyle = "#234752";
    for (let p = 1; p <= 12; p++) {
      const f = p * Math.PI / 6;
      i.fillText(String(p), Math.sin(f) * 372, -Math.cos(f) * 372);
    }
    i.font = "20px system-ui", i.fillText("QUARTZ", 0, 220);
    const o = new K(a);
    o.colorSpace = tt, this.textures.push(o), this.mesh(new $(1.6, 96), 16314847, n, 0, 0, -6e-3);
    const r = this.mesh(new $(1.6, 96), 16777215, n);
    r.name = "clock-marks", r.material.map = o, r.material.roughness = 0.7, r.material.side = R;
    const d = this.part("hands", [0, 0, 0.57], [2.6, -0.2, 1.1]);
    d.add(this.handMinute, this.handHour), this.box(0.075, 1.31, 0.04, 1412768, this.handMinute, 0, 0.55, 0.07), this.box(0.13, 0.92, 0.05, 11633717, this.handHour, 0, 0.34, 0.02), this.disk(0.1, 0.12, 15056229, d, 0, 0, 0.13);
    const c = this.part("gears", [0, 0, 0.08], [0.05, 0.5, 0.1]);
    this.gear(0.2, 12, c, 0, 0, 0.19, 2212059), this.gear(0.6, 36, c, 0.8, 0, 0.19, 15254129), this.gear(0.16, 10, c, 0.8, 0, -0.04, 15254129), this.gear(0.64, 40, c, 0, 0, -0.04, 15116615), this.disk(0.055, 0.45, 13490664, c, 0.8, 0, 0.1);
    const u = this.part("motor", [-0.55, -0.7, 0.04], [-1.5, -1.25, 0.35]);
    this.box(0.65, 0.3, 0.3, 12019250, u);
    for (let p = 0; p < 16; p++) this.mesh(new y(0.16, 0.013, 6, 20), 15049082, u, -0.28 + p * 0.036, 0, 0.08, 0.8).rotation.y = Math.PI / 2;
    this.disk(0.19, 0.15, 9870758, u, 0.4, 0, 0.05);
    const l = this.part("quartz", [0.45, -0.75, 0.05], [0.35, -1.5, 0.2]);
    this.box(0.72, 0.46, 0.06, 2980194, l), this.box(0.22, 0.18, 0.07, 2237738, l, -0.08, 0, 0.06), this.box(0.14, 0.3, 0.1, 12895943, l, 0.23, 0, 0.07), this.rotor.position.set(0.4, 0, 0.18), u.add(this.rotor), this.box(0.28, 0.045, 0.06, 16575637, this.rotor), this.box(0.045, 0.28, 0.06, 16575637, this.rotor);
    const h = this.part("battery", [0, -1.25, -0.48], [-2.6, -1.6, -0.1]);
    this.mesh(new w(0.19, 0.19, 1.25, 32), 13351808, h, 0, 0, 0, 0.6).rotation.z = Math.PI / 2, this.mesh(new w(0.2, 0.2, 0.27, 32), 2371136, h, 0.47, 0, 0).rotation.z = Math.PI / 2, this.mesh(new w(0.09, 0.09, 0.05, 16), 14278628, h, -0.65, 0, 0, 0.8).rotation.z = Math.PI / 2;
  }
  car() {
    const t = this.part("shell", [0, 0.4, 0], [0, 1.9, -0.1], !0);
    pt(t);
    const e = this.part("chassis", [0, 0.25, 0], [0, -1.2, 0]);
    this.box(3.7, 0.16, 1.38, 3883338, e);
    for (const c of [-1.3, 1.3]) for (const u of [-0.52, 0.52])
      this.disk(0.075, 0.09, 14146270, e, c, 0.05, u).rotation.x = 0;
    const s = this.part("wheels", [0, 0, 0], [0, -0.35, 0]);
    for (const c of [-1.18, 1.18]) for (const u of [-0.88, 0.88]) {
      const l = new x();
      l.position.set(c, 0.06, u), l.userData.side = u < 0 ? -1 : 1, s.add(l), this.mesh(new y(0.36, 0.145, 16, 48), 2106923, l).scale.z = 1.2, this.disk(0.28, 0.19, 12174797, l), this.disk(0.235, 0.2, 2438206, l), this.disk(0.09, 0.25, 13359326, l);
      const h = u > 0 ? 0.13 : -0.13;
      this.mesh(new y(0.27, 0.022, 8, 40), 14870763, l, 0, 0, h, 0.8);
      for (let p = 0; p < 5; p++) {
        const f = p * Math.PI * 2 / 5, P = this.box(0.048, 0.17, 0.035, 14542313, l, Math.sin(f) * 0.165, Math.cos(f) * 0.165, h);
        P.rotation.z = -f;
      }
      this.wheels.push(l);
    }
    const n = this.part("axles", [0, 0.07, 0], [0, -0.58, 0]);
    for (const c of [-1.18, 1.18]) this.disk(0.07, 1.83, 13488855, n, c, 0, 0);
    const a = this.part("housing", [-0.65, 0.5, 0], [-0.95, 0.7, -1.7], !0);
    this.box(1.25, 0.65, 0.8, 14801605, a);
    const i = this.part("spring", [-0.58, 0.52, 0.1], [-1.8, 0.6, 1.1]), o = Array.from({ length: 300 }, (c, u) => {
      const l = u * 0.18, h = 0.035 + u * 1e-3;
      return new b(Math.cos(l) * h, Math.sin(l) * h, 0);
    });
    this.spring = this.mesh(new H(new j(o), 300, 0.022, 6, !1), 12108750, i, 0, 0, 0, 0.8);
    const r = this.part("gears", [-0.83, 0.45, 0.36], [0.3, 0.3, 1.2]);
    this.gear(0.27, 18, r, -0.2, 0, 0), this.gear(0.16, 10, r, 0.22, 0, 0.01), this.gear(0.25, 16, r, 0.6, 0, 0.01);
    const d = this.part("clutch", [-1.18, 0.2, 0.45], [1.8, 0.35, 1.1]);
    this.gear(0.2, 10, d, 0, 0, 0, 15848854), this.box(0.24, 0.07, 0.08, 12041153, d, 0.25, 0.05, 0.15);
  }
  setMode(t) {
    this.mode = t, this.target = t === "explode" ? 1 : 0, t !== "whole" && (this.root.position.x = 0), this.skins(), this.wake();
  }
  skins() {
    this.parts.forEach((t) => t.group.traverse((e) => {
      if (e instanceof m) {
        const s = e.material, n = t.id === "glass";
        s.transparent = n || this.mode === "xray" && t.skin, s.opacity = n ? 0.1 : this.mode === "xray" && t.skin ? 0.13 : 1, s.depthWrite = !s.transparent;
      }
    })), this.clockPeek && this.parts.filter((t) => t.skin).forEach((t) => t.group.traverse((e) => {
      if (e instanceof m) {
        const s = e.material;
        s.transparent = !0, s.opacity = t.id === "case" ? 0.08 : 0, s.depthWrite = !1;
      }
    })), this.parts.forEach((t) => t.group.traverse((e) => {
      if (e instanceof m && e.name === "clock-marks") {
        const s = e.material;
        s.transparent = !0, s.opacity = 1, s.depthWrite = !1, this.clockPeek ? (s.emissive.setHex(16777215), s.emissiveMap = s.map, s.emissiveIntensity = 3) : (s.emissive.setHex(0), s.emissiveIntensity = 0);
      }
    })), this.parts.forEach((t) => t.group.traverse((e) => {
      e instanceof m && (e.material.needsUpdate = !0);
    }));
  }
  select(t, e) {
    this.kind === "car" && this.mode === "whole" && !["shell", "wheels"].includes(t) && this.setCarMode("explode"), this.selected = t, this.seen.add(t);
    const s = A[this.kind].find((n) => n[0] === t);
    this.partInfo.innerHTML = `<strong>${s[1]}</strong><p>${s[2]}</p><small>${s[3]}</small>`, e.querySelector(".mech-quick-info").innerHTML = `<strong>${s[1]}</strong><p>${s[2]}</p>`, e.querySelector("[data-discovered]").textContent = `${this.seen.size} / 8`, e.querySelectorAll("[data-part]").forEach((n) => n.setAttribute("aria-pressed", String(n.dataset.part === t))), this.kind === "clock" && this.mode === "whole" && !["case", "glass", "dial", "hands"].includes(t) && (e.querySelector(".mech-quick-info").innerHTML += "<p>在鐘殼裡，打開「拆卸」找找看。</p>"), this.kind === "car" && this.parts.forEach((n) => n.group.traverse((a) => {
      if (a instanceof m) {
        const i = a.material;
        i.emissive.setHex(n.id === t ? 1461081 : 0), i.emissiveIntensity = n.id === t ? 0.5 : 0;
      }
    })), this.wake();
  }
  setClock(t) {
    this.minutes = t;
    const e = ft(t);
    this.handMinute.rotation.z = e[0], this.handHour.rotation.z = e[3], this.gears.forEach((s, n) => s.rotation.z = e[n]), this.rotor.rotation.z = t * Math.PI * 2;
  }
  setClockDemo(t) {
    if (this.host.dataset.clockDemo = String(t), t) {
      this.setMode("whole"), this.amount = 0, this.yaw = 0, this.zoom = 1, this.clockRotate = !1, this.selected = "", this.host.querySelectorAll("[data-clock-rotate],[data-clock-explode]").forEach((s) => s.setAttribute("aria-checked", "false")), this.host.querySelectorAll("[data-part]").forEach((s) => s.setAttribute("aria-pressed", "false"));
      const e = this.stage.querySelector("details");
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
    this.pullValue = t, this.root.position.x = this.carMode === "test" ? -t * 1.8 + e : 0, this.wheels.forEach((n) => n.rotation.z = s ? -e / 0.5 : t * 4), this.spring && this.spring.scale.setScalar(1 - 0.25 * t), this.gears.forEach((n, a) => n.rotation.z = (s ? e * 4 : t * 6) * (a % 2 ? -1 : 1));
  }
  frame(t) {
    this.amount += (this.target - this.amount) * Math.min(1, t * 9), Math.abs(this.amount - this.target) < 1e-3 && (this.amount = this.target), this.root.rotation.set(this.kind === "car" ? this.carMode === "test" ? 0 : 0.24 : 0.03, this.yaw, 0);
    const e = this.stage.clientWidth, s = this.stage.clientHeight;
    if (e && s) {
      const a = this.kind === "clock" && this.stage.querySelector(".mech-bom[open]") ? 260 : 0, i = this.kind === "clock" ? 2.6 + this.amount * 3.3 : this.carMode === "test" ? 5.8 : 3.3 + this.amount * 1.4, o = Math.max(this.kind === "clock" ? 2.45 + this.amount * 0.9 : 2.35 + this.amount * 0.95, i * s / Math.max(280, e - a)) / (this.zoom || 1), r = o * e / s, d = this.kind === "car" ? this.carMode === "test" ? -0.445 + 0.28 * o : 0.45 : 0, c = r * a / e;
      this.camera.left = -r + c, this.camera.right = r + c, this.camera.top = o + d, this.camera.bottom = -o + d, this.camera.updateProjectionMatrix();
    }
    if (this.parts.forEach((a) => {
      a.group.position.copy(a.home).lerp(a.away, this.amount), a.id === "wheels" && a.group.children.forEach((i) => {
        i.position.z = (i.userData.side || 1) * (0.88 + this.amount * 0.75);
      });
    }), this.root.updateMatrixWorld(!0), this.halo) {
      const a = this.parts.find((i) => i.id === this.selected);
      if (this.halo.hidden = !a || this.mode === "whole" && !["case", "glass", "dial", "hands"].includes(this.selected), a) {
        const i = new et().setFromObject(a.group), o = [];
        for (const c of [i.min.x, i.max.x]) for (const u of [i.min.y, i.max.y]) for (const l of [i.min.z, i.max.z]) {
          const h = new b(c, u, l).project(this.camera);
          o.push({ x: (h.x + 1) * e / 2, y: (1 - h.y) * s / 2 });
        }
        const r = Math.min(...o.map((c) => c.x)) - 8, d = Math.min(...o.map((c) => c.y)) - 8;
        Object.assign(this.halo.style, { left: `${r}px`, top: `${d}px`, width: `${Math.max(...o.map((c) => c.x)) - r + 8}px`, height: `${Math.max(...o.map((c) => c.y)) - d + 8}px` });
      }
    }
    const n = [];
    return this.parts.forEach((a) => {
      const i = a.group.getWorldPosition(new b()).project(this.camera), o = { x: (i.x + 1) * e / 2, y: (1 - i.y) * s / 2 }, d = [[0, 0], [40, 0], [-40, 0], [0, 40], [0, -40], [40, 40], [-40, -40], [60, -40], [-60, 40], [0, 80]].map(([c, u]) => ({ x: Math.max(20, Math.min(e - 20, o.x + c)), y: Math.max(20, Math.min(s - 20, o.y + u)) })).find((c) => n.every((u) => Math.hypot(u.x - c.x, u.y - c.y) > 37)) || o;
      a.button.hidden = this.mode !== "explode" && a.id !== this.selected, a.button.hidden || n.push(d), a.button.style.left = `${d.x}px`, a.button.style.top = `${d.y}px`, a.button.classList.toggle("selected", a.id === this.selected), a.line.setAttribute("x1", String(o.x)), a.line.setAttribute("y1", String(o.y)), a.line.setAttribute("x2", String(d.x)), a.line.setAttribute("y2", String(d.y)), a.line.style.display = a.button.hidden ? "none" : "";
    }), this.amount !== this.target;
  }
  destroy() {
    this.abort.abort(), this.textures.forEach((t) => t.dispose()), this.env?.dispose(), this.scene.environment = null;
  }
}
class vt {
  constructor(t, e) {
    this.host = t, this.kind = e;
    const s = L[e];
    t.innerHTML = `<div class="il-layout"><section class="il-scene-panel"><div class="il-stage" role="img" aria-label="${s.title}互動場景"></div><p class="il-live" role="status" aria-live="polite">${s.objective}</p></section><aside class="il-panel"><p class="il-kicker">EXPERIMENT PLANET · 互動探索</p><h2>${s.title}</h2><p>${s.objective}</p><div class="il-controls"></div><button type="button" data-action="reset">↺ 重置目前操作</button><details><summary>模型說明</summary><p>${e === "buoyancy" ? "淡水、無水流的簡化模型。物件為示意比例，數值是教學樣本，不是所有同類物品的測量值。浮在水面時，浮力和重量平衡；沉底的物體也受到浮力。" : e === "clock" ? "這是指針與齒輪的傳動示意，不是完整鐘錶內部結構。相鄰外齒輪反向轉動；時針与分針由多級齒輪傳動形成 12:1 的轉速關係。石英鐘通常由電池與馬達驅動，機械鐘另有發條或重錘。" : "這是彈簧式回力車的簡化模型：往後拉 → 齒輪使彈簧儲能 → 放手帶動輪軸 → 摩擦使它停下。行駛距離為模型單位，不代表真實車款的公尺數。"}</p></details></aside></div><section class="il-panel il-observations"><h3>觀察紀錄 <span data-count>0 次</span></h3><p>每次只改一個條件，比較結果。紀錄保留於本次實驗，離開後重新開始。</p><ol class="il-log"></ol></section><section class="il-panel il-assessment"><h3>想一想</h3><p>${s.question}</p><div class="il-answers">${s.choices.map((i, o) => `<button type="button" data-answer="${o}">${i}</button>`).join("")}</div><p class="il-feedback" role="status">先完成至少一次操作與觀察，再回答。</p></section>`, this.stage = t.querySelector(".il-stage"), this.status = t.querySelector(".il-live"), this.log = t.querySelector(".il-log");
    const n = document.createElement("p");
    if (n.className = "il-scene-guide", n.textContent = e === "buoyancy" ? "選物品 → 預測 → 放入水中 → 比較浮沉" : e === "clock" ? "左：指針比例 12:1 ｜ 右：外齒輪反向傳動示意" : "向左回拉 → 彈簧儲能 → 放手帶動輪軸", this.stage.append(n), t.querySelector(".il-controls").innerHTML = e === "buoyancy" ? `<label>① 選物品<select data-input="object">${E.map((i, o) => `<option value="${o}">${i.name}</option>`).join("")}</select></label><p data-sample></p><label>② 先預測<select data-input="prediction"><option value="">請選擇</option><option value="float">浮在水面</option><option value="sink">沉到水底</option><option value="unsure">還不確定</option></select></label><button type="button" data-action="run">③ 放入水中</button><p>也可拖動物品，放手入水。可重複測試，猜錯也能學習。</p>` : e === "clock" ? '<label>轉動分針（分鐘）<input data-input="minutes" type="range" min="0" max="720" step="1" value="0"></label><p data-readout>12:00</p><button type="button" data-action="step">分針前進一圈（60 分鐘）</button><button type="button" data-action="run">▶ 播放／暫停</button><button type="button" data-action="record">記錄目前時間</button><p>可拖曳鐘面指針；滑桿與按鈕也能操作。</p>' : '<label>① 向後拉多少<input data-input="pull" type="range" min="10" max="100" step="10" value="50"></label><p data-readout>回拉量 50%</p><label>② 路面<select data-input="surface"><option value="smooth">較平滑</option><option value="rough">較粗糙</option></select></label><button type="button" data-action="run">③ 放手出發</button><p>也可把車向左拖，放手前進。比較同一回拉量在不同路面的結果。</p>', e === "car") {
      const i = document.createElement("div");
      i.className = "bp-heading", i.innerHTML = "<h2>回力車工坊</h2>", t.querySelector(".il-scene-panel").prepend(i), t.dataset.road = "smooth", t.querySelector(".il-controls").innerHTML = '<input type="hidden" data-input="pull" value="50"><div class="car-roads" role="group" aria-label="選擇路面"><button data-road="smooth" aria-pressed="true" aria-label="平路"><svg viewBox="0 0 100 60" aria-hidden="true"><path d="M8 55 30 5h40l22 50" fill="#547990"/><path d="M50 12v9m0 8v9m0 8v8" stroke="#fff3bb" stroke-width="4"/></svg><span>平路</span></button><button data-road="rough" aria-pressed="false" aria-label="石頭路"><svg viewBox="0 0 100 60" aria-hidden="true"><path d="M8 55 30 5h40l22 50" fill="#675852"/><g fill="#d1b99a" stroke="#8c7664"><path d="m25 37 8-8 12 5-3 11-15 2Z"/><path d="m56 17 8-5 9 7-5 8-12-2Z"/><path d="m52 43 8-10 16 5 3 14-21 3Z"/><path d="m38 15 8-7 6 8-4 9-12-1Z"/></g></svg><span>石頭路</span></button></div><p data-readout>回拉量 50%</p><div class="car-force" role="group" aria-label="回拉力量"><button data-force=".25" aria-label="小力回拉">●</button><button data-force=".5" aria-label="中力回拉">●●</button><button data-force="1" aria-label="大力回拉">●●●</button></div><button data-action="run">🏁 出發</button><p>打開旋轉，用手拖動。打開拆卸，點零件。打開拉力，鏡頭自動轉側面、拉遠；向左拉車，放手出發。也可點圓點選力量，再點出發。</p>';
      const o = document.createElement("div");
      o.className = "car-track", o.setAttribute("aria-hidden", "true"), this.stage.append(o), ct(t);
    }
    if (e === "clock") {
      t.classList.add("il-clock-play");
      const i = document.createElement("div");
      i.className = "bp-heading", i.innerHTML = "<h2>時鐘工坊</h2>", t.querySelector(".il-scene-panel").prepend(i), t.querySelector(".il-controls").innerHTML = '<input type="hidden" data-input="minutes" value="0"><p data-readout>12:00</p><button data-action="step" aria-label="分針前進一圈，時針前進一大格">⟳ <span>+1 時</span></button><button data-action="run" aria-label="播放或暫停指針">▶ / Ⅱ</button><button data-action="record" aria-label="記錄目前時間">📒</button><p>調時時，左右拖動鐘面調整時間。打開旋轉開關，用手轉方向；打開拆卸，點右上零件表找零件。</p>';
      const o = t.querySelector('[data-action="reset"]');
      o.textContent = "↺", o.setAttribute("aria-label", "重新開始"), t.querySelector('[data-action="run"]').insertAdjacentHTML("afterend", '<button data-action="peek" aria-label="透視刻度盤" title="透視刻度盤" aria-pressed="false"><svg viewBox="0 0 32 24" width="32" height="24" aria-hidden="true"><path d="M2 12Q16-5 30 12Q16 29 2 12Z" fill="none" stroke="currentColor" stroke-width="2.5"/><circle cx="16" cy="12" r="5" fill="currentColor"/></svg></button>');
      const r = document.createElement("div");
      r.className = "clock-demo-info", r.innerHTML = "<strong>60× · <span data-demo-seconds>0</span> / 60 秒</strong><div>馬達 → 減速齒輪 → 分針 → 時針</div><small>馬達慢動作示意 · 前段減速省略</small>", this.stage.append(r);
      const d = (c) => `<svg viewBox="0 0 160 160" role="img" aria-label="${c}點"><circle cx="80" cy="80" r="70" fill="#fff5db" stroke="#cba85c" stroke-width="7"/>${Array.from({ length: 12 }, (u, l) => `<circle cx="${80 + 59 * Math.sin(l * Math.PI / 6)}" cy="${80 - 59 * Math.cos(l * Math.PI / 6)}" r="3" fill="#294651"/>`).join("")}<path d="M80 80V25" stroke="#168ba8" stroke-width="6" stroke-linecap="round"/><path d="M80 80L${80 + 36 * Math.sin(c * Math.PI / 6)} ${80 - 36 * Math.cos(c * Math.PI / 6)}" stroke="#a47818" stroke-width="9" stroke-linecap="round"/><circle cx="80" cy="80" r="6" fill="#294651"/></svg>`;
      t.querySelector(".il-assessment > p").innerHTML = `<span class="clock-question">${d(12)}<span aria-label="分針前進一圈">⟳ → ?</span></span>`, t.querySelector(".il-assessment h3").textContent = "分針一圈，時針？", t.querySelector(".il-answers").innerHTML = [12, 12, 1].map((c, u) => `<button data-answer="${u}" aria-label="${s.choices[u]}">${d(c).replace("</svg>", u === 0 ? '<path d="M92 38A44 44 0 1 1 69 37M65 29 70 39 59 43" fill="none" stroke="#b07e16" stroke-width="5" stroke-linecap="round"/></svg>' : u === 2 ? '<path d="M80 37A43 43 0 0 1 102 43" fill="none" stroke="#b07e16" stroke-width="6"/></svg>' : "</svg>")}<span>${u === 0 ? "⟳ 一圈" : u === 1 ? "不動" : "一大格"}</span></button>`).join("");
    }
    t.addEventListener("click", this.click, { signal: this.abort.signal }), t.addEventListener("input", this.input, { signal: this.abort.signal }), this.camera.position.set(0, 0, 12), this.scene.add(new st(16777215, e === "buoyancy" ? 2 : 0.45));
    const a = new at(16777215, e === "buoyancy" ? 3 : 1.4);
    a.position.set(-3, 5, 8), this.scene.add(a);
    try {
      this.renderer = new it({ alpha: !0, antialias: !0 }), this.renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5)), this.stage.append(this.renderer.domElement), e === "buoyancy" && (this.stage.addEventListener("pointerdown", this.pointerDown, { signal: this.abort.signal }), this.stage.addEventListener("pointermove", this.pointerMove, { signal: this.abort.signal }), this.stage.addEventListener("pointerup", this.pointerUp, { signal: this.abort.signal }), this.stage.addEventListener("pointercancel", this.pointerCancel, { signal: this.abort.signal })), this.resize = new ResizeObserver(() => this.resizeScene()), this.resize.observe(this.stage);
    } catch {
      this.stage.innerHTML = '<p class="il-fallback">此裝置無法顯示 3D。仍可使用旁邊的選單與按鈕操作，並閱讀文字觀察結果。</p>';
    }
    e === "buoyancy" && this.buildTank(), e !== "buoyancy" && (this.mechanism = new gt(e, this.scene, this.camera, this.stage, t, this.renderer, () => this.wake(), (i, o) => {
      this.active = !1, e === "clock" ? (this.demoStarted = !1, this.mechanism?.setClockDemo(!1), o || (this.minutes = i), this.updateClock(), o && this.record(`轉動指針到 ${this.clockText()}，分針和時針一起運動。`)) : o ? this.run() : (this.pull = i, t.querySelector('[data-input="pull"]').value = String(Math.round(i * 100)), this.updateCar());
    })), e !== "buoyancy" && (t.querySelector("aside > details > p").textContent = e === "clock" ? "常見的電池式石英鐘：電池供电，石英與電路提供節拍，馬達和多級齒輪帶動指針。本模型省略部分細小零件，不是維修圖。分針和時針保持 12:1 的轉速關係。" : "彈簧式回力車：回拉讓輪軸、齒輪帶動捲簧儲能，放手後由捲簧驅動車輪。拆解圖省略部分緊固件；行駛距離為教學模型單位，不代表真實車款。"), this.scene.add(this.object), this.reset(), this.experience = new dt(t, e), document.addEventListener("visibilitychange", () => {
      this.last = 0, document.hidden || this.wake();
    }, { signal: this.abort.signal }), this.wake();
  }
  host;
  kind;
  renderer;
  scene = new z();
  camera = new ot(-5, 5, 3.6, -3.6, 0.1, 100);
  object = new x();
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
  mesh(t, e, s = 0, n = 0, a = 0, i = this.scene) {
    const o = new m(t, new S({ color: e, roughness: 0.55, metalness: 0.12 }));
    return o.position.set(s, n, a), i.add(o), o;
  }
  box(t, e, s, n, a, i, o = 0, r) {
    return this.mesh(new I(t, e, s), n, a, i, o, r);
  }
  buildTank() {
    this.box(8.1, 0.12, 0.4, 9233663, 0, -2.65), this.box(0.12, 4.8, 0.4, 9233663, -4, -0.3), this.box(0.12, 4.8, 0.4, 9233663, 4, -0.3);
    const t = this.box(7.9, 2.7, 0.1, 1142430, 0, -1.2, -0.8);
    t.material.transparent = !0, t.material.opacity = 0.55, this.box(7.9, 0.045, 0.1, 8252159, 0, 0.15, 0.1);
    for (let e = 0; e < 6; e++) this.box(0.2, 0.035, 0.1, 16777215, -3.85, -2.3 + e * 0.45, 0.2);
  }
  disposeObject(t) {
    t.traverse((e) => {
      e instanceof m && (e.geometry.dispose(), (Array.isArray(e.material) ? e.material : [e.material]).forEach((n) => n.dispose()));
    });
  }
  buildSample() {
    this.disposeObject(this.object), this.object.clear();
    const t = E[this.selected];
    if (t.id === "stone" && this.mesh(new nt(0.48), t.color, 0, 0, 0, this.object).scale.set(1.25, 0.8, 0.8), t.id === "key" && (this.mesh(new y(0.25, 0.09, 10, 32), t.color, -0.35, 0.05, 0, this.object), this.box(0.85, 0.12, 0.13, t.color, 0.25, 0.05, 0, this.object), this.box(0.12, 0.25, 0.13, t.color, 0.5, -0.08, 0, this.object), this.box(0.12, 0.2, 0.13, t.color, 0.25, -0.05, 0, this.object)), t.id === "boat") {
      const e = new C();
      e.moveTo(-0.9, 0.1), e.lineTo(0.9, 0.1), e.lineTo(0.5, -0.35), e.lineTo(-0.5, -0.35), e.closePath(), this.mesh(new T(e, { depth: 0.4, bevelEnabled: !1 }), t.color, 0, 0, -0.2, this.object);
      const s = new C();
      s.moveTo(-0.5, 0.1), s.lineTo(0, 0.7), s.lineTo(0.5, 0.1), s.closePath(), this.mesh(new rt(s), 16763523, 0, 0, 0.23, this.object);
    }
    if (t.id === "ball")
      for (let e = 0; e < 6; e++) this.mesh(new M(0.7, 12, 24, e * Math.PI / 3, Math.PI / 3), [16741007, 16777215, 6015987, 16777215, 16766045, 16777215][e], 0, 0, 0, this.object);
    t.id === "wood" && this.box(1.1, 0.65, 0.5, t.color, 0, 0, 0, this.object), t.id === "cork" && (this.mesh(new w(0.25, 0.25, 0.7, 24), t.color, 0, 0, 0, this.object).rotation.z = Math.PI / 2), t.id === "coin" && (this.mesh(new w(0.35, 0.35, 0.08, 32), t.color, 0, 0, 0, this.object).rotation.x = Math.PI / 2), t.id === "marble" && this.mesh(new M(0.32, 24, 16), t.color, 0, 0, 0, this.object), this.object.position.set(0, 1.4, 0.4), this.host.querySelector("[data-sample]").textContent = `${t.note} 教學樣本：${t.mass} g，可排水體積上限 ${t.volume} cm³。`;
  }
  resizeScene() {
    const t = this.stage.clientWidth, e = this.stage.clientHeight;
    !t || !e || (this.camera.left = -5, this.camera.right = 5, this.camera.top = Math.max(3.2, 5 * e / t), this.camera.bottom = -this.camera.top, this.camera.updateProjectionMatrix(), this.renderer?.setSize(t, e), this.wake());
  }
  click = (t) => {
    const e = t.target.closest("button");
    if (e) {
      if (this.kind === "clock" && e.dataset.action === "peek") {
        const s = this.host.dataset.clockPeek !== "true";
        this.mechanism?.setClockPeek(s), this.status.textContent = s ? "透視開啟：看看齒輪怎麼帶動指針。" : "刻度盤恢復。";
        return;
      }
      if (this.kind === "clock" && (["quiz", "notes", "help"].includes(e.dataset.helper || "") || e.hasAttribute("data-clock-rotate") || e.hasAttribute("data-clock-explode") || e.dataset.action === "step") && (this.active = !1, this.updateClock()), this.kind === "clock" && (e.hasAttribute("data-clock-rotate") || e.hasAttribute("data-clock-explode") || e.dataset.action === "step") && (this.demoStarted = !1, this.mechanism?.setClockDemo(!1)), this.kind === "car" && ((e.dataset.carMode || e.dataset.part) && (this.active = !1), e.dataset.road && (this.active = !1, this.rough = e.dataset.road === "rough", this.host.dataset.road = e.dataset.road, this.host.querySelectorAll("[data-road]").forEach((s) => s.setAttribute("aria-pressed", String(s === e))), this.updateCar(), this.status.textContent = this.rough ? "換成石頭路，試試看能跑多遠。" : "換成平路，用相同力量比較看看。"), e.dataset.force && (this.active = !1, this.pull = Number(e.dataset.force), this.mechanism?.setCarMode("test"), this.updateCar())), e.dataset.answer !== void 0) {
        if (this.kind === "car") {
          const s = Number(e.dataset.answer) === L.car.answer, n = this.answerReady ? s ? "答對了！往後拉車時，能量存在捲簧裡。放手後，捲簧透過齒輪帶動車輪。" : "再想想看！回到實驗，拆開車殼看看捲簧，聽聽它的工作。" : "先回到實驗，完成一次拉車試跑，再來選圖片。";
          this.host.querySelector(".il-feedback").innerHTML = `<span aria-hidden="true">${this.answerReady ? s ? "✓ ⭐" : "🔎 ↶" : "🚗 ↶"}</span><span class="bp-sr">${n}</span>`, this.host.querySelectorAll("[data-answer]").forEach((a) => a.setAttribute("aria-pressed", String(a === e)));
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
    this.active = !1, this.dragging = !1, this.last = 0, this.kind === "clock" && (this.demoStarted = !1, this.demoElapsed = 0, this.mechanism?.setClockDemo(!1), this.mechanism?.setClockPeek(!1)), this.kind === "buoyancy" && (this.prediction = "", this.host.querySelector('[data-input="prediction"]').value = "", this.buildSample()), this.kind === "clock" && (this.minutes = 0, this.updateClock()), this.kind === "car" && (this.pull = 0.5, this.mechanism?.setCarMode("rotate"), this.host.querySelector('[data-input="pull"]').value = "50", this.updateCar()), this.status.textContent = this.kind === "car" ? "用手左右拖，看看車子的每一面。" : this.kind === "clock" ? "☝ 拖動調時 · ⟳ 前進一小時" : "準備好了，改變條件後開始觀察。", this.wake();
  }
  run() {
    if (this.kind === "buoyancy") {
      if (this.active) return;
      if (!this.prediction) {
        this.status.textContent = "請先選擇浮、沉或還不確定，再放入水中。";
        return;
      }
      const t = E[this.selected], e = q(t.mass, t.volume);
      this.targetY = e.floats ? 0.15 + 0.3 - 0.6 * e.fraction : -2.13, this.active = !0, this.status.textContent = `正在觀察${t.name}…`;
    } else if (this.kind === "clock")
      (!this.demoStarted || this.demoElapsed >= 60) && (this.demoElapsed = 0, this.demoStarted = !0, this.demoCue = -1, this.minutes = 0), this.active = !this.active, this.last = 0, this.mechanism?.setClockDemo(!0), this.updateClock(), this.status.textContent = this.active ? "60 倍速：一分鐘看完一小時。" : "Ⅱ 暫停";
    else {
      if (this.active) return;
      this.mechanism?.setCarMode("test"), this.runDistance = lt(this.pull, this.rough), this.travel = 0, this.runElapsed = 0, this.object.position.x = -3.2, this.active = !0, this.status.textContent = "彈簧釋放能量，透過輪軸帶動車輪前進。";
    }
    this.wake();
  }
  record(t) {
    const e = document.createElement("li");
    e.textContent = t, this.log.prepend(e), this.log.children.length > 24 && this.log.lastElementChild?.remove(), this.records++, this.host.querySelector("[data-count]").textContent = `${this.records} 次${this.kind === "buoyancy" ? ` · 已測 ${this.tested.size}/8 種` : ""}`, this.answerReady = !0, this.kind === "clock" && (this.host.querySelector(".il-feedback").textContent = "看圖選一個。");
  }
  clockText() {
    const t = Math.floor(this.minutes) % 720;
    return `${Math.floor(t / 60) || 12}:${String(t % 60).padStart(2, "0")}`;
  }
  updateClock() {
    this.mechanism?.setClock(this.minutes), this.host.querySelector('[data-input="minutes"]').value = String(this.minutes % 721);
    const t = this.host.querySelector("[data-readout]"), e = this.clockText();
    t.textContent !== e && (t.textContent = e);
    const s = this.host.querySelector('[data-action="run"]'), n = this.active ? "Ⅱ" : "▶ 1 min";
    s.textContent !== n && (s.textContent = n);
    const a = String(this.active);
    s.getAttribute("aria-pressed") !== a && s.setAttribute("aria-pressed", a);
    const i = this.active ? "暫停一分鐘示範" : this.demoStarted && this.demoElapsed < 60 ? "繼續一分鐘示範" : "播放一分鐘示範";
    s.getAttribute("aria-label") !== i && s.setAttribute("aria-label", i);
  }
  updateCar() {
    this.object.position.set(-1.5 - this.pull * 1.7, -1, 0.2), this.mechanism?.setCar(this.pull), this.host.querySelector("[data-readout]").textContent = `回拉量 ${Math.round(this.pull * 100)}% · ${this.rough ? "較粗糙" : "較平滑"}路面`, this.host.querySelectorAll("[data-force]").forEach((t) => t.setAttribute("aria-pressed", String(Number(t.dataset.force) === this.pull)));
  }
  point(t) {
    const e = this.stage.getBoundingClientRect(), s = new N();
    s.setFromCamera(new B((t.clientX - e.left) / e.width * 2 - 1, 1 - (t.clientY - e.top) / e.height * 2), this.camera);
    const n = new b();
    return s.ray.intersectPlane(new ht(new b(0, 0, 1), 0), n), n;
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
      const n = (Math.atan2(e.x + 1.6, e.y - 0.45) / (2 * Math.PI) * 60 + 60) % 60, a = this.minutes % 60;
      let i = n - a;
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
      const a = E[this.selected], i = q(a.mass, a.volume);
      this.tested.add(a.id);
      const o = `${a.name}：${i.floats ? "浮在水面" : "沉到水底"}。${i.floats ? "漂浮時浮力與重量平衡。" : "最大浮力仍小於重量；沉底後還有水底的支持力。"}`;
      this.status.textContent = o, this.record(`預測：${this.prediction === "float" ? "浮" : this.prediction === "sink" ? "沉" : "不確定"} → ${o}`);
    }
    if (this.active && this.kind === "clock") {
      const a = mt(this.demoElapsed + e);
      this.demoElapsed = a.elapsed, this.minutes = a.minutes;
      const i = this.host.querySelector("[data-demo-seconds]"), o = String(Math.floor(a.elapsed));
      i.textContent !== o && (i.textContent = o);
      const r = Math.min(3, Math.floor(a.elapsed / 20));
      r !== this.demoCue && (this.demoCue = r, this.host.querySelector(".mech-quick-info").innerHTML = ["<strong>馬達 → 齒輪</strong><p>馬達轉動，經過減速齒輪帶動指針；前段減速在這裡省略。</p>", "<strong>分針正在走</strong><p>小齒輪帶大齒輪，轉動就變慢。</p>", "<strong>看看短時針</strong><p>分針走得快，時針慢慢前進。</p>", "<strong>✓ 一小時！</strong><p>分針一圈，時針一大格。</p>"][r]), a.done && (this.active = !1, this.record("60 秒示範完成：分針轉一圈，時針轉 30 度，前進一大格。"), this.status.textContent = "✓ 60 秒 → 1 小時"), this.updateClock();
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
    const n = this.mechanism?.frame(s);
    this.renderer?.render(this.scene, this.camera), this.active || n ? this.wake() : this.last = 0;
  };
  destroy() {
    this.dead = !0, this.experience?.destroy(), cancelAnimationFrame(this.frame), this.abort.abort(), this.resize?.disconnect(), this.mechanism?.destroy(), this.disposeObject(this.scene), this.renderer?.dispose(), this.renderer?.domElement.remove();
  }
}
export {
  vt as InteractiveLab
};
