import { OpticsStage, type OpticsState } from './optics-stage';
import { blurRadius, lensImage, prismVertices, tracePrism, signedFocal, lensDescription, type LensKind } from './optics-model';
import { SceneNarration } from './narration';

const $ = <T extends HTMLElement>(selector: string) => document.querySelector<T>(selector)!;
const defaults: OpticsState = { mode: 'lens', source: 'rocket', kind: 'convex', focal: 3, object: 7, screen: 5.25, aperture: 1.25, angle: -10, exploded: true, rays: true, view: 'perspective' };
const state = { ...defaults };
const saved = new Map<string, OpticsState>();
let cardScale = 1;
const activity = () => state.mode === 'prism' ? 'prism' : state.source;
const narrator = new SceneNarration();
let stage: OpticsStage | undefined;
let frame = 0;
const schedule = () => { cancelAnimationFrame(frame); frame = requestAnimationFrame(update); };
try {
  stage = new OpticsStage($('#stage'), $<HTMLCanvasElement>('#projection'), state, (target, value) => { state[target] = value; schedule(); });
  $('#loading').hidden = true;
} catch (error) { $('#loading').textContent = '無法啟動 3D 場景，請重新整理或開啟瀏覽器硬體加速。'; console.error(error); }

function update(): void {
  stage?.update(state);
  const lens = state.mode === 'lens';
  const point = lens && state.source === 'point';
  document.body.dataset.mode = state.mode;
  document.body.dataset.source = state.source;
  document.querySelectorAll<HTMLButtonElement>('[data-activity]').forEach((el) => { const active = el.dataset.activity === activity(); el.classList.toggle('active', active); el.setAttribute('aria-pressed', String(active)); });
  document.querySelectorAll<HTMLButtonElement>('[data-kind]').forEach(el => el.setAttribute('aria-pressed', String(el.dataset.kind === state.kind)));
  if (!point) { $('#explanation-card').hidden = true; $('[data-info]').setAttribute('aria-expanded', 'false'); }
  $<HTMLInputElement>('#focal').value = String(state.focal * 10);
  $<HTMLInputElement>('#angle').value = String(state.angle);
  $('#focal-value').textContent = `${(state.focal * 10).toFixed(1)} cm`;
  $('#angle-value').textContent = `${state.angle.toFixed(1)}°`;
  $('#object-value').textContent = (state.object * 10).toFixed(1);
  $('#screen-value').textContent = (state.screen * 10).toFixed(1);
  document.querySelectorAll<HTMLButtonElement>('[data-aperture]').forEach((el) => { const active = Number(el.dataset.aperture) === state.aperture; el.classList.toggle('active', active); el.setAttribute('aria-pressed', String(active)); });
  for (const [selector, active] of [['[data-explode]', state.exploded], ['[data-rays]', state.rays], ['[data-view]', state.view === 'side'], ['[data-voice]', narrator.enabled]] as const) $(selector).setAttribute('aria-pressed', String(active));
  $('#lens-controls').hidden = !lens; $('#prism-controls').hidden = lens;
  $('#lesson-number').textContent = lens ? '01 / LIGHT & FOCUS' : '02 / LIGHT & COLOUR';
  $('#lesson-name').textContent = lens ? state.kind === 'convex' ? '凸透鏡 · 光的會聚' : '凹透鏡 · 光的發散' : '白光裡，藏著彩虹。';
  $('#stage-help').textContent = lens ? 'F＝焦點 · 2F＝兩倍焦距 · 實線：光線 · 虛線：反向延長線' : '拖動三稜鏡，觀察光的轉彎與分色';
  const focal = signedFocal(state.kind, state.focal);
  const image = lensImage(state.object, focal);
  const blur = blurRadius(state.object, focal, state.screen, state.aperture);
  const ratio = state.object / state.focal;
  $('#position-ratio').textContent = `物距 ${ratio.toFixed(2)} f`;
  $('#image-detail').textContent = lensDescription(state.object, focal);
  document.querySelectorAll<HTMLButtonElement>('[data-position]').forEach((el) => {
    const value = el.dataset.position!;
    const active = value === 'outer' ? ratio > 2.01 : value === 'between' ? ratio > 1.01 && ratio < 1.99 : value === 'inner' ? ratio < .99 : Math.abs(ratio - Number(value)) < .01;
    el.setAttribute('aria-pressed', String(active));
    el.disabled = value === 'outer' && 2 * state.focal >= 9;
  });
  const sharp = image.real && blur < .045;
  const prismTrace = tracePrism({ x: -6.1, y: .46 }, prismVertices(state.angle), 1.52, 3.5);
  const spectrumOnScreen = prismTrace.hitScreen && Math.abs(prismTrace.points.at(-1)!.y + .3) < 3.85 / 2;
  $('#focus-distance').textContent = `${(focal * 10).toFixed(1)} cm`;
  $('#image-distance').textContent = Number.isFinite(image.distance) ? `${(image.distance * 10).toFixed(1)} cm` : '∞';
  $('#image-size').textContent = Number.isFinite(image.magnification) ? `${Math.abs(image.magnification).toFixed(2)} ×` : '—';
  $('#image-state').textContent = lens ? (image.real ? sharp ? '清楚的倒像' : '影像正在失焦' : Number.isFinite(image.distance) ? '正立虛像 · 屏上接不到' : '光線平行 · 無有限成像') : spectrumOnScreen ? '屏上的光譜' : prismTrace.reflected ? '內部反射 · 光離開接收屏' : '光離開接收屏';
  $('#preview-title').textContent = lens ? '成像屏 · 放大看' : '光譜 · 放大看';
  $('#empty-projection').hidden = !lens || image.real;
  $('#focus-meter').style.width = `${lens ? (image.real ? Math.max(4, 100 - blur * 180) : 0) : spectrumOnScreen ? 100 : 0}%`;
  $<HTMLButtonElement>('[data-align]').disabled = !image.real || image.distance > 9.2 || image.distance < 2;
  $('#empty-projection').textContent = Number.isFinite(image.distance) ? '虛像接不到屏上' : '出射光平行';
  const observation = lens ? state.kind === 'concave' ? '光線發散，反向延長交於同側 F 內，形成正立縮小虛像。' : (image.real ? ratio > 2.01 ? '物體在 2F 外，倒立縮小的實像形成在另一側 F 與 2F 之間。' : ratio >= 1.99 ? '物體在 2F，另一側 2F 形成倒立、等大的實像。' : '物體在 F 與 2F 之間，倒立放大的實像形成在另一側 2F 外。' : Number.isFinite(image.distance) ? '物體在 F 內，反向延長線交於同側，形成正立放大的虛像。' : '物體在 F 上，同一物點的出射光平行，沒有有限距離的像。') : prismTrace.reflected ? '這個角度產生全反射，光在玻璃裡轉彎後從另一面離開。' : '轉動玻璃稜鏡，看看不同顏色怎麼分開。';
  $('#observation').textContent = observation;
  if (lens && !point) {
    $('#lesson-name').textContent = '把光，聚成一幅畫。';
    $('#stage-help').textContent = '拖動物體、鏡頭或成像屏 · 空白處旋轉 · 滾輪縮放';
    $('#observation').textContent = image.real ? sharp ? '光束交會在屏上，倒立的火箭變清楚了。' : '轉動調焦環，或移動屏，找到光束交會的位置。' : Number.isFinite(image.distance) ? '物體在焦距內，形成正立放大的虛像；屏上接不到。' : '物體在焦點上，出射光平行，屏上接不到清楚的像。';
  }
  if (point) {
    const detail = !Number.isFinite(image.distance) ? '出射光平行 · 無有限像點' : image.real ? '異側實像點' : '同側虛像點';
    $('#lesson-number').textContent = '03 / POINT SOURCE';
    $('#lesson-name').textContent = state.kind === 'convex' ? '凸透鏡 · 點光源會聚' : '凹透鏡 · 點光源發散';
    $('#position-ratio').textContent = `光源距離 ${ratio.toFixed(2)} |f|`;
    $('#image-detail').textContent = detail;
    $('#image-size').textContent = Number.isFinite(image.magnification) ? `${(8 * image.magnification).toFixed(1)} cm` : '—';
    $('#size-label').textContent = '像點高度';
    $('#empty-projection').hidden = true;
    $('#image-state').textContent = image.real && sharp ? '清晰光點' : '散開的光斑 · 尚未會聚於屏上';
    $('#observation').textContent = !Number.isFinite(image.distance) ? 'S 在 F 上：出射光平行，不會聚成有限距離的像點。' : image.real ? `S′ 在透鏡另一側${Math.abs(image.distance) < 2 * state.focal - .01 ? ' F 與 2F 之間' : Math.abs(image.distance - 2 * state.focal) < .01 ? ' 2F 上' : ' 2F 外'}。移動屏，找到最小光點。` : '光線向外發散；虛線反向延長交於同側的 S′。虛像點不能接在屏上。';
    if (image.real && image.distance > 9.2) $('#observation').textContent = `實像點在平台外（像距 ${(image.distance * 10).toFixed(1)} cm），目前屏移不到；可縮短焦距或移遠光源。`;
    if (!image.real && Number.isFinite(image.distance) && Math.abs(image.distance) >= 12) $('#observation').textContent = '虛像點在同側、超出顯示範圍；將光源移得更靠近透鏡可看見 S′。';
    renderCard();
  } else $('#size-label').textContent = '大小';
  narrator.last = $('#observation').textContent!;
}

