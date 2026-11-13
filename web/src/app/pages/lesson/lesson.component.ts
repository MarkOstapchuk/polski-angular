import { ChangeDetectionStrategy, Component, computed, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ActivityItem, getLesson } from '../../data/lesson-bank';
import { WORKBOOK_IMAGES } from '../../data/workbook-images';
import { ProgressService } from '../../services/progress.service';

@Component({
  selector: 'app-lesson',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './lesson.component.html',
  styleUrl: './lesson.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LessonComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly progress = inject(ProgressService);

  readonly lesson = signal(getLesson(Number(this.route.snapshot.paramMap.get('lessonId'))));
  readonly activeIndex = signal(0);
  readonly answers = signal<Record<string, string>>({});
  readonly checked = signal(false);
  readonly finished = signal(false);
  readonly awardedXp = signal(0);
  readonly activity = computed(() => this.lesson()?.activities[this.activeIndex()]);
  readonly images = computed(() => WORKBOOK_IMAGES[this.activity()?.sourceExerciseId ?? ''] ?? []);
  readonly activityProgress = computed(() => this.lesson() ? Math.round((this.activeIndex() / this.lesson()!.activities.length) * 100) : 0);
  readonly totalQuestions = computed(() => this.lesson()?.activities.reduce((count, activity) => count + activity.items.length, 0) ?? 0);
  readonly correctAnswers = computed(() => Object.values(this.results()).reduce((count, result) => count + Object.values(result).filter(Boolean).length, 0));
  readonly finalScore = computed(() => this.totalQuestions() ? Math.round((this.correctAnswers() / this.totalQuestions()) * 100) : 0);
  readonly earnedXp = computed(() => 10 + Math.round(this.finalScore() / 10));
  private readonly results = signal<Record<string, Record<string, boolean>>>({});

  ngOnInit(): void {
    const lesson = this.lesson();
    if (!lesson) {
      void this.router.navigate(['/']);
      return;
    }
  }

  setAnswer(itemId: string, value: string): void {
    this.answers.update((current) => ({ ...current, [this.answerKey(itemId)]: value }));
  }

  answerFor(itemId: string): string {
    return this.answers()[this.answerKey(itemId)] ?? '';
  }

  selectOption(itemId: string, value: string): void {
    if (!this.checked()) this.setAnswer(itemId, value);
  }

  hasAnsweredAll(): boolean {
    const activity = this.activity();
    return !!activity && activity.items.every((item) => this.answerFor(item.id).trim().length > 0);
  }

  isCorrect(item: ActivityItem): boolean {
    const answer = this.normalize(this.answerFor(item.id));
    return item.accepted.some((expected) => this.normalize(expected) === answer);
  }

  isItemCorrect(item: ActivityItem): boolean {
    return this.results()[this.activity()?.id ?? '']?.[item.id] ?? false;
  }

  optionIsAccepted(item: ActivityItem, option: string): boolean {
    return item.accepted.some((expected) => this.normalize(expected) === this.normalize(option));
  }

  currentCorrectCount(): number {
    return Object.values(this.results()[this.activity()?.id ?? ''] ?? {}).filter(Boolean).length;
  }

  checkAnswers(): void {
    const activity = this.activity();
    if (!activity || !this.hasAnsweredAll() || this.checked()) return;
    const result: Record<string, boolean> = {};
    for (const item of activity.items) result[item.id] = this.isCorrect(item);
    this.results.update((current) => ({ ...current, [activity.id]: result }));
    this.checked.set(true);
  }

  next(): void {
    const lesson = this.lesson();
    if (!lesson || !this.checked()) return;
    if (this.activeIndex() < lesson.activities.length - 1) {
      this.activeIndex.update((index) => index + 1);
      this.checked.set(false);
      return;
    }
    const alreadyCompleted = this.progress.hasCompleted(lesson.id);
    this.awardedXp.set(alreadyCompleted ? 0 : this.earnedXp());
    this.progress.completeLesson(lesson.id, this.finalScore(), this.earnedXp());
    this.finished.set(true);
  }

  expectedAnswer(item: ActivityItem): string {
    return item.accepted[0];
  }

  isLastActivity(): boolean {
    return this.activeIndex() === (this.lesson()?.activities.length ?? 0) - 1;
  }

  private answerKey(itemId: string): string {
    return `${this.activity()?.id ?? ''}:${itemId}`;
  }

  private normalize(value: string): string {
    const normalized = value
      .toLocaleLowerCase('pl-PL')
      .trim()
      .replace(/[.,!?;:]+/g, ' ')
      .replace(/\s+/g, ' ');
    return /^\d[\d\s]*$/.test(normalized) ? normalized.replace(/\s/g, '') : normalized;
  }
}
