import * as THREE from 'three';
import {drawSpine,drawCover,jacketPalette} from './jacket';
export type ShelfBook={title:string;cover:string;english?:boolean};
/** A bounded shelf of actual catalog books; the library background is not interactive. */
function mountShelfPage(stage:HTMLElement,books:ShelfBook[],open:(index:number)=>void):()=>void{
 const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
 let renderer:THREE.WebGLRenderer;
 try{renderer=new THREE.WebGLRenderer({alpha:true,antialias:true,powerPreference:'low-power'});}catch{
  const fallback=document.createElement('div');fallback.className='sp-spine-fallback';
  books.forEach((b,i)=>{const button=document.createElement('button');button.className='sp-fallback-spine';button.textContent=b.title;button.onclick=()=>{if(button.classList.contains('is-confirming')){open(i);return;}fallback.querySelectorAll('button').forEach(other=>{other.classList.remove('is-confirming');other.replaceChildren(document.createTextNode(books[Number(other.dataset.index)].title));});button.classList.add('is-confirming');const img=document.createElement('img');img.src=b.cover;img.alt=b.title;button.replaceChildren(img);};button.dataset.index=String(i);fallback.append(button);});stage.append(fallback);const dismiss=(event:PointerEvent)=>{if(!(event.target instanceof Node)||fallback.contains(event.target))return;fallback.querySelectorAll('button').forEach(button=>{button.classList.remove('is-confirming');button.textContent=books[Number(button.dataset.index)].title;});};document.addEventListener('pointerdown',dismiss);return()=>{document.removeEventListener('pointerdown',dismiss);fallback.remove();};
 }
 renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));renderer.domElement.className='sp-canvas';renderer.domElement.setAttribute('aria-hidden','true');stage.prepend(renderer.domElement);
 const scene=new THREE.Scene(),camera=new THREE.PerspectiveCamera(36,1,.1,50);camera.position.set(0,.1,10);
 scene.add(new THREE.HemisphereLight(0xe3eaff,0x382741,2.5));const light=new THREE.DirectionalLight(0xffe6bd,3);light.position.set(-3,4,5);scene.add(light);
 const textures:THREE.Texture[]=[],materials:THREE.Material[]=[];const buttons:HTMLButtonElement[]=[];
 const overlay=document.createElement('div');overlay.className='sp-spine-hits';stage.append(overlay);
 let disposed=false,raf=0,last=0,chosen=-1,selectedAt=0;
 const models=books.map((book,index)=>{
  const group=new THREE.Group();scene.add(group);group.rotation.y=Math.PI/2;group.position.set((index-(books.length-1)/2)*.85,-.15,0);
  const color=new THREE.Color(jacketPalette(book.title)[0]).getHex();
  const binding=new THREE.MeshStandardMaterial({color,roughness:.88,metalness:0});const gold=new THREE.MeshStandardMaterial({color:0xe6bd69,metalness:.5,roughness:.4});const paper=new THREE.MeshStandardMaterial({color:0xffedcb,roughness:.85});const coverMat=new THREE.MeshStandardMaterial({color:0xffffff,roughness:.65});materials.push(binding,gold,paper,coverMat);
  const add=(w:number,h:number,d:number,mat:THREE.Material,x=0,z=0)=>{const mesh=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),mat);mesh.position.set(x,0,z);group.add(mesh);return mesh;};
  add(1.94,2.32,.48,paper);add(2.08,2.475,.065,binding,0,-.28);add(2.08,2.475,.065,binding,0,.28);add(.13,2.475,.62,binding,-1.02);
  const hinge=new THREE.Group();hinge.position.set(-1.04,0,.32);group.add(hinge);group.userData.hinge=hinge;
  const front=new THREE.Mesh(new THREE.PlaneGeometry(2.04,2.43),coverMat);front.position.set(1.04,0,.01);hinge.add(front);
  const art=document.createElement('canvas');art.width=256;art.height=1024;const ctx=art.getContext('2d')!;drawSpine(ctx,book.title,!!book.english,index);
  const tex=new THREE.CanvasTexture(art);tex.colorSpace=THREE.SRGBColorSpace;textures.push(tex);const spineMat=new THREE.MeshStandardMaterial({map:tex,roughness:.5});materials.push(spineMat);const spine=new THREE.Mesh(new THREE.PlaneGeometry(.6,2.43),spineMat);spine.rotation.y=-Math.PI/2;spine.position.x=-1.10;group.add(spine);
  new THREE.TextureLoader().load(book.cover,t=>{if(disposed){t.dispose();return;}t.colorSpace=THREE.SRGBColorSpace;textures.push(t);if(book.english){const jacket=document.createElement('canvas');jacket.width=768;jacket.height=1024;drawCover(jacket.getContext('2d')!,t.image,book.title);const printed=new THREE.CanvasTexture(jacket);printed.colorSpace=THREE.SRGBColorSpace;textures.push(printed);coverMat.map=printed;}else coverMat.map=t;coverMat.needsUpdate=true;},undefined,()=>{});
  const hit=document.createElement('button');hit.className='sp-spine-hit';hit.setAttribute('aria-label','預覽 '+book.title);hit.title=book.title;hit.onclick=()=>{if(chosen===index){if(performance.now()-selectedAt>350)open(index);return;}chosen=index;selectedAt=performance.now();hit.setAttribute('aria-label','進入 '+book.title);hit.setAttribute('aria-pressed','true');};buttons.push(hit);overlay.append(hit);return group;
 });
 const resize=()=>{const r=stage.getBoundingClientRect();renderer.setSize(r.width,r.height,false);camera.aspect=r.width/r.height;camera.position.z=camera.aspect<1?8:5.2;camera.updateProjectionMatrix();};const observer=new ResizeObserver(resize);observer.observe(stage);resize();
 const dismiss=(event:PointerEvent|KeyboardEvent)=>{if(chosen<0)return;if(event instanceof KeyboardEvent&&event.key!=='Escape')return;if(event instanceof PointerEvent&&event.target instanceof Node&&buttons[chosen].contains(event.target))return;chosen=-1;buttons.forEach((hit,i)=>{hit.classList.remove('is-confirming');hit.setAttribute('aria-label','預覽 '+books[i].title);hit.setAttribute('aria-pressed','false');});};
 document.addEventListener('pointerdown',dismiss);document.addEventListener('keydown',dismiss);
 const start=performance.now();const point=new THREE.Vector3();
 const tick=(now:number)=>{if(disposed)return;raf=requestAnimationFrame(tick);if(document.hidden||now-last<33)return;last=now;
  models.forEach((g,i)=>{const active=i===chosen;g.visible=chosen<0||active;
   if(!active){g.position.set((i-(books.length-1)/2)*.85,-.15+(reduced?0:Math.sin((now-start)/1500+i)*.025),0);g.rotation.y=Math.PI/2;}
   else{const turn=reduced?1:Math.min(1,(now-selectedAt)/600),ease=turn*turn*(3-2*turn);g.position.z=ease*.7;g.position.x=(i-(books.length-1)/2)*.85*(1-ease);g.rotation.y=Math.PI/2*(1-ease);}
   g.updateMatrixWorld(true);point.set(active?0:-1.10,0,active?.35:0).applyMatrix4(g.matrixWorld).project(camera);const box=stage.getBoundingClientRect();const hit=buttons[i];hit.style.left=(point.x+1)*box.width/2+'px';hit.style.top=(1-point.y)*box.height/2+'px';const height=2.48/(camera.position.z-(active?.7:1.10))*box.height/(2*Math.tan(THREE.MathUtils.degToRad(18)));hit.style.height=height+'px';hit.style.width=Math.max(44,height*(active?.85:.25))+'px';hit.style.visibility=g.visible?'visible':'hidden';hit.classList.toggle('is-confirming',active);
  });renderer.render(scene,camera);};raf=requestAnimationFrame(tick);
 return()=>{document.removeEventListener('pointerdown',dismiss);document.removeEventListener('keydown',dismiss);disposed=true;cancelAnimationFrame(raf);observer.disconnect();scene.traverse(o=>{if(o instanceof THREE.Mesh)o.geometry.dispose();});materials.forEach(m=>m.dispose());textures.forEach(t=>t.dispose());renderer.dispose();renderer.forceContextLoss();};
}

