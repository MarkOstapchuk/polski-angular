import { Injectable, signal } from '@angular/core';

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
    if (typeof localStorage === 'undefined') return { ...EMPTY_PROGRESS };
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return { ...EMPTY_PROGRESS };
      return { ...EMPTY_PROGRESS, ...JSON.parse(raw) } as LearnerProgress;
    } catch {
      return { ...EMPTY_PROGRESS };
    }
  }

  private save(progress: LearnerProgress): void {
    this.progress.set(progress);
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    }
  }
}
