import { ChangeDetectionStrategy, Component, HostListener, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageSwitcherComponent } from '../../i18n/language-switcher.component';
import { LanguageService } from '../../i18n/language.service';
import { AnalyticsService } from '../../services/analytics.service';
import { SavedWord, VocabularyService } from '../../services/vocabulary.service';

@Component({
  selector: 'app-vocabulary',
  standalone: true,
  imports: [RouterLink, LanguageSwitcherComponent],
  templateUrl: './vocabulary.component.html',
  styleUrl: './vocabulary.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VocabularyComponent {
  readonly vocabulary = inject(VocabularyService);
  readonly language = inject(LanguageService);
  private readonly analytics = inject(AnalyticsService);

  readonly mode = signal<'cards' | 'list'>('cards');
  readonly deck = signal<SavedWord[]>(this.buildDeck());
  readonly cardIndex = signal(0);
  readonly flipped = signal(false);
  readonly knownCount = signal(0);
  readonly sessionDone = signal(false);

  readonly currentCard = computed(() => this.deck()[this.cardIndex()] ?? null);

  @HostListener('window:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    if (this.mode() !== 'cards' || this.sessionDone() || !this.currentCard()) return;
    if (event.code === 'Space') {
      event.preventDefault();
      this.flipped.update((v) => !v);
    } else if (this.flipped() && event.key === '1') {
      this.answerCard(false);
    } else if (this.flipped() && event.key === '2') {
      this.answerCard(true);
    }
  }

  flipCard(): void {
    this.flipped.update((v) => !v);
  }

  answerCard(known: boolean): void {
    const card = this.currentCard();
    if (!card) return;
    this.vocabulary.markReviewed(card.id, known);
    if (known) this.knownCount.update((n) => n + 1);

    if (this.cardIndex() + 1 < this.deck().length) {
      this.cardIndex.update((i) => i + 1);
      this.flipped.set(false);
    } else {
      this.sessionDone.set(true);
      this.analytics.track('vocabulary_session_completed', {
        metadata: { total: this.deck().length, known: this.knownCount() },
      });
    }
  }

  restartDeck(): void {
    this.deck.set(this.buildDeck());
    this.cardIndex.set(0);
    this.flipped.set(false);
    this.knownCount.set(0);
    this.sessionDone.set(false);
  }

  removeWord(id: string): void {
    this.vocabulary.removeWord(id);
    this.deck.update((items) => items.filter((w) => w.id !== id));
    if (this.cardIndex() >= this.deck().length && this.deck().length > 0) {
      this.cardIndex.set(this.deck().length - 1);
    }
  }

  private buildDeck(): SavedWord[] {
    return [...this.vocabulary.words()]
      .sort((a, b) => a.masteredCount - b.masteredCount)
      .slice(0, 12);
  }
}
