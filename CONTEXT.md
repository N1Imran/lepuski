# Lepuski Bar & Nightclub — Project Context & Decisions

This file records what the project is, decisions made so far, and decisions made in the future. Keep it updated when you or the team make meaningful choices so everyone (and AI assistants) share the same context.

---

## What This Project Is

- **One-page marketing website** for **Lepuski Bar & Nightclub**.
- **Goal**: Visitors quickly understand the venue has a **bar**, **nightclub**, and **karaoke**, plus an **events** section.
- **Stack**: Vanilla HTML, CSS, and JavaScript. No framework. No build step for the site itself.
- **Hosting**: Vercel (static). Deploys auto-update when we push to GitHub.

---

## Decisions Made So Far

### Product & content
- **Venue name**: “Lepuski Bar & Nightclub” (fixed).
- **Content for launch**: Dummy/placeholder text everywhere (tagline, Bar/Nightclub/Karaoke copy, events, footer). Real copy to be provided later.
- **No contact form**. Footer uses dummy address and CTA only; real contact/social can be added later.
- **Images**: Unsplash URLs in HTML for section photos. **Logo** is in `images/logo.png` and is used as favicon, in header nav, hero, and footer. Real section photos can be added to `images/` later (e.g. bar.jpg, nightclub.jpg, karaoke.jpg).

### Tech & structure
- **Single HTML file** (`index.html`) with semantic sections: hero, bar, nightclub, karaoke, events, footer. Section IDs for anchor navigation.
- **One CSS file** (`styles.css`): variables, reset, dark atmospheric theme, responsive layout. BEM-style class names allowed in Stylelint.
- **Minimal JS** (`scripts.js`): smooth scroll for anchor links only. No heavy dependencies.
- **Fonts**: Playfair Display (display/headings), Source Sans 3 (body), loaded from Google Fonts.

### Quality & workflow
- **Frontend best practices**: Semantic HTML, accessibility (alt text, focus, contrast), responsive design, valid markup. See plan/README for details.
- **Testing**: Run before every push. Single command: `npm test` (HTML validation, Stylelint, ESLint). No failing tests on GitHub.
- **CI**: GitHub Actions workflow (`.github/workflows/ci.yml`) runs on push and pull_request to `main`/`master`. Same checks as local; failing checks block a green build.
- **Git + GitHub**: Repo on GitHub; Vercel imports from GitHub so every push to the connected branch triggers a new deployment.
- **Ongoing workflow**: Edit → run `npm test` and fix failures → commit → push → CI must pass → Vercel deploys.

### Tooling
- **HTML**: validated with `html-validate`. Raw `&` in text must be encoded as `&amp;`.
- **CSS**: linted with Stylelint (config: `stylelint-config-standard`). BEM modifiers (e.g. `.event-venue--bar`) allowed via `selector-class-pattern: null`.
- **JS**: linted with ESLint (flat config, browser globals). No framework.
- **Node**: `package.json` with `test` and `lint` scripts; devDependencies only for linting/validation. No runtime Node dependency for the site.

### Out of scope (for now)
- Contact form.
- Favicon and real images (added later by stakeholder).
- Sticky header with nav highlight, lightbox, meta/Open Graph (optional enhancements).
- Any backend, CMS, or framework unless we decide otherwise later.

---

## Future Decisions (log below)

When you make a new decision that affects the project, add it here with a short date and one or two lines.

- **2025-02-19** — Added Lepuski logo (`images/logo.png`): favicon, header nav, hero, and footer.
- **(YYYY-MM-DD)** — Decision: … (e.g. “Use Next.js for events page.” / “Add contact form with Formspree.”)

---

*Last updated: 2025-02-19 (initial context file).*
