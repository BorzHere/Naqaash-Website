# Naqaash Foundation

The website is built with React, Vite, JavaScript, React Router, and Tailwind CSS. All site pages are responsive and share a common navigation and footer. TypeScript is not used.

## Run locally

```bash
npm install
npm run dev
```

Open <http://localhost:3004>. Create the production build in `dist` with:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Routes

- `/` — Home
- `/about` — About
- `/our-work` — Our Work photo gallery
- `/economic-empowerment` — Economic Empowerment
- `/climate-resilience` — Climate Resilience
- `/esg-export-readiness` — ESG & Export
- `/impact` — Impact
- `/get-involved` — Donation and ways to help
- `/contact` — Contact form

The enquiry form prepares an email in the visitor's mail app; this project does not include a mail server or form submission service. Donation options link to the contact form with the selected fund prefilled.

Pages are implemented as JavaScript React components in `content/pages`, with shared icons in `content/IconSprite.js` and interactive components in `components`. The original visual design is preserved by `assets/css/styles.css`. Brand images are served from `public/assets`.

When deploying `dist` to static hosting, configure the host to serve `index.html` for unknown paths so direct visits to React Router routes such as `/about` work.
