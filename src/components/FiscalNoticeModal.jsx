import React from 'react';
import { X, Receipt, PhoneCall, Building2, ShieldCheck, AlertCircle } from 'lucide-react';
import { FISCAL_NOTICE } from '../data/marissaMenuData';

export default function FiscalNoticeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fade-in no-print">
      <div className="bg-slate-900 border border-amber-500/40 rounded-2xl max-w-lg w-full flex flex-col shadow-2xl overflow-hidden my-auto">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-amber-500/20 bg-gradient-to-r from-amber-950/80 via-slate-950 to-slate-950">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center">
              <Receipt className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <h2 className="font-['Cinzel'] font-bold text-amber-400 text-base">
                Notificare Fiscală Legală
              </h2>
              <p className="text-[11px] text-slate-400">
                Ordonanța de Urgență a Guvernului nr. 28/1999
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-amber-400 flex items-center justify-center transition-all"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 space-y-4 text-xs text-slate-200">
          {/* Main Legal Alert Box */}
          <div className="bg-amber-950/40 border border-amber-500/30 rounded-xl p-4 space-y-2">
            <div className="flex items-center gap-2 text-amber-300 font-bold text-xs">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Solicitați Bonul Fiscal!</span>
            </div>
            <p className="text-slate-300 leading-relaxed text-xs">
              {FISCAL_NOTICE.legalText}
            </p>
          </div>

          {/* TelVerde Hotline Box */}
          <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-4 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0">
                <PhoneCall className="w-5 h-5 text-amber-400 animate-bounce" />
              </div>
              <div>
                <div className="text-[10px] text-slate-400 uppercase tracking-wider font-medium">
                  Telefonul Gratuit al Consumatorului (TelVerde)
                </div>
                <a
                  href={`tel:${FISCAL_NOTICE.telVerde.replace(/\./g, '')}`}
                  className="font-mono font-bold text-base text-amber-400 hover:underline"
                >
                  {FISCAL_NOTICE.telVerde}
                </a>
              </div>
            </div>
          </div>

          {/* Authority Info */}
          <div className="flex items-center gap-2 text-[11px] text-slate-400 pt-1">
            <Building2 className="w-4 h-4 text-slate-500 shrink-0" />
            <span>Emitent: {FISCAL_NOTICE.authority}</span>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-5 py-3 border-t border-slate-800 bg-slate-950/90 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold rounded-xl text-xs transition-all shadow-md shadow-amber-500/20"
          >
            Închide
          </button>
        </div>
      </div>
    </div>
  );
}
