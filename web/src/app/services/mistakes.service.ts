import { Injectable, computed, effect, inject, signal } from '@angular/core';
import type { SavedMistake } from './learning-data.types';
import { mergeDeletedMap, mergeMistakeLists, ProgressService } from './progress.service';

export type { SavedMistake } from './learning-data.types';

const STORAGE_KEY = 'polski-mistakes-v1';
const RESOLVED_STORAGE_KEY = 'polski-mistakes-resolved-v1';
const MAX_MISTAKES = 80;

@Injectable({ providedIn: 'root' })
export class MistakesService {
  private readonly progress = inject(ProgressService);
  private resolvedMap: Record<string, string> = this.readResolved();

  readonly mistakes = signal<SavedMistake[]>(this.readMistakes());
  readonly count = computed(() => this.mistakes().length);

  constructor() {
    effect(() => {
      const p = this.progress.progress();
      if (!this.progress.hasAuthenticatedUser()) return;
      const cloudMistakes = p.mistakes ?? [];
      const cloudResolved = p.mistakesResolved ?? {};
      const mergedResolved = mergeDeletedMap(cloudResolved, this.resolvedMap);
      const localMistakes = this.mistakes();
      const merged = mergeMistakeLists(cloudMistakes, localMistakes, mergedResolved);

      this.resolvedMap = mergedResolved;
      this.writeResolved(mergedResolved);

      if (JSON.stringify(merged) !== JSON.stringify(localMistakes)) {
        this.mistakes.set(merged);
        this.writeLocal(merged);
      }

      if (
        JSON.stringify(merged) !== JSON.stringify(cloudMistakes)
        || JSON.stringify(mergedResolved) !== JSON.stringify(cloudResolved)
      ) {
        queueMicrotask(() => {
          this.progress.saveMistakes(merged, mergedResolved);
        });
      }
    });
  }

  recordMistake(entry: Omit<SavedMistake, 'wrongCount' | 'updatedAt'>): void {
    if (!entry.prompt.trim() || !entry.accepted.length) return;
    const now = new Date().toISOString();
    if (this.resolvedMap[entry.key]) {
      const { [entry.key]: _, ...rest } = this.resolvedMap;
      this.resolvedMap = rest;
      this.writeResolved(this.resolvedMap);
    }

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
    const now = new Date().toISOString();
    this.resolvedMap = mergeDeletedMap(this.resolvedMap, { [key]: now });
    this.writeResolved(this.resolvedMap);
    this.persist(current.filter((item) => item.key !== key));
  }

  clearAll(): void {
    const now = new Date().toISOString();
    const cleared: Record<string, string> = {};
    for (const item of this.mistakes()) cleared[item.key] = now;
    this.resolvedMap = mergeDeletedMap(this.resolvedMap, cleared);
    this.writeResolved(this.resolvedMap);
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

  private readResolved(): Record<string, string> {
    if (typeof localStorage === 'undefined') return {};
    try {
      const raw = localStorage.getItem(RESOLVED_STORAGE_KEY);
      if (!raw) return {};
      const parsed = JSON.parse(raw) as unknown;
      return parsed && typeof parsed === 'object' ? (parsed as Record<string, string>) : {};
    } catch {
      return {};
    }
  }

  private writeResolved(resolved: Record<string, string>): void {
    try {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(RESOLVED_STORAGE_KEY, JSON.stringify(resolved));
      }
    } catch {
      // Storage is optional.
    }
  }

  private writeLocal(mistakes: SavedMistake[]): void {
    try {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(mistakes));
      }
    } catch {
      // Storage is optional.
    }
  }

  private persist(mistakes: SavedMistake[]): void {
    this.mistakes.set(mistakes);
    this.writeLocal(mistakes);
    this.progress.saveMistakes(mistakes, this.resolvedMap);
  }
}
