import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import postcss from 'postcss';
for(const name of ['math-mission-map','nature-planet']) {
 test(name+': 3D input surface is hit-testable but label overlay stays transparent',()=>{
  const root=postcss.parse(readFileSync(new URL('../modules/'+name+'/style.css',import.meta.url),'utf8'));
  const values=suffix=>{const result={};root.walkRules(rule=>{if(rule.selectors.some(selector=>selector.endsWith(suffix)))rule.walkDecls(decl=>result[decl.prop]=decl.value)});return result};
  assert.equal(values('.math-planet-canvas')['pointer-events'],'auto');
  assert.equal(values('.math-planet-canvas')['touch-action'],'none');
  assert.equal(values('.math-planet-labels')['pointer-events'],'none');
  assert.equal(values('.math-planet-landmark')['pointer-events'],'auto');
  assert.equal(values('.math-planet-badge')['pointer-events'],'none');
  assert.equal(values('.math-planet-yuyu')['pointer-events'],'none');
 });
}
test('math touch walking controls do not stop child pointer handlers during capture',()=>{
 const source=readFileSync(new URL('../modules/math-mission-map/planet-art-v2-view.mjs',import.meta.url),'utf8');
 assert.ok(source.includes("onPointerDown:event=>event.stopPropagation()"));
 assert.ok(!source.includes('onPointerDownCapture:event=>event.stopPropagation()'));
 assert.ok(source.includes('setMovement'));
});
test('upper grade stage is keyboard focusable and controls wrap on narrow screens',()=>{
 const view=readFileSync(new URL('../modules/math-mission-map/view.mjs',import.meta.url),'utf8');
 assert.match(view,/className: "math-mission-stage", ref: stage, tabIndex: 0/);
 const css=postcss.parse(readFileSync(new URL('../modules/math-mission-map/style.css',import.meta.url),'utf8'));
 let wrap=false;css.walkRules('.math-mission-orbit-controls',r=>r.walkDecls('flex-wrap',d=>{if(d.value==='wrap')wrap=true}));assert.ok(wrap);
});
test('nature keeps optional map tools collapsed, away from the walking pad',()=>{
 const source=readFileSync(new URL('../modules/nature-planet/launch.mjs',import.meta.url),'utf8');
 assert.ok(source.includes('controls.append(zoomIn,zoomOut,more)'));
 assert.ok(source.includes('morePanel.append(fly,returnShip,cancelShip)'));
 const css=readFileSync(new URL('../modules/nature-planet/nature.css',import.meta.url),'utf8');
 assert.ok(css.includes('.nature-control-more:not([open])>.nature-control-menu{display:none}'));
 assert.ok(css.includes('max-width:142px!important'));
});
