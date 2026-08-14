import React from 'react';
import { X, ShieldAlert, Snowflake, Info, CheckCircle2 } from 'lucide-react';
import { ALLERGEN_INDEX, FROZEN_PRODUCT_NOTICE } from '../data/marissaMenuData';

export default function AllergenLegendModal({ isOpen, onClose, selectedAllergenId = null, lang = 'ro' }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in no-print overflow-y-auto">
      <div className="bg-white border border-[#E8E2D9] rounded-2xl max-w-3xl w-full flex flex-col shadow-2xl overflow-hidden my-auto">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#E8E2D9] bg-[#F8F6F2]">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-[#C19B77] text-white">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-['Playfair_Display'] font-bold text-[#1C1C1C] text-lg">
                {lang === 'ro' ? 'Ghid Alergeni & Produse Decongelate' : 'Allergens & Thawed Products Guide'}
              </h2>
              <p className="text-[11px] text-[#7A7A7A] font-medium">
                {lang === 'ro' ? 'Conform Directivă UE 2000/13/CE & Ordin ANPC nr. 183/2016' : 'Compliant with EU Directive 2000/13/CE & ANPC Order 183/2016'}
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
        <div className="p-5 space-y-6 text-xs text-[#373737] overflow-y-auto max-h-[75vh]">
          {/* ANPC Order 183/2016 Frozen Products Notice Box */}
          <div className="bg-amber-50 border border-[#C19B77]/30 rounded-xl p-4 space-y-3">
            <div className="flex items-center gap-2 text-[#C19B77] font-bold text-xs">
              <Snowflake className="w-4 h-4" />
              <h3>{FROZEN_PRODUCT_NOTICE.title[lang] || FROZEN_PRODUCT_NOTICE.title.ro}</h3>
            </div>
            <p className="text-[11px] text-[#555555] leading-relaxed">
              {FROZEN_PRODUCT_NOTICE.text[lang] || FROZEN_PRODUCT_NOTICE.text.ro}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
              {FROZEN_PRODUCT_NOTICE.categories.map((cat, idx) => {
                const catType = typeof cat.type === 'object' ? (cat.type[lang] || cat.type.ro) : cat.type;
                const catItems = typeof cat.items === 'object' ? (cat.items[lang] || cat.items.ro) : cat.items;

                return (
                  <div key={idx} className="bg-white p-2.5 rounded-lg border border-[#E8E2D9]">
                    <span className="font-bold text-[#1C1C1C] block mb-0.5">{catType}:</span>
                    <span className="text-[#555555] text-[10px]">{catItems}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* EU Allergen Index Table (1 - 14) */}
          <div className="space-y-3">
            <h3 className="font-['Playfair_Display'] font-bold text-[#1C1C1C] text-sm flex items-center gap-2">
              <Info className="w-4 h-4 text-[#C19B77]" />
              <span>{lang === 'ro' ? 'Index Alergeni UE (Coduri 1 - 14)' : 'EU Allergen Index (Codes 1 - 14)'}</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {ALLERGEN_INDEX.map((alg) => {
                const isSelected = selectedAllergenId === alg.id;
                const algName = typeof alg.name === 'object' ? (alg.name[lang] || alg.name.ro) : alg.name;
                const algDetails = typeof alg.details === 'object' ? (alg.details[lang] || alg.details.ro) : alg.details;

                return (
                  <div
                    key={alg.id}
                    className={`p-3 rounded-xl border transition-all flex items-start gap-3 ${
                      isSelected
                        ? 'bg-amber-50 border-[#C19B77] shadow-sm'
                        : 'bg-white border-[#E8E2D9] hover:border-[#C19B77]/50'
                    }`}
                  >
                    <div className="w-7 h-7 rounded-lg bg-[#C19B77] text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-xs">
                      {alg.id}
                    </div>

                    <div className="space-y-0.5">
                      <div className="font-bold text-[#1C1C1C] text-xs flex items-center gap-1.5">
                        <span>{algName}</span>
                        {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-[#C19B77]" />}
                      </div>
                      <p className="text-[11px] text-[#7A7A7A] leading-normal">
                        {algDetails}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-5 py-3 border-t border-[#E8E2D9] bg-[#F8F6F2] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#C19B77] hover:bg-[#A8805B] text-white font-bold rounded-xl text-xs transition-all shadow-sm"
          >
            {lang === 'ro' ? 'Am înțeles' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
}
