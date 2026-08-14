import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { Printer, UtensilsCrossed, Sparkles, ArrowLeft, CheckCircle, Hotel } from 'lucide-react';
import { HOTEL_INFO } from '../data/marissaMenuData';

export default function QrTableStandView({ onClose }) {
  const [locationType, setLocationType] = useState('table'); // 'table' or 'room'
  const [selectedNumber, setSelectedNumber] = useState('1');

  // Generate URL for QR code (points to current window location)
  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://hotelmarissa.ro/menu';
  const qrTargetUrl = `${currentUrl.split('?')[0]}?${locationType}=${selectedNumber}`;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 space-y-6">
      {/* Top Controls Bar (Hidden during printing) */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 no-print backdrop-blur-md shadow-xl">
        <div className="flex items-center gap-3">
          <button
            onClick={onClose}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-all border border-slate-700"
          >
            <ArrowLeft className="w-4 h-4 text-amber-400" />
            <span>Înapoi la Meniu</span>
          </button>
          <div>
            <h2 className="font-['Cinzel'] font-bold text-amber-400 text-base">
              Stand QR Printabil pentru Masă / Cameră
            </h2>
            <p className="text-[11px] text-slate-400">
              Generați codul QR scannabil personalizat cu sigla oficială Hotel Marissa
            </p>
          </div>
        </div>

        {/* Print Button */}
        <button
          onClick={handlePrint}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs shadow-lg shadow-amber-500/25 transition-all"
        >
          <Printer className="w-4 h-4" />
          <span>Printează Stand Masă</span>
        </button>
      </div>

      {/* Selector Box (Hidden during printing) */}
      <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4 no-print space-y-3">
        <div className="flex items-center gap-4 border-b border-slate-800 pb-3">
          <label className="text-xs font-semibold text-slate-300">Tip Amplasament:</label>
          <div className="flex items-center gap-2">
            <button
              onClick={() => { setLocationType('table'); setSelectedNumber('1'); }}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                locationType === 'table'
                  ? 'bg-amber-500 text-slate-950 font-bold'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              🪑 Masă Restaurant (1 - 30)
            </button>
            <button
              onClick={() => { setLocationType('room'); setSelectedNumber('101'); }}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                locationType === 'room'
                  ? 'bg-amber-500 text-slate-950 font-bold'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              🏨 Cameră Hotel (101 - 305)
            </button>
          </div>
        </div>

        {/* Dropdown Selector */}
        <div className="flex items-center gap-3">
          <label className="text-xs font-semibold text-slate-300">
            {locationType === 'table' ? 'Selectați Numărul Mesei:' : 'Selectați Numărul Camerei:'}
          </label>
          <select
            value={selectedNumber}
            onChange={(e) => setSelectedNumber(e.target.value)}
            className="bg-slate-950 border border-slate-700 text-amber-400 font-bold rounded-xl px-4 py-2 text-sm outline-none focus:border-amber-500 transition-all cursor-pointer"
          >
            {locationType === 'table'
              ? Array.from({ length: 30 }, (_, i) => i + 1).map((n) => (
                  <option key={n} value={n}>
                    Masa #{n}
                  </option>
                ))
              : [101, 102, 103, 104, 105, 201, 202, 203, 204, 205, 301, 302, 303, 304, 305].map((n) => (
                  <option key={n} value={n}>
                    Cameră #{n}
                  </option>
                ))}
          </select>
        </div>
      </div>

      {/* Printable QR Table Stand Preview */}
      <div className="flex justify-center">
        <div className="printable-qr-card glass-card-gold rounded-3xl p-8 max-w-md w-full text-center space-y-6 shadow-2xl relative overflow-hidden">
          {/* Top Header with Official Logo */}
          <div className="space-y-2 border-b border-amber-500/30 pb-5">
            <div className="h-16 mx-auto py-1 flex items-center justify-center">
              <img
                src={HOTEL_INFO.logoUrl}
                alt="Hotel Marissa Logo"
                className="h-full w-auto object-contain filter drop-shadow-md"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.style.display = 'none';
                }}
              />
            </div>
            <h1 className="font-['Cinzel'] font-extrabold text-2xl text-amber-400 tracking-wider">
              RESTAURANT MARISSA
            </h1>
            <p className="text-xs text-amber-200/90 font-medium tracking-wide uppercase">
              Smart Digital QR Menu
            </p>
          </div>

          {/* Table / Room Badge */}
          <div className="inline-block bg-slate-950 border-2 border-amber-400/80 px-6 py-2 rounded-2xl shadow-inner">
            <div className="text-[10px] text-amber-300 font-bold uppercase tracking-widest">
              {locationType === 'table' ? 'MASA' : 'CAMERĂ HOTEL'}
            </div>
            <div className="font-['Cinzel'] font-black text-3xl text-amber-400">
              #{selectedNumber}
            </div>
          </div>

          {/* Scannable QR Code Canvas */}
          <div className="bg-white p-5 rounded-2xl inline-block shadow-2xl border-4 border-amber-400/80 my-2">
            <QRCodeSVG
              value={qrTargetUrl}
              size={200}
              bgColor={"#FFFFFF"}
              fgColor={"#0B0F19"}
              level={"H"}
              includeMargin={false}
            />
          </div>

          {/* Instructions */}
          <div className="space-y-1.5 text-xs text-slate-300 border-t border-amber-500/30 pt-5">
            <p className="font-semibold text-amber-300 flex items-center justify-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-400" />
              Scanați cu camera telefonului mobil
            </p>
            <p className="text-[11px] text-slate-400 leading-relaxed px-4">
              Accesați 100% meniul interactiv cu valori nutriționale per 100g, alergeni și preparate proaspete.
            </p>
          </div>

          {/* Footer Notice */}
          <div className="text-[9px] text-amber-500/80 font-mono pt-2">
            hotelmarissa.ro • OUG 28/1999 • ANPC 183/2016 Compliant
          </div>
        </div>
      </div>
    </div>
  );
}
