import type {ReadingLevel} from './dragon-text';
const rows=[
 [
  "A ribbon at home",
  "A wand!|A pink ribbon.",
  "Gail sees a wand.|It has a pink ribbon.",
  "A small wand rests on Gail’s rug, wrapped in a pink ribbon.|As she reaches toward it, the ribbon begins to glow.",
  "一根魔杖！|粉紅緞帶。",
  "瑜瑜看見魔杖。|上面有粉紅緞帶。",
  "小魔杖放在瑜瑜的地毯上，纏著粉紅緞帶。|她伸出手，緞帶便開始發光。"
 ],
 [
  "Through the ribbon",
  "A fairy!|Come with me.",
  "The ribbon makes a path.|A fairy waves to Gail.",
  "The ribbon curls out from the wand and opens a bright doorway.|A smiling fairy invites Gail into a meadow village.",
  "一位仙女！|跟我來。",
  "緞帶變成一條路。|仙女向瑜瑜招手。",
  "緞帶從魔杖繞出，打開明亮的入口。|微笑的仙女邀瑜瑜進入草地村莊。"
 ],
 [
  "Yes to a bucket",
  "“Yes!”|“I can help.”",
  "“Can you carry this?”|“Yes,” says Fairy.",
  "Squirrel asks Fairy to carry a bucket to the picnic.|She says yes before checking what she has already promised.",
  "「好！」|「我能幫忙。」",
  "「妳能搬這個嗎？」|「好，」仙女說。",
  "松鼠請仙女把水桶搬到野餐地點。|仙女還沒確認自己答應過哪些事，就說了好。"
 ],
 [
  "One more parcel",
  "A parcel.|“Please help.”",
  "“This parcel, please.”|Fairy says yes again.",
  "Hedgehog arrives with a wrapped parcel and asks for help.|Fairy agrees to carry that as well, although her morning is filling up.",
  "一個包裹。|「請幫忙。」",
  "「請幫忙搬包裹。」|仙女又答應了。",
  "刺蝟帶來包好的包裹，請仙女幫忙。|仙女也答應搬，雖然上午已排滿事情。"
 ],
 [
  "A busy morning",
  "So busy!|One more job.",
  "Fairy is busy.|She puts more things on the cart.",
  "Fairy ties ribbons, carries parcels, and prepares the picnic.|Every new request adds another job to her busy morning.",
  "好忙喔！|又一件事。",
  "仙女很忙。|她把更多東西放上推車。",
  "仙女綁緞帶、搬包裹，還要準備野餐。|每個新請求，都讓忙碌的上午多一件工作。"
 ],
 [
  "Too heavy",
  "It is heavy.|Pull, pull.",
  "The cart is heavy.|Fairy cannot move it alone.",
  "The loaded cart becomes too heavy for Fairy to move comfortably.|She pulls harder, but that does not make the load smaller.",
  "好重。|拉呀，拉。",
  "推車很重。|仙女自己拉不動。",
  "裝滿的推車太重，仙女已經拉得很吃力。|她更加用力，負擔卻沒有變少。"
 ],
 [
  "The cart is full",
  "It is full.|No more space.",
  "The cart is full.|There is no space for more.",
  "Gail notices that the cart is full, with parcels stacked above the sides.|Fairy still looks for a place to squeeze in another job.",
  "裝滿了。|沒有空間。",
  "推車滿了。|沒有地方再放。",
  "瑜瑜發現推車已滿，包裹堆得比車邊還高。|仙女仍想找個空間，再塞進一件工作。"
 ],
 [
  "An empty place",
  "An empty blanket.|No Fairy.",
  "The picnic blanket is empty.|Fairy has no time to sit.",
  "Fairy’s own picnic place is still empty beside the tree.|She has spent so much time helping that she has missed her chance to sit down.",
  "空空的野餐墊。|仙女不在。",
  "野餐墊空著。|仙女沒時間坐下。",
  "樹旁屬於仙女的野餐位置仍空著。|她一直忙著幫忙，連坐下來的時間都錯過了。"
 ],
 [
  "Too tired",
  "“I am tired.”|Gail sits.",
  "Fairy is tired.|Gail sits beside her.",
  "Fairy sits on the grass and admits that she is tired.|Gail stays beside her instead of giving her another task.",
  "「我累了。」|瑜瑜坐下。",
  "仙女累了。|瑜瑜坐在旁邊。",
  "仙女坐在草地上，承認自己累了。|瑜瑜陪她坐著，沒有再交給她工作。"
 ],
 [
  "Time to rest",
  "Rest now.|The jobs can wait.",
  "“You can rest,” says Gail.|The cart can wait.",
  "Gail reminds Fairy that rest is something she needs, too.|They leave the cart where it is and take a quiet moment together.",
  "現在休息。|工作可以等。",
  "「妳可以休息，」瑜瑜說。|推車可以等。",
  "瑜瑜提醒仙女，休息也是她需要的。|她們把推車留在原地，一起安靜待一會兒。"
 ],
 [
  "A promise matters",
  "“I made a promise.”|“I need help.”",
  "“I made a promise,” says Fairy.|“I need to tell my friends.”",
  "Fairy worries about the promise she made to each friend.|Gail suggests explaining what she can manage, rather than quietly struggling alone.",
  "「我答應了。」|「我需要幫忙。」",
  "「我答應了，」仙女說。|「我要告訴朋友。」",
  "仙女擔心自己對每位朋友的承諾。|瑜瑜建議她說清楚能負擔多少，不必默默獨自硬撐。"
 ],
 [
  "Enough for today",
  "This is enough.|One small job.",
  "“One job is enough today.”|Fairy puts the parcel down.",
  "Fairy looks at the work and decides that one small job is enough for today.|She can tell her friends now, while there is still time to share the tasks.",
  "這樣夠了。|一件小事。",
  "「今天一件事就夠了。」|仙女放下包裹。",
  "仙女看看工作，決定今天做一件小事就夠了。|她可以現在告訴朋友，還來得及一起分工。"
 ],
 [
  "A gentle no",
  "“No, thank you.”|“I need rest.”",
  "“No, thank you,” says Fairy.|“I cannot carry more.”",
  "When another request arrives, Fairy holds up her hand gently.|“No, thank you. I cannot carry more today,” she explains.",
  "「不了，謝謝。」|「我要休息。」",
  "「不了，謝謝，」仙女說。|「我不能再搬了。」",
  "又有人提出請求時，仙女輕輕舉起手。|她解釋：「不了，謝謝，今天我不能再搬更多東西了。」"
 ],
 [
  "Friends understand",
  "“That is OK.”|Friends stay.",
  "Her friends say, “That is OK.”|They still want her at the picnic.",
  "Squirrel and Hedgehog accept Fairy’s answer without being angry.|They want her company at the picnic, not a friend who does every job.",
  "「沒關係。」|朋友還在。",
  "朋友說：「沒關係。」|他們仍想和她野餐。",
  "松鼠和刺蝟接受仙女的回答，沒有生氣。|他們想和她一起野餐，不是要她做完所有工作。"
 ],
 [
  "Choose one job",
  "Choose one.|The ribbon!",
  "Fairy can choose one job.|She wants to tie the ribbon.",
  "Fairy chooses a small job she has time and energy for.|She will tie the picnic ribbon while her friends carry their own things.",
  "選一件。|緞帶！",
  "仙女可以選一件工作。|她想綁緞帶。",
  "仙女選了時間與體力都能負擔的小工作。|她會綁野餐緞帶，朋友則搬自己的物品。"
 ],
 [
  "Carry your own",
  "Carry the bucket.|Carry the parcel.",
  "Squirrel carries the bucket.|Hedgehog carries the parcel.",
  "Squirrel takes the bucket from the cart, and Hedgehog collects the parcel.|With everyone carrying a little, no one has to carry everything.",
  "搬水桶。|搬包裹。",
  "松鼠搬水桶。|刺蝟搬包裹。",
  "松鼠從推車取走水桶，刺蝟拿回包裹。|每個人搬一點，就不必由一個人搬全部。"
 ],
 [
  "Room to sit",
  "The cart is empty.|We can sit.",
  "The cart is empty now.|Fairy sits at the picnic.",
  "The cart is empty, and each friend has finished a manageable task.|Fairy finally has time to join the picnic instead of serving it from a distance.",
  "推車空了。|我們能坐下。",
  "推車現在空了。|仙女坐下野餐。",
  "推車空了，每位朋友也完成了能負擔的工作。|仙女終於有時間參加野餐，不必一直在旁忙碌。"
 ],
 [
  "A picnic together",
  "A picnic!|A place for all.",
  "They enjoy the picnic.|There is a place for Fairy.",
  "Everyone brings something to the picnic and makes room for Fairy.|The meal feels easier when preparing it is a shared job.",
  "野餐！|人人有位置。",
  "大家享受野餐。|仙女也有位置。",
  "大家帶著物品來野餐，也替仙女留了位置。|準備工作一起分擔，用餐便輕鬆多了。"
 ],
 [
  "Kind to yourself",
  "Be kind.|To yourself, too.",
  "Fairy is kind to her friends.|She can be kind to herself, too.",
  "Fairy learns that being kind does not mean agreeing to everything.|She can care about her friends and still protect time for herself.",
  "要友善。|也對自己友善。",
  "仙女對朋友友善。|她也能對自己友善。",
  "仙女明白，友善不代表什麼都得答應。|她可以關心朋友，也保留時間照顧自己。"
 ],
 [
  "Yes, or no",
  "Gail is home.|Yes, or no.",
  "Gail puts the wand down.|She can say yes or no.",
  "Back in her familiar room, Gail places the wand on the rug.|Its ribbon reminds her to check her time and energy before making a promise.",
  "瑜瑜回家。|可以說好，也能說不。",
  "瑜瑜放下魔杖。|她能說好，也能說不。",
  "回到熟悉的房間，瑜瑜把魔杖放在地毯上。|緞帶提醒她，答應之前先看看自己的時間與體力。"
 ]
];
export const fairyTitles=rows.map(r=>r[0]);
export const fairyText=rows.map(r=>({A:r[1].split('|'),B:r[2].split('|'),C:r[3].split('|')}));
export function fairyChinese(page:number,level:ReadingLevel){return rows[page][{A:4,B:5,C:6}[level]].split('|');}

