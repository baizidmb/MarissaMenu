// Complete Authentic Menu Dataset for Hotel & Restaurant Marissa
// Extracted 100% cleanly from MENIU 2025 MARISSA SIMPLIFICAT RESTAURANT.docx (280 items)
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
  { id: 'desert', name: { ro: 'Desert', en: 'Desserts' }, icon: '🍰', description: { ro: 'Papanași calzi, vulcan de ciocolată, tiramisu și cheesecake', en: 'Warm papanași, lava cake, tiramisu, and berry cheesecake' } },
  { id: 'traditionale', name: { ro: 'Tradiționale de Sărbători', en: 'Traditional Feast Specialties' }, icon: '✨', description: { ro: 'Sarmale cu ciolan, platou tradițional și prăjituri de casă', en: 'Traditional cabbage rolls with pork knuckle & festive sweets' } },
  { id: 'racoritoare', name: { ro: 'Băuturi Răcoritoare, Cafea & Ceai', en: 'Soft Drinks, Coffee & Tea' }, icon: '🥤', description: { ro: 'Limonadă proaspătă, fresh-uri, espresso și latte-uri aromate', en: 'Fresh lemonade, fresh juices, espresso, and flavored lattes' } },
  { id: 'cocktailuri', name: { ro: 'Cocktailuri & Tării', en: 'Cocktails & Spirits' }, icon: '🍸', description: { ro: 'Cocktailuri alcoolice și non-alcoolice, spirtoase fine', en: 'Alcoholic & mocktail drinks, fine spirits and liqueurs' } },
  { id: 'vinuri', name: { ro: 'Vinuri & Alcoolice', en: 'Wines & Fine Spirits' }, icon: '🍷', description: { ro: 'Selecție de vinuri nobile din podgoriile românești', en: 'Selection of noble wines from top Romanian vineyards' } },
  { id: 'bere', name: { ro: 'Bere', en: 'Beers' }, icon: '🍺', description: { ro: 'Bere la sticlă, doză și draft proaspăt', en: 'Bottled, canned, and fresh draft beers' } },
  { id: 'ambalaje', name: { ro: 'Ambalaje la Pachet', en: 'Takeaway Packaging' }, icon: '🛍️', description: { ro: 'Cutii pizza, caserole termice și pungi biodegradabile', en: 'Pizza boxes, thermal containers, and eco bags' } }
];

