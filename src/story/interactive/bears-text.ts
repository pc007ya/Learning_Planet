import type {ReadingLevel} from './dragon-text';
const rows=[
 [
  "A little flashlight",
  "A flashlight!|It shines.",
  "A flashlight rolls in.|Its light makes a doorway.",
  "A little flashlight rolls across Gail’s familiar rug.|Its warm beam opens a doorway to a cottage.",
  "手電筒！|它亮了。",
  "手電筒滾進來。|燈光變成一道入口。",
  "小手電筒滾過瑜瑜熟悉的地毯。|溫暖的光束打開通往小屋的入口。",
  "flashlight"
 ],
 [
  "Three bears in the dark",
  "It is dark.|Three bears wait.",
  "Three bears cannot sleep.|The room is dark.",
  "Gail finds three bears awake in a dim cottage.|Even the tallest bear feels uneasy in the dark.",
  "好暗。|三隻小熊等著。",
  "三隻小熊睡不著。|房間很暗。",
  "瑜瑜發現三隻小熊在昏暗的小屋裡醒著。|連最高的小熊也對黑暗感到不安。",
  "dark"
 ],
 [
  "What was that noise?",
  "A noise!|What is it?",
  "The bears hear a noise.|They stay close to Gail.",
  "A strange noise comes from the other side of the room.|The bears move closer, and Gail listens with them.",
  "有聲音！|是什麼？",
  "小熊們聽到聲音。|牠們靠近瑜瑜。",
  "房間另一邊傳來奇怪的聲音。|小熊們靠近，瑜瑜陪牠們一起聽。",
  "noise"
 ],
 [
  "A shadow on the wall",
  "A shadow!|It looks big.",
  "A big shadow moves.|It is on the wall.",
  "A dark shadow stretches across the wall.|The smallest bear thinks it looks like something with long arms.",
  "影子！|看起來好大。",
  "大影子動了。|它在牆上。",
  "一道黑影伸展在牆上。|最小的小熊覺得它像長著長手臂的東西。",
  "shadow wall"
 ],
 [
  "Do not guess too soon",
  "A monster?|Let us look.",
  "The bears guess what it is.|Gail says, “Let us look.”",
  "The bears guess that a monster is making the shadow.|Gail suggests describing what they can see before deciding what it is.",
  "怪物嗎？|我們看看。",
  "小熊們猜它是什麼。|瑜瑜說：「我們看看。」",
  "小熊們猜是怪物投出影子。|瑜瑜建議先說出看到的樣子，再判斷是什麼。",
  "guess"
 ],
 [
  "Look at the shape",
  "What shape?|Look closely.",
  "Gail looks at the shape.|It has thin, bent parts.",
  "Gail asks the bears to study the shape together.|They notice several thin parts that bend away from one long line.",
  "什麼形狀？|仔細看。",
  "瑜瑜看著形狀。|它有細細彎彎的部分。",
  "瑜瑜請小熊們一起觀察形狀。|牠們發現好幾段細長部分從一條長線向外彎。",
  "shape"
 ],
 [
  "Something outside",
  "Look outside.|A branch moves.",
  "Gail looks outside.|A branch moves by the window.",
  "Through the window, Gail spots a branch moving outside.|Its little twigs have the same bends as the shadow.",
  "看看外面。|樹枝動了。",
  "瑜瑜看向外面。|窗邊樹枝在動。",
  "透過窗戶，瑜瑜發現外面有根樹枝在動。|小枝條的彎曲形狀和影子一樣。",
  "outside branch"
 ],
 [
  "Safe inside together",
  "We are inside.|Look together.",
  "The bears stay inside.|They look through the window.",
  "The bears stay inside with Gail while they observe the branch.|They do not need to go out alone to understand what they see.",
  "我們在裡面。|一起看。",
  "小熊們留在裡面。|牠們透過窗戶看。",
  "小熊們留在屋內，和瑜瑜一起觀察樹枝。|牠們不用獨自走出去，也能弄清楚看到的東西。",
  "inside"
 ],
 [
  "Behind the curtain",
  "Behind here?|A curtain moves.",
  "The curtain moves a little.|What is behind it?",
  "The middle bear notices another shape behind the curtain.|Gail shines the flashlight toward it while everyone stays together.",
  "在後面嗎？|窗簾動了。",
  "窗簾輕輕動。|後面是什麼？",
  "中等個頭的小熊注意到窗簾後方還有一個形狀。|大家待在一起，瑜瑜把手電筒照向那裡。",
  "behind curtain"
 ],
 [
  "Beside the window",
  "A chair!|Beside the window.",
  "A chair is beside the window.|There is no monster.",
  "The light reveals a rocking chair beside the window.|Its curved back had looked unfamiliar through the moving curtain.",
  "椅子！|在窗戶旁。",
  "椅子在窗戶旁。|沒有怪物。",
  "燈光照出窗戶旁的搖椅。|隔著晃動的窗簾，彎曲椅背看起來才會陌生。",
  "beside"
 ],
 [
  "Hear the creak",
  "Creak, creak.|The chair!",
  "The chair rocks.|It makes a little creak.",
  "Gail gently moves the rocking chair and they hear a creak.|The bears recognize the sound they heard before.",
  "吱呀，吱呀。|是椅子！",
  "椅子搖動。|它發出輕輕的吱呀聲。",
  "瑜瑜輕輕推動搖椅，大家聽見吱呀聲。|小熊們認出之前聽到的聲音。",
  "creak"
 ],
 [
  "A mark on the floor",
  "On the floor!|Another shadow.",
  "The light points down.|A shadow is on the floor.",
  "Gail lowers the flashlight toward the floor.|The bears see that the shadow moves when the light changes direction.",
  "在地板上！|另一個影子。",
  "燈光朝下。|影子在地板上。",
  "瑜瑜把手電筒往地板照。|小熊們看見，燈光改變方向，影子也跟著移動。",
  "floor"
 ],
 [
  "A round shadow",
  "A round ball.|A round shadow.",
  "Gail lights a ball.|Its shadow is round.",
  "Gail places a ball in the beam and points out its round shadow.|The bears compare the outline with the object that made it.",
  "圓圓的球。|圓圓的影子。",
  "瑜瑜照著球。|它的影子是圓的。",
  "瑜瑜把球放進光束，指出圓圓的影子。|小熊們比較影子輪廓和投出影子的物件。",
  "round"
 ],
 [
  "A straight edge",
  "A straight line.|Look here.",
  "The chair has a straight part.|Gail follows the line.",
  "The tallest bear finds a straight edge on the chair.|Gail follows its line with the beam so everyone can compare it with the curved back.",
  "直線。|看這裡。",
  "椅子有筆直的部分。|瑜瑜沿著線看。",
  "最高的小熊找到椅子上一條筆直的邊。|瑜瑜讓光束沿著它移動，大家便能和彎曲椅背比較。",
  "straight"
 ],
 [
  "Make it short",
  "A short shadow!|Move the light.",
  "Gail moves the light.|The shadow gets short.",
  "Gail changes the distance between the light and the ball.|The shadow on the wall becomes smaller, with a short outline.",
  "短影子！|移動燈光。",
  "瑜瑜移動燈光。|影子變短了。",
  "瑜瑜改變燈光和球之間的距離。|牆上的影子變小，輪廓也變短。",
  "short"
 ],
 [
  "Explain what you found",
  "It is a branch.|Now I know.",
  "The little bear can explain.|“A branch made that shadow.”",
  "The smallest bear can now explain the first shadow.|It came from a branch, not from the creature they had imagined.",
  "是樹枝。|我知道了。",
  "小熊能解釋。|「樹枝投出那個影子。」",
  "最小的小熊現在能解釋最初的影子。|它來自樹枝，而不是牠們想像的生物。",
  "explain"
 ],
 [
  "Look, then guess",
  "Look first.|Then guess.",
  "They look before they guess.|They know what to check.",
  "The bears practice looking for a sound or shadow’s source before they guess.|If they are unsure, they can stay together and ask for help.",
  "先看。|再猜。",
  "牠們先看再猜。|牠們知道要查什麼。",
  "小熊們練習先找聲音或影子的來源，再做猜測。|如果還不確定，就待在一起並尋求幫忙。",
  "guess"
 ],
 [
  "Brave can be gentle",
  "I feel brave.|You are here.",
  "The bears feel brave together.|They can still ask for help.",
  "The bears feel a little braver after learning what made the sounds.|Being brave does not mean never feeling afraid; they can ask for company.",
  "我覺得勇敢。|你在這裡。",
  "小熊們在一起覺得勇敢。|牠們仍然可以求助。",
  "知道聲音從哪裡來後，小熊們覺得更勇敢一點。|勇敢不代表永遠不害怕；牠們可以請人陪伴。",
  "brave"
 ],
 [
  "A familiar room",
  "The same room.|Good night.",
  "The room is dark again.|The bears know its shapes.",
  "The flashlight rests nearby as the bears settle down.|The room is dark again, but its shapes and sounds feel familiar now.",
  "同一個房間。|晚安。",
  "房間又暗了。|小熊認得那些形狀。",
  "小熊們準備休息，手電筒就放在附近。|房間又暗下來，但那些形狀和聲音現在很熟悉。",
  "dark"
 ],
 [
  "Home with the light",
  "My flashlight.|Look and learn.",
  "Gail is home again.|She puts her flashlight away.",
  "Back in her familiar bedroom, Gail puts the flashlight beside her bed.|She remembers that looking together can turn a frightening guess into something understood.",
  "我的手電筒。|觀察、學習。",
  "瑜瑜回家了。|她收好手電筒。",
  "回到熟悉的臥室，瑜瑜把手電筒放在床邊。|她記得，一起觀察能把令人害怕的猜測變成理解。",
  "flashlight"
 ]
];
export const bearsTitles=rows.map(r=>r[0]);
export const bearsWords=rows.map(r=>r[7].split(' '));
export const bearsText=rows.map(r=>({A:r[1].split('|'),B:r[2].split('|'),C:r[3].split('|')}));
export function bearsChinese(page:number,level:ReadingLevel){return rows[page][{A:4,B:5,C:6}[level]].split('|');}
