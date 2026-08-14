import React from 'react';
import { Clock, Phone, MapPin, ExternalLink, ShieldCheck, CalendarCheck } from 'lucide-react';
import { HOTEL_INFO } from '../data/menuData';
import { Language } from '../types/menu';
import { TRANSLATIONS } from '../utils/translations';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  return (
    <footer className="bg-white border-t border-slate-200 mt-12 py-8 sm:py-10 px-4 sm:px-6 font-jakarta text-slate-700 no-print">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Top Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs">
          {/* Address & Location */}
          <div className="space-y-2">
            <h4 className="font-extrabold text-sm text-slate-900 flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#C19B77]" />
              <span>{t.addressTitle}</span>
            </h4>
            <p className="text-slate-600 font-inter leading-relaxed">
              {HOTEL_INFO.name}<br />
              {HOTEL_INFO.address}, {HOTEL_INFO.town}<br />
              Jud. {HOTEL_INFO.county}, {HOTEL_INFO.country}
            </p>
          </div>

          {/* Contact & Phone */}
          <div className="space-y-2">
            <h4 className="font-extrabold text-sm text-slate-900 flex items-center gap-1.5">
              <Phone className="w-4 h-4 text-[#C19B77]" />
              <span>{t.contactTitle}</span>
            </h4>
            <div className="text-slate-600 font-inter space-y-1">
              <div>{t.reception} <a href={`tel:${HOTEL_INFO.phoneReceptie}`} className="font-bold text-[#C19B77] hover:underline">{HOTEL_INFO.phoneReceptie}</a></div>
              <div>Fix 1: <a href={`tel:${HOTEL_INFO.phoneFix1}`} className="hover:underline">{HOTEL_INFO.phoneFix1}</a></div>
              <div>Fix 2: <a href={`tel:${HOTEL_INFO.phoneFix2}`} className="hover:underline">{HOTEL_INFO.phoneFix2}</a></div>
            </div>
          </div>

          {/* Opening & Dining Schedule */}
          <div className="space-y-2">
            <h4 className="font-extrabold text-sm text-slate-900 flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#C19B77]" />
              <span>{t.scheduleTitle}</span>
            </h4>
            <div className="bg-[#F8F6F2] p-3 rounded-2xl border border-slate-200 space-y-1 font-inter">
              <div className="text-slate-800 font-bold text-[11px]">{t.scheduleHours}</div>
              <div className="text-slate-500 text-[10px]">{t.scheduleKitchen}</div>
            </div>
          </div>

          {/* ANPC Official Consumer Links */}
          <div className="space-y-2">
            <h4 className="font-extrabold text-sm text-slate-900 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#C19B77]" />
              <span>{t.consumerProtectionTitle}</span>
            </h4>
            <div className="flex flex-col gap-2 pt-0.5">
              <a
                href="https://anpc.ro"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between p-2 rounded-xl bg-slate-50 hover:bg-amber-50 border border-slate-200 text-[11px] font-bold text-slate-800 transition-colors"
              >
                <span>ANPC - anpc.ro</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#C19B77]" />
              </a>
              <a
                href="https://sal.anpc.ro"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between p-2 rounded-xl bg-slate-50 hover:bg-amber-50 border border-slate-200 text-[11px] font-bold text-slate-800 transition-colors"
              >
                <span>SAL - Solutionarea Alternativa a Litigiilor</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#C19B77]" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Rights & Customer Reservation Link */}
        <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} {HOTEL_INFO.name}. {t.rightsReserved}
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${HOTEL_INFO.phoneReceptie}`}
              className="text-[#C19B77] hover:underline font-bold flex items-center gap-1"
            >
              <CalendarCheck className="w-3.5 h-3.5" />
              <span>{t.reservationsBtn}</span>
            </a>
            <a href="https://hotelmarissa.ro" target="_blank" rel="noopener noreferrer" className="hover:text-[#C19B77] transition-colors">
              hotelmarissa.ro
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
