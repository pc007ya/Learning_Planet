import * as THREE from 'three';
import {createDeferredCover} from './cover-request';
import {drawSpine,drawCover,jacketPalette} from './jacket';
export type ShelfBook={title:string;cover:string;english?:boolean;nativePortrait?:boolean};
/** A bounded shelf of actual catalog books; the library background is not interactive. */
function mountShelfPage(stage:HTMLElement,books:ShelfBook[],open:(index:number)=>void):()=>void{
 if(!books.length)return()=>{};
 const center=Math.floor((books.length-1)/2);
 const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
 let renderer:THREE.WebGLRenderer;
 try{renderer=new THREE.WebGLRenderer({alpha:true,antialias:true,powerPreference:'low-power'});}catch{
  const fallback=document.createElement('div');fallback.className='sp-spine-fallback';
  let selected=center;
  const show=()=>{
   fallback.replaceChildren();
   const sides=books.map((_,i)=>i).filter(i=>i!==selected);
   const order=[...sides.slice(0,center),selected,...sides.slice(center)];
   order.forEach(i=>{
    const book=books[i],button=document.createElement('button');button.className='sp-fallback-spine';
    button.setAttribute('aria-pressed',String(i===selected));button.setAttribute('aria-label',(i===selected?'進入 ':'預覽 ')+book.title);
    if(i===selected){button.classList.add('is-confirming');const img=document.createElement('img');img.src=book.cover;img.alt=book.title;button.append(img);}
    else button.textContent=book.title;
    button.onclick=()=>{if(i===selected)open(i);else{selected=i;show();fallback.querySelector<HTMLButtonElement>('.is-confirming')?.focus();}};
    fallback.append(button);
   });
  };
  show();stage.append(fallback);return()=>{fallback.querySelectorAll('img').forEach(image=>image.removeAttribute('src'));fallback.remove();};
 }
 renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));renderer.domElement.className='sp-canvas';renderer.domElement.setAttribute('aria-hidden','true');stage.prepend(renderer.domElement);
 const scene=new THREE.Scene(),camera=new THREE.PerspectiveCamera(36,1,.1,50);camera.position.set(0,.1,10);
 scene.add(new THREE.HemisphereLight(0xe3eaff,0x382741,2.5));const light=new THREE.DirectionalLight(0xffe6bd,3);light.position.set(-3,4,5);scene.add(light);
 const textures:THREE.Texture[]=[],materials:THREE.Material[]=[];const buttons:HTMLButtonElement[]=[];const coverRequests:ReturnType<typeof createDeferredCover>[]=[];
 const overlay=document.createElement('div');overlay.className='sp-spine-hits';stage.append(overlay);
 const coverStatus=document.createElement('span');coverStatus.className='sp-cover-status';coverStatus.setAttribute('role','status');stage.append(coverStatus);
 let disposed=false,raf=0,last=0,chosen=center,selectedAt=0;
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
  const hit=document.createElement('button');hit.className='sp-spine-hit';hit.setAttribute('aria-label','預覽 '+book.title);hit.title=book.title;
  const cover=createDeferredCover(book.cover,{
   start:()=>{hit.setAttribute('aria-busy','true');coverStatus.textContent='正在準備封面，仍可進入閱讀';},
   loaded:image=>{hit.removeAttribute('aria-busy');if(chosen===index)coverStatus.textContent='';const t=new THREE.Texture(image);t.colorSpace=THREE.SRGBColorSpace;t.needsUpdate=true;textures.push(t);if(book.english){const jacket=document.createElement('canvas');jacket.width=book.nativePortrait?816:768;jacket.height=book.nativePortrait?972:1024;drawCover(jacket.getContext('2d')!,image,book.title,!!book.nativePortrait);const printed=new THREE.CanvasTexture(jacket);printed.colorSpace=THREE.SRGBColorSpace;textures.push(printed);coverMat.map=printed;}else coverMat.map=t;coverMat.needsUpdate=true;},
   failed:()=>{hit.removeAttribute('aria-busy');if(chosen===index)coverStatus.textContent='封面暫時無法載入，可再按一次進入閱讀';}
  });coverRequests.push(cover);
  hit.onclick=()=>{if(chosen===index){if(performance.now()-selectedAt>350)open(index);return;}select(index);};buttons.push(hit);overlay.append(hit);return group;
 });
 const select=(index:number)=>{
  coverRequests.forEach(request=>request.cancel());chosen=index;selectedAt=performance.now();coverStatus.textContent='';
  buttons.forEach((hit,i)=>{hit.removeAttribute('aria-busy');hit.setAttribute('aria-label',(i===chosen?'進入 ':'預覽 ')+books[i].title);hit.setAttribute('aria-pressed',String(i===chosen));});
  coverRequests[index]?.load();
 };
 const targetX=(index:number)=>{
  if(index===chosen)return 0;
  const rank=index<chosen?index:index-1;
  return rank<center?-(1.65+(center-1-rank)*.78):1.65+(rank-center)*.78;
 };
 models.forEach((g,i)=>{g.position.set(targetX(i),-.15,i===chosen?.35:0);g.rotation.y=i===chosen?0:Math.PI/2;});
 select(center);
 const resize=()=>{const r=stage.getBoundingClientRect();renderer.setSize(r.width,r.height,false);camera.aspect=r.width/Math.max(1,r.height);const halfWidth=books.length>1?1.96+Math.max(center-1,books.length-center-2)*.78:1.1;camera.position.z=Math.max(5.2,1.1+(halfWidth+.15)/(Math.tan(THREE.MathUtils.degToRad(18))*camera.aspect));camera.updateProjectionMatrix();};const observer=new ResizeObserver(resize);observer.observe(stage);resize();
 const dismiss=(event:KeyboardEvent)=>{if(event.key==='Escape'&&books.length)select(center);};
 document.addEventListener('keydown',dismiss);
 const start=performance.now(),point=new THREE.Vector3();
 const tick=(now:number)=>{if(disposed)return;raf=requestAnimationFrame(tick);if(document.hidden||now-last<33)return;const blend=reduced?1:1-Math.exp(-(now-last)/100);last=now;
  const box=stage.getBoundingClientRect();
  models.forEach((g,i)=>{const active=i===chosen;
   g.position.x+=(targetX(i)-g.position.x)*blend;g.position.z+=((active?.35:0)-g.position.z)*blend;g.rotation.y+=((active?0:Math.PI/2)-g.rotation.y)*blend;
   g.position.y=-.15+(reduced||active?0:Math.sin((now-start)/1500+i)*.025);
   g.updateMatrixWorld(true);
   let left=Infinity,right=-Infinity,top=Infinity,bottom=-Infinity;
   for(const y of [-1.24,1.24])for(const edge of [-1,1]){
    point.set(active?edge*1.04:-1.1,y,active?.34:edge*.31).applyMatrix4(g.matrixWorld).project(camera);
    const x=(point.x+1)*box.width/2,py=(1-point.y)*box.height/2;left=Math.min(left,x);right=Math.max(right,x);top=Math.min(top,py);bottom=Math.max(bottom,py);
   }
   const hit=buttons[i];hit.style.left=(left+right)/2+'px';hit.style.top=(top+bottom)/2+'px';hit.style.height=bottom-top+'px';hit.style.width=Math.max(24,right-left)+'px';hit.style.zIndex=active?'2':'1';hit.classList.toggle('is-confirming',active);
  });renderer.render(scene,camera);};raf=requestAnimationFrame(tick);
 return()=>{document.removeEventListener('keydown',dismiss);disposed=true;coverRequests.forEach(request=>request.dispose());coverStatus.remove();cancelAnimationFrame(raf);observer.disconnect();scene.traverse(o=>{if(o instanceof THREE.Mesh)o.geometry.dispose();});materials.forEach(m=>m.dispose());textures.forEach(t=>t.dispose());renderer.dispose();renderer.forceContextLoss();};
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
