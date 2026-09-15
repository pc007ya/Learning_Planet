import type {ReadingLevel} from './dragon-text';
const rows=[
 [
  "A little shield",
  "A shield!|It shines.",
  "Gail finds a toy shield.|A gold star shines on it.",
  "A small toy shield rests on Gail’s rug.|The star on its face shines, opening a glimpse of festival flags.",
  "一面盾牌！|它發亮。",
  "瑜瑜找到玩具盾牌。|上面的金星發亮。",
  "小玩具盾牌放在瑜瑜的地毯上。|盾面上的星星亮起，映出嘉年華旗幟。"
 ],
 [
  "Meet the knight",
  "A knight!|A silver helmet.",
  "Gail meets a knight.|He wears a silver helmet.",
  "Gail steps through the shining shield into a village festival.|A young knight in a silver helmet hurries past to join a race.",
  "一位騎士！|銀色頭盔。",
  "瑜瑜遇見騎士。|他戴銀色頭盔。",
  "瑜瑜穿過發光盾牌，來到村莊嘉年華。|戴銀色頭盔的小騎士匆匆跑過，準備參加比賽。"
 ],
 [
  "Ready to race",
  "A race!|Ready, go!",
  "The race is ready.|The knight runs fast.",
  "The racers gather beside the flags and get ready.|At the signal, the knight runs ahead, determined to be first.",
  "比賽！|預備，跑！",
  "比賽準備好了。|騎士跑得快。",
  "參賽者在旗旁集合，做好準備。|信號一出，小騎士就衝到前面，決心拿第一。"
 ],
 [
  "Fast is not everything",
  "He is fast.|“I will win!”",
  "The knight is fast.|He wants to win every game.",
  "The knight wins the short race and cheers for himself.|He begins to think that being fast will solve every task at the festival.",
  "他很快。|「我要贏！」",
  "騎士很快。|他每場都想贏。",
  "小騎士贏了短跑，為自己歡呼。|他開始以為，只要夠快，就能完成嘉年華的每項工作。"
 ],
 [
  "A different task",
  "A tent.|We need shade.",
  "They need a tent.|It will give them shade.",
  "The festival helpers need to put up a tent before lunch.|This task has several parts, and finishing safely matters more than finishing first.",
  "一頂帳篷。|我們需要遮陽。",
  "大家需要帳篷。|它可以遮陽。",
  "嘉年華幫手需要在午餐前搭好帳篷。|工作有好幾部分，安全完成比搶第一更重要。"
 ],
 [
  "Pulling alone",
  "Pull, pull.|It falls flat.",
  "The knight pulls alone.|The other side falls flat.",
  "The knight pulls one side of the tent up by himself.|Without someone holding the other side, the loose fabric falls flat again.",
  "拉呀，拉。|它垂下來。",
  "騎士自己拉。|另一邊垂下來。",
  "小騎士自己拉起帳篷的一邊。|另一邊沒有人扶住，鬆鬆的布又垂了下來。"
 ],
 [
  "Pushing too soon",
  "Push, push.|Not yet!",
  "He tries to push it up.|The team is not ready.",
  "He tries pushing the support before anyone is ready to hold the fabric.|Gail asks him to stop and look at the whole task.",
  "推呀，推。|還沒好！",
  "他想把支架推起來。|團隊還沒準備好。",
  "還沒有人準備扶好布料，他就想推起支架。|瑜瑜請他停下，看看整個工作需要什麼。"
 ],
 [
  "Not a race",
  "“Did I lose?”|“It is not a race.”",
  "“Did I lose?” he asks.|“This is not a race,” says Gail.",
  "The knight sits down, worried that he has lost.|Gail explains that building the tent is a shared task, not a contest between friends.",
  "「我輸了嗎？」|「這不是比賽。」",
  "他問：「我輸了嗎？」|瑜瑜說：「這不是比賽。」",
  "小騎士坐下，擔心自己輸了。|瑜瑜解釋，搭帳篷是共同工作，不是朋友之間的競賽。"
 ],
 [
  "Look at the team",
  "A team.|Many good ideas.",
  "Gail looks at the team.|Each friend can help.",
  "Gail introduces the knight to the other helpers.|Each member of the team can handle a different part of the work.",
  "一個團隊。|許多好點子。",
  "瑜瑜看看團隊。|每個朋友都能幫忙。",
  "瑜瑜把小騎士介紹給其他幫手。|團隊中的每個人，都能負責不同部分。"
 ],
 [
  "Find a partner",
  "A partner!|Work with me.",
  "The knight finds a partner.|They work side by side.",
  "The knight asks a partner to hold the opposite side.|This time, he checks that his partner is ready before he moves.",
  "一位夥伴！|和我一起。",
  "騎士找到夥伴。|他們並肩合作。",
  "小騎士請一位夥伴扶另一邊。|這次行動之前，他先確認夥伴準備好了。"
 ],
 [
  "Keep it steady",
  "Hold it steady.|Do not rush.",
  "They hold it steady.|The cloth stays in place.",
  "The helpers hold the fabric steady while the knight supports the frame.|Small, careful movements keep the pieces lined up.",
  "扶穩。|不要急。",
  "他們穩穩扶住。|布料留在原位。",
  "幫手扶穩布料，小騎士撐住支架。|小心、緩慢地移動，才能讓各部分對齊。"
 ],
 [
  "Find the balance",
  "Find the balance.|Both sides.",
  "They balance both sides.|The tent stands straight.",
  "They adjust both sides until the frame is balanced.|The knight discovers that watching his partner is more useful than rushing ahead.",
  "找到平衡。|兩邊一起。",
  "他們讓兩邊平衡。|帳篷站直了。",
  "他們調整兩邊，直到支架平衡。|小騎士發現，注意夥伴比自己往前衝更有幫助。"
 ],
 [
  "A peg in the ground",
  "A peg.|An adult helps.",
  "An adult sets a peg.|The children stand back.",
  "An adult instructor places a peg in the ground beside the tent.|The children stand clear and watch where the support will be secured.",
  "一根營釘。|大人來幫忙。",
  "大人放好營釘。|孩子們退開。",
  "成人指導員在帳篷旁的地上放好營釘。|孩子們退到旁邊，看支架要固定在哪裡。"
 ],
 [
  "Tap with the hammer",
  "Tap, tap.|The hammer works.",
  "The adult uses a hammer.|The peg goes into the ground.",
  "The instructor taps the peg into the ground with a wooden hammer.|The children wait at a safe distance until the tool is put down.",
  "敲，敲。|槌子在工作。",
  "大人使用槌子。|營釘進入地面。",
  "指導員用木槌把營釘敲入地面。|孩子們在安全距離等候，直到工具放下。"
 ],
 [
  "Pull together",
  "Ready?|Pull together.",
  "“Ready?” asks the knight.|They pull together.",
  "The knight asks whether everyone is ready, then gives a clear signal.|They pull together, keeping the fabric even on both sides.",
  "準備好了嗎？|一起拉。",
  "「準備好了嗎？」騎士問。|大家一起拉。",
  "小騎士先問大家準備好了沒，再給出清楚信號。|他們一起拉，讓兩邊布料保持平整。"
 ],
 [
  "Check the tent",
  "Check the tent.|Is it steady?",
  "They check the tent.|The adult checks each peg.",
  "Before inviting anyone inside, the team checks the finished tent.|The instructor checks the pegs, while the children look for loose fabric.",
  "檢查帳篷。|穩不穩？",
  "大家檢查帳篷。|大人檢查每根營釘。",
  "邀請大家入內之前，團隊先檢查完成的帳篷。|指導員檢查營釘，孩子們找找有沒有鬆動的布料。"
 ],
 [
  "Raise the flag",
  "A flag!|The tent is ready.",
  "They raise the flag.|The tent is ready for all.",
  "With the checks complete, the helpers raise the festival flag.|The tent is ready, and everyone can enjoy the shade they made together.",
  "旗子！|帳篷好了。",
  "大家升起旗子。|帳篷準備好迎接大家。",
  "檢查完成後，幫手們升起嘉年華旗幟。|帳篷準備好了，大家能享受一起搭出的遮陽空間。"
 ],
 [
  "Cheer for everyone",
  "Cheer for all!|We did it!",
  "They cheer for the team.|“We did it!” says the knight.",
  "The knight cheers for every helper, including those who worked quietly.|There is no single winner, because the finished tent belongs to everyone’s effort.",
  "為大家歡呼！|我們做到了！",
  "大家為團隊歡呼。|騎士說：「我們做到了！」",
  "小騎士為每位幫手歡呼，包括默默工作的人。|這裡沒有唯一的贏家，帳篷是大家努力的成果。"
 ],
 [
  "A new kind of win",
  "A win for all.|A happy team.",
  "A race can have a winner.|This is a win for the team.",
  "The knight still enjoys a friendly race, but he understands the difference now.|Some tasks succeed when everyone can contribute, rather than when one person arrives first.",
  "大家一起贏。|開心的團隊。",
  "比賽可以有贏家。|這次是團隊一起贏。",
  "小騎士仍喜歡友善的比賽，但現在懂得其中的不同。|有些工作需要人人參與才能成功，不是靠某個人第一個到達。"
 ],
 [
  "Back with the shield",
  "Gail is home.|A team can help.",
  "Gail brings the shield home.|She remembers the team.",
  "Back in her familiar room, Gail sets the toy shield beside her rug.|Its shining star reminds her to ask who can work beside her.",
  "瑜瑜回家。|團隊能幫忙。",
  "瑜瑜把盾牌帶回家。|她記得那個團隊。",
  "回到熟悉的房間，瑜瑜把玩具盾牌放在地毯旁。|發光的星星提醒她，問問誰能和自己一起合作。"
 ]
];
export const knightTitles=rows.map(r=>r[0]);
export const knightText=rows.map(r=>({A:r[1].split('|'),B:r[2].split('|'),C:r[3].split('|')}));
export function knightChinese(page:number,level:ReadingLevel){return rows[page][{A:4,B:5,C:6}[level]].split('|');}

