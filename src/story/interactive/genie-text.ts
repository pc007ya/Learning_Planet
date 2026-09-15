import type {ReadingLevel} from './dragon-text';
const rows=[
 [
  "A little lamp",
  "A lamp!|It shines.",
  "Gail sees a little lamp.|Blue light comes out.",
  "A little lamp glows on Gail’s rug.|Blue sparks rise from its spout and open a doorway.",
  "一盞燈！|它發光了。",
  "瑜瑜看見一盞小燈。|藍光冒出來。",
  "小神燈在瑜瑜的地毯上發光。|藍色亮點從燈嘴升起，打開一道入口。",
  "shiny"
 ],
 [
  "Meet the genie",
  "A genie!|Hello!",
  "A genie meets Gail.|He has a kind smile.",
  "Gail steps into a bright market square.|A friendly genie welcomes her and asks what she would like.",
  "神燈精靈！|你好！",
  "精靈來見瑜瑜。|他親切地微笑。",
  "瑜瑜走進明亮的市集廣場。|親切的精靈歡迎她，問她想要什麼。",
  "genie"
 ],
 [
  "One wish",
  "One wish.|A toy, please.",
  "Gail can make a wish.|She asks for a toy.",
  "The genie offers Gail a wish.|She imagines a toy she could play with all afternoon.",
  "一個願望。|請給我玩具。",
  "瑜瑜可以許願。|她想要一個玩具。",
  "精靈讓瑜瑜許個願。|她想像一個能玩一整個下午的玩具。",
  "wish toy"
 ],
 [
  "A wooden train",
  "A train!|I want it.",
  "Gail sees a little train.|“I want that,” she says.",
  "A wooden train appears beside the lamp.|Gail wants to roll it along a track with her friends.",
  "火車！|我想要。",
  "瑜瑜看見小火車。|「我想要那個，」她說。",
  "一列木頭火車出現在神燈旁。|瑜瑜想和朋友一起讓它沿軌道行駛。",
  "train want"
 ],
 [
  "Something else",
  "A balloon!|More, please.",
  "A balloon floats up.|Gail asks for more.",
  "Before she tries the train, Gail spots a bright balloon.|She asks for more things, and the genie adds them to the square.",
  "氣球！|請再多一點。",
  "一顆氣球飄起。|瑜瑜想要更多。",
  "還沒開始玩火車，瑜瑜就看見鮮豔的氣球。|她想要更多東西，精靈便把它們加進廣場。",
  "balloon more"
 ],
 [
  "A gold crown",
  "A crown.|It is gold.",
  "Gail asks for a crown.|It is gold and shiny.",
  "A gold crown shines beside the train.|Gail likes its bright color, though she has not decided how to use it.",
  "王冠。|金色的。",
  "瑜瑜想要王冠。|它金光閃閃。",
  "金色王冠在火車旁閃耀。|瑜瑜喜歡它明亮的顏色，卻還沒想好要怎麼用。",
  "crown gold"
 ],
 [
  "Silver too",
  "Silver!|This one, too.",
  "Here is a silver crown.|Gail wants this one, too.",
  "The genie shows her a silver crown as well.|Instead of choosing, Gail asks to keep both colors.",
  "銀色！|這個也要。",
  "這是銀色王冠。|瑜瑜也想要這個。",
  "精靈也拿出銀色王冠。|瑜瑜沒有挑選，而是想把兩種顏色都留下。",
  "silver"
 ],
 [
  "A huge castle",
  "A huge toy!|Look up!",
  "A huge castle appears.|It fills the square.",
  "Gail wishes for a huge toy castle.|Its towers rise above her, leaving much less room around the train.",
  "巨大的玩具！|往上看！",
  "巨大的城堡出現。|它占滿廣場。",
  "瑜瑜許願要一座巨大的玩具城堡。|高塔高過她，火車周圍的地方變少了。",
  "huge"
 ],
 [
  "So many things",
  "Many toys.|So many!",
  "There are many toys.|Gail can hardly move.",
  "More blocks appear around the castle.|There are so many toys that Gail can hardly find a clear path.",
  "許多玩具。|好多喔！",
  "這裡有許多玩具。|瑜瑜快動不了了。",
  "更多積木出現在城堡周圍。|玩具多得讓瑜瑜幾乎找不到能走的路。",
  "many"
 ],
 [
  "Where can we play?",
  "No space!|Stop, please.",
  "Her friends need space.|There is no place to play.",
  "Two friends arrive, but the square is crowded.|Gail notices that having more toys has left them less space to play.",
  "沒有空間！|請停下。",
  "朋友需要空間。|沒有地方玩了。",
  "兩位朋友到了，廣場卻很擁擠。|瑜瑜發現，玩具更多，能一起玩的空間反而更少。",
  "space"
 ],
 [
  "Time to compare",
  "Look at both.|Which one?",
  "Gail looks at two toys.|She can compare them.",
  "The genie asks Gail to compare the castle and the train.|Which one could she use with her friends in this space?",
  "看看兩個。|要哪個呢？",
  "瑜瑜看著兩個玩具。|她可以比較它們。",
  "精靈請瑜瑜比較城堡和火車。|在這個空間裡，哪一個能和朋友一起玩？",
  "compare"
 ],
 [
  "Small can be useful",
  "A small train.|Room for us!",
  "The train is small.|Her friends can play, too.",
  "The train is small enough to leave room for everyone.|Each friend could add a piece of track and help it travel.",
  "小火車。|有我們的空間！",
  "火車很小。|朋友也能一起玩。",
  "火車夠小，能為大家留下空間。|每位朋友都能接上一段軌道，幫它前進。",
  "small"
 ],
 [
  "Make a decision",
  "I decide.|The train!",
  "Gail will decide now.|She picks the train.",
  "Gail takes a moment to decide.|She chooses the train because it gives them something to do together.",
  "我決定了。|火車！",
  "瑜瑜現在要決定。|她選了火車。",
  "瑜瑜花一點時間做決定。|她選擇火車，因為大家可以一起玩。",
  "decide"
 ],
 [
  "Keep one favorite",
  "Keep the train.|Thank you.",
  "“I will keep the train.”|The genie smiles.",
  "Gail tells the genie what she wants to keep.|She no longer needs every shiny thing she sees.",
  "留下火車。|謝謝。",
  "「我要留下火車。」|精靈笑了。",
  "瑜瑜告訴精靈，她想留下什麼。|她不再需要每一樣看起來閃亮的東西。",
  "keep"
 ],
 [
  "Less to move",
  "Less now.|More space!",
  "The castle goes away.|There is less to move.",
  "The genie gently removes the castle and crowns.|With less clutter, the friends can see the open square again.",
  "現在更少了。|更多空間！",
  "城堡消失了。|要搬的東西變少了。",
  "精靈輕輕收走城堡和王冠。|雜物變少，朋友們又看見開闊的廣場。",
  "less"
 ],
 [
  "Just a few",
  "A few blocks.|That is enough.",
  "They keep a few blocks.|They make a small bridge.",
  "Only a few blocks remain beside the train.|The friends use them to make a small bridge instead of filling the whole square.",
  "少數積木。|這樣夠了。",
  "他們留下幾塊積木。|做成小橋。",
  "火車旁只留下少數積木。|朋友們用它們搭一座小橋，不再堆滿整個廣場。",
  "few"
 ],
 [
  "Build together",
  "A track!|Join it here.",
  "Each friend adds a piece.|The train has a track.",
  "Gail and her friends join the wooden track pieces.|They leave enough space around the curve for everyone to reach.",
  "軌道！|接在這裡。",
  "每位朋友接上一塊。|火車有軌道了。",
  "瑜瑜和朋友接好木頭軌道。|他們在彎道周圍留下空間，讓大家都碰得到。",
  "space"
 ],
 [
  "Off it goes",
  "Go, train!|We can play.",
  "The train rolls along.|Everyone has a turn.",
  "The little train rolls along the track with a gentle whistle.|Everyone gets a turn, and no one is pushed out of the game.",
  "火車出發！|我們能玩了。",
  "火車前進。|每個人都輪得到。",
  "小火車輕輕鳴笛，沿著軌道前進。|每個人都輪流玩，沒有人被排除。",
  "train"
 ],
 [
  "One good wish",
  "One wish.|Fun for all.",
  "One toy is enough today.|It is fun for everyone.",
  "Gail looks at the clear square and her smiling friends.|One thoughtful wish has given them more fun than a mountain of toys.",
  "一個願望。|大家都開心。",
  "今天一個玩具就夠了。|每個人都很開心。",
  "瑜瑜看著空曠廣場和微笑的朋友。|一個仔細想過的願望，比堆成山的玩具帶來更多快樂。",
  "wish"
 ],
 [
  "Back at home",
  "My little lamp.|I can choose.",
  "Gail is home again.|She knows what to keep.",
  "Back in her familiar room, Gail sets the little lamp on the rug.|She remembers to think about how she will use something before asking for more.",
  "我的小神燈。|我能選擇。",
  "瑜瑜回到家。|她知道要留下什麼。",
  "回到熟悉的房間，瑜瑜把小神燈放在地毯上。|她記得，在想要更多東西之前，先想想會怎麼使用。",
  "keep"
 ]
];
export const genieTitles=rows.map(r=>r[0]);
export const genieWords=rows.map(r=>r[7].split(' '));
export const genieText=rows.map(r=>({A:r[1].split('|'),B:r[2].split('|'),C:r[3].split('|')}));
export function genieChinese(page:number,level:ReadingLevel){return rows[page][{A:4,B:5,C:6}[level]].split('|');}
