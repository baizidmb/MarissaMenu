import React from 'react';
import { motion } from 'framer-motion';
import { X, ShieldAlert, Snowflake } from 'lucide-react';
import { ALLERGENS } from '../data/menuData';
import { Language } from '../types/menu';
import { TRANSLATIONS } from '../utils/translations';

interface AllergenModalProps {
  lang: Language;
  onClose: () => void;
  selectedAllergenId?: number | null;
}

export const AllergenModal: React.FC<AllergenModalProps> = ({ lang, onClose, selectedAllergenId }) => {
  const t = TRANSLATIONS[lang];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 liquid-overlay font-jakarta no-print">
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 25 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 25 }}
        transition={{ type: 'spring', damping: 28, stiffness: 350 }}
        className="liquid-glass-modal rounded-3xl p-6 sm:p-7 max-w-2xl w-full shadow-2xl border border-white/90 text-slate-900 relative max-h-[85vh] flex flex-col"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1.5 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
          title={t.closeBtn}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 border-b border-slate-100/80 pb-4 shrink-0">
          <div className="w-12 h-12 rounded-2xl bg-amber-50/90 border border-[#C19B77]/30 flex items-center justify-center text-[#C19B77] font-bold shadow-inner">
            <ShieldAlert className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-extrabold text-base sm:text-lg text-slate-900">
              {t.allergenModalTitle}
            </h3>
            <p className="text-xs text-[#C19B77] font-bold">
              {t.allergenModalSubtitle}
            </p>
          </div>
        </div>

        {/* Scrollable Allergen Grid */}
        <div className="p-1 overflow-y-auto space-y-4 flex-1 text-xs mt-4">
          <div className="bg-sky-50/90 border border-sky-200/80 p-3.5 rounded-2xl text-sky-900 space-y-1 backdrop-blur-sm shadow-xs">
            <div className="font-bold flex items-center gap-1.5 text-sky-800">
              <Snowflake className="w-4 h-4 text-sky-600" />
              <span>Informații Produse Decongelate (ANPC 183/2016 & 201/2022)</span>
            </div>
            <p className="text-[11px] leading-relaxed font-inter">
              {t.thawedLegalNotice}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {ALLERGENS.map((alg) => {
              const isHighlight = selectedAllergenId === alg.id;
              return (
                <div
                  key={alg.id}
                  className={`p-3.5 rounded-2xl border transition-all ${
                    isHighlight
                      ? 'bg-amber-50/95 border-[#C19B77] shadow-md ring-2 ring-[#C19B77]/20'
                      : 'bg-white/70 backdrop-blur-sm border-slate-200/80 hover:border-[#C19B77]/60 hover:bg-white shadow-xs'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-5 h-5 rounded-full bg-[#C19B77] text-white text-[11px] font-extrabold flex items-center justify-center shadow-xs">
                      {alg.id}
                    </span>
                    <span className="font-extrabold text-slate-900">{alg.name[lang] || alg.name.ro}</span>
                  </div>
                  <p className="text-[11px] text-slate-600 font-inter leading-normal pl-7">
                    {alg.details[lang] || alg.details.ro}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
export default AllergenModal;
