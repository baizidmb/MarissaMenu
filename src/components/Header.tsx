import React from 'react';
import { Search, Globe, ShieldAlert, Receipt, Hotel, UtensilsCrossed } from 'lucide-react';
import { Language } from '../types/menu';
import { HOTEL_INFO } from '../data/menuData';

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
  const langLabels: Record<Language, { flag: string; label: string }> = {
    ro: { flag: '🇷🇴', label: 'RO' },
    en: { flag: '🇬🇧', label: 'EN' },
    hu: { flag: '🇭🇺', label: 'HU' }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs no-print font-jakarta">
      {/* Top ANPC Fiscal Legal Compliance Banner */}
      <div
        onClick={onOpenFiscalModal}
        className="bg-[#C19B77] hover:bg-[#A8805B] text-white text-[11px] py-1.5 px-3 text-center cursor-pointer transition-colors flex items-center justify-center gap-2 shadow-inner font-medium"
        title="OUG 28/1999 & ANPC"
      >
        <Receipt className="w-3.5 h-3.5 shrink-0" />
        <span className="truncate max-w-xl">
          {lang === 'ro'
            ? '🇷🇴 Conform OUG 28/1999: Solicitați Bonul Fiscal | TelVerde: 0800.800.085'
            : lang === 'en'
            ? '🇬🇧 Fiscal Receipt Notice OUG 28/1999 | Helpline: 0800.800.085'
            : '🇭🇺 OUG 28/1999 Jogszabály: Kérje a nyugtát | TelVerde: 0800.800.085'}
        </span>
      </div>

      {/* Main Branding Header Container */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2.5 sm:py-3 space-y-3">
        <div className="flex items-center justify-between gap-3">
          {/* Logo & Brand Title with Table Badge */}
          <div
            onClick={onOpenHotelModal}
            className="flex items-center gap-2.5 sm:gap-3 cursor-pointer group shrink-0"
          >
            <img
              src={HOTEL_INFO.logoUrl}
              alt="Hotel Marissa Logo"
              className="h-11 sm:h-14 w-auto max-w-[140px] sm:max-w-[200px] object-contain transition-transform group-hover:scale-105"
            />

            <div className="border-l border-slate-200 pl-2.5 sm:pl-3 py-0.5 flex flex-col justify-center">
              <div className="flex items-center gap-2">
                <h1 className="font-extrabold text-xs sm:text-base md:text-lg text-slate-900 group-hover:text-[#C19B77] transition-colors tracking-tight uppercase leading-none">
                  HOTEL & RESTAURANT MARISSA
                </h1>

                {/* Live URL Table Badge if ?table=X present */}
                {tableNumber && (
                  <span className="inline-flex items-center gap-1 bg-amber-50 text-[#C19B77] border border-[#C19B77]/40 px-2 py-0.5 rounded-full text-[10px] font-extrabold shrink-0">
                    <UtensilsCrossed className="w-3 h-3" />
                    <span>Masa #{tableNumber}</span>
                  </span>
                )}
              </div>
              <p className="text-[9px] sm:text-[11px] text-[#C19B77] font-extrabold tracking-widest uppercase mt-0.5">
                ★ SMART DIGITAL QR MENU ★
              </p>
            </div>
          </div>

          {/* Right Action Switchers */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Language Switcher Button (RO 🇷🇴 / EN 🇬🇧 / HU 🇭🇺) */}
            <button
              onClick={onToggleLang}
              className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#F8F6F2] hover:bg-amber-100/60 border border-[#C19B77]/50 text-slate-900 text-xs font-extrabold transition-all shadow-2xs cursor-pointer"
              title="Change Language (RO / EN / HU)"
            >
              <Globe className="w-3.5 h-3.5 text-[#C19B77]" />
              <span>{langLabels[lang].flag} {langLabels[lang].label}</span>
            </button>

            {/* Hotel Info Modal Button */}
            <button
              onClick={onOpenHotelModal}
              className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 text-xs font-semibold transition-all hover:border-[#C19B77] cursor-pointer"
            >
              <Hotel className="w-3.5 h-3.5 text-[#C19B77]" />
              <span>Hotel & SPA</span>
            </button>

            {/* Allergen & ANPC Modal Button */}
            <button
              onClick={onOpenAllergenModal}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 text-xs font-semibold transition-all hover:border-[#C19B77] cursor-pointer"
            >
              <ShieldAlert className="w-3.5 h-3.5 text-[#C19B77]" />
              <span>{lang === 'ro' ? 'Alergeni & ANPC' : lang === 'en' ? 'Allergens' : 'Allergének'}</span>
            </button>
          </div>
        </div>

        {/* Live Search Bar */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder={
              lang === 'ro'
                ? 'Căutați preparate, ingrediente sau băuturi (ex: Ciorbă, Burger, Somon, Pizza)...'
                : lang === 'en'
                ? 'Search dishes, ingredients or drinks (e.g. Soup, Burger, Salmon, Pizza)...'
                : 'Keresés az ételek, összetevők vagy italok között...'
            }
            className="w-full bg-[#F8F6F2] focus:bg-white border border-slate-200 focus:border-[#C19B77] rounded-xl pl-10 pr-4 py-2 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all shadow-2xs font-inter"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-600 px-1"
            >
              ✕
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
export default Header;
