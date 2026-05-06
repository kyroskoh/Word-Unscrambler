import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shuffle, X, Sparkles, BookOpen, ExternalLink } from "lucide-react";
import { findWords, DICTIONARIES } from "@/lib/dictionaryService";
import WordCard from "@/components/WordCard";
import FiltersPanel from "@/components/FiltersPanel";
import DictionarySelector from "@/components/DictionarySelector";

const EMPTY_FILTERS = {
  startsWith: "",
  endsWith: "",
  contains: "",
  mustInclude: "",
  exactLength: "",
};

function applyFilters(words, filters) {
  return words.filter((word) => {
    if (filters.startsWith && !word.startsWith(filters.startsWith)) return false;
    if (filters.endsWith && !word.endsWith(filters.endsWith)) return false;
    if (filters.contains && !word.includes(filters.contains)) return false;
    if (filters.mustInclude && !word.includes(filters.mustInclude)) return false;
    if (filters.exactLength && word.length !== Number(filters.exactLength)) return false;
    return true;
  });
}

export default function Home() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMsg, setLoadingMsg] = useState("");
  const [filters, setFilters] = useState(EMPTY_FILTERS);
  const [dictionary, setDictionary] = useState("builtin");
  const [error, setError] = useState(null);
  const [usedDictionary, setUsedDictionary] = useState("builtin");
  const inputRef = useRef(null);

  const handleUnscramble = async () => {
    if (!input.trim()) return;
    setIsLoading(true);
    setError(null);

    const dict = DICTIONARIES.find((d) => d.id === dictionary);
    setLoadingMsg(
      dict.isOnline
        ? `Querying ${dict.name}…`
        : "Finding words…"
    );

    try {
      const words = await findWords(input, dictionary);
      setResults(words);
      setUsedDictionary(dictionary);
    } catch {
      setError(`Could not reach ${dict.name}. Check your connection and try again.`);
      setResults(null);
    } finally {
      setIsLoading(false);
      setLoadingMsg("");
    }
  };

  const handleClear = () => {
    setInput("");
    setResults(null);
    setFilters(EMPTY_FILTERS);
    setError(null);
    inputRef.current?.focus();
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleUnscramble();
  };

  const availableLengths = results
    ? [...new Set(results.map((w) => w.length))].sort((a, b) => a - b)
    : [];

  const displayedWords = results ? applyFilters(results, filters) : [];
  const activeFilterCount = Object.values(filters).filter(Boolean).length;
  const activeDictInfo = DICTIONARIES.find((d) => d.id === usedDictionary);

  return (
    <div className="min-h-screen bg-background flex flex-col items-center px-4 py-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <div className="flex items-center justify-center gap-2 mb-3">
          <div className="w-10 h-10 rounded-2xl bg-primary flex items-center justify-center">
            <Shuffle className="w-5 h-5 text-primary-foreground" />
          </div>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
          Word Unscrambler
        </h1>
        <p className="mt-3 text-muted-foreground text-base sm:text-lg max-w-sm mx-auto">
          Enter any letters and discover every real word hidden inside them.
        </p>
      </motion.div>

      {/* Input Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="w-full max-w-xl bg-card border border-border rounded-2xl shadow-lg p-6"
      >
        <label className="block text-sm font-semibold text-muted-foreground mb-2 uppercase tracking-widest">
          Your Letters
        </label>
        <div className="relative flex items-center">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value.replace(/[^a-zA-Z]/g, ""))}
            onKeyDown={handleKeyDown}
            placeholder="e.g. aelpps"
            maxLength={15}
            className="w-full bg-secondary border border-border rounded-xl px-4 py-3.5 text-xl font-bold tracking-[0.25em] text-foreground placeholder:text-muted-foreground/40 placeholder:font-normal placeholder:tracking-normal outline-none focus:ring-2 focus:ring-ring transition-all pr-10"
            autoFocus
          />
          {input && (
            <button
              onClick={handleClear}
              className="absolute right-3 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        <div className="mt-4 flex items-center gap-2">
          {input && (
            <div className="flex gap-1.5 flex-wrap">
              {input.split("").map((ch, i) => (
                <span
                  key={i}
                  className="w-8 h-8 rounded-lg bg-accent text-accent-foreground text-sm font-bold flex items-center justify-center uppercase"
                >
                  {ch}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Dictionary selector */}
        <DictionarySelector value={dictionary} onChange={setDictionary} />

        <button
          onClick={handleUnscramble}
          disabled={!input.trim() || isLoading}
          className="mt-5 w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold rounded-xl py-3.5 text-base transition-all hover:opacity-90 active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed shadow-md"
        >
          {isLoading ? (
            <>
              <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
              <span className="text-sm">{loadingMsg}</span>
            </>
          ) : (
            <>
              <Sparkles className="w-4 h-4" />
              Unscramble
            </>
          )}
        </button>
      </motion.div>

      {/* Error state */}
      {error && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-xl mt-4 bg-destructive/10 border border-destructive/30 text-destructive rounded-2xl px-5 py-4 text-sm font-medium"
        >
          {error}
        </motion.div>
      )}

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="w-full max-w-xl mt-4"
      >
        <FiltersPanel
          filters={filters}
          onChange={setFilters}
          availableLengths={availableLengths}
        />
      </motion.div>

      {/* Results */}
      <AnimatePresence mode="wait">
        {results !== null && (
          <motion.div
            key="results"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-xl mt-8"
          >
            {/* Stats bar */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm font-semibold text-foreground">
                  {results.length === 0
                    ? "No words found"
                    : `${results.length} word${results.length !== 1 ? "s" : ""} found`}
                </span>
                <span className="text-xs text-muted-foreground bg-muted rounded-full px-2 py-0.5">
                  {activeDictInfo?.name}
                </span>
              </div>
              {results.length > 0 && activeFilterCount > 0 && (
                <span className="text-xs text-muted-foreground">
                  Showing {displayedWords.length} of {results.length}
                </span>
              )}
            </div>

            {results.length === 0 ? (
              <div className="bg-card border border-border rounded-2xl p-10 text-center">
                <p className="text-3xl mb-3">🔍</p>
                <p className="text-muted-foreground font-medium">
                  No recognizable words could be made from these letters.
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Try a different set of letters{usedDictionary === "builtin" ? " or switch to a larger dictionary" : ""}.
                </p>
              </div>
            ) : displayedWords.length === 0 ? (
              <div className="bg-card border border-border rounded-2xl p-10 text-center">
                <p className="text-3xl mb-3">🚫</p>
                <p className="text-muted-foreground font-medium">
                  No words match your current filters.
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Try adjusting or clearing some filters.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {[...new Set(displayedWords.map((w) => w.length))]
                  .sort((a, b) => b - a)
                  .map((len) => {
                    const group = displayedWords.filter((w) => w.length === len);
                    return (
                      <div key={len} className="bg-card border border-border rounded-2xl p-5">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                            {len} letters
                          </span>
                          <span className="text-xs text-muted-foreground bg-muted rounded-full px-2 py-0.5">
                            {group.length}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {group.map((word, i) => (
                            <WordCard key={word} word={word} index={i} />
                          ))}
                        </div>
                      </div>
                    );
                  })}
              </div>
            )}

            {/* Attribution for online dictionaries */}
            {activeDictInfo?.attribution && (
              <p className="mt-4 text-xs text-muted-foreground text-center">
                Results via{" "}
                <a
                  href={activeDictInfo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 hover:text-foreground inline-flex items-center gap-0.5"
                >
                  {activeDictInfo.attribution}
                  <ExternalLink className="w-3 h-3" />
                </a>
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <p className="mt-12 text-xs text-muted-foreground text-center opacity-60">
        Choose a dictionary above to control coverage and speed.
      </p>
    </div>
  );
}
