import {
  VIEWPORTS,
  createCheckRecorder,
  runStandardPageChecks,
  checkViewportAndOverflow,
  checkTouchTargets,
  checkMinTypography,
  checkStickyFooter,
  checkRuntimeClean,
  solveCurrentActivity,
  clickCheckAndWait,
} from '../lib/assertions.mjs';
import { sleep } from '../lib/chrome.mjs';
import { I18N_EXPECTATIONS, getActivityFixture } from '../fixtures/curriculum-fixtures.mjs';

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

export const TIER1_TESTS = [
  {
    id: 'T1-01',
    tier: 1,
    title: 'S1 Public Home & Static SEO Guides + F4/F8',
    viewports: [VIEWPORTS.mobile, VIEWPORTS.desktop],
    async run({ chrome, baseUrl, viewport }) {
      const start = Date.now();
      const rec = createCheckRecorder();
      const page = await chrome.createIsolatedPage({ baseUrl, viewport, authenticated: false });
      try {
        await page.goto('/', { waitSelector: 'main h1' });
        const homeLinks = await page.evaluate(() => ({
          hasH1: Boolean(document.querySelector('main h1')?.textContent?.trim()),
          hasAuthLink: Boolean(document.querySelector('a[href="/auth"]')),
          hasLetters: Boolean(document.querySelector('a[href="/nauka/polskie-znaki"]')),
          hasCases: Boolean(document.querySelector('a[href="/gramatyka/przypadki"]')),
          hasPhrases: Boolean(document.querySelector('a[href="/slownictwo/podstawowe-zwroty"]')),
        }));
        rec.soft('public-home:landmarks', Object.values(homeLinks).every(Boolean), JSON.stringify(homeLinks));
        await runStandardPageChecks(page, rec, 'public-home');

        // Static SEO landing & guides
        for (const seoRoute of [
          '/seo/index.html',
          '/nauka/polskie-znaki',
          '/gramatyka/przypadki',
          '/slownictwo/podstawowe-zwroty',
        ]) {
          await page.goto(seoRoute, { waitSelector: 'main h1' });
          const seoCheck = await page.evaluate(() => ({
            isStaticHtml: !document.querySelector('app-root'),
            hasH1: Boolean(document.querySelector('main h1')?.textContent?.trim()),
            hasAuthCta: Boolean(document.querySelector('a[href="/auth"], a[href^="/auth?"]')),
          }));
          rec.soft(
            `seo:${seoRoute}:structure`,
            seoCheck.isStaticHtml && seoCheck.hasH1 && seoCheck.hasAuthCta,
            JSON.stringify(seoCheck)
          );
          const vp = await checkViewportAndOverflow(page);
          rec.soft(`seo:${seoRoute}:no-overflow`, vp.overflowOk && vp.widthOk, JSON.stringify(vp));
          const typo = await checkMinTypography(page, 12);
          rec.soft(`seo:${seoRoute}:typography>=12px`, typo.ok, JSON.stringify(typo.violations));
          const touch = await checkTouchTargets(page, 44);
          rec.soft(
            `seo:${seoRoute}:touch-targets>=44px`,
            touch.ok,
            touch.violations.map((v) => `${v.target}=${v.width}x${v.height}`).join(', ')
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

  {
    id: 'T1-02',
    tier: 1,
    title: 'S1-S6 i18n Switching (PL / RU / EN)',
    viewports: [VIEWPORTS.mobile, VIEWPORTS.desktop],
    async run({ chrome, baseUrl, viewport }) {
      const start = Date.now();
      const rec = createCheckRecorder();
      const page = await chrome.createIsolatedPage({
        baseUrl,
        viewport,
        authenticated: true,
        language: 'pl',
      });
      try {
        const screens = [
          { route: '/', wait: 'main h1', textSel: 'main h1', key: 'homeTitle' },
          { route: '/course/part-1', wait: '.welcome-row h1', textSel: 'nav a[routerlink="/feedback"], a[href="/feedback"]', key: 'navFeedback' },
          { route: '/learn/1', wait: '.exercise-footer button.check-button', textSel: '.exercise-footer button.check-button', key: 'lessonCheck' },
          { route: '/feedback', wait: 'main.feedback-page h1', textSel: 'main.feedback-page h1', key: 'feedbackTitle' },
        ];

        for (const scr of screens) {
          await page.goto(scr.route, { waitSelector: scr.wait });
          for (const lang of ['ru', 'en', 'pl']) {
            await page.selectOption('app-language-switcher select', lang);
            await sleep(80);
            const state = await page.evaluate((sel) => ({
              docLang: document.documentElement.lang,
              stored: localStorage.getItem('polski-language'),
              text: (document.querySelector(sel)?.textContent || '').trim(),
            }), scr.textSel);
            const expected = I18N_EXPECTATIONS[lang][scr.key];
            rec.soft(
              `i18n:${scr.route}:${lang}`,
              state.docLang === lang && state.stored === lang && state.text.includes(expected),
              `expected="${expected}" got="${state.text}" docLang=${state.docLang} stored=${state.stored}`
            );
          }
        }

        // Unauthenticated check on /auth
        const authPage = await chrome.createIsolatedPage({
          baseUrl,
          viewport,
          authenticated: false,
          language: 'pl',
        });
        try {
          await authPage.goto('/auth', { waitSelector: '#auth-title' });
          for (const lang of ['ru', 'en', 'pl']) {
            await authPage.selectOption('app-language-switcher select', lang);
            await sleep(80);
            const state = await authPage.evaluate(() => ({
              docLang: document.documentElement.lang,
              stored: localStorage.getItem('polski-language'),
              text: (document.querySelector('#auth-title')?.textContent || '').trim(),
            }));
            const expected = I18N_EXPECTATIONS[lang].authWelcome;
            rec.soft(
              `i18n:/auth:${lang}`,
              state.docLang === lang && state.stored === lang && state.text.includes(expected),
              `expected="${expected}" got="${state.text}"`
            );
          }
          const rtAuth = checkRuntimeClean(authPage);
          rec.soft('auth-runtime-clean', rtAuth.ok, JSON.stringify(rtAuth));
        } finally {
          await authPage.close();
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
    id: 'T1-03',
    tier: 1,
    title: 'S2 Auth Flow, Password Toggle & Layout + F4/F7/F8',
    viewports: [VIEWPORTS.mobile, VIEWPORTS.desktop],
    async run({ chrome, baseUrl, viewport }) {
      const start = Date.now();
      const rec = createCheckRecorder();
      const page = await chrome.createIsolatedPage({ baseUrl, viewport, authenticated: false });
      try {
        // F7: /auth?error=session displays alert
        await page.goto('/auth?error=session', { waitSelector: '#auth-title' });
        const sessionErr = await page.evaluate(
          () => document.querySelector('.error-message[role="alert"]')?.textContent?.trim() || ''
        );
        rec.soft('auth:?error=session-alert(F7)', sessionErr.length > 0, `alert="${sessionErr}"`);

        await page.goto('/auth', { waitSelector: '#auth-title' });
        await runStandardPageChecks(page, rec, 'auth');

        // Toggle sign-in <-> sign-up
        await page.click('.mode-switch button');
        await sleep(60);
        const signUpTitle = await page.evaluate(() => document.querySelector('#auth-title')?.textContent?.trim());
        rec.soft('auth:toggle-signup', signUpTitle === 'Utwórz konto', `got "${signUpTitle}"`);
        await page.click('.mode-switch button');
        await sleep(60);

        // Password visibility toggle (F7)
        const toggleSel = 'button.password-toggle, [data-password-toggle]';
        const toggleExists = await page.evaluate((sel) => Boolean(document.querySelector(sel)), toggleSel);
        let toggleOk = false;
        let toggleDetail = 'toggle button not found';
        if (toggleExists) {
          const before = await page.evaluate(() => document.querySelector('input[name="password"]')?.getAttribute('type'));
          await page.domClick(toggleSel);
          await sleep(80);
          const after = await page.evaluate(() => document.querySelector('input[name="password"]')?.getAttribute('type'));
          await page.domClick(toggleSel);
          await sleep(80);
          const restored = await page.evaluate(() => document.querySelector('input[name="password"]')?.getAttribute('type'));
          toggleOk = before === 'password' && after === 'text' && restored === 'password';
          toggleDetail = JSON.stringify({ before, after, restored });
        }
        rec.soft('auth:password-toggle(F7)', toggleOk, toggleDetail);

        // Header alignment: LanguageSwitcher does not overlap brand
        const headerOverlap = await page.evaluate(() => {
          const brand = document.querySelector('.brand')?.getBoundingClientRect();
          const sw = document.querySelector('app-language-switcher')?.getBoundingClientRect();
          if (!brand || !sw) return { ok: false, reason: 'missing brand or switcher' };
          const overlap = !(brand.right <= sw.left + 1 || sw.right <= brand.left + 1 || brand.bottom <= sw.top + 1 || sw.bottom <= brand.top + 1);
          return { ok: !overlap, brand: { l: brand.left, r: brand.right, t: brand.top, b: brand.bottom }, sw: { l: sw.left, r: sw.right, t: sw.top, b: sw.bottom } };
        });
        rec.soft('auth:header-no-overlap(F7)', headerOverlap.ok, JSON.stringify(headerOverlap));

        // Submit valid credentials -> /course/part-1
        await page.fill('input[name="email"]', 'learner@example.com');
        await page.fill('input[name="password"]', 'secret123');
        await page.domClick('button.submit-button');
        await page.waitFor(() => location.pathname.startsWith('/course/'), {
          timeoutMs: 8000,
          label: 'redirect to /course/part-1',
        });
        const pathNow = await page.evaluate(() => location.pathname);
        rec.soft('auth:login-redirect', pathNow === '/course/part-1', `path=${pathNow}`);

        // F7: Signed-in user visiting /auth auto-redirects to dashboard
        await page.goto('/auth');
        const redirectedWhenSignedIn = await page
          .waitFor(() => location.pathname.startsWith('/course/'), {
            timeoutMs: 6000,
            label: 'signed-in /auth redirect',
          })
          .then(() => true)
          .catch(() => false);
        const pathAfterAuth = await page.evaluate(() => location.pathname);
        rec.soft(
          'auth:signed-in-redirects(F7)',
          redirectedWhenSignedIn && pathAfterAuth.startsWith('/course/'),
          `path=${pathAfterAuth}`
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
    id: 'T1-04',
    tier: 1,
    title: 'S3 Dashboard, Course Switcher, Progress Card & Sign-Out Guard + F1-F5',
    viewports: [VIEWPORTS.mobile, VIEWPORTS.desktop],
    async run({ chrome, baseUrl, viewport }) {
      const start = Date.now();
      const rec = createCheckRecorder();
      const page = await chrome.createIsolatedPage({ baseUrl, viewport, authenticated: true });
      try {
        await page.goto('/course/part-1', { waitSelector: '.welcome-row h1' });
        await runStandardPageChecks(page, rec, 'dashboard');

        // F2: #progress-card visible and reachable on both mobile and desktop
        const progressVisible = await page.evaluate(() => {
          const card = document.querySelector('#progress-card');
          if (!card) return { ok: false, reason: 'missing #progress-card' };
          const style = getComputedStyle(card);
          const rect = card.getBoundingClientRect();
          return {
            ok: style.display !== 'none' && style.visibility !== 'hidden' && rect.height > 20,
            display: style.display,
            height: rect.height,
          };
        });
        rec.soft('dashboard:progress-card-visible(F2)', progressVisible.ok, JSON.stringify(progressVisible));

        // F1: .course-switcher or mobile course switch pill routes to /course/choose
        const switcherCheck = await page.evaluate(() => {
          const candidates = [
            ...document.querySelectorAll('a.course-switcher, a[href="/course/choose"], button.course-switcher'),
          ].filter((el) => getComputedStyle(el).display !== 'none' && el.getBoundingClientRect().height > 0);
          return candidates.map((el) => ({
            tag: el.tagName.toLowerCase(),
            href: el.getAttribute('href'),
            text: el.textContent?.trim(),
          }));
        });
        const chooseTrigger = switcherCheck.find((c) => c.href === '/course/choose');
        rec.soft(
          'dashboard:course-switcher-to-choose(F1)',
          Boolean(chooseTrigger),
          `visible switchers=${JSON.stringify(switcherCheck)}`
        );

        if (chooseTrigger) {
          await page.clickVisible('a[href="/course/choose"]');
          await page.waitForSelector('#course-options button.course-option');
          const courseCount = await page.evaluate(() => document.querySelectorAll('#course-options button.course-option').length);
          rec.soft('dashboard:course-chooser-options', courseCount === 2, `count=${courseCount}`);
          await page.goto('/course/part-1', { waitSelector: '.welcome-row h1' });
        }

        // F5: Nav active state updates on click
        const navProgressSel = viewport.mobile
          ? 'nav.mobile-nav a[href="#progress-card"]'
          : 'nav.side-nav a[href="#progress-card"]';
        await page.clickVisible(navProgressSel);
        await sleep(80);
        const navActiveState = await page.evaluate((isMobile) => {
          const sel = isMobile
            ? 'nav.mobile-nav a[href="#progress-card"]'
            : 'nav.side-nav a[href="#progress-card"]';
          const link = document.querySelector(sel);
          const homeLink = document.querySelector(
            isMobile ? 'nav.mobile-nav a.mobile-nav-item:first-child' : 'nav.side-nav a.nav-link:first-child'
          );
          const activeClass = isMobile ? 'selected' : 'active';
          return {
            progressActive: Boolean(link?.classList.contains(activeClass)),
            homeActive: Boolean(homeLink?.classList.contains(activeClass)),
          };
        }, viewport.mobile);
        rec.soft(
          'dashboard:nav-active-state(F5)',
          navActiveState.progressActive && !navActiveState.homeActive,
          JSON.stringify(navActiveState)
        );

        // F5: Sign-out guard (1st click keeps user on /course/ AND opens confirm dialog; test Cancel & Confirm)
        const signOutSelector = viewport.mobile ? 'nav.mobile-nav button.mobile-nav-item' : 'button.profile-button';
        await page.clickVisible(signOutSelector);
        await sleep(250);
        const afterFirstClick = await page.evaluate(() => ({
          path: location.pathname,
          hasConfirmDialog: Boolean(
            document.querySelector('[role="dialog"], .confirm-dialog, .signout-confirm, [data-confirm-signout]')
          ),
        }));
        rec.soft(
          'dashboard:sign-out-guard(F5)',
          afterFirstClick.path.startsWith('/course/') && afterFirstClick.hasConfirmDialog,
          `Expected to stay on /course/ with confirm dialog open: ${JSON.stringify(afterFirstClick)}`
        );

        if (afterFirstClick.hasConfirmDialog) {
          // Cancel keeps user signed in on /course/
          await page.clickVisible('[role="dialog"] .dialog-btn-secondary, [role="dialog"] .dialog-close');
          await sleep(150);
          const afterCancel = await page.evaluate(() => ({
            path: location.pathname,
            dialogStillOpen: Boolean(document.querySelector('[role="dialog"]')),
          }));
          rec.soft(
            'dashboard:sign-out-cancel(F5)',
            afterCancel.path.startsWith('/course/') && !afterCancel.dialogStillOpen,
            JSON.stringify(afterCancel)
          );

          // Confirm signs out to /auth or /
          await page.clickVisible(signOutSelector);
          await page.waitForSelector('[role="dialog"] .dialog-btn-primary');
          await page.clickVisible('[role="dialog"] .dialog-btn-primary');
          const signedOut = await page
            .waitFor(() => location.pathname === '/auth' || location.pathname === '/', {
              timeoutMs: 6000,
              label: 'sign-out redirect',
            })
            .then(() => true)
            .catch(() => false);
          const signOutPath = await page.evaluate(() => location.pathname);
          rec.soft(
            'dashboard:sign-out-confirm(F5)',
            signedOut && (signOutPath === '/auth' || signOutPath === '/'),
            `path=${signOutPath}`
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

  {
    id: 'T1-05',
    tier: 1,
    title: 'S4 Lesson Shell, Theory, Audio, Lightbox, Footer & Diacritic Bar + F4/F8/F10-F14',
    viewports: [VIEWPORTS.mobile, VIEWPORTS.desktop],
    async run({ chrome, baseUrl, viewport }) {
      const start = Date.now();
      const rec = createCheckRecorder();
      const page = await chrome.createIsolatedPage({ baseUrl, viewport, authenticated: true });
      try {
        await page.goto('/learn/1', { waitSelector: '.exercise-card' });
        await runStandardPageChecks(page, rec, 'lesson-ex0');

        // F11: Collapsible theory on Ex 0 AND accessible on Ex 1+
        const theoryToggleSel = '.theory-toggle-btn, button[aria-controls*="theory"], .theory-toggle, section.lesson-theory button';
        const hasToggleEx0 = await page.evaluate((sel) => Boolean(document.querySelector(sel)), theoryToggleSel);
        if (hasToggleEx0) {
          await page.domClick(theoryToggleSel);
          await sleep(80);
        }
        const theoryOpenEx0 = await page.evaluate(() => Boolean(document.querySelector('section.lesson-theory')));
        rec.soft('lesson:theory-toggle-ex0(F11)', hasToggleEx0 && theoryOpenEx0, `hasToggle=${hasToggleEx0} open=${theoryOpenEx0}`);
        if (hasToggleEx0 && theoryOpenEx0) {
          await page.domClick(theoryToggleSel);
          await sleep(60);
        }

        // F12: Image tap-to-zoom lightbox on Ex 0
        const hasImg = await page.evaluate(() => Boolean(document.querySelector('.image-strip img, img.question-image')));
        if (hasImg) {
          await page.domClick('.image-zoom-button, .image-strip img, img.question-image');
          await sleep(120);
          const lightboxOpen = await page.evaluate(() => {
            const dlg = document.querySelector('[role="dialog"] img, .lightbox img, .image-lightbox img');
            return Boolean(dlg);
          });
          rec.soft('lesson:image-lightbox(F12)', lightboxOpen, `lightboxOpen=${lightboxOpen}`);
          if (lightboxOpen) {
            await page.pressKey('Escape');
            await sleep(80);
          }
        }

        // Switch to Exercise 2 ([1] l01-dialogue-order: audio + typed)
        await page.domClick('nav.exercise-picker button.exercise-picker-button', 1);
        await sleep(150);

        // F11: Theory still accessible on Exercise 2
        const hasToggleEx1 = await page.evaluate((sel) => Boolean(document.querySelector(sel)), theoryToggleSel);
        if (hasToggleEx1) {
          const alreadyOpen = await page.evaluate(() => Boolean(document.querySelector('section.lesson-theory')));
          if (!alreadyOpen) {
            await page.domClick(theoryToggleSel);
            await sleep(80);
          }
        }
        const theoryEx1 = await page.evaluate(() => Boolean(document.querySelector('section.lesson-theory')));
        rec.soft('lesson:theory-accessible-ex1+(F11)', theoryEx1, `theoryOnEx1=${theoryEx1}`);

        // F12: Audio bar has 0.75x and -5s controls
        const audioControls = await page.evaluate(() => {
          const panel = document.querySelector('.audio-bar, .audio-panel, app-lesson-audio-bar');
          if (!panel) return { exists: false };
          const text = panel.textContent || '';
          const buttons = [...panel.querySelectorAll('button')].map((b) => b.textContent?.trim() || '');
          const hasSpeed = buttons.some((t) => /0\.75|1×|1x/i.test(t)) || /0\.75/i.test(text);
          const hasRewind = buttons.some((t) => /-5s|5s|↺/i.test(t));
          return { exists: true, hasSpeed, hasRewind, buttons };
        });
        rec.soft(
          'lesson:audio-speed-rewind(F12)',
          audioControls.exists && audioControls.hasSpeed && audioControls.hasRewind,
          JSON.stringify(audioControls)
        );

        // F10: Sticky footer (including ancestor dock wrapper) + answered count (0 / 4 or x/N)
        const footerCheck = await checkStickyFooter(page);
        rec.soft(
          'lesson:sticky-footer-counter(F10)',
          footerCheck.exists && footerCheck.isSticky && footerCheck.hasCounter,
          JSON.stringify(footerCheck)
        );

        // F10: Jump to unanswered focuses an unanswered input/control
        const hasJumpBtn = await page.evaluate(() => Boolean(document.querySelector('.exercise-footer button.secondary-action')));
        if (hasJumpBtn) {
          await page.evaluate(() => window.scrollTo(0, 0));
          await page.domClick('.exercise-footer button.secondary-action');
          await sleep(80);
          const jumpedFocus = await page.evaluate(() => {
            const active = document.activeElement;
            return Boolean(active && active.closest('.question-row'));
          });
          rec.soft('lesson:jump-to-unanswered(F10)', jumpedFocus, `jumpedFocus=${jumpedFocus}`);
        }

        // F14: Optional ActivityItem.hint toggle if present in activity
        const hasItemHint = await page.evaluate(() => Boolean(document.querySelector('button.hint-toggle')));
        if (hasItemHint) {
          await page.domClick('button.hint-toggle');
          await sleep(60);
          const hintShown = await page.evaluate(() => Boolean(document.querySelector('.item-hint')));
          rec.soft('lesson:item-hint(F14)', hintShown, `hintShown=${hintShown}`);
        }

        // F14: Polish Diacritic Quick-Bar [ą ć ę ł ń ó ś ź ż] inserts at cursor
        const diacritics = await page.evaluate(() => {
          const btns = [...document.querySelectorAll('button')].filter((b) =>
            ['ą', 'ć', 'ę', 'ł', 'ń', 'ó', 'ś', 'ź', 'ż'].includes((b.textContent || '').trim())
          );
          const letters = btns.map((b) => b.textContent.trim());
          const unique = new Set(letters);
          return { count: unique.size, letters: [...unique] };
        });
        rec.soft(
          'lesson:diacritic-bar(F14)',
          diacritics.count === 9,
          `found ${diacritics.count}/9 diacritic buttons: ${diacritics.letters.join(' ')}`
        );

        if (diacritics.count === 9) {
          const typedVal = await page.evaluate(() => {
            const field = document.querySelector('.question-row textarea, .question-row input.answer-input');
            const btn = [...document.querySelectorAll('button')].find((b) => (b.textContent || '').trim() === 'ć');
            if (!field || !btn) return null;
            field.focus();
            btn.click();
            return field.value;
          });
          rec.soft('lesson:diacritic-inserts(F14)', Boolean(typedVal && typedVal.includes('ć')), `value="${typedVal}"`);
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
    id: 'T1-06',
    tier: 1,
    title: 'S5 PONS Dictionary Modal/Sheet & Esc Close + F4/F13',
    viewports: [VIEWPORTS.mobile, VIEWPORTS.desktop],
    async run({ chrome, baseUrl, viewport }) {
      const start = Date.now();
      const rec = createCheckRecorder();
      const page = await chrome.createIsolatedPage({
        baseUrl,
        viewport,
        authenticated: true,
        dictOverrides: {
          nazywa: ['is called', 'named'],
          sekretarka: ['secretary'],
        },
      });
      try {
        await page.goto('/learn/1', { waitSelector: '.exercise-card' });
        // Navigate to [3] l01-forms which has clean Polish prompt words
        await page.domClick('nav.exercise-picker button.exercise-picker-button', 3);
        await sleep(120);

        if (!viewport.mobile) {
          // F13: Desktop discoverable click/icon lookup trigger
          const triggerSel =
            '.dictionary-toggle-btn, .dictionary-trigger, .word-lookup-button, [data-dictionary-trigger], .question-prompt button, button.lookup-word';
          const hasClickTrigger = await page.evaluate((sel) => Boolean(document.querySelector(sel)), triggerSel);
          rec.soft(
            'dictionary:desktop-click-trigger(F13)',
            hasClickTrigger,
            'Expected discoverable desktop dictionary click/icon trigger'
          );
          if (hasClickTrigger) {
            await page.domClick(triggerSel);
            await sleep(80);
            await page.clickTextWord('.question-prompt', 0);
          }
        } else {
          await page.domClick('.dictionary-toggle-btn');
          await sleep(80);
          await page.clickTextWord('.question-prompt', 0);
        }

        await page.waitForSelector('section.dictionary-sheet[role="dialog"]', { timeoutMs: 5000 }).catch(() => false);
        const sheet = await page.evaluate(() => {
          const dlg = document.querySelector('section.dictionary-sheet[role="dialog"]');
          if (!dlg) return { open: false };
          const closeBtn = dlg.querySelector('.dictionary-close');
          const closeRect = closeBtn?.getBoundingClientRect();
          const items = [...dlg.querySelectorAll('.dictionary-translations li')].map((li) => li.textContent?.trim());
          const noOverflow = dlg.scrollWidth <= dlg.clientWidth;
          const smallFonts = [];
          const walker = document.createTreeWalker(dlg, NodeFilter.SHOW_TEXT);
          let node;
          while ((node = walker.nextNode())) {
            const txt = node.nodeValue?.trim() || '';
            if (!txt || txt.length <= 1) continue;
            const el = node.parentElement;
            if (!el) continue;
            const st = getComputedStyle(el);
            if (st.display === 'none' || st.visibility === 'hidden') continue;
            const fs = Number.parseFloat(st.fontSize);
            if (Number.isFinite(fs) && fs < 11.9) {
              smallFonts.push({ tag: el.tagName.toLowerCase(), fontSize: fs, text: txt.slice(0, 24) });
            }
          }
          return {
            open: true,
            title: dlg.querySelector('#dictionary-title')?.textContent?.trim(),
            items,
            closeW: closeRect ? Math.round(closeRect.width) : 0,
            closeH: closeRect ? Math.round(closeRect.height) : 0,
            noOverflow,
            scrollWidth: dlg.scrollWidth,
            clientWidth: dlg.clientWidth,
            smallFonts,
          };
        });
        rec.soft('dictionary:sheet-opens', sheet.open && sheet.items.length > 0, JSON.stringify(sheet));
        rec.soft(
          'dictionary:sheet-no-overflow',
          sheet.open && sheet.noOverflow,
          `scrollWidth=${sheet.scrollWidth} clientWidth=${sheet.clientWidth}`
        );
        rec.soft(
          'dictionary:sheet-typography>=12px',
          sheet.open && sheet.smallFonts.length === 0,
          JSON.stringify(sheet.smallFonts)
        );
        rec.soft(
          'dictionary:close-button>=44px(F4)',
          sheet.open && sheet.closeW >= 44 && sheet.closeH >= 44,
          `close=${sheet.closeW}x${sheet.closeH}`
        );

        if (sheet.open) {
          await page.pressKey('Escape');
          await sleep(120);
          const stillOpen = await page.evaluate(() => Boolean(document.querySelector('section.dictionary-sheet[role="dialog"]')));
          rec.soft('dictionary:esc-closes(F13)', !stillOpen, `stillOpenAfterEsc=${stillOpen}`);
        }

        const ponsCalled = page.supabaseMock.requests.some((r) => r.pathname === '/functions/v1/pons-dictionary');
        rec.soft('dictionary:api-called', ponsCalled, 'Expected POST /functions/v1/pons-dictionary');

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
    id: 'T1-07',
    tier: 1,
    title: 'S6 Feedback Form OnPush Reactivity, Counter & Back-Link + F4/F6',
    viewports: [VIEWPORTS.mobile, VIEWPORTS.desktop],
    async run({ chrome, baseUrl, viewport }) {
      const start = Date.now();
      const rec = createCheckRecorder();
      const page = await chrome.createIsolatedPage({ baseUrl, viewport, authenticated: true });
      try {
        await page.goto('/feedback', { waitSelector: 'main.feedback-page h1' });
        await runStandardPageChecks(page, rec, 'feedback');

        await page.selectOption('select[name="category"]', 'course');
        await page.waitForSelector('select[name="course"]');
        await page.selectOption('select[name="course"]', 'part-2');
        await page.fill('textarea[name="message"]', 'Świetny kurs!');
        await sleep(60);

        // F6: 2000-char counter check
        const counterText = await page.evaluate(() => document.querySelector('.feedback-card')?.textContent || '');
        rec.soft('feedback:char-counter(F6)', /13\s*\/\s*2000/.test(counterText), 'Expected 13 / 2000 counter');

        await page.domClick('button.submit-button');
        // Must render .success-message immediately via OnPush signal without any extra user interaction
        const gotSuccess = await page
          .waitForSelector('.success-message[role="status"]', { timeoutMs: 2500 })
          .then(() => true)
          .catch(() => false);
        rec.soft('feedback:onpush-success-message(F6)', gotSuccess, 'Expected .success-message[role="status"] immediately after submit');

        const rows = page.supabaseMock.feedbackRows;
        rec.soft(
          'feedback:payload-captured',
          rows.length === 1 && rows[0].category === 'course' && rows[0].course_id === 'part-2' && rows[0].message === 'Świetny kurs!',
          JSON.stringify(rows)
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
    id: 'T1-08',
    tier: 1,
    title: 'T1-T10 All 10 Interactive Task Types Smoke',
    viewports: [VIEWPORTS.mobile, VIEWPORTS.desktop],
    async run({ chrome, baseUrl, viewport }) {
      const start = Date.now();
      const rec = createCheckRecorder();
      const page = await chrome.createIsolatedPage({
        baseUrl,
        viewport,
        authenticated: true,
        initialProgress: {
          completedLessonIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          scores: {},
          activityProgress: {},
          totalXp: 200,
          dailyXp: 0,
          streak: 1,
          bestStreak: 1,
          lastStudyDate: '2026-11-18',
        },
      });
      try {
        const cases = [
          { tag: 'T1-Choice', lessonId: 1, actIndex: 3 },
          { tag: 'T2-WordBank', lessonId: 11, actIndex: 1 },
          { tag: 'T3-Classify', lessonId: 3, actIndex: 2 },
          { tag: 'T4-Match', lessonId: 1, actIndex: 14 },
          { tag: 'T5-LetterCloze', lessonId: 1, actIndex: 0 },
          { tag: 'T6-ShortCloze', lessonId: 1, actIndex: 7 },
          { tag: 'T7-DisguisedChoice', lessonId: 5, actIndex: 10 },
          { tag: 'T8-WordOrder', lessonId: 1, actIndex: 12 },
          { tag: 'T9-MultiBlank', lessonId: 4, actIndex: 1 },
          { tag: 'T10-LongText', lessonId: 5, actIndex: 0 },
        ];

        let currentLesson = null;
        for (const c of cases) {
          if (currentLesson !== c.lessonId) {
            await page.goto(`/learn/${c.lessonId}`, { waitSelector: 'nav.exercise-picker' });
            currentLesson = c.lessonId;
          }
          await page.domClick('nav.exercise-picker button.exercise-picker-button', c.actIndex);
          await sleep(100);
          const fixture = getActivityFixture(c.lessonId, c.actIndex);
          await solveCurrentActivity(page, fixture);
          await clickCheckAndWait(page);

          const resultText = await page.evaluate(
            () => document.querySelector('.exercise-footer .result-strip')?.textContent?.trim() || ''
          );
          const isPerfectDom = await page.evaluate(
            (n) => Boolean(document.querySelector('.result-strip.result-perfect')) || (document.querySelector('.result-strip')?.textContent || '').includes(`${n} z ${n}`),
            fixture.items.length
          );
          rec.soft(
            `smoke:${c.tag}(L${c.lessonId}[${c.actIndex}])`,
            isPerfectDom,
            `result="${resultText}" expected ${fixture.items.length}/${fixture.items.length}`
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
