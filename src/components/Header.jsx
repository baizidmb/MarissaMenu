import React from 'react';
import { ShieldAlert, Receipt, Info, Hotel, Globe } from 'lucide-react';
import { FISCAL_NOTICE, HOTEL_INFO } from '../data/marissaMenuData';

export default function Header({
  lang = 'ro',
  onToggleLang,
  onOpenFiscalModal,
  onOpenAllergenModal,
  onOpenHotelModal,
}) {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs no-print">
      {/* Romanian Fiscal Compliance Top Banner */}
      <div 
        onClick={onOpenFiscalModal}
        className="bg-[#C19B77] text-white text-[11px] py-1.5 px-3 text-center cursor-pointer hover:bg-[#A8805B] transition-colors flex items-center justify-center gap-1.5 shadow-inner group font-inter font-medium"
        title={lang === 'ro' ? 'Apăsați pentru notă fiscală OUG 28/1999' : 'Click for fiscal notice OUG 28/1999'}
      >
        <Receipt className="w-3.5 h-3.5 text-white/90 shrink-0" />
        <span className="tracking-wide truncate max-w-2xl">
          {FISCAL_NOTICE.bannerText[lang] || FISCAL_NOTICE.bannerText.ro}
        </span>
        <Info className="w-3.5 h-3.5 text-white/80 group-hover:scale-110 transition-transform shrink-0" />
      </div>

      {/* Main Branding Header */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between gap-3">
        {/* Left: Official Hotel & Restaurant Marissa Logo & Stylish Title */}
        <div 
          onClick={onOpenHotelModal}
          className="flex items-center gap-2.5 sm:gap-3 cursor-pointer group"
          title={lang === 'ro' ? 'Informații despre Hotel & Restaurant Marissa' : 'Hotel & Restaurant Marissa Information'}
        >
          {/* Mobile-Friendly Logo Image */}
          <div className="h-11 sm:h-14 md:h-16 flex items-center justify-center transition-transform group-hover:scale-105 shrink-0">
            <img
              src={HOTEL_INFO.logoUrl}
              alt="Hotel Marissa Logo"
              className="h-11 sm:h-14 md:h-16 w-auto max-w-[140px] sm:max-w-[200px] object-contain"
              onError={(e) => {
                e.target.onerror = null;
                e.target.style.display = 'none';
              }}
            />
          </div>

          {/* Stylish Bold Brand Title */}
          <div className="border-l border-slate-200 pl-2.5 sm:pl-3 py-0.5 flex flex-col justify-center">
            <h1 className="font-jakarta font-extrabold text-xs sm:text-base md:text-lg text-slate-900 group-hover:text-[#C19B77] transition-colors tracking-tight leading-tight uppercase">
              HOTEL & RESTAURANT MARISSA
            </h1>
            <p className="text-[9px] sm:text-[11px] text-[#C19B77] font-extrabold tracking-widest uppercase font-jakarta">
              {lang === 'ro' ? '★ SMART DIGITAL MENU ★' : '★ SMART DIGITAL MENU ★'}
            </p>
          </div>
        </div>

        {/* Right: Customer Action Buttons & Language Switcher */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
          {/* English / Romanian Language Switcher Button */}
          <button
            onClick={onToggleLang}
            className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#F8F6F2] hover:bg-amber-100/60 border border-[#C19B77]/50 text-slate-900 text-xs font-jakarta font-extrabold transition-all shadow-2xs hover:border-[#C19B77] cursor-pointer"
            title={lang === 'ro' ? 'Switch to English Menu' : 'Comută pe Meniul în Română'}
          >
            <Globe className="w-3.5 h-3.5 text-[#C19B77]" />
            <span className="tracking-wider">{lang === 'ro' ? '🇬🇧 EN' : '🇷🇴 RO'}</span>
          </button>

          {/* Hotel Info Modal Button */}
          <button
            onClick={onOpenHotelModal}
            className="hidden md:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 text-xs font-jakarta font-semibold transition-all hover:border-[#C19B77] cursor-pointer"
          >
            <Hotel className="w-3.5 h-3.5 text-[#C19B77]" />
            <span>Hotel & SPA</span>
          </button>

          {/* Allergen & ANPC Modal Button */}
          <button
            onClick={onOpenAllergenModal}
            className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 text-xs font-jakarta font-semibold transition-all hover:border-[#C19B77] cursor-pointer"
          >
            <ShieldAlert className="w-3.5 h-3.5 text-[#C19B77]" />
            <span>{lang === 'ro' ? 'Alergeni & ANPC' : 'Allergens & ANPC'}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
