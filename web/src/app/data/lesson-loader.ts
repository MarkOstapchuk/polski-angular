import type { Language } from '../i18n/language.service';
import type { Lesson } from './lesson-types';
import type { LessonTheory, LessonTheoryId } from './lesson-theory';
import type { Part3LessonTheoryId } from './lesson-theory-part3';

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
