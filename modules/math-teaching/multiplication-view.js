import * as T from 'three';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';
export class MultiplicationView {
  constructor(onGroup){
    this.element=document.createElement('div');this.element.className='mw-three';this.element.setAttribute('role','group');this.element.setAttribute('aria-label','乘法立體教具');
    this.renderer=new T.WebGLRenderer({antialias:true});this.renderer.setPixelRatio(Math.min(devicePixelRatio,2));this.element.append(this.renderer.domElement);
    this.scene=new T.Scene();this.scene.background=new T.Color('#efe4cf');this.camera=new T.OrthographicCamera(-7,7,7,-7,.1,100);this.camera.position.set(3,12,12);this.camera.lookAt(0,0,0);
    this.scene.add(new T.HemisphereLight(0xffffff,0x666677,2));const light=new T.DirectionalLight(0xffffff,2);light.position.set(-4,9,5);this.scene.add(light);
    this.cubes=new T.Group();this.scene.add(this.cubes);this.trays=new T.Group();this.scene.add(this.trays);
    this.box=new RoundedBoxGeometry(.5,.5,.5,2,.05);this.trayGeo=new T.BoxGeometry(2.35,.12,2.35);
    this.gold=new T.MeshStandardMaterial({color:0xe9ae48});this.green=new T.MeshStandardMaterial({color:0x72d2ad});this.cream=new T.MeshStandardMaterial({color:0xfffaf0});this.ray=new T.Raycaster();
    this.abort=new AbortController();const canvas=this.renderer.domElement;canvas.style.touchAction='none';canvas.setAttribute('aria-label','點選發亮的托盤放入一顆積木');
    canvas.addEventListener('pointerdown',e=>{if(this.busy||this.mode!=='practice'||!e.isPrimary)return;const r=canvas.getBoundingClientRect();this.ray.setFromCamera(new T.Vector2((e.clientX-r.left)/r.width*2-1,1-2*(e.clientY-r.top)/r.height),this.camera);const hit=this.ray.intersectObjects(this.trays.children)[0];if(hit)onGroup(hit.object.userData.group);},{signal:this.abort.signal});
    this.resize=new ResizeObserver(()=>{const w=this.element.clientWidth,h=this.element.clientHeight;if(!w||!h)return;const ratio=w/h,half=Math.max(5.2,5.6/ratio);this.camera.left=-half*ratio;this.camera.right=half*ratio;this.camera.top=half;this.camera.bottom=-half;this.camera.updateProjectionMatrix();this.renderer.setSize(w,h,false);this.draw();});this.resize.observe(this.element);
  }
  draw(){this.element.setAttribute('aria-busy',String(!!this.busy));this.renderer.render(this.scene,this.camera);}
  finish(){cancelAnimationFrame(this.frame);if(this.moving)this.moving.position.copy(this.target);this.busy=false;}
  update(s,mode,array=false,swapped=false){
    this.finish();const previous=this.state;this.state=s;this.mode=mode;this.cubes.clear();this.trays.clear();const a=swapped?s.b:s.a,b=swapped?s.a:s.b,columns=Math.min(3,b),rows=Math.ceil(b/columns);
    if(!array)for(let g=0;g<b;g++){const t=new T.Mesh(this.trayGeo,mode==='practice'&&g===Math.floor(s.placed/s.a)&&s.placed<s.a*s.b?this.green:this.cream);t.position.set((g%columns-(columns-1)/2)*2.8,-.15,(Math.floor(g/columns)-(rows-1)/2)*2.8);t.userData.group=g;this.trays.add(t);}
    for(let i=0;i<s.placed;i++){const g=Math.floor(i/a),n=i%a,m=new T.Mesh(this.box,this.gold);if(array)m.position.set((n-(a-1)/2)*.7,.28,(g-(b-1)/2)*.7);else m.position.set((g%columns-(columns-1)/2)*2.8+(n%3-1)*.65,.28,(Math.floor(g/columns)-(rows-1)/2)*2.8+(Math.floor(n/3)-1)*.65);this.cubes.add(m);}
    if(previous&&previous.a===s.a&&previous.b===s.b&&s.placed===previous.placed+1&&!matchMedia('(prefers-reduced-motion: reduce)').matches){this.moving=this.cubes.children.at(-1);this.target=this.moving.position.clone();this.busy=true;const start=performance.now();const tick=now=>{const t=Math.min(1,(now-start)/380);this.moving.position.y=this.target.y+(1-t)*2;this.busy=t<1;this.draw();if(this.busy)this.frame=requestAnimationFrame(tick);};this.frame=requestAnimationFrame(tick);}else this.draw();
  }
  destroy(){this.finish();this.abort.abort();this.resize.disconnect();this.box.dispose();this.trayGeo.dispose();[this.gold,this.green,this.cream].forEach(m=>m.dispose());this.renderer.dispose();}
}
