import { ChangeDetectionStrategy, Component, computed, ElementRef, inject, input, output, viewChildren } from '@angular/core';
import { LanguageService } from '../../../../i18n/language.service';

@Component({
  selector: 'app-multi-gap-exercise',
  standalone: true,
  templateUrl: './multi-gap-exercise.component.html',
  styleUrl: './multi-gap-exercise.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MultiGapExerciseComponent {
  readonly language = inject(LanguageService);

  readonly baseId = input.required<string>();
  readonly prompt = input.required<string>();
  readonly gapCount = input.required<number>();
  readonly inlineParts = input<string[]>([]);
  readonly gapLabels = input<string[]>([]);
  readonly value = input<string>('');
  readonly disabled = input<boolean>(false);
  readonly enterKeyHint = input<'done' | 'next'>('next');
  readonly focusStyle = input<boolean>(false);

  readonly valueChange = output<string>();
  readonly enterPressed = output<Event>();

  private readonly gapInputs = viewChildren<ElementRef<HTMLInputElement>>('gapInput');

  readonly parts = computed(() => {
    const count = this.gapCount();
    const raw = this.value();
    const split = raw ? raw.split('; ') : [];
    return Array.from({ length: count }, (_, idx) => split[idx] ?? '');
  });

  readonly isInline = computed(() => this.inlineParts().length === this.gapCount() + 1);
  readonly gapIndices = computed(() => Array.from({ length: this.gapCount() }, (_, i) => i));

  gapLabel(index: number): string {
    return this.gapLabels()[index] || `${this.language.t('lesson.gapLabel')} ${index + 1}`;
  }

  gapPlaceholder(index: number): string {
    return this.gapLabels()[index]
      ? `${this.language.t('lesson.gapLabel')} ${this.gapLabels()[index]}`
      : `${this.language.t('lesson.gapLabel')} ${index + 1}`;
  }

  onGapInput(index: number, event: Event): void {
    const els = this.gapInputs();
    const current = this.parts();
    const next = Array.from({ length: this.gapCount() }, (_, idx) => {
      if (idx === index) return (event.target as HTMLInputElement).value;
      return els[idx]?.nativeElement.value ?? current[idx] ?? '';
    });
    const joined = next.every((p) => p.trim() === '') ? '' : next.join('; ');
    this.valueChange.emit(joined);
  }
}
