import { sleep } from './chrome.mjs';

export const VIEWPORTS = {
  narrowMobile: { width: 320, height: 568, mobile: true, label: '320x568' },
  mobile: { width: 375, height: 812, mobile: true, label: '375x812' },
  tablet: { width: 768, height: 1024, mobile: true, label: '768x1024' },
  desktop: { width: 1280, height: 800, mobile: false, label: '1280x800' },
  wideDesktop: { width: 1440, height: 900, mobile: false, label: '1440x900' },
};

export function createCheckRecorder() {
  const checks = [];
  return {
    checks,
    record(name, passed, detail = '') {
      checks.push({
        name,
        passed: Boolean(passed),
        detail: detail ? String(detail) : '',
      });
      return Boolean(passed);
    },
    assert(name, condition, detail = '') {
      const ok = Boolean(condition);
      checks.push({ name, passed: ok, detail: ok ? '' : String(detail || 'Assertion failed') });
      if (!ok) {
        throw new Error(`${name}: ${detail || 'Assertion failed'}`);
      }
    },
    soft(name, condition, detail = '') {
      const ok = Boolean(condition);
      checks.push({ name, passed: ok, detail: ok ? '' : String(detail || 'Check failed') });
      return ok;
    },
    allPassed() {
      return checks.length > 0 && checks.every((c) => c.passed);
    },
    summaryFailure() {
      const failed = checks.filter((c) => !c.passed);
      return failed.map((c) => `[${c.name}] ${c.detail}`).join(' | ');
    },
  };
}

export async function checkViewportAndOverflow(page) {
  return page.evaluate((expectedWidth) => {
    const innerWidth = window.innerWidth;
    const clientWidth = document.documentElement.clientWidth;
    const scrollWidth = document.documentElement.scrollWidth;
    const overflow = scrollWidth > clientWidth;
    const offenders = [];
    if (overflow) {
      for (const el of document.querySelectorAll('body *')) {
        const rect = el.getBoundingClientRect();
        if (rect.width > 0 && rect.height > 0 && rect.right > clientWidth + 1) {
          const id = el.id ? `#${el.id}` : '';
          const cls =
            typeof el.className === 'string' && el.className.trim()
              ? '.' + el.className.trim().split(/\s+/).slice(0, 2).join('.')
              : '';
          offenders.push(`${el.tagName.toLowerCase()}${id}${cls}(right=${Math.round(rect.right)}>${clientWidth})`);
          if (offenders.length >= 6) break;
        }
      }
    }
    return {
      innerWidth,
      expectedWidth,
      clientWidth,
      scrollWidth,
      widthOk: innerWidth === expectedWidth,
      overflowOk: !overflow,
      offenders,
    };
  }, page.viewport.width);
}

export async function checkTouchTargets(page, minSize = 44) {
  return page.evaluate((minPx) => {
    const isVisible = (el) => {
      const style = getComputedStyle(el);
      if (style.display === 'none' || style.visibility === 'hidden' || style.opacity === '0') {
        return false;
      }
      if (el.closest('[aria-hidden="true"], .visually-hidden')) return false;
      if (el.offsetParent === null && style.position !== 'fixed' && style.position !== 'sticky') {
        return false;
      }
      const rect = el.getBoundingClientRect();
      return rect.width > 0 && rect.height > 0;
    };

    const isInlineProseLink = (el) => {
      if (el.tagName !== 'A') return false;
      if (el.closest('p, li, nav.crumbs, footer, .dictionary-source')) return true;
      return false;
    };

    const violations = [];
    const checkedCount = { total: 0 };
    const selector = 'a, button, input:not([type="hidden"]), select, textarea, [role="button"]';
    for (const el of document.querySelectorAll(selector)) {
      if (el.disabled || el.getAttribute('aria-disabled') === 'true') continue;
      if (!isVisible(el)) continue;
      if (isInlineProseLink(el)) continue;
      checkedCount.total += 1;
      const rect = el.getBoundingClientRect();
      if (rect.width < minPx - 0.5 || rect.height < minPx - 0.5) {
        const id = el.id ? `#${el.id}` : '';
        const cls =
          typeof el.className === 'string' && el.className.trim()
            ? '.' + el.className.trim().split(/\s+/).slice(0, 2).join('.')
            : '';
        const label = (el.getAttribute('aria-label') || el.textContent || '').trim().slice(0, 32);
        violations.push({
          target: `${el.tagName.toLowerCase()}${id}${cls}`,
          label,
          width: Math.round(rect.width * 10) / 10,
          height: Math.round(rect.height * 10) / 10,
        });
      }
    }
    return {
      ok: violations.length === 0,
      checked: checkedCount.total,
      violations,
    };
  }, minSize);
}

