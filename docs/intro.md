# The 3D intro page (`src/intro.html`)

A scroll-driven tour of Lumen Bay that sits in front of the simulator. Open it at `/intro.html` on the Pages link, or double-click
`src/intro.html`. It links to the simulator (`index.html`); the simulator itself is unchanged.

## What is real and what is not
- The visuals are **AI-generated photographs of the fictional city** (made with Gemini), shown as a scroll tour: slow camera moves,
  parallax and cross-fades. They are concept art, labelled as such on the page. Lumen Bay is not a real place.
- The markers on the aerial photograph (Crown Bridge closed, Kings Bridge 142% full, Tech Bridge 67%) are drawn over the image.
  The percentages are the simulator's bridge-closed figures (`e3` closed, `e4` 1.418, `e5` 0.666); the marker **positions are illustrative**,
  because an AI image has no map coordinates.
- **Not live:** the intro does not run the simulator. The figures (142%, 6.5%, 20.6%, 1,132k, 67.7%) are pinned by `tests/intro.js`.
- An earlier version used a procedural 3D city built from `city.json`. It looked like a cartoon next to the photographs, so it was removed.

## Credits and licences
- Page design (layout, type, scroll reveals, preloader, chapter structure) is adapted from **Kage** by Meng To / ThreeUI Community,
  MIT licence, from the `@designcodeio/threeui` package. Its Kyoto-temple scene, copy and images are **not** used.
- MIT licence text (Kage / ThreeUI):
  Copyright (c) 2026 Meng To. Permission is hereby granted, free of charge, to any person obtaining a copy of this software and
  associated documentation files, to deal in the software without restriction, subject to including this copyright notice and
  permission notice in all copies or substantial portions of the software. The software is provided "as is", without warranty of any kind.
- Fonts: Onest (SIL Open Font License 1.1), embedded in `src/intro/fonts.css`.

## Checks
`node tests/intro.js` (part of `npm test`): every local file exists, nothing loads from the internet, bundle present, figures match.
Tried by hand in headless Chromium: 1440 px desktop and a 390 px phone, no sideways scroll, no console errors. Firefox and Safari are untested.
`src/intro/intro.js` is plain JavaScript with no build step.