/** Eight books per shelf window; a swipe never doubles as a book selection. */
export function mountShelf(stage:HTMLElement,books:ShelfBook[],open:(index:number)=>void):()=>void{
 const viewport=document.createElement('div');viewport.className='sp-shelf-window';stage.append(viewport);
 let offset=0,dispose=()=>{},startX=0,startY=0,dragged=false,pointer=-1;
 const prev=document.createElement('button'),next=document.createElement('button');
 prev.className='sp-row-arrow sp-row-prev';next.className='sp-row-arrow sp-row-next';prev.textContent='‹';next.textContent='›';prev.setAttribute('aria-label','向左滑動書架');next.setAttribute('aria-label','向右滑動書架');
 const show=()=>{dispose();viewport.replaceChildren();dispose=mountShelfPage(viewport,books.slice(offset,offset+8),index=>open(offset+index));prev.disabled=offset===0;next.disabled=offset+8>=books.length;};
 const shift=(delta:number)=>{offset=Math.max(0,Math.min(Math.max(0,books.length-8),offset+delta));show();if(!matchMedia("(prefers-reduced-motion: reduce)").matches)viewport.animate([{transform:`translateX(${delta>0?24:-24}px)`,opacity:.4},{transform:"translateX(0)",opacity:1}],{duration:220,easing:"ease-out"});};
 prev.onclick=()=>shift(-8);next.onclick=()=>shift(8);if(books.length>8)stage.append(prev,next);
 viewport.addEventListener('pointerdown',e=>{if(e.button!==0)return;startX=e.clientX;startY=e.clientY;dragged=false;pointer=e.pointerId;});
 const move=(e:PointerEvent)=>{if(e.pointerId!==pointer)return;if(Math.abs(e.clientX-startX)>12&&Math.abs(e.clientX-startX)>Math.abs(e.clientY-startY)){dragged=true;viewport.setPointerCapture(e.pointerId);}};
 const end=(e:PointerEvent)=>{if(e.pointerId!==pointer)return;pointer=-1;if(dragged&&Math.abs(e.clientX-startX)>45)shift(e.clientX<startX?8:-8);};
 viewport.addEventListener('pointermove',move);viewport.addEventListener('pointerup',end);viewport.addEventListener('pointercancel',()=>{pointer=-1;dragged=true;});
 viewport.addEventListener('click',e=>{if(dragged){e.stopPropagation();e.preventDefault();dragged=false;}},true);
 show();return()=>{dispose();viewport.remove();prev.remove();next.remove();};
}
