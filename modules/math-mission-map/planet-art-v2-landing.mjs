// Pure, bounded cinematic clock. Resource readiness is separate from elapsed time.
export function createLandingTimeline() {
  let elapsed=0,active=false,complete=false;
  return {
    start(){if(active)return false;elapsed=0;active=true;complete=false;return true;},
    cancel(){active=false;complete=false;elapsed=0;},
    step(dt,{ready=false,rocketReady=false,reduced=false}={}){
      if(active){
        if(reduced){if(ready){elapsed=12;active=false;complete=true;}}
        else if(rocketReady){elapsed=Math.min(12,elapsed+Math.max(0,Math.min(.1,dt)));if(!ready)elapsed=Math.min(elapsed,7.5);if(elapsed>=12){active=false;complete=true;}}
      }
      const shot=complete?'surface':!active?'orbit':!rocketReady?'loading':reduced&&!ready?'waiting':elapsed<4?'approach':elapsed<7.5?'push-in':!ready?'waiting':elapsed<8.2?'cut':elapsed<11.4?'descent':'settle';
      return {active,complete,elapsed,shot,progress:Math.min(1,elapsed/12),cut:shot==='cut'?Math.sin((elapsed-7.5)/.7*Math.PI):0};
    },
    get active(){return active;}, get complete(){return complete;},
  };
}
export const landingEase=t=>{t=Math.max(0,Math.min(1,t));return t*t*(3-2*t);};

// Reuses the authored rocket's geometry/materials; the props owner alone disposes them.
export function createLandingDirector(THREE,scene) {
  let ship=null,original=null,pivot=null,landing=null,base=null,originalPosition=null;
  const offset=new THREE.Vector3();
  const mix=(a,b,t)=>new THREE.Vector3(...a).lerp(new THREE.Vector3(...b),landingEase(t));
  function place(){if(!base||!landing)return;offset.copy(landing).sub(base);original.position.copy(originalPosition).add(offset);original.updateMatrixWorld(true);}
  return {
    setLanding(point){landing=new THREE.Vector3(...point);place();},
    attach(root){
      original=root.getObjectByName('Space_Exploration_Rocket_Runtime')||root.getObjectByName('Space Exploration Rocket Runtime');
      if(!original)root.traverse(o=>{if(!original&&/Space.?Exploration.?Rocket.?Runtime/i.test(o.name))original=o;});
      if(!original)return false;
      root.updateMatrixWorld(true);pivot=new THREE.Box3().setFromObject(original).getCenter(new THREE.Vector3());
      const box=new THREE.Box3().setFromObject(original);base=new THREE.Vector3(pivot.x,box.min.y,pivot.z);originalPosition=original.position.clone();
      ship=new THREE.Group();ship.name='grade-one-cinematic-rocket';const model=original.clone(true);
      original.matrixWorld.decompose(model.position,model.quaternion,model.scale);model.position.sub(pivot);ship.add(model);ship.visible=false;scene.add(ship);place();return true;
    },
    apply(frame,camera,normalPosition,normalTarget){
      if(!ship)return;
      ship.visible=frame.active&&frame.shot!=='loading';original.visible=!ship.visible;
      if(!ship.visible)return;
      const t=frame.elapsed;
      let eye,aim;
      if(t<4){
        ship.position.copy(mix([24,36,58],[12,23,30],t/4));ship.scale.setScalar(2.2);ship.rotation.z=-.28;
        eye=mix([-35,49,112],[-29,48,96],t/4);aim=ship.position.clone().lerp(new THREE.Vector3(-4,0,12),.22);
      }else if(t<7.85){
        const p=(t-4)/3.5;ship.position.copy(mix([12,23,30],[pivot.x,20,pivot.z],p));ship.scale.setScalar(2.2-landingEase(p)*1.2);ship.rotation.z=-.28*(1-landingEase(p));
        eye=mix([-29,48,96],[-22,48,61],p);aim=mix([8,17,24],[-4,1,12],p);
      }else if(t<11.4){
        const p=(t-8.2)/3.2;ship.position.copy(mix([pivot.x,20,pivot.z],pivot.toArray(),p));ship.scale.setScalar(1);ship.rotation.z=0;
        eye=mix([18,28,29],[15,10,25],p);aim=ship.position.clone();
      }else{
        ship.position.copy(pivot);ship.scale.setScalar(1);ship.rotation.z=0;
        const p=landingEase((t-11.4)/.6);eye=new THREE.Vector3(15,10,25).lerp(normalPosition,p);aim=pivot.clone().lerp(normalTarget,p);
      }
      if(landing){ship.position.add(offset);if(t<11.4){eye.add(offset);aim.add(offset);}else{const p=landingEase((t-11.4)/.6);eye.addScaledVector(offset,1-p);aim.addScaledVector(offset,1-p);}}
      camera.position.copy(eye);camera.lookAt(aim);
    },
    hide(){if(ship)ship.visible=false;if(original)original.visible=true;},
    dispose(){if(ship)scene.remove(ship);if(original){original.visible=true;if(originalPosition)original.position.copy(originalPosition);}ship=null;original=null;},
    get ready(){return !!ship;},
  };
}