export async function checkMinTypography(page, minPx = 12) {
  return page.evaluate((minFontPx) => {
    const ICON_CHARS = new Set([
      '✓', '·', '✦', '✧', '⌂', '▤', '▥', '✎', '↗', '→', '←', '×', '⌄',
      '☀', '◷', '🔥', '♫', '▱', '＋', '⌑', '☺', '•', '↓', '↑',
    ]);
    const violations = [];
    const seen = new Set();
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      const text = node.nodeValue?.trim() || '';
      if (!text) continue;
      if (text.length <= 2 && [...text].every((ch) => ICON_CHARS.has(ch))) continue;
      const el = node.parentElement;
      if (!el || seen.has(el)) continue;
      if (el.closest('[aria-hidden="true"], .visually-hidden, script, style')) continue;
      const style = getComputedStyle(el);
      if (style.display === 'none' || style.visibility === 'hidden') continue;
      const rect = el.getBoundingClientRect();
      if (rect.width <= 1 || rect.height <= 1) continue;
      const fontSize = Number.parseFloat(style.fontSize);
      if (Number.isFinite(fontSize) && fontSize < minFontPx - 0.1) {
        seen.add(el);
        const cls =
          typeof el.className === 'string' && el.className.trim()
            ? '.' + el.className.trim().split(/\s+/).slice(0, 2).join('.')
            : '';
        violations.push({
          element: `${el.tagName.toLowerCase()}${cls}`,
          fontSize: Math.round(fontSize * 10) / 10,
          text: text.slice(0, 36),
        });
      }
    }
    return {
      ok: violations.length === 0,
      violations,
    };
  }, minPx);
}

export async function checkFocusVisibleOnTab(page, maxTabs = 6) {
  for (let i = 0; i < maxTabs; i++) {
    await page.pressKey('Tab');
    const state = await page.evaluate(() => {
      const el = document.activeElement;
      if (!el || el === document.body || el === document.documentElement) {
        return { focused: false };
      }
      const style = getComputedStyle(el);
      const hasOutline = style.outlineStyle !== 'none' && Number.parseFloat(style.outlineWidth) > 0;
      const hasShadow = style.boxShadow && style.boxShadow !== 'none';
      const matchesFocusVisible = (() => {
        try {
          return el.matches(':focus-visible');
        } catch {
          return false;
        }
      })();
      return {
        focused: true,
        tag: el.tagName.toLowerCase(),
        cls: typeof el.className === 'string' ? el.className : '',
        matchesFocusVisible,
        hasRing: hasOutline || hasShadow,
        outline: `${style.outlineWidth} ${style.outlineStyle} ${style.outlineColor}`,
        boxShadow: style.boxShadow,
      };
    });
    if (state.focused) {
      return {
        ok: state.matchesFocusVisible && state.hasRing,
        ...state,
      };
    }
  }
  return { ok: false, focused: false, reason: 'No focusable element reached via Tab' };
}

export async function checkImagesLoaded(page) {
  return page.evaluate(() => {
    const broken = [];
    const imgs = [...document.querySelectorAll('img')];
    for (const img of imgs) {
      const style = getComputedStyle(img);
      if (style.display === 'none' || style.visibility === 'hidden') continue;
      if (!img.complete || img.naturalWidth <= 0) {
        broken.push({ src: img.getAttribute('src'), alt: img.getAttribute('alt') });
      }
    }
    return {
      ok: broken.length === 0,
      total: imgs.length,
      broken,
    };
  });
}

