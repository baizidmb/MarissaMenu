import React from 'react';
import { X, ShieldAlert, Snowflake, Info, CheckCircle2 } from 'lucide-react';
import { ALLERGEN_INDEX, FROZEN_PRODUCT_NOTICE } from '../data/marissaMenuData';

export default function AllergenLegendModal({ isOpen, onClose, selectedAllergenId }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in no-print overflow-y-auto">
      <div className="bg-slate-900 border border-slate-700/80 rounded-2xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden my-auto">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-800 bg-slate-950/80">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
              <ShieldAlert className="w-4 h-4 text-amber-400" />
            </div>
            <div>
              <h2 className="font-['Cinzel'] font-bold text-slate-100 text-base md:text-lg">
                Ghid Alergeni (EU) & Informare ANPC 183/2016
              </h2>
              <p className="text-[11px] text-slate-400">
                Directiva 2000/13/CE a Parlamentului European • Ordinul ANPC nr. 183/2016
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
        <div className="p-5 overflow-y-auto space-y-6 text-xs text-slate-300">
          {/* Section 1: EU 14 Allergen Index */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-bold text-amber-400 text-sm flex items-center gap-1.5">
                <span>📋</span>
                <span>Codurile Alergenilor Alimentari (1 - 14)</span>
              </h3>
              <span className="text-[10px] text-slate-400 bg-slate-800 px-2 py-0.5 rounded-full border border-slate-700">
                Directiva 2000/13/CE
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              {ALLERGEN_INDEX.map((alg) => {
                const isSelected = selectedAllergenId === alg.id;
                return (
                  <div
                    key={alg.id}
                    className={`p-3 rounded-xl border transition-all flex items-start gap-2.5 ${
                      isSelected
                        ? 'bg-amber-950/50 border-amber-500 ring-2 ring-amber-500/40'
                        : 'bg-slate-950/60 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 font-bold border border-amber-500/40 flex items-center justify-center shrink-0 text-xs mt-0.5">
                      {alg.id}
                    </div>
                    <div>
                      <div className="font-semibold text-slate-100 text-xs">
                        {alg.name}
                      </div>
                      <p className="text-[11px] text-slate-400 leading-relaxed mt-0.5">
                        {alg.details}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section 2: ANPC Order 183/2016 Frozen Products Notice */}
          <div className="bg-gradient-to-br from-cyan-950/40 via-slate-900 to-slate-950 border border-cyan-900/60 rounded-xl p-4 space-y-3">
            <div className="flex items-center gap-2 text-cyan-300 font-bold text-xs border-b border-cyan-900/60 pb-2">
              <Snowflake className="w-4 h-4 text-cyan-400 animate-pulse" />
              <span>{FROZEN_PRODUCT_NOTICE.title}</span>
            </div>

            <p className="text-slate-300 text-xs leading-relaxed">
              {FROZEN_PRODUCT_NOTICE.text}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              {FROZEN_PRODUCT_NOTICE.categories.map((cat, idx) => (
                <div key={idx} className="bg-slate-950/80 p-2.5 rounded-lg border border-slate-800">
                  <div className="font-semibold text-cyan-300 text-xs mb-1 flex items-center gap-1">
                    <span>❄️</span>
                    <span>{cat.type}:</span>
                  </div>
                  <div className="text-[11px] text-slate-400 leading-snug">
                    {cat.items}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-5 py-3 border-t border-slate-800 bg-slate-950/90 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold rounded-xl text-xs transition-all shadow-md shadow-amber-500/20"
          >
            Am Înțeles
          </button>
        </div>
      </div>
    </div>
  );
}
