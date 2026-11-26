import { ChangeDetectionStrategy, Component, computed, effect, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { normalizeAnswer } from '../../data/activity-adapter';
import { GrammarReferenceEntry, loadAllGrammarEntries } from '../../data/lesson-loader';
import type { TheoryBlock } from '../../data/lesson-theory';
import { LanguageSwitcherComponent } from '../../i18n/language-switcher.component';
import { LanguageService } from '../../i18n/language.service';
import { AnalyticsService } from '../../services/analytics.service';
import { IconComponent } from '../../shared/icon/icon.component';

type LevelFilter = 'all' | 'part-1' | 'part-2' | 'part-3';

const QUICK_TOPICS = [
  'Dopełniacz',
  'Biernik',
  'Narzędnik',
  'Miejscownik',
  'Celownik',
  'Czas przeszły',
  'Czas przyszły',
  'Aspekt',
  'Tryb rozkazujący',
  'Liczebniki',
] as const;

@Component({
  selector: 'app-grammar-reference',
  standalone: true,
  imports: [FormsModule, RouterLink, LanguageSwitcherComponent, IconComponent],
  templateUrl: './grammar-reference.component.html',
  styleUrl: './grammar-reference.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GrammarReferenceComponent {
  readonly language = inject(LanguageService);
  private readonly analytics = inject(AnalyticsService);

  readonly quickTopics = QUICK_TOPICS;
  readonly entries = signal<GrammarReferenceEntry[]>([]);
  readonly loading = signal(true);
  readonly query = signal('');
  readonly levelFilter = signal<LevelFilter>('all');
  readonly expandedIds = signal<Set<number>>(new Set([1]));
  readonly collapsedWhileSearching = signal<Set<number>>(new Set());

  private loadReqId = 0;

  readonly normalizedQuery = computed(() => normalizeAnswer(this.query()));
  readonly isSearching = computed(() => this.normalizedQuery().length >= 2);

  readonly filteredEntries = computed(() => {
    const q = this.normalizedQuery();
    const level = this.levelFilter();
    const terms = q.split(' ').filter(Boolean);

    return this.entries().filter((entry) => {
      if (level !== 'all' && entry.courseId !== level) return false;
      if (!terms.length) return true;
      return terms.every((term) => entry.searchBlob.includes(term));
    });
  });

  constructor() {
    this.analytics.track('grammar_reference_viewed');

    effect(() => {
      const locale = this.language.locale();
      const reqId = ++this.loadReqId;
      this.loading.set(true);
      void loadAllGrammarEntries(locale).then((list) => {
        if (reqId !== this.loadReqId) return;
        this.entries.set(list);
        this.loading.set(false);
      }).catch(() => {
        if (reqId === this.loadReqId) this.loading.set(false);
      });
    });
  }

  onQueryChange(value: string): void {
    this.query.set(value);
    this.collapsedWhileSearching.set(new Set());
  }

  applyQuickTopic(topic: string): void {
    const next = this.query() === topic ? '' : topic;
    this.onQueryChange(next);
    if (next) {
      this.analytics.track('grammar_reference_topic_clicked', {
        metadata: { topic },
      });
    }
  }

  clearSearch(): void {
    this.onQueryChange('');
  }

  isExpanded(lessonId: number): boolean {
    if (this.isSearching()) {
      return !this.collapsedWhileSearching().has(lessonId);
    }
    return this.expandedIds().has(lessonId);
  }

  toggleLesson(lessonId: number): void {
    if (this.isSearching()) {
      this.collapsedWhileSearching.update((set) => {
        const next = new Set(set);
        if (next.has(lessonId)) next.delete(lessonId);
        else next.add(lessonId);
        return next;
      });
      return;
    }

    this.expandedIds.update((set) => {
      const next = new Set(set);
      if (next.has(lessonId)) next.delete(lessonId);
      else next.add(lessonId);
      return next;
    });
  }

  blockMatches(block: TheoryBlock): boolean {
    const terms = this.normalizedQuery().split(' ').filter((t) => t.length >= 2);
    if (!terms.length) return false;
    const blob = normalizeAnswer([
      block.title,
      block.summary,
      ...(block.bullets ?? []),
      ...(block.table ? [block.table.headers.join(' '), ...block.table.rows.map((r) => r.join(' '))] : []),
      ...(block.examples ?? []).flatMap((e) => [e.polish, e.translation]),
    ].join(' '));
    return terms.some((term) => blob.includes(term));
  }
}
