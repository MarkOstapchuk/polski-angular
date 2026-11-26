import { Injectable, inject, signal } from '@angular/core';
import {
  DAILY_CHEST_COINS,
  LESSON_FIRST_CLEAR_COINS,
  MAX_STREAK_FREEZES,
  STREAK_FREEZE_PRICE,
} from '../data/rewards';
import { AnalyticsService } from './analytics.service';
import type { SavedMistake, SavedWord } from './learning-data.types';
import { supabase } from './supabase.client';

export interface LearnerProgress {
  completedLessonIds: number[];
  scores: Record<string, number>;
  activityProgress: Record<string, SavedActivityProgress>;
  totalXp: number;
  dailyXp: number;
  streak: number;
  bestStreak: number;
  lastStudyDate: string | null;
  vocabulary?: SavedWord[];
  vocabularyDeleted?: Record<string, string>;
  mistakes?: SavedMistake[];
  mistakesResolved?: Record<string, string>;
  coins?: number;
  claimedChests?: string[];
  lastDailyChestDate?: string | null;
  streakFreezes?: number;
  streakFrozenDate?: string | null;
  ownedAvatars?: string[];
  selectedAvatar?: string | null;
  rewardsUpdatedAt?: string | null;
}

export interface SavedActivityProgress {
  answers: Record<string, string>;
  results: Record<string, boolean>;
  savedAt: string;
}

const STORAGE_KEY = 'polski-progress-v1';
const PENDING_STORAGE_KEY = 'polski-progress-pending-v1';
const EMPTY_PROGRESS: LearnerProgress = {
  completedLessonIds: [],
  scores: {},
  activityProgress: {},
  totalXp: 0,
  dailyXp: 0,
  streak: 0,
  bestStreak: 0,
  lastStudyDate: null,
  vocabulary: [],
  vocabularyDeleted: {},
  mistakes: [],
  mistakesResolved: {},
  coins: 0,
  claimedChests: [],
  lastDailyChestDate: null,
  streakFreezes: 0,
  streakFrozenDate: null,
  ownedAvatars: [],
  selectedAvatar: null,
  rewardsUpdatedAt: null,
};

function localDateKey(date = new Date()): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return year + '-' + month + '-' + day;
}

function shiftDate(dateKey: string, offset: number): string {
  const [year, month, day] = dateKey.split('-').map(Number);
  const date = new Date(year, month - 1, day + offset);
  return localDateKey(date);
}

export function mergeDeletedMap(
  a: Record<string, string> | undefined,
  b: Record<string, string> | undefined,
  maxEntries = 200,
): Record<string, string> {
  const combined: Record<string, string> = {};
  for (const src of [a, b]) {
    if (!src) continue;
    for (const [key, ts] of Object.entries(src)) {
      if (typeof ts !== 'string') continue;
      if (!combined[key] || ts > combined[key]) combined[key] = ts;
    }
  }
  const entries = Object.entries(combined)
    .sort((x, y) => y[1].localeCompare(x[1]))
    .slice(0, maxEntries);
  return Object.fromEntries(entries);
}

export function mergeVocabularyLists(
  remote: SavedWord[] | undefined,
  local: SavedWord[] | undefined,
  deleted: Record<string, string> | undefined,
): SavedWord[] {
  const map = new Map<string, SavedWord>();
  for (const list of [remote, local]) {
    if (!list) continue;
    for (const entry of list) {
      if (!entry?.id) continue;
      const entryTs = entry.lastReviewedAt ?? entry.addedAt ?? '';
      const delTs = deleted?.[entry.id];
      if (delTs && delTs >= entryTs) continue;
      const existing = map.get(entry.id);
      if (!existing) {
        map.set(entry.id, entry);
        continue;
      }
      const existingTs = existing.lastReviewedAt ?? existing.addedAt ?? '';
      const entryStep = entry.srsStep ?? entry.masteredCount ?? 0;
      const existingStep = existing.srsStep ?? existing.masteredCount ?? 0;
      if (entryTs > existingTs || (entryTs === existingTs && entryStep > existingStep)) {
        map.set(entry.id, entry);
      }
    }
  }
  return [...map.values()].sort((a, b) => (b.addedAt ?? '').localeCompare(a.addedAt ?? ''));
}

