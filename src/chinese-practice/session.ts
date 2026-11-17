// The page guard supplies this UID only after Firebase verification. The key is
// for browser draft isolation, never an authorization credential.
export function practiceSessionKey(uid: string | undefined): string {
  if (!uid?.trim()) throw new Error('需要已驗證的登入身分才能開啟練習簿');
  return `lp-chinese-practice-v2:${encodeURIComponent(uid)}`;
}
