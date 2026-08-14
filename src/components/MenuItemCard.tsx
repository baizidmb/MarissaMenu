import React from 'react';
import { motion } from 'framer-motion';
import { Snowflake, Info, Sparkles, Flame, Leaf } from 'lucide-react';
import { MenuItem, Language } from '../types/menu';
import { ALLERGENS } from '../data/menuData';

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
  const name = item.name[lang] || item.name.ro;
  const description = item.description[lang] || item.description.ro;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -4 }}
      className="card-white rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 relative group h-full border border-slate-200 hover:border-[#C19B77] bg-white font-jakarta shadow-xs hover:shadow-xl"
    >
      {/* Animated Image Banner Container */}
      <div 
        className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100 cursor-pointer" 
        onClick={() => onSelect(item)}
      >
        <motion.img
          src={item.imageUrl}
          alt={name}
          loading="lazy"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />

        {/* Floating Top Badges */}
        <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 flex-wrap z-10">
          {item.isThawed && (
            <motion.span
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="inline-flex items-center gap-1 bg-sky-950/90 backdrop-blur-md text-sky-200 border border-sky-400/50 px-2.5 py-0.5 rounded-md text-[10px] font-bold shadow-md"
              title="Produs decongelat (ANPC Order 201/2022)"
            >
              <Snowflake className="w-3 h-3 text-sky-300 animate-spin" style={{ animationDuration: '8s' }} />
              <span>*Produs decongelat</span>
            </motion.span>
          )}
          {item.isSpecialty && (
            <span className="inline-flex items-center gap-1 bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-2.5 py-0.5 rounded-md text-[10px] font-extrabold shadow-md">
              <Sparkles className="w-3 h-3" />
              <span>Chef Special</span>
            </span>
          )}
          {item.isVegetarian && (
            <span className="inline-flex items-center gap-1 bg-emerald-600 text-white px-2.5 py-0.5 rounded-md text-[10px] font-extrabold shadow-md">
              <Leaf className="w-3 h-3" />
              <span>Vegetarian</span>
            </span>
          )}
          {item.isSpicy && (
            <span className="inline-flex items-center gap-1 bg-rose-600 text-white px-2.5 py-0.5 rounded-md text-[10px] font-extrabold shadow-md">
              <Flame className="w-3 h-3 animate-pulse" />
              <span>Picant</span>
            </span>
          )}
        </div>

        {/* Price & Weight Floating Tag */}
        <div className="absolute bottom-2.5 right-2.5 bg-white/95 backdrop-blur-md border border-[#C19B77]/40 px-3 py-1 rounded-xl shadow-lg text-right z-10 transition-transform group-hover:scale-105">
          <span className="font-extrabold text-base text-[#C19B77]">{item.price.toFixed(2)}</span>
          <span className="text-[10px] font-extrabold text-slate-900 ml-1 uppercase">RON</span>
        </div>

        <div className="absolute bottom-2.5 left-2.5 z-10">
          <span className="bg-slate-900/85 backdrop-blur-md text-white px-2.5 py-0.5 rounded-md text-[11px] font-bold shadow-xs">
            {item.weight}
          </span>
        </div>
      </div>

      {/* Card Content Details */}
      <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
        <div className="space-y-1.5 cursor-pointer" onClick={() => onSelect(item)}>
          <h3 className="font-extrabold text-base sm:text-lg text-slate-900 group-hover:text-[#C19B77] transition-colors leading-snug tracking-tight">
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
              {lang === 'ro' ? 'Alergeni:' : lang === 'en' ? 'Allergens:' : 'Allergének:'}
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
                    className="w-5 h-5 rounded-full bg-slate-100 hover:bg-[#C19B77] text-slate-700 hover:text-white border border-slate-200 text-[10px] font-extrabold flex items-center justify-center transition-all cursor-pointer"
                    title={`${algId}. ${algName}`}
                  >
                    {algId}
                  </button>
                );
              })
            ) : (
              <span className="text-[10px] text-emerald-700 font-bold bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                {lang === 'ro' ? 'Fără Alergeni' : 'No Allergens'}
              </span>
            )}
          </div>

          <button
            onClick={() => onSelect(item)}
            className="flex items-center gap-1 text-[11px] font-extrabold text-[#C19B77] hover:text-[#A8805B] transition-all py-1 px-2.5 rounded-lg bg-amber-50/80 hover:bg-amber-100/60 border border-[#C19B77]/30 shrink-0 cursor-pointer"
          >
            <Info className="w-3.5 h-3.5" />
            <span>{lang === 'ro' ? 'Detalii & Nutriție' : lang === 'en' ? 'Details & Nutrition' : 'Részletek'}</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};
export default MenuItemCard;
