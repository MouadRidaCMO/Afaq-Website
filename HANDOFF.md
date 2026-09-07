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
style.css       ~1500 lines, organised into 18 commented sections
app.js          language switching, mobile menu, scroll reveals, spine progress
vercel.json     cache headers
.vercelignore   keeps source photography out of the deploy
images/
  hero/         graduation.avif + .jpg, the hero background
  uni/          11 university cards, 800x500, deployed
  services/     6 service cards, 800x500, deployed
  campus/       university originals, NOT deployed
  source/       service photo originals, NOT deployed
favicon.ico     multi-size 16/24/32/48/64, hand-sharpened at small sizes
favicon.png     512px, tab optimised, tassel deliberately trimmed
mark.png        full uncropped cap, NOW UNUSED by the site, kept as an asset
Afa9 - Logo.png the full-res original the two lockups derive from, not deployed
logo.png        the full lockup, header and privacy page
logo-reverse.png the same lockup with the AFA9 wordmark in gold, footer only
```

Page order: hero → universities → scholarship → services → process → why → contact.
Section ids: `universites`, `bourse`, `services`, `process`, `why`, `contact`.

Social accounts, linked from both the contact section and the footer brand
column via the `.social-links` component:

| | |
|---|---|
| Facebook | `facebook.com/profile.php?id=61594426460308` (Afaq Abroad) |
| Instagram | `instagram.com/afaq_abroad` |
| WhatsApp | `wa.me/36707579165` |

The markup is deliberately duplicated in the two places rather than injected by
JavaScript, so the links survive with scripting off. **Change one, change the
other.** The glyphs are solid brand marks, not the outline style used elsewhere
on the page: an outlined Facebook or WhatsApp stops reading as its logo. Only
the "Suivez-nous" eyebrow is translated (`social.follow`); the three names are
identical in all three languages and live in `aria-label` attributes, which
`setLang()` does not touch.

---

## How the three languages work

French is written directly into `index.html`. English and Arabic are override
dictionaries in `app.js` (`T.en`, `T.ar`), keyed by each element's `data-i18n`
attribute. **134 keys currently.**

**Arabic is what a visitor lands on.** French remains the source language of the
markup, so the page still reads with JavaScript off and search engines index it
as-is; only the rendered default changed. Order of precedence is `?lang=` in the
URL, then a stored choice, then Arabic. The default is *not* written back to
`localStorage` — only a deliberate switch is remembered — so a visitor who never
touches the switcher keeps following the default if it ever changes again.

An inline script in `<head>` resolves the language before the first paint and
sets `lang`/`dir` plus the Cairo link there, because otherwise the page visibly
flips from LTR French to RTL Arabic as it loads. **It duplicates the precedence
logic in `initLang()`; change both together.**

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

**The footer needs its own lockup.** `mark.png` was paired with a text wordmark
on the theory that the cap keeps its gold on a dark ground. It does not: the cap
body is navy on navy and collapses into a smudge with a floating gold tassel,
which is invisible in a thumbnail and obvious at 3x. `logo-reverse.png` is the
header lockup with only the AFA9 wordmark recoloured, navy to gold; the cap is
untouched, because its navy sits above --deep-blue and the gold outline draws
the shape. Lifting the whole lockup to near-white was the first attempt and it
drained the brand out of it, leaving a pale smudge next to the gold headings. `tools/make-reverse-logo.py`
does the conversion; it also fades out the white ground baked into `logo.png`'s
edges and letter counters, which otherwise fringes the artwork on navy.
**Regenerate it in the same pass as `logo.png`.** `mark.png` and the old `wordmark.png` are no longer used by the
site; the latter was deleted, the former kept as an asset.

**Deriving `logo.png` from a new original.** The supplied artwork is a large
portrait canvas on solid white. Trim to the content bbox, then knock the
background out by flood filling from the four corners rather than thresholding
on whiteness, which punches holes through the tassel highlights and the gold
slogan. The lockup is 2.63:1, so it resizes to 700x266 and the `width`/`height`
attributes in both HTML files still hold. Do not palette quantise it: at 256
colours the cap's blue gradient bands visibly, and the 44KB saved is nothing
next to the photography. Recut `wordmark.png` in the same pass and update its
`width`/`height` if the crop moves.

**Environment note: outbound network is blocked.** University sites, Unsplash,
Wikimedia and Google are all unreachable from the session container, so images
cannot be fetched — they must be uploaded to the repo by hand. This is a
network policy, not a missing tool. The same block prevented reading
competitor sites for design reference.

---

## Gotchas that have already caused bugs

**A bare element selector beats a class.** `.footer-brand img` sized both footer
images at 44x44 and silently squashed the new wordmark, because `img` adds
specificity that `.footer-wordmark` does not have. Both images carry explicit
classes now. Watch for this anywhere a container styles its children by tag.

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

**No bare `href="#"` anywhere.** The logo carried one, which parked a `#` in the
address bar on the first click and then travelled into every link copied from
there. It points at `/` now, with a click handler that scrolls to the top
without reloading, and `stripEmptyHash()` cleans a trailing `#` off URLs already
in circulation. Real section anchors are untouched.

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
- **The brand is "Afa9", not "Afaq".** Renamed because the Q form was being
  read as the Darija word *afaq*, and because 9 is how ق is written in Moroccan
  Arabizi, so Afa9 transliterates آفاق exactly. **The Arabic spelling آفاق is
  unchanged everywhere** — that is the whole point of the 9.

  Four things deliberately keep the old spelling because they are live
  infrastructure, not copy: the domain `afaq.study`, the mailbox
  `contact@afaq.study`, the Instagram handle `afaq_abroad`, and the
  `afaq-lang` localStorage key (renaming that key would silently reset every
  returning visitor's saved language). Change any of those only alongside the
  real-world account.

- **"Afa9", never "AFA9"** in *text*. The all-caps form belongs to the logo
  artwork, and the footer carries that artwork rather than type: setting the
  wordmark in Playfair only ever approximated the real letterforms. Body copy,
  including the copyright line, reads "Afa9".
- **No pill-with-a-dot badges.** They were removed for looking generically
  AI-generated. Eyebrows are plain letterspaced gold caps.
- Prefers real structural redesign over restyling. A pass that keeps the layout
  and adds easing will be rejected.

---

## Outstanding work

### Do first — infrastructure, not taste

1. **Share tags.** Zero `og:`, `twitter:` or `description` meta tags exist.
   afaq.study currently shares as a bare grey link with no title, image or text.
   The audience distributes over WhatsApp, so this is the highest-value fix on
   the list. Needs a share image, ~1200×630, croppable from
   `images/hero/graduation.jpg`.
2. **Meta description.** None present, so Google writes the snippet itself.
   Same edit as above.
3. **Floating WhatsApp button.** Persistent bubble, bottom-right, linking to
   `https://wa.me/36707579165`. The entire conversion path is WhatsApp and it
   currently requires scrolling to the contact section or the footer. Still
   open: the social row added there is not a substitute for a persistent one.
4. **`sitemap.xml` and `robots.txt`.** Neither exists.

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
