import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { LanguageService } from '../../i18n/language.service';
import { analyzeAnswerDiff } from '../answer-diff';

@Component({
  selector: 'app-answer-diff',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (diff(); as d) {
      <div class="diff-wrap" [class.is-compact]="compact()">
        <div class="diff-expected">
          <span class="diff-label">{{ language.t('lesson.correctAnswer') }}</span>
          <strong class="diff-phrase" lang="pl">
            @for (seg of d.expectedSegments; track $index) {
              @if (seg.kind === 'match') {
                <span>{{ seg.text }}</span>
              } @else {
                <mark class="diff-mark" [class.is-diacritic]="seg.kind === 'diacritic'" [class.is-missing]="seg.kind === 'missing'">{{ seg.text }}</mark>
              }
            }
          </strong>
        </div>

        @if (d.showUserComparison) {
          <div class="diff-user">
            <span class="diff-label">{{ language.t('diff.yourAnswer') }}</span>
            <span class="diff-phrase" lang="pl">
              @for (seg of d.userSegments; track $index) {
                @if (seg.kind === 'match') {
                  <span>{{ seg.text }}</span>
                } @else {
                  <span class="diff-user-bad" [class.is-diacritic]="seg.kind === 'diacritic'">{{ seg.text }}</span>
                }
              }
            </span>
          </div>
        }

        @if (hintKey(); as key) {
          <small class="diff-hint">{{ language.t(key) }}</small>
        }
      </div>
    }
  `,
  styles: [`
    .diff-wrap { display: grid; gap: 4px; font-size: 13px; line-height: 1.4; }
    .diff-wrap.is-compact { gap: 3px; font-size: 12.5px; }
    .diff-expected, .diff-user { display: flex; flex-wrap: wrap; align-items: baseline; gap: 5px; }
    .diff-label { opacity: .88; font-weight: 600; }
    .diff-phrase { overflow-wrap: anywhere; }
    .diff-mark {
      padding: 0 2px;
      border-radius: 4px;
      background: var(--success-bg);
      color: var(--success-text);
      font-weight: 800;
      text-decoration: underline;
      text-decoration-thickness: 1.5px;
      text-underline-offset: 2px;
    }
    .diff-mark.is-diacritic {
      background: var(--warn-bg);
      color: var(--warn-text);
    }
    .diff-user-bad {
      padding: 0 2px;
      border-radius: 3px;
      background: rgba(196, 91, 74, .18);
      text-decoration: line-through;
      text-decoration-thickness: 1.5px;
      font-weight: 700;
    }
    .diff-user-bad.is-diacritic {
      background: var(--warn-bg);
      color: var(--warn-text);
      text-decoration: none;
    }
    .diff-hint {
      display: inline-block;
      width: fit-content;
      margin-top: 2px;
      padding: 2px 7px;
      border-radius: 6px;
      background: var(--bg-elevated);
      color: var(--text-secondary);
      border: 1px solid var(--border);
      font-size: 11.5px;
      font-weight: 600;
    }
  `],
})
export class AnswerDiffComponent {
  readonly language = inject(LanguageService);
  readonly userAnswer = input<string>('');
  readonly accepted = input.required<string[]>();
  readonly compact = input<boolean>(false);

  readonly diff = computed(() => analyzeAnswerDiff(this.userAnswer(), this.accepted()));
  readonly hintKey = computed(() => {
    const reason = this.diff()?.reason;
    if (reason === 'diacritics') return 'diff.hintDiacritics';
    if (reason === 'ending') return 'diff.hintEnding';
    if (reason === 'word_order') return 'diff.hintOrder';
    if (reason === 'typo') return 'diff.hintTypo';
    return null;
  });
}
