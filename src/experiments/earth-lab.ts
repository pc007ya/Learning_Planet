import { EarthLabStage } from './earth-lab-stage';
import { SceneNarration } from './narration';
import { advanceMoonSystem, seekMoonPhase, moonSolarHour, moonTaiwanSunAltitude, moonName, moonLight } from './moon-lab-model';
import { mountMoonUI, renderMoonUI, renderMoonCard, phaseIcon } from './moon-lab-ui';
import { RAD, TAIWAN, SEASONS, advanceEarth, daylightHours, declination, hourText, initialEarthState, seasonName, solarAltitude, wrap, type EarthLabState } from './earth-lab-model';

const $ = <T extends HTMLElement = HTMLElement>(s: string) => document.querySelector<T>(s)!;
const state: EarthLabState = initialEarthState();
if (new URLSearchParams(location.search).get('mode') === 'moon') state.mode = 'moon';
const narrator = new SceneNarration();
$('.topbar a[aria-label="返回學習星球"]').addEventListener('click', event => {
  narrator.stop();
  if (window.parent !== window) {
    event.preventDefault();
    stage?.dispose();
    window.parent.postMessage({ type: 'earth-lab-close' }, location.origin);
  }
});
const slider = $<HTMLInputElement>('#timeline');
const quiz = $<HTMLDialogElement>('#earth-quiz');
let stage: EarthLabStage | undefined, cardScale = 1, resumeAfterQuiz = false, lastUI = 0;
const duration = (hours: number) => { const m = Math.round(hours * 60); return `${Math.floor(m / 60)} 小時 ${String(m % 60).padStart(2, '0')} 分`; };
const press = (selector: string, predicate: (el: HTMLElement) => boolean) => document.querySelectorAll<HTMLElement>(selector).forEach(el => { const selected = predicate(el); el.setAttribute('aria-pressed', String(selected)); el.classList.toggle('active', selected); });
mountMoonUI(value => manual('moonPhase', value));
const earthQuizOptions = Array.from(document.querySelectorAll<HTMLElement>('[data-answer]')).map(el => ({ html: el.innerHTML, label: el.getAttribute('aria-label')! }));

