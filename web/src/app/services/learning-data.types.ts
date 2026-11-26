import type { Language } from '../i18n/language.service';

export const SRS_INTERVALS_DAYS = [1, 3, 7, 14, 30] as const;

export interface SavedWord {
  id: string;
  word: string;
  translations: string[];
  locale: Language;
  lessonId?: number;
  addedAt: string;
  masteredCount: number;
  lastReviewedAt: string | null;
  srsStep?: number;
  intervalDays?: number;
  nextReviewAt?: string | null;
}

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
