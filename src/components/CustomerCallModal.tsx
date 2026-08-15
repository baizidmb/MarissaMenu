import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BellRing, CreditCard, X, CheckCircle, Sparkles, Smartphone, Clock, AlertTriangle } from 'lucide-react';
import { Language } from '../types/menu';
import { TRANSLATIONS, getTableDisplayText } from '../utils/translations';
import { createTableRequest } from '../lib/supabase';
import { RequestType, PaymentMethod } from '../types/database';

interface CustomerCallModalProps {
  lang: Language;
  tableNumber: string | null;
  isOpen: boolean;
  modalType: 'waiter' | 'bill' | null;
  onClose: () => void;
}

export const CustomerCallModal: React.FC<CustomerCallModalProps> = ({
  lang,
  tableNumber,
  isOpen,
  modalType,
  onClose,
}) => {
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('card');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sentSuccess, setSentSuccess] = useState(false);
  const [cooldownRemaining, setCooldownRemaining] = useState<number>(0);

  const t = TRANSLATIONS[lang];
  const effectiveTable = tableNumber || '12';
  const tableDisplay = getTableDisplayText(effectiveTable, lang);
  const cooldownKey = `marissa_cooldown_${effectiveTable}_${modalType}`;

  // Check existing cooldown timer
  useEffect(() => {
    if (!isOpen || !modalType) return;

    const checkCooldown = () => {
      const storedTime = localStorage.getItem(cooldownKey);
      if (storedTime) {
        const expiresAt = parseInt(storedTime, 10);
        const now = Date.now();
        const diffSeconds = Math.max(0, Math.ceil((expiresAt - now) / 1000));
        setCooldownRemaining(diffSeconds);
      } else {
        setCooldownRemaining(0);
      }
    };

    checkCooldown();
    const interval = setInterval(checkCooldown, 1000);
    return () => clearInterval(interval);
  }, [isOpen, modalType, cooldownKey]);

  const handleSend = async () => {
    if (cooldownRemaining > 0 || isSubmitting) return;

    try {
      setIsSubmitting(true);
      const reqType: RequestType = modalType === 'bill' ? 'bill_request' : 'waiter_call';
      
      await createTableRequest({
        table_number: effectiveTable,
        type: reqType,
        payment_method: modalType === 'bill' ? paymentMethod : null,
      });

      // Set 60s cooldown in localStorage
      const expiresAt = Date.now() + 60 * 1000;
      localStorage.setItem(cooldownKey, expiresAt.toString());
      setCooldownRemaining(60);

      setSentSuccess(true);
      setTimeout(() => {
        setSentSuccess(false);
        onClose();
      }, 2500);
    } catch (error) {
      console.error('Error creating table request:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen || !modalType) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 liquid-overlay font-jakarta no-print">
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 25 }}
          transition={{ type: 'spring', damping: 28, stiffness: 350 }}
          className="liquid-glass-modal rounded-3xl p-6 sm:p-7 max-w-md w-full shadow-2xl border border-white/90 text-slate-900 relative space-y-5"
        >
          <button
            onClick={onClose}
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

              {/* Confirmation Message */}
              <div className="bg-[#F8F6F2] p-3.5 rounded-2xl border border-slate-200 text-xs font-inter text-slate-700 leading-relaxed">
                {modalType === 'waiter' ? (
                  <p>
                    {lang === 'hu'
                      ? `Megerősíti a pincér hívását a(z) ${tableDisplay} asztalhoz?`
                      : lang === 'en'
                      ? `Confirm calling a waiter to ${tableDisplay}?`
                      : `Confirmați chemarea ospătarului la ${tableDisplay}?`}
                  </p>
                ) : (
                  <p>
                    {lang === 'hu'
                      ? `Kérjük válassza ki a fizetési módot a számla kiállításához (${tableDisplay}).`
                      : lang === 'en'
                      ? `Please select your preferred payment method for ${tableDisplay}.`
                      : `Vă rugăm să alegeți metoda de plată pentru ${tableDisplay}.`}
                  </p>
                )}
              </div>

              {/* Payment Method Selector (Bill Request only) */}
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

              {/* Cooldown Warning Notice */}
              {cooldownRemaining > 0 ? (
                <div className="p-3 bg-amber-50 border border-amber-200 rounded-2xl flex items-center gap-2.5 text-xs text-amber-800">
                  <Clock className="w-4 h-4 text-amber-600 shrink-0 animate-spin" style={{ animationDuration: '6s' }} />
                  <span>
                    {lang === 'hu'
                      ? `Kérés már elküldve. Újraküldés ${cooldownRemaining} mp múlva.`
                      : lang === 'en'
                      ? `Request already sent. Retry available in ${cooldownRemaining}s.`
                      : `Solicitarea a fost trimisă. Puteți retrimite în ${cooldownRemaining}s.`}
                  </span>
                </div>
              ) : null}

              {/* Submit Trigger Button */}
              <motion.button
                whileTap={{ scale: 0.97 }}
                disabled={cooldownRemaining > 0 || isSubmitting}
                onClick={handleSend}
                className={`w-full py-3.5 rounded-2xl text-white font-extrabold text-sm shadow-lg transition-all flex items-center justify-center gap-2 border border-white/20 ${
                  cooldownRemaining > 0 || isSubmitting
                    ? 'bg-slate-300 text-slate-500 cursor-not-allowed shadow-none'
                    : 'bg-gradient-to-r from-[#C19B77] to-[#A8805B] hover:brightness-105 cursor-pointer'
                }`}
              >
                {isSubmitting ? (
                  <span>Se trimite...</span>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span>
                      {cooldownRemaining > 0
                        ? `Așteptați ${cooldownRemaining}s`
                        : modalType === 'waiter'
                        ? t.sendAlert
                        : t.requestBillBtn}
                    </span>
                  </>
                )}
              </motion.button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
export default CustomerCallModal;
