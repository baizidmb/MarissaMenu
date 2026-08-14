import React from 'react';
import { Activity, Flame, Shield, Wheat, Zap } from 'lucide-react';

export default function NutritionDrawer({ nutrition, isOpen }) {
  if (!isOpen || !nutrition) return null;

  return (
    <div className="mt-3 pt-3 border-t border-slate-800/80 animate-fade-in bg-slate-950/60 rounded-xl p-3.5 space-y-3 text-xs">
      <div className="flex items-center justify-between border-b border-slate-800/60 pb-2">
        <span className="font-semibold text-amber-400 flex items-center gap-1.5 text-xs">
          <Activity className="w-3.5 h-3.5 text-amber-400" />
          Valori Nutriționale Medii per 100g Produs
        </span>
        <span className="text-[10px] text-slate-400 bg-slate-900 px-2 py-0.5 rounded-full border border-slate-800">
          ANPC / EU Directive
        </span>
      </div>

      {/* Energy Highlight Box */}
      <div className="grid grid-cols-2 gap-2 bg-slate-900/90 rounded-lg p-2 border border-slate-800">
        <div className="flex items-center gap-2">
          <Flame className="w-4 h-4 text-amber-500" />
          <div>
            <div className="text-[10px] text-slate-400">Valoare Energetică</div>
            <div className="font-bold text-slate-100 text-xs">{nutrition.energyKcal} kcal</div>
          </div>
        </div>
        <div className="flex items-center gap-2 border-l border-slate-800 pl-2">
          <Zap className="w-4 h-4 text-amber-400" />
          <div>
            <div className="text-[10px] text-slate-400">Energie (kJ)</div>
            <div className="font-bold text-slate-100 text-xs">{nutrition.energyKj} kJ</div>
          </div>
        </div>
      </div>

      {/* Detailed Nutrient Grid */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-slate-300 text-[11px]">
        {/* Fats */}
        <div className="space-y-0.5">
          <div className="flex justify-between">
            <span className="text-slate-400">Grăsimi:</span>
            <span className="font-semibold text-slate-200">{nutrition.fats}g</span>
          </div>
          <div className="flex justify-between pl-2 text-[10px] text-slate-400">
            <span>• din care acizi saturați:</span>
            <span className="font-medium text-slate-300">{nutrition.saturatedFats}g</span>
          </div>
        </div>

        {/* Carbs */}
        <div className="space-y-0.5">
          <div className="flex justify-between">
            <span className="text-slate-400">Glucide:</span>
            <span className="font-semibold text-slate-200">{nutrition.carbs}g</span>
          </div>
          <div className="flex justify-between pl-2 text-[10px] text-slate-400">
            <span>• din care zaharuri:</span>
            <span className="font-medium text-slate-300">{nutrition.sugars}g</span>
          </div>
        </div>

        {/* Protein */}
        <div className="flex justify-between pt-1 border-t border-slate-800/40">
          <span className="text-slate-400">Proteine:</span>
          <span className="font-semibold text-slate-200">{nutrition.protein}g</span>
        </div>

        {/* Salt */}
        <div className="flex justify-between pt-1 border-t border-slate-800/40">
          <span className="text-slate-400">Sare:</span>
          <span className="font-semibold text-slate-200">{nutrition.salt}g</span>
        </div>
      </div>
    </div>
  );
}