export function mergeMistakeLists(
  remote: SavedMistake[] | undefined,
  local: SavedMistake[] | undefined,
  resolved: Record<string, string> | undefined,
): SavedMistake[] {
  const map = new Map<string, SavedMistake>();
  for (const list of [remote, local]) {
    if (!list) continue;
    for (const entry of list) {
      if (!entry?.key) continue;
      const resTs = resolved?.[entry.key];
      if (resTs && resTs >= (entry.updatedAt ?? '')) continue;
      const existing = map.get(entry.key);
      if (!existing) {
        map.set(entry.key, entry);
        continue;
      }
      if ((entry.updatedAt ?? '') > (existing.updatedAt ?? '')
        || (entry.updatedAt === existing.updatedAt && entry.wrongCount > existing.wrongCount)) {
        map.set(entry.key, entry);
      }
    }
  }
  return [...map.values()]
    .sort((a, b) => (b.updatedAt ?? '').localeCompare(a.updatedAt ?? ''))
    .slice(0, 80);
}

function mergeProgress(remote: LearnerProgress, local: LearnerProgress): LearnerProgress {
  const remoteIds = new Set(remote.completedLessonIds);
  const completedLessonIds = [...new Set([...remote.completedLessonIds, ...local.completedLessonIds])].sort((a, b) => a - b);
  const scores = { ...remote.scores };
  for (const [lessonId, score] of Object.entries(local.scores)) {
    scores[lessonId] = Math.max(scores[lessonId] ?? 0, score);
  }
  const activityProgress = { ...(remote.activityProgress ?? {}) };
  for (const [key, activity] of Object.entries(local.activityProgress ?? {})) {
    if (!activityProgress[key] || activity.savedAt >= activityProgress[key].savedAt) activityProgress[key] = activity;
  }
  const newLocalXp = local.completedLessonIds
    .filter((lessonId) => !remoteIds.has(lessonId))
    .reduce((total, lessonId) => total + 10 + Math.round((local.scores[String(lessonId)] ?? 0) / 10), 0);
  const localIsNewer = (local.lastStudyDate ?? '') > (remote.lastStudyDate ?? '');
  const sameStudyDay = local.lastStudyDate === remote.lastStudyDate;

  const vocabularyDeleted = mergeDeletedMap(remote.vocabularyDeleted, local.vocabularyDeleted);
  const vocabulary = mergeVocabularyLists(remote.vocabulary, local.vocabulary, vocabularyDeleted);
  const mistakesResolved = mergeDeletedMap(remote.mistakesResolved, local.mistakesResolved);
  const mistakes = mergeMistakeLists(remote.mistakes, local.mistakes, mistakesResolved);

  const claimedChests = [...new Set([...(remote.claimedChests ?? []), ...(local.claimedChests ?? [])])];
  const ownedAvatars = [...new Set([...(remote.ownedAvatars ?? []), ...(local.ownedAvatars ?? [])])];
  const lastDailyChestDate = [remote.lastDailyChestDate, local.lastDailyChestDate]
    .filter((d): d is string => !!d)
    .sort()
    .at(-1) ?? null;
  const streakFrozenDate = [remote.streakFrozenDate, local.streakFrozenDate]
    .filter((d): d is string => !!d)
    .sort()
    .at(-1) ?? null;
  const remoteRewardsTs = remote.rewardsUpdatedAt ?? '';
  const localRewardsTs = local.rewardsUpdatedAt ?? '';
  const useLocalRewards = localRewardsTs > remoteRewardsTs;

  return {
    completedLessonIds,
    scores,
    activityProgress,
    totalXp: Math.max(local.totalXp, remote.totalXp + newLocalXp),
    dailyXp: localIsNewer ? local.dailyXp : sameStudyDay ? Math.max(remote.dailyXp, local.dailyXp) : remote.dailyXp,
    streak: localIsNewer ? local.streak : sameStudyDay ? Math.max(remote.streak, local.streak) : remote.streak,
    bestStreak: Math.max(remote.bestStreak, local.bestStreak),
    lastStudyDate: localIsNewer ? local.lastStudyDate : remote.lastStudyDate,
    vocabulary,
    vocabularyDeleted,
    mistakes,
    mistakesResolved,
    coins: localRewardsTs === remoteRewardsTs
      ? Math.max(remote.coins ?? 0, local.coins ?? 0)
      : (useLocalRewards ? (local.coins ?? 0) : (remote.coins ?? 0)),
    claimedChests,
    lastDailyChestDate,
    streakFreezes: localRewardsTs === remoteRewardsTs
      ? Math.max(remote.streakFreezes ?? 0, local.streakFreezes ?? 0)
      : (useLocalRewards ? (local.streakFreezes ?? 0) : (remote.streakFreezes ?? 0)),
    streakFrozenDate,
    ownedAvatars,
    selectedAvatar: useLocalRewards
      ? (local.selectedAvatar ?? null)
      : (remote.selectedAvatar ?? local.selectedAvatar ?? null),
    rewardsUpdatedAt: useLocalRewards ? (local.rewardsUpdatedAt ?? null) : (remote.rewardsUpdatedAt ?? null),
  };
}

