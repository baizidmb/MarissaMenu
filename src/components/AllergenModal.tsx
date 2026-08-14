import React from 'react';
import { motion } from 'framer-motion';
import { X, ShieldAlert, Snowflake, Info } from 'lucide-react';
import { ALLERGENS } from '../data/menuData';
import { Language } from '../types/menu';

interface AllergenModalProps {
  lang: Language;
  onClose: () => void;
  selectedAllergenId?: number | null;
}

export const AllergenModal: React.FC<AllergenModalProps> = ({ lang, onClose, selectedAllergenId }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm font-jakarta no-print">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white rounded-3xl p-6 max-w-2xl w-full shadow-2xl border border-slate-200 text-slate-900 relative max-h-[85vh] flex flex-col"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1.5 rounded-full hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 border-b border-slate-100 pb-4 shrink-0">
          <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-[#C19B77]/30 flex items-center justify-center text-[#C19B77] font-bold">
            <ShieldAlert className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-extrabold text-lg text-slate-900">
              {lang === 'ro' ? 'Ghid Alergeni & Ordinul ANPC 201/2022' : 'Allergen Guide & ANPC Order 201/2022'}
            </h3>
            <p className="text-xs text-[#C19B77] font-bold">
              {lang === 'ro' ? 'Lista celor 14 grupe de alergeni conform Directivei EU 2000/13/CE' : 'List of 14 EU Allergen groups'}
            </p>
          </div>
        </div>

        {/* Scrollable Allergen Grid */}
        <div className="p-1 overflow-y-auto space-y-4 flex-1 text-xs mt-4">
          <div className="bg-sky-50 border border-sky-200 p-3.5 rounded-2xl text-sky-900 space-y-1">
            <div className="font-bold flex items-center gap-1.5 text-sky-800">
              <Snowflake className="w-4 h-4 text-sky-600" />
              <span>Informații Produse Decongelate (ANPC 183/2016 & 201/2022)</span>
            </div>
            <p className="text-[11px] leading-relaxed font-inter">
              Unele ingrediente (carne de pasăre, porc, pește, fructe de mare, legume congelate) pot proveni din produse decongelate. Acestea sunt marcate explicit cu insigna <span className="font-bold">*Produs decongelat</span>.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {ALLERGENS.map((alg) => {
              const isHighlight = selectedAllergenId === alg.id;
              return (
                <div
                  key={alg.id}
                  className={`p-3 rounded-2xl border transition-all ${
                    isHighlight
                      ? 'bg-amber-50 border-[#C19B77] shadow-md'
                      : 'bg-[#F8F6F2] border-slate-200 hover:border-[#C19B77]/50'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-5 h-5 rounded-full bg-[#C19B77] text-white text-[11px] font-extrabold flex items-center justify-center">
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
