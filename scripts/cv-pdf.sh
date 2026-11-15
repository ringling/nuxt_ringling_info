#!/bin/bash
# Generate the print CV as a PDF, with the phone number added.
# The phone number is never stored in the repo; pass it in via CV_PHONE.
#
#   CV_PHONE="+45 1234 5678" ./scripts/cv-pdf.sh [output.pdf] [base-url]
#
# base-url defaults to the live site; use http://localhost:3000 with `npm run dev`.
set -euo pipefail

out="${1:-Thomas_Ringling_CV.pdf}"
base="${2:-https://www.ringling.info}"
url="$base/cv/print"

if [ -n "${CV_PHONE:-}" ]; then
  url="$url?phone=$(python3 -c 'import sys, urllib.parse; print(urllib.parse.quote(sys.argv[1]))' "$CV_PHONE")"
else
  echo "Note: CV_PHONE not set, the PDF will have no phone number." >&2
fi

browser="$(command -v chromium || command -v google-chrome-stable || command -v google-chrome)"
"$browser" --headless=new --disable-gpu --no-pdf-header-footer \
  --virtual-time-budget=10000 --print-to-pdf="$out" "$url" 2>/dev/null

echo "Wrote $out"
