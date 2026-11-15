import {createIslandWalk,ISLAND_WALK_SPEED,ISLAND_CHARACTER_SCALE,ISLAND_WALK_STRIDE} from './island-walk.mjs';
import {createYuyu} from './v11/planet-yuyu.mjs?v=20261115-walk-zoom-v1';
import {clampZoom,createZoomGesture} from '../planet-controls/zoom-gesture.mjs';
import * as THREE from "../math-knowledge/vendor/three-r187/three.module.js";

const PALETTES = [
  { land: 0x675ac8, band: 0x8ca8ff, light: 0xc9b6ff },
  { land: 0x217b87, band: 0x57c3ce, light: 0xa8ffec },
  { land: 0x9765aa, band: 0xea93d5, light: 0xffb8ea },
  { land: 0x6a69a6, band: 0xd9a969, light: 0xffdc9d },
];

export function createMissionScene(stage, points, { route, selected, onProject, onUnavailable, onPosition = () => {}, onArrive = () => {} }) {
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "low-power" });
  const canvas = renderer.domElement;
  canvas.setAttribute("aria-hidden", "true");
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.65));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  stage.querySelector(".math-mission-surface").append(canvas);

  const palette = PALETTES[route % PALETTES.length];
  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(-12, 12, 8, -8, .1, 100);
  const anchors = points.map(([x, y]) => new THREE.Vector3((x - .5) * 21.2, 1.28, (y - .49) * 23));
  const projected = new THREE.Vector3();
  const resources = new Set();
  const own = item => { resources.add(item); return item; };
  const solid = (color, options) => own(new THREE.MeshStandardMaterial({ color, roughness: .77, ...options }));
  const glow = (color, opacity = 1) => own(new THREE.MeshBasicMaterial({ color, transparent: opacity < 1, opacity }));
  const top = solid(palette.land);
  const edge = solid(palette.band);
  const stone = solid(0x2a245e, { flatShading: true });
  const darkStone = solid(0x1b194a, { flatShading: true });
  const crystal = solid(palette.light, { emissive: palette.band, emissiveIntensity: .25, flatShading: true });
  const pearl = glow(palette.light, .88);
  const selectionRing = glow(0xf8dd97);
  const deckGeometry = own(new THREE.CylinderGeometry(1.56, 1.66, .26, 8));
  const ledgeGeometry = own(new THREE.CylinderGeometry(1.66, 1.62, .15, 8));
  const rockGeometry = own(new THREE.CylinderGeometry(1.62, .63, .78, 8));
  const coreGeometry = own(new THREE.CylinderGeometry(.63, .06, .84, 8));
  const ringGeometry = own(new THREE.TorusGeometry(1.78, .029, 6, 40));
  const crystalGeometry = own(new THREE.OctahedronGeometry(.28));
  const dustGeometry = own(new THREE.IcosahedronGeometry(.085, 0));

  function mesh(parent, geometry, material, x, y, z) {
    const item = new THREE.Mesh(geometry, material);
    item.position.set(x, y, z);
    parent.add(item);
    return item;
  }

  scene.add(new THREE.HemisphereLight(0xe8dcff, 0x43386a, 2.15));
  const sun = new THREE.DirectionalLight(0xffe8cb, 2.15);
  sun.position.set(-5, 10, 6);
  scene.add(sun);
  const rim = new THREE.DirectionalLight(0x79bdff, .9);
  rim.position.set(8, 5, -6);
  scene.add(rim);

  const highlights = anchors.map((anchor, i) => {
    const island = new THREE.Group();
    island.position.set(anchor.x, 0, anchor.z);
    island.rotation.y = .18 + (i % 3) * .22;
    scene.add(island);
    mesh(island, coreGeometry, darkStone, 0, -1.2, 0);
    mesh(island, rockGeometry, stone, 0, -.39, 0);
    mesh(island, ledgeGeometry, edge, 0, .04, 0);
    mesh(island, deckGeometry, top, 0, .23, 0);
    const ring = mesh(island, ringGeometry, selectionRing, 0, .42, 0);
    ring.rotation.x = -Math.PI / 2;
    for (const [x, z, scale] of [[-.88, -.63, 1], [-1.14, -.27, .65], [.99, .51, .72]]) {
      const shard = mesh(island, crystalGeometry, crystal, x, .59, z);
      shard.scale.set(scale, scale * 1.65, scale);
      shard.rotation.z = x < 0 ? .2 : -.25;
    }
    return ring;
  });

  // Real, level bridge decks replace the implication that decorative arcs are walkable.
  const bridgeMaterial=solid(0xa69ccb), bridgeGeometry=(length)=>own(new THREE.BoxGeometry(1.8,.16,length));
  for(let i=1;i<anchors.length;i++){
    const a=anchors[i-1],b=anchors[i],length=Math.hypot(a.x-b.x,a.z-b.z);
    const deck=mesh(scene,bridgeGeometry(length),bridgeMaterial,(a.x+b.x)/2,.28,(a.z+b.z)/2);
    deck.rotation.y=Math.atan2(b.x-a.x,b.z-a.z); deck.name='walkable-island-bridge';
  }
  const navigation=createIslandWalk(anchors);
  const yuyu=createYuyu(THREE,{own,color:solid,mesh:(parent,geometry,material,pos=[0,0,0])=>mesh(parent,own(geometry),material,...pos)});
  yuyu.root.scale.setScalar(ISLAND_CHARACTER_SCALE); scene.add(yuyu.root);
  let position={x:anchors[0].x,z:anchors[0].z},path=[],destination=null,lastTime=0;
  const movement=new Set();
  yuyu.root.position.set(position.x,.34,position.z);
  function stop(){path=[];destination=null;movement.clear();lastTime=0;yuyu.animate(0,false);onPosition({...position,moving:false});schedule();}
  function moveTo(target){if(lost||disposed||document.hidden)return false;const found=navigation.path(position,target);if(!found)return false;path=found;destination=null;movement.clear();schedule();return true;}
  function walkTo(index){if(!anchors[index]||!moveTo(anchors[index]))return false;destination=index;return true;}
  function setMovement(key,pressed){if(!['up','down','left','right'].includes(key)||lost||disposed)return; if(pressed&&!document.hidden){path=[];destination=null;movement.add(key);schedule();}else {movement.delete(key);if(!movement.size){yuyu.animate(0,false);onPosition({...position,moving:false});}schedule();}}
  function advance(time){
    const dt=lastTime?Math.min(.04,(time-lastTime)/1000):0;lastTime=time;
    let dx=0,dz=0,remaining=Infinity;
    if(movement.size){const x=Number(movement.has('right'))-Number(movement.has('left')),z=Number(movement.has('down'))-Number(movement.has('up'));dx=x*Math.cos(angle)+z*Math.sin(angle);dz=-x*Math.sin(angle)+z*Math.cos(angle);}
    else if(path.length){dx=path[0].x-position.x;dz=path[0].z-position.z;remaining=Math.hypot(dx,dz);}
    const length=Math.hypot(dx,dz);let walking=false;
    if(length){const distance=Math.min(ISLAND_WALK_SPEED*dt,remaining),next={x:position.x+dx/length*distance,z:position.z+dz/length*distance};if(navigation.clear(position,next)){position=next;walking=distance>0;yuyu.root.position.set(position.x,.34,position.z);yuyu.body.rotation.y=Math.atan2(dx,dz);onPosition({...position,moving:walking});}else{path=[];destination=null;}}
    if(path.length&&Math.hypot(path[0].x-position.x,path[0].z-position.z)<.015){path.shift();if(!path.length&&destination!==null){const arrived=destination;destination=null;onArrive(arrived);}}
    yuyu.animate(time,walking,window.matchMedia?.('(prefers-reduced-motion: reduce)').matches,{stride:ISLAND_WALK_STRIDE});
    if(path.length||movement.size)schedule();else lastTime=0;
  }
  const routeMaterial = glow(palette.band, .57);
  for (let i = 1; i < anchors.length; i++) {
    const a = anchors[i - 1];
    const b = anchors[i];
    const start = new THREE.Vector3(a.x, .06, a.z);
    const end = new THREE.Vector3(b.x, .06, b.z);
    const middle = start.clone().lerp(end, .5);
    middle.y = -.38;
    const arc = new THREE.QuadraticBezierCurve3(start, middle, end);
    const line = own(new THREE.TubeGeometry(arc, 12, .047, 5, false));
    mesh(scene, line, routeMaterial, 0, 0, 0);
    for (const t of [.35, .5, .65]) {
      const p = arc.getPoint(t);
      mesh(scene, dustGeometry, pearl, p.x, p.y, p.z);
    }
  }

  for (let i = 0; i < 28; i++) {
    const x = Math.sin(i * 2.41) * (5 + i % 7);
    const z = Math.cos(i * 1.82) * (3 + i % 6);
    if (anchors.some(p => Math.hypot(p.x - x, p.z - z) < 2)) continue;
    const shard = mesh(scene, dustGeometry, i % 3 ? routeMaterial : pearl, x, -1.6 + (i % 5) * .41, z);
    shard.scale.setScalar(i % 6 === 0 ? 2.2 : .72);
  }

  let width = 0;
  let height = 0;
  let angle = 0;
  let drag;
  let lost = false;
  let frame = 0;
  const listeners = new AbortController();

  function render(time=0) {
    frame = 0;
    if (lost || document.hidden || !width || !height) return;
    advance(time);
    camera.position.set(Math.sin(angle) * 21, 20, Math.cos(angle) * 21);
    camera.lookAt(0, -.1, 0);
    camera.updateMatrixWorld();
    renderer.render(scene, camera);
    onProject(anchors.map(anchor => {
      projected.copy(anchor).project(camera);
      return [(projected.x + 1) / 2, (1 - projected.y) / 2];
    }));
  }

  function schedule() {
    if (!lost && !frame) frame = requestAnimationFrame(render);
  }

  function resize() {
    width = stage.clientWidth;
    height = stage.clientHeight;
    if (!width || !height) return;
    const aspect = width / height;
    const halfWidth = Math.max(11.65, 7.55 * aspect);
    const halfHeight = halfWidth / aspect;
    Object.assign(camera, { left: -halfWidth, right: halfWidth, top: halfHeight, bottom: -halfHeight });
    camera.updateProjectionMatrix();
    renderer.setSize(width, height, false);
    schedule();
  }

  let zoom=1,disposed=false;
  function setZoom(value){if(disposed||lost||!Number.isFinite(value))return false;zoom=clampZoom(value);camera.zoom=zoom;camera.updateProjectionMatrix();schedule();return true;}
  function zoomBy(factor){return Number.isFinite(factor)&&factor>0?setZoom(zoom*factor):false;}
  function rotate(delta) {
    angle = THREE.MathUtils.clamp(angle + delta, -.43, .43);
    schedule();
  }

  function select(index) {
    selected=index;
    highlights.forEach((ring, i) => { ring.visible = i === index; });
    schedule();
  }

  function listen(type, handler) {
    stage.addEventListener(type, handler, { signal: listeners.signal, passive:false });
  }

  const gestures=createZoomGesture({enabled:()=>!lost&&!disposed&&!document.hidden,zoomBy});
  const oldTouch=stage.style.touchAction;stage.style.touchAction='none';
  const ray=new THREE.Raycaster(),plane=new THREE.Plane(new THREE.Vector3(0,1,0),-.36);
  listen('wheel',e=>{if(!e.target.closest('button'))gestures.wheel(e)});
  listen('pointerdown',e=>{
    if(e.button!==0||e.target.closest('button'))return;
    stage.setPointerCapture?.(e.pointerId);
    if(gestures.down(e)){drag=null;return;}
    stage.focus?.({preventScroll:true});
    drag={id:e.pointerId,startX:e.clientX,startY:e.clientY,x:e.clientX,active:false};
  });
  listen('pointermove',e=>{
    if(gestures.move(e)){drag=null;return;}if(drag?.id!==e.pointerId)return;
    if(Math.hypot(e.clientX-drag.startX,e.clientY-drag.startY)>7)drag.active=true;
    if(drag.active){rotate((drag.x-e.clientX)*.0035);stage.classList.add('is-dragging');}drag.x=e.clientX;
  });
  function endDrag(e){const suppress=gestures.up(e);if(drag?.id===e.pointerId){if(!suppress&&!drag.active&&e.type==='pointerup'){const r=stage.getBoundingClientRect();ray.setFromCamera(new THREE.Vector2((e.clientX-r.left)/r.width*2-1,1-(e.clientY-r.top)/r.height*2),camera);const point=new THREE.Vector3();if(ray.ray.intersectPlane(plane,point))moveTo(point);}drag=null;}stage.classList.remove('is-dragging');}
  listen('pointerup',endDrag);listen('pointercancel',endDrag);listen('lostpointercapture',endDrag);
  const keys={ArrowUp:'up',ArrowDown:'down',ArrowLeft:'left',ArrowRight:'right',w:'up',s:'down',a:'left',d:'right',W:'up',S:'down',A:'left',D:'right'};
  listen('keydown',e=>{if(keys[e.key]&&!e.target.closest('button,input,select,textarea')){e.preventDefault();setMovement(keys[e.key],true);}});
  listen('keyup',e=>{if(keys[e.key])setMovement(keys[e.key],false)});
  listen('focusout',()=>stop());
  const suspend=()=>{stop();gestures.reset();drag=null;if(!document.hidden)schedule();};
  document.addEventListener('visibilitychange',suspend,{signal:listeners.signal});
  window.addEventListener('blur',suspend,{signal:listeners.signal});
  canvas.addEventListener("webglcontextlost", () => {
    lost = true;
    canvas.remove();
    onUnavailable();
  }, { signal: listeners.signal });

  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(stage);
  select(selected);
  resize();
  return {
    setZoom,zoomBy,walkTo,moveTo,setMovement,stop,getState:()=>({zoom,disposed,selected,anchors:anchors.map(a=>({x:a.x,z:a.z})),speed:ISLAND_WALK_SPEED,stride:ISLAND_WALK_STRIDE,position:{...position},moving:!!(path.length||movement.size)}),
    rotate,
    select,
    reset() { stop();angle = 0;setZoom(1);position={x:anchors[0].x,z:anchors[0].z};yuyu.root.position.set(position.x,.34,position.z);onPosition({...position,moving:false});schedule(); },
    dispose() {
      stop();gestures.reset();stage.style.touchAction=oldTouch;
      disposed=true;
      lost = true;
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      listeners.abort();
      stage.classList.remove("is-dragging");
      for (const item of resources) item.dispose();
      renderer.dispose();
      renderer.forceContextLoss();
      canvas.remove();
    },
  };
}
