import { LAB_SPECS } from './models';
export const CAR_ART = './images/experiments/car-v4/';
export function installCarArtwork(host: HTMLElement) {
  const stage=host.querySelector<HTMLElement>('.il-stage')!;
  const backdrop=document.createElement('div'); backdrop.className='car-race-background'; backdrop.setAttribute('aria-hidden','true');
  backdrop.innerHTML=`<img class="car-smooth-bg" src="${CAR_ART}track-smooth.png" alt="" draggable="false"><img class="car-rough-bg" src="${CAR_ART}track-rough.png" alt="" draggable="false">`;
  stage.prepend(backdrop);
  host.querySelectorAll<HTMLButtonElement>('[data-road]').forEach(button=>{
    const img=document.createElement('img'); img.src=`${CAR_ART}track-${button.dataset.road}.png`; img.alt=''; img.draggable=false;
    button.querySelector('svg')?.replaceWith(img);
  });
  const quiz=host.querySelector<HTMLElement>('.il-assessment')!; quiz.classList.add('car-picture-quiz');
  quiz.innerHTML=`<div class="car-picture-prompt"><h3 class="bp-sr">${LAB_SPECS.car.question}</h3><img src="${CAR_ART}question-pull.png" alt="手把回力車往後拉，箭頭指向後方"><span class="car-question-mark" aria-hidden="true">?</span><button data-car-read aria-label="聽題目" title="聽題目">🔊</button></div><div class="il-answers">${['spring','paint','air'].map((asset,i)=>`<button data-answer="${i}" aria-label="${LAB_SPECS.car.choices[i]}" aria-pressed="false"><img src="${CAR_ART}${asset}.png" alt="" draggable="false"><span class="bp-sr">${LAB_SPECS.car.choices[i]}</span></button>`).join('')}</div><p class="il-feedback" role="status"><span aria-hidden="true">👆</span><span class="bp-sr">先玩回力車，再點圖片回答。可點喇叭聽題目。</span></p>`;
}