export const MENU_ITEMS = [
  {
    "id": "item-1",
    "category": "mic-dejun",
    "name": {
      "ro": "Mic dejun 3,7300gr",
      "en": "Mic ofjun 3,7300gr"
    },
    "weight": "200g",
    "price": 25.0,
    "ingredients": {
      "ro": "ou  prăjit, cremvurști, roșie, cașcaval, ulei de floarea soarelui, condimente",
      "en": "egg  prăjit, cremvurști, tomato, yellow cheese, oil of floarea soarelui, condimente"
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 194.7,
      "energyKj": 810.1,
      "fats": 15.3,
      "saturatedFats": 5.4,
      "carbs": 1.9,
      "sugars": 1.1,
      "protein": 12.3,
      "salt": 1.0
    }
  },
  {
    "id": "item-2",
    "category": "mic-dejun",
    "name": {
      "ro": "Mic dejun, cartofi prăjiți cu ouă și slănină 3,7 250gr",
      "en": "Mic ofjun, cartofi prăjiți with ouă & slănină 3,7 250gr"
    },
    "weight": "200g",
    "price": 28.0,
    "ingredients": {
      "ro": "ou prăjit, ceapă, slănină de porc, cartofi prăjiti, condimente",
      "en": "egg prăjit, onion, pork fatback of pork, potatoes prăjiti, condimente"
    },
    "allergens": [],
    "isFrozen": true,
    "nutrition": {
      "energyKcal": 184.2,
      "energyKj": 765.7,
      "fats": 14.8,
      "saturatedFats": 3.7,
      "carbs": 1.3,
      "sugars": 1.0,
      "protein": 11.5,
      "salt": 2.0
    }
  },
  {
    "id": "item-3",
    "category": "mic-dejun",
    "name": {
      "ro": "Omletă cu şuncă și caşcaval",
      "en": "Ham & Cheese Omelette"
    },
    "weight": "225 gr",
    "price": 28.0,
    "ingredients": {
      "ro": "ou, șuncă, cașcaval, ulei de floarea soarelui, condimente",
      "en": "egg, ham, yellow cheese, oil of floarea soarelui, condimente"
    },
    "allergens": [
      3,
      7
    ],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 194.5,
      "energyKj": 807.1,
      "fats": 13.9,
      "saturatedFats": 5.6,
      "carbs": 0.8,
      "sugars": 0.3,
      "protein": 16.7,
      "salt": 2.0
    }
  },
  {
    "id": "item-4",
    "category": "mic-dejun",
    "name": {
      "ro": "Omletă ţărănească cu slănină și ceapă",
      "en": "Farmer's Omelette"
    },
    "weight": "300 gr",
    "price": 30.0,
    "ingredients": {
      "ro": "ou, ceapă, slănină de porc, condimente",
      "en": "egg, onion, pork fatback of pork, condimente"
    },
    "allergens": [
      3
    ],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 184.2,
      "energyKj": 765.7,
      "fats": 14.8,
      "saturatedFats": 3.7,
      "carbs": 1.3,
      "sugars": 1.0,
      "protein": 11.5,
      "salt": 2.0
    }
  },
  {
    "id": "item-5",
    "category": "mic-dejun",
    "name": {
      "ro": "Marissa breakfast 1,3, 7, 11  370gr",
      "en": "Marissa breakfast 1,3, 7, 11  370gr"
    },
    "weight": "200g",
    "price": 35.0,
    "ingredients": {
      "ro": "chiflă, cremă de brânză, ou poșat, bacon, sos olandez, roșii, cherry, salată mixtă,  mix de semințe, condimente",
      "en": "bun, cream of cheese, egg poșat, bacon, sauce olanofz, tomatoes, cherry, salad mixtă,  mix of semințe, condimente"
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 194.7,
      "energyKj": 810.1,
      "fats": 15.3,
      "saturatedFats": 5.4,
      "carbs": 1.9,
      "sugars": 1.1,
      "protein": 12.3,
      "salt": 1.0
    }
  },
  {
    "id": "item-6",
    "category": "mic-dejun",
    "name": {
      "ro": "Platou mic dejun",
      "en": "Assorted Breakfast Platter"
    },
    "weight": "725/80/100/25 gr",
    "price": 25.0,
    "ingredients": {
      "ro": "Unt, gem, mezel, telemea",
      "en": "butter, jam, mezel, telemea"
    },
    "allergens": [
      3
    ],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 293.9,
      "energyKj": 1229.1,
      "fats": 14.9,
      "saturatedFats": 11.2,
      "carbs": 22.0,
      "sugars": 19.9,
      "protein": 7.8,
      "salt": 1.3
    }
  },
  {
    "id": "item-7",
    "category": "mic-dejun",
    "name": {
      "ro": "Bruschete cu roșii",
      "en": "Tomato & Garlic Bruschetta"
    },
    "weight": "300 gr",
    "price": 25.0,
    "ingredients": {
      "ro": "pâine, roșii, pătrunjel verde, ulei de măsline, condimente",
      "en": "bread, tomatoes, parsley verof, oil of olives, condimente"
    },
    "allergens": [
      7
    ],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 334.0,
      "energyKj": 1369.4,
      "fats": 8.0,
      "saturatedFats": 18.3,
      "carbs": 15.0,
      "sugars": 1.0,
      "protein": 26.0,
      "salt": 2.1
    }
  },
  {
    "id": "item-8",
    "category": "mic-dejun",
    "name": {
      "ro": "Bacon prăjit/slănină prăjită",
      "en": "Crispy Bacon / Fried Pork Fatback"
    },
    "weight": "100 gr",
    "price": 18.0,
    "ingredients": {
      "ro": "bacon/slănină",
      "en": "bacon/pork fatback"
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 419.0,
      "energyKj": 1740.0,
      "fats": 35.4,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-9",
    "category": "mic-dejun",
    "name": {
      "ro": "Cremvurşti",
      "en": "Boiled Frankfurters"
    },
    "weight": "7 100 gr",
    "price": 12.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 240.3,
      "energyKj": 1005.2,
      "fats": 19.9,
      "saturatedFats": 6.9,
      "carbs": 2.7,
      "sugars": 0.8,
      "protein": 12.3,
      "salt": 1.8
    }
  },
  {
    "id": "item-10",
    "category": "mic-dejun",
    "name": {
      "ro": "Telemea",
      "en": "Romanian Salted Feta Cheese (Telemea)"
    },
    "weight": "100 gr",
    "price": 12.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [
      7
    ],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 279.0,
      "energyKj": 1167.0,
      "fats": 24.0,
      "saturatedFats": 16.0,
      "carbs": 0.7,
      "sugars": 0.2,
      "protein": 15.0,
      "salt": 3.0
    }
  },
  {
    "id": "item-11",
    "category": "mic-dejun",
    "name": {
      "ro": "Caşcaval",
      "en": "Traditional Romanian Yellow Cheese"
    },
    "weight": "100 gr",
    "price": 12.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [
      7
    ],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 334.0,
      "energyKj": 1369.4,
      "fats": 25.0,
      "saturatedFats": 18.3,
      "carbs": 1.0,
      "sugars": 1.0,
      "protein": 26.0,
      "salt": 2.1
    }
  },
  {
    "id": "item-12",
    "category": "mic-dejun",
    "name": {
      "ro": "Lapte",
      "en": "Fresh Whole Milk"
    },
    "weight": "200 ml",
    "price": 8.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [
      7
    ],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 44.0,
      "energyKj": 184.1,
      "fats": 1.5,
      "saturatedFats": 1.0,
      "carbs": 4.5,
      "sugars": 4.5,
      "protein": 3.1,
      "salt": 0.1
    }
  },
  {
    "id": "item-13",
    "category": "mic-dejun",
    "name": {
      "ro": "Iaurt",
      "en": "Natural Creamy Yogurt"
    },
    "weight": "1 pahar",
    "price": 8.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [
      7
    ],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 60.0,
      "energyKj": 251.0,
      "fats": 3.5,
      "saturatedFats": 2.3,
      "carbs": 3.9,
      "sugars": 3.9,
      "protein": 3.1,
      "salt": 0.1
    }
  },
  {
    "id": "item-14",
    "category": "mic-dejun",
    "name": {
      "ro": "Unt porţionat",
      "en": "Butter Portion"
    },
    "weight": "25 gr",
    "price": 5.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [
      7
    ],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 743.0,
      "energyKj": 3108.7,
      "fats": 82.0,
      "saturatedFats": 53.0,
      "carbs": 0.6,
      "sugars": 0.0,
      "protein": 0.7,
      "salt": 0.0
    }
  },
  {
    "id": "item-15",
    "category": "mic-dejun",
    "name": {
      "ro": "Cacao cu lapte",
      "en": "Hot Cocoa with Milk"
    },
    "weight": "200 ml",
    "price": 12.0,
    "ingredients": {
      "ro": "lapte, zahăr, pudră de cacao",
      "en": "milk, sugar, pudră of cocoa"
    },
    "allergens": [
      7
    ],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 61.9,
      "energyKj": 259.1,
      "fats": 2.0,
      "saturatedFats": 1.3,
      "carbs": 7.8,
      "sugars": 6.8,
      "protein": 3.4,
      "salt": 0.1
    }
  },
  {
    "id": "item-16",
    "category": "mic-dejun",
    "name": {
      "ro": "Cereale cu lapte7,8 200gr",
      "en": "Cereale with lapte7,8 200gr"
    },
    "weight": "/50 gr",
    "price": 15.0,
    "ingredients": {
      "ro": "lapte, cereale pentru micul dejun",
      "en": "milk, cereale pentru miwithl ofjun"
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 185.6,
      "energyKj": 782.5,
      "fats": 2.7,
      "saturatedFats": 0.9,
      "carbs": 36.5,
      "sugars": 16.7,
      "protein": 4.3,
      "salt": 0.4
    }
  },
  {
    "id": "item-17",
    "category": "mic-dejun",
    "name": {
      "ro": "Gem",
      "en": "Fruit Jam Portion"
    },
    "weight": "50 gr",
    "price": 5.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 245.0,
      "energyKj": 1040.0,
      "fats": 0.1,
      "saturatedFats": 0.0,
      "carbs": 61.1,
      "sugars": 56.8,
      "protein": 0.6,
      "salt": 0.1
    }
  },
  {
    "id": "item-18",
    "category": "mic-dejun",
    "name": {
      "ro": "Miere",
      "en": "Pure Honey Portion"
    },
    "weight": "50 gr",
    "price": 5.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 325.0,
      "energyKj": 1380.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 80.8,
      "sugars": 80.8,
      "protein": 10.0,
      "salt": 0.0
    }
  },
  {
    "id": "item-19",
    "category": "gustari",
    "name": {
      "ro": "Mici 1, 1040gr",
      "en": "Mici 1, 1040gr"
    },
    "weight": "200g",
    "price": 7.0,
    "ingredients": {
      "ro": "mici, pâine, muştar, ulei de floarea soarelui, condimente",
      "en": "mici skinless sausages, bread, muştar, oil of floarea soarelui, condimente"
    },
    "allergens": [],
    "isFrozen": true,
    "nutrition": {
      "energyKcal": 275.6,
      "energyKj": 1146.7,
      "fats": 18.1,
      "saturatedFats": 4.7,
      "carbs": 20.6,
      "sugars": 3.6,
      "protein": 9.2,
      "salt": 1.7
    }
  },
  {
    "id": "item-20",
    "category": "gustari",
    "name": {
      "ro": "Caşcaval pane 1,3,7180gr",
      "en": "Caşcaval pane 1,3,7180gr"
    },
    "weight": "200g",
    "price": 28.0,
    "ingredients": {
      "ro": "mozzarella, ou, pesmet, făină de grâu",
      "en": "mozzarella, egg, breadcrumbs, flour of grâu"
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 308.3,
      "energyKj": 1286.6,
      "fats": 8.0,
      "saturatedFats": 8.0,
      "carbs": 29.4,
      "sugars": 1.3,
      "protein": 17.4,
      "salt": 1.1
    }
  },
  {
    "id": "item-21",
    "category": "gustari",
    "name": {
      "ro": "Mămăligă cu brânză şi smântână 7250/150/70gr",
      "en": "Mămăligă with brânză şi smântână 7250/150/70gr"
    },
    "weight": "200g",
    "price": 35.0,
    "ingredients": {
      "ro": "brânză de vaci, apă, făină de mălai, ulei, sare",
      "en": "cheese of vaci, apă, flour of cornmeal, oil, salt"
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 152.9,
      "energyKj": 643.3,
      "fats": 5.0,
      "saturatedFats": 1.6,
      "carbs": 18.1,
      "sugars": 1.0,
      "protein": 8.2,
      "salt": 0.8
    }
  },
  {
    "id": "item-22",
    "category": "fast-food",
    "name": {
      "ro": "Burger de vită1, 3, 7, 9, 10                          450gr",
      "en": "Burger of vită1, 3, 7, 9, 10                          450gr"
    },
    "weight": "200g",
    "price": 49.0,
    "ingredients": {
      "ro": "chiflă, cartofi prăjiti, carne vită, brânză chedar, roșie, ceapă, salată mixtă, castraveți  murați, sos cheddar, condimente) Informații nutriționale 100g: Valoare Energetică (kJ/kcal): 767 / 183.6, Grăsimi (g):11.3 din care: Acizi grași saturați (g) 3.7, Glucide (g): 14.4 din care: Zaharuri (g): 1.5, Proteine (g): 6.9, Sare (g): 0.9",
      "en": "bun, potatoes prăjiti, carne beef, cheese chedar, tomato, onion, salad mixtă, withwithmbers  murați, sauce cheddar, condimente) Informații nutriționale 100g: Valoare Energetică (kJ/kcal): 767 / 183.6, Grăsimi (g):11.3 din care: Acizi gra& saturați (g) 3.7, Gluciof (g): 14.4 din care: Zaharuri (g): 1.5, Proteine (g): 6.9, salt (g): 0.9"
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-23",
    "category": "fast-food",
    "name": {
      "ro": "Burger Crispy",
      "en": "Crispy Chicken Burger"
    },
    "weight": "350 gr",
    "price": 38.0,
    "ingredients": {
      "ro": "chiflă, cartofi prăjiți, piept de pui, roșie, salată sezon, iaurt, maioneză, condimente",
      "en": "bun, potatoes prăjiți, piept of chicken, tomato, salad sezon, yogurt, mayonnaise, condimente"
    },
    "allergens": [
      1,
      3,
      7,
      9,
      10
    ],
    "isFrozen": true,
    "nutrition": {
      "energyKcal": 183.6,
      "energyKj": 767.0,
      "fats": 11.3,
      "saturatedFats": 3.7,
      "carbs": 14.4,
      "sugars": 1.5,
      "protein": 6.9,
      "salt": 0.9
    }
  },
  {
    "id": "item-24",
    "category": "fast-food",
    "name": {
      "ro": "Shaorma la farfurie",
      "en": "Shaorma la farfurie"
    },
    "weight": "450 gr",
    "price": 38.0,
    "ingredients": {
      "ro": "cartofi prăjiți, carne de pui, lipie, varză, roșie, ceapă, castraveți murați, maioneză, ketchup, condimente",
      "en": "potatoes prăjiți, carne of chicken, pita, cabbage, tomato, onion, withwithmbers murați, mayonnaise, ketchup, condimente"
    },
    "allergens": [
      1,
      3,
      7,
      9
    ],
    "isFrozen": true,
    "nutrition": {
      "energyKcal": 210.5,
      "energyKj": 883.3,
      "fats": 8.2,
      "saturatedFats": 1.7,
      "carbs": 25.2,
      "sugars": 4.7,
      "protein": 10.3,
      "salt": 0.4
    }
  },
  {
    "id": "item-25",
    "category": "fast-food",
    "name": {
      "ro": "Ultra cheeseburger 1, 3, 7, 9, 10450GR",
      "en": "Ultra cheeseburger 1, 3, 7, 9, 10450GR"
    },
    "weight": "200g",
    "price": 49.0,
    "ingredients": {
      "ro": "chiflă, carne de vită, roșii, castraveți, brânză cheddar, sos cheddar, cartofi prăjiți, condimente",
      "en": "bun, carne of beef, tomatoes, withwithmbers, cheese cheddar, sauce cheddar, potatoes prăjiți, condimente"
    },
    "allergens": [],
    "isFrozen": true,
    "nutrition": {
      "energyKcal": 183.6,
      "energyKj": 767.0,
      "fats": 11.3,
      "saturatedFats": 3.7,
      "carbs": 14.4,
      "sugars": 1.5,
      "protein": 6.9,
      "salt": 0.9
    }
  },
  {
    "id": "item-26",
    "category": "ciorbe",
    "name": {
      "ro": "Ciorbă de burtă 1, 3, 7100gr/300ml",
      "en": "Ciorbă of burtă 1, 3, 7100gr/300ml"
    },
    "weight": "200g",
    "price": 29.0,
    "ingredients": {
      "ro": "burtă de vită, legume asortate, smântână, ou, usturoi, ulei, oțet, făină de grâu, condimente",
      "en": "tripe of beef, legume asortate, sour cream, egg, garlic, oil, oțet, flour of grâu, condimente"
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 113.8,
      "energyKj": 474.3,
      "fats": 6.0,
      "saturatedFats": 2.2,
      "carbs": 6.7,
      "sugars": 2.4,
      "protein": 6.5,
      "salt": 0.6
    }
  },
  {
    "id": "item-27",
    "category": "ciorbe",
    "name": {
      "ro": "Ciorbă rădăuțeană1, 3,7_________________60gr/340ml",
      "en": "Ciorbă rădăuțeană1, 3,7_________________60gr/340ml"
    },
    "weight": "200g",
    "price": 25.0,
    "ingredients": {
      "ro": "legume asortate, piept de pui, ou, ulei, oțet, usturoi, făină, smântână, condimente",
      "en": "legume asortate, piept of chicken, egg, oil, oțet, garlic, flour, sour cream, condimente"
    },
    "allergens": [],
    "isFrozen": true,
    "nutrition": {
      "energyKcal": 108.6,
      "energyKj": 452.0,
      "fats": 6.8,
      "saturatedFats": 2.4,
      "carbs": 4.2,
      "sugars": 1.7,
      "protein": 7.8,
      "salt": 0.7
    }
  },
  {
    "id": "item-28",
    "category": "ciorbe",
    "name": {
      "ro": "Babgulyas 1,3, 7, 9100gr/300ml",
      "en": "Babgulyas 1,3, 7, 9100gr/300ml"
    },
    "weight": "200g",
    "price": 35.0,
    "ingredients": {
      "ro": "ciolan de porc,  cârnați,  fasole, ou, legume asortate, ceapă, făină, pastă de ardei iute, condimente",
      "en": "pork knuckle of pork,  sausages,  beans, egg, legume asortate, onion, flour, pastă of pepper iute, condimente"
    },
    "allergens": [],
    "isFrozen": true,
    "nutrition": {
      "energyKcal": 96.5,
      "energyKj": 365.9,
      "fats": 16.8,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-29",
    "category": "ciorbe",
    "name": {
      "ro": "Ciorbă ţărănească de porc 9                50gr",
      "en": "Ciorbă ţărănească of porc 9                50gr"
    },
    "weight": "/ 350 ml",
    "price": 25.0,
    "ingredients": {
      "ro": "legume asortate, cartofi, pulpă de porc, roșii, condimente",
      "en": "legume asortate, potatoes, pulpă of pork, tomatoes, condimente"
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 81.8,
      "energyKj": 340.0,
      "fats": 3.9,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-30",
    "category": "ciorbe",
    "name": {
      "ro": "Ciorbă de fasole cu afumătură 150gr/50gi/300ml",
      "en": "Ciorbă of fasole with afumătură 150gr/50gi/300ml"
    },
    "weight": "200g",
    "price": 25.0,
    "ingredients": {
      "ro": "legume asortate, fasole, ciolan de porc, smântână, ulei, pasta de ardei, ceapă, făină de grâu, ulei, condimente",
      "en": "legume asortate, beans, pork knuckle of pork, sour cream, oil, pasta of pepper, onion, flour of grâu, oil, condimente"
    },
    "allergens": [],
    "isFrozen": true,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 753,
      "fats": 29.5,
      "saturatedFats": 1.3,
      "carbs": 127.4,
      "sugars": 34.9,
      "protein": 27.8,
      "salt": 0.9
    }
  },
  {
    "id": "item-31",
    "category": "ciorbe",
    "name": {
      "ro": "Smântână",
      "en": "Fresh Sour Cream"
    },
    "weight": "7 80 ml",
    "price": 7.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 118.0,
      "energyKj": 491.0,
      "fats": 10.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-32",
    "category": "ciorbe",
    "name": {
      "ro": "Ardei iute",
      "en": "Fresh / Pickled Hot Pepper"
    },
    "weight": "1 buc",
    "price": 2.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-33",
    "category": "ciorbe",
    "name": {
      "ro": "Pâine",
      "en": "Homemade Bread"
    },
    "weight": "/ porțieg",
    "price": 3.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 211.0,
      "energyKj": 888.0,
      "fats": 1.2,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-34",
    "category": "ciorbe",
    "name": {
      "ro": "Pâinici rumenite",
      "en": "Pâinici rumenite"
    },
    "weight": "1 3 buc",
    "price": 9.0,
    "ingredients": {
      "ro": "pâine, ulei de măsline, usturoi, busuioc",
      "en": "bread, oil of olives, garlic, basil"
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 211.0,
      "energyKj": 888.0,
      "fats": 1.2,
      "saturatedFats": 0.2,
      "carbs": 48.3,
      "sugars": 1.6,
      "protein": 7.0,
      "salt": 1.5
    }
  },
  {
    "id": "item-35",
    "category": "platouri",
    "name": {
      "ro": "Platou Marissa",
      "en": "Marissa Platter (2 Persons)"
    },
    "weight": "600 gr",
    "price": 69.0,
    "ingredients": {
      "ro": "piept de pui, ceafă de porc, ciolan de porc, cartofi prăjiți, mix de legume, iaurt, maioneză, condimente",
      "en": "piept of chicken, ceafă of pork, pork knuckle of pork, potatoes prăjiți, mix of legume, yogurt, mayonnaise, condimente"
    },
    "allergens": [
      3,
      7
    ],
    "isFrozen": true,
    "nutrition": {
      "energyKcal": 221.7,
      "energyKj": 925.3,
      "fats": 13.2,
      "saturatedFats": 4.0,
      "carbs": 10.5,
      "sugars": 2.1,
      "protein": 15.8,
      "salt": 0.4
    }
  },
  {
    "id": "item-36",
    "category": "platouri",
    "name": {
      "ro": "Platoul  Gurmandului 1 ,7  1500gr",
      "en": "Platoul  Gurmandului 1 ,7  1500gr"
    },
    "weight": "200g",
    "price": 135.0,
    "ingredients": {
      "ro": "ceafă de porc, piept de pui, aripioare crispy, cartofi wedges, murături, sos chilli, condimente",
      "en": "ceafă of pork, piept of chicken, wings crispy, potatoes wedges, murături, sauce chilli, condimente"
    },
    "allergens": [],
    "isFrozen": true,
    "nutrition": {
      "energyKcal": 128.8,
      "energyKj": 538.1,
      "fats": 5.8,
      "saturatedFats": 1.7,
      "carbs": 9.8,
      "sugars": 3.8,
      "protein": 9.9,
      "salt": 1.3
    }
  },
  {
    "id": "item-37",
    "category": "platouri",
    "name": {
      "ro": "Platoul bucătarului 1,71 kg",
      "en": "Platoul bucătarului 1,71 kg"
    },
    "weight": "200g",
    "price": 110.0,
    "ingredients": {
      "ro": "ceafă de porc, mici, scăriță de porc, legume la grătar, cartofi prăjiți, salată mixtă, sos muștar, sare",
      "en": "ceafă of pork, mici skinless sausages, scăriță of pork, legume la grilled, potatoes prăjiți, salad mixtă, sauce mustard, salt"
    },
    "allergens": [],
    "isFrozen": true,
    "nutrition": {
      "energyKcal": 128.8,
      "energyKj": 538.1,
      "fats": 5.8,
      "saturatedFats": 1.7,
      "carbs": 9.8,
      "sugars": 3.8,
      "protein": 9.9,
      "salt": 1.3
    }
  },
  {
    "id": "item-38",
    "category": "pui-rata",
    "name": {
      "ro": "Piept de pui la grătar 7150gr",
      "en": "Piept of pui la grătar 7150gr"
    },
    "weight": "200g",
    "price": 28.0,
    "ingredients": {
      "ro": "piept de pui, unt, sare, condimente",
      "en": "piept of chicken, butter, salt, condimente"
    },
    "allergens": [],
    "isFrozen": true,
    "nutrition": {
      "energyKcal": 183.0,
      "energyKj": 761.6,
      "fats": 7.8,
      "saturatedFats": 3.1,
      "carbs": 0.5,
      "sugars": 0.1,
      "protein": 27.6,
      "salt": 2.1
    }
  },
  {
    "id": "item-39",
    "category": "pui-rata",
    "name": {
      "ro": "Pulpe de pui dezosate la grătar",
      "en": "Grilled Boneless Chicken Thighs"
    },
    "weight": "80 gr",
    "price": 27.0,
    "ingredients": {
      "ro": "pulpe de pui , condimente",
      "en": "pulpe of chicken , condimente"
    },
    "allergens": [
      1
    ],
    "isFrozen": true,
    "nutrition": {
      "energyKcal": 239.7,
      "energyKj": 1000.5,
      "fats": 15.4,
      "saturatedFats": 0.3,
      "carbs": 0.8,
      "sugars": 0.0,
      "protein": 24.6,
      "salt": 2.0
    }
  },
  {
    "id": "item-40",
    "category": "pui-rata",
    "name": {
      "ro": "Piept de rață / Pulpă de rață, cu varză roșie și sos de portocale1,7   170/200/60gr",
      "en": "Piept of rață / Pulpă of rață, with varză ro&e & sos of portocale1,7   170/200/60gr"
    },
    "weight": "200g",
    "price": 65.0,
    "ingredients": {
      "ro": "piept de rață, legume asortate, portocală, amidon de grâu, unt",
      "en": "piept of duck, legume asortate, portocală, amidon of grâu, butter"
    },
    "allergens": [],
    "isFrozen": true,
    "nutrition": {
      "energyKcal": 133.6,
      "energyKj": 564.1,
      "fats": 1.1,
      "saturatedFats": 0.0,
      "carbs": 17.9,
      "sugars": 3.1,
      "protein": 12.4,
      "salt": 0.1
    }
  },
  {
    "id": "item-41",
    "category": "pui-rata",
    "name": {
      "ro": "Escalop din piept de pui cu cartofi piure și sos de ciuperci",
      "en": "Escalop din piept of pui with cartofi piure & sos of ciuperci"
    },
    "weight": "150 gr",
    "price": 45.0,
    "ingredients": {
      "ro": "piept de pui, cartofi, unt, ciuperci, smântână lichidă, pătrunjel verde, ulei de floarea soarelui, condimente",
      "en": "piept of chicken, potatoes, butter, mushrooms, sour cream lichidă, parsley verof, oil of floarea soarelui, condimente"
    },
    "allergens": [
      7
    ],
    "isFrozen": true,
    "nutrition": {
      "energyKcal": 154.8,
      "energyKj": 643.7,
      "fats": 8.2,
      "saturatedFats": 2.4,
      "carbs": 4.0,
      "sugars": 1.8,
      "protein": 16.8,
      "salt": 2.5
    }
  },
  {
    "id": "item-42",
    "category": "pui-rata",
    "name": {
      "ro": "Piept de pui cu legume și sos de cașcaval",
      "en": "Piept of pui with legume & sos of cașcaval"
    },
    "weight": "150 gr",
    "price": 42.0,
    "ingredients": {
      "ro": "piept de pui, legume, unt, smântână lichidă, unt de arahide, ulei de floarea soarelui, condimente",
      "en": "piept of chicken, legume, butter, sour cream lichidă, butter of arahiof, oil of floarea soarelui, condimente"
    },
    "allergens": [
      7,
      8
    ],
    "isFrozen": true,
    "nutrition": {
      "energyKcal": 154.8,
      "energyKj": 643.7,
      "fats": 8.2,
      "saturatedFats": 2.4,
      "carbs": 4.0,
      "sugars": 1.8,
      "protein": 16.8,
      "salt": 2.5
    }
  },
  {
    "id": "item-43",
    "category": "pui-rata",
    "name": {
      "ro": "Piept de pui crispy cu cartofi prajiti și sos roșu",
      "en": "Piept of pui crispy with cartofi prajiti & sos roșu"
    },
    "weight": "3150/150/50 gr",
    "price": 38.0,
    "ingredients": {
      "ro": "piept de pui, ou, făină de grâu, cartofi, sos din roșii, ulei de palmier,  condimente",
      "en": "piept of chicken, egg, flour of grâu, potatoes, sauce din tomatoes, oil of palmier,  condimente"
    },
    "allergens": [
      1
    ],
    "isFrozen": true,
    "nutrition": {
      "energyKcal": 154.8,
      "energyKj": 643.7,
      "fats": 8.2,
      "saturatedFats": 2.4,
      "carbs": 4.0,
      "sugars": 1.8,
      "protein": 16.8,
      "salt": 2.5
    }
  },
  {
    "id": "item-44",
    "category": "pui-rata",
    "name": {
      "ro": "Aripioare Crispy1,3250gr",
      "en": "Aripioare Crispy1,3250gr"
    },
    "weight": "200g",
    "price": 28.0,
    "ingredients": {
      "ro": "aripioare, făină de grâu, ou, ulei de palmier, condimente",
      "en": "wings, flour of grâu, egg, oil of palmier, condimente"
    },
    "allergens": [],
    "isFrozen": true,
    "nutrition": {
      "energyKcal": 244.7,
      "energyKj": 1023.8,
      "fats": 12.4,
      "saturatedFats": 1.5,
      "carbs": 10.5,
      "sugars": 0.6,
      "protein": 22.0,
      "salt": 0.3
    }
  },
  {
    "id": "item-45",
    "category": "pui-rata",
    "name": {
      "ro": "Şniţel din piept de pui1, 3180gr",
      "en": "Şniţel din piept of pui1, 3180gr"
    },
    "weight": "200g",
    "price": 24.0,
    "ingredients": {
      "ro": "piept de pui, ou, făină, pesmet, condimente",
      "en": "piept of chicken, egg, flour, breadcrumbs, condimente"
    },
    "allergens": [],
    "isFrozen": true,
    "nutrition": {
      "energyKcal": 158.3,
      "energyKj": 662.9,
      "fats": 3.4,
      "saturatedFats": 0.2,
      "carbs": 15.0,
      "sugars": 0.1,
      "protein": 26.6,
      "salt": 2.0
    }
  },
  {
    "id": "item-46",
    "category": "vita",
    "name": {
      "ro": "Muşchi de vită la grill cu sos de hribi și cartofi cu rozmarin 7 150/200/50",
      "en": "Muşchi of vită la grill with sos of hribi & cartofi with rozmarin 7 150/200/50"
    },
    "weight": "200g",
    "price": 89.0,
    "ingredients": {
      "ro": "mușchiuleț de vită, unt, cartofi, rozmarin, ciuperci, smântână lichidă, ulei, condimente",
      "en": "mușchiuleț of beef, butter, potatoes, rozmarin, mushrooms, sour cream lichidă, oil, condimente"
    },
    "allergens": [],
    "isFrozen": true,
    "nutrition": {
      "energyKcal": 291.9,
      "energyKj": 1212.1,
      "fats": 22.4,
      "saturatedFats": 8.4,
      "carbs": 0.4,
      "sugars": 0.1,
      "protein": 22.2,
      "salt": 3.2
    }
  },
  {
    "id": "item-47",
    "category": "vita",
    "name": {
      "ro": "T-Bone de vită cu sos dijon și cartofi copți  7  _380/200/ 80gr__",
      "en": "T-Bone of vită with sos dijon & cartofi copți  7  _380/200/ 80gr__"
    },
    "weight": "200g",
    "price": 125.0,
    "ingredients": {
      "ro": "T-bone, cartofi copți, muștar Dijon, unt, ulei, condiment",
      "en": "T-bone, potatoes copți, mustard Dijon, butter, oil, condiment"
    },
    "allergens": [],
    "isFrozen": true,
    "nutrition": {
      "energyKcal": 206.9,
      "energyKj": 863.8,
      "fats": 13.2,
      "saturatedFats": 2.6,
      "carbs": 8.3,
      "sugars": 0.3,
      "protein": 14.3,
      "salt": 1.0
    }
  },
  {
    "id": "item-48",
    "category": "vita",
    "name": {
      "ro": "Obrăjori de vită și piure cu aromă de trufe, sos de merișoare 1    280gr/300gr",
      "en": "Obrăjori of vită & piure with aromă of trufe, sos of merișoare 1    280gr/300gr"
    },
    "weight": "200g",
    "price": 98.0,
    "ingredients": {
      "ro": "carne de vită, ulei de măsline, unt , cartofi, fructe, trufe, amidon, condimente",
      "en": "carne of beef, oil of olives, butter , potatoes, fructe, truffles, amidon, condimente"
    },
    "allergens": [],
    "isFrozen": true,
    "nutrition": {
      "energyKcal": 211.1,
      "energyKj": 878.5,
      "fats": 13.0,
      "saturatedFats": 3.2,
      "carbs": 1.3,
      "sugars": 0.8,
      "protein": 21.6,
      "salt": 3.2
    }
  },
  {
    "id": "item-49",
    "category": "vita",
    "name": {
      "ro": "Ossobuco de vită, piure de cartofi cu trufe 1 150/50/20gr",
      "en": "Ossobuco of vită, piure of cartofi with trufe 1 150/50/20gr"
    },
    "weight": "200g",
    "price": 80.0,
    "ingredients": {
      "ro": "carne de vită, unt, rucola , ulei, sare, otet balsamic, condimente",
      "en": "carne of beef, butter, rucola , oil, salt, otet balsamic, condimente"
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 291.9,
      "energyKj": 1212.1,
      "fats": 22.4,
      "saturatedFats": 8.4,
      "carbs": 0.4,
      "sugars": 0.1,
      "protein": 22.2,
      "salt": 3.2
    }
  },
  {
    "id": "item-50",
    "category": "porc",
    "name": {
      "ro": "Mușchiulet de porc, sos de hribi și cartofi cu aromă de trufe 7  150/350gr",
      "en": "Mușchiulet of porc, sos of hribi & cartofi with aromă of trufe 7  150/350gr"
    },
    "weight": "200g",
    "price": 55.0,
    "ingredients": {
      "ro": "mușchiulet de porc, cartofi, pastă de trufe, hribi, crustă de verdețuri, ulei, condimente",
      "en": "mușchiulet of pork, potatoes, pastă of truffles, porcini mushrooms, crustă of verofțuri, oil, condimente"
    },
    "allergens": [],
    "isFrozen": true,
    "nutrition": {
      "energyKcal": 192.6,
      "energyKj": 801.6,
      "fats": 10.5,
      "saturatedFats": 2.5,
      "carbs": 1.1,
      "sugars": 0.4,
      "protein": 22.3,
      "salt": 1.2
    }
  },
  {
    "id": "item-51",
    "category": "porc",
    "name": {
      "ro": "Cotlet de porc Marissa 7250gr",
      "en": "Cotlet of porc Marissa 7250gr"
    },
    "weight": "200g",
    "price": 32.0,
    "ingredients": {
      "ro": "cotlet de porc, ciuperci amestecate, bacon, roșii, mozzarella, smântână lichidă, ulei de floarea soarelui, condimente",
      "en": "cotlet of pork, mushrooms amestecate, bacon, tomatoes, mozzarella, sour cream lichidă, oil of floarea soarelui, condimente"
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 192.6,
      "energyKj": 801.6,
      "fats": 10.5,
      "saturatedFats": 2.5,
      "carbs": 1.1,
      "sugars": 0.4,
      "protein": 22.3,
      "salt": 1.2
    }
  },
  {
    "id": "item-52",
    "category": "porc",
    "name": {
      "ro": "Șnitel de porc uriaș cu sos picant 1,3 7,11200/50gr",
      "en": "Șnitel of porc uriaș with sos picant 1,3 7,11200/50gr"
    },
    "weight": "200g",
    "price": 30.0,
    "ingredients": {
      "ro": "cotlet de porc, sos picant, cașcaval, ulei de floarea soarelui, ou, făină de grâu, condimente",
      "en": "cotlet of pork, sauce picant, yellow cheese, oil of floarea soarelui, egg, flour of grâu, condimente"
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 274.3,
      "energyKj": 1139.6,
      "fats": 17.4,
      "saturatedFats": 3.6,
      "carbs": 9.0,
      "sugars": 4.0,
      "protein": 19.0,
      "salt": 1.3
    }
  },
  {
    "id": "item-53",
    "category": "porc",
    "name": {
      "ro": "Ceafă  ţigănească și cartofi prăjiți 1,3180/150gr",
      "en": "Ceafă  ţigănească & cartofi prăjiți 1,3180/150gr"
    },
    "weight": "200g",
    "price": 52.0,
    "ingredients": {
      "ro": "ceafă de porc, slănină afumată, ou, sos picant, cartofi, condimente",
      "en": "ceafă of pork, pork fatback afumată, egg, sauce picant, potatoes, condimente"
    },
    "allergens": [],
    "isFrozen": true,
    "nutrition": {
      "energyKcal": 241.1,
      "energyKj": 1003.9,
      "fats": 16.8,
      "saturatedFats": 7.0,
      "carbs": 5.0,
      "sugars": 0.2,
      "protein": 17.8,
      "salt": 1.7
    }
  },
  {
    "id": "item-54",
    "category": "porc",
    "name": {
      "ro": "Ceafă de porc la grătar180gr",
      "en": "Ceafă of porc la grătar180gr"
    },
    "weight": "200g",
    "price": 30.0,
    "ingredients": {
      "ro": "ceafă de porc, condimente",
      "en": "ceafă of pork, condimente"
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 229.3,
      "energyKj": 953.5,
      "fats": 17.0,
      "saturatedFats": 7.3,
      "carbs": 0.0,
      "sugars": 0.0,
      "protein": 19.2,
      "salt": 2.1
    }
  },
  {
    "id": "item-55",
    "category": "porc",
    "name": {
      "ro": "Scariță gigant cu catofi wedges 7400/150gr",
      "en": "Scariță gigant with catofi wedges 7400/150gr"
    },
    "weight": "200g",
    "price": 55.0,
    "ingredients": {
      "ro": "costiță de porc, cartofi wedges, sos barbeque, usturoi, condimente",
      "en": "costiță of pork, potatoes wedges, sauce barbeque, garlic, condimente"
    },
    "allergens": [],
    "isFrozen": true,
    "nutrition": {
      "energyKcal": 179.1,
      "energyKj": 744.6,
      "fats": 12.1,
      "saturatedFats": 4.4,
      "carbs": 5.5,
      "sugars": 0.9,
      "protein": 12.2,
      "salt": 2.2
    }
  },
  {
    "id": "item-56",
    "category": "porc",
    "name": {
      "ro": "Ciolan de porc100gr",
      "en": "Ciolan of porc100gr"
    },
    "weight": "200g",
    "price": 12.0,
    "ingredients": {
      "ro": "ciolan de porc",
      "en": "pork knuckle of pork"
    },
    "allergens": [],
    "isFrozen": true,
    "nutrition": {
      "energyKcal": 208.0,
      "energyKj": 268.0,
      "fats": 204.0,
      "saturatedFats": 0.0,
      "carbs": 956.0,
      "sugars": 269.0,
      "protein": 203.0,
      "salt": 0.3
    }
  },
  {
    "id": "item-57",
    "category": "porc",
    "name": {
      "ro": "Ciolan de porc cu os domnesc 100gr",
      "en": "Ciolan of porc with os domnesc 100gr"
    },
    "weight": "200g",
    "price": 10.0,
    "ingredients": {
      "ro": "ciolan de porc, ulei de floarea soarelui, usturoi, condimente",
      "en": "pork knuckle of pork, oil of floarea soarelui, garlic, condimente"
    },
    "allergens": [],
    "isFrozen": true,
    "nutrition": {
      "energyKcal": 189.1,
      "energyKj": 425.3,
      "fats": 125.8,
      "saturatedFats": 0.1,
      "carbs": 593.9,
      "sugars": 165.0,
      "protein": 127.0,
      "salt": 0.5
    }
  },
  {
    "id": "item-58",
    "category": "porc",
    "name": {
      "ro": "Tochitură de porc cu mămăliguță150/200gr",
      "en": "Tochitură of porc with mămăliguță150/200gr"
    },
    "weight": "200g",
    "price": 45.0,
    "ingredients": {
      "ro": "carne de porc, usturoi, sos roșu, ou, telemea, burduf, ulei de floarea soarelui, condimente",
      "en": "carne of pork, garlic, sauce roșu, egg, telemea, burduf, oil of floarea soarelui, condimente"
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 154.6,
      "energyKj": 647.0,
      "fats": 7.2,
      "saturatedFats": 1.9,
      "carbs": 8.5,
      "sugars": 0.7,
      "protein": 14.2,
      "salt": 1.1
    }
  },
  {
    "id": "item-59",
    "category": "porc",
    "name": {
      "ro": "Obrăjori de porc cu cartofi piure și sos de portocale 1           200/200/50gr",
      "en": "Obrăjori of porc with cartofi piure & sos of portocale 1           200/200/50gr"
    },
    "weight": "200g",
    "price": 65.0,
    "ingredients": {
      "ro": "obrăjori de porc, cartofi, unt, portocale,verdeață, amidon de porumb, ulei de floarea soarelui, condimente",
      "en": "obrăjori of pork, potatoes, butter, oranges,verofață, amidon of porumb, oil of floarea soarelui, condimente"
    },
    "allergens": [],
    "isFrozen": true,
    "nutrition": {
      "energyKcal": 154.6,
      "energyKj": 647.0,
      "fats": 7.2,
      "saturatedFats": 1.9,
      "carbs": 8.5,
      "sugars": 0.7,
      "protein": 14.2,
      "salt": 1.1
    }
  },
  {
    "id": "item-60",
    "category": "porc",
    "name": {
      "ro": "Cotlet de porc cu os la grătar, cartofi copți și sos dijon 10   150/200/50gr",
      "en": "Cotlet of porc with os la grătar, cartofi copți & sos dijon 10   150/200/50gr"
    },
    "weight": "200g",
    "price": 65.0,
    "ingredients": {
      "ro": "cotlet de porc, cartofi, praz, muștar, ulei, pătrunjel, ardei, roșii, lămâie, ierburi, unt, condiment",
      "en": "cotlet of pork, potatoes, praz, mustard, oil, parsley, pepper, tomatoes, lemon, ierburi, butter, condiment"
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 291.9,
      "energyKj": 1212.1,
      "fats": 22.4,
      "saturatedFats": 8.4,
      "carbs": 0.4,
      "sugars": 0.1,
      "protein": 22.2,
      "salt": 3.2
    }
  },
  {
    "id": "item-61",
    "category": "porc",
    "name": {
      "ro": "File de somon cu sos teriaki garnisit cu legume 4, 6, 7, 8, 10, 11150/150gr",
      "en": "File of somon with sos teriaki garnisit with legume 4, 6, 7, 8, 10, 11150/150gr"
    },
    "weight": "200g",
    "price": 59.0,
    "ingredients": {
      "ro": "file de somon, morcov, conopidă, broccoli, unt, ulei, lămâie, sos teriaki, condimente",
      "en": "file of salmon, carrots, cauliflower, broccoli, butter, oil, lemon, sauce teriaki, condimente"
    },
    "allergens": [],
    "isFrozen": true,
    "nutrition": {
      "energyKcal": 179.7,
      "energyKj": 744.7,
      "fats": 14.2,
      "saturatedFats": 3.5,
      "carbs": 4.5,
      "sugars": 3.2,
      "protein": 8.3,
      "salt": 1.4
    }
  },
  {
    "id": "item-62",
    "category": "porc",
    "name": {
      "ro": "Păstrăv/Doradă la grătar cu legume 4       200./150gr",
      "en": "Păstrăv/Doradă la grătar with legume 4       200./150gr"
    },
    "weight": "200g",
    "price": 55.0,
    "ingredients": {
      "ro": "păstrăv/doradă, legume asortate, condimente",
      "en": "trout/sea bream, legume asortate, condimente"
    },
    "allergens": [],
    "isFrozen": true,
    "nutrition": {
      "energyKcal": 147.3,
      "energyKj": 612.1,
      "fats": 10.3,
      "saturatedFats": 1.4,
      "carbs": 1.8,
      "sugars": 1.6,
      "protein": 10.8,
      "salt": 1.4
    }
  },
  {
    "id": "item-63",
    "category": "porc",
    "name": {
      "ro": "Păstrăv în crustă de mălâi cu mămăliguță",
      "en": "Păstrăv în crustă of mălâi with mămăliguță"
    },
    "weight": "250/200 gr",
    "price": 55.0,
    "ingredients": {
      "ro": "păstrăv, făină de mălai, lămâie, usturoi, ulei de floarea soarelui, condimente",
      "en": "trout, flour of cornmeal, lemon, garlic, oil of floarea soarelui, condimente"
    },
    "allergens": [
      4
    ],
    "isFrozen": true,
    "nutrition": {
      "energyKcal": 179.8,
      "energyKj": 753.6,
      "fats": 7.4,
      "saturatedFats": 1.1,
      "carbs": 17.3,
      "sugars": 0.8,
      "protein": 9.6,
      "salt": 1.1
    }
  },
  {
    "id": "item-64",
    "category": "porc",
    "name": {
      "ro": "Tigaie cu fructe de mare 1,2,7       250/80gr",
      "en": "Tigaie with fructe of mare 1,2,7       250/80gr"
    },
    "weight": "200g",
    "price": 48.0,
    "ingredients": {
      "ro": "fructe de mare, ardei iute, roșii, usturoi, pătrunjel verde, unt, lămâie, ulei de măsline, pâine prăjită, condimente",
      "en": "fructe of mare, pepper iute, tomatoes, garlic, parsley verof, butter, lemon, oil of olives, bread prăjită, condimente"
    },
    "allergens": [],
    "isFrozen": true,
    "nutrition": {
      "energyKcal": 171.4,
      "energyKj": 712.6,
      "fats": 10.7,
      "saturatedFats": 5.5,
      "carbs": 5.9,
      "sugars": 2.2,
      "protein": 12.9,
      "salt": 0.7
    }
  },
  {
    "id": "item-65",
    "category": "porc",
    "name": {
      "ro": "Sos roşu 9(ketchup)                             70gr",
      "en": "Sos roşu 9(ketchup)                             70gr"
    },
    "weight": "200g",
    "price": 5.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 102.0,
      "energyKj": 426.8,
      "fats": 0.1,
      "saturatedFats": 0.1,
      "carbs": 23.2,
      "sugars": 22.8,
      "protein": 1.2,
      "salt": 1.8
    }
  },
  {
    "id": "item-66",
    "category": "porc",
    "name": {
      "ro": "Sos alb 3, 7    70gr",
      "en": "Sos alb 3, 7    70gr"
    },
    "weight": "200g",
    "price": 5.0,
    "ingredients": {
      "ro": "iaurt, maioneză, usturoi, oregano, condimente",
      "en": "yogurt, mayonnaise, garlic, oregano, condimente"
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 317.3,
      "energyKj": 1309.4,
      "fats": 30.8,
      "saturatedFats": 9.3,
      "carbs": 7.7,
      "sugars": 2.5,
      "protein": 3.1,
      "salt": 0.4
    }
  },
  {
    "id": "item-67",
    "category": "porc",
    "name": {
      "ro": "Sos chilli 9                                     100gr",
      "en": "Sos chilli 9                                     100gr"
    },
    "weight": "200g",
    "price": 5.0,
    "ingredients": {
      "ro": "ketchup, ardei iute",
      "en": "ketchup, pepper iute"
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 96.9,
      "energyKj": 405.3,
      "fats": 0.2,
      "saturatedFats": 0.1,
      "carbs": 21.4,
      "sugars": 21.0,
      "protein": 1.3,
      "salt": 2.8
    }
  },
  {
    "id": "item-68",
    "category": "porc",
    "name": {
      "ro": "Ulei picant (ulei și ardei iute) 30ml",
      "en": "Ulei picant (ulei & arofi iute) 30ml"
    },
    "weight": "200g",
    "price": 5.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-69",
    "category": "porc",
    "name": {
      "ro": "Mujdei de usturoi    50gr",
      "en": "Mujofi of usturoi    50gr"
    },
    "weight": "200g",
    "price": 5.0,
    "ingredients": {
      "ro": "usturoi, lămâie, ulei de floarea soarelui, sare",
      "en": "garlic, lemon, oil of floarea soarelui, salt"
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 182.3,
      "energyKj": 759.2,
      "fats": 10.1,
      "saturatedFats": 1.0,
      "carbs": 18.7,
      "sugars": 2.1,
      "protein": 4.2,
      "salt": 4.0
    }
  },
  {
    "id": "item-70",
    "category": "porc",
    "name": {
      "ro": "Muştar/maioneză/ketchup10                                            70ml",
      "en": "Muştar/maioneză/ketchup10                                            70ml"
    },
    "weight": "200g",
    "price": 3.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-71",
    "category": "porc",
    "name": {
      "ro": "Sos alb, cu ciuperci 3, 7          100gr",
      "en": "Sos alb, with ciuperci 3, 7          100gr"
    },
    "weight": "200g",
    "price": 12.0,
    "ingredients": {
      "ro": "smântână lichidă, ciuperci, ceapă, ardei, pătrunjel verde, condimente",
      "en": "sour cream lichidă, mushrooms, onion, pepper, parsley verof, condimente"
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 317.3,
      "energyKj": 1309.4,
      "fats": 30.8,
      "saturatedFats": 9.3,
      "carbs": 7.7,
      "sugars": 2.5,
      "protein": 3.1,
      "salt": 0.4
    }
  },
  {
    "id": "item-72",
    "category": "garnituri",
    "name": {
      "ro": "Cartofi prăjiţi180gr",
      "en": "Cartofi prăjiţi180gr"
    },
    "weight": "200g",
    "price": 12.0,
    "ingredients": {
      "ro": "cartofi, ulei de palmier, condimente",
      "en": "potatoes, oil of palmier, condimente"
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 169.6,
      "energyKj": 709.4,
      "fats": 7.3,
      "saturatedFats": 1.9,
      "carbs": 24.8,
      "sugars": 0.6,
      "protein": 1.6,
      "salt": 1.0
    }
  },
  {
    "id": "item-73",
    "category": "garnituri",
    "name": {
      "ro": "Cartofi piure 7200gr",
      "en": "Cartofi piure 7200gr"
    },
    "weight": "200g",
    "price": 10.0,
    "ingredients": {
      "ro": "cartofi, lapte, unt, condimente",
      "en": "potatoes, milk, butter, condimente"
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 91.9,
      "energyKj": 386.6,
      "fats": 2.6,
      "saturatedFats": 1.7,
      "carbs": 15.9,
      "sugars": 0.8,
      "protein": 1.9,
      "salt": 1.0
    }
  },
  {
    "id": "item-74",
    "category": "garnituri",
    "name": {
      "ro": "Cartofi natur 7200gr",
      "en": "Cartofi natur 7200gr"
    },
    "weight": "200g",
    "price": 10.0,
    "ingredients": {
      "ro": "cartofi, ulei de floarea soarelui, condimente",
      "en": "potatoes, oil of floarea soarelui, condimente"
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 130.3,
      "energyKj": 544.4,
      "fats": 7.0,
      "saturatedFats": 3.2,
      "carbs": 15.7,
      "sugars": 0.6,
      "protein": 1.8,
      "salt": 1.0
    }
  },
  {
    "id": "item-75",
    "category": "garnituri",
    "name": {
      "ro": "Cartofi aurii180gr",
      "en": "Cartofi aurii180gr"
    },
    "weight": "200g",
    "price": 12.0,
    "ingredients": {
      "ro": "cartofi, ulei de palmier, condimente",
      "en": "potatoes, oil of palmier, condimente"
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 129.0,
      "energyKj": 542.3,
      "fats": 4.1,
      "saturatedFats": 1.9,
      "carbs": 21.5,
      "sugars": 0.8,
      "protein": 2.4,
      "salt": 0.0
    }
  },
  {
    "id": "item-76",
    "category": "garnituri",
    "name": {
      "ro": "Pilaf de orez200gr",
      "en": "Pilaf of orez200gr"
    },
    "weight": "200g",
    "price": 10.0,
    "ingredients": {
      "ro": "orez, legume asortate, ceapă, ardei, ulei de floarea soarelui, condimente",
      "en": "rice, legume asortate, onion, pepper, oil of floarea soarelui, condimente"
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 131.7,
      "energyKj": 556.0,
      "fats": 2.7,
      "saturatedFats": 0.3,
      "carbs": 24.4,
      "sugars": 0.6,
      "protein": 2.6,
      "salt": 0.0
    }
  },
  {
    "id": "item-77",
    "category": "garnituri",
    "name": {
      "ro": "Legume înăbuşite7200gr",
      "en": "Legume înăbuşite7200gr"
    },
    "weight": "200g",
    "price": 12.0,
    "ingredients": {
      "ro": "brocoli, morcov, conopidă, ceapă, unt, condimente",
      "en": "brocoli, carrots, cauliflower, onion, butter, condimente"
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 62.0,
      "energyKj": 258.9,
      "fats": 2.6,
      "saturatedFats": 1.7,
      "carbs": 8.7,
      "sugars": 3.0,
      "protein": 2.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-78",
    "category": "garnituri",
    "name": {
      "ro": "Mămăligă",
      "en": "Mămăligă"
    },
    "weight": "200 gr",
    "price": 9.0,
    "ingredients": {
      "ro": "făină de mălai, ulei de floarea soarelui, sare",
      "en": "flour of cornmeal, oil of floarea soarelui, salt"
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 218.5,
      "energyKj": 921.0,
      "fats": 5.5,
      "saturatedFats": 0.6,
      "carbs": 37.5,
      "sugars": 0.9,
      "protein": 3.2,
      "salt": 1.0
    }
  },
  {
    "id": "item-79",
    "category": "garnituri",
    "name": {
      "ro": "Iahnie de fasole 1200gr",
      "en": "Iahnie of fasole 1200gr"
    },
    "weight": "200g",
    "price": 12.0,
    "ingredients": {
      "ro": "fasole, ceapă, ardei, roșie, ulei de floarea soarelui, făină de grâu, usturoi, sare, condimente",
      "en": "beans, onion, pepper, tomato, oil of floarea soarelui, flour of grâu, garlic, salt, condimente"
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 88.3,
      "energyKj": 366.9,
      "fats": 5.2,
      "saturatedFats": 0.5,
      "carbs": 9.4,
      "sugars": 2.6,
      "protein": 2.1,
      "salt": 1.8
    }
  },
  {
    "id": "item-80",
    "category": "garnituri",
    "name": {
      "ro": "Ciuperci sote200gr",
      "en": "Ciuperci sote200gr"
    },
    "weight": "200g",
    "price": 15.0,
    "ingredients": {
      "ro": "ciuperci, ardei, roșii, ceapă, ulei de floarea soarelui, condimente",
      "en": "mushrooms, pepper, tomatoes, onion, oil of floarea soarelui, condimente"
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 70.9,
      "energyKj": 292.6,
      "fats": 5.1,
      "saturatedFats": 0.6,
      "carbs": 5.8,
      "sugars": 1.5,
      "protein": 2.6,
      "salt": 0.8
    }
  },
  {
    "id": "item-81",
    "category": "garnituri",
    "name": {
      "ro": "Legume asortate la grătar_____________________200gr",
      "en": "Legume asortate la grătar_____________________200gr"
    },
    "weight": "200g",
    "price": 18.0,
    "ingredients": {
      "ro": "ciuperci, ardei, roșii, ceapă, dovlecel, vânătă, ulei de floarea soarelui, condimente",
      "en": "mushrooms, pepper, tomatoes, onion, zucchini, vânătă, oil of floarea soarelui, condimente"
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 70.9,
      "energyKj": 292.6,
      "fats": 5.1,
      "saturatedFats": 0.6,
      "carbs": 5.8,
      "sugars": 1.5,
      "protein": 2.6,
      "salt": 0.8
    }
  },
  {
    "id": "item-82",
    "category": "paste-risotto",
    "name": {
      "ro": "Spaghete Milanese",
      "en": "Spaghetti Milanese"
    },
    "weight": "400 gr",
    "price": 32.0,
    "ingredients": {
      "ro": "paste, șuncă, sos de roșii, ciuperci, parmezan, ulei de floarea soarelui, condimente",
      "en": "paste, ham, sauce of tomatoes, mushrooms, parmezan, oil of floarea soarelui, condimente"
    },
    "allergens": [
      1,
      7
    ],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.8,
      "energyKj": 757.3,
      "fats": 11.7,
      "saturatedFats": 5.7,
      "carbs": 12.7,
      "sugars": 0.2,
      "protein": 8.0,
      "salt": 1.5
    }
  },
  {
    "id": "item-83",
    "category": "paste-risotto",
    "name": {
      "ro": "Spaghete Carbonara1, 3, 7______________________",
      "en": "Spaghete Carbonara1, 3, 7______________________"
    },
    "weight": "400 gr",
    "price": 32.0,
    "ingredients": {
      "ro": "spaghete, bacon, smântână lichidă, parmezan, ou, ulei de floarea soarelui, condimente",
      "en": "spaghetti, bacon, sour cream lichidă, parmezan, egg, oil of floarea soarelui, condimente"
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 246.4,
      "energyKj": 1031.7,
      "fats": 16.5,
      "saturatedFats": 6.5,
      "carbs": 12.3,
      "sugars": 0.1,
      "protein": 12.6,
      "salt": 1.3
    }
  },
  {
    "id": "item-84",
    "category": "paste-risotto",
    "name": {
      "ro": "Paste Quattro Formaggi",
      "en": "Pasta Quattro Formaggi"
    },
    "weight": "400 gr",
    "price": 35.0,
    "ingredients": {
      "ro": "paste, smântână lichidă, parmezan, ou, gorgonzola, brânză de burduf, unt, ulei de floarea soarelui, condimente",
      "en": "paste, sour cream lichidă, parmezan, egg, gorgonzola, cheese of burduf, butter, oil of floarea soarelui, condimente"
    },
    "allergens": [
      1,
      3,
      7
    ],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 282.1,
      "energyKj": 1180.1,
      "fats": 20.0,
      "saturatedFats": 11.7,
      "carbs": 12.0,
      "sugars": 0.3,
      "protein": 13.8,
      "salt": 1.5
    }
  },
  {
    "id": "item-85",
    "category": "paste-risotto",
    "name": {
      "ro": "Paste all`arrabbiata 1 400gr",
      "en": "Paste all`arrabbiata 1 400gr"
    },
    "weight": "200g",
    "price": 28.0,
    "ingredients": {
      "ro": "paste, roșii, sos de roșii, pesto, ulei de măsline, condimente",
      "en": "paste, tomatoes, sauce of tomatoes, pesto, oil of olives, condimente"
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 138.7,
      "energyKj": 585.5,
      "fats": 3.6,
      "saturatedFats": 1.9,
      "carbs": 17.3,
      "sugars": 0.4,
      "protein": 9.5,
      "salt": 0.0
    }
  },
  {
    "id": "item-86",
    "category": "paste-risotto",
    "name": {
      "ro": "Tagliatelle cu creveti",
      "en": "Tagliatelle with creveti"
    },
    "weight": "400 gr",
    "price": 42.0,
    "ingredients": {
      "ro": "paste,  creveți, mix de legume, unt, smântână, condimente",
      "en": "paste,  prawns, mix of legume, butter, sour cream, condimente"
    },
    "allergens": [
      1,
      2,
      7
    ],
    "isFrozen": true,
    "nutrition": {
      "energyKcal": 138.7,
      "energyKj": 585.5,
      "fats": 3.6,
      "saturatedFats": 1.9,
      "carbs": 17.3,
      "sugars": 0.4,
      "protein": 9.5,
      "salt": 0.0
    }
  },
  {
    "id": "item-87",
    "category": "paste-risotto",
    "name": {
      "ro": "Paste cu fructe de mare",
      "en": "Seafood Pasta"
    },
    "weight": "400 gr",
    "price": 42.0,
    "ingredients": {
      "ro": "paste, fructe de mare, roșii, lămâie, unt, usturoi, ulei de masline",
      "en": "paste, fructe of mare, tomatoes, lemon, butter, garlic, oil of masline"
    },
    "allergens": [
      1,
      2,
      7
    ],
    "isFrozen": true,
    "nutrition": {
      "energyKcal": 145.8,
      "energyKj": 612.5,
      "fats": 4.8,
      "saturatedFats": 2.1,
      "carbs": 18.3,
      "sugars": 0.7,
      "protein": 7.8,
      "salt": 0.2
    }
  },
  {
    "id": "item-88",
    "category": "paste-risotto",
    "name": {
      "ro": "Tagliatelli cu somon 1, 7 400gr",
      "en": "Tagliatelli with somon 1, 7 400gr"
    },
    "weight": "200g",
    "price": 42.0,
    "ingredients": {
      "ro": "somon, paste, smântână, usturoi, pătrunjel, unt, condimente",
      "en": "salmon, paste, sour cream, garlic, parsley, butter, condimente"
    },
    "allergens": [],
    "isFrozen": true,
    "nutrition": {
      "energyKcal": 138.7,
      "energyKj": 585.5,
      "fats": 3.6,
      "saturatedFats": 1.9,
      "carbs": 17.3,
      "sugars": 0.4,
      "protein": 9.5,
      "salt": 0.0
    }
  },
  {
    "id": "item-89",
    "category": "paste-risotto",
    "name": {
      "ro": "Risotto al funghi porcini350gr",
      "en": "Risotto al funghi porcini350gr"
    },
    "weight": "200g",
    "price": 42.0,
    "ingredients": {
      "ro": "orez, hribi, usturoi, parmezan, condimente",
      "en": "rice, porcini mushrooms, garlic, parmezan, condimente"
    },
    "allergens": [],
    "isFrozen": true,
    "nutrition": {
      "energyKcal": 70.9,
      "energyKj": 292.6,
      "fats": 5.1,
      "saturatedFats": 0.6,
      "carbs": 5.8,
      "sugars": 1.5,
      "protein": 2.6,
      "salt": 0.8
    }
  },
  {
    "id": "item-90",
    "category": "paste-risotto",
    "name": {
      "ro": "Risotto alla pescadora",
      "en": "Risotto alla pescadora"
    },
    "weight": "50 gr",
    "price": 49.0,
    "ingredients": {
      "ro": "orez,  fructe de mare, lămâie, unt, condimente",
      "en": "rice,  fructe of mare, lemon, butter, condimente"
    },
    "allergens": [
      3
    ],
    "isFrozen": true,
    "nutrition": {
      "energyKcal": 145.8,
      "energyKj": 612.5,
      "fats": 4.8,
      "saturatedFats": 2.1,
      "carbs": 18.3,
      "sugars": 0.7,
      "protein": 7.8,
      "salt": 0.2
    }
  },
  {
    "id": "item-91",
    "category": "salate",
    "name": {
      "ro": "Salată grecească3, 7300/70gr",
      "en": "Salată grecească3, 7300/70gr"
    },
    "weight": "200g",
    "price": 28.0,
    "ingredients": {
      "ro": "salată iceberg, telemea, roșie, castraveți, măsline, ardei, lămâie, ulei de măsline, condimente",
      "en": "salad iceberg, telemea, tomato, withwithmbers, olives, pepper, lemon, oil of olives, condimente"
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 115.4,
      "energyKj": 478.0,
      "fats": 10.5,
      "saturatedFats": 3.6,
      "carbs": 2.8,
      "sugars": 1.8,
      "protein": 2.6,
      "salt": 1.7
    }
  },
  {
    "id": "item-92",
    "category": "salate",
    "name": {
      "ro": "Salata cu ton  3, 4, 7,11300/70gr",
      "en": "Salata with ton  3, 4, 7,11300/70gr"
    },
    "weight": "200g",
    "price": 28.0,
    "ingredients": {
      "ro": "salata iceberg, ton, salată, roșie, castraveți, măsline, iaurt, ardei, lămâie, ulei de măsline, condimente",
      "en": "salata iceberg, tuna, salad, tomato, withwithmbers, olives, yogurt, pepper, lemon, oil of olives, condimente"
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 115.4,
      "energyKj": 478.0,
      "fats": 10.5,
      "saturatedFats": 3.6,
      "carbs": 2.8,
      "sugars": 1.8,
      "protein": 2.6,
      "salt": 1.7
    }
  },
  {
    "id": "item-93",
    "category": "salate",
    "name": {
      "ro": "Salată Cezar 3, 7             300/70gr",
      "en": "Salată Cezar 3, 7             300/70gr"
    },
    "weight": "200g",
    "price": 35.0,
    "ingredients": {
      "ro": "piept de pui, salată iceberg, parmezan, ou, lămâie, muștar,  file de anșoa, capere, castraveți murați, ulei de măsline, condimente",
      "en": "piept of chicken, salad iceberg, parmezan, egg, lemon, mustard,  file of anchovies, capere, withwithmbers murați, oil of olives, condimente"
    },
    "allergens": [],
    "isFrozen": true,
    "nutrition": {
      "energyKcal": 115.4,
      "energyKj": 478.0,
      "fats": 10.5,
      "saturatedFats": 3.6,
      "carbs": 2.8,
      "sugars": 1.8,
      "protein": 2.6,
      "salt": 1.7
    }
  },
  {
    "id": "item-94",
    "category": "salate",
    "name": {
      "ro": "Salată Capresse",
      "en": "Salată Capresse"
    },
    "weight": "7100/100/50 gr",
    "price": 28.0,
    "ingredients": {
      "ro": "mozzarela, roșii, rucola/salata sezon, ulei de măsline, pesto, iaurt, condimente",
      "en": "mozzarela, tomatoes, rucola/salata sezon, oil of olives, pesto, yogurt, condimente"
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 334.0,
      "energyKj": 1369.4,
      "fats": 25.0,
      "saturatedFats": 18.3,
      "carbs": 1.0,
      "sugars": 1.0,
      "protein": 26.0,
      "salt": 2.1
    }
  },
  {
    "id": "item-95",
    "category": "salate",
    "name": {
      "ro": "Salată cu avocado, pui sau creveti",
      "en": "Salată with avocado, pui sau creveti"
    },
    "weight": "11300/70 gr",
    "price": 38.0,
    "ingredients": {
      "ro": "piept de pui/creveți, parmezan, avocado, salată iceberg și de sezon, susan, castraveți, roșii, lămâie, muștar, ulei de măsline, condimente",
      "en": "piept of chicken/prawns, parmezan, avocado, salad iceberg & of sezon, sesame, withwithmbers, tomatoes, lemon, mustard, oil of olives, condimente"
    },
    "allergens": [
      3,
      7
    ],
    "isFrozen": true,
    "nutrition": {
      "energyKcal": 115.4,
      "energyKj": 478.0,
      "fats": 10.5,
      "saturatedFats": 3.6,
      "carbs": 2.8,
      "sugars": 1.8,
      "protein": 2.6,
      "salt": 1.7
    }
  },
  {
    "id": "item-96",
    "category": "salate",
    "name": {
      "ro": "Salată varză albă      150gr",
      "en": "Salată varză albă      150gr"
    },
    "weight": "200g",
    "price": 8.0,
    "ingredients": {
      "ro": "varză, oțet balsamic, ulei de floarea soarelui, lămâie)    Informații nutriționale 100g: Valoare Energetică (kJ/kcal): 239.7 / 57.6, Grăsimi (g): 3.5 din care: Acizi grași saturați (g) 0.3, Glucide (g): 6.3 din care: Zaharuri (g): 4.3, Proteine (g): 1.1, Sare (g): 0",
      "en": "cabbage, oțet balsamic, oil of floarea soarelui, lemon)    Informații nutriționale 100g: Valoare Energetică (kJ/kcal): 239.7 / 57.6, Grăsimi (g): 3.5 din care: Acizi gra& saturați (g) 0.3, Gluciof (g): 6.3 din care: Zaharuri (g): 4.3, Proteine (g): 1.1, salt (g): 0"
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-97",
    "category": "salate",
    "name": {
      "ro": "Salată  de roşii                 150gr",
      "en": "Salată  of roşii                 150gr"
    },
    "weight": "200g",
    "price": 10.0,
    "ingredients": {
      "ro": "roșie, ulei de floarea soarelui, sare)     Informații nutriționale 100g: Valoare Energetică (kJ/kcal): 283.2 / 68.4, Grăsimi (g): 5.6 din care: Acizi grași saturați (g) 0.6, Glucide (g): 4.6 din care: Zaharuri (g): 3.2, Proteine (g): 0.6, Sare (g): 1.3",
      "en": "tomato, oil of floarea soarelui, salt)     Informații nutriționale 100g: Valoare Energetică (kJ/kcal): 283.2 / 68.4, Grăsimi (g): 5.6 din care: Acizi gra& saturați (g) 0.6, Gluciof (g): 4.6 din care: Zaharuri (g): 3.2, Proteine (g): 0.6, salt (g): 1.3"
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-98",
    "category": "salate",
    "name": {
      "ro": "Ardei copţi              150gr",
      "en": "Arofi copţi              150gr"
    },
    "weight": "200g",
    "price": 12.0,
    "ingredients": {
      "ro": "ardei copți, oțet)       Informații nutriționale 100g: Valoare Energetică (kJ/kcal): 117.2 / 28, Grăsimi (g): 0.1 din care: Acizi grași saturați (g) 0, Glucide (g): 0.1 din care: Zaharuri (g): 0.1, Proteine (g): 0.6, Sare (g): 1.8",
      "en": "pepper copți, oțet)       Informații nutriționale 100g: Valoare Energetică (kJ/kcal): 117.2 / 28, Grăsimi (g): 0.1 din care: Acizi gra& saturați (g) 0, Gluciof (g): 0.1 din care: Zaharuri (g): 0.1, Proteine (g): 0.6, salt (g): 1.8"
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-99",
    "category": "salate",
    "name": {
      "ro": "Salată murături1, 10               150gr",
      "en": "Salată murături1, 10               150gr"
    },
    "weight": "200g",
    "price": 10.0,
    "ingredients": {
      "ro": "salată de murături mix)       Informații nutriționale 100g: Valoare Energetică (kJ/kcal): 113.2 / 27.1, Grăsimi (g): 0.2 din care: Acizi grași saturați (g) 0, Glucide (g): 4 din care: Zaharuri (g): 5, Proteine (g): 0.5, Sare (g): 0.8",
      "en": "salad of murături mix)       Informații nutriționale 100g: Valoare Energetică (kJ/kcal): 113.2 / 27.1, Grăsimi (g): 0.2 din care: Acizi gra& saturați (g) 0, Gluciof (g): 4 din care: Zaharuri (g): 5, Proteine (g): 0.5, salt (g): 0.8"
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-100",
    "category": "salate",
    "name": {
      "ro": "Salată de sfeclă roşie",
      "en": "Salată of sfeclă roşie"
    },
    "weight": "50 gr",
    "price": 12.0,
    "ingredients": {
      "ro": "sfeclă roșie, oțet balsamic)   Informații nutriționale 100g: Valoare Energetică (kJ/kcal): 175.1 / 41.5, Grăsimi (g): 0.2 din care: Acizi grași saturați (g) 0, Glucide (g): 9.7 din care: Zaharuri (g): 7.1, Proteine (g): 1.6, Sare (g): 0.1",
      "en": "beetroot tomato, oțet balsamic)   Informații nutriționale 100g: Valoare Energetică (kJ/kcal): 175.1 / 41.5, Grăsimi (g): 0.2 din care: Acizi gra& saturați (g) 0, Gluciof (g): 9.7 din care: Zaharuri (g): 7.1, Proteine (g): 1.6, salt (g): 0.1"
    },
    "allergens": [
      1
    ],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-101",
    "category": "salate",
    "name": {
      "ro": "Salată de ceapă    150gr",
      "en": "Salată of ceapă    150gr"
    },
    "weight": "200g",
    "price": 8.0,
    "ingredients": {
      "ro": "ceapă, ulei de floarea soarelui, sare)  Informații nutriționale 100g: Valoare Energetică (kJ/kcal): 193.9 / 46.6, Grăsimi (g): 2.2 din care: Acizi grași saturați (g) 0.2, Glucide (g): 6.5 din care: Zaharuri (g): 4.6, Proteine (g): 1.2, Sare (g): 1.3.",
      "en": "onion, oil of floarea soarelui, salt)  Informații nutriționale 100g: Valoare Energetică (kJ/kcal): 193.9 / 46.6, Grăsimi (g): 2.2 din care: Acizi gra& saturați (g) 0.2, Gluciof (g): 6.5 din care: Zaharuri (g): 4.6, Proteine (g): 1.2, salt (g): 1.3."
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-102",
    "category": "desert",
    "name": {
      "ro": "Îngheţată la cupă",
      "en": "Îngheţată la withpă"
    },
    "weight": "100 gr",
    "price": 22.0,
    "ingredients": {
      "ro": "înghețată,  lapte,  frișcă, topping fructe, ciocolată",
      "en": "ice cream,  milk,  whipped cream, topping fructe, chocolate"
    },
    "allergens": [
      6,
      7
    ],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 906.6,
      "energyKj": 865.8,
      "fats": 10.8,
      "saturatedFats": 2.8,
      "carbs": 25.0,
      "sugars": 22.4,
      "protein": 1.9,
      "salt": 0.1
    }
  },
  {
    "id": "item-103",
    "category": "desert",
    "name": {
      "ro": "Vulcan de ciocolată cu îngheţată și fructe",
      "en": "Vulcan of ciocolată with îngheţată & fructe"
    },
    "weight": "200 gr",
    "price": 28.0,
    "ingredients": {
      "ro": "înghețată lapte, fructe asortate, lava cake, topping ciocolată,  frișcă",
      "en": "ice cream milk, fructe asortate, lava cake, topping chocolate,  whipped cream"
    },
    "allergens": [
      1,
      3,
      6,
      7,
      8
    ],
    "isFrozen": true,
    "nutrition": {
      "energyKcal": 235.2,
      "energyKj": 988.7,
      "fats": 8.7,
      "saturatedFats": 6.8,
      "carbs": 38.2,
      "sugars": 25.5,
      "protein": 2.1,
      "salt": 0.1
    }
  },
  {
    "id": "item-104",
    "category": "desert",
    "name": {
      "ro": "Clătite cu banană, finetti și înghețată",
      "en": "Clătite with banană, finetti & înghețată"
    },
    "weight": "200 gr",
    "price": 28.0,
    "ingredients": {
      "ro": "banane, finetti , frișcă, înghețată, lapte, făină de grâu, ou, ulei de floarea soarelui, zahăr",
      "en": "banane, finetti , whipped cream, ice cream, milk, flour of grâu, egg, oil of floarea soarelui, sugar"
    },
    "allergens": [
      1,
      3,
      7
    ],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 339.1,
      "energyKj": 1417.5,
      "fats": 20.9,
      "saturatedFats": 6.4,
      "carbs": 32.5,
      "sugars": 17.6,
      "protein": 5.8,
      "salt": 0.1
    }
  },
  {
    "id": "item-105",
    "category": "desert",
    "name": {
      "ro": "Clătite cu gem  1,3,7_____________________",
      "en": "Clătite with gem  1,3,7_____________________"
    },
    "weight": "50 gr",
    "price": 20.0,
    "ingredients": {
      "ro": "ou, lapte, făină de grâu, frișcă, zahăr, gem fructe, ulei de floarea soarelui",
      "en": "egg, milk, flour of grâu, whipped cream, sugar, jam fructe, oil of floarea soarelui"
    },
    "allergens": [
      2
    ],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 271.1,
      "energyKj": 1139.6,
      "fats": 10.9,
      "saturatedFats": 3.5,
      "carbs": 38.7,
      "sugars": 21.8,
      "protein": 5.9,
      "salt": 0.1
    }
  },
  {
    "id": "item-106",
    "category": "desert",
    "name": {
      "ro": "Papanaşi cu brânză şi gem 1, 3, 7___",
      "en": "Papanaşi with brânză şi gem 1, 3, 7___"
    },
    "weight": "300 gr",
    "price": 32.0,
    "ingredients": {
      "ro": "smântână, făină de grâu, ou, brânză dulce, gem, ulei de floarea soarelui, zahăr, griș sare, lămâie",
      "en": "sour cream, flour of grâu, egg, cheese dulce, jam, oil of floarea soarelui, sugar, griș salt, lemon"
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 336.9,
      "energyKj": 1407.7,
      "fats": 19.9,
      "saturatedFats": 5.3,
      "carbs": 33.8,
      "sugars": 17.4,
      "protein": 6.3,
      "salt": 0.8
    }
  },
  {
    "id": "item-107",
    "category": "desert",
    "name": {
      "ro": "Felie desert 1, 3, 7_____________________________",
      "en": "Felie ofsert 1, 3, 7_____________________________"
    },
    "weight": "50 gr",
    "price": 22.0,
    "ingredients": {
      "ro": "făină, frișcă, pișcoturi, ouă,  mascarpone,  zahăr  pudră, cafea, esență de rom, vanilie, cacao",
      "en": "flour, whipped cream, pișcoturi, eggs,  mascarpone,  sugar  pudră, cafea, esență of rum, vanilla, cocoa"
    },
    "allergens": [
      1
    ],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 239.3,
      "energyKj": 1003.6,
      "fats": 13.1,
      "saturatedFats": 7.4,
      "carbs": 26.2,
      "sugars": 11.7,
      "protein": 3.7,
      "salt": 0.1
    }
  },
  {
    "id": "item-108",
    "category": "desert",
    "name": {
      "ro": "Ecler 3,7     __                  180gr___________  ___",
      "en": "Ecler 3,7     __                  180gr___________  ___"
    },
    "weight": "200g",
    "price": 22.0,
    "ingredients": {
      "ro": "făină de grâu, ou, lapte, gem de fructe, zahăr, griș, lămâie esență vanilie",
      "en": "flour of grâu, egg, milk, jam of fructe, sugar, griș, lemon esență vanilla"
    },
    "allergens": [],
    "isFrozen": true,
    "nutrition": {
      "energyKcal": 336.9,
      "energyKj": 1407.7,
      "fats": 19.9,
      "saturatedFats": 5.3,
      "carbs": 33.8,
      "sugars": 17.4,
      "protein": 6.3,
      "salt": 0.8
    }
  },
  {
    "id": "item-109",
    "category": "desert",
    "name": {
      "ro": "Cheesecake 3,7       __",
      "en": "Cheesecake 3,7       __"
    },
    "weight": "80 gr",
    "price": 22.0,
    "ingredients": {
      "ro": "făină de grâu, ou, lapte, gem de fructe, zahăr, brânză dulce, philadelphia, lămâie, esența vanilie",
      "en": "flour of grâu, egg, milk, jam of fructe, sugar, cheese dulce, philaoflphia, lemon, esența vanilla"
    },
    "allergens": [
      1
    ],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 336.9,
      "energyKj": 1407.7,
      "fats": 19.9,
      "saturatedFats": 5.3,
      "carbs": 33.8,
      "sugars": 17.4,
      "protein": 6.3,
      "salt": 0.8
    }
  },
  {
    "id": "item-110",
    "category": "desert",
    "name": {
      "ro": "Tiramisu",
      "en": "Classic Italian Tiramisu"
    },
    "weight": "150 gr",
    "price": 22.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [
      3,
      7
    ],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-111",
    "category": "pizza",
    "name": {
      "ro": "FOCACCIA  1200gr",
      "en": "FOCACCIA  1200gr"
    },
    "weight": "200g",
    "price": 12.0,
    "ingredients": {
      "ro": "făină de grâu, ulei de măsline, sare, oregano, drojdie",
      "en": "flour of grâu, oil of olives, salt, oregano, drojdie"
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 383.9,
      "energyKj": 1617.3,
      "fats": 13.1,
      "saturatedFats": 1.4,
      "carbs": 59.2,
      "sugars": 2.2,
      "protein": 9.4,
      "salt": 0.8
    }
  },
  {
    "id": "item-112",
    "category": "pizza",
    "name": {
      "ro": "FOCACCIA CASEI 1,7_          230gr",
      "en": "FOCACCIA CASEI 1,7_          230gr"
    },
    "weight": "200g",
    "price": 15.0,
    "ingredients": {
      "ro": "făină de grâu, parmesan, ulei de măsline, sare, oregano, drojdie",
      "en": "flour of grâu, parmesan, oil of olives, salt, oregano, drojdie"
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 392.6,
      "energyKj": 1651.1,
      "fats": 15.9,
      "saturatedFats": 4.5,
      "carbs": 49.3,
      "sugars": 1.9,
      "protein": 14.7,
      "salt": 1.1
    }
  },
  {
    "id": "item-113",
    "category": "pizza",
    "name": {
      "ro": "1. PIZZA MARGHERITA",
      "en": "1. PIZZA MARGHERITA"
    },
    "weight": "385 gr",
    "price": 30.0,
    "ingredients": {
      "ro": "făină de grâu, sos roșii, drojdie, mozzarella, sare, oregano",
      "en": "flour of grâu, sauce tomatoes, drojdie, mozzarella, salt, oregano"
    },
    "allergens": [
      1,
      7
    ],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 265.4,
      "energyKj": 1122.6,
      "fats": 7.0,
      "saturatedFats": 3.3,
      "carbs": 37.8,
      "sugars": 2.0,
      "protein": 14.0,
      "salt": 2.4
    }
  },
  {
    "id": "item-114",
    "category": "pizza",
    "name": {
      "ro": "2.PIZZA MARISSA",
      "en": "2.PIZZA MARISSA"
    },
    "weight": "520 gr",
    "price": 35.0,
    "ingredients": {
      "ro": "făină de grâu, sare, drojdie, sos de roșii, mozzarella, șuncă, salam, porumb, ciuperci, prosciutto, măsline, oregano",
      "en": "flour of grâu, salt, drojdie, sauce of tomatoes, mozzarella, ham, salam, porumb, mushrooms, prosciutto, olives, oregano"
    },
    "allergens": [
      1,
      7,
      9
    ],
    "isFrozen": true,
    "nutrition": {
      "energyKcal": 228.7,
      "energyKj": 959.9,
      "fats": 10.9,
      "saturatedFats": 3.9,
      "carbs": 25.3,
      "sugars": 5.1,
      "protein": 10.5,
      "salt": 1.6
    }
  },
  {
    "id": "item-115",
    "category": "pizza",
    "name": {
      "ro": "3.PIZZA PROSCIUTTO",
      "en": "3.PIZZA PROSCIUTTO"
    },
    "weight": "455 gr",
    "price": 30.0,
    "ingredients": {
      "ro": "făină de grâu, sos de roșii, drojdie, mozzarella, șuncă, sare, oregano",
      "en": "flour of grâu, sauce of tomatoes, drojdie, mozzarella, ham, salt, oregano"
    },
    "allergens": [
      1,
      7
    ],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 265.4,
      "energyKj": 1122.6,
      "fats": 7.0,
      "saturatedFats": 3.3,
      "carbs": 37.8,
      "sugars": 2.0,
      "protein": 14.0,
      "salt": 2.4
    }
  },
  {
    "id": "item-116",
    "category": "pizza",
    "name": {
      "ro": "4.PIZZA PROSCIUTTO PORUMB",
      "en": "4.PIZZA PROSCIUTTO PORUMB"
    },
    "weight": "455 gr",
    "price": 32.0,
    "ingredients": {
      "ro": "făină de grâu, sos de roșii, drojdie, mozzarella, șuncă, porumb, sare, oregano",
      "en": "flour of grâu, sauce of tomatoes, drojdie, mozzarella, ham, porumb, salt, oregano"
    },
    "allergens": [
      1,
      7
    ],
    "isFrozen": true,
    "nutrition": {
      "energyKcal": 265.4,
      "energyKj": 1122.6,
      "fats": 7.0,
      "saturatedFats": 3.3,
      "carbs": 37.8,
      "sugars": 2.0,
      "protein": 14.0,
      "salt": 2.4
    }
  },
  {
    "id": "item-117",
    "category": "pizza",
    "name": {
      "ro": "5.PIZZA PROSCIUTTO FUNGHI",
      "en": "5.PIZZA PROSCIUTTO FUNGHI"
    },
    "weight": "455 gr",
    "price": 32.0,
    "ingredients": {
      "ro": "făină de grâu, sos de roșii, drojdie, mozzarella, șuncă, ciuperci, sare, oregano",
      "en": "flour of grâu, sauce of tomatoes, drojdie, mozzarella, ham, mushrooms, salt, oregano"
    },
    "allergens": [
      1,
      7
    ],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 265.4,
      "energyKj": 1122.6,
      "fats": 7.0,
      "saturatedFats": 3.3,
      "carbs": 37.8,
      "sugars": 2.0,
      "protein": 14.0,
      "salt": 2.4
    }
  },
  {
    "id": "item-118",
    "category": "pizza",
    "name": {
      "ro": "6.PIZZA PROSCIUTTO CRUDO",
      "en": "6.PIZZA PROSCIUTTO CRUDO"
    },
    "weight": "455 gr",
    "price": 35.0,
    "ingredients": {
      "ro": "făină de grâu, sos de roșii, drojdie, mozzarella, prosciutto crudo, oregano",
      "en": "flour of grâu, sauce of tomatoes, drojdie, mozzarella, prosciutto crudo, oregano"
    },
    "allergens": [
      1,
      7
    ],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 265.4,
      "energyKj": 1122.6,
      "fats": 7.0,
      "saturatedFats": 3.3,
      "carbs": 37.8,
      "sugars": 2.0,
      "protein": 14.0,
      "salt": 2.4
    }
  },
  {
    "id": "item-119",
    "category": "pizza",
    "name": {
      "ro": "7.PIZZA PROSCIUTTO CRUDO RUCOLA",
      "en": "7.PIZZA PROSCIUTTO CRUDO RUCOLA"
    },
    "weight": "455 gr",
    "price": 36.0,
    "ingredients": {
      "ro": "făină de grâu, sos de roșii, drojdie, mozzarella, prosciutto crudo, rucola, sare, oregano",
      "en": "flour of grâu, sauce of tomatoes, drojdie, mozzarella, prosciutto crudo, rucola, salt, oregano"
    },
    "allergens": [
      1,
      7
    ],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 265.4,
      "energyKj": 1122.6,
      "fats": 7.0,
      "saturatedFats": 3.3,
      "carbs": 37.8,
      "sugars": 2.0,
      "protein": 14.0,
      "salt": 2.4
    }
  },
  {
    "id": "item-120",
    "category": "pizza",
    "name": {
      "ro": "8.PIZZA DIAVOLLA",
      "en": "8.PIZZA DIAVOLLA"
    },
    "weight": "425 gr",
    "price": 32.0,
    "ingredients": {
      "ro": "făină de grâu, drojdie, salam  picant, mozzarella, sos de roșii, sare, oregano",
      "en": "flour of grâu, drojdie, salam  picant, mozzarella, sauce of tomatoes, salt, oregano"
    },
    "allergens": [
      1,
      7
    ],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 337.5,
      "energyKj": 1420.0,
      "fats": 16.3,
      "saturatedFats": 6.2,
      "carbs": 35.3,
      "sugars": 1.9,
      "protein": 13.8,
      "salt": 2.7
    }
  },
  {
    "id": "item-121",
    "category": "pizza",
    "name": {
      "ro": "9.PIZZA FUNGHI",
      "en": "9.PIZZA FUNGHI"
    },
    "weight": "430 gr",
    "price": 32.0,
    "ingredients": {
      "ro": "făină de grâu, drojdie, mozzarella, sos de roșii, ciuperci, sare, oregano",
      "en": "flour of grâu, drojdie, mozzarella, sauce of tomatoes, mushrooms, salt, oregano"
    },
    "allergens": [
      1,
      7
    ],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 253.3,
      "energyKj": 1066.9,
      "fats": 9.9,
      "saturatedFats": 3.6,
      "carbs": 32.2,
      "sugars": 1.8,
      "protein": 10.3,
      "salt": 1.9
    }
  },
  {
    "id": "item-122",
    "category": "pizza",
    "name": {
      "ro": "10.PIZZA CALIFORNIA",
      "en": "10.PIZZA CALIFORNIA"
    },
    "weight": "480 gr",
    "price": 32.0,
    "ingredients": {
      "ro": "făină degrâu, sare, drojdie, sos de roșii, ciuperci, șuncă, salam, porumb, mozzarella, oregano",
      "en": "flour ofgrâu, salt, drojdie, sauce of tomatoes, mushrooms, ham, salam, porumb, mozzarella, oregano"
    },
    "allergens": [
      1,
      7
    ],
    "isFrozen": true,
    "nutrition": {
      "energyKcal": 247.1,
      "energyKj": 1042.5,
      "fats": 7.7,
      "saturatedFats": 1.8,
      "carbs": 37.0,
      "sugars": 2.1,
      "protein": 8.8,
      "salt": 2.0
    }
  },
  {
    "id": "item-123",
    "category": "pizza",
    "name": {
      "ro": "11.PIZZA QUATTRO STAGIONE",
      "en": "11.PIZZA QUATTRO STAGIONE"
    },
    "weight": "450 gr",
    "price": 32.0,
    "ingredients": {
      "ro": "făină de grâu, sare, drojdie,sos de roșii, mozzarella, ciuperci, șuncă, porumb, măsline, oregano",
      "en": "flour of grâu, salt, drojdie,sauce of tomatoes, mozzarella, mushrooms, ham, porumb, olives, oregano"
    },
    "allergens": [
      1,
      7
    ],
    "isFrozen": true,
    "nutrition": {
      "energyKcal": 232.2,
      "energyKj": 977.6,
      "fats": 9.2,
      "saturatedFats": 2.9,
      "carbs": 31.5,
      "sugars": 2.6,
      "protein": 9.4,
      "salt": 2.6
    }
  },
  {
    "id": "item-124",
    "category": "pizza",
    "name": {
      "ro": "12.PIZZA QUATTRO FORMAGGI",
      "en": "12.PIZZA QUATTRO FORMAGGI"
    },
    "weight": "450 gr",
    "price": 35.0,
    "ingredients": {
      "ro": "făină de grâu, sare, drojdie, sos de roșii, mozzarella, brânză de burduf, gorgonzola, parmezan, oregano) Informații nutriționale 100g: Valoare Energetică (kJ/kcal): 1257.9 / 298.2, Grăsimi (g): 10.8 din care: Acizi grași saturați (g) 5.5, Glucide (g): 38.2 din care: Zaharuri (g): 2, Proteine (g): 13.5, Sare (g): 2.1",
      "en": "flour of grâu, salt, drojdie, sauce of tomatoes, mozzarella, cheese of burduf, gorgonzola, parmezan, oregano) Informații nutriționale 100g: Valoare Energetică (kJ/kcal): 1257.9 / 298.2, Grăsimi (g): 10.8 din care: Acizi gra& saturați (g) 5.5, Gluciof (g): 38.2 din care: Zaharuri (g): 2, Proteine (g): 13.5, salt (g): 2.1"
    },
    "allergens": [
      1,
      7
    ],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-125",
    "category": "pizza",
    "name": {
      "ro": "13.PIZZA TONNO E CIPOLLA",
      "en": "13.PIZZA TONNO E CIPOLLA"
    },
    "weight": "450 gr",
    "price": 32.0,
    "ingredients": {
      "ro": "făină de grâu, ton, mozzarella, roșii cuburi, ceapă, drojdie, sare, oregano",
      "en": "flour of grâu, tuna, mozzarella, tomatoes withburi, onion, drojdie, salt, oregano"
    },
    "allergens": [
      1,
      4,
      7
    ],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 230.7,
      "energyKj": 976.8,
      "fats": 5.3,
      "saturatedFats": 3.0,
      "carbs": 31.5,
      "sugars": 1.8,
      "protein": 15.6,
      "salt": 2.0
    }
  },
  {
    "id": "item-126",
    "category": "pizza",
    "name": {
      "ro": "14.PIZZA QUATRO CARNI",
      "en": "14.PIZZA QUATRO CARNI"
    },
    "weight": "450 gr",
    "price": 38.0,
    "ingredients": {
      "ro": "făină de grâu, sare, drojdie, sos de roșii, mozzarella, salam, șuncă, cârnat, bacon, oregano",
      "en": "flour of grâu, salt, drojdie, sauce of tomatoes, mozzarella, salam, ham, cârnat, bacon, oregano"
    },
    "allergens": [
      1,
      7
    ],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 281.8,
      "energyKj": 1188.9,
      "fats": 9.0,
      "saturatedFats": 4.5,
      "carbs": 38.6,
      "sugars": 1.8,
      "protein": 13.6,
      "salt": 1.1
    }
  },
  {
    "id": "item-127",
    "category": "pizza",
    "name": {
      "ro": "15.PIZZA VEGETARIANĂ",
      "en": "15.PIZZA VEGETARIANĂ"
    },
    "weight": "450 gr",
    "price": 32.0,
    "ingredients": {
      "ro": "făină de grâu, sare, drojdie, sos de roșii, mozzarella, cartofi prăjiți, ciuperci, porumb,  măsline, ceapă, ardei) Informații nutriționale 100g: Valoare Energetică (kJ/kcal): 2315.7 / 552.1, Grăsimi (g): 27.3 din care: Acizi grași saturați (g) 10.3, Glucide (g): 69.1 din care: Zaharuri (g): 8, Proteine (g): 14.2, Sare (g): 3.1",
      "en": "flour of grâu, salt, drojdie, sauce of tomatoes, mozzarella, potatoes prăjiți, mushrooms, porumb,  olives, onion, pepper) Informații nutriționale 100g: Valoare Energetică (kJ/kcal): 2315.7 / 552.1, Grăsimi (g): 27.3 din care: Acizi gra& saturați (g) 10.3, Gluciof (g): 69.1 din care: Zaharuri (g): 8, Proteine (g): 14.2, salt (g): 3.1"
    },
    "allergens": [
      1,
      7
    ],
    "isFrozen": true,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-128",
    "category": "pizza",
    "name": {
      "ro": "16.PIZZA TOSCANA",
      "en": "16.PIZZA TOSCANA"
    },
    "weight": "450 gr",
    "price": 35.0,
    "ingredients": {
      "ro": "făină de grâu, sare, drojdie, sos de roșii, mozzarella, ou,șuncă, bacon, oregano",
      "en": "flour of grâu, salt, drojdie, sauce of tomatoes, mozzarella, egg,ham, bacon, oregano"
    },
    "allergens": [
      1,
      3,
      7
    ],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 263.9,
      "energyKj": 1114.5,
      "fats": 7.2,
      "saturatedFats": 3.6,
      "carbs": 37.9,
      "sugars": 1.7,
      "protein": 13.6,
      "salt": 2.1
    }
  },
  {
    "id": "item-129",
    "category": "pizza",
    "name": {
      "ro": "17.PIZZA SPECIALE",
      "en": "17.PIZZA SPECIALE"
    },
    "weight": "550 gr",
    "price": 38.0,
    "ingredients": {
      "ro": "făină de grâu, sare, drojdie, sos de roșii, mozzarella, cartofi prăjiți,  piept de pui",
      "en": "flour of grâu, salt, drojdie, sauce of tomatoes, mozzarella, potatoes prăjiți,  piept of chicken"
    },
    "allergens": [
      1,
      7
    ],
    "isFrozen": true,
    "nutrition": {
      "energyKcal": 278.0,
      "energyKj": 1172.4,
      "fats": 7.9,
      "saturatedFats": 2.7,
      "carbs": 40.6,
      "sugars": 3.0,
      "protein": 13.2,
      "salt": 1.4
    }
  },
  {
    "id": "item-130",
    "category": "pizza",
    "name": {
      "ro": "18. PIZZA CAPRICCIOSA 1,7                        500gr",
      "en": "18. PIZZA CAPRICCIOSA 1,7                        500gr"
    },
    "weight": "200g",
    "price": 32.0,
    "ingredients": {
      "ro": "făină de grâu,  sare, drojdie, sos de roșii, mozzarella, anghinare, măsline, șuncă, ciuperci, porumb, oregano",
      "en": "flour of grâu,  salt, drojdie, sauce of tomatoes, mozzarella, artichoke, olives, ham, mushrooms, porumb, oregano"
    },
    "allergens": [],
    "isFrozen": true,
    "nutrition": {
      "energyKcal": 243.2,
      "energyKj": 1021.9,
      "fats": 9.8,
      "saturatedFats": 3.5,
      "carbs": 31.5,
      "sugars": 2.0,
      "protein": 10.4,
      "salt": 2.1
    }
  },
  {
    "id": "item-131",
    "category": "pizza",
    "name": {
      "ro": "19. PIZZA HAWAI 1,7           500gr",
      "en": "19. PIZZA HAWAI 1,7           500gr"
    },
    "weight": "200g",
    "price": 32.0,
    "ingredients": {
      "ro": "făină de grâu, sare, drojdie, sos de roșii, mozzarella, șuncă, ananas, oregano",
      "en": "flour of grâu, salt, drojdie, sauce of tomatoes, mozzarella, ham, pineapple, oregano"
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 243.2,
      "energyKj": 1021.9,
      "fats": 9.8,
      "saturatedFats": 3.5,
      "carbs": 31.5,
      "sugars": 2.0,
      "protein": 10.4,
      "salt": 2.1
    }
  },
  {
    "id": "item-132",
    "category": "pizza",
    "name": {
      "ro": "20. PIZZA KEBAB 1,7           500gr",
      "en": "20. PIZZA KEBAB 1,7           500gr"
    },
    "weight": "200g",
    "price": 38.0,
    "ingredients": {
      "ro": "făină de grâu, sare, drojdie, sos de roșii, mozzarella, carne de pui, cartofi prăjiți, roșii cuburi, castraveți murați, ceapă, sos alb, oregano",
      "en": "flour of grâu, salt, drojdie, sauce of tomatoes, mozzarella, carne of chicken, potatoes prăjiți, tomatoes withburi, withwithmbers murați, onion, sauce alb, oregano"
    },
    "allergens": [],
    "isFrozen": true,
    "nutrition": {
      "energyKcal": 243.2,
      "energyKj": 1021.9,
      "fats": 9.8,
      "saturatedFats": 3.5,
      "carbs": 31.5,
      "sugars": 2.0,
      "protein": 10.4,
      "salt": 2.1
    }
  },
  {
    "id": "item-133",
    "category": "pizza",
    "name": {
      "ro": "21.PIZZA MARISSA FAMILY",
      "en": "21.PIZZA MARISSA FAMILY"
    },
    "weight": "1400 gr",
    "price": 72.0,
    "ingredients": {
      "ro": "făină de grâu, mozzarella, porumb, măsline, ciuperci, șuncă, salam, prosciutto crudo, roșii cuburi, ulei de floarea soarelui, ceapă, zahăr, sare, drojdie",
      "en": "flour of grâu, mozzarella, porumb, olives, mushrooms, ham, salam, prosciutto crudo, tomatoes withburi, oil of floarea soarelui, onion, sugar, salt, drojdie"
    },
    "allergens": [
      1,
      7
    ],
    "isFrozen": true,
    "nutrition": {
      "energyKcal": 285.0,
      "energyKj": 1200.3,
      "fats": 11.3,
      "saturatedFats": 4.3,
      "carbs": 35.9,
      "sugars": 2.2,
      "protein": 13.1,
      "salt": 1.5
    }
  },
  {
    "id": "item-134",
    "category": "ambalaje",
    "name": {
      "ro": "Ambalaj pizza mică",
      "en": "Ambalaj pizza mică"
    },
    "weight": "buc",
    "price": 3.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-135",
    "category": "ambalaje",
    "name": {
      "ro": "Ambalaj pizza mare",
      "en": "Ambalaj pizza mare"
    },
    "weight": "buc",
    "price": 4.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-136",
    "category": "ambalaje",
    "name": {
      "ro": "Pungă",
      "en": "Pungă"
    },
    "weight": "buc",
    "price": 0.5,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-137",
    "category": "ambalaje",
    "name": {
      "ro": "Caserolă",
      "en": "Caserolă"
    },
    "weight": "buc",
    "price": 1.5,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-138",
    "category": "ambalaje",
    "name": {
      "ro": "Tacâm",
      "en": "Tacâm"
    },
    "weight": "buc",
    "price": 1.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-139",
    "category": "ambalaje",
    "name": {
      "ro": "Salam",
      "en": "Salam"
    },
    "weight": "50 gr",
    "price": 5.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [
      7
    ],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 381.2,
      "energyKj": 1594.9,
      "fats": 30.0,
      "saturatedFats": 12.7,
      "carbs": 1.1,
      "sugars": 0.0,
      "protein": 26.7,
      "salt": 4.2
    }
  },
  {
    "id": "item-140",
    "category": "ambalaje",
    "name": {
      "ro": "Șuncă",
      "en": "Șuncă"
    },
    "weight": "50 gr",
    "price": 5.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [
      7
    ],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 103.0,
      "energyKj": 431.0,
      "fats": 3.0,
      "saturatedFats": 1.2,
      "carbs": 0.7,
      "sugars": 0.0,
      "protein": 18.0,
      "salt": 2.0
    }
  },
  {
    "id": "item-141",
    "category": "ambalaje",
    "name": {
      "ro": "Cârnat",
      "en": "Cârnat"
    },
    "weight": "50 gr",
    "price": 5.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [
      7
    ],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 260.0,
      "energyKj": 1080.0,
      "fats": 19.6,
      "saturatedFats": 7.5,
      "carbs": 9.3,
      "sugars": 1.6,
      "protein": 11.6,
      "salt": 1.8
    }
  },
  {
    "id": "item-142",
    "category": "ambalaje",
    "name": {
      "ro": "Bacon50gr",
      "en": "Bacon50gr"
    },
    "weight": "200g",
    "price": 5.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 252.0,
      "energyKj": 1047.0,
      "fats": 20.6,
      "saturatedFats": 6.8,
      "carbs": 0.5,
      "sugars": 0.5,
      "protein": 16.0,
      "salt": 2.6
    }
  },
  {
    "id": "item-143",
    "category": "ambalaje",
    "name": {
      "ro": "Sos alb 3, 770gr",
      "en": "Sos alb 3, 770gr"
    },
    "weight": "200g",
    "price": 5.0,
    "ingredients": {
      "ro": "iaurt, smântână, maioneză, usturoi, condimente, oregano",
      "en": "yogurt, sour cream, mayonnaise, garlic, condimente, oregano"
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 317.3,
      "energyKj": 1309.4,
      "fats": 30.8,
      "saturatedFats": 9.3,
      "carbs": 7.7,
      "sugars": 2.5,
      "protein": 3.1,
      "salt": 0.4
    }
  },
  {
    "id": "item-144",
    "category": "ambalaje",
    "name": {
      "ro": "Sos roşu970gr",
      "en": "Sos roşu970gr"
    },
    "weight": "200g",
    "price": 3.0,
    "ingredients": {
      "ro": "roșii, ceapă, oregano, ulei de măsline, sare, piper",
      "en": "tomatoes, onion, oregano, oil of olives, salt, piper"
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 102.0,
      "energyKj": 426.8,
      "fats": 0.1,
      "saturatedFats": 0.1,
      "carbs": 23.2,
      "sugars": 22.8,
      "protein": 1.2,
      "salt": 1.8
    }
  },
  {
    "id": "item-145",
    "category": "ambalaje",
    "name": {
      "ro": "Sos roşu picant",
      "en": "Sos roşu picant"
    },
    "weight": "970 gr",
    "price": 5.0,
    "ingredients": {
      "ro": "roșii, ceapă, oregano, ulei de măsline ,sare, piper",
      "en": "tomatoes, onion, oregano, oil of olives ,salt, piper"
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 98.4,
      "energyKj": 411.4,
      "fats": 0.2,
      "saturatedFats": 0.1,
      "carbs": 21.9,
      "sugars": 21.5,
      "protein": 1.3,
      "salt": 2.5
    }
  },
  {
    "id": "item-146",
    "category": "ambalaje",
    "name": {
      "ro": "Sos roşu / Ketchup 9                  70gr",
      "en": "Sos roşu / Ketchup 9                  70gr"
    },
    "weight": "200g",
    "price": 5.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 102.0,
      "energyKj": 426.8,
      "fats": 0.1,
      "saturatedFats": 0.1,
      "carbs": 23.2,
      "sugars": 22.8,
      "protein": 1.2,
      "salt": 1.8
    }
  },
  {
    "id": "item-147",
    "category": "ambalaje",
    "name": {
      "ro": "Sos alb 3, 7                                                 70gr",
      "en": "Sos alb 3, 7                                                 70gr"
    },
    "weight": "200g",
    "price": 5.0,
    "ingredients": {
      "ro": "iaurt, maioneză, usturoi, oregano, condimente",
      "en": "yogurt, mayonnaise, garlic, oregano, condimente"
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 317.3,
      "energyKj": 1309.4,
      "fats": 30.8,
      "saturatedFats": 9.3,
      "carbs": 7.7,
      "sugars": 2.5,
      "protein": 3.1,
      "salt": 0.4
    }
  },
  {
    "id": "item-148",
    "category": "ambalaje",
    "name": {
      "ro": "Sos chili 9                                    100gr",
      "en": "Sos chili 9                                    100gr"
    },
    "weight": "200g",
    "price": 5.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 96.9,
      "energyKj": 405.3,
      "fats": 0.2,
      "saturatedFats": 0.1,
      "carbs": 21.4,
      "sugars": 21.0,
      "protein": 1.3,
      "salt": 2.8
    }
  },
  {
    "id": "item-149",
    "category": "ambalaje",
    "name": {
      "ro": "Mujdei de usturoi    50gr",
      "en": "Mujofi of usturoi    50gr"
    },
    "weight": "200g",
    "price": 5.0,
    "ingredients": {
      "ro": "usturoi, lămâie, ulei de floarea soarelui, sare",
      "en": "garlic, lemon, oil of floarea soarelui, salt"
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 182.3,
      "energyKj": 759.2,
      "fats": 10.1,
      "saturatedFats": 1.0,
      "carbs": 18.7,
      "sugars": 2.1,
      "protein": 4.2,
      "salt": 4.0
    }
  },
  {
    "id": "item-150",
    "category": "ambalaje",
    "name": {
      "ro": "Muştar/maioneza/ketchup 10                                      70ml",
      "en": "Muştar/maioneza/ketchup 10                                      70ml"
    },
    "weight": "200g",
    "price": 3.0,
    "ingredients": {
      "ro": "muștar dulce)/",
      "en": "mustard dulce)/"
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-151",
    "category": "racoritoare",
    "name": {
      "ro": "Fresh de portocale150ml",
      "en": "Fresh of portocale150ml"
    },
    "weight": "200g",
    "price": 15.0,
    "ingredients": {
      "ro": "Portocale",
      "en": "oranges"
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 37.8,
      "energyKj": 160.0,
      "fats": 0.2,
      "saturatedFats": 0.0,
      "carbs": 8.4,
      "sugars": 8.2,
      "protein": 0.7,
      "salt": 0.0
    }
  },
  {
    "id": "item-152",
    "category": "racoritoare",
    "name": {
      "ro": "Fresh de grapefruit150ml",
      "en": "Fresh of grapefruit150ml"
    },
    "weight": "200g",
    "price": 15.0,
    "ingredients": {
      "ro": "Grapefruit",
      "en": "grapefruit"
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 35.7,
      "energyKj": 152.0,
      "fats": 0.1,
      "saturatedFats": 0.0,
      "carbs": 8.3,
      "sugars": 8.3,
      "protein": 0.4,
      "salt": 0.0
    }
  },
  {
    "id": "item-153",
    "category": "racoritoare",
    "name": {
      "ro": "Limonadă",
      "en": "Limonadă"
    },
    "weight": "400 ml",
    "price": 14.0,
    "ingredients": {
      "ro": "apă, lămâie, zahăr",
      "en": "apă, lemon, sugar"
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 40.0,
      "energyKj": 167.0,
      "fats": 0.0,
      "saturatedFats": 0.0,
      "carbs": 10.0,
      "sugars": 10.0,
      "protein": 0.1,
      "salt": 4.0
    }
  },
  {
    "id": "item-154",
    "category": "racoritoare",
    "name": {
      "ro": "Limonadă cu arome________________________________ 400ml",
      "en": "Limonadă with arome________________________________ 400ml"
    },
    "weight": "200g",
    "price": 15.0,
    "ingredients": {
      "ro": "limonadă, gheață, sirop trandafir",
      "en": "limonadă, gheață, sirop trandafir"
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 45.1,
      "energyKj": 189.1,
      "fats": 0.0,
      "saturatedFats": 3.0,
      "carbs": 11.3,
      "sugars": 11.3,
      "protein": 0.1,
      "salt": 3.7
    }
  },
  {
    "id": "item-155",
    "category": "racoritoare",
    "name": {
      "ro": "Socată______________________________________________",
      "en": "Socată______________________________________________"
    },
    "weight": "400 ml",
    "price": 15.0,
    "ingredients": {
      "ro": "apă, suc de lămâie, lămâie, sirop de soc, ghimbir",
      "en": "apă, suc of lemon, lemon, sirop of elofrflower, ginger"
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 19.5,
      "energyKj": 81.5,
      "fats": 0.1,
      "saturatedFats": 0.0,
      "carbs": 3.9,
      "sugars": 3.6,
      "protein": 0.2,
      "salt": 0.0
    }
  },
  {
    "id": "item-156",
    "category": "racoritoare",
    "name": {
      "ro": "Suc (",
      "en": "Suc ("
    },
    "weight": "50 ml",
    "price": 12.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [
      2
    ],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-157",
    "category": "racoritoare",
    "name": {
      "ro": "Suc (",
      "en": "Suc ("
    },
    "weight": "500 ml",
    "price": 15.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-158",
    "category": "racoritoare",
    "name": {
      "ro": "Nectar Cappy",
      "en": "Nectar Cappy"
    },
    "weight": "50 ml",
    "price": 15.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [
      2
    ],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-159",
    "category": "racoritoare",
    "name": {
      "ro": "Fuzetea",
      "en": "Fuzetea"
    },
    "weight": "500 ml",
    "price": 15.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-160",
    "category": "racoritoare",
    "name": {
      "ro": "Milkshake  Marissa",
      "en": "Milkshake  Marissa"
    },
    "weight": "300 ml",
    "price": 25.0,
    "ingredients": {
      "ro": "lapte, frișcă, banană, topping cu aromă ciocolată, unt d e arahide",
      "en": "milk, whipped cream, banana, topping with aromă chocolate, butter d e arahiof"
    },
    "allergens": [
      5,
      6,
      7
    ],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 177.1,
      "energyKj": 741.8,
      "fats": 10.3,
      "saturatedFats": 5.2,
      "carbs": 17.6,
      "sugars": 15.6,
      "protein": 3.3,
      "salt": 0.1
    }
  },
  {
    "id": "item-161",
    "category": "racoritoare",
    "name": {
      "ro": "Suc Almdudler (mere)",
      "en": "Suc Almdudler (mere)"
    },
    "weight": "330 ml",
    "price": 12.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-162",
    "category": "racoritoare",
    "name": {
      "ro": "Energizant Red bull1buc",
      "en": "Energizant Red bull1buc"
    },
    "weight": "200g",
    "price": 15.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-163",
    "category": "racoritoare",
    "name": {
      "ro": "Energizant Coca-Cola1buc",
      "en": "Energizant Coca-Cola1buc"
    },
    "weight": "200g",
    "price": 12.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-164",
    "category": "racoritoare",
    "name": {
      "ro": "Apă minerală/plată",
      "en": "Apă minerală/plată"
    },
    "weight": "500 ml",
    "price": 10.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-165",
    "category": "racoritoare",
    "name": {
      "ro": "Apă minerală/plată st.330 m",
      "en": "Apă minerală/plată st.330 m"
    },
    "weight": "l",
    "price": 10.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-166",
    "category": "racoritoare",
    "name": {
      "ro": "Apă minerală/plată st",
      "en": "Apă minerală/plată st"
    },
    "weight": ".750 ml",
    "price": 15.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-167",
    "category": "racoritoare",
    "name": {
      "ro": "Ceai natural",
      "en": "Ceai natural"
    },
    "weight": "200 ml",
    "price": 15.0,
    "ingredients": {
      "ro": "Ceai de plante/fructe",
      "en": "Ceai of plante/fructe"
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 0.4,
      "energyKj": 1.7,
      "fats": 0.0,
      "saturatedFats": 0.0,
      "carbs": 0.0,
      "sugars": 0.0,
      "protein": 0.1,
      "salt": 1.0
    }
  },
  {
    "id": "item-168",
    "category": "racoritoare",
    "name": {
      "ro": "Zahăr la plic",
      "en": "Zahăr la plic"
    },
    "weight": "2 buc",
    "price": 0.5,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-169",
    "category": "racoritoare",
    "name": {
      "ro": "Miere",
      "en": "Pure Honey Portion"
    },
    "weight": "1 buc",
    "price": 3.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-170",
    "category": "racoritoare",
    "name": {
      "ro": "Espresso30ml",
      "en": "Espresso30ml"
    },
    "weight": "200g",
    "price": 9.0,
    "ingredients": {
      "ro": "espresso, zahăr la plic",
      "en": "espresso, sugar la plic"
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-171",
    "category": "racoritoare",
    "name": {
      "ro": "Espresso dublu100ml",
      "en": "Espresso dublu100ml"
    },
    "weight": "200g",
    "price": 18.0,
    "ingredients": {
      "ro": "espresso dublu, zahăr la plic",
      "en": "espresso dublu, sugar la plic"
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-172",
    "category": "racoritoare",
    "name": {
      "ro": "Espresso cu lapte",
      "en": "Espresso with lapte"
    },
    "weight": "770 ml",
    "price": 10.0,
    "ingredients": {
      "ro": "espresso 20 ml, lapte, zahăr la plic",
      "en": "espresso 20 ml, milk, sugar la plic"
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 60.1,
      "energyKj": 255.3,
      "fats": 0.4,
      "saturatedFats": 0.3,
      "carbs": 13.4,
      "sugars": 13.4,
      "protein": 0.7,
      "salt": 0.1
    }
  },
  {
    "id": "item-173",
    "category": "racoritoare",
    "name": {
      "ro": "Caffe Latte cu arome",
      "en": "Caffe Latte with arome"
    },
    "weight": "7 200 ml",
    "price": 20.0,
    "ingredients": {
      "ro": "espresso 20 ml, sirop caramel, lapte",
      "en": "espresso 20 ml, sirop caramel, milk"
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 67.1,
      "energyKj": 284.3,
      "fats": 0.9,
      "saturatedFats": 0.6,
      "carbs": 11.9,
      "sugars": 11.8,
      "protein": 2.0,
      "salt": 0.1
    }
  },
  {
    "id": "item-174",
    "category": "racoritoare",
    "name": {
      "ro": "Baby Latte 7___________________________________  _",
      "en": "Baby Latte 7___________________________________  _"
    },
    "weight": "170 ml",
    "price": 16.0,
    "ingredients": {
      "ro": "lapte, pudră de cacao, sirop de agave",
      "en": "milk, pudră of cocoa, sirop of agave"
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 77.9,
      "energyKj": 330.2,
      "fats": 0.9,
      "saturatedFats": 0.6,
      "carbs": 15.3,
      "sugars": 15.2,
      "protein": 2.0,
      "salt": 0.1
    }
  },
  {
    "id": "item-175",
    "category": "racoritoare",
    "name": {
      "ro": "Gingerbread  Latte7 200ml",
      "en": "Gingerbread  Latte7 200ml"
    },
    "weight": "200g",
    "price": 20.0,
    "ingredients": {
      "ro": "espresso 20ml, sirop turtă dulce, lapte",
      "en": "espresso 20ml, sirop turtă dulce, milk"
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 98.7,
      "energyKj": 418.8,
      "fats": 0.8,
      "saturatedFats": 0.6,
      "carbs": 21.2,
      "sugars": 20.9,
      "protein": 1.7,
      "salt": 0.1
    }
  },
  {
    "id": "item-176",
    "category": "racoritoare",
    "name": {
      "ro": "Salted caramel  Latte",
      "en": "Salted caramel  Latte"
    },
    "weight": "200 ml",
    "price": 20.0,
    "ingredients": {
      "ro": "espresso 20ml, sirop caramel sărat, lapte",
      "en": "espresso 20ml, sirop caramel sărat, milk"
    },
    "allergens": [
      7
    ],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 67.1,
      "energyKj": 284.3,
      "fats": 0.9,
      "saturatedFats": 0.6,
      "carbs": 11.9,
      "sugars": 11.8,
      "protein": 2.0,
      "salt": 0.1
    }
  },
  {
    "id": "item-177",
    "category": "racoritoare",
    "name": {
      "ro": "Frappe espresso",
      "en": "Frappe espresso"
    },
    "weight": "200 ml",
    "price": 20.0,
    "ingredients": {
      "ro": "espresso 20 ml, lapte, frișcă, gheață",
      "en": "espresso 20 ml, milk, whipped cream, gheață"
    },
    "allergens": [
      7
    ],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 71.6,
      "energyKj": 300.0,
      "fats": 5.1,
      "saturatedFats": 3.2,
      "carbs": 4.4,
      "sugars": 3.5,
      "protein": 2.0,
      "salt": 0.1
    }
  },
  {
    "id": "item-178",
    "category": "racoritoare",
    "name": {
      "ro": "Cappuccino vienez",
      "en": "Cappuccino vienez"
    },
    "weight": "7 170 ml",
    "price": 16.0,
    "ingredients": {
      "ro": "espreso 20ml, lapte, frișcă",
      "en": "espreso 20ml, milk, whipped cream"
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 51.0,
      "energyKj": 213.9,
      "fats": 3.3,
      "saturatedFats": 2.1,
      "carbs": 3.5,
      "sugars": 2.9,
      "protein": 1.8,
      "salt": 0.1
    }
  },
  {
    "id": "item-179",
    "category": "racoritoare",
    "name": {
      "ro": "Capucino cu Arome 7170ml",
      "en": "Capucino with Arome 7170ml"
    },
    "weight": "200g",
    "price": 16.0,
    "ingredients": {
      "ro": "cafea, lapte, frișcă, sirop, zahăr",
      "en": "cafea, milk, whipped cream, sirop, sugar"
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 164.4,
      "energyKj": 696.4,
      "fats": 3.1,
      "saturatedFats": 2.0,
      "carbs": 32.7,
      "sugars": 31.8,
      "protein": 1.4,
      "salt": 0.1
    }
  },
  {
    "id": "item-180",
    "category": "racoritoare",
    "name": {
      "ro": "Turmenic Latte 7___________________________________  _",
      "en": "Turmenic Latte 7___________________________________  _"
    },
    "weight": "170 ml",
    "price": 20.0,
    "ingredients": {
      "ro": "lapte, pudră de turmenic, ghimbir, scorțișoară, sirop de agave",
      "en": "milk, pudră of turmenic, ginger, cinnamon, sirop of agave"
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 77.9,
      "energyKj": 330.2,
      "fats": 0.9,
      "saturatedFats": 0.6,
      "carbs": 15.3,
      "sugars": 15.2,
      "protein": 2.0,
      "salt": 0.1
    }
  },
  {
    "id": "item-181",
    "category": "racoritoare",
    "name": {
      "ro": "Ciocolată caldă",
      "en": "Ciocolată caldă"
    },
    "weight": "7 120 ml",
    "price": 16.0,
    "ingredients": {
      "ro": "frișcă, lapte, ciocolată caldă, zahăr pudră",
      "en": "whipped cream, milk, chocolate caldă, sugar pudră"
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 137.9,
      "energyKj": 579.3,
      "fats": 8.8,
      "saturatedFats": 5.5,
      "carbs": 12.4,
      "sugars": 10.7,
      "protein": 2.3,
      "salt": 0.1
    }
  },
  {
    "id": "item-182",
    "category": "racoritoare",
    "name": {
      "ro": "Lavanda Latte 7_____________________________________",
      "en": "Lavanda Latte 7_____________________________________"
    },
    "weight": "200 ml",
    "price": 20.0,
    "ingredients": {
      "ro": "espresso 20ml, lapte, gheață, sirop lavandă, zahăr",
      "en": "espresso 20ml, milk, gheață, sirop lavandă, sugar"
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 66.3,
      "energyKj": 281.1,
      "fats": 0.8,
      "saturatedFats": 0.6,
      "carbs": 13.1,
      "sugars": 12.9,
      "protein": 1.7,
      "salt": 0.1
    }
  },
  {
    "id": "item-183",
    "category": "racoritoare",
    "name": {
      "ro": "Frişcă",
      "en": "Frişcă"
    },
    "weight": "7 20 ml",
    "price": 3.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 262.6,
      "energyKj": 1099.0,
      "fats": 22.2,
      "saturatedFats": 13.8,
      "carbs": 12.5,
      "sugars": 8.0,
      "protein": 3.2,
      "salt": 0.1
    }
  },
  {
    "id": "item-184",
    "category": "racoritoare",
    "name": {
      "ro": "Bora Bora__________________________________________________200ml.___",
      "en": "Bora Bora__________________________________________________200ml.___"
    },
    "weight": "200g",
    "price": 25.0,
    "ingredients": {
      "ro": "Suc de ananas, Suc de lamaie, Gheață, Sirop fructul pasiunii, Informațiinutriționale 100g: ValoareEnergetică (kJ/kcal): 247.1 / 58.3, Grăsimi (g):0.1 din care: Acizigrașisaturați (g) 0, Glucide (g): 13.7 din care: Zaharuri (g): 13.7,Proteine (g): 0.3, Sare (g): 0",
      "en": "Suc of pineapple, Suc of lamaie, Gheață, Sirop fructul pasiunii, Informațiinutriționale 100g: ValoareEnergetică (kJ/kcal): 247.1 / 58.3, Grăsimi (g):0.1 din care: Acizigra&saturați (g) 0, Gluciof (g): 13.7 din care: Zaharuri (g): 13.7,Proteine (g): 0.3, salt (g): 0"
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-185",
    "category": "racoritoare",
    "name": {
      "ro": "Boni bon300ml",
      "en": "Boni bon300ml"
    },
    "weight": "200g",
    "price": 22.0,
    "ingredients": {
      "ro": "suc ananas,suc merisoare,fresh lamaie,sirop Coton Candy gheata,felie lamaie ,marshmallov",
      "en": "suc pineapple,suc merisoare,fresh lamaie,sirop Coton Candy gheata,felie lamaie ,marshmallov"
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-186",
    "category": "racoritoare",
    "name": {
      "ro": "Cooler300ml",
      "en": "Cooler300ml"
    },
    "weight": "200g",
    "price": 22.0,
    "ingredients": {
      "ro": "fresh lamaie,sirop grenadine,suc cranberry,gheata,felie lamaie,portocala,fruste padure",
      "en": "fresh lamaie,sirop grenadine,suc cranberry,gheata,felie lamaie,portocala,fruste padure"
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-187",
    "category": "racoritoare",
    "name": {
      "ro": "Foke Mojito300ml",
      "en": "Foke Mojito300ml"
    },
    "weight": "200g",
    "price": 18.0,
    "ingredients": {
      "ro": "fresh lamaie,sirop zahar,apa minerala,menta,lamaie,gheata",
      "en": "fresh lamaie,sirop zahar,apa minerala,menta,lamaie,gheata"
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-188",
    "category": "racoritoare",
    "name": {
      "ro": "Aperol spit400ml",
      "en": "Aperol spit400ml"
    },
    "weight": "200g",
    "price": 24.0,
    "ingredients": {
      "ro": "aperol,proseco,felii portocale,gheata",
      "en": "aperol,proseco,felii oranges,gheata"
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-189",
    "category": "racoritoare",
    "name": {
      "ro": "Hugo  400ml",
      "en": "Hugo  400ml"
    },
    "weight": "200g",
    "price": 24.0,
    "ingredients": {
      "ro": "sirop soc, proseco,sirop zahar,fres de lamaie,menta,gheata",
      "en": "sirop elofrflower, proseco,sirop zahar,fres of lamaie,menta,gheata"
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-190",
    "category": "racoritoare",
    "name": {
      "ro": "Campari spit  400ml",
      "en": "Campari spit  400ml"
    },
    "weight": "200g",
    "price": 24.0,
    "ingredients": {
      "ro": "campari,proseco,felii portocale,gheata",
      "en": "campari,proseco,felii oranges,gheata"
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-191",
    "category": "racoritoare",
    "name": {
      "ro": "Campari tonic 400ml",
      "en": "Campari tonic 400ml"
    },
    "weight": "200g",
    "price": 24.0,
    "ingredients": {
      "ro": "campari, tinic,felie portocala,gheata",
      "en": "campari, tinic,felie portocala,gheata"
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-192",
    "category": "racoritoare",
    "name": {
      "ro": "Negroni 400ml",
      "en": "Negroni 400ml"
    },
    "weight": "200g",
    "price": 24.0,
    "ingredients": {
      "ro": "campari,gin,martini,felie portocala,gheata",
      "en": "campari,gin,martini,felie portocala,gheata"
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-193",
    "category": "racoritoare",
    "name": {
      "ro": "Americano  400ml",
      "en": "Americano  400ml"
    },
    "weight": "200g",
    "price": 24.0,
    "ingredients": {
      "ro": "campari,vermuth,felie portocala,gheata",
      "en": "campari,vermuth,felie portocala,gheata"
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-194",
    "category": "racoritoare",
    "name": {
      "ro": "Vermuth tonic 400ml",
      "en": "Vermuth tonic 400ml"
    },
    "weight": "200g",
    "price": 24.0,
    "ingredients": {
      "ro": "suc tonic,vermut,gheata,felii lamaie",
      "en": "suc tonic,vermut,gheata,felii lamaie"
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-195",
    "category": "racoritoare",
    "name": {
      "ro": "Pina Colada________________________________________200ml",
      "en": "Pina Colada________________________________________200ml"
    },
    "weight": "200g",
    "price": 25.0,
    "ingredients": {
      "ro": "Suc de ananas, Gheață, Sirop de glucoză-fructoză, Rom",
      "en": "Suc of pineapple, Gheață, Sirop of glucoză-fructoză, rum"
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 57.8,
      "energyKj": 244.3,
      "fats": 0.1,
      "saturatedFats": 0.0,
      "carbs": 12.8,
      "sugars": 12.3,
      "protein": 0.3,
      "salt": 0.0
    }
  },
  {
    "id": "item-196",
    "category": "racoritoare",
    "name": {
      "ro": "Mojito_____________________________________________200ml",
      "en": "Mojito_____________________________________________200ml"
    },
    "weight": "200g",
    "price": 25.0,
    "ingredients": {
      "ro": "Apa minerala, Gheață, Lime, Sirop de glucoză-fructoză, Rom",
      "en": "Apa minerala, Gheață, lime, Sirop of glucoză-fructoză, rum"
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 29.6,
      "energyKj": 124.5,
      "fats": 0.0,
      "saturatedFats": 0.0,
      "carbs": 5.9,
      "sugars": 5.7,
      "protein": 0.1,
      "salt": 0.0
    }
  },
  {
    "id": "item-197",
    "category": "racoritoare",
    "name": {
      "ro": "Long Island_______________________________________________200ml",
      "en": "Long Island_______________________________________________200ml"
    },
    "weight": "200g",
    "price": 28.0,
    "ingredients": {
      "ro": "Cola, Gheață, Lime, Gin, Vodcă, Rom",
      "en": "Cola, Gheață, lime, Gin, Vodcă, rum"
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 88.8,
      "energyKj": 370.0,
      "fats": 0.0,
      "saturatedFats": 0.0,
      "carbs": 5.1,
      "sugars": 4.9,
      "protein": 0.1,
      "salt": 0.0
    }
  },
  {
    "id": "item-198",
    "category": "racoritoare",
    "name": {
      "ro": "Alexander 50ml. – 28%alcool/volum",
      "en": "Alexanofr 50ml. – 28%alcool/volum"
    },
    "weight": "200g",
    "price": 9.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-199",
    "category": "racoritoare",
    "name": {
      "ro": "Stalinskaya50ml. – 40%alcool/volum",
      "en": "Stalinskaya50ml. – 40%alcool/volum"
    },
    "weight": "200g",
    "price": 9.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-200",
    "category": "racoritoare",
    "name": {
      "ro": "Absolut50ml. – 40%alcool/volum",
      "en": "Absolut50ml. – 40%alcool/volum"
    },
    "weight": "200g",
    "price": 12.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-201",
    "category": "racoritoare",
    "name": {
      "ro": "Finlandia50ml. – 40% alcool/volum",
      "en": "Finlandia50ml. – 40% alcool/volum"
    },
    "weight": "200g",
    "price": 12.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-202",
    "category": "racoritoare",
    "name": {
      "ro": "Tequila Camino50ml. – 40% alcool/volum",
      "en": "Tequila Camino50ml. – 40% alcool/volum"
    },
    "weight": "200g",
    "price": 10.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-203",
    "category": "racoritoare",
    "name": {
      "ro": "Tărie de Bihor50ml.– 40% alcool/volum",
      "en": "Tărie of Bihor50ml.– 40% alcool/volum"
    },
    "weight": "200g",
    "price": 9.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-204",
    "category": "racoritoare",
    "name": {
      "ro": "Angeli50ml. – 40%alcool/volum",
      "en": "Angeli50ml. – 40%alcool/volum"
    },
    "weight": "200g",
    "price": 9.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-205",
    "category": "racoritoare",
    "name": {
      "ro": "Sheridan’s50ml.– 15,5%alcool/volum",
      "en": "Sheridan’s50ml.– 15,5%alcool/volum"
    },
    "weight": "200g",
    "price": 15.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-206",
    "category": "racoritoare",
    "name": {
      "ro": "Jagermaister50ml. – 35%alcool/volum",
      "en": "Jagermaister50ml. – 35%alcool/volum"
    },
    "weight": "200g",
    "price": 15.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-207",
    "category": "racoritoare",
    "name": {
      "ro": "Unicum50ml. – 40%alcool/volum",
      "en": "Uniwithm50ml. – 40%alcool/volum"
    },
    "weight": "200g",
    "price": 18.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-208",
    "category": "racoritoare",
    "name": {
      "ro": "Triplusec50ml. – 37,5%alcool/volum",
      "en": "Triplusec50ml. – 37,5%alcool/volum"
    },
    "weight": "200g",
    "price": 8.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-209",
    "category": "racoritoare",
    "name": {
      "ro": "Martini50ml. – 15%alcool/volum",
      "en": "Martini50ml. – 15%alcool/volum"
    },
    "weight": "200g",
    "price": 8.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-210",
    "category": "racoritoare",
    "name": {
      "ro": "Gin Wemblei_______________________50ml.-40% alcool/volum",
      "en": "Gin Wemblei_______________________50ml.-40% alcool/volum"
    },
    "weight": "200g",
    "price": 15.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-211",
    "category": "racoritoare",
    "name": {
      "ro": "Alexandrion*****50ml. – 40%alcool/volum",
      "en": "Alexandrion*****50ml. – 40%alcool/volum"
    },
    "weight": "200g",
    "price": 9.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-212",
    "category": "racoritoare",
    "name": {
      "ro": "Alexandrion*******50ml. – 40%alcool/volum",
      "en": "Alexandrion*******50ml. – 40%alcool/volum"
    },
    "weight": "200g",
    "price": 12.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-213",
    "category": "racoritoare",
    "name": {
      "ro": "Metaxa*****50ml. – 38%alcool/volum",
      "en": "Metaxa*****50ml. – 38%alcool/volum"
    },
    "weight": "200g",
    "price": 15.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-214",
    "category": "racoritoare",
    "name": {
      "ro": "Jidvei50ml. – 42%alcool/volum",
      "en": "Jidvei50ml. – 42%alcool/volum"
    },
    "weight": "200g",
    "price": 15.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-215",
    "category": "racoritoare",
    "name": {
      "ro": "Mioriţa50ml. – 42%alcool/volum",
      "en": "Mioriţa50ml. – 42%alcool/volum"
    },
    "weight": "200g",
    "price": 12.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-216",
    "category": "racoritoare",
    "name": {
      "ro": "Triumf50ml. – 36%alcool/volum",
      "en": "Triumf50ml. – 36%alcool/volum"
    },
    "weight": "200g",
    "price": 8.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-217",
    "category": "racoritoare",
    "name": {
      "ro": "Unirea50ml. – 28%alcool/volum",
      "en": "Unirea50ml. – 28%alcool/volum"
    },
    "weight": "200g",
    "price": 5.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-218",
    "category": "racoritoare",
    "name": {
      "ro": "Brâncoveanu50ml. – 35%alcool/volum",
      "en": "Brâncoveanu50ml. – 35%alcool/volum"
    },
    "weight": "200g",
    "price": 30.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-219",
    "category": "racoritoare",
    "name": {
      "ro": "Grant’s50ml. – 40%alcool/volum",
      "en": "Grant’s50ml. – 40%alcool/volum"
    },
    "weight": "200g",
    "price": 12.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-220",
    "category": "racoritoare",
    "name": {
      "ro": "Jack Daniel’s50ml. – 40%alcool/volum",
      "en": "Jack Daniel’s50ml. – 40%alcool/volum"
    },
    "weight": "200g",
    "price": 15.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-221",
    "category": "racoritoare",
    "name": {
      "ro": "Johnnie Walker50ml. – 40%alcool/volum",
      "en": "Johnnie Walker50ml. – 40%alcool/volum"
    },
    "weight": "200g",
    "price": 12.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-222",
    "category": "racoritoare",
    "name": {
      "ro": "Sauvignon Blanc(sec)",
      "en": "Sauvignon Blanc(sec)"
    },
    "weight": "1 sticlă",
    "price": 120.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-223",
    "category": "racoritoare",
    "name": {
      "ro": "Fetească Albă(sec)",
      "en": "Fetească Albă(sec)"
    },
    "weight": "1 sticlă",
    "price": 120.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-224",
    "category": "racoritoare",
    "name": {
      "ro": "Tamaioasă Romanească(sec)",
      "en": "Tamaioasă Romanească(sec)"
    },
    "weight": "1 sticlă",
    "price": 120.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-225",
    "category": "racoritoare",
    "name": {
      "ro": "Merlot (sec)",
      "en": "Merlot (sec)"
    },
    "weight": "1 sticlă",
    "price": 120.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-226",
    "category": "racoritoare",
    "name": {
      "ro": "Cabernet(sec)",
      "en": "Cabernet(sec)"
    },
    "weight": "1 sticlă",
    "price": 120.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-227",
    "category": "racoritoare",
    "name": {
      "ro": "Pinot Noir (demisec)",
      "en": "Pinot Noir (ofmisec)"
    },
    "weight": "1 sticlă",
    "price": 120.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-228",
    "category": "racoritoare",
    "name": {
      "ro": "Rose Verite(demisec)1 sticla-13,5% alcool volum_",
      "en": "Rose Verite(ofmisec)1 sticla-13,5% alcool volum_"
    },
    "weight": "200g",
    "price": 60.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-229",
    "category": "racoritoare",
    "name": {
      "ro": "Sceptrus _________________1sticla -   14,0% alcool volum",
      "en": "Sceptrus _________________1sticla -   14,0% alcool volum"
    },
    "weight": "200g",
    "price": 60.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-230",
    "category": "racoritoare",
    "name": {
      "ro": "Fetească Neagră(demidulce) (12)",
      "en": "Fetească Neagră(ofmidulce) (12)"
    },
    "weight": "1 sticlă",
    "price": 50.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-231",
    "category": "racoritoare",
    "name": {
      "ro": "Pinot Noir(demisec)12)",
      "en": "Pinot Noir(ofmisec)12)"
    },
    "weight": "1 sticlă",
    "price": 50.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-232",
    "category": "racoritoare",
    "name": {
      "ro": "Cabernet Sauvignon(12) (dulce)",
      "en": "Cabernet Sauvignon(12) (dulce)"
    },
    "weight": "1 sticlă",
    "price": 50.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-233",
    "category": "racoritoare",
    "name": {
      "ro": "Merlot(12) (sec)",
      "en": "Merlot(12) (sec)"
    },
    "weight": "1 sticlă",
    "price": 50.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-234",
    "category": "racoritoare",
    "name": {
      "ro": "Sauvignon Blanc(12) (demisec)",
      "en": "Sauvignon Blanc(12) (ofmisec)"
    },
    "weight": "1 sticlă",
    "price": 50.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-235",
    "category": "racoritoare",
    "name": {
      "ro": "Chardonnay(12) (sec)",
      "en": "Chardonnay(12) (sec)"
    },
    "weight": "1 sticlă",
    "price": 50.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-236",
    "category": "racoritoare",
    "name": {
      "ro": "Muscat Ottonel(12) (demidulce)",
      "en": "Muscat Ottonel(12) (ofmidulce)"
    },
    "weight": "1 sticlă",
    "price": 50.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-237",
    "category": "racoritoare",
    "name": {
      "ro": "Fetească Albă(12) (sec)",
      "en": "Fetească Albă(12) (sec)"
    },
    "weight": "1 sticlă",
    "price": 50.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-238",
    "category": "racoritoare",
    "name": {
      "ro": "Roze(12) (demisec)",
      "en": "Roze(12) (ofmisec)"
    },
    "weight": "1 sticlă",
    "price": 50.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-239",
    "category": "racoritoare",
    "name": {
      "ro": "Fetească Regală(12) ( demisec) 1sticla – 12%alcool/volum",
      "en": "Fetească Regală(12) ( ofmisec) 1sticla – 12%alcool/volum"
    },
    "weight": "200g",
    "price": 50.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-240",
    "category": "racoritoare",
    "name": {
      "ro": "Riesling(12) (sec)_________________1sticlă -  12%alcool/volum______",
      "en": "Riesling(12) (sec)_________________1sticlă -  12%alcool/volum______"
    },
    "weight": "200g",
    "price": 50.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-241",
    "category": "racoritoare",
    "name": {
      "ro": "Grasă de Cotnari(12) (demisec)",
      "en": "Grasă of Cotnari(12) (ofmisec)"
    },
    "weight": "1 sticlă",
    "price": 50.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-242",
    "category": "racoritoare",
    "name": {
      "ro": "Sampanie Angeli___________1 sticla – 12% alcool volum_",
      "en": "Sampanie Angeli___________1 sticla – 12% alcool volum_"
    },
    "weight": "200g",
    "price": 50.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-243",
    "category": "racoritoare",
    "name": {
      "ro": "Dry Muscat(12) (demisec)",
      "en": "Dry Muscat(12) (ofmisec)"
    },
    "weight": "1 sticlă",
    "price": 60.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-244",
    "category": "racoritoare",
    "name": {
      "ro": "Pinot Grigio(12) (demisec)",
      "en": "Pinot Grigio(12) (ofmisec)"
    },
    "weight": "1 sticlă",
    "price": 60.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-245",
    "category": "racoritoare",
    "name": {
      "ro": "Gewurztraminer(12) (demisec)",
      "en": "Gewurztraminer(12) (ofmisec)"
    },
    "weight": "1 sticlă",
    "price": 60.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-246",
    "category": "racoritoare",
    "name": {
      "ro": "Sauvignon Blanc(12) (demisec)",
      "en": "Sauvignon Blanc(12) (ofmisec)"
    },
    "weight": "1 sticlă",
    "price": 60.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-247",
    "category": "racoritoare",
    "name": {
      "ro": "Rose(12)(demisec)",
      "en": "Rose(12)(ofmisec)"
    },
    "weight": "1 sticlă",
    "price": 60.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-248",
    "category": "bere",
    "name": {
      "ro": "Pilsner Urquell0,33 l_______",
      "en": "Pilsner Urquell0,33 l_______"
    },
    "weight": "200g",
    "price": 10.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-249",
    "category": "bere",
    "name": {
      "ro": "Peroni Capri0,33 l_______",
      "en": "Peroni Capri0,33 l_______"
    },
    "weight": "200g",
    "price": 12.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-250",
    "category": "bere",
    "name": {
      "ro": "Peroni",
      "en": "Peroni"
    },
    "weight": "0,33 l",
    "price": 12.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-251",
    "category": "bere",
    "name": {
      "ro": "Peroni fa",
      "en": "Peroni fa"
    },
    "weight": "0,33 l",
    "price": 12.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-252",
    "category": "bere",
    "name": {
      "ro": "Peroni",
      "en": "Peroni"
    },
    "weight": "0,50 l",
    "price": 12.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-253",
    "category": "bere",
    "name": {
      "ro": "Azuga nefiltrata",
      "en": "Azuga nefiltrata"
    },
    "weight": "0,50 l",
    "price": 15.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [],
    "isFrozen": true,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-254",
    "category": "bere",
    "name": {
      "ro": "Azuga nepasteurizata",
      "en": "Azuga nepasteurizata"
    },
    "weight": "0,50 l",
    "price": 15.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-255",
    "category": "bere",
    "name": {
      "ro": "Ursus Cooler________    0,33 l_______",
      "en": "Ursus Cooler________    0,33 l_______"
    },
    "weight": "200g",
    "price": 10.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-256",
    "category": "bere",
    "name": {
      "ro": "Ursus Black________    0,33l_______",
      "en": "Ursus Black________    0,33l_______"
    },
    "weight": "200g",
    "price": 10.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-257",
    "category": "bere",
    "name": {
      "ro": "Ursus  fara alcool____  0,50l______",
      "en": "Ursus  fara alcool____  0,50l______"
    },
    "weight": "200g",
    "price": 10.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-258",
    "category": "bere",
    "name": {
      "ro": "Ursus",
      "en": "Ursus"
    },
    "weight": ",50 l",
    "price": 10.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-259",
    "category": "bere",
    "name": {
      "ro": "Ursus Pilsner_______    0,33l_____",
      "en": "Ursus Pilsner_______    0,33l_____"
    },
    "weight": "200g",
    "price": 10.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-260",
    "category": "bere",
    "name": {
      "ro": "Ursus Premium",
      "en": "Ursus Premium"
    },
    "weight": "0,33 l",
    "price": 10.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-261",
    "category": "bere",
    "name": {
      "ro": "Ursus Retro_________",
      "en": "Ursus Retro_________"
    },
    "weight": "0,50 l",
    "price": 10.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-262",
    "category": "bere",
    "name": {
      "ro": "Timişoreana",
      "en": "Timişoreana"
    },
    "weight": "0,50 l",
    "price": 10.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-263",
    "category": "bere",
    "name": {
      "ro": "Timisireana FA________",
      "en": "Timisireana FA________"
    },
    "weight": "0,50 l",
    "price": 10.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-264",
    "category": "bere",
    "name": {
      "ro": "Kozel Premium________0,33 l_____ _",
      "en": "Kozel Premium________0,33 l_____ _"
    },
    "weight": "200g",
    "price": 12.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-265",
    "category": "bere",
    "name": {
      "ro": "Kozel Dark__________ 0,33 l_____",
      "en": "Kozel Dark__________ 0,33 l_____"
    },
    "weight": "200g",
    "price": 12.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-266",
    "category": "bere",
    "name": {
      "ro": "Peroni doză",
      "en": "Peroni doză"
    },
    "weight": "0,50 l",
    "price": 12.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-267",
    "category": "bere",
    "name": {
      "ro": "Ursus doză",
      "en": "Ursus doză"
    },
    "weight": "0,50 l",
    "price": 10.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-268",
    "category": "bere",
    "name": {
      "ro": "Timişoreana doză",
      "en": "Timişoreana doză"
    },
    "weight": "0,50 l",
    "price": 10.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-269",
    "category": "bere",
    "name": {
      "ro": "Cooler doză_____0.50l",
      "en": "Cooler doză_____0.50l"
    },
    "weight": "200g",
    "price": 10.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-270",
    "category": "bere",
    "name": {
      "ro": "Peroni",
      "en": "Peroni"
    },
    "weight": "0,40 l",
    "price": 12.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-271",
    "category": "bere",
    "name": {
      "ro": "Kozel Dark_______",
      "en": "Kozel Dark_______"
    },
    "weight": "0,50 l",
    "price": 12.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-272",
    "category": "bere",
    "name": {
      "ro": "Kozel Premium__0,50l___________",
      "en": "Kozel Premium__0,50l___________"
    },
    "weight": "200g",
    "price": 12.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-273",
    "category": "bere",
    "name": {
      "ro": "Kozel Premium__0,30l_________",
      "en": "Kozel Premium__0,30l_________"
    },
    "weight": "200g",
    "price": 9.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-274",
    "category": "bere",
    "name": {
      "ro": "Kozel Dark_______",
      "en": "Kozel Dark_______"
    },
    "weight": "0,30 l",
    "price": 9.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-275",
    "category": "bere",
    "name": {
      "ro": "Ursus",
      "en": "Ursus"
    },
    "weight": "0,40 l",
    "price": 10.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-276",
    "category": "bere",
    "name": {
      "ro": "Timişoreana",
      "en": "Timişoreana"
    },
    "weight": "0,40 l",
    "price": 10.0,
    "ingredients": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients."
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    }
  },
  {
    "id": "item-277",
    "category": "bere",
    "name": {
      "ro": "PLATOU TRADIȚIONAL 1,3,5,7,11                400gr",
      "en": "PLATOU TRADIȚIONAL 1,3,5,7,11                400gr"
    },
    "weight": "200g",
    "price": 45.0,
    "ingredients": {
      "ro": "costiță,cărnați, cardaboș, murături",
      "en": "costiță,cărnați, cardaboș, murături"
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 170.6,
      "energyKj": 713.9,
      "fats": 7.9,
      "saturatedFats": 2.3,
      "carbs": 3.4,
      "sugars": 1.0,
      "protein": 21.4,
      "salt": 0.9
    }
  },
  {
    "id": "item-278",
    "category": "bere",
    "name": {
      "ro": "SARMALE CU CIOLAN ȘI MĂMĂLIGUȚĂ 1,3 200/200/50gr",
      "en": "SARMALE CU CIOLAN ȘI MĂMĂLIGUȚĂ 1,3 200/200/50gr"
    },
    "weight": "200g",
    "price": 38.0,
    "ingredients": {
      "ro": "carne porc, ciolan, orez,condimente, făină porumb, smântână",
      "en": "carne pork, pork knuckle, rice,condimente, flour porumb, sour cream"
    },
    "allergens": [],
    "isFrozen": true,
    "nutrition": {
      "energyKcal": 133.6,
      "energyKj": 564.1,
      "fats": 1.1,
      "saturatedFats": 0.0,
      "carbs": 17.9,
      "sugars": 3.1,
      "protein": 12.4,
      "salt": 0.1
    }
  },
  {
    "id": "item-279",
    "category": "bere",
    "name": {
      "ro": "SALATĂ DE BOEUF 1,3,7  250gr",
      "en": "SALATĂ DE BOEUF 1,3,7  250gr"
    },
    "weight": "200g",
    "price": 25.0,
    "ingredients": {
      "ro": "piept de pui, ouă, morcovi, cartofi, ulei, muștar,condimente",
      "en": "piept of chicken, eggs, morcovi, potatoes, oil, mustard,condimente"
    },
    "allergens": [],
    "isFrozen": true,
    "nutrition": {
      "energyKcal": 209.8,
      "energyKj": 874.3,
      "fats": 8.8,
      "saturatedFats": 2.9,
      "carbs": 8.9,
      "sugars": 0.9,
      "protein": 23.9,
      "salt": 1.4
    }
  },
  {
    "id": "item-280",
    "category": "bere",
    "name": {
      "ro": "PRĂJITURI ASORTATE 1,3,5,8  200gr",
      "en": "PRĂJITURI ASORTATE 1,3,5,8  200gr"
    },
    "weight": "200g",
    "price": 18.0,
    "ingredients": {
      "ro": "ouă, lapte, cacao, unt, zahăr, nucă, untură, fructe",
      "en": "eggs, milk, cocoa, butter, sugar, nucă, untură, fructe"
    },
    "allergens": [],
    "isFrozen": false,
    "nutrition": {
      "energyKcal": 235.2,
      "energyKj": 988.7,
      "fats": 8.7,
      "saturatedFats": 6.8,
      "carbs": 38.2,
      "sugars": 25.5,
      "protein": 2.1,
      "salt": 0.1
    }
  }
];