@Injectable({ providedIn: 'root' })
export class ProgressService {
  private readonly analytics = inject(AnalyticsService);
  readonly progress = signal<LearnerProgress>(this.readProgress());
  readonly syncError = signal<string | null>(null);
  private userId: string | null = null;
  private syncQueue = Promise.resolve();

  constructor() {
    if (typeof window !== 'undefined') {
      window.addEventListener('online', () => {
        if (this.userId) this.persist(this.progress(), this.userId);
      });
    }
  }

  hasAuthenticatedUser(): boolean {
    return this.userId !== null;
  }

  async loadForUser(userId: string): Promise<void> {
    const sameUser = this.userId === userId;
    const localKey = `${STORAGE_KEY}:${userId}`;
    const pending = this.readStoredProgress(`${PENDING_STORAGE_KEY}:${userId}`);
    const local = this.readStoredProgress(localKey) ?? (sameUser ? this.progress() : null);
    const legacy = sameUser ? null : this.readStoredProgress(STORAGE_KEY);
    let remote: LearnerProgress | null = null;
    try {
      const { data, error } = await supabase
        .from('user_progress')
        .select('progress')
        .eq('user_id', userId)
        .maybeSingle();
      if (error) throw error;
      const saved = data?.progress as Partial<LearnerProgress> | undefined;
      remote = saved
        ? {
            ...EMPTY_PROGRESS,
            ...saved,
            activityProgress: saved.activityProgress ?? {},
            vocabulary: saved.vocabulary ?? [],
            vocabularyDeleted: saved.vocabularyDeleted ?? {},
            mistakes: saved.mistakes ?? [],
            mistakesResolved: saved.mistakesResolved ?? {},
            coins: saved.coins ?? 0,
            claimedChests: saved.claimedChests ?? [],
            lastDailyChestDate: saved.lastDailyChestDate ?? null,
            streakFreezes: saved.streakFreezes ?? 0,
            streakFrozenDate: saved.streakFrozenDate ?? null,
            ownedAvatars: saved.ownedAvatars ?? [],
            selectedAvatar: saved.selectedAvatar ?? null,
            rewardsUpdatedAt: saved.rewardsUpdatedAt ?? null,
          }
        : null;
    } catch {
      let progress = { ...EMPTY_PROGRESS };
      for (const saved of [local, legacy, pending]) if (saved) progress = mergeProgress(progress, saved);
      this.userId = userId;
      this.progress.set(progress);
      this.syncPersonProperties(progress);
      this.syncError.set('Nie udało się wczytać postępów z chmury. Zapisuję je na tym urządzeniu i zsynchronizuję po powrocie połączenia.');
      this.analytics.track('progress_sync_error', { metadata: { phase: 'load' } });
      this.storeProgress(localKey, progress);
      if (pending || local || legacy) this.persist(progress, userId);
      return;
    }

    let progress = remote ?? { ...EMPTY_PROGRESS };
    for (const saved of [local, legacy, pending]) if (saved) progress = mergeProgress(progress, saved);
    this.userId = userId;
    this.progress.set(progress);
    this.syncPersonProperties(progress);
    this.syncError.set(null);
    this.storeProgress(localKey, progress);
    try {
      if (typeof localStorage !== 'undefined') localStorage.removeItem(STORAGE_KEY);
    } catch {
      // The legacy key is only a one-time migration source.
    }
    if (pending || (!remote && (local || legacy))) this.persist(progress, userId);
  }

  async flush(): Promise<void> {
    await this.syncQueue;
  }

  hasCompleted(lessonId: number): boolean {
    return this.progress().completedLessonIds.includes(lessonId);
  }

  isUnlocked(_lessonId: number, _firstLessonId = 1): boolean {
    return true;
  }

  scoreFor(lessonId: number): number | null {
    return this.progress().scores[String(lessonId)] ?? null;
  }

