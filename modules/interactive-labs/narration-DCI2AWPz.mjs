class a {
  enabled = !1;
  last = "用手轉動方塊，看看六個顏色。點拆解，一起找出裡面的祕密！";
  utterance;
  say(t, i = !1) {
    if (this.last = t, !this.enabled && !i || !("speechSynthesis" in window)) return;
    this.stop();
    const e = new SpeechSynthesisUtterance(t);
    this.utterance = e, e.lang = "zh-TW", e.rate = 0.88, e.voice = speechSynthesis.getVoices().find((s) => /^zh[-_]TW$/i.test(s.lang)) || speechSynthesis.getVoices().find((s) => /^zh/i.test(s.lang)) || null, speechSynthesis.speak(e);
  }
  replay() {
    this.say(this.last, !0);
  }
  stop() {
    this.utterance && "speechSynthesis" in window && speechSynthesis.cancel(), this.utterance = void 0;
  }
}
export {
  a as S
};
