import { COURSES, CourseSummary, LESSON_CATALOG, LessonSummary } from './lesson-catalog';
import type { Language } from '../i18n/language.service';

export interface PlacementQuestion {
  id: number;
  targetLessonId: number;
  level: 'A1' | 'A1+' | 'A2' | 'A2+' | 'B1';
  prompt: string;
  options: [string, string, string, string];
  correctIndex: number;
  topic: Record<Language, string>;
}

export interface PlacementAnswerRecord {
  questionId: number;
  selectedIndex: number | null;
  isCorrect: boolean;
  skipped: boolean;
}

export interface PlacementResult {
  score: number;
  total: number;
  levelCode: 'A1' | 'A1+' | 'A2' | 'A2+' | 'B1';
  recommendedLesson: LessonSummary;
  course: CourseSummary;
  records: PlacementAnswerRecord[];
}

export const PLACEMENT_QUESTIONS: PlacementQuestion[] = [
  {
    id: 1,
    targetLessonId: 1,
    level: 'A1',
    prompt: 'Cześć! ___ jestem Marek. Miło mi!',
    options: ['Ja', 'Ty', 'On', 'My'],
    correctIndex: 0,
    topic: {
      pl: 'Powitania i zaimki (Lekcja 1)',
      ru: 'Приветствия и местоимения (Урок 1)',
      en: 'Greetings & pronouns (Lesson 1)',
    },
  },
  {
    id: 2,
    targetLessonId: 4,
    level: 'A1',
    prompt: 'Czy ___ już trochę po polsku?',
    options: ['mówię', 'mówisz', 'mówi', 'mówią'],
    correctIndex: 1,
    topic: {
      pl: 'Czas teraźniejszy czasowników (Lekcja 4)',
      ru: 'Настоящее время глаголов (Урок 4)',
      en: 'Present tense verbs (Lesson 4)',
    },
  },
  {
    id: 3,
    targetLessonId: 8,
    level: 'A1',
    prompt: 'Poproszę gorącą ___ bez cukru.',
    options: ['kawa', 'kawę', 'kawie', 'kawy'],
    correctIndex: 1,
    topic: {
      pl: 'Biernik · zakupy i jedzenie (Lekcja 8)',
      ru: 'Винительный падеж · еда и покупки (Урок 8)',
      en: 'Accusative · food & ordering (Lesson 8)',
    },
  },
  {
    id: 4,
    targetLessonId: 13,
    level: 'A1',
    prompt: 'Wczoraj wieczorem ___ w kinie ze znajomymi.',
    options: ['jestem', 'będę', 'byłem', 'być'],
    correctIndex: 2,
    topic: {
      pl: 'Czas przeszły (Lekcja 13)',
      ru: 'Прошедшее время (Урок 13)',
      en: 'Past tense (Lesson 13)',
    },
  },
  {
    id: 5,
    targetLessonId: 16,
    level: 'A1+',
    prompt: 'Jutro ___ piękna pogoda i pójdziemy na spacer.',
    options: ['była', 'jest', 'będzie', 'był'],
    correctIndex: 2,
    topic: {
      pl: 'Czas przyszły i pogoda (Lekcja 16)',
      ru: 'Будущее время и погода (Урок 16)',
      en: 'Future tense & weather (Lesson 16)',
    },
  },
  {
    id: 6,
    targetLessonId: 21,
    level: 'A2',
    prompt: 'W sobotę ___ cały ten film od początku do końca.',
    options: ['oglądałem', 'obejrzałem', 'patrzę', 'widzę'],
    correctIndex: 1,
    topic: {
      pl: 'Aspekt czasownika (Lekcja 21)',
      ru: 'Вид глагола: совершенный и несовершенный (Урок 21)',
      en: 'Verb aspect (Lesson 21)',
    },
  },
  {
    id: 7,
    targetLessonId: 24,
    level: 'A2',
    prompt: 'Ta nowa kurtka jest ___ niż tamta w sklepie obok.',
    options: ['droga', 'droższa', 'najdroższa', 'drogo'],
    correctIndex: 1,
    topic: {
      pl: 'Stopniowanie przymiotników (Lekcja 24)',
      ru: 'Степени сравнения прилагательных (Урок 24)',
      en: 'Comparatives (Lesson 24)',
    },
  },
  {
    id: 8,
    targetLessonId: 27,
    level: 'A2+',
    prompt: 'Mój starszy brat jest ___ i pracuje w szpitalu.',
    options: ['lekarz', 'lekarza', 'lekarzem', 'lekarzowi'],
    correctIndex: 2,
    topic: {
      pl: 'Narzędnik · zawody i opisy (Lekcja 27 · Część 2)',
      ru: 'Творительный падеж · профессии (Урок 27 · Часть 2)',
      en: 'Instrumental · professions (Lesson 27 · Part 2)',
    },
  },
  {
    id: 9,
    targetLessonId: 35,
    level: 'B1',
    prompt: 'Nie ___ paszportu przed wyjazdem na lotnisko!',
    options: ['zapomnisz', 'zapomnij', 'zapomniałeś', 'zapominać'],
    correctIndex: 1,
    topic: {
      pl: 'Tryb rozkazujący (Lekcja 35 · Część 2)',
      ru: 'Повелительное наклонение (Урок 35 · Часть 2)',
      en: 'Imperative mood (Lesson 35 · Part 2)',
    },
  },
  {
    id: 10,
    targetLessonId: 45,
    level: 'B1',
    prompt: 'Gdybym ___ więcej czasu, uczyłbym się codziennie.',
    options: ['mam', 'miałem', 'miał', 'będę mieć'],
    correctIndex: 2,
    topic: {
      pl: 'Tryb przypuszczający i warunki (Lekcja 45 · Część 2)',
      ru: 'Сослагательное наклонение и условия (Урок 45 · Часть 2)',
      en: 'Conditionals (Lesson 45 · Part 2)',
    },
  },
];

