import { ChangeDetectionStrategy, Component, inject, input, output } from '@angular/core';
import { LanguageService } from '../../../../i18n/language.service';
import { LearnerProgress } from '../../../../services/progress.service';
import { ChestIconComponent } from '../../../../shared/chest-icon/chest-icon.component';
import { IconComponent } from '../../../../shared/icon/icon.component';

@Component({
  selector: 'app-dashboard-progress-rail',
  standalone: true,
  imports: [IconComponent, ChestIconComponent],
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
  readonly dailyChestReady = input(false);
  readonly dailyChestClaimed = input(false);
  readonly dailyChestCoins = input(20);
  readonly installClick = output<void>();
  readonly claimDailyChest = output<void>();
  readonly openShop = output<void>();
}
