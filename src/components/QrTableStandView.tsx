import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { Printer, ArrowLeft, Lock, Phone, Globe, ShieldCheck, Sparkles } from 'lucide-react';
import { HOTEL_INFO } from '../data/menuData';
import { Language } from '../types/menu';
import { TRANSLATIONS, getTableDisplayText } from '../utils/translations';

interface QrTableStandViewProps {
  onClose: () => void;
  onLock: () => void;
  lang: Language;
}

export const QrTableStandView: React.FC<QrTableStandViewProps> = ({ onClose, onLock, lang }) => {
  const [selectedTable, setSelectedTable] = useState<string>('1');
  const [designFormat, setDesignFormat] = useState<'sticker' | 'tent' | 'batch'>('sticker');
  const [batchCount, setBatchCount] = useState<number>(12);

  const t = TRANSLATIONS[lang];
  const currentDomain = typeof window !== 'undefined' ? window.location.origin : 'https://hotelmarissa.ro';
  const getQrUrlForTable = (table: string) => `${currentDomain}/?table=${encodeURIComponent(table)}&lang=${lang}&utm_source=qr_stand`;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#F8F6F2] py-6 sm:py-8 px-3 sm:px-4 font-jakarta">
      {/* Top Action & Configuration Bar (Hidden during printing) */}
      <div className="max-w-5xl mx-auto mb-6 sm:mb-8 space-y-4 no-print">
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 text-xs font-bold transition-all shadow-xs cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{t.backToMenu}</span>
            </button>

            <button
              onClick={onLock}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-rose-50 hover:bg-rose-100 border border-rose-200 text-rose-700 text-xs font-bold transition-all shadow-xs cursor-pointer"
              title={t.lockPanel}
            >
              <Lock className="w-3.5 h-3.5" />
              <span>{t.lockPanel}</span>
            </button>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            {/* Format Selector Pills */}
            <div className="bg-white p-1 rounded-2xl border border-slate-200 flex items-center gap-1 shadow-2xs">
              <button
                onClick={() => setDesignFormat('sticker')}
                className={`px-3 py-1.5 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                  designFormat === 'sticker'
                    ? 'bg-[#C19B77] text-white shadow-xs'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                🏷️ {lang === 'hu' ? 'Matrica (10x10)' : lang === 'en' ? 'Sticker (10x10)' : 'Sticker Masă (10x10)'}
              </button>
              <button
                onClick={() => setDesignFormat('tent')}
                className={`px-3 py-1.5 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                  designFormat === 'tent'
                    ? 'bg-[#C19B77] text-white shadow-xs'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                📐 {lang === 'hu' ? 'A5 Állvány' : lang === 'en' ? 'A5 Tent' : 'Stand Cort A5'}
              </button>
              <button
                onClick={() => setDesignFormat('batch')}
                className={`px-3 py-1.5 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                  designFormat === 'batch'
                    ? 'bg-[#C19B77] text-white shadow-xs'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                📑 Batch (1 - {batchCount})
              </button>
            </div>

            {/* Print Button */}
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-black text-white text-xs font-extrabold shadow-md transition-all cursor-pointer"
            >
              <Printer className="w-4 h-4 text-amber-300" />
              <span>{t.printBtn}</span>
            </button>
          </div>
        </div>

        {/* Table Number Customizer Bar */}
        {designFormat !== 'batch' ? (
          <div className="bg-white p-3.5 sm:p-4 rounded-2xl border border-slate-200 flex items-center justify-between gap-3 shadow-2xs flex-wrap">
            <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
              <span className="text-xs font-extrabold text-slate-900">{t.tableLabel}:</span>
              <div className="flex items-center gap-1.5 overflow-x-auto max-w-xl py-1">
                {['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'Terasă 1', 'Terasă 2', 'Bar'].map((tbl) => (
                  <button
                    key={tbl}
                    onClick={() => setSelectedTable(tbl)}
                    className={`px-3 py-1 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer ${
                      selectedTable === tbl
                        ? 'bg-[#C19B77] text-white shadow-xs'
                        : 'bg-[#F8F6F2] text-slate-700 hover:bg-slate-200 border border-slate-200'
                    }`}
                  >
                    {getTableDisplayText(tbl, lang)}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <span className="text-xs text-slate-400 font-bold">Custom:</span>
              <input
                type="text"
                value={selectedTable}
                onChange={(e) => setSelectedTable(e.target.value)}
                className="w-20 px-2.5 py-1 text-xs font-bold border border-slate-200 rounded-lg outline-none focus:border-[#C19B77] text-center"
              />
            </div>
          </div>
        ) : (
          <div className="bg-white p-3.5 sm:p-4 rounded-2xl border border-slate-200 flex items-center justify-between gap-4 shadow-2xs flex-wrap">
            <span className="text-xs font-extrabold text-slate-900">Generează stickere pentru:</span>
            <div className="flex items-center gap-2 flex-wrap">
              {[6, 12, 18, 24, 30].map((count) => (
                <button
                  key={count}
                  onClick={() => setBatchCount(count)}
                  className={`px-3 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    batchCount === count
                      ? 'bg-[#C19B77] text-white shadow-xs'
                      : 'bg-[#F8F6F2] text-slate-700 hover:bg-slate-200 border border-slate-200'
                  }`}
                >
                  {lang === 'hu' ? `1 - ${count}. Asztal` : `${t.tableLabel} 1 - ${count}`}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* SINGLE STICKABLE TABLE DECAL DESIGN (FORMAT 1: 10x10cm STICKER - NO WIFI) */}
      {designFormat === 'sticker' && (
        <div className="max-w-sm mx-auto bg-white rounded-3xl p-6 sm:p-7 shadow-2xl border-4 border-[#C19B77]/60 text-center space-y-4 print:shadow-none print:m-0 print:p-6 print:w-[380px] relative overflow-hidden">
          {/* Decorative Corner Ornaments */}
          <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-[#C19B77]/50 rounded-tl-lg pointer-events-none" />
          <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-[#C19B77]/50 rounded-tr-lg pointer-events-none" />
          <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-[#C19B77]/50 rounded-bl-lg pointer-events-none" />
          <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-[#C19B77]/50 rounded-br-lg pointer-events-none" />

          {/* Logo & Hotel Title */}
          <div className="space-y-1">
            <img
              src={HOTEL_INFO.logoUrl}
              alt="Hotel Marissa Logo"
              className="h-12 mx-auto object-contain"
            />
            <h2 className="font-extrabold text-sm text-slate-900 tracking-tight uppercase leading-tight">
              {HOTEL_INFO.name}
            </h2>
          </div>

          {/* Prominent Table Badge */}
          <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-gradient-to-r from-amber-500 to-[#C19B77] text-white shadow-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="font-extrabold text-sm tracking-wider uppercase">{getTableDisplayText(selectedTable, lang)}</span>
          </div>

          {/* QR Code Container */}
          <div className="bg-[#F8F6F2] p-4 rounded-2xl border-2 border-dashed border-[#C19B77]/50 inline-block shadow-inner">
            <QRCodeSVG
              value={getQrUrlForTable(selectedTable)}
              size={175}
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

          {/* Instructions */}
          <div className="space-y-1">
            <p className="font-extrabold text-xs text-slate-900 uppercase tracking-wide">
              {lang === 'hu' ? 'Szkennelje a Digitális Étlaphoz & Rendeléshez' : lang === 'en' ? 'Scan for Digital Menu & Order' : 'Scanați pentru Meniu Digital & Comandă'}
            </p>
            <p className="text-[10px] text-slate-500 font-inter">
              {lang === 'hu' ? 'Irányítsa telefonja kameráját a QR-kódra a teljes étlap megtekintéséhez.' : lang === 'en' ? 'Point your smartphone camera at the QR code to browse the complete menu.' : 'Apropiați camera telefonului de codul QR pentru a vizualiza meniul complet.'}
            </p>
          </div>

          {/* Clean Legal & Hospitality Footer (NO WIFI) */}
          <div className="pt-3 border-t border-slate-100 space-y-1 text-[10px] text-slate-500 font-inter">
            <div className="flex items-center justify-center gap-3 font-bold text-slate-700">
              <span className="flex items-center gap-1">
                <Globe className="w-3 h-3 text-[#C19B77]" />
                <span>hotelmarissa.ro</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Phone className="w-3 h-3 text-[#C19B77]" />
                <span>{HOTEL_INFO.phoneReceptie}</span>
              </span>
            </div>
            <p className="text-[9px] text-slate-400">
              ANPC Order 201/2022 & 183/2016 • OUG 28/1999
            </p>
          </div>
        </div>
      )}

      {/* STAND CORT A5 DESIGN (FORMAT 2 - NO WIFI) */}
      {designFormat === 'tent' && (
        <div className="max-w-md mx-auto bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 text-center space-y-6 print:shadow-none print:border-none print:m-0 print:p-6 print:w-full">
          <div className="space-y-2">
            <img
              src={HOTEL_INFO.logoUrl}
              alt="Hotel Marissa Logo"
              className="h-16 mx-auto object-contain"
            />
            <h2 className="font-extrabold text-xl text-slate-900 tracking-tight uppercase">
              {HOTEL_INFO.name}
            </h2>
            <div className="inline-flex items-center gap-1 px-4 py-1 rounded-full bg-slate-900 text-amber-400 text-xs font-extrabold uppercase">
              {getTableDisplayText(selectedTable, lang)}
            </div>
          </div>

          <div className="bg-[#F8F6F2] p-5 rounded-3xl border-2 border-dashed border-[#C19B77]/50 inline-block shadow-inner">
            <QRCodeSVG
              value={getQrUrlForTable(selectedTable)}
              size={190}
              level="H"
              includeMargin={true}
              imageSettings={{
                src: HOTEL_INFO.logoFavicon,
                x: undefined,
                y: undefined,
                height: 38,
                width: 38,
                excavate: true,
              }}
            />
          </div>

          <div className="space-y-1">
            <p className="font-extrabold text-sm text-slate-900 uppercase tracking-wide">
              {lang === 'hu' ? 'Szkennelje a Digitális Étlaphoz & Tápértékekhez' : lang === 'en' ? 'Scan for Digital Menu & Nutrition' : 'Scanați pentru Meniu Digital & Nutriție'}
            </p>
            <p className="text-xs text-slate-500 font-inter">
              {lang === 'hu' ? 'Teljes étlap az ANPC 201/2022 rendelet szerint: 100g-os tápértékek és allergének.' : lang === 'en' ? 'Complete menu compliant with ANPC Order 201/2022: per 100g nutrition and allergens.' : 'Meniu complet conform ANPC Order 201/2022: valori nutriționale per 100g, alergeni și produse decongelate.'}
            </p>
          </div>

          <div className="pt-4 border-t border-slate-100 space-y-2 text-[11px] text-slate-500 font-inter">
            <div className="flex items-center justify-center gap-4 font-bold text-slate-700">
              <span className="flex items-center gap-1">
                <Globe className="w-3.5 h-3.5 text-[#C19B77]" />
                <span>hotelmarissa.ro</span>
              </span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-[#C19B77]" />
                <span>{HOTEL_INFO.phoneReceptie}</span>
              </span>
            </div>
            <p className="text-[10px] text-slate-400">
              Conform Ordinului ANPC 201/2022 & 183/2016 • OUG 28/1999
            </p>
          </div>
        </div>
      )}

      {/* MULTI-TABLE BATCH STICKER GENERATOR (FORMAT 3: GRID PRINT SHEET - NO WIFI) */}
      {designFormat === 'batch' && (
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 print:grid-cols-3 print:gap-4">
            {Array.from({ length: batchCount }, (_, i) => String(i + 1)).map((tableNum) => (
              <div
                key={tableNum}
                className="bg-white rounded-2xl p-4 shadow-md border-2 border-[#C19B77]/60 text-center space-y-2.5 print:shadow-none print:break-inside-avoid relative overflow-hidden"
              >
                <div className="flex items-center justify-between px-1">
                  <img
                    src={HOTEL_INFO.logoUrl}
                    alt="Logo"
                    className="h-6 object-contain"
                  />
                  <span className="px-2.5 py-0.5 rounded-full bg-[#C19B77] text-white text-[11px] font-extrabold">
                    {getTableDisplayText(tableNum, lang)}
                  </span>
                </div>

                <div className="bg-[#F8F6F2] p-2 rounded-xl border border-dashed border-[#C19B77]/40 inline-block">
                  <QRCodeSVG
                    value={getQrUrlForTable(tableNum)}
                    size={110}
                    level="H"
                    includeMargin={true}
                    imageSettings={{
                      src: HOTEL_INFO.logoFavicon,
                      x: undefined,
                      y: undefined,
                      height: 22,
                      width: 22,
                      excavate: true,
                    }}
                  />
                </div>

                <div className="space-y-0.5">
                  <p className="font-extrabold text-[10px] text-slate-900 uppercase">
                    {lang === 'hu' ? 'Digitális Étlap' : lang === 'en' ? 'Scan Digital Menu' : 'Scanați Meniul Digital'}
                  </p>
                  <p className="text-[8px] text-slate-400 font-inter truncate">
                    hotelmarissa.ro • ANPC 201/2022
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default QrTableStandView;
