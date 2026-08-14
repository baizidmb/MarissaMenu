import React from 'react';
import { UtensilsCrossed, QrCode, ShieldAlert, Receipt, Info, Sparkles, Hotel } from 'lucide-react';
import { FISCAL_NOTICE, HOTEL_INFO } from '../data/marissaMenuData';

export default function Header({
  onOpenFiscalModal,
  onOpenAllergenModal,
  onOpenHotelModal,
  onToggleQrView,
  isQrViewActive
}) {
  return (
    <header className="sticky top-0 z-40 bg-[#0B0F19]/90 backdrop-blur-xl border-b border-slate-800/80 shadow-2xl no-print">
      {/* Romanian Fiscal Compliance Banner */}
      <div 
        onClick={onOpenFiscalModal}
        className="bg-gradient-to-r from-amber-900/90 via-amber-700/80 to-amber-900/90 text-amber-100 text-xs py-2 px-3 text-center cursor-pointer hover:brightness-110 transition-all flex items-center justify-center gap-2 border-b border-amber-500/30 shadow-inner group"
        title="Apăsați pentru a vizualiza nota legală completă OUG 28/1999"
      >
        <Receipt className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
        <span className="font-medium tracking-wide truncate max-w-xl">
          {FISCAL_NOTICE.bannerText}
        </span>
        <Info className="w-3.5 h-3.5 text-amber-300 opacity-80 group-hover:scale-110 transition-transform" />
      </div>

      {/* Main Branding Header */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Logo & Title */}
        <div 
          onClick={onOpenHotelModal}
          className="flex items-center gap-3 cursor-pointer group"
          title="Informații despre Hotel & Restaurant Marissa"
        >
          {/* Official Hotel Marissa Logo Container */}
          <div className="h-11 px-2 py-1 rounded-xl bg-slate-900/90 border border-amber-500/40 group-hover:border-amber-400 transition-all flex items-center justify-center shadow-lg shadow-amber-500/10">
            <img
              src={HOTEL_INFO.logoUrl}
              alt="Hotel Marissa Logo"
              className="h-full w-auto object-contain filter drop-shadow"
              onError={(e) => {
                e.target.onerror = null;
                e.target.style.display = 'none';
              }}
            />
            <UtensilsCrossed className="w-5 h-5 text-amber-400 fallback-icon" style={{ display: 'none' }} />
          </div>

          <div>
            <div className="flex items-center gap-1.5">
              <h1 className="font-['Cinzel'] font-bold text-lg md:text-xl tracking-wider text-amber-400 group-hover:text-amber-300 transition-colors drop-shadow-sm">
                RESTAURANT MARISSA
              </h1>
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            </div>
            <p className="text-[11px] text-slate-400 font-medium tracking-wide">
              Smart QR Menu • Gourmet & Comfort Dining
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          {/* Hotel Info Modal Button */}
          <button
            onClick={onOpenHotelModal}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 border border-slate-700 text-slate-200 text-xs font-medium transition-all hover:border-amber-500/40 hover:text-amber-300"
            title="Informații Hotel, SPA & Contact"
          >
            <Hotel className="w-4 h-4 text-amber-400" />
            <span className="hidden md:inline">Hotel & SPA</span>
          </button>

          {/* Allergen & ANPC Modal Button */}
          <button
            onClick={onOpenAllergenModal}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 border border-slate-700 text-slate-200 text-xs font-medium transition-all hover:border-amber-500/40 hover:text-amber-300"
            title="Ghid Alergeni (1-14) & Produse Decongelate ANPC 183/2016"
          >
            <ShieldAlert className="w-4 h-4 text-amber-400" />
            <span className="hidden sm:inline">Alergeni & ANPC</span>
          </button>

          {/* QR Stand View Toggle Button */}
          <button
            onClick={onToggleQrView}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all border ${
              isQrViewActive
                ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-lg shadow-amber-500/25'
                : 'bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-slate-950 border-amber-500'
            }`}
            title="Stand Printabil QR Masă"
          >
            <QrCode className="w-4 h-4" />
            <span className="hidden sm:inline">{isQrViewActive ? 'Meniu' : 'QR Stand'}</span>
            <span className="sm:hidden">{isQrViewActive ? 'Meniu' : 'QR'}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
