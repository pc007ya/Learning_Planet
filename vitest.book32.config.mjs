import {defineConfig} from 'vitest/config';
export default defineConfig({cacheDir:'.cache/book32-vitest',test:{include:['tests/book32*.test.ts']}});
