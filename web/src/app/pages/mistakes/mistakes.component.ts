import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { normalizeAnswer } from '../../data/activity-adapter';
import { LanguageSwitcherComponent } from '../../i18n/language-switcher.component';
import { LanguageService } from '../../i18n/language.service';
import { AnalyticsService } from '../../services/analytics.service';
import { MistakesService, SavedMistake } from '../../services/mistakes.service';

@Component({
  selector: 'app-mistakes',
  standalone: true,
  imports: [FormsModule, RouterLink, LanguageSwitcherComponent],
  templateUrl: './mistakes.component.html',
  styleUrl: './mistakes.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MistakesComponent {
  readonly mistakesService = inject(MistakesService);
  readonly language = inject(LanguageService);
  private readonly analytics = inject(AnalyticsService);

  readonly queue = signal<SavedMistake[]>(this.mistakesService.mistakes().slice(0, 10));
  readonly index = signal(0);
  readonly userAnswer = signal('');
  readonly checked = signal(false);
  readonly lastCorrect = signal(false);
  readonly fixedCount = signal(0);
  readonly done = signal(false);

  readonly current = computed(() => this.queue()[this.index()] ?? null);

  selectOption(option: string): void {
    if (this.checked()) return;
    this.userAnswer.set(option);
    this.checkCurrent();
  }

  checkCurrent(): void {
    const item = this.current();
    if (!item || this.checked() || !this.userAnswer().trim()) return;
    const normalized = normalizeAnswer(this.userAnswer());
    const ok = item.accepted.some((acc) => normalizeAnswer(acc) === normalized);
    this.checked.set(true);
    this.lastCorrect.set(ok);

    if (ok) {
      this.mistakesService.resolveMistake(item.key);
      this.fixedCount.update((n) => n + 1);
    }
  }

  next(): void {
    if (this.index() + 1 < this.queue().length) {
      this.index.update((i) => i + 1);
      this.userAnswer.set('');
      this.checked.set(false);
      this.lastCorrect.set(false);
    } else {
      this.done.set(true);
      this.analytics.track('mistakes_session_completed', {
        metadata: { total: this.queue().length, fixed: this.fixedCount() },
      });
    }
  }

  restart(): void {
    this.queue.set(this.mistakesService.mistakes().slice(0, 10));
    this.index.set(0);
    this.userAnswer.set('');
    this.checked.set(false);
    this.lastCorrect.set(false);
    this.fixedCount.set(0);
    this.done.set(false);
  }
}
