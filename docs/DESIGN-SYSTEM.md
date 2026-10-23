# Naqaash Foundation design system

The original standalone site defined its design values as CSS custom properties in `assets/css/styles.css`. The migrated Next.js site keeps the matching theme tokens in `app/globals.css`, with Tailwind color aliases in `tailwind.config.js`.

## Concept

- **Name and motif.** *Naqqash* (نقاش) means the artisan who leaves a lasting mark. The visual motif is the stitched diamond of **phulkari** embroidery, a craft women in Pakistan have long made and sold. It links craft, enterprise and identity.
- **Colour roles.** Purple is the brand colour. Gold stands for **economic empowerment** and teal for **climate resilience**. A small diamond shape (a square rotated 45°) is used throughout for bullets, step markers and legend dots.

## Colour

| Token | Light | Dark | Role |
|---|---|---|---|
| `--bg` | `#F7F5FB` | `#120B1C` | Page background |
| `--surface` | `#FFFFFF` | `#1B1328` | Cards, form |
| `--sunk` | `#EFEAF7` | `#231933` | Alternating sections, chips |
| `--ink` | `#1E1530` | `#F0EBF8` | Main text |
| `--muted` | `#5D5374` | `#B3A8C8` | Secondary text |
| `--line` | `#DED6EB` | `#352A4C` | Borders, dividers |
| `--brand` | `#5B2A86` | `#B78CEB` | Main purple: buttons, links, logo |
| `--brand-ink` | `#4A1F70` | `#CDAEF3` | Purple text on light surfaces, button hover |
| `--brand-soft` | `#ECE1F6` | `#2E1F46` | Purple tint backgrounds |
| `--on-brand` | `#FFFFFF` | `#160D22` | Text on purple |
| `--gold` / `--gold-ink` / `--gold-soft` | `#D4920F` / `#875700` / `#FAECCF` | `#F2B33D` / `#F6C76A` / `#3A2C12` | Economic empowerment |
| `--teal` / `--teal-ink` / `--teal-soft` | `#0E7A6C` / `#075247` / `#D5EEE8` | `#3CC2AE` / `#6FD8C7` / `#0F3836` | Climate resilience |
| `--rose` | `#B8325A` | `#F07597` | Small hazard markers only |
| `--band` / `--band-2` | `#2A1442` / `#3A1D5A` | `#0B0613` / `#1B1029` | Dark sections, footer, donation card |
| `--band-fg` / `--band-muted` | `#F3EEFA` / `#BFB2D6` | same | Text on dark sections |

Rule: use the `-ink` shades for text and the plain shades for fills.

## Typography

| Role | Family | Weights | Token |
|---|---|---|---|
| Display / headings | Bricolage Grotesque | 600, 800 | `--f-display` |
| Body | Figtree | 400, 500, 600 | `--f-body` |
| Labels, data, captions | JetBrains Mono | 400, 600 | `--f-mono` |
| Urdu | Noto Nastaliq Urdu | 600 | `--f-urdu` |

Type scale (fluid sizes using `clamp()`):

- **Home hero H1:** 44 → 92 px, weight 800, letter-spacing −0.035em
- **Page hero H1:** 42 → 84 px
- **Section H2:** 32 → 54 px, weight 800
- **Card H3:** 21–24 px, weight 600
- **Body:** 17 px, line height 1.6. Lede paragraphs are 18 → 21 px.
- **Eyebrow labels:** mono, 12.5 px, uppercase, letter-spacing 0.14em, with a 22 px purple dash before them.

## Layout and spacing

- **Content width:** max 1180 px (`--wrap`). Side gutters are at least 20 px and respect safe areas.
- **Section padding:** 60 → 110 px top and bottom (`.sec`). `.sec.tight` removes the top padding. `.sec.sunk` gives a tinted background and `.band` a dark one.
- **Corner radius:** 16 px for cards (`--r`), 24 px for large panels, 999 px for buttons and chips.
- **Breakpoints:** 1100 px (hamburger menu), 960 / 900 / 860 px (grids go to 2 columns or stack), 600 / 560 / 520 px (single column).

## Components

| Class | What it is | Where used |
|---|---|---|
| `.btn.btn-brand` / `.btn-gold` / `.btn-ghost` | Pill buttons | Everywhere |
| `.link` | Bold purple text link with an arrow | Card footers |
| `.eyebrow` | Mono label above headings | Every section |
| `.page-hero` (`.econ`, `.clim`) | Inner-page header with breadcrumb; `<em>` is highlighted in the page colour | All inner pages |
| `.pillars` / `.pillar.econ` / `.pillar.clim` | Two-specialty panels with an icon list (`.plist`, `li.new` adds a "New" badge) | Home |
| `.feature` + `.ladder` | Dark gradient panel with a numbered ladder | Home (ESG feature) |
| `.split` + `.facts` / `.fact` | Heading on the left, sourced facts on the right | Home, ESG |
| `.steps` (`--n`) | Numbered horizontal sequence, for real sequences only | Loan process, ESG path |
| `.cards` (`--c`) + `.card` (`.g` / `.t`) | Card grid with icon tile and diamond bullets | Programs, services, values |
| `.hazards` / `.hz` | 3×2 grid of hazards with impact and response | Climate |
| `.cycle` / `.phase` | Before / Ongoing / During / After | Climate |
| `.stats` (`--c`) / `.stat` | Impact figures (grid with 1 px gaps forming the lines) | Home, Impact |
| `.chips` / `.chip` / `.risk` | Pill tags and risk tags with a coloured diamond | Targets, frameworks, regions |
| `.projects` / `.proj` + `.pill.g/.t/.p` | Project rows: category, title, location | Economic, Climate, Impact |
| `.team` / `.person` / `.avatar` | Leadership with initials (swap in photos later) | About |
| `.mv` | Mission (purple) and Vision (tint) panels | About |
| `.donate-card` / `.fund` | Donation picker using radio buttons | Get Involved |
| `.cta` | Full-width purple call-to-action band | Home, ESG |
| `.cform` / `.field` / `.row2` | Contact form | Contact |

## Icons

There are 23 line icons in the SVG sprite, drawn on a 24 px grid with a 1.8 px stroke that uses `currentColor`. Their IDs start with `i-`: arrow, coin, laptop, bulb, store, globe, leaf, sun, wave, drop, therm, mount, cloud, sprout, heart, chart, co2, doc, chain, shield, people, fb and ig. To add one, add a `<symbol>` with the same stroke style.

## Imagery guidance (for when photos are added)

- Use real Naqaash participants, with written consent.
- Show women at work and in leadership roles, not as victims.
- Use warm natural light and put the photos in rounded 24 px frames.
- Avoid stock photos of disasters.
