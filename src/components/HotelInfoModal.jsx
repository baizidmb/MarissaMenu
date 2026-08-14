import React from 'react';
import { X, Hotel, Phone, Mail, Globe, Sparkles, ExternalLink, Bed, Coffee, Tv, Wine } from 'lucide-react';
import { HOTEL_INFO } from '../data/marissaMenuData';

export default function HotelInfoModal({ isOpen, onClose, lang = 'ro' }) {
  if (!isOpen) return null;

  const sloganText = typeof HOTEL_INFO.slogan === 'object' ? (HOTEL_INFO.slogan[lang] || HOTEL_INFO.slogan.ro) : HOTEL_INFO.slogan;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in no-print overflow-y-auto">
      <div className="bg-white border border-[#E8E2D9] rounded-2xl max-w-2xl w-full flex flex-col shadow-2xl overflow-hidden my-auto">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#E8E2D9] bg-[#F8F6F2]">
          <div className="flex items-center gap-3">
            <img
              src={HOTEL_INFO.logoUrl}
              alt="Hotel Marissa Logo"
              className="h-10 w-auto object-contain"
            />
            <div>
              <h2 className="font-['Playfair_Display'] font-bold text-[#1C1C1C] text-lg">
                {HOTEL_INFO.name}
              </h2>
              <p className="text-[11px] text-[#7A7A7A] font-medium">
                {sloganText}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-white border border-[#E8E2D9] text-[#7A7A7A] hover:text-[#1C1C1C] flex items-center justify-center transition-all"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 space-y-6 text-xs text-[#373737] overflow-y-auto max-h-[75vh]">
          {/* Logo Showcase Banner */}
          <div className="bg-[#F8F6F2] border border-[#E8E2D9] rounded-xl p-5 text-center space-y-3 relative overflow-hidden">
            <div className="w-44 mx-auto py-1">
              <img
                src={HOTEL_INFO.logoUrl}
                alt="Hotel Marissa Official Logo"
                className="w-full h-auto object-contain filter drop-shadow-sm"
              />
            </div>
            <p className="text-[#555555] text-xs italic max-w-md mx-auto leading-relaxed">
              {lang === 'ro'
                ? '„Locul unde confortul, eleganța și gastronomia de înaltă clasă se întâlnesc pentru o experiență de neuitat.”'
                : '„Where luxury comfort, refined elegance, and high gastronomy meet for an unforgettable experience.”'}
            </p>
          </div>

          {/* Hotel Services Grid */}
          <div className="space-y-3">
            <h3 className="font-['Playfair_Display'] font-bold text-[#1C1C1C] text-sm flex items-center gap-1.5 uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-[#C19B77]" />
              <span>{lang === 'ro' ? 'Facilități & Servicii Hotel Marissa' : 'Hotel Marissa Facilities & Services'}</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {HOTEL_INFO.services.map((srv, idx) => {
                const srvTitle = typeof srv.title === 'object' ? (srv.title[lang] || srv.title.ro) : srv.title;
                const srvDesc = typeof srv.desc === 'object' ? (srv.desc[lang] || srv.desc.ro) : srv.desc;

                return (
                  <div key={idx} className="bg-white p-3.5 rounded-xl border border-[#E8E2D9] space-y-1 hover:border-[#C19B77]/50 transition-colors">
                    <div className="font-bold text-[#1C1C1C] text-xs flex items-center gap-1.5">
                      <span className="text-[#C19B77]">•</span>
                      <span>{srvTitle}</span>
                    </div>
                    <p className="text-[11px] text-[#7A7A7A] leading-relaxed">
                      {srvDesc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Direct Contact Details */}
          <div className="bg-[#F8F6F2] border border-[#E8E2D9] rounded-xl p-4 space-y-3">
            <h3 className="font-['Playfair_Display'] font-bold text-[#1C1C1C] text-xs flex items-center gap-1.5">
              <Phone className="w-4 h-4 text-[#C19B77]" />
              <span>{lang === 'ro' ? 'Contact & Rezervări Directe' : 'Contact & Direct Reservations'}</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[11px]">
              <div className="space-y-1">
                <span className="text-[#7A7A7A]">{lang === 'ro' ? 'Recepție Hotel:' : 'Hotel Reception:'}</span>
                <div>
                  <a href={`tel:${HOTEL_INFO.phoneReceptie.replace(/\./g, '')}`} className="font-mono font-bold text-[#C19B77] hover:underline text-xs">
                    {HOTEL_INFO.phoneReceptie}
                  </a>
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-[#7A7A7A]">{lang === 'ro' ? 'Telefon Fix:' : 'Landline:'}</span>
                <div>
                  <a href={`tel:${HOTEL_INFO.phoneFix1.replace(/\./g, '')}`} className="font-mono font-bold text-[#C19B77] hover:underline text-xs">
                    {HOTEL_INFO.phoneFix1}
                  </a>
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-[#7A7A7A]">{lang === 'ro' ? 'Email Oficial:' : 'Official Email:'}</span>
                <div>
                  <a href={`mailto:${HOTEL_INFO.email}`} className="font-mono text-[#C19B77] hover:underline text-xs">
                    {HOTEL_INFO.email}
                  </a>
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-[#7A7A7A]">{lang === 'ro' ? 'Website Oficial:' : 'Official Website:'}</span>
                <div>
                  <a href={HOTEL_INFO.website} target="_blank" rel="noopener noreferrer" className="text-[#C19B77] font-semibold hover:underline inline-flex items-center gap-1 text-xs">
                    <span>hotelmarissa.ro</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-5 py-3 border-t border-[#E8E2D9] bg-[#F8F6F2] flex justify-between items-center">
          <a
            href={HOTEL_INFO.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[#C19B77] hover:underline text-xs font-bold"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{lang === 'ro' ? 'Vizitează Site-ul Oficial' : 'Visit Official Website'}</span>
          </a>

          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#C19B77] hover:bg-[#A8805B] text-white font-bold rounded-xl text-xs transition-all shadow-sm"
          >
            {lang === 'ro' ? 'Închide' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
}
