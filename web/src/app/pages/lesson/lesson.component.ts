import { ChangeDetectionStrategy, Component, computed, DestroyRef, effect, ElementRef, HostListener, inject, signal, viewChild } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { adaptActivity, normalizeAnswer } from '../../data/activity-adapter';
import { AUDIO_TRACKS } from '../../data/audio-tracks';
import { PART2_AUDIO_TRACKS } from '../../data/part2-audio-tracks';
import { Activity, ActivityItem, ActivityUxMode, AdaptedActivity, AdaptedItem, Lesson } from '../../data/lesson-types';
import { LESSON_CATALOG } from '../../data/lesson-catalog';
import { loadLessonById, loadLessonTheory } from '../../data/lesson-loader';
import type { LessonTheory } from '../../data/lesson-theory';
import { resolveActivityTheory } from '../../data/lesson-theory-blocks';
import { INSTRUCTION_TRANSLATIONS } from '../../data/instruction-translations';
import { WORKBOOK_IMAGES, WorkbookImage } from '../../data/workbook-images';
import { LanguageSwitcherComponent } from '../../i18n/language-switcher.component';
import { LanguageService } from '../../i18n/language.service';
import { IconComponent } from '../../shared/icon/icon.component';
import { AnalyticsService } from '../../services/analytics.service';
import { AuthService } from '../../services/auth.service';
import { MistakesService } from '../../services/mistakes.service';
import { ProgressService } from '../../services/progress.service';
import { SoundService } from '../../services/sound.service';
import { ClassifyExerciseComponent } from './components/classify-exercise/classify-exercise.component';
import { ExerciseItemViewComponent } from './components/exercise-item-view/exercise-item-view.component';
import { AudioPlayerTrack, LessonAudioBarComponent } from './components/lesson-audio-bar/lesson-audio-bar.component';
import { LessonCompletionComponent } from './components/lesson-completion/lesson-completion.component';
import { LessonDictionaryModalComponent } from './components/lesson-dictionary-modal/lesson-dictionary-modal.component';
import { LessonFooterComponent } from './components/lesson-footer/lesson-footer.component';
import { LessonImageLightboxComponent } from './components/lesson-image-lightbox/lesson-image-lightbox.component';
import { LessonInlineTheoryComponent } from './components/lesson-inline-theory/lesson-inline-theory.component';
import { LessonTheoryDrawerComponent } from './components/lesson-theory-drawer/lesson-theory-drawer.component';
import { MatchExerciseComponent } from './components/match-exercise/match-exercise.component';
import { MobileFocusDeckComponent } from './components/mobile-focus-deck/mobile-focus-deck.component';
import { WordBankExerciseComponent } from './components/word-bank-exercise/word-bank-exercise.component';

const PONS_BLOCKED_SELECTOR =
  'input, textarea, select, audio, button:not(.option-button):not(.match-source):not(.match-target):not(.word-bank-chip):not(.word-chip):not(.classify-bucket-btn):not(.classify-summary-chip), a';

const FOCUS_ELIGIBLE_MODES = new Set<ActivityUxMode>([
  'choice',
  'typed',
  'word-order',
  'multi-gap',
  'prompt-gap',
  'letter-cloze',
]);