export function evaluatePlacementTest(selectedIndices: ReadonlyArray<number | null>): PlacementResult {
  const records: PlacementAnswerRecord[] = PLACEMENT_QUESTIONS.map((question, index) => {
    const selected = selectedIndices[index] ?? null;
    const skipped = selected === null;
    const isCorrect = !skipped && selected === question.correctIndex;
    return {
      questionId: question.id,
      selectedIndex: selected,
      isCorrect,
      skipped,
    };
  });

  const score = records.filter((record) => record.isCorrect).length;

  // Walk through the curriculum checkpoints. Allow a single isolated slip if the
  // learner answers the following two harder questions correctly.
  let recommendedIndex = PLACEMENT_QUESTIONS.length - 1;
  let allMastered = true;
  for (let i = 0; i < PLACEMENT_QUESTIONS.length; i++) {
    if (!records[i].isCorrect) {
      const recovered =
        i + 2 < PLACEMENT_QUESTIONS.length &&
        records[i + 1].isCorrect &&
        records[i + 2].isCorrect;
      if (recovered) continue;
      recommendedIndex = i;
      allMastered = false;
      break;
    }
  }

  const targetLessonId = allMastered
    ? 47
    : PLACEMENT_QUESTIONS[recommendedIndex].targetLessonId;
  const recommendedLesson =
    LESSON_CATALOG.find((lesson) => lesson.id === targetLessonId) ?? LESSON_CATALOG[0];
  const course =
    COURSES.find((c) => c.lessons.some((lesson) => lesson.id === recommendedLesson.id)) ?? COURSES[0];

  const levelCode: PlacementResult['levelCode'] = allMastered
    ? 'B1'
    : PLACEMENT_QUESTIONS[recommendedIndex].level;

  return {
    score,
    total: PLACEMENT_QUESTIONS.length,
    levelCode,
    recommendedLesson,
    course,
    records,
  };
}
