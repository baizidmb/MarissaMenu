// Complete Authentic Menu Dataset for Restaurant Marissa
// Compliant with EU Directive 2000/13/CE, ANPC Order 183/2016, and OUG 28/1999

export const HOTEL_INFO = {
  name: 'Hotel & Restaurant Marissa',
  slogan: 'Locul perfect pentru a vă bucura de o ședere relaxantă și revigorantă!',
  logoUrl: 'https://hotelmarissa.ro/wp-content/uploads/2024/05/Logo_2024_transparent2.webp',
  logoFavicon: 'https://hotelmarissa.ro/wp-content/uploads/2024/05/cropped-Logo_2024_transparent-270x270.png',
  website: 'https://hotelmarissa.ro',
  email: 'office@hotelmarissa.ro',
  phoneReceptie: '0744.627.830',
  phoneFix1: '0371.084.400',
  phoneFix2: '0361.426.594',
  services: [
    { title: 'Restaurant & Terasă', desc: 'Preparate tradiționale și internaționale pregătite zilnic din ingrediente alese.' },
    { title: 'SPA & Tratamente', desc: 'Zonă de relaxare, saună și facilități revigorante pentru un sejur de vis.' },
    { title: 'Cazare Premium', desc: 'Camere Double Standard, Double Deluxe, Triple și Apartamente elegante.' },
    { title: 'Tur Virtual 360°', desc: 'Explorați virtual camerele, restaurantul și zona SPA direct de pe telefon.' }
  ]
};

export const ALLERGEN_INDEX = [
  { id: 1, code: 'GLUTEN', name: 'Cereale care conțin gluten', details: 'Grâu, secară, orz, ovăz, grâu spelt, grâu mare sau hibrizi ai acestora și produse derivate.' },
  { id: 2, code: 'CRUSTACEE', name: 'Crustacee', details: 'Racilor, homarilor, creveților, crabilor și produse derivate.' },
  { id: 3, code: 'OUĂ', name: 'Ouă', details: 'Ouă și produse derivate.' },
  { id: 4, code: 'PEȘTE', name: 'Pește', details: 'Pește și produse derivate (cu excepția gelatinei de pește).' },
  { id: 5, code: 'ARAHIDE', name: 'Arahide', details: 'Arahide și produse derivate.' },
  { id: 6, code: 'SOIA', name: 'Soia', details: 'Soia și produse derivate.' },
  { id: 7, code: 'LAPTE', name: 'Lapte și derivate', details: 'Lapte și produse derivate, inclusiv lactoză.' },
  { id: 8, code: 'FRUCTE_NUCI', name: 'Fructe cu coajă lemnoasă', details: 'Migdale, alune de pădure, nuci, nuci Caju, nuci Pecan, nuci de Brazilia, fistic, nuci de Macadamia.' },
  { id: 9, code: 'ȚELINĂ', name: 'Țelină', details: 'Țelină și produse derivate.' },
  { id: 10, code: 'MUȘTAR', name: 'Muștar', details: 'Muștar și produse derivate.' },
  { id: 11, code: 'SUSAN', name: 'Semințe de susan', details: 'Semințe de susan și produse derivate.' },
  { id: 12, code: 'SULFIȚI', name: 'Dioxid de sulf și sulfiți', details: 'În concentrații de peste 10 mg/kg sau 10 mg/litru exprimate ca SO2.' },
  { id: 13, code: 'LUPIN', name: 'Lupin', details: 'Lupin și produse derivate.' },
  { id: 14, code: 'MOLUȘTE', name: 'Moluște', details: 'Scoici, stridii, calamari, caracatițe și produse derivate.' }
];

export const FROZEN_PRODUCT_NOTICE = {
  title: 'Informații privind Produsele Provenite din Decongelare (Ordinul ANPC 183/2016)',
  text: 'În conformitate cu Ordinul ANPC 183/2016, vă informăm că unele ingrediente utilizate în prepararea produselor din meniul nostru provin din produse decongelate. Acestea includ:',
  categories: [
    { type: 'Cărnuri', items: 'Piept de pui, pulpe pui, piept/pulpă rață, obrăjori vită/porc, mușchiuleț porc, t-bone vită, scăriță porc, ciolan, mici.' },
    { type: 'Pește & Fructe de Mare', items: 'File somon, păstrăv, doradă, creveți, calamari, mix fructe de mare.' },
    { type: 'Legume & Fructe', items: 'Broccoli, spanac, mazăre, fasole verde, ciuperci hribi, fructe de pădure, porumb, avocado.' },
    { type: 'Patiserie & Deserturi', items: 'Piure de castane, lava cake (vulcan de ciocolată), foi de foietaj, ecler, gogoși papanași.' }
  ]
};

export const FISCAL_NOTICE = {
  title: 'Notă de Informare Fiscală (Conform OUG 28/1999)',
  bannerText: '🇷🇴 Conform OUG 28/1999: Solicitați Bonul Fiscal | TelVerde: 0800.800.085',
  legalText: 'Vă rugăm să solicitați bonul fiscal pentru orice bun achiziționat sau serviciu prestat. În cazul refuzului eliberării bonului fiscal, aveți dreptul de a beneficia de bunul achiziționat sau de serviciul prestat fără achitarea contravalorii acestuia.',
  telVerde: '0800.800.085',
  authority: 'Ministerul Finanțelor Publice - Agenția Națională de Administrare Fiscală (ANAF)'
};

export const MENU_CATEGORIES = [
  { id: 'mic-dejun', name: 'Mic Dejun', icon: '☕', description: 'Preparate calde și reci pentru un început perfect de zi' },
  { id: 'gustari', name: 'Gustări Reci & Calde', icon: '🍴', description: 'Aperitive tradiționale și gustări calde delicioase' },
  { id: 'fast-food', name: 'Fast Food', icon: '🔥', description: 'Burgeri suculenți, shaorma la farfurie și preparate crispy' },
  { id: 'ciorbe', name: 'Ciorbe / Supe', icon: '🍲', description: 'Ciorbe ardelenești proaspete servite cu smântână și ardei' },
  { id: 'platouri', name: 'Platouri', icon: '🍱', description: 'Platouri generoase ideale pentru împărțit cu prietenii' },
  { id: 'pui-rata', name: 'Preparate din Pui & Rață', icon: '🍗', description: 'Specialități din carne de pasăre atent pregătite' },
  { id: 'vita', name: 'Preparate din Vită', icon: '🥩', description: 'Fripturi premium, obrăjori fragezi și T-Bone suculent' },
  { id: 'porc', name: 'Preparate din Porc', icon: '🍖', description: 'Ceafă la grătar, ciolan domnesc, tochitură și scăriță gigant' },
  { id: 'peste', name: 'Pește & Fructe de Mare', icon: '🐟', description: 'Somon teriyaki, păstrăv, doradă și tigaie cu fructe de mare' },
  { id: 'paste-risotto', name: 'Paste & Risotto', icon: '🍝', description: 'Retete italienești autentice cu creveți, somon și hribi' },
  { id: 'pizza', name: 'Pizza & Focaccia', icon: '🍕', description: 'Pizza coaptă cu blat fraged și ingrediente alese' },
  { id: 'garnituri', name: 'Garnituri, Sosuri & Extra', icon: '🍟', description: 'Cartofi aurii, piure, legume la grătar și sosuri de casă' },
  { id: 'salate', name: 'Salate Aperitiv & Însoțiri', icon: '🥗', description: 'Salate proaspete, Cezar, Grecească și murături de casă' },
  { id: 'desert', name: 'Desert', icon: '🍰', description: 'Papanași calzi, vulcan de ciocolată, tiramisu și cheesecake' },
  { id: 'traditionale', name: 'Tradiționale de Sărbători', icon: '✨', description: 'Sarmale cu ciolan, platou tradițional și prăjituri' },
  { id: 'racoritoare', name: 'Băuturi Răcoritoare, Cafea & Ceai', icon: '🥤', description: 'Limonadă proaspătă, fresh-uri, espresso și latte aromate' },
  { id: 'cocktailuri', name: 'Cocktailuri & Tării', icon: '🍸', description: 'Cocktailuri alcoolice și non-alcoolice, spirtoase fine' },
  { id: 'vinuri', name: 'Vinuri & Alcoolice', icon: '🍷', description: 'Selecție de vinuri nobile din pivnițele românești' },
  { id: 'bere', name: 'Bere', icon: '🍺', description: 'Bere la sticlă, doză și draft proaspăt' },
  { id: 'ambalaje', name: 'Ambalaje la Pachet', icon: '🛍️', description: 'Cutii pizza, caserole și pungi pentru livrare' }
];

