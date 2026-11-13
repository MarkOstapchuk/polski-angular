#!/usr/bin/env python3
"""Cut exercise illustrations out of the scanned workbook.

page -> PNG (pdftoppm) -> Gemini returns bboxes + exercise number -> magick crop.
Usage: scripts/extract-workbook-images.py [first_page [last_page]]
Env: MODEL (default gemini-4-carbon), API (default local rotator), DPI (200), PAD (0.003)
Output: web/public/assets/workbook/lessonNN/pPPP-eEE-N.png + manifest.jsonl
Re-runs skip pages already in the manifest; delete lines to redo pages.
"""
import base64, json, os, re, subprocess, sys, tempfile, urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
PDF = ROOT.parent / "assets/Krok_po_kroku_Zeszyt ćwiczeń_1.pdf"
OUT = ROOT / "web/public/assets/workbook"
PAGES = ROOT / "docs/platform-content/workbook-pages.jsonl"
API = os.environ.get("API", "http://127.0.0.1:8787/v1/chat/completions")
MODEL = os.environ.get("MODEL", "gemini-4-carbon")
DPI = int(os.environ.get("DPI", 200))
PAD = float(os.environ.get("PAD", 0.003))

PROMPT = """This is a scanned page of a Polish language workbook. Exercises are headed "Ćwiczenie N".
Find every illustration that a learner needs to see to do an exercise: drawings, photos, pictograms, maps, picture sequences, clocks, tables made of pictures.
Do NOT include: text, answer lines, headers, the lesson-number tab, page number, small icons next to "Ćwiczenie" (headphones, pencil), audio codes, decorative lines, text-only boxes.
If one exercise has a set of separate small pictures that belong together (e.g. numbered pictures 1-6), return each picture separately, with its printed label if any.
Return ONLY JSON: {"images":[{"exercise":<int or null>,"label":"<printed label near the picture, or empty>","description":"<short, English>","box_2d":[ymin,xmin,ymax,xmax]}]}
box_2d is normalized 0-1000 relative to the full page, tight around the picture. Return {"images":[]} if there are none."""


def ask(png: Path) -> list:
    b64 = base64.b64encode(png.read_bytes()).decode()
    body = {
        "model": MODEL,
        "temperature": 0,
        "messages": [{"role": "user", "content": [
            {"type": "text", "text": PROMPT},
            {"type": "image_url", "image_url": {"url": f"data:image/png;base64,{b64}"}},
        ]}],
    }
    req = urllib.request.Request(API, json.dumps(body).encode(), {
        "content-type": "application/json", "authorization": "Bearer local-proxy"})
    for attempt in range(3):
        try:
            with urllib.request.urlopen(req, timeout=300) as r:
                text = json.load(r)["choices"][0]["message"]["content"] or ""
            m = re.search(r"\{.*\}", text, re.S)
            return json.loads(m.group(0))["images"]
        except Exception as e:  # network hiccup or malformed JSON
            print(f"  retry {attempt + 1}: {e}", file=sys.stderr)
    raise RuntimeError(f"no valid answer for {png.name}")


def main():
    lessons = {}
    for line in PAGES.open():
        r = json.loads(line)
        if r["page_type"] == "exercise_content" and r["lesson_id"]:
            lessons[r["pdf_page"]] = r["lesson_id"]
    pages = sorted(lessons)
    lo = int(sys.argv[1]) if len(sys.argv) > 1 else pages[0]
    hi = int(sys.argv[2]) if len(sys.argv) > 2 else (lo if len(sys.argv) > 1 else pages[-1])

    OUT.mkdir(parents=True, exist_ok=True)
    manifest = OUT / "manifest.jsonl"
    done = {json.loads(l)["pdf_page"] for l in manifest.open()} if manifest.exists() else set()

    with tempfile.TemporaryDirectory() as tmp:
        for p in [p for p in pages if lo <= p <= hi]:
            if p in done:
                continue
            base = Path(tmp) / "pg"
            subprocess.run(["pdftoppm", "-f", str(p), "-l", str(p), "-r", str(DPI), "-gray",
                            "-singlefile", "-png", str(PDF), str(base)], check=True)
            png = base.with_suffix(".png")
            w, h = map(int, subprocess.check_output(
                ["magick", "identify", "-format", "%w %h", str(png)]).split())
            images = ask(png)
            les = lessons[p]
            d = OUT / f"lesson{les:02d}"
            d.mkdir(exist_ok=True)
            recs = []
            for i, im in enumerate(images, 1):
                y0, x0, y1, x1 = im["box_2d"]
                x0, x1 = max(0, x0 / 1000 - PAD), min(1, x1 / 1000 + PAD)
                y0, y1 = max(0, y0 / 1000 - PAD), min(1, y1 / 1000 + PAD)
                cw, ch = int((x1 - x0) * w), int((y1 - y0) * h)
                if cw < 20 or ch < 20:
                    continue
                ex = im.get("exercise")
                name = f"p{p:03d}-e{ex:02d}-{i}.png" if isinstance(ex, int) else f"p{p:03d}-x-{i}.png"
                subprocess.run(["magick", str(png), "-crop", f"{cw}x{ch}+{int(x0 * w)}+{int(y0 * h)}",
                                "+repage", "-trim", "-bordercolor", "white", "-border", "8",
                                str(d / name)], check=True)
                recs.append({"lesson_id": les, "pdf_page": p, "exercise_number": ex,
                             "label": im.get("label", ""), "description": im.get("description", ""),
                             "file": f"assets/workbook/lesson{les:02d}/{name}",
                             "box_2d": im["box_2d"], "model": MODEL})
            with manifest.open("a") as f:
                # page marker so empty pages are not re-queried
                for r in recs or [{"lesson_id": les, "pdf_page": p, "file": None, "model": MODEL}]:
                    f.write(json.dumps(r, ensure_ascii=False) + "\n")
            print(f"p{p}: {len(recs)} images")


if __name__ == "__main__":
    main()
