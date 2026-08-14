import React from 'react';
import { X, Hotel, Phone, Mail, Globe, MapPin, Sparkles, ExternalLink, ShieldCheck, Heart } from 'lucide-react';
import { HOTEL_INFO } from '../data/marissaMenuData';

export default function HotelInfoModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fade-in no-print overflow-y-auto">
      <div className="bg-slate-900 border border-amber-500/40 rounded-2xl max-w-2xl w-full flex flex-col shadow-2xl overflow-hidden my-auto">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-amber-500/20 bg-slate-950/90">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-slate-900 border border-amber-500/40 p-1 flex items-center justify-center shadow-lg">
              <img
                src={HOTEL_INFO.logoUrl}
                alt="Hotel Marissa Logo"
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.style.display = 'none';
                }}
              />
              <Hotel className="w-6 h-6 text-amber-400 fallback-icon" style={{ display: 'none' }} />
            </div>
            <div>
              <h2 className="font-['Cinzel'] font-bold text-amber-400 text-lg">
                {HOTEL_INFO.name}
              </h2>
              <p className="text-[11px] text-slate-300 font-medium">
                {HOTEL_INFO.slogan}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-amber-400 flex items-center justify-center transition-all"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 space-y-6 text-xs text-slate-200 overflow-y-auto max-h-[75vh]">
          {/* Logo Banner Box */}
          <div className="glass-card-gold rounded-xl p-5 text-center space-y-3 relative overflow-hidden">
            <div className="w-40 mx-auto py-2">
              <img
                src={HOTEL_INFO.logoUrl}
                alt="Hotel Marissa Official Logo"
                className="w-full h-auto object-contain filter drop-shadow-md"
              />
            </div>
            <p className="text-slate-200 text-xs italic max-w-md mx-auto leading-relaxed">
              „Locul unde confortul, eleganța și gastronomia de înaltă clasă se întâlnesc pentru o experiență de neuitat.”
            </p>
          </div>

          {/* Hotel Services Grid */}
          <div className="space-y-3">
            <h3 className="font-bold text-amber-400 text-xs flex items-center gap-1.5 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              Facilități & Servicii Hotel Marissa
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {HOTEL_INFO.services.map((srv, idx) => (
                <div key={idx} className="bg-slate-950/80 p-3.5 rounded-xl border border-slate-800 space-y-1">
                  <div className="font-semibold text-slate-100 text-xs flex items-center gap-1.5">
                    <span className="text-amber-400">•</span>
                    <span>{srv.title}</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    {srv.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Details */}
          <div className="bg-slate-950/90 border border-slate-800 rounded-xl p-4 space-y-3">
            <h3 className="font-bold text-slate-200 text-xs flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              Contact & Rezervări Directe
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[11px]">
              <div className="space-y-1">
                <span className="text-slate-400">Recepție Hotel:</span>
                <div>
                  <a href={`tel:${HOTEL_INFO.phoneReceptie.replace(/\./g, '')}`} className="font-mono font-bold text-amber-400 hover:underline">
                    {HOTEL_INFO.phoneReceptie}
                  </a>
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-slate-400">Fix / Informații:</span>
                <div>
                  <a href={`tel:${HOTEL_INFO.phoneFix1.replace(/\./g, '')}`} className="font-mono font-bold text-amber-400 hover:underline">
                    {HOTEL_INFO.phoneFix1}
                  </a>
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-slate-400">Email Oficial:</span>
                <div>
                  <a href={`mailto:${HOTEL_INFO.email}`} className="font-mono text-amber-400 hover:underline">
                    {HOTEL_INFO.email}
                  </a>
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-slate-400">Website Oficial:</span>
                <div>
                  <a href={HOTEL_INFO.website} target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline inline-flex items-center gap-1">
                    <span>hotelmarissa.ro</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-5 py-3 border-t border-slate-800 bg-slate-950/90 flex justify-between items-center">
          <a
            href={HOTEL_INFO.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-amber-400 hover:underline text-xs font-semibold"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>Vizitează Site-ul Oficial</span>
          </a>

          <button
            onClick={onClose}
            className="px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold rounded-xl text-xs transition-all shadow-md"
          >
            Închide
          </button>
        </div>
      </div>
    </div>
  );
}
