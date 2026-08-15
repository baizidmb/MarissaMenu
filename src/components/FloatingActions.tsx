import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BellRing, CreditCard } from 'lucide-react';
import { Language } from '../types/menu';
import { TRANSLATIONS } from '../utils/translations';
import CustomerCallModal from './CustomerCallModal';

interface FloatingActionsProps {
  lang: Language;
  tableNumber: string | null;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ lang, tableNumber }) => {
  const [modalType, setModalType] = useState<'waiter' | 'bill' | null>(null);
  const t = TRANSLATIONS[lang];

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

      {/* Real-time Customer Call & Bill Modal with Supabase and Cooldown */}
      <CustomerCallModal
        lang={lang}
        tableNumber={tableNumber}
        isOpen={Boolean(modalType)}
        modalType={modalType}
        onClose={() => setModalType(null)}
      />
    </>
  );
};
export default FloatingActions;
