import { ChangeDetectionStrategy, Component, ElementRef, HostListener, computed, inject, signal, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { normalizeAnswer } from '../../data/activity-adapter';
import { LanguageSwitcherComponent } from '../../i18n/language-switcher.component';
import { LanguageService, type Language } from '../../i18n/language.service';
import { AnalyticsService } from '../../services/analytics.service';
import { SoundService } from '../../services/sound.service';
import { isWordDue, SavedWord, VocabularyService } from '../../services/vocabulary.service';
import { AnswerDiffComponent } from '../../shared/answer-diff/answer-diff.component';
import { IconComponent } from '../../shared/icon/icon.component';

type VocabMode = 'cards' | 'quiz' | 'type' | 'list';

const FALLBACK_DISTRACTORS: Record<Language, string[]> = {
  ru: ['дом', 'время', 'дорога', 'книга', 'окно', 'утро', 'работа', 'друг'],
  pl: ['dom', 'czas', 'droga', 'książka', 'okno', 'rano', 'praca', 'przyjaciel'],
  en: ['house', 'time', 'road', 'book', 'window', 'morning', 'work', 'friend'],
};

const POLISH_DIACRITICS = ['ą', 'ć', 'ę', 'ł', 'ń', 'ó', 'ś', 'ź', 'ż'] as const;

function stableHash(input: string): number {
  let h = 2166136261;
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

@Component({
  selector: 'app-vocabulary',
  standalone: true,
  imports: [FormsModule, RouterLink, LanguageSwitcherComponent, AnswerDiffComponent, IconComponent],
  templateUrl: './vocabulary.component.html',
  styleUrl: './vocabulary.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VocabularyComponent {
  readonly vocabulary = inject(VocabularyService);
  readonly language = inject(LanguageService);
  private readonly analytics = inject(AnalyticsService);
  private readonly sound = inject(SoundService);

  readonly diacritics = POLISH_DIACRITICS;
  private readonly typeInputRef = viewChild<ElementRef<HTMLInputElement>>('typeInputEl');

  readonly mode = signal<VocabMode>('cards');
  readonly forceAll = signal(false);
  readonly deck = signal<SavedWord[]>(this.buildDeck(false));
  readonly cardIndex = signal(0);
  readonly flipped = signal(false);
  readonly knownCount = signal(0);
  readonly sessionDone = signal(false);

  // Quiz state
  readonly quizSelected = signal<string | null>(null);
  readonly quizCorrect = signal(false);

  // Type state
  readonly typedAnswer = signal('');
  readonly typedChecked = signal(false);
  readonly typedCorrect = signal(false);
  readonly typedAccentHint = signal<string | null>(null);

  readonly currentCard = computed(() => this.deck()[this.cardIndex()] ?? null);

  readonly nextIntervalDays = computed(() => {
    const card = this.currentCard();
    return card ? this.vocabulary.nextIntervalDays(card) : 1;
  });

  readonly quizOptions = computed<string[]>(() => {
    const card = this.currentCard();
    if (!card) return [];
    const correct = card.translations[0] ?? '';
    const seen = new Set<string>([correct.toLocaleLowerCase()]);
    const pool: string[] = [];

    for (const w of this.vocabulary.words()) {
      if (w.id === card.id) continue;
      const tr = w.translations[0]?.trim();
      if (!tr || seen.has(tr.toLocaleLowerCase())) continue;
      seen.add(tr.toLocaleLowerCase());
      pool.push(tr);
    }

    pool.sort((a, b) => stableHash(`${card.id}:${a}`) - stableHash(`${card.id}:${b}`));
    const fallbacks = FALLBACK_DISTRACTORS[this.language.locale()];
    for (const fb of fallbacks) {
      if (pool.length >= 3) break;
      if (!seen.has(fb.toLocaleLowerCase())) {
        seen.add(fb.toLocaleLowerCase());
        pool.push(fb);
      }
    }

    const opts = [correct, ...pool.slice(0, 3)];
    return opts.sort((a, b) => stableHash(`pos:${card.id}:${a}`) - stableHash(`pos:${card.id}:${b}`));
  });

  @HostListener('window:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    const activeMode = this.mode();
    const card = this.currentCard();
    if (activeMode === 'list' || this.sessionDone() || !card) return;

    if (activeMode === 'cards') {
      if (event.code === 'Space') {
        event.preventDefault();
        this.flipped.update((v) => !v);
      } else if (this.flipped() && event.key === '1') {
        this.answerCard(false);
      } else if (this.flipped() && event.key === '2') {
        this.answerCard(true);
      }
    } else if (activeMode === 'quiz' && !this.quizSelected()) {
      const idx = Number(event.key) - 1;
      const opts = this.quizOptions();
      if (idx >= 0 && idx < opts.length) {
        this.selectQuizOption(opts[idx]);
      }
    }
  }

  selectMode(next: VocabMode): void {
    this.mode.set(next);
    if (next !== 'list') {
      this.restartDeck(this.forceAll());
    }
  }

  flipCard(): void {
    this.flipped.update((v) => !v);
  }

  answerCard(known: boolean): void {
    const card = this.currentCard();
    if (!card) return;
    this.vocabulary.markReviewed(card.id, known);
    if (known) {
      this.sound.playCorrect();
      this.knownCount.update((n) => n + 1);
    } else {
      this.sound.playWrong();
    }
    this.advanceOrFinish();
  }

  selectQuizOption(option: string): void {
    const card = this.currentCard();
    if (!card || this.quizSelected()) return;
    const correct = card.translations[0] ?? '';
    const ok = option === correct;
    this.quizSelected.set(option);
    this.quizCorrect.set(ok);
    this.vocabulary.markReviewed(card.id, ok);
    if (ok) {
      this.sound.playCorrect();
      this.knownCount.update((n) => n + 1);
    } else {
      this.sound.playWrong();
    }
  }

  insertDiacritic(char: string): void {
    if (this.typedChecked()) return;
    const el = this.typeInputRef()?.nativeElement;
    if (!el) {
      this.typedAnswer.update((v) => v + char);
      return;
    }
    const start = el.selectionStart ?? this.typedAnswer().length;
    const end = el.selectionEnd ?? start;
    const val = this.typedAnswer();
    const nextVal = val.slice(0, start) + char + val.slice(end);
    this.typedAnswer.set(nextVal);
    queueMicrotask(() => {
      el.focus();
      el.setSelectionRange(start + char.length, start + char.length);
    });
  }

  checkTyped(): void {
    const card = this.currentCard();
    if (!card || this.typedChecked() || !this.typedAnswer().trim()) return;
    const expected = card.word.trim();
    const ok = normalizeAnswer(this.typedAnswer()) === normalizeAnswer(expected);
    this.typedChecked.set(true);
    this.typedCorrect.set(ok);

    if (ok) {
      const exactMatch = this.typedAnswer().trim().toLocaleLowerCase('pl-PL') === expected.toLocaleLowerCase('pl-PL');
      this.typedAccentHint.set(exactMatch ? null : expected);
      this.sound.playCorrect();
      this.knownCount.update((n) => n + 1);
    } else {
      this.typedAccentHint.set(null);
      this.sound.playWrong();
    }
    this.vocabulary.markReviewed(card.id, ok);
  }

  advanceOrFinish(): void {
    if (this.cardIndex() + 1 < this.deck().length) {
      this.cardIndex.update((i) => i + 1);
      this.resetItemState();
    } else {
      this.sessionDone.set(true);
      this.sound.playComplete();
      this.analytics.track('vocabulary_session_completed', {
        metadata: {
          mode: this.mode(),
          total: this.deck().length,
          known: this.knownCount(),
        },
      });
    }
  }

  restartDeck(practiceAll = false): void {
    this.forceAll.set(practiceAll);
    this.deck.set(this.buildDeck(practiceAll));
    this.cardIndex.set(0);
    this.knownCount.set(0);
    this.sessionDone.set(false);
    this.resetItemState();
  }

  removeWord(id: string): void {
    this.vocabulary.removeWord(id);
    this.deck.update((items) => items.filter((w) => w.id !== id));
    if (this.cardIndex() >= this.deck().length && this.deck().length > 0) {
      this.cardIndex.set(this.deck().length - 1);
    }
  }

  isDue(word: SavedWord): boolean {
    return isWordDue(word);
  }

  daysUntilReview(word: SavedWord): number {
    if (!word.nextReviewAt) return word.intervalDays ?? 1;
    const diffMs = new Date(word.nextReviewAt).getTime() - Date.now();
    return Math.max(1, Math.ceil(diffMs / 86_400_000));
  }

  private resetItemState(): void {
    this.flipped.set(false);
    this.quizSelected.set(null);
    this.quizCorrect.set(false);
    this.typedAnswer.set('');
    this.typedChecked.set(false);
    this.typedCorrect.set(false);
    this.typedAccentHint.set(null);
  }

  private buildDeck(includeAll: boolean): SavedWord[] {
    const due = this.vocabulary.dueWords();
    const source = includeAll ? this.vocabulary.words() : due;
    return [...source]
      .sort((a, b) => {
        const stepA = a.srsStep ?? a.masteredCount;
        const stepB = b.srsStep ?? b.masteredCount;
        if (stepA !== stepB) return stepA - stepB;
        return (a.nextReviewAt ?? a.addedAt).localeCompare(b.nextReviewAt ?? b.addedAt);
      })
      .slice(0, 12);
  }
}
