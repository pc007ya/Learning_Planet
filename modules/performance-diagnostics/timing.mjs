// Pure, allowlisted snapshots. Never retain query strings, fragments or credentials.
export const MAX_RESOURCE_ENTRIES = 800;
export const MAX_STAGES = 24;

export function isPerformanceDiagnosticsEnabled(location) {
  try {
    const values = new URLSearchParams(location?.search || '').getAll('lpPerf');
    return values.length === 1 && values[0] === '1';
  } catch { return false; }
}

export function safeResourceURL(value, base) {
  try {
    const url = new URL(value, base);
    if (!['http:', 'https:'].includes(url.protocol)) return '[non-HTTP resource]';
    return url.origin + url.pathname;
  } catch { return '[unavailable URL]'; }
}

function isAuthenticationResource(value, base) {
  try {
    const url = new URL(value, base);
    return /(^|\.)(identitytoolkit|securetoken)\.googleapis\.com$/i.test(url.hostname)
      || /(?:^|\/)(?:auth|oauth2?|login|signin|accounts?|tokens?|session)(?:\/|$)/i.test(url.pathname);
  } catch { return false; }
}

const number = value => typeof value === 'number' && Number.isFinite(value) && value >= 0 ? value : null;
const round = value => value === null ? null : Math.round(value * 100) / 100;
const span = (start, end) => number(start) !== null && number(end) !== null && end >= start ? round(end - start) : null;
const completed = value => number(value) > 0 ? round(value) : null;

export function formatMilliseconds(value) {
  return number(value) === null ? '未提供' : `${value.toFixed(2)} ms`;
}

export function formatBytes(value) {
  if (number(value) === null) return '未提供';
  return value < 1024 ? `${value} B` : value < 1048576 ? `${(value / 1024).toFixed(1)} KiB` : `${(value / 1048576).toFixed(2)} MiB`;
}

export function classifyResource(entry, base) {
  let crossOrigin = false;
  try { crossOrigin = new URL(entry.name, base).origin !== new URL(base).origin; } catch { /* Unknown URL. */ }
  const restricted = crossOrigin && !(entry.requestStart > 0 || entry.responseStart > 0);
  let source = 'unknown';
  let sourceLabel = '來源未提供';
  if (entry.deliveryType === 'cache') {
    source = 'browser-reported-cache'; sourceLabel = '瀏覽器明示 cache';
  } else if (entry.transferSize > 0) {
    source = 'network-transfer-observed'; sourceLabel = '觀察到網路傳輸（可能含重新驗證）';
  } else if (entry.transferSize === 0) {
    source = 'zero-transfer-ambiguous'; sourceLabel = '0 B：快取／本機／跨來源限制，不能單獨判定';
  }
  return {
    crossOrigin,
    timingAccess: restricted ? 'cross-origin-restricted-or-unavailable' : 'exposed',
    timingAccessLabel: restricted ? '跨來源細節未提供：可能未授權 Timing-Allow-Origin；0 不代表零耗時' : '瀏覽器提供的時間欄位',
    source, sourceLabel,
    serviceWorkerObserved: entry.workerStart > 0,
  };
}

export function resourceSnapshot(entry, base) {
  if (!entry || entry.entryType !== 'resource' || isAuthenticationResource(entry.name, base)) return null;
  const classification = classifyResource(entry, base);
  const exposed = classification.timingAccess === 'exposed';
  return {
    url: safeResourceURL(entry.name, base),
    initiatorType: String(entry.initiatorType || 'other').slice(0, 32),
    startTimeMs: round(number(entry.startTime)),
    durationMs: round(number(entry.duration)),
    responseEndMs: round(number(entry.responseEnd)),
    transferBytes: number(entry.transferSize),
    encodedBodyBytes: exposed ? number(entry.encodedBodySize) : null,
    decodedBodyBytes: exposed ? number(entry.decodedBodySize) : null,
    ...classification,
    stages: {
      fetchStartMs: round(number(entry.fetchStart)),
      requestStartMs: exposed ? round(number(entry.requestStart)) : null,
      responseStartMs: exposed ? round(number(entry.responseStart)) : null,
      dnsMs: exposed ? span(entry.domainLookupStart, entry.domainLookupEnd) : null,
      connectMs: exposed ? span(entry.connectStart, entry.connectEnd) : null,
      tlsMs: exposed && entry.secureConnectionStart > 0 ? span(entry.secureConnectionStart, entry.connectEnd) : null,
      requestToFirstByteMs: exposed && entry.requestStart > 0 && entry.responseStart > 0 ? span(entry.requestStart, entry.responseStart) : null,
      responseDownloadMs: exposed && entry.responseStart > 0 ? span(entry.responseStart, entry.responseEnd) : null,
    },
  };
}

export function navigationSnapshot(entry, base) {
  if (!entry) return null;
  return {
    url: safeResourceURL(entry.name, base),
    type: ['navigate', 'reload', 'back_forward', 'prerender'].includes(entry.type) ? entry.type : 'unknown',
    // Navigation Timing values are offsets from timeOrigin, not time spent in JS/GPU.
    ttfbFromNavigationStartMs: completed(entry.responseStart),
    requestToFirstByteMs: entry.requestStart > 0 && entry.responseStart > 0 ? span(entry.requestStart, entry.responseStart) : null,
    domInteractiveMs: completed(entry.domInteractive),
    domContentLoadedMs: completed(entry.domContentLoadedEventEnd),
    loadEventEndMs: completed(entry.loadEventEnd),
    responseEndMs: completed(entry.responseEnd),
    transferBytes: number(entry.transferSize),
    encodedBodyBytes: number(entry.encodedBodySize),
    decodedBodyBytes: number(entry.decodedBodySize),
    ...classifyResource(entry, base),
  };
}

