const visuals:Record<string,{asset:string;cue:string;caption?:string}>={
 game:{asset:'ball.svg',cue:'pass → goal'},rule:{asset:'rule-card.svg',cue:'1 → 2'},ball:{asset:'ball.svg',cue:'↓'},throw:{asset:'ball.svg',cue:'↗'},catch:{asset:'ball.svg',cue:'↘ hands'},kick:{asset:'ball.svg',cue:'foot →'},goal:{asset:'hoop.svg',cue:'ball →'},field:{asset:'rooftop.webp',cue:'↓',caption:'place to play'},score:{asset:'hoop.svg',cue:'✓ 1'},point:{asset:'hoop.svg',cue:'1'},hit:{asset:'ball.svg',cue:'→ ●'},player:{asset:'mira-standing.webp',cue:'↓'},match:{asset:'ball.svg',cue:'two teams'},move:{asset:'ball.svg',cue:'→'},run:{asset:'friend.webp',cue:'→ →'},pass:{asset:'ball.svg',cue:'Mira → Gail'},fair:{asset:'rule-card.svg',cue:'✓ ✓'},begin:{asset:'ball.svg',cue:'▶'},end:{asset:'ball.svg',cue:'■'},crowd:{asset:'friend.webp',cue:'👥'}
};
export function magicBallCard(word:string):HTMLElement{
 const item=visuals[word],wrap=document.createElement('div');wrap.className='layered-word-visual';if(!item)return wrap;
 const image=document.createElement('img');image.src=`images/story/magic-ball-v1/${item.asset}`;image.alt='';wrap.append(image);
 const cue=document.createElement('span');cue.className='concept-cue';cue.textContent=item.cue;wrap.append(cue);
 if(item.caption){const caption=document.createElement('small');caption.textContent=item.caption;wrap.append(caption);}
 return wrap;
}
