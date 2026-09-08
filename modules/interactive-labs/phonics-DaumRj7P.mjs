const b = (a) => `images/language-shared-v1/${a}.webp`, w = (a) => `images/english-generated-v3/${a}-v1.webp`, f = [
  ["æ", "a", "cat", "cat", "嘴巴張開，聽 cat 中間的聲音。", "I see a cat."],
  ["ɛ", "e", "bed", "bed", "嘴巴稍微打開，聽 bed 中間的聲音。", "This is my bed."],
  ["ɪ", "i", "fish", "fish", "短短的聲音，比較 fish 和 sheep。", "I see a fish."],
  ["ɑ", "o", "box", "box", "美式 box 的中間音，嘴巴張開。", "Open the box."],
  ["ʌ", "u", "sun", "sun", "嘴巴放鬆，聽 sun 中間的聲音。", "The sun is up."],
  ["i", "ee", "sheep", "sheep", "嘴角輕輕拉開，比較 sheep 和 fish。", "I see a sheep."],
  ["eɪ", "a_e", "cake", "cake", "聲音會滑動，聽 cake 中間的音。", "I like cake."],
  ["oʊ", "oa", "boat", "boat", "從張口滑到圓唇，聽 boat。", "This is a boat."],
  ["ʊ", "oo", "foot", "foot", "嘴唇微圓，聲音短而放鬆。", "This is my foot."],
  ["u", "oo", "moon", "moon", "圓起嘴唇，比較 moon 和 foot。", "Look at the moon."],
  ["aɪ", "i_e", "kite", "kite", "從張口滑向較合的嘴形。", "I fly a kite."],
  ["aʊ", "ow", "cow", "cow", "先張口，再慢慢圓起嘴唇。", "I see a cow."],
  ["ɔɪ", "oy", "toy", "toy", "先圓唇，再把嘴角打開。", "This is my toy."],
  ["ɝ", "ir", "bird", "bird", "美式 bird 的中間音有 r 的音色。", "I see a bird."],
  ["ə", "a", "banana", "banana", "第一個 a 輕輕帶過；不是重讀的那一節。", "I like a banana."]
], m = [
  ["b", "b", "book", "book", "雙唇合起來再打開，喉嚨會震動。", "Open the book."],
  ["p", "p", "pig", "pig", "雙唇合起來再放氣，不加「呃」。", "I see a pig."],
  ["t", "t", "tent", "tent", "舌尖輕碰上齒後方，再放開。", "This is a tent."],
  ["d", "d", "dog", "dog", "舌尖輕碰上齒後方，喉嚨會震動。", "I see a dog."],
  ["k", "c", "cat", "cat", "舌頭後面擋住氣，再放開。", "The cat can run."],
  ["ɡ", "g", "goat", "goat", "舌頭後面放開，喉嚨會震動。", "I see a goat."],
  ["f", "f", "fish", "fish", "上牙輕碰下唇，吹出氣。", "The fish can swim."],
  ["v", "v", "van", "van", "像 f 的嘴形，但喉嚨會震動。", "This is a van."],
  ["θ", "th", "tooth", "tooth", "聽 tooth 最後的 th；舌尖輕放齒間吹氣。", "This is a tooth."],
  ["ð", "th", "mother", "mother", "聽 mother 中間的 th；舌尖靠齒，喉嚨震動。", "I love my mother."],
  ["s", "s", "sun", "sun", "牙齒靠近，讓氣輕輕通過。", "The sun is bright."],
  ["z", "z", "zebra", "zebra", "像 s 的嘴形，但喉嚨會震動。", "I see a zebra."],
  ["ʃ", "sh", "shoe", "shoe", "嘴唇微圓，像輕聲請人安靜。", "This is my shoe."],
  ["ʒ", "s", "measure", "ruler", "聽 measure 中間的音；像 sh，但喉嚨震動。", "We measure with a ruler."],
  ["tʃ", "ch", "chair", "chair", "先擋住氣，再向外放出。", "Sit on the chair."],
  ["dʒ", "j", "juice", "juice", "聽 juice 開頭的音，喉嚨會震動。", "I like juice."],
  ["m", "m", "moon", "moon", "雙唇合起來，聲音從鼻子通過。", "Look at the moon."],
  ["n", "n", "nose", "nose", "舌尖靠上方，聲音從鼻子通過。", "This is my nose."],
  ["ŋ", "ng", "ring", "ring", "聽 ring 最後的音；不要再加 g。", "This is a ring."],
  ["l", "l", "lion", "lion", "舌尖輕碰上方，讓聲音通過。", "I see a lion."],
  ["r", "r", "rabbit", "rabbit", "舌頭不要碰上顎，聽美式 r。", "The rabbit can hop."],
  ["j", "y", "yellow", "yellow", "音標 j 是 yellow 開頭的音，不是字母 J。", "The sun is yellow."],
  ["w", "w", "water", "water", "先圓唇，再打開。", "I drink water."],
  ["h", "h", "hat", "hat", "輕輕呼氣，不要用力摩擦喉嚨。", "This is my hat."]
], p = [...f.map((a) => [...a, "vowels"]), ...m.map((a) => [...a, "consonants"])].map(([a, e, t, s, n, o, h], i) => ({ id: `sound-${i}`, group: h, ipa: a, spelling: e, word: t, image: ["toy", "van", "nose"].includes(s) ? w(s) : s === "mother" ? "images/language-shared-v2/mother-v1.webp" : b(s), hint: n, sentence: o }));
function d(a, e = Math.random) {
  const t = a.slice();
  for (let s = t.length - 1; s > 0; s--) {
    const n = Math.floor(e() * (s + 1));
    [t[s], t[n]] = [t[n], t[s]];
  }
  return t;
}
function l(a) {
  return a.filter((e, t, s) => s.findIndex((n) => n.word === e.word) === t);
}
class $ {
  constructor(e, t) {
    this.answer = e, this.options = t;
  }
  answer;
  options;
  selected = "";
  checked = !1;
  select(e) {
    !this.checked && this.options.includes(e) && (this.selected = e);
  }
  check() {
    if (!(!this.selected || this.checked))
      return this.checked = !0, this.selected === this.answer;
  }
}
const g = { vowels: "元音", consonants: "輔音", reading: "念讀卡" }, r = '<img src="images/ui/sound-rounded.svg" alt="">', u = (a) => a.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll('"', "&quot;");
class v {
  constructor(e) {
    this.host = e, this.group = ["vowels", "consonants", "reading"].includes(e.dataset.phonicsGroup || "") ? e.dataset.phonicsGroup : "vowels", e.addEventListener("click", (t) => {
      const s = t.target.closest("button");
      if (!s || s.disabled) return;
      const n = s.dataset.action || "";
      if (s.dataset.select) {
        this.gate?.select(s.dataset.select), this.note = "選好了，再按檢查", this.render();
        return;
      }
      if (s.dataset.preview) {
        const o = this.options.find((h) => h.id === s.dataset.preview);
        o && this.say(o.word);
        return;
      }
      if (s.dataset.card) {
        this.selected = Number(s.dataset.card), this.note = "", this.render(), this.say(this.cards()[this.selected].word);
        return;
      }
      this.action(n);
    }, { signal: this.abort.signal }), document.addEventListener("visibilitychange", () => {
      document.hidden && this.stopVoice();
    }, { signal: this.abort.signal }), this.render();
  }
  host;
  group;
  page = 0;
  selected = 0;
  listen = !1;
  muted = !1;
  slow = !1;
  queue = [];
  question = 0;
  gate;
  options = [];
  correct = 0;
  note = "";
  abort = new AbortController();
  cards() {
    return this.group === "reading" ? l(p) : p.filter((e) => e.group === this.group);
  }
  say(e) {
    if (this.muted) return;
    if (!("speechSynthesis" in window)) {
      this.note = "這個瀏覽器無語音，請和家長一起念", this.render();
      return;
    }
    this.stopVoice();
    const t = new SpeechSynthesisUtterance(e);
    t.lang = "en-US", t.rate = this.slow ? 0.6 : 0.82;
    const s = speechSynthesis.getVoices().find((n) => /^en[-_]US$/i.test(n.lang));
    s && (t.voice = s), t.onerror = (n) => {
      ["canceled", "interrupted"].includes(n.error) || (this.note = "語音未播放，請再點一次喇叭", this.render());
    }, speechSynthesis.speak(t);
  }
  stopVoice() {
    "speechSynthesis" in window && speechSynthesis.cancel();
  }
  newQuestion() {
    const e = this.queue[this.question];
    if (!e) {
      this.gate = void 0;
      return;
    }
    this.options = d([e, ...d(l(this.cards()).filter((t) => t.word !== e.word)).slice(0, 3)]), this.gate = new $(e.id, this.options.map((t) => t.id));
  }
  start() {
    this.listen = !0, this.queue = d(l(this.cards())).slice(0, 10), this.question = 0, this.correct = 0, this.note = "先聽，再選一張", this.newQuestion(), this.render(), this.say(this.queue[0].word);
  }
  action(e) {
    if (e === "back") {
      this.stopVoice(), this.host.parentElement?.querySelector(".phonics-back")?.click();
      return;
    }
    if (e in g) {
      this.group = e, this.queue = [], this.gate = void 0, this.listen = !1, this.selected = 0, this.page = 0, this.note = "", this.stopVoice(), this.render();
      return;
    }
    if (e === "listen") {
      this.listen ? (this.listen = !1, this.note = "", this.render()) : this.queue.length && this.gate ? (this.listen = !0, this.render()) : this.start();
      return;
    }
    if (e === "restart") {
      this.start();
      return;
    }
    if (e === "mute") {
      this.muted = !this.muted, this.stopVoice(), this.render();
      return;
    }
    if (e === "slow") {
      this.slow = !this.slow, this.render();
      return;
    }
    if (e === "hear") {
      const t = this.listen ? this.queue[this.question] : this.cards()[this.selected];
      t && this.say(t.word);
      return;
    }
    if (e === "sentence") {
      this.say(this.cards()[this.selected].sentence);
      return;
    }
    if (e === "prev" || e === "next") {
      const t = Math.ceil(this.cards().length / 6);
      this.page = (this.page + (e === "next" ? 1 : t - 1)) % t, this.selected = this.page * 6, this.note = "", this.render();
      return;
    }
    if (e === "check") {
      const t = this.gate?.check();
      if (t === void 0) return;
      t && this.correct++, this.note = t ? "✓ 答對了！" : "再聽一次：" + this.queue[this.question].word, this.render(), this.say(this.queue[this.question].word);
      return;
    }
    if (e === "continue") {
      if (!this.gate?.checked) return;
      this.question++, this.note = "先聽，再選一張", this.newQuestion(), this.render(), this.gate && this.say(this.queue[this.question].word);
    }
  }
  render() {
    const e = this.cards(), t = e[this.selected], s = this.queue[this.question], n = this.gate ? `<button class="ph-check" data-action="${this.gate.checked ? "continue" : "check"}" aria-label="${this.gate.checked ? "下一題" : "確認答案"}" ${this.gate.selected ? "" : "disabled"}>${this.gate.checked ? "下一題 →" : "確認 ✓"}</button>` : "", o = this.listen ? this.gate ? `<div class="ph-listen-prompt"><button class="ph-big-sound" data-action="hear" aria-label="播放題目發音">${r}</button><p>聽到哪個單字？</p><small>${this.question + 1} / ${this.queue.length}</small><p class="ph-feedback" role="status">${u(this.note)}</p><div class="ph-confirm-slot">${n}</div></div><div class="ph-answer-grid">${this.options.map((i) => `<div class="ph-answer ${this.gate.selected === i.id ? "is-selected" : ""} ${this.gate.checked && i.id === s.id ? "is-correct" : ""}"><button class="ph-pick" data-select="${i.id}" aria-pressed="${this.gate.selected === i.id}" ${this.gate.checked ? "disabled" : ""}><img src="${i.image}" alt=""><strong>${i.word}</strong>${this.gate.selected === i.id ? "<i>✓</i>" : ""}</button><button class="ph-preview" data-preview="${i.id}" aria-label="試聽 ${i.word}">${r}</button></div>`).join("")}</div>` : `<div class="ph-finish"><strong>✓ ${this.correct} / ${this.queue.length}</strong><p>練習完成</p><button data-action="restart">再玩一次</button></div>` : `<div class="ph-card-grid">${e.slice(this.page * 6, this.page * 6 + 6).map((i, c) => `<button data-card="${this.page * 6 + c}" aria-pressed="${this.selected === this.page * 6 + c}" aria-label="${this.group === "reading" ? i.word : i.ipa + "，" + i.word}">${this.group === "reading" ? `<img src="${i.image}" alt="">` : `<strong class="ph-ipa">/${i.ipa}/</strong>`}<span>${i.word}</span></button>`).join("")}</div><article class="ph-detail"><img src="${t.image}" alt="${t.word === "measure" ? "用尺量長度的例字提示" : t.word}"><div><strong class="ph-word">${t.word}</strong><span class="ph-symbol">/${t.ipa}/ · ${t.spelling}</span></div><p>${u(this.group === "reading" ? t.sentence : t.hint)}</p><div class="ph-detail-actions"><button data-action="hear" aria-label="聽例字 ${t.word}">${r}</button><button data-action="sentence" aria-label="聽短句">${r}<span>短句</span></button></div></article>`, h = this.listen ? "" : `<button data-action="prev" aria-label="上一頁">‹</button><span class="ph-page">${this.page + 1} / ${Math.ceil(e.length / 6)}</span><button data-action="next" aria-label="下一頁">›</button>`;
    this.host.innerHTML = `<section class="ph-shell" aria-label="一年級發音工坊"><header><button data-action="back" aria-label="返回英文">←</button><h2>發音工坊</h2><div class="ph-header-controls">${h}</div><button data-action="slow" aria-pressed="${this.slow}" aria-label="慢速發音">0.6×</button><button data-action="mute" aria-pressed="${this.muted}" aria-label="${this.muted ? "開啟" : "關閉"}語音">${this.muted ? "◌" : r}</button></header><nav aria-label="發音單元">${Object.entries(g).map(([i, c]) => `<button data-action="${i}" aria-pressed="${this.group === i && !this.listen}">${c}</button>`).join("")}<button data-action="listen" aria-pressed="${this.listen}">聽音四選一</button></nav><div class="ph-body ${this.listen ? "is-listening" : ""}">${o}</div>${!this.listen && this.note ? `<p class="ph-notice" role="status">${u(this.note)}</p>` : ""}</section>`;
  }
  destroy() {
    this.abort.abort(), this.stopVoice();
  }
}
export {
  v as PhonicsLab
};
