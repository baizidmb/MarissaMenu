import React, { useState, useEffect, useMemo } from 'react';
import Header from './components/Header';
import CategoryTabs from './components/CategoryTabs';
import MenuItemCard from './components/MenuItemCard';
import ItemDetailModal from './components/ItemDetailModal';
import FloatingActions from './components/FloatingActions';
import Footer from './components/Footer';
import HotelInfoModal from './components/HotelInfoModal';
import AllergenModal from './components/AllergenModal';
import FiscalModal from './components/FiscalModal';
import QrTableStandView from './components/QrTableStandView';
import { MenuItem, Language } from './types/menu';
import { MENU_ITEMS, CATEGORIES } from './data/menuData';

export function App() {
  const [lang, setLang] = useState<Language>('ro');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [dietaryFilter, setDietaryFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  
  // Modals state
  const [showHotelModal, setShowHotelModal] = useState<boolean>(false);
  const [showAllergenModal, setShowAllergenModal] = useState<boolean>(false);
  const [selectedAllergenId, setSelectedAllergenId] = useState<number | null>(null);
  const [showFiscalModal, setShowFiscalModal] = useState<boolean>(false);
  const [showStaffQrView, setShowStaffQrView] = useState<boolean>(false);

  // Table number from URL query ?table=12
  const [tableNumber, setTableNumber] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const t = params.get('table') || params.get('masa');
      if (t) setTableNumber(t);

      const langParam = params.get('lang') as Language;
      if (langParam && ['ro', 'en', 'hu'].includes(langParam)) {
        setLang(langParam);
      }

      if (params.get('staff') === 'true' || params.get('admin') === 'true') {
        setShowStaffQrView(true);
      }
    }
  }, []);

  const handleToggleLang = () => {
    setLang((prev) => (prev === 'ro' ? 'en' : prev === 'en' ? 'hu' : 'ro'));
  };

  const handleOpenAllergenModalWithId = (id: number) => {
    setSelectedAllergenId(id);
    setShowAllergenModal(true);
  };

  // Filter items dynamically based on Category, Search Query, and Dietary Quick Filters
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category filter
      if (activeCategory !== 'all' && item.categoryId !== activeCategory) {
        return false;
      }

      // Dietary filter
      if (dietaryFilter === 'vegetarian' && !item.isVegetarian) return false;
      if (dietaryFilter === 'glutenFree' && item.allergens.includes('1')) return false;
      if (dietaryFilter === 'specialty' && !item.isSpecialty) return false;
      if (dietaryFilter === 'drinks' && !['racoritoare', 'cocktailuri', 'vinuri', 'bere'].includes(item.categoryId)) return false;

      // Search query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const nameRo = item.name.ro.toLowerCase();
        const nameEn = item.name.en.toLowerCase();
        const ingRo = item.description.ro.toLowerCase();
        const ingEn = item.description.en.toLowerCase();
        return nameRo.includes(q) || nameEn.includes(q) || ingRo.includes(q) || ingEn.includes(q);
      }

      return true;
    });
  }, [activeCategory, dietaryFilter, searchQuery]);

  if (showStaffQrView) {
    return (
      <div className="min-h-screen bg-[#F8F6F2]">
        <QrTableStandView onClose={() => setShowStaffQrView(false)} lang={lang} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8F6F2] text-slate-900 font-jakarta flex flex-col justify-between selection:bg-[#C19B77] selection:text-white">
      {/* Header Bar */}
      <Header
        lang={lang}
        onToggleLang={handleToggleLang}
        tableNumber={tableNumber}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onOpenFiscalModal={() => setShowFiscalModal(true)}
        onOpenAllergenModal={() => handleOpenAllergenModalWithId(1)}
        onOpenHotelModal={() => setShowHotelModal(true)}
      />

      {/* Sticky Scrollspy Category Bar & Dietary Filters */}
      <CategoryTabs
        categories={CATEGORIES}
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
        dietaryFilter={dietaryFilter}
        onSelectDietaryFilter={setDietaryFilter}
        lang={lang}
      />

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-3 sm:px-6 py-6 flex-1 w-full space-y-8">
        {/* Results Header */}
        <div className="flex items-center justify-between border-b border-slate-200 pb-3">
          <div>
            <h2 className="text-base sm:text-lg font-extrabold text-slate-900 uppercase tracking-tight">
              {activeCategory === 'all'
                ? (lang === 'ro' ? 'Meniu Complet Restaurant Marissa' : lang === 'en' ? 'Complete Marissa Restaurant Menu' : 'Teljes Éttermi Menü')
                : (CATEGORIES.find((c) => c.id === activeCategory)?.name[lang] || 'Meniu')}
            </h2>
            <p className="text-xs text-slate-500 font-inter">
              {filteredItems.length} {lang === 'ro' ? 'preparate proaspete disponibile' : 'fresh dishes available'}
            </p>
          </div>

          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="text-xs font-bold text-[#C19B77] hover:underline"
            >
              Șterge căutarea
            </button>
          )}
        </div>

        {/* Menu Items Responsive Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filteredItems.map((item) => (
              <MenuItemCard
                key={item.id}
                item={item}
                lang={lang}
                onSelect={setSelectedItem}
                onSelectAllergen={handleOpenAllergenModalWithId}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-12 text-center space-y-3 border border-slate-200 max-w-md mx-auto my-8">
            <div className="text-4xl">🔍</div>
            <h3 className="font-extrabold text-lg text-slate-900">
              {lang === 'ro' ? 'Niciun preparat găsit' : 'No dishes found'}
            </h3>
            <p className="text-xs text-slate-500 font-inter leading-relaxed">
              {lang === 'ro'
                ? 'Nu am găsit preparate care să corespundă căutării. Încercați să resetați filtrele.'
                : 'No dishes match your query. Try resetting your search filters.'}
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
                setDietaryFilter('all');
              }}
              className="px-4 py-2 rounded-xl bg-[#C19B77] text-white font-extrabold text-xs shadow-md cursor-pointer"
            >
              Resetare Filtre
            </button>
          </div>
        )}
      </main>

      {/* Floating Action Button Stack (Call Waiter & Request Bill) */}
      <FloatingActions lang={lang} tableNumber={tableNumber} />

      {/* Footer Component with ANPC & SAL links */}
      <Footer lang={lang} onOpenStaffQr={() => setShowStaffQrView(true)} />

      {/* Modals & Bottom Drawers */}
      {selectedItem && (
        <ItemDetailModal
          item={selectedItem}
          lang={lang}
          onClose={() => setSelectedItem(null)}
          onSelectAllergen={handleOpenAllergenModalWithId}
        />
      )}

      {showHotelModal && (
        <HotelInfoModal lang={lang} onClose={() => setShowHotelModal(false)} />
      )}

      {showAllergenModal && (
        <AllergenModal
          lang={lang}
          onClose={() => setShowAllergenModal(false)}
          selectedAllergenId={selectedAllergenId}
        />
      )}

      {showFiscalModal && (
        <FiscalModal lang={lang} onClose={() => setShowFiscalModal(false)} />
      )}
    </div>
  );
}

export default App;
