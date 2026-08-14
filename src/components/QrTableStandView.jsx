import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { Printer, ArrowLeft, Sparkles, Globe } from 'lucide-react';
import { HOTEL_INFO } from '../data/marissaMenuData';

export default function QrTableStandView({ onClose, lang = 'ro' }) {
  const [locationType, setLocationType] = useState('table'); // 'table' or 'room'
  const [selectedNumber, setSelectedNumber] = useState('1');

  // Generate URL for QR code
  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://hotelmarissa.ro/menu';
  const qrTargetUrl = `${currentUrl.split('?')[0]}?${locationType}=${selectedNumber}`;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 space-y-6">
      {/* Top Controls Bar (Hidden during printing) */}
      <div className="bg-white border border-[#E8E2D9] rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 no-print shadow-sm">
        <div className="flex items-center gap-3">
          <button
            onClick={onClose}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#F8F6F2] hover:bg-[#EFEBE4] text-[#1C1C1C] text-xs font-semibold transition-all border border-[#E8E2D9]"
          >
            <ArrowLeft className="w-4 h-4 text-[#C19B77]" />
            <span>{lang === 'ro' ? 'Înapoi la Meniu' : 'Back to Menu'}</span>
          </button>
          <div>
            <h2 className="font-['Playfair_Display'] font-bold text-[#1C1C1C] text-base">
              {lang === 'ro' ? 'Stand QR Printabil pentru Masă / Cameră' : 'Printable QR Stand for Table / Room'}
            </h2>
            <p className="text-[11px] text-[#7A7A7A]">
              {lang === 'ro' ? 'Generați standul de masă cu sigla oficială Hotel Marissa' : 'Generate branded table tents with official logo'}
            </p>
          </div>
        </div>

        {/* Print Button */}
        <button
          onClick={handlePrint}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#C19B77] hover:bg-[#A8805B] text-white font-bold text-xs shadow-md transition-all"
        >
          <Printer className="w-4 h-4" />
          <span>{lang === 'ro' ? 'Printează Stand Masă' : 'Print Table Stand'}</span>
        </button>
      </div>

      {/* Selector Box (Hidden during printing) */}
      <div className="bg-white border border-[#E8E2D9] rounded-2xl p-4 no-print space-y-3 shadow-sm">
        <div className="flex items-center gap-4 border-b border-[#E8E2D9] pb-3">
          <label className="text-xs font-semibold text-[#1C1C1C]">{lang === 'ro' ? 'Tip Amplasament:' : 'Location Type:'}</label>
          <div className="flex items-center gap-2">
            <button
              onClick={() => { setLocationType('table'); setSelectedNumber('1'); }}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                locationType === 'table'
                  ? 'bg-[#C19B77] text-white font-bold'
                  : 'bg-[#F8F6F2] text-[#373737] hover:bg-[#EFEBE4] border border-[#E8E2D9]'
              }`}
            >
              🪑 {lang === 'ro' ? 'Masă Restaurant (1 - 30)' : 'Restaurant Table (1 - 30)'}
            </button>
            <button
              onClick={() => { setLocationType('room'); setSelectedNumber('101'); }}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                locationType === 'room'
                  ? 'bg-[#C19B77] text-white font-bold'
                  : 'bg-[#F8F6F2] text-[#373737] hover:bg-[#EFEBE4] border border-[#E8E2D9]'
              }`}
            >
              🏨 {lang === 'ro' ? 'Cameră Hotel (101 - 305)' : 'Hotel Room (101 - 305)'}
            </button>
          </div>
        </div>

        {/* Dropdown Selector */}
        <div className="flex items-center gap-3">
          <label className="text-xs font-semibold text-[#1C1C1C]">
            {locationType === 'table' ? (lang === 'ro' ? 'Selectați Numărul Mesei:' : 'Select Table Number:') : (lang === 'ro' ? 'Selectați Numărul Camerei:' : 'Select Room Number:')}
          </label>
          <select
            value={selectedNumber}
            onChange={(e) => setSelectedNumber(e.target.value)}
            className="bg-[#F8F6F2] border border-[#E8E2D9] text-[#C19B77] font-bold rounded-xl px-4 py-2 text-sm outline-none focus:border-[#C19B77] transition-all cursor-pointer"
          >
            {locationType === 'table'
              ? Array.from({ length: 30 }, (_, i) => i + 1).map((n) => (
                  <option key={n} value={n}>
                    {lang === 'ro' ? `Masa #${n}` : `Table #${n}`}
                  </option>
                ))
              : [101, 102, 103, 104, 105, 201, 202, 203, 204, 205, 301, 302, 303, 304, 305].map((n) => (
                  <option key={n} value={n}>
                    {lang === 'ro' ? `Cameră #${n}` : `Room #${n}`}
                  </option>
                ))}
          </select>
        </div>
      </div>

      {/* Printable QR Table Stand Preview */}
      <div className="flex justify-center">
        <div className="printable-qr-card bg-white rounded-3xl p-8 max-w-md w-full text-center space-y-6 border-2 border-[#C19B77] shadow-xl relative overflow-hidden">
          {/* Top Header with Official Logo */}
          <div className="space-y-2 border-b border-[#E8E2D9] pb-5">
            <div className="h-16 mx-auto py-1 flex items-center justify-center">
              <img
                src={HOTEL_INFO.logoUrl}
                alt="Hotel Marissa Logo"
                className="h-full w-auto object-contain filter drop-shadow-sm"
              />
            </div>
            <h1 className="font-['Playfair_Display'] font-extrabold text-2xl text-[#1C1C1C] tracking-wide">
              RESTAURANT MARISSA
            </h1>
            <p className="text-xs text-[#C19B77] font-semibold tracking-wider uppercase">
              {lang === 'ro' ? 'Smart Digital QR Menu' : 'Smart Digital QR Menu'}
            </p>
          </div>

          {/* Table / Room Badge */}
          <div className="inline-block bg-[#F8F6F2] border border-[#C19B77] px-6 py-2 rounded-2xl shadow-inner">
            <div className="text-[10px] text-[#C19B77] font-bold uppercase tracking-widest">
              {locationType === 'table' ? (lang === 'ro' ? 'MASA' : 'TABLE') : (lang === 'ro' ? 'CAMERĂ HOTEL' : 'HOTEL ROOM')}
            </div>
            <div className="font-['Playfair_Display'] font-extrabold text-3xl text-[#1C1C1C]">
              #{selectedNumber}
            </div>
          </div>

          {/* Scannable QR Code Canvas */}
          <div className="bg-white p-4 rounded-2xl inline-block border-2 border-[#C19B77]/60 shadow-md my-1">
            <QRCodeSVG
              value={qrTargetUrl}
              size={190}
              bgColor={"#FFFFFF"}
              fgColor={"#1C1C1C"}
              level={"H"}
              includeMargin={false}
            />
          </div>

          {/* Instructions */}
          <div className="space-y-1 text-xs text-[#373737] border-t border-[#E8E2D9] pt-4">
            <p className="font-bold text-[#C19B77] flex items-center justify-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#C19B77]" />
              <span>{lang === 'ro' ? 'Scanați codul QR cu telefonul' : 'Scan QR code with smartphone'}</span>
            </p>
            <p className="text-[11px] text-[#7A7A7A] leading-relaxed px-4">
              {lang === 'ro'
                ? 'Meniu digital interactiv cu valori nutriționale per 100g, alergeni și preparate proaspete.'
                : 'Interactive digital menu with 100g nutrition, allergen declarations & fresh dishes.'}
            </p>
          </div>

          {/* Footer Notice */}
          <div className="text-[9px] text-[#8C8C8C] font-mono pt-2">
            hotelmarissa.ro • OUG 28/1999 • ANPC 183/2016 Compliant
          </div>
        </div>
      </div>
    </div>
  );
}