  completeLesson(lessonId: number, score: number, xp: number): Promise<void> {
    const current = this.progress();
    const today = localDateKey();
    const alreadyComplete = current.completedLessonIds.includes(lessonId);
    const next = { ...current, scores: { ...current.scores } };
    next.scores[String(lessonId)] = Math.max(next.scores[String(lessonId)] ?? 0, score);

    if (!alreadyComplete) {
      next.completedLessonIds = [...current.completedLessonIds, lessonId].sort((a, b) => a - b);
      next.totalXp += xp;
      next.dailyXp = current.lastStudyDate === today ? current.dailyXp + xp : xp;
      next.coins = (current.coins ?? 0) + LESSON_FIRST_CLEAR_COINS;
      next.rewardsUpdatedAt = new Date().toISOString();
    } else if (current.lastStudyDate !== today) {
      next.dailyXp = 0;
    }

    if (current.lastStudyDate !== today) {
      const missedYesterday = current.lastStudyDate === shiftDate(today, -2);
      if (current.lastStudyDate === shiftDate(today, -1)) {
        next.streak = current.streak + 1;
      } else if (missedYesterday && (current.streakFreezes ?? 0) > 0 && current.streak > 0) {
        next.streakFreezes = (current.streakFreezes ?? 0) - 1;
        next.streakFrozenDate = shiftDate(today, -1);
        next.streak = current.streak + 1;
        next.rewardsUpdatedAt = new Date().toISOString();
      } else {
        next.streak = 1;
      }
      next.lastStudyDate = today;
      next.bestStreak = Math.max(current.bestStreak, next.streak);
    }

    this.syncPersonProperties(next);
    return this.save(next);
  }

  todayKey(): string {
    return localDateKey();
  }

  hasClaimedChest(chestId: string): boolean {
    return (this.progress().claimedChests ?? []).includes(chestId);
  }

  hasClaimedDailyChestToday(): boolean {
    return this.progress().lastDailyChestDate === localDateKey();
  }

  canClaimDailyChest(): boolean {
    return this.progress().dailyXp >= 20 && !this.hasClaimedDailyChestToday();
  }

  claimPathChest(chestId: string, coins: number): boolean {
    const current = this.progress();
    const claimed = current.claimedChests ?? [];
    if (claimed.includes(chestId)) return false;
    void this.save({
      ...current,
      coins: (current.coins ?? 0) + coins,
      claimedChests: [...claimed, chestId],
      rewardsUpdatedAt: new Date().toISOString(),
    });
    this.analytics.track('chest_opened', {
      metadata: { chest_id: chestId, kind: 'path', coins },
    });
    return true;
  }

  claimDailyChest(): number {
    if (!this.canClaimDailyChest()) return 0;
    const current = this.progress();
    void this.save({
      ...current,
      coins: (current.coins ?? 0) + DAILY_CHEST_COINS,
      lastDailyChestDate: localDateKey(),
      rewardsUpdatedAt: new Date().toISOString(),
    });
    this.analytics.track('chest_opened', {
      metadata: { kind: 'daily', coins: DAILY_CHEST_COINS },
    });
    return DAILY_CHEST_COINS;
  }

  buyStreakFreeze(): boolean {
    const current = this.progress();
    const coins = current.coins ?? 0;
    const freezes = current.streakFreezes ?? 0;
    if (coins < STREAK_FREEZE_PRICE || freezes >= MAX_STREAK_FREEZES) return false;
    void this.save({
      ...current,
      coins: coins - STREAK_FREEZE_PRICE,
      streakFreezes: freezes + 1,
      rewardsUpdatedAt: new Date().toISOString(),
    });
    this.analytics.track('shop_item_purchased', {
      metadata: { item: 'streak_freeze', price: STREAK_FREEZE_PRICE, owned_after: freezes + 1 },
    });
    return true;
  }

  buyAvatar(avatarId: string, price: number): boolean {
    const current = this.progress();
    const coins = current.coins ?? 0;
    const owned = current.ownedAvatars ?? [];
    if (owned.includes(avatarId) || coins < price) return false;
    void this.save({
      ...current,
      coins: coins - price,
      ownedAvatars: [...owned, avatarId],
      selectedAvatar: avatarId,
      rewardsUpdatedAt: new Date().toISOString(),
    });
    this.analytics.track('shop_item_purchased', {
      metadata: { item: 'avatar', avatar_id: avatarId, price },
    });
    return true;
  }

  equipAvatar(avatarId: string | null): void {
    const current = this.progress();
    if (avatarId !== null && !(current.ownedAvatars ?? []).includes(avatarId)) return;
    void this.save({
      ...current,
      selectedAvatar: avatarId,
      rewardsUpdatedAt: new Date().toISOString(),
    });
  }

  activityFor(lessonId: number, activityId: string): SavedActivityProgress | null {
    return this.progress().activityProgress?.[`${lessonId}:${activityId}`] ?? null;
  }

  hasCompletedActivity(lessonId: number, activityId: string): boolean {
    return this.activityFor(lessonId, activityId) !== null;
  }

