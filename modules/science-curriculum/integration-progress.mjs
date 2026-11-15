/** Copy prior source records into the integrated entry; never delete source records. */
export function integrateProgress(state,catalog) {
 for(const unit of catalog.units||[]) {
  const sources=(unit.source_unit_ids||[]).filter(id=>id!==unit.id&&state.units[id]);
  if(!sources.length)continue;
  let target=state.units[unit.id];
  for(const id of sources) {
   if(target?.integratedSources?.includes(id))continue;
   const source=structuredClone(state.units[id]);
   const rewrite=run=>({...run,unitId:unit.id});
   if(!target) {
    target=state.units[unit.id]=source;
    if(target.active)target.active=rewrite(target.active);
    if(target.interrupted)target.interrupted=target.interrupted.map(rewrite);
   }else {
    const attempts=new Set(target.attempts.map(a=>a.id));target.attempts.push(...source.attempts.filter(a=>!attempts.has(a.id)));
    target.seen=[...new Set([...target.seen,...source.seen])];
    // Keep the target's cycle/active reservation; import only new source IDs.
    if(target.questionPool) {
     const p=target.questionPool,knownBank=new Set(p.bankIds);
     const sourceBank=source.questionPool?.bankIds||source.seen;
     const used=new Set(source.questionPool?.usedIds||source.seen);
     for(const qid of sourceBank)if(!knownBank.has(qid)){
      p.bankIds.push(qid);(used.has(qid)?p.usedIds:p.remainingIds).push(qid);knownBank.add(qid);
     }
    }
    const runs=[...(source.interrupted||[]),...(source.active&&!source.active.finished?[source.active]:[])];
    const known=new Set([target.active?.id,...(target.interrupted||[]).map(r=>r.id)]);
    for(const r of runs)if(!known.has(r.id))(target.interrupted||=[]).push(rewrite(r));
   }
   target.integratedSources=[...new Set([...(target.integratedSources||[]),id])];
  }
 }
 return state;
}

export function needsIntegration(state,catalog){return (catalog.units||[]).some(u=>(u.source_unit_ids||[]).some(id=>id!==u.id&&state.units[id]&&!state.units[u.id]?.integratedSources?.includes(id)));}
