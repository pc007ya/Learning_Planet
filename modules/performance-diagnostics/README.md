# Opt-in resource timing inspector

This module measures browser-provided `PerformanceNavigationTiming` and
`PerformanceResourceTiming` on the actual page. It is not a benchmark result or a
GPU, first-interactive, FPS, decoded-image or WebGL-ready measurement.

## Integration

After `document.body` exists, conditionally import it. Do not add a static import
for ordinary visits. The entry repeats the exact opt-in check and returns `null`
without touching DOM or performance APIs unless one `lpPerf=1` is present.

```js
const flags = new URLSearchParams(location.search).getAll('lpPerf');
if (flags.length === 1 && flags[0] === '1') {
  import('./modules/performance-diagnostics/launch.mjs')
    .then(({startPerformanceDiagnostics}) => startPerformanceDiagnostics())
    .catch(error => console.warn('Performance inspector could not load', error));
}
```

`startPerformanceDiagnostics()` returns `{refresh, dispose, element}`. `refresh()`
updates visible DOM and the read-only JSON textarea, returning the same snapshot.
`dispose()` removes only this inspector and its observers. Repeated starts are
idempotent. There is no global API, new dependency, external CSS, network request,
telemetry, upload, clipboard write, persistence or authentication access.

The panel starts collapsed and never opens a modal or automatically focuses any
control. Its fixed-position element follows the last open native app dialog so
it remains accessible during course/3D acceptance tests, and returns to the body
after dismissal. Closing it removes observation. Reload with the opt-in query to
start a fresh page measurement. Route code must preserve the opt-in query during
the asynchronous import; it must not add it for ordinary users.

## Actual-page acceptance method

1. Open the published URL with `?lpPerf=1` (or append `&lpPerf=1` to other options).
   Record published version, URL, date, viewport, browser and the actions taken.
   The inspector itself also consumes a small amount of CPU and two module loads.
2. Wait for page load, expand **資源讀取檢查**, and use **更新測量**. Record navigation
   TTFB, DOMContentLoaded, load-event-end and observed transfer counts/bytes.
   Unfinished navigation milestones are `null`/`未提供`, not zero. `domInteractive`
   is the browser's document parsing milestone, not time to first interaction.
3. Use **開始此階段**, collapse the inspector, perform the target interaction (for
   example open nature, change grade, load a GLB/scene, enter a question bank),
   visibly verify the content is ready, then expand and use **結束此階段**.
   The manually marked elapsed duration includes human delay. Resource rows use
   their actual browser timings. A phase includes retained, completed resources
   that started inside the phase, even if they completed afterward.
4. Copy the visible read-only JSON with ordinary browser selection if a report is
   needed. The table shows the 30 slowest retained entries. JSON contains up to
   800 entries and 24 phases, per-resource fetch/request/response offsets, request
   first-byte and download duration, DNS/TCP/TLS where exposed, initiator, body
   sizes and transfer size. Zero/unknown timing stages are never presented as an
   unavailable cross-origin request taking zero time.
5. Repeat the same interaction and report it as a **repeat run**. If the app reuses
   in-memory assets, zero new entries means no new recorded request, not a zero-ms
   network request. Navigation `type=reload` does not imply a cold cache.

### Cold/warm evidence, not assumptions

- The inspector does **not** clear or disable caches, remove service workers,
  change request cache mode, reload the page, or alter global resource/mark buffers.
- Report `transferSize > 0` as **observed network transfer**, which may include
  conditional revalidation. It does not prove a completely cold browser/cache.
- Only `deliveryType=cache` is labeled **browser-reported cache**. `transferSize=0`
  stays **cache/local/cross-origin restricted, ambiguous**, even with a small
  duration. A service-worker observation is a separate flag, not proof of origin.
- A true clean-cache baseline needs an independently verified fresh browser
  profile or supported browser cache controls. Record those controls explicitly.
  Without that evidence, call the run **first observed** and its repeat **repeat**,
  never "cold"/"hot" merely because it was the first/second test.
- Cross-origin detail zeros can indicate missing `Timing-Allow-Origin`. The
  browser does not expose the response header through Resource Timing, so this
  inspector says **restricted or unavailable**, not that the header was inspected.
  Overall duration remains useful; protected detailed stages/body sizes are null.
- Resource durations overlap. Their sum is reported as a resource-duration sum,
  never as wall-clock page load. Background, cached, SW, iframe, failed and still
  pending requests can have incomplete/absent timing data.

## Privacy and completeness

All URL queries, fragments and credentials are removed before retention. Data and
blob URLs are not shown. Authentication endpoints are omitted. No account values,
headers, bodies, cookies, storage, DOM content or credentials are collected. The
inspector only renders allowlisted timing fields using text nodes and textarea
values, never URL-derived markup or clickable resource links.

A buffered `PerformanceObserver` is installed before reading the current browser
buffer. Deferred GLBs, scene JSON, lazy JS, questions, images and audio remain
captured even if another script later clears the global resource list. Existing
entries already evicted/cleared before this module starts cannot be reconstructed.
The fallback without an observer is explicitly manual and can miss such entries.
Collection is bounded locally, with deduplication and an eviction count; this
module does not increase or clear the browser's shared timing buffer. **重設顯示**
only changes this inspector's view, ignoring requests started before that reset.

## Automated checks

```sh
node --test tests/performance-diagnostics/*.check.mjs
```

These use real timing normalization with synthetic timing entries and a DOM
emulator. They verify opt-in/no-op, URL privacy, safe DOM, unavailable timings,
cache ambiguity, bounded/deduplicated storage, phase marks, dialog lifecycle,
observer fallback and cleanup. They are **not** actual-browser measurements,
WebGL acceptance or proof of a deployed version. Perform the published-page steps
above separately using the official browser/computer tools.
