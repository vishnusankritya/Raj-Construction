# Raj-Construction
Website for construction and electrical solutions company.

## Development

This is a minimal React + Vite site for Raj Construction. Files were scaffolded to help you get started.

### Design system

- Palette: deep navy background (#0b1320), slate neutrals, and a warm gold accent for CTAs and highlights.
- Components: hero with stat card, service cards, differentiator list, project highlights, testimonials, and contact card.
- Typography: Inter + Manrope with uppercase eyebrow labels for hierarchy.
- Layout utilities live in `src/styles.css` (shell spacing, grids, CTA buttons, tags, etc.).

### Architecture

- `src/hooks/useSiteContent.js` centralizes all narrative copy, lists, and stats (single responsibility & easy localization).
- `src/hooks/useContactInfo.js` encapsulates owner/contact metadata and map embed logic.
- Presentational sections live in `src/components/` (Header, Hero, StatsBand, ServicesSection, ApproachSection, ProjectsSection, TestimonialsSection, ContactSection, Footer).
- `src/App.jsx` composes the page via hooks + components, keeping orchestration separate from data and view layers.
- Add future sections by extending the hooks (data) and dropping a new component into the App composition.

### Quick start

1. Install dependencies:

```bash
npm install
```

2. Start the dev server:

```bash
npm run dev
```

3. Open the URL shown in the terminal (usually http://localhost:5173).

### Build

```bash
npm run build
npm run preview
```

Feel free to edit files in the `src/` directory (`App.jsx`, `styles.css`) to customize the site.
