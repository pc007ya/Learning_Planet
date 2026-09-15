import type {ReadingLevel} from './dragon-text';
import type {StoryQuestion} from './dragon-quiz';
const rows=[
 ['Who is Nori?','Who does Gail meet beside the tree house?','nori','A little elf','A giant','A pirate','A mermaid'],
 ['What glows?','What opens the doorway from Gail’s room?','acorn','An acorn','A shoe','A spoon','A crown'],
 ['Why stop change?','Why does Nori want the forest to stay the same?','nori','New things make him nervous.','He wants a red apple sooner.','He wants to leave his home.','He dislikes the young bird.'],
 ['Can the bud open?','What happens to the bud while time is held still?','bud','It stays closed.','It opens at once.','It turns into a bird.','It grows two apples.'],
 ['Is the apple ripe?','Why is the green apple not ready yet?','unripe','It needs more time to ripen.','It needs a larger basket.','It is made of gold.','It belongs in the sea.'],
 ['What needs to grow?','What does the young bird need before it can fly well?','young','Time for its wings to grow','A magic crown','A new tree house','A red umbrella'],
 ['Learn it all today?','What does Gail explain about learning?','acorn','Nori can learn a little at a time.','He must know everything today.','He may never ask for help.','Only Gail can learn new things.'],
 ['What will melt?','What happens to winter snow when warmer days return?','winter','It melts.','It becomes a red apple.','It stops every season.','It grows wings.'],
 ['What does Nori allow?','What does Nori decide when he releases the spell?','nori-happy','He allows the woods to change.','He freezes the woods again.','He moves away alone.','He hides the young bird.'],
 ['Is the home gone?','What remains familiar while Nori learns new things?','forest','His old tree house','The frozen moment','The apple’s green color','The tightly closed bud']
];
export function elfQuestions(level:ReadingLevel):StoryQuestion[]{
 const result:StoryQuestion[]=rows.map((r,i)=>{const choices=r.slice(3),correct=choices.shift()!;choices.splice(i%4,0,correct);return {id:'elf-'+i,kind:'choice',prompt:level==='A'?r[0]:r[1],image:'images/story/elf-v1/'+r[2]+'.png',imageAlt:'故事中的角色或物件',options:choices.map(text=>({text})),answer:[i%4],explanation:correct};});
 const pictures=['Gail meets Nori by his tree house.','Nori holds the forest still.','They look at an unripe apple.','They imagine the four seasons.','Nori releases the spell and the flower opens.','The bird flies beside a ripe apple.'];
 pictures.forEach((correct,i)=>{const choices=['They sail across the sea.','They bake bread together.','They repair a broken pot.','They play a drum.'];choices[i%4]=correct;result.push({id:'elf-picture-'+i,kind:'choice',prompt:level==='A'?'Look. What happens?':'Which event matches this picture?',image:'images/story/elf-v1/quiz/scene-'+(i+1)+'.jpg',imageAlt:'小精靈故事分鏡 '+(i+1),options:choices.map(text=>({text})),answer:[i%4],explanation:correct});});return result;
}
