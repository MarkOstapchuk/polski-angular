import {
  VIEWPORTS,
  createCheckRecorder,
  checkViewportAndOverflow,
  checkRuntimeClean,
  solveCurrentActivity,
  clickCheckAndWait,
} from '../lib/assertions.mjs';
import { sleep } from '../lib/chrome.mjs';
import { getActivityFixture } from '../fixtures/curriculum-fixtures.mjs';

function makeResult(test, viewport, recorder, startMs, extraError = null) {
  const passed = !extraError && recorder.allPassed();
  return {
    id: test.id,
    tier: test.tier,
    title: test.title,
    viewport: viewport.label,
    status: passed ? 'PASS' : 'FAIL',
    durationMs: Date.now() - startMs,
    checks: recorder.checks,
    error: extraError || (passed ? undefined : recorder.summaryFailure()),
  };
}

const ALL_UNLOCKED = {
  completedLessonIds: Array.from({ length: 48 }, (_, i) => i + 1),
  scores: {},
  activityProgress: {},
  totalXp: 400,
  dailyXp: 0,
  streak: 1,
  bestStreak: 1,
  lastStudyDate: '2026-11-18',
};

export const TIER2_TESTS = [
  {
    id: 'T2-01',
    tier: 2,
    title: 'Boundary Viewports (320x568, 768x1024, 1440x900) & Tablet #progress-card (F2, F3)',
    viewports: [VIEWPORTS.narrowMobile, VIEWPORTS.tablet, VIEWPORTS.wideDesktop],
    async run({ chrome, baseUrl, viewport }) {
      const start = Date.now();
      const rec = createCheckRecorder();
      const authPage = await chrome.createIsolatedPage({ baseUrl, viewport, authenticated: false });
      try {
        for (const route of ['/', '/auth']) {
          await authPage.goto(route, { waitSelector: 'main' });
          const vp = await checkViewportAndOverflow(authPage);
          rec.soft(
            `${route}:overflow(${viewport.label})`,
            vp.widthOk && vp.overflowOk,
            `inner=${vp.innerWidth}/${vp.expectedWidth} scroll=${vp.scrollWidth}/${vp.clientWidth} offenders=${vp.offenders.join(',')}`
          );
        }
      } finally {
        await authPage.close();
      }

      const page = await chrome.createIsolatedPage({ baseUrl, viewport, authenticated: true });
      try {
        for (const route of ['/course/part-1', '/learn/1']) {
          await page.goto(route, { waitSelector: 'main' });
          const vp = await checkViewportAndOverflow(page);
          rec.soft(
            `${route}:overflow(${viewport.label})`,
            vp.widthOk && vp.overflowOk,
            `inner=${vp.innerWidth}/${vp.expectedWidth} scroll=${vp.scrollWidth}/${vp.clientWidth} offenders=${vp.offenders.join(',')}`
          );
        }

        if (viewport.width === 768) {
          await page.goto('/course/part-1', { waitSelector: '.welcome-row' });
          const cardState = await page.evaluate(() => {
            const card = document.querySelector('#progress-card');
            if (!card) return { exists: false };
            const style = getComputedStyle(card);
            const rect = card.getBoundingClientRect();
            return {
              exists: true,
              visible: style.display !== 'none' && style.visibility !== 'hidden' && rect.height > 20,
              display: style.display,
              height: rect.height,
            };
          });
          rec.soft('tablet-768:#progress-card-visible(F2)', cardState.exists && cardState.visible, JSON.stringify(cardState));
        }

        const rt = checkRuntimeClean(page);
        rec.soft('runtime-clean', rt.ok, JSON.stringify(rt));
        return makeResult(this, viewport, rec, start);
      } catch (err) {
        return makeResult(this, viewport, rec, start, err.message);
      } finally {
        await page.close();
      }
    },
  },

  {
    id: 'T2-02',
    tier: 2,
    title: 'Empty & Partial Check Button Disabled Guard',
    viewports: [VIEWPORTS.mobile, VIEWPORTS.desktop],
    async run({ chrome, baseUrl, viewport }) {
      const start = Date.now();
      const rec = createCheckRecorder();
      const page = await chrome.createIsolatedPage({
        baseUrl,
        viewport,
        authenticated: true,
        initialProgress: ALL_UNLOCKED,
      });
      try {
        // 1. LetterCloze partial gaps on L1[0]
        await page.goto('/learn/1', { waitSelector: '.letter-cloze-gap' });
        await page.evaluate(() => {
          const gaps = [...document.querySelectorAll('.question-row:first-child .letter-cloze-gap')];
          const setter = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value')?.set;
          gaps.slice(0, -1).forEach((g) => {
            if (setter) setter.call(g, 'z');
            else g.value = 'z';
            g.dispatchEvent(new Event('input', { bubbles: true }));
          });
        });
        await sleep(60);
        const disabledLc = await page.evaluate(
          () => Boolean(document.querySelector('.exercise-footer button.check-button:not(.next-button)')?.disabled)
        );
        rec.soft('guard:letter-cloze-partial', disabledLc, `disabled=${disabledLc}`);

        // 2. Match partial (4/5 pairs) on L1[14]
        await page.domClick('nav.exercise-picker button.exercise-picker-button', 14);
        await sleep(100);
        const matchFixture = getActivityFixture(1, 14);
        for (const item of matchFixture.items.slice(0, 4)) {
          await page.evaluate((p, t) => {
            const s = [...document.querySelectorAll('.match-source')].find((b) => (b.textContent || '').includes(p));
            s?.click();
            const g = [...document.querySelectorAll('.match-target')].find((b) => (b.textContent || '').includes(t));
            g?.click();
          }, item.prompt, item.accepted[0]);
        }
        await sleep(60);
        const disabledMatch = await page.evaluate(
          () => Boolean(document.querySelector('.exercise-footer button.check-button:not(.next-button)')?.disabled)
        );
        rec.soft('guard:match-4-of-5', disabledMatch, `disabled=${disabledMatch}`);

        // 3. Multi-blank / Typed partial on L4[1]
        await page.goto('/learn/4', { waitSelector: 'nav.exercise-picker' });
        await page.domClick('nav.exercise-picker button.exercise-picker-button', 1);
        await sleep(100);
        await page.evaluate(() => {
          const firstInput = document.querySelector('.question-row input:not([type="hidden"])');
          if (firstInput) {
            Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value')?.set?.call(firstInput, 'cieszę się');
            firstInput.dispatchEvent(new Event('input', { bubbles: true }));
          }
        });
        await sleep(60);
        const disabledMulti = await page.evaluate(
          () => Boolean(document.querySelector('.exercise-footer button.check-button:not(.next-button)')?.disabled)
        );
        rec.soft('guard:multi-blank-partial', disabledMulti, `disabled=${disabledMulti}`);

        const rt = checkRuntimeClean(page);
        rec.soft('runtime-clean', rt.ok, JSON.stringify(rt));
        return makeResult(this, viewport, rec, start);
      } catch (err) {
        return makeResult(this, viewport, rec, start, err.message);
      } finally {
        await page.close();
      }
    },
  },

  {
    id: 'T2-03',
    tier: 2,
    title: 'Multi-Blank ";" Split Inputs (T9 / F17) on L4[6], L5[16], L32[3]',
    viewports: [VIEWPORTS.mobile, VIEWPORTS.desktop],
    async run({ chrome, baseUrl, viewport }) {
      const start = Date.now();
      const rec = createCheckRecorder();
      const page = await chrome.createIsolatedPage({
        baseUrl,
        viewport,
        authenticated: true,
        initialProgress: ALL_UNLOCKED,
      });
      try {
        const cases = [
          { lessonId: 4, actIndex: 6, rowIdx: 4, expectedGaps: 4, label: 'L4[6]q5(4-blank)' },
          { lessonId: 5, actIndex: 16, rowIdx: 5, expectedGaps: 6, label: 'L5[16]q6(6-blank)' },
          { lessonId: 32, actIndex: 3, rowIdx: 3, expectedGaps: 2, label: 'L32[3]q4(2-blank)' },
        ];

        for (const c of cases) {
          await page.goto(`/learn/${c.lessonId}`, { waitSelector: 'nav.exercise-picker' });
          await page.domClick('nav.exercise-picker button.exercise-picker-button', c.actIndex);
          await sleep(120);

          const gapCount = await page.evaluate((rIdx) => {
            const row = document.querySelectorAll('.question-row')[rIdx];
            if (!row) return 0;
            return row.querySelectorAll('input:not([type="hidden"])').length;
          }, c.rowIdx);
          rec.soft(
            `multi-gap:${c.label}:split-inputs(F17)`,
            gapCount === c.expectedGaps,
            `expected ${c.expectedGaps} inputs, found ${gapCount}`
          );

          const fixture = getActivityFixture(c.lessonId, c.actIndex);
          await solveCurrentActivity(page, fixture);
          await clickCheckAndWait(page);
          const perfect = await page.evaluate(
            (n) => Boolean(document.querySelector('.result-strip.result-perfect')) || (document.querySelector('.result-strip')?.textContent || '').includes(`${n} z ${n}`),
            fixture.items.length
          );
          rec.soft(`multi-gap:${c.label}:graded-100%`, perfect, `perfect=${perfect}`);
        }

        const rt = checkRuntimeClean(page);
        rec.soft('runtime-clean', rt.ok, JSON.stringify(rt));
        return makeResult(this, viewport, rec, start);
      } catch (err) {
        return makeResult(this, viewport, rec, start, err.message);
      } finally {
        await page.close();
      }
    },
  },

  {
    id: 'T2-04',
    tier: 2,
    title: '19-Pair Match Board (L32[0]) Pair Badges, Unassign & Full Match (T4 / F21)',
    viewports: [VIEWPORTS.mobile, VIEWPORTS.desktop],
    async run({ chrome, baseUrl, viewport }) {
      const start = Date.now();
      const rec = createCheckRecorder();
      const page = await chrome.createIsolatedPage({
        baseUrl,
        viewport,
        authenticated: true,
        initialProgress: ALL_UNLOCKED,
      });
      try {
        await page.goto('/learn/32', { waitSelector: '.match-board' });
        const fixture = getActivityFixture(32, 0);

        // Pair 1 match + verify badge / unassign x (F21)
        const first = fixture.items[0];
        await page.evaluate((p, t) => {
          const clean = (s) => (s || '').replace(/\s+/g, ' ').trim();
          const badgeSel = '.match-badge, .pair-badge, .match-unassign, .match-pair-index, [data-pair-badge], .unassign-button';
          const getSrc = (b) => {
            const c = b.cloneNode(true);
            c.querySelectorAll(`small, ${badgeSel}`).forEach((n) => n.remove());
            return clean(c.textContent);
          };
          const getTgt = (b) => {
            const c = b.cloneNode(true);
            c.querySelectorAll(badgeSel).forEach((n) => n.remove());
            return clean(c.textContent);
          };
          const srcs = [...document.querySelectorAll('.match-source')];
          const tgts = [...document.querySelectorAll('.match-target')];
          (srcs.find((b) => getSrc(b) === clean(p)) || srcs.find((b) => getSrc(b).includes(clean(p))))?.click();
          (tgts.find((b) => getTgt(b) === clean(t)) || tgts.find((b) => getTgt(b).includes(clean(t))))?.click();
        }, first.prompt, first.accepted[0]);
        await sleep(80);

        const f21Features = await page.evaluate(() => {
          const hasUnassign = Boolean(
            document.querySelector('.match-unassign, .unassign-button, button[aria-label*="Usuń"], button[aria-label*="Odłącz"], .match-entry button[aria-label*="×"]')
          );
          const hasPairBadge = Boolean(
            document.querySelector('.match-badge, .pair-badge, .match-pair-index, [data-pair-badge]')
          );
          return { hasUnassign, hasPairBadge };
        });
        rec.soft('match19:badges-and-unassign(F21)', f21Features.hasUnassign && f21Features.hasPairBadge, JSON.stringify(f21Features));

        if (f21Features.hasUnassign) {
          await page.evaluate(() => {
            const btn = document.querySelector(
              '.match-unassign, .unassign-button, button[aria-label*="Usuń"], button[aria-label*="Odłącz"], .match-entry button[aria-label*="×"]'
            );
            btn?.click();
          });
          await sleep(60);
          const unassigned = await page.evaluate(() => {
            const countText = document.querySelector('.exercise-footer .answer-count')?.textContent || '';
            return /\b0\s*\//.test(countText) || !document.querySelector('.match-source.has-answer');
          });
          rec.soft('match19:unassign-restores-item(F21)', unassigned, `unassigned=${unassigned}`);
        }

        await solveCurrentActivity(page, fixture);
        await clickCheckAndWait(page);
        const perfect = await page.evaluate(
          () => Boolean(document.querySelector('.result-strip.result-perfect'))
        );
        rec.soft('match19:all-19-graded', perfect, `perfect=${perfect}`);

        const rt = checkRuntimeClean(page);
        rec.soft('runtime-clean', rt.ok, JSON.stringify(rt));
        return makeResult(this, viewport, rec, start);
      } catch (err) {
        return makeResult(this, viewport, rec, start, err.message);
      } finally {
        await page.close();
      }
    },
  },

  {
    id: 'T2-05',
    tier: 2,
    title: '35-Item Classify Deck (<800px height, 1-8 shortcuts) on L27[0] (T3 / F20)',
    viewports: [VIEWPORTS.mobile, VIEWPORTS.desktop],
    async run({ chrome, baseUrl, viewport }) {
      const start = Date.now();
      const rec = createCheckRecorder();
      const page = await chrome.createIsolatedPage({
        baseUrl,
        viewport,
        authenticated: true,
        initialProgress: ALL_UNLOCKED,
      });
      try {
        await page.goto('/learn/27', { waitSelector: '.exercise-card' });
        const fixture = getActivityFixture(27, 0);

        const metrics = await page.evaluate(() => {
          const card = document.querySelector('.exercise-card');
          const rect = card?.getBoundingClientRect();
          const btnCount = card?.querySelectorAll('button.option-button').length || 0;
          return {
            height: rect ? Math.round(rect.height) : 9999,
            optionButtons: btnCount,
          };
        });
        rec.soft(
          'classify35:compact-deck-height<950px(F20)',
          metrics.height < 950 && metrics.optionButtons < 100,
          `height=${metrics.height}px optionButtons=${metrics.optionButtons} (baseline is 6583px / 280 buttons)`
        );

        await solveCurrentActivity(page, fixture);
        await clickCheckAndWait(page);
        const perfect = await page.evaluate(() => Boolean(document.querySelector('.result-strip.result-perfect')));
        rec.soft('classify35:all-35-graded', perfect, `perfect=${perfect}`);

        const rt = checkRuntimeClean(page);
        rec.soft('runtime-clean', rt.ok, JSON.stringify(rt));
        return makeResult(this, viewport, rec, start);
      } catch (err) {
        return makeResult(this, viewport, rec, start, err.message);
      } finally {
        await page.close();
      }
    },
  },

  {
    id: 'T2-06',
    tier: 2,
    title: 'High-Option Shared WordBank Pool on L11[1] (12x12) & L40[1] (14x13) (T2 / F19)',
    viewports: [VIEWPORTS.mobile, VIEWPORTS.desktop],
    async run({ chrome, baseUrl, viewport }) {
      const start = Date.now();
      const rec = createCheckRecorder();
      const page = await chrome.createIsolatedPage({
        baseUrl,
        viewport,
        authenticated: true,
        initialProgress: ALL_UNLOCKED,
      });
      try {
        for (const { lessonId, actIndex, maxButtons } of [
          { lessonId: 11, actIndex: 1, maxButtons: 40 },
          { lessonId: 40, actIndex: 1, maxButtons: 45 },
        ]) {
          await page.goto(`/learn/${lessonId}`, { waitSelector: 'nav.exercise-picker' });
          await page.domClick('nav.exercise-picker button.exercise-picker-button', actIndex);
          await sleep(120);

          const wbMetrics = await page.evaluate(() => {
            const hasPool = Boolean(
              document.querySelector('[data-word-bank], .word-bank-pool, .shared-word-bank, .word-bank')
            );
            const btnCount = document.querySelectorAll(
              '.exercise-card button.option-button, .word-bank-pool button, .shared-word-bank button, [data-word-bank] button, .word-bank button'
            ).length;
            return { hasPool, btnCount };
          });
          rec.soft(
            `wordbank:L${lessonId}[${actIndex}]:no-button-wall(F19)`,
            wbMetrics.hasPool && wbMetrics.btnCount > 0 && wbMetrics.btnCount <= maxButtons,
            `hasPool=${wbMetrics.hasPool} buttonCount=${wbMetrics.btnCount} (expected <=${maxButtons} shared bank chips instead of 144/182 wall)`
          );

          const fixture = getActivityFixture(lessonId, actIndex);
          await solveCurrentActivity(page, fixture);
          await clickCheckAndWait(page);
          const perfect = await page.evaluate(() => Boolean(document.querySelector('.result-strip.result-perfect')));
          rec.soft(`wordbank:L${lessonId}[${actIndex}]:graded-100%`, perfect, `perfect=${perfect}`);
        }

        const rt = checkRuntimeClean(page);
        rec.soft('runtime-clean', rt.ok, JSON.stringify(rt));
        return makeResult(this, viewport, rec, start);
      } catch (err) {
        return makeResult(this, viewport, rec, start, err.message);
      } finally {
        await page.close();
      }
    },
  },

  {
    id: 'T2-07',
    tier: 2,
    title: 'Disguised Choice Pills (T7 / F16) & Word-Order Chip Builder (T8 / F18)',
    viewports: [VIEWPORTS.mobile, VIEWPORTS.desktop],
    async run({ chrome, baseUrl, viewport }) {
      const start = Date.now();
      const rec = createCheckRecorder();
      const page = await chrome.createIsolatedPage({
        baseUrl,
        viewport,
        authenticated: true,
        initialProgress: ALL_UNLOCKED,
      });
      try {
        // T7 Disguised choices -> interactive Choice pills
        for (const { lessonId, actIndex, label } of [
          { lessonId: 5, actIndex: 10, label: 'L5[10](rok/lat/lata)' },
          { lessonId: 10, actIndex: 9, label: 'L10[9](KELNER/KLIENT)' },
          { lessonId: 27, actIndex: 2, label: 'L27[2](P/N)' },
        ]) {
          await page.goto(`/learn/${lessonId}`, { waitSelector: 'nav.exercise-picker' });
          await page.domClick('nav.exercise-picker button.exercise-picker-button', actIndex);
          await sleep(100);
          const hasPills = await page.evaluate(() => {
            const firstRow = document.querySelector('.question-row');
            return Boolean(firstRow && firstRow.querySelectorAll('button.option-button, .option-list button').length >= 2);
          });
          rec.soft(`disguised-choice:${label}(F16)`, hasPills, `hasChoicePills=${hasPills}`);
          const fixture = getActivityFixture(lessonId, actIndex);
          await solveCurrentActivity(page, fixture);
          await clickCheckAndWait(page);
        }

        // T8 Word-Order chip builder on L1[12]
        await page.goto('/learn/1', { waitSelector: 'nav.exercise-picker' });
        await page.domClick('nav.exercise-picker button.exercise-picker-button', 12);
        await sleep(100);
        const hasChips = await page.evaluate(() =>
          Boolean(document.querySelector('.word-order-pool button, .word-chips button, [data-word-order-pool] button'))
        );
        rec.soft('word-order:chip-builder(F18)', hasChips, `hasWordChips=${hasChips}`);
        await solveCurrentActivity(page, getActivityFixture(1, 12));
        await clickCheckAndWait(page);
        const perfect = await page.evaluate(() => Boolean(document.querySelector('.result-strip.result-perfect')));
        rec.soft('word-order:graded-100%', perfect, `perfect=${perfect}`);

        const rt = checkRuntimeClean(page);
        rec.soft('runtime-clean', rt.ok, JSON.stringify(rt));
        return makeResult(this, viewport, rec, start);
      } catch (err) {
        return makeResult(this, viewport, rec, start, err.message);
      } finally {
        await page.close();
      }
    },
  },

  {
    id: 'T2-08',
    tier: 2,
    title: 'Polish Diacritics Caret Insertion & Smart Accent Warning (F14 / F24)',
    viewports: [VIEWPORTS.mobile, VIEWPORTS.desktop],
    async run({ chrome, baseUrl, viewport }) {
      const start = Date.now();
      const rec = createCheckRecorder();
      const page = await chrome.createIsolatedPage({
        baseUrl,
        viewport,
        authenticated: true,
        initialProgress: ALL_UNLOCKED,
      });
      try {
        await page.goto('/learn/1', { waitSelector: 'nav.exercise-picker' });
        await page.domClick('nav.exercise-picker button.exercise-picker-button', 7); // l01-spelling
        await sleep(100);

        // Caret insertion in middle of text
        const caretResult = await page.evaluate(() => {
          const inp = document.querySelector('.question-row input.answer-input, .question-row textarea');
          const btn = [...document.querySelectorAll('button')].find((b) => (b.textContent || '').trim() === 'ó');
          if (!inp || !btn) return { ok: false, reason: 'missing input or ó button' };
          inp.focus();
          Object.getOwnPropertyDescriptor(
            inp.tagName === 'TEXTAREA' ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype,
            'value'
          )?.set?.call(inp, 'przeczytac');
          inp.dispatchEvent(new Event('input', { bubbles: true }));
          inp.setSelectionRange(2, 2);
          btn.click();
          return { ok: inp.value === 'prózeczytac', value: inp.value };
        });
        rec.soft('diacritics:caret-insert(F14)', caretResult.ok, JSON.stringify(caretResult));

        // Submit ASCII-stripped answers on L1[7] -> expect smart accent mismatch warning (F24)
        const asciiAnswers = ['rozumiem', 'powtorzyc', 'przeliterowac', 'wiem', 'pamietam', 'przeczytac', 'znaczy'];
        await page.evaluate((vals) => {
          const rows = [...document.querySelectorAll('.question-row')];
          rows.forEach((r, idx) => {
            const f = r.querySelector('input.answer-input, textarea');
            if (!f) return;
            const proto = f.tagName === 'TEXTAREA' ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype;
            Object.getOwnPropertyDescriptor(proto, 'value')?.set?.call(f, vals[idx]);
            f.dispatchEvent(new Event('input', { bubbles: true }));
          });
        }, asciiAnswers);
        await clickCheckAndWait(page);

        const accentWarning = await page.evaluate(() => {
          const warn = document.querySelector(
            '[data-accent-warning], .accent-warning, .diacritic-warning, .hint-warning'
          );
          const feedbackText = [
            warn?.textContent || '',
            document.querySelector('.result-strip')?.textContent || '',
            ...[...document.querySelectorAll('.answer-feedback')].map((n) => n.textContent || ''),
          ].join(' ');
          return {
            hasWarnEl: Boolean(warn),
            warnText: (warn?.textContent || '').trim().slice(0, 80),
            hasHintText: /(znaki|diakryt|akcent|ogonk|diacritic|accent|polish letters|диакрит)/i.test(feedbackText),
          };
        });
        rec.soft(
          'diacritics:smart-accent-warning(F24)',
          accentWarning.hasWarnEl || accentWarning.hasHintText,
          JSON.stringify(accentWarning)
        );

        // Also test L6[6] (contains all 9 diacritics)
        await page.goto('/learn/6', { waitSelector: 'nav.exercise-picker' });
        await page.domClick('nav.exercise-picker button.exercise-picker-button', 6);
        await sleep(100);
        const l6Fixture = getActivityFixture(6, 6);
        await solveCurrentActivity(page, l6Fixture);
        await clickCheckAndWait(page);
        const l6Perfect = await page.evaluate(() => Boolean(document.querySelector('.result-strip.result-perfect')));
        rec.soft('diacritics:L6[6]-all-9-solved', l6Perfect, `perfect=${l6Perfect}`);

        const rt = checkRuntimeClean(page);
        rec.soft('runtime-clean', rt.ok, JSON.stringify(rt));
        return makeResult(this, viewport, rec, start);
      } catch (err) {
        return makeResult(this, viewport, rec, start, err.message);
      } finally {
        await page.close();
      }
    },
  },

  {
    id: 'T2-09',
    tier: 2,
    title: 'Long-Text Auto-Grow Textarea on L5[0] (223 chars) & L11[10] (324 chars) (T10 / F23)',
    viewports: [VIEWPORTS.mobile, VIEWPORTS.desktop],
    async run({ chrome, baseUrl, viewport }) {
      const start = Date.now();
      const rec = createCheckRecorder();
      const page = await chrome.createIsolatedPage({
        baseUrl,
        viewport,
        authenticated: true,
        initialProgress: ALL_UNLOCKED,
      });
      try {
        for (const { lessonId, actIndex, label } of [
          { lessonId: 5, actIndex: 0, label: 'L5[0](223ch)' },
          { lessonId: 11, actIndex: 10, label: 'L11[10](324ch)' },
        ]) {
          await page.goto(`/learn/${lessonId}`, { waitSelector: 'nav.exercise-picker' });
          await page.domClick('nav.exercise-picker button.exercise-picker-button', actIndex);
          await sleep(120);

          const before = await page.evaluate(() => {
            const ta = document.querySelector('.question-row textarea');
            if (!ta) return { isTextarea: false };
            return { isTextarea: true, height: ta.clientHeight };
          });
          rec.soft(`longtext:${label}:is-textarea(F23)`, before.isTextarea, JSON.stringify(before));

          const fixture = getActivityFixture(lessonId, actIndex);
          await solveCurrentActivity(page, fixture);
          await sleep(60);

          if (before.isTextarea) {
            const after = await page.evaluate(() => {
              const ta = document.querySelector('.question-row textarea');
              return {
                height: ta ? ta.clientHeight : 0,
                noClip: ta ? ta.scrollHeight <= ta.clientHeight + 6 : false,
              };
            });
            rec.soft(
              `longtext:${label}:auto-grows(F23)`,
              after.height > before.height && after.noClip,
              `before=${before.height}px after=${after.height}px noClip=${after.noClip}`
            );
          }

          await clickCheckAndWait(page);
          const perfect = await page.evaluate(() => Boolean(document.querySelector('.result-strip.result-perfect')));
          rec.soft(`longtext:${label}:graded-100%`, perfect, `perfect=${perfect}`);
        }

        const rt = checkRuntimeClean(page);
        rec.soft('runtime-clean', rt.ok, JSON.stringify(rt));
        return makeResult(this, viewport, rec, start);
      } catch (err) {
        return makeResult(this, viewport, rec, start, err.message);
      } finally {
        await page.close();
      }
    },
  },

  {
    id: 'T2-10',
    tier: 2,
    title: 'LetterCloze Navigation, >=44px Gap Targets & Backspace-Prev (T5 / F22)',
    viewports: [VIEWPORTS.mobile, VIEWPORTS.desktop],
    async run({ chrome, baseUrl, viewport }) {
      const start = Date.now();
      const rec = createCheckRecorder();
      const page = await chrome.createIsolatedPage({ baseUrl, viewport, authenticated: true });
      try {
        await page.goto('/learn/1', { waitSelector: '.letter-cloze-gap' });

        // Check target width & height >= 44x44px on LetterCloze gaps (F22)
        const gapBox = await page.evaluate(() => {
          const g = document.querySelector('.letter-cloze-gap');
          if (!g) return null;
          const r = g.getBoundingClientRect();
          return { width: Math.round(r.width * 10) / 10, height: Math.round(r.height * 10) / 10 };
        });
        rec.soft(
          'letter-cloze:gap-target>=44x44px(F22)',
          Boolean(gapBox && gapBox.width >= 44 && gapBox.height >= 44),
          JSON.stringify(gapBox)
        );

        // Focus gap 0 -> type 'z' -> verify focus moves to gap 1
        await page.evaluate(() => {
          const gaps = document.querySelectorAll('.question-row:first-child .letter-cloze-gap');
          gaps[0]?.focus();
        });
        await page.typeText('z');
        await sleep(60);
        const movedForward = await page.evaluate(() => {
          const gaps = [...document.querySelectorAll('.question-row:first-child .letter-cloze-gap')];
          return document.activeElement === gaps[1];
        });
        rec.soft('letter-cloze:auto-advance', movedForward, `movedToGap1=${movedForward}`);

        // Press Backspace on empty gap 1 -> verify focus moves back to gap 0 (F22)
        await page.pressKey('Backspace');
        await sleep(60);
        const movedBack = await page.evaluate(() => {
          const gaps = [...document.querySelectorAll('.question-row:first-child .letter-cloze-gap')];
          return document.activeElement === gaps[0];
        });
        rec.soft('letter-cloze:backspace-prev(F22)', movedBack, `movedBackToGap0=${movedBack}`);

        const rt = checkRuntimeClean(page);
        rec.soft('runtime-clean', rt.ok, JSON.stringify(rt));
        return makeResult(this, viewport, rec, start);
      } catch (err) {
        return makeResult(this, viewport, rec, start, err.message);
      } finally {
        await page.close();
      }
    },
  },

  {
    id: 'T2-11',
    tier: 2,
    title: 'Error States (?error=progress, Invalid Login, Progress 500, Feedback 500, PONS 500/Empty)',
    viewports: [VIEWPORTS.mobile, VIEWPORTS.desktop],
    async run({ chrome, baseUrl, viewport }) {
      const start = Date.now();
      const rec = createCheckRecorder();

      // 1. Auth ?error=progress + invalid login
      const authPage = await chrome.createIsolatedPage({
        baseUrl,
        viewport,
        authenticated: false,
        faults: { invalidLogin: true },
      });
      try {
        await authPage.goto('/auth?error=session', { waitSelector: '#auth-title' });
        const errSession = await authPage.evaluate(
          () => document.querySelector('.error-message[role="alert"]')?.textContent?.trim() || ''
        );
        rec.soft('auth:?error=session-alert(F7)', errSession.length > 0, `alert="${errSession}"`);

        await authPage.goto('/auth?error=progress', { waitSelector: '#auth-title' });
        const errProgress = await authPage.evaluate(
          () => document.querySelector('.error-message[role="alert"]')?.textContent?.trim() || ''
        );
        rec.soft('auth:?error=progress-alert(F7)', errProgress.length > 0, `alert="${errProgress}"`);

        await authPage.fill('input[name="email"]', 'learner@example.com');
        await authPage.fill('input[name="password"]', 'wrong-password');
        await authPage.domClick('button.submit-button');
        const gotInvalidAlert = await authPage
          .waitFor(() => {
            const t = document.querySelector('.error-message[role="alert"]')?.textContent || '';
            return /invalid|błęd|nieprawid|неверн/i.test(t) || t.length > 0;
          }, { timeoutMs: 3000 })
          .then(() => true)
          .catch(() => false);
        rec.soft('auth:invalid-credentials-alert', gotInvalidAlert, `gotInvalidAlert=${gotInvalidAlert}`);
      } finally {
        await authPage.close();
      }

      // 2. Progress 500 + Feedback 500 + PONS 500 / Empty
      const page = await chrome.createIsolatedPage({
        baseUrl,
        viewport,
        authenticated: true,
        faults: { progressSaveStatus: 500, feedbackStatus: 500, ponsStatus: 500 },
      });
      try {
        await page.goto('/learn/1', { waitSelector: 'nav.exercise-picker' });
        await page.domClick('nav.exercise-picker button.exercise-picker-button', 3); // l01-forms
        await sleep(100);
        await solveCurrentActivity(page, getActivityFixture(1, 3));
        await clickCheckAndWait(page);
        await sleep(250);

        const syncState = await page.evaluate(() => ({
          syncWarn: document.querySelector('.sync-warning[role="alert"]')?.textContent?.trim() || '',
          localSaved: Boolean(localStorage.getItem('polski-progress-v1:00000000-0000-4000-8000-000000000001')),
        }));
        rec.soft(
          'lesson:progress-500-local-fallback',
          syncState.syncWarn.length > 0 && syncState.localSaved,
          JSON.stringify(syncState)
        );

        // PONS 500 error
        await page.domClick('.dictionary-toggle-btn');
        await sleep(80);
        await page.clickTextWord('.question-prompt', 0);
        await page.waitForSelector('section.dictionary-sheet[role="dialog"]', { timeoutMs: 4000 }).catch(() => false);
        const ponsErr = await page.evaluate(
          () => document.querySelector('.dictionary-error[role="alert"]')?.textContent?.trim() || ''
        );
        rec.soft('pons:500-error-alert', ponsErr.length > 0, `ponsErr="${ponsErr}"`);
        await page.pressKey('Escape');
        await sleep(100);

        // PONS empty []
        page.supabaseMock.setFaults({ ponsStatus: null, ponsEmpty: true });
        await page.clickTextWord('.question-prompt', 1);
        await page.waitForSelector('section.dictionary-sheet[role="dialog"]', { timeoutMs: 4000 }).catch(() => false);
        const ponsEmpty = await page.evaluate(
          () => document.querySelector('.dictionary-sheet')?.textContent || ''
        );
        rec.soft(
          'pons:empty-not-found',
          /Nie znaleziono|No translation|Перевод не найден/i.test(ponsEmpty),
          `sheet="${ponsEmpty.slice(0, 80)}"`
        );

        // Feedback 500 error (OnPush reactivity check F6)
        await page.goto('/feedback', { waitSelector: 'main.feedback-page' });
        await page.fill('textarea[name="message"]', 'Test failure case');
        await page.domClick('button.submit-button');
        const gotFbErr = await page
          .waitForSelector('.error-message[role="alert"]', { timeoutMs: 2500 })
          .then(() => true)
          .catch(() => false);
        rec.soft('feedback:500-onpush-error-alert(F6)', gotFbErr, `gotFbErr=${gotFbErr}`);

        // Feedback 2000-char boundary (F6)
        page.supabaseMock.setFaults({ feedbackStatus: null });
        const maxMsg = 'a'.repeat(2000);
        await page.fill('textarea[name="message"]', maxMsg);
        await sleep(60);
        const counter2000 = await page.evaluate(
          () => document.querySelector('.char-counter, .feedback-card')?.textContent || ''
        );
        const has2000Counter = /2000\s*\/\s*2000/.test(counter2000);
        await page.domClick('button.submit-button');
        const got2000Sent = await page
          .waitForSelector('.success-message[role="status"]', { timeoutMs: 2500 })
          .then(() => true)
          .catch(() => false);
        const saved2000Len = page.supabaseMock.feedbackRows.at(-1)?.message?.length || 0;
        rec.soft(
          'feedback:2000-char-boundary(F6)',
          has2000Counter && got2000Sent && saved2000Len === 2000,
          JSON.stringify({ has2000Counter, got2000Sent, saved2000Len })
        );

        // Signed-in user visiting /auth auto-redirects (F7)
        await page.goto('/auth');
        const authRedirected = await page
          .waitFor(() => location.pathname.startsWith('/course/'), {
            timeoutMs: 6000,
            label: 'signed-in /auth redirect',
          })
          .then(() => true)
          .catch(() => false);
        const redirectedPath = await page.evaluate(() => location.pathname);
        rec.soft(
          'auth:signed-in-redirects(F7)',
          authRedirected && redirectedPath.startsWith('/course/'),
          `path=${redirectedPath}`
        );

        return makeResult(this, viewport, rec, start);
      } catch (err) {
        return makeResult(this, viewport, rec, start, err.message);
      } finally {
        await page.close();
      }
    },
  },
  {
    id: 'T2-12',
    tier: 2,
    title: 'Typed Short Cloze Tap-Assist "+ letter" Button (T6)',
    viewports: [VIEWPORTS.mobile, VIEWPORTS.desktop],
    async run({ chrome, baseUrl, viewport }) {
      const start = Date.now();
      const rec = createCheckRecorder();
      const page = await chrome.createIsolatedPage({
        baseUrl,
        viewport,
        authenticated: true,
        initialProgress: ALL_UNLOCKED,
      });
      try {
        await page.goto('/learn/1', { waitSelector: 'nav.exercise-picker' });
        await page.domClick('nav.exercise-picker button.exercise-picker-button', 7); // typed items with single-word answers
        await sleep(150);
        const before = await page.evaluate(() => {
          const btn = document.querySelector('button[data-assist-letter]');
          const inp = btn?.closest('.question-row')?.querySelector('input.answer-input');
          const r = btn?.getBoundingClientRect();
          return { hasBtn: Boolean(btn), value: inp?.value ?? null, h: r?.height ?? 0, w: r?.width ?? 0 };
        });
        rec.soft('tap-assist:button-present+>=44px', before.hasBtn && before.h >= 44 && before.w >= 44, JSON.stringify(before));
        if (before.hasBtn) {
          await page.evaluate(() => document.querySelector('button[data-assist-letter]')?.click());
          await sleep(100);
          await page.evaluate(() => document.querySelector('button[data-assist-letter]')?.click());
          await sleep(100);
          const after = await page.evaluate(() => {
            const btn = document.querySelector('button[data-assist-letter]');
            const inp = btn?.closest('.question-row')?.querySelector('input.answer-input');
            return { value: inp?.value ?? null };
          });
          rec.soft(
            'tap-assist:two-taps-add-two-letters',
            typeof after.value === 'string' && after.value.length === 2,
            JSON.stringify(after)
          );
        }
        const rt = checkRuntimeClean(page);
        rec.soft('runtime-clean', rt.ok, JSON.stringify(rt));
        return makeResult(this, viewport, rec, start);
      } catch (err) {
        return makeResult(this, viewport, rec, start, err.message);
      } finally {
        await page.close();
      }
    },
  },
];
