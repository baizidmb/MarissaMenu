import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BellRing, CreditCard, X, CheckCircle, Sparkles, Smartphone } from 'lucide-react';
import { Language } from '../types/menu';
import { TRANSLATIONS, getTableDisplayText } from '../utils/translations';

interface FloatingActionsProps {
  lang: Language;
  tableNumber: string | null;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ lang, tableNumber }) => {
  const [modalType, setModalType] = useState<'waiter' | 'bill' | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'cash'>('card');
  const [sentSuccess, setSentSuccess] = useState(false);

  const t = TRANSLATIONS[lang];
  const tableDisplay = tableNumber ? getTableDisplayText(tableNumber, lang) : (lang === 'hu' ? '12. Asztal' : lang === 'en' ? 'Table #12' : 'Masa #12');

  const handleSendRequest = () => {
    setSentSuccess(true);
    setTimeout(() => {
      setSentSuccess(false);
      setModalType(null);
    }, 2400);
  };

  return (
    <>
      {/* Floating Action Button (FAB) Stack with Liquid Glossy Styling */}
      <div className="fixed bottom-5 right-3.5 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2.5 sm:gap-3 no-print font-jakarta">
        {/* Call Waiter FAB */}
        <motion.button
          whileHover={{ scale: 1.06, y: -2 }}
          whileTap={{ scale: 0.94 }}
          onClick={() => setModalType('waiter')}
          className="flex items-center gap-2 px-4 sm:px-4.5 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-[#C19B77] to-[#A8805B] text-white font-extrabold text-xs shadow-xl hover:shadow-2xl transition-all cursor-pointer border border-white/40 backdrop-blur-md"
          title={t.callWaiter}
        >
          <BellRing className="w-4 h-4 animate-bounce" />
          <span className="inline">
            {t.callWaiter}
          </span>
        </motion.button>

        {/* Request Bill FAB */}
        <motion.button
          whileHover={{ scale: 1.06, y: -2 }}
          whileTap={{ scale: 0.94 }}
          onClick={() => setModalType('bill')}
          className="flex items-center gap-2 px-4 sm:px-4.5 py-2.5 sm:py-3 rounded-full bg-slate-900/95 hover:bg-black text-white font-extrabold text-xs shadow-xl hover:shadow-2xl transition-all cursor-pointer border border-white/20 backdrop-blur-md"
          title={t.requestBill}
        >
          <CreditCard className="w-4 h-4 text-amber-400" />
          <span className="inline">
            {t.requestBill}
          </span>
        </motion.button>
      </div>

      {/* Hospitality Action Modal with Liquid Glossy Theme */}
      <AnimatePresence>
        {modalType && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 liquid-overlay font-jakarta no-print">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 26, stiffness: 350 }}
              className="liquid-glass-modal rounded-3xl p-6 sm:p-7 max-w-md w-full shadow-2xl border border-white/90 text-slate-900 relative space-y-5"
            >
              <button
                onClick={() => setModalType(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-1.5 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
                title={t.closeBtn}
              >
                <X className="w-5 h-5" />
              </button>

              {sentSuccess ? (
                <div className="py-8 text-center space-y-3">
                  <CheckCircle className="w-14 h-14 text-emerald-500 mx-auto animate-pulse" />
                  <h3 className="text-xl font-extrabold text-slate-900">
                    {t.requestSuccessTitle}
                  </h3>
                  <p className="text-xs text-slate-600 font-inter">
                    {modalType === 'waiter'
                      ? `${t.requestSuccessDescWaiter} (${tableDisplay})`
                      : `${t.requestSuccessDescBill} (${tableDisplay})`}
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-center gap-3 border-b border-slate-100/80 pb-3">
                    <div className="w-11 h-11 rounded-2xl bg-amber-50/90 border border-[#C19B77]/30 flex items-center justify-center text-[#C19B77] font-bold shadow-inner">
                      {modalType === 'waiter' ? <BellRing className="w-5 h-5" /> : <CreditCard className="w-5 h-5" />}
                    </div>
                    <div>
                      <h3 className="font-extrabold text-base text-slate-900">
                        {modalType === 'waiter' ? t.waiterModalTitle : t.billModalTitle}
                      </h3>
                      <p className="text-xs text-slate-500 font-bold">
                        {t.currentTable} <span className="text-[#C19B77]">{tableDisplay}</span>
                      </p>
                    </div>
                  </div>

                  {modalType === 'bill' && (
                    <div className="space-y-2">
                      <label className="text-xs font-extrabold text-slate-700">{t.paymentMethod}</label>
                      <div className="grid grid-cols-2 gap-3">
                        <button
                          onClick={() => setPaymentMethod('card')}
                          className={`p-3 rounded-2xl border text-xs font-bold flex flex-col items-center gap-1.5 transition-all cursor-pointer ${
                            paymentMethod === 'card'
                              ? 'border-[#C19B77] bg-amber-50/90 text-[#C19B77] shadow-sm'
                              : 'border-slate-200 bg-white/70 text-slate-600 hover:bg-white'
                          }`}
                        >
                          <CreditCard className="w-5 h-5" />
                          <span>{t.payCard}</span>
                        </button>
                        <button
                          onClick={() => setPaymentMethod('cash')}
                          className={`p-3 rounded-2xl border text-xs font-bold flex flex-col items-center gap-1.5 transition-all cursor-pointer ${
                            paymentMethod === 'cash'
                              ? 'border-[#C19B77] bg-amber-50/90 text-[#C19B77] shadow-sm'
                              : 'border-slate-200 bg-white/70 text-slate-600 hover:bg-white'
                          }`}
                        >
                          <Smartphone className="w-5 h-5" />
                          <span>{t.payCash}</span>
                        </button>
                      </div>
                    </div>
                  )}

                  <motion.button
                    whileTap={{ scale: 0.97 }}
                    onClick={handleSendRequest}
                    className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-[#C19B77] to-[#A8805B] hover:brightness-105 text-white font-extrabold text-sm shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2 border border-white/20"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>
                      {modalType === 'waiter' ? t.sendAlert : t.requestBillBtn}
                    </span>
                  </motion.button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
export default FloatingActions;
