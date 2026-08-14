import React from 'react';
import { Search, X, SlidersHorizontal, Snowflake, Sparkles } from 'lucide-react';

export default function SearchBar({
  searchQuery,
  onSearchChange,
  filterOption,
  onFilterChange,
  sortBy,
  onSortChange,
  totalResults
}) {
  return (
    <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-3.5 mb-6 backdrop-blur-md shadow-xl no-print">
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
        {/* Search Input Box */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Căutați preparat, ingredient (ex: somon, trufe, burger, papanași)..."
            className="w-full bg-slate-950/80 border border-slate-800 focus:border-amber-500/60 focus:ring-1 focus:ring-amber-500/40 rounded-xl pl-10 pr-9 py-2.5 text-xs text-slate-100 placeholder-slate-500 outline-none transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-amber-400 p-0.5"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Filter Pills & Sort Dropdown */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0">
          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 shrink-0 bg-slate-950/60 p-1 rounded-xl border border-slate-800/80">
            <button
              onClick={() => onFilterChange('all')}
              className={`px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                filterOption === 'all'
                  ? 'bg-amber-500 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Toate
            </button>

            <button
              onClick={() => onFilterChange('no-gluten')}
              className={`px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                filterOption === 'no-gluten'
                  ? 'bg-amber-500 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
              title="Fără Gluten (Alergen Index 1)"
            >
              🌾 Fără Gluten
            </button>

            <button
              onClick={() => onFilterChange('no-lactose')}
              className={`px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                filterOption === 'no-lactose'
                  ? 'bg-amber-500 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
              title="Fără Lactoză (Alergen Index 7)"
            >
              🥛 Fără Lactoză
            </button>

            <button
              onClick={() => onFilterChange('fresh-only')}
              className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                filterOption === 'fresh-only'
                  ? 'bg-amber-500 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
              title="Doar preparate din ingrediente proaspete"
            >
              <Sparkles className="w-3 h-3 text-amber-400 fill-amber-400" />
              Proaspăt
            </button>
          </div>

          {/* Sort Dropdown */}
          <div className="shrink-0">
            <select
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value)}
              className="bg-slate-950/80 border border-slate-800 text-slate-300 hover:border-slate-700 text-xs rounded-xl px-3 py-2 outline-none focus:border-amber-500/60 transition-all cursor-pointer"
            >
              <option value="default">Sortare: Meniu Standard</option>
              <option value="price-asc">Preț: Crescător</option>
              <option value="price-desc">Preț: Descrescător</option>
              <option value="name">Nume (A-Z)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results Count Summary */}
      <div className="mt-2.5 flex items-center justify-between text-[11px] text-slate-400 px-1 border-t border-slate-800/40 pt-2">
        <span>Găsite <strong className="text-amber-400">{totalResults}</strong> preparate culinare</span>
        {searchQuery || filterOption !== 'all' || sortBy !== 'default' ? (
          <button
            onClick={() => {
              onSearchChange('');
              onFilterChange('all');
              onSortChange('default');
            }}
            className="text-amber-400 hover:underline flex items-center gap-1"
          >
            Resetare filtre
          </button>
        ) : null}
      </div>
    </div>
  );
}
