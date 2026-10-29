class B {
  enabled = !1;
  last = "用手轉動方塊，看看六個顏色。點拆解，一起找出裡面的祕密！";
  utterance;
  say(a, e = !1) {
    if (this.last = a, !this.enabled && !e || typeof document < "u" && document.hidden || !("speechSynthesis" in window)) return;
    this.stop();
    const s = new SpeechSynthesisUtterance(a);
    this.utterance = s, s.lang = "zh-TW", s.rate = 0.88, s.voice = speechSynthesis.getVoices().find((d) => /^zh[-_]TW$/i.test(d.lang)) || speechSynthesis.getVoices().find((d) => /^zh/i.test(d.lang)) || null, speechSynthesis.speak(s);
  }
  replay() {
    this.say(this.last, !0);
  }
  stop() {
    this.utterance && "speechSynthesis" in window && speechSynthesis.cancel(), this.utterance = void 0;
  }
}
const C = 0.46, l = (t) => t * Math.PI / 180, p = (t) => (t % 360 + 360) % 360;
function H(t, a) {
  return Math.cos(2 * l(t - a)) + C * Math.cos(2 * l(t));
}
function q(t) {
  return Math.hypot(Math.cos(2 * l(t)) + C, Math.sin(2 * l(t)));
}
function g(t) {
  const a = p(t);
  return { name: ["新月", "眉月", "上弦月", "盈凸月", "滿月", "虧凸月", "下弦月", "殘月"][Math.round(a / 45) % 8], lit: (1 - Math.cos(l(a))) / 2 };
}
function I(t, a = 24) {
  const e = p(t), s = Math.cos(l(e)), d = e <= 180 ? 1 : -1, f = [];
  for (let c = -a; c <= a; c += 1) {
    const $ = Math.sqrt(Math.max(0, a * a - c * c));
    f.push(`${d * $},${c}`);
  }
  for (let c = a; c >= -a; c -= 1) {
    const $ = Math.sqrt(Math.max(0, a * a - c * c));
    f.push(`${d * s * $},${c}`);
  }
  return "M" + f.join("L") + "Z";
}
const n = (t) => document.getElementById(t), u = document.getElementById("scene"), r = new B();
let o = 0, i = 0, y = 0, x = !1, S = 0, k = 0, M = !1, _ = null;
const E = n("overlay"), F = [
  { title: "海水會慢慢升降", text: "看同一塊海邊的石頭。漲潮時，海水慢慢升高；退潮時，沙灘漸漸露出來。", insight: "潮汐是海水較長時間的升降，和一朵朵拍岸的浪不同。", caption: "按圖卡比較低水位、高水位，再播放海水升降。這是理想海岸示意，沒有標真實時間。" },
  { title: "拉力不一樣大", text: "月球拉著整個地球。近側拉得較多，遠側拉得較少，讓海水重新分布。", insight: "遠側也被月球吸引！不是月球把遠側海水推開。", caption: "黃色箭頭都是月球的吸引力：都朝月球，近側較強、遠側較弱。此段先只看月球。" },
  { title: "日月一起改變潮差", text: "拖著月球繞地球，觀察月相、海水形狀和曲線。日月排成一直線，潮差通常較大。", insight: "日月成直角時是小潮；小潮仍有潮汐，潮差不等於零。", caption: "拖月球，或聚焦月球後按方向鍵；也可點月相圖卡。距離、隆起比例已誇大。" },
  { title: "到台灣海岸之前", text: "先選地點與日期，再查中央氣象署的潮汐預報。找到滿潮、乾潮時間與潮高。", insight: "月亮在頭頂，不代表當地正好滿潮。海岸形狀和海深會改變潮汐。", caption: "這裡提供官方資料入口，沒有載入即時潮時。預報也不是現場實測，出行仍要留意天氣。" }
], A = '<defs><radialGradient id="globe" cx="35%" cy="28%"><stop stop-color="#83d0ef"/><stop offset="1" stop-color="#216196"/></radialGradient><radialGradient id="sun"><stop stop-color="#fff3bf"/><stop offset="1" stop-color="#f6ba5d"/></radialGradient><marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10Z" fill="#ffd889"/></marker></defs>';
function V(t, a, e) {
  return `<g transform="translate(${t} ${a})"><circle r="${e}" fill="url(#globe)" stroke="#a5e1f4"/><path d="M${-e * 0.65} ${-e * 0.5}l${e * 0.5} ${-e * 0.15} ${e * 0.3} ${e * 0.3} ${-e * 0.16} ${e * 0.4} ${-e * 0.35} ${e * 0.1} ${-e * 0.3} ${-e * 0.25}ZM${e * 0.2} ${e * 0.1}l${e * 0.48} ${-e * 0.15} ${e * 0.05} ${e * 0.43} ${-e * 0.3} ${e * 0.36} ${-e * 0.24} ${-e * 0.14}Z" fill="#78d6b3"/><ellipse rx="${e * 0.42}" ry="${e}" fill="none" stroke="#c4f1ff" opacity=".23"/><path d="M${-e} 0H${e}" stroke="#c4f1ff" opacity=".23"/></g>`;
}
function z(t) {
  return `<svg class="phase-icon" viewBox="-26 -26 52 52" aria-hidden="true"><circle r="24" fill="#152e48" stroke="#b0c5d5"/><path d="${I(t)}" fill="#f4edce"/></svg>`;
}
function P(t, a = !1) {
  const e = [];
  for (let s = 0; s <= 360; s += 3) {
    const f = 77 + 16 * (a ? Math.cos(2 * l(s - t)) : H(s, t));
    e.push(`${300 + f * Math.cos(l(s))},${177 - f * Math.sin(l(s))}`);
  }
  return "M" + e.join("L") + "Z";
}
function m() {
  const t = g(i), a = q(i);
  if (o === 0) {
    const e = (Math.cos(l(y)) + 1) / 2, s = 270 - e * 72;
    u.innerHTML = A + `<rect x="18" y="20" width="684" height="360" rx="20" fill="#234a64"/><circle cx="615" cy="73" r="28" fill="url(#sun)"/><path d="M18 210Q210 215 370 290T702 355V380H18Z" fill="#c8a67d"/><path d="M84 305l35-73 46 7 20 58Z" fill="#75919c"/><path d="M92 288l23-44 15 4-17 40Z" fill="#a1bac0"/><path d="M18 ${s}Q100 ${s - 8} 180 ${s}T340 ${s}T500 ${s}T702 ${s}V380H18Z" fill="#4bc4dc" opacity=".73"/><path d="M18 ${s}Q100 ${s - 8} 180 ${s}T340 ${s}T500 ${s}T702 ${s}" stroke="#b4f9ff" stroke-width="4" fill="none"/><path d="M620 175V325M610 175H630M610 325H630" stroke="#cfe9ed" stroke-width="2"/><circle cx="620" cy="${s}" r="8" fill="#ffdb8c"/><text x="40" y="60">同一個海岸 · 同一塊石頭</text><text x="410" y="100" class="sub">海水升降的理想示意</text><text x="440" y="${s - 18}">${e > 0.8 ? "高水位" : e < 0.2 ? "低水位" : Math.sin(l(y)) > 0 ? "海水退下去" : "海水漲上來"}</text><text x="198" y="350" class="dark">${e > 0.8 ? "石頭大部分被淹住" : e < 0.2 ? "沙灘露出比較多" : "看水線如何移動"}</text>`;
  } else if (o === 1 || o === 2) {
    const e = o === 1 ? 0 : i, s = 300 + 142 * Math.cos(l(e)), d = 177 - 142 * Math.sin(l(e)), f = Array.from({ length: 121 }, (c, $) => {
      const Q = $ * 3;
      return `${45 + $ * 4.1},${329 - 20 * H(Q, e)}`;
    }).join(" ");
    if (u.innerHTML = A + `<g opacity=".48"><circle cx="44" cy="95" r="1.5" fill="#fff"/><circle cx="470" cy="47" r="2" fill="#fff"/><circle cx="175" cy="25" r="1.5" fill="#fff"/><circle cx="35" cy="270" r="1.5" fill="#fff"/></g><circle cx="300" cy="177" r="142" fill="none" stroke="#7fa5bc" stroke-dasharray="4 8" opacity=".55"/><path d="M510 177H668" stroke="#ffd889" stroke-dasharray="5 6"/><circle cx="650" cy="177" r="34" fill="url(#sun)"/><text x="625" y="235">太陽</text><path d="${P(e, o === 1)}" class="water"/>${V(300, 177, 60)}<text x="280" y="183" class="dark" style="font-size:14px">地球</text>${o === 1 ? '<g stroke="#ffd889" stroke-width="4" marker-end="url(#arrow)"><path d="M238 164h20"/><path d="M300 164h32"/><path d="M361 164h46"/></g><text x="185" y="270" class="sub">較弱 ← 月球吸引力 → 較強</text><text x="188" y="95" class="sub">遠側隆起</text><text x="345" y="95" class="sub">近側隆起</text>' : ""}<g id="moon" class="moon-hit" transform="translate(${s} ${d})" ${o === 2 ? 'tabindex="0" role="slider" aria-label="月球繞地球的位置" aria-valuemin="0" aria-valuemax="359" aria-valuenow="' + Math.round(p(e)) + '" aria-valuetext="' + t.name + "，" + Math.round(p(e)) + '度"' : ""}><circle r="29" fill="transparent"/><circle r="19" fill="#52657b" stroke="#e4f1f7"/><path d="M0 -19A19 19 0 0 1 0 19Z" fill="#e6e2d3"/><circle cx="7" cy="-5" r="4" fill="#c1bfba"/><circle cx="8" cy="9" r="2.5" fill="#c1bfba"/></g><text x="${s - 16}" y="${d + 44}" class="sub">月球</text>${o === 2 ? `<g transform="translate(563 47)"><circle r="24" fill="#18314b" stroke="#a7bfce"/><path d="${I(e)}" fill="#f3edcf"/></g><text x="603" y="50">${t.name}</text><text x="527" y="94" class="sub">從地球看月相</text><path d="M45 329H537" stroke="#638399" stroke-dasharray="3 4"/><polyline points="${f}" fill="none" stroke="#89f0ef" stroke-width="3"/><text x="46" y="293" class="sub">相對平均水位（無量綱）</text><text x="45" y="379" class="sub">0°</text><text x="273" y="379" class="sub">180°</text><text x="507" y="379" class="sub">360°</text><text x="541" y="326" class="sub">繞地球的位置</text><text x="550" y="355" class="sub">示意潮差 ${(a * 2).toFixed(2)}</text>` : '<text x="483" y="305" class="sub">近、遠兩側都隆起</text><text x="483" y="332" class="sub">箭頭不是海水流向</text>'}`, o === 2) {
      const c = document.getElementById("moon");
      c.addEventListener("pointerdown", D), c.addEventListener("keydown", G);
    }
  } else
    u.innerHTML = A + '<path d="M295 38Q345 70 358 115T321 220Q293 277 249 324T229 292Q238 223 251 175T268 76Z" fill="#79d6b2" stroke="#c1f3d9" stroke-width="3"/><path d="M35 250Q100 218 167 248M400 135Q490 103 565 140M420 280Q530 248 655 290" fill="none" stroke="#75d4e7" stroke-width="3" opacity=".5"/><circle cx="286" cy="85" r="7" fill="#ffe0a0"/><circle cx="248" cy="241" r="7" fill="#ffe0a0"/><circle cx="324" cy="220" r="7" fill="#ffe0a0"/><text x="365" y="50">台灣各海岸不一樣</text><text x="365" y="79" class="sub">示意地圖，非測站定位</text><rect x="410" y="123" width="250" height="185" rx="15" fill="#1b3e58" stroke="#557d95"/><text x="430" y="155">查資料的 3 個步驟</text><text x="430" y="195" class="sub">① 選地點與日期</text><text x="430" y="232" class="sub">② 找滿潮、乾潮時間</text><text x="430" y="269" class="sub">③ 比潮高，確認基準面</text><text x="34" y="347" class="sub">可能一天一組、兩組，或兩組高低不同。</text><text x="34" y="375" class="sub">不能說所有海岸一天固定兩次滿潮。</text>';
}
function v(t) {
  n("feedback").textContent = t, r.say(t);
}
function b() {
  const t = document.activeElement, a = t?.closest("#controls") ? t.id : "", e = t?.closest("#controls") ? t.dataset.angle : void 0, s = t?.closest("#controls") ? t.dataset.coast : void 0;
  n("controls").innerHTML = o === 3 ? '<a class="source-card" href="https://www.cwa.gov.tw/V8/C/M/tide.html" target="_blank" rel="noopener">查看中央氣象署潮汐預報 ↗<small>前往官方網站查地點與日期</small></a><a class="source-card" href="https://opendata.cwa.gov.tw/dataset/all/F-A0021-001" target="_blank" rel="noopener">官方開放資料 ↗<small>無即時連線，未提供本地潮時</small></a>' : (o === 0 ? '<div class="pairs"><button data-coast="180" aria-label="觀察低水位">▁ 低水位</button><button data-coast="0" aria-label="觀察高水位">▆ 高水位</button></div>' : o === 2 ? `<div class="presets">${[0, 90, 180, 270].map((c) => `<button data-angle="${c}" aria-pressed="${Math.abs(p(i) - c) < 1}">${z(c)}${g(c).name}</button>`).join("")}</div>` : "") + (o === 1 ? "" : `<div class="pairs"><button id="play" aria-pressed="${x}" aria-label="${x ? "暫停" : "播放"}海水${o === 2 ? "與月球" : ""}變化">${x ? "Ⅱ 暫停" : "▷ 播放"}</button><button id="reset" aria-label="重設本次實驗">↺ 重設</button></div>`), document.querySelectorAll("[data-coast]").forEach((c) => c.onclick = () => {
    h(), y = Number(c.dataset.coast), m(), v(y === 0 ? "高水位：淹住的石頭比較多。" : "低水位：露出的沙灘比較多。");
  }), document.querySelectorAll("[data-angle]").forEach((c) => c.onclick = () => {
    h(), i = Number(c.dataset.angle), m(), b(), v(`${g(i).name}，${i % 180 === 0 ? "日月成一直線，潮差較大。" : "日月成直角，潮差較小，仍有潮汐。"}`);
  });
  const d = n("play");
  d && (d.onclick = () => {
    x ? h() : (x = !0, k = 0, S = requestAnimationFrame(N), b());
  });
  const f = n("reset");
  f && (f.onclick = () => {
    h(), i = 0, y = 0, m(), b(), v("已重設；可以重新觀察。");
  }), a ? document.getElementById(a)?.focus() : e !== void 0 ? document.querySelector(`[data-angle="${e}"]`)?.focus() : s !== void 0 && document.querySelector(`[data-coast="${s}"]`)?.focus();
}
function w(t) {
  h(), o = Math.max(0, Math.min(3, t));
  const a = F[o];
  n("lesson-title").textContent = a.title, n("lesson-text").textContent = a.text, n("insight").textContent = a.insight, n("scene-caption").textContent = a.caption, n("scene-title").textContent = ["看海水的水線", "為什麼有兩側隆起？", "拖動月球，找出大小潮", "從模型走向真實海岸"][o], n("step-number").textContent = `探索 ${o + 1} / 4`, n("progress").textContent = `${o + 1} / 4`, n("previous").disabled = o === 0, n("next").disabled = o === 3, document.querySelectorAll("[data-step]").forEach((e) => {
    Number(e.dataset.step) === o ? e.setAttribute("aria-current", "step") : e.removeAttribute("aria-current");
  }), u.setAttribute("aria-label", ["海岸水線高低互動示意", "月球吸引力差與兩側隆起示意", "月球位置、月相、理想海水形狀與位置曲線", "台灣查詢潮汐的步驟"][o]), m(), b(), n("feedback").textContent = ["點圖卡，比較海水高低。", "先看箭頭，再進入日月合作。", "拖月球，或選一張月相圖卡。", "前往官方網站查詢。"][o], r.say(a.text + " " + a.insight);
}
function h() {
  x = !1, cancelAnimationFrame(S), k = 0, b();
}
function N(t) {
  if (!x || document.hidden) return;
  const a = k ? Math.min(t - k, 70) : 0;
  k = t, o === 0 ? y = p(y + a * 0.04) : i = p(i + a * 0.012), m(), o === 2 && document.querySelectorAll("[data-angle]").forEach((e) => e.setAttribute("aria-pressed", String(Math.abs(p(i) - Number(e.dataset.angle)) < 1))), S = requestAnimationFrame(N);
}
function Z(t) {
  const a = u.createSVGPoint();
  a.x = t.clientX, a.y = t.clientY;
  const e = u.getScreenCTM();
  if (!e) return;
  const s = a.matrixTransform(e.inverse());
  i = p(Math.atan2(177 - s.y, s.x - 300) * 180 / Math.PI), m();
}
function D(t) {
  t.button === 0 && (t.preventDefault(), h(), M = !0, u.setPointerCapture(t.pointerId), Z(t));
}
u.addEventListener("pointermove", (t) => {
  M && Z(t);
});
function L() {
  M && (M = !1, b(), v(`${g(i).name}，示意潮差 ${(2 * q(i)).toFixed(2)}。`));
}
u.addEventListener("pointerup", L);
u.addEventListener("pointercancel", L);
u.addEventListener("lostpointercapture", L);
function G(t) {
  ["ArrowRight", "ArrowUp", "ArrowLeft", "ArrowDown", "Home", "End"].includes(t.key) && (t.preventDefault(), h(), i = t.key === "Home" ? 0 : t.key === "End" ? 270 : p(i + (["ArrowRight", "ArrowUp"].includes(t.key) ? 5 : -5)), m(), b(), document.getElementById("moon")?.focus(), v(`${g(i).name}，${Math.round(i)}度。`));
}
function T(t, a) {
  h(), r.stop(), _ = document.activeElement, n("dialog-title").textContent = t, n("dialog-body").innerHTML = a, E.showModal(), n("dialog-close").focus();
}
n("dialog-close").onclick = () => E.close();
E.addEventListener("close", () => {
  r.stop(), _?.focus();
});
function j(t) {
  return `<svg viewBox="0 0 130 85" aria-hidden="true"><circle cx="100" cy="43" r="14" fill="#ffda91"/><circle cx="49" cy="43" r="14" fill="#6dcae5"/><circle cx="${49 + 29 * Math.cos(l(t))}" cy="${43 - 29 * Math.sin(l(t))}" r="7" fill="#e4e1d4"/><path d="M26 70H71" stroke="#81e8e7" stroke-width="${t % 180 === 0 ? 6 : 2}"/></svg>`;
}
n("quiz-open").onclick = () => {
  T("看圖挑戰", '<p>哪一張是小潮？日月成直角，潮差較小。</p><div class="answers">' + [0, 90, 180, 270].map((t, a) => `<button data-answer="${t}" aria-pressed="false">${j(t)}<span>圖 ${a + 1} · ${g(t).name}</span></button>`).join("") + '<p id="quiz-feedback" role="status">選一張圖卡；有兩張圖符合條件。</p>'), document.querySelectorAll("[data-answer]").forEach((t) => t.onclick = () => {
    const a = Number(t.dataset.answer) % 180 !== 0;
    document.querySelectorAll("[data-answer]").forEach((s) => s.setAttribute("aria-pressed", String(s === t)));
    const e = a ? "答對了！上弦和下弦都可能是小潮，仍有潮汐。" : "再看看。新月與滿月時日月接近一直線，通常是大潮。";
    n("quiz-feedback").textContent = e, r.say(e);
  });
};
n("notes-open").onclick = () => {
  let t = "";
  try {
    t = localStorage.getItem("lp:tides:notes:v1") || "";
  } catch {
  }
  T("我的觀察筆記", '<p>記下你發現的月相和潮差。只儲存在這個瀏覽器。</p><label for="note">我觀察到……</label><textarea id="note" maxlength="1000" placeholder="例如：小潮時，海水還是會升降。"></textarea><p id="note-status" role="status"></p>'), n("note").value = t, n("note").addEventListener("input", () => {
    try {
      localStorage.setItem("lp:tides:notes:v1", n("note").value), n("note-status").textContent = "已儲存在本機。";
    } catch {
      n("note-status").textContent = "瀏覽器未允許儲存；請自行保留筆記。";
    }
  });
};
n("sources-open").onclick = () => T("教材與模型來源", '<p>原創 SVG 示意；參考科學概念，未複製第三方影片或程式。</p><div class="source-links"><a href="https://www.noaa.gov/education/resource-collections/ocean-coasts/tides" target="_blank" rel="noopener">NOAA：拉力差與真實海岸</a><a href="https://science.nasa.gov/moon/tides/" target="_blank" rel="noopener">NASA：月球與潮汐</a><a href="https://oceanservice.noaa.gov/facts/springtide.html" target="_blank" rel="noopener">NOAA：大潮與小潮</a><a href="https://oceanservice.noaa.gov/education/tutorial_tides/tides07_cycles.html" target="_blank" rel="noopener">NOAA：不同海岸的潮型</a><a href="https://opendata.cwa.gov.tw/dataset/all/F-A0021-001" target="_blank" rel="noopener">中央氣象署：潮汐開放資料</a></div><p>模型假設地球全被海水覆蓋，忽略陸地、摩擦、天氣與延遲。月球造潮效應設為 1，太陽約 0.46；這不是兩者總引力的比例。曲線表示繞地球的位置，沒有實際日期、時刻或公尺單位，不能預測台灣潮時。</p>');
n("voice").onclick = () => {
  r.enabled = !r.enabled, n("voice").setAttribute("aria-pressed", String(r.enabled)), n("voice").setAttribute("aria-label", r.enabled ? "關閉語音" : "開啟語音"), r.enabled ? r.replay() : r.stop();
};
n("replay").onclick = () => r.replay();
n("next").onclick = () => w(o + 1);
n("previous").onclick = () => w(o - 1);
document.querySelectorAll("[data-step]").forEach((t) => t.onclick = () => w(Number(t.dataset.step)));
document.addEventListener("visibilitychange", () => {
  document.hidden && (h(), r.stop());
});
window.addEventListener("pagehide", () => {
  h(), r.stop();
});
w(0);
document.body.dataset.tidesReady = "true";
