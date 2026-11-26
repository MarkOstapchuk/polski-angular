import { ChangeDetectionStrategy, Component, ElementRef, HostListener, computed, inject, signal, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { normalizeAnswer } from '../../data/activity-adapter';
import {
  buildTrainerSet,
  GRAMMAR_TRAINER_QUESTIONS,
  type TrainerCategoryId,
  type TrainerInputMode,
  type TrainerLevel,
  type TrainerQuestion,
} from '../../data/grammar-trainer-data';
import { LanguageSwitcherComponent } from '../../i18n/language-switcher.component';
import { LanguageService } from '../../i18n/language.service';
import { AnalyticsService } from '../../services/analytics.service';
import { MistakesService } from '../../services/mistakes.service';
import { SoundService } from '../../services/sound.service';
import { AnswerDiffComponent } from '../../shared/answer-diff/answer-diff.component';
import { IconComponent } from '../../shared/icon/icon.component';

type TrainerCategoryOption = TrainerCategoryId | 'mix';
type TrainerStage = 'setup' | 'session' | 'done';

const POLISH_DIACRITICS = ['ą', 'ć', 'ę', 'ł', 'ń', 'ó', 'ś', 'ź', 'ż'] as const;

@Component({
  selector: 'app-grammar-trainer',
  standalone: true,
  imports: [FormsModule, RouterLink, LanguageSwitcherComponent, AnswerDiffComponent, IconComponent],
  templateUrl: './grammar-trainer.component.html',
  styleUrl: './grammar-trainer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GrammarTrainerComponent {
  readonly language = inject(LanguageService);
  private readonly analytics = inject(AnalyticsService);
  private readonly mistakes = inject(MistakesService);
  private readonly sound = inject(SoundService);

  readonly diacritics = POLISH_DIACRITICS;
  private readonly typedInputRef = viewChild<ElementRef<HTMLInputElement>>('typedInputEl');

  readonly totalBankCount = GRAMMAR_TRAINER_QUESTIONS.length;
  readonly categoryCounts = {
    mix: GRAMMAR_TRAINER_QUESTIONS.length,
    cases: GRAMMAR_TRAINER_QUESTIONS.filter((q) => q.category === 'cases').length,
    verbs: GRAMMAR_TRAINER_QUESTIONS.filter((q) => q.category === 'verbs').length,
    numbers: GRAMMAR_TRAINER_QUESTIONS.filter((q) => q.category === 'numbers').length,
  };

  readonly selectedCategory = signal<TrainerCategoryOption>('mix');
  readonly selectedLevel = signal<TrainerLevel | 'all'>('all');
  readonly selectedInputMode = signal<TrainerInputMode>('mixed');

  readonly stage = signal<TrainerStage>('setup');
  readonly queue = signal<TrainerQuestion[]>([]);
  readonly index = signal(0);
  readonly userAnswer = signal('');
  readonly checked = signal(false);
  readonly lastCorrect = signal(false);
  readonly accentHint = signal<string | null>(null);
  readonly correctCount = signal(0);

  readonly current = computed(() => this.queue()[this.index()] ?? null);
  readonly progressPct = computed(() => {
    const total = this.queue().length;
    if (!total) return 0;
    return Math.round(((this.index() + (this.checked() ? 1 : 0)) / total) * 100);
  });
  readonly accuracyPct = computed(() => {
    const total = this.queue().length;
    return total ? Math.round((this.correctCount() / total) * 100) : 0;
  });

  @HostListener('window:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    if (this.stage() !== 'session') return;
    const item = this.current();
    if (!item) return;

    if (item.mode === 'choice' && !this.checked() && item.options?.length) {
      const idx = Number(event.key) - 1;
      if (idx >= 0 && idx < item.options.length) {
        event.preventDefault();
        this.selectOption(item.options[idx]);
        return;
      }
    }

    if (event.key === 'Enter' && this.checked()) {
      event.preventDefault();
      this.next();
    }
  }

  startSession(): void {
    const set = buildTrainerSet(
      this.selectedCategory(),
      this.selectedLevel(),
      this.selectedInputMode(),
      10,
    );
    this.queue.set(set);
    this.index.set(0);
    this.userAnswer.set('');
    this.checked.set(false);
    this.lastCorrect.set(false);
    this.accentHint.set(null);
    this.correctCount.set(0);
    this.stage.set('session');
    this.analytics.track('trainer_session_started', {
      metadata: {
        category: this.selectedCategory(),
        level: this.selectedLevel(),
        input_mode: this.selectedInputMode(),
        count: set.length,
      },
    });
  }

  backToSetup(): void {
    this.stage.set('setup');
  }

  selectOption(option: string): void {
    if (this.checked()) return;
    this.userAnswer.set(option);
    this.checkCurrent();
  }

  insertDiacritic(char: string): void {
    if (this.checked()) return;
    const el = this.typedInputRef()?.nativeElement;
    if (!el) {
      this.userAnswer.update((v) => v + char);
      return;
    }
    const start = el.selectionStart ?? this.userAnswer().length;
    const end = el.selectionEnd ?? start;
    const val = this.userAnswer();
    this.userAnswer.set(val.slice(0, start) + char + val.slice(end));
    queueMicrotask(() => {
      el.focus();
      el.setSelectionRange(start + char.length, start + char.length);
    });
  }

  checkCurrent(): void {
    const item = this.current();
    if (!item || this.checked() || !this.userAnswer().trim()) return;
    const raw = this.userAnswer().trim();
    const norm = normalizeAnswer(raw);
    const ok = item.accepted.some((acc) => normalizeAnswer(acc) === norm);

    this.checked.set(true);
    this.lastCorrect.set(ok);

    if (ok) {
      const exact = item.accepted.some((acc) => acc.trim().toLocaleLowerCase('pl-PL') === raw.toLocaleLowerCase('pl-PL'));
      this.accentHint.set(exact ? null : item.accepted.find((a) => /[ąćęłńóśźż]/i.test(a)) ?? null);
      this.correctCount.update((n) => n + 1);
      this.sound.playCorrect();
    } else {
      this.accentHint.set(null);
      this.sound.playWrong();
      this.mistakes.recordMistake({
        key: `trainer:${item.id}`,
        lessonId: 1,
        lessonTitle: `${this.language.t('trainer.title')} · ${item.subtag}`,
        activityId: `trainer-${item.category}`,
        activityTitle: `${item.subtag} (${item.level})`,
        prompt: item.prompt,
        accepted: item.accepted,
        options: item.mode === 'choice' ? item.options : undefined,
        userAnswer: raw,
      });
    }
  }

  next(): void {
    if (this.index() + 1 < this.queue().length) {
      this.index.update((i) => i + 1);
      this.userAnswer.set('');
      this.checked.set(false);
      this.lastCorrect.set(false);
      this.accentHint.set(null);
    } else {
      this.stage.set('done');
      this.sound.playComplete();
      this.analytics.track('trainer_session_completed', {
        metadata: {
          category: this.selectedCategory(),
          level: this.selectedLevel(),
          total: this.queue().length,
          correct: this.correctCount(),
          accuracy: this.accuracyPct(),
        },
      });
    }
  }
}