function renderCard(): void {
  const f = signedFocal(state.kind, state.focal), image = lensImage(state.object, f);
  const finite = Number.isFinite(image.distance), shown = finite && Math.abs(image.distance) <= 18;
  const span = Math.max(state.object, state.focal * 2, state.screen, shown ? Math.abs(image.distance) : 0) + 1;
  const k = 170 / span, X = (x: number) => 200 + x * k, Y = (y: number) => 88 - y * k;
  const h = .8, source = `${X(state.object)},${Y(h)}`;
  const rays = [0, h].map((y, i) => {
    const end = y + ((y - h) / state.object - y / f) * span;
    return `<polyline points="${source} 200,${Y(y)} ${X(-span)},${Y(end)}" stroke="${i ? '#ffca7c' : '#7be9ed'}" fill="none"/>${!image.real && shown ? `<line x1="200" y1="${Y(y)}" x2="${X(-image.distance)}" y2="${Y(h * image.magnification)}" stroke="#e8a5ef" stroke-dasharray="4 3"/>` : ''}`;
  }).join('');
  const ticks = [-2, -1, 1, 2].map(n => `<path d="M${X(n * state.focal)} 84v8" stroke="#9ab6c8"/><text x="${X(n * state.focal)}" y="110">${Math.abs(n) === 1 ? 'F' : '2F'}</text>`).join('');
  $('#card-diagram').innerHTML = `<svg viewBox="0 0 400 170" role="img" aria-label="點光源、透鏡與像點的光路圖"><path d="M10 88H390" stroke="#8095a3" stroke-dasharray="3 4"/>${ticks}<path d="${state.kind === 'convex' ? 'M200 40Q179 88 200 136Q221 88 200 40' : 'M192 40H208Q197 88 208 136H192Q203 88 192 40'}" fill="#75cdda33" stroke="#a7e2e6"/>${rays}<circle cx="${X(state.object)}" cy="${Y(h)}" r="4" fill="#ffda90"/><text x="${X(state.object)}" y="${Y(h)-12}">S</text>${shown ? `<circle cx="${X(-image.distance)}" cy="${Y(h * image.magnification)}" r="4" fill="${image.real ? '#9af5ee' : '#efb9fa'}"/><text x="${X(-image.distance)}" y="${Y(h * image.magnification)+20}">S′</text>` : ''}</svg>`;
  $('#card-result').textContent = $('#observation').textContent;
  $('#card-values').textContent = `f = ${(f * 10).toFixed(1)} cm　u = ${(state.object * 10).toFixed(1)} cm　v = ${finite ? (image.distance * 10).toFixed(1) + ' cm' : '∞'}`;
}

