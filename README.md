# IGNITO'26 — Star Chart Techfest Website

A production-ready React + Vite + Tailwind CSS site for a fictional college
techfest, styled after vintage astronomy journals, old star atlases, and
scrapbook ephemera — deliberately **not** neon/cyberpunk.

## Stack

- React 18 + Vite 5
- Tailwind CSS 3
- React Router 6
- Framer Motion 11
- React Icons

## Getting started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Structure

```
src/
  components/     Reusable UI: Navigation, BackgroundSky, FilmGrain,
                  Planet, PaperCard, TapedPhoto, SectionHeading, PageTransition
  data/           Dummy content for events, competitions, legacy years, sponsors
  pages/          Home (solar system), About, Events, Competitions,
                  Legacy, Sponsors, Contact
  App.jsx         Routes + animated page transitions
  main.jsx        Entry point
  index.css       Tailwind layers, paper/grain/star textures
```

## Design notes

- Headings use **Special Elite** (typewriter), body copy uses **IBM Plex Mono**,
  and handwritten annotations use **Caveat**, loaded via Google Fonts in `index.html`.
- All "photographs" are CSS-gradient plates rather than external images, to keep
  the project dependency-free and avoid any copyright concerns — swap in real
  photos in `TapedPhoto.jsx` or directly in the pages whenever you have them.
- Motion respects `prefers-reduced-motion` (see `index.css`).
- The homepage planets float in place — they do not continuously orbit, per spec.