export function checkRuntimeClean(page, { allowFailedSupabase = false } = {}) {
  const consoleErrs = [...page.consoleErrors];
  const pageErrs = [...page.pageErrors];
  const logErrs = page.logErrors.filter((entry) => {
    if (allowFailedSupabase && entry.url && entry.url.includes('supabase.co')) return false;
    if (allowFailedSupabase && /ERR_INTERNET_DISCONNECTED|Failed to load resource/i.test(entry.text || '')) {
      return false;
    }
    return true;
  });
  const assetErrs = [...page.failedAssets];
  const ok =
    consoleErrs.length === 0 &&
    pageErrs.length === 0 &&
    logErrs.length === 0 &&
    assetErrs.length === 0;
  return {
    ok,
    consoleErrs,
    pageErrs,
    logErrs,
    assetErrs,
  };
}

export async function runStandardPageChecks(page, recorder, label, { checkFocus = true, minFont = 12 } = {}) {
  const vp = await checkViewportAndOverflow(page);
  recorder.soft(
    `${label}:viewport-width`,
    vp.widthOk,
    `Expected innerWidth=${vp.expectedWidth}, got ${vp.innerWidth}`
  );
  recorder.soft(
    `${label}:no-overflow`,
    vp.overflowOk,
    `scrollWidth ${vp.scrollWidth} > clientWidth ${vp.clientWidth}; offenders: ${vp.offenders.join(', ')}`
  );

  const touch = await checkTouchTargets(page, 44);
  recorder.soft(
    `${label}:touch-targets>=44px`,
    touch.ok,
    `${touch.violations.length} <44px targets: ${touch.violations
      .slice(0, 5)
      .map((v) => `${v.target}("${v.label}")=${v.width}x${v.height}`)
      .join('; ')}`
  );

  const typo = await checkMinTypography(page, minFont);
  recorder.soft(
    `${label}:typography>=${minFont}px`,
    typo.ok,
    `${typo.violations.length} <${minFont}px texts: ${typo.violations
      .slice(0, 5)
      .map((v) => `${v.element}("${v.text}")=${v.fontSize}px`)
      .join('; ')}`
  );

  if (checkFocus && !page.viewport.mobile) {
    const focus = await checkFocusVisibleOnTab(page);
    recorder.soft(
      `${label}:focus-visible`,
      focus.ok,
      `focused=${focus.focused} tag=${focus.tag} matches=${focus.matchesFocusVisible} hasRing=${focus.hasRing} outline=${focus.outline}`
    );
  }

  const imgs = await checkImagesLoaded(page);
  recorder.soft(
    `${label}:images-loaded`,
    imgs.ok,
    `Broken images: ${JSON.stringify(imgs.broken)}`
  );

  const runtime = checkRuntimeClean(page);
  recorder.soft(
    `${label}:no-console-errors`,
    runtime.ok,
    `console=${runtime.consoleErrs.join(';')} page=${runtime.pageErrs.join(';')} log=${JSON.stringify(runtime.logErrs)} assets=${JSON.stringify(runtime.assetErrs)}`
  );
}

/**
 * Normalizes Polish text identically to LessonComponent.normalize() for adaptive matching.
 */
