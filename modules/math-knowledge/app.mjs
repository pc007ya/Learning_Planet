import { curriculum, groups, nodes, edges, courseOrder, neighbors, practiceStatus } from './grade1.mjs';
import { visuals, routeVisuals, actionIcon } from './visuals.mjs';

const $ = id => document.getElementById(id);
const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const state = { selected: 'count10', group: 'all', extensions: false, list: false, connected: false, records: {}, courses: [], paused: matchMedia('(prefers-reduced-motion: reduce)').matches };
let scene;
const visibleNodes = () => nodes.filter(n => state.extensions || n.scope !== 'extension');
const groupFor = node => groups.find(g => g.id === node.group);
function send(type, extra = {}) { if (window.parent !== window) parent.postMessage({ type, ...extra }, location.origin); }
function earnedOrbit(practiced) {
  return practiced ? '<span class="earned-aura" aria-hidden="true"><span class="earned-ring"></span><span class="earned-ring earned-ring-tilt"></span><span class="earned-orbit"></span><span class="earned-orbit earned-orbit-small"></span></span>' : '';
}

function select(id) {
  if (!nodes.some(node => node.id === id && (state.extensions || node.scope !== 'extension'))) return;
  state.selected = id;
  if (state.group !== 'all' && nodes.find(n => n.id === id).group !== state.group) state.group = 'all';
  render();
}

function renderFilters() {
  const focused = document.activeElement?.closest('#filters [data-group]')?.dataset.group;
  $('filters').innerHTML = `<button data-group="all" aria-pressed="${state.group === 'all'}"><i>✦</i>全部</button>` + groups.map(g => `<button data-group="${g.id}" style="--route:${g.color}" aria-label="${g.label}" aria-pressed="${state.group === g.id}"><img src="${visuals[routeVisuals[g.id].topic].art}" alt="">${routeVisuals[g.id].label}</button>`).join('');
  if (focused) $('filters').querySelector(`[data-group="${focused}"]`)?.focus({ preventScroll: true });
}

function renderDetail() {
  const node = nodes.find(n => n.id === state.selected), group = groupFor(node), status = practiceStatus(node, state.records);
  const visual = visuals[node.id];
  const related = edges.filter(e => e.to === node.id).map(e => ({ edge: e, topic: nodes.find(n => n.id === e.from) })).filter(x => state.extensions || x.topic.scope === 'core');
  const next = edges.filter(e => e.from === node.id).map(e => nodes.find(n => n.id === e.to)).filter(n => state.extensions || n.scope === 'core');
  const courseRows = node.units.map(id => state.courses.find(course => course.id === id)).filter(Boolean);
  $('detail').style.setProperty('--route', group.color);
  $('detail').innerHTML = `
    <div class="detail-top"><span class="route-badge">${routeVisuals[group.id].label}</span><span class="status ${status.practiced ? 'done' : ''}" title="${status.practiced ? '已有單元練習紀錄，個別概念仍需實際評量' : '尚無練習紀錄'}">${status.practiced ? '✓ 玩過了' : '✧ 來探索'}${node.scope === 'extension' ? '・挑戰' : ''}</span></div>
    <div class="detail-picture"><img src="${visual.art}" alt="${escape(node.label)}"></div>
    <h2>${visual.caption}</h2><p class="goal">${visual.hint}</p>
    <div class="detail-scroll">
      ${courseRows.map(course => `<article class="course"><div class="course-title" title="${escape(course.title)}"><span class="course-code">${escape(course.code)}</span><b>${escape(course.title)}</b></div><div class="course-actions">${state.connected ? `${course.hasVideo ? `<button aria-label="看影片" data-action="video" data-unit="${course.id}">${actionIcon('video')}<span>看影片</span></button>` : ''}${course.hasTeaching ? `<button aria-label="動手做" data-action="teaching" data-unit="${course.id}">${actionIcon('teaching')}<span>動手做</span></button>` : ''}<button class="primary" aria-label="玩練習" data-action="practice" data-unit="${course.id}">${actionIcon('practice')}<span>玩練習</span></button>` : `<a class="standalone-action" href="index.html?planet=math&grade=1&knowledgeUnit=${encodeURIComponent(course.id)}">${actionIcon('practice')}<span>去玩練習 ↗</span></a>`}</div></article>`).join('') || '<p class="note">準備中…</p>'}
      ${related.length ? `<p class="section-label">先玩這些</p><div class="related picture-related">${related.map(({ topic, edge }) => `<button class="${practiceStatus(topic,state.records).practiced ? 'is-practiced' : 'is-unplayed'}" data-select="${topic.id}" aria-label="${escape(topic.label)}" title="${escape(edge.reason)}"><img src="${visuals[topic.id].art}" alt=""><span>${visuals[topic.id].caption}</span></button>`).join('')}</div>` : ''}
      ${next.length ? `<p class="section-label">下一站 →</p><div class="related picture-related">${next.map(n => `<button class="${practiceStatus(n,state.records).practiced ? 'is-practiced' : 'is-unplayed'}" data-select="${n.id}" aria-label="${escape(n.label)}"><img src="${visuals[n.id].art}" alt=""><span>${visuals[n.id].caption}</span></button>`).join('')}</div>` : ''}
    </div>
    <p class="record-note">✦ 跟著你的進度，繼續探索。</p>`;
}

