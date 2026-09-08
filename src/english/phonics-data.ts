export type SoundCard={id:string;group:'vowels'|'consonants';ipa:string;spelling:string;word:string;image:string;hint:string;sentence:string};
const shared=(word:string)=>`images/language-shared-v1/${word}.webp`;
const newer=(word:string)=>`images/english-generated-v3/${word}-v1.webp`;
// General American example-word teaching. IPA is displayed, never sent to TTS.
const vowels=[
  ['æ','a','cat','cat','嘴巴張開，聽 cat 中間的聲音。','I see a cat.'],
  ['ɛ','e','bed','bed','嘴巴稍微打開，聽 bed 中間的聲音。','This is my bed.'],
  ['ɪ','i','fish','fish','短短的聲音，比較 fish 和 sheep。','I see a fish.'],
  ['ɑ','o','box','box','美式 box 的中間音，嘴巴張開。','Open the box.'],
  ['ʌ','u','sun','sun','嘴巴放鬆，聽 sun 中間的聲音。','The sun is up.'],
  ['i','ee','sheep','sheep','嘴角輕輕拉開，比較 sheep 和 fish。','I see a sheep.'],
  ['eɪ','a_e','cake','cake','聲音會滑動，聽 cake 中間的音。','I like cake.'],
  ['oʊ','oa','boat','boat','從張口滑到圓唇，聽 boat。','This is a boat.'],
  ['ʊ','oo','foot','foot','嘴唇微圓，聲音短而放鬆。','This is my foot.'],
  ['u','oo','moon','moon','圓起嘴唇，比較 moon 和 foot。','Look at the moon.'],
  ['aɪ','i_e','kite','kite','從張口滑向較合的嘴形。','I fly a kite.'],
  ['aʊ','ow','cow','cow','先張口，再慢慢圓起嘴唇。','I see a cow.'],
  ['ɔɪ','oy','toy','toy','先圓唇，再把嘴角打開。','This is my toy.'],
  ['ɝ','ir','bird','bird','美式 bird 的中間音有 r 的音色。','I see a bird.'],
  ['ə','a','banana','banana','第一個 a 輕輕帶過；不是重讀的那一節。','I like a banana.'],
];
const consonants=[
  ['b','b','book','book','雙唇合起來再打開，喉嚨會震動。','Open the book.'],
  ['p','p','pig','pig','雙唇合起來再放氣，不加「呃」。','I see a pig.'],
  ['t','t','tent','tent','舌尖輕碰上齒後方，再放開。','This is a tent.'],
  ['d','d','dog','dog','舌尖輕碰上齒後方，喉嚨會震動。','I see a dog.'],
  ['k','c','cat','cat','舌頭後面擋住氣，再放開。','The cat can run.'],
  ['ɡ','g','goat','goat','舌頭後面放開，喉嚨會震動。','I see a goat.'],
  ['f','f','fish','fish','上牙輕碰下唇，吹出氣。','The fish can swim.'],
  ['v','v','van','van','像 f 的嘴形，但喉嚨會震動。','This is a van.'],
  ['θ','th','tooth','tooth','聽 tooth 最後的 th；舌尖輕放齒間吹氣。','This is a tooth.'],
  ['ð','th','mother','mother','聽 mother 中間的 th；舌尖靠齒，喉嚨震動。','I love my mother.'],
  ['s','s','sun','sun','牙齒靠近，讓氣輕輕通過。','The sun is bright.'],
  ['z','z','zebra','zebra','像 s 的嘴形，但喉嚨會震動。','I see a zebra.'],
  ['ʃ','sh','shoe','shoe','嘴唇微圓，像輕聲請人安靜。','This is my shoe.'],
  ['ʒ','s','measure','ruler','聽 measure 中間的音；像 sh，但喉嚨震動。','We measure with a ruler.'],
  ['tʃ','ch','chair','chair','先擋住氣，再向外放出。','Sit on the chair.'],
  ['dʒ','j','juice','juice','聽 juice 開頭的音，喉嚨會震動。','I like juice.'],
  ['m','m','moon','moon','雙唇合起來，聲音從鼻子通過。','Look at the moon.'],
  ['n','n','nose','nose','舌尖靠上方，聲音從鼻子通過。','This is my nose.'],
  ['ŋ','ng','ring','ring','聽 ring 最後的音；不要再加 g。','This is a ring.'],
  ['l','l','lion','lion','舌尖輕碰上方，讓聲音通過。','I see a lion.'],
  ['r','r','rabbit','rabbit','舌頭不要碰上顎，聽美式 r。','The rabbit can hop.'],
  ['j','y','yellow','yellow','音標 j 是 yellow 開頭的音，不是字母 J。','The sun is yellow.'],
  ['w','w','water','water','先圓唇，再打開。','I drink water.'],
  ['h','h','hat','hat','輕輕呼氣，不要用力摩擦喉嚨。','This is my hat.'],
];
export const SOUND_CARDS:SoundCard[]=[...vowels.map(v=>[...v,'vowels']),...consonants.map(v=>[...v,'consonants'])].map(([ipa,spelling,word,key,hint,sentence,group],i)=>({id:`sound-${i}`,group:group as SoundCard['group'],ipa,spelling,word,image:['toy','van','nose'].includes(key)?newer(key):key==='mother'?'images/language-shared-v2/mother-v1.webp':shared(key),hint,sentence}));
export function shuffled<T>(values:T[],random= Math.random){const a=values.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
export function uniqueWords(cards:SoundCard[]){return cards.filter((c,i,a)=>a.findIndex(x=>x.word===c.word)===i);}
/** Selection is reversible. Only an explicit check can lock or score it. */
export class AnswerGate{
  selected='';checked=false;
  constructor(readonly answer:string,readonly options:string[]){}
  select(id:string){if(!this.checked&&this.options.includes(id))this.selected=id;}
  check(){if(!this.selected||this.checked)return undefined;this.checked=true;return this.selected===this.answer;}
}