export function normalizePolish(value) {
  const normalized = String(value || '')
    .toLocaleLowerCase('pl-PL')
    .replace(/ł/g, 'l')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim()
    .replace(/\p{P}/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  return /^\d[\d\s]*$/.test(normalized) ? normalized.replace(/\s/g, '') : normalized;
}

/**
 * Adaptive solver for any activity fixture (works on both baseline DOM and M1-M3 upgraded widgets).
 */
export async function solveCurrentActivity(page, activityFixture) {
  const kind = activityFixture.kind;

  if (kind === 'match') {
    for (const item of activityFixture.items) {
      const expected = item.accepted[0];
      const matched = await page.evaluate((itemId, promptText, targetText) => {
        const clean = (s) => (s || '').replace(/\s+/g, ' ').trim();
        const badgeSel = '.match-badge, .pair-badge, .match-unassign, .match-pair-index, [data-pair-badge], .unassign-button';
        const isInCollapsed = (el) => Boolean(el.closest('.match-collapsed, .matched-pairs, .collapsed-matches'));

        // Skip if this item is already paired & collapsed/answered
        const entry = document.querySelector(`[data-item-id="${itemId}"]`);
        if (entry && (entry.classList.contains('is-matched') || entry.querySelector('.match-source.has-answer, .match-unassign, .unassign-button'))) {
          return { ok: true, skipped: 'already-matched-entry' };
        }

        const sources = [...document.querySelectorAll('.match-source')].filter((b) => !isInCollapsed(b));
        const getSrcLabel = (btn) => {
          const clone = btn.cloneNode(true);
          clone.querySelectorAll(`small, ${badgeSel}`).forEach((n) => n.remove());
          return clean(clone.textContent);
        };
        const cleanPrompt = clean(promptText);
        const srcBtn =
          sources.find((btn) => getSrcLabel(btn) === cleanPrompt) ||
          sources.find((btn) => getSrcLabel(btn).includes(cleanPrompt));

        if (!srcBtn) {
          // If no unmatched source exists in active view, check if collapsed/already-matched state is active
          const hasCollapsedOrMatched = Boolean(
            document.querySelector('.match-collapsed, .matched-pairs, .collapsed-matches, [data-matched-item], .match-source.has-answer')
          );
          return { ok: false, hasCollapsedOrMatched, reason: `Source not found: ${promptText}` };
        }
        if (srcBtn.classList.contains('has-answer')) {
          return { ok: true, skipped: 'source-has-answer' };
        }
        srcBtn.scrollIntoView({ block: 'center', behavior: 'instant' });
        srcBtn.click();

        const targets = [...document.querySelectorAll('.match-target')].filter((b) => !isInCollapsed(b));
        const getTgtLabel = (btn) => {
          const clone = btn.cloneNode(true);
          clone.querySelectorAll(badgeSel).forEach((n) => n.remove());
          return clean(clone.textContent);
        };
        const cleanTarget = clean(targetText);
        const tgtBtn =
          targets.find((btn) => getTgtLabel(btn) === cleanTarget) ||
          targets.find((btn) => getTgtLabel(btn).includes(cleanTarget));
        if (!tgtBtn) return { ok: false, reason: `Target not found: ${targetText}` };
        tgtBtn.scrollIntoView({ block: 'center', behavior: 'instant' });
        tgtBtn.click();
        return { ok: true };
      }, item.id, item.prompt, expected);

      if (!matched?.ok) {
        // Check if M2 chunk pagination / collapsed matched sections exist and retry after switching chunk
        const switched = await page.evaluate((promptText) => {
          const clean = (s) => (s || '').replace(/\s+/g, ' ').trim();
          const badgeSel = '.match-badge, .pair-badge, .match-unassign, .match-pair-index, [data-pair-badge], .unassign-button';
          const getSrcLabel = (btn) => {
            const clone = btn.cloneNode(true);
            clone.querySelectorAll(`small, ${badgeSel}`).forEach((n) => n.remove());
            return clean(clone.textContent);
          };
          const cleanPrompt = clean(promptText);
          const chunkBtns = [...document.querySelectorAll('.match-chunk-tab, .match-chunks button, [data-match-chunk]')];
          for (const btn of chunkBtns) {
            btn.click();
            const sources = [...document.querySelectorAll('.match-source')].filter(
              (s) => !s.closest('.match-collapsed, .matched-pairs, .collapsed-matches')
            );
            const found =
              sources.some((s) => getSrcLabel(s) === cleanPrompt) ||
              sources.some((s) => getSrcLabel(s).includes(cleanPrompt));
            if (found) return true;
          }
          return false;
        }, item.prompt);

        if (switched) {
          const chunkRes = await page.evaluate((promptText, targetText) => {
            const clean = (s) => (s || '').replace(/\s+/g, ' ').trim();
            const badgeSel = '.match-badge, .pair-badge, .match-unassign, .match-pair-index, [data-pair-badge], .unassign-button';
            const isInCollapsed = (el) => Boolean(el.closest('.match-collapsed, .matched-pairs, .collapsed-matches'));
            const getSrcLabel = (btn) => {
              const clone = btn.cloneNode(true);
              clone.querySelectorAll(`small, ${badgeSel}`).forEach((n) => n.remove());
              return clean(clone.textContent);
            };
            const getTgtLabel = (btn) => {
              const clone = btn.cloneNode(true);
              clone.querySelectorAll(badgeSel).forEach((n) => n.remove());
              return clean(clone.textContent);
            };
            const cleanPrompt = clean(promptText);
            const cleanTarget = clean(targetText);
            const sources = [...document.querySelectorAll('.match-source')].filter((b) => !isInCollapsed(b));
            const srcBtn =
              sources.find((b) => getSrcLabel(b) === cleanPrompt) ||
              sources.find((b) => getSrcLabel(b).includes(cleanPrompt));
            if (!srcBtn) return { ok: false, reason: `Chunk source not found: ${promptText}` };
            srcBtn.scrollIntoView({ block: 'center', behavior: 'instant' });
            srcBtn.click();
            const targets = [...document.querySelectorAll('.match-target')].filter((b) => !isInCollapsed(b));
            const tgtBtn =
              targets.find((b) => getTgtLabel(b) === cleanTarget) ||
              targets.find((b) => getTgtLabel(b).includes(cleanTarget));
            if (!tgtBtn) return { ok: false, reason: `Chunk target not found: ${targetText}` };
            tgtBtn.scrollIntoView({ block: 'center', behavior: 'instant' });
            tgtBtn.click();
            return { ok: true };
          }, item.prompt, expected);
          if (!chunkRes?.ok) {
            throw new Error(`Match chunk failed on "${item.prompt}" -> "${expected}": ${chunkRes?.reason}`);
          }
        } else if (matched?.hasCollapsedOrMatched) {
          // Item was already paired & moved out of unmatched pool (e.g. collapsed F21 section)
          continue;
        } else {
          throw new Error(`Match failed on "${item.prompt}" -> "${expected}": ${matched?.reason}`);
        }
      }
      await sleep(20);
    }
    return;
  }

  if (kind === 'letter-cloze') {
    for (let idx = 0; idx < activityFixture.items.length; idx++) {
      const item = activityFixture.items[idx];
      const gaps = item.letterCloze?.gaps || [];
      const res = await page.evaluate((rowIndex, expectedGaps) => {
        const rows = [...document.querySelectorAll('.question-row')];
        const row = rows[rowIndex];
        if (!row) return { ok: false, reason: `Row ${rowIndex} not found` };
        const inputs = [...row.querySelectorAll('input.letter-cloze-gap')];
        if (inputs.length !== expectedGaps.length) {
          return {
            ok: false,
            reason: `Row ${rowIndex} expected ${expectedGaps.length} gaps, found ${inputs.length}`,
          };
        }
        const setter = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value')?.set;
        inputs.forEach((inp, gIdx) => {
          inp.focus();
          if (setter) setter.call(inp, expectedGaps[gIdx]);
          else inp.value = expectedGaps[gIdx];
          inp.dispatchEvent(new Event('input', { bubbles: true }));
          inp.dispatchEvent(new Event('change', { bubbles: true }));
        });
        return { ok: true };
      }, idx, gaps);
      if (!res?.ok) throw new Error(res?.reason || `LetterCloze failed on row ${idx}`);
      await sleep(20);
    }
    return;
  }

  if (kind === 'classify') {
    // Check if rendered as classic row list (with >=2 buttons per row) OR M2 Category Deck / Bucket Sorter
    const isPerRowMode = await page.evaluate((expectedLen) => {
      const rows = [...document.querySelectorAll('.question-row')];
      return (
        rows.length === expectedLen &&
        rows.some((r) => r.querySelectorAll('button.option-button, button').length >= 2)
      );
    }, activityFixture.items.length);
    if (isPerRowMode) {
      for (let idx = 0; idx < activityFixture.items.length; idx++) {
        const expected = activityFixture.items[idx].accepted[0];
        const ok = await page.evaluate((rowIndex, expectedOption) => {
          const row = document.querySelectorAll('.question-row')[rowIndex];
          if (!row) return false;
          const btn = [...row.querySelectorAll('button.option-button, button')].find(
            (b) => (b.textContent || '').trim().toLowerCase() === expectedOption.toLowerCase()
          );
          if (!btn) return false;
          btn.scrollIntoView({ block: 'center', behavior: 'instant' });
          btn.click();
          return true;
        }, idx, expected);
        if (!ok) throw new Error(`Classify row ${idx} option "${expected}" not found`);
        await sleep(15);
      }
      return;
    }

    // M2 Category Deck mode (one item at a time or shared bucket bar)
    const cleanText = (s) => String(s || '').replace(/\s+/g, ' ').trim();
    const sortedByLongestPrompt = [...activityFixture.items].sort(
      (a, b) => cleanText(b.prompt).length - cleanText(a.prompt).length
    );

    for (let step = 0; step < activityFixture.items.length; step++) {
      const currentPrompt = await page.evaluate(() => {
        const card = document.querySelector(
          '.classify-card-prompt, .deck-card-prompt, .classify-current, [data-classify-prompt], .question-prompt, .classify-deck h2, .classify-deck strong'
        );
        return (card?.textContent || '').replace(/\s+/g, ' ').trim();
      });
      const cleanCur = cleanText(currentPrompt);
      const item =
        activityFixture.items.find((it) => cleanCur === cleanText(it.prompt)) ||
        activityFixture.items.find((it) => cleanCur.toLowerCase() === cleanText(it.prompt).toLowerCase()) ||
        sortedByLongestPrompt.find((it) => cleanCur.includes(cleanText(it.prompt))) ||
        sortedByLongestPrompt.find((it) => cleanCur.toLowerCase().includes(cleanText(it.prompt).toLowerCase())) ||
        activityFixture.items[step];
      const expected = item.accepted[0];
      const clicked = await page.evaluate((expectedCategory) => {
        const clean = (s) => String(s || '').replace(/\s+/g, ' ').trim();
        const getBtnLabel = (b) => {
          const clone = b.cloneNode(true);
          clone.querySelectorAll('kbd, .key-hint, .shortcut-badge, [data-shortcut], .bucket-count').forEach((n) => n.remove());
          return clean(clone.textContent).toLowerCase();
        };
        const targetLower = clean(expectedCategory).toLowerCase();
        const btns = [
          ...document.querySelectorAll(
            '.classify-buckets button, .category-buckets button, .bucket-list button, button.option-button, [data-category]'
          ),
        ];
        const match =
          btns.find((b) => getBtnLabel(b) === targetLower) ||
          btns.find((b) => getBtnLabel(b).includes(targetLower));
        if (!match) return false;
        match.click();
        return true;
      }, expected);
      if (!clicked) {
        throw new Error(`Classify deck category button not found for "${expected}" (prompt="${currentPrompt}")`);
      }
      await sleep(30);
    }
    return;
  }

  // 'choice' or 'typed' (adaptive across baseline + M2 Choice pills, WordBank, WordOrder, MultiGap, Textarea)
  for (let idx = 0; idx < activityFixture.items.length; idx++) {
    const item = activityFixture.items[idx];
    const expected = item.accepted[0];

    const res = await page.evaluate((rowIndex, expectedVal, acceptedList) => {
      const norm = (v) =>
        String(v || '')
          .toLocaleLowerCase('pl-PL')
          .replace(/ł/g, 'l')
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .trim()
          .replace(/\p{P}/gu, ' ')
          .replace(/\s+/g, ' ')
          .trim();

      const rows = [...document.querySelectorAll('.question-row')];
      const row = rows[rowIndex];
      if (!row) return { ok: false, reason: `Row ${rowIndex} not found (total=${rows.length})` };
      row.scrollIntoView({ block: 'center', behavior: 'instant' });

      // 1. Row-level option buttons (Choice / Disguised Choice F16)
      const optBtns = [...row.querySelectorAll('button.option-button, .option-list button')];
      if (optBtns.length > 0) {
        const match =
          optBtns.find((b) => (b.textContent || '').trim() === expectedVal) ||
          optBtns.find((b) => acceptedList.some((acc) => norm(b.textContent) === norm(acc)));
        if (!match) {
          return {
            ok: false,
            reason: `Option "${expectedVal}" not found in row ${rowIndex} (${optBtns.map((b) => b.textContent.trim()).join(', ')})`,
          };
        }
        match.click();
        return { ok: true, mode: 'choice-button' };
      }

      // 2. Word-order chip builder (F18) inside row
      const wordChips = [
        ...row.querySelectorAll('.word-order-pool button, .word-chips button, [data-word-order-pool] button'),
      ];
      if (wordChips.length > 0) {
        // Click "Type instead" if available? No, test real chip assembly!
        const targetTokens = expectedVal
          .replace(/[.,?!;:"„”()]/g, ' ')
          .trim()
          .split(/\s+/)
          .filter(Boolean);
        const used = new Set();
        for (const tok of targetTokens) {
          const tokNorm = norm(tok);
          const chip = wordChips.find(
            (b, bIdx) => !used.has(bIdx) && !b.disabled && norm(b.textContent) === tokNorm
          );
          if (!chip) {
            // Fallback to "Type instead" input if token mismatch
            const typeInput = row.querySelector('input.answer-input, textarea');
            if (typeInput) {
              const proto =
                typeInput.tagName === 'TEXTAREA'
                  ? HTMLTextAreaElement.prototype
                  : HTMLInputElement.prototype;
              Object.getOwnPropertyDescriptor(proto, 'value')?.set?.call(typeInput, expectedVal);
              typeInput.dispatchEvent(new Event('input', { bubbles: true }));
              return { ok: true, mode: 'word-order-type-fallback' };
            }
            return { ok: false, reason: `WordOrder chip "${tok}" not found in row ${rowIndex}` };
          }
          used.add(wordChips.indexOf(chip));
          chip.click();
        }
        return { ok: true, mode: 'word-order-chips' };
      }

      // 3. Multi-gap split inputs (F17) inside row
      const multiInputs = [
        ...row.querySelectorAll(
          'input:not([type="hidden"]):not([type="checkbox"]):not([type="radio"]):not([readonly]):not(:disabled)'
        ),
      ];
      if (multiInputs.length > 1) {
        const parts = expectedVal.split(/\s*;\s*/);
        const setter = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value')?.set;
        multiInputs.forEach((inp, i) => {
          const val = parts[i] ?? parts[parts.length - 1] ?? '';
          inp.focus();
          if (setter) setter.call(inp, val);
          else inp.value = val;
          inp.dispatchEvent(new Event('input', { bubbles: true }));
          inp.dispatchEvent(new Event('change', { bubbles: true }));
        });
        return { ok: true, mode: 'multi-gap' };
      }

      // 4. Shared WordBank chip pool (F19) at activity level (checked BEFORE generic input/readonly slot!)
      const editableField = row.querySelector(
        'textarea:not([readonly]):not(:disabled), input:not([type="hidden"]):not([readonly]):not(:disabled)'
      );
      const bankPool = [...document.querySelectorAll('.word-bank-pool, .shared-word-bank, [data-word-bank], .word-bank')].find(
        (pool) => getComputedStyle(pool).display !== 'none' && pool.querySelectorAll('button').length > 0
      );
      if (bankPool) {
        const slot = row.querySelector('button.word-slot, .word-bank-slot, input[readonly], [tabindex]') || row;
        slot.click();
        const bankBtns = [...bankPool.querySelectorAll('button')];
        const availableBtns = bankBtns.filter((b) => !b.disabled && !b.classList.contains('is-used'));
        const chip =
          availableBtns.find((b) => (b.textContent || '').trim() === expectedVal) ||
          availableBtns.find((b) => acceptedList.some((acc) => norm(b.textContent) === norm(acc))) ||
          bankBtns.find((b) => (b.textContent || '').trim() === expectedVal) ||
          bankBtns.find((b) => acceptedList.some((acc) => norm(b.textContent) === norm(acc)));
        if (chip) {
          chip.click();
          return { ok: true, mode: 'shared-word-bank' };
        }
        if (!editableField) {
          return { ok: false, reason: `Shared WordBank chip "${expectedVal}" not found` };
        }
      }

      // 5. Single editable textarea (F23) or input (baseline / T6 / T10)
      if (editableField) {
        editableField.focus();
        const proto =
          editableField.tagName === 'TEXTAREA' ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype;
        const setter = Object.getOwnPropertyDescriptor(proto, 'value')?.set;
        if (setter) setter.call(editableField, expectedVal);
        else editableField.value = expectedVal;
        editableField.dispatchEvent(new Event('input', { bubbles: true }));
        editableField.dispatchEvent(new Event('change', { bubbles: true }));
        return { ok: true, mode: editableField.tagName.toLowerCase() };
      }

      return { ok: false, reason: `No interactive control found in row ${rowIndex}` };
    }, idx, expected, item.accepted);

    if (!res?.ok) {
      throw new Error(`Solve failed at ${activityFixture.id}[${idx}] (${item.id}): ${res?.reason}`);
    }
    await sleep(15);
  }
}

export async function checkStickyFooter(page) {
  return page.evaluate(() => {
    const footer = document.querySelector('.exercise-footer');
    const host = document.querySelector('app-lesson-footer');
    const anchor = footer || host;
    if (!anchor) return { exists: false };
    const chain = [];
    let el = anchor;
    let stickyContainer = null;
    while (el && el !== document.body && el !== document.documentElement) {
      const pos = getComputedStyle(el).position;
      const cls =
        typeof el.className === 'string' && el.className.trim()
          ? el.className.trim().split(/\s+/).slice(0, 2).join('.')
          : '';
      const tag = el.tagName.toLowerCase();
      chain.push(`${tag}${cls ? `.${cls}` : ''}:${pos}`);
      if ((pos === 'sticky' || pos === 'fixed') && !stickyContainer) {
        stickyContainer = `${tag}${cls ? `.${cls}` : ''}:${pos}`;
      }
      if (el.classList?.contains('lesson-main')) break;
      el = el.parentElement;
    }
    const countText =
      anchor.querySelector('.answer-count')?.textContent?.trim() ||
      anchor.textContent ||
      '';
    return {
      exists: true,
      isSticky: Boolean(stickyContainer),
      stickyContainer,
      posFooter: footer ? getComputedStyle(footer).position : 'none',
      posHost: host ? getComputedStyle(host).position : 'none',
      chain,
      hasCounter: /\d+\s*\/\s*\d+/.test(countText),
      countText: countText.replace(/\s+/g, ' ').trim().slice(0, 60),
    };
  });
}

export async function clickCheckAndWait(page) {
  await page.waitFor(
    () => {
      const btn = document.querySelector('.exercise-footer button.check-button:not(.next-button)');
      return Boolean(btn && !btn.disabled);
    },
    { timeoutMs: 8000, label: 'enabled check-button' }
  );
  await page.domClick('.exercise-footer button.check-button:not(.next-button)');
  await page.waitFor(
    () => Boolean(document.querySelector('.exercise-footer button.next-button, .exercise-footer .result-strip')),
    { timeoutMs: 8000, label: 'checked result-strip & next-button' }
  );
}

export async function clickNextAndWait(page) {
  const prevTopProgress = await page.evaluate(
    () => document.querySelector('.top-progress small')?.textContent?.trim() || ''
  );
  await page.domClick('.exercise-footer button.next-button');
  await page.waitFor(
    (prev) => {
      if (document.querySelector('main.completion-main')) return true;
      const now = document.querySelector('.top-progress small')?.textContent?.trim() || '';
      const hasCheck = Boolean(document.querySelector('.exercise-footer button.check-button:not(.next-button)'));
      return hasCheck && now !== prev;
    },
    { timeoutMs: 10_000, label: 'next activity or completion screen' },
    prevTopProgress
  );
  await sleep(120);
}
