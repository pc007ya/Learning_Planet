// Small, self-contained teaching icons. Labels remain available to assistive technology.
const svg=body=>`<svg viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${body}</svg>`;
const cube=(face='all')=>svg(`<path d="m16 3 12 7-12 7L4 10Z" fill="${face==='top'||face==='all'?'#75e4df':'#638096'}"/><path d="m4 10 12 7v13L4 23Z" fill="${face==='front'||face==='all'?'#75e4df':'#638096'}"/><path d="m16 17 12-7v13l-12 7Z" fill="${face==='side'||face==='all'?'#75e4df':'#638096'}"/>`);
const slab=(y,fill,opacity=1)=>`<path d="m5 ${y} 11-5 11 5-11 5Z" fill="${fill}" opacity="${opacity}"/>`;
const icons={
 home:cube(),front:cube('front'),side:cube('side'),top:cube('top'),
 all:svg('<path d="m16 3 12 7v13l-12 7L4 23V10Z" fill="#638096"/><path d="m4 10 12 7 12-7M16 17v13M10 6.5l12 7v13M22 6.5l-12 7v13M4 16.5l12 7 12-7"/><path d="m16 3 12 7-12 7L4 10Z" fill="#75e4df" fill-opacity=".5"/>'),
 split:svg(slab(24,'#75e4df')+slab(16,'#75e4df')+slab(8,'#75e4df')),
 merge:svg(slab(22,'#75e4df')+slab(18,'#75e4df')+slab(14,'#75e4df')+'<path d="M3 3v7m-2-2 2 2 2-2M29 29v-7m-2 2 2-2 2 2"/>'),
 bottom:svg(slab(24,'#75e4df')+`<g stroke-dasharray="2 3" opacity=".45">${slab(16,'none')+slab(8,'none')}</g>`),
 count:svg('<path d="m12 3 9 5-9 5-9-5Z" fill="#75e4df"/><path d="m3 8 9 5v10l-9-5Z" fill="#638096"/><path d="m12 13 9-5v10l-9 5Z" fill="#75e4df"/><path d="m19 17 1 13 3-4 5 2 2-3-5-2 4-2Z" fill="#ffd47c"/>'),
 gaps:svg('<path d="m16 3 12 7v13l-12 7L4 23V10Z" stroke-dasharray="3 3"/><path d="m4 17 12 7 12-7-12-7Z" fill="#75e4df"/><path d="M16 24v6"/>'),
 fill:svg('<path d="m11 8 9 5-9 5-9-5Z" fill="#75e4df"/><path d="m2 13 9 5v10l-9-5Z" fill="#638096"/><path d="m11 18 9-5v10l-9 5Z" fill="#75e4df"/><path d="M25 3v10m-5-5h10" stroke="#ffd47c" stroke-width="3"/>')
};
export function setGeometryIcon(button,icon,label){if(!button)return;button.innerHTML=icons[icon];button.classList.add('icon-button','geometry-icon');button.setAttribute('aria-label',label);button.title=label;}
export function setCameraIcons(){for(const [id,label] of Object.entries({home:'三面視角',front:'正面',side:'側面',top:'俯視'}))setGeometryIcon(document.getElementById(id),id,label);}
