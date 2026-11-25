import { afterRenderEffect, ChangeDetectionStrategy, Component, ElementRef, input, output, viewChild } from '@angular/core';

@Component({
  selector: 'app-typed-exercise',
  standalone: true,
  templateUrl: './typed-exercise.component.html',
  styleUrl: './typed-exercise.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TypedExerciseComponent {
  readonly inputId = input.required<string>();
  readonly prompt = input.required<string>();
  readonly value = input<string>('');
  readonly disabled = input<boolean>(false);
  readonly placeholder = input.required<string>();
  readonly enterKeyHint = input<'done' | 'next'>('next');
  readonly multiline = input<boolean>(false);
  readonly focusStyle = input<boolean>(false);

  readonly valueChange = output<string>();
  readonly enterPressed = output<Event>();

  private readonly textareaEl = viewChild<ElementRef<HTMLTextAreaElement>>('textareaEl');

  constructor() {
    afterRenderEffect((onCleanup) => {
      this.inputId();
      this.multiline();
      this.focusStyle();
      this.value();
      this.textareaEl();
      this.resizeTextarea();
      if (typeof requestAnimationFrame !== 'undefined') {
        const rafId = requestAnimationFrame(() => this.resizeTextarea());
        onCleanup(() => cancelAnimationFrame(rafId));
      }
    });
  }

  onValueInput(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLTextAreaElement;
    if (this.multiline()) this.resizeTextarea();
    this.valueChange.emit(target.value);
  }

  onTextareaEnter(event: Event): void {
    const keyEvent = event as KeyboardEvent;
    if (keyEvent.shiftKey) return;
    this.enterPressed.emit(event);
  }

  resizeTextarea(): void {
    const el = this.textareaEl()?.nativeElement;
    if (!el) return;
    el.style.height = 'auto';
    const minHeight = this.focusStyle() ? 84 : 44;
    el.style.height = `${Math.max(minHeight, el.scrollHeight)}px`;
  }
}
