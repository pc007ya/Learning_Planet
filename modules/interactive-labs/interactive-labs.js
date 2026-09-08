const i = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new WeakSet(), c = /* @__PURE__ */ new WeakSet();
function r() {
  for (const [e, t] of i) e.isConnected || (t.destroy(), i.delete(e));
  document.querySelectorAll("[data-interactive-lab]").forEach((e) => {
    if (i.has(e) || c.has(e) || d.has(e)) return;
    const t = e.dataset.interactiveLab;
    if (!["buoyancy", "clock", "car", "cube", "mini4wd", "phonics"].includes(t || "")) return;
    c.add(e), (t === "phonics" ? import("./phonics-YJn7CnEK.mjs").then(({ PhonicsLab: n }) => () => new n(e)) : t === "mini4wd" ? import("./mini4wd-lab-D3du8ewU.mjs").then(({ Mini4wdLab: n }) => () => new n(e)) : t === "cube" ? import("./cube-lab-CGCLP3Aj.mjs").then(({ CubeLab: n }) => () => new n(e)) : t === "buoyancy" ? import("./buoyancy-play-DchAEolo.mjs").then(({ BuoyancyPlay: n }) => () => new n(e)) : import("./lab-BrfbPt8e.mjs").then(({ InteractiveLab: n }) => () => new n(e, t))).then((n) => {
      e.isConnected && i.set(e, n()), c.delete(e);
    }).catch((n) => {
      d.add(e), console.error("Interactive lab failed", n), e.textContent = "實驗載入失敗，請返回後重試。", c.delete(e);
    });
  });
}
new MutationObserver((e) => {
  e.some((t) => [...t.addedNodes, ...t.removedNodes].some((a) => a instanceof Element && (a.matches("[data-interactive-lab]") || a.querySelector("[data-interactive-lab]")))) && r();
}).observe(document.documentElement, { childList: !0, subtree: !0 });
r();
