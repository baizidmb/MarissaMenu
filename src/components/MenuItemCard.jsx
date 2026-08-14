import React, { useState } from 'react';
import { Snowflake, Activity, ChevronDown, ChevronUp } from 'lucide-react';
import NutritionDrawer from './NutritionDrawer';
import { ALLERGEN_INDEX } from '../data/marissaMenuData';

export default function MenuItemCard({ item, onSelectAllergen, lang = 'ro' }) {
  const [showNutrition, setShowNutrition] = useState(false);

  // Extract localized name & ingredients
  const itemName = typeof item.name === 'object' ? (item.name[lang] || item.name.ro) : item.name;
  const itemIngredients = typeof item.ingredients === 'object' ? (item.ingredients[lang] || item.ingredients.ro) : item.ingredients;

  return (
    <div className="card-white rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 relative group h-full border border-slate-200 hover:border-[#C19B77] bg-white">
      {/* Top Details & Pricing */}
      <div className="p-4 sm:p-5 space-y-3 flex-1 flex flex-col justify-between">
        <div className="space-y-2">
          {/* Header Row: Title & Price Tag */}
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-jakarta font-extrabold text-base sm:text-lg text-slate-900 group-hover:text-[#C19B77] transition-colors leading-snug tracking-tight">
              {itemName}
            </h3>

            {/* Price Badge */}
            <div className="bg-[#F8F6F2] border border-[#C19B77]/30 px-3 py-1 rounded-xl shrink-0 text-right shadow-2xs">
              <span className="font-jakarta font-extrabold text-base text-[#C19B77]">
                {item.price.toFixed(2)}
              </span>
              <span className="text-[10px] font-bold text-slate-700 ml-1 uppercase">lei</span>
            </div>
          </div>

          {/* Portion Weight & Frozen Badge */}
          <div className="flex items-center gap-2 flex-wrap pt-0.5">
            <span className="inline-block bg-slate-100 text-slate-700 border border-slate-200 px-2.5 py-0.5 rounded-md text-[11px] font-jakarta font-bold">
              {item.weight}
            </span>

            {/* Frozen Notice Badge */}
            {item.isFrozen && (
              <span 
                className="inline-flex items-center gap-1 bg-sky-50 text-sky-700 border border-sky-200 px-2 py-0.5 rounded-md text-[10px] font-semibold"
                title={lang === 'ro' ? 'Ingrediente provenite din decongelare (Ordin ANPC 183/2016)' : 'Ingredients derived from thawed foods (ANPC 183/2016)'}
              >
                <Snowflake className="w-3 h-3 text-sky-500 animate-spin-slow" />
                <span>{lang === 'ro' ? 'Decongelat' : 'Thawed'}</span>
              </span>
            )}
          </div>

          {/* Ingredients Description */}
          <p className="text-xs text-slate-600 leading-relaxed font-inter pt-1">
            {itemIngredients}
          </p>
        </div>

        {/* Footer Row: Allergen Badges & Nutrition Trigger */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2 text-xs mt-3">
          {/* Allergen Indices Badges */}
          <div className="flex items-center gap-1 flex-wrap">
            <span className="text-[10px] text-slate-400 font-semibold mr-0.5">
              {lang === 'ro' ? 'Alergeni:' : 'Allergens:'}
            </span>
            {item.allergens && item.allergens.length > 0 ? (
              item.allergens.map((algId) => {
                const alg = ALLERGEN_INDEX.find((a) => a.id === algId);
                const algName = alg ? (typeof alg.name === 'object' ? (alg.name[lang] || alg.name.ro) : alg.name) : `Alergen ${algId}`;

                return (
                  <button
                    key={algId}
                    onClick={() => onSelectAllergen(algId)}
                    className="w-5 h-5 rounded-full bg-slate-100 hover:bg-[#C19B77] text-slate-600 hover:text-white border border-slate-200 text-[10px] font-bold flex items-center justify-center transition-all active:scale-95 cursor-pointer"
                    title={`${algId}. ${algName}`}
                  >
                    {algId}
                  </button>
                );
              })
            ) : (
              <span className="text-[10px] text-emerald-700 font-semibold bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                {lang === 'ro' ? 'Fără Alergeni' : 'No Allergens'}
              </span>
            )}
          </div>

          {/* Nutrition Drawer Toggle */}
          <button
            onClick={() => setShowNutrition(!showNutrition)}
            className="flex items-center gap-1 text-[11px] font-bold text-[#C19B77] hover:text-[#A8805B] transition-colors shrink-0 py-1 px-2 rounded-lg hover:bg-amber-50 cursor-pointer"
          >
            <Activity className="w-3.5 h-3.5" />
            <span>{lang === 'ro' ? '100g Info' : '100g Info'}</span>
            {showNutrition ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Collapsible Per 100g Nutritional Breakdown Drawer */}
      {showNutrition && (
        <NutritionDrawer nutrition={item.nutrition} lang={lang} />
      )}
    </div>
  );
}
