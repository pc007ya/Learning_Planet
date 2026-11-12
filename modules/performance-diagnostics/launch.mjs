import {isPerformanceDiagnosticsEnabled, createTimingCollector, formatMilliseconds, formatBytes} from './timing.mjs';

const instances = new WeakMap();
const STYLE = `
#lp-performance-diagnostics { position:fixed; z-index:2147483000; right:8px; bottom:8px; width:min(680px,calc(100vw - 16px)); color:#fff; background:#10243af2; border:1px solid #a8d5fa; border-radius:12px; box-shadow:0 4px 24px #0008; font:14px/1.5 system-ui,sans-serif; text-align:left; padding:0; }
#lp-performance-diagnostics * { box-sizing:border-box; }
#lp-performance-diagnostics details:not([open]) { width:100%; }
#lp-performance-diagnostics summary { padding:10px 14px; cursor:pointer; min-height:44px; font-weight:bold; color:#fff; }
#lp-performance-diagnostics .lp-perf-body { padding:0 12px 12px; overflow:auto; max-height:min(65vh,580px); }
#lp-performance-diagnostics .lp-perf-actions { display:flex; flex-wrap:wrap; gap:6px; margin:8px 0; }
#lp-performance-diagnostics button { position:static; color:#fff; background:#294b6c; border:1px solid #aecbe4; border-radius:6px; padding:8px; min-height:44px; font:inherit; cursor:pointer; }
#lp-performance-diagnostics button:disabled { opacity:.5; cursor:default; }
#lp-performance-diagnostics :focus-visible { outline:3px solid #ffd35c; outline-offset:2px; }
#lp-performance-diagnostics p { color:#fff; margin:8px 0; font:inherit; }
#lp-performance-diagnostics textarea { display:block; width:100%; min-height:150px; color:#10243a; background:#fff; border:1px solid #acc6df; font:12px/1.4 monospace; }
#lp-performance-diagnostics table { border-collapse:collapse; width:100%; font:12px/1.4 system-ui,sans-serif; color:#fff; }
#lp-performance-diagnostics th,#lp-performance-diagnostics td { border-bottom:1px solid #6385a3; padding:5px; text-align:left; vertical-align:top; overflow-wrap:anywhere; }
#lp-performance-diagnostics .lp-perf-table { overflow:auto; max-height:230px; }
#lp-performance-diagnostics caption { text-align:left; padding:8px 0; }
`;

