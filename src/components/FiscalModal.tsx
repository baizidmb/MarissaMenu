import React from 'react';
import { motion } from 'framer-motion';
import { X, Receipt, PhoneCall } from 'lucide-react';
import { Language } from '../types/menu';
import { TRANSLATIONS } from '../utils/translations';

interface FiscalModalProps {
  lang: Language;
  onClose: () => void;
}

export const FiscalModal: React.FC<FiscalModalProps> = ({ lang, onClose }) => {
  const t = TRANSLATIONS[lang];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm font-jakarta no-print">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white rounded-3xl p-6 max-w-lg w-full shadow-2xl border border-slate-200 text-slate-900 relative space-y-5"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1.5 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
          title={t.closeBtn}
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
          <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-[#C19B77]/30 flex items-center justify-center text-[#C19B77] font-bold">
            <Receipt className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-extrabold text-base sm:text-lg text-slate-900">
              {t.fiscalModalTitle}
            </h3>
            <p className="text-xs text-[#C19B77] font-bold">
              {t.fiscalModalSubtitle}
            </p>
          </div>
        </div>

        <div className="space-y-4 text-xs">
          <div className="bg-[#F8F6F2] p-4 rounded-2xl border border-slate-200 space-y-2.5 font-inter leading-relaxed text-slate-700">
            <p className="font-bold text-slate-900">
              {t.fiscalModalText1}
            </p>
            <p>
              {t.fiscalModalText2}
            </p>
          </div>

          <div className="bg-amber-50 border border-[#C19B77]/40 p-4 rounded-2xl space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-extrabold text-slate-900">{t.anafHelpline}</span>
              <a href="tel:0800800085" className="font-mono font-extrabold text-sm text-[#C19B77] hover:underline flex items-center gap-1">
                <PhoneCall className="w-4 h-4" />
                <span>0800.800.085</span>
              </a>
            </div>
            <p className="text-[11px] text-slate-500 font-inter">
              Ministerul Finanțelor Publice - Agenția Națională de Administrare Fiscală (ANAF).
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
export default FiscalModal;
