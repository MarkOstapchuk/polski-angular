import { ChangeDetectionStrategy, Component, inject, input, output } from '@angular/core';
import { LessonSummary } from '../../../../data/lesson-catalog';
import { LanguageService } from '../../../../i18n/language.service';

@Component({
  selector: 'app-dashboard-continue-card',
  standalone: true,
  templateUrl: './dashboard-continue-card.component.html',
  styleUrl: './dashboard-continue-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardContinueCardComponent {
  readonly language = inject(LanguageService);
  readonly lesson = input.required<LessonSummary>();
  readonly completeCount = input.required<number>();
  readonly lessonLabel = input.required<string>();
  readonly lessonNumber = input.required<string>();
  readonly open = output<void>();
}