@Component({
  selector: 'app-lesson',
  standalone: true,
  imports: [
    RouterLink,
    LanguageSwitcherComponent,
    IconComponent,
    LessonTheoryDrawerComponent,
    LessonInlineTheoryComponent,
    LessonAudioBarComponent,
    LessonImageLightboxComponent,
    LessonDictionaryModalComponent,
    LessonFooterComponent,
    LessonCompletionComponent,
    ExerciseItemViewComponent,
    MobileFocusDeckComponent,
    WordBankExerciseComponent,
    ClassifyExerciseComponent,
    MatchExerciseComponent,
  ],
  templateUrl: './lesson.component.html',
  styleUrl: './lesson.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LessonComponent {
  private readonly destroyRef = inject(DestroyRef);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly progress = inject(ProgressService);
  private readonly mistakes = inject(MistakesService);
  private readonly analytics = inject(AnalyticsService);
  private readonly sound = inject(SoundService);
  readonly auth = inject(AuthService);
  readonly language = inject(LanguageService);
  readonly syncError = this.progress.syncError;

  private readonly audioBar = viewChild(LessonAudioBarComponent);
  private readonly dictionaryModal = viewChild(LessonDictionaryModalComponent);
  private readonly matchExercise = viewChild(MatchExerciseComponent);
  private readonly classifyExercise = viewChild(ClassifyExerciseComponent);
  private readonly wordBankExercise = viewChild(WordBankExerciseComponent);
  private readonly mobileFocusDeck = viewChild(MobileFocusDeckComponent);
  readonly exerciseCardRef = viewChild<ElementRef<HTMLElement>>('exerciseCard');
  private readonly pickerListRef = viewChild<ElementRef<HTMLElement>>('pickerList');

  readonly isMobileViewport = signal(
    typeof window !== 'undefined' && typeof window.matchMedia === 'function' && window.matchMedia('(max-width: 600px)').matches,
  );
  readonly mobileViewOverride = signal<'auto' | 'list' | 'cards'>('auto');
  readonly focusQueueIds = signal<string[]>([]);
  readonly focusIndex = signal(0);
  readonly focusItemChecked = signal(false);
  readonly focusItemResults = signal<Record<string, boolean>>({});
  readonly focusSummaryOpen = signal(false);
  readonly focusIsRetryRound = signal(false);

  readonly dictionaryWord = signal<string | null>(null);
  readonly dictionaryMode = signal(false);
  readonly lightboxImage = signal<WorkbookImage | null>(null);
  readonly theoryOpen = signal(false);
  readonly inlineTheoryOverrides = signal<Record<string, boolean>>({});
  readonly revealedHints = signal<Record<string, boolean>>({});

  private lastOverlayTrigger: HTMLElement | null = null;
  private pickerScrollRafId: number | null = null;
  private readonly pickerScrollRequest = signal(0);
  private lessonOpenedAt = 0;
  private activityViewedAt = 0;
  private activityHintsUsed = 0;
  private activityAssistLettersUsed = 0;
  private abandonTracked = false;

  private readonly retriedActivityIds = signal<Set<string>>(new Set());
  private readonly wordBankTypeMode = signal(false);
  private readonly wordOrderTypeItems = signal<Record<string, boolean>>({});

  readonly lesson = signal<Lesson | undefined>(undefined);
  readonly theory = signal<LessonTheory | undefined>(undefined);
  private loadRequestId = 0;
  private theoryRequestId = 0;
  readonly nextLesson = computed(() => {
    const id = this.lesson()?.id;
    return id ? LESSON_CATALOG.find((item) => item.id === id + 1) : undefined;
  });

  readonly activeIndex = signal(0);
  readonly canScrollPickerLeft = signal(false);
  readonly canScrollPickerRight = signal(false);
  readonly answers = signal<Record<string, string>>({});
  readonly checked = signal(false);
  readonly finished = signal(false);
  readonly awardedXp = signal(0);
  private readonly results = signal<Record<string, Record<string, boolean>>>({});

  readonly activity = computed(() => this.lesson()?.activities[this.activeIndex()]);
  readonly activeTheoryBlock = computed(() => {
    const lesson = this.lesson();
    const theory = this.theory();
    if (!lesson || !theory) return null;
    return resolveActivityTheory(
      lesson.id,
      lesson.activities,
      this.activeIndex(),
      theory,
      this.language.locale(),
      {
        overviewTitle: this.language.t('lesson.blockOverviewTitle'),
        grammarTitle: this.language.t('lesson.grammar'),
        practiceTitle: this.language.t('lesson.blockPracticeTitle'),
      },
    );
  });
  readonly isInlineTheoryExpanded = computed(() => {
    const resolved = this.activeTheoryBlock();
    if (!resolved) return false;
    const key = `${resolved.block.id}:${this.activeIndex()}`;
    const override = this.inlineTheoryOverrides()[key];
    return override !== undefined ? override : resolved.isBlockStart;
  });
  readonly adaptedActivity = computed<AdaptedActivity | undefined>(() => {
    const activity = this.activity();
    return activity ? adaptActivity(activity) : undefined;
  });
  readonly activityResults = computed<Record<string, boolean>>(() => this.results()[this.activity()?.id ?? ''] ?? {});
  readonly matchOptions = computed(() => [...new Set(this.activity()?.items.flatMap((item) => item.options ?? []) ?? [])]);
  readonly activityAudioTracks = computed<AudioPlayerTrack[]>(() => {
    const activity = this.activity();
    if (!activity) return [];
    const tracks = [...AUDIO_TRACKS, ...PART2_AUDIO_TRACKS].filter((track) => track.exerciseId === activity.sourceExerciseId);
    const players: AudioPlayerTrack[] = tracks.map((track) => ({
      file: track.file,
      url: this.audioTrackUrl(track.file),
      label: activity.audioUrl === this.audioTrackUrl(track.file) && activity.audioLabel
        ? activity.audioLabel
        : track.label,
    }));
    if (activity.audioUrl && !players.some((player) => player.url === activity.audioUrl)) {
      players.push({
        file: activity.audioUrl,
        url: this.audioTrackUrl(activity.audioUrl),
        label: activity.audioLabel || this.language.t('lesson.audioFallbackLabel'),
      });
    }
    return players;
  });

  readonly allImages = computed(() => WORKBOOK_IMAGES[this.activity()?.sourceExerciseId ?? ''] ?? []);
  readonly images = computed(() => {
    const used = new Set(this.activity()?.items.map((item) => item.image).filter(Boolean));
    return used.size > 0 ? [] : this.allImages();
  });

  readonly activityProgress = computed(() => {
    const lesson = this.lesson();
    if (!lesson) return 0;
    const completed = lesson.activities.filter((activity) => this.progress.hasCompletedActivity(lesson.id, activity.id)).length;
    return Math.round((completed / lesson.activities.length) * 100);
  });

  readonly answeredCount = computed(() => {
    const activity = this.activity();
    if (!activity) return 0;
    return activity.items.filter((item) => this.isItemAnswered(item)).length;
  });

  readonly hasTextInputs = computed(() => {
    const adapted = this.adaptedActivity();
    if (!adapted) return false;
    if (adapted.uxMode === 'dialogue-order') return true;
    if (adapted.uxMode === 'word-bank') return this.wordBankTypeMode();
    return adapted.items.some((item) => {
      if (item.uxMode === 'letter-cloze' || item.uxMode === 'prompt-gap' || item.uxMode === 'multi-gap' || item.uxMode === 'typed') {
        return true;
      }
      if (item.uxMode === 'long-text') {
        return item.wordOrder?.isSentenceOrder ? this.wordOrderTypeItems()[item.id] !== false : true;
      }
      return item.uxMode === 'word-order' && !!this.wordOrderTypeItems()[item.id];
    });
  });

  readonly totalQuestions = computed(() => this.lesson()?.activities.reduce((count, activity) => count + activity.items.length, 0) ?? 0);
  readonly correctAnswers = computed(() => Object.values(this.results()).reduce((count, result) => count + Object.values(result).filter(Boolean).length, 0));
  readonly finalScore = computed(() => this.totalQuestions() ? Math.round((this.correctAnswers() / this.totalQuestions()) * 100) : 0);
  readonly earnedXp = computed(() => 10 + Math.round(this.finalScore() / 10));

  readonly eligibleForFocusMode = computed(() => {
    const act = this.activity();
    const adapted = this.adaptedActivity();
    return !!act && !!adapted && act.items.length >= 2 && this.activityAudioTracks().length === 0 && !act.readingText && FOCUS_ELIGIBLE_MODES.has(adapted.uxMode);
  });
  readonly isMobileFocusMode = computed(() => this.isMobileViewport() && this.eligibleForFocusMode() && this.mobileViewOverride() !== 'list');
  readonly completedActivityIds = computed(() => {
    const lesson = this.lesson();
    if (!lesson) return new Set<string>();
    return new Set(lesson.activities.filter((a) => this.progress.hasCompletedActivity(lesson.id, a.id)).map((a) => a.id));
  });
  readonly activeFocusItem = computed<AdaptedItem | undefined>(() => {
    const adapted = this.adaptedActivity();
    const id = this.focusQueueIds()[this.focusIndex()];
    return adapted && id ? adapted.items.find((i) => i.id === id) : undefined;
  });
  readonly activeFocusOriginalIndex = computed(() => {
    const adapted = this.adaptedActivity();
    const item = this.activeFocusItem();
    return adapted && item ? adapted.items.findIndex((i) => i.id === item.id) : 0;
  });
  readonly activeFocusItemImage = computed(() => {
    const item = this.activeFocusItem();
    return item ? this.itemImage(item.raw) : undefined;
  });
  readonly activeFocusAnswer = computed(() => {
    const item = this.activeFocusItem();
    return item ? this.answerFor(item.id) : '';
  });
  readonly canCheckCurrentFocus = computed(() => {
    const item = this.activeFocusItem();
    return !!item && this.isItemAnswered(item.raw);
  });
  readonly activeFocusItemCorrect = computed(() => {
    const item = this.activeFocusItem();
    return item ? !!this.focusItemResults()[item.id] : false;
  });
  readonly activeFocusAccentHint = computed(() => {
    const item = this.activeFocusItem();
    return item ? this.accentHintFor(item.raw) : null;
  });
  readonly activeFocusExpectedAnswer = computed(() => {
    const item = this.activeFocusItem();
    return item ? this.expectedAnswer(item.raw) : '';
  });
  readonly activeFocusHintShown = computed(() => {
    const item = this.activeFocusItem();
    return !!item && this.isHintShown(item.id);
  });
  readonly canAssistCurrentFocusLetter = computed(() => {
    const item = this.activeFocusItem();
    return !!item && this.canAssistNextLetter(item.raw, item.uxMode);
  });
  readonly focusSummaryItems = computed(() => {
    const activity = this.activity();
    if (!activity) return [];
    const res = this.results()[activity.id] ?? this.focusItemResults();
    return activity.items.map((item, idx) => ({ id: item.id, index: idx + 1, correct: !!res[item.id] }));
  });

  constructor() {
    const onPageHide = (): void => this.trackLessonAbandoned('pagehide');
    let cleanupMediaQuery: (() => void) | undefined;
    if (typeof window !== 'undefined') {
      window.addEventListener('pagehide', onPageHide);
      if (typeof window.matchMedia === 'function') {
        const mq = window.matchMedia('(max-width: 600px)');
        this.isMobileViewport.set(mq.matches);
        const onMediaChange = (event: MediaQueryListEvent): void => {
          this.isMobileViewport.set(event.matches);
          if (event.matches && this.eligibleForFocusMode() && this.mobileViewOverride() !== 'list') {
            this.syncFocusStateWithActivity();
          }
        };
        mq.addEventListener('change', onMediaChange);
        cleanupMediaQuery = () => mq.removeEventListener('change', onMediaChange);
      }
    }
    this.destroyRef.onDestroy(() => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('pagehide', onPageHide);
      }
      cleanupMediaQuery?.();
      this.trackLessonAbandoned('navigate_away');
      this.cancelPickerScrollRaf();
    });

    this.route.paramMap
      .pipe(
        map((params) => Number(params.get('lessonId'))),
        takeUntilDestroyed(),
      )
      .subscribe((lessonId) => this.loadLesson(lessonId));

    effect((onCleanup) => {
      this.lesson();
      this.finished();
      const list = this.pickerListRef()?.nativeElement;
      if (!list) {
        this.canScrollPickerLeft.set(false);
        this.canScrollPickerRight.set(false);
        return;
      }
      const update = () => this.updatePickerScrollState();
      queueMicrotask(update);
      const rafId = typeof requestAnimationFrame !== 'undefined' ? requestAnimationFrame(update) : null;
      if (typeof ResizeObserver !== 'undefined') {
        const observer = new ResizeObserver(update);
        observer.observe(list);
        onCleanup(() => {
          if (rafId !== null) cancelAnimationFrame(rafId);
          observer.disconnect();
        });
      } else if (rafId !== null) {
        onCleanup(() => cancelAnimationFrame(rafId));
      }
    });

    effect((onCleanup) => {
      const request = this.pickerScrollRequest();
      this.lesson();
      this.finished();
      const list = this.pickerListRef()?.nativeElement;
      if (!request || !list || this.finished()) return;
      this.schedulePickerScrollIntoView();
      onCleanup(() => this.cancelPickerScrollRaf());
    });

    effect(() => {
      const id = this.lesson()?.id;
      const locale = this.language.locale();
      if (!id) {
        this.theory.set(undefined);
        return;
      }
      const reqId = ++this.theoryRequestId;
      void loadLessonTheory(id, locale).then((loaded) => {
        if (reqId === this.theoryRequestId) this.theory.set(loaded);
      });
    });
  }

  @HostListener('document:keydown', ['$event'])
  onDocumentKeydown(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      if (this.lightboxImage()) {
        event.preventDefault();
        this.closeLightbox();
        return;
      }
      if (this.dictionaryWord()) {
        event.preventDefault();
        this.dictionaryModal()?.close();
        return;
      }
      if (this.theoryOpen() && typeof window !== 'undefined' && window.innerWidth < 1160) {
        event.preventDefault();
        this.theoryOpen.set(false);
        return;
      }
      this.matchExercise()?.clearSelection();
      this.wordBankExercise()?.clearSelection();
      return;
    }

    const activity = this.activity();
    const adapted = this.adaptedActivity();
    const lesson = this.lesson();
    if (this.lightboxImage() || this.dictionaryWord() || this.finished() || !activity || !adapted || !lesson) return;
    if (event.ctrlKey || event.metaKey || event.altKey) return;

    const target = event.target instanceof HTMLElement ? event.target : null;
    const isEditable = !!target?.closest('input:not([type="range"]), textarea, select, [contenteditable="true"]');
    const isInteractive = !!target?.closest('input, textarea, select, button, a, audio, summary, [role="button"], [contenteditable="true"]');

    if (this.isMobileFocusMode() && this.theoryOpen()) return;

    if (event.key === 'Enter' && !isInteractive) {
      if (this.isMobileFocusMode()) {
        event.preventDefault();
        if (this.focusSummaryOpen()) {
          void this.next();
        } else if (this.focusItemChecked()) {
          this.advanceFocusCard();
        } else {
          const item = this.activeFocusItem()?.raw;
          if (item && this.isItemAnswered(item)) {
            void this.checkCurrentFocusItem();
          }
        }
        return;
      }
      if (this.checked()) {
        event.preventDefault();
        void this.next();
      } else if (this.hasAnsweredAll()) {
        event.preventDefault();
        void this.checkAnswers();
      }
      return;
    }

    if ((event.code === 'Space' || event.key === ' ') && !isInteractive && !event.repeat) {
      if (this.activityAudioTracks().length > 0) {
        event.preventDefault();
        this.audioBar()?.togglePlayPause();
      }
      return;
    }

    if (/^[1-9]$/.test(event.key) && !isEditable && !event.repeat) {
      if (this.isMobileFocusMode()) {
        if (this.focusItemChecked() || this.focusSummaryOpen()) return;
        const targetItem = this.activeFocusItem();
        const optionIndex = Number(event.key) - 1;
        if (targetItem?.choiceOptions && optionIndex < targetItem.choiceOptions.length) {
          event.preventDefault();
          this.selectOption(targetItem.id, targetItem.choiceOptions[optionIndex].value);
        }
        return;
      }

      if (this.checked()) return;
      if (adapted.uxMode === 'classify') {
        event.preventDefault();
        this.classifyExercise()?.selectCategoryByShortcut(Number(event.key) - 1);
        return;
      }

      const supportsChoiceKeys = adapted.uxMode === 'choice'
        || adapted.items.some((item) => (item.choiceOptions?.length ?? 0) > 0);
      if (!supportsChoiceKeys) return;

      const focusedRow = (document.activeElement instanceof HTMLElement ? document.activeElement : target)
        ?.closest<HTMLElement>('.question-row[data-item-id]');
      const focusedId = focusedRow?.dataset['itemId'];
      const targetItem = (focusedId ? adapted.items.find((item) => item.id === focusedId && item.choiceOptions?.length) : undefined)
        ?? adapted.items.find((item) => (item.choiceOptions?.length ?? 0) > 0 && !this.answerFor(item.id).trim());
      const optionIndex = Number(event.key) - 1;
      if (targetItem?.choiceOptions && optionIndex < targetItem.choiceOptions.length) {
        event.preventDefault();
        this.selectOption(targetItem.id, targetItem.choiceOptions[optionIndex].value);
      }
      return;
    }

    if ((event.key === 'ArrowLeft' || event.key === 'ArrowRight')
      && !isEditable
      && !event.shiftKey
      && !target?.closest('audio, input[type="range"], [role="slider"]')) {
      if (event.key === 'ArrowLeft' && this.activeIndex() > 0) {
        event.preventDefault();
        this.previousActivity();
      } else if (event.key === 'ArrowRight' && this.activeIndex() < lesson.activities.length - 1) {
        event.preventDefault();
        this.nextActivity();
      }
    }
  }

  onInputEnter(event: Event): void {
    event.preventDefault();
    if (this.isMobileFocusMode()) {
      if (this.focusSummaryOpen()) {
        void this.next();
        return;
      }
      if (this.focusItemChecked()) {
        this.advanceFocusCard();
        return;
      }
      const item = this.activeFocusItem()?.raw;
      if (item && this.isItemAnswered(item)) {
        void this.checkCurrentFocusItem();
        return;
      }
      this.focusNextEmptyInput(
        this.mobileFocusDeck()?.focusCardElement(),
        event.target as HTMLInputElement | HTMLTextAreaElement,
      );
      return;
    }
    if (this.checked()) {
      void this.next();
      return;
    }
    if (this.hasAnsweredAll()) {
      void this.checkAnswers();
      return;
    }
    this.focusNextEmptyInput(
      this.exerciseCardRef()?.nativeElement,
      event.target as HTMLInputElement | HTMLTextAreaElement,
    );
  }

  lessonLabel(lessonId: number): string {
    if (lessonId >= 50) {
      return `${this.language.t('lesson.part')} 3 · ${this.language.t('lesson.lesson')} ${String(lessonId - 50).padStart(2, '0')}`;
    }
    return lessonId > 26
      ? `${this.language.t('lesson.part')} 2 · ${this.language.t('lesson.lesson')} ${String(lessonId - 26).padStart(2, '0')}`
      : `${this.language.t('lesson.lesson')} ${String(lessonId).padStart(2, '0')}`;
  }

  instructionTranslation(instruction: string): string | null {
    const locale = this.language.locale();
    if (locale === 'pl') return null;
    return INSTRUCTION_TRANSLATIONS[instruction]?.[locale] ?? null;
  }

  dashboardUrl(): string {
    const id = this.lesson()?.id ?? 1;
    return id >= 50 ? '/course/part-3' : id > 26 ? '/course/part-2' : '/course/part-1';
  }

  toggleTheory(): void {
    const next = !this.theoryOpen();
    this.theoryOpen.set(next);
    const lesson = this.lesson();
    if (lesson) {
      this.analytics.track('theory_toggled', {
        lessonId: lesson.id,
        courseId: this.courseIdFor(lesson.id),
        activityId: this.activity()?.id,
        metadata: { open: next },
      });
    }
  }

  toggleInlineTheory(): void {
    const resolved = this.activeTheoryBlock();
    const lesson = this.lesson();
    if (!resolved || !lesson) return;
    const key = `${resolved.block.id}:${this.activeIndex()}`;
    const next = !this.isInlineTheoryExpanded();
    this.inlineTheoryOverrides.update((cur) => ({ ...cur, [key]: next }));
    this.analytics.track('inline_theory_toggled', {
      lessonId: lesson.id,
      courseId: this.courseIdFor(lesson.id),
      activityId: this.activity()?.id,
      metadata: {
        block_id: resolved.block.id,
        open: next,
        is_block_start: resolved.isBlockStart,
      },
    });
  }

  toggleDictionaryMode(): void {
    const next = !this.dictionaryMode();
    this.dictionaryMode.set(next);
    const lesson = this.lesson();
    if (lesson) {
      this.analytics.track('dictionary_mode_toggled', {
        lessonId: lesson.id,
        courseId: this.courseIdFor(lesson.id),
        activityId: this.activity()?.id,
        metadata: { enabled: next },
      });
    }
  }

  openLightbox(image: WorkbookImage): void {
    this.lastOverlayTrigger = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    this.lightboxImage.set(image);
  }

  closeLightbox(): void {
    this.lightboxImage.set(null);
    this.restoreTriggerFocus();
  }

  onMainClick(event: MouseEvent): void {
    if (!this.dictionaryMode()) return;
    const target = event.target instanceof HTMLElement ? event.target : null;
    if (!target || target.closest(PONS_BLOCKED_SELECTOR)) return;
    const word = this.wordAtPoint(event.clientX, event.clientY);
    if (word) {
      event.preventDefault();
      event.stopPropagation();
      this.openDictionary(word);
    }
  }

  onWordDoubleClick(event: MouseEvent): void {
    const target = event.target instanceof HTMLElement ? event.target : null;
    if (!target || target.closest('input, textarea, select, audio, button, a')) return;
    const word = this.wordAtPoint(event.clientX, event.clientY);
    if (word) this.openDictionary(word);
  }

  closeDictionary(): void {
    this.dictionaryWord.set(null);
    this.restoreTriggerFocus();
  }

  setAnswer(itemId: string, value: string): void {
    this.answers.update((current) => ({ ...current, [this.answerKey(itemId)]: value }));
    if (!this.isMobileFocusMode()) this.clearFocusItemResult(itemId);
    if (value.trim()) this.trackFirstInput();
  }

  answerFor(itemId: string): string {
    return this.answers()[this.answerKey(itemId)] ?? '';
  }

  letterClozeAnswerFor(itemId: string, gapIndex: number): string {
    return this.answers()[this.letterClozeAnswerKey(itemId, gapIndex)] ?? '';
  }

  setLetterClozeGap(itemId: string, gapIndex: number, value: string): void {
    this.answers.update((current) => ({
      ...current,
      [this.letterClozeAnswerKey(itemId, gapIndex)]: value,
    }));
    if (!this.isMobileFocusMode()) this.clearFocusItemResult(itemId);
    if (value.trim()) this.trackFirstInput();
  }

  onFocusAnswerChange(value: string): void {
    const item = this.activeFocusItem();
    if (item && !this.focusItemChecked()) this.setAnswer(item.id, value);
  }

  onFocusOptionSelect(value: string): void {
    const item = this.activeFocusItem();
    if (item && !this.focusItemChecked()) this.selectOption(item.id, value);
  }

  onFocusLetterClozeGap(event: { gapIndex: number; value: string }): void {
    const item = this.activeFocusItem();
    if (item && !this.focusItemChecked()) this.setLetterClozeGap(item.id, event.gapIndex, event.value);
  }

  onFocusWordOrderModeChange(mode: 'chips' | 'type'): void {
    const item = this.activeFocusItem();
    if (item) this.onWordOrderModeChange(item.id, mode);
  }

  onFocusToggleHint(): void {
    const item = this.activeFocusItem();
    if (item) this.toggleHint(item.id);
  }

  onFocusAssistNextLetter(): void {
    const item = this.activeFocusItem();
    if (item && !this.focusItemChecked()) this.assistNextLetter(item.raw);
  }

  onSubAnswerChange(event: { itemId: string; value: string }): void {
    if (this.dictionaryMode()) return;
    if (!this.checked()) this.setAnswer(event.itemId, event.value);
  }

  onWordBankTypeModeChange(isTypeMode: boolean): void {
    if (this.wordBankTypeMode() === isTypeMode) return;
    this.wordBankTypeMode.set(isTypeMode);
    const lesson = this.lesson();
    const activity = this.activity();
    if (lesson && activity) {
      this.analytics.track('exercise_input_mode_changed', {
        lessonId: lesson.id,
        courseId: this.courseIdFor(lesson.id),
        activityId: activity.id,
        metadata: { ux_mode: this.adaptedActivity()?.uxMode ?? 'word-bank', mode: isTypeMode ? 'type' : 'chips' },
      });
    }
  }

  onWordOrderModeChange(itemId: string, mode: 'chips' | 'type'): void {
    const nextIsType = mode === 'type';
    if (!!this.wordOrderTypeItems()[itemId] === nextIsType) return;
    this.wordOrderTypeItems.update((cur) => ({ ...cur, [itemId]: nextIsType }));
    const lesson = this.lesson();
    const activity = this.activity();
    if (lesson && activity) {
      this.analytics.track('exercise_input_mode_changed', {
        lessonId: lesson.id,
        courseId: this.courseIdFor(lesson.id),
        activityId: activity.id,
        metadata: { ux_mode: 'word-order', mode },
      });
    }
  }

  selectOption(itemId: string, value: string): void {
    if (this.dictionaryMode()) return;
    if (!this.checked()) this.setAnswer(itemId, value);
  }

  isItemAnswered(item: ActivityItem): boolean {
    if (item.letterCloze) {
      return item.letterCloze.gaps.every((_, index) => this.letterClozeAnswerFor(item.id, index).length > 0);
    }
    const adaptedItem = this.adaptedItemById(item.id);
    if (adaptedItem?.multiGap && adaptedItem.multiGap.gapCount > 1) {
      const parts = this.answerFor(item.id).split('; ');
      return parts.length >= adaptedItem.multiGap.gapCount
        && parts.slice(0, adaptedItem.multiGap.gapCount).every((part) => part.trim().length > 0);
    }
    return this.answerFor(item.id).trim().length > 0;
  }

  hasAnsweredAll(): boolean {
    const activity = this.activity();
    return !!activity && activity.items.every((item) => this.isItemAnswered(item));
  }

  enterKeyHint(itemIndex: number): 'done' | 'next' {
    const items = this.activity()?.items ?? [];
    if (itemIndex >= items.length - 1) return 'done';
    const othersAnswered = items.every((item, idx) => idx === itemIndex || this.isItemAnswered(item));
    return othersAnswered ? 'done' : 'next';
  }

  toggleHint(itemId: string): void {
    const key = this.answerKey(itemId);
    const next = !this.revealedHints()[key];
    this.revealedHints.update((current) => ({ ...current, [key]: next }));
    if (next) this.activityHintsUsed++;
    const lesson = this.lesson();
    const activity = this.activity();
    if (lesson && activity) {
      this.analytics.track('hint_toggled', {
        lessonId: lesson.id,
        courseId: this.courseIdFor(lesson.id),
        activityId: activity.id,
        metadata: { item_id: itemId, shown: next, ux_mode: this.adaptedActivity()?.uxMode ?? null },
      });
    }
  }

  isHintShown(itemId: string): boolean {
    return !!this.revealedHints()[this.answerKey(itemId)];
  }

  isCorrect(item: ActivityItem): boolean {
    if (item.letterCloze) {
      const { parts, gaps } = item.letterCloze;
      const answer = parts.map((part, index) => part + (gaps[index] === undefined ? '' : this.letterClozeAnswerFor(item.id, index))).join('');
      return item.accepted.some((expected) => normalizeAnswer(expected) === normalizeAnswer(answer));
    }
    const adaptedItem = this.adaptedItemById(item.id);
    const rawAnswer = this.answerFor(item.id);
    if (adaptedItem?.multiGap && adaptedItem.multiGap.gapCount > 1) {
      const gapCount = adaptedItem.multiGap.gapCount;
      const userParts = rawAnswer.split('; ').map((part) => normalizeAnswer(part));
      return item.accepted.some((expected) => {
        const expParts = expected.split(/\s*;\s*/).map((part) => normalizeAnswer(part));
        if (expParts.length === gapCount && userParts.length >= gapCount) {
          return expParts.every((exp, idx) => exp === userParts[idx]);
        }
        return normalizeAnswer(expected) === normalizeAnswer(rawAnswer);
      });
    }
    const answer = normalizeAnswer(rawAnswer);
    return item.accepted.some((expected) => normalizeAnswer(expected) === answer);
  }

  isItemCorrect(item: ActivityItem): boolean {
    return this.results()[this.activity()?.id ?? '']?.[item.id] ?? false;
  }

  /** T6 tap-assist: short single-answer typed items can reveal one more correct letter per tap. */
  canAssistNextLetter(item: ActivityItem, uxMode?: string): boolean {
    const itemLocked = this.isMobileFocusMode() ? this.focusItemChecked() : this.checked();
    if (itemLocked || uxMode === 'long-text' || item.letterCloze) return false;
    const adapted = this.adaptedItemById(item.id);
    if (adapted?.multiGap && adapted.multiGap.gapCount > 1) return false;
    const expected = item.accepted[0] ?? '';
    if (!expected || expected.length > 40 || expected.includes(';')) return false;
    return this.answerFor(item.id).length < expected.length;
  }

  assistNextLetter(item: ActivityItem): void {
    const expected = item.accepted[0] ?? '';
    if (!expected) return;
    const fold = (c: string) => c.toLocaleLowerCase('pl-PL').replace(/ł/g, 'l').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    const typed = this.answerFor(item.id);
    let k = 0;
    while (k < typed.length && k < expected.length && fold(typed[k]) === fold(expected[k])) k++;
    this.setAnswer(item.id, expected.slice(0, Math.min(expected.length, k + 1)));
    this.activityAssistLettersUsed++;
    const lesson = this.lesson();
    const activity = this.activity();
    if (lesson && activity) {
      this.analytics.track('assist_letter_used', {
        lessonId: lesson.id,
        courseId: this.courseIdFor(lesson.id),
        activityId: activity.id,
        metadata: { item_id: item.id, ux_mode: this.adaptedActivity()?.uxMode ?? null },
      });
    }
  }

  /** Answer counted as correct, but Polish diacritics differ from the canonical spelling. */
  accentHintFor(item: ActivityItem): string | null {
    const itemCorrect = this.isItemCorrect(item)
      || (this.isMobileFocusMode() && this.focusItemChecked() && this.focusItemResults()[item.id] === true);
    if (!itemCorrect || item.letterCloze) return null;
    const adapted = this.adaptedItemById(item.id);
    if (adapted?.multiGap && adapted.multiGap.gapCount > 1) return null;
    const raw = this.answerFor(item.id).trim().toLocaleLowerCase('pl-PL').replace(/\s+/g, ' ');
    if (!raw) return null;
    const canon = (v: string) => v.trim().toLocaleLowerCase('pl-PL').replace(/\s+/g, ' ');
    if (item.accepted.some((a) => canon(a) === raw)) return null;
    const match = item.accepted.find((a) => normalizeAnswer(a) === normalizeAnswer(raw) && /[ąćęłńóśźż]/i.test(a));
    return match ?? null;
  }

  currentCorrectCount(): number {
    return Object.values(this.results()[this.activity()?.id ?? ''] ?? {}).filter(Boolean).length;
  }

  isActivityComplete(activity: Activity): boolean {
    const lessonId = this.lesson()?.id;
    return !!lessonId && this.progress.hasCompletedActivity(lessonId, activity.id);
  }

  previousActivity(): void {
    const idx = this.activeIndex();
    if (idx > 0) this.selectActivity(idx - 1);
  }

  nextActivity(): void {
    const lesson = this.lesson();
    const idx = this.activeIndex();
    if (lesson && idx < lesson.activities.length - 1) this.selectActivity(idx + 1);
  }

  scrollPicker(direction: -1 | 1): void {
    const list = this.pickerListRef()?.nativeElement;
    if (!list) return;
    const reduced = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    list.scrollBy({ left: direction * 220, behavior: reduced ? 'auto' : 'smooth' });
  }

  updatePickerScrollState(): void {
    const list = this.pickerListRef()?.nativeElement;
    if (!list) {
      this.canScrollPickerLeft.set(false);
      this.canScrollPickerRight.set(false);
      return;
    }
    const maxScroll = Math.max(0, list.scrollWidth - list.clientWidth);
    this.canScrollPickerLeft.set(list.scrollLeft > 2);
    this.canScrollPickerRight.set(list.scrollLeft < maxScroll - 2);
  }

  selectActivity(index: number): void {
    const lesson = this.lesson();
    if (!lesson || index < 0 || index >= lesson.activities.length) return;
    const activity = lesson.activities[index];
    const isRetried = this.retriedActivityIds().has(activity.id);
    const saved = !isRetried ? this.progress.activityFor(lesson.id, activity.id) : null;
    if (saved) {
      this.answers.update((answers) => ({ ...answers, ...saved.answers }));
      this.results.update((results) => ({ ...results, [activity.id]: saved.results }));
    }
    this.activeIndex.set(index);
    this.checked.set(!!saved);
    this.wordBankTypeMode.set(false);
    this.wordOrderTypeItems.set({});
    this.initFocusState(activity, { startAtSummary: !!saved });
    this.activityViewedAt = Date.now();
    this.activityHintsUsed = 0;
    this.activityAssistLettersUsed = 0;
    this.trackActivityViewed(lesson, activity, index, !!saved);
    this.scrollToTop();
    this.scrollActivePickerIntoView();
  }

  switchToListView(): void {
    this.mobileViewOverride.set('list');
    const lesson = this.lesson();
    const activity = this.activity();
    if (lesson && activity) {
      this.analytics.track('focus_mode_toggled', {
        lessonId: lesson.id,
        courseId: this.courseIdFor(lesson.id),
        activityId: activity.id,
        metadata: { mode: 'list', ux_mode: this.adaptedActivity()?.uxMode ?? null },
      });
    }
    this.scrollToTop();
    this.scrollActivePickerIntoView();
  }

  switchToCardsView(): void {
    this.mobileViewOverride.set('cards');
    this.syncFocusStateWithActivity();
    const lesson = this.lesson();
    const activity = this.activity();
    if (lesson && activity) {
      this.analytics.track('focus_mode_toggled', {
        lessonId: lesson.id,
        courseId: this.courseIdFor(lesson.id),
        activityId: activity.id,
        metadata: { mode: 'cards', ux_mode: this.adaptedActivity()?.uxMode ?? null },
      });
    }
    this.scrollToTop();
  }

  async checkCurrentFocusItem(): Promise<void> {
    const lesson = this.lesson();
    const activity = this.activity();
    const item = this.activeFocusItem()?.raw;
    if (!lesson || !activity || !item || this.focusItemChecked() || !this.isItemAnswered(item)) return;

    const ok = this.evaluateAndRecordItem(lesson, activity, item);
    if (ok) {
      this.sound.playCorrect();
    } else {
      this.sound.playWrong();
    }
    const updatedResults = { ...this.focusItemResults(), [item.id]: ok };
    this.focusItemResults.set(updatedResults);
    this.focusItemChecked.set(true);

    if (this.focusIndex() >= this.focusQueueIds().length - 1) {
      const isRetry = this.retriedActivityIds().has(activity.id);
      const finalResult: Record<string, boolean> = {};
      for (const entry of activity.items) {
        finalResult[entry.id] = entry.id in updatedResults
          ? updatedResults[entry.id]
          : this.evaluateAndRecordItem(lesson, activity, entry);
      }
      this.focusItemResults.set(finalResult);
      await this.finalizeActivityCheck(lesson, activity, finalResult, isRetry, true);
    }
  }

  advanceFocusCard(): void {
    if (!this.focusItemChecked()) return;
    const queueLen = this.focusQueueIds().length;
    if (this.focusIndex() >= queueLen - 1) {
      this.focusItemChecked.set(false);
      this.focusSummaryOpen.set(true);
    } else {
      this.focusIndex.update((idx) => idx + 1);
      this.focusItemChecked.set(false);
    }
    this.scrollToTop();
  }

  jumpToUnanswered(): void {
    const activity = this.activity();
    const adapted = this.adaptedActivity();
    const card = this.exerciseCardRef()?.nativeElement;
    if (!activity || !adapted || !card) return;
    const lesson = this.lesson();
    if (lesson) {
      this.analytics.track('jump_to_unanswered_clicked', {
        lessonId: lesson.id,
        courseId: this.courseIdFor(lesson.id),
        activityId: activity.id,
        metadata: {
          ux_mode: adapted.uxMode,
          answered_count: this.answeredCount(),
          total_items: activity.items.length,
        },
      });
    }

    const firstUnansweredIndex = activity.items.findIndex((item) => !this.isItemAnswered(item));
    if (firstUnansweredIndex < 0) return;
    const firstUnanswered = activity.items[firstUnansweredIndex];

    if (adapted.uxMode === 'classify') {
      this.classifyExercise()?.jumpToItem(firstUnansweredIndex);
      card.querySelector<HTMLElement>('.classify-bucket-btn:not(:disabled)')?.focus({ preventScroll: true });
      return;
    }

    if (adapted.uxMode === 'match') {
      this.matchExercise()?.focusItem(firstUnanswered.id);
      return;
    }

    const row = card.querySelector<HTMLElement>(`[data-item-id="${firstUnanswered.id}"]`);
    if (!row) return;
    row.scrollIntoView({ behavior: 'smooth', block: 'center' });
    const emptyInput = Array.from(
      row.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>(
        '.letter-cloze-gap:not(:disabled):not([readonly]), .answer-input:not(:disabled):not([readonly])',
      ),
    ).find((el) => !el.value.trim());
    const target = emptyInput
      ?? row.querySelector<HTMLElement>(
        '.letter-cloze-gap:not(:disabled):not([readonly]), .answer-input:not(:disabled):not([readonly]), .option-button:not(:disabled), .word-slot:not(:disabled), .word-chip:not(:disabled)',
      );
    target?.focus({ preventScroll: true });
  }

  async checkAnswers(): Promise<void> {
    const activity = this.activity();
    const lesson = this.lesson();
    if (!lesson || !activity || !this.hasAnsweredAll() || this.checked()) return;
    const isRetry = this.retriedActivityIds().has(activity.id);
    const result: Record<string, boolean> = {};
    for (const item of activity.items) {
      result[item.id] = this.evaluateAndRecordItem(lesson, activity, item);
    }
    const resValues = Object.values(result);
    const okCount = resValues.filter(Boolean).length;
    if (okCount === resValues.length || okCount / Math.max(resValues.length, 1) >= 0.7) {
      this.sound.playCorrect();
    } else {
      this.sound.playWrong();
    }
    await this.finalizeActivityCheck(lesson, activity, result, isRetry, false);
  }

  retryWrongAnswers(): void {
    const activity = this.activity();
    const lesson = this.lesson();
    if (!activity) return;
    const prevResults = { ...(this.results()[activity.id] ?? {}) };
    if (lesson) {
      this.analytics.track('activity_retried', {
        lessonId: lesson.id,
        courseId: this.courseIdFor(lesson.id),
        activityId: activity.id,
        metadata: { ux_mode: this.adaptedActivity()?.uxMode ?? null, retry_scope: 'wrong_only' },
      });
    }
    this.clearActivityAnswers(activity, true);
    this.checked.set(false);
    this.initFocusState(activity, { wrongOnly: true, prevResults });
    this.activityViewedAt = Date.now();
    this.activityHintsUsed = 0;
    this.activityAssistLettersUsed = 0;
    this.matchExercise()?.clearSelection();
    this.wordBankExercise()?.clearSelection();
    this.scrollToTop();
  }

  retryActivity(): void {
    const activity = this.activity();
    const lesson = this.lesson();
    if (!activity) return;
    if (lesson) {
      this.analytics.track('activity_retried', {
        lessonId: lesson.id,
        courseId: this.courseIdFor(lesson.id),
        activityId: activity.id,
        metadata: { ux_mode: this.adaptedActivity()?.uxMode ?? null, retry_scope: 'all' },
      });
    }
    this.clearActivityAnswers(activity, false);
    this.checked.set(false);
    this.initFocusState(activity);
    this.activityViewedAt = Date.now();
    this.activityHintsUsed = 0;
    this.activityAssistLettersUsed = 0;
    this.matchExercise()?.clearSelection();
    this.wordBankExercise()?.clearSelection();
    this.scrollToTop();
  }

  retryWrongFromCompletion(): void {
    const lesson = this.lesson();
    if (!lesson) return;
    this.analytics.track('activity_retried', {
      lessonId: lesson.id,
      courseId: this.courseIdFor(lesson.id),
      metadata: { retry_scope: 'lesson_wrong' },
    });
    const currentResults = this.results();
    let firstWrongIndex = -1;
    lesson.activities.forEach((activity, idx) => {
      const activityResult = currentResults[activity.id];
      const hasWrong = activityResult ? Object.values(activityResult).some((ok) => !ok) : true;
      if (hasWrong) {
        if (firstWrongIndex < 0) firstWrongIndex = idx;
        this.clearActivityAnswers(activity, true);
      }
    });
    this.finished.set(false);
    this.abandonTracked = false;
    this.selectActivity(firstWrongIndex >= 0 ? firstWrongIndex : 0);
  }

  retryLessonFromCompletion(): void {
    const lesson = this.lesson();
    if (!lesson) return;
    this.analytics.track('activity_retried', {
      lessonId: lesson.id,
      courseId: this.courseIdFor(lesson.id),
      metadata: { retry_scope: 'lesson_all' },
    });
    for (const activity of lesson.activities) {
      this.clearActivityAnswers(activity, false);
    }
    this.finished.set(false);
    this.abandonTracked = false;
    this.selectActivity(0);
  }

  async next(): Promise<void> {
    const lesson = this.lesson();
    if (!lesson || !this.checked()) return;
    await this.progress.flush();
    const nextIndex = lesson.activities.findIndex((activity) =>
      this.retriedActivityIds().has(activity.id) || !this.progress.hasCompletedActivity(lesson.id, activity.id),
    );
    if (nextIndex >= 0) {
      this.selectActivity(nextIndex);
      return;
    }
    const alreadyCompleted = this.progress.hasCompleted(lesson.id);
    this.awardedXp.set(alreadyCompleted ? 0 : this.earnedXp());
    await this.progress.completeLesson(lesson.id, this.finalScore(), this.earnedXp());
    const secondsInLesson = this.lessonOpenedAt ? Math.max(0, Math.round((Date.now() - this.lessonOpenedAt) / 1000)) : 0;
    this.analytics.track('lesson_completed', {
      lessonId: lesson.id,
      courseId: this.courseIdFor(lesson.id),
      metadata: {
        lesson_title: lesson.title,
        score: this.finalScore(),
        xp: this.awardedXp(),
        seconds_in_lesson: secondsInLesson,
        activities_count: lesson.activities.length,
        completed_lessons_total: this.progress.progress().completedLessonIds.length,
        is_first_completion: !alreadyCompleted,
      },
    });
    this.sound.playComplete();
    this.finished.set(true);
    this.scrollToTop();
  }

  itemImage(item: ActivityItem): WorkbookImage | undefined {
    return item.image ? this.allImages()[item.image - 1] : undefined;
  }

  expectedAnswer(item: ActivityItem): string {
    return item.accepted[0];
  }

  audioTrackUrl(file: string): string {
    return file.startsWith('/') ? file : `/assets/telegram_audio/${file}`;
  }

  isLastActivity(): boolean {
    const lesson = this.lesson();
    const activityId = this.activity()?.id;
    return !!lesson && !!activityId && lesson.activities.every((activity) =>
      activity.id === activityId
      || (!this.retriedActivityIds().has(activity.id) && this.progress.hasCompletedActivity(lesson.id, activity.id)),
    );
  }

  private async loadLesson(lessonId: number): Promise<void> {
    const previousLesson = this.lesson();
    if (previousLesson && previousLesson.id !== lessonId) {
      this.trackLessonAbandoned('navigate_away');
    }

    const reqId = ++this.loadRequestId;
    const lesson = await loadLessonById(lessonId);
    if (reqId !== this.loadRequestId) return;
    this.lesson.set(lesson);
    if (!lesson) {
      void this.router.navigateByUrl(this.dashboardUrl());
      return;
    }

    this.finished.set(false);
    this.awardedXp.set(0);
    this.wordBankTypeMode.set(false);
    this.wordOrderTypeItems.set({});
    this.retriedActivityIds.set(new Set());
    this.revealedHints.set({});
    this.dictionaryWord.set(null);
    this.dictionaryMode.set(false);
    this.lightboxImage.set(null);
    this.theoryOpen.set(false);
    this.inlineTheoryOverrides.set({});
    this.lessonOpenedAt = Date.now();
    this.activityViewedAt = this.lessonOpenedAt;
    this.activityHintsUsed = 0;
    this.activityAssistLettersUsed = 0;
    this.abandonTracked = false;

    const restoredResults: Record<string, Record<string, boolean>> = {};
    const restoredAnswers: Record<string, string> = {};
    let firstIncomplete = -1;
    lesson.activities.forEach((activity, index) => {
      const saved = this.progress.activityFor(lesson.id, activity.id);
      if (saved) {
        restoredResults[activity.id] = saved.results;
        Object.assign(restoredAnswers, saved.answers);
      } else if (firstIncomplete < 0) {
        firstIncomplete = index;
      }
    });
    this.results.set(restoredResults);
    this.answers.set(restoredAnswers);
    const index = firstIncomplete < 0 ? 0 : firstIncomplete;
    this.activeIndex.set(index);
    const initialActivity = lesson.activities[index];
    const saved = initialActivity ? this.progress.activityFor(lesson.id, initialActivity.id) : null;
    this.checked.set(!!saved);
    this.mobileViewOverride.set('auto');
    if (initialActivity) {
      this.initFocusState(initialActivity, { startAtSummary: !!saved });
    }
    const completedLessonsCount = this.progress.progress().completedLessonIds.length;
    this.analytics.trackOnce(`lesson_opened:${lesson.id}`, 'lesson_opened', {
      lessonId: lesson.id,
      courseId: this.courseIdFor(lesson.id),
      activityId: initialActivity?.id,
      metadata: {
        lesson_title: lesson.title,
        lesson_topic: lesson.topic,
        activities_count: lesson.activities.length,
        starting_activity_index: index,
        ux_mode: this.adaptedActivity()?.uxMode ?? null,
        is_first_lesson: completedLessonsCount === 0,
        completed_lessons_count: completedLessonsCount,
      },
    });
    if (initialActivity) {
      this.trackActivityViewed(lesson, initialActivity, index, !!saved);
    }
    this.scrollToTop();
    this.scrollActivePickerIntoView();
  }

  private trackFirstInput(): void {
    const lessonId = this.lesson()?.id;
    const activityId = this.activity()?.id;
    if (!lessonId || !activityId) return;
    const secondsToFirstInput = this.activityViewedAt
      ? Math.max(0, Math.round((Date.now() - this.activityViewedAt) / 1000))
      : 0;
    this.analytics.trackOnce(`first_input:${lessonId}:${activityId}`, 'first_input', {
      lessonId,
      courseId: this.courseIdFor(lessonId),
      activityId,
      metadata: {
        activity_index: this.activeIndex(),
        ux_mode: this.adaptedActivity()?.uxMode ?? null,
        seconds_to_first_input: secondsToFirstInput,
      },
    });
  }

  private trackActivityViewed(lesson: Lesson, activity: Activity, index: number, alreadyCompleted: boolean): void {
    this.analytics.track('activity_viewed', {
      lessonId: lesson.id,
      courseId: this.courseIdFor(lesson.id),
      activityId: activity.id,
      metadata: {
        activity_index: index,
        activities_count: lesson.activities.length,
        ux_mode: this.adaptedActivity()?.uxMode ?? null,
        items_count: activity.items.length,
        has_audio: this.activityAudioTracks().length > 0,
        has_reading_text: !!activity.readingText,
        has_images: this.allImages().length > 0,
        has_text_inputs: this.hasTextInputs(),
        already_completed: alreadyCompleted,
      },
    });
  }

  private trackLessonAbandoned(reason: 'navigate_away' | 'pagehide'): void {
    const lesson = this.lesson();
    const activity = this.activity();
    if (!lesson || !activity || this.finished() || this.abandonTracked) return;
    this.abandonTracked = true;
    const completedActivities = lesson.activities.filter((a) => this.progress.hasCompletedActivity(lesson.id, a.id)).length;
    const secondsInLesson = this.lessonOpenedAt ? Math.max(0, Math.round((Date.now() - this.lessonOpenedAt) / 1000)) : 0;
    this.analytics.track('lesson_abandoned', {
      lessonId: lesson.id,
      courseId: this.courseIdFor(lesson.id),
      activityId: activity.id,
      metadata: {
        lesson_title: lesson.title,
        activity_index: this.activeIndex(),
        activities_count: lesson.activities.length,
        ux_mode: this.adaptedActivity()?.uxMode ?? null,
        answered_count: this.answeredCount(),
        total_items: activity.items.length,
        completed_activities: completedActivities,
        checked_current: this.checked(),
        seconds_in_lesson: secondsInLesson,
        reason,
      },
    });
  }

  private courseIdFor(lessonId: number): 'part-1' | 'part-2' | 'part-3' {
    return lessonId >= 50 ? 'part-3' : lessonId > 26 ? 'part-2' : 'part-1';
  }

  private clearActivityAnswers(activity: Activity, wrongOnly: boolean): void {
    const activityResult = this.results()[activity.id] ?? {};
    const prefix = `${activity.id}:`;

    this.answers.update((current) => {
      const next = { ...current };
      for (const item of activity.items) {
        if (wrongOnly && activityResult[item.id] === true) continue;
        delete next[`${prefix}${item.id}`];
        const gapPrefix = `${prefix}${item.id}:gap:`;
        for (const key of Object.keys(next)) {
          if (key.startsWith(gapPrefix)) delete next[key];
        }
      }
      return next;
    });

    this.results.update((current) => {
      const next = { ...current };
      delete next[activity.id];
      return next;
    });

    this.retriedActivityIds.update((current) => {
      const next = new Set(current);
      next.add(activity.id);
      return next;
    });
  }

  private openDictionary(word: string): void {
    this.lastOverlayTrigger = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    this.dictionaryWord.set(word);
  }

  private restoreTriggerFocus(): void {
    const el = this.lastOverlayTrigger;
    this.lastOverlayTrigger = null;
    if (el?.isConnected) {
      queueMicrotask(() => el.focus({ preventScroll: true }));
    }
  }

  private scrollToTop(): void {
    if (typeof window === 'undefined') return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' });
  }

  private cancelPickerScrollRaf(): void {
    if (this.pickerScrollRafId !== null && typeof cancelAnimationFrame !== 'undefined') {
      cancelAnimationFrame(this.pickerScrollRafId);
    }
    this.pickerScrollRafId = null;
  }

  private scrollActivePickerIntoView(): void {
    this.pickerScrollRequest.update((count) => count + 1);
  }

  private schedulePickerScrollIntoView(): void {
    if (typeof requestAnimationFrame === 'undefined') return;
    this.cancelPickerScrollRaf();
    this.pickerScrollRafId = requestAnimationFrame(() => {
      this.pickerScrollRafId = null;
      const list = this.pickerListRef()?.nativeElement;
      const button = list?.querySelectorAll<HTMLElement>('.exercise-picker-button')[this.activeIndex()];
      if (!list || !button) return;
      const listRect = list.getBoundingClientRect();
      const buttonRect = button.getBoundingClientRect();
      const rawLeft = list.scrollLeft + (buttonRect.left - listRect.left) - (list.clientWidth - buttonRect.width) / 2;
      const maxScroll = Math.max(0, list.scrollWidth - list.clientWidth);
      const targetLeft = Math.max(0, Math.min(maxScroll, rawLeft));
      const reduced = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      list.scrollTo({ left: targetLeft, behavior: reduced ? 'auto' : 'smooth' });
      this.updatePickerScrollState();
    });
  }

  private adaptedItemById(itemId: string): AdaptedItem | undefined {
    return this.adaptedActivity()?.items.find((i) => i.id === itemId);
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

  private answerKey(itemId: string): string {
    return `${this.activity()?.id ?? ''}:${itemId}`;
  }

  private letterClozeAnswerKey(itemId: string, gapIndex: number): string {
    return `${this.answerKey(itemId)}:gap:${gapIndex}`;
  }

  private initFocusState(
    activity: Activity,
    options: { wrongOnly?: boolean; prevResults?: Record<string, boolean>; startAtSummary?: boolean } = {},
  ): void {
    const prevResults = options.prevResults ?? {};
    if (options.wrongOnly) {
      const wrongIds = activity.items.filter((item) => prevResults[item.id] !== true).map((item) => item.id);
      if (wrongIds.length > 0) {
        const keptResults: Record<string, boolean> = {};
        for (const item of activity.items) {
          if (prevResults[item.id] === true) keptResults[item.id] = true;
        }
        this.focusQueueIds.set(wrongIds);
        this.focusIndex.set(0);
        this.focusItemChecked.set(false);
        this.focusItemResults.set(keptResults);
        this.focusSummaryOpen.set(false);
        this.focusIsRetryRound.set(true);
        return;
      }
    }
    this.focusQueueIds.set(activity.items.map((item) => item.id));
    this.focusIndex.set(0);
    this.focusItemChecked.set(false);
    this.focusItemResults.set(options.startAtSummary ? { ...(this.results()[activity.id] ?? {}) } : {});
    this.focusSummaryOpen.set(!!options.startAtSummary);
    this.focusIsRetryRound.set(false);
  }

  private syncFocusStateWithActivity(): void {
    const activity = this.activity();
    if (!activity) return;
    if (this.checked()) {
      this.focusItemResults.set({ ...(this.results()[activity.id] ?? {}) });
      this.focusItemChecked.set(false);
      this.focusSummaryOpen.set(true);
      return;
    }
    let queue = this.focusQueueIds();
    if (queue.length === 0) {
      queue = activity.items.map((item) => item.id);
      this.focusQueueIds.set(queue);
    }
    const results = this.focusItemResults();
    const nextIdx = queue.findIndex((id) => {
      const item = activity.items.find((entry) => entry.id === id);
      return !!item && (!this.isItemAnswered(item) || !(id in results));
    });
    this.focusIndex.set(nextIdx >= 0 ? nextIdx : Math.max(0, queue.length - 1));
    this.focusItemChecked.set(false);
    this.focusSummaryOpen.set(false);
  }

  private clearFocusItemResult(itemId: string): void {
    if (!(itemId in this.focusItemResults())) return;
    this.focusItemResults.update((current) => {
      const next = { ...current };
      delete next[itemId];
      return next;
    });
  }

  private evaluateAndRecordItem(lesson: Lesson, activity: Activity, item: ActivityItem): boolean {
    const ok = this.isCorrect(item);
    const mistakeKey = `${lesson.id}:${activity.id}:${item.id}`;
    if (ok) {
      this.mistakes.resolveMistake(mistakeKey);
    } else if (!item.letterCloze && item.accepted.length > 0 && item.prompt.trim()) {
      this.mistakes.recordMistake({
        key: mistakeKey,
        lessonId: lesson.id,
        lessonTitle: lesson.title,
        activityId: activity.id,
        activityTitle: activity.title,
        prompt: item.prompt,
        accepted: item.accepted,
        options: item.options,
        userAnswer: this.answerFor(item.id),
      });
    }
    return ok;
  }

  private async finalizeActivityCheck(
    lesson: Lesson,
    activity: Activity,
    result: Record<string, boolean>,
    isRetry: boolean,
    focusMode: boolean,
  ): Promise<void> {
    this.results.update((current) => ({ ...current, [activity.id]: result }));
    this.checked.set(true);
    this.retriedActivityIds.update((set) => {
      if (!set.has(activity.id)) return set;
      const next = new Set(set);
      next.delete(activity.id);
      return next;
    });
    const prefix = `${activity.id}:`;
    const answers = Object.fromEntries(Object.entries(this.answers()).filter(([key]) => key.startsWith(prefix)));
    await this.progress.saveActivityProgress(lesson.id, activity.id, answers, result);
    const correct = Object.values(result).filter(Boolean).length;
    const total = activity.items.length;
    const accuracyPct = total > 0 ? Math.round((correct / total) * 100) : 0;
    const secondsSpent = this.activityViewedAt ? Math.max(0, Math.round((Date.now() - this.activityViewedAt) / 1000)) : 0;
    this.analytics.track('check_clicked', {
      lessonId: lesson.id,
      courseId: this.courseIdFor(lesson.id),
      activityId: activity.id,
      metadata: {
        correct,
        total,
        accuracy_pct: accuracyPct,
        activity_index: this.activeIndex(),
        ux_mode: this.adaptedActivity()?.uxMode ?? null,
        seconds_spent: secondsSpent,
        hints_used: this.activityHintsUsed,
        assist_letters_used: this.activityAssistLettersUsed,
        is_retry: isRetry,
        ...(focusMode ? { focus_mode: true } : {}),
      },
    });
  }

  private focusNextEmptyInput(card: HTMLElement | null | undefined, active: HTMLInputElement | HTMLTextAreaElement): void {
    if (!card) return;
    const inputs = Array.from(
      card.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>(
        '.answer-input:not(:disabled):not([readonly]), .letter-cloze-gap:not(:disabled):not([readonly])',
      ),
    );
    const currentIdx = inputs.indexOf(active);
    const nextUnanswered = inputs.slice(currentIdx + 1).find((el) => !el.value.trim())
      ?? inputs.slice(0, Math.max(0, currentIdx)).find((el) => !el.value.trim())
      ?? inputs[currentIdx + 1];
    nextUnanswered?.focus();
  }
}
