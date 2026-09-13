import {AdditiveBlending,BufferAttribute,BufferGeometry,OrthographicCamera,Points,PointsMaterial,Scene,WebGLRenderer} from 'three';

/** Only light particles live on the canvas. Background, paper cast and foreground stay separate. */
export function mountMoonlight3D(host:HTMLElement){
 const renderer=new WebGLRenderer({alpha:true,antialias:true,powerPreference:'low-power'});
 renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));renderer.domElement.className='moonlight-webgl';renderer.domElement.setAttribute('aria-hidden','true');host.prepend(renderer.domElement);
 const scene=new Scene(),camera=new OrthographicCamera(-1,1,1,-1,.1,10);camera.position.z=2;
 const positions=new Float32Array(60);for(let i=0;i<20;i++){positions[i*3]=Math.random()*2-1;positions[i*3+1]=Math.random()*2-1;positions[i*3+2]=.1;}
 const geometry=new BufferGeometry();geometry.setAttribute('position',new BufferAttribute(positions,3));const material=new PointsMaterial({color:0xffe7a0,size:.016,transparent:true,opacity:.48,blending:AdditiveBlending});scene.add(new Points(geometry,material));
 const resize=()=>{const r=host.getBoundingClientRect();if(r.width&&r.height)renderer.setSize(r.width,r.height,false);};const observer=new ResizeObserver(resize);observer.observe(host);
 let frame=0,stopped=false,last=0;
 const animate=(now:number)=>{if(stopped)return;if(!document.hidden&&now-last>40){last=now;const p=geometry.getAttribute('position') as BufferAttribute;for(let i=0;i<20;i++)p.setY(i,p.getY(i)>1?-1:p.getY(i)+.003);p.needsUpdate=true;renderer.render(scene,camera);}frame=requestAnimationFrame(animate);};frame=requestAnimationFrame(animate);
 return()=>{stopped=true;cancelAnimationFrame(frame);observer.disconnect();geometry.dispose();material.dispose();renderer.dispose();renderer.domElement.remove();};
}
