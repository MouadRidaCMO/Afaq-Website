#!/usr/bin/env python3
"""Regenerate images/share.jpg, the 1200x630 card that WhatsApp, Facebook,
LinkedIn and X show when afaq.study is pasted into a conversation.

    pip install pillow
    python3 tools/share-card.py          # run from the repository root

It crops the hero photograph, washes it in the brand blue, and composites the
lockup and the headline on top. Playfair Display and Inter are fetched from
Google Fonts on first run and cached in .cache/ so the type matches the site
rather than falling back to whatever the machine happens to have installed.

If you change the card, rename the output or hang a query string off the URL in
index.html: WhatsApp and Facebook cache one preview per URL for weeks, so
reusing the name means nobody sees the new artwork.

This file is in .vercelignore and does not ship.
"""

import os
import urllib.request

from PIL import Image, ImageDraw, ImageFont

W, H = 1200, 630
DEEP = (12, 47, 107)      # --deep-blue  #0c2f6b
GOLD = (201, 168, 76)     # --accent-gold #c9a84c
CACHE = ".cache"

FONTS = {
    "playfair.ttf": "https://fonts.gstatic.com/s/playfairdisplay/v40/"
                    "nuFvD-vYSZviVYUb_rj3ij__anPXJzDwcbmjWBN2PKeiunDXbtY.ttf",
    "inter.ttf": "https://fonts.gstatic.com/s/inter/v20/"
                 "UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuGKYAZ9hjQ.ttf",
}


def font(name, size, weight=None):
    os.makedirs(CACHE, exist_ok=True)
    path = os.path.join(CACHE, name)
    if not os.path.exists(path):
        urllib.request.urlretrieve(FONTS[name], path)
    f = ImageFont.truetype(path, size)
    if weight is not None:
        try:
            f.set_variation_by_axes([weight])
        except OSError:
            pass          # static build, already at the weight we want
    return f


# ---- background: cropped from the hero photograph, biased to the faces and
# raised hands at the foot of the frame rather than the empty sky above them.
src = Image.open("images/hero/graduation.jpg").convert("RGB")
sw, sh = src.size
ch = int(sw * H / W)
top = max(0, sh - ch - 40)
bg = src.crop((0, top, sw, top + ch)).resize((W, H), Image.LANCZOS)

# ---- scrim: a blue wash over the whole frame so white type is legible
# anywhere, deepened towards the left where the copy sits.
bg = Image.blend(bg, Image.new("RGB", (W, H), DEEP), 0.47)

grad = Image.new("L", (W, 1))
for x in range(W):
    a = max(0.0, 1.0 - (x / (W - 1)) / 0.78) ** 1.15
    grad.putpixel((x, 0), int(238 * a))
bg = Image.composite(Image.new("RGB", (W, H), DEEP), bg, grad.resize((W, H)))

draw = ImageDraw.Draw(bg)
draw.rectangle([0, H - 6, W, H], fill=GOLD)     # the gold rule the sections use

# ---- lockup and copy
logo = Image.open("logo.png").convert("RGBA")
logo = logo.resize((300, round(300 * logo.height / logo.width)), Image.LANCZOS)
x, y = 76, 116
bg.paste(logo, (x, y), logo)
y += logo.height + 46

draw.text((x, y), "Un Avenir, Sans Limites", font=font("playfair.ttf", 62), fill=(255, 255, 255))
y += 86

body = font("inter.ttf", 25, 400)
draw.text((x, y), "Votre partenaire pour intégrer les meilleures", font=body, fill=(226, 233, 246))
draw.text((x, y + 36), "universités hongroises", font=body, fill=(226, 233, 246))
y += 88

draw.text((x, y), "ÉTUDIER EN HONGRIE  ·  AFAQ.STUDY", font=font("inter.ttf", 21, 600), fill=GOLD)

bg.save("images/share.jpg", "JPEG", quality=88, optimize=True, progressive=True)
print("wrote images/share.jpg", bg.size)
