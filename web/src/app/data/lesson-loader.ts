import type { Language } from '../i18n/language.service';
import { normalizeAnswer } from './activity-adapter';
import { COURSES, LESSON_CATALOG } from './lesson-catalog';
import type { Lesson } from './lesson-types';
import type { LessonTheory, LessonTheoryId, TheoryBlock } from './lesson-theory';
import type { Part3LessonTheoryId } from './lesson-theory-part3';

export interface GrammarReferenceEntry {
  lessonId: number;
  courseId: 'part-1' | 'part-2' | 'part-3';
  courseLevel: string;
  displayNumber: string;
  title: string;
  subtitle: string;
  topic: string;
  coursebookPages: string;
  grammar: string;
  communication: string;
  vocabulary: string;
  examples: Array<{ polish: string; translation: string }>;
  blocks: TheoryBlock[];
  searchBlob: string;
}

export async function loadLessonById(id: number): Promise<Lesson | undefined> {
  if (id >= 50) {
    const mod = await import('./lesson-bank-part3');
    return mod.getPart3Lesson(id);
  }
  if (id >= 27) {
    const mod = await import('./lesson-bank-part2');
    return mod.getPart2Lesson(id);
  }
  const mod = await import('./lesson-bank');
  return mod.getLesson(id);
}

export async function loadLessonTheory(id: number, locale: Language): Promise<LessonTheory | undefined> {
  if (id >= 50) {
    const mod = await import('./lesson-theory-part3');
    const part3Id = id as Part3LessonTheoryId;
    if (locale === 'en') return mod.PART3_THEORY_EN[part3Id];
    if (locale === 'pl') return mod.PART3_THEORY_PL[part3Id];
    return mod.PART3_THEORY_RU[part3Id];
  }

  const theoryId = id as LessonTheoryId;
  if (locale === 'en') {
    const mod = await import('./lesson-theory.en');
    return mod.LESSON_THEORY_EN[theoryId];
  }
  if (locale === 'pl') {
    const mod = await import('./lesson-theory.pl');
    return mod.LESSON_THEORY_PL[theoryId];
  }
  const mod = await import('./lesson-theory');
  return mod.LESSON_THEORY[theoryId];
}

export async function loadAllGrammarEntries(locale: Language): Promise<GrammarReferenceEntry[]> {
  const [part3Mod, blocksMod, p12Map] = await Promise.all([
    import('./lesson-theory-part3'),
    import('./lesson-theory-blocks'),
    locale === 'en'
      ? import('./lesson-theory.en').then((m) => m.LESSON_THEORY_EN)
      : locale === 'pl'
        ? import('./lesson-theory.pl').then((m) => m.LESSON_THEORY_PL)
        : import('./lesson-theory').then((m) => m.LESSON_THEORY),
  ]);

  const p3Map = locale === 'en'
    ? part3Mod.PART3_THEORY_EN
    : locale === 'pl'
      ? part3Mod.PART3_THEORY_PL
      : part3Mod.PART3_THEORY_RU;

  return LESSON_CATALOG.map((summary) => {
    const course = COURSES.find((c) => c.lessons.some((l) => l.id === summary.id)) ?? COURSES[0];
    const numOffset = summary.id >= 50 ? 50 : summary.id > 26 ? 26 : 0;
    const displayNumber = String(summary.id - numOffset).padStart(2, '0');
    const theory: LessonTheory = summary.id >= 50
      ? p3Map[summary.id as Part3LessonTheoryId]
      : p12Map[summary.id as LessonTheoryId];
    const blocks = blocksMod.getReferenceBlocksForLesson(summary.id, theory, locale);

    const searchParts: string[] = [
      summary.title,
      summary.subtitle,
      summary.topic,
      displayNumber,
      theory.grammar,
      theory.communication,
      theory.vocabulary,
      ...theory.examples.flatMap((e) => [e.polish, e.translation]),
      ...blocks.flatMap((b) => [
        b.title,
        b.summary,
        ...(b.bullets ?? []),
        ...(b.table ? [b.table.headers.join(' '), ...b.table.rows.map((r) => r.join(' '))] : []),
        ...(b.examples ?? []).flatMap((e) => [e.polish, e.translation]),
      ]),
    ];

    return {
      lessonId: summary.id,
      courseId: course.id,
      courseLevel: course.level,
      displayNumber,
      title: summary.title,
      subtitle: summary.subtitle,
      topic: summary.topic,
      coursebookPages: theory.coursebookPages,
      grammar: theory.grammar,
      communication: theory.communication,
      vocabulary: theory.vocabulary,
      examples: theory.examples,
      blocks,
      searchBlob: normalizeAnswer(searchParts.join(' ')),
    };
  });
}