function observation(): string {
  if (state.mode === 'moon') return `${moonName(state.moonPhase)}，亮面約 ${Math.round(moonLight(state.moonPhase) * 100)}%。臺灣 ${hourText(moonSolarHour(state))}，${moonTaiwanSunAltitude(state) > 0 ? '白天' : '黑夜'}。地球自轉與月球繞行一起推進。`;
  if (!state.tilt) return '地軸直立時，各季的太陽直射赤道。比較臺灣的白晝長度。';
  if (state.mode === 'day') return solarAltitude(TAIWAN.latitude, state.season, state.tilt, state.hour) > 0 ? '臺灣正面向陽光。拖動地球，看它何時走進夜晚。' : '臺灣已轉到背光面。太陽沒有熄滅，是地球轉動了。';
  const d = declination(state.season, state.tilt);
  return Math.abs(d) < .025 ? '兩個半球受光接近對稱。臺灣的白晝和黑夜約各十二小時。' : d > 0 ? '北半球傾向太陽，臺灣白晝較長；南半球的季節相反。' : '北半球背向太陽，臺灣白晝較短；地軸仍朝同一方向。';
}
function skyGraphic(alt: number): string {
  const daylight = alt > 0, x = 96 + Math.sin((state.hour - 12) * Math.PI / 12) * 68, y = 71 - Math.sin(alt * RAD) * 56;
  return `<svg viewBox="0 0 192 102"><defs><linearGradient id="sky" x2="0" y2="1"><stop stop-color="${daylight ? '#254c69' : '#0c162b'}"/><stop offset="1" stop-color="${daylight ? '#ceac83' : '#23354c'}"/></linearGradient></defs><path d="M16 72a80 62 0 0 1 160 0Z" fill="url(#sky)"/><path d="M16 72a80 62 0 0 1 160 0" fill="none" stroke="#a3c0cd" stroke-opacity=".3" stroke-dasharray="2 4"/><path d="M12 72H180" stroke="#c6dbe4" stroke-opacity=".45"/><circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${daylight ? 6 : 4}" fill="${daylight ? '#ffe4a0' : '#9daebb'}" ${daylight ? '' : 'opacity=".55"'}/><path d="M94 72v-6h4v6m-8 0 6-8 6 8" fill="#bbcece"/><text x="12" y="94" fill="#a0b8c8" font-size="9">東</text><text x="92" y="94" text-anchor="middle" fill="#a0b8c8" font-size="9">地平線</text><text x="174" y="94" fill="#a0b8c8" font-size="9">西</text></svg>`;
}
function updateCard(day: number): void {
  const night = 24 - day;
  $('#card-title').textContent = state.mode === 'day' ? '轉一圈，走過白天與黑夜。' : '地軸不轉向，受光卻在改變。';
  $('#card-copy').textContent = state.mode === 'day' ? '黃色線是晝夜交界。臺灣隨地球由西向東自轉，交替進入日照面和背光面。' : '公轉時地軸方向不變。比較 23.5° 與 0°，觀察直射緯度與白晝長短如何改變。';
  $('#declination').textContent = `${Math.abs(declination(state.season, state.tilt) / RAD).toFixed(1)}° ${declination(state.season, state.tilt) < -.0001 ? 'S' : 'N'}`;
  $('#card-daylight').textContent = `${day.toFixed(1)} h / 夜 ${night.toFixed(1)} h`;
  const arc = 2 * Math.PI * 34;
  $('#card-visual').innerHTML = `<svg viewBox="0 0 300 110" role="img" aria-label="地軸傾斜 ${state.tilt} 度，臺灣白晝 ${day.toFixed(1)} 小時，夜晚 ${night.toFixed(1)} 小時"><circle cx="65" cy="55" r="34" fill="none" stroke="#334a65" stroke-width="10"/><circle cx="65" cy="55" r="34" fill="none" stroke="#f4d49b" stroke-width="10" stroke-dasharray="${arc * day / 24} ${arc}" transform="rotate(-90 65 55)"/><text x="65" y="53" text-anchor="middle" fill="#f0f8ff" font-size="20">24 h</text><text x="65" y="70" text-anchor="middle" fill="#8daabf" font-size="10">臺灣的一天</text><circle cx="125" cy="35" r="4" fill="#f4d49b"/><text x="138" y="40" fill="#f4d49b" font-size="13">白晝 ${day.toFixed(1)} 小時</text><circle cx="125" cy="63" r="4" fill="#6886a9"/><text x="138" y="68" fill="#adc4de" font-size="13">黑夜 ${night.toFixed(1)} 小時</text><text x="125" y="93" fill="#9fcebd" font-size="11">${seasonName(state.season)} · 地軸 ${state.tilt}°</text></svg>`;
}
function renderUI(): void {
  const day = daylightHours(TAIWAN.latitude, state.season, state.tilt), alt = solarAltitude(TAIWAN.latitude, state.season, state.tilt, state.hour);
  document.body.dataset.mode = state.mode;
  $('#chapter').textContent = state.mode === 'day' ? '01 / DAY & NIGHT' : '02 / A YEAR IN LIGHT';
  $('#lesson-title').innerHTML = state.mode === 'day' ? '轉動地球，<br>走過一天。' : '繞著太陽，<br>走過四季。';
  $('#observation').textContent = observation();
  $('#solar-hour').textContent = hourText(state.hour); $('#day-status').textContent = Math.abs(alt) < .3 ? '日出／日落' : alt > 0 ? '白天' : '黑夜';
  $('#sky-view').innerHTML = skyGraphic(alt); $('#day-length').textContent = duration(day); $('#daylight-fill').style.width = `${day / 24 * 100}%`;
  $('#sunrise').textContent = hourText(12 - day / 2); $('#sunset').textContent = hourText(12 + day / 2);
  $('#season-name').textContent = seasonName(state.season); $('#tilt-value').textContent = `${state.tilt}°`;
  press('[data-mode]', el => el.dataset.mode === state.mode); press('[data-tilt]', el => Number(el.dataset.tilt) === state.tilt);
  press('[data-season]', el => Math.abs(Math.atan2(Math.sin(state.season - SEASONS[Number(el.dataset.season)].angle), Math.cos(state.season - SEASONS[Number(el.dataset.season)].angle))) < .025);
  press('[data-action=rays]', () => state.rays); press('[data-action=guides]', () => state.guides); press('[data-action=voice]', () => narrator.enabled);
  $('[data-action=voice]').setAttribute('aria-label', narrator.enabled ? '關閉語音' : '開啟語音');
  $('[data-action=play]').textContent = state.playing ? 'Ⅱ' : '▶'; $('[data-action=play]').setAttribute('aria-label', state.playing ? '暫停播放' : '開始播放'); $('[data-action=play]').setAttribute('aria-pressed', String(state.playing));
  $('[data-action=speed]').textContent = `${state.speed}×`;
  $('#speed-note').textContent = state.mode === 'day' ? `1 秒 = ${state.speed} 小時` : `1 秒 = ${state.speed * 6} 日`;
  $('#scene-hint').textContent = state.mode === 'day' ? '拖動地球自轉 · 空白處轉動視角 · 滾輪縮放' : '拖動地球公轉 · 地軸方向固定 · 北半球四季';
  slider.max = state.mode === 'day' ? '24' : '360'; slider.step = state.mode === 'day' ? '.02' : '.2'; slider.value = String(state.mode === 'day' ? state.hour : state.season / RAD);
  slider.setAttribute('aria-label', state.mode === 'day' ? '當地太陽時' : '公轉位置，度');
  $('#timeline-label').textContent = state.mode === 'day' ? '轉動地球' : '沿軌道移動'; $('#timeline-value').textContent = state.mode === 'day' ? hourText(state.hour) : `${(state.season / RAD).toFixed(0)}°`;
  $('#timeline-ticks').innerHTML = (state.mode === 'day' ? ['00:00','06:00','12:00','18:00','24:00'] : ['春分','夏至','秋分','冬至','春分']).map(s => `<span>${s}</span>`).join('');
  renderMoonUI(state);
  if (!$('#info-card').hidden) { updateCard(day); renderMoonCard(state); }
}
function update(speak = false): void { renderUI(); stage?.update(state); if (speak) narrator.say(observation()); }
function manual(kind: 'hour' | 'season' | 'moonPhase', value: number): void { state.playing = false; if (kind === 'moonPhase') seekMoonPhase(state, value); else state[kind] = value; update(); }
function tick(dt: number): void {
  if (!state.playing || quiz.open) return;
  if (state.mode === 'moon') advanceMoonSystem(state, dt * state.speed / 4);
  else advanceEarth(state, dt * state.speed * (state.mode === 'day' ? 1 / 24 : 6)); stage?.update(state);
  if (performance.now() - lastUI > 100) { renderUI(); lastUI = performance.now(); }
}
document.querySelectorAll<HTMLButtonElement>('[data-mode]').forEach(button => button.onclick = () => { state.mode = button.dataset.mode as EarthLabState['mode']; state.playing = false; update(true); });
document.querySelectorAll<HTMLButtonElement>('[data-season]').forEach(button => button.onclick = () => { state.season = SEASONS[Number(button.dataset.season)].angle; state.playing = false; update(true); });
document.querySelectorAll<HTMLButtonElement>('[data-tilt]').forEach(button => button.onclick = () => { state.tilt = Number(button.dataset.tilt); update(true); });
document.querySelectorAll<HTMLButtonElement>('[data-time]').forEach(button => button.onclick = () => {
  const day = daylightHours(TAIWAN.latitude, state.season, state.tilt), key = button.dataset.time;
  state.hour = key === 'sunrise' ? 12 - day / 2 : key === 'sunset' ? 12 + day / 2 : Number(key); state.playing = false; update(true);
});
slider.addEventListener('input', () => manual(state.mode === 'day' ? 'hour' : state.mode === 'moon' ? 'moonPhase' : 'season', state.mode === 'day' ? wrap(Number(slider.value), 24) : wrap(Number(slider.value) * RAD)));
document.querySelectorAll<HTMLButtonElement>('[data-action]').forEach(button => button.onclick = () => {
  switch (button.dataset.action) {
    case 'rays': state.rays = !state.rays; break;
    case 'guides': state.guides = !state.guides; break;
    case 'play': state.playing = !state.playing; break;
    case 'speed': state.speed = state.speed === 1 ? 4 : 1; break;
    case 'voice': narrator.enabled = !narrator.enabled; if (narrator.enabled) narrator.say(observation()); else narrator.stop(); break;
    case 'home': stage?.home(); break;
    case 'zoom-in': stage?.zoom(.85); break;
    case 'zoom-out': stage?.zoom(1.18); break;
    case 'view': stage?.toggleView(); break;
    case 'moon-hour': state.playing = false; advanceMoonSystem(state, 1 / 24); break;
    case 'taiwan': if (state.mode === 'year') { state.mode = 'day'; state.playing = false; update(); } stage?.focusTaiwan(); break;
    case 'reset': Object.assign(state, initialEarthState()); update(); stage?.home(); narrator.stop(); break;
    case 'info': $('#info-card').hidden = !$('#info-card').hidden; button.setAttribute('aria-expanded', String(!$('#info-card').hidden)); break;
    case 'quiz': {
      resumeAfterQuiz = state.playing; state.playing = false; $('#quiz-feedback').textContent = '';
      const moon = state.mode === 'moon'; $('#earth-quiz h2').textContent = moon ? '為什麼月亮看起來會變圓、變缺？' : '哪一種情況讓臺灣夏季白晝較長？';
      document.querySelectorAll<HTMLElement>('[data-answer]').forEach((b, i) => {
        b.classList.remove('correct');
        const label = i ? '都是地球的影子擋住' : '看見的亮面比例改變';
        b.innerHTML = moon ? `${i ? '<svg viewBox="0 0 180 130"><circle cx="45" cy="65" r="28" fill="#26768b"/><path d="m72 42 87-15v76L72 88Z" fill="#080f21"/><circle cx="143" cy="65" r="16" fill="#44536b"/></svg>' : phaseIcon(1)}<span>${label}</span>` : earthQuizOptions[i].html;
        b.setAttribute('aria-label', moon ? label : earthQuizOptions[i].label);
      });
      quiz.showModal(); narrator.say($('#earth-quiz h2').textContent!); break;
    }
  }
  update();
});
document.querySelectorAll<HTMLButtonElement>('[data-card]').forEach(button => button.onclick = () => {
  if (button.dataset.card === 'close') { $('#info-card').hidden = true; $('[data-action=info]').setAttribute('aria-expanded', 'false'); return; }
  cardScale = Math.max(.85, Math.min(1.3, cardScale + (button.dataset.card === 'larger' ? .15 : -.15)));
  $('#info-card').style.setProperty('--zoom', String(cardScale)); $('#card-scale').textContent = `${Math.round(cardScale * 100)}%`;
});
document.querySelectorAll<HTMLButtonElement>('[data-answer]').forEach(button => button.onclick = () => {
  const correct = button.dataset.answer === 'tilt'; button.classList.toggle('correct', correct);
  const text = state.mode === 'moon' ? (correct ? '答對了！月球有一半被照亮，我們看見的亮面比例隨位置改變。' : '再看看陽光方向。月相不是地球影子造成的；月食才是月球進入地球的影子。') : correct ? '答對了！北半球傾向太陽時，臺灣在日照面停留更久。' : '再看看地軸：四季的主要原因是地軸傾斜，不是距離。'; $('#quiz-feedback').textContent = text; narrator.say(text);
});
quiz.addEventListener('close', () => { state.playing = resumeAfterQuiz; narrator.stop(); update(); });
document.addEventListener('visibilitychange', () => { if (document.hidden) narrator.stop(); });
window.addEventListener('pagehide', () => { narrator.stop(); stage?.dispose(); });
window.addEventListener('pageshow', event => { if (event.persisted) location.reload(); });
renderUI();
void EarthLabStage.create($('#earth-stage'), state, manual, tick).then(result => { stage = result; $('#loading').hidden = true; stage.update(state); }).catch(error => { $('#loading').textContent = '無法開啟 3D 場景，請確認瀏覽器支援 WebGL，並重新載入。'; console.error(error); });
