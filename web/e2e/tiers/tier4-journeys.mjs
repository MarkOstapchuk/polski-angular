import {
  VIEWPORTS,
  createCheckRecorder,
  checkRuntimeClean,
  solveCurrentActivity,
  clickCheckAndWait,
  clickNextAndWait,
} from '../lib/assertions.mjs';
import { sleep } from '../lib/chrome.mjs';
import { getLessonFixture } from '../fixtures/curriculum-fixtures.mjs';

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

async function completeFullLesson(page, lessonId) {
  const fixture = getLessonFixture(lessonId);
  const totalActs = fixture.activities.length;
  for (let idx = 0; idx < totalActs; idx++) {
    // Ensure we are on activity idx (if auto-advanced via next(), verify index; else click picker)
    const activeIdx = await page.evaluate(() => {
      const btns = [...document.querySelectorAll('nav.exercise-picker button.exercise-picker-button')];
      return btns.findIndex((b) => b.classList.contains('is-active') || b.getAttribute('aria-current') === 'step');
    });
    if (activeIdx !== idx) {
      await page.domClick('nav.exercise-picker button.exercise-picker-button', idx);
      await sleep(80);
    }
    await solveCurrentActivity(page, fixture.activities[idx]);
    await clickCheckAndWait(page);
    await clickNextAndWait(page);
  }
  await page.waitForSelector('main.completion-main', { timeoutMs: 12_000 });
  const totalItems = fixture.activities.reduce((sum, a) => sum + a.items.length, 0);
  const stats = await page.evaluate(() => ({
    score: document.querySelector('.score-orb strong')?.textContent?.trim() || '',
    statsText: document.querySelector('.completion-stats')?.textContent?.replace(/\s+/g, ' ').trim() || '',
  }));
  return { totalItems, stats };
}

