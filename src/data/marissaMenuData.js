// Complete Authentic Menu Dataset for Hotel & Restaurant Marissa
// Bilingual Support (RO 🇷🇴 & EN 🇬🇧)
// Compliant with EU Directive 2000/13/CE, ANPC Order 183/2016, and OUG 28/1999

export const HOTEL_INFO = {
  name: 'Hotel & Restaurant Marissa',
  slogan: {
    ro: 'Locul perfect pentru a vă bucura de o ședere relaxantă și revigorantă!',
    en: 'The perfect place to enjoy a relaxing and invigorating stay!'
  },
  logoUrl: 'https://hotelmarissa.ro/wp-content/uploads/2024/05/Logo_2024_transparent2.webp',
  logoFavicon: 'https://hotelmarissa.ro/wp-content/uploads/2024/05/cropped-Logo_2024_transparent-180x180.png',
  website: 'https://hotelmarissa.ro',
  email: 'office@hotelmarissa.ro',
  phoneReceptie: '0744.627.830',
  phoneFix1: '0371.084.400',
  phoneFix2: '0361.426.594',
  services: [
    {
      title: { ro: 'Restaurant & Terasă', en: 'Restaurant & Terrace' },
      desc: { ro: 'Preparate tradiționale și internaționale pregătite zilnic din ingrediente alese.', en: 'Traditional and international dishes prepared fresh daily with finest ingredients.' }
    },
    {
      title: { ro: 'SPA & Tratamente', en: 'SPA & Treatments' },
      desc: { ro: 'Zonă de relaxare, saună și facilități revigorante pentru un sejur de vis.', en: 'Relaxation zone, sauna, and rejuvenating facilities for a dream vacation.' }
    },
    {
      title: { ro: 'Cazare Premium', en: 'Premium Accommodation' },
      desc: { ro: 'Camere Double Standard, Double Deluxe, Triple și Apartamente elegante.', en: 'Double Standard, Double Deluxe, Triple rooms, and elegant Suites.' }
    },
    {
      title: { ro: 'Tur Virtual 360°', en: '360° Virtual Tour' },
      desc: { ro: 'Explorați virtual camerele, restaurantul și zona SPA direct de pe telefon.', en: 'Explore the rooms, restaurant, and SPA zone in 360° from your mobile device.' }
    }
  ]
};

export const ALLERGEN_INDEX = [
  { id: 1, code: 'GLUTEN', name: { ro: 'Cereale care conțin gluten', en: 'Cereals containing gluten' }, details: { ro: 'Grâu, secară, orz, ovăz, grâu spelt sau produse derivate.', en: 'Wheat, rye, barley, oats, spelt or derived products.' } },
  { id: 2, code: 'CRUSTACEE', name: { ro: 'Crustacee', en: 'Crustaceans' }, details: { ro: 'Racilor, homarilor, creveților, crabilor și produse derivate.', en: 'Crayfish, lobsters, prawns, crabs and derived products.' } },
  { id: 3, code: 'OUĂ', name: { ro: 'Ouă', en: 'Eggs' }, details: { ro: 'Ouă și produse derivate.', en: 'Eggs and derived products.' } },
  { id: 4, code: 'PEȘTE', name: { ro: 'Pește', en: 'Fish' }, details: { ro: 'Pește și produse derivate.', en: 'Fish and derived products.' } },
  { id: 5, code: 'ARAHIDE', name: { ro: 'Arahide', en: 'Peanuts' }, details: { ro: 'Arahide și produse derivate.', en: 'Peanuts and derived products.' } },
  { id: 6, code: 'SOIA', name: { ro: 'Soia', en: 'Soybeans' }, details: { ro: 'Soia și produse derivate.', en: 'Soybeans and derived products.' } },
  { id: 7, code: 'LAPTE', name: { ro: 'Lapte și derivate (lactoză)', en: 'Milk and dairy (lactose)' }, details: { ro: 'Lapte și produse derivate, inclusiv lactoză.', en: 'Milk and dairy products, including lactose.' } },
  { id: 8, code: 'FRUCTE_NUCI', name: { ro: 'Fructe cu coajă lemnoasă', en: 'Nuts & Tree Nuts' }, details: { ro: 'Migdale, alune de pădure, nuci, caju, fistic, macadamia.', en: 'Almonds, hazelnuts, walnuts, cashews, pistachios, macadamia.' } },
  { id: 9, code: 'ȚELINĂ', name: { ro: 'Țelină', en: 'Celery' }, details: { ro: 'Țelină și produse derivate.', en: 'Celery and derived products.' } },
  { id: 10, code: 'MUȘTAR', name: { ro: 'Muștar', en: 'Mustard' }, details: { ro: 'Muștar și produse derivate.', en: 'Mustard and derived products.' } },
  { id: 11, code: 'SUSAN', name: { ro: 'Semințe de susan', en: 'Sesame seeds' }, details: { ro: 'Semințe de susan și produse derivate.', en: 'Sesame seeds and derived products.' } },
  { id: 12, code: 'SULFIȚI', name: { ro: 'Dioxid de sulf și sulfiți', en: 'Sulphur dioxide and sulphites' }, details: { ro: 'Concentrații de peste 10 mg/kg sau 10 mg/l exprimate ca SO2.', en: 'Concentrations above 10 mg/kg or 10 mg/l expressed as SO2.' } },
  { id: 13, code: 'LUPIN', name: { ro: 'Lupin', en: 'Lupin' }, details: { ro: 'Lupin și produse derivate.', en: 'Lupin and derived products.' } },
  { id: 14, code: 'MOLUȘTE', name: { ro: 'Moluște', en: 'Molluscs' }, details: { ro: 'Scoici, stridii, calamari, caracatițe și produse derivate.', en: 'Clams, oysters, squid, octopus and derived products.' } }
];

