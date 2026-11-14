import {createCrewedTransport} from './crewed-transport.mjs';
/** Candidate integration of the actual initial descent and controlled ground exit. */
export function createCrewedArrival(T,{crew,flight,rig,candidate=false}={}){
 const transport=createCrewedTransport(T,{crew,flight,rig,candidate});let phase='waiting',failure=null,dead=false;
 const active=()=>!dead&&!['complete','fallback'].includes(phase);
 function fallback(reason){transport.cancel(reason);flight.cancel(reason);if(crew.getState().active)crew.cancel(reason);if(crew.getState().occupancy==='aboard')crew.cancel(reason);failure=reason;phase='fallback';return true;}
 return{get active(){return active();},getState(){const s=crew.getState(),f=flight.getState();return{phase,active:active(),complete:phase==='complete',failure,shot:phase==='waiting'?'waiting':phase==='flight'?'descent':phase==='disembark'?'disembark':'surface',progress:phase==='complete'?1:phase==='disembark'?.6+.4*s.progress:phase==='flight'?Math.min(.6,.6*(f.phase==='settle'?1:f.elapsed/8)):0,passengers:phase==='flight'?1:0,realPageAccepted:false,safeToFly:false};},
 update(dt,{started=false,ready=false,paused=false,reduced=false}={}){if(!active())return false;if(reduced)return fallback('reduced-motion');if(!started||!ready||paused)return false;
 try{if(phase==='waiting'){if(!transport.start('initial-arrival'))return fallback(transport.getState().failure||'initial-passenger-rejected');phase='flight';}
 if(phase==='flight'){transport.update(dt,{ready,paused,reduced});const s=transport.getState();if(s.failure)return fallback(s.failure);if(!s.active){if(!crew.start('disembark'))return fallback('initial-disembark-rejected');phase='disembark';}return true;}
 if(phase==='disembark'){crew.update(dt,{ready,paused,reduced});const s=crew.getState();if(s.blockedReason)return fallback(s.blockedReason);if(!s.active){if(s.occupancy!=='outside')return fallback('initial-exit-incomplete');phase='complete';}return true;}
 }catch(error){return fallback('initial-arrival-safety: '+error.message);}return false;},cancel(reason='arrival-cancelled'){return active()?fallback(reason):false;},dispose(){if(dead)return;if(active())fallback('disposed');transport.dispose();dead=true;}};
}
