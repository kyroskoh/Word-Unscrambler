# Changelog

All notable changes to Word Unscrambler are documented here.

The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

---

## [1.6.0] — 2026-05-06

### Added

- **Multi-dictionary support** — users can now choose between three word sources before clicking Unscramble:
  - **Built-in** (default) — 2,000+ common words, instant offline lookup, no network required.
  - **ENABLE** — 172,000+ Scrabble-valid words loaded once from a public CDN and cached for the session. Covers rare, technical, and archaic words missing from the built-in list.
  - **Datamuse** — live queries against the [Datamuse API](https://www.datamuse.com/api/), which indexes 500,000+ words. For each unique starting letter × each valid word length, up to 1,000 candidates are fetched and filtered locally for letter availability.
- **`src/lib/dictionaryService.js`** — new module encapsulating all three sources behind a single `async findWords(letters, dictionaryId)` function. ENABLE list is cached in-module after the first fetch; Datamuse requests are batched in groups of 6 to avoid overwhelming the API.
- **`src/components/DictionarySelector.jsx`** — pill toggle showing Built-in / ENABLE / Datamuse with online/offline indicators and a description line for the active selection.
- **Loading message** on the Unscramble button reflects the active source (e.g. "Querying Datamuse…") while async sources are fetching.
- **Error banner** shown if an online source is unreachable.
- **Attribution footer** below results for online sources, linking to the data provider.
- **Dictionary badge** in the results stats bar shows which source produced the current results.

---

## [1.5.0] — 2026-05-06

### Fixed

- **Switched `BrowserRouter` → `HashRouter`** (`src/App.jsx`) — when deployed to a GitHub Pages subdirectory (`/Word-Unscrambler/`), `BrowserRouter` received `/Word-Unscrambler/` as the pathname and found no matching route, rendering `PageNotFound` on every visit. `HashRouter` routes via the URL hash (`/#/`) which the server never sees, so the home route always matches regardless of the hosting subdirectory.

---

## [1.4.0] — 2026-05-06

### Changed

- **Replaced Jekyll build with Vite build** in `.github/workflows/jekyll-gh-pages.yml`. The existing workflow was running `actions/jekyll-build-pages` against the raw source files — Jekyll has no knowledge of Vite or React, so no JS bundle was ever produced. The workflow now runs `npm ci` + `npm run build` and uploads `dist/` as the Pages artifact.
- **`public/.nojekyll`** added — prevents any residual Jekyll processing on the deployed output.

---

## [1.3.0] — 2026-05-06

### Fixed

- **Asset paths now relative (`./assets/…`)** — added `base: './'` to `vite.config.js`. Previously the default `base: '/'` produced absolute paths (e.g. `/assets/index.js`) which resolved to the drive root (`C:\assets\`) when opened outside an HTTP server, breaking the build output.
- **Removed broken manifest link** — `index.html` referenced `/manifest.json` which never existed, causing a 404 on every page load.
- **Self-hosted Inter font** — replaced the Google Fonts CDN `@import` in `index.css` with `@fontsource/inter` weight imports. Font files now bundle into `dist/assets/` so the app makes zero cross-origin requests at runtime.
- **Removed `react-quill`** — the package was unused scaffolding and pulled in `quill ≤1.3.7` (moderate XSS, CVE tracked at GHSA-4943-9vgg-gr5r). Removing it brings the audit to 0 vulnerabilities.

### Changed

- Vite dev server CORS restricted to `localhost` / `127.0.0.1` origins with `credentials: true`, replacing the previous `cors: true` wildcard.
- `server.host: true` retained so the dev server remains reachable on the local network for device testing.

---

## [1.2.0] — 2026-05-06

### Changed

- **Removed platform SDK dependency.** Replaced `@base44/sdk` and `@base44/vite-plugin` with standard tooling (`@vitejs/plugin-react`). The app is now fully standalone — no proprietary platform client, no auth scaffolding, no external backend calls. `AuthContext` is now a minimal pass-through, `PageNotFound` no longer performs an auth check, and the `src/api/` directory has been removed.
- `vite.config.js` now uses only `@vitejs/plugin-react` with an explicit `@/` path alias.
- `package.json` name updated to `word-unscrambler`.

### Removed

- `src/api/base44Client.js`
- `src/lib/app-params.js`
- `src/components/ProtectedRoute.jsx`
- `src/components/UserNotRegisteredError.jsx`

---

## [1.1.0] — 2026-05-06

### Fixed

- **Filters no longer reset on Unscramble.** Previously, clicking the Unscramble button cleared all active filters before returning results, making it impossible to pre-set filters and see only matching words. Filters are now preserved across Unscramble calls and applied immediately to each new result set. (`src/pages/Home.jsx`)

---

## [1.0.0] — 2026-05-06

### Added

- **Word unscrambler engine** — finds all valid English words formable from up to 15 input letters using a letter-frequency map and a 2 000+ word dictionary (`src/lib/wordList.js`).
- **Home page** with animated header, letter-tile preview, and results grouped by word length (`src/pages/Home.jsx`).
- **FiltersPanel** — collapsible panel with five independent filters: starts with, ends with, contains, must include letter, and exact word length (`src/components/FiltersPanel.jsx`).
- **WordCard** — colour-coded, Framer Motion animated word badge, with distinct colours for word lengths 2–8 (`src/components/WordCard.jsx`).
- **Reactive filter application** — displayed words update instantly as filter values change, without re-running the unscramble algorithm.
- **Active filter count badge** shown in the Filters panel header.
- **Filter-empty state** displayed when words exist but none match the current filters.
- **Word-length buttons** populated dynamically from the actual result set.
- **Keyboard support** — pressing Enter in the letter input triggers unscramble.
- **Clear button** — resets input, results, and all filters in one click.
- **Mobile-responsive layout** — works on screens from 320 px wide.
- Authentication integration via `AuthContext` and `ProtectedRoute`.
