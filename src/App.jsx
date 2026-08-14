import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import CategoryNav from './components/CategoryNav';
import SearchBar from './components/SearchBar';
import MenuItemCard from './components/MenuItemCard';
import AllergenLegendModal from './components/AllergenLegendModal';
import FiscalNoticeModal from './components/FiscalNoticeModal';
import HotelInfoModal from './components/HotelInfoModal';
import QrTableStandView from './components/QrTableStandView';
import { MENU_CATEGORIES, MENU_ITEMS, FISCAL_NOTICE, HOTEL_INFO } from './data/marissaMenuData';
import { ShieldCheck, Utensils, Award, Phone, MapPin, Clock, Sparkles, Hotel, Globe, Mail } from 'lucide-react';

export default function App() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterOption, setFilterOption] = useState('all'); // 'all', 'no-gluten', 'no-lactose', 'fresh-only'
  const [sortBy, setSortBy] = useState('default');
  
  // Modals & Views
  const [isFiscalModalOpen, setIsFiscalModalOpen] = useState(false);
  const [isAllergenModalOpen, setIsAllergenModalOpen] = useState(false);
  const [isHotelModalOpen, setIsHotelModalOpen] = useState(false);
  const [selectedAllergenId, setSelectedAllergenId] = useState(null);
  const [isQrViewActive, setIsQrViewActive] = useState(false);

  // Open specific allergen in legend modal
  const handleOpenAllergenModal = (algId = null) => {
    setSelectedAllergenId(algId);
    setIsAllergenModalOpen(true);
  };

  // Filter & Sort Items
  const filteredItems = useMemo(() => {
    let items = [...MENU_ITEMS];

    // Category Filter
    if (activeCategory !== 'all') {
      items = items.filter((item) => item.category === activeCategory);
    }

    // Search Query Filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      items = items.filter(
        (item) =>
          item.name.toLowerCase().includes(q) ||
          item.ingredients.toLowerCase().includes(q)
      );
    }

    // Specific Dietary / Allergen Filter
    if (filterOption === 'no-gluten') {
      items = items.filter((item) => !item.allergens.includes(1));
    } else if (filterOption === 'no-lactose') {
      items = items.filter((item) => !item.allergens.includes(7));
    } else if (filterOption === 'fresh-only') {
      items = items.filter((item) => !item.isFrozen);
    }

    // Sorting
    if (sortBy === 'price-asc') {
      items.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      items.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'name') {
      items.sort((a, b) => a.name.localeCompare(b.name, 'ro'));
    }

    return items;
  }, [activeCategory, searchQuery, filterOption, sortBy]);

  // Group items by category if "all" category is selected and no search/sort active
  const groupedCategories = useMemo(() => {
    if (activeCategory !== 'all' || searchQuery || sortBy !== 'default' || filterOption !== 'all') {
      return null;
    }

    const groups = [];
    MENU_CATEGORIES.forEach((cat) => {
      const catItems = filteredItems.filter((item) => item.category === cat.id);
      if (catItems.length > 0) {
        groups.push({
          category: cat,
          items: catItems,
        });
      }
    });
    return groups;
  }, [activeCategory, searchQuery, sortBy, filterOption, filteredItems]);

  return (
    <div className="min-h-screen bg-[#0B0F19] text-slate-100 flex flex-col font-['Outfit']">
      {/* Header & Fiscal Banner */}
      <Header
        onOpenFiscalModal={() => setIsFiscalModalOpen(true)}
        onOpenAllergenModal={() => handleOpenAllergenModal(null)}
        onOpenHotelModal={() => setIsHotelModalOpen(true)}
        onToggleQrView={() => setIsQrViewActive(!isQrViewActive)}
        isQrViewActive={isQrViewActive}
      />

      {/* QR Table Stand View or Main Digital Menu View */}
      {isQrViewActive ? (
        <main className="flex-1">
          <QrTableStandView onClose={() => setIsQrViewActive(false)} />
        </main>
      ) : (
        <main className="flex-1 max-w-7xl w-full mx-auto px-3 sm:px-6 py-6 space-y-6">
          {/* Sticky Category Scroll Bar */}
          <CategoryNav
            activeCategory={activeCategory}
            onSelectCategory={(catId) => {
              setActiveCategory(catId);
              // Scroll up smoothly on category change
              window.scrollTo({ top: 120, behavior: 'smooth' });
            }}
          />

          {/* Search, Filter & Sort Controls */}
          <SearchBar
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            filterOption={filterOption}
            onFilterChange={setFilterOption}
            sortBy={sortBy}
            onSortChange={setSortBy}
            totalResults={filteredItems.length}
          />

          {/* Menu Items Grid */}
          {filteredItems.length === 0 ? (
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-12 text-center space-y-4 my-8">
              <div className="w-16 h-16 mx-auto rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
                <Utensils className="w-8 h-8 text-amber-400 opacity-60" />
              </div>
              <h3 className="text-lg font-bold text-slate-200">
                Niciun preparat găsit conform căutării
              </h3>
              <p className="text-xs text-slate-400 max-w-md mx-auto">
                Încercați să modificați termenii de căutare sau resetați filtrele aplicate pentru a vizualiza întregul meniu Marissa.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setFilterOption('all');
                  setActiveCategory('all');
                  setSortBy('default');
                }}
                className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-xs transition-all shadow-md"
              >
                Resetare Filtre
              </button>
            </div>
          ) : groupedCategories ? (
            /* Grouped by Categories */
            <div className="space-y-10">
              {groupedCategories.map(({ category, items }) => (
                <section key={category.id} id={category.id} className="space-y-4 scroll-mt-36">
                  {/* Category Header */}
                  <div className="flex items-center gap-3 border-b border-slate-800/80 pb-3">
                    <span className="text-2xl p-2 rounded-xl bg-slate-900 border border-slate-800 shadow-sm">
                      {category.icon}
                    </span>
                    <div>
                      <h2 className="font-['Cinzel'] font-bold text-lg md:text-xl text-amber-400 tracking-wide">
                        {category.name}
                      </h2>
                      <p className="text-xs text-slate-400 font-medium">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Category Items Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {items.map((item) => (
                      <MenuItemCard
                        key={item.id}
                        item={item}
                        onSelectAllergen={(algId) => handleOpenAllergenModal(algId)}
                      />
                    ))}
                  </div>
                </section>
              ))}
            </div>
          ) : (
            /* Flat Filtered Grid */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredItems.map((item) => (
                <MenuItemCard
                  key={item.id}
                  item={item}
                  onSelectAllergen={(algId) => handleOpenAllergenModal(algId)}
                />
              ))}
            </div>
          )}
        </main>
      )}

      {/* Footer */}
      <footer className="bg-[#070A12] border-t border-slate-800/80 py-8 px-4 mt-12 no-print">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-400 border-b border-slate-800/60 pb-6">
            {/* Restaurant & Hotel Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <img
                  src={HOTEL_INFO.logoUrl}
                  alt="Hotel Marissa Logo"
                  className="h-8 w-auto object-contain"
                />
                <span className="font-['Cinzel'] font-bold text-amber-400 text-sm">
                  {HOTEL_INFO.name}
                </span>
              </div>
              <p className="text-slate-400 leading-relaxed text-[11px]">
                {HOTEL_INFO.slogan}
              </p>
              <div className="flex items-center gap-3 text-[11px]">
                <a href={HOTEL_INFO.website} target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline flex items-center gap-1">
                  <Globe className="w-3.5 h-3.5" />
                  <span>hotelmarissa.ro</span>
                </a>
                <a href={`mailto:${HOTEL_INFO.email}`} className="text-amber-400 hover:underline flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5" />
                  <span>office@hotelmarissa.ro</span>
                </a>
              </div>
            </div>

            {/* Compliance Info */}
            <div className="space-y-2">
              <div className="font-semibold text-slate-200 text-xs flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>Conformitate Legale & Transparență</span>
              </div>
              <ul className="space-y-1 text-[11px] text-slate-400">
                <li>• Valori nutriționale per 100g conform Directivei UE</li>
                <li>• Declarație alergeni (1-14) conform Directiva 2000/13/CE</li>
                <li>• Decongelare conform Ordin ANPC nr. 183/2016</li>
                <li>• Eliberare Bon Fiscal conform OUG nr. 28/1999</li>
              </ul>
            </div>

            {/* Contact & TelVerde */}
            <div className="space-y-2">
              <div className="font-semibold text-slate-200 text-xs flex items-center gap-1.5">
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Contact Recepție & Asistență</span>
              </div>
              <p className="text-[11px] text-slate-400">
                Recepție: <a href={`tel:${HOTEL_INFO.phoneReceptie.replace(/\./g, '')}`} className="text-amber-400 font-mono font-bold hover:underline">{HOTEL_INFO.phoneReceptie}</a>
              </p>
              <p className="text-[11px] text-slate-400">
                Fix Recepție: <a href={`tel:${HOTEL_INFO.phoneFix1.replace(/\./g, '')}`} className="text-amber-400 font-mono font-bold hover:underline">{HOTEL_INFO.phoneFix1}</a>
              </p>
              <p className="text-[11px] text-slate-400">
                TelVerde Bon Fiscal: <strong className="text-amber-400 font-mono">{FISCAL_NOTICE.telVerde}</strong>
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400 text-center sm:text-left">
            <div>
              © {new Date().getFullYear()} Hotel & Restaurant Marissa. Toate drepturile rezervate.
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsHotelModalOpen(true)}
                className="hover:text-amber-400 transition-colors flex items-center gap-1"
              >
                <Hotel className="w-3.5 h-3.5 text-amber-400" />
                <span>Hotel & SPA</span>
              </button>
              <span>•</span>
              <button
                onClick={() => setIsAllergenModalOpen(true)}
                className="hover:text-amber-400 transition-colors"
              >
                Ghid Alergeni
              </button>
              <span>•</span>
              <button
                onClick={() => setIsFiscalModalOpen(true)}
                className="hover:text-amber-400 transition-colors"
              >
                Notă OUG 28/1999
              </button>
              <span>•</span>
              <button
                onClick={() => setIsQrViewActive(true)}
                className="hover:text-amber-400 transition-colors"
              >
                QR Masă
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <AllergenLegendModal
        isOpen={isAllergenModalOpen}
        onClose={() => setIsAllergenModalOpen(false)}
        selectedAllergenId={selectedAllergenId}
      />

      <FiscalNoticeModal
        isOpen={isFiscalModalOpen}
        onClose={() => setIsFiscalModalOpen(false)}
      />

      <HotelInfoModal
        isOpen={isHotelModalOpen}
        onClose={() => setIsHotelModalOpen(false)}
      />
    </div>
  );
}
