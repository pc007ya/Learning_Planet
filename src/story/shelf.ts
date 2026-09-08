import * as THREE from 'three';
export type ShelfBook={title:string;cover:string};
/** A bounded shelf of actual catalog books; the library background is not interactive. */
export function mountShelf(stage:HTMLElement,books:ShelfBook[],open:(index:number)=>void):()=>void{
 const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
 let renderer:THREE.WebGLRenderer;
 try{renderer=new THREE.WebGLRenderer({alpha:true,antialias:true,powerPreference:'low-power'});}catch{
  const fallback=document.createElement('div');fallback.className='sp-spine-fallback';
  books.forEach((b,i)=>{const button=document.createElement('button');button.className='sp-fallback-spine';button.textContent=b.title;button.onclick=()=>open(i);fallback.append(button);});stage.append(fallback);return()=>fallback.remove();
 }
 renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));renderer.domElement.className='sp-canvas';renderer.domElement.setAttribute('aria-hidden','true');stage.prepend(renderer.domElement);
 const scene=new THREE.Scene(),camera=new THREE.PerspectiveCamera(36,1,.1,50);camera.position.set(0,.1,10);
 scene.add(new THREE.HemisphereLight(0xe3eaff,0x382741,2.5));const light=new THREE.DirectionalLight(0xffe6bd,3);light.position.set(-3,4,5);scene.add(light);
 const textures:THREE.Texture[]=[],materials:THREE.Material[]=[];const buttons:HTMLButtonElement[]=[];
 const overlay=document.createElement('div');overlay.className='sp-spine-hits';stage.append(overlay);
 let disposed=false,raf=0,last=0,chosen=-1,selectedAt=0;
 const models=books.map((book,index)=>{
  const group=new THREE.Group();scene.add(group);group.rotation.y=Math.PI/2;group.position.set((index-(books.length-1)/2)*.85,-.15,0);
  const color=[0x443160,0x175d66,0x753d44,0x304d79,0x655020,0x534976][index%6];
  const binding=new THREE.MeshStandardMaterial({color,roughness:.5,metalness:.15});const gold=new THREE.MeshStandardMaterial({color:0xe6bd69,metalness:.5,roughness:.4});const paper=new THREE.MeshStandardMaterial({color:0xffedcb,roughness:.85});const coverMat=new THREE.MeshStandardMaterial({color:0xffffff,roughness:.65});materials.push(binding,gold,paper,coverMat);
  const add=(w:number,h:number,d:number,mat:THREE.Material,x=0,z=0)=>{const mesh=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),mat);mesh.position.set(x,0,z);group.add(mesh);return mesh;};
  add(3.1,2.32,.48,paper);add(3.3,2.475,.065,binding,0,-.28);add(3.3,2.475,.065,binding,0,.28);add(.13,2.475,.62,binding,-1.6);
  const front=new THREE.Mesh(new THREE.PlaneGeometry(3.24,2.43),coverMat);front.position.z=.316;group.add(front);
  const art=document.createElement('canvas');art.width=256;art.height=1024;const ctx=art.getContext('2d')!;ctx.fillStyle='#'+color.toString(16).padStart(6,'0');ctx.fillRect(0,0,256,1024);ctx.strokeStyle='#f4d28c';ctx.lineWidth=6;ctx.strokeRect(18,24,220,976);ctx.fillStyle='#ffe4a6';ctx.textAlign='center';ctx.font='64px serif';ctx.fillText('✦',128,114);const chars=[...book.title.replace(/[：:《》\s]/g,'')];const step=Math.min(78,690/chars.length);ctx.font=`bold ${Math.min(65,step*.85)}px sans-serif`;chars.forEach((char,i)=>ctx.fillText(char,128,215+i*step));ctx.fillText('✦',128,940);
  const tex=new THREE.CanvasTexture(art);tex.colorSpace=THREE.SRGBColorSpace;textures.push(tex);const spineMat=new THREE.MeshStandardMaterial({map:tex,roughness:.5});materials.push(spineMat);const spine=new THREE.Mesh(new THREE.PlaneGeometry(.6,2.43),spineMat);spine.rotation.y=-Math.PI/2;spine.position.x=-1.67;group.add(spine);
  for(const y of [-1.04,.98]){const band=add(.15,.04,.65,gold,-1.6);band.position.y=y;}
  new THREE.TextureLoader().load(book.cover,t=>{if(disposed){t.dispose();return;}t.colorSpace=THREE.SRGBColorSpace;textures.push(t);coverMat.map=t;coverMat.needsUpdate=true;},undefined,()=>{});
  const hit=document.createElement('button');hit.className='sp-spine-hit';hit.setAttribute('aria-label','點書脊，打開'+book.title);hit.title=book.title;hit.onclick=()=>{if(chosen>=0)return;chosen=index;selectedAt=performance.now();buttons.forEach(b=>b.disabled=true);stage.querySelector('.sp-caption')!.textContent=book.title;};buttons.push(hit);overlay.append(hit);return group;
 });
 const resize=()=>{const r=stage.getBoundingClientRect();renderer.setSize(r.width,r.height,false);camera.aspect=r.width/r.height;camera.position.z=camera.aspect<1?12:10;camera.updateProjectionMatrix();};const observer=new ResizeObserver(resize);observer.observe(stage);resize();
 const start=performance.now();const point=new THREE.Vector3();
 const tick=(now:number)=>{if(disposed)return;raf=requestAnimationFrame(tick);if(document.hidden||now-last<33)return;last=now;
  models.forEach((g,i)=>{if(chosen<0){g.position.y=-.15+(reduced?0:Math.sin((now-start)/1500+i)*.025);}else if(i!==chosen){g.visible=false;}else{const pull=Math.min(1,(now-selectedAt)/450),turn=Math.max(0,Math.min(1,(now-selectedAt-450)/850));const ease=turn*turn*(3-2*turn);g.position.z=pull*.7;g.position.x=(i-(books.length-1)/2)*.85*(1-ease);g.rotation.y=reduced?0:Math.PI/2*(1-ease);}
   g.updateMatrixWorld(true);point.set(-1.67,0,0).applyMatrix4(g.matrixWorld).project(camera);const box=stage.getBoundingClientRect();const hit=buttons[i];hit.style.left=(point.x+1)*box.width/2+'px';hit.style.top=(1-point.y)*box.height/2+'px';const height=2.48/(camera.position.z-1.67)*box.height/(2*Math.tan(THREE.MathUtils.degToRad(18)));hit.style.height=height+'px';hit.style.width=Math.max(44,height*.25)+'px';hit.style.visibility=chosen<0?'visible':'hidden';
  });renderer.render(scene,camera);if(chosen>=0&&now-selectedAt>2100){open(chosen);return;}};raf=requestAnimationFrame(tick);
 return()=>{disposed=true;cancelAnimationFrame(raf);observer.disconnect();scene.traverse(o=>{if(o instanceof THREE.Mesh)o.geometry.dispose();});materials.forEach(m=>m.dispose());textures.forEach(t=>t.dispose());renderer.dispose();renderer.forceContextLoss();};
}
