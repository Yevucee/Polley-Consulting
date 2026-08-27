#!/usr/bin/env bash
# Compress a hero video for GitHub and the site.
# GitHub web upload limit: 25 MB. Git push limit: 100 MB per file.
set -euo pipefail

usage() {
  cat <<'EOF'
Usage: ./scripts/compress-hero-video.sh <input.mp4> [max-megabytes]

Compresses footage for the hero section and writes:
  public/namibia-field.m4v
  public/namibia-poster.png

Examples:
  ./scripts/compress-hero-video.sh ~/Downloads/dji_fly_20260216_175918_0185_1771262160517_video.mp4
  ./scripts/compress-hero-video.sh ./raw-hero.mp4 20

Requires ffmpeg. Default target size is 20 MB (safe for GitHub web upload).
EOF
}

if [[ "${1:-}" == "-h" || "${1:-}" == "--help" || $# -lt 1 ]]; then
  usage
  exit 0
fi

INPUT="$1"
MAX_MB="${2:-20}"

if [[ ! -f "$INPUT" ]]; then
  echo "Input file not found: $INPUT" >&2
  exit 1
fi

if ! command -v ffmpeg >/dev/null 2>&1; then
  echo "ffmpeg is required. Install with: brew install ffmpeg" >&2
  exit 1
fi

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OUT_VIDEO="$ROOT/public/namibia-field.m4v"
OUT_POSTER="$ROOT/public/namibia-poster.png"
TMP_VIDEO="$(mktemp "${TMPDIR:-/tmp}/namibia-hero.XXXXXX.m4v")"

cleanup() {
  rm -f "$TMP_VIDEO"
}
trap cleanup EXIT

MAX_BYTES=$((MAX_MB * 1000 * 1000))

echo "Input:  $INPUT"
echo "Target: ${MAX_MB} MB (GitHub web upload limit is 25 MB)"
echo "Output: $OUT_VIDEO"

ffmpeg -hide_banner -y -i "$INPUT" \
  -an \
  -vf "scale='min(1920,iw)':-2:flags=lanczos" \
  -c:v libx264 \
  -preset slow \
  -pix_fmt yuv420p \
  -movflags +faststart \
  -fs "$MAX_BYTES" \
  "$TMP_VIDEO"

SIZE_BYTES=$(stat -f%z "$TMP_VIDEO" 2>/dev/null || stat -c%s "$TMP_VIDEO")
SIZE_MB=$((SIZE_BYTES / 1000 / 1000))

if (( SIZE_BYTES > 25 * 1000 * 1000 )); then
  echo "Warning: output is ${SIZE_MB} MB, above GitHub's 25 MB web upload limit." >&2
  echo "Push with git from Terminal instead, or rerun with a lower max, e.g. 20." >&2
fi

mv "$TMP_VIDEO" "$OUT_VIDEO"
trap - EXIT

echo "Poster: $OUT_POSTER"
ffmpeg -hide_banner -y -ss 00:00:01 -i "$OUT_VIDEO" -frames:v 1 -update 1 -q:v 2 "$OUT_POSTER"

echo
echo "Done."
echo "  Video:  $OUT_VIDEO (${SIZE_MB} MB)"
echo "  Poster: $OUT_POSTER"
echo
echo "Next:"
echo "  cd \"$ROOT\""
echo "  git add public/namibia-field.m4v public/namibia-poster.png"
echo "  git commit -m \"Replace hero video with higher-quality export\""
echo "  git push"
