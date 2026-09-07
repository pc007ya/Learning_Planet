const c = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new WeakSet();
function r() {
  for (const [e, t] of c) e.isConnected || (t.destroy(), c.delete(e));
  document.querySelectorAll("[data-interactive-lab]").forEach((e) => {
    if (c.has(e) || i.has(e)) return;
    const t = e.dataset.interactiveLab;
    if (!["buoyancy", "clock", "car", "cube", "mini4wd"].includes(t || "")) return;
    i.add(e), (t === "mini4wd" ? import("./mini4wd-lab-LSOVXEa7.mjs").then(({ Mini4wdLab: n }) => () => new n(e)) : t === "cube" ? import("./cube-lab-Bqy0x-vD.mjs").then(({ CubeLab: n }) => () => new n(e)) : t === "buoyancy" ? import("./buoyancy-play-DchAEolo.mjs").then(({ BuoyancyPlay: n }) => () => new n(e)) : import("./lab-DldNdtny.mjs").then(({ InteractiveLab: n }) => () => new n(e, t))).then((n) => {
      e.isConnected && c.set(e, n()), i.delete(e);
    }).catch((n) => {
      console.error("Interactive lab failed", n), e.textContent = "實驗載入失敗，請返回後重試。", i.delete(e);
    });
  });
}
new MutationObserver(r).observe(document.documentElement, { childList: !0, subtree: !0 });
r();
