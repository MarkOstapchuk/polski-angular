import { ChangeDetectionStrategy, Component, inject, input, output } from '@angular/core';
import { AdaptedItem } from '../../../../data/lesson-types';
import { WorkbookImage } from '../../../../data/workbook-images';
import { LanguageService } from '../../../../i18n/language.service';
import { AnswerDiffComponent } from '../../../../shared/answer-diff/answer-diff.component';
import { ChoiceExerciseComponent } from '../choice-exercise/choice-exercise.component';
import { LetterClozeExerciseComponent } from '../letter-cloze-exercise/letter-cloze-exercise.component';
import { MultiGapExerciseComponent } from '../multi-gap-exercise/multi-gap-exercise.component';
import { TypedExerciseComponent } from '../typed-exercise/typed-exercise.component';
import { WordOrderExerciseComponent } from '../word-order-exercise/word-order-exercise.component';

@Component({
  selector: 'app-exercise-item-view',
  standalone: true,
  imports: [
    ChoiceExerciseComponent,
    TypedExerciseComponent,
    MultiGapExerciseComponent,
    WordOrderExerciseComponent,
    LetterClozeExerciseComponent,
    AnswerDiffComponent,
  ],
  templateUrl: './exercise-item-view.component.html',
  styleUrl: './exercise-item-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExerciseItemViewComponent {
  readonly language = inject(LanguageService);

  readonly activityId = input.required<string>();
  readonly item = input.required<AdaptedItem>();
  readonly itemIndex = input.required<number>();
  readonly totalItems = input.required<number>();
  readonly answers = input.required<Record<string, string>>();
  readonly answer = input.required<string>();
  readonly checked = input<boolean>(false);
  readonly isCorrect = input<boolean>(false);
  readonly showFeedback = input<boolean>(true);
  readonly dictionaryMode = input<boolean>(false);
  readonly hasAudio = input<boolean>(false);
  readonly image = input<WorkbookImage | undefined>(undefined);
  readonly hintShown = input<boolean>(false);
  readonly canAssistNextLetter = input<boolean>(false);
  readonly accentHint = input<string | null>(null);
  readonly expectedAnswer = input<string>('');
  readonly enterKeyHint = input<'done' | 'next'>('next');
  readonly cardElement = input<HTMLElement | null>(null);
  readonly focusStyle = input<boolean>(false);

  readonly answerChange = output<string>();
  readonly optionSelect = output<string>();
  readonly letterClozeGapChange = output<{ gapIndex: number; value: string }>();
  readonly enterPressed = output<Event>();
  readonly wordOrderModeChange = output<'chips' | 'type'>();
  readonly toggleHint = output<void>();
  readonly assistNextLetter = output<void>();
  readonly openLightbox = output<WorkbookImage>();

  itemMaxAcceptedLength(): number {
    return Math.max(0, ...this.item().raw.accepted.map((a) => a.length));
  }
}
