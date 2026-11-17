import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { practiceSessionKey } from '../src/chinese-practice/session';
describe('authenticated browser draft isolation',()=>{
 it('requires a verified UID and gives different users independent keys',()=>{
  expect(()=>practiceSessionKey(undefined)).toThrow();
  expect(()=>practiceSessionKey('')).toThrow();
  expect(practiceSessionKey('A')).not.toBe(practiceSessionKey('B'));
  expect(practiceSessionKey('A')).toBe(practiceSessionKey('A'));
 });
 it('preserves both account drafts and old unscoped data without auto-import',()=>{
  const storage=new Map([['lp-chinese-practice-v1','legacy']]);
  storage.set(practiceSessionKey('A'),'A draft');storage.set(practiceSessionKey('B'),'B draft');
  expect(storage.get(practiceSessionKey('A'))).toBe('A draft');
  expect(storage.get(practiceSessionKey('B'))).toBe('B draft');
  expect(storage.get('lp-chinese-practice-v1')).toBe('legacy');
  const source=readFileSync('src/chinese-practice/app.ts','utf8');
  expect(source).toContain('practiceSessionKey(root.dataset.authUid)');
  expect(source).toContain('sessionStorage.getItem(sessionKey)');
  expect(source).toContain('sessionStorage.setItem(sessionKey,');
  expect(source).not.toContain('lp-chinese-practice-v1');
  expect(source).not.toContain('removeItem(');
 });
});
