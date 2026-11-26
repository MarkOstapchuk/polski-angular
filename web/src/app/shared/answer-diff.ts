import { normalizeAnswer } from '../data/activity-adapter';

export type DiffKind = 'match' | 'wrong' | 'missing' | 'diacritic';
export type DiffReason = 'diacritics' | 'ending' | 'word_order' | 'typo' | 'mismatch';

export interface DiffSegment {
  text: string;
  kind: DiffKind;
}

export interface AnswerDiffResult {
  expected: string;
  expectedSegments: DiffSegment[];
  userSegments: DiffSegment[];
  showUserComparison: boolean;
  reason: DiffReason;
}

function foldPolish(ch: string): string {
  return ch
    .toLocaleLowerCase('pl-PL')
    .replace(/ł/g, 'l')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

function levenshtein(a: string, b: string): number {
  const m = a.length;
  const n = b.length;
  const dp: number[] = Array.from({ length: n + 1 }, (_, j) => j);
  for (let i = 1; i <= m; i++) {
    let prev = dp[0];
    dp[0] = i;
    for (let j = 1; j <= n; j++) {
      const tmp = dp[j];
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      dp[j] = Math.min(dp[j] + 1, dp[j - 1] + 1, prev + cost);
      prev = tmp;
    }
  }
  return dp[n];
}

function mergeSegments(segments: DiffSegment[]): DiffSegment[] {
  const merged: DiffSegment[] = [];
  for (const seg of segments) {
    if (!seg.text) continue;
    const last = merged[merged.length - 1];
    if (last && last.kind === seg.kind) {
      last.text += seg.text;
    } else {
      merged.push({ ...seg });
    }
  }
  return merged;
}

export function analyzeAnswerDiff(userInput: string, accepted: string[]): AnswerDiffResult | null {
  if (!accepted.length) return null;

  const user = userInput.trim().replace(/\s+/g, ' ');
  const userLower = user.toLocaleLowerCase('pl-PL');

  let bestExpected = accepted[0];
  let bestDist = Infinity;
  for (const cand of accepted) {
    const cleanCand = cand.trim().replace(/\s+/g, ' ');
    const dist = levenshtein(userLower, cleanCand.toLocaleLowerCase('pl-PL'));
    if (dist < bestDist) {
      bestDist = dist;
      bestExpected = cleanCand;
    }
  }

  const expected = bestExpected;
  const expLower = expected.toLocaleLowerCase('pl-PL');
  const m = user.length;
  const n = expected.length;

  const dp: number[][] = Array.from({ length: m + 1 }, () => Array<number>(n + 1).fill(0));
  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (userLower[i - 1] === expLower[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        const subCost = foldPolish(userLower[i - 1]) === foldPolish(expLower[j - 1]) ? 0.5 : 1;
        dp[i][j] = Math.min(
          dp[i - 1][j - 1] + subCost,
          dp[i - 1][j] + 1,
          dp[i][j - 1] + 1,
        );
      }
    }
  }

  const userSegsRev: DiffSegment[] = [];
  const expSegsRev: DiffSegment[] = [];
  let i = m;
  let j = n;
  let editOps = 0;
  let hasDiacriticOp = false;
  let hasNonDiacriticOp = false;

  while (i > 0 || j > 0) {
    if (i > 0 && j > 0 && userLower[i - 1] === expLower[j - 1] && dp[i][j] === dp[i - 1][j - 1]) {
      userSegsRev.push({ text: user[i - 1], kind: 'match' });
      expSegsRev.push({ text: expected[j - 1], kind: 'match' });
      i--;
      j--;
    } else if (
      i > 0 &&
      j > 0 &&
      foldPolish(userLower[i - 1]) === foldPolish(expLower[j - 1]) &&
      Math.abs(dp[i][j] - (dp[i - 1][j - 1] + 0.5)) < 1e-6
    ) {
      userSegsRev.push({ text: user[i - 1], kind: 'diacritic' });
      expSegsRev.push({ text: expected[j - 1], kind: 'diacritic' });
      hasDiacriticOp = true;
      editOps++;
      i--;
      j--;
    } else if (i > 0 && j > 0 && Math.abs(dp[i][j] - (dp[i - 1][j - 1] + 1)) < 1e-6) {
      userSegsRev.push({ text: user[i - 1], kind: 'wrong' });
      expSegsRev.push({ text: expected[j - 1], kind: 'missing' });
      hasNonDiacriticOp = true;
      editOps++;
      i--;
      j--;
    } else if (j > 0 && (i === 0 || Math.abs(dp[i][j] - (dp[i][j - 1] + 1)) < 1e-6)) {
      expSegsRev.push({ text: expected[j - 1], kind: 'missing' });
      hasNonDiacriticOp = true;
      editOps++;
      j--;
    } else if (i > 0) {
      userSegsRev.push({ text: user[i - 1], kind: 'wrong' });
      hasNonDiacriticOp = true;
      editOps++;
      i--;
    }
  }

  const userSegments = mergeSegments(userSegsRev.reverse());
  const expectedSegments = mergeSegments(expSegsRev.reverse());
  const maxLen = Math.max(m, n, 1);
  const rawDist = levenshtein(userLower, expLower);
  const similarity = 1 - rawDist / maxLen;
  const showUserComparison = user.length > 0 && similarity >= 0.35;

  let reason: DiffReason = 'mismatch';
  if ((hasDiacriticOp && !hasNonDiacriticOp) || (user.length > 0 && normalizeAnswer(user) === normalizeAnswer(expected))) {
    reason = 'diacritics';
  } else {
    const userTokens = normalizeAnswer(user).split(' ').filter(Boolean);
    const expTokens = normalizeAnswer(expected).split(' ').filter(Boolean);
    if (
      userTokens.length >= 2 &&
      userTokens.length === expTokens.length &&
      [...userTokens].sort().join('\0') === [...expTokens].sort().join('\0')
    ) {
      reason = 'word_order';
    } else {
      let commonPrefix = 0;
      const minLen = Math.min(userLower.length, expLower.length);
      while (commonPrefix < minLen && userLower[commonPrefix] === expLower[commonPrefix]) {
        commonPrefix++;
      }
      if (n >= 4 && commonPrefix / n >= 0.45 && user.length > 0) {
        reason = 'ending';
      } else if (rawDist <= 2 && editOps > 0 && user.length > 0) {
        reason = 'typo';
      }
    }
  }

  return {
    expected,
    expectedSegments,
    userSegments,
    showUserComparison,
    reason,
  };
}
