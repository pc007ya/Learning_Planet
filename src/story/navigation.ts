/** Embedded readers return to the still-mounted home without touching auth. */
export function returnHome() {
  if (window.parent !== window) {
    window.parent.postMessage({type:'story-home'}, location.origin);
    return;
  }
  location.href = 'index.html';
}
