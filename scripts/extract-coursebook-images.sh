#!/usr/bin/env bash
# Extract illustrations/photos from the coursebook PDF with pdfimages (lossless),
# drop icons, shadows, backgrounds and duplicates, sort by lesson.
# Output: web/public/assets/coursebook/lessonNN/pPPP-NNN.{jpg,png} + manifest.jsonl
set -euo pipefail
cd "$(dirname "$0")/.."

PDF="../assets/Krok po Kroku_Podręcznik _1.pdf"
OUT="web/public/assets/coursebook"
MIN_SIDE=${MIN_SIDE:-150}    # px; smaller = icons
MIN_COLORS=${MIN_COLORS:-1000} # fewer = flat shadows/masks
MIN_SD=${MIN_SD:-0.12}       # lower = near-uniform backgrounds

# lesson start pages (pdf page), from docs/platform-content/coursebook-exercises.jsonl
STARTS=(2 7 16 23 29 35 41 47 53 59 65 73 79 87 93 101 107 113 119 125 131 139 145 153 161 167)
lesson_of() { local p=$1 l=0 i; for i in "${!STARTS[@]}"; do (( p >= STARTS[i] )) && l=$((i+1)); done; printf '%02d' "$l"; }

TMP=$(mktemp -d); trap 'rm -rf "$TMP" "$TMP.seen"' EXIT
rm -rf "$OUT"; mkdir -p "$OUT"
: > "$OUT/manifest.jsonl"
: > "$TMP.seen"
pages=$(pdfinfo "$PDF" | awk '/^Pages:/{print $2}')

for ((p=1; p<=pages; p++)); do
  rm -f "$TMP"/*
  pdfimages -all -f "$p" -l "$p" "$PDF" "$TMP/i" 2>/dev/null || true
  for f in "$TMP"/i-*; do
    [[ -e $f ]] || continue
    ext=${f##*.}
    [[ $ext == jpg || $ext == png ]] || { magick "$f" "${f%.*}.png" 2>/dev/null && rm "$f" && f="${f%.*}.png" && ext=png; } || continue
    read -r w h k sd < <(magick identify -format '%w %h %k %[fx:standard_deviation]\n' "$f[0]" 2>/dev/null) || continue
    (( w >= MIN_SIDE && h >= MIN_SIDE && k >= MIN_COLORS )) || continue
    awk -v s="$sd" -v m="$MIN_SD" 'BEGIN{exit !(s>=m)}' || continue
    sum=$(md5 -q "$f"); grep -qx "$sum" "$TMP.seen" && continue; echo "$sum" >> "$TMP.seen"
    n=${f##*/i-}; n=${n%.*}
    les=$(lesson_of "$p"); dir="$OUT/lesson$les"; mkdir -p "$dir"
    name=$(printf 'p%03d-%s.%s' "$p" "$n" "$ext")
    cp "$f" "$dir/$name"
    printf '{"lesson_id":%d,"pdf_page":%d,"file":"assets/coursebook/lesson%s/%s","width":%d,"height":%d}\n' \
      "$((10#$les))" "$p" "$les" "$name" "$w" "$h" >> "$OUT/manifest.jsonl"
  done
done
echo "done: $(wc -l < "$OUT/manifest.jsonl") images -> $OUT"
