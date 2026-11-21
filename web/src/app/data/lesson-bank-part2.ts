import { Lesson } from './lesson-types';
import { LESSON_27 } from './lessons/part2-lesson-01';
import { LESSON_28 } from './lessons/part2-lesson-02';
import { LESSON_29 } from './lessons/part2-lesson-03';
import { LESSON_30 } from './lessons/part2-lesson-04';
import { LESSON_31 } from './lessons/part2-lesson-05';
import { LESSON_32 } from './lessons/part2-lesson-06';
import { LESSON_33 } from './lessons/part2-lesson-07';
import { LESSON_34 } from './lessons/part2-lesson-08';
import { LESSON_35 } from './lessons/part2-lesson-09';
import { LESSON_36 } from './lessons/part2-lesson-10';
import { LESSON_37 } from './lessons/part2-lesson-11';
import { LESSON_38 } from './lessons/part2-lesson-12';
import { LESSON_39 } from './lessons/part2-lesson-13';
import { LESSON_40 } from './lessons/part2-lesson-14';
import { LESSON_41 } from './lessons/part2-lesson-15';
import {
  LESSON_42, LESSON_43, LESSON_44, LESSON_45, LESSON_46, LESSON_47, LESSON_48, LESSON_49,
} from './lessons/part2-lesson-16-23';

export const PART2_LESSONS: Lesson[] = [
  LESSON_27, LESSON_28, LESSON_29, LESSON_30, LESSON_31, LESSON_32, LESSON_33, LESSON_34, LESSON_35,
  LESSON_36, LESSON_37, LESSON_38, LESSON_39, LESSON_40, LESSON_41,
  LESSON_42, LESSON_43, LESSON_44, LESSON_45, LESSON_46, LESSON_47, LESSON_48, LESSON_49,
];

export function getPart2Lesson(id: number): Lesson | undefined {
  return PART2_LESSONS.find((lesson) => lesson.id === id);
}
