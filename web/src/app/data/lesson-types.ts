export enum ActivityKind {
  Choice = 'choice',
  Typed = 'typed',
  Classify = 'classify',
  Match = 'match',
  LetterCloze = 'letter-cloze',
}

export type ActivityUxMode =
  | 'choice'
  | 'word-bank'
  | 'word-order'
  | 'dialogue-order'
  | 'multi-gap'
  | 'classify'
  | 'match'
  | 'letter-cloze'
  | 'prompt-gap'
  | 'typed';

export type ItemUxMode = ActivityUxMode | 'long-text';

export interface ChoiceOption {
  value: string;
  label: string;
}

export interface MultiGapMeta {
  gapCount: number;
  inlineParts: string[];
  labels: string[];
}

export interface WordOrderMeta {
  tokens: string[];
  separator: ' ';
  isSentenceOrder: boolean;
}

export interface PromptGapMeta {
  segments: Array<{ text: string; isGap: boolean }>;
  letterAssist: string[];
}

export interface WordBankEntry {
  value: string;
  label: string;
  expectedCount: number;
}

export interface LetterCloze {
  parts: string[];
  gaps: string[];
}

export interface ActivityItem {
  id: string;
  prompt: string;
  accepted: string[];
  options?: string[];
  hint?: string;
  explanation?: string;
  letterCloze?: LetterCloze;
  /** 1-based index into the exercise's WORKBOOK_IMAGES list; shown inline next to the question. */
  image?: number;
  uxMode?: ItemUxMode;
  multiGapLabels?: string[];
  wordOrderTokens?: string[];
}

export interface Activity {
  id: string;
  sourceExerciseId: string;
  sourceLabel: string;
  kind: ActivityKind;
  title: string;
  instruction: string;
  audioUrl?: string;
  audioLabel?: string;
  items: ActivityItem[];
  uxMode?: ActivityUxMode;
  wordBank?: string[];
}

export interface AdaptedItem {
  raw: ActivityItem;
  id: string;
  uxMode: ItemUxMode;
  choiceOptions?: ChoiceOption[];
  multiGap?: MultiGapMeta;
  wordOrder?: WordOrderMeta;
  promptGap?: PromptGapMeta;
}

export interface AdaptedActivity {
  raw: Activity;
  id: string;
  uxMode: ActivityUxMode;
  items: AdaptedItem[];
  wordBank?: WordBankEntry[];
  chunkedMatch?: boolean;
  categories?: string[];
}

export interface Lesson {
  id: number;
  title: string;
  subtitle: string;
  topic: string;
  pages: string;
  color: 'coral' | 'blue' | 'lime' | 'violet' | 'yellow';
  activities: Activity[];
}

export const choice = (
  id: string,
  prompt: string,
  accepted: string | string[],
  options: string[],
  hint?: string,
): ActivityItem => ({ id, prompt, accepted: Array.isArray(accepted) ? accepted : [accepted], options, hint });

export const typed = (
  id: string,
  prompt: string,
  accepted: string | string[],
  hint?: string,
): ActivityItem => ({ id, prompt, accepted: Array.isArray(accepted) ? accepted : [accepted], hint });

export const typedExercise = (
  lessonId: number,
  exerciseNumber: number,
  title: string,
  instruction: string,
  entries: Array<[string, string | string[]]>,
): Activity => ({
  id: `l${String(lessonId).padStart(2, '0')}-exercise-${exerciseNumber}`,
  sourceExerciseId: `WB-L${String(lessonId).padStart(2, '0')}-E${String(exerciseNumber).padStart(2, '0')}`,
  sourceLabel: `Zeszyt ćwiczeń · ćwiczenie ${exerciseNumber}`,
  kind: ActivityKind.Typed,
  title,
  instruction,
  items: entries.map(([prompt, accepted], index) => typed(`q${index + 1}`, prompt, accepted)),
});

export const letterCloze = (
  id: string,
  prompt: string,
  accepted: string,
  parts: string[],
  gaps: string[],
): ActivityItem => ({ id, prompt, accepted: [accepted], letterCloze: { parts, gaps } });

