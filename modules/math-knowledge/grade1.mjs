// Taiwan Grade 1 learning-content mapping. Descriptions are our summaries.
// Prerequisite edges are teaching suggestions, not Ministry-prescribed ordering.
export const curriculum = {
  title: '十二年國民基本教育數學領域・一年級',
  source: 'https://edu.law.moe.gov.tw/LawContent.aspx?id=GL001788',
  pdf: 'https://edu.law.moe.gov.tw/Download.ashx?FileID=31051&id=GL001788&type=LAW',
  pages: '課綱印刷頁 19–20',
  checked: '2026-11-01',
  standards: {
    'N-1-1': '一百以內的數、數量與順序、個與十、0 的位值',
    'N-1-2': '加減的意義、生活情境與算式',
    'N-1-3': '基本加減法，以操作建立計算能力',
    'N-1-4': '1、5、10、50、100 元的數錢、換錢與找錢',
    'N-1-5': '長度的直接與間接比較，含個別單位',
    'N-1-6': '日常時間用語、簡單日期、整點與半點',
    'S-1-1': '長度的比較與操作，與 N-1-5 相同',
    'S-1-2': '平面與立體形體的描繪、複製、拼貼與堆疊',
    'R-1-1': '在加減活動中理解數、加號、減號與等號',
    'R-1-2': '在合併情境中發現兩數換順序相加仍一樣多',
    'D-1-1': '蒐集、分類、記錄與說明日常物品'
  }
};

export const groups = [
  { id: 'number', label: '數與順序', icon: '①', color: '#8bc8ff' },
  { id: 'calculate', label: '分合與加減', icon: '＋', color: '#c3a2ff' },
  { id: 'shape', label: '形狀與拼組', icon: '△', color: '#ffb4d5' },
  { id: 'length', label: '比較與測量', icon: '↔', color: '#75e4ce' },
  { id: 'money', label: '生活錢幣', icon: '＄', color: '#ffda89' },
  { id: 'time', label: '時間與日期', icon: '◷', color: '#ffba8b' },
  { id: 'classify', label: '分類與記錄', icon: '▦', color: '#9de3b4' }
];

const node = (id, label, group, position, standards, units, goal, extra = {}) =>
  ({ id, label, group, position, standards, units, goal, scope: 'core', ...extra });

export const nodes = [
  node('count10', '10 以內的數', 'number', [-43, 24, 1], ['N-1-1'], ['u101'], '點一個物件數一次，認識 0，說出一共有幾個。'),
  node('compare', '數一數、比多少', 'number', [-26, 29, 0], ['N-1-1'], ['u34', 'u103'], '用一一對應和數數比較兩群物件的多少。'),
  node('match', '數字配數量', 'number', [-43, 9, -1], ['N-1-1'], ['u38'], '把數字和相同數量的物件配在一起。'),
  node('order', '順序與位置', 'number', [-26, 13, 1], ['N-1-1'], ['u103', 'u35'], '分辨「幾個」和「第幾個」，用自己的話描述位置。', { note: '數的順序對應 N-1-1；方位推理是支持理解的活動。' }),
  node('count30', '20、30 與數線', 'number', [-9, 29, -1], ['N-1-1'], ['u106', 'u3'], '接著數、倒著數，在數線上找到數字的位置。'),
  node('place', '十位與個位', 'number', [-9, 13, 0], ['N-1-1'], ['u109'], '用十個一換一個十，表示一百以內的數。'),
  node('bonds', '分與合', 'calculate', [-23, -4, 1], ['N-1-2', 'N-1-3'], ['u104'], '把一群物件分成兩部分，再合回來，找出 10 的不同組合。'),
  node('add', '合起來、加一加', 'calculate', [-6, -3, 0], ['N-1-2', 'N-1-3'], ['u1'], '用添加、合併的情境說明加法，包含加 0。'),
  node('sub', '拿走與相差', 'calculate', [-8, -19, 0], ['N-1-2', 'N-1-3'], ['u2'], '用拿走、比較的情境說明減法，包含減 0。'),
  node('make10', '先湊成 10', 'calculate', [11, -3, 1], ['N-1-3'], ['u108'], '移動花片，把一部分先湊成十，再數剩下的。'),
  node('sub20', '20 以內減法', 'calculate', [10, -20, -1], ['N-1-3'], ['u110'], '用物件、數線或拆數的方法，解釋基本減法。'),
  node('symbols', '讀懂加減算式', 'calculate', [-9, -34, -1], ['R-1-1', 'N-1-2'], ['u1', 'u2'], '把物件故事和加號、減號、等號連在一起。', { note: '這個概念融入加減課程，不另設一個必過關卡。' }),
  node('swap', '換順序，一樣多', 'calculate', [12, 13, 0], ['R-1-2'], ['u1'], '交換兩群物件的合併順序，看看總數是否改變。', { note: '活動中理解即可，不要求背誦運算律名稱。' }),
  node('solids', '方盒、圓罐、球', 'shape', [29, 27, 0], ['S-1-2'], ['u105'], '摸一摸、堆一堆、滾一滾，觀察不同形體。'),
  node('flat', '認識平面形狀', 'shape', [46, 15, 1], ['S-1-2'], ['u4', 'u29'], '從物品表面找到形狀，描繪、複製與配對。'),
  node('puzzle', '圖形觀察與拼組', 'shape', [29, 1, -1], ['S-1-2'], ['u33', 'u105'], '移動、旋轉、拼貼或堆疊，做出新的形體。'),
  node('length', '比長短', 'length', [-44, -15, 0], ['N-1-5', 'S-1-1'], ['u102'], '對齊起點比較長短，也用繩子比較彎曲的路。'),
  node('measure', '用一樣的單位量', 'length', [-31, -32, 1], ['N-1-5', 'S-1-1'], ['u111'], '用相同物件首尾相接量長度，不留空隙、不重疊。', { note: '小一先用個別單位；公分與公尺留在後續年級。' }),
  node('coins', '數錢、換錢、找錢', 'money', [13, -35, 0], ['N-1-4'], ['u36'], '操作 1、5、10、50、100 元，數出金額並練習換錢與找錢。'),
  node('clock', '整點與半點', 'time', [31, -17, 1], ['N-1-6'], ['u107'], '用鐘面讀整點和半點，說說上午與下午的活動。'),
  node('calendar', '今天、明天與日期', 'time', [46, -33, -1], ['N-1-6'], ['u112'], '在日曆上指出今天、昨天、明天，讀出幾月幾日。', { note: '本節點對應簡單日期報讀；原課程中的星期推理是延伸活動。' }),
  node('classify', '分類與記錄', 'classify', [47, -4, 0], ['D-1-1'], ['u34', 'u105'], '蒐集生活物品，用不同方法分類，再說明自己的記錄。', { note: '以物品和自創記錄呈現，不要求正式統計圖表。' }),
  node('chain', '連續加減挑戰', 'calculate', [-28, -47, 0], [], ['u19'], '在遊戲中試試連續加減，練習自己的計算策略。', { scope: 'extension', note: '既有延伸活動；不列為小一課綱核心通關條件。' }),
  node('columns', '直式加減挑戰', 'calculate', [2, -49, 0], [], ['u14', 'u15', 'u20', 'u21'], '完成核心概念後，可選擇探索更大的數與直式加減。', { scope: 'extension', note: '正式直式原理對應後續年級 N-2-2；保留既有小一課號，列為自選延伸。' })
];

