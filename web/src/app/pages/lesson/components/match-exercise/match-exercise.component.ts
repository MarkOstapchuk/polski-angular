import { ChangeDetectionStrategy, ChangeDetectorRef, Component, computed, effect, ElementRef, inject, input, output, signal } from '@angular/core';
import { ActivityItem } from '../../../../data/lesson-types';
import { LanguageService } from '../../../../i18n/language.service';

const CHUNK_SIZE = 7;

@Component({
  selector: 'app-match-exercise',
  standalone: true,
  templateUrl: './match-exercise.component.html',
  styleUrl: './match-exercise.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MatchExerciseComponent {
  readonly language = inject(LanguageService);
  private readonly cdr = inject(ChangeDetectorRef);
  private readonly hostRef = inject<ElementRef<HTMLElement>>(ElementRef);

  readonly activityId = input.required<string>();
  readonly items = input.required<ActivityItem[]>();
  readonly matchOptions = input.required<string[]>();
  readonly answers = input.required<Record<string, string>>();
  readonly results = input<Record<string, boolean>>({});
  readonly checked = input.required<boolean>();
  readonly dictionaryMode = input<boolean>(false);

  readonly answerChange = output<{ itemId: string; value: string }>();

  readonly selectedItemId = signal<string | null>(null);
  readonly selectedOption = signal<string | null>(null);
  readonly activeChunkIndex = signal(0);

  readonly chunked = computed(() => this.items().length >= 10);

  readonly chunks = computed(() => {
    const allItems = this.items();
    const allOpts = this.matchOptions();
    if (allItems.length < 10) {
      return [{ label: `1–${allItems.length}`, items: allItems, options: allOpts }];
    }

    const assignedAccepted = new Set<string>();
    const result: Array<{ label: string; items: ActivityItem[]; options: string[] }> = [];
    for (let start = 0; start < allItems.length; start += CHUNK_SIZE) {
      const slice = allItems.slice(start, start + CHUNK_SIZE);
      const sliceTargets = new Set(slice.map((it) => it.accepted[0]));
      for (const t of sliceTargets) assignedAccepted.add(t);
      for (const it of slice) {
        const cur = this.answerFor(it.id);
        if (cur) sliceTargets.add(cur);
      }
      const chunkOpts = allOpts.filter((o) => sliceTargets.has(o));
      result.push({
        label: `${start + 1}–${start + slice.length}`,
        items: slice,
        options: chunkOpts,
      });
    }

    // Include any distractor options (not in any item.accepted[0]) in the last chunk
    const distractors = allOpts.filter((o) => !assignedAccepted.has(o));
    if (distractors.length && result.length > 0) {
      const last = result[result.length - 1];
      last.options = [...new Set([...last.options, ...distractors])];
    }
    return result;
  });

  readonly currentChunk = computed(() => {
    const list = this.chunks();
    const idx = Math.min(Math.max(0, this.activeChunkIndex()), Math.max(0, list.length - 1));
    return list[idx] ?? { label: '', items: [], options: [] };
  });

  readonly unmatchedChunkItems = computed(() => {
    const cur = this.currentChunk().items;
    if (this.checked()) return cur;
    return cur.filter((item) => !this.answerFor(item.id));
  });

  readonly matchedChunkItems = computed(() => {
    if (this.checked()) return [];
    return this.currentChunk().items.filter((item) => !!this.answerFor(item.id));
  });

  readonly pairIndexMap = computed(() => {
    const map = new Map<string, number>();
    let n = 1;
    for (const item of this.items()) {
      if (this.answerFor(item.id)) {
        map.set(item.id, n++);
      }
    }
    return map;
  });

  constructor() {
    effect(() => {
      this.activityId();
      this.selectedItemId.set(null);
      this.selectedOption.set(null);
      this.activeChunkIndex.set(0);
    }, { allowSignalWrites: true });
  }

  answerFor(itemId: string): string {
    return this.answers()[`${this.activityId()}:${itemId}`] ?? '';
  }

  pairNumberFor(itemId: string): number {
    return this.pairIndexMap().get(itemId) ?? 0;
  }

  pairColorClass(itemId: string): string {
    const num = this.pairNumberFor(itemId);
    return num > 0 ? `pair-color-${(num - 1) % 6}` : '';
  }

  targetPairNumbers(option: string): number[] {
    const map = this.pairIndexMap();
    const nums: number[] = [];
    for (const item of this.items()) {
      if (this.answerFor(item.id) === option) {
        const n = map.get(item.id);
        if (n) nums.push(n);
      }
    }
    return nums;
  }

  targetColorClass(option: string): string {
    const nums = this.targetPairNumbers(option);
    return nums.length ? `pair-color-${(nums[0] - 1) % 6}` : '';
  }

  isOptionAssigned(option: string): boolean {
    return this.items().some((item) => this.answerFor(item.id) === option);
  }

  isItemCorrect(itemId: string): boolean {
    return this.results()[itemId] ?? false;
  }

  selectChunk(index: number): void {
    this.activeChunkIndex.set(index);
    this.selectedItemId.set(null);
    this.selectedOption.set(null);
    this.cdr.detectChanges();
  }

  selectSource(itemId: string): void {
    if (this.checked() || this.dictionaryMode()) return;
    const opt = this.selectedOption();
    if (opt) {
      this.assignPair(itemId, opt);
      this.selectedItemId.set(null);
      this.selectedOption.set(null);
    } else {
      this.selectedItemId.update((cur) => (cur === itemId ? null : itemId));
    }
  }

  selectTarget(option: string): void {
    if (this.checked() || this.dictionaryMode()) return;
    const itemId = this.selectedItemId();
    if (itemId) {
      this.assignPair(itemId, option);
      this.selectedItemId.set(null);
      this.selectedOption.set(null);
    } else {
      this.selectedOption.update((cur) => (cur === option ? null : option));
    }
  }

  unassign(itemId: string): void {
    if (this.checked() || this.dictionaryMode()) return;
    this.answerChange.emit({ itemId, value: '' });
  }

  clearSelection(): void {
    this.selectedItemId.set(null);
    this.selectedOption.set(null);
  }

  focusItem(itemId: string): void {
    const chunkIdx = this.chunks().findIndex((c) => c.items.some((i) => i.id === itemId));
    if (chunkIdx >= 0 && chunkIdx !== this.activeChunkIndex()) {
      this.selectChunk(chunkIdx);
    }
    queueMicrotask(() => {
      const btn = this.hostRef.nativeElement.querySelector<HTMLElement>(
        `[data-item-id="${itemId}"] .match-source`,
      );
      btn?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      btn?.focus({ preventScroll: true });
    });
  }

  private assignPair(itemId: string, option: string): void {
    const other = this.items().find((item) => item.id !== itemId && this.answerFor(item.id) === option);
    if (other) {
      this.answerChange.emit({ itemId: other.id, value: this.answerFor(itemId) });
    }
    this.answerChange.emit({ itemId, value: option });
  }
}
