import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Sparkles, Filter } from 'lucide-react';
import { Category, Language } from '../types/menu';
import { TRANSLATIONS } from '../utils/translations';

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
  const t = TRANSLATIONS[lang];

  const scroll = (direction: 'left' | 'right') => {
    if (navRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      navRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleCategoryClick = (id: string, e: React.MouseEvent<HTMLButtonElement>) => {
    onSelectCategory(id);
    // Smooth scroll the clicked button into view horizontally
    e.currentTarget.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  };

  const filterOptions = [
    { id: 'all', label: t.filterAll },
    { id: 'vegetarian', label: t.filterVeg },
    { id: 'glutenFree', label: t.filterGlutenFree },
    { id: 'specialty', label: t.filterSpecialty },
    { id: 'drinks', label: t.filterDrinks }
  ];

  return (
    <div className="sticky top-[86px] sm:top-[92px] z-30 bg-white/90 backdrop-blur-xl border-b border-slate-200/90 py-2.5 px-3 sm:px-6 no-print space-y-2 font-jakarta shadow-xs">
      <div className="max-w-7xl mx-auto space-y-2">
        {/* Sticky Category Bar with Liquid Pill Styling & Touch Scrolling */}
        <div className="flex items-center justify-between gap-1.5 bg-[#F8F6F2]/80 backdrop-blur-md p-1.5 rounded-2xl border border-slate-200/80 shadow-inner">
          <button
            onClick={() => scroll('left')}
            className="p-2 rounded-xl hover:bg-white text-slate-400 hover:text-[#C19B77] transition-all shrink-0 hidden sm:flex items-center justify-center cursor-pointer shadow-2xs active:scale-95"
            title="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div
            ref={navRef}
            className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar scroll-smooth py-1 px-1 w-full"
          >
            {/* "All Categories" Pill */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={(e) => handleCategoryClick('all', e)}
              className={`flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-xl text-xs font-black whitespace-nowrap transition-all duration-250 shrink-0 cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-gradient-to-r from-[#C19B77] to-[#A8805B] text-white shadow-md shadow-[#C19B77]/30 scale-[1.02] border border-white/30'
                  : 'bg-white/90 backdrop-blur-md text-slate-700 hover:bg-white hover:text-[#C19B77] border border-slate-200/90 shadow-2xs'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.allCategories}</span>
            </motion.button>

            {/* Individual Categories */}
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              const name = cat.name[lang] || cat.name.ro;

              return (
                <motion.button
                  key={cat.id}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => handleCategoryClick(cat.id, e)}
                  className={`flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs font-black whitespace-nowrap transition-all duration-250 shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-[#C19B77] to-[#A8805B] text-white shadow-md shadow-[#C19B77]/30 scale-[1.02] border border-white/30'
                      : 'bg-white/90 backdrop-blur-md text-slate-700 hover:bg-white hover:text-[#C19B77] border border-slate-200/90 shadow-2xs'
                  }`}
                >
                  <span className="text-sm">{cat.icon}</span>
                  <span>{name}</span>
                </motion.button>
              );
            })}
          </div>

          <button
            onClick={() => scroll('right')}
            className="p-2 rounded-xl hover:bg-white text-slate-400 hover:text-[#C19B77] transition-all shrink-0 hidden sm:flex items-center justify-center cursor-pointer shadow-2xs active:scale-95"
            title="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dietary Quick Filter Chips with Smooth Transitions */}
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar py-0.5 px-0.5">
          <span className="text-[11px] font-bold text-slate-400 flex items-center gap-1 shrink-0 mr-1">
            <Filter className="w-3 h-3 text-[#C19B77]" />
            <span>{t.filterLabel}</span>
          </span>
          {filterOptions.map((opt) => {
            const isSel = dietaryFilter === opt.id;
            return (
              <motion.button
                key={opt.id}
                whileTap={{ scale: 0.95 }}
                onClick={() => onSelectDietaryFilter(opt.id)}
                className={`px-3 py-1 rounded-xl text-[11px] font-extrabold transition-all shrink-0 cursor-pointer ${
                  isSel
                    ? 'bg-slate-900 text-white shadow-sm border border-white/20'
                    : 'bg-[#F8F6F2] text-slate-600 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {opt.label}
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default CategoryTabs;
