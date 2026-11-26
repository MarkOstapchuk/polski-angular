import { ChangeDetectionStrategy, Component, computed, effect, ElementRef, inject, input, model, output, signal, viewChild } from '@angular/core';
import { LanguageService } from '../../../../i18n/language.service';
import { AnalyticsService } from '../../../../services/analytics.service';
import { VocabularyService } from '../../../../services/vocabulary.service';
import { supabase } from '../../../../services/supabase.client';
import { IconComponent } from '../../../../shared/icon/icon.component';

@Component({
  selector: 'app-lesson-dictionary-modal',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './lesson-dictionary-modal.component.html',
  styleUrl: './lesson-dictionary-modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LessonDictionaryModalComponent {
  private readonly analytics = inject(AnalyticsService);
  private readonly vocabulary = inject(VocabularyService);
  readonly language = inject(LanguageService);
  readonly word = model<string | null>(null);
  readonly lessonId = input<number | undefined>(undefined);
  readonly closed = output<void>();

  private readonly closeBtn = viewChild<ElementRef<HTMLButtonElement>>('closeBtn');

  readonly translations = signal<string[]>([]);
  readonly loading = signal(false);
  readonly error = signal<string | null>(null);
  readonly isSaved = computed(() => {
    const current = this.word();
    return !!current && this.vocabulary.isSaved(current);
  });
  private requestCounter = 0;

  constructor() {
    effect(() => {
      const currentWord = this.word();
      if (!currentWord) return;
      queueMicrotask(() => this.closeBtn()?.nativeElement.focus({ preventScroll: true }));
      void this.fetchTranslation(currentWord);
    });
  }

  toggleSave(): void {
    const currentWord = this.word();
    if (!currentWord) return;
    if (this.isSaved()) {
      this.vocabulary.removeWord(currentWord);
    } else if (this.translations().length) {
      this.vocabulary.saveWord(currentWord, this.translations(), this.language.locale(), this.lessonId());
      this.analytics.track('vocabulary_word_saved', {
        lessonId: this.lessonId(),
        metadata: { word_length: currentWord.length, locale: this.language.locale() },
      });
    }
  }

  close(): void {
    this.requestCounter++;
    this.word.set(null);
    this.translations.set([]);
    this.error.set(null);
    this.loading.set(false);
    this.closed.emit();
  }

  private async fetchTranslation(word: string): Promise<void> {
    const request = ++this.requestCounter;
    this.translations.set([]);
    this.error.set(null);
    this.loading.set(true);
    try {
      const { data, error } = await supabase.functions.invoke<{ translations: string[] }>('pons-dictionary', { body: { word, lang: this.language.locale() } });
      if (request !== this.requestCounter) return;
      if (error) throw error;
      const translations = data?.translations ?? [];
      this.translations.set(translations);
      this.analytics.track('dictionary_word_looked_up', {
        metadata: {
          word_length: word.length,
          locale: this.language.locale(),
          found: translations.length > 0,
          error: false,
          translations_count: translations.length,
        },
      });
    } catch {
      if (request === this.requestCounter) {
        this.error.set(this.language.t('lesson.dictionaryError'));
        this.analytics.track('dictionary_word_looked_up', {
          metadata: {
            word_length: word.length,
            locale: this.language.locale(),
            found: false,
            error: true,
            translations_count: 0,
          },
        });
      }
    } finally {
      if (request === this.requestCounter) this.loading.set(false);
    }
  }
}
