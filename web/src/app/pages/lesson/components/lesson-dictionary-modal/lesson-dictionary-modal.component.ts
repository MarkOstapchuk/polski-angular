import { ChangeDetectionStrategy, Component, effect, ElementRef, inject, model, output, signal, viewChild } from '@angular/core';
import { LanguageService } from '../../../../i18n/language.service';
import { supabase } from '../../../../services/supabase.client';

@Component({
  selector: 'app-lesson-dictionary-modal',
  standalone: true,
  templateUrl: './lesson-dictionary-modal.component.html',
  styleUrl: './lesson-dictionary-modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LessonDictionaryModalComponent {
  readonly language = inject(LanguageService);
  readonly word = model<string | null>(null);
  readonly closed = output<void>();

  private readonly closeBtn = viewChild<ElementRef<HTMLButtonElement>>('closeBtn');

  readonly translations = signal<string[]>([]);
  readonly loading = signal(false);
  readonly error = signal<string | null>(null);
  private requestCounter = 0;

  constructor() {
    effect(() => {
      const currentWord = this.word();
      if (!currentWord) return;
      queueMicrotask(() => this.closeBtn()?.nativeElement.focus({ preventScroll: true }));
      void this.fetchTranslation(currentWord);
    });
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
      this.translations.set(data?.translations ?? []);
    } catch {
      if (request === this.requestCounter) this.error.set(this.language.t('lesson.dictionaryError'));
    } finally {
      if (request === this.requestCounter) this.loading.set(false);
    }
  }
}
