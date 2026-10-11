const c = /* @__PURE__ */ new Map();
async function a(e) {
  const t = c.get(e) || 0;
  try {
    return await (t ? import(e + (e.includes("?") ? "&" : "?") + "lp-retry=" + t) : import(e));
  } catch (r) {
    throw c.set(e, t + 1), r;
  }
}
async function i(e) {
  const t = e.dataset.interactiveLab;
  if (!["buoyancy", "clock", "car", "cube", "mini4wd", "phonics"].includes(t || "")) return null;
  const r = t === "phonics" ? await a(new URL("./phonics-BZvQ7JDX.mjs", import.meta.url).href).then(({ PhonicsLab: n }) => () => new n(e)) : t === "mini4wd" ? await a(new URL("./mini4wd-lab-D3du8ewU.mjs", import.meta.url).href).then(({ Mini4wdLab: n }) => () => new n(e)) : t === "cube" ? await a(new URL("./cube-lab-KizJy6uZ.mjs", import.meta.url).href).then(({ CubeLab: n }) => () => new n(e)) : t === "buoyancy" ? await a(new URL("./buoyancy-play-DchAEolo.mjs", import.meta.url).href).then(({ BuoyancyPlay: n }) => () => new n(e)) : await a(new URL("./lab-BrfbPt8e.mjs", import.meta.url).href).then(({ InteractiveLab: n }) => () => new n(e, t));
  return e.isConnected ? r() : null;
}
document.querySelector("x-dc,#dc-root") || document.querySelectorAll("[data-interactive-lab]").forEach((e) => {
  i(e).catch((t) => {
    console.error("Interactive lab failed", t), e.textContent = "實驗載入失敗，請返回後重試。";
  });
});
export {
  i as mountInteractiveLab
};