  saveActivityProgress(
    lessonId: number,
    activityId: string,
    answers: Record<string, string>,
    results: Record<string, boolean>,
  ): Promise<void> {
    const current = this.progress();
    return this.save({
      ...current,
      activityProgress: {
        ...(current.activityProgress ?? {}),
        [`${lessonId}:${activityId}`]: { answers, results, savedAt: new Date().toISOString() },
      },
    });
  }

  saveVocabulary(vocabulary: SavedWord[], vocabularyDeleted?: Record<string, string>): void {
    const current = this.progress();
    const mergedDeleted = mergeDeletedMap(current.vocabularyDeleted, vocabularyDeleted);
    void this.save({
      ...current,
      vocabulary,
      vocabularyDeleted: mergedDeleted,
    });
  }

  saveMistakes(mistakes: SavedMistake[], mistakesResolved?: Record<string, string>): void {
    const current = this.progress();
    const mergedResolved = mergeDeletedMap(current.mistakesResolved, mistakesResolved);
    void this.save({
      ...current,
      mistakes,
      mistakesResolved: mergedResolved,
    });
  }

  private readProgress(): LearnerProgress {
    return this.readStoredProgress(STORAGE_KEY) ?? { ...EMPTY_PROGRESS };
  }

  private readStoredProgress(key: string): LearnerProgress | null {
    if (typeof localStorage === 'undefined') return null;
    try {
      const raw = localStorage.getItem(key);
      if (!raw) return null;
      const progress = { ...EMPTY_PROGRESS, ...JSON.parse(raw) } as LearnerProgress;
      progress.activityProgress ??= {};
      progress.vocabulary ??= [];
      progress.vocabularyDeleted ??= {};
      progress.mistakes ??= [];
      progress.mistakesResolved ??= {};
      progress.coins ??= 0;
      progress.claimedChests ??= [];
      progress.lastDailyChestDate ??= null;
      progress.streakFreezes ??= 0;
      progress.streakFrozenDate ??= null;
      progress.ownedAvatars ??= [];
      progress.selectedAvatar ??= null;
      progress.rewardsUpdatedAt ??= null;
      return progress;
    } catch {
      return null;
    }
  }

  private save(progress: LearnerProgress): Promise<void> {
    this.progress.set(progress);
    const userId = this.userId;
    this.storeProgress(userId ? `${STORAGE_KEY}:${userId}` : STORAGE_KEY, progress);
    if (!userId) return Promise.resolve();
    this.persist(progress, userId);
    return this.flush();
  }

  private storeProgress(key: string, progress: LearnerProgress): void {
    try {
      if (typeof localStorage !== 'undefined') localStorage.setItem(key, JSON.stringify(progress));
    } catch {
      // Keep the in-memory and remote progress even if browser storage is unavailable.
    }
  }

  private persist(progress: LearnerProgress, userId: string): void {
    const pendingKey = `${PENDING_STORAGE_KEY}:${userId}`;
    const localKey = `${STORAGE_KEY}:${userId}`;
    this.storeProgress(pendingKey, progress);
    this.syncQueue = this.syncQueue.then(async () => {
      const { data, error: readError } = await supabase
        .from('user_progress')
        .select('progress')
        .eq('user_id', userId)
        .maybeSingle();
      if (readError) throw readError;
      const remote = (data?.progress as LearnerProgress | undefined) ?? null;
      const merged = remote ? mergeProgress(remote, progress) : progress;
      const { error: writeError } = await supabase.from('user_progress').upsert({
        user_id: userId,
        progress: merged,
        updated_at: new Date().toISOString(),
      });
      if (writeError) throw writeError;
      if (this.userId === userId) {
        this.syncError.set(null);
        if (JSON.stringify(this.progress()) === JSON.stringify(progress)) {
          this.progress.set(merged);
          this.storeProgress(localKey, merged);
        }
      } else {
        this.storeProgress(localKey, merged);
      }
      try {
        if (localStorage.getItem(pendingKey) === JSON.stringify(progress)) localStorage.removeItem(pendingKey);
      } catch {
        // Local progress remains available even if browser storage is unavailable.
      }
    }).catch(() => {
      if (this.userId === userId) {
        this.syncError.set('Nie udało się zsynchronizować postępów. Zachowałem je na tym urządzeniu i spróbuję ponownie po powrocie połączenia.');
        this.analytics.track('progress_sync_error', { metadata: { phase: 'save' } });
      }
    });
  }

  private syncPersonProperties(progress: LearnerProgress): void {
    this.analytics.updatePersonProperties({
      completed_lessons_count: progress.completedLessonIds.length,
      total_xp: progress.totalXp,
      streak: progress.streak,
    });
  }
}
