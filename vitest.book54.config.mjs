import {defineConfig} from 'vitest/config';
export default defineConfig({cacheDir:'.cache/book54-vitest',test:{include:['tests/book54*.test.ts','tests/book3[456]*.test.ts','tests/underwater-world.test.ts','tests/story-access.test.ts','tests/story-quiz-speech-cancel.test.ts','tests/book49-entry.test.ts'],fileParallelism:false,maxWorkers:1}});