// from -> to, with a reason for each teaching suggestion. No edge locks a lesson.
const edge = (from, to, reason, strength = 'suggested') => ({ from, to, reason, strength });
export const edges = [
  edge('count10', 'compare', '先能點數，再比較物件的多少。'),
  edge('count10', 'match', '把數字和點數結果建立連結。'),
  edge('count10', 'order', '從數量拓展到數的順序。'),
  edge('count10', 'count30', '延伸既有數序，繼續往後數。'),
  edge('count30', 'place', '把較大的數組成十與個。'),
  edge('count10', 'bonds', '用能點數的物件練習分合。'),
  edge('bonds', 'add', '合併兩部分可以用加法表示。', 'direct'),
  edge('bonds', 'sub', '從整體拿走一部分，觀察剩下多少。', 'direct'),
  edge('compare', 'sub', '把相差多少連結到比較型減法。'),
  edge('add', 'make10', '已有合併經驗後，再探索湊十策略。', 'direct'),
  edge('bonds', 'make10', '湊十會用到數的拆分與組合。', 'direct'),
  edge('sub', 'sub20', '延伸拿走和比較的減法意義。', 'direct'),
  edge('make10', 'sub20', '十的分合能幫助建立減法策略。'),
  edge('add', 'symbols', '把操作和故事記錄成算式。'),
  edge('sub', 'symbols', '把拿走或比較的故事記錄成算式。'),
  edge('add', 'swap', '從合併兩群物件觀察交換順序。'),
  edge('solids', 'flat', '觀察立體物件的表面並描繪形狀。'),
  edge('flat', 'puzzle', '運用形狀觀察來拼組。'),
  edge('solids', 'puzzle', '運用立體操作經驗進行堆疊。'),
  edge('length', 'measure', '從直接比較進展到用相同物件間接比較。', 'direct'),
  edge('place', 'coins', '用十與個的表徵幫助數錢和換錢。'),
  edge('add', 'coins', '合併不同面額，算一共有多少元。'),
  edge('sub', 'coins', '用拿走或比較理解找錢。'),
  edge('order', 'calendar', '用前後順序描述昨天、今天與明天。'),
  edge('count10', 'clock', '讀數的經驗支持鐘面數字辨認。'),
  edge('compare', 'classify', '把物件分組，再計數和記錄。'),
  edge('flat', 'classify', '形狀是生活物品的一種分類方式。'),
  edge('add', 'chain', '加法熟悉後可探索連續運算。'),
  edge('sub', 'chain', '減法熟悉後可探索連續運算。'),
  edge('place', 'columns', '十與個的表徵支持後續直式理解。'),
  edge('make10', 'columns', '湊十經驗支持後續進位操作。'),
  edge('sub20', 'columns', '基本減法支持後續退位操作。')
];

export const courseOrder = ['u101','u34','u38','u102','u103','u35','u104','u105','u29','u106','u109','u3','u1','u2','u107','u108','u110','u4','u33','u111','u36','u19','u14','u15','u20','u21','u112'];

export function neighbors(id, allEdges = edges) {
  return new Set([id, ...allEdges.filter(e => e.from === id || e.to === id).flatMap(e => [e.from, e.to])]);
}

export function practiceStatus(topic, records = {}) {
  const practiced = topic.units.filter(id => records[id]?.practiced);
  // Completing a broad lesson cannot establish mastery of every mapped concept.
  return { practiced: practiced.length > 0, count: practiced.length, total: topic.units.length };
}

export function learningOrder(target, records = {}) {
  const result = [], seen = new Set();
  function visit(id) {
    if (seen.has(id)) return;
    seen.add(id);
    edges.filter(e => e.to === id).forEach(e => visit(e.from));
    const topic = nodes.find(n => n.id === id);
    if (topic && !practiceStatus(topic, records).practiced) result.push(topic);
  }
  visit(target);
  return result;
}
