import React from 'react';
import { Activity, Flame, ShieldAlert } from 'lucide-react';

export default function NutritionDrawer({ nutrition, lang = 'ro' }) {
  if (!nutrition) return null;

  return (
    <div className="bg-[#F8F6F2] border-t border-[#E8E2D9] p-3 text-xs space-y-2 animate-fade-in">
      <div className="flex items-center justify-between font-semibold text-[#1C1C1C] text-[11px] pb-1 border-b border-[#E8E2D9]">
        <span className="flex items-center gap-1">
          <Activity className="w-3 h-3 text-[#C19B77]" />
          <span>{lang === 'ro' ? 'Valori Nutriționale per 100g' : 'Nutritional Values per 100g'}</span>
        </span>
        <span className="text-[#C19B77] font-bold font-mono">
          {nutrition.energyKcal} kcal / {nutrition.energyKj} kJ
        </span>
      </div>

      <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-[11px] text-[#373737]">
        <div className="flex justify-between">
          <span className="text-[#7A7A7A]">{lang === 'ro' ? 'Grăsimi:' : 'Fats:'}</span>
          <span className="font-mono font-medium">{nutrition.fats}g</span>
        </div>

        <div className="flex justify-between">
          <span className="text-[#7A7A7A]">{lang === 'ro' ? 'din care acizi saturați:' : 'of which saturates:'}</span>
          <span className="font-mono font-medium">{nutrition.saturatedFats}g</span>
        </div>

        <div className="flex justify-between">
          <span className="text-[#7A7A7A]">{lang === 'ro' ? 'Glucide:' : 'Carbohydrates:'}</span>
          <span className="font-mono font-medium">{nutrition.carbs}g</span>
        </div>

        <div className="flex justify-between">
          <span className="text-[#7A7A7A]">{lang === 'ro' ? 'din care zaharuri:' : 'of which sugars:'}</span>
          <span className="font-mono font-medium">{nutrition.sugars}g</span>
        </div>

        <div className="flex justify-between">
          <span className="text-[#7A7A7A]">{lang === 'ro' ? 'Proteine:' : 'Protein:'}</span>
          <span className="font-mono font-medium">{nutrition.protein}g</span>
        </div>

        <div className="flex justify-between">
          <span className="text-[#7A7A7A]">{lang === 'ro' ? 'Sare:' : 'Salt:'}</span>
          <span className="font-mono font-medium">{nutrition.salt}g</span>
        </div>
      </div>
    </div>
  );
}
