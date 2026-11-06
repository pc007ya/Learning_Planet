// CPU projection for devices without WebGL. Both views use Three.js r187 cameras.
import { REVISION, OrthographicCamera, Group, Vector3, MathUtils } from './vendor/three-r187/three.core.js';
import { edges } from './dataset.mjs?v=20261106-grades456';
import { constellationFrame } from './layout.mjs';

export function createUniverse(stage, labels) {
  const NS = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(NS, 'svg');
  svg.classList.add('cpu-universe');
  svg.setAttribute('aria-hidden', 'true');
  svg.innerHTML = `<defs><radialGradient id="nebula-blue"><stop stop-color="#657abd" stop-opacity=".33"/><stop offset=".38" stop-color="#3b478e" stop-opacity=".18"/><stop offset="1" stop-color="#172142" stop-opacity="0"/></radialGradient><radialGradient id="nebula-violet"><stop stop-color="#a078bf" stop-opacity=".32"/><stop offset=".42" stop-color="#654681" stop-opacity=".15"/><stop offset="1" stop-color="#382947" stop-opacity="0"/></radialGradient><radialGradient id="nebula-teal"><stop stop-color="#629db7" stop-opacity=".22"/><stop offset="1" stop-color="#174c5c" stop-opacity="0"/></radialGradient><radialGradient id="node-glow"><stop stop-color="#d5c0ff" stop-opacity=".55"/><stop offset=".2" stop-color="#b8a0eb" stop-opacity=".2"/><stop offset="1" stop-color="#b8a0eb" stop-opacity="0"/></radialGradient></defs><g class="cpu-clouds"><ellipse cx="27%" cy="28%" rx="40%" ry="40%" fill="url(#nebula-blue)"/><ellipse cx="59%" cy="56%" rx="43%" ry="50%" fill="url(#nebula-violet)"/><ellipse cx="79%" cy="72%" rx="40%" ry="36%" fill="url(#nebula-teal)"/></g><g class="cpu-stars"></g><g class="cpu-edges"></g><g class="cpu-nodes"></g>`;
  stage.prepend(svg);
  const camera = new OrthographicCamera(-60,60,45,-45,.1,500), world = new Group();
  let current = {topics:[],selected:'',group:'all',records:{},paused:false,extensions:false};
  let zoom=1,width=1,height=1,visible=true,seed=108;
  function random(){seed=(seed*1664525+1013904223)>>>0;return seed/4294967296;}
  const stars=svg.querySelector('.cpu-stars');
  for(let i=0;i<480;i++){
    const star=document.createElementNS(NS,'circle');
    star.setAttribute('cx',`${random()*100}%`);star.setAttribute('cy',`${random()*100}%`);
    star.setAttribute('r',String(.35+random()*.8));star.setAttribute('fill',random()>.65?'#c4b2e3':'#c2d4ec');star.setAttribute('opacity',String(.15+random()*.55));stars.append(star);
  }
  function project(position){const v=new Vector3(...position).applyMatrix4(world.matrixWorld).project(camera);return[(v.x*.5+.5)*width,(-v.y*.5+.5)*height];}
  function projectLabels(){
    if(!visible||!stage.clientWidth)return;
    width=stage.clientWidth;height=stage.clientHeight;labels.style.visibility="visible";
    if(!current.topics.length)return;
    const aspect=width/height,frame=constellationFrame(current.topics,width,height,zoom),viewHeight=frame.viewHeight;
    world.scale.y=frame.stretch;
    camera.left=-viewHeight*aspect/2;camera.right=-camera.left;camera.top=viewHeight/2;camera.bottom=-camera.top;
    camera.position.set(frame.centerX,frame.centerY,150);camera.lookAt(frame.centerX,frame.centerY,0);
    camera.updateProjectionMatrix();camera.updateMatrixWorld();world.updateMatrixWorld();svg.setAttribute('viewBox',`0 0 ${width} ${height}`);
    const positions=new Map(current.topics.map(n=>[n.id,project(n.position)]));
    for(const label of labels.querySelectorAll('[data-select]')){
      const p=positions.get(label.dataset.select);if(!p)continue;
      label.style.left=`${p[0]}px`;label.style.top=`${p[1]+9}px`;
      label.style.visibility=p[0]<-35||p[0]>width+35||p[1]<33||p[1]>height-71?'hidden':'visible';
    }
    svg.querySelector('.cpu-edges').innerHTML=edges.filter(e=>positions.has(e.from)&&positions.has(e.to)).map(e=>{
      const a=positions.get(e.from),b=positions.get(e.to),active=e.from===current.selected||e.to===current.selected;
      const bothPlayed=[e.from,e.to].every(id=>current.topics.find(n=>n.id===id).units.some(unit=>current.records[unit]?.practiced));
      const inGroup=current.group==='all'||current.topics.filter(n=>n.id===e.from||n.id===e.to).every(n=>n.group===current.group);
      const path=`M${a[0]} ${a[1]} Q${(a[0]+b[0])/2+4} ${(a[1]+b[1])/2-7} ${b[0]} ${b[1]}`;
      return `<path d="${path}" fill="none" stroke="${active?'#d1bbf5':bothPlayed?'#91dfc5':'#788496'}" stroke-width="${active?'1.2':bothPlayed?'1':'.7'}" opacity="${inGroup?active?'.65':bothPlayed?'.42':'.1':'.035'}" ${e.strength==='suggested'&&!active&&!bothPlayed?'stroke-dasharray="2 4"':''}/>${(active||bothPlayed&&inGroup)&&!current.paused?`<circle r="1.6" fill="${bothPlayed?'#b7f8d5':'#e3d4ff'}" opacity=".85"><animateMotion dur="${5+random()*5}s" repeatCount="indefinite" path="${path}"/></circle>`:''}`;
    }).join('');
    svg.querySelector('.cpu-nodes').innerHTML=current.topics.map(n=>{
      const[x,y]=positions.get(n.id),selected=n.id===current.selected,dim=current.group!=='all'&&n.group!==current.group;
      const practiced=n.units.some(id=>current.records[id]?.practiced),color=selected?'#ffe2a5':practiced?'#91edd6':'#788496';
      return `<g opacity="${dim?'.16':practiced||selected?'1':'.3'}"><circle cx="${x}" cy="${y}" r="${selected?24:17}" fill="url(#node-glow)"/><circle cx="${x}" cy="${y}" r="${selected?'3':'2'}" fill="${color}"/></g>`;
    }).join('');
  }
  function update(value){current=value;svg.classList.toggle('is-paused',value.paused);projectLabels();}
  function zoomBy(by){zoom=MathUtils.clamp(zoom*by,.7,2.8);projectLabels();}
  function reset(){zoom=1;world.rotation.set(0,0,0);projectLabels();}
  const pointers=new Map();let distance=0;
  function down(e){if(e.target.closest('button')||e.button&&e.button!==0)return;stage.setPointerCapture(e.pointerId);pointers.set(e.pointerId,[e.clientX,e.clientY]);distance=0;}
  function move(e){
    if(!pointers.has(e.pointerId))return;
    const p=pointers.get(e.pointerId);pointers.set(e.pointerId,[e.clientX,e.clientY]);
    if(pointers.size>1){const[a,b]=[...pointers.values()],next=Math.hypot(a[0]-b[0],a[1]-b[1]);if(distance)zoomBy(next/distance);distance=next;}
    else{world.rotation.y=MathUtils.clamp(world.rotation.y+(e.clientX-p[0])*.003,-.5,.5);world.rotation.x=MathUtils.clamp(world.rotation.x+(e.clientY-p[1])*.002,-.35,.35);projectLabels();}
  }
  function up(e){pointers.delete(e.pointerId);distance=0;}
  function wheel(e){e.preventDefault();zoomBy(Math.exp(-e.deltaY*.001));}
  function key(e){if(e.target!==stage)return;if(['+','=','-','Home','0'].includes(e.key)){e.preventDefault();if(['Home','0'].includes(e.key))reset();else zoomBy(e.key==='-'?1/1.12:1.12);}}
  const bindings=[['pointerdown',down],['pointermove',move],['pointerup',up],['pointercancel',up],['wheel',wheel,{passive:false}],['keydown',key]];
  bindings.forEach(args=>stage.addEventListener(...args));const observer=new ResizeObserver(projectLabels);observer.observe(stage);
  return{revision:REVISION,update,projectLabels,zoomBy,reset,setVisible(value){visible=value;if(value)projectLabels();},dispose(){observer.disconnect();bindings.forEach(args=>stage.removeEventListener(...args));svg.remove();}};
}
