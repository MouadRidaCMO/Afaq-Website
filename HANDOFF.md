# Handoff

Working notes for whoever picks this up next, human or assistant. Read this
before touching the code; several things here were learned the hard way and are
not obvious from the files.

---

## What this is

Marketing site for **Afaq**, a Moroccan agency placing students into Hungarian
universities. Static HTML/CSS/JS, no build step, no framework.

| | |
|---|---|
| Live | https://afaq.study |
| Repo | github.com/MouadRidaCMO/Afaq-Website |
| Host | Vercel, auto-deploys on push to `main` |
| Contact routing | WhatsApp `+36 70 757 9165` → Aya, and `contact@afaq.study` |
| Application form | Google Form, linked from the contact section |

Owners: **Mouad Rida** (ELTE MSc, Media and Digital Marketing) and **Aya**
(Stipendium Hungaricum holder, studying management in Hungary). There is no
founders section on the site: it existed, and was deliberately removed.

---

## Files

```
index.html      the entire page, French copy lives here as the default
privacy.html    incomplete, see blocked task 11
style.css       ~1600 lines, organised into 19 commented sections
app.js          language switching, mobile menu, scroll reveals, spine progress,
                floating WhatsApp button
robots.txt      allows everything, points at the sitemap
sitemap.xml     one entry, the homepage
vercel.json     cache headers
.vercelignore   keeps source photography out of the deploy
images/
  hero/         graduation.avif + .jpg, the hero background
  share.jpg     1200x630 Open Graph card, see below
  uni/          11 university cards, 800x500, deployed
  services/     6 service cards, 800x500, deployed
  campus/       university originals, NOT deployed
  source/       service photo originals, NOT deployed
favicon.ico     multi-size 16/24/32/48/64, hand-sharpened at small sizes
favicon.png     512px, tab optimised, tassel deliberately trimmed
mark.png        full uncropped cap, used by the footer wordmark
logo.png        the full lockup, header only
```

Page order: hero → universities → scholarship → services → process → why → contact.
Section ids: `universites`, `bourse`, `services`, `process`, `why`, `contact`.

---

## How the three languages work

French is written directly into `index.html`. English and Arabic are override
dictionaries in `app.js` (`T.en`, `T.ar`), keyed by each element's `data-i18n`
attribute. **134 keys currently.**

- A key missing from a dictionary silently falls back to the French in the
  markup. This is deliberate, and it is why `T.en` carries no city names: they
  are identical in both languages.
- `setLang()` swaps `textContent`, so **never put markup inside an element that
  carries `data-i18n`** — it will be destroyed on the first language switch.
- Arabic sets `dir="rtl"` on `<html>`. Use logical properties
  (`inset-inline-start`, `padding-inline`) so layout mirrors for free.
- The Cairo webfont only downloads when someone actually picks Arabic.
- `?lang=en` / `?lang=ar` in the URL forces a language and is shareable; the
  choice also persists in `localStorage`.

**After any content edit, verify no key was orphaned or left untranslated.**
There is a check pattern used throughout the history: parse `data-i18n` values
out of `index.html`, compare against the keys in each dictionary block, and
report missing and orphaned entries in both directions.

---

## Animation system

`app.js` adds `js-reveal` to `<html>` at runtime. All the hiding CSS is gated
behind that class, so **with JavaScript broken or disabled the page renders
fully** rather than sitting at `opacity: 0`. Preserve that property.

- `.reveal` elements fade and rise in via IntersectionObserver, staggered with
  `--reveal-delay`.
- There is a **scroll sweep safety net** alongside the observer.
  IntersectionObserver only fires on *changes* in intersection, so an element
  whose ratio is 0 before and after a fast flick never fires at all and would
  stay invisible forever. The sweep catches those and unhooks itself once
  everything has been revealed. Do not remove it.
- The process section's gold spine (`.steps-fill`) is **scroll-linked**, not a
  one-shot animation: `initStepProgress()` sets its height from scroll position
  every frame. It should grow monotonically from 0 to 100%.
