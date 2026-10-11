import type {ReadingLevel} from './dragon-text';
import type {StoryQuestion} from './dragon-quiz';
type Track={prompt:string;choices:[string,string,string,string];explanation:string};
/** Existing ABC story and images are unchanged. Evidence refers to their original page order.
 * First stored choice is correct; each public answer position is balanced deterministically. */
export const elfQuizRows:{id:string;image:string;pages:number[];tracks:Record<ReadingLevel,Track>}[]=[
  {
    "id": "elf-0",
    "image": "nori.png",
    "pages": [
      2
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, who is Nori?",
        "choices": [
          "An elf",
          "A giant",
          "A pirate",
          "A mermaid"
        ],
        "explanation": "Page 2: Gail meets an elf. His name is Nori."
      },
      "B": {
        "prompt": "In this story, who does Gail meet near the tree house?",
        "choices": [
          "A little elf named Nori",
          "A giant named Nori",
          "A pirate named Nori",
          "A mermaid named Nori"
        ],
        "explanation": "Page 2 introduces Nori as a little elf. Gail meets him beside his tree house."
      },
      "C": {
        "prompt": "In this story, which description fits Nori when Gail meets him?",
        "choices": [
          "A little elf who worries about growing up.",
          "A little elf who wants to leave his familiar home.",
          "A little elf who has already learned everything.",
          "A little elf who wants the apple to ripen at once."
        ],
        "explanation": "On page 2, Nori is introduced as an elf worried about growing up and learning new things. Pages 4–5 explain his attachment to his familiar home, rather than a wish to leave it."
      }
    }
  },
  {
    "id": "elf-1",
    "image": "acorn.png",
    "pages": [
      1
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, what glows in Gail’s room?",
        "choices": [
          "An acorn",
          "A shoe",
          "A spoon",
          "A crown"
        ],
        "explanation": "Page 1: The acorn glows. Gail follows its light."
      },
      "B": {
        "prompt": "In this story, which light does Gail follow from her room?",
        "choices": [
          "The glowing acorn’s light",
          "The tree house’s light",
          "The young bird’s light",
          "The pink flower’s light"
        ],
        "explanation": "On page 1, the acorn glows on the rug. Gail follows its light at the start of the story."
      },
      "C": {
        "prompt": "In this story, what connects the acorn with Gail’s arrival in the woodland?",
        "choices": [
          "Its golden light opens a doorway from her room.",
          "Its light ripens an apple before Gail leaves home.",
          "Its light makes the young bird fly into her room.",
          "Its light moves Nori’s tree house into her room."
        ],
        "explanation": "Page 1 gives the acorn’s light an entrance role: it opens a doorway into the woodland clearing. Ripening fruit and a new flight happen later, after Nori allows change."
      }
    }
  },
  {
    "id": "elf-2",
    "image": "nori.png",
    "pages": [
      4,
      5
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, how does Nori feel about change at first?",
        "choices": [
          "Not sure",
          "Ready for change",
          "Bored with home",
          "Angry with Gail"
        ],
        "explanation": "Page 5: Nori is not sure about change. He likes his old home."
      },
      "B": {
        "prompt": "In this story, why does Nori want things to stay the same?",
        "choices": [
          "He is afraid of change.",
          "He wants a different home.",
          "He wants a ripe apple sooner.",
          "He wants the bird to fly away."
        ],
        "explanation": "On pages 4–5, Nori likes his old home and feels afraid of change. Keeping things the same seems familiar to him."
      },
      "C": {
        "prompt": "In this story, what worry leads Nori to think about stopping change?",
        "choices": [
          "Growing up might mean losing the things he loves.",
          "His tree house might stay familiar for too long.",
          "The apple might stay green if he allows time to pass.",
          "The bird might stay small if he allows it to grow."
        ],
        "explanation": "Pages 4–5 connect his nervousness with the familiar things he loves. He considers stopping the forest to keep them, before seeing that stopping change also prevents growth."
      }
    }
  },
  {
    "id": "elf-3",
    "image": "bud.png",
    "pages": [
      6,
      7,
      17
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, what does the bud do while time is still?",
        "choices": [
          "Stays closed",
          "Opens wide",
          "Loses its petals",
          "Falls off the stem"
        ],
        "explanation": "Pages 6–7: Time is still. The bud stays closed."
      },
      "B": {
        "prompt": "In this story, what happens to the pink bud while the spell holds time still?",
        "choices": [
          "It cannot open then.",
          "It opens into a flower then.",
          "Its petals fall off then.",
          "It falls from the stem then."
        ],
        "explanation": "On pages 6–7, Nori freezes time. Gail sees a pink bud that cannot open while the spell continues."
      },
      "C": {
        "prompt": "In this story, why can Nori not see the bud’s petals while the spell continues?",
        "choices": [
          "Holding time still prevents the bud from opening.",
          "Allowing change makes the bud close again.",
          "Imagining spring removes the bud from the path.",
          "Warmer days make the bud lose all its petals."
        ],
        "explanation": "Pages 6–7 say the frozen moment keeps the bud closed, even though Nori wants to see its petals. Opening follows the release of the spell and the passage of time on page 17."
      }
    }
  },
  {
    "id": "elf-4",
    "image": "unripe.png",
    "pages": [
      8,
      18
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, how is the apple while the forest is still?",
        "choices": [
          "Unripe",
          "Ripe",
          "Sliced",
          "Gone"
        ],
        "explanation": "Page 8: The apple is unripe. It is not ready yet."
      },
      "B": {
        "prompt": "In this story, what lets the apple become red and ripe?",
        "choices": [
          "More days pass after Nori lets the magic go.",
          "Nori holds the forest still again.",
          "Gail takes the apple home while it is green.",
          "Nori only imagines winter in the woods."
        ],
        "explanation": "Page 8 has an unripe apple. Nori lets the magic go on page 17, and more days pass before it is ripe on page 18."
      },
      "C": {
        "prompt": "In this story, what explains the apple’s change between pages 8 and 18?",
        "choices": [
          "The spell is released, allowing more days for the apple to ripen.",
          "The clearing remains frozen, allowing the apple to ripen without time.",
          "Imagining winter alone immediately changes the apple’s color.",
          "Moving the apple to Gail’s room replaces the time it needs."
        ],
        "explanation": "Page 8 says this apple needs more time on the tree. After the spell ends on page 17, more days pass on page 18 and it becomes red and ripe. This describes the story’s apple, not a rule for every apple variety."
      }
    }
  },
  {
    "id": "elf-5",
    "image": "young.png",
    "pages": [
      3,
      9,
      19
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, which part of the young bird does Nori look at?",
        "choices": [
          "Its wings",
          "Its beak",
          "Its tail",
          "Its feet"
        ],
        "explanation": "Page 3: Nori looks at the bird’s small wings."
      },
      "B": {
        "prompt": "In this story, what must happen before the bird tries a new flight?",
        "choices": [
          "It must grow.",
          "It must stay just as small.",
          "It must move to Gail’s room.",
          "It must stop trying to fly."
        ],
        "explanation": "Page 9 says the bird needs to grow. Page 19 shows that it has grown and tries a new flight."
      },
      "C": {
        "prompt": "In this story, what helps the bird try a new flight near the end?",
        "choices": [
          "Time and practice make it stronger.",
          "Remaining in the frozen moment makes it stronger.",
          "Changing branches replaces the need to grow.",
          "Imagining a flight replaces the need to practice."
        ],
        "explanation": "Page 9 identifies time for stronger wings as the bird’s need. Page 19 adds practice and shows a new flight. The story links the progress with growth and practice, rather than remaining unchanged."
      }
    }
  },
  {
    "id": "elf-6",
    "image": "acorn.png",
    "pages": [
      10
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, how does Gail say they can learn?",
        "choices": [
          "A little at a time",
          "All in one day",
          "Only by watching",
          "Without trying new things"
        ],
        "explanation": "Page 10: They can learn a little at a time."
      },
      "B": {
        "prompt": "In this story, what does Gail tell Nori about learning today?",
        "choices": [
          "He does not need to know it all today.",
          "He should learn everything before asking Gail.",
          "He should wait until the bird teaches him.",
          "He should only repeat things he already knows."
        ],
        "explanation": "On page 10, Gail can help Nori learn. He does not need to know everything today, so learning can happen a little at a time."
      },
      "C": {
        "prompt": "In this story, which approach matches Gail’s explanation of growing up?",
        "choices": [
          "Learn a little at a time and ask someone for help.",
          "Learn everything first and ask for help only afterward.",
          "Keep the forest still and wait for learning to happen.",
          "Watch the seasons once and skip trying anything new."
        ],
        "explanation": "Page 10 separates growing up from knowing everything at once. Gail offers two practical steps: learn gradually and ask someone to help. Neither stopping time nor only watching is her explanation."
      }
    }
  },
  {
    "id": "elf-7",
    "image": "winter.png",
    "pages": [
      15,
      16
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, what can melt in winter’s woods?",
        "choices": [
          "The snow",
          "The tree house",
          "The young bird",
          "The acorn"
        ],
        "explanation": "Pages 15–16: Nori thinks of winter. The snow can melt."
      },
      "B": {
        "prompt": "In this story, what happens to winter snow when warmer days return?",
        "choices": [
          "The snow melts.",
          "The snow stays frozen.",
          "The snow grows deeper.",
          "The snow blows away first."
        ],
        "explanation": "On page 16, Gail says the snow will melt and spring can come again. This follows their thoughts about winter."
      },
      "C": {
        "prompt": "In this story, how does the imagined snow help Gail explain seasonal change?",
        "choices": [
          "It melts when warmer days return, making room for the next season.",
          "It stays frozen when warmer days return, stopping the next season.",
          "It grows deeper in warmer days, keeping the woods in winter.",
          "It blows away before winter begins, leaving every season the same."
        ],
        "explanation": "Pages 15–16 concern winter that Nori imagines. Gail explains that its snow will melt when warmer days return. The example shows one season giving way to another; they do not actually travel through four seasons."
      }
    }
  },
  {
    "id": "elf-8",
    "image": "nori-happy.png",
    "pages": [
      17,
      18
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, what does Nori allow near the end?",
        "choices": [
          "Change",
          "Another frozen moment",
          "A new home instead",
          "A closed bud forever"
        ],
        "explanation": "Page 17: Nori allows change. He lets the magic go."
      },
      "B": {
        "prompt": "In this story, what does Nori do after thinking about the seasons?",
        "choices": [
          "He lets the magic go.",
          "He holds the forest still again.",
          "He takes the green apple home.",
          "He sends Gail away from the woods."
        ],
        "explanation": "On page 17, Nori lets the magic go. The bud can then open, and the apple has more days to become ripe."
      },
      "C": {
        "prompt": "In this story, which sequence follows Nori’s decision to allow change?",
        "choices": [
          "He releases the spell; the bud opens as time passes; more days bring a ripe apple.",
          "The apple ripens while time is frozen; he releases the spell; the bud stays closed.",
          "He releases the spell; the apple ripens immediately; the woods freeze again.",
          "He imagines winter; the bud disappears; he moves away from his tree house."
        ],
        "explanation": "Page 17 puts releasing the spell before the bud opening as time passes. Page 18 then says more days pass before the apple is ripe. The ending allows time for growth, rather than making everything mature at once."
      }
    }
  },
  {
    "id": "elf-9",
    "image": "forest.png",
    "pages": [
      4,
      19
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, what stays familiar as Nori learns?",
        "choices": [
          "His old home",
          "The closed bud",
          "The unripe apple",
          "The bird’s small wings"
        ],
        "explanation": "Pages 4 and 19: Nori still has his old tree house."
      },
      "B": {
        "prompt": "In this story, what stays the same while Nori and the bird learn new things?",
        "choices": [
          "Nori’s old tree house",
          "The apple’s green color",
          "The tightly closed bud",
          "The bird’s small wings"
        ],
        "explanation": "The apple ripens and the bird grows near the end. Nori is still beside the same old tree house on page 19."
      },
      "C": {
        "prompt": "In this story, what shows that allowing change does not mean losing everything familiar?",
        "choices": [
          "Nori learns beside the same old tree house as the bird tries a new flight.",
          "The tree house disappears as soon as the bird tries a new flight.",
          "The apple stays green and the bud stays closed after the spell ends.",
          "Nori leaves his home so the bird can keep its small wings."
        ],
        "explanation": "On page 4, Nori fears losing things he loves. Page 19 answers that worry: he is learning beside the same old tree house, even as the bird grows stronger. Growth and a familiar home can remain together here."
      }
    }
  },
  {
    "id": "elf-picture-0",
    "image": "quiz/scene-1.jpg",
    "pages": [
      2
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, who does Gail meet in this picture?",
        "choices": [
          "Nori",
          "The young bird",
          "The apple seller",
          "Her caregiver"
        ],
        "explanation": "Page 2: Gail meets Nori beside his tree house."
      },
      "B": {
        "prompt": "In this story, which event matches this tree-house picture?",
        "choices": [
          "Gail meets Nori near his home.",
          "Gail and Nori imagine the seasons.",
          "Nori releases the spell and a flower opens.",
          "Gail follows the acorn back to her room."
        ],
        "explanation": "This picture recalls page 2: Gail meets Nori by the tree house. Thinking about seasons and releasing the spell happen later."
      },
      "C": {
        "prompt": "In this story, where does this meeting belong in the sequence?",
        "choices": [
          "Gail meets Nori before he holds the forest in a frozen moment.",
          "Gail meets Nori only after the apple becomes ripe.",
          "Gail meets Nori after returning to her own room.",
          "Gail meets Nori only after he releases the acorn’s spell."
        ],
        "explanation": "Page 2 introduces the meeting beside the tree house. Nori uses the acorn to hold time still on page 6. The meeting precedes the problem, rather than being part of the later release or return home."
      }
    }
  },
  {
    "id": "elf-picture-1",
    "image": "quiz/scene-2.jpg",
    "pages": [
      6,
      7
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, what does Nori use to hold the forest still?",
        "choices": [
          "The acorn",
          "The apple",
          "The flower",
          "The bird"
        ],
        "explanation": "Page 6: Nori uses the acorn. The forest is still."
      },
      "B": {
        "prompt": "In this story, which event matches Nori holding the glowing acorn here?",
        "choices": [
          "He holds the forest still in time.",
          "He lets the forest change again.",
          "He thinks about winter snow.",
          "He watches the bird’s new flight."
        ],
        "explanation": "Page 6 shows Nori using the acorn to hold time still. The closed bud in this picture fits the spell’s effect on page 7."
      },
      "C": {
        "prompt": "In this story, what does the frozen moment shown here mean?",
        "choices": [
          "The plants cannot change, although the clearing is not icy or cold.",
          "The plants stop changing because real winter snow covers the clearing.",
          "The plants are growing again because Nori has already released the spell.",
          "The plants grow at once because Nori is imagining spring."
        ],
        "explanation": "Page 6 explicitly says the clearing is not icy or cold. The acorn holds one moment in time, preventing change. Winter snow is an imagined example later, and releasing the spell comes on page 17."
      }
    }
  },
  {
    "id": "elf-picture-2",
    "image": "quiz/scene-3.jpg",
    "pages": [
      8,
      18
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, which apple are they looking at here?",
        "choices": [
          "An unripe apple",
          "A ripe apple",
          "A sliced apple",
          "A fallen apple"
        ],
        "explanation": "Page 8: The green apple is unripe. It is not ready yet."
      },
      "B": {
        "prompt": "In this story, which event matches Gail pointing at the green apple?",
        "choices": [
          "They look at an apple that is not ready yet.",
          "They enjoy an apple that has turned red and ripe.",
          "They watch the bud open into a flower.",
          "They watch the bird try its new flight."
        ],
        "explanation": "The picture shows page 8’s green apple still on the tree. The ripe apple and new flight belong to the later ending."
      },
      "C": {
        "prompt": "In this story, how does this green-apple scene differ from the ripe-apple scene?",
        "choices": [
          "Here time is held still; later, more days pass and the apple ripens.",
          "Here the apple is already ripe; later, the spell makes it green again.",
          "Here the apple has fallen; later, Nori puts it back on the tree.",
          "Here the spell has ended; later, the forest becomes frozen again."
        ],
        "explanation": "On page 8, the unripe apple cannot get the time it needs while the clearing is held still. Page 18 describes more days passing and the apple becoming ripe. No scene has Nori putting a fallen apple back."
      }
    }
  },
  {
    "id": "elf-picture-3",
    "image": "quiz/scene-4.jpg",
    "pages": [
      11,
      12,
      13,
      14,
      15,
      16
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, what do they think about in this picture?",
        "choices": [
          "The seasons",
          "The old home only",
          "The apple only",
          "The bird only"
        ],
        "explanation": "Page 11: Gail talks about seasons. Nori thinks of each one."
      },
      "B": {
        "prompt": "In this story, what are Gail and Nori doing with the four seasons?",
        "choices": [
          "Imagining how the woods can change.",
          "Walking through four seasons in one day.",
          "Keeping the woods frozen in winter.",
          "Choosing a different home for each season."
        ],
        "explanation": "Pages 11–16 show Nori imagining the seasons. The picture’s thought bubble fits those ideas, not a trip through four real seasons."
      },
      "C": {
        "prompt": "In this story, why does Gail ask Nori to imagine the seasons?",
        "choices": [
          "To notice what different parts of the year can bring.",
          "To move his tree house to a different place each season.",
          "To keep the woodland in a single frozen season.",
          "To make the apple ripen before the spell is released."
        ],
        "explanation": "Page 11 invites Nori to imagine change from one season to the next. Pages 12–16 give buds, warm days, orange leaves, and snow as things to notice. Imagining these possibilities helps him consider change without a new journey."
      }
    }
  },
  {
    "id": "elf-picture-4",
    "image": "quiz/scene-5.jpg",
    "pages": [
      17
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, what has opened in this picture?",
        "choices": [
          "A pink flower",
          "A tree-house door",
          "A red apple",
          "The acorn"
        ],
        "explanation": "Page 17: Nori allows change. The bud opens into a flower."
      },
      "B": {
        "prompt": "In this story, which event matches the open flower near the end?",
        "choices": [
          "Nori lets the magic go, and the bud opens.",
          "Nori holds time still, and the bud stays closed.",
          "Nori imagines autumn leaves along the path.",
          "Gail returns home with the acorn’s light."
        ],
        "explanation": "Page 17 has Nori let the magic go. The open pink flower recalls the bud opening afterward, rather than the earlier closed bud."
      },
      "C": {
        "prompt": "In this story, which explanation connects the open flower with Nori’s decision?",
        "choices": [
          "He releases the spell, and the bud opens as time passes.",
          "He keeps the spell, and the bud opens while time is still.",
          "He imagines spring, and every plant matures immediately.",
          "He releases the spell only after the bud has already opened."
        ],
        "explanation": "Page 17 links the bud’s opening with Nori releasing the spell and time passing. The earlier spell kept it closed. The image recalls that result; it does not establish instant maturity or a new transformation."
      }
    }
  },
  {
    "id": "elf-picture-5",
    "image": "quiz/scene-6.jpg",
    "pages": [
      18,
      19
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, what does the bird try near the red apple?",
        "choices": [
          "A new flight",
          "A rest in the house",
          "A bite of apple",
          "A trip to Gail’s room"
        ],
        "explanation": "Page 19: The bird has grown. It tries a new flight."
      },
      "B": {
        "prompt": "In this story, which pair of changes matches the ending picture?",
        "choices": [
          "The apple is ripe, and the bird tries a new flight.",
          "The apple is unripe, and the bird stays small.",
          "The bud stays closed, and the apple stays green.",
          "The tree house is gone, and Gail is home."
        ],
        "explanation": "Pages 18–19 show a ripe apple and a bird that has grown. The red apple and flying bird in this picture recall those ending events."
      },
      "C": {
        "prompt": "In this story, what links the ripe apple and the bird’s new flight in this picture?",
        "choices": [
          "Allowing time to pass lets the apple ripen and the bird grow stronger with practice.",
          "Keeping time frozen lets the apple ripen and the bird grow stronger with practice.",
          "Imagining winter instantly ripens the apple and replaces the bird’s practice.",
          "Leaving the old tree house gives the apple and bird their new abilities."
        ],
        "explanation": "Page 18 gives the apple more days to ripen; page 19 gives the bird time and practice for a new flight. Both follow Nori allowing change. The same familiar tree house remains, so leaving home is not their cause."
      }
    }
  }
];
const positions:Record<ReadingLevel,number[]>={"A": [1, 3, 0, 2, 2, 0, 3, 1, 0, 2, 1, 3, 3, 1, 2, 0], "B": [2, 0, 1, 3, 1, 3, 2, 0, 3, 1, 0, 2, 0, 2, 3, 1], "C": [0, 2, 3, 1, 3, 1, 0, 2, 1, 3, 2, 0, 2, 0, 1, 3]};
export function elfQuestions(level:ReadingLevel):StoryQuestion[]{return elfQuizRows.map((row,i)=>{
 const track=row.tracks[level],answer=positions[level][i],choices=[...track.choices.slice(1)];
 choices.splice(answer,0,track.choices[0]);
 return {id:row.id,kind:'choice',prompt:track.prompt,image:'images/story/elf-v1/'+row.image,imageAlt:'故事回顧插圖',options:choices.map(text=>({text})),answer:[answer],explanation:track.explanation};
});}
