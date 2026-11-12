# Platform content package

UTF-8 JSONL records for the scanned workbook and teacher manual, plus workbook audio exercise links. Each line is one JSON object.

## Files

- `workbook-pages.jsonl`: all 113 workbook pages, classified as front matter, exercise pages, answer key, or audio transcripts. Exercise pages are assigned to lessons; OCR text is preserved verbatim as extracted.
- `workbook-lessons.jsonl`: lesson metadata and workbook page refs for all 26 lessons.
- `workbook-key-pages.jsonl`: OCR text for printed key pages 102–108 and paths to their rendered scan images in `docs/verification/workbook-key/`.
- `workbook-answer-index.jsonl`: per-lesson exercise numbers and the answer-key page(s) containing each item. `answer_text_ref` points to the page-level key record; `answer_locator` identifies the visible lesson and numbered marker.
- `workbook-item-review-queue.jsonl`: 339 review records from the reconciled workbook/key index. Each record joins prompt OCR refs, answer-key page/scan refs and an `audio_assets` array. Lessons 1–5 also have item-level normalized prompts and answers here; one source-key anomaly is explicitly flagged. Two audio filename mappings (L12/E12 and L24/E09) remain in the audio inventory but are omitted from this exercise queue by request.
- `workbook-lesson01-content.jsonl` through `workbook-lesson05-content.jsonl`: 80 item-level records with exercise prompts and key answers transcribed and checked against workbook scans pp. 4–21 and answer-key scans pp. 102–103. One printed-key morphology anomaly (L02/E04) is isolated and flagged.
- `workbook-audio-exercises.jsonl`: 88 workbook audio inventory records mapped from explicit `Lxx_cwiczenieN` filenames. The 86 unambiguous mappings are in the queue; the two excluded mappings are documented above.
- `teacher-manual-pages.jsonl`: all 274 pages with raw OCR text and page classifications.
- `teacher-lessons.jsonl`: lesson-level page spans for all 26 teacher-guide sections. Read the page records by `page_refs` to retrieve the teacher text.

## Verification status

The seven answer-key pages were rendered at 180 dpi and visually inspected. For lessons 1–5, all 80 item boundaries and answer strings were checked against workbook scans pp. 4–21 and key scans pp. 102–103; prompt and answer text is in the five `workbook-lessonNN-content.jsonl` files. Audio files are linked by explicit filename (22 tracks across these lessons). Audio speech itself has not been independently transcribed. Image-dependent activities retain a `visual_dependency` field and source-page scan reference. L02/E04 preserves the printed key answer „jesteś” but flags that it conflicts with formal „pan” (expected „jest”); resolve this item before automated grading. Lessons 6–26 remain in page-level OCR/index staging and are not yet transcribed item by item.

Use the rendered answer-key pages as the authority. Do not silently treat raw OCR as approved Polish copy.

## Scan comparison

`workbook-scan-compare.jsonl` and `teacher-scan-compare.jsonl` contain a second OCR pass (150 dpi, alternate page segmentation) for workbook pp. 4–108 and teacher-guide lesson pages, compared to the initial pass. `qa-summary.json` reports agreement and flags pages for visual review. This is a scan-based OCR cross-check, not proofread copy; OCR disagreement is preserved rather than silently resolved. The 7 workbook answer-key scan pages were separately inspected visually.

- `workbook-exercise-index.jsonl`: one record per numbered workbook exercise in the answer key; joins prompt pages, key pages and optional MP3. For lessons 1–5, `content_record_ref` points to the item-level transcription; lessons 6–26 still link only to page-level OCR.
- `coursebook-exercises.jsonl`: exercise blocks segmented from the text-bearing coursebook PDF, with lesson/page/exercise IDs, raw prompt text and any printed audio codes. Each block links to the corresponding teacher-guide lesson pages; teacher answers still require activity-level alignment before autograding.

See `qa-report.md` for counts, OCR agreement, page flags, and the current import-readiness boundary. Lessons 1–5 are item-transcribed and scan-checked, subject to the single flagged L02/E04 key anomaly and the linked visual/audio dependencies. Lessons 6–26 are not approved for learner display or automatic grading until their item text and answers are transcribed and checked.