/** Strict opt-in. No DOM, storage, network, timers or performance changes when disabled. */
export function startPerformanceDiagnostics(options = {}) {
  const location = options.location ?? globalThis.location;
  if (!isPerformanceDiagnosticsEnabled(location)) return null;
  const document = options.document ?? globalThis.document;
  const performance = options.performance ?? globalThis.performance;
  if (!document?.body || !performance?.getEntriesByType || !performance?.now) return null;
  if (instances.has(document)) return instances.get(document);
  const Observer = Object.hasOwn(options, 'PerformanceObserver') ? options.PerformanceObserver : globalThis.PerformanceObserver;
  const MutationObserver = Object.hasOwn(options, 'MutationObserver') ? options.MutationObserver : globalThis.MutationObserver;
  const collector = createTimingCollector({performance, base: location.href, limit: options.limit});
  let resourceObserver = null, domObserver = null, disposed = false, observerMode = 'manual';
  const element = (tag, text) => {
    const node = document.createElement(tag);
    if (text !== undefined) node.textContent = text;
    return node;
  };
  const root = element('aside');
  root.id = 'lp-performance-diagnostics'; root.setAttribute('aria-label', '資源讀取時間檢查');
  const style = element('style', STYLE);
  style.dataset.lpPerformanceDiagnostics = 'true';
  const details = element('details'), summary = element('summary', '資源讀取檢查（手動展開）');
  const body = element('div'); body.className = 'lp-perf-body';
  const status = element('p'); status.setAttribute('role', 'status'); status.setAttribute('aria-live', 'polite');
  const navText = element('p'), phaseText = element('p'), countText = element('p');
  const notes = element('p', '真實瀏覽器 timing，非 GPU／首次可互動測量。0 B 可能是快取、本機或跨來源限制。先開始階段，再操作網站，完成後結束階段。重新讀取可觀察差異，不會清除快取。');
  const actions = element('div'); actions.className = 'lp-perf-actions';
  function button(label, action) {
    const node = element('button', label); node.type = 'button';
    node.addEventListener('click', event => { event.stopPropagation(); action(); });
    actions.append(node); return node;
  }
  button('更新測量', () => refresh('已更新測量'));
  const startButton = button('開始此階段', () => { drain(); collector.startStage(); refresh('已開始階段，請收合面板後操作網站'); });
  const endButton = button('結束此階段', () => { drain(); collector.endStage(); refresh('已結束階段'); });
  button('重設顯示', () => { drain(); collector.resetDisplay(); refresh('已清空面板，瀏覽器快取未改變'); });
  button('收合', () => { details.open = false; summary.focus(); });
  button('關閉檢查', () => dispose());
  const tableWrap = element('div'); tableWrap.className = 'lp-perf-table';
  const table = element('table'), caption = element('caption', '耗時最長的 30 筆資源；完整紀錄在下方 JSON。'), head = element('thead'), header = element('tr'), tbody = element('tbody');
  for (const label of ['資源（已移除查詢）', '觸發方式', '耗時', '傳輸量／判定']) header.append(element('th', label));
  for (const th of header.children) th.scope = 'col';
  head.append(header); table.append(caption, head, tbody); tableWrap.append(table);
  const jsonLabel = element('label', '測量 JSON（唯讀，可選取複製）'); jsonLabel.htmlFor = 'lp-performance-json';
  const json = element('textarea'); json.id = 'lp-performance-json'; json.readOnly = true; json.spellcheck = false;
  body.append(notes, actions, status, navText, phaseText, countText, tableWrap, jsonLabel, json);
  details.append(summary, body); root.append(details);

  function drain() {
    if (disposed) return;
    // takeRecords() captures entries even before another script clears the global list.
    if (resourceObserver?.takeRecords) collector.addEntries(resourceObserver.takeRecords());
    // Also recover entries predating the import; observer deduplication is internal.
    collector.addEntries(performance.getEntriesByType('resource'));
  }
  function refresh(message = '') {
    if (disposed) return null;
    drain();
    const result = collector.snapshot();
    result.observationMode = observerMode;
    json.value = JSON.stringify(result, null, 2);
    const nav = result.navigation;
    navText.textContent = nav
      ? `導覽 ${nav.type}：TTFB（自導覽開始）${formatMilliseconds(nav.ttfbFromNavigationStartMs)}；DOMContentLoaded ${formatMilliseconds(nav.domContentLoadedMs)}；load 完成 ${formatMilliseconds(nav.loadEventEndMs)}。`
      : '此瀏覽器未提供 Navigation Timing。';
    phaseText.textContent = result.phases.length
      ? result.phases.map(p => `${p.name}：${formatMilliseconds(p.elapsedMs)}（${p.complete ? '已結束' : '進行中'}，已完成資源 ${p.resources.count} 筆）`).join('；')
      : '尚未標記操作階段。';
    countText.textContent = `保留 ${result.summary.count} 筆／上限 ${result.retainedResourceLimit}；網路傳輸 ${result.summary.networkTransferObservedCount}；瀏覽器明示快取 ${result.summary.browserReportedCacheCount}；0 B 未能判定 ${result.summary.zeroTransferAmbiguousCount}；跨來源細節受限 ${result.summary.restrictedTimingCount}；已淘汰 ${result.droppedResourceCount}。${observerMode === 'manual' ? '此瀏覽器無持續觀察，需手動更新，早期或已清除紀錄可能缺漏。' : '持續收集已完成資源，畫面手動更新。'}`;
    tbody.replaceChildren();
    for (const resource of [...result.resources].sort((a, b) => (b.durationMs ?? -1) - (a.durationMs ?? -1)).slice(0, 30)) {
      const row = element('tr');
      for (const text of [resource.url, resource.initiatorType, formatMilliseconds(resource.durationMs), `${formatBytes(resource.transferBytes)} · ${resource.sourceLabel}${resource.timingAccess !== 'exposed' ? ' · 跨來源細節未提供' : ''}`]) row.append(element('td', text));
      tbody.append(row);
    }
    startButton.disabled = collector.stageActive; endButton.disabled = !collector.stageActive;
    if (message) status.textContent = message;
    return result;
  }
  // Keep this non-modal inspector reachable when the app opens/closes native dialogs.
  // It never opens a dialog, changes focus automatically, or touches app/history state.
  function placePanel() {
    if (disposed) return;
    const dialogs = document.querySelectorAll('dialog[open]');
    const host = dialogs[dialogs.length - 1] || document.body;
    if (host && root.parentNode !== host) host.append(root);
  }
  function dispose() {
    if (disposed) return;
    disposed = true; resourceObserver?.disconnect(); domObserver?.disconnect();
    root.remove(); style.remove(); instances.delete(document);
  }

  // Observe before reading the existing buffer, preserving late-loaded modules,
  // GLBs, scene JSON, question banks, audio and images without touching fetch().
  if (Observer) {
    try {
      resourceObserver = new Observer(list => { if (!disposed) collector.addEntries(list.getEntries()); });
      resourceObserver.observe({type: 'resource', buffered: true}); observerMode = 'buffered-observer';
    } catch {
      resourceObserver?.disconnect(); resourceObserver = null;
      try {
        resourceObserver = new Observer(list => { if (!disposed) collector.addEntries(list.getEntries()); });
        resourceObserver.observe({entryTypes: ['resource']}); observerMode = 'observer-with-initial-buffer';
      } catch { resourceObserver?.disconnect(); resourceObserver = null; }
    }
  }
  document.head?.append(style); placePanel();
  if (MutationObserver) {
    domObserver = new MutationObserver(placePanel);
    domObserver.observe(document.body, {subtree: true, childList: true, attributes: true, attributeFilter: ['open']});
  }
  details.addEventListener('toggle', () => { if (details.open) refresh(); });
  // Listener is only inside the panel, so its controls cannot bubble to app shortcuts.
  for (const type of ['click', 'keydown', 'keyup', 'pointerdown', 'pointerup']) root.addEventListener(type, event => event.stopPropagation());
  const api = Object.freeze({refresh, dispose, element: root});
  instances.set(document, api); refresh();
  return api;
}
