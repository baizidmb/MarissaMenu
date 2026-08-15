import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, KeyRound, ShieldCheck, AlertCircle, ArrowLeft, Hotel, Sparkles } from 'lucide-react';
import { HOTEL_INFO } from '../data/menuData';

interface StaffLoginProps {
  onLoginSuccess: () => void;
  onBackToMenu: () => void;
}

export const StaffLogin: React.FC<StaffLoginProps> = ({ onLoginSuccess, onBackToMenu }) => {
  const [pin, setPin] = useState<string>('');
  const [loginMode, setLoginMode] = useState<'pin' | 'email'>('pin');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const handlePinInput = (num: string) => {
    if (pin.length < 4) {
      const nextPin = pin + num;
      setPin(nextPin);
      setError(null);

      // Auto submit on 4th digit
      if (nextPin.length === 4) {
        verifyPin(nextPin);
      }
    }
  };

  const handleBackspace = () => {
    setPin((prev) => prev.slice(0, -1));
    setError(null);
  };

  const verifyPin = (inputPin: string) => {
    // Authorized PINs: 1234, 0000, 2025, or custom password
    if (inputPin === '1234' || inputPin === '2025' || inputPin === '0000') {
      localStorage.setItem('marissa_staff_session', JSON.stringify({ role: 'staff', loggedAt: Date.now() }));
      onLoginSuccess();
    } else {
      setError('PIN incorect! Încercați din nou (ex: 1234).');
      setPin('');
    }
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'cosmicom' || (email.toLowerCase().includes('marissa') && password.length >= 4)) {
      localStorage.setItem('marissa_staff_session', JSON.stringify({ role: 'staff', email, loggedAt: Date.now() }));
      onLoginSuccess();
    } else {
      setError('Credențiale incorecte! Parola este cosmicom.');
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F6F2] flex flex-col justify-center items-center p-4 font-jakarta relative overflow-hidden selection:bg-[#C19B77] selection:text-white">
      {/* Back Button */}
      <button
        onClick={onBackToMenu}
        className="absolute top-5 left-5 flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/90 hover:bg-white text-slate-700 text-xs font-bold border border-slate-200 shadow-xs transition-all cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Înapoi la Meniu</span>
      </button>

      {/* Main Glassmorphism Card */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="bg-white/95 backdrop-blur-xl border border-white/80 rounded-3xl p-6 sm:p-8 max-w-sm w-full shadow-2xl space-y-6 text-center"
      >
        {/* Hotel Branding */}
        <div className="space-y-2">
          <img
            src={HOTEL_INFO.logoUrl}
            alt="Hotel Marissa Logo"
            className="h-12 mx-auto object-contain"
          />
          <h2 className="font-extrabold text-base text-slate-900 tracking-tight uppercase">
            Panou Personal & Ospătari
          </h2>
          <p className="text-xs text-slate-500 font-inter">
            Autentificare tabletă restaurant & alerte mese
          </p>
        </div>

        {/* Mode Switcher Pills */}
        <div className="flex items-center p-1 bg-slate-100 rounded-2xl">
          <button
            onClick={() => {
              setLoginMode('pin');
              setError(null);
            }}
            className={`flex-1 py-1.5 text-xs font-extrabold rounded-xl transition-all cursor-pointer ${
              loginMode === 'pin'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            PIN Rapid
          </button>
          <button
            onClick={() => {
              setLoginMode('email');
              setError(null);
            }}
            className={`flex-1 py-1.5 text-xs font-extrabold rounded-xl transition-all cursor-pointer ${
              loginMode === 'email'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            Parolă
          </button>
        </div>

        {/* PIN Pad Login Mode */}
        {loginMode === 'pin' ? (
          <div className="space-y-6">
            {/* PIN Display Indicators */}
            <div className="flex items-center justify-center gap-3">
              {[0, 1, 2, 3].map((idx) => (
                <div
                  key={idx}
                  className={`w-4 h-4 rounded-full border-2 transition-all duration-200 ${
                    pin.length > idx
                      ? 'bg-[#C19B77] border-[#C19B77] scale-110 shadow-xs'
                      : 'border-slate-300 bg-white'
                  }`}
                />
              ))}
            </div>

            {error && (
              <p className="text-xs font-bold text-rose-600 flex items-center justify-center gap-1">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </p>
            )}

            {/* Numeric Keypad Grid */}
            <div className="grid grid-cols-3 gap-3 max-w-[240px] mx-auto">
              {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map((num) => (
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  key={num}
                  onClick={() => handlePinInput(num)}
                  className="w-16 h-14 rounded-2xl bg-[#F8F6F2] hover:bg-amber-50 hover:border-[#C19B77]/50 border border-slate-200 text-lg font-black text-slate-900 transition-colors shadow-2xs flex items-center justify-center cursor-pointer"
                >
                  {num}
                </motion.button>
              ))}
              <div />
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => handlePinInput('0')}
                className="w-16 h-14 rounded-2xl bg-[#F8F6F2] hover:bg-amber-50 hover:border-[#C19B77]/50 border border-slate-200 text-lg font-black text-slate-900 transition-colors shadow-2xs flex items-center justify-center cursor-pointer"
              >
                0
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={handleBackspace}
                className="w-16 h-14 rounded-2xl bg-rose-50 hover:bg-rose-100 border border-rose-200 text-xs font-bold text-rose-700 transition-colors flex items-center justify-center cursor-pointer"
              >
                Șterge
              </motion.button>
            </div>
          </div>
        ) : (
          /* Email / Password Mode */
          <form onSubmit={handleEmailSubmit} className="space-y-4 text-left">
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700">Email sau Utilizator:</label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="staff@hotelmarissa.ro"
                className="w-full bg-[#F8F6F2] border border-slate-200 focus:border-[#C19B77] rounded-xl px-3.5 py-2.5 text-xs text-slate-900 outline-none"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700">Parolă (cosmicom):</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-[#F8F6F2] border border-slate-200 focus:border-[#C19B77] rounded-xl px-3.5 py-2.5 text-xs text-slate-900 outline-none font-mono"
              />
            </div>

            {error && (
              <p className="text-xs font-bold text-rose-600 flex items-center gap-1">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </p>
            )}

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-[#C19B77] hover:bg-[#A8805B] text-white font-extrabold text-xs shadow-md transition-all cursor-pointer flex items-center justify-center gap-1.5"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Autentificare</span>
            </button>
          </form>
        )}

        <div className="pt-2 border-t border-slate-100 text-[10px] text-slate-400">
          Hotel & Restaurant Marissa • Tășnad
        </div>
      </motion.div>
    </div>
  );
};
export default StaffLogin;
