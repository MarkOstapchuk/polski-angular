import { ChangeDetectionStrategy, Component, computed, effect, ElementRef, inject, input, output, signal, viewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import type { ResolvedActivityTheory } from '../../../../data/lesson-theory-blocks';
import { Activity, AdaptedItem, Lesson } from '../../../../data/lesson-types';
import { WorkbookImage } from '../../../../data/workbook-images';
import { LanguageService } from '../../../../i18n/language.service';
import { ExerciseItemViewComponent } from '../exercise-item-view/exercise-item-view.component';
import { LessonInlineTheoryComponent } from '../lesson-inline-theory/lesson-inline-theory.component';

export interface FocusSummaryItem {
  id: string;
  index: number;
  correct: boolean;
}

@Component({
  selector: 'app-mobile-focus-deck',
  standalone: true,
  imports: [RouterLink, ExerciseItemViewComponent, LessonInlineTheoryComponent],
  templateUrl: './mobile-focus-deck.component.html',
  styleUrl: './mobile-focus-deck.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MobileFocusDeckComponent {
  readonly language = inject(LanguageService);

  readonly dashboardUrl = input.required<string>();
  readonly lesson = input.required<Lesson>();
  readonly activity = input.required<Activity>();
  readonly activityIndex = input.required<number>();
  readonly instructionTranslation = input<string | null>(null);
  readonly hasTextInputs = input<boolean>(false);
  readonly hasTheory = input<boolean>(false);
  readonly theoryOpen = input<boolean>(false);
  readonly dictionaryMode = input<boolean>(false);
  readonly activeTheoryBlock = input<ResolvedActivityTheory | null>(null);
  readonly completedActivityIds = input.required<Set<string>>();
  readonly sharedImages = input<WorkbookImage[]>([]);
  readonly activeItem = input<AdaptedItem | undefined>(undefined);
  readonly activeItemOriginalIndex = input<number>(0);
  readonly activeItemImage = input<WorkbookImage | undefined>(undefined);
  readonly queuePosition = input<number>(0);
  readonly queueLength = input<number>(0);
  readonly isRetryRound = input<boolean>(false);
  readonly answers = input.required<Record<string, string>>();
  readonly activeAnswer = input<string>('');
  readonly canCheckCurrent = input<boolean>(false);
  readonly itemChecked = input<boolean>(false);
  readonly itemCorrect = input<boolean>(false);
  readonly accentHint = input<string | null>(null);
  readonly expectedAnswer = input<string>('');
  readonly hintShown = input<boolean>(false);
  readonly canAssistNextLetter = input<boolean>(false);
  readonly showSummary = input<boolean>(false);
  readonly summaryItems = input<FocusSummaryItem[]>([]);
  readonly correctCount = input<number>(0);
  readonly totalActivityItems = input<number>(0);
  readonly isLastActivity = input<boolean>(false);
  readonly syncError = input<string | null>(null);

  readonly selectActivity = output<number>();
  readonly toggleTheory = output<void>();
  readonly toggleDictionary = output<void>();
  readonly switchToList = output<void>();
  readonly answerChange = output<string>();
  readonly optionSelect = output<string>();
  readonly letterClozeGapChange = output<{ gapIndex: number; value: string }>();
  readonly enterPressed = output<Event>();
  readonly wordOrderModeChange = output<'chips' | 'type'>();
  readonly toggleHint = output<void>();
  readonly assistNextLetter = output<void>();
  readonly openLightbox = output<WorkbookImage>();
  readonly checkItem = output<void>();
  readonly advance = output<void>();
  readonly retryWrong = output<void>();
  readonly retryAll = output<void>();
  readonly nextActivity = output<void>();

  readonly contextExpanded = signal(false);
  readonly inlineTheoryOpen = signal(false);
  readonly focusCardRef = viewChild<ElementRef<HTMLElement>>('focusCard');

  readonly progressPct = computed(() => {
    if (this.showSummary()) return 100;
    const len = this.queueLength();
    if (len <= 0) return 0;
    return Math.round(((this.queuePosition() + (this.itemChecked() ? 1 : 0)) / len) * 100);
  });

  readonly stepLabel = computed(() => {
    if (this.showSummary()) return `${this.totalActivityItems()} / ${this.totalActivityItems()}`;
    const len = this.queueLength();
    return len > 0 ? `${Math.min(this.queuePosition() + 1, len)} / ${len}` : '0 / 0';
  });

  readonly isLastInQueue = computed(() => this.queuePosition() >= this.queueLength() - 1);

  constructor() {
    effect(() => {
      this.activity().id;
      this.contextExpanded.set(false);
      this.inlineTheoryOpen.set(false);
    }, { allowSignalWrites: true });
  }

  focusCardElement(): HTMLElement | null {
    return this.focusCardRef()?.nativeElement ?? null;
  }

  toggleContext(): void {
    this.contextExpanded.update((open) => !open);
  }

  toggleInlineTheory(): void {
    this.inlineTheoryOpen.update((open) => !open);
  }

  onPickActivity(index: number): void {
    this.contextExpanded.set(false);
    this.selectActivity.emit(index);
  }

  isActivityComplete(activityId: string): boolean {
    return this.completedActivityIds().has(activityId);
  }
}
