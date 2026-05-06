import { Wifi, WifiOff } from 'lucide-react';
import { DICTIONARIES } from '@/lib/dictionaryService';

export default function DictionarySelector({ value, onChange }) {
  return (
    <div className="mt-5">
      <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2">
        Dictionary
      </label>
      <div className="flex flex-wrap gap-2">
        {DICTIONARIES.map((dict) => {
          const active = value === dict.id;
          return (
            <button
              key={dict.id}
              onClick={() => onChange(dict.id)}
              title={dict.description}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium border transition-all ${
                active
                  ? 'bg-primary text-primary-foreground border-primary shadow-sm'
                  : 'bg-secondary text-secondary-foreground border-border hover:bg-muted'
              }`}
            >
              {dict.isOnline ? (
                <Wifi className="w-3 h-3 opacity-70" />
              ) : (
                <WifiOff className="w-3 h-3 opacity-70" />
              )}
              {dict.name}
            </button>
          );
        })}
      </div>
      <p className="mt-1.5 text-xs text-muted-foreground">
        {DICTIONARIES.find((d) => d.id === value)?.description}
      </p>
    </div>
  );
}