export const FROZEN_PRODUCT_NOTICE = {
  title: {
    ro: 'Informații privind Produsele Provenite din Decongelare (Ordinul ANPC 183/2016)',
    en: 'Information Regarding Thawed Ingredients (ANPC Order 183/2016)'
  },
  text: {
    ro: 'În conformitate cu Ordinul ANPC 183/2016, vă informăm că unele ingrediente utilizate în prepararea produselor provin din produse decongelate:',
    en: 'In accordance with ANPC Order 183/2016, we inform you that some ingredients used in our dishes originate from thawed products:'
  },
  categories: [
    { type: { ro: 'Cărnuri', en: 'Meats' }, items: { ro: 'Piept de pui, pulpe pui, rață, obrăjori vită/porc, mușchi porc, t-bone, ciolan, mici.', en: 'Chicken breast, thighs, duck, beef/pork cheeks, pork tenderloin, t-bone, pork knuckle, mici.' } },
    { type: { ro: 'Pește & Fructe de Mare', en: 'Fish & Seafood' }, items: { ro: 'File somon, păstrăv, doradă, creveți, calamari, mix fructe de mare.', en: 'Salmon fillet, trout, sea bream, prawns, squid, seafood mix.' } },
    { type: { ro: 'Legume & Fructe', en: 'Vegetables & Fruits' }, items: { ro: 'Broccoli, spanac, mazăre, fasole verde, ciuperci hribi, fructe de pădure, porumb.', en: 'Broccoli, spinach, peas, green beans, porcini mushrooms, berries, corn.' } },
    { type: { ro: 'Patiserie & Deserturi', en: 'Pastry & Desserts' }, items: { ro: 'Piure castane, lava cake, ecler, gogoși papanași, foi foietaj.', en: 'Chestnut puree, lava cake, eclairs, papanași donuts, puff pastry.' } }
  ]
};

export const FISCAL_NOTICE = {
  title: { ro: 'Notă de Informare Fiscală (Conform OUG 28/1999)', en: 'Fiscal Receipt Legal Notice (OUG 28/1999)' },
  bannerText: {
    ro: '🇷🇴 Conform OUG 28/1999: Solicitați Bonul Fiscal | TelVerde: 0800.800.085',
    en: '🇷🇴 Fiscal Compliance OUG 28/1999: Please Request Fiscal Receipt | Helpline: 0800.800.085'
  },
  legalText: {
    ro: 'Vă rugăm să solicitați bonul fiscal pentru orice bun achiziționat. În cazul refuzului eliberării bonului fiscal, aveți dreptul de a beneficia de bunul achiziționat fără achitarea contravalorii acestuia.',
    en: 'Please request your fiscal receipt for any item purchased. In case of refusal to issue a receipt, you have the right to receive the item free of charge.'
  },
  telVerde: '0800.800.085',
  authority: 'Ministerul Finanțelor Publice - ANAF'
};

