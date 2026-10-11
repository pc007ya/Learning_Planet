import {describe, expect, it, vi} from 'vitest';
import {StoryBookRequests} from '../src/story/book-request';
const book = {id: 'one', title: 'One', cover: 'cover.jpg', video: 'video', pages: [{id:'p1',title:'Page',text:'Read',image:'page.webp'}]};

describe('selected story content requests', () => {
  it('calls a browser fetch function without a class receiver', async () => {
    const fetcher = function(this: unknown) {
      expect(this).toBeUndefined();
      return Promise.resolve(new Response(JSON.stringify(book)));
    };
    expect(await new StoryBookRequests(fetcher).load('one','books/one.json')).toEqual(book);
  });
  it('requests nothing before entry, then caches only the selected book for reentry', async () => {
    const fetcher = vi.fn(async () => new Response(JSON.stringify(book)));
    const requests = new StoryBookRequests(fetcher);
    expect(fetcher).not.toHaveBeenCalled();
    expect(await requests.load('one','books/one.json')).toEqual(book);
    expect(await requests.load('one','books/one.json')).toEqual(book);
    expect(fetcher).toHaveBeenCalledTimes(1);
  });
  it('aborts on return and prevents a late result from populating the next view or its cache', async () => {
    let respond!: (response: Response) => void;
    const fetcher = vi.fn((_url: unknown, _options?: RequestInit) => new Promise<Response>(resolve => {respond = resolve;}));
    const requests = new StoryBookRequests(fetcher as typeof fetch);
    const pending = requests.load('one','books/one.json');
    const result = expect(pending).rejects.toMatchObject({name:'AbortError'});
    const signal = fetcher.mock.calls[0][1]?.signal;
    requests.cancel(); expect(signal?.aborted).toBe(true);
    respond(new Response(JSON.stringify(book))); await result;
    const again = requests.load('one','books/one.json');
    expect(fetcher).toHaveBeenCalledTimes(2);
    respond(new Response(JSON.stringify(book))); await again;
  });
  it('allows an HTTP failure to retry without storing a failed book', async () => {
    const fetcher = vi.fn().mockResolvedValueOnce(new Response('',{status:503})).mockResolvedValueOnce(new Response(JSON.stringify(book)));
    const requests = new StoryBookRequests(fetcher);
    await expect(requests.load('one','books/one.json')).rejects.toThrow('unavailable');
    expect(await requests.load('one','books/one.json')).toEqual(book);
    expect(fetcher).toHaveBeenCalledTimes(2);
  });
});