export const MENU_ITEMS = [
  // --- MIC DEJUN ---
  {
    id: 'md-1',
    category: 'mic-dejun',
    name: 'Mic Dejun Clasic',
    weight: '300g',
    price: 25,
    ingredients: 'Ouă ochiuri (2 buc), bacon prăjit, roșie, castravete, brânză telemea, pâine prăjită.',
    allergens: [1, 3, 7],
    isFrozen: false,
    nutrition: { energyKcal: 235, energyKj: 983, fats: 16.2, saturatedFats: 6.8, carbs: 12.4, sugars: 1.8, protein: 11.5, salt: 1.4 }
  },
  {
    id: 'md-2',
    category: 'mic-dejun',
    name: 'Mic Dejun cu Cartofi și Slănină',
    weight: '250g',
    price: 28,
    ingredients: 'Cartofi rumeniți, slănină afumată prăjită, ochiuri de ou, ceapă verde.',
    allergens: [3],
    isFrozen: true,
    nutrition: { energyKcal: 290, energyKj: 1213, fats: 21.0, saturatedFats: 8.5, carbs: 14.5, sugars: 1.2, protein: 9.8, salt: 1.6 }
  },
  {
    id: 'md-3',
    category: 'mic-dejun',
    name: 'Omletă cu Șuncă și Cașcaval',
    weight: '225g',
    price: 28,
    ingredients: '3 ouă proaspete, șuncă presată de porc, cașcaval maturat, unt, roșie.',
    allergens: [3, 7],
    isFrozen: false,
    nutrition: { energyKcal: 240, energyKj: 1004, fats: 17.5, saturatedFats: 8.0, carbs: 3.2, sugars: 1.0, protein: 16.8, salt: 1.5 }
  },
  {
    id: 'md-4',
    category: 'mic-dejun',
    name: 'Omletă Țărănească',
    weight: '300g',
    price: 30,
    ingredients: 'Ouă, cârnați afumați, ardei gras, ceapă, ciuperci, cașcaval.',
    allergens: [3, 7],
    isFrozen: false,
    nutrition: { energyKcal: 260, energyKj: 1087, fats: 19.0, saturatedFats: 7.9, carbs: 4.5, sugars: 1.6, protein: 17.2, salt: 1.8 }
  },
  {
    id: 'md-5',
    category: 'mic-dejun',
    name: 'Marissa Breakfast Special',
    weight: '370g',
    price: 35,
    ingredients: 'Omletă fluffy cu verdețuri, croissant cu unt, cremă de brânză, avocado, somon afumat, roșii cherry.',
    allergens: [1, 3, 4, 7],
    isFrozen: true,
    nutrition: { energyKcal: 275, energyKj: 1150, fats: 18.5, saturatedFats: 7.2, carbs: 13.0, sugars: 2.1, protein: 14.0, salt: 1.3 }
  },
  {
    id: 'md-6',
    category: 'mic-dejun',
    name: 'Platou Mic Dejun Divers',
    weight: '25/80/100/25g',
    price: 25,
    ingredients: 'Unt, gem de casă, cașcaval, șuncă praga, roșii, pâine prăjită.',
    allergens: [1, 7],
    isFrozen: false,
    nutrition: { energyKcal: 220, energyKj: 920, fats: 12.0, saturatedFats: 6.0, carbs: 18.5, sugars: 9.5, protein: 9.5, salt: 1.2 }
  },
  {
    id: 'md-7',
    category: 'mic-dejun',
    name: 'Bruschete cu Roșii și Usturoi',
    weight: '300g',
    price: 25,
    ingredients: 'Pâine artizanală prăjită, roșii proaspete cuburi, busuioc, usturoi, ulei de măsline extravirgin.',
    allergens: [1],
    isFrozen: false,
    nutrition: { energyKcal: 165, energyKj: 690, fats: 6.5, saturatedFats: 0.9, carbs: 22.0, sugars: 3.2, protein: 4.8, salt: 0.9 }
  },
  {
    id: 'md-8',
    category: 'mic-dejun',
    name: 'Bacon / Slănină Prăjită',
    weight: '100g',
    price: 18,
    ingredients: 'Fâșii de bacon sau slănină tradițională rumenite crispy.',
    allergens: [],
    isFrozen: false,
    nutrition: { energyKcal: 480, energyKj: 2008, fats: 45.0, saturatedFats: 16.5, carbs: 0.5, sugars: 0.1, protein: 18.0, salt: 2.5 }
  },
  {
    id: 'md-9',
    category: 'mic-dejun',
    name: 'Cremvurști Fierți',
    weight: '100g',
    price: 12,
    ingredients: 'Cremvurști din carne de porc și pui, muștar.',
    allergens: [10],
    isFrozen: false,
    nutrition: { energyKcal: 260, energyKj: 1087, fats: 22.0, saturatedFats: 8.5, carbs: 1.5, sugars: 0.5, protein: 13.0, salt: 2.1 }
  },
  {
    id: 'md-10',
    category: 'mic-dejun',
    name: 'Telemea de Vacă / Oaie',
    weight: '100g',
    price: 12,
    ingredients: 'Brânză telemea tradițională românească maturată.',
    allergens: [7],
    isFrozen: false,
    nutrition: { energyKcal: 270, energyKj: 1129, fats: 21.5, saturatedFats: 14.0, carbs: 1.0, sugars: 0.8, protein: 17.5, salt: 2.8 }
  },
  {
    id: 'md-11',
    category: 'mic-dejun',
    name: 'Cașcaval Rucăr',
    weight: '100g',
    price: 12,
    ingredients: 'Cașcaval din lapte de vacă opărit.',
    allergens: [7],
    isFrozen: false,
    nutrition: { energyKcal: 330, energyKj: 1380, fats: 26.0, saturatedFats: 17.0, carbs: 1.2, sugars: 0.5, protein: 23.0, salt: 1.9 }
  },
  {
    id: 'md-12',
    category: 'mic-dejun',
    name: 'Lapte Proaspăt',
    weight: '200ml',
    price: 8,
    ingredients: 'Lapte integral pasteurizat 3.5% grăsime.',
    allergens: [7],
    isFrozen: false,
    nutrition: { energyKcal: 64, energyKj: 268, fats: 3.5, saturatedFats: 2.2, carbs: 4.7, sugars: 4.7, protein: 3.3, salt: 0.1 }
  },
  {
    id: 'md-13',
    category: 'mic-dejun',
    name: 'Iaurt Natural',
    weight: '1 pahar (150g)',
    price: 8,
    ingredients: 'Iaurt cremos 3.5% grăsime.',
    allergens: [7],
    isFrozen: false,
    nutrition: { energyKcal: 65, energyKj: 272, fats: 3.5, saturatedFats: 2.3, carbs: 4.2, sugars: 4.2, protein: 4.1, salt: 0.1 }
  },
  {
    id: 'md-14',
    category: 'mic-dejun',
    name: 'Unt Portie',
    weight: '25g',
    price: 5,
    ingredients: 'Unt superior 82% grăsime.',
    allergens: [7],
    isFrozen: false,
    nutrition: { energyKcal: 740, energyKj: 3096, fats: 82.0, saturatedFats: 54.0, carbs: 0.6, sugars: 0.6, protein: 0.8, salt: 0.05 }
  },
  {
    id: 'md-15',
    category: 'mic-dejun',
    name: 'Cacao cu Lapte',
    weight: '200ml',
    price: 12,
    ingredients: 'Lapte cald, cacao olandeză, zahăr.',
    allergens: [7],
    isFrozen: false,
    nutrition: { energyKcal: 95, energyKj: 397, fats: 3.8, saturatedFats: 2.4, carbs: 11.5, sugars: 10.8, protein: 3.6, salt: 0.12 }
  },
  {
    id: 'md-16',
    category: 'mic-dejun',
    name: 'Cereale cu Lapte',
    weight: '200ml/50g',
    price: 15,
    ingredients: 'Fulgide porumb/ciocolată, lapte cald sau rece.',
    allergens: [1, 7],
    isFrozen: false,
    nutrition: { energyKcal: 180, energyKj: 753, fats: 4.1, saturatedFats: 2.1, carbs: 30.5, sugars: 12.0, protein: 5.2, salt: 0.4 }
  },
  {
    id: 'md-17',
    category: 'mic-dejun',
    name: 'Gem de Afine / Căpșuni',
    weight: '50g',
    price: 5,
    ingredients: 'Gem din fructe cu conținut ridicat de fruct.',
    allergens: [],
    isFrozen: false,
    nutrition: { energyKcal: 240, energyKj: 1004, fats: 0.1, saturatedFats: 0.0, carbs: 59.0, sugars: 54.0, protein: 0.4, salt: 0.02 }
  },
  {
    id: 'md-18',
    category: 'mic-dejun',
    name: 'Miere de Polifloră',
    weight: '50g',
    price: 5,
    ingredients: 'Miere naturală de albine.',
    allergens: [],
    isFrozen: false,
    nutrition: { energyKcal: 320, energyKj: 1338, fats: 0.0, saturatedFats: 0.0, carbs: 80.0, sugars: 80.0, protein: 0.3, salt: 0.01 }
  },

  // --- GUSTĂRI RECI & CALDE ---
  {
    id: 'gst-1',
    category: 'gustari',
    name: 'Mici Tradiționali',
    weight: '40g / buc',
    price: 7,
    ingredients: 'Carne tocată amestec vită și porc, condimente naturale, usturoi, bicarbonat de sodiu, muștar.',
    allergens: [10],
    isFrozen: true,
    nutrition: { energyKcal: 285, energyKj: 1192, fats: 23.5, saturatedFats: 9.8, carbs: 2.1, sugars: 0.4, protein: 16.0, salt: 1.8 }
  },
  {
    id: 'gst-2',
    category: 'gustari',
    name: 'Cașcaval Pane',
    weight: '180g',
    price: 28,
    ingredients: 'Cașcaval feliat, pesmet auriu, ou, făină de grâu.',
    allergens: [1, 3, 7],
    isFrozen: true,
    nutrition: { energyKcal: 345, energyKj: 1443, fats: 22.0, saturatedFats: 12.5, carbs: 18.0, sugars: 1.5, protein: 18.5, salt: 1.9 }
  },
  {
    id: 'gst-3',
    category: 'gustari',
    name: 'Mămăligă cu Brânză și Smântână',
    weight: '250/150/70g',
    price: 35,
    ingredients: 'Mămăliguță caldă din mălai de porumb, brânză telemea rasă, smântână grasă 20%.',
    allergens: [7],
    isFrozen: false,
    nutrition: { energyKcal: 210, energyKj: 878, fats: 11.5, saturatedFats: 7.2, carbs: 20.0, sugars: 1.8, protein: 7.5, salt: 1.2 }
  },

  // --- FAST FOOD ---
  {
    id: 'ff-1',
    category: 'fast-food',
    name: 'Burger de Vită Black Angus',
    weight: '450g',
    price: 49,
    ingredients: 'Chiftea vită Black Angus 200g, chiflă brioche cu susan, brânză cheddar, bacon crispy, sos burger, salată, roșii, castraveți murați, cartofi prăjiți incluzi.',
    allergens: [1, 3, 7, 10, 11],
    isFrozen: true,
    nutrition: { energyKcal: 265, energyKj: 1108, fats: 14.8, saturatedFats: 6.2, carbs: 21.0, sugars: 3.5, protein: 12.8, salt: 1.4 }
  },
  {
    id: 'ff-2',
    category: 'fast-food',
    name: 'Burger Crispy Chicken',
    weight: '350g',
    price: 38,
    ingredients: 'Piept de pui crispy în crustă de fulgi de porumb, chiflă prăjită, maioneză cu usturoi, salată iceberg, cartofi prăjiți.',
    allergens: [1, 3, 7, 10],
    isFrozen: true,
    nutrition: { energyKcal: 248, energyKj: 1037, fats: 12.5, saturatedFats: 3.8, carbs: 23.5, sugars: 2.8, protein: 11.2, salt: 1.3 }
  },
  {
    id: 'ff-3',
    category: 'fast-food',
    name: 'Shaorma la Farfurie Marissa',
    weight: '450g',
    price: 38,
    ingredients: 'Carne rotisată de pui, cartofi prăjiți, varză albă, castraveți murați, sos de usturoi, sos de roșii picant, lipie caldă.',
    allergens: [1, 3, 7, 10],
    isFrozen: true,
    nutrition: { energyKcal: 230, energyKj: 962, fats: 11.8, saturatedFats: 3.2, carbs: 20.2, sugars: 2.4, protein: 11.0, salt: 1.5 }
  },
  {
    id: 'ff-4',
    category: 'fast-food',
    name: 'Ultra Cheeseburger Double',
    weight: '450g',
    price: 49,
    ingredients: 'Dublă chiftea de vită, dublu cheddar topit, ceapă caramelizată, sos bbq, cartofi prăjiți cu ierburi.',
    allergens: [1, 3, 7, 10, 11],
    isFrozen: true,
    nutrition: { energyKcal: 295, energyKj: 1234, fats: 18.2, saturatedFats: 8.9, carbs: 19.5, sugars: 4.1, protein: 14.5, salt: 1.6 }
  },

  // --- CIORBE / SUPE ---
  {
    id: 'crb-1',
    category: 'ciorbe',
    name: 'Ciorbă de Burtă',
    weight: '100/300ml',
    price: 29,
    ingredients: 'Burtă de vită feliată, supă concentrată de oase, smântână 20%, gălbenuș de ou, usturoi, gogoșari murați, oțet.',
    allergens: [3, 7, 9],
    isFrozen: true,
    nutrition: { energyKcal: 115, energyKj: 481, fats: 7.8, saturatedFats: 4.2, carbs: 3.1, sugars: 1.5, protein: 8.2, salt: 1.1 }
  },
  {
    id: 'crb-2',
    category: 'ciorbe',
    name: 'Ciorbă Rădăuțeană de Pui',
    weight: '60/340ml',
    price: 25,
    ingredients: 'Piept de pui fâșii, smântână, gălbenuș de ou, usturoi, ardei gras, țelină, morcov.',
    allergens: [3, 7, 9],
    isFrozen: true,
    nutrition: { energyKcal: 105, energyKj: 439, fats: 6.5, saturatedFats: 3.5, carbs: 3.5, sugars: 1.8, protein: 8.0, salt: 1.0 }
  },
  {
    id: 'crb-3',
    category: 'ciorbe',
    name: 'Babgulyas Tradițional Ardelean',
    weight: '100/300ml',
    price: 35,
    ingredients: 'Carne de vită și afumătură de porc, fasole boabe, găluște de făină, morcov, țelină, boia dulce, chimen.',
    allergens: [1, 3, 9],
    isFrozen: true,
    nutrition: { energyKcal: 145, energyKj: 606, fats: 7.2, saturatedFats: 2.8, carbs: 12.0, sugars: 2.0, protein: 9.2, salt: 1.3 }
  },
  {
    id: 'crb-4',
    category: 'ciorbe',
    name: 'Ciorbă Țărănească de Porc',
    weight: '50/350ml',
    price: 25,
    ingredients: 'Carne de porc cuburi, cartofi, mazăre, fasole verde, morcov, țelină, borș acru, leustean proaspăt.',
    allergens: [9],
    isFrozen: true,
    nutrition: { energyKcal: 85, energyKj: 355, fats: 4.2, saturatedFats: 1.6, carbs: 6.8, sugars: 2.1, protein: 5.5, salt: 0.95 }
  },
  {
    id: 'crb-5',
    category: 'ciorbe',
    name: 'Ciorbă de Fasole cu Afumătură',
    weight: '50/50/300ml',
    price: 25,
    ingredients: 'Fasole boabe, ciolan afumat de porc, ceapă, morcov, ardei, pastă de roșii, tarhon.',
    allergens: [9],
    isFrozen: false,
    nutrition: { energyKcal: 125, energyKj: 523, fats: 5.0, saturatedFats: 2.0, carbs: 13.5, sugars: 1.9, protein: 7.2, salt: 1.2 }
  },
  {
    id: 'crb-6',
    category: 'ciorbe',
    name: 'Smântână Proaspătă',
    weight: '80ml',
    price: 7,
    ingredients: 'Smântână fermentată 20% grăsime.',
    allergens: [7],
    isFrozen: false,
    nutrition: { energyKcal: 210, energyKj: 878, fats: 20.0, saturatedFats: 13.0, carbs: 3.2, sugars: 3.2, protein: 2.8, salt: 0.1 }
  },
  {
    id: 'crb-7',
    category: 'ciorbe',
    name: 'Ardei Iute Proaspăt / Murat',
    weight: '1 buc',
    price: 2,
    ingredients: 'Ardei iute verde sau murat.',
    allergens: [],
    isFrozen: false,
    nutrition: { energyKcal: 40, energyKj: 167, fats: 0.2, saturatedFats: 0.0, carbs: 8.8, sugars: 5.3, protein: 1.9, salt: 0.01 }
  },
  {
    id: 'crb-8',
    category: 'ciorbe',
    name: 'Pâine de Casă',
    weight: '150g',
    price: 3,
    ingredients: 'Făină albă de grâu, apă, drojdie, sare.',
    allergens: [1],
    isFrozen: false,
    nutrition: { energyKcal: 245, energyKj: 1025, fats: 1.2, saturatedFats: 0.3, carbs: 49.0, sugars: 1.5, protein: 8.5, salt: 1.2 }
  },
  {
    id: 'crb-9',
    category: 'ciorbe',
    name: 'Pâinici Rumenite cu Usturoi',
    weight: '3 buc (120g)',
    price: 9,
    ingredients: 'Chifle coapte pe vatră, unse cu ulei de usturoi și verdeață.',
    allergens: [1],
    isFrozen: false,
    nutrition: { energyKcal: 270, energyKj: 1129, fats: 4.5, saturatedFats: 0.8, carbs: 48.0, sugars: 2.0, protein: 8.2, salt: 1.3 }
  },

  // --- PLATOURI ---
  {
    id: 'plt-1',
    category: 'platouri',
    name: 'Platou Marissa (2 persoane)',
    weight: '600g',
    price: 69,
    ingredients: 'Ceafă de porc la grătar, piept de pui gratinat, mici tradiționali (4 buc), cartofi aurii, mujdei de usturoi, muștar.',
    allergens: [10],
    isFrozen: true,
    nutrition: { energyKcal: 235, energyKj: 983, fats: 14.5, saturatedFats: 5.8, carbs: 9.5, sugars: 1.1, protein: 17.0, salt: 1.5 }
  },
  {
    id: 'plt-2',
    category: 'platouri',
    name: 'Platoul Gurmandului (4 persoane)',
    weight: '1500g',
    price: 135,
    ingredients: 'Ciolan de porc rumenit, scăriță de porc barbecue, mici (6 buc), aripioare crispy, cartofi prăjiți, murături asortate, sosuri.',
    allergens: [1, 3, 7, 10],
    isFrozen: true,
    nutrition: { energyKcal: 260, energyKj: 1087, fats: 16.8, saturatedFats: 6.5, carbs: 11.2, sugars: 2.0, protein: 16.2, salt: 1.7 }
  },
  {
    id: 'plt-3',
    category: 'platouri',
    name: 'Platoul Bucătarului',
    weight: '1000g',
    price: 110,
    ingredients: 'Obrăjori de porcfragezi, piept de rață feliat, ciuperci sote, piure cu trufe, sos demi-glace.',
    allergens: [7, 9],
    isFrozen: true,
    nutrition: { energyKcal: 215, energyKj: 899, fats: 13.0, saturatedFats: 5.2, carbs: 7.8, sugars: 1.5, protein: 17.5, salt: 1.3 }
  },

  // --- PREPARATE DIN PUI & RAȚĂ ---
  {
    id: 'pui-1',
    category: 'pui-rata',
    name: 'Piept de Pui la Grătar',
    weight: '150g',
    price: 28,
    ingredients: 'Piept de pui fraged condimentat cu ierburi aromatice.',
    allergens: [],
    isFrozen: true,
    nutrition: { energyKcal: 145, energyKj: 606, fats: 3.2, saturatedFats: 0.9, carbs: 0.5, sugars: 0.1, protein: 28.5, salt: 0.8 }
  },
  {
    id: 'pui-2',
    category: 'pui-rata',
    name: 'Pulpe de Pui Dezosate la Grătar',
    weight: '180g',
    price: 27,
    ingredients: 'Pulpe superioare de pui dezosate, marinate în boia și usturoi.',
    allergens: [],
    isFrozen: true,
    nutrition: { energyKcal: 175, energyKj: 732, fats: 8.5, saturatedFats: 2.4, carbs: 0.6, sugars: 0.1, protein: 24.0, salt: 0.9 }
  },
  {
    id: 'pui-3',
    category: 'pui-rata',
    name: 'Piept / Pulpă de Rață cu Varză Roșie',
    weight: '170/200/60g',
    price: 65,
    ingredients: 'Piept sau pulpă de rață confiată, varză roșie călită cu mere și miere, sos fin de portocale.',
    allergens: [],
    isFrozen: true,
    nutrition: { energyKcal: 245, energyKj: 1025, fats: 15.5, saturatedFats: 5.1, carbs: 10.2, sugars: 7.8, protein: 16.5, salt: 1.1 }
  },
  {
    id: 'pui-4',
    category: 'pui-rata',
    name: 'Escalop de Pui cu Ciuperci și Piure',
    weight: '150/150g',
    price: 45,
    ingredients: 'Feliuțe din piept de pui, sos fin cremă de ciuperci hribi și champignon, piure cremos de cartofi cu unt.',
    allergens: [1, 7],
    isFrozen: true,
    nutrition: { energyKcal: 165, energyKj: 690, fats: 7.8, saturatedFats: 3.9, carbs: 9.5, sugars: 1.4, protein: 14.5, salt: 1.0 }
  },
  {
    id: 'pui-5',
    category: 'pui-rata',
    name: 'Piept de Pui cu Sos de Cașcaval',
    weight: '150/150/100g',
    price: 42,
    ingredients: 'Piept de pui la tigaie învelit în sos fin din cașcaval topit și smântână dulce, servit cu orez.',
    allergens: [7],
    isFrozen: true,
    nutrition: { energyKcal: 210, energyKj: 878, fats: 11.2, saturatedFats: 6.4, carbs: 10.5, sugars: 1.1, protein: 17.0, salt: 1.2 }
  },
  {
    id: 'pui-6',
    category: 'pui-rata',
    name: 'Piept Crispy cu Cartofi Prăjiți',
    weight: '150/150/50g',
    price: 38,
    ingredients: 'Fâșii de pui pane în crustă crispy, cartofi prăjiți aurii, sos alb cu usturoi.',
    allergens: [1, 3, 7],
    isFrozen: true,
    nutrition: { energyKcal: 255, energyKj: 1066, fats: 12.8, saturatedFats: 3.5, carbs: 21.0, sugars: 1.2, protein: 14.2, salt: 1.3 }
  },
  {
    id: 'pui-7',
    category: 'pui-rata',
    name: 'Aripioare Crispy Picante',
    weight: '250g',
    price: 28,
    ingredients: 'Aripioare de pui marinate picant în crustă crunchy.',
    allergens: [1, 3],
    isFrozen: true,
    nutrition: { energyKcal: 270, energyKj: 1129, fats: 16.5, saturatedFats: 4.2, carbs: 14.0, sugars: 0.8, protein: 16.0, salt: 1.5 }
  },
  {
    id: 'pui-8',
    category: 'pui-rata',
    name: 'Șnițel de Pui în Crustă de Pesmet',
    weight: '180g',
    price: 24,
    ingredients: 'Piept de pui bătut, trecut prin făină, ou și pesmet auriu.',
    allergens: [1, 3],
    isFrozen: true,
    nutrition: { energyKcal: 225, energyKj: 941, fats: 9.8, saturatedFats: 2.3, carbs: 16.5, sugars: 0.9, protein: 17.8, salt: 1.1 }
  },

  // --- PREPARATE DIN VITĂ ---
  {
    id: 'vit-1',
    category: 'vita',
    name: 'Mușchi de Vită cu Sos de Hribi',
    weight: '150/200/50g',
    price: 89,
    ingredients: 'Mușchi de vită maturat perpelit pe grătar, sos din hribi de pădure cu smântână și unt, cartofi dauphinoise.',
    allergens: [7],
    isFrozen: true,
    nutrition: { energyKcal: 195, energyKj: 815, fats: 11.0, saturatedFats: 5.4, carbs: 5.2, sugars: 1.1, protein: 19.0, salt: 1.0 }
  },
  {
    id: 'vit-2',
    category: 'vita',
    name: 'T-Bone Steak de Vită Premium',
    weight: '380/200/80g',
    price: 125,
    ingredients: 'Antricot și mușchi pe os de vită, unt aromatizat cu ierburi, legume la grătar, sare roz de Himalaya.',
    allergens: [7],
    isFrozen: true,
    nutrition: { energyKcal: 230, energyKj: 962, fats: 14.5, saturatedFats: 6.8, carbs: 2.1, sugars: 0.5, protein: 22.5, salt: 1.2 }
  },
  {
    id: 'vit-3',
    category: 'vita',
    name: 'Obrăjori de Vită cu Piure de Trufe',
    weight: '280/300g',
    price: 98,
    ingredients: 'Obrăjori de vită gătiți lent 12 ore în vin roșu, piure catifelat infuzat cu pastă de trufe negre.',
    allergens: [7, 9, 12],
    isFrozen: true,
    nutrition: { energyKcal: 185, energyKj: 774, fats: 9.8, saturatedFats: 4.6, carbs: 8.5, sugars: 1.8, protein: 15.8, salt: 1.1 }
  },
  {
    id: 'vit-4',
    category: 'vita',
    name: 'Ossobuco de Vită la Cuptor',
    weight: '150/50/20g',
    price: 80,
    ingredients: 'Rrasol de vită cu măduvă gătita la foc mic cu roșii, vin alb și sos gremolata.',
    allergens: [9, 12],
    isFrozen: true,
    nutrition: { energyKcal: 170, energyKj: 711, fats: 8.9, saturatedFats: 3.8, carbs: 4.1, sugars: 1.6, protein: 18.2, salt: 1.1 }
  },

  // --- PREPARATE DIN PORC ---
  {
    id: 'prc-1',
    category: 'porc',
    name: 'Mușchiuleț de Porc cu Hribi și Trufe',
    weight: '150/350g',
    price: 55,
    ingredients: 'Mușchiuleț de porc fraged, hribi de pădure, salsa de trufe, smântână dulce, cartofi aurii.',
    allergens: [7],
    isFrozen: true,
    nutrition: { energyKcal: 180, energyKj: 753, fats: 10.2, saturatedFats: 4.8, carbs: 6.5, sugars: 1.2, protein: 16.0, salt: 1.1 }
  },
  {
    id: 'prc-2',
    category: 'porc',
    name: 'Cotlet Marissa la Grătar',
    weight: '250g',
    price: 32,
    ingredients: 'Cotlet de porc fraged cu os marinat în ierburi aromatice.',
    allergens: [],
    isFrozen: true,
    nutrition: { energyKcal: 205, energyKj: 857, fats: 11.5, saturatedFats: 4.2, carbs: 0.5, sugars: 0.1, protein: 24.5, salt: 0.9 }
  },
  {
    id: 'prc-3',
    category: 'porc',
    name: 'Șnițel Uriaș de Porc',
    weight: '200/50g',
    price: 30,
    ingredients: 'Cotlet de porc aplatizat, crustă de pesmet, lămâie.',
    allergens: [1, 3],
    isFrozen: true,
    nutrition: { energyKcal: 240, energyKj: 1004, fats: 12.0, saturatedFats: 3.5, carbs: 15.0, sugars: 0.8, protein: 17.5, salt: 1.2 }
  },
  {
    id: 'prc-4',
    category: 'porc',
    name: 'Ceafă Țigănească cu Slănină și Usturoi',
    weight: '180/150g',
    price: 52,
    ingredients: 'Ceafă de porc suculentă, crestături de slănină afumată prăjită, sos bogat de usturoi și boia, mămăligă.',
    allergens: [],
    isFrozen: true,
    nutrition: { energyKcal: 280, energyKj: 1171, fats: 20.5, saturatedFats: 8.2, carbs: 6.8, sugars: 0.9, protein: 17.2, salt: 1.6 }
  },
  {
    id: 'prc-5',
    category: 'porc',
    name: 'Ceafă de Porc la Grătar',
    weight: '180g',
    price: 30,
    ingredients: 'Ceafă de porc fragedă friptă la grătar cu cărbuni.',
    allergens: [],
    isFrozen: true,
    nutrition: { energyKcal: 250, energyKj: 1046, fats: 18.0, saturatedFats: 7.1, carbs: 0.4, sugars: 0.1, protein: 21.5, salt: 0.9 }
  },
  {
    id: 'prc-6',
    category: 'porc',
    name: 'Scăriță Gigant de Porc Barbecue',
    weight: '400/150g',
    price: 55,
    ingredients: 'Coaste de porc fragede caramelizate în sos BBQ fumuriu, cartofi wedges.',
    allergens: [10],
    isFrozen: true,
    nutrition: { energyKcal: 275, energyKj: 1150, fats: 17.5, saturatedFats: 6.4, carbs: 12.0, sugars: 8.5, protein: 16.8, salt: 1.5 }
  },
  {
    id: 'prc-7',
    category: 'porc',
    name: 'Ciolan de Porc Rumenit (per 100g)',
    weight: '100g (portionat ~500g)',
    price: 12,
    ingredients: 'Ciolan de porc cu șorici crocant copt la cuptor cu bere și chimen.',
    allergens: [12],
    isFrozen: true,
    nutrition: { energyKcal: 290, energyKj: 1213, fats: 22.0, saturatedFats: 8.5, carbs: 0.8, sugars: 0.2, protein: 21.0, salt: 1.4 }
  },
  {
    id: 'prc-8',
    category: 'porc',
    name: 'Ciolan cu Os Domnesc (per 100g)',
    weight: '100g',
    price: 10,
    ingredients: 'Ciolan afumat fierb în zeamă de varză și rrumenit la vatră.',
    allergens: [],
    isFrozen: true,
    nutrition: { energyKcal: 270, energyKj: 1129, fats: 20.0, saturatedFats: 7.8, carbs: 0.5, sugars: 0.1, protein: 21.5, salt: 1.6 }
  },
  {
    id: 'prc-9',
    category: 'porc',
    name: 'Tochitură Moldovenească de Porc',
    weight: '150/200g',
    price: 45,
    ingredients: 'Carne și cârnați de porc prăjiți în unsoare, sos de roșii cu usturoi, mămăliguță, ou ochi, brânză rasă.',
    allergens: [3, 7],
    isFrozen: true,
    nutrition: { energyKcal: 245, energyKj: 1025, fats: 16.5, saturatedFats: 6.8, carbs: 8.5, sugars: 1.4, protein: 15.5, salt: 1.5 }
  },
  {
    id: 'prc-10',
    category: 'porc',
    name: 'Obrăjori de Porc cu Sos de Portocale',
    weight: '200/200/50g',
    price: 65,
    ingredients: 'Obrăjori de porc brazați în sos dulce-acrișor de portocale, piure de cartofi.',
    allergens: [7, 9],
    isFrozen: true,
    nutrition: { energyKcal: 190, energyKj: 795, fats: 10.5, saturatedFats: 4.2, carbs: 9.8, sugars: 5.2, protein: 14.5, salt: 1.1 }
  },
  {
    id: 'prc-11',
    category: 'porc',
    name: 'Cotlet cu Os și Sos Dijon',
    weight: '150/200/50g',
    price: 65,
    ingredients: 'Cotlet generos de porc cu os, sos cremos de muștar Dijon și smântână, legume sote.',
    allergens: [7, 10],
    isFrozen: true,
    nutrition: { energyKcal: 210, energyKj: 878, fats: 12.8, saturatedFats: 5.5, carbs: 4.8, sugars: 1.2, protein: 18.0, salt: 1.2 }
  },

  // --- PEȘTE & FRUCTE DE MARE ---
  {
    id: 'pst-1',
    category: 'peste',
    name: 'File de Somon Teriyaki',
    weight: '150/150g',
    price: 59,
    ingredients: 'File de somon proaspăt tras la tigaie, glazură teriyaki cu susan, orez basmati.',
    allergens: [4, 6, 11],
    isFrozen: true,
    nutrition: { energyKcal: 210, energyKj: 878, fats: 11.5, saturatedFats: 2.2, carbs: 10.5, sugars: 4.5, protein: 16.2, salt: 1.1 }
  },
  {
    id: 'pst-2',
    category: 'peste',
    name: 'Păstrăv / Doradă la Grătar',
    weight: '200/150g',
    price: 55,
    ingredients: 'Pește întreg rumenit pe plită, lămâie, mujdei de usturoi, mămăligă.',
    allergens: [4],
    isFrozen: true,
    nutrition: { energyKcal: 140, energyKj: 586, fats: 5.8, saturatedFats: 1.2, carbs: 6.5, sugars: 0.5, protein: 15.8, salt: 0.8 }
  },
  {
    id: 'pst-3',
    category: 'peste',
    name: 'Păstrăv Prăjit în Crustă de Mălai',
    weight: '250/200g',
    price: 55,
    ingredients: 'Păstrăv proaspăt îmbrăcat în mălai fin, prăjit auriu, mujdei, mămăliguță.',
    allergens: [4],
    isFrozen: true,
    nutrition: { energyKcal: 185, energyKj: 774, fats: 8.5, saturatedFats: 1.8, carbs: 12.0, sugars: 0.6, protein: 15.0, salt: 0.9 }
  },
  {
    id: 'pst-4',
    category: 'peste',
    name: 'Tigaie Picantă cu Fructe de Mare',
    weight: '250/80g',
    price: 48,
    ingredients: 'Creveți, inele de calamar, pui de caracatiță, sos de roșii cu usturoi, vin alb, ardei iute, pătrunjel.',
    allergens: [2, 4, 12, 14],
    isFrozen: true,
    nutrition: { energyKcal: 115, energyKj: 481, fats: 3.8, saturatedFats: 0.7, carbs: 4.2, sugars: 1.8, protein: 15.5, salt: 1.3 }
  },

  // --- PASTE & RISOTTO ---
  {
    id: 'pst-r-1',
    category: 'paste-risotto',
    name: 'Spaghete Milanese',
    weight: '400g',
    price: 32,
    ingredients: 'Spaghete din grâu dur, sos de roșii cu sos Bolognese și șuncă, parmesan ras.',
    allergens: [1, 7, 9],
    isFrozen: false,
    nutrition: { energyKcal: 175, energyKj: 732, fats: 5.8, saturatedFats: 2.4, carbs: 22.0, sugars: 3.2, protein: 8.5, salt: 1.0 }
  },
  {
    id: 'pst-r-2',
    category: 'paste-risotto',
    name: 'Spaghete Carbonara Autentice',
    weight: '400g',
    price: 32,
    ingredients: 'Spaghete, guanciale / bacon crispy, gălbenuș de ou, pecorino romano, piper proaspăt măcinat.',
    allergens: [1, 3, 7],
    isFrozen: false,
    nutrition: { energyKcal: 235, energyKj: 983, fats: 12.5, saturatedFats: 5.8, carbs: 20.5, sugars: 1.1, protein: 10.2, salt: 1.2 }
  },
  {
    id: 'pst-r-3',
    category: 'paste-risotto',
    name: 'Paste Quattro Formaggi',
    weight: '400g',
    price: 35,
    ingredients: 'Penne din grâu dur, sos cremos din gorgonzola, mozzarella, parmesan, cașcaval maturat.',
    allergens: [1, 7],
    isFrozen: false,
    nutrition: { energyKcal: 260, energyKj: 1087, fats: 14.8, saturatedFats: 9.1, carbs: 21.0, sugars: 1.5, protein: 11.0, salt: 1.3 }
  },
  {
    id: 'pst-r-4',
    category: 'paste-risotto',
    name: 'Penne All\'Arrabbiata',
    weight: '400g',
    price: 28,
    ingredients: 'Penne, sos marinara picant din roșii pelati, usturoi, ardei iute peperoncino, busuioc.',
    allergens: [1],
    isFrozen: false,
    nutrition: { energyKcal: 140, energyKj: 586, fats: 3.2, saturatedFats: 0.5, carbs: 23.5, sugars: 3.5, protein: 4.8, salt: 0.9 }
  },
  {
    id: 'pst-r-5',
    category: 'paste-risotto',
    name: 'Tagliatelle cu Creveți și Dovlecei',
    weight: '400g',
    price: 42,
    ingredients: 'Tagliatelle proaspete, creveți decorticați, dovlecel, usturoi, roșii cherry, vin alb, unt.',
    allergens: [1, 2, 7, 12],
    isFrozen: true,
    nutrition: { energyKcal: 165, energyKj: 690, fats: 5.8, saturatedFats: 2.8, carbs: 19.5, sugars: 1.8, protein: 9.2, salt: 1.1 }
  },
  {
    id: 'pst-r-6',
    category: 'paste-risotto',
    name: 'Paste cu Fructe de Mare',
    weight: '400g',
    price: 42,
    ingredients: 'Spaghete sau tagliatelle, mix fructe de mare, sos de roșii cu usturoi și busuioc.',
    allergens: [1, 2, 4, 14],
    isFrozen: true,
    nutrition: { energyKcal: 150, energyKj: 627, fats: 4.1, saturatedFats: 0.8, carbs: 20.0, sugars: 2.2, protein: 8.8, salt: 1.2 }
  },
  {
    id: 'pst-r-7',
    category: 'paste-risotto',
    name: 'Tagliatelle cu Somon și Smântână',
    weight: '400g',
    price: 42,
    ingredients: 'Tagliatelle, bucățele de somon, smântână dulce, marar proaspăt, lămâie.',
    allergens: [1, 4, 7],
    isFrozen: true,
    nutrition: { energyKcal: 195, energyKj: 815, fats: 9.2, saturatedFats: 4.5, carbs: 18.5, sugars: 1.4, protein: 10.5, salt: 1.0 }
  },
  {
    id: 'pst-r-8',
    category: 'paste-risotto',
    name: 'Risotto al Funghi Porcini',
    weight: '350g',
    price: 42,
    ingredients: 'Orez Arborio cremos, hribi de pădure, unt, parmesan, vin alb, supă de legume.',
    allergens: [7, 9, 12],
    isFrozen: true,
    nutrition: { energyKcal: 180, energyKj: 753, fats: 7.5, saturatedFats: 4.5, carbs: 22.5, sugars: 1.1, protein: 4.8, salt: 0.95 }
  },
  {
    id: 'pst-r-9',
    category: 'paste-risotto',
    name: 'Risotto Alla Pescadora',
    weight: '350g',
    price: 49,
    ingredients: 'Orez italian cremos cu creveți, calamari, scoici, șofran, vin alb, unt.',
    allergens: [2, 4, 7, 12, 14],
    isFrozen: true,
    nutrition: { energyKcal: 165, energyKj: 690, fats: 5.5, saturatedFats: 2.8, carbs: 21.0, sugars: 1.0, protein: 8.5, salt: 1.1 }
  },

  // --- PIZZA & FOCACCIA ---
  {
    id: 'pza-1',
    category: 'pizza',
    name: 'Focaccia Simplă cu Ulei și Oregano',
    weight: '200g',
    price: 12,
    ingredients: 'Blat dospit de pizza, ulei de măsline, oregano, sare de mare.',
    allergens: [1],
    isFrozen: false,
    nutrition: { energyKcal: 250, energyKj: 1046, fats: 6.2, saturatedFats: 0.9, carbs: 42.0, sugars: 1.2, protein: 6.8, salt: 1.4 }
  },
  {
    id: 'pza-2',
    category: 'pizza',
    name: 'Focaccia Casei cu Usturoi și Parmesan',
    weight: '230g',
    price: 15,
    ingredients: 'Blat pizza, oregano, sos de usturoi, parmesan ras.',
    allergens: [1, 7],
    isFrozen: false,
    nutrition: { energyKcal: 270, energyKj: 1129, fats: 8.5, saturatedFats: 2.8, carbs: 40.5, sugars: 1.3, protein: 8.2, salt: 1.5 }
  },
  {
    id: 'pza-3',
    category: 'pizza',
    name: 'Pizza Margherita',
    weight: '385g',
    price: 30,
    ingredients: 'Sos de roșii mutti, mozzarella fior di latte, busuioc proaspăt.',
    allergens: [1, 7],
    isFrozen: false,
    nutrition: { energyKcal: 215, energyKj: 899, fats: 8.2, saturatedFats: 4.5, carbs: 26.0, sugars: 2.5, protein: 9.8, salt: 1.2 }
  },
  {
    id: 'pza-4',
    category: 'pizza',
    name: 'Pizza Marissa Specială',
    weight: '520g',
    price: 35,
    ingredients: 'Sos roșii, mozzarella, șuncă praga, salam italian, ciuperci, porumb, ardei, măsline.',
    allergens: [1, 7],
    isFrozen: true,
    nutrition: { energyKcal: 235, energyKj: 983, fats: 10.5, saturatedFats: 5.1, carbs: 24.8, sugars: 2.8, protein: 10.5, salt: 1.4 }
  },
  {
    id: 'pza-5',
    category: 'pizza',
    name: 'Pizza Prosciutto',
    weight: '455g',
    price: 30,
    ingredients: 'Sos roșii, mozzarella, șuncă presată de porc.',
    allergens: [1, 7],
    isFrozen: false,
    nutrition: { energyKcal: 225, energyKj: 941, fats: 9.0, saturatedFats: 4.8, carbs: 25.0, sugars: 2.2, protein: 10.8, salt: 1.3 }
  },
  {
    id: 'pza-6',
    category: 'pizza',
    name: 'Pizza Prosciutto e Mais',
    weight: '455g',
    price: 32,
    ingredients: 'Sos roșii, mozzarella, șuncă, porumb dulce.',
    allergens: [1, 7],
    isFrozen: true,
    nutrition: { energyKcal: 230, energyKj: 962, fats: 8.8, saturatedFats: 4.6, carbs: 26.5, sugars: 3.2, protein: 10.2, salt: 1.3 }
  },
  {
    id: 'pza-7',
    category: 'pizza',
    name: 'Pizza Prosciutto e Funghi',
    weight: '455g',
    price: 32,
    ingredients: 'Sos roșii, mozzarella, șuncă de porc, ciuperci proaspete.',
    allergens: [1, 7],
    isFrozen: false,
    nutrition: { energyKcal: 220, energyKj: 920, fats: 8.5, saturatedFats: 4.5, carbs: 24.5, sugars: 2.4, protein: 10.5, salt: 1.3 }
  },
  {
    id: 'pza-8',
    category: 'pizza',
    name: 'Pizza Prosciutto Crudo',
    weight: '455g',
    price: 35,
    ingredients: 'Sos roșii, mozzarella, prosciutto crudo maturat 14 luni, parmesan flakes.',
    allergens: [1, 7],
    isFrozen: false,
    nutrition: { energyKcal: 245, energyKj: 1025, fats: 11.2, saturatedFats: 5.8, carbs: 24.0, sugars: 2.1, protein: 12.5, salt: 1.6 }
  },
  {
    id: 'pza-9',
    category: 'pizza',
    name: 'Pizza Prosciutto Crudo e Rucola',
    weight: '455g',
    price: 36,
    ingredients: 'Sos roșii, mozzarella, prosciutto crudo, rucola proaspătă, roșii cherry, parmesan ras.',
    allergens: [1, 7],
    isFrozen: false,
    nutrition: { energyKcal: 240, energyKj: 1004, fats: 10.8, saturatedFats: 5.5, carbs: 23.5, sugars: 2.2, protein: 12.0, salt: 1.5 }
  },
  {
    id: 'pza-10',
    category: 'pizza',
    name: 'Pizza Diavola Picantă',
    weight: '425g',
    price: 32,
    ingredients: 'Sos roșii, mozzarella, salam picant Ventricina, ardei iute peperoncino.',
    allergens: [1, 7],
    isFrozen: false,
    nutrition: { energyKcal: 255, energyKj: 1066, fats: 12.5, saturatedFats: 6.2, carbs: 24.0, sugars: 2.3, protein: 11.2, salt: 1.6 }
  },
  {
    id: 'pza-11',
    category: 'pizza',
    name: 'Pizza Funghi',
    weight: '430g',
    price: 32,
    ingredients: 'Sos roșii, mozzarella, selecție de ciuperci champignon și hribi, oregano.',
    allergens: [1, 7],
    isFrozen: true,
    nutrition: { energyKcal: 205, energyKj: 857, fats: 7.8, saturatedFats: 4.1, carbs: 24.5, sugars: 2.4, protein: 9.0, salt: 1.2 }
  },
  {
    id: 'pza-12',
    category: 'pizza',
    name: 'Pizza California',
    weight: '480g',
    price: 32,
    ingredients: 'Sos alb de smântână, mozzarella, piept de pui, porumb, ciuperci.',
    allergens: [1, 7],
    isFrozen: true,
    nutrition: { energyKcal: 230, energyKj: 962, fats: 9.5, saturatedFats: 5.0, carbs: 25.0, sugars: 2.8, protein: 11.5, salt: 1.3 }
  },
  {
    id: 'pza-13',
    category: 'pizza',
    name: 'Pizza Quattro Stagioni',
    weight: '450g',
    price: 32,
    ingredients: 'Sos roșii, mozzarella, șuncă, salam, ciuperci, măsline negre.',
    allergens: [1, 7],
    isFrozen: false,
    nutrition: { energyKcal: 235, energyKj: 983, fats: 10.2, saturatedFats: 5.2, carbs: 24.5, sugars: 2.5, protein: 10.8, salt: 1.4 }
  },
  {
    id: 'pza-14',
    category: 'pizza',
    name: 'Pizza Quattro Formaggi',
    weight: '450g',
    price: 35,
    ingredients: 'Mozzarella fior di latte, gorgonzola, cașcaval maturat, parmesan.',
    allergens: [1, 7],
    isFrozen: false,
    nutrition: { energyKcal: 275, energyKj: 1150, fats: 14.5, saturatedFats: 8.8, carbs: 23.5, sugars: 1.8, protein: 12.8, salt: 1.5 }
  },
  {
    id: 'pza-15',
    category: 'pizza',
    name: 'Pizza Tonno e Cipolla',
    weight: '450g',
    price: 32,
    ingredients: 'Sos roșii, mozzarella, bucăți de ton, ceapă roșie, măsline.',
    allergens: [1, 4, 7],
    isFrozen: false,
    nutrition: { energyKcal: 220, energyKj: 920, fats: 8.2, saturatedFats: 4.2, carbs: 24.0, sugars: 2.4, protein: 12.0, salt: 1.3 }
  },
  {
    id: 'pza-16',
    category: 'pizza',
    name: 'Pizza Quattro Carni',
    weight: '450g',
    price: 38,
    ingredients: 'Sos roșii, mozzarella, șuncă, salam, bacon, cârnați.',
    allergens: [1, 7],
    isFrozen: false,
    nutrition: { energyKcal: 265, energyKj: 1108, fats: 13.5, saturatedFats: 6.5, carbs: 23.8, sugars: 2.2, protein: 12.2, salt: 1.6 }
  },
  {
    id: 'pza-17',
    category: 'pizza',
    name: 'Pizza Vegetariană',
    weight: '450g',
    price: 32,
    ingredients: 'Sos roșii, mozzarella, roșii, ciuperci, ardei gras, porumb, măsline, broccoli.',
    allergens: [1, 7],
    isFrozen: true,
    nutrition: { energyKcal: 195, energyKj: 815, fats: 7.2, saturatedFats: 3.8, carbs: 24.0, sugars: 3.0, protein: 8.2, salt: 1.1 }
  },
  {
    id: 'pza-18',
    category: 'pizza',
    name: 'Pizza Toscana',
    weight: '450g',
    price: 35,
    ingredients: 'Sos roșii, mozzarella, salam napoli, ciuperci, rucola, parmesan.',
    allergens: [1, 7],
    isFrozen: false,
    nutrition: { energyKcal: 245, energyKj: 1025, fats: 11.5, saturatedFats: 5.8, carbs: 23.5, sugars: 2.2, protein: 11.5, salt: 1.4 }
  },
  {
    id: 'pza-19',
    category: 'pizza',
    name: 'Pizza Speciale Chef',
    weight: '550g',
    price: 38,
    ingredients: 'Blat umplut cu brânză, sos roșii, mozzarella, bacon, piept pui, ardei, măsline, sos usturoi.',
    allergens: [1, 7],
    isFrozen: true,
    nutrition: { energyKcal: 250, energyKj: 1046, fats: 12.0, saturatedFats: 6.0, carbs: 24.2, sugars: 2.5, protein: 11.8, salt: 1.5 }
  },
  {
    id: 'pza-20',
    category: 'pizza',
    name: 'Pizza Capricciosa',
    weight: '500g',
    price: 32,
    ingredients: 'Sos roșii, mozzarella, șuncă, ciuperci, anghinare, măsline.',
    allergens: [1, 7],
    isFrozen: false,
    nutrition: { energyKcal: 225, energyKj: 941, fats: 9.2, saturatedFats: 4.6, carbs: 24.0, sugars: 2.4, protein: 10.6, salt: 1.3 }
  },
  {
    id: 'pza-21',
    category: 'pizza',
    name: 'Pizza Hawaii',
    weight: '500g',
    price: 32,
    ingredients: 'Sos roșii, mozzarella, șuncă presată, ananas dulce.',
    allergens: [1, 7],
    isFrozen: false,
    nutrition: { energyKcal: 215, energyKj: 899, fats: 8.0, saturatedFats: 4.2, carbs: 26.0, sugars: 5.5, protein: 9.5, salt: 1.2 }
  },
  {
    id: 'pza-22',
    category: 'pizza',
    name: 'Pizza Kebab',
    weight: '500g',
    price: 38,
    ingredients: 'Sos roșii, mozzarella, carne rotisată kebab pui, ceapă, sos usturoi.',
    allergens: [1, 7],
    isFrozen: true,
    nutrition: { energyKcal: 245, energyKj: 1025, fats: 11.5, saturatedFats: 5.4, carbs: 23.8, sugars: 2.6, protein: 11.8, salt: 1.5 }
  },
  {
    id: 'pza-23',
    category: 'pizza',
    name: 'Pizza Marissa Family (XXL)',
    weight: '1400g',
    price: 72,
    ingredients: 'Pizza uriașă 50cm, sos roșii, mozzarella, 4 sferturi cu topping-uri asortate la alegere.',
    allergens: [1, 7],
    isFrozen: true,
    nutrition: { energyKcal: 240, energyKj: 1004, fats: 10.8, saturatedFats: 5.2, carbs: 24.5, sugars: 2.5, protein: 11.0, salt: 1.4 }
  },

  // --- GARNITURI & SOSURI ---
  {
    id: 'grn-1',
    category: 'garnituri',
    name: 'Cartofi Prăjiți Proaspeți',
    weight: '180g',
    price: 12,
    ingredients: 'Cartofi tăiați prăjiți în ulei vegetal, sare.',
    allergens: [],
    isFrozen: true,
    nutrition: { energyKcal: 220, energyKj: 920, fats: 10.5, saturatedFats: 1.4, carbs: 28.0, sugars: 0.5, protein: 2.8, salt: 0.9 }
  },
  {
    id: 'grn-2',
    category: 'garnituri',
    name: 'Piure Cremos de Cartofi',
    weight: '200g',
    price: 10,
    ingredients: 'Cartofi fiarți, unt 82%, lapte cald, sare.',
    allergens: [7],
    isFrozen: false,
    nutrition: { energyKcal: 135, energyKj: 565, fats: 5.5, saturatedFats: 3.6, carbs: 18.5, sugars: 1.5, protein: 2.5, salt: 0.8 }
  },
  {
    id: 'grn-3',
    category: 'garnituri',
    name: 'Cartofi Natur cu Unt și Pătrunjel',
    weight: '200g',
    price: 10,
    ingredients: 'Cartofi fiarți, unt, pătrunjel verde tocate.',
    allergens: [7],
    isFrozen: false,
    nutrition: { energyKcal: 120, energyKj: 502, fats: 4.2, saturatedFats: 2.6, carbs: 18.0, sugars: 1.2, protein: 2.2, salt: 0.7 }
  },
  {
    id: 'grn-4',
    category: 'garnituri',
    name: 'Cartofi Aurii la Cuptor',
    weight: '180g',
    price: 12,
    ingredients: 'Cartofi wedges copti cu boia dulce și rozmarin.',
    allergens: [],
    isFrozen: true,
    nutrition: { energyKcal: 165, energyKj: 690, fats: 5.0, saturatedFats: 0.7, carbs: 26.0, sugars: 0.8, protein: 2.9, salt: 0.8 }
  },
  {
    id: 'grn-5',
    category: 'garnituri',
    name: 'Pilaf de Orez cu Legume',
    weight: '200g',
    price: 10,
    ingredients: 'Orez bob rotund, morcov, ardei, verdeață.',
    allergens: [],
    isFrozen: false,
    nutrition: { energyKcal: 140, energyKj: 586, fats: 2.8, saturatedFats: 0.4, carbs: 26.0, sugars: 1.0, protein: 2.8, salt: 0.7 }
  },
  {
    id: 'grn-6',
    category: 'garnituri',
    name: 'Legume Înăbușite în Unt',
    weight: '200g',
    price: 12,
    ingredients: 'Broccoli, morcov, conopidă, dovlecel, unt.',
    allergens: [7],
    isFrozen: true,
    nutrition: { energyKcal: 75, energyKj: 314, fats: 4.2, saturatedFats: 2.6, carbs: 6.8, sugars: 2.8, protein: 2.2, salt: 0.6 }
  },
  {
    id: 'grn-7',
    category: 'garnituri',
    name: 'Mămăliguță Caldă',
    weight: '200g',
    price: 9,
    ingredients: 'Mălai de porumb, apă, sare.',
    allergens: [],
    isFrozen: false,
    nutrition: { energyKcal: 110, energyKj: 460, fats: 0.8, saturatedFats: 0.1, carbs: 23.0, sugars: 0.5, protein: 2.4, salt: 0.5 }
  },
  {
    id: 'grn-8',
    category: 'garnituri',
    name: 'Iahnie de Fasole',
    weight: '200g',
    price: 12,
    ingredients: 'Fasole boabe călită cu ceapă, morcov și sos de roșii.',
    allergens: [],
    isFrozen: false,
    nutrition: { energyKcal: 155, energyKj: 648, fats: 3.5, saturatedFats: 0.5, carbs: 22.0, sugars: 2.5, protein: 8.2, salt: 0.9 }
  },
  {
    id: 'grn-9',
    category: 'garnituri',
    name: 'Ciuperci Sote cu Usturoi',
    weight: '200g',
    price: 15,
    ingredients: 'Ciuperci champignon trase la tigaie în unt cu usturoi și pătrunjel.',
    allergens: [7],
    isFrozen: false,
    nutrition: { energyKcal: 95, energyKj: 397, fats: 6.0, saturatedFats: 3.8, carbs: 4.5, sugars: 1.8, protein: 4.2, salt: 0.7 }
  },
  {
    id: 'grn-10',
    category: 'garnituri',
    name: 'Legume la Grătar',
    weight: '200g',
    price: 18,
    ingredients: 'Dovlecel, vinete, ardei gras, ciuperci, ceapă roșie fripte la grătar cu condimente.',
    allergens: [],
    isFrozen: false,
    nutrition: { energyKcal: 65, energyKj: 272, fats: 2.5, saturatedFats: 0.4, carbs: 8.5, sugars: 4.2, protein: 2.0, salt: 0.5 }
  },
  {
    id: 'grn-11',
    category: 'garnituri',
    name: 'Sos Roșu / Ketchup',
    weight: '70g',
    price: 5,
    ingredients: 'Sos de roșii dulce sau picant.',
    allergens: [],
    isFrozen: false,
    nutrition: { energyKcal: 95, energyKj: 397, fats: 0.2, saturatedFats: 0.0, carbs: 22.0, sugars: 18.0, protein: 1.2, salt: 1.8 }
  },
  {
    id: 'grn-12',
    category: 'garnituri',
    name: 'Sos Alb de Usturoi cu Smântână',
    weight: '70g',
    price: 5,
    ingredients: 'Smântână, maioneză, usturoi măcinat.',
    allergens: [3, 7],
    isFrozen: false,
    nutrition: { energyKcal: 290, energyKj: 1213, fats: 28.0, saturatedFats: 8.5, carbs: 4.5, sugars: 2.1, protein: 2.0, salt: 1.2 }
  },
  {
    id: 'grn-13',
    category: 'garnituri',
    name: 'Sos Chilli Picant',
    weight: '100g',
    price: 5,
    ingredients: 'Sos picant din ardei chilli roșii.',
    allergens: [],
    isFrozen: false,
    nutrition: { energyKcal: 80, energyKj: 335, fats: 0.5, saturatedFats: 0.1, carbs: 17.5, sugars: 14.0, protein: 1.0, salt: 2.0 }
  },
  {
    id: 'grn-14',
    category: 'garnituri',
    name: 'Ulei Infuzat Picant',
    weight: '30ml',
    price: 5,
    ingredients: 'Ulei de măsline infuzat cu ardei iute uscat.',
    allergens: [],
    isFrozen: false,
    nutrition: { energyKcal: 820, energyKj: 3431, fats: 91.0, saturatedFats: 13.0, carbs: 0.0, sugars: 0.0, protein: 0.0, salt: 0.0 }
  },
  {
    id: 'grn-15',
    category: 'garnituri',
    name: 'Mujdei Tradițional de Usturoi',
    weight: '50g',
    price: 5,
    ingredients: 'Usturoi pisat, apă minerală, ulei, sare.',
    allergens: [],
    isFrozen: false,
    nutrition: { energyKcal: 110, energyKj: 460, fats: 7.5, saturatedFats: 1.0, carbs: 9.0, sugars: 0.8, protein: 2.2, salt: 1.2 }
  },
  {
    id: 'grn-16',
    category: 'garnituri',
    name: 'Muștar / Maioneză',
    weight: '70ml',
    price: 3,
    ingredients: 'Muștar clasic sau maioneză fină.',
    allergens: [3, 10],
    isFrozen: false,
    nutrition: { energyKcal: 320, energyKj: 1338, fats: 32.0, saturatedFats: 4.5, carbs: 5.0, sugars: 3.0, protein: 1.8, salt: 1.5 }
  },
  {
    id: 'grn-17',
    category: 'garnituri',
    name: 'Sos Alb cu Ciuperci Hribi',
    weight: '100g',
    price: 12,
    ingredients: 'Smântână dulce, hribi, unt, usturoi.',
    allergens: [7],
    isFrozen: true,
    nutrition: { energyKcal: 180, energyKj: 753, fats: 16.0, saturatedFats: 10.0, carbs: 4.2, sugars: 1.5, protein: 2.8, salt: 0.9 }
  },

  // --- SALATE ---
  {
    id: 'slt-1',
    category: 'salate',
    name: 'Salată Grecească',
    weight: '300/70g',
    price: 28,
    ingredients: 'Roșii, castraveți, ardei gras, brânză feta, măsline Kalamata, ceapă roșie, oregano, ulei măsline.',
    allergens: [7],
    isFrozen: false,
    nutrition: { energyKcal: 135, energyKj: 565, fats: 10.2, saturatedFats: 4.5, carbs: 5.8, sugars: 3.2, protein: 4.5, salt: 1.3 }
  },
  {
    id: 'slt-2',
    category: 'salate',
    name: 'Salată cu Ton',
    weight: '300/70g',
    price: 28,
    ingredients: 'Salată verde, bucăți de ton, porumb, ceapă, ou fiert, măsline, dressing lămâie.',
    allergens: [3, 4],
    isFrozen: false,
    nutrition: { energyKcal: 145, energyKj: 606, fats: 7.5, saturatedFats: 1.6, carbs: 6.2, sugars: 2.1, protein: 12.8, salt: 1.1 }
  },
  {
    id: 'slt-3',
    category: 'salate',
    name: 'Salată Cezar cu Pui',
    weight: '300/70g',
    price: 35,
    ingredients: 'Salată romain/iceberg, piept de pui la grătar, crutoane rumenite, parmesan feliat, dressing Cezar cu anșoa.',
    allergens: [1, 3, 4, 7],
    isFrozen: true,
    nutrition: { energyKcal: 180, energyKj: 753, fats: 11.5, saturatedFats: 3.8, carbs: 8.5, sugars: 1.8, protein: 12.0, salt: 1.2 }
  },
  {
    id: 'slt-4',
    category: 'salate',
    name: 'Salată Caprese',
    weight: '100/100/50g',
    price: 28,
    ingredients: 'Mozzarella proaspătă feliată, roșii zemoase, sos pesto de busuioc, reducție de oțet balsamic.',
    allergens: [7, 8],
    isFrozen: false,
    nutrition: { energyKcal: 190, energyKj: 795, fats: 14.2, saturatedFats: 7.5, carbs: 4.1, sugars: 2.8, protein: 11.2, salt: 0.95 }
  },
  {
    id: 'slt-5',
    category: 'salate',
    name: 'Salată Gourmet cu Avocado și Creveți',
    weight: '300/70g',
    price: 38,
    ingredients: 'Mix de salată verde, creveți trași la tigaie, avocado feliat, roșii cherry, semințe de susan, dressing citrus.',
    allergens: [2, 11],
    isFrozen: true,
    nutrition: { energyKcal: 155, energyKj: 648, fats: 9.8, saturatedFats: 1.6, carbs: 6.5, sugars: 2.0, protein: 9.5, salt: 1.0 }
  },
  {
    id: 'slt-6',
    category: 'salate',
    name: 'Salată de Varză Albă',
    weight: '150g',
    price: 8,
    ingredients: 'Varză albă fin maruntita, mărar, ulei, oțet, sare.',
    allergens: [],
    isFrozen: false,
    nutrition: { energyKcal: 55, energyKj: 230, fats: 2.8, saturatedFats: 0.4, carbs: 6.0, sugars: 3.2, protein: 1.2, salt: 0.6 }
  },
  {
    id: 'slt-7',
    category: 'salate',
    name: 'Salată de Roșii cu Brânză Rasă',
    weight: '150g',
    price: 10,
    ingredients: 'Roșii proaspete, telemea rasă, ceapă.',
    allergens: [7],
    isFrozen: false,
    nutrition: { energyKcal: 85, energyKj: 355, fats: 5.5, saturatedFats: 3.2, carbs: 4.8, sugars: 3.1, protein: 3.8, salt: 0.8 }
  },
  {
    id: 'slt-8',
    category: 'salate',
    name: 'Ardei Copți cu Usturoi',
    weight: '150g',
    price: 12,
    ingredients: 'Ardei kapi copți, oțet, usturoi, ulei de floarea soarelui.',
    allergens: [],
    isFrozen: false,
    nutrition: { energyKcal: 65, energyKj: 272, fats: 3.0, saturatedFats: 0.4, carbs: 8.2, sugars: 5.5, protein: 1.1, salt: 0.7 }
  },
  {
    id: 'slt-9',
    category: 'salate',
    name: 'Salată de Murături Asortate',
    weight: '150g',
    price: 10,
    ingredients: 'Castraveți murați, gogoșari în oțet, varză murată.',
    allergens: [],
    isFrozen: false,
    nutrition: { energyKcal: 25, energyKj: 105, fats: 0.2, saturatedFats: 0.0, carbs: 4.5, sugars: 2.0, protein: 0.8, salt: 1.8 }
  },
  {
    id: 'slt-10',
    category: 'salate',
    name: 'Salată de Sfeclă Roșie cu Hrean',
    weight: '150g',
    price: 12,
    ingredients: 'Sfeclă roșie fiartă cuburi sau rasă, hrean ras, chimen, oțet.',
    allergens: [],
    isFrozen: false,
    nutrition: { energyKcal: 50, energyKj: 209, fats: 0.2, saturatedFats: 0.0, carbs: 10.5, sugars: 7.8, protein: 1.5, salt: 0.7 }
  },
  {
    id: 'slt-11',
    category: 'salate',
    name: 'Salată de Ceapă Roșie',
    weight: '150g',
    price: 8,
    ingredients: 'Ceapă roșie solzi, oțet, sare, ulei.',
    allergens: [],
    isFrozen: false,
    nutrition: { energyKcal: 45, energyKj: 188, fats: 1.5, saturatedFats: 0.2, carbs: 7.5, sugars: 4.2, protein: 1.0, salt: 0.5 }
  },

  // --- DESERT ---
  {
    id: 'dsr-1',
    category: 'desert',
    name: 'Înghețată Sortată la Cupă',
    weight: '100g',
    price: 22,
    ingredients: 'Cupe de înghețată vanilie, ciocolată sau fistic, sos de fructe/ciocolată, frișcă.',
    allergens: [7, 8],
    isFrozen: true,
    nutrition: { energyKcal: 210, energyKj: 878, fats: 10.5, saturatedFats: 6.8, carbs: 24.0, sugars: 22.0, protein: 4.1, salt: 0.15 }
  },
  {
    id: 'dsr-2',
    category: 'desert',
    name: 'Vulcan de Ciocolată (Lava Cake)',
    weight: '200g',
    price: 28,
    ingredients: 'Prajitură caldă cu inimă de ciocolată topită, servită cu glob de înghețată de vanilie.',
    allergens: [1, 3, 7],
    isFrozen: true,
    nutrition: { energyKcal: 380, energyKj: 1590, fats: 21.0, saturatedFats: 12.5, carbs: 42.0, sugars: 32.0, protein: 5.8, salt: 0.25 }
  },
  {
    id: 'dsr-3',
    category: 'desert',
    name: 'Clătite cu Banană și Finetti',
    weight: '200g',
    price: 28,
    ingredients: '2 clătite de casă umplute cu cremă de alune și ciocolată, feliuțe de banană proaspătă.',
    allergens: [1, 3, 7, 8],
    isFrozen: false,
    nutrition: { energyKcal: 295, energyKj: 1234, fats: 12.8, saturatedFats: 4.5, carbs: 39.0, sugars: 26.0, protein: 5.5, salt: 0.3 }
  },
  {
    id: 'dsr-4',
    category: 'desert',
    name: 'Clătite cu Gem de Afine / Vișine',
    weight: '250g',
    price: 20,
    ingredients: 'Foietaj subțire de clătite umplute generos cu gem de casă.',
    allergens: [1, 3, 7],
    isFrozen: false,
    nutrition: { energyKcal: 240, energyKj: 1004, fats: 6.5, saturatedFats: 2.2, carbs: 40.0, sugars: 24.0, protein: 4.8, salt: 0.3 }
  },
  {
    id: 'dsr-5',
    category: 'desert',
    name: 'Papanași Tradiționali cu Brânză și Gem',
    weight: '300g',
    price: 32,
    ingredients: 'Gogoși din brânză dulce de vacă prăjite, smântână grasă, gem de afine sau vișine.',
    allergens: [1, 3, 7],
    isFrozen: true,
    nutrition: { energyKcal: 320, energyKj: 1338, fats: 15.5, saturatedFats: 9.2, carbs: 38.0, sugars: 22.0, protein: 8.5, salt: 0.4 }
  },
  {
    id: 'dsr-6',
    category: 'desert',
    name: 'Felie Desertul Casei',
    weight: '150g',
    price: 22,
    ingredients: 'Prăjitură artizanală cu cremă fină de mascarpone și fructe de pădure.',
    allergens: [1, 3, 7],
    isFrozen: true,
    nutrition: { energyKcal: 310, energyKj: 1297, fats: 16.0, saturatedFats: 9.8, carbs: 34.0, sugars: 21.0, protein: 4.5, salt: 0.2 }
  },
  {
    id: 'dsr-7',
    category: 'desert',
    name: 'Ecler cu Ciocolată și Fistic',
    weight: '180g',
    price: 22,
    ingredients: 'Coajă de ecler crocantă, vanilie, glazură de ciocolată, fistic măcinat.',
    allergens: [1, 3, 7, 8],
    isFrozen: true,
    nutrition: { energyKcal: 330, energyKj: 1380, fats: 18.0, saturatedFats: 9.5, carbs: 35.0, sugars: 23.0, protein: 5.2, salt: 0.25 }
  },
  {
    id: 'dsr-8',
    category: 'desert',
    name: 'Cheesecake cu Fructe de Pădure',
    weight: '180g',
    price: 22,
    ingredients: 'Blat din biscuiți cu unt, cremă fină de brânză, topping de fructe de pădure acrișoare.',
    allergens: [1, 3, 7],
    isFrozen: true,
    nutrition: { energyKcal: 290, energyKj: 1213, fats: 15.0, saturatedFats: 8.9, carbs: 32.0, sugars: 20.0, protein: 5.0, salt: 0.3 }
  },
  {
    id: 'dsr-9',
    category: 'desert',
    name: 'Tiramisu Clasic Italian',
    weight: '150g',
    price: 22,
    ingredients: 'Pișcoturi Savoiardi însiropate în espresso și amaretto, cremă catifelată de mascarpone, cacao.',
    allergens: [1, 3, 7],
    isFrozen: false,
    nutrition: { energyKcal: 285, energyKj: 1192, fats: 14.5, saturatedFats: 9.1, carbs: 31.0, sugars: 19.5, protein: 4.8, salt: 0.2 }
  },

  // --- TRADIȚIONALE DE SĂRBĂTORI ---
  {
    id: 'trd-1',
    category: 'traditionale',
    name: 'Platou Tradițional de Sărbători',
    weight: '400g',
    price: 45,
    ingredients: 'Tobă de casă, lebăr, caltaboș, jumări rumenite, brânză de burduf, ceapă roșie, muștar.',
    allergens: [7, 10],
    isFrozen: false,
    nutrition: { energyKcal: 340, energyKj: 1422, fats: 26.0, saturatedFats: 10.5, carbs: 4.2, sugars: 1.0, protein: 21.0, salt: 2.2 }
  },
  {
    id: 'trd-2',
    category: 'traditionale',
    name: 'Sarmale cu Ciolan și Mămăliguță',
    weight: '200/200/50g',
    price: 38,
    ingredients: 'Sarmale în foi de varză murată umplute cu amestec carne porc și vită, ciolan afumat, smântână, ardei iute, mămăliguță.',
    allergens: [7],
    isFrozen: true,
    nutrition: { energyKcal: 195, energyKj: 815, fats: 12.5, saturatedFats: 4.9, carbs: 11.0, sugars: 2.2, protein: 10.5, salt: 1.6 }
  },
  {
    id: 'trd-3',
    category: 'traditionale',
    name: 'Salată de Boeuf Tradițională',
    weight: '250g',
    price: 25,
    ingredients: 'Rasol de vită, cartofi fiarți, morcovi, gogoșari murați, mazăre, maioneză de casă, muștar.',
    allergens: [3, 10],
    isFrozen: false,
    nutrition: { energyKcal: 210, energyKj: 878, fats: 14.0, saturatedFats: 2.5, carbs: 12.5, sugars: 3.1, protein: 7.8, salt: 1.2 }
  },
  {
    id: 'trd-4',
    category: 'traditionale',
    name: 'Prăjituri Asortate de Casă',
    weight: '200g',
    price: 18,
    ingredients: 'Selecție de prăjituri românești (Albinuța, Nuci, Cornulețe cu gem și nucă).',
    allergens: [1, 3, 7, 8],
    isFrozen: false,
    nutrition: { energyKcal: 380, energyKj: 1590, fats: 17.5, saturatedFats: 7.8, carbs: 50.0, sugars: 31.0, protein: 5.5, salt: 0.3 }
  },

  // --- BĂUTURI RĂCORITOARE, CAFEA & CEAI ---
  {
    id: 'bvt-1',
    category: 'racoritoare',
    name: 'Fresh de Portocale / Grapefruit',
    weight: '150ml',
    price: 15,
    ingredients: 'Citrice proaspăt stoarse la comandă 100%.',
    allergens: [],
    isFrozen: false,
    nutrition: { energyKcal: 45, energyKj: 188, fats: 0.2, saturatedFats: 0.0, carbs: 10.2, sugars: 8.9, protein: 0.7, salt: 0.01 }
  },
  {
    id: 'bvt-2',
    category: 'racoritoare',
    name: 'Limonadă Clasică cu Miere',
    weight: '400ml',
    price: 14,
    ingredients: 'Suc proaspăt de lămâie, apă plată/carbogazoasă, miere naturală, mentă.',
    allergens: [],
    isFrozen: false,
    nutrition: { energyKcal: 38, energyKj: 159, fats: 0.0, saturatedFats: 0.0, carbs: 9.5, sugars: 9.0, protein: 0.1, salt: 0.01 }
  },
  {
    id: 'bvt-3',
    category: 'racoritoare',
    name: 'Limonadă cu Arome (Zmeură / Mango)',
    weight: '400ml',
    price: 15,
    ingredients: 'Lămâie, piure natural de fructe, apă, gheata.',
    allergens: [],
    isFrozen: false,
    nutrition: { energyKcal: 48, energyKj: 200, fats: 0.1, saturatedFats: 0.0, carbs: 11.8, sugars: 11.2, protein: 0.2, salt: 0.01 }
  },
  {
    id: 'bvt-4',
    category: 'racoritoare',
    name: 'Socată de Casă',
    weight: '400ml',
    price: 15,
    ingredients: 'Băutură tradițională fermentată din flori de soc, lămâie, zahăr.',
    allergens: [],
    isFrozen: false,
    nutrition: { energyKcal: 42, energyKj: 175, fats: 0.0, saturatedFats: 0.0, carbs: 10.4, sugars: 10.2, protein: 0.1, salt: 0.01 }
  },
  {
    id: 'bvt-5',
    category: 'racoritoare',
    name: 'Gama Coca-Cola / Fanta / Sprite / Schweppes',
    weight: '250ml / 500ml',
    price: 12,
    ingredients: 'Băuturi răcoritoare carbogazoase la sticlă.',
    allergens: [],
    isFrozen: false,
    nutrition: { energyKcal: 42, energyKj: 175, fats: 0.0, saturatedFats: 0.0, carbs: 10.6, sugars: 10.6, protein: 0.0, salt: 0.02 }
  },
  {
    id: 'bvt-6',
    category: 'racoritoare',
    name: 'Cappy Nectar (Portocale / Piersici)',
    weight: '250ml',
    price: 15,
    ingredients: 'Nectar de fructe.',
    allergens: [],
    isFrozen: false,
    nutrition: { energyKcal: 50, energyKj: 209, fats: 0.1, saturatedFats: 0.0, carbs: 12.0, sugars: 11.5, protein: 0.3, salt: 0.01 }
  },
  {
    id: 'bvt-7',
    category: 'racoritoare',
    name: 'Fuzetea (Lămâie / Piersică)',
    weight: '250ml',
    price: 15,
    ingredients: 'Ceai rece cu aromă de fructe.',
    allergens: [],
    isFrozen: false,
    nutrition: { energyKcal: 19, energyKj: 79, fats: 0.0, saturatedFats: 0.0, carbs: 4.5, sugars: 4.5, protein: 0.0, salt: 0.02 }
  },
  {
    id: 'bvt-8',
    category: 'racoritoare',
    name: 'Milkshake Marissa (Ciocolată / Căpșuni)',
    weight: '300ml',
    price: 25,
    ingredients: 'Lapte rece, înghețată cremă, frișcă naturală, topping.',
    allergens: [7],
    isFrozen: true,
    nutrition: { energyKcal: 145, energyKj: 606, fats: 6.8, saturatedFats: 4.2, carbs: 17.5, sugars: 16.0, protein: 3.5, salt: 0.12 }
  },
  {
    id: 'bvt-9',
    category: 'racoritoare',
    name: 'Almdudler',
    weight: '250ml',
    price: 12,
    ingredients: 'Băutură răcoritoare carbogazoasă din plante alpine austriece.',
    allergens: [],
    isFrozen: false,
    nutrition: { energyKcal: 33, energyKj: 138, fats: 0.0, saturatedFats: 0.0, carbs: 7.9, sugars: 7.9, protein: 0.0, salt: 0.01 }
  },
  {
    id: 'bvt-10',
    category: 'racoritoare',
    name: 'Red Bull Energy Drink',
    weight: '250ml',
    price: 15,
    ingredients: 'Băutură energizantă cu taurină și cafeină.',
    allergens: [],
    isFrozen: false,
    nutrition: { energyKcal: 46, energyKj: 192, fats: 0.0, saturatedFats: 0.0, carbs: 11.0, sugars: 11.0, protein: 0.0, salt: 0.1 }
  },
  {
    id: 'bvt-11',
    category: 'racoritoare',
    name: 'Apă Minerală Plată / Carbogazoasă (Dorna/Bucovina)',
    weight: '500ml / 750ml',
    price: 10,
    ingredients: 'Apă minerală naturală.',
    allergens: [],
    isFrozen: false,
    nutrition: { energyKcal: 0, energyKj: 0, fats: 0.0, saturatedFats: 0.0, carbs: 0.0, sugars: 0.0, protein: 0.0, salt: 0.01 }
  },
  {
    id: 'bvt-12',
    category: 'racoritoare',
    name: 'Garanție Ambalaj SGR',
    weight: '1 buc',
    price: 0.50,
    ingredients: 'Garanție legală ambalaj SGR (Sistemul de Garanție-Returnare).',
    allergens: [],
    isFrozen: false,
    nutrition: { energyKcal: 0, energyKj: 0, fats: 0.0, saturatedFats: 0.0, carbs: 0.0, sugars: 0.0, protein: 0.0, salt: 0.0 }
  },
  {
    id: 'bvt-13',
    category: 'racoritoare',
    name: 'Espresso Scurt / Lung',
    weight: '30ml / 60ml',
    price: 9,
    ingredients: '100% cafea boabe Arabica proaspăt râșnită.',
    allergens: [],
    isFrozen: false,
    nutrition: { energyKcal: 2, energyKj: 8, fats: 0.0, saturatedFats: 0.0, carbs: 0.3, sugars: 0.0, protein: 0.2, salt: 0.0 }
  },
  {
    id: 'bvt-14',
    category: 'racoritoare',
    name: 'Espresso Dublu',
    weight: '100ml',
    price: 18,
    ingredients: 'Doza dublă de cafea espresso Arabica premium.',
    allergens: [],
    isFrozen: false,
    nutrition: { energyKcal: 4, energyKj: 16, fats: 0.0, saturatedFats: 0.0, carbs: 0.6, sugars: 0.0, protein: 0.4, salt: 0.0 }
  },
  {
    id: 'bvt-15',
    category: 'racoritoare',
    name: 'Espresso Macchiato / cu Lapte',
    weight: '70ml',
    price: 10,
    ingredients: 'Espresso, spumă fină din lapte.',
    allergens: [7],
    isFrozen: false,
    nutrition: { energyKcal: 25, energyKj: 105, fats: 1.2, saturatedFats: 0.8, carbs: 1.8, sugars: 1.8, protein: 1.3, salt: 0.04 }
  },
  {
    id: 'bvt-16',
    category: 'racoritoare',
    name: 'Caffe Latte cu Arome (Vanilie / Caramel)',
    weight: '200ml',
    price: 20,
    ingredients: 'Espresso, lapte cald spumat, sirop fin de aromă.',
    allergens: [7],
    isFrozen: false,
    nutrition: { energyKcal: 85, energyKj: 355, fats: 3.2, saturatedFats: 2.1, carbs: 10.5, sugars: 10.0, protein: 3.2, salt: 0.1 }
  },
  {
    id: 'bvt-17',
    category: 'racoritoare',
    name: 'Baby Latte (Fără Cafeină)',
    weight: '170ml',
    price: 16,
    ingredients: 'Lapte cald spumat, scorțișoară, pic de miere.',
    allergens: [7],
    isFrozen: false,
    nutrition: { energyKcal: 68, energyKj: 284, fats: 3.0, saturatedFats: 1.9, carbs: 6.8, sugars: 6.5, protein: 3.1, salt: 0.09 }
  },
  {
    id: 'bvt-18',
    category: 'racoritoare',
    name: 'Gingerbread Latte',
    weight: '200ml',
    price: 20,
    ingredients: 'Espresso, lapte, sirop de turtă dulce, frișcă, nucșoară.',
    allergens: [7],
    isFrozen: false,
    nutrition: { energyKcal: 110, energyKj: 460, fats: 4.5, saturatedFats: 3.0, carbs: 14.2, sugars: 13.5, protein: 3.2, salt: 0.12 }
  },
  {
    id: 'bvt-19',
    category: 'racoritoare',
    name: 'Salted Caramel Latte',
    weight: '200ml',
    price: 20,
    ingredients: 'Espresso, lapte, sirop caramel sărat, frișcă.',
    allergens: [7],
    isFrozen: false,
    nutrition: { energyKcal: 115, energyKj: 481, fats: 4.8, saturatedFats: 3.2, carbs: 14.8, sugars: 14.0, protein: 3.1, salt: 0.25 }
  },
  {
    id: 'bvt-20',
    category: 'racoritoare',
    name: 'Frappe Espresso',
    weight: '200ml',
    price: 20,
    ingredients: 'Espresso solubil/fresh, lapte rece, gheață, frișcă, topping ciocolată.',
    allergens: [7],
    isFrozen: false,
    nutrition: { energyKcal: 125, energyKj: 523, fats: 5.2, saturatedFats: 3.5, carbs: 15.5, sugars: 14.8, protein: 3.4, salt: 0.12 }
  },
  {
    id: 'bvt-21',
    category: 'racoritoare',
    name: 'Cappuccino Vienez',
    weight: '170ml',
    price: 16,
    ingredients: 'Espresso, frișcă naturală bătută, praf de cacao.',
    allergens: [7],
    isFrozen: false,
    nutrition: { energyKcal: 95, energyKj: 397, fats: 6.2, saturatedFats: 4.1, carbs: 6.5, sugars: 5.8, protein: 2.8, salt: 0.08 }
  },
  {
    id: 'bvt-22',
    category: 'racoritoare',
    name: 'Turmeric Latte (Golden Milk)',
    weight: '170ml',
    price: 20,
    ingredients: 'Lapte vegetal/vacă, turmeric, ghimbir, scorțișoară, miere.',
    allergens: [7],
    isFrozen: false,
    nutrition: { energyKcal: 78, energyKj: 326, fats: 3.1, saturatedFats: 1.8, carbs: 9.8, sugars: 8.5, protein: 2.9, salt: 0.08 }
  },
  {
    id: 'bvt-23',
    category: 'racoritoare',
    name: 'Ciocolată Caldă (Albă / Neagră)',
    weight: '120ml',
    price: 16,
    ingredients: 'Cremă densă de ciocolată fină cu lapte.',
    allergens: [7],
    isFrozen: false,
    nutrition: { energyKcal: 160, energyKj: 669, fats: 6.5, saturatedFats: 4.1, carbs: 21.0, sugars: 18.5, protein: 3.8, salt: 0.15 }
  },
  {
    id: 'bvt-24',
    category: 'racoritoare',
    name: 'Lavanda Latte Signature',
    weight: '200ml',
    price: 20,
    ingredients: 'Espresso, lapte spumat, infuzie naturală de lavandă alimentară.',
    allergens: [7],
    isFrozen: false,
    nutrition: { energyKcal: 88, energyKj: 368, fats: 3.2, saturatedFats: 2.1, carbs: 11.2, sugars: 10.5, protein: 3.1, salt: 0.1 }
  },

  // --- COCKTAILURI & ALCOOL ---
  {
    id: 'ckt-1',
    category: 'cocktailuri',
    name: 'Bora Bora (Non-Alcoolic)',
    weight: '250ml',
    price: 25,
    ingredients: 'Suc de ananas, maracuja, grenadină, suc de lămâie, gheață.',
    allergens: [],
    isFrozen: false,
    nutrition: { energyKcal: 65, energyKj: 272, fats: 0.1, saturatedFats: 0.0, carbs: 16.0, sugars: 15.2, protein: 0.3, salt: 0.01 }
  },
  {
    id: 'ckt-2',
    category: 'cocktailuri',
    name: 'Boni Bon Signature (Non-Alcoolic)',
    weight: '250ml',
    price: 22,
    ingredients: 'Piure de căpșuni, suc de portocale, sprite, lime.',
    allergens: [],
    isFrozen: false,
    nutrition: { energyKcal: 58, energyKj: 242, fats: 0.1, saturatedFats: 0.0, carbs: 14.2, sugars: 13.8, protein: 0.2, salt: 0.01 }
  },
  {
    id: 'ckt-3',
    category: 'cocktailuri',
    name: 'Aperol Spritz',
    weight: '250ml',
    price: 24,
    ingredients: 'Aperol, Prosecco, apă minerală carbogazoasă, felie de portocală.',
    allergens: [12],
    isFrozen: false,
    nutrition: { energyKcal: 95, energyKj: 397, fats: 0.0, saturatedFats: 0.0, carbs: 8.5, sugars: 7.2, protein: 0.1, salt: 0.01 }
  },
  {
    id: 'ckt-4',
    category: 'cocktailuri',
    name: 'Hugo Spritz',
    weight: '250ml',
    price: 24,
    ingredients: 'Prosecco, sirop de flori de soc, apă minerală, lime proaspăt, mentă.',
    allergens: [12],
    isFrozen: false,
    nutrition: { energyKcal: 88, energyKj: 368, fats: 0.0, saturatedFats: 0.0, carbs: 7.8, sugars: 7.0, protein: 0.1, salt: 0.01 }
  },
  {
    id: 'ckt-5',
    category: 'cocktailuri',
    name: 'Pina Colada',
    weight: '250ml',
    price: 25,
    ingredients: 'Rom alb, cremă de nucă de cocos, suc de ananas.',
    allergens: [7],
    isFrozen: false,
    nutrition: { energyKcal: 165, energyKj: 690, fats: 4.8, saturatedFats: 4.2, carbs: 18.0, sugars: 16.5, protein: 0.8, salt: 0.02 }
  },
  {
    id: 'ckt-6',
    category: 'cocktailuri',
    name: 'Mojito Clasic',
    weight: '250ml',
    price: 25,
    ingredients: 'Rom cubanez alb, mentă proaspătă, lime, zahăr brun, apă carbogazoasă.',
    allergens: [],
    isFrozen: false,
    nutrition: { energyKcal: 110, energyKj: 460, fats: 0.0, saturatedFats: 0.0, carbs: 12.0, sugars: 11.5, protein: 0.1, salt: 0.01 }
  },
  {
    id: 'ckt-7',
    category: 'cocktailuri',
    name: 'Spirtoase Fine / Tării (Absolut, Jägermeister, Alexandrion, etc.)',
    weight: '50ml',
    price: 18,
    ingredients: 'Distilat fin de calitate superioară (Vodka, Whisky, Cognac, Liqueur).',
    allergens: [],
    isFrozen: false,
    nutrition: { energyKcal: 220, energyKj: 920, fats: 0.0, saturatedFats: 0.0, carbs: 0.5, sugars: 0.5, protein: 0.0, salt: 0.0 }
  },

  // --- VINURI & BERE ---
  {
    id: 'vin-1',
    category: 'vinuri',
    name: 'Gama Vincon Comoara Pivniței (Ediție Colecție)',
    weight: '750ml',
    price: 120,
    ingredients: 'Vin roșu sau alb sec maturat în butoaie de stejar.',
    allergens: [12],
    isFrozen: false,
    nutrition: { energyKcal: 82, energyKj: 343, fats: 0.0, saturatedFats: 0.0, carbs: 2.4, sugars: 0.8, protein: 0.1, salt: 0.01 }
  },
  {
    id: 'vin-2',
    category: 'vinuri',
    name: 'Beciul Domnesc (Fetească Neagră / Sauvignon Blanc)',
    weight: '750ml',
    price: 50,
    ingredients: 'Vin de calitate superioară cu denumire de origine controlată.',
    allergens: [12],
    isFrozen: false,
    nutrition: { energyKcal: 78, energyKj: 326, fats: 0.0, saturatedFats: 0.0, carbs: 2.1, sugars: 0.5, protein: 0.1, salt: 0.01 }
  },
  {
    id: 'vin-3',
    category: 'vinuri',
    name: 'Jidvei Traditional / Castel',
    weight: '750ml',
    price: 50,
    ingredients: 'Vin alb demisec / sec din podgoria Jidvei.',
    allergens: [12],
    isFrozen: false,
    nutrition: { energyKcal: 76, energyKj: 318, fats: 0.0, saturatedFats: 0.0, carbs: 2.2, sugars: 1.2, protein: 0.1, salt: 0.01 }
  },
  {
    id: 'bre-1',
    category: 'bere',
    name: 'Pilsner Urquell / Peroni Nastro Azzurro',
    weight: '330ml / 500ml',
    price: 15,
    ingredients: 'Apă, mătase de hamei, maț de orz fermentat.',
    allergens: [1],
    isFrozen: false,
    nutrition: { energyKcal: 43, energyKj: 180, fats: 0.0, saturatedFats: 0.0, carbs: 3.5, sugars: 0.2, protein: 0.5, salt: 0.01 }
  },
  {
    id: 'bre-2',
    category: 'bere',
    name: 'Ursus Premium / Timișoreana Draft / Sticlă',
    weight: '500ml',
    price: 12,
    ingredients: 'Bere blonda tradițională românească.',
    allergens: [1],
    isFrozen: false,
    nutrition: { energyKcal: 40, energyKj: 167, fats: 0.0, saturatedFats: 0.0, carbs: 3.1, sugars: 0.1, protein: 0.4, salt: 0.01 }
  },

  // --- AMBALAJE LA PACHET ---
  {
    id: 'amb-1',
    category: 'ambalaje',
    name: 'Cutie Pizza Mică',
    weight: '1 buc',
    price: 3,
    ingredients: 'Ambalaj alimentar din carton biodegradabil rezistent la grăsimi.',
    allergens: [],
    isFrozen: false,
    nutrition: { energyKcal: 0, energyKj: 0, fats: 0, saturatedFats: 0, carbs: 0, sugars: 0, protein: 0, salt: 0 }
  },
  {
    id: 'amb-2',
    category: 'ambalaje',
    name: 'Cutie Pizza Mare / Family',
    weight: '1 buc',
    price: 4,
    ingredients: 'Carton ondulat gros alimentar.',
    allergens: [],
    isFrozen: false,
    nutrition: { energyKcal: 0, energyKj: 0, fats: 0, saturatedFats: 0, carbs: 0, sugars: 0, protein: 0, salt: 0 }
  },
  {
    id: 'amb-3',
    category: 'ambalaje',
    name: 'Caserolă Termică Alimentară',
    weight: '1 buc',
    price: 1.50,
    ingredients: 'Caserolă din polipropilenă reciclabilă pentru mâncare caldă.',
    allergens: [],
    isFrozen: false,
    nutrition: { energyKcal: 0, energyKj: 0, fats: 0, saturatedFats: 0, carbs: 0, sugars: 0, protein: 0, salt: 0 }
  },
  {
    id: 'amb-4',
    category: 'ambalaje',
    name: 'Set Tacâmuri Unică Folosință Sigilate',
    weight: '1 set',
    price: 1.00,
    ingredients: 'Set tacâmuri biodegradabile (furculiță, cuțit, șervețel).',
    allergens: [],
    isFrozen: false,
    nutrition: { energyKcal: 0, energyKj: 0, fats: 0, saturatedFats: 0, carbs: 0, sugars: 0, protein: 0, salt: 0 }
  },
  {
    id: 'amb-5',
    category: 'ambalaje',
    name: 'Pungă Biodegradabilă Transport',
    weight: '1 buc',
    price: 0.50,
    ingredients: 'Pungă din amidon de porumb 100% compostabilă.',
    allergens: [],
    isFrozen: false,
    nutrition: { energyKcal: 0, energyKj: 0, fats: 0, saturatedFats: 0, carbs: 0, sugars: 0, protein: 0, salt: 0 }
  }
];
