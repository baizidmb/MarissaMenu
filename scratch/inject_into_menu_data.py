import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open('scratch/formatted_items.json', 'r', encoding='utf-8') as f:
    items = json.load(f)

js_content = """// Complete Authentic Menu Dataset for Hotel & Restaurant Marissa
// Extracted 100% from MENIU 2025 MARISSA SIMPLIFICAT RESTAURANT (280 items)
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

export const MENU_ITEMS = """ + json.dumps(items, ensure_ascii=False, indent=2) + ";"

with open('src/data/marissaMenuData.js', 'w', encoding='utf-8') as out:
    out.write(js_content)

print(f"Successfully generated src/data/marissaMenuData.js with {len(items)} items!")
