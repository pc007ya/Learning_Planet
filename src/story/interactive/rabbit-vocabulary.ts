const entries=[
 ['rabbit','兔子','rabbit.png'],['seed','種子','seed.png'],['soil','土壤','pot.png'],['root','根','root.png'],['sprout','嫩芽','sprout.png'],['dig','挖土','scoop.png'],['bury','埋入','seed.png'],['scoop','小鏟子','scoop.png'],['sprinkle','灑水','can.png'],['sunshine','陽光','☀️'],['damp','微濕的','pot.png'],['measure','測量','📏'],['ruler','尺','📏'],['record','記錄','record.png'],['patient','有耐心的','rabbit-pencil.png'],['daily','每天的','record.png'],['tall','高的','plant.png'],['taller','更高的','sunflower.png'],['big','大的','seed.png'],['bigger','更大的','seed.png']];
export const vocabularyIcon='<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M12 5v15M12 5C9 3 5 3 2 4v15c4-1 7-1 10 1 3-2 6-2 10-1V4c-3-1-7-1-10 1Z"/></svg>';
export function openRabbitVocabulary(say:(text:string)=>void,stop:()=>void,book?:{title:string;entries:string[][];visual?:(word:string)=>HTMLElement|undefined}){
 if(document.querySelector('.vocabulary-dialog'))return;
 const previous=document.activeElement as HTMLElement|null;stop();
 const dialog=document.createElement('dialog');dialog.className='vocabulary-dialog';dialog.setAttribute('aria-label',book?book.title+' · 單字小書':'小兔園丁的單字小書');
 const items=book?.entries||entries;
 dialog.innerHTML='<header><div><small>MY LITTLE WORD BOOK · 20 WORDS</small><h2>小兔園丁的單字小書</h2><p>點圖片或英文，聽聽怎麼唸。</p></div><button class="vocab-close" aria-label="關閉單字小書">×</button></header><label class="vocab-toggle"><input type="checkbox" checked> 顯示中文</label><div class="vocab-grid"></div>';
 dialog.querySelector('h2')!.textContent=book?book.title+' · 單字小書':'小兔園丁的單字小書';dialog.querySelector('small')!.textContent='MY LITTLE WORD BOOK · '+items.length+' WORDS';
 const grid=dialog.querySelector('.vocab-grid')!;
 items.forEach(([word,zh,art])=>{const card=document.createElement('button');card.className='vocab-card';card.setAttribute('aria-label',`朗讀 ${word}，${zh}`);const visual=art.endsWith('.png')?`<img src="images/story/rabbit-v1/${art}" alt="">`:`<span class="vocab-symbol">${art}</span>`;card.innerHTML=`<span class="vocab-picture ${word}">${visual}</span><strong>${word} <span aria-hidden="true">♬</span></strong><span class="vocab-chinese">${zh}</span>`;const custom=book?.visual?.(word);if(custom)card.querySelector('.vocab-picture')!.replaceChildren(custom);card.onclick=()=>{grid.querySelectorAll('.speaking').forEach(n=>n.classList.remove('speaking'));card.classList.add('speaking');say(word);};grid.append(card);});
 dialog.querySelector('input')!.onchange=e=>dialog.classList.toggle('hide-chinese',!(e.target as HTMLInputElement).checked);
 dialog.querySelector<HTMLButtonElement>('.vocab-close')!.onclick=()=>dialog.close();
 dialog.onclick=e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}};
 dialog.onclose=()=>{stop();dialog.remove();previous?.focus();};document.body.append(dialog);dialog.showModal();
}
