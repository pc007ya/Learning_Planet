import type {ReadingLevel} from './dragon-text';
import type {StoryQuestion} from './dragon-quiz';
const image=(n:number)=>`images/story/wizard-v1/quiz/scene-${String(n).padStart(2,'0')}.png`;
const item=(id:string,prompt:string,picture:number,options:string[],answer:number,explanation:string):StoryQuestion=>({id,kind:'choice',prompt,image:image(picture),imageAlt:['魔法師拖延攪拌，藥水冒煙','掃帚吹亂地上的紙張','Gail 指向小步驟圖畫清單','兩人替一朵花澆水','魔法師收一本書上架','魔法師與 Gail 在整理好的花園'][picture-1],options:options.map(text=>({text})),answer:[answer],explanation});
export function wizardQuestions(level:ReadingLevel):StoryQuestion[]{
 const a=level==='A',c=level==='C';
 const questions=[
 item('wizard','Who does Gail visit?',1,['a giant','a wizard','a princess','a sailor'],1,'Gail visits a wizard.'),
 item('later',a?'What does he keep saying?':'Which word does the wizard repeat before Gail helps him?',1,['Now','Please','Later','Hello'],2,'He keeps saying later instead of starting.'),
 item('potion',a?'What is in the pot?':'What does the wizard forget to stir?',1,['a potion','a flower','a book','a broom'],0,'The potion needs stirring.'),
 item('heat',c?'What is the safest response when the potion starts to burn?':'What does the wizard do when the potion burns?',1,['He touches the pot.','He runs away.','He waits longer.','He turns off the heat.'],3,'The wizard turns off the heat. Gail stays back while the pot cools.'),
 item('broom',a?'What makes a mess?':'What scatters the papers across the room?',2,['the watering can','the magic broom','the flower','the list'],1,'The magic broom keeps sweeping too fast.'),
 item('stop',a?'What stops the broom?':'How does the wizard stop the runaway broom?',2,['a new book','more water','a stop spell','a flower'],2,'The wizard uses a stop spell.'),
 item('list',a?'What does Gail make?':'What helps them break a big job into small steps?',3,['a picture list','a bigger mess','a new hat','a cake'],0,'Gail makes a small picture list.'),
 item('first',a?'What comes first?':'What is the first step before watering the flowers?',3,['Put away every book.','Make a potion.','Say later again.','Fill the watering can.'],3,'First, they fill the watering can.'),
 item('proud',a?'How does the wizard feel at the end?':'How does finishing the little jobs make the wizard feel?',6,['lonely','proud','angry','afraid'],1,'He feels proud because he has started and finished his jobs.'),
 item('message',a?'What helps you begin?':c?'Which idea best explains the change in the wizard?':'What does Gail teach the wizard?',6,['Wait for the perfect time.','Do everything at once.','Start with one small step.','Let the mess grow.'],2,'Starting with one small step makes a big job easier.')
 ];
 const sceneOptions=[
 ['Gail waters a flower.','The potion begins to burn.','They put books away.','The wizard takes a walk.'],
 ['Gail fills a watering can.','The flowers grow tall.','The broom scatters papers.','The wizard writes a letter.'],
 ['Gail shows a picture list.','Gail hides the books.','The broom runs outside.','The wizard burns the list.'],
 ['They wash a hat.','They stir the potion.','They sweep the floor.','They water one flower.'],
 ['He says later again.','He puts one book away.','He waters the path.','He opens the door.'],
 ['The wizard runs away.','The workshop burns.','They enjoy the tidy garden.','The broom makes a mess.']
 ];
 const simple=[['Water a flower','A burnt potion','Put books away','Take a walk'],['Fill the can','Tall flowers','A runaway broom','Write a letter'],['Show a list','Hide the books','Run outside','Burn a list'],['Wash a hat','Stir a potion','Sweep the floor','Water a flower'],['Say later','Put a book away','Water the path','Open the door'],['Run away','A burning room','A tidy garden','A bigger mess']];
 const detailed=[
 ['Gail waters a flower in the garden.','The forgotten potion starts to burn while the wizard waits.','They return books to their shelf.','The wizard walks away from his house.'],
 ['Gail fills the can before watering.','The flowers bloom after a rainy night.','The uncontrolled broom sends papers flying around the room.','The wizard writes a long letter at a desk.'],
 ['Gail shows a picture list to make the jobs feel smaller.','Gail hides the books instead of putting them away.','The broom leaves through the open door.','The wizard throws the list into the stove.'],
 ['They wash the wizard’s pointed hat.','They stir a fresh green potion.','They sweep every room at the same time.','They begin by gently watering one flower.'],
 ['The wizard delays the job again.','The wizard starts by returning one book to the shelf.','The wizard pours water over the path.','The wizard opens the door for a visitor.'],
 ['The wizard escapes from the unfinished jobs.','The entire workshop catches fire.','The friends enjoy the garden after taking small useful steps.','The broom keeps scattering all the books.']
 ];
 return [...questions,...sceneOptions.map((options,i)=>item('scene-'+i,a?'Look. What happens?':c?'Which description best matches the picture?':'Which sentence matches this scene?',i+1,a?simple[i]:c?detailed[i]:options,[1,2,0,3,1,2][i],options[[1,2,0,3,1,2][i]]))];
}