function render() {
  document.body.classList.toggle('knowledge-motion-paused', state.paused);
  const focusedList = document.activeElement?.closest('#topic-list [data-select]')?.dataset.select;
  renderFilters();
  renderDetail();
  const adjacent = neighbors(state.selected);
  const topics = visibleNodes();
  const labelHTML = topics.map(node => {
    const group = groupFor(node), status = practiceStatus(node, state.records);
    const dim = state.group !== 'all' && state.group !== node.group;
    return `<button class="star-label ${dim ? 'is-dim' : ''} ${status.practiced ? 'is-practiced' : 'is-unplayed'} ${node.scope === 'extension' ? 'is-extension' : ''}" style="--route:${group.color}" data-select="${node.id}" aria-label="${escape(node.label)}，${status.practiced ? '已有練習紀錄' : '尚無練習紀錄'}" aria-pressed="${node.id === state.selected}"><span class="orb" aria-hidden="true">${earnedOrbit(status.practiced)}<img src="${visuals[node.id].art}" alt="" decoding="async"><i>${status.practiced ? '✓' : ''}</i></span><span class="name">${visuals[node.id].caption}</span></button>`;
  }).join('');
  // Retain keyboard focus while labels are re-created after a selection.
  const focused = document.activeElement?.closest('#labels [data-select]')?.dataset.select;
  $('labels').innerHTML = labelHTML;
  if (focused) $('labels').querySelector(`[data-select="${focused}"]`)?.focus({ preventScroll: true });
  $('topic-list').innerHTML = topics.filter(n => state.group === 'all' || n.group === state.group).map(node => {
    const g = groupFor(node), status = practiceStatus(node, state.records);
    return `<button class="${status.practiced ? 'is-practiced' : 'is-unplayed'}" data-select="${node.id}" aria-pressed="${node.id === state.selected}" style="--route:${g.color}"><span class="list-picture">${earnedOrbit(status.practiced)}<img src="${visuals[node.id].art}" alt=""></span>${visuals[node.id].caption}${status.practiced ? '<small>✓</small>' : ''}</button>`;
  }).join('');
  if (focusedList) $('topic-list').querySelector(`[data-select="${focusedList}"]`)?.focus({ preventScroll: true });
  $('extensions').textContent = state.extensions ? '− 收起延伸挑戰' : '＋ 看看延伸挑戰';
  $('extensions').setAttribute('aria-pressed', String(state.extensions));
  $('motion').textContent = state.paused ? '▶' : 'Ⅱ';
  $('motion').setAttribute('aria-label', state.paused ? '播放星空' : '暫停星空');
  $('motion').setAttribute('aria-pressed', String(state.paused));
  $('practiced-count').textContent = String(nodes.filter(n => n.scope === 'core' && practiceStatus(n, state.records).practiced).length);
  scene?.update({ topics, selected: state.selected, group: state.group, adjacent, records: state.records, paused: state.paused, extensions: state.extensions });
  scene?.projectLabels();
}

