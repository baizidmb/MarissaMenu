import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Snowflake, Activity, ShieldAlert, Sparkles, Flame, Leaf } from 'lucide-react';
import { MenuItem, Language } from '../types/menu';
import { ALLERGENS } from '../data/menuData';
import { TRANSLATIONS } from '../utils/translations';

interface ItemDetailModalProps {
  item: MenuItem | null;
  lang: Language;
  onClose: () => void;
  onSelectAllergen: (id: number) => void;
}

export const ItemDetailModal: React.FC<ItemDetailModalProps> = ({
  item,
  lang,
  onClose,
  onSelectAllergen,
}) => {
  if (!item) return null;

  const t = TRANSLATIONS[lang];
  const name = item.name[lang] || item.name.ro;
  const description = item.description[lang] || item.description.ro;

  // Calculate per 100g nutritional values accurately
  const weightGrams = item.nutrition.weightGrams || 100;
  const factor100 = 100 / weightGrams;

  const per100g = {
    kcal: (item.nutrition.energyKcal * factor100).toFixed(1),
    kj: (item.nutrition.energyKj * factor100).toFixed(1),
    fats: (item.nutrition.fats * factor100).toFixed(1),
    satFats: (item.nutrition.saturatedFats * factor100).toFixed(1),
    carbs: (item.nutrition.carbs * factor100).toFixed(1),
    sugars: (item.nutrition.sugars * factor100).toFixed(1),
    protein: (item.nutrition.protein * factor100).toFixed(1),
    salt: (item.nutrition.salt * factor100).toFixed(1),
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-900/60 backdrop-blur-sm font-jakarta no-print">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.95 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="bg-white w-full max-w-2xl rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col border border-slate-200"
        >
          {/* Top Banner Image with Close Button */}
          <div className="relative h-52 sm:h-64 w-full bg-slate-100 shrink-0">
            <img
              src={item.imageUrl}
              alt={name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />

            <button
              onClick={onClose}
              className="absolute top-4 right-4 bg-black/60 hover:bg-black text-white p-2 rounded-full backdrop-blur-md transition-all shadow-md cursor-pointer z-20"
              title={t.closeBtn}
            >
              <X className="w-5 h-5" />
            </button>

            <div className="absolute bottom-3 left-4 right-4 text-white z-10 space-y-1">
              <div className="flex items-center gap-1.5 flex-wrap">
                {item.isThawed && (
                  <span className="bg-sky-950/90 text-sky-200 border border-sky-400/50 px-2.5 py-0.5 rounded-md text-[10px] sm:text-[11px] font-bold flex items-center gap-1 shadow-xs">
                    <Snowflake className="w-3.5 h-3.5 text-sky-300" />
                    <span>{t.thawedBadge}</span>
                  </span>
                )}
                {item.isSpecialty && (
                  <span className="bg-amber-500 text-white px-2 py-0.5 rounded-md text-[10px] font-extrabold flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    <span>{t.chefSpecial}</span>
                  </span>
                )}
                {item.isVegetarian && (
                  <span className="bg-emerald-600 text-white px-2 py-0.5 rounded-md text-[10px] font-extrabold flex items-center gap-1">
                    <Leaf className="w-3 h-3" />
                    <span>{t.vegetarian}</span>
                  </span>
                )}
                {item.isSpicy && (
                  <span className="bg-rose-600 text-white px-2 py-0.5 rounded-md text-[10px] font-extrabold flex items-center gap-1">
                    <Flame className="w-3 h-3" />
                    <span>{t.spicy}</span>
                  </span>
                )}
              </div>

              <h2 className="text-lg sm:text-2xl font-extrabold tracking-tight leading-tight">
                {name}
              </h2>

              <div className="flex items-center justify-between text-xs sm:text-sm pt-1">
                <span className="bg-white/20 backdrop-blur-md px-2.5 py-0.5 rounded-lg font-bold">
                  {item.weight}
                </span>
                <span className="text-lg sm:text-xl font-extrabold text-amber-300">
                  {item.price.toFixed(2)} RON
                </span>
              </div>
            </div>
          </div>

          {/* Modal Scrollable Body Content */}
          <div className="p-4 sm:p-6 overflow-y-auto space-y-5 flex-1 text-slate-900">
            {/* Ingredients Section */}
            <div className="space-y-1.5">
              <h3 className="text-xs sm:text-sm font-extrabold text-[#C19B77] uppercase tracking-wider flex items-center gap-1.5">
                <span>📝</span>
                <span>{t.ingredientsTitle}</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-[#F8F6F2] p-3 sm:p-3.5 rounded-2xl border border-slate-200 font-inter">
                {description}
              </p>
            </div>

            {/* ANPC Order 201/2022 Nutritional Values Table */}
            <div className="space-y-2.5">
              <h3 className="text-xs sm:text-sm font-extrabold text-[#C19B77] uppercase tracking-wider flex items-center gap-1.5">
                <Activity className="w-4 h-4 text-[#C19B77]" />
                <span>{t.nutritionTitle}</span>
              </h3>

              <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-2xs">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#F8F6F2] border-b border-slate-200 text-slate-900 font-extrabold">
                    <tr>
                      <th className="py-2.5 px-3">{t.nutritionColName}</th>
                      <th className="py-2.5 px-3 text-right">{t.nutritionColPortion} ({item.weight})</th>
                      <th className="py-2.5 px-3 text-right bg-amber-100/50">{t.nutritionCol100g}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-inter text-slate-700">
                    <tr>
                      <td className="py-2 px-3 font-semibold">{t.energyKcalKj}</td>
                      <td className="py-2 px-3 text-right font-bold text-slate-900">{item.nutrition.energyKcal} kcal / {item.nutrition.energyKj} kJ</td>
                      <td className="py-2 px-3 text-right font-bold text-[#C19B77] bg-amber-50/40">{per100g.kcal} kcal / {per100g.kj} kJ</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3 font-semibold">{t.fats}</td>
                      <td className="py-2 px-3 text-right">{item.nutrition.fats} g</td>
                      <td className="py-2 px-3 text-right bg-amber-50/40">{per100g.fats} g</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3 pl-5 text-slate-500 text-[11px]">{t.saturatedFats}</td>
                      <td className="py-2 px-3 text-right text-slate-600">{item.nutrition.saturatedFats} g</td>
                      <td className="py-2 px-3 text-right bg-amber-50/40 text-slate-600">{per100g.satFats} g</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3 font-semibold">{t.carbs}</td>
                      <td className="py-2 px-3 text-right">{item.nutrition.carbs} g</td>
                      <td className="py-2 px-3 text-right bg-amber-50/40">{per100g.carbs} g</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3 pl-5 text-slate-500 text-[11px]">{t.sugars}</td>
                      <td className="py-2 px-3 text-right text-slate-600">{item.nutrition.sugars} g</td>
                      <td className="py-2 px-3 text-right bg-amber-50/40 text-slate-600">{per100g.sugars} g</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3 font-semibold">{t.protein}</td>
                      <td className="py-2 px-3 text-right font-bold text-slate-900">{item.nutrition.protein} g</td>
                      <td className="py-2 px-3 text-right font-bold text-[#C19B77] bg-amber-50/40">{per100g.protein} g</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3 font-semibold">{t.salt}</td>
                      <td className="py-2 px-3 text-right">{item.nutrition.salt} g</td>
                      <td className="py-2 px-3 text-right bg-amber-50/40">{per100g.salt} g</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* EU Allergen Declarations */}
            <div className="space-y-2">
              <h3 className="text-xs sm:text-sm font-extrabold text-[#C19B77] uppercase tracking-wider flex items-center gap-1.5">
                <ShieldAlert className="w-4 h-4 text-[#C19B77]" />
                <span>{t.allergensSectionTitle}</span>
              </h3>

              <div className="flex flex-wrap gap-2">
                {item.allergens && item.allergens.length > 0 ? (
                  item.allergens.map((algCode) => {
                    const algId = parseInt(algCode);
                    const algObj = ALLERGENS.find((a) => a.id === algId);
                    const algName = algObj ? algObj.name[lang] || algObj.name.ro : `Alergen ${algId}`;

                    return (
                      <button
                        key={algCode}
                        onClick={() => onSelectAllergen(algId)}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 border border-[#C19B77]/40 hover:bg-[#C19B77] hover:text-white transition-all text-xs font-bold cursor-pointer"
                      >
                        <span className="w-4 h-4 rounded-full bg-[#C19B77] text-white text-[10px] font-extrabold flex items-center justify-center">
                          {algId}
                        </span>
                        <span>{algName}</span>
                      </button>
                    );
                  })
                ) : (
                  <span className="text-xs text-emerald-700 font-bold bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200">
                    {t.noAllergensDeclared}
                  </span>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
export default ItemDetailModal;
