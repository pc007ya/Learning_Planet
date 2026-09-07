const f = [
  { id: "stone", name: "石頭", mass: 135, volume: 50, color: 9015980, note: "一般緻密石頭；不代表有許多氣孔的浮石。" },
  { id: "key", name: "金屬鑰匙", mass: 16, volume: 2, color: 16764775, note: "實心金屬鑰匙，不含浮水鑰匙圈。" },
  { id: "boat", name: "紙船", mass: 8, volume: 160, color: 16772038, note: "完整且尚未吸水的紙船，船內保留空氣；此模型不模擬吸水和翻覆。" },
  { id: "ball", name: "海灘球", mass: 80, volume: 4e3, color: 16741019, note: "已充氣、未漏氣的海灘球。" },
  { id: "wood", name: "木塊", mass: 30, volume: 60, color: 13077841, note: "乾燥的一般輕木；不同木種的密度不同。" },
  { id: "cork", name: "軟木塞", mass: 5, volume: 25, color: 14003826, note: "乾燥軟木塞，內部有許多小氣孔。" },
  { id: "coin", name: "硬幣", mass: 6, volume: 0.7, color: 16104524, note: "一般金屬硬幣，輕輕放入水中。" },
  { id: "marble", name: "玻璃彈珠", mass: 12, volume: 4.8, color: 8577007, note: "實心玻璃彈珠，不是中空玻璃球。" }
];
function m(c, e) {
  if (!(c > 0 && e > 0) || !Number.isFinite(c + e)) throw new Error("Invalid sample");
  return { floats: c < e, fraction: Math.min(1, c / e), weight: c * 981e-5, maxBuoyancy: e * 981e-5 };
}
function S(c, e) {
  return 3.6 * Math.max(0, Math.min(1, c)) ** 2 / (e ? 2 : 1);
}
const b = {
  buoyancy: { title: "浮力實驗室", objective: "比較 8 種物品的浮沉，理解水也會向上托住物體。", question: "為什麼充氣海灘球比硬幣重，卻能浮起？", choices: ["只要大就會浮", "要一起考慮重量與能排開的水量", "沉下去的物體沒有浮力"], answer: 1 },
  clock: { title: "簡單機構：時鐘", objective: "轉動分針，觀察時針與齒輪如何一起運動。", question: "分針轉一圈，時針會走多少？", choices: ["一圈", "完全不動", "一大格，也就是一圈的十二分之一"], answer: 2 },
  car: { title: "簡單機構：回力車", objective: "比較回拉量與路面，觀察彈簧儲能如何帶動車輪。", question: "回力車往後拉時，主要把能量存在哪裡？", choices: ["彈簧", "車子的顏色", "空氣中"], answer: 0 }
};
class q {
  constructor(e, n) {
    this.host = e, e.classList.add("il-workspace");
    const a = document.createElement("nav");
    if (a.className = "il-mission-nav", a.setAttribute("aria-label", "實驗小幫手"), a.innerHTML = '<button data-helper="voice" aria-pressed="false">🔊 開始語音陪玩</button><button data-helper="replay">🗣 再講一次</button><button data-helper="notes">📒 發現筆記</button><button data-helper="quiz">🌟 小挑戰</button><button data-helper="help">💡 怎麼玩</button><span class="il-voice-state" role="status">點一下，開啟語音</span>', e.prepend(a), this.voiceButton = a.querySelector('[data-helper="voice"]'), n === "buoyancy" || n === "car") {
      const i = e.querySelector(".bp-heading"), t = document.createElement("button");
      t.className = "bp-back-icon", t.type = "button", t.textContent = "←", t.setAttribute("aria-label", "返回實驗星球"), t.title = "返回實驗星球", t.addEventListener("click", () => e.closest(".il-shell")?.querySelector(".il-back")?.click(), { signal: this.abort.signal }), i.prepend(t), i.append(a);
      const o = { voice: "🔊", replay: "↻", notes: "📒", quiz: "🌟", help: "💡" };
      if (a.querySelectorAll("button").forEach((s) => {
        const h = s.textContent.replace(/^\S+\s*/, "");
        s.setAttribute("aria-label", h), s.title = h, s.textContent = o[s.dataset.helper];
      }), n === "car") {
        const s = a.querySelector('[data-helper="quiz"]');
        s.textContent = "考題", s.setAttribute("aria-label", "考題"), s.title = "切換考題";
      }
    }
    this.dialog = document.createElement("dialog"), this.dialog.className = "il-discovery-dialog", this.dialog.setAttribute("aria-label", "實驗探索卡"), this.dialog.innerHTML = '<div class="il-dialog-tools"><button data-dialog-replay type="button">🔊 重聽這張卡</button><button data-dialog-stop type="button">⏸ 停止講解</button><button class="il-dialog-close" type="button">✦ 回去玩</button></div><div data-dialog-body></div>', e.append(this.dialog);
    const l = document.createElement("section");
    l.className = "il-help", l.innerHTML = `<h3>一起來探索！</h3><p>${b[n].objective}</p>`;
    const u = e.querySelector(".il-controls > p:last-child");
    u && l.append(u);
    const r = e.querySelector("aside > details");
    r && l.append(r);
    const g = e.querySelector(".mech-parent");
    g && l.append(g);
    const v = e.querySelector(".mech-part-info");
    v && l.append(v);
    const d = [e.querySelector(".il-observations"), e.querySelector(".il-assessment"), l];
    d.forEach((i) => {
      i.setAttribute("hidden", ""), this.dialog.querySelector("[data-dialog-body]").append(i);
    });
    const p = (i) => {
      e.dataset.carPage = i ? "quiz" : "experiment", d[1].toggleAttribute("hidden", !i);
      const t = a.querySelector('[data-helper="quiz"]');
      t.textContent = i ? "實驗" : "考題", t.setAttribute("aria-label", i ? "回到實驗" : "考題"), t.setAttribute("aria-pressed", String(i));
    };
    n === "car" && (e.querySelector(".il-scene-panel").append(d[1]), p(!1));
    const y = () => this.say(this.lastText || `${b[n].title}。${l.textContent}`, !0);
    a.addEventListener("click", (i) => {
      const t = i.target.closest("button")?.dataset.helper;
      if (t === "voice") {
        if (this.enabled = !this.enabled, this.voiceButton.setAttribute("aria-pressed", String(this.enabled)), this.voiceButton.textContent = n !== "clock" ? this.enabled ? "🔊" : "🔇" : this.enabled ? "🔊 語音陪玩中" : "🔇 語音已關閉", n !== "clock") {
          const o = this.enabled ? "關閉語音陪玩" : "開啟語音陪玩";
          this.voiceButton.setAttribute("aria-label", o), this.voiceButton.title = o;
        }
        this.enabled ? this.say(`嗨，小小探險家！${b[n].title}。${b[n].objective}。${u?.textContent || ""}`) : (this.stop(), this.voiceState("語音已關閉"));
      } else if (t === "replay") y();
      else if (t === "quiz" && n === "car") {
        const o = e.dataset.carPage !== "quiz";
        p(o), o ? this.say(d[1].textContent || "") : this.stop();
      } else if (t) {
        n === "car" && p(!1);
        const o = ["notes", "quiz", "help"].indexOf(t);
        if (o < 0) return;
        d.forEach((s, h) => s.toggleAttribute("hidden", h !== o)), this.dialog.showModal(), this.say(d[o].textContent || "");
      }
    }, { signal: this.abort.signal }), this.dialog.querySelector(".il-dialog-close").addEventListener("click", () => this.dialog.close(), { signal: this.abort.signal }), this.dialog.querySelector("[data-dialog-replay]").addEventListener("click", () => this.say(d.find((i) => !i.hasAttribute("hidden"))?.textContent || "", !0), { signal: this.abort.signal }), this.dialog.querySelector("[data-dialog-stop]").addEventListener("click", () => {
      this.stop(), this.voiceState("講解已停止");
    }, { signal: this.abort.signal }), this.dialog.addEventListener("close", () => this.stop(), { signal: this.abort.signal }), e.addEventListener("click", (i) => {
      const t = i.target.closest("button");
      t?.dataset.view && this.say(t.dataset.view === "whole" ? "合起來！看看完整的外觀，也可以拖動模型來操作。" : t.dataset.view === "xray" ? "透視眼開啟！外殼變透明了，點零件聽聽它的工作。" : "零件出任務！拆開後，點數字或零件名稱，一起找出它的小祕密。"), t?.dataset.action === "reset" && this.say("重新準備好了！試著只改一個條件，再觀察一次。");
    }, { signal: this.abort.signal }), e.addEventListener("change", (i) => {
      const t = i.target;
      t.matches("select") ? this.say(`${t.closest("label")?.firstChild?.textContent}。${t.selectedOptions[0]?.textContent}。${t.dataset.input === "object" && e.querySelector("[data-sample]")?.textContent || ""}`) : t.matches("[data-input]") && this.say(e.querySelector("[data-readout]")?.textContent || "");
    }, { signal: this.abort.signal }), this.observer = new MutationObserver((i) => {
      const t = [".il-feedback", ".mech-quick-info", ".il-live", ".il-log"];
      for (const o of t) {
        const s = e.querySelector(o);
        if (s && i.some((h) => s === h.target || s.contains(h.target))) {
          if (o === ".il-live" && s.textContent?.startsWith("準備好了")) continue;
          this.say(o === ".il-log" ? s.firstElementChild?.textContent || "" : s.textContent || "");
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
  say(e, n = !1) {
    if (this.lastText = e, !this.enabled && !n) return;
    if (!("speechSynthesis" in window)) {
      this.voiceState("此裝置無語音，請看文字講解");
      return;
    }
    this.stop();
    const a = new SpeechSynthesisUtterance(e);
    this.speech = a, a.lang = "zh-TW", a.rate = 0.88;
    const l = window.speechSynthesis.getVoices(), u = l.find((r) => /^zh[-_]TW$/i.test(r.lang)) || l.find((r) => /^zh/i.test(r.lang));
    u && (a.voice = u), a.onstart = () => {
      this.speech === a && this.voiceState("✦ 正在講解…");
    }, a.onend = () => {
      this.speech === a && this.voiceState("再點一下，繼續探索！");
    }, a.onerror = (r) => {
      this.speech === a && !["interrupted", "canceled"].includes(r.error) && this.voiceState("語音未播放，請點「再講一次」或看文字");
    }, window.speechSynthesis.speak(a);
  }
  destroy() {
    this.stop(), this.observer.disconnect(), this.abort.abort(), this.dialog.close();
  }
}
export {
  f as F,
  b as L,
  q as a,
  m as b,
  S as c
};
