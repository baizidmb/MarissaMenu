import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { MENU_CATEGORIES } from '../data/marissaMenuData';

export default function CategoryNav({ activeCategory, onSelectCategory, lang = 'ro' }) {
  const navRef = useRef(null);

  const scroll = (direction) => {
    if (navRef.current) {
      const scrollAmount = direction === 'left' ? -250 : 250;
      navRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative z-30 no-print">
      <div className="flex items-center justify-between gap-2 bg-white/90 backdrop-blur-md p-2 rounded-2xl border border-[#E8E2D9] shadow-sm">
        {/* Scroll Left Button */}
        <button
          onClick={() => scroll('left')}
          className="p-2 rounded-xl hover:bg-[#F8F6F2] text-[#7A7A7A] hover:text-[#C19B77] transition-all shrink-0 hidden sm:flex items-center justify-center"
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
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 shrink-0 ${
              activeCategory === 'all'
                ? 'bg-[#C19B77] text-white shadow-md shadow-[#C19B77]/25 font-bold scale-[1.02]'
                : 'bg-[#F8F6F2] text-[#373737] hover:bg-[#EFEBE4] border border-[#E8E2D9]'
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
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 shrink-0 ${
                  isActive
                    ? 'bg-[#C19B77] text-white shadow-md shadow-[#C19B77]/25 font-bold scale-[1.02]'
                    : 'bg-[#F8F6F2] text-[#373737] hover:bg-[#EFEBE4] border border-[#E8E2D9]'
                }`}
              >
                <span className="text-sm">{cat.icon}</span>
                <span>{categoryName}</span>
              </button>
            );
          })}
        </div>

        {/* Scroll Right Button */}
        <button
          onClick={() => scroll('right')}
          className="p-2 rounded-xl hover:bg-[#F8F6F2] text-[#7A7A7A] hover:text-[#C19B77] transition-all shrink-0 hidden sm:flex items-center justify-center"
          title="Scroll dreapta"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
