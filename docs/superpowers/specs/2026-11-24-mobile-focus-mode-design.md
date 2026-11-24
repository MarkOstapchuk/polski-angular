# Mobile Focus Mode ("Duolingo-style") Design Specification

**Date:** 2026-11-24  
**Scope:** `polski-angular/web` (`/learn/:lessonId`)

## 1. Intent & Why

On mobile viewports (`<= 600px`), multi-item lesson exercises render as long vertical lists beneath a tall header (exercise picker, breadcrumb, utility buttons, title, full instruction, source tag). Learners must constantly scroll between questions, virtual keyboards, and the bottom check button, which breaks focus.

Mobile Focus Mode turns eligible multi-item exercises into a **one-card-at-a-time full-screen flow** with immediate per-item checking and feedback, mimicking Duolingo while keeping desktop and listening/context-heavy exercises unchanged.

## 2. Eligibility & Exclusions

**Automatically activates when ALL of the following hold:**
- Viewport width `<= 600px` (`matchMedia('(max-width: 600px)')`)
- Activity has `>= 2` items (`activity.items.length >= 2`)
- Activity has **no audio tracks** (`activityAudioTracks().length === 0`)
- Activity has **no reading passage** (`!activity.readingText`)
- Adapted `uxMode` is one of:
  - `'choice'`
  - `'typed'`
  - `'word-order'`
  - `'multi-gap'`
  - `'prompt-gap'`
  - `'letter-cloze'`

**Remains in existing layout when:**
- Desktop / tablet (`> 600px`)
- Listening exercises (audio track spans the whole item list)
- Reading comprehension exercises (`readingText` present)
- `match` (already chunked board), `word-bank` / `dialogue-order` (shared word bank across items), `classify` (already a single-card deck)
- Single-item activities (`items.length < 2`)
- User taps the **List (`☰`)** toggle to view/edit all items at once

## 3. Architecture (Approach A)

1. **`ExerciseItemViewComponent`** (`pages/lesson/components/exercise-item-view`)
   - Extracted shared single-item renderer supporting `choice`, `typed`, `word-order`, `multi-gap`, `prompt-gap`, `letter-cloze`, inline images with zoom, hints, diacritic accent warnings, and `+ letter` assist.
   - Used by both the classic list view and `MobileFocusDeckComponent` without duplicating exercise markup.
   - Supports `showFeedback` (true in list mode, false in focus mode because feedback renders in the bottom dock) and `focusStyle` (spacious typography for single-card view).

2. **`MobileFocusDeckComponent`** (`pages/lesson/components/mobile-focus-deck`)
   - Full-height (`100dvh`) mobile shell:
     - **Sticky top bar (`54px`):** Back (`×`), item progress bar + `current / total` counter, Dictionary toggle (`📖`), Theory drawer toggle (`📚` when theory exists), and List view toggle (`☰`).
     - **Collapsible context strip:** Single-line button (`ex. X/Y · <instruction> ▾`) expanding to show full title, translated instruction, Latin input hint, and horizontal exercise picker (`1..N`), plus an optional 1-line inline theory trigger.
     - **Centered stage:** Shows either the active `.focus-card` (plus optional retry-round badge and shared image thumbnail strip) or the end-of-activity `.focus-summary-card` with per-item green/red dot grid and a "View as list" action.
     - **Sticky bottom dock:**
       - Before check: full-width **Check** button (enabled once the current item is answered).
       - After check: color-coded feedback panel (correct / expected answer, accent hint, explanation) + full-width **Next →** (or **Summary →** on the last item).
       - On summary: **Fix mistakes** (if any wrong) or **Try again** + **Next** / **See results**.

3. **`LessonComponent` per-item focus state**
   - Manages `isMobileViewport`, `mobileViewOverride` (`'auto' | 'list' | 'cards'`), `focusQueueIds`, `focusIndex`, `focusItemChecked`, `focusItemResults`, `focusSummaryOpen`, and `focusIsRetryRound`.
   - Evaluates each card immediately on check, updates `MistakesService` per item, and persists the complete activity result to `ProgressService` once the final item in the queue is checked.

## 4. Key Edge Cases

- **Reopening a completed exercise:** Opens directly on the focus summary screen so users can review results, fix mistakes, retry, view as list, or advance.
- **Mistake replay ("Fix mistakes"):** Preserves previously correct item results, queues only wrong items with a `"Fixing mistakes · X / Y"` badge, and re-saves the combined activity results at the end of the round.
- **Switching between Cards (`▢`) and List (`☰`) mid-exercise:** All answers stay in `LessonComponent.answers`; switching back to Cards resumes at the first unanswered/unchecked item (or opens summary if the activity was already checked).
- **Theory & Dictionary & Image Lightbox:** Theory drawer renders in a mobile full-screen overlay (`z-index: 10`); dictionary modal and image lightbox (`z-index: 20`) sit above it and work in both modes.
- **Keyboard support:** `Enter` checks the current card, advances to the next card/summary, or moves focus to the next empty gap inside multi-gap/letter-cloze cards; `1–9` keys select options on choice cards.
