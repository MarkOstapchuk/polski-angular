import { Lesson } from './lesson-types';
import {
  LESSON_50, LESSON_51, LESSON_52, LESSON_53, LESSON_54, LESSON_55, LESSON_56,
} from './lessons/part3-lesson-00-06';
import {
  LESSON_57, LESSON_58, LESSON_59, LESSON_60, LESSON_61, LESSON_62, LESSON_63,
} from './lessons/part3-lesson-07-13';
import {
  LESSON_64, LESSON_65, LESSON_66, LESSON_67, LESSON_68, LESSON_69, LESSON_70,
} from './lessons/part3-lesson-14-20';

export const PART3_LESSONS: Lesson[] = [
  LESSON_50, LESSON_51, LESSON_52, LESSON_53, LESSON_54, LESSON_55, LESSON_56,
  LESSON_57, LESSON_58, LESSON_59, LESSON_60, LESSON_61, LESSON_62, LESSON_63,
  LESSON_64, LESSON_65, LESSON_66, LESSON_67, LESSON_68, LESSON_69, LESSON_70,
];

export function getPart3Lesson(id: number): Lesson | undefined {
  return PART3_LESSONS.find((lesson) => lesson.id === id);
}