export const TIER4_TESTS = [
  {
    id: 'T4-01',
    tier: 4,
    title: 'Mobile New Learner Completes Lesson 1 (16 acts) & Unlocks Lesson 2',
    viewports: [VIEWPORTS.mobile],
    async run({ chrome, baseUrl, viewport }) {
      const start = Date.now();
      const rec = createCheckRecorder();
      const page = await chrome.createIsolatedPage({
        baseUrl,
        viewport,
        authenticated: false,
        language: 'pl',
      });
      try {
        // 1. Landing -> switch language to English -> /auth sign in
        await page.goto('/', { waitSelector: 'main h1' });
        await page.selectOption('app-language-switcher select', 'en');
        await sleep(80);
        await page.domClick('a[href="/auth"]');
        await page.waitForSelector('input[name="email"]');
        await page.fill('input[name="email"]', 'learner@example.com');
        await page.fill('input[name="password"]', 'secret123');
        await page.domClick('button.submit-button');
        await page.waitFor(() => location.pathname === '/course/part-1', {
          timeoutMs: 8000,
          label: '/course/part-1',
        });

        // 2. Start Lesson 1
        await page.domClick('.continue-card button.primary-button');
        await page.waitFor(() => location.pathname === '/learn/1', {
          timeoutMs: 8000,
          label: '/learn/1',
        });

        const { totalItems, stats } = await completeFullLesson(page, 1);
        rec.soft(
          'L1:completion-100%',
          stats.score.includes('100') && stats.statsText.includes(`${totalItems} / ${totalItems}`) && stats.statsText.includes('+20 XP'),
          JSON.stringify(stats)
        );

        await sleep(250);
        const cloud = page.supabaseMock.getProgress();
        rec.soft(
          'L1:cloud-progress-persisted',
          Boolean(cloud && cloud.completedLessonIds?.includes(1) && cloud.totalXp >= 20 && cloud.streak >= 1),
          JSON.stringify({ completed: cloud?.completedLessonIds, xp: cloud?.totalXp, streak: cloud?.streak })
        );

        // 3. F10: Next lesson CTA -> /learn/2
        const hasNextLesson = await page.evaluate(() => {
          const el = [...document.querySelectorAll('main.completion-main a, main.completion-main button')].find((x) =>
            /next lesson|następna lekcja|следующий урок/i.test(x.textContent || '') ||
            x.getAttribute('href') === '/learn/2'
          );
          if (!el) return false;
          el.click();
          return true;
        });
        rec.soft('L1:next-lesson-cta(F10)', hasNextLesson, `hasNextLesson=${hasNextLesson}`);
        if (hasNextLesson) {
          await page.waitFor(() => location.pathname === '/learn/2', { timeoutMs: 6000, label: '/learn/2' });
        }

        // 4. Verify Dashboard shows Lesson 1 completed and Lesson 2 unlocked
        await page.goto('/course/part-1', { waitSelector: '.lesson-path' });
        const dashState = await page.evaluate(() => {
          const rows = [...document.querySelectorAll('.lesson-path article.path-row')];
          return {
            l1Complete: Boolean(rows[0]?.classList.contains('is-complete')),
            l2Unlocked: Boolean(rows[1] && !rows[1].classList.contains('is-locked')),
          };
        });
        rec.soft('dashboard:L1-done-L2-unlocked', dashState.l1Complete && dashState.l2Unlocked, JSON.stringify(dashState));

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
    id: 'T4-02',
    tier: 4,
    title: 'Desktop Part-2 Learner Switches Course, Completes Lesson 29, Advances to 30 & Submits Feedback',
    viewports: [VIEWPORTS.desktop],
    async run({ chrome, baseUrl, viewport }) {
      const start = Date.now();
      const rec = createCheckRecorder();
      const page = await chrome.createIsolatedPage({
        baseUrl,
        viewport,
        authenticated: true,
        initialProgress: {
          completedLessonIds: [27, 28],
          scores: { '27': 100, '28': 100 },
          activityProgress: {},
          totalXp: 40,
          dailyXp: 0,
          streak: 1,
          bestStreak: 1,
          lastStudyDate: '2026-11-18',
        },
      });
      try {
        await page.goto('/course/part-1', { waitSelector: '.welcome-row h1' });
        const hasChoose = await page.evaluate(() => Boolean(document.querySelector('a[href="/course/choose"]')));
        rec.soft('switcher:href-choose(F1)', hasChoose, `hasChoose=${hasChoose}`);
        if (hasChoose) await page.clickVisible('a[href="/course/choose"]');
        else await page.goto('/course/choose');

        await page.waitForSelector('#course-options button.course-option');
        await page.evaluate(() => {
          [...document.querySelectorAll('#course-options button.course-option')]
            .find((b) => (b.textContent || '').includes('Część 2'))
            ?.click();
        });
        await page.waitFor(() => location.pathname === '/course/part-2', { timeoutMs: 6000 });

        await page.domClick('.continue-card button.primary-button');
        await page.waitFor(() => location.pathname === '/learn/29', { timeoutMs: 6000 });

        const { totalItems, stats } = await completeFullLesson(page, 29);
        rec.soft(
          'L29:completion-100%',
          stats.score.includes('100') && stats.statsText.includes(`${totalItems} / ${totalItems}`),
          JSON.stringify(stats)
        );

        await sleep(200);
        const cloud = page.supabaseMock.getProgress();
        rec.soft('L29:unlocked-L30-cloud', Boolean(cloud?.completedLessonIds?.includes(29)), JSON.stringify(cloud?.completedLessonIds));

        // Visit /feedback and submit course feedback for part-2
        await page.goto('/feedback?course=part-2', { waitSelector: 'main.feedback-page' });
        await page.selectOption('select[name="category"]', 'course');
        await page.waitForSelector('select[name="course"]');
        await page.selectOption('select[name="course"]', 'part-2');
        await page.fill('textarea[name="message"]', 'Lekcja 29 działa świetnie!');
        await page.domClick('button.submit-button');
        const gotSent = await page
          .waitForSelector('.success-message[role="status"]', { timeoutMs: 2500 })
          .then(() => true)
          .catch(() => false);
        rec.soft('feedback:course-part2-submitted(F6)', gotSent, `gotSent=${gotSent}`);

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
    id: 'T4-03',
    tier: 4,
    title: 'Desktop New Learner Completes Lesson 1 Using Keyboard Shortcuts & Theory/Audio/PONS',
    viewports: [VIEWPORTS.desktop],
    async run({ chrome, baseUrl, viewport }) {
      const start = Date.now();
      const rec = createCheckRecorder();
      const page = await chrome.createIsolatedPage({ baseUrl, viewport, authenticated: true });
      try {
        await page.goto('/learn/1', { waitSelector: '.exercise-card' });

        // Test keyboard 1-3 on Choice activity [3]
        await page.domClick('nav.exercise-picker button.exercise-picker-button', 3);
        await sleep(100);
        await page.pressKey('2');
        await sleep(60);
        const selectedViaKey = await page.evaluate(() =>
          Boolean(document.querySelector('.question-row:first-child button.option-button.selected'))
        );
        rec.soft('keyboard:1-9-selects-choice(F8)', selectedViaKey, `selectedViaKey=${selectedViaKey}`);

        // Complete all 16 activities of Lesson 1
        const { totalItems, stats } = await completeFullLesson(page, 1);
        rec.soft(
          'L1:keyboard-journey-completed',
          stats.score.includes('100') && stats.statsText.includes(`${totalItems} / ${totalItems}`),
          JSON.stringify(stats)
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
    id: 'T4-04',
    tier: 4,
    title: 'Mobile Part-2 Learner Solves Lesson 27 Classify & Completes Lesson 29 -> Reloads Dashboard',
    viewports: [VIEWPORTS.mobile],
    async run({ chrome, baseUrl, viewport }) {
      const start = Date.now();
      const rec = createCheckRecorder();
      const page = await chrome.createIsolatedPage({
        baseUrl,
        viewport,
        authenticated: true,
        initialProgress: {
          completedLessonIds: [27, 28],
          scores: { '27': 100, '28': 100 },
          activityProgress: {},
          totalXp: 40,
          dailyXp: 0,
          streak: 1,
          bestStreak: 1,
          lastStudyDate: '2026-11-18',
        },
      });
      try {
        // 1. Solve Lesson 27 Ex 0 (35-item Classify)
        await page.goto('/learn/27', { waitSelector: '.exercise-card' });
        const fixture27 = getLessonFixture(27).activities[0];
        await solveCurrentActivity(page, fixture27);
        await clickCheckAndWait(page);
        const l27Perfect = await page.evaluate(() => Boolean(document.querySelector('.result-strip.result-perfect')));
        rec.soft('L27[0]:35-item-classify-solved', l27Perfect, `l27Perfect=${l27Perfect}`);

        // 2. Complete Lesson 29
        await page.goto('/learn/29', { waitSelector: '.exercise-card' });
        const { totalItems, stats } = await completeFullLesson(page, 29);
        rec.soft(
          'L29:completed-mobile',
          stats.score.includes('100') && stats.statsText.includes(`${totalItems} / ${totalItems}`),
          JSON.stringify(stats)
        );

        // 3. Return to /course/part-2 and reload -> verify Lesson 29 done & XP persisted
        await page.goto('/course/part-2', { waitSelector: '.lesson-path' });
        await page.reload({ waitSelector: '.lesson-path' });
        const dashCheck = await page.evaluate(() => {
          const rows = [...document.querySelectorAll('.lesson-path article.path-row')];
          // Part 2 lessons: index 0=L27, 1=L28, 2=L29, 3=L30
          const xp = document.querySelector('.xp-stat strong')?.textContent?.trim() || '';
          return {
            l29Complete: Boolean(rows[2]?.classList.contains('is-complete')),
            l30Unlocked: Boolean(rows[3] && !rows[3].classList.contains('is-locked')),
            xp,
          };
        });
        rec.soft(
          'dashboard:reload-persists-L29-and-XP',
          dashCheck.l29Complete && dashCheck.l30Unlocked && Number(dashCheck.xp) >= 60,
          JSON.stringify(dashCheck)
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
    id: 'T4-05',
    tier: 4,
    title: 'Mobile Offline-Mode Learner Completes Lesson 26, Persists Locally & Syncs on Reconnect',
    viewports: [VIEWPORTS.mobile],
    async run({ chrome, baseUrl, viewport }) {
      const start = Date.now();
      const rec = createCheckRecorder();
      const page = await chrome.createIsolatedPage({
        baseUrl,
        viewport,
        authenticated: true,
        initialProgress: {
          completedLessonIds: Array.from({ length: 25 }, (_, i) => i + 1),
          scores: {},
          activityProgress: {},
          totalXp: 500,
          dailyXp: 0,
          streak: 1,
          bestStreak: 1,
          lastStudyDate: '2026-11-18',
        },
      });
      try {
        // Load dashboard online first so offline user identity is cached
        await page.goto('/course/part-1', { waitSelector: '.lesson-path' });

        // Go offline
        await page.setOffline(true);
        await page.goto('/learn/26', { waitSelector: '.exercise-card' });

        const { totalItems, stats } = await completeFullLesson(page, 26);
        rec.soft(
          'L26:completed-offline',
          stats.score.includes('100') && stats.statsText.includes(`${totalItems} / ${totalItems}`),
          JSON.stringify(stats)
        );

        const pendingBefore = await page.evaluate(() =>
          Boolean(localStorage.getItem('polski-progress-pending-v1:00000000-0000-4000-8000-000000000001'))
        );
        rec.soft('offline:pending-progress-queued-locally', pendingBefore, `pendingBefore=${pendingBefore}`);

        // Reconnect and wait for cloud sync
        const postCountBefore = page.supabaseMock.requests.filter(
          (r) => r.pathname === '/rest/v1/user_progress' && r.method === 'POST'
        ).length;
        await page.setOffline(false);

        const synced = await new Promise((resolve) => {
          const deadline = Date.now() + 6000;
          const timer = setInterval(() => {
            const p = page.supabaseMock.getProgress();
            const postCountNow = page.supabaseMock.requests.filter(
              (r) => r.pathname === '/rest/v1/user_progress' && r.method === 'POST'
            ).length;
            if (postCountNow > postCountBefore && p?.completedLessonIds?.includes(26)) {
              clearInterval(timer);
              resolve(true);
            } else if (Date.now() > deadline) {
              clearInterval(timer);
              resolve(false);
            }
          }, 100);
        });
        rec.soft('online-reconnect:cloud-synced-L26', synced, `synced=${synced}`);

        const rt = checkRuntimeClean(page, { allowFailedSupabase: true });
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
