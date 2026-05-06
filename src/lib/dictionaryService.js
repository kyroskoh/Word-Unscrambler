import { WORD_LIST } from './wordList';

// ── Shared helpers ────────────────────────────────────────────────────────────

function buildFreq(letters) {
  const clean = letters.toLowerCase().replace(/[^a-z]/g, '');
  const freq = {};
  for (const ch of clean) freq[ch] = (freq[ch] || 0) + 1;
  return { clean, freq };
}

function canForm(word, freq) {
  const counts = { ...freq };
  for (const ch of word) {
    if (!counts[ch]) return false;
    counts[ch]--;
  }
  return true;
}

function sortWords(words) {
  return [...new Set(words)].sort((a, b) => b.length - a.length || a.localeCompare(b));
}

// ── Built-in (2 000+ words, synchronous) ─────────────────────────────────────

function findWordsBuiltin(letters) {
  const { clean, freq } = buildFreq(letters);
  if (clean.length < 2) return [];
  const found = [];
  for (const word of WORD_LIST) {
    if (canForm(word, freq)) found.push(word);
  }
  return sortWords(found);
}

// ── ENABLE wordlist (~172 K words, lazy CDN load) ────────────────────────────

let enableCache = null;
let enablePromise = null;

async function getEnableList() {
  if (enableCache) return enableCache;
  if (!enablePromise) {
    enablePromise = fetch(
      'https://raw.githubusercontent.com/dolph/dictionary/master/enable1.txt'
    )
      .then((r) => {
        if (!r.ok) throw new Error('Failed to load ENABLE wordlist');
        return r.text();
      })
      .then((text) => {
        enableCache = new Set(
          text.split(/\r?\n/).map((w) => w.trim().toLowerCase()).filter((w) => w.length >= 2)
        );
        enablePromise = null;
        return enableCache;
      })
      .catch((err) => {
        enablePromise = null;
        throw err;
      });
  }
  return enablePromise;
}

async function findWordsEnable(letters) {
  const { clean, freq } = buildFreq(letters);
  if (clean.length < 2) return [];
  const list = await getEnableList();
  const found = [];
  for (const word of list) {
    if (word.length >= 2 && word.length <= clean.length && canForm(word, freq)) {
      found.push(word);
    }
  }
  return sortWords(found);
}

// ── Datamuse API (online, free, ~500 K words indexed) ────────────────────────
// Strategy: for each unique starting letter × each valid word length, query
// Datamuse for up to 1 000 words matching that pattern, then filter locally.

async function findWordsDatamuse(letters) {
  const { clean, freq } = buildFreq(letters);
  if (clean.length < 2) return [];

  const uniqueLetters = [...new Set(clean)];
  const maxLen = Math.min(clean.length, 10);

  const queries = [];
  for (const letter of uniqueLetters) {
    for (let len = 2; len <= maxLen; len++) {
      queries.push(`sp=${letter}${'?'.repeat(len - 1)}&max=1000`);
    }
  }

  const BATCH = 6;
  const allWords = new Set();

  for (let i = 0; i < queries.length; i += BATCH) {
    const batch = queries.slice(i, i + BATCH);
    const results = await Promise.all(
      batch.map((q) =>
        fetch(`https://api.datamuse.com/words?${q}`)
          .then((r) => r.json())
          .then((arr) => arr.map((w) => w.word.toLowerCase()))
          .catch(() => [])
      )
    );
    for (const words of results) {
      for (const w of words) allWords.add(w);
    }
  }

  const found = [];
  for (const word of allWords) {
    if (/^[a-z]+$/.test(word) && word.length >= 2 && word.length <= clean.length && canForm(word, freq)) {
      found.push(word);
    }
  }
  return sortWords(found);
}

// ── Public API ────────────────────────────────────────────────────────────────

export const DICTIONARIES = [
  {
    id: 'builtin',
    name: 'Built-in',
    description: '2,000+ common words — instant & offline',
    isOnline: false,
  },
  {
    id: 'enable',
    name: 'ENABLE',
    description: '172,000+ Scrabble-valid words — fetched once, then cached',
    isOnline: true,
    attribution: 'ENABLE word list (public domain)',
    url: 'https://github.com/dolph/dictionary',
  },
  {
    id: 'datamuse',
    name: 'Datamuse',
    description: '500,000+ words — live query via Datamuse API',
    isOnline: true,
    attribution: 'Datamuse API',
    url: 'https://www.datamuse.com/api/',
  },
];

export async function findWords(letters, dictionaryId = 'builtin') {
  switch (dictionaryId) {
    case 'enable':   return findWordsEnable(letters);
    case 'datamuse': return findWordsDatamuse(letters);
    default:         return findWordsBuiltin(letters);
  }
}
