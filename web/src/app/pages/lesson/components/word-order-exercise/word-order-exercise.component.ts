import { ChangeDetectionStrategy, Component, computed, effect, inject, input, output, signal } from '@angular/core';
import { normalizeAnswer } from '../../../../data/activity-adapter';
import { LanguageService } from '../../../../i18n/language.service';
import { TypedExerciseComponent } from '../typed-exercise/typed-exercise.component';

@Component({
  selector: 'app-word-order-exercise',
  standalone: true,
  imports: [TypedExerciseComponent],
  templateUrl: './word-order-exercise.component.html',
  styleUrl: './word-order-exercise.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WordOrderExerciseComponent {
  readonly language = inject(LanguageService);

  readonly inputId = input.required<string>();
  readonly prompt = input.required<string>();
  readonly tokens = input.required<string[]>();
  readonly isSentenceOrder = input<boolean>(false);
  readonly multiline = input<boolean>(false);
  readonly value = input<string>('');
  readonly disabled = input<boolean>(false);
  readonly dictionaryMode = input<boolean>(false);
  readonly placeholder = input.required<string>();
  readonly enterKeyHint = input<'done' | 'next'>('next');
  readonly focusStyle = input<boolean>(false);

  readonly valueChange = output<string>();
  readonly enterPressed = output<Event>();
  readonly modeChange = output<'chips' | 'type'>();

  readonly userToggledMode = signal<'chips' | 'type' | null>(null);
  readonly selectedIndices = signal<number[]>([]);

  readonly typeMode = computed(() => {
    const manual = this.userToggledMode();
    if (manual !== null) return manual === 'type';
    return this.isSentenceOrder();
  });

  readonly assembledTokens = computed(() => {
    const toks = this.tokens();
    return this.selectedIndices().map((idx) => ({ idx, text: toks[idx] ?? '' })).filter((t) => !!t.text);
  });

  constructor() {
    effect(() => {
      this.inputId();
      this.userToggledMode.set(null);
    }, { allowSignalWrites: true });

    effect(() => {
      const val = this.value().trim();
      const toks = this.tokens();
      if (!val) {
        this.selectedIndices.set([]);
        return;
      }
      const reconstructed = this.matchTokensFromValue(val, toks);
      if (reconstructed) {
        this.selectedIndices.set(reconstructed);
      } else {
        this.selectedIndices.set([]);
        if (this.userToggledMode() === null && !this.isSentenceOrder()) {
          this.userToggledMode.set('type');
          this.modeChange.emit('type');
        }
      }
    }, { allowSignalWrites: true });
  }

  isTokenUsed(index: number): boolean {
    return this.selectedIndices().includes(index);
  }

  addToken(index: number): void {
    if (this.disabled() || this.dictionaryMode() || this.isTokenUsed(index)) return;
    const next = [...this.selectedIndices(), index];
    this.selectedIndices.set(next);
    this.emitJoined(next);
  }

  removeTokenAt(pos: number): void {
    if (this.disabled() || this.dictionaryMode()) return;
    const next = this.selectedIndices().filter((_, idx) => idx !== pos);
    this.selectedIndices.set(next);
    this.emitJoined(next);
  }

  clearAll(): void {
    if (this.disabled()) return;
    this.selectedIndices.set([]);
    this.valueChange.emit('');
  }

  toggleMode(): void {
    const nextMode = this.typeMode() ? 'chips' : 'type';
    this.userToggledMode.set(nextMode);
    this.modeChange.emit(nextMode);
  }

  private emitJoined(indices: number[]): void {
    const toks = this.tokens();
    const joined = indices.map((i) => toks[i]).filter(Boolean).join(' ');
    this.valueChange.emit(joined);
  }

  private matchTokensFromValue(val: string, toks: string[]): number[] | null {
    // Check if value is a direct sequence of tokens joined by spaces
    const used = new Set<number>();
    let remaining = normalizeAnswer(val);
    const indices: number[] = [];

    while (remaining.length > 0) {
      let matchedIdx = -1;
      let matchedLen = 0;
      for (let i = 0; i < toks.length; i++) {
        if (used.has(i)) continue;
        const normTok = normalizeAnswer(toks[i]);
        if (!normTok) continue;
        if (remaining === normTok || remaining.startsWith(`${normTok} `)) {
          if (normTok.length > matchedLen) {
            matchedLen = normTok.length;
            matchedIdx = i;
          }
        }
      }
      if (matchedIdx < 0) return null;
      used.add(matchedIdx);
      indices.push(matchedIdx);
      remaining = remaining.slice(matchedLen).trim();
    }
    return indices;
  }
}
