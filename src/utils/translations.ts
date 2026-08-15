import { Language } from '../types/menu';

export interface TranslationDictionary {
  // Top Banner
  fiscalBanner: string;
  
  // Header
  brandTitle: string;
  tableLabel: string;
  searchPlaceholder: string;
  clearSearch: string;
  hotelSpaBtn: string;
  allergensBtn: string;
  
  // Categories & Filters
  allCategories: string;
  filterLabel: string;
  filterAll: string;
  filterVeg: string;
  filterGlutenFree: string;
  filterSpecialty: string;
  filterDrinks: string;
  availableDishes: string;
  noDishesTitle: string;
  noDishesDesc: string;
  resetFilters: string;
  
  // Dish Card
  thawedBadge: string;
  chefSpecial: string;
  vegetarian: string;
  spicy: string;
  allergensLabel: string;
  noAllergens: string;
  detailsBtn: string;
  portion: string;
  per100g: string;
  
  // Detail Modal
  ingredientsTitle: string;
  nutritionTitle: string;
  nutritionColName: string;
  nutritionColPortion: string;
  nutritionCol100g: string;
  energyKcalKj: string;
  fats: string;
  saturatedFats: string;
  carbs: string;
  sugars: string;
  protein: string;
  salt: string;
  allergensSectionTitle: string;
  noAllergensDeclared: string;
  thawedLegalNotice: string;
  
  // Floating Actions & Modals
  callWaiter: string;
  requestBill: string;
  waiterModalTitle: string;
  billModalTitle: string;
  currentTable: string;
  paymentMethod: string;
  payCard: string;
  payCash: string;
  sendAlert: string;
  requestBillBtn: string;
  requestSuccessTitle: string;
  requestSuccessDescWaiter: string;
  requestSuccessDescBill: string;
  
  // Footer
  addressTitle: string;
  contactTitle: string;
  scheduleTitle: string;
  scheduleHours: string;
  scheduleKitchen: string;
  consumerProtectionTitle: string;
  reception: string;
  rightsReserved: string;
  reservationsBtn: string;
  staffQrBtn: string;
  
  // Modals & Auth
  hotelModalTitle: string;
  allergenModalTitle: string;
  allergenModalSubtitle: string;
  fiscalModalTitle: string;
  fiscalModalSubtitle: string;
  fiscalModalText1: string;
  fiscalModalText2: string;
  anafHelpline: string;
  closeBtn: string;
  cancelBtn: string;
  unlockBtn: string;
  adminTitle: string;
  adminSubtitle: string;
  passwordLabel: string;
  wrongPassword: string;
  lockPanel: string;
  backToMenu: string;
  printBtn: string;
}

