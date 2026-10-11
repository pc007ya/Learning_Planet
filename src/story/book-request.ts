export type StoryPage = {id: string; title: string; text: string; image: string};
export type StoryBook = {id: string; title: string; cover: string; video: string; pages: StoryPage[]};

/** Book content is requested only after its entry control, and belongs to that view. */
export class StoryBookRequests {
  private controller: AbortController | null = null;
  private generation = 0;
  private cache = new Map<string, StoryBook>();
  constructor(private request: typeof fetch = fetch) {}
  cancel() { this.generation++; this.controller?.abort(); this.controller = null; }
  async load(id: string, url: string): Promise<StoryBook> {
    this.cancel();
    const generation = this.generation;
    const cached = this.cache.get(id);
    if (cached) return cached;
    const controller = new AbortController();
    this.controller = controller;
    try {
      const request = this.request;
      const response = await request(url, {signal: controller.signal});
      if (!response.ok) throw new Error('Story content unavailable');
      const book = await response.json() as StoryBook;
      if (controller.signal.aborted || generation !== this.generation) throw new DOMException('Story view left', 'AbortError');
      if (book.id !== id || !Array.isArray(book.pages) || !book.pages.length || book.pages.some(p => typeof p.image !== 'string' || typeof p.text !== 'string')) throw new Error('Invalid story content');
      this.cache.set(id, book);
      return book;
    } finally { if (this.controller === controller) this.controller = null; }
  }
}
