import { L as l, F as r, b as h } from "./car-art-D34K7c64.mjs";
import { L as p } from "./experience-BQmBRpyo.mjs";
const n = "./images/experiments/buoyancy-v3/";
function d(o, t) {
  return o >= 0.14 && o <= 0.86 && t >= 0.26 && t <= 0.89;
}
class b {
  constructor(t) {
    this.host = t, t.classList.add("il-buoyancy-play"), t.innerHTML = `<div class="il-layout"><section class="il-scene-panel"><div class="bp-heading"><h2>浮力小水池</h2><span>挑一個 → 猜一猜 → 拖進水池</span></div><div class="il-stage bp-pool" role="group" aria-label="水池，選好預測後可點這裡放入物品"><img class="bp-backdrop" src="${n}pool.png" alt="透明水池" draggable="false"><img class="bp-sample" draggable="false" alt=""><span class="bp-result" aria-live="polite"></span><span class="bp-ripple" aria-hidden="true"></span></div><div class="bp-prediction"><strong data-prompt>石頭會浮起來嗎？</strong><div class="bp-choices"><button data-predict="float" aria-pressed="false" aria-label="預測會浮"><b aria-hidden="true">○</b><span>會浮</span></button><button data-predict="sink" aria-pressed="false" aria-label="預測會沉"><b aria-hidden="true">×</b><span>會沉</span></button><button data-drop aria-label="把選好的物品放入水池">💧 放入</button></div><p class="il-live bp-sr" role="status" aria-live="polite">先挑一個物品。</p></div></section><aside class="il-panel bp-shelf"><div class="bp-shelf-title"><strong>我的寶物</strong><span data-tested>0 / 8</span></div><div class="bp-items">${r.map((e, s) => `<button data-object="${s}" aria-label="${e.name}，選取或拖進水池" aria-pressed="${s === 0}" draggable="false"><img src="${n}${e.id}.png" alt="" draggable="false"><span>${e.name}</span><i aria-hidden="true"></i></button>`).join("")}</div><div class="il-controls"><p>挑一個寶物，猜它會不會浮。把圖卡拖進水池，或點「放入」。圈圈是會浮，叉叉是會沉，不是答對答錯。</p></div><button data-action="reset">↺ 再玩一次</button><details><summary>給家長</summary><p>淡水中的簡化教學樣本；圖像不是實際大小。紙船未吸水、球已充氣、木塊是輕木。浮起時浮力與重量平衡，沉下去也受到浮力。請勿讓孩子吞食小物件，實際玩水需成人陪同。</p>${r.map((e) => `<p>${e.name}：${e.note}</p>`).join("")}</details></aside></div><section class="il-panel il-observations"><h3>我的發現 <span data-count>0 次</span></h3><ol class="il-log"></ol></section><section class="il-panel il-assessment"><h3>小挑戰</h3><p>${l.buoyancy.question}</p><div class="il-answers">${l.buoyancy.choices.map((e, s) => `<button data-answer="${s}">${e}</button>`).join("")}</div><p class="il-feedback" role="status">玩一次，再來挑戰！</p></section>`, this.stage = t.querySelector(".bp-pool"), this.sample = t.querySelector(".bp-sample"), this.ghost = document.createElement("img"), this.ghost.className = "bp-ghost", this.ghost.alt = "", this.ghost.hidden = !0, this.ghost.draggable = !1, t.append(this.ghost), t.addEventListener("click", this.click, { signal: this.abort.signal }), t.addEventListener("pointerdown", this.down, { signal: this.abort.signal }), t.addEventListener("pointermove", this.move, { signal: this.abort.signal }), t.addEventListener("pointerup", this.up, { signal: this.abort.signal }), t.addEventListener("pointercancel", this.cancelDrag, { signal: this.abort.signal }), t.addEventListener("dragstart", (e) => e.preventDefault(), { signal: this.abort.signal }), this.select(0), this.experience = new p(t, "buoyancy");
  }
  host;
  abort = new AbortController();
  experience;
  selected = 0;
  prediction = null;
  pendingDrop = null;
  busy = !1;
  timer;
  tested = /* @__PURE__ */ new Set();
  records = 0;
  drag;
  ghost;
  stage;
  sample;
  announce(t) {
    this.host.querySelector(".il-live").textContent = t;
  }
  select(t) {
    if (this.busy) return;
    this.selected = t, this.prediction = null, this.pendingDrop = null;
    const e = r[t];
    this.sample.src = `${n}${e.id}.png`, this.sample.alt = e.name, this.sample.classList.remove("is-moving"), this.sample.style.left = "50%", this.sample.style.top = "24%", this.host.querySelector("[data-prompt]").textContent = `${e.name}會浮起來嗎？`, this.host.querySelector(".bp-result").textContent = "", this.host.querySelectorAll("[data-object]").forEach((s) => s.setAttribute("aria-pressed", String(Number(s.dataset.object) === t))), this.host.querySelectorAll("[data-predict]").forEach((s) => s.setAttribute("aria-pressed", "false")), this.announce(`${e.name}。你猜它會浮起來嗎？點圈圈猜會浮，點叉叉猜會沉。`);
  }
  predict(t) {
    this.busy || (this.prediction = t, this.host.querySelector("[data-prompt]").textContent = `${r[this.selected].name}會浮起來嗎？`, this.host.querySelectorAll("[data-predict]").forEach((e) => e.setAttribute("aria-pressed", String(e.dataset.predict === "float" === t))), this.announce(`你猜${t ? "會浮" : "會沉"}。把${r[this.selected].name}拖進水池試試看！`), this.pendingDrop !== null && this.drop(this.pendingDrop));
  }
  drop(t = 0.5) {
    if (this.busy) return;
    if (this.prediction === null) {
      this.pendingDrop = t, this.host.querySelector("[data-prompt]").textContent = "先猜猜看！ ○ 還是 ×？", this.announce("先猜猜看，圈圈是會浮，叉叉是會沉。點好就會放入水池！");
      return;
    }
    this.pendingDrop = null, this.busy = !0;
    const e = r[this.selected], s = h(e.mass, e.volume), i = this.prediction;
    this.host.querySelectorAll("[data-object],[data-predict],[data-drop]").forEach((a) => a.disabled = !0), this.sample.style.left = `${Math.max(0.23, Math.min(0.77, t)) * 100}%`, this.sample.classList.remove("is-moving"), this.sample.style.top = "24%", this.sample.offsetHeight, this.sample.classList.add("is-moving"), this.sample.style.top = s.floats ? "43%" : "80%", this.stage.classList.add("is-testing"), this.announce(`看看${e.name}！`), this.timer = setTimeout(() => {
      this.busy = !1, this.stage.classList.remove("is-testing"), this.tested.add(e.id), this.records++, this.host.querySelectorAll("[data-object],[data-predict],[data-drop]").forEach((c) => c.disabled = !1), this.host.querySelector(`[data-object="${this.selected}"]`).classList.add("is-tested"), this.host.querySelector("[data-tested]").textContent = `${this.tested.size} / 8`, this.host.querySelector("[data-count]").textContent = `${this.records} 次`, this.host.querySelector(".bp-result").textContent = `${s.floats ? "↑ 浮起來了" : "↓ 沉下去了"} · ${i === s.floats ? "猜中了！" : "新發現！"}`;
      const a = document.createElement("li");
      a.textContent = `${e.name}：猜${i ? "浮" : "沉"} → ${s.floats ? "浮" : "沉"}`, this.host.querySelector(".il-log").prepend(a), this.host.querySelector(".il-log").children.length > 24 && this.host.querySelector(".il-log").lastElementChild?.remove(), this.announce(`${e.name}${s.floats ? "浮起來了！水向上托住它，浮力和重量平衡。" : "沉下去了！水也有往上托它，但不夠托住它的重量。"}${i === s.floats ? "你猜中了！" : "這是新的發現，再挑一個試試！"}`);
    }, 1400);
  }
  click = (t) => {
    const e = t.target.closest("button");
    e?.dataset.object !== void 0 ? Number(e.dataset.object) !== this.selected && this.select(Number(e.dataset.object)) : e?.dataset.predict ? this.predict(e.dataset.predict === "float") : e?.hasAttribute("data-drop") ? this.drop() : e?.dataset.action === "reset" ? (clearTimeout(this.timer), this.busy = !1, this.stage.classList.remove("is-testing"), this.host.querySelectorAll("[data-object],[data-predict],[data-drop]").forEach((s) => s.disabled = !1), this.select(this.selected)) : e?.dataset.answer !== void 0 ? this.host.querySelector(".il-feedback").textContent = this.records ? Number(e.dataset.answer) === l.buoyancy.answer ? "猜對了！要一起看重量和能排開的水量。" : "再試試球和硬幣，找找線索！" : "先放一個物品試試看！" : t.target.closest(".bp-pool") && this.drop();
  };
  down = (t) => {
    if (this.busy || t.button !== 0) return;
    const e = t.target.closest("[data-object]");
    e && (Number(e.dataset.object) !== this.selected && this.select(Number(e.dataset.object)), this.drag = { pointer: t.pointerId, x: t.clientX, y: t.clientY, moved: !1, button: e }, e.setPointerCapture(t.pointerId), this.ghost.src = this.sample.src, this.ghost.style.left = `${t.clientX}px`, this.ghost.style.top = `${t.clientY}px`);
  };
  move = (t) => {
    if (!this.drag || t.pointerId !== this.drag.pointer || (Math.hypot(t.clientX - this.drag.x, t.clientY - this.drag.y) > 6 && (this.drag.moved = !0), !this.drag.moved)) return;
    this.ghost.hidden = !1, this.ghost.style.left = `${t.clientX}px`, this.ghost.style.top = `${t.clientY}px`;
    const e = this.stage.getBoundingClientRect();
    this.stage.classList.toggle("is-drop-target", d((t.clientX - e.left) / e.width, (t.clientY - e.top) / e.height));
  };
  up = (t) => {
    if (!this.drag || t.pointerId !== this.drag.pointer) return;
    const e = this.drag.moved;
    if (this.cancelDrag(), !e) return;
    const s = this.stage.getBoundingClientRect(), i = (t.clientX - s.left) / s.width, a = (t.clientY - s.top) / s.height;
    d(i, a) ? this.drop(i) : this.announce("拖到水池裡再放手喔！");
  };
  cancelDrag = () => {
    this.drag?.button.hasPointerCapture(this.drag.pointer) && this.drag.button.releasePointerCapture(this.drag.pointer), this.drag = void 0, this.ghost.hidden = !0, this.stage.classList.remove("is-drop-target");
  };
  destroy() {
    clearTimeout(this.timer), this.cancelDrag(), this.abort.abort(), this.experience.destroy(), this.ghost.remove();
  }
}
export {
  b as BuoyancyPlay,
  n as FLOAT_ART,
  d as insidePool
};
