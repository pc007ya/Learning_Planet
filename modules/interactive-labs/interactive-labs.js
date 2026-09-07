const c = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new WeakSet();
function a() {
  for (const [e, t] of c) e.isConnected || (t.destroy(), c.delete(e));
  document.querySelectorAll("[data-interactive-lab]").forEach((e) => {
    if (c.has(e) || r.has(e)) return;
    const t = e.dataset.interactiveLab;
    if (!["buoyancy", "clock", "car", "cube"].includes(t || "")) return;
    r.add(e), (t === "cube" ? import("./cube-lab-y8-zEga7.mjs").then(({ CubeLab: n }) => () => new n(e)) : t === "buoyancy" ? import("./buoyancy-play-DchAEolo.mjs").then(({ BuoyancyPlay: n }) => () => new n(e)) : import("./lab-DGcVPCL1.mjs").then(({ InteractiveLab: n }) => () => new n(e, t))).then((n) => {
      e.isConnected && c.set(e, n()), r.delete(e);
    }).catch((n) => {
      console.error("Interactive lab failed", n), e.textContent = "實驗載入失敗，請返回後重試。", r.delete(e);
    });
  });
}
new MutationObserver(a).observe(document.documentElement, { childList: !0, subtree: !0 });
a();
