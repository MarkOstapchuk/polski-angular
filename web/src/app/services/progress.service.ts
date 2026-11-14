import { Injectable, signal } from '@angular/core';
import { supabase } from './supabase.client';

export interface LearnerProgress {
  completedLessonIds: number[];
  scores: Record<string, number>;
  totalXp: number;
  dailyXp: number;
  streak: number;
  bestStreak: number;
  lastStudyDate: string | null;
}

const STORAGE_KEY = 'polski-progress-v1';
const EMPTY_PROGRESS: LearnerProgress = {
  completedLessonIds: [],
  scores: {},
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

@Injectable({ providedIn: 'root' })
export class ProgressService {
  readonly progress = signal<LearnerProgress>(this.readProgress());
  readonly syncError = signal<string | null>(null);
  private userId: string | null = null;
  private syncQueue = Promise.resolve();

  async loadForUser(userId: string): Promise<void> {
    if (this.userId === userId) return;

    const local = this.readStoredProgress(`${STORAGE_KEY}:${userId}`);
    const legacy = this.readStoredProgress(STORAGE_KEY);
    const { data, error } = await supabase
      .from('user_progress')
      .select('progress')
      .eq('user_id', userId)
      .maybeSingle();
    if (error) {
      this.syncError.set('Nie udało się wczytać postępów z chmury.');
      throw error;
    }

    const progress = (data?.progress as LearnerProgress | undefined) ?? local ?? legacy ?? { ...EMPTY_PROGRESS };
    this.userId = userId;
    this.progress.set(progress);
    this.syncError.set(null);
    this.storeProgress(`${STORAGE_KEY}:${userId}`, progress);
    try {
      if (typeof localStorage !== 'undefined') localStorage.removeItem(STORAGE_KEY);
    } catch {
      // The legacy key is only a one-time migration source.
    }
    if (!data && (local || legacy)) this.persist(progress, userId);
  }

  async flush(): Promise<void> {
    await this.syncQueue;
  }

  hasCompleted(lessonId: number): boolean {
    return this.progress().completedLessonIds.includes(lessonId);
  }

  isUnlocked(lessonId: number): boolean {
    return lessonId === 1 || this.hasCompleted(lessonId - 1);
  }

  scoreFor(lessonId: number): number | null {
    return this.progress().scores[String(lessonId)] ?? null;
  }

  completeLesson(lessonId: number, score: number, xp: number): void {
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

    this.save(next);
  }

  private readProgress(): LearnerProgress {
    return this.readStoredProgress(STORAGE_KEY) ?? { ...EMPTY_PROGRESS };
  }

  private readStoredProgress(key: string): LearnerProgress | null {
    if (typeof localStorage === 'undefined') return null;
    try {
      const raw = localStorage.getItem(key);
      if (!raw) return null;
      return { ...EMPTY_PROGRESS, ...JSON.parse(raw) } as LearnerProgress;
    } catch {
      return null;
    }
  }

  private save(progress: LearnerProgress): void {
    this.progress.set(progress);
    const userId = this.userId;
    this.storeProgress(userId ? `${STORAGE_KEY}:${userId}` : STORAGE_KEY, progress);
    if (userId) this.persist(progress, userId);
  }

  private storeProgress(key: string, progress: LearnerProgress): void {
    try {
      if (typeof localStorage !== 'undefined') localStorage.setItem(key, JSON.stringify(progress));
    } catch {
      // Keep the in-memory and remote progress even if browser storage is unavailable.
    }
  }

  private persist(progress: LearnerProgress, userId: string): void {
    this.syncQueue = this.syncQueue.then(async () => {
      const { error } = await supabase.from('user_progress').upsert({
        user_id: userId,
        progress,
        updated_at: new Date().toISOString(),
      });
      if (this.userId === userId) {
        this.syncError.set(error ? 'Nie udało się zapisać postępów w chmurze.' : null);
      }
    }).catch(() => {
      if (this.userId === userId) this.syncError.set('Nie udało się zapisać postępów w chmurze.');
    });
  }
}
