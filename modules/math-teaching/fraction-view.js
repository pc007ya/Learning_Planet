import * as T from 'three';
export class FractionView {
  constructor(onSlice){
    this.element=document.createElement('div');this.element.className='fraction-canvas';this.element.setAttribute('role','group');this.element.setAttribute('aria-label','立體分數切片');
    this.renderer=new T.WebGLRenderer({antialias:true});this.renderer.setPixelRatio(Math.min(devicePixelRatio,2));this.element.append(this.renderer.domElement);this.scene=new T.Scene();this.scene.background=new T.Color('#f2e9d9');this.camera=new T.OrthographicCamera(-6,6,4,-4,.1,60);this.camera.position.set(0,10,8);this.camera.lookAt(0,0,0);
    this.scene.add(new T.HemisphereLight(0xffffff,0x887766,2));const light=new T.DirectionalLight(0xffffff,2);light.position.set(-4,8,4);this.scene.add(light);this.group=new T.Group();this.scene.add(this.group);this.materials=[0x31aabe,0xecb245,0x53b58e,0xe3dbcb].map(color=>new T.MeshStandardMaterial({color,roughness:.5}));this.ray=new T.Raycaster();this.abort=new AbortController();
    this.renderer.domElement.style.touchAction='none';this.renderer.domElement.setAttribute('aria-label','操作階段可點圓盤切片調整分子');this.renderer.domElement.addEventListener('pointerdown',e=>{if(!e.isPrimary||!this.editable)return;const rect=this.renderer.domElement.getBoundingClientRect();this.ray.setFromCamera(new T.Vector2(2*(e.clientX-rect.left)/rect.width-1,1-2*(e.clientY-rect.top)/rect.height),this.camera);const hit=this.ray.intersectObjects(this.group.children)[0];if(hit&&hit.object.userData.side!==undefined)onSlice(hit.object.userData.side,hit.object.userData.index+1);},{signal:this.abort.signal});
    this.resize=new ResizeObserver(()=>{const w=this.element.clientWidth,h=this.element.clientHeight;if(!w||!h)return;const aspect=w/h,half=Math.max(3.1,5.7/aspect);this.camera.left=-half*aspect;this.camera.right=half*aspect;this.camera.top=half;this.camera.bottom=-half;this.camera.updateProjectionMatrix();this.renderer.setSize(w,h,false);this.draw();});this.resize.observe(this.element);
  }
  draw(){this.renderer.render(this.scene,this.camera);}
  update(s,step,editable){this.editable=editable;this.group.children.forEach(o=>o.geometry.dispose());this.group.clear();
    const disk=(n,d,x,color,side)=>{for(let i=0;i<d;i++){const gap=Math.min(.018,Math.PI/d*.06),geometry=new T.CylinderGeometry(1.65,1.65,.24,Math.max(4,Math.ceil(100/d)),1,false,i*2*Math.PI/d+gap,(2*Math.PI/d)-gap*2),m=new T.Mesh(geometry,this.materials[i<n?color:3]);m.position.set(x,0,0);if(side!==undefined)m.userData={side,index:i};this.group.add(m);}};
    if(step<2){disk(step?s.left:s.a,step?s.denominator:s.d,-2.2,0,0);disk(step?s.right:s.b,step?s.denominator:s.e,2.2,1,1);}else{const n=Math.abs(step===3?s.reducedNumerator:s.numerator),d=step===3?s.reducedDenominator:s.denominator,count=Math.max(1,Math.ceil(n/d));for(let i=0;i<count;i++)disk(Math.min(d,n-i*d),d,(i-(count-1)/2)*4.3,2);}
    this.draw();
  }
  destroy(){this.abort.abort();this.resize.disconnect();this.group.children.forEach(o=>o.geometry.dispose());this.materials.forEach(m=>m.dispose());this.renderer.dispose();}
}
