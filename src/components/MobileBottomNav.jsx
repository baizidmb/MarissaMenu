import React from 'react';
import { Utensils, Search, QrCode, ShieldAlert, Globe, Hotel } from 'lucide-react';

export default function MobileBottomNav({
  lang = 'ro',
  onToggleLang,
  onOpenAllergenModal,
  onOpenHotelModal,
  onToggleQrView,
  isQrViewActive,
  onScrollToSearch
}) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#E8E2D9] px-2 py-1.5 sm:hidden no-print shadow-lg flex items-center justify-around text-[10px] font-semibold text-[#7A7A7A]">
      {/* Menu / QR View Toggle Button */}
      <button
        onClick={onToggleQrView}
        className={`flex flex-col items-center gap-0.5 px-2 py-1 rounded-xl transition-all ${
          isQrViewActive ? 'text-[#C19B77] font-bold' : 'hover:text-[#1C1C1C]'
        }`}
      >
        {isQrViewActive ? <Utensils className="w-4 h-4" /> : <QrCode className="w-4 h-4" />}
        <span>{isQrViewActive ? (lang === 'ro' ? 'Meniu' : 'Menu') : 'QR Stand'}</span>
      </button>

      {/* Quick Search Jump Button */}
      <button
        onClick={onScrollToSearch}
        className="flex flex-col items-center gap-0.5 px-2 py-1 rounded-xl hover:text-[#1C1C1C] transition-all"
      >
        <Search className="w-4 h-4 text-[#C19B77]" />
        <span>{lang === 'ro' ? 'Căutare' : 'Search'}</span>
      </button>

      {/* Language Switcher Button */}
      <button
        onClick={onToggleLang}
        className="flex flex-col items-center gap-0.5 px-2 py-1 rounded-xl hover:text-[#1C1C1C] transition-all text-[#C19B77] font-bold"
      >
        <Globe className="w-4 h-4" />
        <span>{lang === 'ro' ? 'EN 🇬🇧' : 'RO 🇷🇴'}</span>
      </button>

      {/* Allergens & ANPC Modal Button */}
      <button
        onClick={onOpenAllergenModal}
        className="flex flex-col items-center gap-0.5 px-2 py-1 rounded-xl hover:text-[#1C1C1C] transition-all"
      >
        <ShieldAlert className="w-4 h-4 text-[#C19B77]" />
        <span>{lang === 'ro' ? 'Alergeni' : 'Allergens'}</span>
      </button>

      {/* Hotel & SPA Modal Button */}
      <button
        onClick={onOpenHotelModal}
        className="flex flex-col items-center gap-0.5 px-2 py-1 rounded-xl hover:text-[#1C1C1C] transition-all"
      >
        <Hotel className="w-4 h-4 text-[#C19B77]" />
        <span>Hotel</span>
      </button>
    </div>
  );
}
