import { ChangeDetectionStrategy, Component, HostListener, computed, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import {
  PLACEMENT_QUESTIONS,
  PlacementResult,
  evaluatePlacementTest,
} from '../../data/placement-test';
import { LanguageSwitcherComponent } from '../../i18n/language-switcher.component';
import { LanguageService } from '../../i18n/language.service';
import { AnalyticsService } from '../../services/analytics.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-placement-test',
  standalone: true,
  imports: [RouterLink, LanguageSwitcherComponent],
  templateUrl: './placement-test.component.html',
  styleUrl: './placement-test.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlacementTestComponent {
  private readonly router = inject(Router);
  private readonly analytics = inject(AnalyticsService);
  private readonly auth = inject(AuthService);
  readonly language = inject(LanguageService);

  readonly questions = PLACEMENT_QUESTIONS;
  readonly currentIndex = signal(0);
  readonly answers = signal<Array<number | null>>(Array(PLACEMENT_QUESTIONS.length).fill(null));
  readonly completed = signal(false);
  readonly startingLesson = signal(false);

  readonly currentQuestion = computed(() => this.questions[this.currentIndex()]);
  readonly progressPercent = computed(() =>
    Math.round(((this.completed() ? this.questions.length : this.currentIndex()) / this.questions.length) * 100),
  );
  readonly result = computed<PlacementResult | null>(() =>
    this.completed() ? evaluatePlacementTest(this.answers()) : null,
  );
  readonly promptParts = computed(() => {
    const prompt = this.currentQuestion().prompt;
    const [before, after = ''] = prompt.split('___');
    return { before, after };
  });

  constructor() {
    this.analytics.trackOnce('placement_test_started', 'placement_test_started', {
      metadata: { locale: this.language.locale() },
    });
  }

  @HostListener('window:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    if (this.completed()) return;
    if (['1', '2', '3', '4'].includes(event.key)) {
      event.preventDefault();
      this.selectOption(Number(event.key) - 1);
    }
  }

  selectOption(optionIndex: number): void {
    const index = this.currentIndex();
    this.answers.update((prev) => {
      const next = [...prev];
      next[index] = optionIndex;
      return next;
    });
    this.advance(false, optionIndex);
  }

  skipQuestion(): void {
    const index = this.currentIndex();
    this.answers.update((prev) => {
      const next = [...prev];
      next[index] = null;
      return next;
    });
    this.advance(true, null);
  }

  previousQuestion(): void {
    if (this.currentIndex() > 0 && !this.completed()) {
      this.currentIndex.update((i) => i - 1);
    }
  }

  retake(): void {
    this.answers.set(Array(PLACEMENT_QUESTIONS.length).fill(null));
    this.currentIndex.set(0);
    this.completed.set(false);
    this.analytics.track('placement_test_retaken');
  }

  async startRecommendedLesson(): Promise<void> {
    const res = this.result();
    if (!res || this.startingLesson()) return;
    this.startingLesson.set(true);
    const lessonId = res.recommendedLesson.id;

    this.analytics.track('placement_test_start_lesson_clicked', {
      courseId: res.course.id,
      lessonId,
      metadata: {
        score: res.score,
        level: res.levelCode,
      },
    });

    try {
      await this.router.navigate(['/learn', lessonId]);
    } finally {
      this.startingLesson.set(false);
    }
  }

  async openCourseOverview(): Promise<void> {
    const res = this.result();
    const courseId = res?.course.id ?? 'part-1';
    await this.router.navigate(['/course', courseId]);
  }

  displayLessonNumber(lessonId: number): number {
    if (lessonId >= 50) return lessonId - 50;
    return lessonId > 26 ? lessonId - 26 : lessonId;
  }

  courseLabel(lessonId: number): string {
    if (lessonId >= 50) return this.language.t('placement.part3');
    return lessonId > 26 ? this.language.t('placement.part2') : this.language.t('placement.part1');
  }

  topicLabel(questionId: number): string {
    const q = this.questions.find((item) => item.id === questionId);
    return q ? q.topic[this.language.locale()] : '';
  }

  private advance(skipped: boolean, selectedIndex: number | null): void {
    const index = this.currentIndex();
    const question = this.questions[index];
    this.analytics.track('placement_test_answered', {
      lessonId: question.targetLessonId,
      metadata: {
        question_id: question.id,
        skipped,
        is_correct: !skipped && selectedIndex === question.correctIndex,
      },
    });

    if (index + 1 < this.questions.length) {
      this.currentIndex.set(index + 1);
    } else {
      this.completed.set(true);
      const finalResult = evaluatePlacementTest(this.answers());
      this.analytics.track('placement_test_completed', {
        courseId: finalResult.course.id,
        lessonId: finalResult.recommendedLesson.id,
        metadata: {
          score: finalResult.score,
          total: finalResult.total,
          level: finalResult.levelCode,
        },
      });
    }
  }
}
