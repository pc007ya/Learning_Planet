import type {ReadingLevel} from './dragon-text';
const rows=[
 [
  "A watch wakes",
  "A watch!|Tick, tick.",
  "Gail opens a watch.|A golden circle shines.",
  "Gail opens a small watch in her familiar room.|Golden circles rise from it, opening a doorway to a castle.",
  "懷錶！|滴答，滴答。",
  "瑜瑜打開懷錶。|金色光圈亮起。",
  "瑜瑜在熟悉的房間打開小懷錶。|金色光圈從錶面升起，打開通往城堡的入口。",
  "watch"
 ],
 [
  "The castle clock",
  "A big clock!|Hello!",
  "A clockkeeper meets Gail.|He shows her a big clock.",
  "A friendly clockkeeper welcomes Gail to his castle.|Behind him, a giant clock measures the passing time.",
  "大時鐘！|你好！",
  "守鐘人遇見瑜瑜。|他給她看大時鐘。",
  "親切的守鐘人歡迎瑜瑜來到城堡。|他身後的大時鐘記錄著流逝的時間。",
  "clock"
 ],
 [
  "Follow the hand",
  "A hand moves.|Round it goes.",
  "Look at the clock hand.|It goes around the face.",
  "The clockkeeper points to a long hand on the clock.|It moves around the face while the shorter hand shows the hour.",
  "指針動了。|轉一圈。",
  "看看時鐘的指針。|它繞著鐘面轉。",
  "守鐘人指著時鐘上的長指針。|它繞著鐘面轉，短指針則顯示小時。",
  "hand"
 ],
 [
  "Listen to time",
  "Tick, tick.|I can hear it.",
  "Gail hears a quiet tick.|The watch is working.",
  "Gail holds the watch close and listens to its gentle tick.|The sound is steady, even when she wishes time would hurry.",
  "滴答，滴答。|我聽得見。",
  "瑜瑜聽見輕輕的滴答聲。|懷錶正在走。",
  "瑜瑜拿近懷錶，聽著輕柔的滴答聲。|即使她希望時間快一點，聲音依然規律。",
  "tick"
 ],
 [
  "One little second",
  "One second.|Tick!",
  "One second is short.|Gail blinks her eyes.",
  "The clockkeeper asks Gail to wait one second.|It is a tiny part of time, about enough for a quick blink.",
  "一秒。|滴答！",
  "一秒很短。|瑜瑜眨眨眼。",
  "守鐘人請瑜瑜等一秒。|那是很短的一段時間，大約夠快速眨一下眼。",
  "second"
 ],
 [
  "A minute to wait",
  "One minute.|I can wait.",
  "Sixty seconds make a minute.|Gail watches the hand.",
  "Sixty seconds make one minute, the clockkeeper explains.|Gail watches the thin hand travel all the way around.",
  "一分鐘。|我能等。",
  "六十秒是一分鐘。|瑜瑜看著指針。",
  "守鐘人解釋，六十秒是一分鐘。|瑜瑜看著細指針繞完一整圈。",
  "minute"
 ],
 [
  "A whole hour",
  "One hour.|That is longer.",
  "Sixty minutes make an hour.|Gail wants to hurry.",
  "Sixty minutes make one hour.|Gail thinks that sounds like a long wait and asks whether the watch can make it pass faster.",
  "一小時。|那更久。",
  "六十分鐘是一小時。|瑜瑜想快一點。",
  "六十分鐘是一小時。|瑜瑜覺得那要等很久，便問懷錶能不能讓時間過快一點。",
  "hour"
 ],
 [
  "A bright morning",
  "It is morning.|Good morning!",
  "Gail meets her friend in the morning.|They sit in the garden.",
  "The watch takes Gail to a sunny garden in the morning.|Her friend is preparing a little surprise before their journey.",
  "早晨到了。|早安！",
  "瑜瑜早晨遇見朋友。|她們坐在花園。",
  "懷錶帶瑜瑜來到早晨的陽光花園。|朋友正在旅行前為她準備一個小驚喜。",
  "morning"
 ],
 [
  "Breakfast disappears",
  "Breakfast!|Oh! It is gone.",
  "Gail makes time go fast.|Her breakfast is gone!",
  "Gail turns the watch forward before her friend can finish the surprise.|Breakfast vanishes, and an empty plate takes its place.",
  "早餐！|哎呀！不見了。",
  "瑜瑜讓時間快轉。|她的早餐不見了！",
  "朋友還沒完成驚喜，瑜瑜就把懷錶往前轉。|早餐消失，原來的位置只剩空盤。",
  "breakfast"
 ],
 [
  "Too late",
  "Too late!|I missed it.",
  "Gail is late for the surprise.|She missed her friend’s song.",
  "Her friend had planned to sing while they ate.|Now Gail is too late to hear it, and she cannot remember the meal they shared.",
  "太遲了！|我錯過了。",
  "瑜瑜來不及參加驚喜。|她錯過朋友的歌。",
  "朋友原本打算吃早餐時唱歌。|現在瑜瑜已經來不及聽，也不記得一起吃飯的時光。",
  "late"
 ],
 [
  "An evening already",
  "Evening already?|Where is our day?",
  "It is evening now.|Gail missed the journey.",
  "Gail turns the watch again, hoping to skip the waiting.|Suddenly it is evening at the station, and the journey has already ended.",
  "已經傍晚了？|我們的一天呢？",
  "現在是傍晚。|瑜瑜錯過旅程了。",
  "瑜瑜又轉動懷錶，希望跳過等待。|突然間，車站已是傍晚，旅程也結束了。",
  "evening"
 ],
 [
  "An empty album",
  "No photo.|I missed it.",
  "Gail looks for a photo.|Her album is empty.",
  "Gail opens her album, looking for a photo of the trip.|There is none, because she hurried past the moments she could have noticed.",
  "沒有照片。|我錯過了。",
  "瑜瑜找照片。|她的相簿是空的。",
  "瑜瑜打開相簿，想找旅途的照片。|裡面一張也沒有，因為她匆匆跳過了原本能留意的時刻。",
  "photo"
 ],
 [
  "Yesterday is gone",
  "Yesterday is gone.|I remember.",
  "Yesterday is before today.|Gail thinks about what she missed.",
  "Back at the castle, the clockkeeper shows her a calendar.|Yesterday has already passed; rushing cannot give her the memories she did not make.",
  "昨天過去了。|我記得。",
  "昨天在今天之前。|瑜瑜想起錯過的事情。",
  "回到城堡，守鐘人給她看日曆。|昨天已經過去；匆忙不能替她補上沒有留下的回憶。",
  "yesterday"
 ],
 [
  "Choose today",
  "Today is here.|Slow down.",
  "Gail can choose today.|She lets the watch go slowly.",
  "The clockkeeper offers Gail a fresh journey today.|She sets the watch to its normal pace, ready to take part in each moment.",
  "今天到了。|慢下來。",
  "瑜瑜今天能選擇。|她讓懷錶慢慢走。",
  "守鐘人今天給瑜瑜一次新的旅程。|她把懷錶調回正常速度，準備參與每個時刻。",
  "today"
 ],
 [
  "Tomorrow can wait",
  "Tomorrow can wait.|I am here.",
  "Tomorrow comes after today.|Gail stays with her friend.",
  "Gail marks tomorrow on the calendar, then looks back at today.|She can plan ahead without wishing the present would disappear.",
  "明天可以等。|我在這裡。",
  "明天在今天之後。|瑜瑜陪著朋友。",
  "瑜瑜在日曆上標記明天，再看回今天。|她可以事先計畫，而不必希望眼前的時光消失。",
  "tomorrow"
 ],
 [
  "Pack the suitcase",
  "My suitcase.|Ready to go!",
  "They pack a suitcase.|Gail helps her friend.",
  "Gail and her friend pack a suitcase together.|This time, Gail notices the care her friend takes with their things.",
  "我的行李箱。|準備出發！",
  "她們收拾行李箱。|瑜瑜幫朋友。",
  "瑜瑜和朋友一起收拾行李箱。|這次，瑜瑜留意到朋友細心整理物品的模樣。",
  "suitcase"
 ],
 [
  "Early with a ticket",
  "My ticket.|We are early.",
  "Gail has her ticket.|They are early for the train.",
  "With a ticket ready, the friends reach the station early.|Instead of skipping the wait, they watch the train arrive together.",
  "我的車票。|我們提早了。",
  "瑜瑜拿著車票。|她們提早來搭火車。",
  "準備好車票後，朋友們提早到達車站。|她們沒有跳過等待，而是一起看火車進站。",
  "ticket early"
 ],
 [
  "Lunch on the train",
  "Lunch together.|Tell me more!",
  "They eat lunch on the train.|They talk and look outside.",
  "The friends share lunch as the train moves through the countryside.|Gail listens to her friend and notices the bridges outside the window.",
  "一起吃午餐。|多說一點！",
  "她們在火車上吃午餐。|她們聊天、看窗外。",
  "火車穿過鄉間，朋友們一起吃午餐。|瑜瑜聽朋友說話，也留意窗外的橋。",
  "lunch"
 ],
 [
  "Enjoy this moment",
  "I enjoy this.|Here with you.",
  "Gail can enjoy the trip.|They draw what they saw.",
  "Gail and her friend draw the places they enjoyed in their album.|The pages are full of memories because they took time to notice and share.",
  "我喜歡這一刻。|和你在一起。",
  "瑜瑜能享受旅程。|她們畫下看見的事物。",
  "瑜瑜和朋友在相簿裡畫下喜歡的地方。|因為願意花時間留意和分享，書頁充滿了回憶。",
  "enjoy"
 ],
 [
  "Time to remember",
  "Tick, tick.|A lovely day.",
  "Gail is home with her watch.|She remembers her day.",
  "Back in her familiar room, Gail hears the watch tick softly.|She keeps her album nearby, remembering that a day is more than something to hurry through.",
  "滴答，滴答。|美好的一天。",
  "瑜瑜帶著懷錶回家。|她記得這一天。",
  "回到熟悉的房間，瑜瑜聽見懷錶輕輕滴答。|她把相簿放在身旁，記得每一天都值得好好度過。",
  "watch enjoy"
 ]
];
export const timeTitles=rows.map(r=>r[0]);
export const timeWords=rows.map(r=>r[7].split(' '));
export const timeText=rows.map(r=>({A:r[1].split('|'),B:r[2].split('|'),C:r[3].split('|')}));
export function timeChinese(page:number,level:ReadingLevel){return rows[page][{A:4,B:5,C:6}[level]].split('|');}
