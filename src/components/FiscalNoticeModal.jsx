import React from 'react';
import { X, Receipt, PhoneCall, ShieldCheck } from 'lucide-react';
import { FISCAL_NOTICE } from '../data/marissaMenuData';

export default function FiscalNoticeModal({ isOpen, onClose, lang = 'ro' }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in no-print overflow-y-auto">
      <div className="bg-white border border-[#E8E2D9] rounded-2xl max-w-lg w-full flex flex-col shadow-2xl overflow-hidden my-auto">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#E8E2D9] bg-[#F8F6F2]">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-[#C19B77] text-white">
              <Receipt className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-['Playfair_Display'] font-bold text-[#1C1C1C] text-lg">
                {FISCAL_NOTICE.title[lang] || FISCAL_NOTICE.title.ro}
              </h2>
              <p className="text-[11px] text-[#7A7A7A] font-medium">
                {FISCAL_NOTICE.authority}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-white border border-[#E8E2D9] text-[#7A7A7A] hover:text-[#1C1C1C] flex items-center justify-center transition-all"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 space-y-5 text-xs text-[#373737]">
          <div className="bg-amber-50 border border-[#C19B77]/30 rounded-xl p-4 space-y-2">
            <h3 className="font-bold text-[#1C1C1C] text-xs">
              {lang === 'ro' ? 'Dreptul de a solicita bonul fiscal:' : 'Right to request a fiscal receipt:'}
            </h3>
            <p className="text-[11px] text-[#555555] leading-relaxed">
              {FISCAL_NOTICE.legalText[lang] || FISCAL_NOTICE.legalText.ro}
            </p>
          </div>

          <div className="bg-[#F8F6F2] border border-[#E8E2D9] rounded-xl p-4 flex items-center justify-between gap-3">
            <div className="space-y-0.5">
              <span className="text-[10px] text-[#7A7A7A] font-semibold block uppercase tracking-wider">
                {lang === 'ro' ? 'Linia TelVerde Gratuită ANAF:' : 'Free Helpline TelVerde:'}
              </span>
              <a href={`tel:${FISCAL_NOTICE.telVerde.replace(/\./g, '')}`} className="font-mono font-bold text-[#C19B77] text-lg hover:underline">
                {FISCAL_NOTICE.telVerde}
              </a>
            </div>

            <a
              href={`tel:${FISCAL_NOTICE.telVerde.replace(/\./g, '')}`}
              className="px-4 py-2 bg-[#C19B77] hover:bg-[#A8805B] text-white font-bold rounded-xl text-xs flex items-center gap-1.5 shadow-sm transition-all"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>{lang === 'ro' ? 'Apelează' : 'Call'}</span>
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="px-5 py-3 border-t border-[#E8E2D9] bg-[#F8F6F2] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#1C1C1C] hover:bg-[#373737] text-white font-bold rounded-xl text-xs transition-all shadow-sm"
          >
            {lang === 'ro' ? 'Închide' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
}
