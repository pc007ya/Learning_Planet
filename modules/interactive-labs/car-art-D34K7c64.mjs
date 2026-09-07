const i = [
  { id: "stone", name: "石頭", mass: 135, volume: 50, color: 9015980, note: "一般緻密石頭；不代表有許多氣孔的浮石。" },
  { id: "key", name: "金屬鑰匙", mass: 16, volume: 2, color: 16764775, note: "實心金屬鑰匙，不含浮水鑰匙圈。" },
  { id: "boat", name: "紙船", mass: 8, volume: 160, color: 16772038, note: "完整且尚未吸水的紙船，船內保留空氣；此模型不模擬吸水和翻覆。" },
  { id: "ball", name: "海灘球", mass: 80, volume: 4e3, color: 16741019, note: "已充氣、未漏氣的海灘球。" },
  { id: "wood", name: "木塊", mass: 30, volume: 60, color: 13077841, note: "乾燥的一般輕木；不同木種的密度不同。" },
  { id: "cork", name: "軟木塞", mass: 5, volume: 25, color: 14003826, note: "乾燥軟木塞，內部有許多小氣孔。" },
  { id: "coin", name: "硬幣", mass: 6, volume: 0.7, color: 16104524, note: "一般金屬硬幣，輕輕放入水中。" },
  { id: "marble", name: "玻璃彈珠", mass: 12, volume: 4.8, color: 8577007, note: "實心玻璃彈珠，不是中空玻璃球。" }
];
function l(a, e) {
  if (!(a > 0 && e > 0) || !Number.isFinite(a + e)) throw new Error("Invalid sample");
  return { floats: a < e, fraction: Math.min(1, a / e), weight: a * 981e-5, maxBuoyancy: e * 981e-5 };
}
function m(a, e) {
  return 3.6 * Math.max(0, Math.min(1, a)) ** 2 / (e ? 2 : 1);
}
const n = {
  buoyancy: { title: "浮力實驗室", objective: "比較 8 種物品的浮沉，理解水也會向上托住物體。", question: "為什麼充氣海灘球比硬幣重，卻能浮起？", choices: ["只要大就會浮", "要一起考慮重量與能排開的水量", "沉下去的物體沒有浮力"], answer: 1 },
  clock: { title: "簡單機構：時鐘", objective: "轉動分針，觀察時針與齒輪如何一起運動。", question: "分針轉一圈，時針會走多少？", choices: ["一圈", "完全不動", "一大格，也就是一圈的十二分之一"], answer: 2 },
  car: { title: "簡單機構：回力車", objective: "比較回拉量與路面，觀察彈簧儲能如何帶動車輪。", question: "回力車往後拉時，主要把能量存在哪裡？", choices: ["彈簧", "車子的顏色", "空氣中"], answer: 0 }
}, r = "./images/experiments/car-v4/";
function d(a) {
  const e = a.querySelector(".il-stage"), t = document.createElement("div");
  t.className = "car-race-background", t.setAttribute("aria-hidden", "true"), t.innerHTML = `<img class="car-smooth-bg" src="${r}track-smooth.png" alt="" draggable="false"><img class="car-rough-bg" src="${r}track-rough.png" alt="" draggable="false">`, e.prepend(t), a.querySelectorAll("[data-road]").forEach((c) => {
    const s = document.createElement("img");
    s.src = `${r}track-${c.dataset.road}.png`, s.alt = "", s.draggable = !1, c.querySelector("svg")?.replaceWith(s);
  });
  const o = a.querySelector(".il-assessment");
  o.classList.add("car-picture-quiz"), o.innerHTML = `<div class="car-picture-prompt"><h3 class="bp-sr">${n.car.question}</h3><img src="${r}question-pull.png" alt="手把回力車往後拉，箭頭指向後方"><span class="car-question-mark" aria-hidden="true">?</span><button data-car-read aria-label="聽題目" title="聽題目">🔊</button></div><div class="il-answers">${["spring", "paint", "air"].map((c, s) => `<button data-answer="${s}" aria-label="${n.car.choices[s]}" aria-pressed="false"><img src="${r}${c}.png" alt="" draggable="false"><span class="bp-sr">${n.car.choices[s]}</span></button>`).join("")}</div><p class="il-feedback" role="status"><span aria-hidden="true">👆</span><span class="bp-sr">先玩回力車，再點圖片回答。可點喇叭聽題目。</span></p>`;
}
export {
  r as C,
  i as F,
  n as L,
  l as b,
  m as c,
  d as i
};
