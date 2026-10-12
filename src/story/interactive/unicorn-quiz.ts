import type {ReadingLevel} from './dragon-text';
import type {StoryQuestion} from './dragon-quiz';
type Track={prompt:string;choices:[string,string,string,string];explanation:string};
/** Graded quiz only. Shared layered renderer attaches the original sceneImage unchanged. */
export const unicornQuizRows:{id:string;pages:number[];tracks:Record<ReadingLevel,Track>}[]=[
  {
    "id": "unicorn-1",
    "pages": [
      1
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, what does Gail see in the woods?",
        "choices": [
          "A light",
          "A map",
          "A rabbit",
          "A sign"
        ],
        "explanation": "Page 1: Gail sees a light in the woods. She looks toward it."
      },
      "B": {
        "prompt": "In this story, what color is the light Gail first sees?",
        "choices": [
          "Silver.",
          "Gold.",
          "Red.",
          "Blue."
        ],
        "explanation": "Page 1: Gail sees a silver light. She looks through the trees."
      },
      "C": {
        "prompt": "In this story, why does Gail peek through the tall trees at the beginning?",
        "choices": [
          "She wants to find out what is giving off the silver glow.",
          "She is following directions from the woodland rabbit.",
          "She is matching the river and mountain to a map.",
          "She is looking for the mark on the crooked tree."
        ],
        "explanation": "Page 1: Gail notices a silver glow and wonders what is shining ahead. The map, mark, and rabbit appear later in the journey."
      }
    }
  },
  {
    "id": "unicorn-2",
    "pages": [
      2
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, who runs past Gail?",
        "choices": [
          "A little unicorn",
          "A little rabbit",
          "A woodland deer",
          "An owl"
        ],
        "explanation": "Page 2: A little unicorn runs by. He is in a hurry."
      },
      "B": {
        "prompt": "In this story, which animal runs down the path with a shining mane?",
        "choices": [
          "A little unicorn.",
          "A friendly rabbit.",
          "A woodland fox.",
          "A small deer."
        ],
        "explanation": "Page 2: The little unicorn runs down the path. His mane shines as he runs."
      },
      "C": {
        "prompt": "In this story, what is the little unicorn doing when he nearly bumps into Gail?",
        "choices": [
          "Galloping quickly down the path.",
          "Standing still beside the map.",
          "Following the rabbit toward the flowers.",
          "Greeting his mother in the meadow."
        ],
        "explanation": "Page 2: The unicorn rushes along the path with a shining white mane. He gallops so fast that he nearly bumps into Gail."
      }
    }
  },
  {
    "id": "unicorn-3",
    "pages": [
      3,
      13
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, what does Lumi say when Gail first asks, “Are you lost?”",
        "choices": [
          "“No!”",
          "“I do not know.”",
          "“Please help me.”",
          "“I am home.”"
        ],
        "explanation": "Page 3: At first, Lumi says, “No!” Later he says he does not know the way."
      },
      "B": {
        "prompt": "In this story, what does Lumi claim when Gail first asks if he is lost?",
        "choices": [
          "He knows the way.",
          "He needs the rabbit’s help.",
          "He has found his family.",
          "He wants to read the map."
        ],
        "explanation": "Page 3: Lumi says, “No, I know the way!” This is his answer at the start."
      },
      "C": {
        "prompt": "In this story, how does Lumi’s first answer differ from his admission as night falls?",
        "choices": [
          "At first he claims to know the way; later he admits that he does not know.",
          "At first he asks the rabbit; later he says unicorns do not need maps.",
          "At first he follows the flowers; later he says he is going to the meadow.",
          "At first he admits he is lost; later he insists he already knows the way."
        ],
        "explanation": "Pages 3 and 13: Lumi first answers proudly that he knows the way. After the wrong turns and the blocked river, he honestly admits that he does not know where they are."
      }
    }
  },
  {
    "id": "unicorn-4",
    "pages": [
      4,
      18
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, where does Lumi want to go?",
        "choices": [
          "Home",
          "To the grove",
          "To the river",
          "To another fork"
        ],
        "explanation": "Page 4: Lumi wants to go home. Gail walks with him."
      },
      "B": {
        "prompt": "In this story, where is Lumi’s home?",
        "choices": [
          "Moonlight Meadow.",
          "The mushroom grove.",
          "The rushing riverbank.",
          "The first crossroads."
        ],
        "explanation": "Pages 4 and 18: Lumi wants to go home to Moonlight Meadow. He reaches it later."
      },
      "C": {
        "prompt": "In this story, why does Gail offer to walk beside Lumi?",
        "choices": [
          "She wants to help him return to Moonlight Meadow.",
          "She wants Lumi to guide her back to her own bedroom.",
          "She has already received directions from the rabbit.",
          "She needs Lumi to read the familiar mark on the tree."
        ],
        "explanation": "Page 4: Lumi needs to return to Moonlight Meadow. Gail wants to help him, so she offers to walk beside him."
      }
    }
  },
  {
    "id": "unicorn-5",
    "pages": [
      5
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, which way does Lumi run at the first split in the path?",
        "choices": [
          "Left",
          "Right",
          "Back to Gail",
          "Toward the rabbit"
        ],
        "explanation": "Page 5: Two paths are there. Lumi runs to the left."
      },
      "B": {
        "prompt": "In this story, what does Lumi do while Gail looks at the sign?",
        "choices": [
          "He turns left.",
          "He reads the map.",
          "He asks the rabbit.",
          "He checks the tree mark."
        ],
        "explanation": "Page 5: The path splits in two. Gail looks at the sign, but Lumi turns left."
      },
      "C": {
        "prompt": "In this story, which clue does Lumi leave unread when he dashes left at the first fork?",
        "choices": [
          "The wooden signpost Gail wants to read.",
          "The map Gail spreads out after he admits he is lost.",
          "The flowers the rabbit points toward near the end.",
          "The familiar bark mark Gail notices after their circle."
        ],
        "explanation": "Page 5: Gail wants to read the wooden signpost, but Lumi dashes left before she can do so. The other clues belong to later parts of the journey."
      }
    }
  },
  {
    "id": "unicorn-6",
    "pages": [
      6
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, what grows in the strange grove?",
        "choices": [
          "Big mushrooms",
          "Tall sunflowers",
          "Apple trees",
          "Red roses"
        ],
        "explanation": "Page 6: Gail and Lumi see big mushrooms. The path is hard to find."
      },
      "B": {
        "prompt": "In this story, what happens to the path in the mushroom grove?",
        "choices": [
          "It grows hard to see.",
          "It leads straight to the herd.",
          "It becomes a clear flower path.",
          "It reaches the first sign again."
        ],
        "explanation": "Page 6: Giant mushrooms fill the grove. As they walk in, the path grows hard to see."
      },
      "C": {
        "prompt": "In this story, what makes Lumi’s claim of a “shortcut” uncertain?",
        "choices": [
          "The path seems to fade away in the mushroom grove.",
          "The rabbit has already confirmed that this path reaches home.",
          "The moon flowers clearly mark the route through the grove.",
          "His family is already welcoming him at the grove’s edge."
        ],
        "explanation": "Page 6: Lumi calls it a shortcut, but the path seems to fade away. His confident name for the route is not evidence of a clear way home."
      }
    }
  },
  {
    "id": "unicorn-7",
    "pages": [
      7
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, what does Gail show Lumi when he says no?",
        "choices": [
          "A map",
          "A lamp",
          "A book",
          "A compass"
        ],
        "explanation": "Page 7: Gail has a map. Lumi says no to using it."
      },
      "B": {
        "prompt": "In this story, what does Gail take out at the next fork?",
        "choices": [
          "A map to help find the way.",
          "A book about unicorns.",
          "A lamp to light the grove.",
          "A compass to show north."
        ],
        "explanation": "Page 7: They reach another fork. Gail takes out a map, but Lumi says no."
      },
      "C": {
        "prompt": "In this story, how does Lumi respond to Gail’s map at the second fork?",
        "choices": [
          "He declares that unicorns do not need maps.",
          "He spreads it on the ground to match the landmarks.",
          "He asks the rabbit to explain its route.",
          "He takes it to his mother in the meadow."
        ],
        "explanation": "Page 7: Gail offers a colorful map from her bag. Lumi refuses it, saying that unicorns do not need maps; reading it together happens later."
      }
    }
  },
  {
    "id": "unicorn-8",
    "pages": [
      8,
      9
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, what do they see again after walking a long time?",
        "choices": [
          "The same tree",
          "The flower path",
          "Lumi’s family",
          "The first map"
        ],
        "explanation": "Page 8: They walk and walk, then see the same tree again."
      },
      "B": {
        "prompt": "In this story, what shows that Gail and Lumi have walked in a circle?",
        "choices": [
          "They see the same crooked tree.",
          "They reach a new flower path.",
          "They find Lumi’s family waiting.",
          "They see the sun above the hills."
        ],
        "explanation": "Page 8: After a long walk, they see the same crooked tree. They have come back around."
      },
      "C": {
        "prompt": "In this story, why is seeing the crooked tree again an important clue?",
        "choices": [
          "It shows they have returned to a place they already passed.",
          "It shows they have reached the unicorn herd at home.",
          "It confirms that the mushroom route is a direct shortcut.",
          "It means they have already followed the rabbit’s flower directions."
        ],
        "explanation": "Pages 8–9: The same crooked tree appears again, and Gail recognizes a mark on its bark. These familiar details show that they have walked in a circle."
      }
    }
  },
  {
    "id": "unicorn-9",
    "pages": [
      9
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, what does Gail notice before Lumi stops?",
        "choices": [
          "A mark",
          "A key",
          "A nest",
          "A flower"
        ],
        "explanation": "Page 9: Gail sees a mark. Lumi stops."
      },
      "B": {
        "prompt": "In this story, where is the mark Gail notices?",
        "choices": [
          "On the tree.",
          "On the map.",
          "On the signpost.",
          "On a moon flower."
        ],
        "explanation": "Page 9: Gail sees a mark on the tree and says they have been there before."
      },
      "C": {
        "prompt": "In this story, what does the familiar mark on the bark tell Gail?",
        "choices": [
          "They have been at this tree before.",
          "The rabbit made the mark to point to the meadow.",
          "The mark gives the river’s depth for crossing.",
          "Lumi’s mother has just arrived at this tree."
        ],
        "explanation": "Page 9: Gail points to the familiar bark mark and says they have been there before. The story does not say who made the mark."
      }
    }
  },
  {
    "id": "unicorn-10",
    "pages": [
      10,
      16
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, who hops across their path?",
        "choices": [
          "A rabbit",
          "An owl",
          "A squirrel",
          "A deer"
        ],
        "explanation": "Page 10: A rabbit hops by. Lumi does not ask it for help then."
      },
      "B": {
        "prompt": "In this story, which animal crosses their path before they reach the river?",
        "choices": [
          "A friendly rabbit.",
          "Lumi’s mother.",
          "A woodland owl.",
          "A small squirrel."
        ],
        "explanation": "Page 10: A friendly rabbit crosses their path. Gail wants to ask, but Lumi walks on."
      },
      "C": {
        "prompt": "In this story, why do they leave the first rabbit meeting without directions?",
        "choices": [
          "Lumi hurries past and insists he knows where to go.",
          "They have already followed the rabbit’s flowers all the way home.",
          "Lumi has already admitted he does not know where they are.",
          "Gail is already matching the river, mountain, and moon on the ground."
        ],
        "explanation": "Pages 10 and 16: Gail wants to ask the rabbit, but Lumi hurries past, claiming he knows the way. They return to ask only after he admits he is unsure and they check the map."
      }
    }
  },
  {
    "id": "unicorn-11",
    "pages": [
      11
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, what blocks Gail and Lumi’s way?",
        "choices": [
          "A big river",
          "A giant mushroom",
          "A wooden sign",
          "A small map"
        ],
        "explanation": "Page 11: A big river is ahead. They cannot cross."
      },
      "B": {
        "prompt": "In this story, why can they not cross the wide river?",
        "choices": [
          "There is no bridge.",
          "The rabbit blocks the path.",
          "The tree mark points back.",
          "The map is still in Gail’s bag."
        ],
        "explanation": "Page 11: The river blocks the path, and there is no bridge to cross."
      },
      "C": {
        "prompt": "In this story, what prevents them from going forward at the river?",
        "choices": [
          "There is no bridge, and the water is too deep to cross.",
          "They have just returned to the crooked tree in a circle.",
          "The mushroom grove has made the path hard to see.",
          "Lumi is still hurrying past the rabbit at the fork."
        ],
        "explanation": "Page 11: The wide, rushing river blocks their way. With no bridge and water too deep to cross, they cannot continue forward here."
      }
    }
  },
  {
    "id": "unicorn-12",
    "pages": [
      13,
      14
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, what does Lumi say when Gail asks the way as it gets dark?",
        "choices": [
          "“I do not know.”",
          "“No, I know.”",
          "“I am home!”",
          "“Go left.”"
        ],
        "explanation": "Page 13: Gail asks if he knows the way. This time Lumi says, “I do not know.”"
      },
      "B": {
        "prompt": "In this story, what does Lumi finally admit to Gail?",
        "choices": [
          "He does not know where they are.",
          "He has reached Moonlight Meadow.",
          "He has already asked the rabbit.",
          "He has found a bridge to cross."
        ],
        "explanation": "Page 13: Gail asks if he knows where they are. Lumi finally says, “I do not know.”"
      },
      "C": {
        "prompt": "In this story, what new approach becomes possible after Lumi’s honest admission?",
        "choices": [
          "He and Gail can find out together instead of relying on his claim to know.",
          "He can prove the mushroom grove is the only correct shortcut.",
          "He can run left again without checking any clues.",
          "He can follow the flowers before receiving the rabbit’s directions."
        ],
        "explanation": "Pages 13–14: Lumi admits that he does not know. Gail reassures him that they can find out together, opening the way to checking the map and asking for help."
      }
    }
  },
  {
    "id": "unicorn-13",
    "pages": [
      14
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, what does Gail say after Lumi admits he does not know?",
        "choices": [
          "“We can look together.”",
          "“I know the way!”",
          "“Go left again.”",
          "“Ask Mom now.”"
        ],
        "explanation": "Page 14: Gail says it is okay. They can look together."
      },
      "B": {
        "prompt": "In this story, how does Gail respond to Lumi’s admission?",
        "choices": [
          "She says they can find out together.",
          "She tells him to run ahead alone.",
          "She says to use the old shortcut again.",
          "She says they have already reached home."
        ],
        "explanation": "Page 14: Gail sits beside Lumi. She says it is okay and they can find out together."
      },
      "C": {
        "prompt": "In this story, how does Gail help Lumi after he whispers that he does not know?",
        "choices": [
          "She reassures him and offers to work out the way together.",
          "She asks him to lead alone because he first claimed to know.",
          "She directs him back into the mushroom shortcut without checking it.",
          "She waits for his mother to come to the river before looking for clues."
        ],
        "explanation": "Page 14: Gail smiles warmly, pats Lumi’s mane, and says it is okay not to know. Her offer to find out together turns his admission into a shared search."
      }
    }
  },
  {
    "id": "unicorn-14",
    "pages": [
      15
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, what do Gail and Lumi look at together on the ground?",
        "choices": [
          "A map",
          "A signpost",
          "A tree mark",
          "A moon flower"
        ],
        "explanation": "Page 15: They look at the map. Now they see the way."
      },
      "B": {
        "prompt": "In this story, how do Gail and Lumi use the map?",
        "choices": [
          "They find the river, mountain, and moon.",
          "They count the unicorns in the meadow.",
          "They read only the first wooden sign.",
          "They choose left without looking at it."
        ],
        "explanation": "Page 15: They look at the map on the ground and find the river, mountain, and moon on it."
      },
      "C": {
        "prompt": "In this story, which three landmarks do they match while reading the map?",
        "choices": [
          "The curved river, tall mountain, and rising moon.",
          "The river, mountain, and setting sun.",
          "The river, mushroom grove, and crooked tree.",
          "The mountain, wooden signpost, and glowing flowers."
        ],
        "explanation": "Page 15: Gail and Lumi spread the map on the mossy ground. Matching the curved river, tall mountain, and rising moon makes the clues clear."
      }
    }
  },
  {
    "id": "unicorn-15",
    "pages": [
      16,
      17
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, whom does Lumi ask after they check the map?",
        "choices": [
          "The rabbit",
          "His mother",
          "The unicorn herd",
          "Gail at home"
        ],
        "explanation": "Page 16: Lumi asks the rabbit. The rabbit shows the way."
      },
      "B": {
        "prompt": "In this story, who points toward the glowing flowers?",
        "choices": [
          "The friendly rabbit.",
          "Lumi’s mother.",
          "Gail’s family.",
          "The unicorn herd."
        ],
        "explanation": "Page 16: Lumi asks the rabbit for help. The rabbit points to the glowing flowers."
      },
      "C": {
        "prompt": "In this story, whose directions are they following when they discover the moon flowers?",
        "choices": [
          "The rabbit’s directions after Lumi politely asks for help.",
          "His mother’s directions when she welcomes him at home.",
          "The herd’s directions when it greets him in the meadow.",
          "Lumi’s first claim that the mushroom grove is a shortcut."
        ],
        "explanation": "Pages 16–17: Lumi returns to ask the rabbit, who points toward the glowing flowers. Following those directions, they find flowers that light the path home."
      }
    }
  },
  {
    "id": "unicorn-16",
    "pages": [
      13,
      15,
      16,
      17,
      18,
      19,
      20
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, how does Lumi finally find home?",
        "choices": [
          "He asks for help",
          "He only runs left",
          "He keeps saying no",
          "He only watches the tree"
        ],
        "explanation": "Pages 16–19: Lumi asks the rabbit for help. He follows the way and gets home."
      },
      "B": {
        "prompt": "In this story, what does Lumi tell his mother helped him get home?",
        "choices": [
          "He asked for help.",
          "He hurried past the rabbit.",
          "He refused to use the map.",
          "He trusted the first shortcut."
        ],
        "explanation": "Page 19: His mother asks how he got home. Lumi says, “I asked for help!”"
      },
      "C": {
        "prompt": "In this story, which sequence explains how Lumi finally finds his way home?",
        "choices": [
          "Admit he is unsure, check the map, ask the rabbit, and follow the glowing flowers.",
          "Insist he knows, run left, enter the mushroom grove, and refuse the map.",
          "Notice the tree mark, hurry past the rabbit, and continue straight across the river.",
          "Find the meadow first, ask his mother, and then check the map at the river."
        ],
        "explanation": "Pages 13–19: Lumi admits he does not know, checks the map with Gail, and asks the rabbit. The flower path then leads home, where he tells his mother that he asked for help."
      }
    }
  }
];
const positions:Record<ReadingLevel,number[]>={"A": [1, 3, 0, 2, 2, 0, 3, 1, 0, 2, 1, 3, 3, 1, 2, 0], "B": [2, 0, 1, 3, 1, 3, 2, 0, 3, 1, 0, 2, 0, 2, 3, 1], "C": [0, 2, 3, 1, 3, 1, 0, 2, 1, 3, 2, 0, 2, 0, 1, 3]};
export function unicornQuestions(level:ReadingLevel):StoryQuestion[]{return unicornQuizRows.map((row,i)=>{
 const track=row.tracks[level],answer=positions[level][i],choices=[...track.choices.slice(1)];
 choices.splice(answer,0,track.choices[0]);
 return {id:row.id,kind:'choice',prompt:track.prompt,imageAlt:'故事回顧插圖',options:choices.map(text=>({text})),answer:[answer],explanation:track.explanation};
});}
