import { useState } from "react";
import { SlidersHorizontal, ChevronDown, ChevronUp, X } from "lucide-react";

const FilterInput = ({ label, placeholder, value, onChange }) => (
  <div>
    <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-1.5">
      {label}
    </label>
    <div className="relative">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value.replace(/[^a-zA-Z]/g, "").toLowerCase())}
        placeholder={placeholder}
        className="w-full bg-secondary border border-border rounded-lg px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none focus:ring-2 focus:ring-ring transition-all pr-7"
      />
      {value && (
        <button
          onClick={() => onChange("")}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
        >
          <X className="w-3 h-3" />
        </button>
      )}
    </div>
  </div>
);

export default function FiltersPanel({ filters, onChange, availableLengths }) {
  const [open, setOpen] = useState(false);

  const activeCount = [
    filters.startsWith,
    filters.endsWith,
    filters.contains,
    filters.mustInclude,
    filters.exactLength,
  ].filter(Boolean).length;

  const handleClearAll = () => {
    onChange({ startsWith: "", endsWith: "", contains: "", mustInclude: "", exactLength: "" });
  };

  return (
    <div className="bg-card border border-border rounded-2xl overflow-hidden mb-5">
      {/* Toggle header */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between px-5 py-3.5 hover:bg-muted/40 transition-colors"
      >
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="w-4 h-4 text-muted-foreground" />
          <span className="text-sm font-semibold text-foreground">Filters</span>
          {activeCount > 0 && (
            <span className="bg-primary text-primary-foreground text-xs font-bold rounded-full px-2 py-0.5">
              {activeCount}
            </span>
          )}
        </div>
        <div className="flex items-center gap-2">
          {activeCount > 0 && (
            <button
              onClick={(e) => { e.stopPropagation(); handleClearAll(); }}
              className="text-xs text-muted-foreground hover:text-foreground underline underline-offset-2 transition-colors"
            >
              Clear all
            </button>
          )}
          {open ? (
            <ChevronUp className="w-4 h-4 text-muted-foreground" />
          ) : (
            <ChevronDown className="w-4 h-4 text-muted-foreground" />
          )}
        </div>
      </button>

      {/* Filter fields */}
      {open && (
        <div className="px-5 pb-5 pt-1 grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-border">
          <FilterInput
            label="Starts with"
            placeholder="e.g. sp"
            value={filters.startsWith}
            onChange={(v) => onChange({ ...filters, startsWith: v })}
          />
          <FilterInput
            label="Ends with"
            placeholder="e.g. ing"
            value={filters.endsWith}
            onChange={(v) => onChange({ ...filters, endsWith: v })}
          />
          <FilterInput
            label="Contains"
            placeholder="e.g. ar"
            value={filters.contains}
            onChange={(v) => onChange({ ...filters, contains: v })}
          />
          <FilterInput
            label="Must include letter"
            placeholder="e.g. x"
            value={filters.mustInclude}
            onChange={(v) => onChange({ ...filters, mustInclude: v.slice(0, 1) })}
          />

          {/* Word length */}
          <div className="sm:col-span-2">
            <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-1.5">
              Word length
            </label>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => onChange({ ...filters, exactLength: "" })}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                  !filters.exactLength
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "bg-secondary text-secondary-foreground hover:bg-muted"
                }`}
              >
                Any
              </button>
              {availableLengths.map((len) => (
                <button
                  key={len}
                  onClick={() =>
                    onChange({
                      ...filters,
                      exactLength: filters.exactLength === String(len) ? "" : String(len),
                    })
                  }
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                    filters.exactLength === String(len)
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "bg-secondary text-secondary-foreground hover:bg-muted"
                  }`}
                >
                  {len}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}