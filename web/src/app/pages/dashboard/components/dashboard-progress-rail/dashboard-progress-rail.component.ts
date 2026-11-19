import { ChangeDetectionStrategy, Component, inject, input, output } from '@angular/core';
import { LanguageService } from '../../../../i18n/language.service';
import { LearnerProgress } from '../../../../services/progress.service';

@Component({
  selector: 'app-dashboard-progress-rail',
  standalone: true,
  templateUrl: './dashboard-progress-rail.component.html',
  styleUrl: './dashboard-progress-rail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardProgressRailComponent {
  readonly language = inject(LanguageService);
  readonly progress = input.required<LearnerProgress>();
  readonly goalPercent = input.required<number>();
  readonly weekDays = input.required<{ label: string; active: boolean }[]>();
  readonly installAvailable = input(false);
  readonly needsIOSInstructions = input(false);
  readonly installClick = output<void>();
}
