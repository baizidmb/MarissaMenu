import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BellRing, CreditCard, X, CheckCircle, Sparkles, Smartphone } from 'lucide-react';
import { Language } from '../types/menu';

interface FloatingActionsProps {
  lang: Language;
  tableNumber: string | null;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ lang, tableNumber }) => {
  const [modalType, setModalType] = useState<'waiter' | 'bill' | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'cash'>('card');
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleSendRequest = () => {
    setSentSuccess(true);
    setTimeout(() => {
      setSentSuccess(false);
      setModalType(null);
    }, 2400);
  };

  return (
    <>
      {/* Floating Action Button (FAB) Stack */}
      <div className="fixed bottom-6 right-4 z-40 flex flex-col items-end gap-3 no-print font-jakarta">
        {/* Call Waiter FAB */}
        <button
          onClick={() => setModalType('waiter')}
          className="flex items-center gap-2 px-4 py-3 rounded-full bg-[#C19B77] hover:bg-[#A8805B] text-white font-extrabold text-xs shadow-xl hover:shadow-2xl transition-all scale-100 active:scale-95 cursor-pointer border border-white/30"
          title="Cheamă Ospătarul"
        >
          <BellRing className="w-4 h-4 animate-bounce" />
          <span className="hidden xs:inline">
            {lang === 'ro' ? 'Cheamă Ospătarul' : lang === 'en' ? 'Call Waiter' : 'Pincér Hívása'}
          </span>
        </button>

        {/* Request Bill FAB */}
        <button
          onClick={() => setModalType('bill')}
          className="flex items-center gap-2 px-4 py-3 rounded-full bg-slate-900 hover:bg-black text-white font-extrabold text-xs shadow-xl hover:shadow-2xl transition-all scale-100 active:scale-95 cursor-pointer border border-white/20"
          title="Cere Nota"
        >
          <CreditCard className="w-4 h-4 text-amber-400" />
          <span className="hidden xs:inline">
            {lang === 'ro' ? 'Cere Nota' : lang === 'en' ? 'Request Bill' : 'Számla Kérése'}
          </span>
        </button>
      </div>

      {/* Hospitality Action Modal */}
      <AnimatePresence>
        {modalType && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm font-jakarta no-print">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-3xl p-6 max-w-md w-full shadow-2xl border border-slate-200 text-slate-900 relative space-y-5"
            >
              <button
                onClick={() => setModalType(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1.5 rounded-full hover:bg-slate-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {sentSuccess ? (
                <div className="py-8 text-center space-y-3">
                  <CheckCircle className="w-14 h-14 text-emerald-500 mx-auto animate-pulse" />
                  <h3 className="text-xl font-extrabold text-slate-900">
                    {lang === 'ro' ? 'Solicitare Trimisă cu Succes!' : 'Request Sent Successfully!'}
                  </h3>
                  <p className="text-xs text-slate-600 font-inter">
                    {lang === 'ro'
                      ? `Un ospătar a primit notificarea pentru Masa #${tableNumber || '12'} și vine în cel mai scurt timp.`
                      : `A waiter has received your request for Table #${tableNumber || '12'} and will be right with you.`}
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                    <div className="w-10 h-10 rounded-2xl bg-amber-50 border border-[#C19B77]/30 flex items-center justify-center text-[#C19B77] font-bold">
                      {modalType === 'waiter' ? <BellRing className="w-5 h-5" /> : <CreditCard className="w-5 h-5" />}
                    </div>
                    <div>
                      <h3 className="font-extrabold text-base text-slate-900">
                        {modalType === 'waiter'
                          ? (lang === 'ro' ? 'Cheamă Ospătarul la Masă' : 'Call Waiter to Table')
                          : (lang === 'ro' ? 'Solicită Nota de Plată' : 'Request Table Bill')}
                      </h3>
                      <p className="text-xs text-slate-500 font-bold">
                        Masa curenți: <span className="text-[#C19B77]">#{tableNumber || '12'}</span>
                      </p>
                    </div>
                  </div>

                  {modalType === 'bill' && (
                    <div className="space-y-2">
                      <label className="text-xs font-extrabold text-slate-700">Modalitate de Plată Preferată:</label>
                      <div className="grid grid-cols-2 gap-3">
                        <button
                          onClick={() => setPaymentMethod('card')}
                          className={`p-3 rounded-2xl border text-xs font-bold flex flex-col items-center gap-1.5 transition-all cursor-pointer ${
                            paymentMethod === 'card'
                              ? 'border-[#C19B77] bg-amber-50 text-[#C19B77]'
                              : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                          }`}
                        >
                          <CreditCard className="w-5 h-5" />
                          <span>Card Bancar</span>
                        </button>
                        <button
                          onClick={() => setPaymentMethod('cash')}
                          className={`p-3 rounded-2xl border text-xs font-bold flex flex-col items-center gap-1.5 transition-all cursor-pointer ${
                            paymentMethod === 'cash'
                              ? 'border-[#C19B77] bg-amber-50 text-[#C19B77]'
                              : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                          }`}
                        >
                          <Smartphone className="w-5 h-5" />
                          <span>Numerar / Cash</span>
                        </button>
                      </div>
                    </div>
                  )}

                  <button
                    onClick={handleSendRequest}
                    className="w-full py-3 rounded-2xl bg-[#C19B77] hover:bg-[#A8805B] text-white font-extrabold text-sm shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>
                      {modalType === 'waiter'
                        ? (lang === 'ro' ? 'Trimite Notificarea' : 'Send Alert')
                        : (lang === 'ro' ? 'Cere Nota de Plată' : 'Request Bill')}
                    </span>
                  </button>
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
