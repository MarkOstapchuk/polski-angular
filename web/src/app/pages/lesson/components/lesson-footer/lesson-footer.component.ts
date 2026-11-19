import { ChangeDetectionStrategy, Component, inject, input, output } from '@angular/core';
import { LanguageService } from '../../../../i18n/language.service';

@Component({
  selector: 'app-lesson-footer',
  standalone: true,
  templateUrl: './lesson-footer.component.html',
  styleUrl: './lesson-footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LessonFooterComponent {
  readonly language = inject(LanguageService);
  readonly checked = input.required<boolean>();
  readonly answeredCount = input.required<number>();
  readonly totalCount = input.required<number>();
  readonly correctCount = input.required<number>();
  readonly hasAnsweredAll = input.required<boolean>();
  readonly isLastActivity = input.required<boolean>();

  readonly check = output<void>();
  readonly next = output<void>();
  readonly jumpToUnanswered = output<void>();
  readonly retryWrong = output<void>();
  readonly retryAll = output<void>();
}
