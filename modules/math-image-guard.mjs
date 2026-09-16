// Keep each countable object visible if its illustration fails to load.
const symbols = { '兔子':'🐰', '小鳥':'🐦', '花朵':'🌼', '蘋果':'🍎', '星星':'⭐' };
export function fallbackImage(label) {
  const symbol = symbols[label] || String(label || '物件').replace(/[&<>"']/g, '');
  return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><rect width="64" height="64" rx="12" fill="#fffaf0"/><text x="32" y="46" text-anchor="middle" font-size="${symbols[label] ? 44 : 12}" fill="#111">${symbol}</text></svg>`);
}
document.addEventListener('error', event => {
  const img = event.target;
  if (!(img instanceof HTMLImageElement) || !img.classList.contains('math-object-image') || img.src.startsWith('data:')) return;
  img.src = fallbackImage(img.alt);
}, true);
