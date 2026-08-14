import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { MENU_CATEGORIES } from '../data/marissaMenuData';

export default function CategoryNav({ activeCategory, onSelectCategory }) {
  const scrollRef = useRef(null);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -260 : 260;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="sticky top-[93px] z-30 bg-[#0B0F19]/95 backdrop-blur-md border-b border-slate-800/90 py-2.5 px-2 no-print shadow-md">
      <div className="max-w-7xl mx-auto relative flex items-center">
        {/* Left Arrow */}
        <button
          onClick={() => handleScroll('left')}
          className="hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-amber-400 border border-slate-700/80 shadow-md absolute left-0 z-10 transition-all"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Categories Bar */}
        <div
          ref={scrollRef}
          className="flex items-center gap-2 overflow-x-auto scrollbar-none scroll-smooth px-1 md:px-10 py-1 w-full"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* All Categories Pill */}
          <button
            onClick={() => onSelectCategory('all')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border shrink-0 ${
              activeCategory === 'all'
                ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 border-amber-400 shadow-md shadow-amber-500/20 scale-105'
                : 'bg-slate-900/90 text-slate-300 hover:text-amber-300 border-slate-800 hover:border-slate-700'
            }`}
          >
            <span>✨</span>
            <span>Toate Preparatele</span>
          </button>

          {MENU_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all border shrink-0 ${
                  isActive
                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold border-amber-400 shadow-md shadow-amber-500/20 scale-105'
                    : 'bg-slate-900/90 text-slate-300 hover:text-amber-300 border-slate-800 hover:border-slate-700'
                }`}
              >
                <span className="text-base">{cat.icon}</span>
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => handleScroll('right')}
          className="hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-amber-400 border border-slate-700/80 shadow-md absolute right-0 z-10 transition-all"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
