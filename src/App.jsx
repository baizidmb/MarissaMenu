import React, { useState, useMemo, useRef, useEffect } from 'react';
import Header from './components/Header';
import CategoryNav from './components/CategoryNav';
import SearchBar from './components/SearchBar';
import MenuItemCard from './components/MenuItemCard';
import AllergenLegendModal from './components/AllergenLegendModal';
import FiscalNoticeModal from './components/FiscalNoticeModal';
import HotelInfoModal from './components/HotelInfoModal';
import QrTableStandView from './components/QrTableStandView';
import MobileBottomNav from './components/MobileBottomNav';
import { MENU_CATEGORIES, MENU_ITEMS, FISCAL_NOTICE, HOTEL_INFO } from './data/marissaMenuData';
import { ShieldCheck, Utensils, Phone, Globe, Mail, Hotel, QrCode } from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState('ro'); // 'ro' or 'en'
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterOption, setFilterOption] = useState('all'); // 'all', 'no-gluten', 'no-lactose', 'fresh-only'
  const [sortBy, setSortBy] = useState('default');

  // Ref for quick search scrolling on mobile
  const searchRef = useRef(null);
  
  // Modals & Views
  const [isFiscalModalOpen, setIsFiscalModalOpen] = useState(false);
  const [isAllergenModalOpen, setIsAllergenModalOpen] = useState(false);
  const [isHotelModalOpen, setIsHotelModalOpen] = useState(false);
  const [selectedAllergenId, setSelectedAllergenId] = useState(null);
  
  // Staff Admin QR Stand Mode (Default hidden for customers, triggered by Staff link or ?admin=true)
  const [isQrViewActive, setIsQrViewActive] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      if (urlParams.get('admin') === 'true') {
        setIsQrViewActive(true);
      }
    }
  }, []);

  // Toggle Language between Romanian (RO) and English (EN)
  const handleToggleLang = () => {
    setLang((prev) => (prev === 'ro' ? 'en' : 'ro'));
  };

  // Open specific allergen in legend modal
  const handleOpenAllergenModal = (algId = null) => {
    setSelectedAllergenId(algId);
    setIsAllergenModalOpen(true);
  };

  // Scroll smoothly to search bar
  const handleScrollToSearch = () => {
    if (searchRef.current) {
      searchRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Scroll smoothly to top
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Filter & Sort Items
  const filteredItems = useMemo(() => {
    let items = [...MENU_ITEMS];

    // Category Filter
    if (activeCategory !== 'all') {
      items = items.filter((item) => item.category === activeCategory);
    }

    // Search Query Filter (Searches in both RO & EN fields)
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      items = items.filter((item) => {
        const nameRo = typeof item.name === 'object' ? item.name.ro : item.name;
        const nameEn = typeof item.name === 'object' ? (item.name.en || item.name.ro) : item.name;
        const ingRo = typeof item.ingredients === 'object' ? item.ingredients.ro : item.ingredients;
        const ingEn = typeof item.ingredients === 'object' ? (item.ingredients.en || item.ingredients.ro) : item.ingredients;

        return (
          nameRo.toLowerCase().includes(q) ||
          nameEn.toLowerCase().includes(q) ||
          ingRo.toLowerCase().includes(q) ||
          ingEn.toLowerCase().includes(q)
        );
      });
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
      items.sort((a, b) => {
        const nameA = typeof a.name === 'object' ? (a.name[lang] || a.name.ro) : a.name;
        const nameB = typeof b.name === 'object' ? (b.name[lang] || b.name.ro) : b.name;
        return nameA.localeCompare(nameB, lang);
      });
    }

    return items;
  }, [activeCategory, searchQuery, filterOption, sortBy, lang]);

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

  const sloganText = typeof HOTEL_INFO.slogan === 'object' ? (HOTEL_INFO.slogan[lang] || HOTEL_INFO.slogan.ro) : HOTEL_INFO.slogan;

  return (
    <div className="min-h-screen bg-[#F8F6F2] text-[#1C1C1C] flex flex-col font-['Roboto'] pb-20 sm:pb-0">
      {/* Header & Fiscal Banner */}
      <Header
        lang={lang}
        onToggleLang={handleToggleLang}
        onOpenFiscalModal={() => setIsFiscalModalOpen(true)}
        onOpenAllergenModal={() => handleOpenAllergenModal(null)}
        onOpenHotelModal={() => setIsHotelModalOpen(true)}
      />

      {/* Staff QR Table Stand Generator View or Main Digital Menu View */}
      {isQrViewActive ? (
        <main className="flex-1">
          <QrTableStandView onClose={() => setIsQrViewActive(false)} lang={lang} />
        </main>
      ) : (
        <main className="flex-1 max-w-7xl w-full mx-auto px-3 sm:px-6 py-4 sm:py-6 space-y-4 sm:space-y-6">
          {/* Sticky Category Scroll Bar */}
          <CategoryNav
            activeCategory={activeCategory}
            onSelectCategory={(catId) => {
              setActiveCategory(catId);
              window.scrollTo({ top: 100, behavior: 'smooth' });
            }}
            lang={lang}
          />

          {/* Search, Filter & Sort Controls */}
          <div ref={searchRef}>
            <SearchBar
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              filterOption={filterOption}
              onFilterChange={setFilterOption}
              sortBy={sortBy}
              onSortChange={setSortBy}
              totalResults={filteredItems.length}
              lang={lang}
            />
          </div>

          {/* Menu Items Grid */}
          {filteredItems.length === 0 ? (
            <div className="bg-white border border-[#E8E2D9] rounded-2xl p-8 sm:p-12 text-center space-y-4 my-8 shadow-xs">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#F8F6F2] border border-[#E8E2D9] flex items-center justify-center">
                <Utensils className="w-8 h-8 text-[#C19B77]" />
              </div>
              <h3 className="text-lg font-bold font-['Playfair_Display'] text-[#1C1C1C]">
                {lang === 'ro' ? 'Niciun preparat găsit conform căutării' : 'No dishes match your search'}
              </h3>
              <p className="text-xs text-[#7A7A7A] max-w-md mx-auto">
                {lang === 'ro'
                  ? 'Încercați să modificați termenii de căutare sau resetați filtrele aplicate.'
                  : 'Try adjusting your search terms or reset the filters applied.'}
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setFilterOption('all');
                  setActiveCategory('all');
                  setSortBy('default');
                }}
                className="px-5 py-2.5 bg-[#C19B77] hover:bg-[#A8805B] text-white font-bold rounded-xl text-xs transition-all shadow-sm"
              >
                {lang === 'ro' ? 'Resetare Filtre' : 'Reset Filters'}
              </button>
            </div>
          ) : groupedCategories ? (
            /* Grouped by Categories */
            <div className="space-y-8 sm:space-y-10">
              {groupedCategories.map(({ category, items }) => {
                const catName = typeof category.name === 'object' ? (category.name[lang] || category.name.ro) : category.name;
                const catDesc = typeof category.description === 'object' ? (category.description[lang] || category.description.ro) : category.description;

                return (
                  <section key={category.id} id={category.id} className="space-y-4 scroll-mt-36">
                    {/* Category Header */}
                    <div className="flex items-center gap-3 border-b border-[#E8E2D9] pb-3">
                      <span className="text-2xl p-2 rounded-xl bg-white border border-[#E8E2D9] shadow-xs shrink-0">
                        {category.icon}
                      </span>
                      <div>
                        <h2 className="font-['Playfair_Display'] font-bold text-lg sm:text-xl text-[#1C1C1C] tracking-wide">
                          {catName}
                        </h2>
                        <p className="text-xs text-[#7A7A7A] font-medium">
                          {catDesc}
                        </p>
                      </div>
                    </div>

                    {/* Category Items Grid - Responsive 1 col on mobile, 2 col on tablet, 3 col on desktop */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {items.map((item) => (
                        <MenuItemCard
                          key={item.id}
                          item={item}
                          onSelectAllergen={(algId) => handleOpenAllergenModal(algId)}
                          lang={lang}
                        />
                      ))}
                    </div>
                  </section>
                );
              })}
            </div>
          ) : (
            /* Flat Filtered Grid */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredItems.map((item) => (
                <MenuItemCard
                  key={item.id}
                  item={item}
                  onSelectAllergen={(algId) => handleOpenAllergenModal(algId)}
                  lang={lang}
                />
              ))}
            </div>
          )}
        </main>
      )}

      {/* Footer */}
      <footer className="bg-white border-t border-[#E8E2D9] py-8 px-4 mt-12 no-print shadow-xs">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-[#555555] border-b border-[#E8E2D9] pb-6">
            {/* Restaurant & Hotel Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <img
                  src={HOTEL_INFO.logoUrl}
                  alt="Hotel Marissa Logo"
                  className="h-10 w-auto object-contain"
                />
                <span className="font-['Playfair_Display'] font-bold text-[#1C1C1C] text-sm">
                  {HOTEL_INFO.name}
                </span>
              </div>
              <p className="text-[#7A7A7A] leading-relaxed text-[11px]">
                {sloganText}
              </p>
              <div className="flex items-center gap-3 text-[11px] flex-wrap">
                <a href={HOTEL_INFO.website} target="_blank" rel="noopener noreferrer" className="text-[#C19B77] hover:underline font-semibold flex items-center gap-1">
                  <Globe className="w-3.5 h-3.5" />
                  <span>hotelmarissa.ro</span>
                </a>
                <a href={`mailto:${HOTEL_INFO.email}`} className="text-[#C19B77] hover:underline font-semibold flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5" />
                  <span>office@hotelmarissa.ro</span>
                </a>
              </div>
            </div>

            {/* Compliance Info */}
            <div className="space-y-2">
              <div className="font-bold text-[#1C1C1C] text-xs flex items-center gap-1.5 font-['Playfair_Display']">
                <ShieldCheck className="w-4 h-4 text-[#C19B77]" />
                <span>{lang === 'ro' ? 'Conformitate Legale & Transparență' : 'Legal Compliance & Transparency'}</span>
              </div>
              <ul className="space-y-1 text-[11px] text-[#7A7A7A]">
                <li>• {lang === 'ro' ? 'Valori nutriționale per 100g conform Directivei UE' : '100g nutritional values per EU Directive'}</li>
                <li>• {lang === 'ro' ? 'Declarație alergeni (1-14) conform Directiva 2000/13/CE' : 'Allergen index (1-14) per Directive 2000/13/CE'}</li>
                <li>• {lang === 'ro' ? 'Decongelare conform Ordin ANPC nr. 183/2016' : 'Thawed products disclosure per ANPC 183/2016'}</li>
                <li>• {lang === 'ro' ? 'Eliberare Bon Fiscal conform OUG nr. 28/1999' : 'Fiscal receipt notice per OUG 28/1999'}</li>
              </ul>
            </div>

            {/* Contact & TelVerde */}
            <div className="space-y-2">
              <div className="font-bold text-[#1C1C1C] text-xs flex items-center gap-1.5 font-['Playfair_Display']">
                <Phone className="w-4 h-4 text-[#C19B77]" />
                <span>{lang === 'ro' ? 'Contact Recepție & Asistență' : 'Reception Contact & Support'}</span>
              </div>
              <p className="text-[11px] text-[#7A7A7A]">
                Recepție: <a href={`tel:${HOTEL_INFO.phoneReceptie.replace(/\./g, '')}`} className="text-[#C19B77] font-mono font-bold hover:underline">{HOTEL_INFO.phoneReceptie}</a>
              </p>
              <p className="text-[11px] text-[#7A7A7A]">
                Fix Recepție: <a href={`tel:${HOTEL_INFO.phoneFix1.replace(/\./g, '')}`} className="text-[#C19B77] font-mono font-bold hover:underline">{HOTEL_INFO.phoneFix1}</a>
              </p>
              <p className="text-[11px] text-[#7A7A7A]">
                TelVerde Bon Fiscal: <strong className="text-[#C19B77] font-mono">{FISCAL_NOTICE.telVerde}</strong>
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#7A7A7A] text-center sm:text-left">
            <div>
              © {new Date().getFullYear()} Hotel & Restaurant Marissa. Toate drepturile rezervate.
            </div>
            <div className="flex items-center gap-3 flex-wrap justify-center">
              <button
                onClick={() => setIsHotelModalOpen(true)}
                className="hover:text-[#C19B77] transition-colors flex items-center gap-1"
              >
                <Hotel className="w-3.5 h-3.5 text-[#C19B77]" />
                <span>Hotel & SPA</span>
              </button>
              <span>•</span>
              <button
                onClick={() => setIsAllergenModalOpen(true)}
                className="hover:text-[#C19B77] transition-colors"
              >
                {lang === 'ro' ? 'Ghid Alergeni' : 'Allergens Guide'}
              </button>
              <span>•</span>
              <button
                onClick={() => setIsFiscalModalOpen(true)}
                className="hover:text-[#C19B77] transition-colors"
              >
                {lang === 'ro' ? 'Notă OUG 28/1999' : 'Fiscal Notice'}
              </button>
              <span>•</span>
              {/* Staff QR Stand Generator Link */}
              <button
                onClick={() => setIsQrViewActive(true)}
                className="hover:text-[#C19B77] transition-colors flex items-center gap-1 text-[10px] text-[#8C8C8C]"
                title="Generare Stand QR (Numai pentru Personal)"
              >
                <QrCode className="w-3 h-3 text-[#C19B77]" />
                <span>{lang === 'ro' ? '🔑 Personal QR Stand' : '🔑 Staff QR Stand'}</span>
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky Quick Access Bottom Bar for Customers */}
      <MobileBottomNav
        lang={lang}
        onToggleLang={handleToggleLang}
        onOpenAllergenModal={() => handleOpenAllergenModal(null)}
        onOpenHotelModal={() => setIsHotelModalOpen(true)}
        onScrollToSearch={handleScrollToSearch}
        onScrollToTop={handleScrollToTop}
      />

      {/* Modals */}
      <AllergenLegendModal
        isOpen={isAllergenModalOpen}
        onClose={() => setIsAllergenModalOpen(false)}
        selectedAllergenId={selectedAllergenId}
        lang={lang}
      />

      <FiscalNoticeModal
        isOpen={isFiscalModalOpen}
        onClose={() => setIsFiscalModalOpen(false)}
        lang={lang}
      />

      <HotelInfoModal
        isOpen={isHotelModalOpen}
        onClose={() => setIsHotelModalOpen(false)}
        lang={lang}
      />
    </div>
  );
}
