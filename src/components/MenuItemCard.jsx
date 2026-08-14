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
    <div className="card-white rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 relative group h-full">
      {/* Top Details & Pricing */}
      <div className="p-4 sm:p-5 space-y-3 flex-1 flex flex-col justify-between">
        <div className="space-y-2">
          {/* Header Row: Title & Price Tag */}
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-['Playfair_Display'] font-bold text-base sm:text-lg text-[#1C1C1C] group-hover:text-[#C19B77] transition-colors leading-snug">
              {itemName}
            </h3>

            {/* Price Badge */}
            <div className="bg-[#F8F6F2] border border-[#C19B77]/40 px-3 py-1 rounded-xl shrink-0 text-right shadow-xs">
              <span className="font-mono font-bold text-base text-[#C19B77]">
                {item.price.toFixed(2)}
              </span>
              <span className="text-[10px] font-bold text-[#1C1C1C] ml-1 uppercase">lei</span>
            </div>
          </div>

          {/* Portion Weight & Frozen Badge */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="inline-block bg-[#F8F6F2] text-[#7A7A7A] border border-[#E8E2D9] px-2.5 py-0.5 rounded-md text-[11px] font-mono font-semibold">
              {item.weight}
            </span>

            {/* Frozen Notice Badge */}
            {item.isFrozen && (
              <span 
                className="inline-flex items-center gap-1 bg-sky-50 text-sky-700 border border-sky-200 px-2 py-0.5 rounded-md text-[10px] font-medium"
                title={lang === 'ro' ? 'Ingrediente provenite din decongelare (Ordin ANPC 183/2016)' : 'Ingredients derived from thawed foods (ANPC 183/2016)'}
              >
                <Snowflake className="w-3 h-3 text-sky-500 animate-spin-slow" />
                <span>{lang === 'ro' ? 'Decongelat' : 'Thawed'}</span>
              </span>
            )}
          </div>

          {/* Ingredients Description */}
          <p className="text-xs text-[#555555] leading-relaxed">
            {itemIngredients}
          </p>
        </div>

        {/* Footer Row: Allergen Badges & Nutrition Trigger */}
        <div className="pt-3 border-t border-[#E8E2D9] flex items-center justify-between gap-2 text-xs mt-2">
          {/* Allergen Indices Badges */}
          <div className="flex items-center gap-1 flex-wrap">
            <span className="text-[10px] text-[#7A7A7A] font-semibold mr-0.5">
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
                    className="w-5 h-5 rounded-full bg-[#F8F6F2] hover:bg-[#C19B77] text-[#7A7A7A] hover:text-white border border-[#E8E2D9] text-[10px] font-bold flex items-center justify-center transition-all active:scale-95"
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
            className="flex items-center gap-1 text-[11px] font-semibold text-[#C19B77] hover:text-[#A8805B] transition-colors shrink-0 py-1 px-1.5 rounded-lg hover:bg-[#F8F6F2]"
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