export function summarizeResources(resources) {
  const durations = resources.map(r => r.durationMs).filter(x => x !== null);
  return {
    count: resources.length,
    observedTransferBytes: resources.reduce((total, r) => total + (r.transferBytes ?? 0), 0),
    networkTransferObservedCount: resources.filter(r => r.source === 'network-transfer-observed').length,
    browserReportedCacheCount: resources.filter(r => r.source === 'browser-reported-cache').length,
    zeroTransferAmbiguousCount: resources.filter(r => r.source === 'zero-transfer-ambiguous').length,
    restrictedTimingCount: resources.filter(r => r.timingAccess !== 'exposed').length,
    longestResourceMs: durations.length ? Math.max(...durations) : null,
    // Parallel requests overlap: this sum must not be presented as page load time.
    summedResourceDurationsMs: round(durations.reduce((total, value) => total + value, 0)),
  };
}

export function createTimingCollector({performance, base, limit = MAX_RESOURCE_ENTRIES}) {
  limit = Math.min(MAX_RESOURCE_ENTRIES, Math.max(1, Math.floor(Number(limit) || MAX_RESOURCE_ENTRIES)));
  let resources = [], stageList = [], activeStage = null, stageCount = 0, dropped = 0, generation = 0;
  let floor = -1, eviction = null;
  const seen = new Set();
  const now = () => number(performance.now()) ?? 0;
  function addEntries(entries) {
    for (const entry of entries) {
      if (entry.entryType !== 'resource' || entry.startTime < floor) continue;
      const item = resourceSnapshot(entry, base);
      if (!item) continue;
      // Query variants that start at different times remain distinct requests.
      const key = `${item.url}\n${entry.startTime}\n${entry.duration}\n${item.initiatorType}`;
      if (eviction && (entry.startTime < eviction.start || (entry.startTime === eviction.start && key.localeCompare(eviction.key) <= 0))) continue;
      if (seen.has(key)) continue;
      seen.add(key); resources.push({...item, key, start: entry.startTime});
    }
    resources.sort((a, b) => a.start - b.start || a.key.localeCompare(b.key));
    if (resources.length > limit) {
      const old = resources.splice(0, resources.length - limit);
      dropped += old.length;
      // An ordered cutoff ensures refreshes cannot resurrect evicted entries,
      // including entries sharing the same timestamp on coarse browser clocks.
      eviction = {start: old.at(-1).start, key: old.at(-1).key};
      for (const entry of old) seen.delete(entry.key);
    }
  }
  function startStage() {
    if (activeStage) return false;
    activeStage = {name: `階段 ${++stageCount}`, startTimeMs: now(), endTimeMs: null};
    stageList.push(activeStage);
    if (stageList.length > MAX_STAGES) stageList.shift();
    return true;
  }
  function endStage() {
    if (!activeStage) return false;
    activeStage.endTimeMs = now(); activeStage = null; return true;
  }
  function resetDisplay() {
    // Deliberately no clearResourceTimings(), cache/storage/SW mutation or reload.
    floor = now(); resources = []; seen.clear(); stageList = []; activeStage = null;
    dropped = 0; eviction = null; generation++;
  }
  function snapshot() {
    const capturedAtMs = now();
    const rows = resources.map(({key, start, ...item}) => ({...item, stages: {...item.stages}}));
    const nav = performance.getEntriesByType?.('navigation')?.[0];
    return {
      schemaVersion: 1, page: safeResourceURL(base, base), capturedAtMs: round(capturedAtMs),
      displayGeneration: generation, retainedResourceLimit: limit, droppedResourceCount: dropped,
      authenticationResourcesExcluded: true,
      navigation: navigationSnapshot(nav, base),
      summary: summarizeResources(rows),
      phases: stageList.map(stage => {
        const end = stage.endTimeMs ?? capturedAtMs;
        const during = rows.filter(r => r.startTimeMs >= stage.startTimeMs && r.startTimeMs < end);
        return {...stage, elapsedMs: round(end - stage.startTimeMs), complete: stage.endTimeMs !== null,
          resources: summarizeResources(during),
          note: '只計入階段內開始且已完成、仍保留的資源；未完成請求未列入。人工時間不代表 GPU 就緒。'};
      }),
      resources: rows,
      limitations: [
        '僅顯示 Navigation/Resource Timing；不是首次可互動、GPU 就緒或幀率測量。',
        '跨來源沒有 Timing-Allow-Origin 時細節可能不可用；0 B 不等於已確認命中快取。',
        '網路傳輸可含重新驗證與服務工作者；不可單憑讀取時間宣稱冷／熱快取。',
        '資源耗時可互相重疊，其總和不是頁面載入時間。未完成或瀏覽器未記錄的請求不在清單內。',
        '重設只清空此面板；不清除瀏覽器快取、儲存空間、服務工作者或全域 timing 紀錄。',
        '所有 URL 查詢、片段及帳密均移除；認證資源不收錄。無遙測、上傳或持久儲存。',
      ],
    };
  }
  return {addEntries, startStage, endStage, resetDisplay, snapshot, get stageActive() { return !!activeStage; }};
}