$<HTMLInputElement>('#focal').addEventListener('input', (event) => { state.focal = Number((event.target as HTMLInputElement).value) / 10; schedule(); });
$<HTMLInputElement>('#angle').addEventListener('input', (event) => { state.angle = Number((event.target as HTMLInputElement).value); schedule(); });
document.addEventListener('click', (event) => {
  const button = (event.target as Element).closest<HTMLButtonElement>('button'); if (!button) return;
  if (button.dataset.activity) {
    saved.set(activity(), { ...state });
    const target = button.dataset.activity;
    Object.assign(state, saved.get(target) ?? { ...defaults, mode: target === 'prism' ? 'prism' : 'lens', source: target === 'point' ? 'point' : 'rocket', exploded: target !== 'point' });
    update(); narrator.say(narrator.last);
  }
  if (button.dataset.kind) { state.kind = button.dataset.kind as LensKind; update(); narrator.say(narrator.last); }
  if (button.hasAttribute('data-info')) { $('#explanation-card').hidden = !$('#explanation-card').hidden; button.setAttribute('aria-expanded', String(!$('#explanation-card').hidden)); }
  if (button.hasAttribute('data-card-close')) { $('#explanation-card').hidden = true; $('[data-info]').setAttribute('aria-expanded', 'false'); }
  if (button.dataset.cardZoom) { cardScale = Math.min(1.4, Math.max(.85, cardScale + Number(button.dataset.cardZoom))); $('#explanation-card').style.setProperty('--card-scale', String(cardScale)); $('#card-zoom-value').textContent = `${Math.round(cardScale * 100)}%`; }
  if (button.dataset.position) {
    const position = button.dataset.position;
    state.object = position === 'outer' ? (2 * state.focal + 9) / 2 : position === 'between' ? 1.5 * state.focal : position === 'inner' ? .5 * state.focal : Number(position) * state.focal;
    const image = lensImage(state.object, signedFocal(state.kind, state.focal));
    if (image.real && image.distance >= 2 && image.distance <= 9.2) state.screen = image.distance;
    update(); narrator.say(narrator.last);
  }
  if (button.dataset.aperture) { state.aperture = Number(button.dataset.aperture); update(); }
  if (button.dataset.angle) { state.angle = Number(button.dataset.angle); update(); }
  if (button.dataset.move) { const [key, delta] = button.dataset.move.split(':'); const target = key as 'object' | 'screen'; state[target] = Math.max(target === 'object' ? 1 : 2, Math.min(target === 'object' ? 9 : 9.2, state[target] + Number(delta))); update(); }
  if (button.hasAttribute('data-align')) { const image = lensImage(state.object, signedFocal(state.kind, state.focal)); if (image.real && image.distance >= 2 && image.distance <= 9.2) { state.screen = image.distance; update(); } }
  if (button.hasAttribute('data-explode')) { state.exploded = !state.exploded; update(); }
  if (button.hasAttribute('data-rays')) { state.rays = !state.rays; update(); }
  if (button.hasAttribute('data-view')) { state.view = state.view === 'side' ? 'perspective' : 'side'; update(); }
  if (button.hasAttribute('data-reset')) { const { mode, source } = state; Object.assign(state, defaults, { mode, source, exploded: source !== 'point' }); stage?.setView('perspective'); update(); }
  if (button.hasAttribute('data-voice')) { narrator.enabled = !narrator.enabled; if (narrator.enabled) narrator.replay(); else narrator.stop(); update(); button.setAttribute('aria-label', narrator.enabled ? '關閉語音' : '開啟語音'); }
  if (button.hasAttribute('data-replay')) narrator.replay();
  if (button.hasAttribute('data-quiz')) openQuiz();
  if (button.dataset.answer) { const correct = button.dataset.answer === 'correct'; $('#quiz-feedback').textContent = correct ? '答對了！回到實驗台，再試試不同的位置。' : '再看一次光路，試試另一張圖。'; narrator.say($('#quiz-feedback').textContent!); }
});

