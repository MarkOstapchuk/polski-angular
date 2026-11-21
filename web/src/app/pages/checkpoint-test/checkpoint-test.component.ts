import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { getCheckpointTestById, saveCheckpointScore } from '../../data/checkpoint-tests';
import { LanguageSwitcherComponent } from '../../i18n/language-switcher.component';
import { LanguageService } from '../../i18n/language.service';
import { AnalyticsService } from '../../services/analytics.service';

@Component({
  selector: 'app-checkpoint-test',
  standalone: true,
  imports: [RouterLink, LanguageSwitcherComponent],
  templateUrl: './checkpoint-test.component.html',
  styleUrl: './checkpoint-test.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckpointTestComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly analytics = inject(AnalyticsService);
  readonly language = inject(LanguageService);

  private readonly testId = toSignal(this.route.paramMap.pipe(map((params) => params.get('testId'))), {
    initialValue: this.route.snapshot.paramMap.get('testId'),
  });

  readonly test = computed(() => getCheckpointTestById(this.testId()));
  readonly selectedAnswers = signal<Record<string, number>>({});
  readonly checked = signal(false);

  readonly answeredCount = computed(() => {
    const t = this.test();
    if (!t) return 0;
    const answers = this.selectedAnswers();
    return t.questions.filter((q) => answers[q.id] !== undefined).length;
  });

  readonly allAnswered = computed(() => {
    const t = this.test();
    return !!t && this.answeredCount() === t.questions.length;
  });

  readonly score = computed(() => {
    const t = this.test();
    if (!t) return 0;
    const answers = this.selectedAnswers();
    return t.questions.filter((q) => answers[q.id] === q.correctIndex).length;
  });

  selectOption(questionId: string, optionIndex: number): void {
    if (this.checked()) return;
    this.selectedAnswers.update((prev) => ({ ...prev, [questionId]: optionIndex }));
  }

  checkTest(): void {
    const t = this.test();
    if (!t || !this.allAnswered()) return;
    this.checked.set(true);
    const finalScore = this.score();
    saveCheckpointScore(t.id, finalScore, t.questions.length);
    this.analytics.track('checkpoint_test_completed', {
      courseId: t.courseId,
      metadata: {
        test_id: t.id,
        score: finalScore,
        total: t.questions.length,
      },
    });
  }

  retake(): void {
    this.selectedAnswers.set({});
    this.checked.set(false);
  }
}
