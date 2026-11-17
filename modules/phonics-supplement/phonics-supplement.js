const x = "2026-11-17", y = "合起來讀：五組注音", q = "原創注音補充練習，不是康軒第 9 課課文或原題；例字不是出版社指定生字。", v = [{ id: "iai", final: "ㄧㄞ", hanzi: "崖", reading: "ㄧㄞˊ", context: "山崖的崖", parts: "ㄧ、ㄞ", tone: "二聲", source: "https://dict.concised.moe.edu.tw/dictView.jsp?ID=40997&la=0&powerMode=0", questions: [{ id: "iai-read", prompt: "山崖的崖，選出它的注音。", options: ["ㄧㄣ", "ㄨㄣ", "ㄧㄞˊ"], answer: "ㄧㄞˊ", explanation: "山崖的崖，讀作ㄧㄞˊ，是二聲。" }, { id: "iai-parts", prompt: "ㄧㄞ 是哪兩個注音符號合起來的？", options: ["ㄧ、ㄞ", "ㄧ、ㄣ", "ㄨ、ㄣ"], answer: "ㄧ、ㄞ", explanation: "ㄧㄞ 由ㄧ、ㄞ合起來；說的時候要連在一起。" }] }, { id: "in", final: "ㄧㄣ", hanzi: "音", reading: "ㄧㄣ", context: "聲音的音", parts: "ㄧ、ㄣ", tone: "一聲", source: "https://dict.revised.moe.edu.tw/dictView.jsp?ID=11090&word=%3D%E9%9F%B3", questions: [{ id: "in-read", prompt: "聲音的音，選出它的注音。", options: ["ㄧㄞˊ", "ㄨㄣ", "ㄧㄣ"], answer: "ㄧㄣ", explanation: "聲音的音，讀作ㄧㄣ，是一聲。一聲不標調號。" }, { id: "in-parts", prompt: "ㄧㄣ 是哪兩個注音符號合起來的？", options: ["ㄧ、ㄣ", "ㄧ、ㄞ", "ㄨ、ㄣ"], answer: "ㄧ、ㄣ", explanation: "ㄧㄣ 由ㄧ、ㄣ合起來；說的時候要連在一起。" }] }, { id: "wen", final: "ㄨㄣ", hanzi: "溫", reading: "ㄨㄣ", context: "溫水的溫", parts: "ㄨ、ㄣ", tone: "一聲", source: "https://dict.concised.moe.edu.tw/dictView.jsp?ID=43811", questions: [{ id: "wen-read", prompt: "溫水的溫，選出它的注音。", options: ["ㄧㄞˊ", "ㄧㄣ", "ㄨㄣ"], answer: "ㄨㄣ", explanation: "溫水的溫，讀作ㄨㄣ，是一聲。一聲不標調號。" }, { id: "wen-parts", prompt: "ㄨㄣ 是哪兩個注音符號合起來的？", options: ["ㄨ、ㄣ", "ㄧ、ㄞ", "ㄧ、ㄣ"], answer: "ㄨ、ㄣ", explanation: "ㄨㄣ 由ㄨ、ㄣ合起來；說的時候要連在一起。" }] }, { id: "yue", final: "ㄩㄝ", hanzi: "月", reading: "ㄩㄝˋ", context: "月亮的月", parts: "ㄩ、ㄝ", tone: "四聲", source: "https://dict.concised.moe.edu.tw/dictView.jsp?ID=44584&la=0&powerMode=0", questions: [{ id: "yue-read", prompt: "月亮的月，選出它的注音。", options: ["ㄧㄞˊ", "ㄧㄣ", "ㄩㄝˋ"], answer: "ㄩㄝˋ", explanation: "月亮的月，讀作ㄩㄝˋ，是四聲。" }, { id: "yue-parts", prompt: "ㄩㄝ 是哪兩個注音符號合起來的？", options: ["ㄩ、ㄝ", "ㄧ、ㄞ", "ㄧ、ㄣ"], answer: "ㄩ、ㄝ", explanation: "ㄩㄝ 由ㄩ、ㄝ合起來；說的時候要連在一起。" }] }, { id: "yun", final: "ㄩㄣ", hanzi: "雲", reading: "ㄩㄣˊ", context: "白雲的雲", parts: "ㄩ、ㄣ", tone: "二聲", source: "https://dict.concised.moe.edu.tw/dictView.jsp?ID=44932", questions: [{ id: "yun-read", prompt: "白雲的雲，選出它的注音。", options: ["ㄧㄞˊ", "ㄧㄣ", "ㄩㄣˊ"], answer: "ㄩㄣˊ", explanation: "白雲的雲，讀作ㄩㄣˊ，是二聲。" }, { id: "yun-parts", prompt: "ㄩㄣ 是哪兩個注音符號合起來的？", options: ["ㄩ、ㄣ", "ㄧ、ㄞ", "ㄧ、ㄣ"], answer: "ㄩ、ㄣ", explanation: "ㄩㄣ 由ㄩ、ㄣ合起來；說的時候要連在一起。" }] }], p = {
  checkedAt: x,
  title: y,
  disclaimer: q,
  groups: v
}, l = (t) => t.replace(/[&<>"']/g, (n) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[n]);
function f(t) {
  if (!/^[ㄅ-ㄩ˙ˊˇˋˉ\s]+$/u.test(t)) return null;
  const n = t.trim().split(/\s+/u);
  return n.every((e) => /^(?:˙)?[ㄅ-ㄩ]{1,3}[˙ˊˇˋˉ]?$/u.test(e)) ? n.map((e) => ({ original: e, symbols: Array.from(e.replace(/[˙ˊˇˋˉ]/gu, "")), tone: (e.match(/[˙ˊˇˋˉ]/u) || [""])[0] })) : null;
}
function g(t) {
  return `<span class="primer-syllable" aria-hidden="true"><span class="primer-phonetics">${t.symbols.map((n) => `<span>${n}</span>`).join("")}</span>${t.tone && t.tone !== "ˉ" ? `<span class="${t.tone === "˙" ? "primer-neutral" : "primer-tone"}">${t.tone}</span>` : ""}</span>`;
}
function o(t) {
  const n = f(t);
  return n ? `<span class="primer-syllable-row" role="text" aria-label="${l(t)}">${n.map(g).join("")}</span>` : l(t);
}
function j(t, n) {
  const e = f(n), i = Array.from(t);
  return !e || e.length !== i.length ? `${l(t)} ${o(n)}` : `<span class="primer-annotated" role="text" aria-label="${l(t + "，" + n)}">${i.map((c, u) => `<span class="primer-character-reading" aria-hidden="true"><span class="primer-hanzi">${l(c)}</span>${g(e[u])}</span>`).join("")}</span>`;
}
const d = (t) => t.replace(/[&<>"']/g, (n) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[n]);
function $(t, n) {
  const e = (n % t.length + t.length) % t.length;
  return [...t.slice(e), ...t.slice(0, e)];
}
function k(t) {
  let n = -1, e = -1, i = null, c = 0;
  function u() {
    const a = p.groups[n];
    t.innerHTML = `<header><a href="chinese-practice.html">← 返回國語星球</a><h1>${p.title}</h1><p>${p.disclaimer}</p><p>看例字、合起來讀，再做兩題。不計時，不評口說，也不計入課本完成度。</p></header>` + (a ? `<section aria-label="注音練習"><button data-action="home">← 回五組目錄</button><h2>${o(a.final)}</h2>${e < 0 ? `<div class="example">${j(a.hanzi, a.reading)}</div><p>${a.context}，讀作 ${o(a.reading)}（${a.tone}）。</p><p>${a.parts} 合起來讀成 ${o(a.final)}。${a.tone === "一聲" ? "一聲不標調號。" : ""}</p>${a.id === "iai" ? "<p>「崖」比較難寫，先認注音，不必練寫這個字。</p>" : ""}<p>本頁不提供音檔，請老師或家長帶讀。</p><a href="${d(a.source)}" target="_blank" rel="noopener noreferrer">教育部辭典：查例字讀音 ↗</a><p><button data-action="start">開始兩題練習 →</button></p>` : e < a.questions.length ? w(a.questions[e]) : `<h3>兩題練習結束</h3><p>剛剛看過 ${o(a.final)} 的例字與合音。請再跟老師或家長讀一次。</p><button data-action="again">重新練習</button><button data-action="home">選另一組</button>`}</section>` : `<section aria-label="五組原創補充"><h2>選一組開始</h2><div class="groups">${p.groups.map((s, r) => `<button data-group="${r}">${o(s.final)}<span>${s.context}</span></button>`).join("")}</div><p>五組、共 10 題，練習看注音與合音；不是聽辨測驗。</p></section>`) + `<footer>例字注音核對：教育部辭典，${p.checkedAt}。題幹與解析為原創。離開頁面不保留作答。</footer>`;
  }
  function w(a) {
    return `<p>第 ${e + 1}／2 題</p><h3>${d(a.prompt)}</h3><div class="choices">${$(a.options, c + n + e).map((s, r) => `<button data-answer="${r}" ${i !== null ? "disabled" : ""}>${s.includes("、") ? d(s) : o(s)}</button>`).join("")}</div>${i !== null ? `<div role="status"><h3>${i === a.answer ? "答對了！" : "一起看解析"}</h3><p>${d(a.explanation)}</p><button data-action="next">${e === 0 ? "下一題 →" : "看完成頁 →"}</button></div>` : ""}<button data-action="study">返回例字教學</button>`;
  }
  const m = (a) => {
    const s = a.target.closest("button");
    if (!s || !t.contains(s) || s.disabled) return;
    if (s.dataset.group !== void 0)
      n = Number(s.dataset.group), e = -1, i = null;
    else if (s.dataset.answer !== void 0 && e >= 0 && i === null) {
      const h = p.groups[n]?.questions[e];
      h && (i = $(h.options, c + n + e)[Number(s.dataset.answer)]);
    } else
      switch (s.dataset.action) {
        case "home":
          n = -1, e = -1, i = null;
          break;
        case "study":
          e = -1, i = null;
          break;
        case "start":
        case "again":
          e = 0, i = null, c++;
          break;
        case "next":
          i !== null && (e++, i = null);
          break;
      }
    u();
    const r = t.querySelector('[role="status"] h3') || t.querySelector("section h3") || t.querySelector("section h2");
    r?.setAttribute("tabindex", "-1"), r?.focus();
  };
  return t.addEventListener("click", m), u(), () => t.removeEventListener("click", m);
}
const b = document.getElementById("phonics-app");
b && k(b);
export {
  k as mountSupplement,
  $ as rotateOptions
};
