import type {ReadingLevel} from './dragon-text';
import type {StoryQuestion} from './dragon-quiz';
const base='images/story/little-star-v1/';
type Track={prompt:string;choices:[string,string,string,string];explanation:string};
const t=(prompt:string,choices:Track['choices'],explanation:string):Track=>({prompt,choices,explanation});
/** Each track uses the same approved events, with its own reading burden and reasoning task.
 * The first stored choice is correct; the public choices are placed deterministically below.
 */
export const starQuizRows:{id:string;scene:string;pages:number[];tracks:Record<ReadingLevel,Track>}[]=[
 {id:'window',scene:'room',pages:[1,14],tracks:{
  A:t('In her room, where does Gail look?',['The window','The tree','The pond','The hill'],'Gail is in her room. She looks out of the window.'),
  B:t('Where does Gail look when she cannot sleep?',['Out of the window','Up into the tree','Across the pond','Through the telescope'],'Gail cannot sleep in her room. She looks out of the window for her star.'),
  C:t('What does Gail look for at the window and through the telescope?',['Her little star in the sky','The cat under the tree','The duck on the pond','The basket under the apples'],'On pages 1 and 14, Gail looks toward the sky from different places. The window begins her search; later, the telescope lets her see the star she helped.')
 }},
 {id:'visitor',scene:'room',pages:[2,3],tracks:{
  A:t('What lands on Gail’s bed?',['A star','A cat','A duck','A firefly'],'The star flies in. It lands on Gail’s bed.'),
  B:t('Which visitor lands on the bed?',['A little star','The little cat','The yellow duck','A glowing firefly'],'The little star flies into the room. It lands on Gail’s bed before flying out again.'),
  C:t('What does the star do before leaving Gail’s room again?',['It lands on her bed.','It gets stuck in the tree.','It shines above the hill.','It thanks the cat for help.'],'On pages 2–3, the star first lands on the bed, then rises and flies out of the window. Getting stuck in the tree and thanking its helpers happen later.')
 }},
 {id:'flower',scene:'garden',pages:[4,13],tracks:{
  A:t('What color is the garden flower?',['Pink','White','Yellow','Blue'],'Gail sees a pink flower in the moonlit garden.'),
  B:t('What color is the flower Gail sees in the garden?',['It is pink.','It is white.','It is yellow.','It is blue.'],'The garden flower is pink. The white flowers appear later near the windmill.'),
  C:t('Which comparison matches the flowers at Gail’s two stops?',['Pink in the garden; white by the windmill.','White in the garden; pink by the windmill.','Pink in the garden and by the windmill.','White in the garden and by the windmill.'],'Page 4 describes a pink garden flower, while page 13 describes white flowers near the windmill. Keeping the two places separate avoids mixing their colors.')
 }},
 {id:'friend',scene:'garden',pages:[5,8],tracks:{
  A:t('Who sits under the tree?',['A cat','A duck','A firefly','Gail'],'A little cat sits under the tree. Gail asks it for help.'),
  B:t('Which friend does Gail ask for help under the tree?',['The little cat','The yellow duck','The glowing firefly','The little star'],'The cat sits under the tree. Gail asks the cat to help find her star.'),
  C:t('What does the cat do after Gail asks it for help?',['It climbs the ladder to help the star.','It runs over the bridge by itself.','It goes to sleep on Gail’s bed.','It waits under the tree until Gail goes home.'],'On page 5, Gail asks the cat for help. On page 8, the cat acts on that request by climbing the ladder to reach the star.')
 }},
 {id:'bridge',scene:'garden',pages:[6],tracks:{
  A:t('What does Gail walk over?',['A bridge','A ladder','A rock','A blanket'],'Gail walks over the bridge. The river runs under it.'),
  B:t('How does Gail cross the garden river?',['She walks over a bridge.','She climbs up a ladder.','She steps onto a rock.','She follows the riverbank.'],'Gail sees a bridge across the river. She walks over it to continue looking for the star.'),
  C:t('Which sentence matches the bridge scene in the story?',['The river runs under the bridge; Gail walks over it.','The river runs over the bridge; Gail walks under it.','The river runs under the bridge; Gail walks under it.','The river runs beside the bridge; Gail walks through it.'],'On page 6, the river is below the bridge and Gail crosses on top of it. The words under and over describe two different positions in the same scene.')
 }},
 {id:'high',scene:'garden',pages:[7,8],tracks:{
  A:t('Where does the star need help?',['High in the tree','On the bed','By the pond','Under the bridge'],'The star is high in the tree. It needs help.'),
  B:t('Where does Gail find the star calling for help?',['High in the tree','On her bed at home','Beside the pond’s water','Under the garden bridge'],'The star calls for help from high in the tree. Gail thinks of a way to reach it.'),
  C:t('Why does Gail look for a ladder after hearing the star?',['The star needs help high in the tree.','The apples need picking in the orchard.','The duck needs a way across the pond.','Her book needs putting on the table.'],'On page 7, the star calls from a high branch. Gail’s ladder on page 8 provides a way for the cat to reach it, connecting the problem with their plan.')
 }},
 {id:'ladder',scene:'garden',pages:[8,9],tracks:{
  A:t('What does Gail put by the tree?',['A ladder','A basket','A book','A telescope'],'Gail finds a ladder. The cat climbs it to help.'),
  B:t('What does Gail put next to the tree for the cat?',['A ladder to climb','A basket to carry','A book to read','A telescope to look through'],'Gail places a ladder beside the tree. The cat climbs it to help the little star.'),
  C:t('What happens just after Gail places the ladder beside the tree?',['The cat climbs up to help.','The star thanks its friends in the sky.','Gail walks home through the forest.','Gail says good night from her bed.'],'Page 8 puts the actions in order: Gail finds and places the ladder, then the cat climbs. The star’s return to the sky and Gail’s trip home follow afterward.')
 }},
 {id:'sky',scene:'garden',pages:[2,7,9],tracks:{
  A:t('Where does the free star go?',['The sky','The tree','The pond','The room'],'The star is free now. It flies into the sky.'),
  B:t('Where does the star return after its friends help?',['Back into the sky','Back onto the tree','Back beside the pond','Back into Gail’s room'],'The little star becomes free. It flies back into the sky and thanks its friends.'),
  C:t('After Gail meets the star, which order matches its journey?',['Room, then tree, then sky.','Room, then sky, then tree.','Tree, then room, then sky.','Sky, then tree, then room.'],'The star visits Gail’s room on page 2, needs help in a tree on page 7, and flies back to the sky on page 9. The order follows those three events.')
 }},
 {id:'firefly',scene:'forest',pages:[9,10,11,15],tracks:{
  A:t('What lights the forest path?',['A firefly','A star','A lantern','The moon'],'Gail walks home. A firefly gives light on the path.'),
  B:t('What helps Gail see the path as she walks through the forest?',['A glowing firefly','The little star','An orchard lantern','The moon above the hill'],'A firefly lights the forest path. Gail sees a sign and a mushroom as she walks home.'),
  C:t('What happens after the star returns to the sky but before Gail reaches the pond?',['A firefly lights the forest path.','Gail places a ladder by the tree.','Gail sees the pink garden flower.','Gail says good night in bed.'],'Pages 9–11 show the star returning to the sky, Gail walking through the firefly forest, and then her pond visit. The flower and ladder come earlier; bedtime comes later.')
 }},
 {id:'duck',scene:'pond',pages:[8,10,11,12],tracks:{
  A:t('Who swims on the pond?',['A duck','A cat','A firefly','Gail'],'Gail sees a duck swimming. It is on the pond.'),
  B:t('Which animal swims near the pink lily?',['The yellow duck','The little cat','The glowing firefly','The little star'],'The yellow duck swims on the pond. A pink lily floats nearby in the water.'),
  C:t('Which event belongs to Gail’s pond visit rather than another stop?',['A yellow duck swims beside a pink lily.','A firefly lights a path by a sign.','A cat climbs a ladder beside a tree.','Red apples hang above a basket.'],'Page 11 places the duck and lily on the pond. The other events belong to the forest, the star’s rescue in the garden, and the orchard.')
 }},
 {id:'apples',scene:'orchard',pages:[12],tracks:{
  A:t('What fruit hangs in the orchard tree?',['Apples','Pears','Lemons','Grapes'],'Gail sees red apples. They hang in the orchard tree.'),
  B:t('What fruit does Gail see hanging in the orchard?',['Red apples','Yellow pears','Green apples','Purple grapes'],'Red apples hang in the orchard tree. A basket sits under the same tree.'),
  C:t('Which relationship does Gail see in the orchard?',['Apples hang in the tree; a basket rests beneath it.','Apples hang in the tree; a basket rests above it.','Apples lie in the basket; the basket hangs in the tree.','Apples lie under the tree; a basket hangs above them.'],'Page 12 gives two positions: the apples hang from the tree and the basket sits underneath. Combining those details identifies the orchard scene without reversing their positions.')
 }},
 {id:'door',scene:'windmill',pages:[4,10,12,13],tracks:{
  A:t('What color is the windmill door?',['Blue','Pink','Red','White'],'Gail sees a windmill. It has a little blue door.'),
  B:t('What color is the little door below the windmill?',['It is blue.','It is pink.','It is red.','It is white.'],'The tall windmill has a blue door. White flowers grow beside the path nearby.'),
  C:t('Which pair of details belongs to Gail’s windmill stop?',['A blue door and white flowers','A pink flower and soft grass','A wooden sign and a mushroom','Red apples and a basket'],'Page 13 describes the windmill’s blue door and nearby white flowers. The other pairs are real story details, but they belong to the garden, forest and orchard.')
 }},
 {id:'telescope',scene:'hill',pages:[14],tracks:{
  A:t('What does Gail look through on the hill?',['A telescope','A window','Glasses','A camera'],'Gail uses a telescope. She sees the moon and star.'),
  B:t('What does Gail use to see the moon and her star on the hill?',['A telescope on the hill','A window in her room','Glasses from a table','A camera by the path'],'Gail looks through a telescope on the hill. She sees the moon and the star she helped.'),
  C:t('Which statement describes Gail’s telescope scene?',['She sees the moon and the star she helped.','She sees the apples and the orchard basket.','She sees the duck and the floating pink lily.','She sees the forest sign and the mushroom.'],'On page 14, Gail uses the telescope to look at the moon and her little star above the hill. The other pairs describe earlier stops, not what she sees here.')
 }},
 {id:'team',scene:'garden',pages:[8,9],tracks:{
  A:t('Who helps the star in the tree?',['Gail and the cat','Gail and the duck','The cat and the duck','Gail and the firefly'],'Gail finds a ladder. The cat climbs to help the star.'),
  B:t('How do Gail and the cat help the star?',['Gail finds the ladder; the cat climbs.','The cat finds the ladder; Gail climbs.','Gail climbs the ladder; the cat waits.','The cat climbs the tree; Gail takes the ladder home.'],'Gail finds and places the ladder. The cat climbs up to help, and the little star becomes free.'),
  C:t('Which explanation matches each friend’s part in freeing the star?',['Gail provides the ladder; the cat climbs it to reach the star.','The cat provides the ladder; Gail climbs it to reach the star.','Gail holds the star; the cat lifts it into the sky.','Gail frees the star first; the cat brings the ladder afterward.'],'Page 8 gives the friends different parts: Gail finds and places the ladder, while the cat climbs it. Together those actions help free the star before it returns to the sky.')
 }},
 {id:'bed',scene:'room',pages:[15],tracks:{
  A:t('Gail is home. What does she do?',['Goes to bed','Looks for the cat','Crosses the bridge','Climbs the ladder'],'Gail puts her book on the table. Then she goes to bed.'),
  B:t('What does Gail do when she returns home?',['Puts her book on the table and gets into bed.','Takes her book outside and crosses the bridge.','Leaves her book by the tree and climbs up.','Puts her book in a basket and visits the pond.'],'Gail puts her book on the table. Then she gets into bed and says good night to her star.'),
  C:t('Which order matches Gail’s return home?',['Book on the table, then bed and good night.','Bed first, then the book on the table.','Good night first, then another walk outside.','Book under the bed, then a look outside.'],'Page 15 shows Gail putting her book on the table before getting into bed. Saying good night finishes the adventure; she does not begin another trip outside.')
 }},
 {id:'message',scene:'garden',pages:[7,8,9],tracks:{
  A:t('Why does the star say “Thank you”?',['Gail and the cat help.','Gail visits the pond.','Gail looks at the moon.','Gail walks home.'],'Gail and the cat help the star. It thanks them.'),
  B:t('Why does the star thank its friends after leaving the tree?',['They helped the star get free.','They watched the duck on the pond.','They looked through the telescope on the hill.','They put a book on the table.'],'Gail and the cat help free the little star. It thanks them as it flies back into the sky.'),
  C:t('Why does the star thank both Gail and the cat?',['Gail placed the ladder, and the cat climbed to help it.','Gail used the telescope, and the cat pointed at the sky.','Gail put away the ladder, and the cat waved from the ground.','Gail carried the star home, and the cat opened her window.'],'The star asks for help on page 7. On page 8, Gail supplies the ladder and the cat climbs it, so the star’s thanks on page 9 recognize both friends’ help.')
 }}
];
const positions:Record<ReadingLevel,number[]>={
 A:[2,0,3,1,0,2,1,3,2,1,3,0,1,2,0,3],
 B:[1,3,0,2,3,1,2,0,1,0,2,3,0,1,3,2],
 C:[3,1,2,0,1,3,0,2,3,2,0,1,2,3,1,0]
};
export function starQuestions(level:ReadingLevel):StoryQuestion[]{return starQuizRows.map((row,i)=>{
 const track=row.tracks[level],answer=positions[level][i],choices=[...track.choices.slice(1)];
 choices.splice(answer,0,track.choices[0]);
 return {id:'star-'+row.id,kind:'choice',prompt:track.prompt,image:base+row.scene+'.png',imageAlt:'故事回顧插圖',options:choices.map(text=>({text})),answer:[answer],explanation:track.explanation};
});}
