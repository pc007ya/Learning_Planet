/** Qualitative teaching scenarios, not empirical thresholds or a forecast model. */
export type FireWeatherState = { heat: 'low' | 'high'; moisture: 'dry' | 'humid' };
export function fireWeatherOutcome(s: FireWeatherState) {
  const humid = s.moisture === 'humid', strong = s.heat === 'high';
  return { cloud: humid, deepCloud: humid && strong, rise: strong ? 7 : 4,
    label: !humid ? '煙上升，示意中未形成雲' : strong ? '條件合適，可能形成火積雨雲' : '水氣凝結，示意中形成小雲',
    explanation: !humid ? '加熱讓空氣上升。這個乾燥情境沒有足夠水氣形成雲；灰色煙不是白色的雲。' : strong ? '強加熱讓空氣上升；水氣冷卻凝結。在大氣條件合適時，雲可能發展成火積雨雲，帶來雨、閃電與強風。真實情況還受大氣穩定度等因素影響。' : '潮濕空氣上升後冷卻，水氣可能凝結成小水滴。小雲不一定會長成雷雨雲。' };
}
