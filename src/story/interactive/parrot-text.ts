import type {ReadingLevel} from './dragon-text';
// Teaching targets; not measured Lexile scores.
const rows=[
 [
  "A feather of light",
  "A stamp!|It glows.",
  "Gail sees a stamp.|A golden feather glows on it.",
  "A feather on a stamp begins to glow in Gail’s room.|Its light rises from her book and opens a doorway to a village post office.",
  "郵票！|它發光了。",
  "瑜瑜看見一張郵票。|上面的金色羽毛發光了。",
  "瑜瑜房裡，一張郵票上的羽毛開始發光。|光芒從書中升起，打開通往村莊郵局的門。",
  "stamp feather"
 ],
 [
  "Through the doorway",
  "A message!|For someone.",
  "Gail enters a post office.|Someone has a message to send.",
  "Gail steps through the light into a little post office.|A hedgehog is getting a message ready for a friend.",
  "訊息！|要給某人。",
  "瑜瑜走進郵局。|有人要寄出訊息。",
  "瑜瑜穿過光芒，走進一間小郵局。|一隻刺蝟正在準備給朋友的訊息。",
  "message"
 ],
 [
  "Meet Pippa",
  "A parrot!|Hello, Pippa.",
  "Pippa is a green parrot.|She carries letters for the village.",
  "Pippa, a green parrot, carries letters around the village.|She likes helping, and she is eager to make her next delivery.",
  "鸚鵡！|你好，琵琶。",
  "琵琶是一隻綠鸚鵡。|她替村民送信。",
  "綠鸚鵡琵琶替村莊送信。|她喜歡幫忙，也迫不及待要再送一封信。",
  "parrot"
 ],
 [
  "Wait on the perch",
  "A perch.|Pippa waits.",
  "Pippa sits on her perch.|The hedgehog starts to speak.",
  "Pippa settles on the wooden perch beside the counter.|The hedgehog begins to explain where the letter should go.",
  "棲木。|琵琶等著。",
  "琵琶坐在棲木上。|刺蝟開始說話。",
  "琵琶停在櫃臺旁的木棲架上。|刺蝟開始說明這封信要送到哪裡。",
  "perch"
 ],
 [
  "Too soon",
  "Wait, Pippa!|Let him finish.",
  "Pippa opens her beak.|She does not let him finish.",
  "Pippa opens her beak before the hedgehog can finish his sentence.|“I know the way!” she calls, and flies toward the door.",
  "等等，琵琶！|讓他說完。",
  "琵琶張開鳥喙。|她沒有讓他說完。",
  "刺蝟還沒把句子說完，琵琶就張開鳥喙。|「我知道路！」她喊著，飛向門口。",
  "beak finish sentence"
 ],
 [
  "Which address?",
  "Which home?|Pippa is not sure.",
  "The address is not clear to Pippa.|She heard only part of it.",
  "Outside, Gail asks Pippa about the address.|Pippa remembers a cottage near the flowers, but she did not hear the rest.",
  "哪個家？|琵琶不確定。",
  "琵琶不清楚地址。|她只聽見一部分。",
  "到了外面，瑜瑜問起地址。|琵琶記得是花叢旁的屋子，卻沒有聽到後面的話。",
  "address"
 ],
 [
  "The moon envelope",
  "An envelope.|A blue moon!",
  "A blue moon is on the envelope.|Pippa stops at a brown door.",
  "Pippa carries an envelope marked with a blue moon.|She stops at a brown door with an apple above it, without checking the difference.",
  "信封。|藍色月亮！",
  "信封上有藍色月亮。|琵琶停在棕色門前。",
  "琵琶帶著印有藍色月亮的信封。|她停在上方有蘋果標誌的棕色門前，沒有確認兩者的差別。",
  "envelope"
 ],
 [
  "The wrong door",
  "The wrong door.|Try again.",
  "A squirrel comes to the door.|This is the wrong home.",
  "A squirrel looks at the moon on the letter and shakes her head.|“This is the wrong home,” she says. “I was not expecting that message.”",
  "找錯門了。|再試一次。",
  "松鼠來到門前。|這不是要找的家。",
  "松鼠看著信上的月亮，搖搖頭。|「你找錯家了，」她說，「我並沒有在等這個訊息。」",
  "wrong"
 ],
 [
  "One missed detail",
  "Look closely.|A moon, not an apple.",
  "Gail spots a detail.|The two pictures do not match.",
  "Gail notices a detail that Pippa missed: the two pictures do not match.|Rather than guessing at another door, they decide to return and ask.",
  "仔細看。|是月亮，不是蘋果。",
  "瑜瑜發現一個細節。|兩張圖案不一樣。",
  "瑜瑜注意到琵琶漏掉的細節：兩個圖案並不相同。|她們決定回去問清楚，不再猜另一扇門。",
  "detail"
 ],
 [
  "Back to listen",
  "Do not interrupt.|Listen first.",
  "Pippa goes back.|She will not interrupt this time.",
  "Back at the post office, Pippa explains her mistake.|She asks the hedgehog to begin again and decides not to interrupt him.",
  "不要打斷。|先聽。",
  "琵琶回去了。|這次她不會打斷。",
  "回到郵局，琵琶說明自己弄錯了。|她請刺蝟再說一次，決定這次不要打斷他。",
  "interrupt"
 ],
 [
  "The whole sentence",
  "Let him finish.|Then speak.",
  "Pippa hears the whole sentence.|The door is blue.",
  "“Take this to Rabbit at the blue door with the moon,” the hedgehog says.|Pippa stays quiet until she has heard the whole sentence.",
  "讓他說完。|然後再說。",
  "琵琶聽完了整句話。|那扇門是藍色的。",
  "「把這封信送給月亮標誌藍門裡的兔子，」刺蝟說。|琵琶安靜地等著，直到聽完整句話。",
  "sentence finish"
 ],
 [
  "Repeat it back",
  "Repeat it.|The blue door.",
  "Pippa repeats the message.|“Rabbit, at the blue door?”",
  "Pippa repeats the important parts in her own words.|“Rabbit, at the blue door with the moon — is that right?” she asks.",
  "重複一次。|藍色的門。",
  "琵琶重述訊息。|「兔子，在藍門那裡？」",
  "琵琶用自己的話重述重要的部分。|「兔子，在有月亮標誌的藍門裡，對嗎？」她問。",
  "repeat"
 ],
 [
  "A useful question",
  "Ask a question.|Which path?",
  "Pippa has one more question.|“Which path takes us there?”",
  "Pippa still needs to know which path leads to the blue door.|She asks a question instead of pretending she knows, and waits for the answer.",
  "問個問題。|哪條路？",
  "琵琶還有一個問題。|「哪條路可以到那裡？」",
  "琵琶還需要知道哪條路通往藍門。|她沒有假裝知道，而是提出問題，等對方回答。",
  "question answer"
 ],
 [
  "A clear answer",
  "Now it is clear.|Take this path.",
  "The answer is clear.|Follow the path past the flowers.",
  "The hedgehog points out the path past the flowers.|His answer is clear, and this time Pippa has listened to every part.",
  "現在清楚了。|走這條路。",
  "答案很清楚。|沿著花叢旁的小路走。",
  "刺蝟指出經過花叢的小路。|他的回答很清楚，而這次琵琶聽完了每個部分。",
  "clear answer"
 ],
 [
  "The correct door",
  "The correct door!|A blue moon.",
  "They find the blue door.|The moon shows it is correct.",
  "At the blue door, Gail and Pippa check the moon against the envelope.|Both pictures match, so they have a reason to think this is the correct place.",
  "找對門了！|藍色月亮。",
  "她們找到藍門。|月亮圖案顯示找對了。",
  "到了藍門前，瑜瑜和琵琶核對門上的月亮與信封。|兩個圖案相符，因此她們有理由相信這次找對了。",
  "correct"
 ],
 [
  "Deliver the letter",
  "Deliver it.|Hello, Rabbit!",
  "Pippa delivers the letter.|Rabbit comes to the door.",
  "Pippa waits for Rabbit to come to the door before she delivers the letter.|“A message for you,” she says, holding out the envelope carefully.",
  "送信。|你好，兔子！",
  "琵琶送出信。|兔子來到門前。",
  "琵琶等兔子來到門前，才把信交出去。|「給你的訊息，」她說，小心地遞出信封。",
  "deliver"
 ],
 [
  "Wait for the reply",
  "Rabbit speaks.|Pippa listens.",
  "Rabbit has an answer.|Pippa waits and listens.",
  "Rabbit thanks Pippa and begins a reply for the hedgehog.|Pippa feels ready to fly away, but waits until Rabbit has finished speaking.",
  "兔子說話。|琵琶聽著。",
  "兔子有話要回覆。|琵琶等著，仔細聽。",
  "兔子謝謝琵琶，開始說要回覆刺蝟的話。|琵琶很想立刻飛走，卻等到兔子說完才動身。",
  "answer finish"
 ],
 [
  "Give your attention",
  "Pay attention.|Hear each part.",
  "Pippa gives Rabbit her attention.|She checks the reply too.",
  "Pippa gives Rabbit her attention and checks the reply before leaving.|She has learned that helping includes making room for someone else’s words.",
  "專心。|聽清每一部分。",
  "琵琶專心聽兔子說話。|她也核對了回覆。",
  "琵琶專心聽兔子說話，離開前核對回覆。|她學到，幫忙也包括留時間讓別人把話說完。",
  "attention"
 ],
 [
  "A different delivery",
  "Listen, then go.|Good work!",
  "Pippa returns with the reply.|This time, she has every detail.",
  "Pippa brings the complete reply back to the hedgehog.|The trip took more listening, but less guessing and fewer wrong turns.",
  "先聽，再出發。|做得好！",
  "琵琶帶著回覆回來了。|這次她記得每個細節。",
  "琵琶把完整回覆帶給刺蝟。|這趟路多花了一點時間聆聽，卻少了猜測，也少走了冤枉路。",
  "detail message"
 ],
 [
  "A little room to listen",
  "Home again.|I can listen.",
  "The stamp brings Gail home.|She will let others finish.",
  "The glowing stamp brings Gail back to her familiar room.|She remembers to let someone finish, repeat what matters, and ask when she is unsure.",
  "回家了。|我可以聽。",
  "郵票帶瑜瑜回家。|她會讓別人把話說完。",
  "發光的郵票帶瑜瑜回到熟悉的房間。|她記得讓別人說完、重述重點，並在不確定時提問。",
  "stamp finish"
 ]
];
export const parrotTitles=rows.map(r=>r[0]);
export const parrotWords=rows.map(r=>r[7].split(' '));
export const parrotText=rows.map(r=>({A:r[1].split('|'),B:r[2].split('|'),C:r[3].split('|')}));
export function parrotChinese(page:number,level:ReadingLevel){return rows[page][{A:4,B:5,C:6}[level]].split('|');}
