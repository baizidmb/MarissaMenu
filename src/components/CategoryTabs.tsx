import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, Filter } from 'lucide-react';
import { Category, Language } from '../types/menu';

interface CategoryTabsProps {
  categories: Category[];
  activeCategory: string;
  onSelectCategory: (id: string) => void;
  dietaryFilter: string;
  onSelectDietaryFilter: (filter: string) => void;
  lang: Language;
}

export const CategoryTabs: React.FC<CategoryTabsProps> = ({
  categories,
  activeCategory,
  onSelectCategory,
  dietaryFilter,
  onSelectDietaryFilter,
  lang,
}) => {
  const navRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (navRef.current) {
      const scrollAmount = direction === 'left' ? -280 : 280;
      navRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const filterOptions = [
    { id: 'all', label: { ro: 'Toate', en: 'All', hu: 'Összes' } },
    { id: 'vegetarian', label: { ro: '🌱 Vegetarian', en: '🌱 Vegetarian', hu: '🌱 Vegetáriánus' } },
    { id: 'glutenFree', label: { ro: '🌾 Fără Gluten', en: '🌾 Gluten-Free', hu: '🌾 Gluténmentes' } },
    { id: 'specialty', label: { ro: '⭐ Recomandare', en: '⭐ Chef Special', hu: '⭐ Ajánlatunk' } },
    { id: 'drinks', label: { ro: '🍹 Băuturi', en: '🍹 Drinks', hu: '🍹 Italok' } }
  ];

  return (
    <div className="sticky top-[98px] z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 py-2 px-3 sm:px-6 no-print space-y-2 font-jakarta">
      <div className="max-w-7xl mx-auto space-y-2">
        {/* Sticky Category Bar with Scroll Buttons */}
        <div className="flex items-center justify-between gap-1.5 bg-[#F8F6F2] p-1.5 rounded-2xl border border-slate-200">
          <button
            onClick={() => scroll('left')}
            className="p-2 rounded-xl hover:bg-slate-200/60 text-slate-400 hover:text-[#C19B77] transition-all shrink-0 hidden sm:flex items-center justify-center cursor-pointer"
            title="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div
            ref={navRef}
            className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth py-0.5 px-1 w-full"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {/* "All Categories" Pill */}
            <button
              onClick={() => onSelectCategory('all')}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all duration-200 shrink-0 cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-[#C19B77] text-white shadow-md shadow-[#C19B77]/25 scale-[1.02]'
                  : 'bg-white text-slate-700 hover:bg-amber-100/50 border border-slate-200'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{lang === 'ro' ? 'Toate Categoriile' : lang === 'en' ? 'All Categories' : 'Minden Kategória'}</span>
            </button>

            {/* Individual Categories */}
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              const name = cat.name[lang] || cat.name.ro;

              return (
                <button
                  key={cat.id}
                  onClick={() => onSelectCategory(cat.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all duration-200 shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-[#C19B77] text-white shadow-md shadow-[#C19B77]/25 scale-[1.02]'
                      : 'bg-white text-slate-700 hover:bg-amber-100/50 border border-slate-200'
                  }`}
                >
                  <span className="text-sm">{cat.icon}</span>
                  <span>{name}</span>
                </button>
              );
            })}
          </div>

          <button
            onClick={() => scroll('right')}
            className="p-2 rounded-xl hover:bg-slate-200/60 text-slate-400 hover:text-[#C19B77] transition-all shrink-0 hidden sm:flex items-center justify-center cursor-pointer"
            title="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dietary Quick Filter Chips */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-0.5 px-0.5">
          <span className="text-[11px] font-bold text-slate-400 flex items-center gap-1 shrink-0 mr-1">
            <Filter className="w-3 h-3 text-[#C19B77]" />
            <span>Filtre:</span>
          </span>
          {filterOptions.map((opt) => {
            const isSel = dietaryFilter === opt.id;
            return (
              <button
                key={opt.id}
                onClick={() => onSelectDietaryFilter(opt.id)}
                className={`px-3 py-1 rounded-lg text-[11px] font-extrabold transition-all shrink-0 cursor-pointer ${
                  isSel
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-[#F8F6F2] text-slate-600 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {opt.label[lang] || opt.label.ro}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default CategoryTabs;
