import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { MENU_CATEGORIES } from '../data/marissaMenuData';

export default function CategoryNav({ activeCategory, onSelectCategory, lang = 'ro' }) {
  const navRef = useRef(null);

  const scroll = (direction) => {
    if (navRef.current) {
      const scrollAmount = direction === 'left' ? -280 : 280;
      navRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative z-30 no-print">
      <div className="flex items-center justify-between gap-1.5 bg-white/90 backdrop-blur-md p-1.5 sm:p-2 rounded-2xl border border-slate-200 shadow-2xs">
        {/* Scroll Left Button */}
        <button
          onClick={() => scroll('left')}
          className="p-2.5 rounded-xl hover:bg-slate-100 text-slate-400 hover:text-[#C19B77] transition-all shrink-0 hidden sm:flex items-center justify-center cursor-pointer"
          title="Scroll stânga"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Categories Horizontal Scroll Strip */}
        <div
          ref={navRef}
          className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth py-1 px-1 w-full"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* "All" Category Pill */}
          <button
            onClick={() => onSelectCategory('all')}
            className={`flex items-center gap-1.5 px-4 py-2.5 sm:py-2 rounded-xl text-xs font-jakarta font-bold whitespace-nowrap transition-all duration-200 shrink-0 cursor-pointer ${
              activeCategory === 'all'
                ? 'bg-[#C19B77] text-white shadow-md shadow-[#C19B77]/25 scale-[1.02]'
                : 'bg-[#F8F6F2] text-slate-700 hover:bg-amber-100/50 border border-slate-200'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{lang === 'ro' ? 'Toate Categoriile' : 'All Categories'}</span>
          </button>

          {/* Individual Category Pills */}
          {MENU_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            const categoryName = typeof cat.name === 'object' ? (cat.name[lang] || cat.name.ro) : cat.name;

            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 sm:py-2 rounded-xl text-xs font-jakarta font-bold whitespace-nowrap transition-all duration-200 shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-[#C19B77] text-white shadow-md shadow-[#C19B77]/25 scale-[1.02]'
                    : 'bg-[#F8F6F2] text-slate-700 hover:bg-amber-100/50 border border-slate-200'
                }`}
              >
                <span className="text-base">{cat.icon}</span>
                <span>{categoryName}</span>
              </button>
            );
          })}
        </div>

        {/* Scroll Right Button */}
        <button
          onClick={() => scroll('right')}
          className="p-2.5 rounded-xl hover:bg-slate-100 text-slate-400 hover:text-[#C19B77] transition-all shrink-0 hidden sm:flex items-center justify-center cursor-pointer"
          title="Scroll dreapta"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
