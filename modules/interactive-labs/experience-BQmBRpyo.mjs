import { C as f, L as u } from "./car-art-D34K7c64.mjs";
class q {
  constructor(e, n) {
    this.host = e, e.classList.add("il-workspace");
    const a = document.createElement("nav");
    if (a.className = "il-mission-nav", a.setAttribute("aria-label", "實驗小幫手"), a.innerHTML = '<button data-helper="voice" aria-pressed="false">🔊 開始語音陪玩</button><button data-helper="replay">🗣 再講一次</button><button data-helper="notes">📒 發現筆記</button><button data-helper="quiz">🌟 小挑戰</button><button data-helper="help">💡 怎麼玩</button><span class="il-voice-state" role="status">點一下，開啟語音</span>', e.prepend(a), this.voiceButton = a.querySelector('[data-helper="voice"]'), n === "buoyancy" || n === "car") {
      const i = e.querySelector(".bp-heading"), t = document.createElement("button");
      t.className = "bp-back-icon", t.type = "button", t.textContent = "←", t.setAttribute("aria-label", "返回實驗星球"), t.title = "返回實驗星球", t.addEventListener("click", () => e.closest(".il-shell")?.querySelector(".il-back")?.click(), { signal: this.abort.signal }), i.prepend(t), i.append(a);
      const o = { voice: "🔊", replay: "↻", notes: "📒", quiz: "🌟", help: "💡" };
      if (a.querySelectorAll("button").forEach((s) => {
        const d = s.textContent.replace(/^\S+\s*/, "");
        s.setAttribute("aria-label", d), s.title = d, s.textContent = o[s.dataset.helper];
      }), n === "car") {
        const s = a.querySelector('[data-helper="quiz"]');
        s.innerHTML = `<img src="${f}pencil.png" alt="" draggable="false">`, s.setAttribute("aria-label", "考題"), s.title = "切換考題";
      }
    }
    this.dialog = document.createElement("dialog"), this.dialog.className = "il-discovery-dialog", this.dialog.setAttribute("aria-label", "實驗探索卡"), this.dialog.innerHTML = '<div class="il-dialog-tools"><button data-dialog-replay type="button">🔊 重聽這張卡</button><button data-dialog-stop type="button">⏸ 停止講解</button><button class="il-dialog-close" type="button">✦ 回去玩</button></div><div data-dialog-body></div>', e.append(this.dialog);
    const l = document.createElement("section");
    l.className = "il-help", l.innerHTML = `<h3>一起來探索！</h3><p>${u[n].objective}</p>`;
    const h = e.querySelector(".il-controls > p:last-child");
    h && l.append(h);
    const r = e.querySelector("aside > details");
    r && l.append(r);
    const p = e.querySelector(".mech-parent");
    p && l.append(p);
    const g = e.querySelector(".mech-part-info");
    g && l.append(g);
    const c = [e.querySelector(".il-observations"), e.querySelector(".il-assessment"), l];
    c.forEach((i) => {
      i.setAttribute("hidden", ""), this.dialog.querySelector("[data-dialog-body]").append(i);
    });
    const b = (i) => {
      e.dataset.carPage = i ? "quiz" : "experiment", c[1].toggleAttribute("hidden", !i);
      const t = a.querySelector('[data-helper="quiz"]');
      t.innerHTML = i ? "↶" : `<img src="${f}pencil.png" alt="" draggable="false">`, t.setAttribute("aria-label", i ? "回到實驗" : "考題"), t.setAttribute("aria-pressed", String(i));
    };
    n === "car" && (e.querySelector(".il-scene-panel").append(c[1]), b(!1));
    const y = () => this.say(this.lastText || `${u[n].title}。${l.textContent}`, !0);
    a.addEventListener("click", (i) => {
      const t = i.target.closest("button")?.dataset.helper;
      if (t === "voice") {
        if (this.enabled = !this.enabled, this.voiceButton.setAttribute("aria-pressed", String(this.enabled)), this.voiceButton.textContent = n !== "clock" ? this.enabled ? "🔊" : "🔇" : this.enabled ? "🔊 語音陪玩中" : "🔇 語音已關閉", n !== "clock") {
          const o = this.enabled ? "關閉語音陪玩" : "開啟語音陪玩";
          this.voiceButton.setAttribute("aria-label", o), this.voiceButton.title = o;
        }
        this.enabled ? this.say(`嗨，小小探險家！${u[n].title}。${u[n].objective}。${h?.textContent || ""}`) : (this.stop(), this.voiceState("語音已關閉"));
      } else if (t === "replay") y();
      else if (t === "quiz" && n === "car") {
        const o = e.dataset.carPage !== "quiz";
        b(o), o ? this.say(c[1].textContent || "") : this.stop();
      } else if (t) {
        n === "car" && b(!1);
        const o = ["notes", "quiz", "help"].indexOf(t);
        if (o < 0) return;
        c.forEach((s, d) => s.toggleAttribute("hidden", d !== o)), this.dialog.showModal(), this.say(c[o].textContent || "");
      }
    }, { signal: this.abort.signal }), this.dialog.querySelector(".il-dialog-close").addEventListener("click", () => this.dialog.close(), { signal: this.abort.signal }), this.dialog.querySelector("[data-dialog-replay]").addEventListener("click", () => this.say(c.find((i) => !i.hasAttribute("hidden"))?.textContent || "", !0), { signal: this.abort.signal }), this.dialog.querySelector("[data-dialog-stop]").addEventListener("click", () => {
      this.stop(), this.voiceState("講解已停止");
    }, { signal: this.abort.signal }), this.dialog.addEventListener("close", () => this.stop(), { signal: this.abort.signal }), e.addEventListener("click", (i) => {
      const t = i.target.closest("button");
      n === "car" && t?.hasAttribute("data-car-read") && this.say(`${u.car.question}。點選圖片：彈簧、車子的顏色，還是空氣？`, !0), t?.dataset.view && this.say(t.dataset.view === "whole" ? "合起來！看看完整的外觀，也可以拖動模型來操作。" : t.dataset.view === "xray" ? "透視眼開啟！外殼變透明了，點零件聽聽它的工作。" : "零件出任務！拆開後，點數字或零件名稱，一起找出它的小祕密。"), t?.dataset.action === "reset" && this.say("重新準備好了！試著只改一個條件，再觀察一次。");
    }, { signal: this.abort.signal }), e.addEventListener("change", (i) => {
      const t = i.target;
      t.matches("select") ? this.say(`${t.closest("label")?.firstChild?.textContent}。${t.selectedOptions[0]?.textContent}。${t.dataset.input === "object" && e.querySelector("[data-sample]")?.textContent || ""}`) : t.matches("[data-input]") && this.say(e.querySelector("[data-readout]")?.textContent || "");
    }, { signal: this.abort.signal }), this.observer = new MutationObserver((i) => {
      const t = [".il-feedback", ".mech-quick-info", ".il-live", ".il-log"];
      for (const o of t) {
        const s = e.querySelector(o);
        if (s && i.some((d) => s === d.target || s.contains(d.target))) {
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
    const l = window.speechSynthesis.getVoices(), h = l.find((r) => /^zh[-_]TW$/i.test(r.lang)) || l.find((r) => /^zh/i.test(r.lang));
    h && (a.voice = h), a.onstart = () => {
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
  q as L
};
