# The 3D intro page (`src/intro.html`)

A scroll-driven tour of Lumen Bay that sits in front of the simulator. Open it at `/intro.html` on the Pages link, or double-click
`src/intro.html`. It links to the simulator (`index.html`); the simulator itself is unchanged.

## What is real and what is not
- The 3D city is built **in the browser from `data/city.json`**: district positions, the 11 roads, the three bridges, bus lines,
  hospitals and schools. Nothing is a pre-rendered video.
- The scroll chapters switch the scene state: normal day, Crown Bridge closed (barricades, traffic moves to the other bridges),
  river flood (water rises, flooded roads barricaded). The scene reads the same state shape the simulator can emit
  (`intro-src/states.json`, see `docs/coupling_map.md`), so it is built to be driven by the live model.
- **Not yet wired live:** the intro does not run the simulator; the figures on the page (142%, 6.5%, 20.6%, 1,132k, 67.7%) are the
  verified numbers from the bridge-closed scenario, pinned by `tests/intro.js`. Driving the 3D view from the running simulator is the next step.
- The scene is procedural and stylised, not photographic. The photographs on the page are AI-generated concept art of the fictional
  city (labelled "Concept art" on the page).

## Credits and licences
- Page design (layout, type, scroll reveals, preloader, chapter structure) is adapted from **Kage** by Meng To / ThreeUI Community,
  MIT licence, from the `@designcodeio/threeui` package. Its Kyoto-temple scene, copy and images are **not** used.
- MIT licence text (Kage / ThreeUI):
  Copyright (c) 2026 Meng To. Permission is hereby granted, free of charge, to any person obtaining a copy of this software and
  associated documentation files, to deal in the software without restriction, subject to including this copyright notice and
  permission notice in all copies or substantial portions of the software. The software is provided "as is", without warranty of any kind.
- Fonts: Onest (SIL Open Font License 1.1), embedded in `src/intro/fonts.css`.
- Three.js r160 (MIT), bundled.

## Rebuilding the bundle
`src/intro/intro.js` is built from `intro-src/` and committed, so nothing needs building to run it.
After editing `intro-src/`:
```
npm i --no-save esbuild three@0.160.0
npm run build-intro
```

## Checks
`node tests/intro.js` (part of `npm test`): every local file exists, nothing loads from the internet, bundle present, figures match.
Tried by hand in headless Chromium (software GL): desktop, 390 px phone (no sideways scroll), and with WebGL switched off (the page
falls back to a still of the city). Firefox and Safari are untested. Frame rate on a real GPU has not been measured.
