export const FLOAT_OBJECTS = [
  { id: 'stone', name: '石頭', mass: 135, volume: 50, color: 0x8992ac, note: '一般緻密石頭；不代表有許多氣孔的浮石。' },
  { id: 'key', name: '金屬鑰匙', mass: 16, volume: 2, color: 0xffcf67, note: '實心金屬鑰匙，不含浮水鑰匙圈。' },
  { id: 'boat', name: '紙船', mass: 8, volume: 160, color: 0xffebc6, note: '完整且尚未吸水的紙船，船內保留空氣；此模型不模擬吸水和翻覆。' },
  { id: 'ball', name: '海灘球', mass: 80, volume: 4000, color: 0xff729b, note: '已充氣、未漏氣的海灘球。' },
  { id: 'wood', name: '木塊', mass: 30, volume: 60, color: 0xc78d51, note: '乾燥的一般輕木；不同木種的密度不同。' },
  { id: 'cork', name: '軟木塞', mass: 5, volume: 25, color: 0xd5ae72, note: '乾燥軟木塞，內部有許多小氣孔。' },
  { id: 'coin', name: '硬幣', mass: 6, volume: 0.7, color: 0xf5bc4c, note: '一般金屬硬幣，輕輕放入水中。' },
  { id: 'marble', name: '玻璃彈珠', mass: 12, volume: 4.8, color: 0x82dfef, note: '實心玻璃彈珠，不是中空玻璃球。' },
] as const;
export type FloatObject = typeof FLOAT_OBJECTS[number];
// Grams and cm³; freshwater density is approximated as 1 g/cm³.
export function buoyancy(mass: number, volume: number) {
  if (!(mass > 0 && volume > 0) || !Number.isFinite(mass + volume)) throw new Error('Invalid sample');
  return { floats: mass < volume, fraction: Math.min(1, mass / volume), weight: mass * 0.00981, maxBuoyancy: volume * 0.00981 };
}
export function clockAngles(minutes: number) {
  return { minute: -minutes * Math.PI / 30, hour: -minutes * Math.PI / 360 };
}
// Teaching model: energy ∝ pull²; friction work = energy, hence distance ∝ pull².
export function carDistance(pull: number, rough: boolean) { return 3.6 * Math.max(0, Math.min(1, pull)) ** 2 / (rough ? 2 : 1); }
export const LAB_SPECS = {
  buoyancy: { title: '浮力實驗室', objective: '比較 8 種物品的浮沉，理解水也會向上托住物體。', question: '為什麼充氣海灘球比硬幣重，卻能浮起？', choices: ['只要大就會浮', '要一起考慮重量與能排開的水量', '沉下去的物體沒有浮力'], answer: 1 },
  clock: { title: '簡單機構：時鐘', objective: '轉動分針，觀察時針與齒輪如何一起運動。', question: '分針轉一圈，時針會走多少？', choices: ['一圈', '完全不動', '一大格，也就是一圈的十二分之一'], answer: 2 },
  car: { title: '簡單機構：回力車', objective: '比較回拉量與路面，觀察彈簧儲能如何帶動車輪。', question: '回力車往後拉時，主要把能量存在哪裡？', choices: ['彈簧', '車子的顏色', '空氣中'], answer: 0 },
} as const;
export type LabKind = keyof typeof LAB_SPECS;
