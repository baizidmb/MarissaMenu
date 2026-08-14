import React from 'react';
import { Utensils, Search, ShieldAlert, Globe, Hotel } from 'lucide-react';

export default function MobileBottomNav({
  lang = 'ro',
  onToggleLang,
  onOpenAllergenModal,
  onOpenHotelModal,
  onScrollToSearch,
  onScrollToTop
}) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#E8E2D9] px-2 py-2 sm:hidden no-print shadow-lg flex items-center justify-around text-[10px] font-semibold text-[#7A7A7A]">
      {/* Scroll to Top / Menu Home */}
      <button
        onClick={onScrollToTop}
        className="flex flex-col items-center gap-0.5 px-3 py-1 rounded-xl text-[#C19B77] font-bold active:scale-95 transition-all"
      >
        <Utensils className="w-5 h-5" />
        <span>{lang === 'ro' ? 'Meniu' : 'Menu'}</span>
      </button>

      {/* Quick Search Jump */}
      <button
        onClick={onScrollToSearch}
        className="flex flex-col items-center gap-0.5 px-3 py-1 rounded-xl hover:text-[#1C1C1C] active:scale-95 transition-all"
      >
        <Search className="w-5 h-5 text-[#C19B77]" />
        <span>{lang === 'ro' ? 'Căutare' : 'Search'}</span>
      </button>

      {/* Language Switcher */}
      <button
        onClick={onToggleLang}
        className="flex flex-col items-center gap-0.5 px-3 py-1 rounded-xl text-[#1C1C1C] font-extrabold active:scale-95 transition-all"
      >
        <Globe className="w-5 h-5 text-[#C19B77]" />
        <span>{lang === 'ro' ? '🇬🇧 EN' : '🇷🇴 RO'}</span>
      </button>

      {/* Allergens & ANPC Modal */}
      <button
        onClick={onOpenAllergenModal}
        className="flex flex-col items-center gap-0.5 px-3 py-1 rounded-xl hover:text-[#1C1C1C] active:scale-95 transition-all"
      >
        <ShieldAlert className="w-5 h-5 text-[#C19B77]" />
        <span>{lang === 'ro' ? 'Alergeni' : 'Allergens'}</span>
      </button>

      {/* Hotel & SPA Info Modal */}
      <button
        onClick={onOpenHotelModal}
        className="flex flex-col items-center gap-0.5 px-3 py-1 rounded-xl hover:text-[#1C1C1C] active:scale-95 transition-all"
      >
        <Hotel className="w-5 h-5 text-[#C19B77]" />
        <span>Hotel</span>
      </button>
    </div>
  );
}
