const y = [
  { id: "stone", name: "石頭", mass: 135, volume: 50, color: 9015980, note: "一般緻密石頭；不代表有許多氣孔的浮石。" },
  { id: "key", name: "金屬鑰匙", mass: 16, volume: 2, color: 16764775, note: "實心金屬鑰匙，不含浮水鑰匙圈。" },
  { id: "boat", name: "紙船", mass: 8, volume: 160, color: 16772038, note: "完整且尚未吸水的紙船，船內保留空氣；此模型不模擬吸水和翻覆。" },
  { id: "ball", name: "海灘球", mass: 80, volume: 4e3, color: 16741019, note: "已充氣、未漏氣的海灘球。" },
  { id: "wood", name: "木塊", mass: 30, volume: 60, color: 13077841, note: "乾燥的一般輕木；不同木種的密度不同。" },
  { id: "cork", name: "軟木塞", mass: 5, volume: 25, color: 14003826, note: "乾燥軟木塞，內部有許多小氣孔。" },
  { id: "coin", name: "硬幣", mass: 6, volume: 0.7, color: 16104524, note: "一般金屬硬幣，輕輕放入水中。" },
  { id: "marble", name: "玻璃彈珠", mass: 12, volume: 4.8, color: 8577007, note: "實心玻璃彈珠，不是中空玻璃球。" }
];
function q(c, e) {
  if (!(c > 0 && e > 0) || !Number.isFinite(c + e)) throw new Error("Invalid sample");
  return { floats: c < e, fraction: Math.min(1, c / e), weight: c * 981e-5, maxBuoyancy: e * 981e-5 };
}
function S(c, e) {
  return 3.6 * Math.max(0, Math.min(1, c)) ** 2 / (e ? 2 : 1);
}
const u = {
  buoyancy: { title: "浮力實驗室", objective: "比較 8 種物品的浮沉，理解水也會向上托住物體。", question: "為什麼充氣海灘球比硬幣重，卻能浮起？", choices: ["只要大就會浮", "要一起考慮重量與能排開的水量", "沉下去的物體沒有浮力"], answer: 1 },
  clock: { title: "簡單機構：時鐘", objective: "轉動分針，觀察時針與齒輪如何一起運動。", question: "分針轉一圈，時針會走多少？", choices: ["一圈", "完全不動", "一大格，也就是一圈的十二分之一"], answer: 2 },
  car: { title: "簡單機構：回力車", objective: "比較回拉量與路面，觀察彈簧儲能如何帶動車輪。", question: "回力車往後拉時，主要把能量存在哪裡？", choices: ["彈簧", "車子的顏色", "空氣中"], answer: 0 }
}, b = "./images/experiments/car-v4/";
function w(c) {
  const e = c.querySelector(".il-stage"), s = document.createElement("div");
  s.className = "car-race-background", s.setAttribute("aria-hidden", "true"), s.innerHTML = `<img class="car-smooth-bg" src="${b}track-smooth.png" alt="" draggable="false"><img class="car-rough-bg" src="${b}track-rough.png" alt="" draggable="false">`, e.prepend(s), c.querySelectorAll("[data-road]").forEach((o) => {
    const r = document.createElement("img");
    r.src = `${b}track-${o.dataset.road}.png`, r.alt = "", r.draggable = !1, o.querySelector("svg")?.replaceWith(r);
  });
  const a = c.querySelector(".il-assessment");
  a.classList.add("car-picture-quiz"), a.innerHTML = `<div class="car-picture-prompt"><h3 class="bp-sr">${u.car.question}</h3><img src="${b}question-pull.png" alt="手把回力車往後拉，箭頭指向後方"><span class="car-question-mark" aria-hidden="true">?</span><button data-car-read aria-label="聽題目" title="聽題目">🔊</button></div><div class="il-answers">${["spring", "paint", "air"].map((o, r) => `<button data-answer="${r}" aria-label="${u.car.choices[r]}" aria-pressed="false"><img src="${b}${o}.png" alt="" draggable="false"><span class="bp-sr">${u.car.choices[r]}</span></button>`).join("")}</div><p class="il-feedback" role="status"><span aria-hidden="true">👆</span><span class="bp-sr">先玩回力車，再點圖片回答。可點喇叭聽題目。</span></p>`;
}
class x {
  constructor(e, s) {
    this.host = e, e.classList.add("il-workspace");
    const a = document.createElement("nav");
    if (a.className = "il-mission-nav", a.setAttribute("aria-label", "實驗小幫手"), a.innerHTML = '<button data-helper="voice" aria-pressed="false">🔊 開始語音陪玩</button><button data-helper="replay">🗣 再講一次</button><button data-helper="notes">📒 發現筆記</button><button data-helper="quiz">🌟 小挑戰</button><button data-helper="help">💡 怎麼玩</button><span class="il-voice-state" role="status">點一下，開啟語音</span>', e.prepend(a), this.voiceButton = a.querySelector('[data-helper="voice"]'), s === "buoyancy" || s === "car") {
      const i = e.querySelector(".bp-heading"), t = document.createElement("button");
      t.className = "bp-back-icon", t.type = "button", t.textContent = "←", t.setAttribute("aria-label", "返回實驗星球"), t.title = "返回實驗星球", t.addEventListener("click", () => e.closest(".il-shell")?.querySelector(".il-back")?.click(), { signal: this.abort.signal }), i.prepend(t), i.append(a);
      const l = { voice: "🔊", replay: "↻", notes: "📒", quiz: "🌟", help: "💡" };
      if (a.querySelectorAll("button").forEach((n) => {
        const p = n.textContent.replace(/^\S+\s*/, "");
        n.setAttribute("aria-label", p), n.title = p, n.textContent = l[n.dataset.helper];
      }), s === "car") {
        const n = a.querySelector('[data-helper="quiz"]');
        n.innerHTML = `<img src="${b}pencil.png" alt="" draggable="false">`, n.setAttribute("aria-label", "考題"), n.title = "切換考題";
      }
    }
    this.dialog = document.createElement("dialog"), this.dialog.className = "il-discovery-dialog", this.dialog.setAttribute("aria-label", "實驗探索卡"), this.dialog.innerHTML = '<div class="il-dialog-tools"><button data-dialog-replay type="button">🔊 重聽這張卡</button><button data-dialog-stop type="button">⏸ 停止講解</button><button class="il-dialog-close" type="button">✦ 回去玩</button></div><div data-dialog-body></div>', e.append(this.dialog);
    const o = document.createElement("section");
    o.className = "il-help", o.innerHTML = `<h3>一起來探索！</h3><p>${u[s].objective}</p>`;
    const r = e.querySelector(".il-controls > p:last-child");
    r && o.append(r);
    const d = e.querySelector("aside > details");
    d && o.append(d);
    const f = e.querySelector(".mech-parent");
    f && o.append(f);
    const v = e.querySelector(".mech-part-info");
    v && o.append(v);
    const h = [e.querySelector(".il-observations"), e.querySelector(".il-assessment"), o];
    h.forEach((i) => {
      i.setAttribute("hidden", ""), this.dialog.querySelector("[data-dialog-body]").append(i);
    });
    const g = (i) => {
      e.dataset.carPage = i ? "quiz" : "experiment", h[1].toggleAttribute("hidden", !i);
      const t = a.querySelector('[data-helper="quiz"]');
      t.innerHTML = i ? "↶" : `<img src="${b}pencil.png" alt="" draggable="false">`, t.setAttribute("aria-label", i ? "回到實驗" : "考題"), t.setAttribute("aria-pressed", String(i));
    };
    s === "car" && (e.querySelector(".il-scene-panel").append(h[1]), g(!1));
    const m = () => this.say(this.lastText || `${u[s].title}。${o.textContent}`, !0);
    a.addEventListener("click", (i) => {
      const t = i.target.closest("button")?.dataset.helper;
      if (t === "voice") {
        if (this.enabled = !this.enabled, this.voiceButton.setAttribute("aria-pressed", String(this.enabled)), this.voiceButton.textContent = s !== "clock" ? this.enabled ? "🔊" : "🔇" : this.enabled ? "🔊 語音陪玩中" : "🔇 語音已關閉", s !== "clock") {
          const l = this.enabled ? "關閉語音陪玩" : "開啟語音陪玩";
          this.voiceButton.setAttribute("aria-label", l), this.voiceButton.title = l;
        }
        this.enabled ? this.say(`嗨，小小探險家！${u[s].title}。${u[s].objective}。${r?.textContent || ""}`) : (this.stop(), this.voiceState("語音已關閉"));
      } else if (t === "replay") m();
      else if (t === "quiz" && s === "car") {
        const l = e.dataset.carPage !== "quiz";
        g(l), l ? this.say(h[1].textContent || "") : this.stop();
      } else if (t) {
        s === "car" && g(!1);
        const l = ["notes", "quiz", "help"].indexOf(t);
        if (l < 0) return;
        h.forEach((n, p) => n.toggleAttribute("hidden", p !== l)), this.dialog.showModal(), this.say(h[l].textContent || "");
      }
    }, { signal: this.abort.signal }), this.dialog.querySelector(".il-dialog-close").addEventListener("click", () => this.dialog.close(), { signal: this.abort.signal }), this.dialog.querySelector("[data-dialog-replay]").addEventListener("click", () => this.say(h.find((i) => !i.hasAttribute("hidden"))?.textContent || "", !0), { signal: this.abort.signal }), this.dialog.querySelector("[data-dialog-stop]").addEventListener("click", () => {
      this.stop(), this.voiceState("講解已停止");
    }, { signal: this.abort.signal }), this.dialog.addEventListener("close", () => this.stop(), { signal: this.abort.signal }), e.addEventListener("click", (i) => {
      const t = i.target.closest("button");
      s === "car" && t?.hasAttribute("data-car-read") && this.say(`${u.car.question}。點選圖片：彈簧、車子的顏色，還是空氣？`, !0), t?.dataset.view && this.say(t.dataset.view === "whole" ? "合起來！看看完整的外觀，也可以拖動模型來操作。" : t.dataset.view === "xray" ? "透視眼開啟！外殼變透明了，點零件聽聽它的工作。" : "零件出任務！拆開後，點數字或零件名稱，一起找出它的小祕密。"), t?.dataset.action === "reset" && this.say("重新準備好了！試著只改一個條件，再觀察一次。");
    }, { signal: this.abort.signal }), e.addEventListener("change", (i) => {
      const t = i.target;
      t.matches("select") ? this.say(`${t.closest("label")?.firstChild?.textContent}。${t.selectedOptions[0]?.textContent}。${t.dataset.input === "object" && e.querySelector("[data-sample]")?.textContent || ""}`) : t.matches("[data-input]") && this.say(e.querySelector("[data-readout]")?.textContent || "");
    }, { signal: this.abort.signal }), this.observer = new MutationObserver((i) => {
      const t = [".il-feedback", ".mech-quick-info", ".il-live", ".il-log"];
      for (const l of t) {
        const n = e.querySelector(l);
        if (n && i.some((p) => n === p.target || n.contains(p.target))) {
          if (l === ".il-live" && n.textContent?.startsWith("準備好了")) continue;
          this.say(l === ".il-log" ? n.firstElementChild?.textContent || "" : n.textContent || "");
          break;
        }
      }
    });
    for (const i of [".il-feedback", ".mech-quick-info", ".il-live", ".il-log"]) {
      const t = e.querySelector(i);
      t && this.observer.observe(t, { childList: !0, subtree: !0, characterData: !0 });
    }
    document.addEventListener("visibilitychange", () => {
      document.hidden && this.stop();
    }, { signal: this.abort.signal });
  }
  host;
  abort = new AbortController();
  observer;
  enabled = !1;
  lastText = "";
  voiceButton;
  speech;
  dialog;
  voiceState(e) {
    this.host.querySelector(".il-voice-state").textContent = e;
  }
  stop() {
    "speechSynthesis" in window && window.speechSynthesis.cancel(), this.speech = void 0;
  }
  say(e, s = !1) {
    if (this.lastText = e, !this.enabled && !s) return;
    if (!("speechSynthesis" in window)) {
      this.voiceState("此裝置無語音，請看文字講解");
      return;
    }
    this.stop();
    const a = new SpeechSynthesisUtterance(e);
    this.speech = a, a.lang = "zh-TW", a.rate = 0.88;
    const o = window.speechSynthesis.getVoices(), r = o.find((d) => /^zh[-_]TW$/i.test(d.lang)) || o.find((d) => /^zh/i.test(d.lang));
    r && (a.voice = r), a.onstart = () => {
      this.speech === a && this.voiceState("✦ 正在講解…");
    }, a.onend = () => {
      this.speech === a && this.voiceState("再點一下，繼續探索！");
    }, a.onerror = (d) => {
      this.speech === a && !["interrupted", "canceled"].includes(d.error) && this.voiceState("語音未播放，請點「再講一次」或看文字");
    }, window.speechSynthesis.speak(a);
  }
  destroy() {
    this.stop(), this.observer.disconnect(), this.abort.abort(), this.dialog.close();
  }
}
export {
  y as F,
  u as L,
  x as a,
  q as b,
  S as c,
  w as i
};
