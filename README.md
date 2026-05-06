# Word Unscrambler

A fast, interactive web app that finds every valid English word that can be formed from a given set of letters. Built with React, Vite, and Tailwind CSS. Fully client-side — no backend or account required.

## Features

- **Instant unscrambling** — enter up to 15 letters and find all valid words in milliseconds
- **Three dictionary sources** — choose Built-in (2K words, offline), ENABLE (172K Scrabble words, CDN), or Datamuse (500K+ words, live API)
- **Smart filtering** — narrow results by prefix, suffix, substring, required letter, or exact word length
- **Grouped results** — words organised by letter count (longest first), each group colour-coded
- **Animated UI** — smooth entry animations via Framer Motion
- **Mobile-friendly** — responsive layout down to small phone screens
- **2 000+ word dictionary** — common English words from 2 to 8 letters, baked in client-side (no network request needed)
- **Zero external requests** — Inter font is self-hosted via `@fontsource/inter`; nothing is fetched from a CDN at runtime

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
git clone https://github.com/kyroskoh/Word-Unscrambler.git
cd Word-Unscrambler
npm install
```

### Running Locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Other Scripts

| Command | Description |
|---|---|
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Auto-fix lint errors |

## Usage

1. Type your scrambled letters into the input field (letters only, max 15).
2. Optionally open **Filters** and fill in any combination of:
   - **Starts with** — word must begin with these letters
   - **Ends with** — word must end with these letters
   - **Contains** — word must include this substring
   - **Must include letter** — word must contain this single letter
   - **Word length** — restrict to an exact letter count
3. Click **Unscramble** (or press Enter). Active filters are applied immediately to the results.
4. Click **Clear all** inside the filter panel to reset filters, or the ✕ button on the input to start fresh.

## Project Structure

```
src/
├── components/
│   ├── ui/         # Radix UI primitives
│   ├── FiltersPanel.jsx
│   └── WordCard.jsx
├── hooks/          # use-mobile breakpoint hook
├── lib/
│   ├── wordList.js # Dictionary + findWords algorithm
│   └── utils.js
└── pages/
    └── Home.jsx    # Main page
```

## Tech Stack

- **React 18** with React Router v6
- **Vite 6** (build tooling)
- **Tailwind CSS 3** (styling)
- **Radix UI** (accessible primitives)
- **Framer Motion** (animations)
- **TanStack React Query** (async state)
- **@fontsource/inter** (self-hosted Inter font)

## Deployment

### GitHub Pages

The repository includes a GitHub Actions workflow (`.github/workflows/jekyll-gh-pages.yml`) that builds and deploys automatically on every push to `main`. The live site is at:

**https://kyroskoh.github.io/Word-Unscrambler/**

Requirements for GitHub Pages:
- Repo Settings → Pages → Source must be set to **GitHub Actions**
- `public/.nojekyll` is present to prevent Jekyll from processing the Vite output

The app uses `HashRouter` so routing works correctly under the `/Word-Unscrambler/` subdirectory (URLs appear as `https://kyroskoh.github.io/Word-Unscrambler/#/`).

### Other static hosts

```bash
npm run build
```

Serve the `dist/` folder with any static host (Netlify, Vercel, Cloudflare Pages, etc.). For hosts that serve from the domain root, you can switch back to `BrowserRouter` in `src/App.jsx`.
