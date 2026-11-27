import { ChangeDetectionStrategy, Component, DestroyRef, HostListener, computed, effect, inject, signal } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
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
import { IconComponent } from '../../shared/icon/icon.component';

const PLACEMENT_SEO_META = {
  pl: {
    title: 'Test poziomujący z języka polskiego A1–B2 | polski.',
    description:
      'Darmowy test poziomujący z języka polskiego (A1–B2). 12 krótkich pytań bez rejestracji — sprawdź, od której lekcji najlepiej zacząć.',
  },
  ru: {
    title: 'Тест на уровень польского языка A1–B2 онлайн | polski.',
    description:
      'Бесплатный тест на определение уровня польского языка (A1–B2). 12 коротких вопросов без регистрации — узнайте, с какого урока начать.',
  },
  en: {
    title: 'Polish Placement Test Online (A1–B2) | polski.',
    description:
      'Free online Polish placement test (A1–B2). Answer 12 quick questions without sign-up to find your exact starting lesson.',
  },
} as const;

@Component({
  selector: 'app-placement-test',
  standalone: true,
  imports: [RouterLink, LanguageSwitcherComponent, IconComponent],
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
    const meta = inject(Meta);
    const title = inject(Title);
    const destroyRef = inject(DestroyRef);

    const origin =
      typeof window !== 'undefined' && window.location?.origin
        ? window.location.origin
        : 'https://polski.passolabs.tech';
    const canonicalUrl = `${origin}/test`;

    meta.updateTag({ name: 'robots', content: 'index,follow' });

    if (typeof document !== 'undefined' && document.head) {
      const existingCanonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
      const created = !existingCanonical;
      const previousHref = existingCanonical?.getAttribute('href') ?? null;
      const canonicalLink = existingCanonical ?? document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      canonicalLink.setAttribute('href', canonicalUrl);
      if (created) {
        document.head.appendChild(canonicalLink);
      }

      destroyRef.onDestroy(() => {
        if (created) {
          canonicalLink.remove();
        } else if (previousHref !== null) {
          canonicalLink.setAttribute('href', previousHref);
        }
      });
    }

    effect(() => {
      const locale = this.language.locale();
      const seo = PLACEMENT_SEO_META[locale as keyof typeof PLACEMENT_SEO_META] ?? PLACEMENT_SEO_META.pl;
      title.setTitle(seo.title);
      meta.updateTag({ name: 'description', content: seo.description });
      meta.updateTag({ property: 'og:title', content: seo.title });
      meta.updateTag({ property: 'og:description', content: seo.description });
      meta.updateTag({ property: 'og:url', content: canonicalUrl });
    });

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
