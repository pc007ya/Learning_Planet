import {setCameraIcons} from './geometry-icons.mjs';
setCameraIcons();
const mode=new URLSearchParams(location.search).get('mode');
if(location.pathname.endsWith('/math-capacity.html'))await import('./spatial.mjs');
else if(mode==='capacity')location.replace('math-capacity.html');
else if(mode==='count')location.replace('math-geometry.html?mode=space');
else if(['shapes','space'].includes(mode))await import('./spatial.mjs');
else await import('./geometry.mjs');
