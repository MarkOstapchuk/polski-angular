export enum ActivityKind {
  Choice = 'choice',
  Typed = 'typed',
  Classify = 'classify',
  Match = 'match',
  LetterCloze = 'letter-cloze',
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

