import React from 'react';
import { motion } from 'framer-motion';
import { Snowflake, Info, Sparkles, Flame, Leaf } from 'lucide-react';
import { MenuItem, Language } from '../types/menu';
import { ALLERGENS } from '../data/menuData';
import { TRANSLATIONS } from '../utils/translations';

interface MenuItemCardProps {
  item: MenuItem;
  lang: Language;
  onSelect: (item: MenuItem) => void;
  onSelectAllergen: (allergenId: number) => void;
}

export const MenuItemCard: React.FC<MenuItemCardProps> = ({
  item,
  lang,
  onSelect,
  onSelectAllergen,
}) => {
  const t = TRANSLATIONS[lang];
  const name = item.name[lang] || item.name.ro;
  const description = item.description[lang] || item.description.ro;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6, scale: 1.015, transition: { duration: 0.25 } }}
      className="liquid-card rounded-3xl overflow-hidden flex flex-col justify-between relative group h-full font-jakarta"
    >
      {/* Specular Sheen Effect on Top Edge */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/80 to-transparent z-20 pointer-events-none" />

      {/* Animated Image Banner Container */}
      <div 
        className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100 cursor-pointer" 
        onClick={() => onSelect(item)}
      >
        <motion.img
          src={item.imageUrl}
          alt={name}
          loading="lazy"
          whileHover={{ scale: 1.09 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent opacity-85 transition-opacity group-hover:opacity-95" />

        {/* Floating Top Badges */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5 flex-wrap z-10">
          {item.isThawed && (
            <motion.span
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="inline-flex items-center gap-1 bg-sky-950/90 backdrop-blur-md text-sky-200 border border-sky-400/50 px-2.5 py-0.5 rounded-lg text-[10px] font-bold shadow-md"
              title="ANPC Order 201/2022 & 183/2016"
            >
              <Snowflake className="w-3 h-3 text-sky-300 animate-spin" style={{ animationDuration: '9s' }} />
              <span>{t.thawedBadge}</span>
            </motion.span>
          )}
          {item.isSpecialty && (
            <span className="inline-flex items-center gap-1 bg-gradient-to-r from-amber-500 to-[#C19B77] text-white px-2.5 py-0.5 rounded-lg text-[10px] font-extrabold shadow-md backdrop-blur-sm">
              <Sparkles className="w-3 h-3 animate-pulse" />
              <span>{t.chefSpecial}</span>
            </span>
          )}
          {item.isVegetarian && (
            <span className="inline-flex items-center gap-1 bg-emerald-600/90 text-white px-2.5 py-0.5 rounded-lg text-[10px] font-extrabold shadow-md backdrop-blur-sm">
              <Leaf className="w-3 h-3" />
              <span>{t.vegetarian}</span>
            </span>
          )}
          {item.isSpicy && (
            <span className="inline-flex items-center gap-1 bg-rose-600/90 text-white px-2.5 py-0.5 rounded-lg text-[10px] font-extrabold shadow-md backdrop-blur-sm">
              <Flame className="w-3 h-3 animate-bounce" />
              <span>{t.spicy}</span>
            </span>
          )}
        </div>

        {/* Price & Weight Floating Glass Tag */}
        <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-xl border border-white/80 px-3 py-1 rounded-2xl shadow-lg text-right z-10 transition-transform group-hover:scale-105">
          <span className="font-black text-base text-[#C19B77]">{item.price.toFixed(2)}</span>
          <span className="text-[10px] font-black text-slate-900 ml-1 uppercase">RON</span>
        </div>

        <div className="absolute bottom-3 left-3 z-10">
          <span className="bg-slate-900/80 backdrop-blur-md text-white px-2.5 py-1 rounded-xl text-[11px] font-bold shadow-sm border border-white/20">
            {item.weight}
          </span>
        </div>
      </div>

      {/* Card Content Details */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3.5">
        <div className="space-y-1.5 cursor-pointer" onClick={() => onSelect(item)}>
          <h3 className="font-extrabold text-sm sm:text-base md:text-lg text-slate-900 group-hover:text-[#C19B77] transition-colors leading-snug tracking-tight">
            {name}
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed font-inter line-clamp-2">
            {description}
          </p>
        </div>

        {/* Footer Allergen Indices & Detail Button */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-1 flex-wrap">
            <span className="text-[10px] text-slate-400 font-bold mr-0.5">
              {t.allergensLabel}
            </span>
            {item.allergens && item.allergens.length > 0 ? (
              item.allergens.map((algCode) => {
                const algId = parseInt(algCode);
                const algObj = ALLERGENS.find((a) => a.id === algId);
                const algName = algObj ? algObj.name[lang] || algObj.name.ro : `Alergen ${algId}`;

                return (
                  <button
                    key={algCode}
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectAllergen(algId);
                    }}
                    className="w-5 h-5 rounded-full bg-slate-100 hover:bg-[#C19B77] text-slate-700 hover:text-white border border-slate-200 text-[10px] font-extrabold flex items-center justify-center transition-all cursor-pointer active:scale-90"
                    title={`${algId}. ${algName}`}
                  >
                    {algId}
                  </button>
                );
              })
            ) : (
              <span className="text-[10px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-lg border border-emerald-200">
                {t.noAllergens}
              </span>
            )}
          </div>

          <button
            onClick={() => onSelect(item)}
            className="flex items-center gap-1 text-[11px] font-extrabold text-[#C19B77] hover:text-white transition-all py-1.5 px-3 rounded-xl bg-amber-50/90 hover:bg-[#C19B77] border border-[#C19B77]/40 shrink-0 cursor-pointer shadow-xs active:scale-95"
          >
            <Info className="w-3.5 h-3.5" />
            <span>{t.detailsBtn}</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};
export default MenuItemCard;
