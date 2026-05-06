# Product Requirements Document — Word Unscrambler

**Version:** 1.0  
**Date:** 2026-05-06  
**Status:** Shipped

---

## Overview

Word Unscrambler is a single-page web application that helps users find every valid English word that can be made from a supplied set of letters. It is aimed at word-game players (Scrabble, Words with Friends, crossword solvers) who need a fast, offline-capable lookup tool with precise filtering.

---

## Goals

- Find all valid words from up to 15 letters in under 500 ms.
- Let users narrow results without re-running the unscramble.
- Work on mobile without native app installation.
- Require no server round-trip for the core word-lookup feature.

---

## User Stories

| # | As a… | I want to… | So that… |
|---|---|---|---|
| 1 | Word-game player | Enter a rack of letters and see all valid words | I can pick the best play |
| 2 | Crossword solver | Filter words that start with a known letter pattern | I can match the grid quickly |
| 3 | Word-game player | Filter by exact word length | I can target high-scoring tiles |
| 4 | Crossword solver | Filter words that contain a required letter | I can satisfy a crossing constraint |
| 5 | Any user | See results grouped by word length | I can scan by strategy (long words first) |
| 6 | Any user | Set filters before clicking Unscramble | I see only matching words from the start |
| 7 | Any user | Clear all filters at once | I can quickly reset without reloading |
| 8 | Mobile user | Use the app on a phone | I can look up words away from a desktop |

---

## Functional Requirements

### Input

| ID | Requirement |
|---|---|
| F-01 | Accept 2–15 alphabetic characters; reject digits and symbols. |
| F-02 | Display individual letter tiles as the user types. |
| F-03 | Trigger unscramble on Enter key or Unscramble button click. |
| F-04 | Clear button (✕) resets input, results, and filters. |

### Word Finding

| ID | Requirement |
|---|---|
| F-05 | Find all words in the built-in dictionary that can be formed from the supplied letters (each letter used at most as many times as it appears). |
| F-06 | Sort results by word length descending, then alphabetically within each length group. |
| F-07 | Words of length < 2 are never returned. |

### Filters

| ID | Requirement |
|---|---|
| F-08 | **Starts with**: exclude words that do not begin with the supplied prefix. |
| F-09 | **Ends with**: exclude words that do not end with the supplied suffix. |
| F-10 | **Contains**: exclude words that do not include the supplied substring. |
| F-11 | **Must include letter**: exclude words that do not contain the supplied single letter. |
| F-12 | **Word length**: when a length is selected, exclude words of any other length. |
| F-13 | Filters are applied reactively — changing any filter updates displayed words instantly without re-running the unscramble algorithm. |
| F-14 | Filters set before clicking Unscramble are preserved and applied to the new results (filters are NOT reset on Unscramble). |
| F-15 | "Clear all" resets all five filters simultaneously. |
| F-16 | Active filter count badge is shown in the Filters panel header. |
| F-17 | Word-length buttons are populated from the actual result set (only lengths present in results are shown). |

### Results Display

| ID | Requirement |
|---|---|
| F-18 | Show total words found and, when filters are active, the filtered count. |
| F-19 | Group words by length, longest group first. |
| F-20 | Colour-code word cards by length (2-letter through 8-letter each has a distinct colour). |
| F-21 | Show empty state when no words are found from the letters. |
| F-22 | Show filter-empty state when words exist but none match the active filters. |

---

## Non-Functional Requirements

| ID | Requirement |
|---|---|
| NF-01 | Word lookup completes in < 300 ms for any valid input (client-side only). |
| NF-02 | App is fully usable on screens ≥ 320 px wide. |
| NF-03 | No network request is required for the word-lookup feature. |
| NF-04 | Dictionary is bundled as a JS `Set` for O(1) lookup per candidate word. |
| NF-05 | App must be accessible: all interactive elements are keyboard-operable. |

---

## Out of Scope (v1)

- User accounts or saved searches.
- Word definitions or part-of-speech annotations.
- Dictionary selection (e.g. TWL vs SOWPODS).
- Wildcard / blank-tile support.
- Words longer than 8 letters.
- Server-side word validation.

---

## Dictionary

The v1 dictionary is a curated set of ~2 000 common English words, 2–8 letters long, compiled from standard Scrabble and general-use word lists. It is stored as a JavaScript `Set` in `src/lib/wordList.js` and shipped with the bundle.
