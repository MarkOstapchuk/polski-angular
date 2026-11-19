import { ChangeDetectionStrategy, Component, inject, input, output } from '@angular/core';
import { normalizeAnswer } from '../../../../data/activity-adapter';
import { ChoiceOption } from '../../../../data/lesson-types';
import { LanguageService } from '../../../../i18n/language.service';

@Component({
  selector: 'app-choice-exercise',
  standalone: true,
  templateUrl: './choice-exercise.component.html',
  styleUrl: './choice-exercise.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChoiceExerciseComponent {
  readonly language = inject(LanguageService);

  readonly prompt = input.required<string>();
  readonly options = input.required<ChoiceOption[]>();
  readonly accepted = input.required<string[]>();
  readonly value = input<string>('');
  readonly checked = input.required<boolean>();
  readonly isCorrect = input<boolean>(false);
  readonly dictionaryMode = input<boolean>(false);
  readonly showHotkeyBadges = input<boolean>(true);

  readonly valueChange = output<string>();

  select(optionValue: string): void {
    if (this.checked() || this.dictionaryMode()) return;
    this.valueChange.emit(optionValue);
  }

  optionIsAccepted(optionValue: string): boolean {
    const normOpt = normalizeAnswer(optionValue);
    return this.accepted().some((expected) => normalizeAnswer(expected) === normOpt);
  }
}
