import { Injectable, computed, signal } from '@angular/core';

export interface SavedMistake {
  key: string;
  lessonId: number;
  lessonTitle: string;
  activityId: string;
  activityTitle: string;
  prompt: string;
  accepted: string[];
  options?: string[];
  userAnswer: string;
  wrongCount: number;
  updatedAt: string;
}

const STORAGE_KEY = 'polski-mistakes-v1';
const MAX_MISTAKES = 80;

@Injectable({ providedIn: 'root' })
export class MistakesService {
  readonly mistakes = signal<SavedMistake[]>(this.readMistakes());
  readonly count = computed(() => this.mistakes().length);

  recordMistake(entry: Omit<SavedMistake, 'wrongCount' | 'updatedAt'>): void {
    if (!entry.prompt.trim() || !entry.accepted.length) return;
    const now = new Date().toISOString();
    const current = this.mistakes();
    const existing = current.find((item) => item.key === entry.key);
    const updated: SavedMistake = {
      ...entry,
      wrongCount: existing ? existing.wrongCount + 1 : 1,
      updatedAt: now,
    };
    const next = [updated, ...current.filter((item) => item.key !== entry.key)].slice(0, MAX_MISTAKES);
    this.persist(next);
  }

  resolveMistake(key: string): void {
    const current = this.mistakes();
    if (!current.some((item) => item.key === key)) return;
    this.persist(current.filter((item) => item.key !== key));
  }

  clearAll(): void {
    this.persist([]);
  }

  private readMistakes(): SavedMistake[] {
    if (typeof localStorage === 'undefined') return [];
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return [];
      const parsed = JSON.parse(raw) as unknown;
      return Array.isArray(parsed) ? (parsed as SavedMistake[]) : [];
    } catch {
      return [];
    }
  }

  private persist(mistakes: SavedMistake[]): void {
    this.mistakes.set(mistakes);
    try {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(mistakes));
      }
    } catch {
      // Storage is optional.
    }
  }
}