export const TRANSLATIONS: Record<Language, TranslationDictionary> = {
  ro: {
    fiscalBanner: '🇷🇴 Conform OUG 28/1999: Solicitați Bonul Fiscal | TelVerde: 0800.800.085',
    brandTitle: 'HOTEL & RESTAURANT MARISSA',
    tableLabel: 'Masa',
    searchPlaceholder: 'Căutați preparate, ingrediente sau băuturi (ex: Ciorbă, Burger, Somon, Pizza)...',
    clearSearch: 'Șterge căutarea',
    hotelSpaBtn: 'Hotel & SPA',
    allergensBtn: 'Alergeni & ANPC',
    allCategories: 'Toate Categoriile',
    filterLabel: 'Filtre:',
    filterAll: 'Toate',
    filterVeg: '🌱 Vegetarian',
    filterGlutenFree: '🌾 Fără Gluten',
    filterSpecialty: '⭐ Recomandare',
    filterDrinks: '🍹 Băuturi',
    availableDishes: 'preparate proaspete disponibile',
    noDishesTitle: 'Niciun preparat găsit',
    noDishesDesc: 'Nu am găsit preparate care să corespundă căutării. Încercați să resetați filtrele.',
    resetFilters: 'Resetare Filtre',
    thawedBadge: '*Produs decongelat',
    chefSpecial: 'Chef Special',
    vegetarian: 'Vegetarian',
    spicy: 'Picant',
    allergensLabel: 'Alergeni:',
    noAllergens: 'Fără Alergeni',
    detailsBtn: 'Detalii & Nutriție',
    portion: 'Per Porție',
    per100g: 'Per 100g',
    ingredientsTitle: 'Lista Ingrediente',
    nutritionTitle: 'Valori Nutriționale (Conform ANPC Order 201/2022)',
    nutritionColName: 'Declarație Nutrițională',
    nutritionColPortion: 'Per Porție',
    nutritionCol100g: 'Per 100g',
    energyKcalKj: 'Valoare Energetică (kcal / kJ)',
    fats: 'Grăsimi (g)',
    saturatedFats: '- din care acizi grași saturați (g)',
    carbs: 'Glucide / Carbohidrați (g)',
    sugars: '- din care zaharuri (g)',
    protein: 'Proteine (g)',
    salt: 'Sare / Sodium (g)',
    allergensSectionTitle: 'Alergeni Declarați (Directiva EU 2000/13/CE)',
    noAllergensDeclared: '✓ Acest preparat nu conține alergeni declarați',
    thawedLegalNotice: 'Unele ingrediente (carne de pasăre, porc, pește, fructe de mare, legume congelate) pot proveni din produse decongelate. Acestea sunt marcate explicit cu insigna *Produs decongelat.',
    callWaiter: 'Cheamă Ospătarul',
    requestBill: 'Cere Nota',
    waiterModalTitle: 'Cheamă Ospătarul la Masă',
    billModalTitle: 'Solicită Nota de Plată',
    currentTable: 'Masa curentă:',
    paymentMethod: 'Modalitate de Plată Preferată:',
    payCard: 'Card Bancar',
    payCash: 'Numerar / Cash',
    sendAlert: 'Trimite Notificarea',
    requestBillBtn: 'Cere Nota de Plată',
    requestSuccessTitle: 'Solicitare Trimisă cu Succes!',
    requestSuccessDescWaiter: 'Un ospătar a primit notificarea și vine în cel mai scurt timp.',
    requestSuccessDescBill: 'Nota de plată este pregătită și un ospătar se îndreaptă spre dumneavoastră.',
    addressTitle: 'Adresă Hotel & Restaurant',
    contactTitle: 'Contact & Recepție',
    scheduleTitle: 'Program Restaurant & Servire',
    scheduleHours: 'Luni – Duminică: 08:00 – 23:00',
    scheduleKitchen: 'Comenzi bucătărie până la 22:30',
    consumerProtectionTitle: 'Protecția Consumatorului',
    reception: 'Recepție:',
    rightsReserved: 'Toate drepturile rezervate. Conform Ordinului ANPC 201/2022 & OUG 28/1999.',
    reservationsBtn: '📞 Rezervări Mese: 0744.627.830',
    staffQrBtn: '🔒 Staff / Admin',
    hotelModalTitle: 'Hotel & Restaurant Marissa',
    allergenModalTitle: 'Ghid Alergeni & Ordinul ANPC 201/2022',
    allergenModalSubtitle: 'Lista celor 14 grupe de alergeni conform Directivei EU 2000/13/CE',
    fiscalModalTitle: 'Notă Fiscală Obligatorie',
    fiscalModalSubtitle: 'Conform Ordonanței de Urgență OUG 28/1999',
    fiscalModalText1: 'Vă rugăm să solicitați bonul fiscal pentru orice bun achiziționat în cadrul Restaurantului Marissa!',
    fiscalModalText2: 'În cazul refuzului eliberării bonului fiscal de către personalul de servire, aveți dreptul de a beneficia de bunul achiziționat fără achitarea contravalorii acestuia.',
    anafHelpline: 'TelVerde ANAF (Linie gratuită):',
    closeBtn: 'Închide',
    cancelBtn: 'Anulează',
    unlockBtn: 'Autentificare',
    adminTitle: 'Acces Restricționat — Doar Personal Autorizat',
    adminSubtitle: 'Această secțiune este destinată exclusiv administratorilor și personalului restaurantului pentru generarea și imprimarea etichetelor QR.',
    passwordLabel: 'Introduceți Parola de Acces (Staff / Owner):',
    wrongPassword: 'Parolă incorectă! Accesul este rezervat exclusiv personalului autorizat.',
    lockPanel: 'Blochează Accesul',
    backToMenu: 'Înapoi la Meniu',
    printBtn: 'Printează'
  },
  en: {
    fiscalBanner: '🇬🇧 Fiscal Receipt Notice OUG 28/1999 | Free Helpline: 0800.800.085',
    brandTitle: 'HOTEL & RESTAURANT MARISSA',
    tableLabel: 'Table',
    searchPlaceholder: 'Search dishes, ingredients or drinks (e.g. Soup, Burger, Salmon, Pizza)...',
    clearSearch: 'Clear search',
    hotelSpaBtn: 'Hotel & SPA',
    allergensBtn: 'Allergens & ANPC',
    allCategories: 'All Categories',
    filterLabel: 'Filters:',
    filterAll: 'All',
    filterVeg: '🌱 Vegetarian',
    filterGlutenFree: '🌾 Gluten-Free',
    filterSpecialty: '⭐ Chef Special',
    filterDrinks: '🍹 Drinks',
    availableDishes: 'fresh dishes available',
    noDishesTitle: 'No dishes found',
    noDishesDesc: 'No dishes match your query. Try resetting your search filters.',
    resetFilters: 'Reset Filters',
    thawedBadge: '*Thawed ingredient',
    chefSpecial: "Chef's Special",
    vegetarian: 'Vegetarian',
    spicy: 'Spicy',
    allergensLabel: 'Allergens:',
    noAllergens: 'No Allergens',
    detailsBtn: 'Details & Nutrition',
    portion: 'Per Portion',
    per100g: 'Per 100g',
    ingredientsTitle: 'Ingredient List',
    nutritionTitle: 'Nutritional Values (ANPC Order 201/2022 Compliant)',
    nutritionColName: 'Nutritional Declaration',
    nutritionColPortion: 'Per Portion',
    nutritionCol100g: 'Per 100g',
    energyKcalKj: 'Energy Value (kcal / kJ)',
    fats: 'Fats (g)',
    saturatedFats: '- of which saturated fats (g)',
    carbs: 'Carbohydrates (g)',
    sugars: '- of which sugars (g)',
    protein: 'Protein (g)',
    salt: 'Salt / Sodium (g)',
    allergensSectionTitle: 'Declared Allergens (EU Directive 2000/13/CE)',
    noAllergensDeclared: '✓ This dish contains no declared allergens',
    thawedLegalNotice: 'Certain ingredients (poultry, pork, fish, seafood, frozen vegetables) may come from thawed stock, marked explicitly with *Thawed ingredient.',
    callWaiter: 'Call Waiter',
    requestBill: 'Request Bill',
    waiterModalTitle: 'Call Waiter to Table',
    billModalTitle: 'Request Table Bill',
    currentTable: 'Current Table:',
    paymentMethod: 'Preferred Payment Method:',
    payCard: 'Bank Card',
    payCash: 'Cash',
    sendAlert: 'Send Notification',
    requestBillBtn: 'Request Bill',
    requestSuccessTitle: 'Request Sent Successfully!',
    requestSuccessDescWaiter: 'A waiter has received your alert and will be right with you.',
    requestSuccessDescBill: 'Your bill is being prepared and a waiter is heading to your table.',
    addressTitle: 'Hotel & Restaurant Address',
    contactTitle: 'Contact & Reception',
    scheduleTitle: 'Restaurant & Dining Hours',
    scheduleHours: 'Monday – Sunday: 08:00 – 23:00',
    scheduleKitchen: 'Kitchen orders open until 22:30',
    consumerProtectionTitle: 'Consumer Protection (ANPC)',
    reception: 'Reception:',
    rightsReserved: 'All rights reserved. Compliant with ANPC Order 201/2022 & OUG 28/1999.',
    reservationsBtn: '📞 Table Bookings: 0744.627.830',
    staffQrBtn: '🔒 Staff / Admin',
    hotelModalTitle: 'Hotel & Restaurant Marissa',
    allergenModalTitle: 'Allergen Guide & ANPC Order 201/2022',
    allergenModalSubtitle: 'List of 14 EU allergen groups according to Directive 2000/13/EC',
    fiscalModalTitle: 'Mandatory Fiscal Receipt Notice',
    fiscalModalSubtitle: 'Under Emergency Ordinance OUG 28/1999',
    fiscalModalText1: 'Please ask for the fiscal receipt for any purchase made at Restaurant Marissa!',
    fiscalModalText2: 'If the server refuses to provide a fiscal receipt, you have the right to receive the product without payment.',
    anafHelpline: 'Free ANAF Helpline:',
    closeBtn: 'Close',
    cancelBtn: 'Cancel',
    unlockBtn: 'Unlock & Enter',
    adminTitle: 'Restricted Access — Authorized Personnel Only',
    adminSubtitle: 'This section is strictly intended for restaurant management and staff to generate and print table QR stand stickers.',
    passwordLabel: 'Enter Access Password (Staff / Owner):',
    wrongPassword: 'Incorrect password! Access is restricted to authorized personnel only.',
    lockPanel: 'Lock Panel',
    backToMenu: 'Back to Menu',
    printBtn: 'Print'
  },
  hu: {
    fiscalBanner: '🇭🇺 OUG 28/1999 Jogszabály: Kérje a nyugtát | Ingyenes zöldszám: 0800.800.085',
    brandTitle: 'HOTEL & ÉTTEREM MARISSA',
    tableLabel: 'Asztal',
    searchPlaceholder: 'Keresés az ételek, összetevők vagy italok között (pl. Leves, Burger, Lazac, Pizza)...',
    clearSearch: 'Keresés törlése',
    hotelSpaBtn: 'Hotel & SPA',
    allergensBtn: 'Allergének & ANPC',
    allCategories: 'Összes Kategória',
    filterLabel: 'Szűrők:',
    filterAll: 'Összes',
    filterVeg: '🌱 Vegetáriánus',
    filterGlutenFree: '🌾 Gluténmentes',
    filterSpecialty: '⭐ Séf Ajánlata',
    filterDrinks: '🍹 Italok',
    availableDishes: 'frissen készített étel elérhető',
    noDishesTitle: 'Nincs találat',
    noDishesDesc: 'Nem találtunk a keresésnek megfelelő ételt. Próbálja meg visszaállítani a szűrőket.',
    resetFilters: 'Szűrők Visszaállítása',
    thawedBadge: '*Kiolvasztott alapanyag',
    chefSpecial: 'Séf Ajánlata',
    vegetarian: 'Vegetáriánus',
    spicy: 'Csípős',
    allergensLabel: 'Allergének:',
    noAllergens: 'Allergénmentes',
    detailsBtn: 'Részletek & Tápérték',
    portion: 'Adagonként',
    per100g: '100g-ban',
    ingredientsTitle: 'Összetevők Listája',
    nutritionTitle: 'Tápérték Nyilatkozat (ANPC 201/2022 Rendelet)',
    nutritionColName: 'Tápérték Adatok',
    nutritionColPortion: 'Adagonként',
    nutritionCol100g: '100g-ban',
    energyKcalKj: 'Energiaérték (kcal / kJ)',
    fats: 'Zsír (g)',
    saturatedFats: '- amelyből telített zsírsavak (g)',
    carbs: 'Szénhidrát (g)',
    sugars: '- amelyből cukrok (g)',
    protein: 'Fehérje (g)',
    salt: 'Só / Nátrium (g)',
    allergensSectionTitle: 'Bejelentett Allergének (EU 2000/13/EK Irányelv)',
    noAllergensDeclared: '✓ Ez az étel nem tartalmaz bejelentett allergént',
    thawedLegalNotice: 'Egyes alapanyagok (baromfi, sertés, hal, tenger gyümölcsei, fagyasztott zöldségek) kiolvasztott termékekből származhatnak (*Kiolvasztott alapanyag).',
    callWaiter: 'Pincér Hívása',
    requestBill: 'Számla Kérése',
    waiterModalTitle: 'Pincér Hívása az Asztalhoz',
    billModalTitle: 'Fizetés & Számla Kérése',
    currentTable: 'Jelenlegi Asztal:',
    paymentMethod: 'Kívánt Fizetési Mód:',
    payCard: 'Bankkártya',
    payCash: 'Készpénz',
    sendAlert: 'Értesítés Küldése',
    requestBillBtn: 'Számla Kérése',
    requestSuccessTitle: 'Kérés Sikeresen Elküldve!',
    requestSuccessDescWaiter: 'A pincér megkapta az értesítést és hamarosan az asztalához érkezik.',
    requestSuccessDescBill: 'A számlát előkészítettük, a pincér hamarosan érkezik.',
    addressTitle: 'Hotel & Étterem Címe',
    contactTitle: 'Kapcsolat & Recepció',
    scheduleTitle: 'Étterem & Kiszolgálás Nyitvatartása',
    scheduleHours: 'Hétfő – Vasárnap: 08:00 – 23:00',
    scheduleKitchen: 'Konyhai rendelésfelvétel: 22:30-ig',
    consumerProtectionTitle: 'Fogyasztóvédelem (ANPC)',
    reception: 'Recepció:',
    rightsReserved: 'Minden jog fenntartva. Megfelel az ANPC 201/2022 és OUG 28/1999 rendeleteknek.',
    reservationsBtn: '📞 Asztalfoglalás: 0744.627.830',
    staffQrBtn: '🔒 Staff / Admin',
    hotelModalTitle: 'Hotel & Étterem Marissa',
    allergenModalTitle: 'Allergén Útmutató & ANPC 201/2022',
    allergenModalSubtitle: 'A 14 fő EU allergén csoport listája az EU 2000/13/EK irányelv szerint',
    fiscalModalTitle: 'Kötelező Nyugtaadási Tájékoztató',
    fiscalModalSubtitle: 'Az OUG 28/1999 sürgősségi rendelet értelmében',
    fiscalModalText1: 'Kérjük, minden vásárlás után kérje a hivatalos adóügyi nyugtát a Marissa Étteremben!',
    fiscalModalText2: 'Amennyiben a kiszolgáló személyzet megtagadja a nyugta kiadását, a vendég jogosult a terméket fizetés nélkül átvenni.',
    anafHelpline: 'Ingyenes ANAF Zöldszám:',
    closeBtn: 'Bezárás',
    cancelBtn: 'Mégse',
    unlockBtn: 'Feloldás',
    adminTitle: 'Korlátozott Hozzáférés — Csak Jogosult Személyzetnek',
    adminSubtitle: 'Ez a felület kizárólag az étterem vezetősége és személyzete számára elérhető az asztali QR-kódok nyomtatásához.',
    passwordLabel: 'Adja meg a Belépési Jelszót (Staff / Owner):',
    wrongPassword: 'Helytelen jelszó! A hozzáférés kizárólag jogosult személyzetnek engedélyezett.',
    lockPanel: 'Hozzáférés Zárolása',
    backToMenu: 'Vissza az Étlaphoz',
    printBtn: 'Nyomtatás'
  }
};

export const getTableDisplayText = (tableNumber: string | null, lang: Language): string => {
  if (!tableNumber) return '';
  if (lang === 'hu') {
    return `${tableNumber}. Asztal`;
  } else if (lang === 'en') {
    return `Table #${tableNumber}`;
  }
  return `Masa #${tableNumber}`;
};
