const t = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new WeakSet();
function a() {
  for (const [e, n] of t) e.isConnected || (n.destroy(), t.delete(e));
  document.querySelectorAll("[data-interactive-lab]").forEach((e) => {
    if (t.has(e) || c.has(e)) return;
    const n = e.dataset.interactiveLab;
    ["buoyancy", "clock", "car"].includes(n || "") && (c.add(e), import("./lab-DRVjopSy.mjs").then(({ InteractiveLab: r }) => {
      e.isConnected && t.set(e, new r(e, n)), c.delete(e);
    }).catch((r) => {
      console.error("Interactive lab failed", r), e.textContent = "實驗載入失敗，請返回後重試。", c.delete(e);
    }));
  });
}
new MutationObserver(a).observe(document.documentElement, { childList: !0, subtree: !0 });
a();
