# PRD: One-Page Bar / Venue Marketing Website

**Product name:** [Venue Name] — One-Page Website  
**Version:** 1.0  
**Last updated:** [Date]

---

## 1. Overview

**What we're building**  
A single-page marketing website for a bar/venue. The goal is for visitors to quickly understand what the venue offers (e.g. bar, nightclub, karaoke, pool, etc.) and see upcoming events, with a clear path to visit or follow on social.

**Product type**  
Static, one-page site. No backend, no CMS, no user accounts.

---

## 2. Goals & Success Criteria

- **Primary:** Visitors understand the venue's offerings (bar + any other concepts) in under 30 seconds.
- **Secondary:** Show upcoming events; reinforce brand (name, logo, vibe).
- **Success:** Clear value proposition, fast load, works on mobile and desktop, accessible and valid markup.

---

## 3. Target Audience

- Local customers looking for a bar or nightlife option.
- People searching for the venue by name or area.
- Event-goers checking what's on.

---

## 4. Features & Page Structure

### 4.1 Hero

- **Purpose:** First impression and quick navigation to main offerings.
- **Content:**
  - Venue name (and optional tagline).
  - Logo (used as favicon and in header/footer).
  - **Hero cards:** 3–5 clickable cards that scroll to the corresponding section (e.g. Bar, Nightclub, Karaoke, Pool/Biljardi).
- **Design:** Full-width hero; optional background image; cards can have labels and optional imagery.

### 4.2 Venue Sections (repeat per offering)

- **Purpose:** Explain each part of the venue (bar, nightclub, karaoke, pool, etc.).
- **Per section:**
  - Section ID for anchor links (e.g. `#bar`, `#nightclub`).
  - Heading (e.g. "The Bar", "Nightclub").
  - Short copy (1–3 sentences).
  - **Gallery:** 2–4 images (placeholder or real). Use Unsplash/placeholders at first; replace later with real photos (e.g. 1200×800px).
- **Content:** Placeholder text acceptable for launch; real copy to be supplied by stakeholder.

### 4.3 Events

- **Purpose:** Show what's on soon.
- **Content:**
  - Section heading (e.g. "Upcoming Events").
  - List of events; each item includes:
    - Date (e.g. "Fri, Mar 1").
    - Venue/area (e.g. "Bar", "Nightclub") — can be styled with a pill/badge.
    - Event name.
    - Short description.
- **Data:** Static list in HTML for v1; can be replaced later by CMS or API.

### 4.4 Footer

- **Purpose:** Brand, location, hours, social.
- **Content:**
  - Logo + venue name.
  - Location/area (e.g. "Leppävaara" or full address).
  - Opening hours (e.g. "Open every day 10–00").
  - Social links (e.g. Instagram, Facebook) with `aria-label`, `target="_blank"`, `rel="noopener noreferrer"`.
- **Out of scope for v1:** Contact form (can be added later).

---

## 5. Content Requirements

| Item              | Launch                         | Later                          |
|-------------------|--------------------------------|--------------------------------|
| Venue name        | Fixed                          | —                              |
| Tagline/copy      | Placeholder OK                 | Real copy from stakeholder     |
| Section images    | Unsplash or placeholders OK    | Real photos in `images/`       |
| Logo              | Required (`images/logo.png`)   | Optional alternate formats     |
| Events            | 3–5 static placeholder events  | Real events (or dynamic later) |
| Footer location   | Placeholder OK                 | Real address/hours             |
| Social links      | Placeholder URLs OK            | Real URLs                      |

---

## 6. Technical Requirements

### 6.1 Stack

- **HTML:** Single file (`index.html`), semantic sections and IDs for anchors.
- **CSS:** One file (`styles.css`): variables, reset, layout, responsive. Prefer BEM-style classes.
- **JavaScript:** Minimal (`scripts.js`): e.g. smooth scroll for anchor links only. No framework.
- **Hosting:** Static (e.g. Vercel). Deploy from Git (e.g. push to `main` → auto-deploy).

### 6.2 Structure

- **Sections:** `<main>` containing: hero, one block per venue section, events, then footer.
- **Images:** Logo in `images/logo.png`; section images in `images/` (e.g. `bar.jpg`, `nightclub.jpg`) or external URLs at launch.
- **Fonts:** Google Fonts or similar (e.g. one display font, one body font).

### 6.3 Quality & Accessibility

- Valid HTML (e.g. `html-validate`).
- Semantic markup, heading hierarchy, `alt` on images, `aria-label` where needed.
- Focus styles and sufficient contrast.
- Responsive layout (mobile-first).
- Encode special characters (e.g. `&` as `&amp;`).

### 6.4 Tooling & Workflow

- **Linting:** Stylelint for CSS, ESLint for JS (browser env, no framework).
- **Tests:** Single command (e.g. `npm test`) runs HTML validation + CSS + JS checks.
- **CI:** GitHub Actions on push/PR to `main`/`master` running the same checks.
- **Local:** Open `index.html` or use a static server (e.g. `npx serve .`).

---

## 7. Out of Scope (v1)

- Contact form.
- Backend, CMS, or framework.
- Sticky header with section highlight (optional later).
- Lightbox for images (optional later).
- Meta/Open Graph (optional later).
- Real favicon (can use logo; dedicated favicon later).

---

## 8. Deliverables

- [ ] `index.html` — hero, venue sections, events, footer.
- [ ] `styles.css` — theme, layout, responsive.
- [ ] `scripts.js` — smooth scroll (and any other agreed interactions).
- [ ] `images/logo.png` — venue logo.
- [ ] README with run/test and deploy instructions.
- [ ] Optional: CONTEXT.md or similar for project/design decisions.

---

## 9. Reference: Section Checklist

Use this to tailor the PRD to your bar:

- [ ] Hero with venue name, logo, and hero cards (one per offering).
- [ ] Section per offering (Bar, Nightclub, Karaoke, Pool, etc.) with title, copy, gallery.
- [ ] Events section with date, venue badge, name, description.
- [ ] Footer: logo, name, location, hours, social links.
