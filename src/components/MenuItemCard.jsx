import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Snowflake, Info, AlertTriangle } from 'lucide-react';
import NutritionDrawer from './NutritionDrawer';
import { ALLERGEN_INDEX } from '../data/marissaMenuData';

export default function MenuItemCard({ item, onSelectAllergen }) {
  const [isNutritionOpen, setIsNutritionOpen] = useState(false);

  // Format price as XX,00 lei
  const formattedPrice = item.price % 1 === 0 ? `${item.price},00` : item.price.toFixed(2).replace('.', ',');

  return (
    <div className="glass-card hover:border-amber-500/40 rounded-2xl p-4 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/5 flex flex-col justify-between group relative overflow-hidden">
      {/* Top Accent Line on hover */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-500/0 to-transparent group-hover:via-amber-500/70 transition-all duration-500" />

      <div>
        {/* Header Row: Title & Price */}
        <div className="flex items-start justify-between gap-3 mb-2">
          <div className="flex-1">
            <h3 className="font-['Outfit'] font-bold text-slate-100 text-base group-hover:text-amber-300 transition-colors leading-snug">
              {item.name}
            </h3>
            <div className="flex items-center gap-2 mt-1">
              <span className="inline-block text-[11px] font-semibold text-slate-400 bg-slate-950/80 px-2 py-0.5 rounded-md border border-slate-800">
                ⚖️ {item.weight}
              </span>
              {item.isFrozen && (
                <span className="inline-flex items-center gap-1 text-[10px] font-medium text-cyan-300 bg-cyan-950/80 px-2 py-0.5 rounded-md border border-cyan-800/60" title="Produs provenit din decongelare (Ordinul ANPC 183/2016)">
                  <Snowflake className="w-3 h-3 text-cyan-400" />
                  <span>Decongelat</span>
                </span>
              )}
            </div>
          </div>

          {/* Price Badge */}
          <div className="text-right shrink-0 bg-slate-950/90 px-3 py-1.5 rounded-xl border border-amber-500/30 group-hover:border-amber-500/60 transition-all">
            <div className="font-['Cinzel'] font-extrabold text-base text-amber-400 drop-shadow-sm">
              {formattedPrice}
            </div>
            <div className="text-[9px] uppercase tracking-wider font-semibold text-amber-500/80">
              LEI
            </div>
          </div>
        </div>

        {/* Ingredients List */}
        <p className="text-slate-300 text-xs leading-relaxed mb-3.5">
          <strong className="text-slate-400 font-medium">Ingrediente: </strong>
          {item.ingredients}
        </p>
      </div>

      {/* Footer Section: Allergens & Collapsible Nutrition Drawer */}
      <div className="pt-2 border-t border-slate-800/60 space-y-2.5">
        {/* Allergen Badges */}
        <div className="flex items-center flex-wrap gap-1.5">
          <span className="text-[10px] text-slate-400 font-medium mr-1 flex items-center gap-1">
            <AlertTriangle className="w-3 h-3 text-amber-400" />
            Alergeni (EU):
          </span>
          {item.allergens && item.allergens.length > 0 ? (
            item.allergens.map((algId) => {
              const allergenObj = ALLERGEN_INDEX.find((a) => a.id === algId);
              return (
                <button
                  key={algId}
                  onClick={() => onSelectAllergen(algId)}
                  className="w-5 h-5 rounded-full bg-slate-800 hover:bg-amber-500 hover:text-slate-950 text-amber-400 text-[10px] font-bold border border-slate-700 transition-all flex items-center justify-center shadow-sm"
                  title={`Alergen [${algId}]: ${allergenObj ? allergenObj.name : ''}. Apăsați pentru detalii.`}
                >
                  {algId}
                </button>
              );
            })
          ) : (
            <span className="text-[10px] text-emerald-400/90 font-medium bg-emerald-950/40 px-2 py-0.5 rounded-full border border-emerald-800/40">
              Fără Alergeni Declarați
            </span>
          )}
        </div>

        {/* Nutrition Accordion Trigger */}
        <button
          onClick={() => setIsNutritionOpen(!isNutritionOpen)}
          className="w-full flex items-center justify-between px-3 py-1.5 rounded-xl bg-slate-950/60 hover:bg-slate-900 border border-slate-800/90 text-slate-300 hover:text-amber-300 text-xs transition-all font-medium"
        >
          <span className="flex items-center gap-1.5">
            <span>📊</span>
            <span>Valori nutriționale per 100g</span>
          </span>
          {isNutritionOpen ? (
            <ChevronUp className="w-3.5 h-3.5 text-amber-400" />
          ) : (
            <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
          )}
        </button>

        {/* Collapsible Drawer */}
        <NutritionDrawer nutrition={item.nutrition} isOpen={isNutritionOpen} />
      </div>
    </div>
  );
}
