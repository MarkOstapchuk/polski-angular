import { afterRenderEffect, ChangeDetectionStrategy, Component, computed, effect, ElementRef, inject, input, output, signal, viewChildren } from '@angular/core';
import { normalizeAnswer } from '../../../../data/activity-adapter';
import { Activity, AdaptedActivity, AdaptedItem, WordBankEntry } from '../../../../data/lesson-types';
import { WorkbookImage } from '../../../../data/workbook-images';
import { LanguageService } from '../../../../i18n/language.service';
import { IconComponent } from '../../../../shared/icon/icon.component';
import { MultiGapExerciseComponent } from '../multi-gap-exercise/multi-gap-exercise.component';
import { TypedExerciseComponent } from '../typed-exercise/typed-exercise.component';

@Component({
  selector: 'app-word-bank-exercise',
  standalone: true,
  imports: [TypedExerciseComponent, MultiGapExerciseComponent, IconComponent],
  templateUrl: './word-bank-exercise.component.html',
  styleUrl: './word-bank-exercise.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WordBankExerciseComponent {
  readonly language = inject(LanguageService);

  readonly adapted = input.required<AdaptedActivity>();
  readonly activity = input.required<Activity>();
  readonly answers = input.required<Record<string, string>>();
  readonly results = input<Record<string, boolean>>({});
  readonly checked = input.required<boolean>();
  readonly dictionaryMode = input<boolean>(false);
  readonly allImages = input<WorkbookImage[]>([]);
  readonly revealedHints = input<Record<string, boolean>>({});
  readonly hasAudio = input<boolean>(false);

  readonly answerChange = output<{ itemId: string; value: string }>();
  readonly toggleHint = output<string>();
  readonly openLightbox = output<WorkbookImage>();
  readonly enterPressed = output<Event>();
  readonly typeModeChange = output<boolean>();

  private readonly dialogueTextareas = viewChildren<ElementRef<HTMLTextAreaElement>>('dialogueTa');

  readonly typeMode = signal(false);
  readonly activeSlot = signal<{ itemId: string; gapIndex: number } | null>(null);

  readonly isDialogueOrder = computed(() => this.adapted().uxMode === 'dialogue-order');
  readonly wordBank = computed(() => this.adapted().wordBank ?? []);

  readonly usedCounts = computed(() => {
    const counts = new Map<string, number>();
    const act = this.adapted();
    for (const item of act.items) {
      const val = this.answerFor(item.id);
      if (!val.trim()) continue;
      const parts = item.multiGap ? val.split('; ') : [val];
      for (const p of parts) {
        const key = normalizeAnswer(p);
        if (key) counts.set(key, (counts.get(key) ?? 0) + 1);
      }
    }
    return counts;
  });

  constructor() {
    effect(() => {
      this.activity().id;
      this.typeMode.set(false);
      this.activeSlot.set(null);
      this.typeModeChange.emit(false);
    }, { allowSignalWrites: true });

    afterRenderEffect((onCleanup) => {
      if (!this.isDialogueOrder()) return;
      this.activity().id;
      this.answers();
      this.dialogueTextareas();
      this.resizeAllDialogueTextareas();
      if (typeof requestAnimationFrame !== 'undefined') {
        const rafId = requestAnimationFrame(() => this.resizeAllDialogueTextareas());
        onCleanup(() => cancelAnimationFrame(rafId));
      }
    });
  }

  answerFor(itemId: string): string {
    return this.answers()[`${this.activity().id}:${itemId}`] ?? '';
  }

  slotParts(item: AdaptedItem): string[] {
    const count = item.multiGap?.gapCount ?? 1;
    const raw = this.answerFor(item.id);
    const split = raw ? raw.split('; ') : [];
    return Array.from({ length: count }, (_, idx) => split[idx] ?? '');
  }

  isExhausted(entry: WordBankEntry): boolean {
    const used = this.usedCounts().get(normalizeAnswer(entry.value)) ?? 0;
    return used >= entry.expectedCount;
  }

  isSlotActive(itemId: string, gapIndex: number): boolean {
    const current = this.resolvedActiveSlot();
    return current?.itemId === itemId && current.gapIndex === gapIndex;
  }

  setActiveSlot(itemId: string, gapIndex: number): void {
    if (this.checked() || this.dictionaryMode()) return;
    this.activeSlot.set({ itemId, gapIndex });
  }

  onChipClick(entry: WordBankEntry): void {
    if (this.checked() || this.dictionaryMode()) return;
    const target = this.resolvedActiveSlot();
    if (!target) return;

    const item = this.adapted().items.find((i) => i.id === target.itemId);
    if (!item) return;

    if (item.multiGap && item.multiGap.gapCount > 1) {
      const parts = this.slotParts(item);
      parts[target.gapIndex] = entry.value;
      const joined = parts.every((p) => !p.trim()) ? '' : parts.join('; ');
      this.answerChange.emit({ itemId: item.id, value: joined });
    } else {
      this.answerChange.emit({ itemId: item.id, value: entry.value });
    }

    const next = this.findNextEmptySlot(target.itemId, target.gapIndex);
    this.activeSlot.set(next);
  }

  clearSlot(itemId: string, gapIndex: number): void {
    if (this.checked() || this.dictionaryMode()) return;
    const item = this.adapted().items.find((i) => i.id === itemId);
    if (!item) return;
    if (item.multiGap && item.multiGap.gapCount > 1) {
      const parts = this.slotParts(item);
      parts[gapIndex] = '';
      const joined = parts.every((p) => !p.trim()) ? '' : parts.join('; ');
      this.answerChange.emit({ itemId, value: joined });
    } else {
      this.answerChange.emit({ itemId, value: '' });
    }
    this.activeSlot.set({ itemId, gapIndex });
  }

  onDialogueInput(itemId: string, event: Event): void {
    const el = event.target as HTMLTextAreaElement;
    this.resizeTextarea(el);
    this.answerChange.emit({ itemId, value: el.value });
  }

  onDialogueEnter(event: Event): void {
    const keyEvent = event as KeyboardEvent;
    if (keyEvent.shiftKey) return;
    this.enterPressed.emit(event);
  }

  toggleTypeMode(): void {
    if (this.checked() || this.dictionaryMode()) return;
    const next = !this.typeMode();
    this.typeMode.set(next);
    this.typeModeChange.emit(next);
  }

  clearSelection(): void {
    this.activeSlot.set(null);
  }

  isItemCorrect(itemId: string): boolean {
    return this.results()[itemId] ?? false;
  }

  itemImage(item: AdaptedItem): WorkbookImage | undefined {
    return item.raw.image ? this.allImages()[item.raw.image - 1] : undefined;
  }

  isHintShown(itemId: string): boolean {
    return !!this.revealedHints()[`${this.activity().id}:${itemId}`];
  }

  enterKeyHintFor(index: number): 'done' | 'next' {
    const items = this.adapted().items;
    return index >= items.length - 1 ? 'done' : 'next';
  }

  isMultiline(item: AdaptedItem): boolean {
    return Math.max(0, ...item.raw.accepted.map((a) => a.length)) >= 25;
  }

  private resolvedActiveSlot(): { itemId: string; gapIndex: number } | null {
    const explicit = this.activeSlot();
    if (explicit) return explicit;
    return this.findFirstEmptySlot() ?? (this.adapted().items[0] ? { itemId: this.adapted().items[0].id, gapIndex: 0 } : null);
  }

  private findFirstEmptySlot(): { itemId: string; gapIndex: number } | null {
    for (const item of this.adapted().items) {
      const parts = this.slotParts(item);
      for (let g = 0; g < parts.length; g++) {
        if (!parts[g].trim()) return { itemId: item.id, gapIndex: g };
      }
    }
    return null;
  }

  private findNextEmptySlot(afterItemId: string, afterGapIndex: number): { itemId: string; gapIndex: number } | null {
    const items = this.adapted().items;
    const startIdx = items.findIndex((i) => i.id === afterItemId);
    for (let i = Math.max(0, startIdx); i < items.length; i++) {
      const item = items[i];
      const parts = this.slotParts(item);
      const startGap = i === startIdx ? afterGapIndex + 1 : 0;
      for (let g = startGap; g < parts.length; g++) {
        if (!parts[g].trim()) return { itemId: item.id, gapIndex: g };
      }
    }
    return this.findFirstEmptySlot();
  }

  private resizeAllDialogueTextareas(): void {
    for (const ref of this.dialogueTextareas()) {
      this.resizeTextarea(ref.nativeElement);
    }
  }

  private resizeTextarea(el: HTMLTextAreaElement): void {
    el.style.height = 'auto';
    el.style.height = `${Math.max(44, el.scrollHeight)}px`;
  }
}
