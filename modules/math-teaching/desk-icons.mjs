import {setGeometryIcon} from './geometry-icons.mjs';
export function simplifyDesk(root){
 const symbols={exit:'←',play:'▶',step:'≫',reset:'↶',review:'⟳','mode-review':'⟳',next:'⚄','replay-review':'🔊',hint:'💡',place:'＋','3d-next':'＋',replay:'▶'};
 root.querySelectorAll('button[data-action]').forEach(b=>{const action=b.dataset.action,label=b.getAttribute('aria-label')||b.textContent.trim();if(action==='camera'){setGeometryIcon(b,b.getAttribute('aria-pressed')==='true'?'home':'top',label);return;}if(action==='exchange'){b.setAttribute('aria-label',label);b.title=label;b.innerHTML=label.startsWith('10')?'▦ → ▰':'▰ → ▦';return;}if(!symbols[action])return;b.setAttribute('aria-label',label);b.title=label;b.textContent=action==='play'&&label.includes('暫停')?'Ⅱ':symbols[action];b.classList.add('desk-symbol');});
 root.querySelectorAll('form.answer button').forEach(b=>{b.setAttribute('aria-label','確認答案');b.title='確認答案';b.textContent='✓';});
}
