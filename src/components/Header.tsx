import React from 'react';
import { Search, Globe, ShieldAlert, Receipt, Hotel, UtensilsCrossed, X } from 'lucide-react';
import { Language } from '../types/menu';
import { HOTEL_INFO } from '../data/menuData';
import { TRANSLATIONS, getTableDisplayText } from '../utils/translations';

interface HeaderProps {
  lang: Language;
  onToggleLang: () => void;
  tableNumber: string | null;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  onOpenFiscalModal: () => void;
  onOpenAllergenModal: () => void;
  onOpenHotelModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  lang,
  onToggleLang,
  tableNumber,
  searchQuery,
  onSearchChange,
  onOpenFiscalModal,
  onOpenAllergenModal,
  onOpenHotelModal,
}) => {
  const t = TRANSLATIONS[lang];

  const langLabels: Record<Language, { flag: string; label: string }> = {
    ro: { flag: '🇷🇴', label: 'RO' },
    en: { flag: '🇬🇧', label: 'EN' },
    hu: { flag: '🇭🇺', label: 'HU' }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs no-print font-jakarta">
      {/* Top ANPC Fiscal Compliance Banner */}
      <div
        onClick={onOpenFiscalModal}
        className="bg-[#C19B77] hover:bg-[#A8805B] text-white text-[11px] py-1.5 px-3 text-center cursor-pointer transition-colors flex items-center justify-center gap-1.5 shadow-inner font-medium"
        title="OUG 28/1999 & ANPC"
      >
        <Receipt className="w-3.5 h-3.5 shrink-0" />
        <span className="truncate max-w-xl">
          {t.fiscalBanner}
        </span>
      </div>

      {/* Main Branding Header Container */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2.5 sm:py-3 space-y-2.5">
        <div className="flex items-center justify-between gap-2 sm:gap-3">
          {/* Logo & Brand Title with Translated Table Badge */}
          <div
            onClick={onOpenHotelModal}
            className="flex items-center gap-2 sm:gap-3 cursor-pointer group shrink-0 min-w-0"
          >
            <img
              src={HOTEL_INFO.logoUrl}
              alt="Hotel Marissa Logo"
              className="h-10 sm:h-14 w-auto max-w-[120px] sm:max-w-[190px] object-contain transition-transform group-hover:scale-105 shrink-0"
            />

            <div className="border-l border-slate-200 pl-2 sm:pl-3 py-0.5 flex flex-col justify-center min-w-0">
              <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                <h1 className="font-extrabold text-[11px] sm:text-base md:text-lg text-slate-900 group-hover:text-[#C19B77] transition-colors tracking-tight uppercase leading-none truncate">
                  {t.brandTitle}
                </h1>

                {/* Live URL Table Badge with Dynamic Language Translation */}
                {tableNumber && (
                  <span className="inline-flex items-center gap-1 bg-amber-50 text-[#C19B77] border border-[#C19B77]/40 px-2 py-0.5 rounded-full text-[10px] sm:text-[11px] font-extrabold shrink-0 shadow-2xs">
                    <UtensilsCrossed className="w-3 h-3" />
                    <span>{getTableDisplayText(tableNumber, lang)}</span>
                  </span>
                )}
              </div>
              <p className="text-[8px] sm:text-[10px] md:text-[11px] text-[#C19B77] font-extrabold tracking-widest uppercase mt-0.5 truncate">
                {t.brandSubtitle}
              </p>
            </div>
          </div>

          {/* Right Action Switchers */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Language Switcher Button (RO 🇷🇴 / EN 🇬🇧 / HU 🇭🇺) */}
            <button
              onClick={onToggleLang}
              className="flex items-center gap-1 px-2.5 sm:px-3 py-1.5 rounded-full bg-[#F8F6F2] hover:bg-amber-100/60 border border-[#C19B77]/50 text-slate-900 text-xs font-extrabold transition-all shadow-2xs cursor-pointer active:scale-95"
              title="Change Language (RO / EN / HU)"
            >
              <Globe className="w-3.5 h-3.5 text-[#C19B77]" />
              <span className="tracking-wider">{langLabels[lang].flag} {langLabels[lang].label}</span>
            </button>

            {/* Hotel Info Modal Button */}
            <button
              onClick={onOpenHotelModal}
              className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 text-xs font-semibold transition-all hover:border-[#C19B77] cursor-pointer"
            >
              <Hotel className="w-3.5 h-3.5 text-[#C19B77]" />
              <span>{t.hotelSpaBtn}</span>
            </button>

            {/* Allergen & ANPC Modal Button */}
            <button
              onClick={onOpenAllergenModal}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 text-xs font-semibold transition-all hover:border-[#C19B77] cursor-pointer"
            >
              <ShieldAlert className="w-3.5 h-3.5 text-[#C19B77]" />
              <span>{t.allergensBtn}</span>
            </button>
          </div>
        </div>

        {/* Live Search Bar */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder={t.searchPlaceholder}
            className="w-full bg-[#F8F6F2] focus:bg-white border border-slate-200 focus:border-[#C19B77] rounded-xl pl-10 pr-9 py-2 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all shadow-2xs font-inter"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 p-1 rounded-full hover:bg-slate-200 transition-colors"
              title={t.clearSearch}
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
export default Header;