function openQuiz(): void {
  if (state.mode === 'lens' && state.source === 'point') {
    const real = lensImage(state.object, signedFocal(state.kind, state.focal)).real;
    $('#quiz-title').textContent = '目前的 S′ 能用接收屏接到嗎？';
    $('#quiz-options').innerHTML = `<button data-answer="${real ? 'correct' : 'wrong'}" aria-label="可接到清晰光點"><svg viewBox="0 0 120 120"><rect x="10" y="10" width="100" height="100" rx="10" fill="#0d2633"/><circle cx="60" cy="60" r="6" fill="#fff0b3"/></svg>可接到光點</button><button data-answer="${real ? 'wrong' : 'correct'}" aria-label="不能接到清晰光點"><svg viewBox="0 0 120 120"><rect x="10" y="10" width="100" height="100" rx="10" fill="#0d2633"/><circle cx="60" cy="60" r="34" fill="#ffcf7930"/></svg>無法接到光點</button>`;
    $('#quiz-feedback').textContent = ''; $<HTMLDialogElement>('#quiz').showModal(); narrator.say($('#quiz-title').textContent!); return;
  }
  const lens = state.mode === 'lens';
  const virtual = state.kind === 'concave' || state.object < state.focal;
  $('#quiz-title').textContent = lens ? virtual ? '虛像的火箭，朝哪裡？' : '凸透鏡在屏上成清楚實像時，火箭朝哪裡？' : '白光通過三稜鏡後，你看到了？';
  const rocket = (down: boolean) => `<svg viewBox="0 0 120 140" aria-hidden="true"><g transform="${down ? 'translate(120 140) rotate(180)' : ''}"><path d="M60 15Q85 37 78 100H42Q35 37 60 15" fill="#e8e2cc"/><path d="M60 15Q72 26 77 45H43Q48 26 60 15M42 76L26 110L43 103M78 76L94 110L77 103" fill="#ed8e5a"/><circle cx="60" cy="64" r="12" fill="#69cde6"/><path d="M48 105L60 132L72 105" fill="#ffd889"/></g></svg>`;
  $('#quiz-options').innerHTML = lens ? `<button data-answer="${virtual ? 'wrong' : 'correct'}" aria-label="倒立的火箭">${rocket(true)}</button><button data-answer="${virtual ? 'correct' : 'wrong'}" aria-label="正立的火箭">${rocket(false)}</button>` : '<button data-answer="wrong" aria-label="只有白光"><div class="white-beam"></div></button><button data-answer="correct" aria-label="多種顏色的光"><div class="rainbow-beam"></div></button>';
  $('#quiz-feedback').textContent = ''; $<HTMLDialogElement>('#quiz').showModal(); narrator.say($('#quiz-title').textContent!);
}
document.addEventListener('visibilitychange', () => { if (document.hidden) narrator.stop(); });
window.addEventListener('pagehide', () => { cancelAnimationFrame(frame); narrator.stop(); stage?.dispose(); });
update();
