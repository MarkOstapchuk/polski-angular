import { ChangeDetectionStrategy, Component, computed, effect, inject, input, output, signal } from '@angular/core';
import { normalizeAnswer } from '../../../../data/activity-adapter';
import { ActivityItem } from '../../../../data/lesson-types';
import { WorkbookImage } from '../../../../data/workbook-images';
import { LanguageService } from '../../../../i18n/language.service';
import { IconComponent } from '../../../../shared/icon/icon.component';

@Component({
  selector: 'app-classify-exercise',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './classify-exercise.component.html',
  styleUrl: './classify-exercise.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClassifyExerciseComponent {
  readonly language = inject(LanguageService);

  readonly activityId = input.required<string>();
  readonly items = input.required<ActivityItem[]>();
  readonly categories = input.required<string[]>();
  readonly answers = input.required<Record<string, string>>();
  readonly results = input<Record<string, boolean>>({});
  readonly checked = input.required<boolean>();
  readonly dictionaryMode = input<boolean>(false);
  readonly allImages = input<WorkbookImage[]>([]);
  readonly revealedHints = input<Record<string, boolean>>({});

  readonly answerChange = output<{ itemId: string; value: string }>();
  readonly openLightbox = output<WorkbookImage>();
  readonly toggleHint = output<string>();

  readonly activeCardIndex = signal(0);

  readonly activeItem = computed(() => {
    const list = this.items();
    const idx = Math.min(Math.max(0, this.activeCardIndex()), Math.max(0, list.length - 1));
    return list[idx];
  });

  readonly sortedCount = computed(() =>
    this.items().filter((item) => this.answerFor(item.id).trim().length > 0).length,
  );

  readonly allSorted = computed(() => this.sortedCount() === this.items().length && this.items().length > 0);

  readonly groupedItems = computed(() => {
    const cats = this.categories();
    const list = this.items();
    return cats.map((cat) => ({
      category: cat,
      entries: list
        .map((item, idx) => ({ item, idx }))
        .filter(({ item }) => this.answerFor(item.id) === cat),
    }));
  });

  constructor() {
    effect(() => {
      this.activityId();
      const firstUnanswered = this.items().findIndex((item) => !this.answerFor(item.id).trim());
      this.activeCardIndex.set(firstUnanswered >= 0 ? firstUnanswered : 0);
    }, { allowSignalWrites: true });
  }

  answerFor(itemId: string): string {
    return this.answers()[`${this.activityId()}:${itemId}`] ?? '';
  }

  bucketCount(category: string): number {
    return this.items().filter((item) => this.answerFor(item.id) === category).length;
  }

  isCategoryAccepted(item: ActivityItem, category: string): boolean {
    const normCat = normalizeAnswer(category);
    return item.accepted.some((acc) => normalizeAnswer(acc) === normCat);
  }

  isItemCorrect(itemId: string): boolean {
    return this.results()[itemId] ?? false;
  }

  itemImage(item: ActivityItem): WorkbookImage | undefined {
    return item.image ? this.allImages()[item.image - 1] : undefined;
  }

  isHintShown(itemId: string): boolean {
    return !!this.revealedHints()[`${this.activityId()}:${itemId}`];
  }

  prevCard(): void {
    const len = this.items().length;
    if (!len) return;
    this.activeCardIndex.update((i) => (i > 0 ? i - 1 : len - 1));
  }

  nextCard(): void {
    const len = this.items().length;
    if (!len) return;
    this.activeCardIndex.update((i) => (i + 1) % len);
  }

  jumpToItem(index: number): void {
    if (index >= 0 && index < this.items().length) {
      this.activeCardIndex.set(index);
    }
  }

  assignCategory(category: string): void {
    if (this.checked() || this.dictionaryMode()) return;
    const item = this.activeItem();
    if (!item) return;

    this.answerChange.emit({ itemId: item.id, value: category });

    const list = this.items();
    const curIdx = this.activeCardIndex();
    const nextUnansweredAfter = list.findIndex(
      (it, idx) => idx > curIdx && it.id !== item.id && !this.answerFor(it.id).trim(),
    );
    const nextUnansweredBefore = list.findIndex(
      (it, idx) => idx < curIdx && it.id !== item.id && !this.answerFor(it.id).trim(),
    );
    if (nextUnansweredAfter >= 0) {
      this.activeCardIndex.set(nextUnansweredAfter);
    } else if (nextUnansweredBefore >= 0) {
      this.activeCardIndex.set(nextUnansweredBefore);
    } else if (curIdx + 1 < list.length) {
      this.activeCardIndex.set(curIdx + 1);
    }
  }

  selectCategoryByShortcut(index: number): void {
    const cats = this.categories();
    if (index >= 0 && index < cats.length) {
      this.assignCategory(cats[index]);
    }
  }
}
