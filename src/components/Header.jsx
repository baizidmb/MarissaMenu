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
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E8E2D9] shadow-sm no-print">
      {/* Romanian Fiscal Compliance Top Banner */}
      <div 
        onClick={onOpenFiscalModal}
        className="bg-[#C19B77] text-white text-[11px] py-1.5 px-3 text-center cursor-pointer hover:bg-[#A8805B] transition-colors flex items-center justify-center gap-1.5 shadow-inner group"
        title={lang === 'ro' ? 'Apăsați pentru notă fiscală OUG 28/1999' : 'Click for fiscal notice OUG 28/1999'}
      >
        <Receipt className="w-3.5 h-3.5 text-white/90 animate-pulse shrink-0" />
        <span className="font-medium tracking-wide truncate max-w-2xl">
          {FISCAL_NOTICE.bannerText[lang] || FISCAL_NOTICE.bannerText.ro}
        </span>
        <Info className="w-3.5 h-3.5 text-white/80 group-hover:scale-110 transition-transform shrink-0" />
      </div>

      {/* Main Branding Header */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2.5 sm:py-3.5 flex items-center justify-between gap-3">
        {/* Left: Prominent Official Hotel Marissa Logo & Title */}
        <div 
          onClick={onOpenHotelModal}
          className="flex items-center gap-3 cursor-pointer group"
          title={lang === 'ro' ? 'Informații despre Hotel & Restaurant Marissa' : 'Hotel & Restaurant Marissa Information'}
        >
          {/* Prominent Mobile-Friendly Logo Image */}
          <div className="h-14 sm:h-16 md:h-18 flex items-center justify-center transition-transform group-hover:scale-105">
            <img
              src={HOTEL_INFO.logoUrl}
              alt="Hotel Marissa Logo"
              className="h-14 sm:h-16 md:h-18 w-auto max-w-[180px] sm:max-w-[220px] object-contain filter drop-shadow-sm"
              onError={(e) => {
                e.target.onerror = null;
                e.target.style.display = 'none';
              }}
            />
          </div>

          <div className="hidden xs:block border-l border-[#E8E2D9] pl-3 py-0.5">
            <h1 className="font-['Playfair_Display'] font-bold text-base sm:text-lg md:text-xl text-[#1C1C1C] group-hover:text-[#C19B77] transition-colors tracking-tight">
              RESTAURANT MARISSA
            </h1>
            <p className="text-[10px] sm:text-[11px] text-[#7A7A7A] font-medium tracking-widest uppercase">
              {lang === 'ro' ? 'Meniu Digital QR' : 'Smart Digital QR Menu'}
            </p>
          </div>
        </div>

        {/* Right: Customer Action Buttons & English Switcher */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* English / Romanian Language Switcher Button */}
          <button
            onClick={onToggleLang}
            className="flex items-center gap-1.5 px-3.5 py-2 sm:py-1.5 rounded-full bg-[#F8F6F2] hover:bg-[#EFEBE4] border border-[#C19B77]/50 text-[#1C1C1C] text-xs font-bold transition-all shadow-xs hover:border-[#C19B77]"
            title={lang === 'ro' ? 'Switch to English Menu' : 'Comută pe Meniul în Română'}
          >
            <Globe className="w-4 h-4 text-[#C19B77]" />
            <span className="tracking-wider">{lang === 'ro' ? '🇬🇧 EN' : '🇷🇴 RO'}</span>
          </button>

          {/* Hotel Info Modal Button */}
          <button
            onClick={onOpenHotelModal}
            className="hidden md:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white hover:bg-[#F8F6F2] border border-[#E8E2D9] text-[#373737] text-xs font-medium transition-all hover:border-[#C19B77]"
          >
            <Hotel className="w-3.5 h-3.5 text-[#C19B77]" />
            <span>Hotel & SPA</span>
          </button>

          {/* Allergen & ANPC Modal Button */}
          <button
            onClick={onOpenAllergenModal}
            className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white hover:bg-[#F8F6F2] border border-[#E8E2D9] text-[#373737] text-xs font-medium transition-all hover:border-[#C19B77]"
          >
            <ShieldAlert className="w-3.5 h-3.5 text-[#C19B77]" />
            <span>{lang === 'ro' ? 'Alergeni & ANPC' : 'Allergens & ANPC'}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
