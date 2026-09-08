import {ground,type TrackKind} from './mini4wd-physics';
/** Deterministic teaching diagrams; model photos are captured from the live 3D parts. */
export function trackProfilePicture(kind:TrackKind){
  let path='',pen=false;for(let i=0;i<=60;i++){const x=-12+i*.4,g=ground(x,-12,kind);if(g.gap){pen=false;continue;}path+=(pen?'L':'M')+(i*2)+' '+(30-g.height*19)+' ';pen=true;}
  return `<svg class="m4-track-profile" viewBox="0 0 120 36" aria-hidden="true"><path d="${path}" fill="none" stroke="#ffe29b" stroke-width="5" stroke-linecap="round"/></svg>`;
}
export function gearPicture(ratio:number){
  const teeth=ratio*12,scale=46/(teeth+12),r=teeth*scale,r0=12*scale;
  const gear=(x:number,y:number,radius:number,n:number,color:string)=>{
    const points=Array.from({length:n*4},(_,i)=>{const a=i*Math.PI*2/(n*4),v=radius*(i%4===0||i%4===3?.89:1);return `${x+Math.cos(a)*v},${y+Math.sin(a)*v}`;}).join(' ');
    return `<polygon points="${points}" fill="${color}" stroke="#fff3c5" stroke-width=".8"/><circle cx="${x}" cy="${y}" r="${radius*.30}" fill="#183148"/><circle cx="${x-radius*.1}" cy="${y-radius*.10}" r="${radius*.10}" fill="#fff7dc"/>`;
  };
  return `<svg viewBox="0 0 150 100" aria-hidden="true">${gear(52-r0,52,r0,12,'#75e4d1')}${gear(52+r*.85,52,r,teeth,'#f9c667')}</svg>`;
}
export function ballastPicture(rear:boolean){return `<svg viewBox="0 0 160 100" aria-hidden="true"><rect x="27" y="19" width="105" height="63" rx="22" fill="#7dd8e0" stroke="#e1fcff" stroke-width="2"/><path d="M109 32l14 18-14 18" fill="#173955"/><path d="M39 34h45v32H39z" fill="#243d56"/><circle cx="${rear?43:78}" cy="50" r="17" fill="#ffc965" stroke="#fff4c7" stroke-width="3"/><circle cx="${rear?43:78}" cy="50" r="5" fill="#ba7332"/><path d="M35 10h20m45 0h20M35 90h20m45 0h20" stroke="#152437" stroke-width="12" stroke-linecap="round"/></svg>`;}
export function questionPicture(index:number,photos:Record<string,string>){
  const img=(id:string)=>`<img src="${photos[id]||''}" alt="">`;
  return `<div class="m4-picture-prompt" aria-hidden="true">${index===0?`<b>?</b><i>→</i>${img('motor')}<i>→</i>${img('rim-fl')}`:index===1?`${img('motor')}<i>→</i><b>?</b><i>→</i>${img('rim-fl')}`:`<span class="m4-rail-picture">${img('shell')}<b>?</b><i>↪</i></span>`}</div>`;
}
