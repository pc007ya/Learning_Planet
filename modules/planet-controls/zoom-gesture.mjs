/** Multiplicative zoom; >1 is closer. Pure gesture state keeps pinch releases from tapping ground. */
export const MIN_ZOOM=.6, MAX_ZOOM=2;
export const clampZoom=value=>Number.isFinite(value)?Math.max(MIN_ZOOM,Math.min(MAX_ZOOM,value)):1;
export function createZoomGesture({enabled,zoomBy}) {
 const pointers=new Map();let distance=0,multi=false;
 const gap=()=>{const [a,b]=[...pointers.values()];return a&&b?Math.hypot(a.x-b.x,a.y-b.y):0;};
 return {
  down(e){if(e.pointerType!=='touch')return false;pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});if(pointers.size>1){multi=true;distance=gap();return true;}return multi;},
  move(e){if(!pointers.has(e.pointerId))return false;pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});if(!multi)return false;const next=gap();if(enabled()&&pointers.size===2&&distance>0&&next>0)zoomBy(next/distance);distance=next;return true;},
  up(e){const suppress=multi;pointers.delete(e.pointerId);distance=gap();if(!pointers.size)multi=false;return suppress;},
  wheel(e){if(!enabled())return false;const unit=e.deltaMode===1?16:e.deltaMode===2?400:1;const dy=Number(e.deltaY);if(!Number.isFinite(dy))return false;zoomBy(Math.exp(-Math.max(-1000,Math.min(1000,dy*unit))*.001));e.preventDefault?.();return true;},
  reset(){pointers.clear();distance=0;multi=false;}
 };
}
