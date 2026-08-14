import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { Printer, ArrowLeft, Sparkles } from 'lucide-react';
import { HOTEL_INFO } from '../data/marissaMenuData';

export default function QrTableStandView({ onClose, lang = 'ro' }) {
  // Generate clean target URL for QR code
  const qrTargetUrl = typeof window !== 'undefined' ? window.location.href.split('?')[0] : 'https://hotelmarissa.ro/menu';

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8 font-jakarta">
      {/* Top Controls Bar (Hidden during printing) */}
      <div className="bg-white border border-slate-200 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 no-print shadow-xs">
        <div className="flex items-center gap-3">
          <button
            onClick={onClose}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 text-xs font-bold transition-all border border-slate-200 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-[#C19B77]" />
            <span>{lang === 'ro' ? 'Înapoi la Meniu' : 'Back to Menu'}</span>
          </button>
          <div>
            <h2 className="font-jakarta font-extrabold text-slate-900 text-base">
              {lang === 'ro' ? 'Stand QR Printabil Restaurant Marissa' : 'Printable QR Stand for Restaurant Marissa'}
            </h2>
            <p className="text-[11px] text-slate-500 font-medium">
              {lang === 'ro' ? 'Design elegant cu sigla oficială Hotel Marissa gata de printat' : 'Aesthetic printable table tent card with official logo'}
            </p>
          </div>
        </div>

        {/* Print Button */}
        <button
          onClick={handlePrint}
          className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#C19B77] hover:bg-[#A8805B] text-white font-extrabold text-xs shadow-md transition-all cursor-pointer"
        >
          <Printer className="w-4 h-4" />
          <span>{lang === 'ro' ? 'Printează Stand Meniu' : 'Print Menu Stand'}</span>
        </button>
      </div>

      {/* Printable QR Table Stand Preview */}
      <div className="flex justify-center">
        <div className="printable-qr-card bg-white rounded-3xl p-8 max-w-md w-full text-center space-y-6 border-2 border-[#C19B77] shadow-xl relative overflow-hidden">
          {/* Decorative Corner Ornaments */}
          <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#C19B77]" />
          <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#C19B77]" />
          <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#C19B77]" />
          <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#C19B77]" />

          {/* Top Branding Section with Official Logo */}
          <div className="space-y-3 border-b border-slate-100 pb-5">
            <div className="h-16 mx-auto py-1 flex items-center justify-center">
              <img
                src={HOTEL_INFO.logoUrl}
                alt="Hotel Marissa Logo"
                className="h-full w-auto object-contain"
              />
            </div>
            <h1 className="font-jakarta font-extrabold text-2xl text-slate-900 tracking-wide uppercase">
              RESTAURANT MARISSA
            </h1>
            <p className="text-xs text-[#C19B77] font-bold tracking-widest uppercase">
              {lang === 'ro' ? 'SMART DIGITAL QR MENU' : 'SMART DIGITAL QR MENU'}
            </p>
          </div>

          {/* Scannable High-Contrast QR Code Canvas */}
          <div className="bg-white p-5 rounded-2xl inline-block border-2 border-[#C19B77]/50 shadow-md my-1">
            <QRCodeSVG
              value={qrTargetUrl}
              size={200}
              bgColor={"#FFFFFF"}
              fgColor={"#111827"}
              level={"H"}
              includeMargin={false}
            />
          </div>

          {/* Customer Call to Action & Instructions */}
          <div className="space-y-1.5 text-xs text-slate-700 border-t border-slate-100 pt-5">
            <p className="font-extrabold text-[#C19B77] flex items-center justify-center gap-1.5 text-sm">
              <Sparkles className="w-4 h-4 text-[#C19B77]" />
              <span>{lang === 'ro' ? 'Scanați codul QR cu telefonul' : 'Scan QR code with smartphone'}</span>
            </p>
            <p className="text-xs text-slate-500 leading-relaxed px-4">
              {lang === 'ro'
                ? 'Accesați meniul nostru interactiv cu valori nutriționale per 100g, alergeni și preparate proaspete.'
                : 'Access our interactive digital menu with 100g nutrition, allergen declarations & fresh dishes.'}
            </p>
          </div>

          {/* Legal Compliance Footer Notice */}
          <div className="text-[10px] text-slate-400 font-mono pt-2 border-t border-slate-100/60">
            hotelmarissa.ro • Conform ANPC 183/2016 • OUG 28/1999
          </div>
        </div>
      </div>
    </div>
  );
}
