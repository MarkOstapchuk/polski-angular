import {
  VIEWPORTS,
  createCheckRecorder,
  checkRuntimeClean,
  solveCurrentActivity,
  clickCheckAndWait,
  clickNextAndWait,
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

export const TIER3_TESTS = [
  {
    id: 'T3-01',
    tier: 3,
    title: 'Course Switcher -> Part 2 -> Lesson 27 -> Progress Reload Persistence (F1)',
    viewports: [VIEWPORTS.mobile, VIEWPORTS.desktop],
    async run({ chrome, baseUrl, viewport }) {
      const start = Date.now();
      const rec = createCheckRecorder();
      const page = await chrome.createIsolatedPage({ baseUrl, viewport, authenticated: true });
      try {
        await page.goto('/course/part-1', { waitSelector: '.welcome-row h1' });
        const hasChooseLink = await page.evaluate(() => Boolean(document.querySelector('a[href="/course/choose"]')));
        rec.soft('flow:course-switcher-href-choose(F1)', hasChooseLink, `hasChooseLink=${hasChooseLink}`);

        if (hasChooseLink) {
          await page.clickVisible('a[href="/course/choose"]');
        } else {
          await page.goto('/course/choose');
        }
        await page.waitForSelector('#course-options button.course-option');
        await page.evaluate(() => {
          const btns = [...document.querySelectorAll('#course-options button.course-option')];
          const p2 = btns.find((b) => (b.textContent || '').includes('Część 2'));
          p2?.click();
        });
        await page.waitFor(() => location.pathname === '/course/part-2', {
          timeoutMs: 6000,
          label: '/course/part-2',
        });

        await page.domClick('.continue-card button.primary-button');
        await page.waitFor(() => location.pathname === '/learn/27', {
          timeoutMs: 6000,
          label: '/learn/27',
        });

        await page.domClick('nav.exercise-picker button.exercise-picker-button', 2);
        await sleep(100);
        const fixture = getActivityFixture(27, 2);
        await solveCurrentActivity(page, fixture);
        await clickCheckAndWait(page);
        await sleep(250);

        const cloudSaved = Boolean(page.supabaseMock.getProgress()?.activityProgress?.['27:p2-l01-e03']);
        rec.soft('flow:cloud-progress-saved', cloudSaved, `cloudSaved=${cloudSaved}`);

        // Reload page and confirm persistence from cloud mock
        await page.reload({ waitSelector: 'nav.exercise-picker' });
        const pickerComplete = await page.evaluate(() => {
          const btn = document.querySelectorAll('nav.exercise-picker button.exercise-picker-button')[2];
          return Boolean(btn && btn.classList.contains('is-complete'));
        });
        rec.soft('flow:reload-restores-complete-badge', pickerComplete, `pickerComplete=${pickerComplete}`);

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
    id: 'T3-02',
    tier: 3,
    title: 'Check Wrong -> Retry Wrong -> Fix -> Next & Scroll-to-Top (F10)',
    viewports: [VIEWPORTS.mobile, VIEWPORTS.desktop],
    async run({ chrome, baseUrl, viewport }) {
      const start = Date.now();
      const rec = createCheckRecorder();
      const page = await chrome.createIsolatedPage({ baseUrl, viewport, authenticated: true });
      try {
        await page.goto('/learn/1', { waitSelector: 'nav.exercise-picker' });
        await page.domClick('nav.exercise-picker button.exercise-picker-button', 3); // l01-forms (7 items)
        await sleep(100);

        const fixture = getActivityFixture(1, 3);
        await solveCurrentActivity(page, fixture);
        // Intentionally break item 0
        await page.evaluate((wrongOpt) => {
          const row0 = document.querySelectorAll('.question-row')[0];
          const wrongBtn = [...(row0?.querySelectorAll('button.option-button') || [])].find(
            (b) => (b.textContent || '').trim() !== wrongOpt
          );
          wrongBtn?.click();
        }, fixture.items[0].accepted[0]);
        await clickCheckAndWait(page);

        const hasRetry = await page.evaluate(() => {
          const btns = [...document.querySelectorAll('.exercise-footer button')];
          return btns.find((b) => /popraw|retry|исправ|jeszcze raz/i.test(b.textContent || ''))?.textContent?.trim() || null;
        });
        rec.soft('retry:button-visible-after-mistake(F10)', Boolean(hasRetry), `retryButton=${hasRetry}`);

        if (hasRetry) {
          await page.evaluate(() => {
            const btns = [...document.querySelectorAll('.exercise-footer button')];
            const retry = btns.find((b) => /popraw|retry|исправ|jeszcze raz/i.test(b.textContent || ''));
            retry?.click();
          });
          await sleep(100);
          // Fix item 0
          await page.evaluate((rightOpt) => {
            const row0 = document.querySelectorAll('.question-row')[0];
            const btn = [...(row0?.querySelectorAll('button.option-button') || [])].find(
              (b) => (b.textContent || '').trim() === rightOpt
            );
            btn?.click();
          }, fixture.items[0].accepted[0]);
          await clickCheckAndWait(page);
          const nowPerfect = await page.evaluate(() => Boolean(document.querySelector('.result-strip.result-perfect')));
          rec.soft('retry:fixed-to-100%(F10)', nowPerfect, `nowPerfect=${nowPerfect}`);
        }

        // Scroll down and click Next -> should scroll back to top
        await page.evaluate(() => window.scrollTo(0, 600));
        await sleep(80);
        await clickNextAndWait(page);
        await sleep(450);
        const scrollY = await page.evaluate(() => window.scrollY);
        rec.soft('next:scrolls-to-top(F10)', scrollY < 60, `scrollY=${scrollY}`);

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
    id: 'T3-03',
    tier: 3,
    title: 'Theory Drawer + Audio 0.75x/-5s + Image Lightbox + PONS Esc (F11-F13)',
    viewports: [VIEWPORTS.mobile, VIEWPORTS.desktop],
    async run({ chrome, baseUrl, viewport }) {
      const start = Date.now();
      const rec = createCheckRecorder();
      const page = await chrome.createIsolatedPage({ baseUrl, viewport, authenticated: true });
      try {
        await page.goto('/learn/1', { waitSelector: '.exercise-card' });

        // Image lightbox on Ex 0
        await page.domClick('.image-strip img, img.question-image');
        await sleep(100);
        const lbOpen = await page.evaluate(() => Boolean(document.querySelector('[role="dialog"] img, .lightbox img')));
        rec.soft('media:lightbox-opens(F12)', lbOpen, `lbOpen=${lbOpen}`);
        if (lbOpen) {
          await page.pressKey('Escape');
          await sleep(100);
          const lbClosed = await page.evaluate(() => !document.querySelector('[role="dialog"] img, .lightbox img'));
          rec.soft('media:lightbox-esc-closes(F12)', lbClosed, `lbClosed=${lbClosed}`);
        }

        // Switch to Ex 1 (has audio)
        await page.domClick('nav.exercise-picker button.exercise-picker-button', 1);
        await sleep(120);

        // Theory toggleable on Ex 1 (F11)
        const theoryBtnSel = '.theory-toggle-btn, .theory-toggle, button[aria-controls*="theory"], section.lesson-theory button';
        const hasTheoryBtn = await page.evaluate((sel) => Boolean(document.querySelector(sel)), theoryBtnSel);
        if (hasTheoryBtn) {
          const already = await page.evaluate(() => Boolean(document.querySelector('section.lesson-theory')));
          if (!already) {
            await page.domClick(theoryBtnSel);
            await sleep(80);
          }
        }
        const theoryVisible = await page.evaluate(() => Boolean(document.querySelector('section.lesson-theory .theory-grid')));
        rec.soft('theory:toggle-on-ex1(F11)', hasTheoryBtn && theoryVisible, `hasTheoryBtn=${hasTheoryBtn} theoryVisible=${theoryVisible}`);

        // Audio 0.75x speed toggle (F12)
        const audioSel = '.audio-bar button.audio-speed, .audio-panel button';
        const hasAudioBtn = await page.evaluate(() => {
          return [...document.querySelectorAll('.audio-bar button, .audio-panel button')].some((b) =>
            /0\.75|1×|1x/i.test(b.textContent || '')
          );
        });
        let playbackRate = null;
        if (hasAudioBtn) {
          await page.evaluate(() => {
            const btn = [...document.querySelectorAll('.audio-bar button, .audio-panel button')].find((b) =>
              /0\.75|1×|1x/i.test(b.textContent || '')
            );
            btn?.click();
          });
          await sleep(80);
          playbackRate = await page.evaluate(() => document.querySelector('.audio-bar audio, .audio-panel audio')?.playbackRate ?? null);
        }
        rec.soft('audio:0.75x-speed(F12)', hasAudioBtn && playbackRate === 0.75, `hasAudioBtn=${hasAudioBtn} playbackRate=${playbackRate}`);

        // PONS dictionary open & Esc close (F13)
        await page.domClick('.dictionary-toggle-btn');
        await sleep(80);
        await page.clickTextWord('.lesson-heading .instruction, .question-prompt', 0);
        await page.waitForSelector('section.dictionary-sheet[role="dialog"]', { timeoutMs: 4000 }).catch(() => false);
        const ponsOpen = await page.evaluate(() => Boolean(document.querySelector('section.dictionary-sheet[role="dialog"]')));
        rec.soft('pons:opened', ponsOpen, `ponsOpen=${ponsOpen}`);
        if (ponsOpen) {
          await page.pressKey('Escape');
          await sleep(100);
          const ponsClosed = await page.evaluate(() => !document.querySelector('section.dictionary-sheet[role="dialog"]'));
          rec.soft('pons:esc-closed(F13)', ponsClosed, `ponsClosed=${ponsClosed}`);
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
    id: 'T3-04',
    tier: 3,
    title: 'Desktop Keyboard-Only Exercise Flow (1-9, Enter, Arrows, Space) (F8)',
    viewports: [VIEWPORTS.desktop],
    async run({ chrome, baseUrl, viewport }) {
      const start = Date.now();
      const rec = createCheckRecorder();
      const page = await chrome.createIsolatedPage({ baseUrl, viewport, authenticated: true });
      try {
        await page.goto('/learn/1', { waitSelector: 'nav.exercise-picker' });

        // 1-3 option keys on Choice activity L1[3] (l01-forms)
        await page.domClick('nav.exercise-picker button.exercise-picker-button', 3);
        await sleep(120);
        await page.evaluate(() => document.body.focus());
        await page.pressKey('3');
        await sleep(60);
        const choiceSelected = await page.evaluate(() => {
          const row0 = document.querySelector('.question-row:first-child');
          const selBtn = row0?.querySelector('button.option-button.selected');
          return selBtn ? (selBtn.textContent || '').trim() : null;
        });
        rec.soft(
          'keyboard:1-3-selects-choice(F8)',
          choiceSelected === 'nazywa się',
          `selected="${choiceSelected}"`
        );

        // ArrowRight activity navigation (F8) from L1[3] -> L1[4] (l01-audio-cloze)
        await page.evaluate(() => document.body.focus());
        const beforeRight = await page.evaluate(
          () => document.querySelector('.top-progress small')?.textContent?.trim() || ''
        );
        await page.pressKey('ArrowRight');
        await sleep(140);
        const afterRight = await page.evaluate(
          () => document.querySelector('.top-progress small')?.textContent?.trim() || ''
        );
        rec.soft(
          'keyboard:arrow-right-nav(F8)',
          afterRight !== beforeRight && afterRight.startsWith('5'),
          `before=${beforeRight} after=${afterRight}`
        );

        // Space toggles audio play/pause on L1[4] when focus is non-interactive (F8)
        await page.evaluate(() => {
          window.__e2eAudioPlayed = false;
          const a = document.querySelector('audio');
          if (a) {
            a.addEventListener('play', () => {
              window.__e2eAudioPlayed = true;
            }, { once: true });
          }
          document.body.focus();
        });
        await page.pressKey('Space');
        await sleep(150);
        const spaceToggled = await page.evaluate(() => {
          const a = document.querySelector('audio');
          const playBtn = document.querySelector('.audio-play');
          return Boolean(
            window.__e2eAudioPlayed ||
            (a && !a.paused) ||
            playBtn?.getAttribute('aria-pressed') === 'true'
          );
        });
        rec.soft('keyboard:space-audio-toggle(F8)', spaceToggled, `spaceToggled=${spaceToggled}`);
        // Pause audio again if playing
        await page.evaluate(() => {
          const a = document.querySelector('audio');
          if (a && !a.paused) a.pause();
        });

        // L1[4] l01-audio-cloze (5 short typed inputs) + Enter advance/submit
        const answers = ['wolne', 'jest', 'na', 'okno', 'proszę'];
        await page.evaluate(() => {
          document.querySelector('.question-row input.answer-input, .question-row textarea')?.focus();
        });

        for (let i = 0; i < answers.length; i++) {
          await page.fill('.question-row input.answer-input, .question-row textarea', answers[i], i);
          await page.pressKey('Enter');
          await sleep(60);
        }

        // Pressing Enter on the last input (or once more) should NOT dead-end; should either submit or advance focus
        const afterEnter = await page.evaluate(() => ({
          checked: Boolean(document.querySelector('.exercise-footer .result-strip')),
          activeTag: document.activeElement?.tagName?.toLowerCase(),
          activeIndex: [...document.querySelectorAll('.question-row input.answer-input, .question-row textarea')].indexOf(
            document.activeElement
          ),
        }));
        rec.soft(
          'keyboard:enter-no-dead-end(F8)',
          afterEnter.checked || afterEnter.activeIndex !== answers.length - 1,
          `Enter stayed dead-ended on last input: ${JSON.stringify(afterEnter)}`
        );

        // ArrowLeft activity navigation (F8) back to L1[3]
        await page.evaluate(() => document.body.focus());
        await page.pressKey('ArrowLeft');
        await sleep(140);
        const afterLeft = await page.evaluate(
          () => document.querySelector('.top-progress small')?.textContent?.trim() || ''
        );
        rec.soft(
          'keyboard:arrow-left-nav(F8)',
          afterLeft !== afterRight && afterLeft.startsWith('4'),
          `afterRight=${afterRight} afterLeft=${afterLeft}`
        );

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
    id: 'T3-05',
    tier: 3,
    title: '#progress-card Anchor Navigation & Dynamic Feedback Back-Link (F2, F6)',
    viewports: [VIEWPORTS.mobile, VIEWPORTS.desktop],
    async run({ chrome, baseUrl, viewport }) {
      const start = Date.now();
      const rec = createCheckRecorder();
      const page = await chrome.createIsolatedPage({ baseUrl, viewport, authenticated: true });
      try {
        await page.goto('/course/part-2', { waitSelector: '.welcome-row h1' });
        const anchorWorked = await page.evaluate(() => {
          const link = [...document.querySelectorAll('a[href="#progress-card"]')].find(
            (a) => getComputedStyle(a).display !== 'none' && a.getBoundingClientRect().height > 0
          );
          const card = document.querySelector('#progress-card');
          if (!link || !card) return { ok: false, hasLink: Boolean(link), hasCard: Boolean(card) };
          const cardStyle = getComputedStyle(card);
          if (cardStyle.display === 'none') return { ok: false, reason: '#progress-card display:none' };
          link.click();
          card.scrollIntoView();
          const rect = card.getBoundingClientRect();
          return { ok: rect.height > 20, height: rect.height };
        });
        rec.soft('anchor:#progress-card-reachable(F2)', anchorWorked.ok, JSON.stringify(anchorWorked));

        // Navigate to /feedback from part-2
        await page.domClick('a[href^="/feedback"]');
        await page.waitFor(() => location.pathname.startsWith('/feedback'), {
          timeoutMs: 6000,
          label: '/feedback',
        });
        await page.waitForSelector('a.back-link');
        const backHref = await page.evaluate(() => document.querySelector('a.back-link')?.getAttribute('href'));
        rec.soft(
          'feedback:dynamic-back-link-part-2(F6)',
          backHref === '/course/part-2',
          `expected /course/part-2, got ${backHref}`
        );

        await page.domClick('a.back-link');
        await page.waitFor(() => location.pathname === '/course/part-2', {
          timeoutMs: 6000,
          label: 'return to /course/part-2',
        });

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
    id: 'T3-06',
    tier: 3,
    title: 'Lesson Theory Localization (PL / EN have no Russian prose; RU unchanged)',
    viewports: [VIEWPORTS.mobile, VIEWPORTS.desktop],
    async run({ chrome, baseUrl, viewport }) {
      const start = Date.now();
      const rec = createCheckRecorder();
      try {
        for (const lang of ['pl', 'en', 'ru']) {
          const page = await chrome.createIsolatedPage({
            baseUrl,
            viewport,
            authenticated: true,
            language: lang,
            initialProgress: {
              completedLessonIds: Array.from({ length: 48 }, (_, i) => i + 1),
              scores: {},
              activityProgress: {},
              totalXp: 400,
              dailyXp: 0,
              streak: 1,
              bestStreak: 1,
              lastStudyDate: '2026-11-18',
            },
          });
          try {
            for (const lesson of [1, 24, 42]) {
              await page.goto(`/learn/${lesson}`, { waitSelector: 'nav.exercise-picker' });
              const theoryBtnSel = '.theory-toggle-btn, .theory-toggle, button[aria-controls*="theory"]';
              const opened = await page.evaluate(() => Boolean(document.querySelector('section.lesson-theory .theory-grid')));
              if (!opened) {
                await page.domClick(theoryBtnSel);
                await sleep(120);
              }
              const info = await page.evaluate(() => {
                const el = document.querySelector('section.lesson-theory');
                const text = el?.textContent || '';
                return { has: Boolean(el), len: text.length, cyr: (text.match(/[А-Яа-яЁё]/g) || []).length };
              });
              const ok = info.has && info.len > 200 && (lang === 'ru' ? info.cyr > 20 : info.cyr === 0);
              rec.soft(`theory-i18n:${lang}:L${lesson}`, ok, JSON.stringify(info));
              const instrCheck = await page.evaluate(() => {
                const tr = document.querySelector('.instruction-translation');
                const txt = tr?.textContent?.trim() || '';
                return { has: Boolean(tr), txt };
              });
              const instrOk = lang === 'pl' ? !instrCheck.has : (instrCheck.has && instrCheck.txt.startsWith('(') && instrCheck.txt.endsWith(')'));
              rec.soft(`instruction-i18n:${lang}:L${lesson}`, instrOk, JSON.stringify(instrCheck));
            }
          } finally {
            await page.close();
          }
        }
        return makeResult(this, viewport, rec, start);
      } catch (err) {
        return makeResult(this, viewport, rec, start, err.message);
      }
    },
  },
];
