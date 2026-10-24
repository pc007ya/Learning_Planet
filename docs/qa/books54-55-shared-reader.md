# Books 54–55 shared reader — 2026-10-24

Both guarded routes now load the first ebook's `modules/little-star` runtime and stylesheet. Book-specific inherited layout classes were removed; scene-only layering and uncropped artwork remain. Desktop text uses the same font size and line spacing as book 1; phone uses its responsive toolbar. Approved story JSON is unchanged. Paragraphs split into sentences for narration and reading, preserving wording.

Verified in Chrome at 1280×850, 768×1024 and 390×844. Compared book 1 and both entries; visited all 20 scenes in B on desktop and first/last pages in A/B/C on all three viewports. Checked image loading, Chinese toggle, 20 vocabulary cards, illustrated quiz, and file:// self-contained packages. No page errors or horizontal overflow. Recorded metrics in adjacent JSON.

Mock speech lifecycle: pause/resume updates speech and scene animations; changing page clears effects. This is a lifecycle test, not an audible voice audition.

Full project check: 151 test files, 1,102 tests passed. Targeted reader/content tests also passed after final interaction styles. Retain approved carousel seating, natural rear views, hand-held ticket, pocketless pajamas and shared bedroom. Existing old custom-reader files remain historical only; neither ebook entry loads them.
