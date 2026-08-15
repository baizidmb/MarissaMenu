import React from 'react';
import { motion } from 'framer-motion';
import { X, Hotel, Phone, Mail, Globe, MapPin, Clock, ExternalLink } from 'lucide-react';
import { HOTEL_INFO } from '../data/menuData';
import { Language } from '../types/menu';
import { TRANSLATIONS } from '../utils/translations';

interface HotelInfoModalProps {
  lang: Language;
  onClose: () => void;
}

export const HotelInfoModal: React.FC<HotelInfoModalProps> = ({ lang, onClose }) => {
  const t = TRANSLATIONS[lang];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 liquid-overlay font-jakarta no-print">
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 25 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 25 }}
        transition={{ type: 'spring', damping: 28, stiffness: 350 }}
        className="liquid-glass-modal rounded-3xl p-6 sm:p-7 max-w-lg w-full shadow-2xl border border-white/90 text-slate-900 relative space-y-5"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1.5 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
          title={t.closeBtn}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 border-b border-slate-100/80 pb-4">
          <div className="w-12 h-12 rounded-2xl bg-amber-50/90 border border-[#C19B77]/30 flex items-center justify-center text-[#C19B77] font-bold shadow-inner">
            <Hotel className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-extrabold text-lg text-slate-900">
              {HOTEL_INFO.name}
            </h3>
            <p className="text-xs text-[#C19B77] font-bold">
              {HOTEL_INFO.slogan[lang] || HOTEL_INFO.slogan.ro}
            </p>
          </div>
        </div>

        {/* Details Content */}
        <div className="space-y-4 text-xs">
          <div className="bg-white/70 backdrop-blur-sm p-4 rounded-2xl border border-slate-200/80 space-y-2.5 font-inter shadow-inner">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#C19B77] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-slate-900">{t.addressTitle}: </span>
                <span className="text-slate-600">{HOTEL_INFO.address}, {HOTEL_INFO.town}, Jud. {HOTEL_INFO.county}</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#C19B77] shrink-0" />
              <div>
                <span className="font-bold text-slate-900">{t.reception} </span>
                <a href={`tel:${HOTEL_INFO.phoneReceptie}`} className="font-bold text-[#C19B77] hover:underline">{HOTEL_INFO.phoneReceptie}</a>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#C19B77] shrink-0" />
              <div>
                <span className="font-bold text-slate-900">Email: </span>
                <a href={`mailto:${HOTEL_INFO.email}`} className="text-slate-600 hover:underline">{HOTEL_INFO.email}</a>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#C19B77] shrink-0" />
              <div>
                <span className="font-bold text-slate-900">{t.scheduleTitle}: </span>
                <span className="text-slate-700 font-bold">{t.scheduleHours}</span>
              </div>
            </div>
          </div>

          <a
            href={HOTEL_INFO.website}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-[#C19B77] to-[#A8805B] hover:brightness-105 text-white font-extrabold text-xs shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2 font-jakarta border border-white/20"
          >
            <Globe className="w-4 h-4" />
            <span>hotelmarissa.ro</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </motion.div>
    </div>
  );
};
export default HotelInfoModal;
