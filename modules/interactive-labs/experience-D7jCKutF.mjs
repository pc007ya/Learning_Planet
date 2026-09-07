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
function f(o, t) {
  if (!(o > 0 && t > 0) || !Number.isFinite(o + t)) throw new Error("Invalid sample");
  return { floats: o < t, fraction: Math.min(1, o / t), weight: o * 981e-5, maxBuoyancy: t * 981e-5 };
}
function m(o, t) {
  return 3.6 * Math.max(0, Math.min(1, o)) ** 2 / (t ? 2 : 1);
}
const b = {
  buoyancy: { title: "浮力實驗室", objective: "比較 8 種物品的浮沉，理解水也會向上托住物體。", question: "為什麼充氣海灘球比硬幣重，卻能浮起？", choices: ["只要大就會浮", "要一起考慮重量與能排開的水量", "沉下去的物體沒有浮力"], answer: 1 },
  clock: { title: "簡單機構：時鐘", objective: "轉動分針，觀察時針與齒輪如何一起運動。", question: "分針轉一圈，時針會走多少？", choices: ["一圈", "完全不動", "一大格，也就是一圈的十二分之一"], answer: 2 },
  car: { title: "簡單機構：回力車", objective: "比較回拉量與路面，觀察彈簧儲能如何帶動車輪。", question: "回力車往後拉時，主要把能量存在哪裡？", choices: ["彈簧", "車子的顏色", "空氣中"], answer: 0 }
};
class S {
  constructor(t, r) {
    this.host = t, t.classList.add("il-workspace");
    const i = document.createElement("nav");
    i.className = "il-mission-nav", i.setAttribute("aria-label", "實驗小幫手"), i.innerHTML = '<button data-helper="voice" aria-pressed="false">🔊 開始語音陪玩</button><button data-helper="replay">🗣 再講一次</button><button data-helper="notes">📒 發現筆記</button><button data-helper="quiz">🌟 小挑戰</button><button data-helper="help">💡 怎麼玩</button><span class="il-voice-state" role="status">點一下，開啟語音</span>', t.prepend(i), this.voiceButton = i.querySelector('[data-helper="voice"]'), this.dialog = document.createElement("dialog"), this.dialog.className = "il-discovery-dialog", this.dialog.setAttribute("aria-label", "實驗探索卡"), this.dialog.innerHTML = '<div class="il-dialog-tools"><button data-dialog-replay type="button">🔊 重聽這張卡</button><button data-dialog-stop type="button">⏸ 停止講解</button><button class="il-dialog-close" type="button">✦ 回去玩</button></div><div data-dialog-body></div>', t.append(this.dialog);
    const a = document.createElement("section");
    a.className = "il-help", a.innerHTML = `<h3>一起來探索！</h3><p>${b[r].objective}</p>`;
    const d = t.querySelector(".il-controls > p:last-child");
    d && a.append(d);
    const n = t.querySelector("aside > details");
    n && a.append(n);
    const p = t.querySelector(".mech-parent");
    p && a.append(p);
    const g = t.querySelector(".mech-part-info");
    g && a.append(g);
    const h = [t.querySelector(".il-observations"), t.querySelector(".il-assessment"), a];
    h.forEach((s) => {
      s.setAttribute("hidden", ""), this.dialog.querySelector("[data-dialog-body]").append(s);
    });
    const v = () => this.say(this.lastText || `${b[r].title}。${a.textContent}`, !0);
    i.addEventListener("click", (s) => {
      const e = s.target.closest("button")?.dataset.helper;
      if (e === "voice")
        this.enabled = !this.enabled, this.voiceButton.setAttribute("aria-pressed", String(this.enabled)), this.voiceButton.textContent = this.enabled ? "🔊 語音陪玩中" : "🔇 語音已關閉", this.enabled ? this.say(`嗨，小小探險家！${b[r].title}。${b[r].objective}。${d?.textContent || ""}`) : (this.stop(), this.voiceState("語音已關閉"));
      else if (e === "replay") v();
      else if (e) {
        const c = ["notes", "quiz", "help"].indexOf(e);
        if (c < 0) return;
        h.forEach((l, u) => l.toggleAttribute("hidden", u !== c)), this.dialog.showModal(), this.say(h[c].textContent || "");
      }
    }, { signal: this.abort.signal }), this.dialog.querySelector(".il-dialog-close").addEventListener("click", () => this.dialog.close(), { signal: this.abort.signal }), this.dialog.querySelector("[data-dialog-replay]").addEventListener("click", () => this.say(h.find((s) => !s.hasAttribute("hidden"))?.textContent || "", !0), { signal: this.abort.signal }), this.dialog.querySelector("[data-dialog-stop]").addEventListener("click", () => {
      this.stop(), this.voiceState("講解已停止");
    }, { signal: this.abort.signal }), this.dialog.addEventListener("close", () => this.stop(), { signal: this.abort.signal }), t.addEventListener("click", (s) => {
      const e = s.target.closest("button");
      e?.dataset.view && this.say(e.dataset.view === "whole" ? "合起來！看看完整的外觀，也可以拖動模型來操作。" : e.dataset.view === "xray" ? "透視眼開啟！外殼變透明了，點零件聽聽它的工作。" : "零件出任務！拆開後，點數字或零件名稱，一起找出它的小祕密。"), e?.dataset.action === "reset" && this.say("重新準備好了！試著只改一個條件，再觀察一次。");
    }, { signal: this.abort.signal }), t.addEventListener("change", (s) => {
      const e = s.target;
      e.matches("select") ? this.say(`${e.closest("label")?.firstChild?.textContent}。${e.selectedOptions[0]?.textContent}。${e.dataset.input === "object" && t.querySelector("[data-sample]")?.textContent || ""}`) : e.matches("[data-input]") && this.say(t.querySelector("[data-readout]")?.textContent || "");
    }, { signal: this.abort.signal }), this.observer = new MutationObserver((s) => {
      const e = [".il-feedback", ".mech-quick-info", ".il-live", ".il-log"];
      for (const c of e) {
        const l = t.querySelector(c);
        if (l && s.some((u) => l === u.target || l.contains(u.target))) {
          if (c === ".il-live" && l.textContent?.startsWith("準備好了")) continue;
          this.say(c === ".il-log" ? l.firstElementChild?.textContent || "" : l.textContent || "");
          break;
        }
      }
    });
    for (const s of [".il-feedback", ".mech-quick-info", ".il-live", ".il-log"]) {
      const e = t.querySelector(s);
      e && this.observer.observe(e, { childList: !0, subtree: !0, characterData: !0 });
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
  voiceState(t) {
    this.host.querySelector(".il-voice-state").textContent = t;
  }
  stop() {
    "speechSynthesis" in window && window.speechSynthesis.cancel(), this.speech = void 0;
  }
  say(t, r = !1) {
    if (this.lastText = t, !this.enabled && !r) return;
    if (!("speechSynthesis" in window)) {
      this.voiceState("此裝置無語音，請看文字講解");
      return;
    }
    this.stop();
    const i = new SpeechSynthesisUtterance(t);
    this.speech = i, i.lang = "zh-TW", i.rate = 0.88;
    const a = window.speechSynthesis.getVoices(), d = a.find((n) => /^zh[-_]TW$/i.test(n.lang)) || a.find((n) => /^zh/i.test(n.lang));
    d && (i.voice = d), i.onstart = () => {
      this.speech === i && this.voiceState("✦ 正在講解…");
    }, i.onend = () => {
      this.speech === i && this.voiceState("再點一下，繼續探索！");
    }, i.onerror = (n) => {
      this.speech === i && !["interrupted", "canceled"].includes(n.error) && this.voiceState("語音未播放，請點「再講一次」或看文字");
    }, window.speechSynthesis.speak(i);
  }
  destroy() {
    this.stop(), this.observer.disconnect(), this.abort.abort(), this.dialog.close();
  }
}
export {
  y as F,
  b as L,
  S as a,
  f as b,
  m as c
};
