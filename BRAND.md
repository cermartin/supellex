# Supellex Brand Guidelines

## Brand Identity

**Name:** Supellex  
**Tagline:** One Home At a Time  
**Voice:** Premium but direct. No fluff. Confident, not arrogant. British English throughout.  
**Positioning:** Premium bedroom furniture sold direct — no showroom markups, no compromise on quality.

---

## Colours

| Name | Hex | Usage |
|------|-----|-------|
| Brand Red | `#D62B2B` | Primary CTAs, accents, logo swoosh, headings highlight |
| Brand Red Dark | `#A81F1F` | Hover state on red buttons |
| Brand Red Light | `#F03E3E` | Hover highlights |
| Brand Black | `#0D0D0D` | Dark backgrounds, header, banner sections |
| Brand Charcoal | `#1A1A1A` | Section dark backgrounds |
| Brand Smoke | `#2A2A2A` | Card dark backgrounds |
| Brand Offwhite | `#F5F5F3` | Page background |
| Brand BG | `#EFEFED` | Light section backgrounds |
| Brand Grey | `#8A8A8A` | Body text, labels, secondary copy |
| Brand Light | `#E0E0DC` | Borders, dividers |
| White | `#FFFFFF` | Cards, panels |

**Primary palette:** Red `#D62B2B` + Black `#0D0D0D` + Offwhite `#F5F5F3`

---

## Typography

| Role | Font | Weight |
|------|------|--------|
| Primary / UI | DM Sans | 400 (body), 700 (bold), 900 (black headings) |
| Accent / Display | Playfair Display | 400–800 |

**Heading style:** All-caps label in red (`text-xs font-bold tracking-[0.25em]`) with a short red line before it, then a large black heading with one or two words in red.

**Example:**
```
── DELIVERY INFORMATION
Shipping & Returns
```

**Body copy:** DM Sans 14px / `text-sm`, colour `#8A8A8A`, line-height relaxed.

---

## Logo

- **Full logo:** Transparent PNG — `Transparent Logo.png` / deployed as `/supellex-logo.png`
- **Symbol only:** SVG — `Original Logo Symbol.svg` / deployed as `/Original Logo Symbol.svg`
- **On dark backgrounds:** Use `brightness-0 invert` (CSS filter) to render white
- **Minimum size:** 64px height on desktop, 48px on mobile
- **Clear space:** At least the height of the "S" on all sides
- **Never:** Add a background box, drop shadow, or outline around the logo

---

## UI Patterns

### Page Banner
Every page opens with a full-width black banner:
- Top red line: `h-1 bg-brand-red` absolute across the top
- Red label with line before it
- Large white heading, key word(s) in red
- `py-20 px-6`

### Buttons — Primary (CTA)
```
bg-brand-red hover:bg-brand-red-dark text-white font-black tracking-widest uppercase text-sm px-8 py-4
```

### Buttons — Secondary (outline)
```
border border-brand-black text-brand-black font-bold tracking-widest uppercase text-xs px-6 py-3 hover:bg-brand-black hover:text-white
```

### Cards / Panels
```
bg-white border border-brand-light
```
No border-radius — sharp corners throughout.

### Section Labels
```
inline-flex items-center gap-2
  <div class="w-8 h-px bg-brand-red" />
  <span class="text-brand-red text-xs font-bold tracking-[0.25em] uppercase">LABEL</span>
```

### Dividers
`border-t border-brand-light` — light grey, 1px.

---

## Spacing

- Page max width: `max-w-4xl` (content) / `max-w-6xl` (shop/gallery)
- Section vertical padding: `py-16` to `py-20`
- Card inner padding: `px-8 py-6` to `px-8 py-10`

---

## Tone of Voice

**Do:**
- Short, punchy sentences
- Benefit-first ("Mirror doors make your room feel bigger")
- Formal but warm in policies ("Customers are advised to…")
- British spelling: organisation, colour, analyse, enquire, favour

**Don't:**
- Exclamation marks
- Vague filler ("amazing quality", "great value")
- American spelling (customize → customise, etc.)
- First-person plural overload ("We we we…")

---

## Contact Details

| Channel | Address |
|---------|---------|
| Customer Support | support@supellex.co.uk |
| General Enquiries | info@supellex.co.uk |
| WhatsApp | +44 7391 858618 |
| Website | www.supellex.co.uk |

---

## Tech Stack (for devs)

- React + TypeScript + Vite
- Tailwind CSS v4 (custom theme in `index.css`)
- React Router DOM (real URL routing)
- Ecwid (store ID: `135961507`) for product catalogue + checkout
- Hosted on Vercel
- Fonts: DM Sans + Playfair Display via Google Fonts