export const MENU_CATEGORIES = [
  { id: 'mic-dejun', name: { ro: 'Mic Dejun', en: 'Breakfast' }, icon: '☕', description: { ro: 'Preparate calde și reci pentru un început de zi plin de energie', en: 'Hot and cold breakfast dishes for an energetic start of the day' } },
  { id: 'gustari', name: { ro: 'Gustări Reci & Calde', en: 'Starters & Appetizers' }, icon: '🍴', description: { ro: 'Aperitive tradiționale românești și gustări calde delicioase', en: 'Traditional Romanian appetizers and warm starters' } },
  { id: 'fast-food', name: { ro: 'Fast Food', en: 'Fast Food & Burgers' }, icon: '🔥', description: { ro: 'Burgeri suculenți Black Angus, shaorma și preparate crispy', en: 'Juicy Black Angus burgers, shaorma, and crispy delights' } },
  { id: 'ciorbe', name: { ro: 'Ciorbe / Supe', en: 'Traditional Soups' }, icon: '🍲', description: { ro: 'Ciorbe ardelenești proaspete servite cu smântână și ardei', en: 'Fresh Transylvanian soups served with sour cream and hot pepper' } },
  { id: 'platouri', name: { ro: 'Platouri', en: 'Sharing Platters' }, icon: '🍱', description: { ro: 'Platouri generoase ideale pentru familie și prieteni', en: 'Generous platters ideal for sharing with family and friends' } },
  { id: 'pui-rata', name: { ro: 'Preparate din Pui & Rață', en: 'Poultry & Duck Specialties' }, icon: '🍗', description: { ro: 'Specialități franțuzești și ardelenești din pui și rață', en: 'French and Transylvanian chicken & duck specialties' } },
  { id: 'vita', name: { ro: 'Preparate din Vită', en: 'Beef & Steak House' }, icon: '🥩', description: { ro: 'Fripturi premium, obrăjori fragezi și T-Bone suculent', en: 'Premium steaks, tender beef cheeks, and juicy T-Bone' } },
  { id: 'porc', name: { ro: 'Preparate din Porc', en: 'Pork Specialties' }, icon: '🍖', description: { ro: 'Ceafă la grătar, ciolan domnesc, tochitură și scăriță gigant', en: 'Grilled pork neck, royal pork knuckle, and giant BBQ ribs' } },
  { id: 'peste', name: { ro: 'Pește & Fructe de Mare', en: 'Fish & Seafood' }, icon: '🐟', description: { ro: 'Somon teriyaki, păstrăv, doradă și tigaie cu fructe de mare', en: 'Teriyaki salmon fillet, trout, sea bream, and spicy seafood pan' } },
  { id: 'paste-risotto', name: { ro: 'Paste & Risotto', en: 'Pasta & Risotto' }, icon: '🍝', description: { ro: 'Retete italienești autentice cu creveți, somon și hribi', en: 'Authentic Italian pasta and risottos with prawns, salmon, and porcini' } },
  { id: 'pizza', name: { ro: 'Pizza & Focaccia', en: 'Pizza & Focaccia' }, icon: '🍕', description: { ro: 'Pizza pe vatră cu blat fraged și ingrediente alese', en: 'Artisanal hearth-baked pizza with fresh toppings' } },
  { id: 'garnituri', name: { ro: 'Garnituri, Sosuri & Extra', en: 'Sides & House Sauces' }, icon: '🍟', description: { ro: 'Cartofi aurii, piure, legume la grătar și sosuri de casă', en: 'Golden potatoes, mashed potatoes, grilled veggies & house sauces' } },
  { id: 'salate', name: { ro: 'Salate Aperitiv & Însoțiri', en: 'Fresh Salads' }, icon: '🥗', description: { ro: 'Salate proaspete, Cezar, Grecească și murături de casă', en: 'Fresh gourmet salads, Caesar, Greek, and house pickles' } },
  { id: 'desert', name: 'Desert', icon: '🍰', name: { ro: 'Desert', en: 'Desserts' }, description: { ro: 'Papanași calzi, vulcan de ciocolată, tiramisu și cheesecake', en: 'Warm papanași, lava cake, tiramisu, and berry cheesecake' } },
  { id: 'traditionale', name: { ro: 'Tradiționale de Sărbători', en: 'Traditional Feast Specialties' }, icon: '✨', description: { ro: 'Sarmale cu ciolan, platou tradițional și prăjituri de casă', en: 'Traditional cabbage rolls with pork knuckle & festive sweets' } },
  { id: 'racoritoare', name: { ro: 'Băuturi Răcoritoare, Cafea & Ceai', en: 'Soft Drinks, Coffee & Tea' }, icon: '🥤', description: { ro: 'Limonadă proaspătă, fresh-uri, espresso și latte-uri aromate', en: 'Fresh lemonade, fresh juices, espresso, and flavored lattes' } },
  { id: 'cocktailuri', name: { ro: 'Cocktailuri & Tării', en: 'Cocktails & Spirits' }, icon: '🍸', description: { ro: 'Cocktailuri alcoolice și non-alcoolice, spirtoase fine', en: 'Alcoholic & mocktail drinks, fine spirits and liqueurs' } },
  { id: 'vinuri', name: { ro: 'Vinuri & Alcoolice', en: 'Wines & Fine Spirits' }, icon: '🍷', description: { ro: 'Selecție de vinuri nobile din podgoriile românești', en: 'Selection of noble wines from top Romanian vineyards' } },
  { id: 'bere', name: { ro: 'Bere', en: 'Beers' }, icon: '🍺', description: { ro: 'Bere la sticlă, doză și draft proaspăt', en: 'Bottled, canned, and fresh draft beers' } },
  { id: 'ambalaje', name: { ro: 'Ambalaje la Pachet', en: 'Takeaway Packaging' }, icon: '🛍️', description: { ro: 'Cutii pizza, caserole termice și pungi biodegradabile', en: 'Pizza boxes, thermal containers, and eco bags' } }
];

