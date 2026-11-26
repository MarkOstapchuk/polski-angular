import { ChangeDetectionStrategy, Component, inject, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Lesson } from '../../../../data/lesson-types';
import { LanguageService } from '../../../../i18n/language.service';
import { ChestIconComponent } from '../../../../shared/chest-icon/chest-icon.component';
import { IconComponent } from '../../../../shared/icon/icon.component';

@Component({
  selector: 'app-lesson-completion',
  standalone: true,
  imports: [RouterLink, IconComponent, ChestIconComponent],
  templateUrl: './lesson-completion.component.html',
  styleUrl: './lesson-completion.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LessonCompletionComponent {
  readonly language = inject(LanguageService);
  readonly lessonLabel = input.required<string>();
  readonly lessonTitle = input.required<string>();
  readonly dashboardUrl = input.required<string>();
  readonly finalScore = input.required<number>();
  readonly correctAnswers = input.required<number>();
  readonly totalQuestions = input.required<number>();
  readonly awardedXp = input.required<number>();
  readonly awardedCoins = input<number>(0);
  readonly pendingChestTitle = input<string | null>(null);
  readonly pendingChestCoins = input<number>(0);
  readonly nextLesson = input<Pick<Lesson, 'id' | 'title'> | undefined>(undefined);
  readonly isGuest = input<boolean>(false);

  readonly openPendingChest = output<void>();
  readonly retryWrong = output<void>();
  readonly retryLesson = output<void>();
}
