import { ChangeDetectionStrategy, Component, computed, DestroyRef, inject, input, signal } from '@angular/core';
import { LanguageService } from '../../../../i18n/language.service';

const LOWER_CHARS = ['ą', 'ć', 'ę', 'ł', 'ń', 'ó', 'ś', 'ź', 'ż'] as const;
const UPPER_CHARS = ['Ą', 'Ć', 'Ę', 'Ł', 'Ń', 'Ó', 'Ś', 'Ź', 'Ż'] as const;

@Component({
  selector: 'app-diacritic-bar',
  standalone: true,
  templateUrl: './diacritic-bar.component.html',
  styleUrl: './diacritic-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DiacriticBarComponent {
  readonly language = inject(LanguageService);
  private readonly destroyRef = inject(DestroyRef);

  readonly targetInput = input<HTMLInputElement | HTMLTextAreaElement | null>(null);
  readonly container = input<HTMLElement | null>(null);

  readonly uppercase = signal(false);
  readonly keyboardInset = signal(0);
  readonly inputFocused = signal(false);

  readonly chars = computed(() => (this.uppercase() ? UPPER_CHARS : LOWER_CHARS));
  readonly isKeyboardDocked = computed(() => this.inputFocused() && this.keyboardInset() > 80);

  constructor() {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      const updateViewport = () => {
        const vv = window.visualViewport;
        if (!vv) {
          this.keyboardInset.set(0);
          return;
        }
        const inset = Math.max(0, window.innerHeight - vv.height - vv.offsetTop);
        this.keyboardInset.set(inset);
      };

      const onFocusIn = (event: FocusEvent) => {
        const target = event.target;
        this.inputFocused.set(target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement);
        updateViewport();
      };

      const onFocusOut = () => {
        queueMicrotask(() => {
          const active = document.activeElement;
          this.inputFocused.set(active instanceof HTMLInputElement || active instanceof HTMLTextAreaElement);
        });
      };

      window.visualViewport?.addEventListener('resize', updateViewport);
      window.visualViewport?.addEventListener('scroll', updateViewport);
      document.addEventListener('focusin', onFocusIn);
      document.addEventListener('focusout', onFocusOut);

      this.destroyRef.onDestroy(() => {
        window.visualViewport?.removeEventListener('resize', updateViewport);
        window.visualViewport?.removeEventListener('scroll', updateViewport);
        document.removeEventListener('focusin', onFocusIn);
        document.removeEventListener('focusout', onFocusOut);
      });
    }
  }

  toggleUppercase(): void {
    this.uppercase.update((v) => !v);
  }

  insertChar(char: string): void {
    const el = this.resolveTargetInput();
    if (!el) return;

    const start = el.selectionStart ?? el.value.length;
    const end = el.selectionEnd ?? el.value.length;
    let nextValue: string;

    if (el.maxLength > 0) {
      if (el.maxLength === 1 && start === end && el.value.length >= 1) {
        nextValue = char;
      } else {
        nextValue = (el.value.slice(0, start) + char + el.value.slice(end)).slice(0, el.maxLength);
      }
    } else {
      nextValue = el.value.slice(0, start) + char + el.value.slice(end);
    }

    el.value = nextValue;
    if (document.activeElement !== el) el.focus({ preventScroll: true });
    const caret = Math.min(start + char.length, nextValue.length);
    try {
      el.setSelectionRange(caret, caret);
    } catch {
      // Ignore selection range errors on unsupported input states.
    }
    el.dispatchEvent(new Event('input', { bubbles: true }));
  }

  private resolveTargetInput(): HTMLInputElement | HTMLTextAreaElement | null {
    const scope = this.container();
    const active = document.activeElement;
    if (
      (active instanceof HTMLInputElement || active instanceof HTMLTextAreaElement) &&
      !active.disabled &&
      !active.readOnly &&
      (active.classList.contains('answer-input') || active.classList.contains('letter-cloze-gap')) &&
      (!scope || scope.contains(active))
    ) {
      return active;
    }

    const last = this.targetInput();
    if (last && last.isConnected && !last.disabled && !last.readOnly && (!scope || scope.contains(last))) {
      return last;
    }

    const root = scope ?? document;
    const candidates = Array.from(
      root.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>(
        '.answer-input:not(:disabled):not([readonly]), .letter-cloze-gap:not(:disabled):not([readonly])',
      ),
    );
    return candidates.find((el) => !el.value.trim()) ?? candidates[0] ?? null;
  }
}
