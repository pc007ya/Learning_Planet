import * as T from 'three';
import {resultColorBands} from './fraction-colors.mjs';
export class FractionView {
  constructor(onSlice){
    this.element=document.createElement('div');this.element.className='fraction-canvas';
    this.renderer=new T.WebGLRenderer({antialias:true});this.renderer.setPixelRatio(Math.min(devicePixelRatio,2));this.element.append(this.renderer.domElement);
    this.scene=new T.Scene();this.scene.background=new T.Color('#f2e9d9');this.camera=new T.OrthographicCamera(-6,6,4,-4,.1,60);this.camera.position.set(0,10,8);this.camera.lookAt(0,0,0);
    this.scene.add(new T.HemisphereLight(0xffffff,0x887766,2));const light=new T.DirectionalLight(0xffffff,2);light.position.set(-4,8,4);this.scene.add(light);
    this.group=new T.Group();this.scene.add(this.group);this.materials=[0x31aabe,0xecb245,0x53b58e,0xe3dbcb,0x26394c].map(color=>new T.MeshStandardMaterial({color,roughness:.65}));this.ray=new T.Raycaster();this.abort=new AbortController();this.lines=[];
    this.renderer.domElement.setAttribute('aria-label','立體分數教具；也可使用上方數字欄位調整');
    this.renderer.domElement.addEventListener('pointerdown',e=>{if(!e.isPrimary||!this.editable)return;const r=this.renderer.domElement.getBoundingClientRect();this.ray.setFromCamera(new T.Vector2(2*(e.clientX-r.left)/r.width-1,1-2*(e.clientY-r.top)/r.height),this.camera);const hit=this.ray.intersectObjects(this.group.children).find(h=>h.object.userData.side!==undefined);if(!hit)return;const {side,x,d}=hit.object.userData;const f=this.shape==='bar'?(2-hit.point.z)/4:((Math.atan2(hit.point.x-x,hit.point.z)+Math.PI*2)%(Math.PI*2))/(Math.PI*2);onSlice(side,Math.min(d,Math.max(1,Math.ceil(f*d))));},{signal:this.abort.signal});
    this.fit=()=>{const w=this.element.clientWidth,h=this.element.clientHeight;if(!w||!h)return;const half=Math.max(3.4,(this.span||5.7)/(w/h));Object.assign(this.camera,{left:-half*w/h,right:half*w/h,top:half,bottom:-half});this.camera.updateProjectionMatrix();this.renderer.setSize(w,h,false);this.element.querySelectorAll('.fraction-symbols span').forEach(el=>{const p=new T.Vector3(Number(el.dataset.x),0,0).project(this.camera);el.style.left=(p.x+1)*50+'%';el.style.top=(1-p.y)*50+'%';});this.draw();};this.resize=new ResizeObserver(this.fit);this.resize.observe(this.element);
  }
  draw(){this.renderer.render(this.scene,this.camera);}
  clear(){cancelAnimationFrame(this.frame);this.group.children.forEach(o=>o.geometry.dispose());this.group.clear();this.lines=[];}
  segment(a,b,x,color,data){if(b-a<1e-9)return;const bar=this.shape==='bar',g=bar?new T.BoxGeometry(2.5,.24,(b-a)*4):new T.CylinderGeometry(1.65,1.65,.24,Math.max(3,Math.ceil((b-a)*120)),1,false,a*Math.PI*2,(b-a)*Math.PI*2);
    // BoxGeometry faces: +X, -X, +Y, -Y, +Z, -Z.
    // Only the framed top carries quantity color; thickness is neutral.
    const material=bar?Array.from({length:6},(_,face)=>this.materials[face===2?color:3]):this.materials[color];
    const m=new T.Mesh(g,material);m.position.set(x,0,bar?2-(a+b)*2:0);if(data)m.userData=data;this.group.add(m);}
  boundary(f,x,from=1,to=1){const bar=this.shape==='bar',m=new T.Mesh(new T.BoxGeometry(bar?2.5:.025,.014,bar?.025:1.65),this.materials[4]);if(bar)m.position.set(x,.13,2-f*4);else {const t=f*Math.PI*2;m.position.set(x+Math.sin(t)*.825,.13,Math.cos(t)*.825);m.rotation.y=t;}this.group.add(m);this.lines.push({m,from,to});}
  partitions(d,x,oldD=d){
    if(this.shape==='bar'){for(const z of [-2,2]){const m=new T.Mesh(new T.BoxGeometry(2.5,.016,.018),this.materials[4]);m.position.set(x,.13,z);this.group.add(m);}for(const dx of [-1.25,1.25]){const m=new T.Mesh(new T.BoxGeometry(.018,.016,4),this.materials[4]);m.position.set(x+dx,.13,0);this.group.add(m);}}
    else {const rim=new T.Mesh(new T.TorusGeometry(1.65,.012,4,120),this.materials[4]);rim.rotation.x=Math.PI/2;rim.position.set(x,.13,0);this.group.add(rim);}
    const values=new Set();for(let i=1;i<d;i++)values.add(i/d);for(let i=1;i<oldD;i++)values.add(i/oldD);if(this.shape!=='bar'&&(d>1||oldD>1))values.add(0);for(const f of values){const inD=d>1&&Math.abs(f*d-Math.round(f*d))<1e-8,inOld=oldD>1&&Math.abs(f*oldD-Math.round(f*oldD))<1e-8;this.boundary(f,x,inOld?1:0,inD?1:0);}}
  update(s,step,editable,shape='circle',replay=false){
    const key=JSON.stringify([s.a,s.d,s.b,s.e,s.op,shape]),animate=!matchMedia('(prefers-reduced-motion: reduce)').matches&&(replay||(key===this.key&&step===this.step+1))&&(step===1||step===3);
    const compare=s.op==='compare';this.clear();this.shape=shape;this.editable=editable;this.key=key;this.step=step;this.span=step<2||compare?5.7:8.2;this.element.querySelector('.fraction-symbols')?.remove();
    const operand=(n,d,x,c,side,oldD=d)=>{this.segment(0,n/d,x,c,{side,x,d});this.segment(n/d,1,x,3,{side,x,d});this.partitions(d,x,oldD);};
    if(step<2||compare){const common=step>0;operand(common?s.left:s.a,common?s.denominator:s.d,-2.2,0,0,animate&&step===1?s.d:common?s.denominator:s.d);operand(common?s.right:s.b,common?s.denominator:s.e,2.2,1,1,animate&&step===1?s.e:common?s.denominator:s.e);}
    else {operand(s.a,s.d,-6,0);operand(s.b,s.e,-2,1);const bands=resultColorBands(s),total=Math.abs(s.numerator/s.denominator),d=step===3?s.reducedDenominator:s.denominator;for(let p=0;p<Math.max(1,Math.ceil(total));p++){const cuts=[p,p+1,...bands.flatMap(b=>[b.start,b.end]).filter(v=>v>p&&v<p+1)].sort((a,b)=>a-b);for(let i=0;i<cuts.length-1;i++){const a=cuts[i],b=cuts[i+1],color=bands.find(v=>(a+b)/2>=v.start&&(a+b)/2<v.end)?.color??3;this.segment(a-p,b-p,2+p*4,color);}this.partitions(d,2+p*4,animate?s.denominator:d);}}
    const signs=document.createElement('div');signs.className='fraction-symbols';if(compare&&step>=2)signs.innerHTML=`<span data-x="0">${s.left===s.right?'＝':s.left>s.right?'＞':'＜'}</span>`;else if(!compare&&step>=2)signs.innerHTML=`<span data-x="-4">${s.op==='add'?'＋':'−'}</span><span data-x="0">${s.numerator<0?'＝ −':'＝'}</span>`;this.element.append(signs);
    const setProgress=p=>{for(const {m,from,to} of this.lines){const scale=from+(to-from)*p;m.visible=scale>.001;if(shape==='bar')m.scale.x=Math.max(.001,scale);else m.scale.z=Math.max(.001,scale);}this.draw();};
    this.fit();if(animate){const start=performance.now();const tick=now=>{const p=Math.min(1,(now-start)/1500);setProgress(p*p*(3-2*p));if(p<1)this.frame=requestAnimationFrame(tick);};setProgress(0);this.frame=requestAnimationFrame(tick);}else setProgress(1);
  }
  destroy(){this.clear();this.abort.abort();this.resize.disconnect();this.materials.forEach(m=>m.dispose());this.renderer.dispose();}
}
