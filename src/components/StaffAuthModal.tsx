import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, KeyRound, X, Eye, EyeOff, ShieldCheck, AlertCircle } from 'lucide-react';
import { HOTEL_INFO } from '../data/menuData';
import { Language } from '../types/menu';
import { TRANSLATIONS } from '../utils/translations';

interface StaffAuthModalProps {
  lang: Language;
  onClose: () => void;
  onSuccess: () => void;
}

export const StaffAuthModal: React.FC<StaffAuthModalProps> = ({ lang, onClose, onSuccess }) => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);
  const t = TRANSLATIONS[lang];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.trim() === 'cosmicom') {
      setError(false);
      onSuccess();
    } else {
      setError(true);
      setPassword('');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-md font-jakarta no-print">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-slate-200 text-slate-900 relative space-y-6"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1.5 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
          title={t.closeBtn}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center space-y-3">
          <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-[#C19B77]/30 flex items-center justify-center text-[#C19B77] mx-auto shadow-inner">
            <Lock className="w-7 h-7" />
          </div>
          <div>
            <h3 className="font-extrabold text-xl text-slate-900">
              {t.adminTitle}
            </h3>
            <p className="text-xs text-slate-500 font-inter mt-1">
              {t.adminSubtitle}
            </p>
          </div>
        </div>

        {/* Authentication Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-xs font-extrabold text-slate-700 flex items-center gap-1.5">
              <KeyRound className="w-3.5 h-3.5 text-[#C19B77]" />
              <span>{t.passwordLabel}</span>
            </label>

            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (error) setError(false);
                }}
                placeholder="••••••••"
                autoFocus
                className="w-full bg-[#F8F6F2] focus:bg-white border border-slate-200 focus:border-[#C19B77] rounded-xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all pr-10 font-mono tracking-wider"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-1.5 text-xs text-rose-600 font-bold pt-1"
              >
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>
                  {t.wrongPassword}
                </span>
              </motion.div>
            )}
          </div>

          <div className="pt-2 flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-3 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 font-extrabold text-xs transition-colors cursor-pointer"
            >
              {t.cancelBtn}
            </button>

            <button
              type="submit"
              className="flex-1 py-3 rounded-xl bg-[#C19B77] hover:bg-[#A8805B] text-white font-extrabold text-xs shadow-md transition-all cursor-pointer flex items-center justify-center gap-1.5"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>{t.unlockBtn}</span>
            </button>
          </div>
        </form>

        <div className="text-center pt-2 border-t border-slate-100">
          <p className="text-[10px] text-slate-400">
            {HOTEL_INFO.name} • Panou Administrator QR Stand
          </p>
        </div>
      </motion.div>
    </div>
  );
};
export default StaffAuthModal;
