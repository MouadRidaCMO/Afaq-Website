#!/usr/bin/env python3
"""Generate logo-reverse.png (the footer lockup) from logo.png.

The footer sits on --deep-blue, where the logo's navy cap and AFA9 wordmark
disappear. Lifting the navy to white was the first attempt and it read as a
pale smudge; the brand's second colour is gold, so the navy is rotated onto a
gold ramp instead — the cap keeps its shading, the wordmark stays legible, and
the footer matches the gold the rest of the section uses.

logo.png was drawn for a white page, so its edges and letter counters are
baked white. Those pixels are faded out to transparent here, otherwise they
ring the artwork in white fringe once it lands on navy.

Run this whenever logo.png changes:  python3 tools/make-reverse-logo.py
"""

import colorsys
from PIL import Image

GOLD_HUE = 43 / 360.0  # --accent-gold #c9a84c
SRC, DST = "logo.png", "logo-reverse.png"

# logo.png puts the cap left of x=328 and the AFA9 wordmark right of it.
WORDMARK_X = 328


def main() -> None:
    src = Image.open(SRC).convert("RGBA")
    w, h = src.size
    px = src.load()

    out = Image.new("RGBA", (w, h))
    op = out.load()
    fringe = tuple(round(c * 255) for c in colorsys.hls_to_rgb(GOLD_HUE, 0.80, 0.45))

    for y in range(h):
        for x in range(w):
            r, g, b, a = px[x, y]
            if a == 0:
                op[x, y] = (0, 0, 0, 0)
                continue

            if b > r + 25 and b > g + 15:
                # The navy splits into two jobs, matching the footer this
                # replaces: the cap keeps its form as a light silhouette, the
                # AFA9 wordmark carries the brand's gold.
                _, l, s = colorsys.rgb_to_hls(r / 255, g / 255, b / 255)
                if x < WORDMARK_X:
                    nl, ns, hue = min(0.97, 0.66 + 0.55 * l), 0.10, GOLD_HUE
                else:
                    nl, ns, hue = min(0.95, 0.15 + 1.35 * l), max(0.40, min(0.62, s * 0.75)), GOLD_HUE
                nr, ng, nb = colorsys.hls_to_rgb(hue, nl, ns)
                op[x, y] = (round(nr * 255), round(ng * 255), round(nb * 255), a)
                continue

            lum = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255
            if lum > 0.72:
                # Baked-in white ground: fade to transparent, and warm whatever
                # is left so the anti-aliased edge never reads grey.
                k = min(1.0, (lum - 0.72) / 0.24)
                op[x, y] = fringe + (round(a * (1 - k)),)
                continue

            op[x, y] = (r, g, b, a)  # already gold — tassel, rule, tagline

    out.save(DST)
    print(f"wrote {DST} ({w}x{h})")


if __name__ == "__main__":
    main()
