import { Injectable, inject, signal } from '@angular/core';
import { AnalyticsService } from './analytics.service';
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

  return {
    completedLessonIds,
    scores,
    activityProgress,
    totalXp: Math.max(local.totalXp, remote.totalXp + newLocalXp),
    dailyXp: localIsNewer ? local.dailyXp : sameStudyDay ? Math.max(remote.dailyXp, local.dailyXp) : remote.dailyXp,
    streak: localIsNewer ? local.streak : sameStudyDay ? Math.max(remote.streak, local.streak) : remote.streak,
    bestStreak: Math.max(remote.bestStreak, local.bestStreak),
    lastStudyDate: localIsNewer ? local.lastStudyDate : remote.lastStudyDate,
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
      remote = saved ? { ...EMPTY_PROGRESS, ...saved, activityProgress: saved.activityProgress ?? {} } : null;
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
    } else if (current.lastStudyDate !== today) {
      next.dailyXp = 0;
    }

    if (current.lastStudyDate !== today) {
      next.streak = current.lastStudyDate === shiftDate(today, -1) ? current.streak + 1 : 1;
      next.lastStudyDate = today;
      next.bestStreak = Math.max(current.bestStreak, next.streak);
    }

    this.syncPersonProperties(next);
    return this.save(next);
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
