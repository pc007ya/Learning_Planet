// Reuse the approved illustrations already present on the math planet.
const base = 'images/math-grade1/v2/';
const picture = (file, caption, hint) => ({ art: base + file, caption, hint });
export const visuals = {
  count10: picture('unit-01-numbers-within-10-v2.png','數到 10','數一數，有幾個？'),
  compare: picture('counting-magnifier-v2.png','比多少','哪一邊比較多？'),
  match: picture('memory-cards-v2.png','找一樣多','翻一翻，找朋友！'),
  order: picture('order-path-v2.png','排順序','誰在前面？'),
  count30: picture('number-line-v2.png','數線','沿著數字往前走。'),
  place: { art:'modules/math-knowledge/icons/place-value.svg',caption:'十位・個位',hint:'十個一，換一個十。' },
  bonds: picture('unit-04-number-bonds-v2.png','分與合','分一分，再合起來。'),
  add: picture('unit-07-addition-v2.png','加一加','合起來有多少？'),
  sub: picture('unit-08-subtraction-v2.png','減一減','拿走後，剩多少？'),
  make10: { art:'modules/math-knowledge/icons/ten-frame.svg',caption:'湊成 10',hint:'先裝滿十格！' },
  sub20: picture('subtraction-within-50-v2.png','20 內減法','用積木找答案。'),
  symbols: { art:'modules/math-knowledge/icons/symbols.svg',caption:'讀算式',hint:'把故事變成算式。' },
  swap: picture('unit-07-addition-v2.png','換一邊','交換看看，一樣多嗎？'),
  solids: picture('unit-05-solids-v2.png','立體積木','堆一堆，滾一滾。'),
  flat: picture('flat-shapes-v2.png','找形狀','找找看，是什麼形狀？'),
  puzzle: picture('puzzle-shapes-v2.png','拼一拼','轉一轉，拼一拼。'),
  length: picture('unit-02-compare-v2.png','比長短','對齊起點，比一比。'),
  measure: picture('unit-02-compare-v2.png','量一量','排整齊，量一量。'),
  coins: picture('coin-stack-v2.png','數錢幣','數一數，有多少元？'),
  clock: picture('unit-09-time-v2.png','看時鐘','現在幾點鐘？'),
  calendar: { art: 'modules/math-foundations/icons/u112.svg', caption:'找日期', hint:'找找今天在哪裡。' },
  classify: picture('counting-magnifier-v2.png','分一分','一樣的，放一起。'),
  chain: picture('calculation-chain-v2.png','加減挑戰','連續算一算！'),
  columns: picture('addition-within-99-v2.png','直式挑戰','挑戰更大的數！')
};
export const routeVisuals = {
  number: { topic:'count10', label:'數感' }, calculate:{ topic:'bonds',label:'加減' },
  shape:{ topic:'solids',label:'形狀' },length:{ topic:'length',label:'量長' },
  money:{ topic:'coins',label:'錢幣' },time:{ topic:'clock',label:'時間' },classify:{ topic:'classify',label:'分類' }
};

// Exact UI symbols remain code-native, in the site's rounded pastel palette.
export function actionIcon(action) {
  const content = {
    video:'<rect x="7" y="11" width="50" height="37" rx="10" fill="#8abaff"/><rect x="11" y="15" width="42" height="29" rx="7" fill="#376fc7"/><path d="m28 22 15 8-15 9Z" fill="#fff1be"/><path d="M25 54h14M32 48v6" stroke="#a5c5f8" stroke-width="4" stroke-linecap="round"/>',
    teaching:'<path d="m8 26 13-7 13 7-13 7Z" fill="#c1efcd"/><path d="m8 26 13 7v16L8 42Z" fill="#69b798"/><path d="m21 33 13-7v16l-13 7Z" fill="#91d6ad"/><path d="m31 16 12-6 13 7-12 7Z" fill="#f5d899"/><path d="m31 16 13 8v15l-13-8Z" fill="#d5a55d"/><path d="m44 24 12-7v15l-12 7Z" fill="#e8bf74"/><circle cx="44" cy="44" r="13" fill="#a0e2ea"/><path d="m38 46 5 5 8-12" stroke="#296b81" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>',
    practice:'<rect x="10" y="8" width="38" height="48" rx="8" fill="#f3e8c9"/><path d="M19 20h19M19 29h12M19 38h8" stroke="#b1a1c5" stroke-width="3" stroke-linecap="round"/><path d="m30 46 6-15 10-13 8 6-10 13Z" fill="#c49aef"/><path d="m30 46 4-10 6 5Z" fill="#76608f"/><path d="m45 19 3-4a4 4 0 0 1 6 5l-2 4Z" fill="#ffb6c7"/>'
  }[action];
  return `<svg viewBox="0 0 64 64" aria-hidden="true" focusable="false">${content}</svg>`;
}
