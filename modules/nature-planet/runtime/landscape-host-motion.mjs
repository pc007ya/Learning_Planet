/** Shared host clock and player yielding; the adapter owns poses, the loader owns its GLB. */
export function createLandscapeMotionHost(patch,{clock,getPlayerPosition,mode='auto',reduced=false,lowPower=false}={}){
 let dead=false,currentMode=mode,isReduced=reduced,seconds=0,lastClock=null,yielding=false;
 const ids=new Set(patch.manifest.fauna.map(a=>a.id));
 const active=()=>!dead&&!isReduced&&currentMode!=='static';
 const applyMode=()=>patch.setReduced(!active());
 applyMode();patch.update(0,0);
 return {get active(){return active();},get interval(){return currentMode==='low'||lowPower?1000/15:1000/30;},
  getState(){return{actors:ids.size,seconds,yielding,quality:active()?(currentMode==='low'||lowPower?'low':'normal'):'static',supportWarnings:patch.supportWarnings?.length||0};},
  pause(){lastClock=null;},setMode(value){currentMode=value;lastClock=null;yielding=false;applyMode();},setReduced(value){isReduced=Boolean(value);lastClock=null;applyMode();},
  update(now){if(!active())return false;const elapsed=clock.advance(now),dt=lastClock===null?0:Math.max(0,Math.min(.1,elapsed-lastClock));lastClock=elapsed;const next=seconds+dt;patch.update(next,dt);
   const player=getPlayerPosition?.();yielding=Boolean(player&&patch.physicsData.obstacles.some(o=>o.dynamic&&ids.has(o.actorId)&&Math.hypot(o.x-player.x,-o.y-player.z)<o.r+.38+.25));
   if(yielding)patch.update(seconds,0);else seconds=next;return true;
  },dispose(){dead=true;lastClock=null;}
 };
}
