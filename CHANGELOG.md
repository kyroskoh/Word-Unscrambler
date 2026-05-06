# Changelog

All notable changes to Word Unscrambler are documented here.

The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

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
