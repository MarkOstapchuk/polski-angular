import { Injectable, computed, effect, inject, signal } from '@angular/core';
import type { Language } from '../i18n/language.service';
import { SRS_INTERVALS_DAYS, type SavedWord } from './learning-data.types';
import { mergeDeletedMap, mergeVocabularyLists, ProgressService } from './progress.service';

export { SRS_INTERVALS_DAYS, type SavedWord } from './learning-data.types';

const STORAGE_KEY = 'polski-vocabulary-v1';
const DELETED_STORAGE_KEY = 'polski-vocabulary-deleted-v1';
const DAY_MS = 86_400_000;

function normalizeWordId(word: string): string {
  return word.trim().toLowerCase();
}

export function isWordDue(word: SavedWord, nowMs = Date.now()): boolean {
  if (!word.nextReviewAt) return true;
  const dueMs = new Date(word.nextReviewAt).getTime();
  return Number.isNaN(dueMs) || dueMs <= nowMs;
}

@Injectable({ providedIn: 'root' })
export class VocabularyService {
  private readonly progress = inject(ProgressService);
  private deletedMap: Record<string, string> = this.readDeleted();

  readonly words = signal<SavedWord[]>(this.readWords());
  readonly count = computed(() => this.words().length);
  readonly dueWords = computed(() => {
    const now = Date.now();
    return this.words().filter((word) => isWordDue(word, now));
  });
  readonly dueCount = computed(() => this.dueWords().length);

  constructor() {
    effect(() => {
      const p = this.progress.progress();
      if (!this.progress.hasAuthenticatedUser()) return;
      const cloudWords = p.vocabulary ?? [];
      const cloudDeleted = p.vocabularyDeleted ?? {};
      const mergedDeleted = mergeDeletedMap(cloudDeleted, this.deletedMap);
      const localWords = this.words();
      const merged = mergeVocabularyLists(cloudWords, localWords, mergedDeleted);

      this.deletedMap = mergedDeleted;
      this.writeDeleted(mergedDeleted);

      if (JSON.stringify(merged) !== JSON.stringify(localWords)) {
        this.words.set(merged);
        this.writeLocal(merged);
      }

      if (
        JSON.stringify(merged) !== JSON.stringify(cloudWords)
        || JSON.stringify(mergedDeleted) !== JSON.stringify(cloudDeleted)
      ) {
        queueMicrotask(() => {
          this.progress.saveVocabulary(merged, mergedDeleted);
        });
      }
    });
  }

  isSaved(word: string): boolean {
    const id = normalizeWordId(word);
    return this.words().some((entry) => entry.id === id);
  }

  nextIntervalDays(word: SavedWord): number {
    const currentStep = word.srsStep ?? Math.min(word.masteredCount, SRS_INTERVALS_DAYS.length);
    const nextStepIdx = Math.min(currentStep, SRS_INTERVALS_DAYS.length - 1);
    return SRS_INTERVALS_DAYS[nextStepIdx];
  }

  saveWord(word: string, translations: string[], locale: Language, lessonId?: number): void {
    const cleanWord = word.trim();
    const id = normalizeWordId(cleanWord);
    if (!id || !translations.length) return;

    const now = new Date().toISOString();
    if (this.deletedMap[id]) {
      const { [id]: _, ...rest } = this.deletedMap;
      this.deletedMap = rest;
      this.writeDeleted(this.deletedMap);
    }

    const current = this.words();
    const existing = current.find((entry) => entry.id === id);
    const nextEntry: SavedWord = existing
      ? {
          ...existing,
          translations: translations.slice(0, 6),
          locale,
          lessonId: lessonId ?? existing.lessonId,
        }
      : {
          id,
          word: cleanWord,
          translations: translations.slice(0, 6),
          locale,
          lessonId,
          addedAt: now,
          masteredCount: 0,
          lastReviewedAt: null,
          srsStep: 0,
          intervalDays: 0,
          nextReviewAt: now,
        };

    const next = [nextEntry, ...current.filter((entry) => entry.id !== id)];
    this.persist(next);
  }

  removeWord(wordOrId: string): void {
    const id = normalizeWordId(wordOrId);
    const now = new Date().toISOString();
    this.deletedMap = mergeDeletedMap(this.deletedMap, { [id]: now });
    this.writeDeleted(this.deletedMap);
    const next = this.words().filter((entry) => entry.id !== id);
    this.persist(next);
  }

  markReviewed(id: string, known: boolean): void {
    const nowMs = Date.now();
    const now = new Date(nowMs).toISOString();
    const next = this.words().map((entry) => {
      if (entry.id !== id) return entry;
      if (!known) {
        return {
          ...entry,
          masteredCount: 0,
          lastReviewedAt: now,
          srsStep: 0,
          intervalDays: 0,
          nextReviewAt: now,
        };
      }
      const prevStep = entry.srsStep ?? Math.min(entry.masteredCount, SRS_INTERVALS_DAYS.length);
      const nextStep = Math.min(prevStep + 1, SRS_INTERVALS_DAYS.length);
      const intervalDays = SRS_INTERVALS_DAYS[nextStep - 1];
      return {
        ...entry,
        masteredCount: entry.masteredCount + 1,
        lastReviewedAt: now,
        srsStep: nextStep,
        intervalDays,
        nextReviewAt: new Date(nowMs + intervalDays * DAY_MS).toISOString(),
      };
    });
    this.persist(next);
  }

  private readWords(): SavedWord[] {
    if (typeof localStorage === 'undefined') return [];
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return [];
      const parsed = JSON.parse(raw) as unknown;
      return Array.isArray(parsed) ? (parsed as SavedWord[]) : [];
    } catch {
      return [];
    }
  }

  private readDeleted(): Record<string, string> {
    if (typeof localStorage === 'undefined') return {};
    try {
      const raw = localStorage.getItem(DELETED_STORAGE_KEY);
      if (!raw) return {};
      const parsed = JSON.parse(raw) as unknown;
      return parsed && typeof parsed === 'object' ? (parsed as Record<string, string>) : {};
    } catch {
      return {};
    }
  }

  private writeDeleted(deleted: Record<string, string>): void {
    try {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(DELETED_STORAGE_KEY, JSON.stringify(deleted));
      }
    } catch {
      // Storage is optional.
    }
  }

  private writeLocal(words: SavedWord[]): void {
    try {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(words));
      }
    } catch {
      // Storage is optional.
    }
  }

  private persist(words: SavedWord[]): void {
    this.words.set(words);
    this.writeLocal(words);
    this.progress.saveVocabulary(words, this.deletedMap);
  }
}
