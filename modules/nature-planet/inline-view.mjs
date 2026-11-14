/** Same-page host; map/practice keep their existing session and record ownership. */
export function createNatureInlineView(React,{load=(attempt=0)=>import('../science-curriculum/nature-entry.mjs?v=20261114-inline'+(attempt?'&retry='+attempt:''))}={}){
 return function NatureInlineView({grade,learnerId,isActive=()=>true,onClassic,initialExploration,onExplorationChange}){
  const host=React.useRef(null),[error,setError]=React.useState(null),[attempt,setAttempt]=React.useState(0),[loading,setLoading]=React.useState(true);
  React.useEffect(()=>{let alive=true,close=null;setError(null);setLoading(true);const active=()=>alive&&isActive();
   Promise.resolve().then(()=>load(attempt)).then(async({openNaturePracticePlanet})=>{if(!active())return;const handle=await openNaturePracticePlanet({grade,learnerId,container:host.current,onClassic,initialExploration,onExplorationChange,isActive:active,onOpen:handle=>{close=handle;if(!active())handle();else setLoading(false);}});if(!active())await handle?.();else close=handle;}).catch(e=>{if(active()){setError(e);setLoading(false);}});
   return()=>{alive=false;close?.();};
  },[grade,learnerId,attempt]);
  const label=grade<=2?'生活':'自然';
  return React.createElement('div',{className:'nature-inline-host','data-grade':grade},React.createElement('div',{ref:host}),loading&&!error&&React.createElement('p',{role:'status'},'正在準備'+label+'地圖…'),error&&React.createElement('p',{role:'alert'},label+'地圖暫時無法開啟。',React.createElement('button',{type:'button',onClick:()=>setAttempt(n=>n+1)},'重試'),React.createElement('button',{type:'button',onClick:onClassic},'切回傳統')));
 };
}