export const MENU_ITEMS = [
  // --- MIC DEJUN ---
  {
    id: 'md-1',
    category: 'mic-dejun',
    name: { ro: 'Mic Dejun Clasic', en: 'Classic Breakfast' },
    weight: '300g',
    price: 25,
    ingredients: { ro: 'Ouă ochiuri (2 buc), bacon prăjit, roșie, castravete, brânză telemea, pâine prăjită.', en: 'Fried eggs (2 pcs), crispy bacon, tomato, cucumber, feta cheese, toast.' },
    allergens: [1, 3, 7],
    isFrozen: false,
    nutrition: { energyKcal: 235, energyKj: 983, fats: 16.2, saturatedFats: 6.8, carbs: 12.4, sugars: 1.8, protein: 11.5, salt: 1.4 }
  },
  {
    id: 'md-2',
    category: 'mic-dejun',
    name: { ro: 'Mic Dejun cu Cartofi și Slănină', en: 'Pan-Fried Potatoes & Bacon Breakfast' },
    weight: '250g',
    price: 28,
    ingredients: { ro: 'Cartofi rumeniți, slănină afumată prăjită, ochiuri de ou, ceapă verde.', en: 'Golden pan-fried potatoes, smoked bacon, fried eggs, green onion.' },
    allergens: [3],
    isFrozen: true,
    nutrition: { energyKcal: 290, energyKj: 1213, fats: 21.0, saturatedFats: 8.5, carbs: 14.5, sugars: 1.2, protein: 9.8, salt: 1.6 }
  },
  {
    id: 'md-3',
    category: 'mic-dejun',
    name: { ro: 'Omletă cu Șuncă și Cașcaval', en: 'Ham & Cheese Omelette' },
    weight: '225g',
    price: 28,
    ingredients: { ro: '3 ouă proaspete, șuncă presată de porc, cașcaval maturat, unt, roșie.', en: '3 fresh eggs, pork ham, aged yellow cheese, butter, tomato.' },
    allergens: [3, 7],
    isFrozen: false,
    nutrition: { energyKcal: 240, energyKj: 1004, fats: 17.5, saturatedFats: 8.0, carbs: 3.2, sugars: 1.0, protein: 16.8, salt: 1.5 }
  },
  {
    id: 'md-4',
    category: 'mic-dejun',
    name: { ro: 'Omletă Țărănească', en: 'Farmer\'s Omelette' },
    weight: '300g',
    price: 30,
    ingredients: { ro: 'Ouă, cârnați afumați, ardei gras, ceapă, ciuperci, cașcaval.', en: 'Eggs, smoked sausages, bell pepper, onion, mushrooms, cheese.' },
    allergens: [3, 7],
    isFrozen: false,
    nutrition: { energyKcal: 260, energyKj: 1087, fats: 19.0, saturatedFats: 7.9, carbs: 4.5, sugars: 1.6, protein: 17.2, salt: 1.8 }
  },
  {
    id: 'md-5',
    category: 'mic-dejun',
    name: { ro: 'Marissa Breakfast Special', en: 'Marissa Special Gourmet Breakfast' },
    weight: '370g',
    price: 35,
    ingredients: { ro: 'Omletă fluffy cu verdețuri, croissant cu unt, cremă de brânză, avocado, somon afumat, roșii cherry.', en: 'Fluffy herb omelette, butter croissant, cream cheese, avocado, smoked salmon, cherry tomatoes.' },
    allergens: [1, 3, 4, 7],
    isFrozen: true,
    nutrition: { energyKcal: 275, energyKj: 1150, fats: 18.5, saturatedFats: 7.2, carbs: 13.0, sugars: 2.1, protein: 14.0, salt: 1.3 }
  },
  {
    id: 'md-6',
    category: 'mic-dejun',
    name: { ro: 'Platou Mic Dejun Divers', en: 'Assorted Breakfast Platter' },
    weight: '25/80/100/25g',
    price: 25,
    ingredients: { ro: 'Unt, gem de casă, cașcaval, șuncă praga, roșii, pâine prăjită.', en: 'Butter, homemade jam, yellow cheese, Prague ham, tomatoes, toast.' },
    allergens: [1, 7],
    isFrozen: false,
    nutrition: { energyKcal: 220, energyKj: 920, fats: 12.0, saturatedFats: 6.0, carbs: 18.5, sugars: 9.5, protein: 9.5, salt: 1.2 }
  },
  {
    id: 'md-7',
    category: 'mic-dejun',
    name: { ro: 'Bruschete cu Roșii și Usturoi', en: 'Tomato & Garlic Bruschetta' },
    weight: '300g',
    price: 25,
    ingredients: { ro: 'Pâine artizanală prăjită, roșii proaspete cuburi, busuioc, usturoi, ulei de măsline extravirgin.', en: 'Toasted artisan bread, fresh diced tomatoes, basil, garlic, extra virgin olive oil.' },
    allergens: [1],
    isFrozen: false,
    nutrition: { energyKcal: 165, energyKj: 690, fats: 6.5, saturatedFats: 0.9, carbs: 22.0, sugars: 3.2, protein: 4.8, salt: 0.9 }
  },
  {
    id: 'md-8',
    category: 'mic-dejun',
    name: { ro: 'Bacon / Slănină Prăjită', en: 'Crispy Bacon / Fried Pork Fatback' },
    weight: '100g',
    price: 18,
    ingredients: { ro: 'Fâșii de bacon sau slănină tradițională rumenite crispy.', en: 'Crispy fried bacon strips or traditional Romanian pork fatback.' },
    allergens: [],
    isFrozen: false,
    nutrition: { energyKcal: 480, energyKj: 2008, fats: 45.0, saturatedFats: 16.5, carbs: 0.5, sugars: 0.1, protein: 18.0, salt: 2.5 }
  },
  {
    id: 'md-9',
    category: 'mic-dejun',
    name: { ro: 'Cremvurști Fierți', en: 'Boiled Frankfurters' },
    weight: '100g',
    price: 12,
    ingredients: { ro: 'Cremvurști din carne de porc și pui, muștar.', en: 'Pork & chicken boiled sausages served with mustard.' },
    allergens: [10],
    isFrozen: false,
    nutrition: { energyKcal: 260, energyKj: 1087, fats: 22.0, saturatedFats: 8.5, carbs: 1.5, sugars: 0.5, protein: 13.0, salt: 2.1 }
  },
  {
    id: 'md-10',
    category: 'mic-dejun',
    name: { ro: 'Telemea de Vacă / Oaie', en: 'Romanian Salted Feta Cheese (Telemea)' },
    weight: '100g',
    price: 12,
    ingredients: { ro: 'Brânză telemea tradițională românească maturată.', en: 'Traditional aged Romanian cow or sheep salted cheese.' },
    allergens: [7],
    isFrozen: false,
    nutrition: { energyKcal: 270, energyKj: 1129, fats: 21.5, saturatedFats: 14.0, carbs: 1.0, sugars: 0.8, protein: 17.5, salt: 2.8 }
  },
  {
    id: 'md-11',
    category: 'mic-dejun',
    name: { ro: 'Cașcaval Rucăr', en: 'Traditional Romanian Yellow Cheese' },
    weight: '100g',
    price: 12,
    ingredients: { ro: 'Cașcaval din lapte de vacă opărit.', en: 'Classic Romanian scalded cow milk yellow cheese.' },
    allergens: [7],
    isFrozen: false,
    nutrition: { energyKcal: 330, energyKj: 1380, fats: 26.0, saturatedFats: 17.0, carbs: 1.2, sugars: 0.5, protein: 23.0, salt: 1.9 }
  },
  {
    id: 'md-12',
    category: 'mic-dejun',
    name: { ro: 'Lapte Proaspăt', en: 'Fresh Whole Milk' },
    weight: '200ml',
    price: 8,
    ingredients: { ro: 'Lapte integral pasteurizat 3.5% grăsime.', en: 'Pasteurized whole milk 3.5% fat.' },
    allergens: [7],
    isFrozen: false,
    nutrition: { energyKcal: 64, energyKj: 268, fats: 3.5, saturatedFats: 2.2, carbs: 4.7, sugars: 4.7, protein: 3.3, salt: 0.1 }
  },
  {
    id: 'md-13',
    category: 'mic-dejun',
    name: { ro: 'Iaurt Natural', en: 'Natural Creamy Yogurt' },
    weight: '1 glass (150g)',
    price: 8,
    ingredients: { ro: 'Iaurt cremos 3.5% grăsime.', en: 'Fresh creamy plain yogurt 3.5% fat.' },
    allergens: [7],
    isFrozen: false,
    nutrition: { energyKcal: 65, energyKj: 272, fats: 3.5, saturatedFats: 2.3, carbs: 4.2, sugars: 4.2, protein: 4.1, salt: 0.1 }
  },
  {
    id: 'md-14',
    category: 'mic-dejun',
    name: { ro: 'Unt Porție', en: 'Butter Portion' },
    weight: '25g',
    price: 5,
    ingredients: { ro: 'Unt superior 82% grăsime.', en: 'Premium butter 82% fat.' },
    allergens: [7],
    isFrozen: false,
    nutrition: { energyKcal: 740, energyKj: 3096, fats: 82.0, saturatedFats: 54.0, carbs: 0.6, sugars: 0.6, protein: 0.8, salt: 0.05 }
  },
  {
    id: 'md-15',
    category: 'mic-dejun',
    name: { ro: 'Cacao cu Lapte', en: 'Hot Chocolate Cocoa with Milk' },
    weight: '200ml',
    price: 12,
    ingredients: { ro: 'Lapte cald, cacao olandeză, zahăr.', en: 'Warm milk, Dutch cocoa powder, sugar.' },
    allergens: [7],
    isFrozen: false,
    nutrition: { energyKcal: 95, energyKj: 397, fats: 3.8, saturatedFats: 2.4, carbs: 11.5, sugars: 10.8, protein: 3.6, salt: 0.12 }
  },
  {
    id: 'md-16',
    category: 'mic-dejun',
    name: { ro: 'Cereale cu Lapte', en: 'Cereal Bowl with Milk' },
    weight: '200ml/50g',
    price: 15,
    ingredients: { ro: 'Fulgide porumb/ciocolată, lapte cald sau rece.', en: 'Corn flakes or chocolate cereals served with hot/cold milk.' },
    allergens: [1, 7],
    isFrozen: false,
    nutrition: { energyKcal: 180, energyKj: 753, fats: 4.1, saturatedFats: 2.1, carbs: 30.5, sugars: 12.0, protein: 5.2, salt: 0.4 }
  },
  {
    id: 'md-17',
    category: 'mic-dejun',
    name: { ro: 'Gem de Afine / Căpșuni', en: 'Blueberry / Strawberry Jam' },
    weight: '50g',
    price: 5,
    ingredients: { ro: 'Gem din fructe cu conținut ridicat de fruct.', en: 'Fruit jam portion high fruit content.' },
    allergens: [],
    isFrozen: false,
    nutrition: { energyKcal: 240, energyKj: 1004, fats: 0.1, saturatedFats: 0.0, carbs: 59.0, sugars: 54.0, protein: 0.4, salt: 0.02 }
  },
  {
    id: 'md-18',
    category: 'mic-dejun',
    name: { ro: 'Miere de Polifloră', en: 'Pure Honey Portion' },
    weight: '50g',
    price: 5,
    ingredients: { ro: 'Miere naturală de albine.', en: '100% pure natural wildflower honey.' },
    allergens: [],
    isFrozen: false,
    nutrition: { energyKcal: 320, energyKj: 1338, fats: 0.0, saturatedFats: 0.0, carbs: 80.0, sugars: 80.0, protein: 0.3, salt: 0.01 }
  },

  // --- GUSTĂRI RECI & CALDE ---
  {
    id: 'gst-1',
    category: 'gustari',
    name: { ro: 'Mici Tradiționali', en: 'Traditional Romanian "Mici" (Minced Rolls)' },
    weight: '40g / pc',
    price: 7,
    ingredients: { ro: 'Carne tocată amestec vită și porc, condimente naturale, usturoi, bicarbonat de sodiu, muștar.', en: 'Minced beef & pork skinless sausages, natural garlic & spices, served with mustard.' },
    allergens: [10],
    isFrozen: true,
    nutrition: { energyKcal: 285, energyKj: 1192, fats: 23.5, saturatedFats: 9.8, carbs: 2.1, sugars: 0.4, protein: 16.0, salt: 1.8 }
  },
  {
    id: 'gst-2',
    category: 'gustari',
    name: { ro: 'Cașcaval Pane', en: 'Fried Breaded Yellow Cheese' },
    weight: '180g',
    price: 28,
    ingredients: { ro: 'Cașcaval feliat, pesmet auriu, ou, făină de grâu.', en: 'Sliced yellow cheese, golden breadcrumbs, egg, wheat flour.' },
    allergens: [1, 3, 7],
    isFrozen: true,
    nutrition: { energyKcal: 345, energyKj: 1443, fats: 22.0, saturatedFats: 12.5, carbs: 18.0, sugars: 1.5, protein: 18.5, salt: 1.9 }
  },
  {
    id: 'gst-3',
    category: 'gustari',
    name: { ro: 'Mămăligă cu Brânză și Smântână', en: 'Polenta with Cottage Cheese & Sour Cream' },
    weight: '250/150/70g',
    price: 35,
    ingredients: { ro: 'Mămăliguță caldă din mălai de porumb, brânză telemea rasă, smântână grasă 20%.', en: 'Warm cornmeal polenta, grated salted cheese, 20% rich sour cream.' },
    allergens: [7],
    isFrozen: false,
    nutrition: { energyKcal: 210, energyKj: 878, fats: 11.5, saturatedFats: 7.2, carbs: 20.0, sugars: 1.8, protein: 7.5, salt: 1.2 }
  },

  // --- FAST FOOD ---
  {
    id: 'ff-1',
    category: 'fast-food',
    name: { ro: 'Burger de Vită Black Angus', en: 'Black Angus Beef Burger' },
    weight: '450g',
    price: 49,
    ingredients: { ro: 'Chiftea vită Black Angus 200g, chiflă brioche cu susan, brânză cheddar, bacon crispy, sos burger, salată, roșii, castraveți murați, cartofi prăjiți incluzi.', en: '200g Black Angus beef patty, sesame brioche bun, cheddar cheese, crispy bacon, burger sauce, lettuce, tomatoes, pickles, french fries included.' },
    allergens: [1, 3, 7, 10, 11],
    isFrozen: true,
    nutrition: { energyKcal: 265, energyKj: 1108, fats: 14.8, saturatedFats: 6.2, carbs: 21.0, sugars: 3.5, protein: 12.8, salt: 1.4 }
  },
  {
    id: 'ff-2',
    category: 'fast-food',
    name: { ro: 'Burger Crispy Chicken', en: 'Crispy Chicken Burger' },
    weight: '350g',
    price: 38,
    ingredients: { ro: 'Piept de pui crispy în crustă de fulgi de porumb, chiflă prăjită, maioneză cu usturoi, salată iceberg, cartofi prăjiți.', en: 'Cornflake-crusted crispy chicken breast, toasted bun, garlic mayo, iceberg lettuce, french fries.' },
    allergens: [1, 3, 7, 10],
    isFrozen: true,
    nutrition: { energyKcal: 248, energyKj: 1037, fats: 12.5, saturatedFats: 3.8, carbs: 23.5, sugars: 2.8, protein: 11.2, salt: 1.3 }
  },
  {
    id: 'ff-3',
    category: 'fast-food',
    name: { ro: 'Shaorma la Farfurie Marissa', en: 'Marissa Platter Shaorma' },
    weight: '450g',
    price: 38,
    ingredients: { ro: 'Carne rotisată de pui, cartofi prăjiți, varză albă, castraveți murați, sos de usturoi, sos de roșii picant, lipie caldă.', en: 'Rotisserie chicken meat, fries, white cabbage, pickled cucumbers, garlic sauce, spicy tomato sauce, warm pita.' },
    allergens: [1, 3, 7, 10],
    isFrozen: true,
    nutrition: { energyKcal: 230, energyKj: 962, fats: 11.8, saturatedFats: 3.2, carbs: 20.2, sugars: 2.4, protein: 11.0, salt: 1.5 }
  },

  // --- CIORBE / SUPE ---
  {
    id: 'crb-1',
    category: 'ciorbe',
    name: { ro: 'Ciorbă de Burtă', en: 'Traditional Romanian Tripe Soup' },
    weight: '100/300ml',
    price: 29,
    ingredients: { ro: 'Burtă de vită feliată, supă concentrată de oase, smântână 20%, gălbenuș de ou, usturoi, gogoșari murați, oțet.', en: 'Sliced beef tripe, rich bone broth, sour cream, egg yolk, garlic, pickled red peppers, vinegar.' },
    allergens: [3, 7, 9],
    isFrozen: true,
    nutrition: { energyKcal: 115, energyKj: 481, fats: 7.8, saturatedFats: 4.2, carbs: 3.1, sugars: 1.5, protein: 8.2, salt: 1.1 }
  },
  {
    id: 'crb-2',
    category: 'ciorbe',
    name: { ro: 'Ciorbă Rădăuțeană de Pui', en: 'Garlic Chicken Soup (Rădăuțeană)' },
    weight: '60/340ml',
    price: 25,
    ingredients: { ro: 'Piept de pui fâșii, smântână, gălbenuș de ou, usturoi, ardei gras, țelină, morcov.', en: 'Shredded chicken breast, sour cream, egg yolk, garlic, sweet pepper, celery, carrots.' },
    allergens: [3, 7, 9],
    isFrozen: true,
    nutrition: { energyKcal: 105, energyKj: 439, fats: 6.5, saturatedFats: 3.5, carbs: 3.5, sugars: 1.8, protein: 8.0, salt: 1.0 }
  },
  {
    id: 'crb-3',
    category: 'ciorbe',
    name: { ro: 'Babgulyas Tradițional Ardelean', en: 'Traditional Transylvanian Bean Goulash (Babgulyas)' },
    weight: '100/300ml',
    price: 35,
    ingredients: { ro: 'Carne de vită și afumătură de porc, fasole boabe, găluște de făină, morcov, țelină, boia dulce, chimen.', en: 'Beef chunks & smoked pork, kidney beans, homemade pasta pinch dumplings, paprika, caraway.' },
    allergens: [1, 3, 9],
    isFrozen: true,
    nutrition: { energyKcal: 145, energyKj: 606, fats: 7.2, saturatedFats: 2.8, carbs: 12.0, sugars: 2.0, protein: 9.2, salt: 1.3 }
  },

  // --- PREPARATE DIN VITĂ & PORC & PUI ---
  {
    id: 'vit-1',
    category: 'vita',
    name: { ro: 'Mușchi de Vită cu Sos de Hribi', en: 'Beef Tenderloin with Porcini Mushroom Sauce' },
    weight: '150/200/50g',
    price: 89,
    ingredients: { ro: 'Mușchi de vită maturat perpelit pe grătar, sos din hribi de pădure cu smântână și unt, cartofi dauphinoise.', en: 'Aged grilled beef fillet, wild porcini mushroom cream sauce, dauphinoise potatoes.' },
    allergens: [7],
    isFrozen: true,
    nutrition: { energyKcal: 195, energyKj: 815, fats: 11.0, saturatedFats: 5.4, carbs: 5.2, sugars: 1.1, protein: 19.0, salt: 1.0 }
  },
  {
    id: 'vit-2',
    category: 'vita',
    name: { ro: 'T-Bone Steak de Vită Premium', en: 'Premium Beef T-Bone Steak' },
    weight: '380/200/80g',
    price: 125,
    ingredients: { ro: 'Antricot și mușchi pe os de vită, unt aromatizat cu ierburi, legume la grătar, sare roz de Himalaya.', en: 'T-bone beef steak, herb compound butter, grilled vegetables, Himalayan pink salt.' },
    allergens: [7],
    isFrozen: true,
    nutrition: { energyKcal: 230, energyKj: 962, fats: 14.5, saturatedFats: 6.8, carbs: 2.1, sugars: 0.5, protein: 22.5, salt: 1.2 }
  },

  // --- PASTE & PIZZA ---
  {
    id: 'pst-r-2',
    category: 'paste-risotto',
    name: { ro: 'Spaghete Carbonara Autentice', en: 'Authentic Spaghetti Carbonara' },
    weight: '400g',
    price: 32,
    ingredients: { ro: 'Spaghete, guanciale / bacon crispy, gălbenuș de ou, pecorino romano, piper proaspăt măcinat.', en: 'Spaghetti, crispy guanciale bacon, egg yolk, pecorino romano cheese, cracked black pepper.' },
    allergens: [1, 3, 7],
    isFrozen: false,
    nutrition: { energyKcal: 235, energyKj: 983, fats: 12.5, saturatedFats: 5.8, carbs: 20.5, sugars: 1.1, protein: 10.2, salt: 1.2 }
  },
  {
    id: 'pza-4',
    category: 'pizza',
    name: { ro: 'Pizza Marissa Specială', en: 'Marissa House Special Pizza' },
    weight: '520g',
    price: 35,
    ingredients: { ro: 'Sos roșii, mozzarella, șuncă praga, salam italian, ciuperci, porumb, ardei, măsline.', en: 'Tomato sauce, mozzarella, Prague ham, Italian salami, mushrooms, corn, bell pepper, olives.' },
    allergens: [1, 7],
    isFrozen: true,
    nutrition: { energyKcal: 235, energyKj: 983, fats: 10.5, saturatedFats: 5.1, carbs: 24.8, sugars: 2.8, protein: 10.5, salt: 1.4 }
  },

  // --- DESERT ---
  {
    id: 'dsr-5',
    category: 'desert',
    name: { ro: 'Papanași Tradiționali cu Brânză și Gem', en: 'Traditional Romanian Papanași Donuts' },
    weight: '300g',
    price: 32,
    ingredients: { ro: 'Gogoși din brânză dulce de vacă prăjite, smântână grasă, gem de afine sau vișine.', en: 'Warm fried sweet cottage cheese donuts, thick sour cream, wild blueberry jam.' },
    allergens: [1, 3, 7],
    isFrozen: true,
    nutrition: { energyKcal: 320, energyKj: 1338, fats: 15.5, saturatedFats: 9.2, carbs: 38.0, sugars: 22.0, protein: 8.5, salt: 0.4 }
  },
  {
    id: 'dsr-2',
    category: 'desert',
    name: { ro: 'Vulcan de Ciocolată (Lava Cake)', en: 'Molten Chocolate Lava Cake' },
    weight: '200g',
    price: 28,
    ingredients: { ro: 'Prajitură caldă cu inimă de ciocolată topită, servită cu glob de înghețată de vanilie.', en: 'Warm chocolate cake with oozing chocolate core, served with vanilla ice cream.' },
    allergens: [1, 3, 7],
    isFrozen: true,
    nutrition: { energyKcal: 380, energyKj: 1590, fats: 21.0, saturatedFats: 12.5, carbs: 42.0, sugars: 32.0, protein: 5.8, salt: 0.25 }
  }
];
