import React from 'react';
import { Search, X, Filter, ArrowUpDown, Flame, Leaf, Snowflake } from 'lucide-react';

export default function SearchBar({
  searchQuery,
  onSearchChange,
  filterOption,
  onFilterChange,
  sortBy,
  onSortChange,
  totalResults,
  lang = 'ro'
}) {
  return (
    <div className="bg-white p-4 rounded-2xl border border-[#E8E2D9] shadow-sm space-y-3 no-print">
      <div className="flex flex-col sm:flex-row items-center gap-3">
        {/* Search Input Bar */}
        <div className="relative flex-1 w-full">
          <Search className="w-4 h-4 text-[#C19B77] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder={
              lang === 'ro'
                ? 'Căutați preparat, ingredient sau pizza...'
                : 'Search dish, ingredient, or pizza...'
            }
            className="w-full pl-10 pr-9 py-2.5 bg-[#F8F6F2] border border-[#E8E2D9] rounded-xl text-xs text-[#1C1C1C] placeholder-[#8C8C8C] outline-none focus:border-[#C19B77] focus:bg-white transition-all font-medium"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8C8C8C] hover:text-[#1C1C1C] p-1"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Sort Select Dropdown */}
        <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end">
          <div className="flex items-center gap-1.5 text-xs text-[#7A7A7A] shrink-0 font-medium">
            <ArrowUpDown className="w-3.5 h-3.5 text-[#C19B77]" />
            <span>{lang === 'ro' ? 'Sortare:' : 'Sort by:'}</span>
          </div>
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="bg-[#F8F6F2] border border-[#E8E2D9] text-[#1C1C1C] rounded-xl px-3 py-2 text-xs outline-none focus:border-[#C19B77] font-medium cursor-pointer transition-all"
          >
            <option value="default">{lang === 'ro' ? 'Implicită (Meniu)' : 'Default (Menu)'}</option>
            <option value="price-asc">{lang === 'ro' ? 'Preț: Mic ➔ Mare' : 'Price: Low ➔ High'}</option>
            <option value="price-desc">{lang === 'ro' ? 'Preț: Mare ➔ Mic' : 'Price: High ➔ Low'}</option>
            <option value="name">{lang === 'ro' ? 'Nume Alfabetic' : 'Alphabetical Name'}</option>
          </select>
        </div>
      </div>

      {/* Dietary Quick Filter Pills & Result Counter */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-t border-[#E8E2D9] pt-3 text-xs">
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="text-[11px] text-[#7A7A7A] font-medium mr-1 flex items-center gap-1">
            <Filter className="w-3 h-3 text-[#C19B77]" />
            <span>Filtre:</span>
          </span>

          <button
            onClick={() => onFilterChange('all')}
            className={`px-3 py-1 rounded-full text-[11px] font-medium transition-all ${
              filterOption === 'all'
                ? 'bg-[#1C1C1C] text-white font-bold'
                : 'bg-[#F8F6F2] text-[#373737] hover:bg-[#EFEBE4] border border-[#E8E2D9]'
            }`}
          >
            {lang === 'ro' ? 'Toate' : 'All'}
          </button>

          <button
            onClick={() => onFilterChange('no-gluten')}
            className={`px-3 py-1 rounded-full text-[11px] font-medium transition-all flex items-center gap-1 ${
              filterOption === 'no-gluten'
                ? 'bg-[#C19B77] text-white font-bold'
                : 'bg-[#F8F6F2] text-[#373737] hover:bg-[#EFEBE4] border border-[#E8E2D9]'
            }`}
          >
            <Leaf className="w-3 h-3" />
            <span>{lang === 'ro' ? 'Fără Gluten' : 'Gluten-Free'}</span>
          </button>

          <button
            onClick={() => onFilterChange('no-lactose')}
            className={`px-3 py-1 rounded-full text-[11px] font-medium transition-all flex items-center gap-1 ${
              filterOption === 'no-lactose'
                ? 'bg-[#C19B77] text-white font-bold'
                : 'bg-[#F8F6F2] text-[#373737] hover:bg-[#EFEBE4] border border-[#E8E2D9]'
            }`}
          >
            <Leaf className="w-3 h-3" />
            <span>{lang === 'ro' ? 'Fără Lactoză' : 'Lactose-Free'}</span>
          </button>

          <button
            onClick={() => onFilterChange('fresh-only')}
            className={`px-3 py-1 rounded-full text-[11px] font-medium transition-all flex items-center gap-1 ${
              filterOption === 'fresh-only'
                ? 'bg-[#C19B77] text-white font-bold'
                : 'bg-[#F8F6F2] text-[#373737] hover:bg-[#EFEBE4] border border-[#E8E2D9]'
            }`}
          >
            <Flame className="w-3 h-3" />
            <span>{lang === 'ro' ? 'Doar Proaspete' : 'Fresh Only'}</span>
          </button>
        </div>

        <div className="text-[11px] text-[#7A7A7A] font-semibold">
          {totalResults} {lang === 'ro' ? 'preparate găsite' : 'dishes found'}
        </div>
      </div>
    </div>
  );
}