- `prefers-reduced-motion` is honoured and forces everything visible.

---

## Image pipeline

Originals go in `images/campus/` or `images/source/`; both are in
`.vercelignore` and never ship. Processed cards are 800×500, centre-cropped
with a slight upward bias (so rooflines are not clipped), saved progressive
JPEG at q82. The whole deployed set is roughly 2MB.

**The share card is generated, not photographed.** `images/share.jpg` is the
hero photograph cropped to 1200x630 (full width, bottom-biased so the faces and
raised hands survive and the empty sky does not), washed with `--deep-blue` at
47%, a left-to-right gradient under the copy, `logo.png` composited at 300px,
and Playfair Display + Inter pulled from Google Fonts for the type.
`tools/share-card.py` regenerates it (`pip install pillow`, run from the repo
root); `tools/` is in `.vercelignore` and does not ship. If you replace it, **rename the file or add a query
string**: WhatsApp and Facebook cache a preview per URL for weeks, so reusing
the name means nobody sees the new card.

**Environment note: outbound network depends on the session.** Earlier sessions
had no outbound access at all, so images had to be uploaded to the repo by hand
and competitor sites could not be read. The session that added the share card
did reach Google Fonts and pip through the agent proxy, so test before assuming
either way: it is a per-environment network policy, not a missing tool.

---

## Gotchas that have already caused bugs

**Splicing `style.css` by section header is dangerous.** The section order is
*not* the visual order of the page:

```
SERVICES → UNIVERSITIES → SCHOLARSHIP → PROCESS → WHY AFAQ → CTA
```

Slicing "from SERVICES to PROCESS" once silently deleted the entire Universities
and Scholarship stylesheets. The page still looked fine in a screenshot; the
only visible symptom was mobile overflow jumping from 0 to 434px. **After any
CSS splice, assert the section count is unchanged and braces balance.**

**Mobile horizontal overflow is the canary.** Measure
`scrollWidth - clientWidth` at 390px after every layout change. It should be 0.
It has caught two real regressions that screenshots did not.

**Three measurement traps that make working code look broken:**

1. Reading `opacity !== 1` counts elements mid-transition as failures. Staggered
   reveals take up to a second to settle. Check for the `is-visible` class, or
   wait 2s.
2. `scroll-behavior: smooth` is set on `html`, so scripted `scrollTo` animates
   and sampling straight after catches it mid-flight. Inject
   `html{scroll-behavior:auto!important}` before measuring scroll positions.
3. Lazy-loaded images grow the page after load, so an element offset measured
   early is stale by the time you scroll to it. Walk the whole page first to
   settle layout, then re-measure.

**Ampersands.** Playfair Display draws `&` as an ornate Et-ligature that reads
as a bug. A `@font-face` scoped to `unicode-range: U+0026` pulls that one glyph
from a plain grotesque. Do not remove `AmpersandFix` from `--serif-font`.

**Favicon geometry.** The cap artwork is wide (477×403), so icon size is capped
by width, not height, and it already bleeds slightly past the canvas edge. The
tab icon has its tassel trimmed ~20% so the cap can sit low enough to align
with the title text; `mark.png` exists precisely because that trim would show
at footer size. Do not merge the two files back together.

---

## Owner's standing preferences

Learned across the build, worth respecting:

- **No invented numbers.** No "500+ students placed", no fake testimonials, no
  stats bar until real figures exist. This was an explicit decision.
- **No FAQ and no pricing page.** Deliberate: questions should route to WhatsApp
  rather than being answered on the site.
- **No em dashes in body copy.** Fine in titles, not in sentences.
- **"Afaq", never "AFAQ"** in text. The all-caps form only survives inside the
  logo artwork, which cannot be edited here.
- **No pill-with-a-dot badges.** They were removed for looking generically
  AI-generated. Eyebrows are plain letterspaced gold caps.
- Prefers real structural redesign over restyling. A pass that keeps the layout
  and adds easing will be rejected.

---

