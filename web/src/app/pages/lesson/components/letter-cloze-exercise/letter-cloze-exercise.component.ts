import { ChangeDetectionStrategy, Component, computed, ElementRef, inject, input, output, signal, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivityItem, PromptGapMeta } from '../../../../data/lesson-types';
import { LanguageService } from '../../../../i18n/language.service';

@Component({
  selector: 'app-letter-cloze-exercise',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './letter-cloze-exercise.component.html',
  styleUrl: './letter-cloze-exercise.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LetterClozeExerciseComponent {
  readonly language = inject(LanguageService);

  readonly activityId = input.required<string>();
  readonly item = input.required<ActivityItem>();
  readonly answers = input.required<Record<string, string>>();
  readonly disabled = input<boolean>(false);
  readonly itemIndex = input.required<number>();
  readonly totalItems = input.required<number>();
  readonly promptGap = input<PromptGapMeta | undefined>(undefined);
  readonly placeholder = input<string>('');
  readonly cardElement = input<HTMLElement | null>(null);

  readonly gapChange = output<{ gapIndex: number; value: string }>();
  readonly valueChange = output<string>();
  readonly enterPressed = output<Event>();

  private readonly singleInputEl = viewChild<ElementRef<HTMLInputElement>>('singleInput');

  readonly tilesOpen = signal(false);
  private lastActiveGap: HTMLInputElement | null = null;

  readonly letterTiles = computed(() => {
    const pg = this.promptGap();
    if (pg) return pg.letterAssist;
    const cloze = this.item().letterCloze;
    if (!cloze) return [];
    const seen = new Set<string>();
    const out: string[] = [];
    for (const ch of cloze.gaps.join('')) {
      if (!seen.has(ch)) {
        seen.add(ch);
        out.push(ch);
      }
    }
    return out;
  });

  gapValue(gapIndex: number): string {
    return this.answers()[`${this.activityId()}:${this.item().id}:gap:${gapIndex}`] ?? '';
  }

  singleValue(): string {
    return this.answers()[`${this.activityId()}:${this.item().id}`] ?? '';
  }

  onGapFocus(event: FocusEvent): void {
    const el = event.target;
    if (el instanceof HTMLInputElement) this.lastActiveGap = el;
  }

  onGapInput(gapIndex: number, event: Event): void {
    const cloze = this.item().letterCloze;
    if (!cloze) return;
    const input = event.target as HTMLInputElement;
    const maxLen = cloze.gaps[gapIndex].length;
    const value = input.value.slice(0, maxLen);
    if (input.value !== value) input.value = value;
    this.gapChange.emit({ gapIndex, value });

    if (value.length === maxLen) {
      const next = this.adjacentClozeGap(input, 1);
      next?.focus();
    }
  }

  onGapKeydown(event: KeyboardEvent): void {
    const input = event.target as HTMLInputElement;
    if (event.key === 'Backspace' && input.value === '') {
      const prev = this.adjacentClozeGap(input, -1);
      if (prev) {
        event.preventDefault();
        prev.focus();
      }
      return;
    }

    if (event.key === 'ArrowLeft' && input.selectionStart === 0 && input.selectionEnd === 0) {
      const prev = this.adjacentClozeGap(input, -1);
      if (prev) {
        event.preventDefault();
        prev.focus();
      }
      return;
    }

    if (
      event.key === 'ArrowRight' &&
      input.selectionStart === input.value.length &&
      input.selectionEnd === input.value.length
    ) {
      const next = this.adjacentClozeGap(input, 1);
      if (next) {
        event.preventDefault();
        next.focus();
      }
    }
  }

  enterKeyHintForGap(gapIndex: number, gapCount: number): 'done' | 'next' {
    if (gapIndex < gapCount - 1) return 'next';
    return this.itemIndex() >= this.totalItems() - 1 ? 'done' : 'next';
  }

  toggleTiles(): void {
    this.tilesOpen.update((v) => !v);
  }

  insertTile(ch: string): void {
    if (this.disabled()) return;
    if (this.promptGap()) {
      const el = this.singleInputEl()?.nativeElement;
      if (!el) return;
      const start = el.selectionStart ?? el.value.length;
      const end = el.selectionEnd ?? el.value.length;
      const next = el.value.slice(0, start) + ch + el.value.slice(end);
      el.value = next;
      el.focus({ preventScroll: true });
      el.setSelectionRange(start + ch.length, start + ch.length);
      el.dispatchEvent(new Event('input', { bubbles: true }));
      return;
    }

    const card = this.cardElement() ?? document;
    const gaps = Array.from(card.querySelectorAll<HTMLInputElement>('.letter-cloze-gap:not(:disabled)'));
    const target =
      (this.lastActiveGap && this.lastActiveGap.isConnected && !this.lastActiveGap.disabled ? this.lastActiveGap : null) ??
      gaps.find((g) => !g.value) ??
      gaps[0];
    if (!target) return;

    target.value = ch.slice(0, target.maxLength > 0 ? target.maxLength : 1);
    target.focus({ preventScroll: true });
    target.dispatchEvent(new Event('input', { bubbles: true }));
  }

  private adjacentClozeGap(current: HTMLInputElement, delta: -1 | 1): HTMLInputElement | null {
    const scope = this.cardElement() ?? current.closest('.exercise-card') ?? document;
    const gaps = Array.from(scope.querySelectorAll<HTMLInputElement>('.letter-cloze-gap:not(:disabled)'));
    const idx = gaps.indexOf(current);
    return idx >= 0 ? (gaps[idx + delta] ?? null) : null;
  }
}
