import { Injectable, computed, signal } from '@angular/core';
import type { Language } from '../i18n/language.service';

export interface SavedWord {
  id: string;
  word: string;
  translations: string[];
  locale: Language;
  lessonId?: number;
  addedAt: string;
  masteredCount: number;
  lastReviewedAt: string | null;
}

const STORAGE_KEY = 'polski-vocabulary-v1';

function normalizeWordId(word: string): string {
  return word.trim().toLowerCase();
}

@Injectable({ providedIn: 'root' })
export class VocabularyService {
  readonly words = signal<SavedWord[]>(this.readWords());
  readonly count = computed(() => this.words().length);

  isSaved(word: string): boolean {
    const id = normalizeWordId(word);
    return this.words().some((entry) => entry.id === id);
  }

  saveWord(word: string, translations: string[], locale: Language, lessonId?: number): void {
    const cleanWord = word.trim();
    const id = normalizeWordId(cleanWord);
    if (!id || !translations.length) return;

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
          addedAt: new Date().toISOString(),
          masteredCount: 0,
          lastReviewedAt: null,
        };

    const next = [nextEntry, ...current.filter((entry) => entry.id !== id)];
    this.persist(next);
  }

  removeWord(wordOrId: string): void {
    const id = normalizeWordId(wordOrId);
    const next = this.words().filter((entry) => entry.id !== id);
    this.persist(next);
  }

  markReviewed(id: string, known: boolean): void {
    const now = new Date().toISOString();
    const next = this.words().map((entry) =>
      entry.id === id
        ? {
            ...entry,
            masteredCount: known ? entry.masteredCount + 1 : 0,
            lastReviewedAt: now,
          }
        : entry,
    );
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

  private persist(words: SavedWord[]): void {
    this.words.set(words);
    try {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(words));
      }
    } catch {
      // Storage is optional.
    }
  }
}
