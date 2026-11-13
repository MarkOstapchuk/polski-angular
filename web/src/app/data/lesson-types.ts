export type ActivityKind = 'choice' | 'typed' | 'classify';

export interface ActivityItem {
  id: string;
  prompt: string;
  accepted: string[];
  options?: string[];
  hint?: string;
  explanation?: string;
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

