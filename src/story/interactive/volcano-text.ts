import type {ReadingLevel} from './dragon-text';
// Teaching targets; not measured Lexile scores.
const rows=[
 [
  "A warm little stone",
  "A warm stone.|It glows!",
  "Gail holds a warm stone.|A little light rises from it.",
  "A small volcano-shaped stone feels warm in Gail’s hands.|A curl of light rises from it and opens a doorway to a sunny village.",
  "暖暖的石頭。|它發光了！",
  "瑜瑜捧著溫暖的石頭。|一小束光從中升起。",
  "瑜瑜手中的火山形小石頭摸起來暖暖的。|一道捲曲的光從中升起，打開通往陽光村莊的門。",
  "warm"
 ],
 [
  "Under the volcano",
  "A volcano!|Far away.",
  "Gail sees a volcano far away.|The village is quiet.",
  "Gail steps into a village beneath a distant green volcano.|Nothing is erupting; flowers line the quiet paths around the square.",
  "火山！|在遠方。",
  "瑜瑜看見遠方的火山。|村莊很安靜。",
  "瑜瑜走進遠方綠色火山下的村莊。|沒有火山爆發；安靜的廣場小路旁開滿了花。",
  "volcano"
 ],
 [
  "Meet Tobi",
  "A little monster.|Hello, Tobi!",
  "Tobi is a little monster.|He wants to play a ball game.",
  "Tobi is a little volcano monster who lives near the square.|He has set up a wooden ball game and hopes his friend will play.",
  "小怪獸。|你好，托比！",
  "托比是小怪獸。|他想玩滾球遊戲。",
  "托比是住在廣場附近的小火山怪。|他擺好了木製滾球遊戲，希望朋友陪他玩。",
  "monster"
 ],
 [
  "Not right now",
  "A friend!|She must go.",
  "Squirrel has a parcel to deliver.|She cannot play right now.",
  "Squirrel arrives with a parcel that she needs to deliver.|When she says she cannot stay yet, Tobi thinks she does not want to play with him.",
  "朋友！|她得走了。",
  "松鼠有包裹要送。|她現在還不能玩。",
  "松鼠帶著必須送出的包裹來了。|她說現在還不能留下時，托比以為她不想陪自己玩。",
  "notice"
 ],
 [
  "A hot feeling",
  "His face feels hot.|He is upset.",
  "Tobi feels hot inside.|He wanted his friend to stay.",
  "Tobi feels hot as he watches Squirrel turn toward the path.|He is disappointed, but has not yet found the words to explain why.",
  "他的臉熱熱的。|他不開心。",
  "托比覺得心裡熱熱的。|他希望朋友留下。",
  "托比看著松鼠轉向小路，感到一陣熱。|他很失望，卻還不知道怎麼說出原因。",
  "hot"
 ],
 [
  "Heat in his cheeks",
  "Red cheeks.|So hot!",
  "Heat rises in each cheek.|Tobi’s face turns red.",
  "Heat rises in Tobi’s cheeks, and his face turns red.|Gail notices the change before he has said anything about his feelings.",
  "紅紅的臉頰。|好熱！",
  "熱意爬上兩邊臉頰。|托比的臉變紅了。",
  "熱意爬上托比的臉頰，他的臉變紅了。|托比還沒說出感受，瑜瑜就注意到這個變化。",
  "heat cheek"
 ],
 [
  "Tight little fists",
  "A tight fist.|Then two.",
  "Tobi makes two tight fists.|His hands feel tense.",
  "Tobi closes his hands into tight fists and holds them near his chest.|His arms feel tense, as if he is holding on to something very hard.",
  "握緊的拳頭。|兩隻都是。",
  "托比握緊兩隻拳頭。|他的手很緊繃。",
  "托比握緊拳頭，把手放在胸前。|他的手臂很緊繃，像是用力抓著什麼東西。",
  "tight fist tense"
 ],
 [
  "Shoulders up",
  "Shoulders up.|A stomp!",
  "Tobi lifts each shoulder.|He stamps one foot on the ground.",
  "Tobi pulls his shoulders up and gives a loud stomp.|A little dust jumps beside his foot as he struggles with his disappointment.",
  "肩膀抬高。|跺一下腳！",
  "托比抬高雙肩。|他用一隻腳重踩地面。",
  "托比聳起肩膀，大聲跺腳。|他還在為失望難受，腳邊的小灰塵跳了起來。",
  "shoulder stomp"
 ],
 [
  "A burst of smoke",
  "A burst of smoke!|Gail stays near.",
  "Smoke comes from Tobi’s head.|Gail gives him some space.",
  "A sudden burst of smoke puffs from the top of Tobi’s head.|Gail stays nearby with enough space between them, ready to listen.",
  "冒出一團煙！|瑜瑜在附近。",
  "煙從托比頭上冒出。|瑜瑜給他一些空間。",
  "一團煙突然從托比頭頂冒出。|瑜瑜在附近留出足夠的距離，準備好聆聽。",
  "burst smoke"
 ],
 [
  "Notice the signals",
  "Notice your body.|What feels tight?",
  "Gail asks Tobi to notice his body.|Each change is a signal.",
  "Gail asks Tobi to notice his cheeks, hands, and shoulders.|Each change can be a signal that a feeling is getting stronger.",
  "留意身體。|哪裡緊緊的？",
  "瑜瑜請托比留意身體。|每個變化都是訊號。",
  "瑜瑜請托比注意臉頰、手和肩膀。|每個變化都可能是感受正在變強的訊號。",
  "notice signal"
 ],
 [
  "A shady place",
  "A cool place.|Sit with me.",
  "They move to a cool, shady spot.|Tobi can take a moment.",
  "Tobi chooses a cool spot beside the bench, away from the busy path.|Taking a moment gives him room to work out what he wants to say.",
  "涼爽的地方。|陪我坐坐。",
  "他們移到涼爽的樹蔭處。|托比可以歇一會兒。",
  "托比選了長椅旁涼爽的地方，離開忙碌的小路。|停一會兒，讓他有時間想清楚自己想說什麼。",
  "cool"
 ],
 [
  "Open your hands",
  "Loose hands.|Open palms.",
  "Tobi lets his fingers go loose.|His fists slowly open.",
  "Tobi lets his fingers grow loose until his palms are open.|He does not have to pretend he is happy to give his hands a rest.",
  "鬆開手。|攤開手掌。",
  "托比放鬆手指。|拳頭慢慢打開。",
  "托比鬆開手指，直到手掌攤開。|他不必假裝開心，也可以讓雙手休息。",
  "loose fist"
 ],
 [
  "Relax a little",
  "Relax your shoulders.|Let them down.",
  "Tobi lets his shoulders drop.|His body begins to relax.",
  "Tobi lowers his shoulders and lets his arms relax.|He still feels disappointed, but now it is easier to speak without shouting.",
  "放鬆肩膀。|讓它們放下。",
  "托比放下肩膀。|身體開始放鬆。",
  "托比放下肩膀，讓手臂放鬆。|他仍然失望，但現在比較能不大喊地說話。",
  "relax shoulder"
 ],
 [
  "Say what happened",
  "I wanted to play.|I felt sad.",
  "Tobi says why he is upset.|“I wanted you to stay.”",
  "When Squirrel returns, Tobi explains, “I wanted to play, and I felt left out.”|He tells her what happened for him instead of deciding what she meant.",
  "我想要玩。|我很難過。",
  "托比說出不開心的原因。|「我希望你留下。」",
  "松鼠回來時，托比解釋：「我想玩，覺得自己被冷落了。」|他說出自己的經歷，而不是自行認定對方的意思。",
  "calm"
 ],
 [
  "Hear the other part",
  "A parcel first.|Then we can play.",
  "Squirrel explains about the parcel.|She wanted to play later.",
  "Squirrel explains that someone was waiting for the parcel.|She wanted to play after delivering it, and Tobi had missed that part.",
  "先送包裹。|然後我們可以玩。",
  "松鼠解釋包裹的事。|她想晚一點再玩。",
  "松鼠解釋，有人正在等那個包裹。|她想送完再玩，而托比之前沒有聽見這部分。",
  "notice"
 ],
 [
  "Make a small plan",
  "Can we play now?|Yes, together.",
  "The parcel is delivered.|They agree to play together.",
  "Now that the parcel is delivered, Tobi asks if they can play together.|They agree on a turn each, so both know what to expect.",
  "現在可以玩嗎？|可以，一起玩。",
  "包裹送到了。|他們說好一起玩。",
  "包裹已經送到，托比問現在能不能一起玩。|他們說好每人輪流一次，讓彼此都知道接下來會怎麼做。",
  "clear"
 ],
 [
  "A smaller signal",
  "A tight hand?|I notice it.",
  "A ball misses the hole.|Tobi notices his hand tighten.",
  "Tobi’s first ball misses the hole, and one hand begins to tighten again.|This time he notices the small signal before a big puff appears.",
  "手又緊了？|我注意到了。",
  "球沒進洞。|托比發現手又握緊了。",
  "托比的第一顆球沒有進洞，一隻手又開始握緊。|這次他在冒出大團煙之前，就注意到小小的訊號。",
  "signal tight"
 ],
 [
  "Try the next turn",
  "Relax.|Try again.",
  "Tobi opens his hand.|He is calm enough to try again.",
  "Tobi opens his hand and asks for another turn after Squirrel.|Feeling calm does not mean every ball goes in; it helps him choose what to do next.",
  "放鬆。|再試一次。",
  "托比張開手。|他平靜下來，可以再試。",
  "托比張開手，問能不能等松鼠玩完再試一次。|平靜不代表每一球都會進洞，而是幫助他選擇下一步。",
  "calm relax"
 ],
 [
  "A quiet curl of steam",
  "Warm water.|A little steam.",
  "They rest with warm water.|Steam curls above the cup.",
  "After the game, a little steam curls above a cup of warm water.|Tobi smiles at the gentle curl; this comes from the water, not an upset feeling.",
  "溫水。|一點蒸氣。",
  "他們喝著溫水休息。|蒸氣在杯子上方捲起。",
  "遊戲後，一點蒸氣在溫水杯上方捲起。|托比對著輕柔的蒸氣微笑；這來自水，不是不開心的感受。",
  "steam warm"
 ],
 [
  "Bring the lesson home",
  "Home again.|Notice, then choose.",
  "The stone brings Gail home.|She can notice her body too.",
  "The glowing stone brings Gail back to her familiar room.|She remembers that body signals can help her notice a feeling and choose what to do next.",
  "回家了。|察覺，再選擇。",
  "石頭帶瑜瑜回家。|她也可以留意身體。",
  "發光的石頭帶瑜瑜回到熟悉的房間。|她記得，身體訊號能幫她察覺感受，再選擇下一步。",
  "notice signal"
 ]
];
export const volcanoTitles=rows.map(r=>r[0]);
export const volcanoWords=rows.map(r=>r[7].split(' '));
export const volcanoText=rows.map(r=>({A:r[1].split('|'),B:r[2].split('|'),C:r[3].split('|')}));
export function volcanoChinese(page:number,level:ReadingLevel){return rows[page][{A:4,B:5,C:6}[level]].split('|');}
