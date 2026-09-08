const c = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new WeakSet(), d = /* @__PURE__ */ new WeakSet();
function r() {
  for (const [e, t] of c) e.isConnected || (t.destroy(), c.delete(e));
  document.querySelectorAll("[data-interactive-lab]").forEach((e) => {
    if (c.has(e) || d.has(e) || i.has(e)) return;
    const t = e.dataset.interactiveLab;
    if (!["buoyancy", "clock", "car", "cube", "mini4wd"].includes(t || "")) return;
    d.add(e), (t === "mini4wd" ? import("./mini4wd-lab-DKXwZtxJ.mjs").then(({ Mini4wdLab: n }) => () => new n(e)) : t === "cube" ? import("./cube-lab-CGCLP3Aj.mjs").then(({ CubeLab: n }) => () => new n(e)) : t === "buoyancy" ? import("./buoyancy-play-DchAEolo.mjs").then(({ BuoyancyPlay: n }) => () => new n(e)) : import("./lab-BrfbPt8e.mjs").then(({ InteractiveLab: n }) => () => new n(e, t))).then((n) => {
      e.isConnected && c.set(e, n()), d.delete(e);
    }).catch((n) => {
      i.add(e), console.error("Interactive lab failed", n), e.textContent = "實驗載入失敗，請返回後重試。", d.delete(e);
    });
  });
}
new MutationObserver((e) => {
  e.some((t) => [...t.addedNodes, ...t.removedNodes].some((a) => a instanceof Element && (a.matches("[data-interactive-lab]") || a.querySelector("[data-interactive-lab]")))) && r();
}).observe(document.documentElement, { childList: !0, subtree: !0 });
r();