document.addEventListener('click', event => {
  const selected = event.target.closest('[data-select]');
  if (selected) return select(selected.dataset.select);
  const filter = event.target.closest('[data-group]');
  if (filter) {
    state.group = filter.dataset.group;
    const first = visibleNodes().find(n => n.group === state.group);
    if (first) state.selected = first.id;
    render();
    return;
  }
  const action = event.target.closest('[data-action]');
  if (action && state.connected) send('lp-knowledge-action', { action: action.dataset.action, unitId: action.dataset.unit });
});
$('back').onclick = () => { if (parent !== window) send('lp-knowledge-close'); else location.assign('index.html?planet=math&grade=1'); };
$('extensions').onclick = () => { state.extensions = !state.extensions; if (!state.extensions && nodes.find(n => n.id === state.selected).scope === 'extension') state.selected = 'count10'; scene?.reset(); render(); };
$('motion').onclick = () => { state.paused = !state.paused; render(); };
$('reset').onclick = () => scene?.reset();
$('zoom-in').onclick = () => scene?.zoomBy(1.18);
$('zoom-out').onclick = () => scene?.zoomBy(1 / 1.18);
function setView(list) {
  state.list = list;
  $('topic-list').hidden = !list;
  $('stage').hidden = list;
  $('map-view').setAttribute('aria-pressed', String(!list));
  $('list-view').setAttribute('aria-pressed', String(list));
  $('map-help').textContent = list ? '點圖案，選任務。' : '拖一拖・放大看・點圖案';
  scene?.setVisible(!list);
}
$('map-view').onclick = () => setView(false);
$('list-view').onclick = () => setView(true);
$('source').onclick = () => {
  const topic = nodes.find(n => n.id === state.selected);
  $('current-standard').innerHTML = `<h3>${topic.label}</h3><p>${topic.goal}</p><p>${topic.standards.join('・') || '自選延伸'}${topic.note ? '<br>' + topic.note : ''}</p><p>星點亮起僅表示已有相關單元練習紀錄，不能直接判定個別概念已掌握。</p>`;
  $('standards-dialog').showModal();
};
$('close-source').onclick = () => $('standards-dialog').close();
$('standards-content').innerHTML = `<div id="current-standard"></div><details><summary>完整小一課綱對照</summary><p>依教育部發布的數學領域課綱，小一學習內容 ${curriculum.pages} 建立。以下為摘要，完整條文請見<a href="${curriculum.source}" target="_blank" rel="noopener noreferrer">教育部課綱來源 ↗</a>。</p><dl>${Object.entries(curriculum.standards).map(([id, text]) => `<dt>${id}</dt><dd>${text}</dd>`).join('')}</dl><p>概念拆分與星軌連線為本站教學設計，並非教育部指定的先後順序。原課程編號維持不變；直式挑戰等延伸不計入核心課綱概念。課綱對照日期：${curriculum.checked}。</p></details>`;

window.addEventListener('message', event => {
  if (event.origin !== location.origin || event.source !== parent || parent === window || event.data?.type !== 'lp-knowledge-init') return;
  const input = event.data;
  if (!Array.isArray(input.courses)) return;
  state.courses = input.courses.filter(c => courseOrder.includes(c.id)).map(c => ({ id: c.id, code: String(c.code), title: String(c.title), hasVideo: !!c.hasVideo, hasTeaching: !!c.hasTeaching }));
  state.records = Object.fromEntries(courseOrder.map(id => [id, { practiced: input.records?.[id]?.practiced === true }]));
  state.connected = true;
  $('connection-status').textContent = '✓ 已連結你的進度';
  render();
});

// Standalone public viewing remains useful without exposing learner profiles.
try {
  const response = await fetch(new URL('./courses.json', import.meta.url));
  if (response.ok && !state.connected) state.courses = await response.json();
} catch { /* The host supplies the same registry when embedded. */ }
render();
send('lp-knowledge-ready');
try {
  const { createUniverse } = await import('./scene.mjs?v=20261101-progress-glow');
  scene = createUniverse($('stage'), $('labels'));
  document.body.dataset.threeRevision = scene.revision;
  $('render-status').hidden = true;
  render();
} catch (error) {
  console.warn('Knowledge map 3D view unavailable:', error);
  try {
    const { createUniverse } = await import('./scene-fallback.mjs?v=20261101-progress-glow');
    scene = createUniverse($('stage'), $('labels'));
    document.body.dataset.threeRevision = scene.revision;
    document.body.dataset.knowledgeRenderer = 'cpu';
    $('render-status').hidden = true;
    $('connection-status').dataset.renderer = 'compatible';
    render();
  } catch {
    setView(true);
    $('map-view').disabled = true;
    $('connection-status').textContent += '・已切換為可操作的概念清單。';
  }
}
window.addEventListener('pagehide', event => { if (!event.persisted) scene?.dispose(); });
