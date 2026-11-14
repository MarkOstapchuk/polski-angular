import { ChangeDetectionStrategy, Component, computed, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ActivityItem, ActivityKind, getLesson } from '../../data/lesson-bank';
import { LESSON_THEORY, LessonTheoryId } from '../../data/lesson-theory';
import { WORKBOOK_IMAGES, WorkbookImage } from '../../data/workbook-images';
import { ProgressService } from '../../services/progress.service';
import { supabase } from '../../services/supabase.client';

@Component({
  selector: 'app-lesson',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './lesson.component.html',
  styleUrl: './lesson.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LessonComponent implements OnInit, OnDestroy {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly progress = inject(ProgressService);
  readonly syncError = this.progress.syncError;
  readonly dictionaryWord = signal<string | null>(null);
  readonly dictionaryTranslations = signal<string[]>([]);
  readonly dictionaryLoading = signal(false);
  readonly dictionaryError = signal<string | null>(null);
  private longPressTimer: ReturnType<typeof setTimeout> | null = null;
  private longPressOrigin: { x: number; y: number } | null = null;
  private dictionaryRequest = 0;
  private ignoreOptionClick = false;
  private ignoreOptionClickTimer: ReturnType<typeof setTimeout> | null = null;

  readonly lesson = signal(getLesson(Number(this.route.snapshot.paramMap.get('lessonId'))));
  readonly theory = computed(() => {
    const id = this.lesson()?.id;
    return id ? LESSON_THEORY[id as LessonTheoryId] : undefined;
  });
  readonly activityKind = ActivityKind;
  readonly activeIndex = signal(0);
  readonly answers = signal<Record<string, string>>({});
  readonly checked = signal(false);
  readonly finished = signal(false);
  readonly awardedXp = signal(0);
  readonly activity = computed(() => this.lesson()?.activities[this.activeIndex()]);
  private readonly allImages = computed(() => WORKBOOK_IMAGES[this.activity()?.sourceExerciseId ?? ''] ?? []);
  /** Images not attached to a specific question, shown above the list. */
  readonly images = computed(() => {
    const used = new Set(this.activity()?.items.map((item) => item.image).filter(Boolean));
    return this.allImages().filter((_, index) => !used.has(index + 1));
  });
  readonly activityProgress = computed(() => {
    const lesson = this.lesson();
    if (!lesson) return 0;
    const completed = lesson.activities.filter((activity) => this.progress.hasCompletedActivity(lesson.id, activity.id)).length;
    return Math.round((completed / lesson.activities.length) * 100);
  });
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
    const restoredResults: Record<string, Record<string, boolean>> = {};
    let firstIncomplete = -1;
    lesson.activities.forEach((activity, index) => {
      const saved = this.progress.activityFor(lesson.id, activity.id);
      if (saved) restoredResults[activity.id] = saved.results;
      else if (firstIncomplete < 0) firstIncomplete = index;
    });
    this.results.set(restoredResults);
    const index = firstIncomplete < 0 ? lesson.activities.length - 1 : firstIncomplete;
    this.activeIndex.set(index);
    const saved = this.progress.activityFor(lesson.id, lesson.activities[index].id);
    if (saved) {
      this.answers.set(saved.answers);
      this.checked.set(true);
    }
  }

  ngOnDestroy(): void {
    this.cancelWordLookup();
    if (this.ignoreOptionClickTimer) clearTimeout(this.ignoreOptionClickTimer);
    this.dictionaryRequest++;
  }

  startWordLookup(event: PointerEvent): void {
    if (event.button !== 0) return;
    const target = event.target instanceof HTMLElement ? event.target : null;
    if (!target || target.closest('input, textarea, select, audio, button:not(.option-button), a')) return;
    this.cancelWordLookup();
    this.ignoreOptionClick = false;
    if (this.ignoreOptionClickTimer) clearTimeout(this.ignoreOptionClickTimer);
    const x = event.clientX;
    const y = event.clientY;
    this.longPressOrigin = { x, y };
    this.longPressTimer = setTimeout(() => {
      this.longPressTimer = null;
      this.longPressOrigin = null;
      const word = this.wordAtPoint(x, y);
      if (word) {
        if (target.closest('.option-button')) {
          this.ignoreOptionClick = true;
          this.ignoreOptionClickTimer = setTimeout(() => this.ignoreOptionClick = false, 1000);
        }
        void this.lookupDictionary(word);
      }
    }, 450);
  }

  moveWordLookup(event: PointerEvent): void {
    const origin = this.longPressOrigin;
    if (origin && Math.hypot(event.clientX - origin.x, event.clientY - origin.y) > 12) this.cancelWordLookup();
  }

  cancelWordLookup(): void {
    if (this.longPressTimer) clearTimeout(this.longPressTimer);
    this.longPressTimer = null;
    this.longPressOrigin = null;
  }

  suppressWordContextMenu(event: MouseEvent): void {
    const target = event.target instanceof HTMLElement ? event.target : null;
    if (target && !target.closest('input, textarea, select, audio, button:not(.option-button), a')) event.preventDefault();
  }

  closeDictionary(): void {
    this.dictionaryRequest++;
    this.dictionaryWord.set(null);
    this.dictionaryTranslations.set([]);
    this.dictionaryError.set(null);
  }

  private wordAtPoint(x: number, y: number): string | null {
    const doc = document as Document & {
      caretPositionFromPoint?: (x: number, y: number) => { offsetNode: Node; offset: number } | null;
      caretRangeFromPoint?: (x: number, y: number) => Range | null;
    };
    const position = doc.caretPositionFromPoint?.(x, y);
    const range = doc.caretRangeFromPoint?.(x, y);
    const node = position?.offsetNode ?? range?.startContainer;
    const offset = position?.offset ?? range?.startOffset;
    if (!node || node.nodeType !== Node.TEXT_NODE || offset === undefined) return null;
    const text = node.textContent ?? '';
    for (const match of text.matchAll(/[\p{Script=Latin}]+(?:[-'’][\p{Script=Latin}]+)*/gu)) {
      const start = match.index ?? 0;
      if (offset >= start && offset <= start + match[0].length) return match[0];
    }
    return null;
  }

  private async lookupDictionary(word: string): Promise<void> {
    const request = ++this.dictionaryRequest;
    this.dictionaryWord.set(word);
    this.dictionaryTranslations.set([]);
    this.dictionaryError.set(null);
    this.dictionaryLoading.set(true);
    try {
      const { data, error } = await supabase.functions.invoke<{ translations: string[] }>('pons-dictionary', { body: { word } });
      if (request !== this.dictionaryRequest) return;
      if (error) throw error;
      this.dictionaryTranslations.set(data?.translations ?? []);
    } catch {
      if (request === this.dictionaryRequest) this.dictionaryError.set('Nie udało się pobrać tłumaczenia. Spróbuj ponownie.');
    } finally {
      if (request === this.dictionaryRequest) this.dictionaryLoading.set(false);
    }
  }

  setAnswer(itemId: string, value: string): void {
    this.answers.update((current) => ({ ...current, [this.answerKey(itemId)]: value }));
  }

  answerFor(itemId: string): string {
    return this.answers()[this.answerKey(itemId)] ?? '';
  }

  letterClozeAnswerFor(itemId: string, gapIndex: number): string {
    return this.answers()[this.letterClozeAnswerKey(itemId, gapIndex)] ?? '';
  }

  setLetterClozeAnswer(item: ActivityItem, gapIndex: number, event: Event): void {
    const cloze = item.letterCloze;
    if (!cloze) return;
    const input = event.target as HTMLInputElement;
    const value = input.value.slice(0, cloze.gaps[gapIndex].length);
    if (input.value !== value) input.value = value;
    this.answers.update((current) => ({
      ...current,
      [this.letterClozeAnswerKey(item.id, gapIndex)]: value,
    }));
    if (value.length === cloze.gaps[gapIndex].length) {
      const nextGap = input.closest('.letter-cloze-line')
        ?.querySelectorAll<HTMLInputElement>('.letter-cloze-gap')[gapIndex + 1]
        ?? input.closest('.question-row')?.nextElementSibling?.querySelector<HTMLInputElement>('.letter-cloze-gap');
      nextGap?.focus();
    }
  }

  selectOption(itemId: string, value: string): void {
    if (this.ignoreOptionClick) {
      this.ignoreOptionClick = false;
      if (this.ignoreOptionClickTimer) clearTimeout(this.ignoreOptionClickTimer);
      return;
    }
    if (!this.checked()) this.setAnswer(itemId, value);
  }

  hasAnsweredAll(): boolean {
    const activity = this.activity();
    return !!activity && activity.items.every((item) => item.letterCloze
      ? item.letterCloze.gaps.every((_, index) => this.letterClozeAnswerFor(item.id, index).length > 0)
      : this.answerFor(item.id).trim().length > 0);
  }

  isCorrect(item: ActivityItem): boolean {
    if (item.letterCloze) {
      const { parts, gaps } = item.letterCloze;
      const answer = parts.map((part, index) => part + (gaps[index] === undefined ? '' : this.letterClozeAnswerFor(item.id, index))).join('');
      return item.accepted.some((expected) => this.normalize(expected) === this.normalize(answer));
    }
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

  async checkAnswers(): Promise<void> {
    const activity = this.activity();
    const lesson = this.lesson();
    if (!lesson || !activity || !this.hasAnsweredAll() || this.checked()) return;
    const result: Record<string, boolean> = {};
    for (const item of activity.items) result[item.id] = this.isCorrect(item);
    this.results.update((current) => ({ ...current, [activity.id]: result }));
    this.checked.set(true);
    const prefix = `${activity.id}:`;
    const answers = Object.fromEntries(Object.entries(this.answers()).filter(([key]) => key.startsWith(prefix)));
    await this.progress.saveActivityProgress(lesson.id, activity.id, answers, result);
  }

  async next(): Promise<void> {
    const lesson = this.lesson();
    if (!lesson || !this.checked()) return;
    await this.progress.flush();
    const nextIndex = lesson.activities.findIndex((activity, index) =>
      index > this.activeIndex() && !this.progress.hasCompletedActivity(lesson.id, activity.id),
    );
    if (nextIndex >= 0) {
      this.activeIndex.set(nextIndex);
      this.answers.set({});
      this.checked.set(false);
      return;
    }
    const alreadyCompleted = this.progress.hasCompleted(lesson.id);
    this.awardedXp.set(alreadyCompleted ? 0 : this.earnedXp());
    await this.progress.completeLesson(lesson.id, this.finalScore(), this.earnedXp());
    this.finished.set(true);
  }

  itemImage(item: ActivityItem): WorkbookImage | undefined {
    return item.image ? this.allImages()[item.image - 1] : undefined;
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

  private letterClozeAnswerKey(itemId: string, gapIndex: number): string {
    return `${this.answerKey(itemId)}:gap:${gapIndex}`;
  }

  private normalize(value: string): string {
    const normalized = value
      .toLocaleLowerCase('pl-PL')
      .replace(/ł/g, 'l')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .trim()
      .replace(/\p{P}/gu, ' ')
      .replace(/\s+/g, ' ')
      .trim();
    return /^\d[\d\s]*$/.test(normalized) ? normalized.replace(/\s/g, '') : normalized;
  }
}
