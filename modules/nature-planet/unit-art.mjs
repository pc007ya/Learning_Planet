// Place beside nature-planet/launch.mjs, copy web assets to images/science-unit-art/.
const available = new Set(["s-kh-g1-t1-u01", "s-kh-g1-t1-u02", "s-kh-g1-t1-u03", "s-kh-g1-t1-u04", "s-kh-g1-t1-u05", "s-kh-g1-t1-u06", "s-kh-g1-t2-u01", "s-kh-g1-t2-u02", "s-kh-g1-t2-u03", "s-kh-g1-t2-u04", "s-kh-g1-t2-u05", "s-kh-g1-t2-u06", "s-kh-g2-t1-u01", "s-kh-g2-t1-u02", "s-kh-g2-t1-u03", "s-kh-g2-t1-u04", "s-kh-g2-t1-u05", "s-kh-g2-t1-u06", "s-kh-g2-t2-u01", "s-kh-g2-t2-u02", "s-kh-g2-t2-u03", "s-kh-g2-t2-u04", "s-kh-g2-t2-u05", "s-kh-g2-t2-u06", "s-na-g1-t1-u01", "s-na-g1-t1-u02", "s-na-g1-t1-u03", "s-na-g1-t1-u04", "s-na-g1-t1-u05", "s-na-g1-t1-u06", "s-na-g1-t2-u01", "s-na-g1-t2-u02", "s-na-g1-t2-u03", "s-na-g1-t2-u04", "s-na-g1-t2-u05", "s-na-g1-t2-u06", "s-na-g2-t1-u01", "s-na-g2-t1-u02", "s-na-g2-t1-u03", "s-na-g2-t1-u04", "s-na-g2-t1-u05", "s-na-g2-t1-u06", "s-na-g2-t2-u01", "s-na-g2-t2-u02", "s-na-g2-t2-u03", "s-na-g2-t2-u04", "s-na-g2-t2-u05", "s-na-g2-t2-u06", "s-kh-g3-t1-u01", "s-kh-g3-t1-u02", "s-kh-g3-t1-u03", "s-kh-g3-t1-u04", "s-kh-g3-t2-u01", "s-kh-g3-t2-u02", "s-kh-g3-t2-u03", "s-kh-g3-t2-u04", "s-kh-g4-t1-u01", "s-kh-g4-t1-u02", "s-kh-g4-t1-u03", "s-kh-g4-t1-u04", "s-kh-g4-t2-u01", "s-kh-g4-t2-u02", "s-kh-g4-t2-u03", "s-kh-g4-t2-u04", "s-kh-g5-t1-u01", "s-kh-g5-t1-u02", "s-kh-g5-t1-u03", "s-kh-g5-t1-u04", "s-kh-g5-t2-u01", "s-kh-g5-t2-u02", "s-kh-g5-t2-u03", "s-kh-g5-t2-u04", "s-kh-g6-t1-u01", "s-kh-g6-t1-u02", "s-kh-g6-t1-u03", "s-kh-g6-t1-u04", "s-kh-g6-t2-u01", "s-kh-g6-t2-u02", "s-kh-g6-t2-u03", "s-na-g3-t1-u01", "s-na-g3-t1-u02", "s-na-g3-t1-u03", "s-na-g3-t1-u04", "s-na-g3-t2-u01", "s-na-g3-t2-u02", "s-na-g3-t2-u03", "s-na-g3-t2-u04", "s-na-g4-t1-u01", "s-na-g4-t1-u02", "s-na-g4-t1-u03", "s-na-g4-t1-u04", "s-na-g4-t2-u01", "s-na-g4-t2-u02", "s-na-g4-t2-u03", "s-na-g4-t2-u04", "s-na-g5-t1-u01", "s-na-g5-t1-u02", "s-na-g5-t1-u03", "s-na-g5-t1-u04", "s-na-g5-t2-u01", "s-na-g5-t2-u02", "s-na-g5-t2-u03", "s-na-g5-t2-u04", "s-na-g6-t1-u01", "s-na-g6-t1-u02", "s-na-g6-t1-u03", "s-na-g6-t1-u04", "s-na-g6-t2-u01", "s-na-g6-t2-u02", "s-na-g6-t2-u03"]);
export function unitArtURL(id) {
 return available.has(id) ? new URL(`../../images/science-unit-art/${id}.webp`, import.meta.url).href : null;
}
// Preserve the existing fallback. Swap only after load; ignore stale async responses.
export function createUnitArtRenderer(cover, {urlFor=unitArtURL, imageFactory=()=>cover.ownerDocument.createElement('img')}={}) {
 const fallback=cover.innerHTML;
 let active=Symbol(), lastId;
 return function render(unit) {
  const id=unit?.id;
  if(id===lastId) return;
  lastId=id; const ticket=active=Symbol();
  cover.innerHTML=fallback;
  const url=urlFor(id); if(!url) return;
  const img=imageFactory(); img.alt=unit.title||''; img.decoding='async'; img.draggable=false;
  img.style.cssText='width:100%;height:100%;object-fit:contain;display:block';
  img.onload=()=>{if(active===ticket)cover.replaceChildren(img);};
  img.onerror=()=>{}; // leave the existing fallback visible, no broken-image marker
  img.src=url;
 };
}