## Outstanding work

### Done — items 1 to 4, the infrastructure block

Kept here rather than deleted so the numbering below still matches anything
that referenced it.

1. **Share tags.** Done. Open Graph and Twitter card tags in `index.html`,
   pointing at `images/share.jpg` (1200x630). `og:image` is an absolute URL
   because scrapers ignore relative ones. Locale is `fr_FR` with `en_GB` and
   `ar_MA` as alternates.
2. **Meta description.** Done, alongside a `canonical` link and `theme-color`.
   The `og:`/`twitter:` descriptions are a shorter, warmer variant of it.
3. **Floating WhatsApp button.** Done. `.wa-float` at the end of `index.html`,
   styles in the FLOATING WHATSAPP BUTTON section, behaviour in
   `initWhatsAppFloat()`. It appears once the reader is 60% past the hero and
   steps aside while the contact section is on screen, since that already
   carries the same button. The hidden state is gated behind `.js-reveal`, so
   with JavaScript off it is simply always visible. Its label is a text node
   reusing the `cta.whatsapp` key, not an `aria-label`, so it translates and
   still names the link when it collapses to a circle under 600px. The green is
   darkened to #0f7a43: WhatsApp's own #25D366 is 2:1 against white and
   unreadable in daylight.
4. **`sitemap.xml` and `robots.txt`.** Done. One sitemap entry, the homepage.
   `?lang=` variants are not listed: they are switched client side and serve
   identical HTML, so they would be duplicate URLs. `privacy.html` is
   deliberately not disallowed in robots.txt, because a page blocked from
   crawling can never have its own `noindex` read.

**Still to verify by hand, once deployed:** paste `https://afaq.study` into a
WhatsApp chat and confirm the card renders. The Facebook sharing debugger will
force a re-scrape if the old blank preview is cached.

### Polish

5. Convert deployed photos to WebP/AVIF with JPEG fallback. ~2MB → ~1.2MB at
   equal quality. Follow the `image-set()` pattern already used for the hero.
6. Active nav highlighting as sections scroll past.
7. Scroll-to-top button; the page is long.
8. Branded 404 page. Vercel's default currently reads as a broken site.
9. `site.webmanifest` for home-screen saves.

### Cleanup

10. Dead hero code. The photo moved to a CSS background, but `.hero-visual` and
    `.hero-photo` rules remain unreachable, and the comment above
    `.hero-grid` in `index.html` still claims the photograph has not arrived
    yet. Misleading for the next editor.

### Blocked on the owner

11. **`privacy.html` is unusable.** Three `[À COMPLÉTER]` placeholders: legal
    company name, postal address, RC/ICE number, retention periods, and the
    last-updated date. Also `noindex`, so nobody can reach it. It is a drafted
    starting point, not legal advice, and should be reviewed by a lawyer.
12. **Aya's surname.** Her card reads "Aya" while Mouad's reads "Mouad Rida".
13. **Stipendium deadline.** Currently generic ("opens in November, closes
    mid-January") because the owner's figures and the original page disagreed
    about the year label. A concrete date converts better; confirm it first.

### Also unverified

- **Vercel Web Analytics** is wired into the page but must be switched on in
  the Vercel dashboard (project → Analytics → Enable). Until then the script
  404s and collects nothing. Nobody has confirmed it was enabled.
- **Photo rights.** The university and hero images were supplied by the owner
  and several look like official press photography. Worth confirming before
  the site takes real traffic.

---

## Working conventions

- Verify in a real browser before pushing. Playwright and Chromium are
  installed; launch with `executablePath: '/opt/pw-browsers/chromium'`.
- Serve locally with `python3 -m http.server` for testing.
- The Vercel analytics script 404s locally. That is expected, not a bug.
- Cache headers are `max-age=0, must-revalidate` so deploys appear immediately.
  Favicons still cache hard in Chrome; reopen the tab to see icon changes.
- Commit messages here explain *why*, not just what, so that a cold session can
  reconstruct reasoning. Keep that up.
