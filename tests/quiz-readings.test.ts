import { afterEach, expect, it, vi } from 'vitest';
import { readFileSync } from 'node:fs';
// @ts-ignore Browser module
import { load, tokens, render } from '../modules/quiz-readings.mjs';

afterEach(() => vi.unstubAllGlobals());

it('retries a failed public dictionary request and shares concurrent loads', async () => {
  const data = JSON.parse(readFileSync('src/chinese-practice/sounds-single.json', 'utf8'));
  expect(readFileSync('modules/quiz-readings/sounds-single.json')).toEqual(readFileSync('src/chinese-practice/sounds-single.json'));
  const fetch = vi.fn().mockResolvedValueOnce({ ok: false }).mockResolvedValue({ ok: true, json: async () => data });
  vi.stubGlobal('fetch', fetch);
  await expect(load()).rejects.toThrow('Readings unavailable');
  await Promise.all([load(), load()]);
  await load();
  expect(fetch).toHaveBeenCalledTimes(2);
  expect(String(fetch.mock.calls[1][0])).toContain('/modules/quiz-readings/sounds-single.json');
  for (const [text, char] of [['重慶', '重'], ['長安', '長'], ['行列', '行']]) {
    expect(tokens(text).find((token: any) => token.char === char).reading).toBe('');
  }
  expect(tokens('重疊')[0].reading).toBe('ㄔㄨㄥˊ');
  expect(tokens('32 − 17').map((token: any) => token.char).join('')).toBe('32 − 17');
});

it('keeps rich answer handlers, accessible names and graphics while adding readings', () => {
  const React = {
    createElement: (type: string, props: any, ...children: any[]) => ({ type, props: { ...props, children } }),
    isValidElement: (node: any) => !!node && typeof node === 'object' && !!node.type,
    cloneElement: (node: any, props: any, children: any) => ({ ...node, props: { ...node.props, ...props, children } })
  };
  const pick = () => 'picked';
  const graphic = React.createElement('svg', { 'aria-label': '三角形' }, '日');
  const answer = React.createElement('button', { onClick: pick, 'aria-label': '日' }, '日', graphic);
  const result = render(answer, React);
  expect(result.props.onClick).toBe(pick);
  expect(result.props['aria-label']).toBe('日');
  expect(result.props.children[0][0].type).toBe('ruby');
  expect(result.props.children[1]).toBe(graphic);
});
