import { C as f, L as u } from "./car-art-D34K7c64.mjs";
class q {
  constructor(e, s) {
    this.host = e, e.classList.add("il-workspace");
    const a = document.createElement("nav");
    if (a.className = "il-mission-nav", a.setAttribute("aria-label", "實驗小幫手"), a.innerHTML = '<button data-helper="voice" aria-pressed="false">🔊 開始語音陪玩</button><button data-helper="replay">🗣 再講一次</button><button data-helper="notes">📒 發現筆記</button><button data-helper="quiz">🌟 小挑戰</button><button data-helper="help">💡 怎麼玩</button><span class="il-voice-state" role="status">點一下，開啟語音</span>', e.prepend(a), this.voiceButton = a.querySelector('[data-helper="voice"]'), s === "buoyancy" || s === "car" || s === "clock") {
      const i = e.querySelector(".bp-heading"), t = document.createElement("button");
      t.className = "bp-back-icon", t.type = "button", t.textContent = "←", t.setAttribute("aria-label", "返回實驗星球"), t.title = "返回實驗星球", t.addEventListener("click", () => e.closest(".il-shell")?.querySelector(".il-back")?.click(), { signal: this.abort.signal }), i.prepend(t), i.append(a);
      const n = { voice: "🔊", replay: "↻", notes: "📒", quiz: "🌟", help: "💡" };
      if (a.querySelectorAll("button").forEach((o) => {
        const d = o.textContent.replace(/^\S+\s*/, "");
        o.setAttribute("aria-label", d), o.title = d, o.textContent = n[o.dataset.helper];
      }), s === "car" || s === "clock") {
        const o = a.querySelector('[data-helper="quiz"]');
        o.innerHTML = `<img src="${f}pencil.png" alt="" draggable="false">`, o.setAttribute("aria-label", "考題"), o.title = "切換考題";
      }
    }
    this.dialog = document.createElement("dialog"), this.dialog.className = "il-discovery-dialog", this.dialog.setAttribute("aria-label", "實驗探索卡"), this.dialog.innerHTML = '<div class="il-dialog-tools"><button data-dialog-replay type="button">🔊 重聽這張卡</button><button data-dialog-stop type="button">⏸ 停止講解</button><button class="il-dialog-close" type="button">✦ 回去玩</button></div><div data-dialog-body></div>', e.append(this.dialog);
    const l = document.createElement("section");
    l.className = "il-help", l.innerHTML = `<h3>一起來探索！</h3><p>${u[s].objective}</p>`;
    const h = e.querySelector(".il-controls > p:last-child");
    h && l.append(h);
    const r = e.querySelector("aside > details");
    r && l.append(r);
    const b = e.querySelector(".mech-parent");
    b && l.append(b);
    const g = e.querySelector(".mech-part-info");
    g && l.append(g);
    const c = [e.querySelector(".il-observations"), e.querySelector(".il-assessment"), l];
    c.forEach((i) => {
      i.setAttribute("hidden", ""), this.dialog.querySelector("[data-dialog-body]").append(i);
    });
    const p = (i) => {
      e.dataset.carPage = i ? "quiz" : "experiment", c[1].toggleAttribute("hidden", !i);
      const t = a.querySelector('[data-helper="quiz"]');
      t.innerHTML = i ? "↶" : `<img src="${f}pencil.png" alt="" draggable="false">`, t.setAttribute("aria-label", i ? "回到實驗" : "考題"), t.setAttribute("aria-pressed", String(i));
    };
    (s === "car" || s === "clock") && (e.querySelector(".il-scene-panel").append(c[1]), p(!1));
    const y = () => this.say(this.lastText || `${u[s].title}。${l.textContent}`, !0);
    a.addEventListener("click", (i) => {
      const t = i.target.closest("button")?.dataset.helper;
      if (t === "voice") {
        this.enabled = !this.enabled, this.voiceButton.setAttribute("aria-pressed", String(this.enabled)), this.voiceButton.textContent = this.enabled ? "🔊" : "🔇";
        {
          const n = this.enabled ? "關閉語音陪玩" : "開啟語音陪玩";
          this.voiceButton.setAttribute("aria-label", n), this.voiceButton.title = n;
        }
        this.enabled ? this.say(`嗨，小小探險家！${u[s].title}。${u[s].objective}。${h?.textContent || ""}`) : (this.stop(), this.voiceState("語音已關閉"));
      } else if (t === "replay") y();
      else if (t === "quiz" && (s === "car" || s === "clock")) {
        const n = e.dataset.carPage !== "quiz";
        p(n), n ? this.say(c[1].textContent || "") : this.stop();
      } else if (t) {
        (s === "car" || s === "clock") && p(!1);
        const n = ["notes", "quiz", "help"].indexOf(t);
        if (n < 0) return;
        c.forEach((o, d) => o.toggleAttribute("hidden", d !== n)), this.dialog.showModal(), this.say(c[n].textContent || "");
      }
    }, { signal: this.abort.signal }), this.dialog.querySelector(".il-dialog-close").addEventListener("click", () => this.dialog.close(), { signal: this.abort.signal }), this.dialog.querySelector("[data-dialog-replay]").addEventListener("click", () => this.say(c.find((i) => !i.hasAttribute("hidden"))?.textContent || "", !0), { signal: this.abort.signal }), this.dialog.querySelector("[data-dialog-stop]").addEventListener("click", () => {
      this.stop(), this.voiceState("講解已停止");
    }, { signal: this.abort.signal }), this.dialog.addEventListener("close", () => this.stop(), { signal: this.abort.signal }), e.addEventListener("click", (i) => {
      const t = i.target.closest("button");
      s === "clock" && t?.hasAttribute("data-rpm-read") && this.say("馬達先經過減速輪系，帶動長分針。十二齒帶動三十六齒，慢三倍。三十六齒和十齒在同一根軸上，一起轉。十齒再帶動四十齒，又慢四倍。所以長分針轉十二圈，短時針才轉一圈。RPM 是每分鐘轉幾圈。正常和六十倍按鈕只切換轉速說明，不會改變播放速度。馬達是动画示意，實際轉速依機芯而定。", !0), s === "car" && t?.hasAttribute("data-car-read") && this.say(`${u.car.question}。點選圖片：彈簧、車子的顏色，還是空氣？`, !0), t?.dataset.view && this.say(t.dataset.view === "whole" ? "合起來！看看完整的外觀，也可以拖動模型來操作。" : t.dataset.view === "xray" ? "透視眼開啟！外殼變透明了，點零件聽聽它的工作。" : "零件出任務！拆開後，點數字或零件名稱，一起找出它的小祕密。"), t?.dataset.action === "reset" && this.say("重新準備好了！試著只改一個條件，再觀察一次。");
    }, { signal: this.abort.signal }), e.addEventListener("change", (i) => {
      const t = i.target;
      t.matches("select") ? this.say(`${t.closest("label")?.firstChild?.textContent}。${t.selectedOptions[0]?.textContent}。${t.dataset.input === "object" && e.querySelector("[data-sample]")?.textContent || ""}`) : t.matches("[data-input]") && this.say(e.querySelector("[data-readout]")?.textContent || "");
    }, { signal: this.abort.signal }), this.observer = new MutationObserver((i) => {
      const t = [".il-feedback", ".mech-quick-info", ".il-live", ".il-log"];
      for (const n of t) {
        const o = e.querySelector(n);
        if (o && i.some((d) => o === d.target || o.contains(d.target))) {
          if (n === ".il-live" && o.textContent?.startsWith("準備好了")) continue;
          this.say(n === ".il-log" ? o.firstElementChild?.textContent || "" : o.textContent || "");
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
