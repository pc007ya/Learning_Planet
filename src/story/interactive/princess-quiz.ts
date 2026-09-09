import type {ReadingLevel} from './dragon-text';
import type {StoryQuestion} from './dragon-quiz';
const image=(n:number)=>`images/story/princess-v1/quiz/scene-${String(n).padStart(2,'0')}.png`;
const choose=(id:string,prompt:string,picture:number,options:string[],answer:number,explanation:string):StoryQuestion=>({id,kind:'choice',prompt,image:image(picture),imageAlt:'故事插圖：'+['Ella 坐在窗邊','Ella 撿起積木','Gail 傾聽 Ella','兩人收橘子','兩人修風車','朋友一起玩積木'][picture-1],options:options.map(text=>({text})),answer:[answer],explanation});
export function princessQuestions(level:ReadingLevel):StoryQuestion[]{
 const easy=level==='A',advanced=level==='C';
 const base=[
 choose('princess','Who is Ella?',1,['a seller','a princess','a dragon','a teacher'],1,'Ella is a princess.'),
 choose('lonely',easy?'How does Ella feel at first?':'Ella has many gifts. How does she feel at first?',1,['hungry','angry','lonely','sleepy'],2,'Ella feels lonely because she wants a friend to play with.'),
 choose('blocks','What is on the rug?',2,['blocks','oranges','baskets','pinwheels'],0,'There are blocks on the rug.'),
 choose('listen',easy?'What does Gail do?':'What does Gail do after Ella asks her to stop?',3,['She runs away.','She makes more noise.','She buys a gift.','She listens.'],3,'Gail stops and listens to Ella.'),
 choose('orange','What are they putting in the basket?',4,['gifts','oranges','blocks','hats'],1,'They put oranges in the basket.'),
 choose('pinwheel','What are they fixing?',5,['a chair','a window','a pinwheel','a basket'],2,'They fix the wet pinwheel together.'),
 choose('wish',easy?'What does Ella want?':'What does Ella want more than another gift?',3,['a friend to play with','a bigger castle','more surprises','a new crown'],0,'Ella wants a friend to play with.'),
 choose('rain',easy?'Why is the pinwheel wet?':'Why does the pinwheel stop turning?',5,['It is too sunny.','A block falls on it.','Gail paints it.','Rain makes the paper wet.'],3,'The rain makes the paper wet, so they repair it together.'),
 choose('laugh',advanced?'Why does Ella laugh naturally in the story?':'Why does Ella begin to laugh?',6,['She receives a crown.','Gail sneezes under a funny hat.','Someone tells her to smile.','The castle is empty.'],1,'Gail’s funny hat slips onto her nose. She sneezes, and they laugh together.'),
 choose('meaning',easy?'What helps a friend?':advanced?'What does Gail learn about friendship?':'What does Gail learn?',6,['Always choosing for them.','Buying more and more gifts.','Listening and playing together.','Making them smile.'],2,'Friends listen, share, and choose things together.')
 ];
 const scenes:[string[],number,string][]=[
  [['Ella runs in the rain.','Ella sits by the window.','Ella buys an orange.','Ella builds a tower.'],1,'Ella sits by the window at the beginning.'],
  [['Ella opens a gift.','Ella holds a pinwheel.','Ella picks up a block.','Ella puts on a hat.'],2,'The tower falls, and Ella picks up a block.'],
  [['Gail listens to Ella.','Gail runs to the market.','Gail collects oranges.','Gail opens a gift.'],0,'Gail sits down and listens to her friend.'],
  [['They build a castle.','They repair a pinwheel.','They put on paper hats.','They put oranges in a basket.'],3,'The friends help collect the oranges.'],
  [['They pick up blocks.','They fix the pinwheel.','They buy oranges.','They open gifts.'],1,'Under the awning, they fix the wet pinwheel.'],
  [['Ella sits alone.','They run in the rain.','The friends play together.','They collect oranges.'],2,'Back at the castle, everyone joins in.']
 ];
 const short=[['Run in the rain','Sit by the window','Buy an orange','Build a tower'],['Open a gift','Hold a pinwheel','Pick up a block','Put on a hat'],['Listen to a friend','Run to the market','Collect oranges','Open a gift'],['Build a castle','Fix a pinwheel','Put on hats','Collect oranges'],['Pick up blocks','Fix a pinwheel','Buy oranges','Open gifts'],['Sit alone','Run in the rain','Play together','Collect oranges']];
 const detailed=[
  ['Ella runs through the rain outside.','Ella sits quietly beside the castle window.','Ella buys fruit from the seller.','Ella adds a block to the tower.'],
  ['Ella opens another wrapped gift.','Ella holds the spinning pinwheel.','Ella picks up a block after the tower falls.','Ella wears the new paper hat.'],
  ['Gail listens while Ella shares her wish.','Gail hurries alone to the market.','Gail gathers fruit from the ground.','Gail opens a surprise for Ella.'],
  ['They build a castle out of blocks.','They fold the wet pinwheel back into shape.','They try on their paper hats.','They collect oranges together in a basket.'],
  ['They rebuild the fallen block tower.','They work together to repair the wet pinwheel.','They buy fruit for a picnic.','They open the gifts in Ella’s room.'],
  ['Ella sits alone among her many gifts.','The friends hurry through the rain.','The friends laugh and build with blocks together.','They return oranges to the market seller.']
 ];
 return [...base,...scenes.map(([options,answer,explanation],i)=>choose('picture-'+(i+1),easy?'Look. What happens?':advanced?'Which sentence best matches this scene?':'Which sentence matches the picture?',i+1,easy?short[i]:advanced?detailed[i]:options,answer,explanation))];
}
