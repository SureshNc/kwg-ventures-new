# KWG Ventures — React + Vite

This is a React + Vite conversion of the original static HTML/CSS/JS site. All markup, styling and behavior (sticky header, mobile nav, scroll-spy active links, scroll-reveal animations, and the client-side contact form) were preserved and rebuilt as React components.

## Getting started

```bash
npm install
npm run dev       # starts a local dev server (usually http://localhost:5173)
npm run build     # builds to dist/
npm run preview   # preview the production build locally
```

## Project structure

```
index.html              Vite entry HTML (meta tags, fonts, JSON-LD)
src/
  main.jsx               React root
  App.jsx                 Assembles all page sections
  index.css               Global stylesheet (ported from css/styles.css)
  assets/images/          All site images, logos, imported directly by components
  components/
    Header.jsx             Sticky header, mobile menu, scroll-spy
    Hero.jsx
    CredentialsStrip.jsx
    About.jsx               "Who We Are" + stats
    Services.jsx            Four pillars
    Corridors.jsx           Six corridor cards
    Sectors.jsx             Five sector cards
    CapabilitiesStrip.jsx
    Leadership.jsx          Add more advisors by adding an object to the PEOPLE array
    Contact.jsx             Contact form (client-side only — see note below)
    Footer.jsx
    Reveal.jsx              Reusable scroll-into-view wrapper (replaces the old IntersectionObserver in main.js)
```

## Notes

- **Contact form**: still a front-end-only demo, same as the original — it validates and shows a success message but doesn't send anywhere. Wire it up to Formspree, EmailJS, or your own API endpoint inside `src/components/Contact.jsx` (`handleSubmit`).
- **Adding an advisor**: open `src/components/Leadership.jsx` and add an entry to the `PEOPLE` array (there's a commented example at the bottom of the array showing the shape).
- **Images**: all images are imported as ES modules from `src/assets/images`, so Vite fingerprints/optimizes them automatically in the production build.
