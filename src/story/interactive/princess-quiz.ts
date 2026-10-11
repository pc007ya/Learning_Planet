import type {ReadingLevel} from './dragon-text';
import type {StoryQuestion} from './dragon-quiz';
type Track={prompt:string;choices:[string,string,string,string];explanation:string};
/** Existing ABC story and images are unchanged. Evidence refers to their original page order.
 * First stored choice is correct; each public answer position is balanced deterministically. */
export const princessQuizRows:{id:string;image:string;pages:number[];tracks:Record<ReadingLevel,Track>}[]=[
  {
    "id": "princess",
    "image": "quiz/scene-01.png",
    "pages": [
      2,
      3
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, who is Ella?",
        "choices": [
          "A princess",
          "A seller",
          "A dragon",
          "A teacher"
        ],
        "explanation": "Page 2: Ella is a princess. She sits by the castle window."
      },
      "B": {
        "prompt": "In this story, who does Gail meet beside the castle window?",
        "choices": [
          "Princess Ella",
          "A fruit seller",
          "A visiting teacher",
          "A little elf"
        ],
        "explanation": "Page 2 introduces Princess Ella beside the tall window. Gail comes inside and sees her there."
      },
      "C": {
        "prompt": "In this story, which description fits Ella at the beginning?",
        "choices": [
          "A princess with many gifts but no friend beside her.",
          "A princess who is already sharing a tower with Gail.",
          "A princess who is selling oranges at the market.",
          "A princess who has already repaired the wet pinwheel."
        ],
        "explanation": "Pages 2–3 introduce Ella at the window, surrounded by gifts but without a friend beside her. Sharing and repairing belong to later events, after Gail starts listening."
      }
    }
  },
  {
    "id": "lonely",
    "image": "quiz/scene-01.png",
    "pages": [
      3,
      10
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, how does Ella feel at first?",
        "choices": [
          "Lonely",
          "Hungry",
          "Angry",
          "Sleepy"
        ],
        "explanation": "Page 3: Ella feels lonely. She has no friend beside her."
      },
      "B": {
        "prompt": "In this story, why does Ella feel lonely among her gifts?",
        "choices": [
          "She has no friend to play with.",
          "She has no gifts or toys at all.",
          "She wants to sell all her blocks.",
          "She wants to sit alone all day."
        ],
        "explanation": "Page 3 says Ella has many things but no friend beside her. On page 10, she says she wants a friend to play with."
      },
      "C": {
        "prompt": "In this story, why have the many gifts not solved Ella’s problem?",
        "choices": [
          "They do not give her the friend and shared play she wants.",
          "They have all been taken away before Gail arrives.",
          "They prevent her from seeing any children outside.",
          "They leave her with no blocks to build with."
        ],
        "explanation": "Page 3 distinguishes a room full of things from having a friend. Ella names her need on page 10: someone to play with, rather than another gift. The gifts are still there."
      }
    }
  },
  {
    "id": "blocks",
    "image": "quiz/scene-02.png",
    "pages": [
      5,
      6
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, what falls across the rug?",
        "choices": [
          "Blocks",
          "Oranges",
          "Baskets",
          "Pinwheels"
        ],
        "explanation": "Page 6: The block tower falls across the rug."
      },
      "B": {
        "prompt": "In this story, what happens to Gail’s tall block tower?",
        "choices": [
          "It wobbles and falls onto the rug.",
          "It stays standing until they return.",
          "Ella finishes it before Gail begins.",
          "Gail carries it to the market."
        ],
        "explanation": "On page 6, the tower wobbles and falls. Ella picks up a block and hopes they can rebuild it together."
      },
      "C": {
        "prompt": "In this story, what does Ella hope to do after Gail’s tower falls?",
        "choices": [
          "Rebuild the tower together with Gail.",
          "Wait silently while Gail finishes another secret tower.",
          "Take the fallen blocks to the fruit seller.",
          "Leave the castle without telling her caregiver."
        ],
        "explanation": "Pages 5–6 show Ella wanting to help. After the tower falls, she picks up a block and hopes to rebuild it with Gail. Her wish is to join the activity, not just watch another surprise."
      }
    }
  },
  {
    "id": "listen",
    "image": "quiz/scene-03.png",
    "pages": [
      8,
      9
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, what does Gail do after Ella asks her to stop?",
        "choices": [
          "She listens.",
          "She runs away.",
          "She makes more noise.",
          "She buys a gift."
        ],
        "explanation": "Pages 8–9: Gail stops. Then she sits and listens to Ella."
      },
      "B": {
        "prompt": "In this story, what does Gail do once the room is quiet?",
        "choices": [
          "She asks Ella what she wants to do and listens.",
          "She starts the music again without asking Ella.",
          "She keeps building a surprise tower alone.",
          "She leaves for the market before Ella answers."
        ],
        "explanation": "Page 8 makes the room quiet enough to listen. On page 9, Gail sits beside Ella, asks what she would like to do, and waits for her answer."
      },
      "C": {
        "prompt": "In this story, how does Gail’s response change after Ella asks her to stop?",
        "choices": [
          "She stops choosing surprises alone and asks Ella what she wants.",
          "She replaces quiet listening with louder music and more bubbles.",
          "She decides that Ella must watch a completed tower first.",
          "She chooses the market alone before hearing Ella’s wish."
        ],
        "explanation": "On page 7, Gail is busy with surprises and forgets to ask Ella. Pages 8–9 reverse that approach: she stops, puts down the hat, and listens to Ella’s own choice."
      }
    }
  },
  {
    "id": "orange",
    "image": "quiz/scene-04.png",
    "pages": [
      12,
      13
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, what fruit do they collect at the market?",
        "choices": [
          "Oranges",
          "Apples",
          "Pears",
          "Plums"
        ],
        "explanation": "Pages 12–13: They help collect oranges. They return the fruit."
      },
      "B": {
        "prompt": "In this story, what do Ella and Gail do with the oranges they collect?",
        "choices": [
          "They return them to the seller.",
          "They take them home as a gift.",
          "They keep them for a picnic.",
          "They sell them to other children."
        ],
        "explanation": "Page 12 has an orange roll from a stall. Page 13 says they collect the fruit and return it to the grateful seller. They are helping, not buying or keeping it."
      },
      "C": {
        "prompt": "In this story, how do Ella and Gail share the orange-collecting task?",
        "choices": [
          "Ella picks up the oranges while Gail holds the basket.",
          "Gail picks up the oranges while Ella holds the basket.",
          "Ella buys the oranges while Gail pays the seller.",
          "Gail sells the oranges while Ella waits at the castle."
        ],
        "explanation": "Page 13 assigns the two roles: Ella picks up the oranges and Gail holds the basket. They return the fruit afterward."
      }
    }
  },
  {
    "id": "pinwheel",
    "image": "quiz/scene-05.png",
    "pages": [
      15,
      16
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, what do they fix after the rain?",
        "choices": [
          "A pinwheel",
          "A chair",
          "A window",
          "A basket"
        ],
        "explanation": "Pages 15–16: The pinwheel is wet. They fix it together."
      },
      "B": {
        "prompt": "In this story, what do Gail and Ella work on under the awning?",
        "choices": [
          "Their wet paper pinwheel",
          "Their fallen block tower",
          "A broken market basket",
          "A stuck castle window"
        ],
        "explanation": "On pages 15–16, rain makes the pinwheel soggy. Under the awning, they straighten its paper wings until it turns again."
      },
      "C": {
        "prompt": "In this story, how do the friends repair the pinwheel together?",
        "choices": [
          "Gail holds the paper while Ella folds it carefully.",
          "Ella holds the paper while Gail folds it carefully.",
          "Gail rebuilds the tower while Ella buys a new pinwheel.",
          "Ella opens a gift while Gail fixes the pinwheel alone."
        ],
        "explanation": "Page 16 says Gail holds the paper and Ella folds it. They then straighten the wings together. This is another shared task, rather than one friend doing everything alone."
      }
    }
  },
  {
    "id": "wish",
    "image": "quiz/scene-03.png",
    "pages": [
      9,
      10
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, what does Ella want more than another gift?",
        "choices": [
          "A friend to play with",
          "A bigger castle",
          "More surprises",
          "A new crown"
        ],
        "explanation": "Page 10: Ella wants a friend to play with."
      },
      "B": {
        "prompt": "In this story, what wish does Ella tell Gail when Gail listens?",
        "choices": [
          "She wants a friend to play with.",
          "She wants Gail to choose all the games.",
          "She wants another secret surprise.",
          "She wants the children to leave."
        ],
        "explanation": "On page 10, Ella points to the children outside and says she wants a friend. Gail has given her room to explain that wish."
      },
      "C": {
        "prompt": "In this story, what does Ella’s wish reveal about Gail’s earlier surprises?",
        "choices": [
          "Gail was choosing things before asking what Ella wanted.",
          "Gail had already asked Ella to choose every surprise.",
          "Ella wanted more gifts but Gail had brought none.",
          "Ella wanted to avoid playing with anyone outside."
        ],
        "explanation": "Pages 5 and 7 show Gail controlling the surprises and forgetting to ask. On pages 9–10, listening reveals that Ella wants shared play. Her wish explains why making more surprises alone did not meet her need."
      }
    }
  },
  {
    "id": "rain",
    "image": "quiz/scene-05.png",
    "pages": [
      14,
      15,
      16
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, why is the paper pinwheel wet?",
        "choices": [
          "Rain falls on it.",
          "Gail washes it.",
          "Ella paints it.",
          "An orange spills juice."
        ],
        "explanation": "Page 15: Rain makes the paper pinwheel wet."
      },
      "B": {
        "prompt": "In this story, why does the pinwheel stop turning after they run with it?",
        "choices": [
          "The rain makes its paper soggy.",
          "Ella takes all its paper wings away.",
          "Gail replaces it with a block tower.",
          "The friends leave it at the castle."
        ],
        "explanation": "It turns during their shared running on page 14. Rain arrives on page 15, and the soggy paper will no longer turn."
      },
      "C": {
        "prompt": "In this story, what changes between the running scene and the repair scene?",
        "choices": [
          "Rain wets the paper, so they must straighten the wings before it turns again.",
          "The paper stays dry, but they decide never to use the pinwheel again.",
          "The wind removes all the wings, so they buy an entirely new pinwheel.",
          "The pinwheel is left at the castle, so the seller brings it to the awning."
        ],
        "explanation": "Page 14 has a turning pinwheel. Page 15 makes it wet in the rain; page 16 has the friends fold and straighten it until it turns again. These events explain the repair without adding a new purchase or missing parts."
      }
    }
  },
  {
    "id": "laugh",
    "image": "quiz/scene-06.png",
    "pages": [
      17,
      18,
      19
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, why does Ella laugh during the paper-hat moment?",
        "choices": [
          "Gail gives a tiny sneeze.",
          "Ella gets a new crown.",
          "Gail tells Ella to smile.",
          "A block hits the window."
        ],
        "explanation": "Pages 17–18: The hat tickles Gail’s nose. She sneezes, and Ella laughs."
      },
      "B": {
        "prompt": "In this story, what makes the paper-hat moment funny for Ella?",
        "choices": [
          "Gail sneezes and the crooked hat bounces.",
          "Gail asks Ella to smile for another gift.",
          "Ella buys a crown from the fruit seller.",
          "The children tell Ella to laugh at a tower."
        ],
        "explanation": "On pages 17–18, Ella makes Gail a hat. A corner tickles Gail’s nose; her tiny sneeze makes it bounce, and both friends laugh. The picture shows their later block play on page 19."
      },
      "C": {
        "prompt": "In this story, why is Ella’s laugh during the paper-hat moment different from Gail’s earlier plan?",
        "choices": [
          "It grows naturally from shared fun, instead of a surprise Gail planned alone.",
          "It follows an order to smile before Ella may join the other children.",
          "It comes from a new crown that Gail buys without asking Ella.",
          "It happens because Gail finishes a secret tower while Ella only watches."
        ],
        "explanation": "Gail plans to make Ella smile with a tower on page 4. On pages 17–18, Ella makes the hat, Gail sneezes, and both laugh without planning it. The illustration recalls the later castle gathering, not the sneeze itself."
      }
    }
  },
  {
    "id": "meaning",
    "image": "quiz/scene-06.png",
    "pages": [
      9,
      10
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, what does Gail suggest after Ella asks for a friend?",
        "choices": [
          "Choose something together.",
          "Buy more gifts.",
          "Build a secret tower.",
          "Play more loud music."
        ],
        "explanation": "Page 10: Gail says they can choose something together."
      },
      "B": {
        "prompt": "In this story, what plan follows Gail listening to Ella’s wish?",
        "choices": [
          "They will choose something together.",
          "Gail will make another surprise alone.",
          "Ella will watch Gail build without helping.",
          "Gail will buy gifts before asking Ella."
        ],
        "explanation": "On pages 9–10, Gail listens to Ella’s wish for a friend and suggests choosing something together. This question asks about that specific response."
      },
      "C": {
        "prompt": "In this story, which change in Gail’s approach follows learning what Ella wants?",
        "choices": [
          "She invites Ella to choose an activity with her.",
          "She chooses a new surprise before Ella can answer.",
          "She asks Ella to wait while she builds another secret tower.",
          "She buys more gifts and keeps Ella out of the activity."
        ],
        "explanation": "Page 10 gives Gail’s response: let them choose something together. Unlike the earlier tower plan on pages 4–5, this includes Ella’s choice."
      }
    }
  },
  {
    "id": "picture-1",
    "image": "quiz/scene-01.png",
    "pages": [
      2,
      3
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, what is Ella doing in this window picture?",
        "choices": [
          "Sitting by the window",
          "Running in the rain",
          "Buying an orange",
          "Building a tower"
        ],
        "explanation": "Page 2: Ella sits by the castle window."
      },
      "B": {
        "prompt": "In this story, which action matches Ella at the beginning?",
        "choices": [
          "Ella sits by the window.",
          "Ella runs in the rain.",
          "Ella buys an orange.",
          "Ella builds a tower."
        ],
        "explanation": "Page 2 places Ella beside the window. The later market and rain events are not this opening scene."
      },
      "C": {
        "prompt": "In this story, which sentence best matches this opening scene?",
        "choices": [
          "Ella sits quietly beside the castle window.",
          "Ella runs through the rain outside.",
          "Ella buys fruit from the seller.",
          "Ella adds a block to the tower."
        ],
        "explanation": "Page 2 shows Ella sitting quietly beside a tall window. Page 3 explains her loneliness. Building together and going outside come later in the story."
      }
    }
  },
  {
    "id": "picture-2",
    "image": "quiz/scene-02.png",
    "pages": [
      5,
      6
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, what does Ella do after the tower falls here?",
        "choices": [
          "Picks up a block",
          "Opens a gift",
          "Holds a pinwheel",
          "Puts on a hat"
        ],
        "explanation": "Page 6: Ella picks up a block after the tower falls."
      },
      "B": {
        "prompt": "In this story, which action matches Ella beside the fallen tower?",
        "choices": [
          "Ella picks up a block.",
          "Ella opens a gift.",
          "Ella holds a pinwheel.",
          "Ella puts on a hat."
        ],
        "explanation": "Page 6 has Ella pick up a block from the fallen tower. She hopes to rebuild it together with Gail."
      },
      "C": {
        "prompt": "In this story, which sentence best matches this fallen-tower scene?",
        "choices": [
          "Ella picks up a block after the tower falls.",
          "Ella opens another wrapped gift.",
          "Ella holds the spinning pinwheel.",
          "Ella wears the new paper hat."
        ],
        "explanation": "The scattered blocks and Ella’s action recall page 6. Her wish to rebuild together continues her request to help on page 5; the pinwheel and hat belong to later scenes."
      }
    }
  },
  {
    "id": "picture-3",
    "image": "quiz/scene-03.png",
    "pages": [
      9,
      10
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, what does Gail do beside Ella here?",
        "choices": [
          "Listens to a friend",
          "Runs to the market",
          "Collects oranges",
          "Opens a gift"
        ],
        "explanation": "Page 9: Gail sits beside Ella and listens."
      },
      "B": {
        "prompt": "In this story, which action matches Gail sitting beside Ella?",
        "choices": [
          "Gail listens to Ella.",
          "Gail runs to the market.",
          "Gail collects oranges.",
          "Gail opens a gift."
        ],
        "explanation": "On pages 9–10, Gail waits and listens while Ella explains what she wants. Ella points toward the children outside."
      },
      "C": {
        "prompt": "In this story, which sentence best matches this quiet conversation?",
        "choices": [
          "Gail listens while Ella shares her wish.",
          "Gail hurries alone to the market.",
          "Gail gathers fruit from the ground.",
          "Gail opens a surprise for Ella."
        ],
        "explanation": "Pages 9–10 show Gail listening rather than offering another surprise. Ella can then share her wish for a friend. The friends go to the market later, with permission and their caregiver."
      }
    }
  },
  {
    "id": "picture-4",
    "image": "quiz/scene-04.png",
    "pages": [
      12,
      13
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, what are the friends doing with oranges here?",
        "choices": [
          "Collecting oranges",
          "Building a castle",
          "Fixing a pinwheel",
          "Wearing hats"
        ],
        "explanation": "Pages 12–13: They help collect oranges for the seller."
      },
      "B": {
        "prompt": "In this story, which action matches this orange-collecting scene?",
        "choices": [
          "They put oranges in a basket.",
          "They build a castle.",
          "They repair a pinwheel.",
          "They put on paper hats."
        ],
        "explanation": "Page 13 has them collect oranges and return the fruit to the seller. They use Gail’s basket for the shared task."
      },
      "C": {
        "prompt": "In this story, which sentence best matches this market scene?",
        "choices": [
          "They collect oranges together in a basket.",
          "They build a castle out of blocks.",
          "They fold the wet pinwheel back into shape.",
          "They try on their paper hats."
        ],
        "explanation": "Pages 12–13 connect this scene with helping collect and return the oranges. The basket is for that task; the story does not say they buy the fruit for themselves."
      }
    }
  },
  {
    "id": "picture-5",
    "image": "quiz/scene-05.png",
    "pages": [
      15,
      16
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, what are they doing under the awning here?",
        "choices": [
          "Fixing a pinwheel",
          "Picking up blocks",
          "Buying oranges",
          "Opening gifts"
        ],
        "explanation": "Page 16: They fix the wet paper pinwheel together."
      },
      "B": {
        "prompt": "In this story, which action matches this scene after the rain?",
        "choices": [
          "They fix the pinwheel.",
          "They pick up blocks.",
          "They buy oranges.",
          "They open gifts."
        ],
        "explanation": "On page 16, Gail and Ella repair the soggy pinwheel under the awning. They straighten its paper wings together."
      },
      "C": {
        "prompt": "In this story, which sentence best matches this repair scene?",
        "choices": [
          "They work together to repair the wet pinwheel.",
          "They rebuild the fallen block tower.",
          "They buy fruit for a picnic.",
          "They open the gifts in Ella’s room."
        ],
        "explanation": "The rain and paper wings recall pages 15–16. Their shared repair makes the pinwheel turn again; the earlier fallen tower and later castle gathering are separate events."
      }
    }
  },
  {
    "id": "picture-6",
    "image": "quiz/scene-06.png",
    "pages": [
      19
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, what do the friends do back at the castle here?",
        "choices": [
          "Play together",
          "Sit alone",
          "Run in the rain",
          "Collect oranges"
        ],
        "explanation": "Page 19: Two children join Gail and Ella. They play with blocks."
      },
      "B": {
        "prompt": "In this story, which action matches the friends on the castle rug?",
        "choices": [
          "The friends play together.",
          "Ella sits alone.",
          "They run in the rain.",
          "They collect oranges."
        ],
        "explanation": "Page 19 brings two children to join Gail and Ella. They share the blocks and build a little castle on the rug."
      },
      "C": {
        "prompt": "In this story, which sentence best matches this later castle scene?",
        "choices": [
          "The friends laugh and build with blocks together.",
          "Ella sits alone among her many gifts.",
          "The friends hurry through the rain.",
          "They return oranges to the market seller."
        ],
        "explanation": "On page 19, two children join Gail and Ella for shared block play. Ella adds a piece herself. The scene contrasts with her lonely beginning without adding a new event."
      }
    }
  }
];
const positions:Record<ReadingLevel,number[]>={"A": [1, 3, 0, 2, 2, 0, 3, 1, 0, 2, 1, 3, 3, 1, 2, 0], "B": [2, 0, 1, 3, 1, 3, 2, 0, 3, 1, 0, 2, 0, 2, 3, 1], "C": [0, 2, 3, 1, 3, 1, 0, 2, 1, 3, 2, 0, 2, 0, 1, 3]};
export function princessQuestions(level:ReadingLevel):StoryQuestion[]{return princessQuizRows.map((row,i)=>{
 const track=row.tracks[level],answer=positions[level][i],choices=[...track.choices.slice(1)];
 choices.splice(answer,0,track.choices[0]);
 return {id:row.id,kind:'choice',prompt:track.prompt,image:'images/story/princess-v1/'+row.image,imageAlt:'故事回顧插圖',options:choices.map(text=>({text})),answer:[answer],explanation:track.explanation};
});}
