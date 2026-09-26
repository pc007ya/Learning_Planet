import type { EarthLabState } from './earth-lab-model';
import { RAD, hourText } from './earth-lab-model';
import { MOON_PHASES, moonAge, moonLight, moonName, SYNODIC_DAYS, moonSolarHour, moonTaiwanSunAltitude } from './moon-lab-model';

const $ = <T extends HTMLElement = HTMLElement>(selector: string) => document.querySelector<T>(selector)!;
// Monochrome diagrams, not emoji: lit side matches the north-up Earth view.
export function phaseIcon(index: number): string {
  return `<svg viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="20" r="16" fill="#26394c" stroke="#90a9b9"/>${index === 2 ? '<circle cx="20" cy="20" r="16" fill="#f3e7cd" stroke="none"/>' : index === 1 ? '<path d="M20 4a16 16 0 0 1 0 32Z" fill="#f3e7cd" stroke="none"/>' : index === 3 ? '<path d="M20 4a16 16 0 0 0 0 32Z" fill="#f3e7cd" stroke="none"/>' : ''}</svg>`;
}
export function mountMoonUI(onPhase: (value: number) => void): void {
  $('.view-tools').insertAdjacentHTML('beforeend', '<button class="icon moon-taiwan" data-action="taiwan" aria-label="將視角對準臺灣" title="看臺灣" hidden><svg><use href="#target"/></svg><span style="font-size:9px">臺</span></button>');
  $('.view-tools').insertAdjacentHTML('beforeend', '<button class="icon moon-hour-step" data-action="moon-hour" aria-label="地月同步前進一小時" title="地月同步前進 1 小時" hidden><span style="font-size:13px">+1h</span></button>');
  $('.topbar nav').insertAdjacentHTML('beforeend', `<button data-mode="moon"><svg viewBox="0 0 24 24"><path d="M20 15.5A9 9 0 0 1 8.5 4 9 9 0 1 0 20 15.5Z"/></svg>月球</button>`);
  $('.observation-panel').insertAdjacentHTML('afterend', `<aside class="observation-panel moon-panel" aria-label="從地球看月球" hidden><div class="panel-head"><span><i class="status-light"></i>從地球看月球</span><small>北 ↑</small></div><div id="moon-view"></div><div class="moon-readout"><b id="moon-name">上弦</b><span id="moon-percent">50%</span></div><div class="moon-meter"><span id="moon-fill"></span></div><p class="moon-caption">看見的亮面比例</p><div class="moon-age"><span>新月之後</span><b id="moon-age"></b></div><p class="moon-footnote">月球反射太陽光<br>圓點標示同一側朝向地球</p></aside>`);
  $('.season-row').insertAdjacentHTML('afterend', `<div class="moon-row" role="group" aria-label="月相位置" hidden>${MOON_PHASES.map((p, i) => `<button data-phase="${i}">${phaseIcon(i)}<b>${p.label}</b><small>${p.english}</small></button>`).join('')}<div class="lunar-cycle"><small>月相一循環</small><b>約 29.5 日</b></div></div>`);
  document.querySelectorAll<HTMLButtonElement>('[data-phase]').forEach(button => button.onclick = () => onPhase(MOON_PHASES[Number(button.dataset.phase)].angle));
}
export function renderMoonUI(state: EarthLabState): void {
  const moon = state.mode === 'moon';
  $('.observation-panel:not(.moon-panel)').hidden = moon; $('.moon-panel').hidden = !moon;
  $('.moon-taiwan').hidden = !moon;
  $('.moon-hour-step').hidden = !moon;
  $('.season-row').hidden = moon; $('.moon-row').hidden = !moon; $('.tilt-picker').hidden = moon;
  $('[data-action=guides]').setAttribute('aria-label', moon ? '切換月球軌道與觀測線' : '切換地軸與緯線');
  $('[data-action=guides]').title = moon ? '軌道與觀測線' : '地軸與緯線';
  $('.scale-note').textContent = moon ? '大小、距離採教學比例 · 不模擬月食' : '大小、距離與時間採教學比例';
  if (!moon) return;
  $('#chapter').textContent = '03 / THE CHANGING MOON';
  $('#lesson-title').innerHTML = '一輪月亮，<br>不同的亮面。';
  $('#moon-name').textContent = moonName(state.moonPhase); $('#moon-percent').textContent = `${Math.round(moonLight(state.moonPhase) * 100)}%`;
  $('#moon-fill').style.width = `${moonLight(state.moonPhase) * 100}%`; $('#moon-age').textContent = `${moonAge(state.moonPhase).toFixed(1)} 日`;
  $('#season-name').textContent = moonName(state.moonPhase);
  $('#scene-hint').textContent = '地球自轉＋月球繞行 · 拖動月球同步調整時間';
  $('#speed-note').textContent = `1 秒 = ${state.speed * 6} 小時`;
  $('.moon-footnote').innerHTML = `<span class="moon-taiwan-clock">臺灣 <b>${hourText(moonSolarHour(state))}</b> · ${moonTaiwanSunAltitude(state) > 0 ? '白天' : '黑夜'}</span><br><span>當地太陽時 · 非臺灣標準時間</span>`;
  $('#timeline-label').textContent = '月球繞行位置'; $('#timeline-value').textContent = `${moonAge(state.moonPhase).toFixed(1)} / ${SYNODIC_DAYS.toFixed(1)} 日`;
  const slider = $<HTMLInputElement>('#timeline'); slider.max = '360'; slider.step = '.2'; slider.value = String(state.moonPhase / RAD); slider.setAttribute('aria-label', '月球繞行位置，度');
  $('#timeline-ticks').innerHTML = ['新月', '上弦', '滿月', '下弦', '新月'].map(s => `<span>${s}</span>`).join('');
  document.querySelectorAll<HTMLElement>('[data-phase]').forEach(button => { const selected = Math.abs(Math.atan2(Math.sin(state.moonPhase - MOON_PHASES[Number(button.dataset.phase)].angle), Math.cos(state.moonPhase - MOON_PHASES[Number(button.dataset.phase)].angle))) < .025; button.classList.toggle('active', selected); button.setAttribute('aria-pressed', String(selected)); });
}
const earthNote = '圓軌道教學模型；日出／日落以太陽中心通過地平線計算，未計折射、地形與均時差。四季日期為約略位置。';
export function renderMoonCard(state: EarthLabState): void {
  const moon = state.mode === 'moon', labels = document.querySelectorAll('#info-card dt');
  labels[0].textContent = moon ? '看見的亮面' : '太陽直射緯度'; labels[1].textContent = moon ? '新月之後' : '臺灣日照長短';
  $('#info-card .model-note').textContent = moon ? '固定太陽方向與季節的教學模型：24 小時太陽日、約 29.5 日月相循環。省略月食、軌道傾斜與天秤動；右圖北方朝上，不是臺灣實際天空或可見性預報。' : earthNote;
  const source = $<HTMLAnchorElement>('#info-card a'); source.href = moon ? 'https://science.nasa.gov/moon/moon-phases/' : 'https://spaceplace.nasa.gov/seasons/en/'; source.textContent = moon ? 'NASA · 月相原理 ↗' : 'NASA · 四季的原因 ↗';
  if (!moon) return;
  $('#card-title').textContent = '月相不是地球的影子。';
  $('#card-copy').textContent = '地球自轉，臺灣交替進入白晝與黑夜；月球同時慢慢繞行，改變我們看見的亮面比例。月球也自轉，讓大致同一面朝向地球。';
  $('#declination').textContent = `${Math.round(moonLight(state.moonPhase) * 100)}%`; $('#card-daylight').textContent = `${moonAge(state.moonPhase).toFixed(1)} 日`;
  $('#card-visual').innerHTML = `<div class="card-phases">${MOON_PHASES.map((p, i) => `<div>${phaseIcon(i)}<span>${p.label}</span></div>`).join('')}</div>`;
}
