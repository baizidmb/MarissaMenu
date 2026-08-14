import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { Printer, ArrowLeft, Hotel, Phone, Globe, ShieldCheck } from 'lucide-react';
import { HOTEL_INFO } from '../data/menuData';
import { Language } from '../types/menu';

interface QrTableStandViewProps {
  onClose: () => void;
  lang: Language;
}

export const QrTableStandView: React.FC<QrTableStandViewProps> = ({ onClose, lang }) => {
  const currentDomain = typeof window !== 'undefined' ? window.location.origin : 'https://hotelmarissa.ro';
  const qrTargetUrl = `${currentDomain}/?utm_source=qr_stand`;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#F8F6F2] py-8 px-4 font-jakarta">
      {/* Top Action Bar (Hidden when printing) */}
      <div className="max-w-4xl mx-auto mb-8 flex items-center justify-between no-print">
        <button
          onClick={onClose}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 text-xs font-bold transition-all shadow-xs cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{lang === 'ro' ? 'Înapoi la Meniu' : 'Back to Menu'}</span>
        </button>

        <button
          onClick={handlePrint}
          className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#C19B77] hover:bg-[#A8805B] text-white text-xs font-extrabold shadow-md transition-all cursor-pointer"
        >
          <Printer className="w-4 h-4" />
          <span>{lang === 'ro' ? 'Printează Stand QR (A5 / Tent)' : 'Print QR Stand'}</span>
        </button>
      </div>

      {/* Printable QR Table Tent Card */}
      <div className="max-w-md mx-auto bg-white rounded-3xl p-8 shadow-2xl border border-slate-200 text-center space-y-6 print:shadow-none print:border-none print:m-0 print:p-6 print:w-full">
        {/* Header Branding */}
        <div className="space-y-3">
          <img
            src={HOTEL_INFO.logoUrl}
            alt="Hotel Marissa Logo"
            className="h-16 mx-auto object-contain"
          />
          <h2 className="font-extrabold text-xl text-slate-900 tracking-tight uppercase">
            {HOTEL_INFO.name}
          </h2>
          <p className="text-xs text-[#C19B77] font-extrabold tracking-widest uppercase">
            ★ SMART DIGITAL MENU ★
          </p>
        </div>

        {/* QR Canvas Container */}
        <div className="bg-[#F8F6F2] p-6 rounded-3xl border-2 border-dashed border-[#C19B77]/40 inline-block shadow-inner">
          <QRCodeSVG
            value={qrTargetUrl}
            size={180}
            level="H"
            includeMargin={true}
            imageSettings={{
              src: HOTEL_INFO.logoFavicon,
              x: undefined,
              y: undefined,
              height: 36,
              width: 36,
              excavate: true,
            }}
          />
        </div>

        {/* Scan Call to Action */}
        <div className="space-y-1">
          <p className="font-extrabold text-sm text-slate-900 uppercase tracking-wide">
            {lang === 'ro' ? 'Scanați pentru Meniu Digital & Nutriție' : 'Scan for Digital Menu & Nutrition'}
          </p>
          <p className="text-xs text-slate-500 font-inter">
            Scanați codul QR cu camera telefonului mobil pentru meniul complet cu valori nutriționale per 100g.
          </p>
        </div>

        {/* Footer Legal & Compliance */}
        <div className="pt-4 border-t border-slate-100 space-y-2 text-[11px] text-slate-400 font-inter">
          <div className="flex items-center justify-center gap-4">
            <span className="flex items-center gap-1">
              <Globe className="w-3.5 h-3.5 text-[#C19B77]" />
              <span>hotelmarissa.ro</span>
            </span>
            <span className="flex items-center gap-1">
              <Phone className="w-3.5 h-3.5 text-[#C19B77]" />
              <span>{HOTEL_INFO.phoneReceptie}</span>
            </span>
          </div>
          <p className="text-[10px]">
            Conform Ordinului ANPC 201/2022 & 183/2016 • OUG 28/1999
          </p>
        </div>
      </div>
    </div>
  );
};
export default QrTableStandView;
