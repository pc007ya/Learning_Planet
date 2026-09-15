import type {ReadingLevel} from './dragon-text';
const rows=[
 [
  "A box of music",
  "A music box!|Open it.",
  "Gail opens a music box.|A bright path appears.",
  "Gail opens a little music box on her rug.|Glowing notes curl out and lead toward a distant stage.",
  "音樂盒！|打開它。",
  "瑜瑜打開音樂盒。|明亮的小路出現。",
  "瑜瑜打開地毯上的小音樂盒。|發亮音符盤旋而出，通往遠方舞台。",
  "music"
 ],
 [
  "Meet the band",
  "A band!|Hello, friends.",
  "Gail meets a band.|They all want to play.",
  "Gail arrives at a stage in the music kingdom.|Every member of the band is eager to be heard.",
  "樂隊！|朋友們好。",
  "瑜瑜遇見樂隊。|大家都想演奏。",
  "瑜瑜來到音樂王國的舞台。|樂隊裡每位成員都很想被聽見。",
  "band"
 ],
 [
  "Rabbit’s drum",
  "A drum.|Tap, tap!",
  "Rabbit plays a drum.|He makes a strong beat.",
  "Rabbit taps his drum with two sticks.|Its strong beat invites the other musicians to join.",
  "一面鼓。|敲、敲！",
  "兔兔打鼓。|他打出有力的拍點。",
  "兔兔用兩根鼓棒敲鼓。|有力的拍點邀請其他樂手加入。",
  "drum beat"
 ],
 [
  "Fox’s flute",
  "A flute.|Hear Fox play.",
  "Fox plays a flute.|The sound floats up.",
  "Fox lifts his flute and plays a clear tune.|He wants everyone to notice its light, flowing sound.",
  "長笛。|聽狐狸演奏。",
  "狐狸吹長笛。|聲音飄起。",
  "狐狸舉起長笛，吹出清晰曲調。|他希望大家注意輕盈流動的笛聲。",
  "flute tune"
 ],
 [
  "Bear’s violin",
  "A violin.|Bear can play.",
  "Bear plays a violin.|He joins the tune.",
  "Bear draws a bow across his violin strings.|He joins the tune, but starts playing harder to stand out.",
  "小提琴。|小熊會演奏。",
  "小熊拉小提琴。|他加入曲調。",
  "小熊用琴弓拉過小提琴的弦。|他加入曲調，卻為了突出自己而越拉越用力。",
  "violin"
 ],
 [
  "More instruments",
  "A piano.|A trumpet, too.",
  "A piano waits nearby.|There is a trumpet, too.",
  "A piano and a trumpet wait at the side of the stage.|The band already has many sounds, but no one is listening to the others.",
  "鋼琴。|還有小號。",
  "旁邊有鋼琴。|還有小號。",
  "鋼琴和小號放在舞台一旁。|樂隊已有許多聲音，卻沒有人在聽其他人。",
  "piano trumpet"
 ],
 [
  "Too much volume",
  "Too much sound!|Turn it down.",
  "The volume goes up.|No one hears the tune.",
  "Each player raises the volume to be heard.|Their sounds cover one another until Gail cannot follow the tune.",
  "聲音太多了！|小聲一點。",
  "音量升高了。|沒有人聽得見曲調。",
  "每位樂手都提高音量，想被聽見。|聲音互相蓋住，瑜瑜再也跟不上曲調。",
  "volume sound"
 ],
 [
  "Suddenly silent",
  "No sound.|It is silent.",
  "The notes fade away.|The stage is silent.",
  "The magic notes fade, and the instruments become silent.|The puzzled band stops to look at one another.",
  "沒有聲音。|無聲了。",
  "音符消失了。|舞台一片無聲。",
  "魔法音符消失，樂器都沒聲音了。|困惑的樂隊停下來，彼此看著對方。",
  "silent"
 ],
 [
  "Start with a clap",
  "Clap with me.|Clap, clap.",
  "Gail claps her hands.|The band watches her.",
  "Gail makes a simple sound by clapping her hands.|She leaves a space after each clap so the band can answer.",
  "跟我拍手。|拍、拍。",
  "瑜瑜拍拍手。|樂隊看著她。",
  "瑜瑜用拍手發出簡單的聲音。|每次拍手後，她都留一點空檔，讓樂隊回應。",
  "clap"
 ],
 [
  "Tap and listen",
  "Tap, tap.|Now you.",
  "Rabbit gives a little tap.|Then he waits.",
  "Rabbit answers with a gentle tap on his drum.|This time he waits to hear Gail before playing again.",
  "敲、敲。|換你。",
  "兔兔輕敲一下。|然後等待。",
  "兔兔輕敲鼓面回應。|這一次，他等著聽瑜瑜的聲音，再繼續演奏。",
  "tap"
 ],
 [
  "A steady pattern",
  "Clap, tap, tap.|Do it again.",
  "They repeat a rhythm.|Clap, tap, tap.",
  "They repeat a short rhythm: clap, tap, tap.|The pattern helps everyone know when to join and when to wait.",
  "拍、敲、敲。|再做一次。",
  "他們重複一段節奏。|拍、敲、敲。",
  "他們重複短短節奏：拍、敲、敲。|這個規律幫助大家知道何時加入、何時等待。",
  "rhythm"
 ],
 [
  "Shake softly",
  "Shake it.|Soft sounds.",
  "Gail shakes two shakers.|She keeps the sound soft.",
  "Gail shakes a pair of small shakers beside the drum.|She keeps the sound soft enough for everyone to hear the beat.",
  "搖一搖。|輕柔的聲音。",
  "瑜瑜搖動兩個沙鈴。|她讓聲音保持輕柔。",
  "瑜瑜在鼓旁搖動一對小沙鈴。|她讓聲音保持輕柔，大家才能聽見拍點。",
  "shake soft"
 ],
 [
  "Watch the conductor",
  "Watch Owl.|Follow his hand.",
  "Owl is the conductor.|He shows who plays next.",
  "Owl takes his place as the conductor.|His clear hand signals help the musicians begin together and leave room for each part.",
  "看貓頭鷹。|跟著他的手。",
  "貓頭鷹是指揮。|他指出接下來誰演奏。",
  "貓頭鷹站上指揮的位置。|清楚的手勢幫助樂手一起開始，也為每個聲部留下空間。",
  "conductor"
 ],
 [
  "The flute returns",
  "Now, Fox.|Play the tune.",
  "Fox joins the drum.|The tune comes back.",
  "Owl invites Fox to join Rabbit’s beat.|The flute’s tune returns without covering the drum.",
  "換狐狸。|吹奏曲調。",
  "狐狸加入鼓聲。|曲調回來了。",
  "貓頭鷹邀狐狸加入兔兔的拍點。|長笛的曲調回來了，也沒有蓋住鼓聲。",
  "tune"
 ],
 [
  "Make room for strings",
  "Now, Bear.|Play with us.",
  "Bear joins in softly.|They hear each part.",
  "Bear adds his violin when the conductor gives the signal.|He listens to the flute and matches its gentle volume.",
  "換小熊。|和我們一起。",
  "小熊輕柔地加入。|大家聽見每個聲部。",
  "指揮一示意，小熊便加入小提琴。|他聽著長笛，配合它輕柔的音量。",
  "violin volume"
 ],
 [
  "A little piano",
  "Gail plays.|Soft piano notes.",
  "Gail plays the piano.|She follows Owl.",
  "Gail adds a few piano notes while watching Owl.|She does not need to play all the time to be part of the music.",
  "瑜瑜彈琴。|輕柔的鋼琴聲。",
  "瑜瑜彈鋼琴。|她跟隨貓頭鷹。",
  "瑜瑜看著貓頭鷹，加上幾個鋼琴音。|她不必一直演奏，也能成為音樂的一部分。",
  "piano"
 ],
 [
  "A song for everyone",
  "A song!|Sing with us.",
  "The band plays a song.|Everyone can join.",
  "The sounds come together in a warm song.|Gail sings a short line while the band leaves room for her voice.",
  "一首歌！|跟我們唱。",
  "樂隊演奏一首歌。|大家都能加入。",
  "聲音合成一首溫暖的歌曲。|瑜瑜唱出短句，樂隊為她的歌聲留下空間。",
  "song"
 ],
 [
  "Music returns",
  "Hear the music.|We did it!",
  "The music is back.|They listen and play.",
  "Glowing notes fill the stage again.|The band has learned that listening helps their music more than playing over everyone else.",
  "聽音樂。|我們做到了！",
  "音樂回來了。|大家邊聽邊演奏。",
  "發亮音符再次充滿舞台。|樂隊學會了：聆聽比蓋過別人的聲音，更能讓音樂動聽。",
  "music"
 ],
 [
  "Take a bow",
  "Take a bow.|Thank you!",
  "The band takes a bow.|Gail bows with them.",
  "When the final note ends, the whole band takes a bow.|Gail thanks her friends for making room for every sound.",
  "鞠個躬。|謝謝！",
  "樂隊鞠躬。|瑜瑜和大家一起。",
  "最後一個音結束，整個樂隊一起鞠躬。|瑜瑜謝謝朋友，為每種聲音留下位置。",
  "bow"
 ],
 [
  "A quiet ending",
  "Close the box.|Good night.",
  "Gail closes the music box.|The room is quiet.",
  "Back in her familiar room, Gail closes the music box.|She remembers the rhythm and the friends who learned to listen.",
  "關上盒子。|晚安。",
  "瑜瑜關上音樂盒。|房間安靜了。",
  "回到熟悉的房間，瑜瑜關上音樂盒。|她記得那段節奏，以及學會聆聽的朋友。",
  "rhythm"
 ]
];
export const musicTitles=rows.map(r=>r[0]);
export const musicWords=rows.map(r=>r[7].split(' '));
export const musicText=rows.map(r=>({A:r[1].split('|'),B:r[2].split('|'),C:r[3].split('|')}));
export function musicChinese(page:number,level:ReadingLevel){return rows[page][{A:4,B:5,C:6}[level]].split('|');}
