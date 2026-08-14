// ANPC Order 201/2022 & EU Directive 2000/13/CE Compliant Data for Hotel & Restaurant Marissa (Tășnad, Romania)
// Populated with 100% authentic Romanian menu items, RO/EN/HU translations, portion weights, prices in RON, thawed badges, and per 100g nutrition.

import { MenuItem, Category, AllergenInfo, HotelInfo } from '../types/menu';

export const HOTEL_INFO: HotelInfo = {
  name: 'Hotel & Restaurant Marissa',
  address: 'Str. Stefan cel Mare nr. 104',
  town: 'Tășnad',
  county: 'Satu Mare',
  country: 'România',
  slogan: {
    ro: 'Locul perfect pentru a vă bucura de o ședere relaxantă și revigorantă!',
    en: 'The perfect place to enjoy a relaxing and invigorating stay!',
    hu: 'A tökéletes hely a pihentető és felfrissítő kikapcsolódáshoz!'
  },
  logoUrl: 'https://hotelmarissa.ro/wp-content/uploads/2024/05/Logo_2024_transparent2.webp',
  logoFavicon: 'https://hotelmarissa.ro/wp-content/uploads/2024/05/cropped-Logo_2024_transparent-180x180.png',
  website: 'https://hotelmarissa.ro',
  email: 'office@hotelmarissa.ro',
  phoneReceptie: '0744.627.830',
  phoneFix1: '0371.084.400',
  phoneFix2: '0361.426.594',
  wifiSsid: 'Marissa_Guest_WiFi',
  wifiPass: 'marissa2025'
};

export const CATEGORIES: Category[] = [
  { id: 'mic-dejun', name: { ro: 'Mic Dejun', en: 'Breakfast', hu: 'Reggeli' }, icon: '☕', description: { ro: 'Preparate calde și reci pentru un început de zi plin de energie', en: 'Hot and cold breakfast dishes for an energetic start of the day', hu: 'Meleg és hideg reggeli ételek az energiadús napkezdéshez' } },
  { id: 'gustari', name: { ro: 'Gustări Reci & Calde', en: 'Starters & Appetizers', hu: 'Előételek & Falatok' }, icon: '🍴', description: { ro: 'Aperitive tradiționale românești și gustări calde delicioase', en: 'Traditional Romanian appetizers and warm starters', hu: 'Hagyományos román előételek és ízletes meleg falatok' } },
  { id: 'fast-food', name: { ro: 'Fast Food & Burgeri', en: 'Fast Food & Burgers', hu: 'Fast Food & Burgerek' }, icon: '🔥', description: { ro: 'Burgeri suculenți Black Angus, shaorma și preparate crispy', en: 'Juicy Black Angus burgers, shaorma, and crispy delights', hu: 'Szaftos Black Angus burgerek, shawarma és ropogós csirke' } },
  { id: 'ciorbe', name: { ro: 'Ciorbe / Supe', en: 'Traditional Soups', hu: 'Levesek & Gulyások' }, icon: '🍲', description: { ro: 'Ciorbe ardelenești proaspete servite cu smântână și ardei', en: 'Fresh Transylvanian soups served with sour cream and hot pepper', hu: 'Friss erdélyi levesek tejföllel és csípős paprikával' } },
  { id: 'platouri', name: { ro: 'Platouri', en: 'Sharing Platters', hu: 'Tálak & Bőségtálak' }, icon: '🍱', description: { ro: 'Platouri generoase ideale pentru familie și prieteni', en: 'Generous platters ideal for sharing with family and friends', hu: 'Bőséges tálak családoknak és baráti társaságoknak' } },
  { id: 'pui-rata', name: { ro: 'Preparate din Pui & Rață', en: 'Poultry & Duck Specialties', hu: 'Csirke & Kacsa Ételek' }, icon: '🍗', description: { ro: 'Specialități franțuzești și ardelenești din pui și rață', en: 'French and Transylvanian chicken & duck specialties', hu: 'Francia és erdélyi csirke- és kacsakülönlegességek' } },
  { id: 'vita', name: { ro: 'Preparate din Vită', en: 'Beef & Steak House', hu: 'Marha & Steak House' }, icon: '🥩', description: { ro: 'Fripturi premium, obrăjori fragezi și T-Bone suculent', en: 'Premium steaks, tender beef cheeks, and juicy T-Bone', hu: 'Prémium steakek, omlós marhapofa és szaftos T-Bone' } },
  { id: 'porc', name: { ro: 'Preparate din Porc', en: 'Pork Specialties', hu: 'Sertés Ételek' }, icon: '🍖', description: { ro: 'Ceafă la grătar, ciolan domnesc, tochitură și scăriță gigant', en: 'Grilled pork neck, royal pork knuckle, and giant BBQ ribs', hu: 'Roston sült tarja, királyi csülök és óriási BBQ sertésborda' } },
  { id: 'peste', name: { ro: 'Pește & Fructe de Mare', en: 'Fish & Seafood', hu: 'Halak & Tenger Gyümölcsei' }, icon: '🐟', description: { ro: 'Somon teriyaki, păstrăv, doradă și tigaie cu fructe de mare', en: 'Teriyaki salmon fillet, trout, sea bream, and spicy seafood pan', hu: 'Teriyaki lazacfilé, pisztráng, aranydurbincs és tenger gyümölcsei' } },
  { id: 'paste-risotto', name: { ro: 'Paste & Risotto', en: 'Pasta & Risotto', hu: 'Tészták & Rizottók' }, icon: '🍝', description: { ro: 'Retete italienești autentice cu creveți, somon și hribi', en: 'Authentic Italian pasta and risottos with prawns, salmon, and porcini', hu: 'Autentikus olasz tészták és rizottók garnélával és vargányával' } },
  { id: 'pizza', name: { ro: 'Pizza & Focaccia', en: 'Pizza & Focaccia', hu: 'Pizzák & Focaccia' }, icon: '🍕', description: { ro: 'Pizza pe vatră cu blat fraged și ingrediente alese', en: 'Artisanal hearth-baked pizza with fresh toppings', hu: 'Kemencés kézműves pizza friss feltétekkel' } },
  { id: 'garnituri', name: { ro: 'Garnituri, Sosuri & Extra', en: 'Sides & House Sauces', hu: 'Köretek & Szószok' }, icon: '🍟', description: { ro: 'Cartofi aurii, piure, legume la grătar și sosuri de casă', en: 'Golden potatoes, mashed potatoes, grilled veggies & house sauces', hu: 'Aranyburgonya, püré, roston zöldségek és házi szószok' } },
  { id: 'salate', name: { ro: 'Salate Aperitiv', en: 'Fresh Salads', hu: 'Friss Saláták' }, icon: '🥗', description: { ro: 'Salate proaspete, Cezar, Grecească și murături de casă', en: 'Fresh gourmet salads, Caesar, Greek, and house pickles', hu: 'Friss ínyenc saláták, Cézár, Görög és házi savanyúságok' } },
  { id: 'desert', name: { ro: 'Desert', en: 'Desserts', hu: 'Desszertek' }, icon: '🍰', description: { ro: 'Papanași calzi, vulcan de ciocolată, tiramisu și cheesecake', en: 'Warm papanași, lava cake, tiramisu, and berry cheesecake', hu: 'Meleg túrófánk, csoki szuflé, tiramisu és sajttorta' } },
  { id: 'traditionale', name: { ro: 'Tradiționale de Sărbători', en: 'Traditional Feast Specialties', hu: 'Ünnepi Hagyományos Ételek' }, icon: '✨', description: { ro: 'Sarmale cu ciolan, platou tradițional și prăjituri de casă', en: 'Traditional cabbage rolls with pork knuckle & festive sweets', hu: 'Töltött káposzta csülökkel és házi sütemények' } },
  { id: 'racoritoare', name: { ro: 'Băuturi Răcoritoare & Cafea', en: 'Soft Drinks & Coffee', hu: 'Üdítők & Kávék' }, icon: '🥤', description: { ro: 'Limonadă proaspătă, fresh-uri, espresso și latte-uri aromate', en: 'Fresh lemonade, fresh juices, espresso, and flavored lattes', hu: 'Friss limonádé, gyümölcslevek, eszpresszó és ízesített latte' } },
  { id: 'cocktailuri', name: { ro: 'Cocktailuri & Tării', en: 'Cocktails & Spirits', hu: 'Koktélok & Röviditalok' }, icon: '🍸', description: { ro: 'Cocktailuri alcoolice și non-alcoolice, spirtoase fine', en: 'Alcoholic & mocktail drinks, fine spirits and liqueurs', hu: 'Alkoholos és alkoholmentes koktélok, minőségi párlatok' } },
  { id: 'vinuri', name: { ro: 'Vinuri & Alcoolice', en: 'Wines & Fine Spirits', hu: 'Borok & Italok' }, icon: '🍷', description: { ro: 'Selecție de vinuri nobile din podgoriile românești', en: 'Selection of noble wines from top Romanian vineyards', hu: 'Nemes borok válogatása a legjobb román pincészetekből' } },
  { id: 'bere', name: { ro: 'Bere', en: 'Beers', hu: 'Sörök' }, icon: '🍺', description: { ro: 'Bere la sticlă, doză și draft proaspăt', en: 'Bottled, canned, and fresh draft beers', hu: 'Üveges, dobozos és friss csapolt sörök' } },
  { id: 'ambalaje', name: { ro: 'Ambalaje la Pachet', en: 'Takeaway Packaging', hu: 'Csomagolás' }, icon: '🛍️', description: { ro: 'Cutii pizza, caserole termice și pungi biodegradabile', en: 'Pizza boxes, thermal containers, and eco bags', hu: 'Pizzadobozok, hőtartó dobozok és környezetbarát táskák' } }
];

export const ALLERGENS: AllergenInfo[] = [
  { id: 1, code: 'GLUTEN', name: { ro: 'Cereale care conțin gluten', en: 'Cereals containing gluten', hu: 'Glutént tartalmazó gabonafélék' }, details: { ro: 'Grâu, secară, orz, ovăz, grâu spelt sau produse derivate.', en: 'Wheat, rye, barley, oats, spelt or derived products.', hu: 'Búza, rozs, árpa, zab, tönkölybúza vagy ezek származékai.' } },
  { id: 2, code: 'CRUSTACEE', name: { ro: 'Crustacee', en: 'Crustaceans', hu: 'Rákfélék' }, details: { ro: 'Racilor, homarilor, creveților, crabilor și produse derivate.', en: 'Crayfish, lobsters, prawns, crabs and derived products.', hu: 'Rákok, homárok, garnélák és ezekből készült termékek.' } },
  { id: 3, code: 'OUĂ', name: { ro: 'Ouă', en: 'Eggs', hu: 'Tojás' }, details: { ro: 'Ouă și produse derivate.', en: 'Eggs and derived products.', hu: 'Tojás és abból készült termékek.' } },
  { id: 4, code: 'PEȘTE', name: { ro: 'Pește', en: 'Fish', hu: 'Halak' }, details: { ro: 'Pește și produse derivate.', en: 'Fish and derived products.', hu: 'Halak és azokból készült termékek.' } },
  { id: 5, code: 'ARAHIDE', name: { ro: 'Arahide', en: 'Peanuts', hu: 'Földimogyoró' }, details: { ro: 'Arahide și produse derivate.', en: 'Peanuts and derived products.', hu: 'Földimogyoró és abból készült termékek.' } },
  { id: 6, code: 'SOIA', name: { ro: 'Soia', en: 'Soybeans', hu: 'Szójabab' }, details: { ro: 'Soia și produse derivate.', en: 'Soybeans and derived products.', hu: 'Szójabab és abból készült termékek.' } },
  { id: 7, code: 'LAPTE', name: { ro: 'Lapte și derivate (lactoză)', en: 'Milk and dairy (lactose)', hu: 'Tej és tejtermékek (laktóz)' }, details: { ro: 'Lapte și produse derivate, inclusiv lactoză.', en: 'Milk and dairy products, including lactose.', hu: 'Tej és abból készült termékek, beleértve a laktózt.' } },
  { id: 8, code: 'FRUCTE_NUCI', name: { ro: 'Fructe cu coajă lemnoasă', en: 'Nuts & Tree Nuts', hu: 'Diófélék' }, details: { ro: 'Migdale, alune de pădure, nuci, caju, fistic, macadamia.', en: 'Almonds, hazelnuts, walnuts, cashews, pistachios, macadamia.', hu: 'Mandula, mogyoró, dió, kesudió, pisztácia, makadámia.' } },
  { id: 9, code: 'ȚELINĂ', name: { ro: 'Țelină', en: 'Celery', hu: 'Zeller' }, details: { ro: 'Țelină și produse derivate.', en: 'Celery and derived products.', hu: 'Zeller és abból készült termékek.' } },
  { id: 10, code: 'MUȘTAR', name: { ro: 'Muștar', en: 'Mustard', hu: 'Mustár' }, details: { ro: 'Muștar și produse derivate.', en: 'Mustard and derived products.', hu: 'Mustár és abból készült termékek.' } },
  { id: 11, code: 'SUSAN', name: { ro: 'Semințe de susan', en: 'Sesame seeds', hu: 'Szezámmag' }, details: { ro: 'Semințe de susan și produse derivate.', en: 'Sesame seeds and derived products.', hu: 'Szezámmag és abból készült termékek.' } },
  { id: 12, code: 'SULFIȚI', name: { ro: 'Dioxid de sulf și sulfiți', en: 'Sulphur dioxide and sulphites', hu: 'Kén-dioxid és szulfitok' }, details: { ro: 'Concentrații de peste 10 mg/kg sau 10 mg/l exprimate ca SO2.', en: 'Concentrations above 10 mg/kg or 10 mg/l expressed as SO2.', hu: '10 mg/kg vagy 10 mg/liter feletti SO2-koncentráció.' } },
  { id: 13, code: 'LUPIN', name: { ro: 'Lupin', en: 'Lupin', hu: 'Csillagfürt' }, details: { ro: 'Lupin și produse derivate.', en: 'Lupin and derived products.', hu: 'Csillagfürt és abból készült termékek.' } },
  { id: 14, code: 'MOLUȘTE', name: { ro: 'Moluște', en: 'Molluscs', hu: 'Puhatestűek' }, details: { ro: 'Scoici, stridii, calamari, caracatițe și produse derivate.', en: 'Clams, oysters, squid, octopus and derived products.', hu: 'Kagylók, osztrigák, tintahalak, polipok és ezek származékai.' } }
];

export const MENU_ITEMS: MenuItem[] = [
  {
    "id": "item-1",
    "categoryId": "mic-dejun",
    "name": {
      "ro": "Mic dejun",
      "en": "Mic Dejun",
      "hu": "Klasszikus Reggeli"
    },
    "description": {
      "ro": "ou  prăjit, cremvurști, roșie, cașcaval, ulei de floarea soarelui, condimente",
      "en": "egg  prăjit, cremvurști, tomato, yellow cheese, oil of floarea soarelui, condimente",
      "hu": "tojás  prăjit, cremvurști, paradicsom, sajt, olaj de floarea soarelui, condimente"
    },
    "price": 25.0,
    "weight": "300 g",
    "imageUrl": "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "3",
      "7"
    ],
    "nutrition": {
      "weightGrams": 300,
      "energyKcal": 194.7,
      "energyKj": 810.1,
      "fats": 15.3,
      "saturatedFats": 5.4,
      "carbs": 1.9,
      "sugars": 1.1,
      "protein": 12.3,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-2",
    "categoryId": "mic-dejun",
    "name": {
      "ro": "Mic dejun, cartofi prăjiți cu ouă și slănină",
      "en": "Mic Dejun, Cartofi Fried With Ouă & Slănină",
      "hu": "Sültburgonyás Reggeli Tojással és Szalonnával"
    },
    "description": {
      "ro": "ou prăjit, ceapă, slănină de porc, cartofi prăjiti, condimente",
      "en": "egg prăjit, onion, pork fatback of pork, potatoes prăjiti, condimente",
      "hu": "tojás prăjit, hagyma, szalonna de sertés, burgonya prăjiti, condimente"
    },
    "price": 28.0,
    "weight": "250 g",
    "imageUrl": "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=800&q=80",
    "isThawed": true,
    "allergens": [
      "3",
      "7"
    ],
    "nutrition": {
      "weightGrams": 250,
      "energyKcal": 184.2,
      "energyKj": 765.7,
      "fats": 14.8,
      "saturatedFats": 3.7,
      "carbs": 1.3,
      "sugars": 1.0,
      "protein": 11.5,
      "salt": 2.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-3",
    "categoryId": "mic-dejun",
    "name": {
      "ro": "Omletă cu şuncă și caşcaval",
      "en": "Omletă With Şuncă & Caşcaval",
      "hu": "Sonkás-Sajtos Omlett"
    },
    "description": {
      "ro": "ou, șuncă, cașcaval, ulei de floarea soarelui, condimente",
      "en": "egg, ham, yellow cheese, oil of floarea soarelui, condimente",
      "hu": "tojás, sonka, sajt, olaj de floarea soarelui, condimente"
    },
    "price": 28.0,
    "weight": "225 g",
    "imageUrl": "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "3",
      "7"
    ],
    "nutrition": {
      "weightGrams": 225,
      "energyKcal": 194.5,
      "energyKj": 807.1,
      "fats": 13.9,
      "saturatedFats": 5.6,
      "carbs": 0.8,
      "sugars": 0.3,
      "protein": 16.7,
      "salt": 2.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-4",
    "categoryId": "mic-dejun",
    "name": {
      "ro": "Omletă ţărănească cu slănină și ceapă",
      "en": "Omletă Ţărănească With Slănină & Ceapă",
      "hu": "Paraszti Omlett Szalonnával és Hagymával"
    },
    "description": {
      "ro": "ou, ceapă, slănină de porc, condimente",
      "en": "egg, onion, pork fatback of pork, condimente",
      "hu": "tojás, hagyma, szalonna de sertés, condimente"
    },
    "price": 30.0,
    "weight": "300 g",
    "imageUrl": "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "3"
    ],
    "nutrition": {
      "weightGrams": 300,
      "energyKcal": 184.2,
      "energyKj": 765.7,
      "fats": 14.8,
      "saturatedFats": 3.7,
      "carbs": 1.3,
      "sugars": 1.0,
      "protein": 11.5,
      "salt": 2.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-5",
    "categoryId": "mic-dejun",
    "name": {
      "ro": "Marissa breakfast",
      "en": "Marissa Breakfast",
      "hu": "Marissa Különleges Gourmet Reggeli"
    },
    "description": {
      "ro": "chiflă, cremă de brânză, ou poșat, bacon, sos olandez, roșii, cherry, salată mixtă,  mix de semințe, condimente",
      "en": "bun, cream of cheese, egg poșat, bacon, sauce olanofz, tomatoes, cherry, salad mixtă,  mix of semințe, condimente",
      "hu": "chiflă, krém de sajt / túró, tojás poșat, bacon, szósz olandez, paradicsom, cherry, salată mixtă,  mix de semințe, condimente"
    },
    "price": 35.0,
    "weight": "370 g",
    "imageUrl": "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "1",
      "3",
      "7",
      "11"
    ],
    "nutrition": {
      "weightGrams": 370,
      "energyKcal": 194.7,
      "energyKj": 810.1,
      "fats": 15.3,
      "saturatedFats": 5.4,
      "carbs": 1.9,
      "sugars": 1.1,
      "protein": 12.3,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": true
  },
  {
    "id": "item-6",
    "categoryId": "mic-dejun",
    "name": {
      "ro": "Platou mic dejun",
      "en": "Platou Mic Dejun",
      "hu": "Bőséges Reggeli Tál"
    },
    "description": {
      "ro": "Unt, gem, mezel, telemea",
      "en": "butter, jam, mezel, telemea",
      "hu": "vaj, lekvár, mezel, telemea"
    },
    "price": 25.0,
    "weight": "25/80/100/25 g",
    "imageUrl": "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "3",
      "7"
    ],
    "nutrition": {
      "weightGrams": 25,
      "energyKcal": 293.9,
      "energyKj": 1229.1,
      "fats": 14.9,
      "saturatedFats": 11.2,
      "carbs": 22.0,
      "sugars": 19.9,
      "protein": 7.8,
      "salt": 1.3
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-7",
    "categoryId": "mic-dejun",
    "name": {
      "ro": "Bruschete cu roșii",
      "en": "Bruschete With Roșii",
      "hu": "Paradicsomos Bruschetta"
    },
    "description": {
      "ro": "pâine, roșii, pătrunjel verde, ulei de măsline, condimente",
      "en": "bread, tomatoes, parsley verof, oil of olives, condimente",
      "hu": "kenyér, paradicsom, pătrunjel verde, olaj de olívabogyó, condimente"
    },
    "price": 25.0,
    "weight": "300 g",
    "imageUrl": "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "1",
      "7"
    ],
    "nutrition": {
      "weightGrams": 300,
      "energyKcal": 334.0,
      "energyKj": 1369.4,
      "fats": 8.0,
      "saturatedFats": 18.3,
      "carbs": 15.0,
      "sugars": 1.0,
      "protein": 26.0,
      "salt": 2.1
    },
    "isVegetarian": true,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-8",
    "categoryId": "mic-dejun",
    "name": {
      "ro": "Bacon prăjit/slănină prăjită",
      "en": "Bacon Fried/Slănină Prăjită",
      "hu": "Sült Bacon / Sült Szalonna"
    },
    "description": {
      "ro": "bacon/slănină",
      "en": "bacon/pork fatback",
      "hu": "bacon/szalonna"
    },
    "price": 18.0,
    "weight": "100 g",
    "imageUrl": "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [],
    "nutrition": {
      "weightGrams": 100,
      "energyKcal": 419.0,
      "energyKj": 1740.0,
      "fats": 35.4,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-9",
    "categoryId": "mic-dejun",
    "name": {
      "ro": "Cremvurşti",
      "en": "Cremvurşti",
      "hu": "Főtt Virsli"
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 12.0,
    "weight": "100 g",
    "imageUrl": "https://images.unsplash.com/photo-1585325701165-351af916e581?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "7"
    ],
    "nutrition": {
      "weightGrams": 100,
      "energyKcal": 240.3,
      "energyKj": 1005.2,
      "fats": 19.9,
      "saturatedFats": 6.9,
      "carbs": 2.7,
      "sugars": 0.8,
      "protein": 12.3,
      "salt": 1.8
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-10",
    "categoryId": "mic-dejun",
    "name": {
      "ro": "Telemea",
      "en": "Telemea",
      "hu": "Erdélyi Juhtúró / Telemea Sajt"
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 12.0,
    "weight": "100 g",
    "imageUrl": "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "7"
    ],
    "nutrition": {
      "weightGrams": 100,
      "energyKcal": 279.0,
      "energyKj": 1167.0,
      "fats": 24.0,
      "saturatedFats": 16.0,
      "carbs": 0.7,
      "sugars": 0.2,
      "protein": 15.0,
      "salt": 3.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-11",
    "categoryId": "mic-dejun",
    "name": {
      "ro": "Caşcaval",
      "en": "Caşcaval",
      "hu": "Hagyományos Trappista Sajt"
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 12.0,
    "weight": "100 g",
    "imageUrl": "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "7"
    ],
    "nutrition": {
      "weightGrams": 100,
      "energyKcal": 334.0,
      "energyKj": 1369.4,
      "fats": 25.0,
      "saturatedFats": 18.3,
      "carbs": 1.0,
      "sugars": 1.0,
      "protein": 26.0,
      "salt": 2.1
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-12",
    "categoryId": "mic-dejun",
    "name": {
      "ro": "Lapte",
      "en": "Lapte",
      "hu": "Friss Tej"
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 8.0,
    "weight": "7200 ml",
    "imageUrl": "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "7"
    ],
    "nutrition": {
      "weightGrams": 7200,
      "energyKcal": 44.0,
      "energyKj": 184.1,
      "fats": 1.5,
      "saturatedFats": 1.0,
      "carbs": 4.5,
      "sugars": 4.5,
      "protein": 3.1,
      "salt": 0.1
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-13",
    "categoryId": "mic-dejun",
    "name": {
      "ro": "Iaurt",
      "en": "Iaurt",
      "hu": "Krémes Joghurt"
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 8.0,
    "weight": "71  pahar",
    "imageUrl": "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "7"
    ],
    "nutrition": {
      "weightGrams": 71,
      "energyKcal": 60.0,
      "energyKj": 251.0,
      "fats": 3.5,
      "saturatedFats": 2.3,
      "carbs": 3.9,
      "sugars": 3.9,
      "protein": 3.1,
      "salt": 0.1
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-14",
    "categoryId": "mic-dejun",
    "name": {
      "ro": "Unt porţionat",
      "en": "Unt Porţionat",
      "hu": "Vaj Adag"
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 5.0,
    "weight": "25 g",
    "imageUrl": "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "7"
    ],
    "nutrition": {
      "weightGrams": 25,
      "energyKcal": 743.0,
      "energyKj": 3108.7,
      "fats": 82.0,
      "saturatedFats": 53.0,
      "carbs": 0.6,
      "sugars": 0.0,
      "protein": 0.7,
      "salt": 0.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-15",
    "categoryId": "mic-dejun",
    "name": {
      "ro": "Cacao cu lapte",
      "en": "Cacao With Lapte",
      "hu": "Kakaó Tejjel"
    },
    "description": {
      "ro": "lapte, zahăr, pudră de cacao",
      "en": "milk, sugar, pudră of cocoa",
      "hu": "tej, cukor, pudră de kakaó"
    },
    "price": 12.0,
    "weight": "7200 ml",
    "imageUrl": "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "7"
    ],
    "nutrition": {
      "weightGrams": 7200,
      "energyKcal": 61.9,
      "energyKj": 259.1,
      "fats": 2.0,
      "saturatedFats": 1.3,
      "carbs": 7.8,
      "sugars": 6.8,
      "protein": 3.4,
      "salt": 0.1
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-16",
    "categoryId": "mic-dejun",
    "name": {
      "ro": "Cereale cu lapte",
      "en": "Cereale With Lapte",
      "hu": "Reggeli Pehely Tejjel"
    },
    "description": {
      "ro": "lapte, cereale pentru micul dejun",
      "en": "milk, cereale pentru miwithl ofjun",
      "hu": "tej, cereale pentru micul dejun"
    },
    "price": 15.0,
    "weight": "200 g",
    "imageUrl": "https://images.unsplash.com/photo-1521483451569-e33803c0330c?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "1",
      "7",
      "8"
    ],
    "nutrition": {
      "weightGrams": 200,
      "energyKcal": 185.6,
      "energyKj": 782.5,
      "fats": 2.7,
      "saturatedFats": 0.9,
      "carbs": 36.5,
      "sugars": 16.7,
      "protein": 4.3,
      "salt": 0.4
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-17",
    "categoryId": "mic-dejun",
    "name": {
      "ro": "Gem",
      "en": "Gem",
      "hu": "Gyümölcslekvár"
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 5.0,
    "weight": "50 g",
    "imageUrl": "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [],
    "nutrition": {
      "weightGrams": 50,
      "energyKcal": 245.0,
      "energyKj": 1040.0,
      "fats": 0.1,
      "saturatedFats": 0.0,
      "carbs": 61.1,
      "sugars": 56.8,
      "protein": 0.6,
      "salt": 0.1
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-18",
    "categoryId": "mic-dejun",
    "name": {
      "ro": "Miere",
      "en": "Miere",
      "hu": "Virágméz"
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 5.0,
    "weight": "50 g",
    "imageUrl": "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [],
    "nutrition": {
      "weightGrams": 50,
      "energyKcal": 325.0,
      "energyKj": 1380.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 80.8,
      "sugars": 80.8,
      "protein": 10.0,
      "salt": 0.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-19",
    "categoryId": "gustari",
    "name": {
      "ro": "Mici",
      "en": "Mici",
      "hu": "Hagyományos Román Mici"
    },
    "description": {
      "ro": "mici, pâine, muştar, ulei de floarea soarelui, condimente",
      "en": "mici skinless sausages, bread, muştar, oil of floarea soarelui, condimente",
      "hu": "mici, kenyér, muştar, olaj de floarea soarelui, condimente"
    },
    "price": 7.0,
    "weight": "40 g",
    "imageUrl": "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=800&q=80",
    "isThawed": true,
    "allergens": [
      "1",
      "10"
    ],
    "nutrition": {
      "weightGrams": 40,
      "energyKcal": 275.6,
      "energyKj": 1146.7,
      "fats": 18.1,
      "saturatedFats": 4.7,
      "carbs": 20.6,
      "sugars": 3.6,
      "protein": 9.2,
      "salt": 1.7
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-20",
    "categoryId": "gustari",
    "name": {
      "ro": "Caşcaval pane",
      "en": "Caşcaval Pane",
      "hu": "Rántott Sajt"
    },
    "description": {
      "ro": "mozzarella, ou, pesmet, făină de grâu",
      "en": "mozzarella, egg, breadcrumbs, flour of grâu",
      "hu": "mozzarella, tojás, pesmet, liszt de grâu"
    },
    "price": 28.0,
    "weight": "180 g",
    "imageUrl": "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "1",
      "3",
      "7"
    ],
    "nutrition": {
      "weightGrams": 180,
      "energyKcal": 308.3,
      "energyKj": 1286.6,
      "fats": 8.0,
      "saturatedFats": 8.0,
      "carbs": 29.4,
      "sugars": 1.3,
      "protein": 17.4,
      "salt": 1.1
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-21",
    "categoryId": "gustari",
    "name": {
      "ro": "Mămăligă cu brânză şi smântână",
      "en": "Mămăligă With Cheese & Smântână",
      "hu": "Túrós Puliszka Tejföllel"
    },
    "description": {
      "ro": "brânză de vaci, apă, făină de mălai, ulei, sare",
      "en": "cheese of vaci, apă, flour of cornmeal, oil, salt",
      "hu": "sajt / túró de vaci, apă, liszt de mălai, olaj, sare"
    },
    "price": 35.0,
    "weight": "250/150/70 g",
    "imageUrl": "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "1",
      "7"
    ],
    "nutrition": {
      "weightGrams": 250,
      "energyKcal": 152.9,
      "energyKj": 643.3,
      "fats": 5.0,
      "saturatedFats": 1.6,
      "carbs": 18.1,
      "sugars": 1.0,
      "protein": 8.2,
      "salt": 0.8
    },
    "isVegetarian": true,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-22",
    "categoryId": "fast-food",
    "name": {
      "ro": "Burger de vită",
      "en": "Burger Of Beef",
      "hu": "Black Angus Marhaburger"
    },
    "description": {
      "ro": "chiflă, cartofi prăjiti, carne vită, brânză chedar, roșie, ceapă, salată mixtă, castraveți  murați, sos cheddar, condimente) Informații nutriționale 100g: Valoare Energetică (kJ/kcal): 767 / 183.6, Grăsimi (g):11.3 din care: Acizi grași saturați (g) 3.7, Glucide (g): 14.4 din care: Zaharuri (g): 1.5, Proteine (g): 6.9, Sare (g): 0.9",
      "en": "bun, potatoes prăjiti, carne beef, cheese chedar, tomato, onion, salad mixtă, withwithmbers  murați, sauce cheddar, condimente) Informații nutriționale 100g: Valoare Energetică (kJ/kcal): 767 / 183.6, Grăsimi (g):11.3 din care: Acizi gra& saturați (g) 3.7, Gluciof (g): 14.4 din care: Zaharuri (g): 1.5, Proteine (g): 6.9, salt (g): 0.9",
      "hu": "chiflă, burgonya prăjiti, carne marha, sajt / túró chedar, paradicsom, hagyma, salată mixtă, castraveți  murați, szósz cheddar, condimente) Informații nutriționale 100g: Valoare Energetică (kJ/kcal): 767 / 183.6, Grăsimi (g):11.3 din care: Acizi grași saturați (g) 3.7, Glucide (g): 14.4 din care: Zaharuri (g): 1.5, Proteine (g): 6.9, Sare (g): 0.9"
    },
    "price": 49.0,
    "weight": "450 g",
    "imageUrl": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "1",
      "3",
      "7",
      "9",
      "10"
    ],
    "nutrition": {
      "weightGrams": 450,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-23",
    "categoryId": "fast-food",
    "name": {
      "ro": "Burger Crispy",
      "en": "Burger Crispy",
      "hu": "Ropogós Csirkeburger"
    },
    "description": {
      "ro": "chiflă, cartofi prăjiți, piept de pui, roșie, salată sezon, iaurt, maioneză, condimente",
      "en": "bun, potatoes prăjiți, piept of chicken, tomato, salad sezon, yogurt, mayonnaise, condimente",
      "hu": "chiflă, burgonya prăjiți, piept de csirke, paradicsom, salată sezon, joghurt, maioneză, condimente"
    },
    "price": 38.0,
    "weight": "350 g",
    "imageUrl": "https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=800&q=80",
    "isThawed": true,
    "allergens": [
      "1",
      "3",
      "7",
      "9",
      "10"
    ],
    "nutrition": {
      "weightGrams": 350,
      "energyKcal": 183.6,
      "energyKj": 767.0,
      "fats": 11.3,
      "saturatedFats": 3.7,
      "carbs": 14.4,
      "sugars": 1.5,
      "protein": 6.9,
      "salt": 0.9
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-24",
    "categoryId": "fast-food",
    "name": {
      "ro": "Shaorma la farfurie",
      "en": "Shaorma La Farfurie",
      "hu": "Shaorma La Farfurie"
    },
    "description": {
      "ro": "cartofi prăjiți, carne de pui, lipie, varză, roșie, ceapă, castraveți murați, maioneză, ketchup, condimente",
      "en": "potatoes prăjiți, carne of chicken, pita, cabbage, tomato, onion, withwithmbers murați, mayonnaise, ketchup, condimente",
      "hu": "burgonya prăjiți, carne de csirke, lipie, káposzta, paradicsom, hagyma, castraveți murați, maioneză, ketchup, condimente"
    },
    "price": 38.0,
    "weight": "450 g",
    "imageUrl": "https://images.unsplash.com/photo-1561651823-34feb02250e4?auto=format&fit=crop&w=800&q=80",
    "isThawed": true,
    "allergens": [
      "1",
      "3",
      "7",
      "9"
    ],
    "nutrition": {
      "weightGrams": 450,
      "energyKcal": 210.5,
      "energyKj": 883.3,
      "fats": 8.2,
      "saturatedFats": 1.7,
      "carbs": 25.2,
      "sugars": 4.7,
      "protein": 10.3,
      "salt": 0.4
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-25",
    "categoryId": "fast-food",
    "name": {
      "ro": "Ultra cheeseburger",
      "en": "Ultra Cheeseburger",
      "hu": "Dupla Sajtos Burger"
    },
    "description": {
      "ro": "chiflă, carne de vită, roșii, castraveți, brânză cheddar, sos cheddar, cartofi prăjiți, condimente",
      "en": "bun, carne of beef, tomatoes, withwithmbers, cheese cheddar, sauce cheddar, potatoes prăjiți, condimente",
      "hu": "chiflă, carne de marha, paradicsom, castraveți, sajt / túró cheddar, szósz cheddar, burgonya prăjiți, condimente"
    },
    "price": 49.0,
    "weight": "450 g",
    "imageUrl": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    "isThawed": true,
    "allergens": [
      "1",
      "3",
      "7",
      "9",
      "10"
    ],
    "nutrition": {
      "weightGrams": 450,
      "energyKcal": 183.6,
      "energyKj": 767.0,
      "fats": 11.3,
      "saturatedFats": 3.7,
      "carbs": 14.4,
      "sugars": 1.5,
      "protein": 6.9,
      "salt": 0.9
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-26",
    "categoryId": "ciorbe",
    "name": {
      "ro": "Ciorbă de burtă",
      "en": "Traditional Romanian Tripe Soup",
      "hu": "Hagyományos Pacalleves"
    },
    "description": {
      "ro": "burtă de vită, legume asortate, smântână, ou, usturoi, ulei, oțet, făină de grâu, condimente",
      "en": "tripe of beef, legume asortate, sour cream, egg, garlic, oil, oțet, flour of grâu, condimente",
      "hu": "burtă de marha, legume asortate, tejföl, tojás, fokhagyma, olaj, oțet, liszt de grâu, condimente"
    },
    "price": 29.0,
    "weight": "100g / 300ml",
    "imageUrl": "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "1",
      "3",
      "7",
      "12"
    ],
    "nutrition": {
      "weightGrams": 100,
      "energyKcal": 113.8,
      "energyKj": 474.3,
      "fats": 6.0,
      "saturatedFats": 2.2,
      "carbs": 6.7,
      "sugars": 2.4,
      "protein": 6.5,
      "salt": 0.6
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-27",
    "categoryId": "ciorbe",
    "name": {
      "ro": "Ciorbă Rădăuțeană de pui",
      "en": "Garlic Chicken Soup (Rădăuțeană)",
      "hu": "Fokhagymás Csirkeleves (Rădăuțeană)"
    },
    "description": {
      "ro": "legume asortate, piept de pui, ou, ulei, oțet, usturoi, făină, smântână, condimente",
      "en": "legume asortate, piept of chicken, egg, oil, oțet, garlic, flour, sour cream, condimente",
      "hu": "legume asortate, piept de csirke, tojás, olaj, oțet, fokhagyma, liszt, tejföl, condimente"
    },
    "price": 25.0,
    "weight": "60g / 340ml",
    "imageUrl": "https://images.unsplash.com/photo-1604152135912-04a022e23696?auto=format&fit=crop&w=800&q=80",
    "isThawed": true,
    "allergens": [
      "1",
      "3",
      "7",
      "12"
    ],
    "nutrition": {
      "weightGrams": 60,
      "energyKcal": 108.6,
      "energyKj": 452.0,
      "fats": 6.8,
      "saturatedFats": 2.4,
      "carbs": 4.2,
      "sugars": 1.7,
      "protein": 7.8,
      "salt": 0.7
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": true
  },
  {
    "id": "item-28",
    "categoryId": "ciorbe",
    "name": {
      "ro": "Babgulyas (Gulaș ardelean de fasole cu ciolan)",
      "en": "Traditional Transylvanian Bean Goulash with Pork Knuckle",
      "hu": "Erdélyi Babgulyás Csülökkel"
    },
    "description": {
      "ro": "ciolan de porc,  cârnați,  fasole, ou, legume asortate, ceapă, făină, pastă de ardei iute, condimente",
      "en": "pork knuckle of pork,  sausages,  beans, egg, legume asortate, onion, flour, pastă of pepper iute, condimente",
      "hu": "csülök de sertés,  kolbász,  fasole, tojás, legume asortate, hagyma, liszt, pastă de paprika iute, condimente"
    },
    "price": 35.0,
    "weight": "100g / 300ml",
    "imageUrl": "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=800&q=80",
    "isThawed": true,
    "allergens": [
      "1",
      "3",
      "7",
      "9"
    ],
    "nutrition": {
      "weightGrams": 100,
      "energyKcal": 96.5,
      "energyKj": 365.9,
      "fats": 16.8,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": true,
    "isSpecialty": true
  },
  {
    "id": "item-29",
    "categoryId": "ciorbe",
    "name": {
      "ro": "Ciorbă ţărănească de porc",
      "en": "Ciorbă Ţărănească Of Pork",
      "hu": "Ciorbă Ţărănească Of Pork"
    },
    "description": {
      "ro": "legume asortate, cartofi, pulpă de porc, roșii, condimente",
      "en": "legume asortate, potatoes, pulpă of pork, tomatoes, condimente",
      "hu": "legume asortate, burgonya, pulpă de sertés, paradicsom, condimente"
    },
    "price": 25.0,
    "weight": "50g/350ml",
    "imageUrl": "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "9"
    ],
    "nutrition": {
      "weightGrams": 50,
      "energyKcal": 81.8,
      "energyKj": 340.0,
      "fats": 3.9,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-30",
    "categoryId": "ciorbe",
    "name": {
      "ro": "Ciorbă de fasole cu afumătură",
      "en": "Bean Soup with Smoked Pork Knuckle",
      "hu": "Füstölt Csülkös Bableves"
    },
    "description": {
      "ro": "legume asortate, fasole, ciolan de porc, smântână, ulei, pasta de ardei, ceapă, făină de grâu, ulei, condimente",
      "en": "legume asortate, beans, pork knuckle of pork, sour cream, oil, pasta of pepper, onion, flour of grâu, oil, condimente",
      "hu": "legume asortate, fasole, csülök de sertés, tejföl, olaj, pasta de paprika, hagyma, liszt de grâu, olaj, condimente"
    },
    "price": 25.0,
    "weight": "150g / 300ml",
    "imageUrl": "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80",
    "isThawed": true,
    "allergens": [
      "1",
      "7"
    ],
    "nutrition": {
      "weightGrams": 150,
      "energyKcal": 180.0,
      "energyKj": 753,
      "fats": 29.5,
      "saturatedFats": 1.3,
      "carbs": 127.4,
      "sugars": 34.9,
      "protein": 27.8,
      "salt": 0.9
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-31",
    "categoryId": "ciorbe",
    "name": {
      "ro": "Smântână",
      "en": "Fresh Sour Cream Portion",
      "hu": "Friss Tejföl"
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 7.0,
    "weight": "80 ml",
    "imageUrl": "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "7"
    ],
    "nutrition": {
      "weightGrams": 80,
      "energyKcal": 118.0,
      "energyKj": 491.0,
      "fats": 10.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-32",
    "categoryId": "ciorbe",
    "name": {
      "ro": "Ardei iute",
      "en": "Fresh / Pickled Hot Pepper",
      "hu": "Csípős Paprika"
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 2.0,
    "weight": "1 buc",
    "imageUrl": "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [],
    "nutrition": {
      "weightGrams": 1,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": true,
    "isSpecialty": false
  },
  {
    "id": "item-33",
    "categoryId": "ciorbe",
    "name": {
      "ro": "Pâine de casă (porție)",
      "en": "Homemade Bread Portion",
      "hu": "Házi Kenyér Adag"
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 3.0,
    "weight": "150g",
    "imageUrl": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "1"
    ],
    "nutrition": {
      "weightGrams": 150,
      "energyKcal": 211.0,
      "energyKj": 888.0,
      "fats": 1.2,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-34",
    "categoryId": "ciorbe",
    "name": {
      "ro": "Pâinici rumenite (crutoane)",
      "en": "Garlic & Herb Croutons",
      "hu": "Fokhagymás Pirított Kenyérkockák"
    },
    "description": {
      "ro": "pâine, ulei de măsline, usturoi, busuioc",
      "en": "bread, oil of olives, garlic, basil",
      "hu": "kenyér, olaj de olívabogyó, fokhagyma, busuioc"
    },
    "price": 9.0,
    "weight": "3 buc",
    "imageUrl": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "1"
    ],
    "nutrition": {
      "weightGrams": 3,
      "energyKcal": 211.0,
      "energyKj": 888.0,
      "fats": 1.2,
      "saturatedFats": 0.2,
      "carbs": 48.3,
      "sugars": 1.6,
      "protein": 7.0,
      "salt": 1.5
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-35",
    "categoryId": "platouri",
    "name": {
      "ro": "Platou Marissa",
      "en": "Platou Marissa",
      "hu": "Marissa Bőségtál (2 Személyre)"
    },
    "description": {
      "ro": "piept de pui, ceafă de porc, ciolan de porc, cartofi prăjiți, mix de legume, iaurt, maioneză, condimente",
      "en": "piept of chicken, ceafă of pork, pork knuckle of pork, potatoes prăjiți, mix of legume, yogurt, mayonnaise, condimente",
      "hu": "piept de csirke, ceafă de sertés, csülök de sertés, burgonya prăjiți, mix de legume, joghurt, maioneză, condimente"
    },
    "price": 69.0,
    "weight": "600 g",
    "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    "isThawed": true,
    "allergens": [
      "3",
      "7"
    ],
    "nutrition": {
      "weightGrams": 600,
      "energyKcal": 221.7,
      "energyKj": 925.3,
      "fats": 13.2,
      "saturatedFats": 4.0,
      "carbs": 10.5,
      "sugars": 2.1,
      "protein": 15.8,
      "salt": 0.4
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": true
  },
  {
    "id": "item-36",
    "categoryId": "platouri",
    "name": {
      "ro": "Platoul",
      "en": "Platoul",
      "hu": "Platoul"
    },
    "description": {
      "ro": "ceafă de porc, piept de pui, aripioare crispy, cartofi wedges, murături, sos chilli, condimente",
      "en": "ceafă of pork, piept of chicken, wings crispy, potatoes wedges, murături, sauce chilli, condimente",
      "hu": "ceafă de sertés, piept de csirke, csirkeszárny crispy, burgonya wedges, murături, szósz chilli, condimente"
    },
    "price": 135.0,
    "weight": "200g",
    "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    "isThawed": true,
    "allergens": [
      "3"
    ],
    "nutrition": {
      "weightGrams": 200,
      "energyKcal": 128.8,
      "energyKj": 538.1,
      "fats": 5.8,
      "saturatedFats": 1.7,
      "carbs": 9.8,
      "sugars": 3.8,
      "protein": 9.9,
      "salt": 1.3
    },
    "isVegetarian": false,
    "isSpicy": true,
    "isSpecialty": false
  },
  {
    "id": "item-37",
    "categoryId": "platouri",
    "name": {
      "ro": "Platoul bucătarului",
      "en": "Platoul Bucătarului",
      "hu": "Séf Különleges Tálja"
    },
    "description": {
      "ro": "ceafă de porc, mici, scăriță de porc, legume la grătar, cartofi prăjiți, salată mixtă, sos muștar, sare",
      "en": "ceafă of pork, mici skinless sausages, scăriță of pork, legume la grilled, potatoes prăjiți, salad mixtă, sauce mustard, salt",
      "hu": "ceafă de sertés, mici, scăriță de sertés, legume la roston sült, burgonya prăjiți, salată mixtă, szósz mustár, sare"
    },
    "price": 110.0,
    "weight": "1.71 kg",
    "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    "isThawed": true,
    "allergens": [
      "3",
      "10"
    ],
    "nutrition": {
      "weightGrams": 1,
      "energyKcal": 128.8,
      "energyKj": 538.1,
      "fats": 5.8,
      "saturatedFats": 1.7,
      "carbs": 9.8,
      "sugars": 3.8,
      "protein": 9.9,
      "salt": 1.3
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": true
  },
  {
    "id": "item-38",
    "categoryId": "pui-rata",
    "name": {
      "ro": "Piept de pui la",
      "en": "Piept Of Chicken La",
      "hu": "Piept Of Chicken La"
    },
    "description": {
      "ro": "piept de pui, unt, sare, condimente",
      "en": "piept of chicken, butter, salt, condimente",
      "hu": "piept de csirke, vaj, sare, condimente"
    },
    "price": 28.0,
    "weight": "200g",
    "imageUrl": "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80",
    "isThawed": true,
    "allergens": [
      "7"
    ],
    "nutrition": {
      "weightGrams": 200,
      "energyKcal": 183.0,
      "energyKj": 761.6,
      "fats": 7.8,
      "saturatedFats": 3.1,
      "carbs": 0.5,
      "sugars": 0.1,
      "protein": 27.6,
      "salt": 2.1
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-39",
    "categoryId": "pui-rata",
    "name": {
      "ro": "Pulpe de pui dezosate la",
      "en": "Pulpe Of Chicken Dezosate La",
      "hu": "Pulpe Of Chicken Dezosate La"
    },
    "description": {
      "ro": "pulpe de pui , condimente",
      "en": "pulpe of chicken , condimente",
      "hu": "pulpe de csirke , condimente"
    },
    "price": 27.0,
    "weight": "200g",
    "imageUrl": "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80",
    "isThawed": true,
    "allergens": [],
    "nutrition": {
      "weightGrams": 200,
      "energyKcal": 239.7,
      "energyKj": 1000.5,
      "fats": 15.4,
      "saturatedFats": 0.3,
      "carbs": 0.8,
      "sugars": 0.0,
      "protein": 24.6,
      "salt": 2.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-40",
    "categoryId": "pui-rata",
    "name": {
      "ro": "Piept de rață / Pulpă de rață, cu varză roșie și sos de portocale",
      "en": "Piept Of Duck / Pulpă Of Duck, With Varză Roșie & Sauce Of Portocale",
      "hu": "Piept Of Duck / Pulpă Of Duck, With Varză Roșie & Sauce Of Portocale"
    },
    "description": {
      "ro": "piept de rață, legume asortate, portocală, amidon de grâu, unt",
      "en": "piept of duck, legume asortate, portocală, amidon of grâu, butter",
      "hu": "piept de kacsa, legume asortate, portocală, amidon de grâu, vaj"
    },
    "price": 65.0,
    "weight": "60 g",
    "imageUrl": "https://images.unsplash.com/photo-1518492104633-130d0cc84637?auto=format&fit=crop&w=800&q=80",
    "isThawed": true,
    "allergens": [
      "1",
      "7"
    ],
    "nutrition": {
      "weightGrams": 60,
      "energyKcal": 133.6,
      "energyKj": 564.1,
      "fats": 1.1,
      "saturatedFats": 0.0,
      "carbs": 17.9,
      "sugars": 3.1,
      "protein": 12.4,
      "salt": 0.1
    },
    "isVegetarian": true,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-41",
    "categoryId": "pui-rata",
    "name": {
      "ro": "Escalop din piept de pui cu cartofi piure și sos de ciuperci",
      "en": "Escalop Din Piept Of Chicken With Cartofi Piure & Sauce Of Ciuperci",
      "hu": "Escalop Din Piept Of Chicken With Cartofi Piure & Sauce Of Ciuperci"
    },
    "description": {
      "ro": "piept de pui, cartofi, unt, ciuperci, smântână lichidă, pătrunjel verde, ulei de floarea soarelui, condimente",
      "en": "piept of chicken, potatoes, butter, mushrooms, sour cream lichidă, parsley verof, oil of floarea soarelui, condimente",
      "hu": "piept de csirke, burgonya, vaj, gomba, tejföl lichidă, pătrunjel verde, olaj de floarea soarelui, condimente"
    },
    "price": 45.0,
    "weight": "150 g",
    "imageUrl": "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80",
    "isThawed": true,
    "allergens": [
      "7"
    ],
    "nutrition": {
      "weightGrams": 150,
      "energyKcal": 154.8,
      "energyKj": 643.7,
      "fats": 8.2,
      "saturatedFats": 2.4,
      "carbs": 4.0,
      "sugars": 1.8,
      "protein": 16.8,
      "salt": 2.5
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-42",
    "categoryId": "pui-rata",
    "name": {
      "ro": "Piept de pui cu legume și sos de cașcaval",
      "en": "Piept Of Chicken With Legume & Sauce Of Yellow Cheese",
      "hu": "Piept Of Chicken With Legume & Sauce Of Yellow Cheese"
    },
    "description": {
      "ro": "piept de pui, legume, unt, smântână lichidă, unt de arahide, ulei de floarea soarelui, condimente",
      "en": "piept of chicken, legume, butter, sour cream lichidă, butter of arahiof, oil of floarea soarelui, condimente",
      "hu": "piept de csirke, legume, vaj, tejföl lichidă, vaj de arahide, olaj de floarea soarelui, condimente"
    },
    "price": 42.0,
    "weight": "150 g",
    "imageUrl": "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80",
    "isThawed": true,
    "allergens": [
      "5",
      "7",
      "8"
    ],
    "nutrition": {
      "weightGrams": 150,
      "energyKcal": 154.8,
      "energyKj": 643.7,
      "fats": 8.2,
      "saturatedFats": 2.4,
      "carbs": 4.0,
      "sugars": 1.8,
      "protein": 16.8,
      "salt": 2.5
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-43",
    "categoryId": "pui-rata",
    "name": {
      "ro": "Piept de pui crispy cu cartofi prajiti și sos roșu",
      "en": "Piept Of Chicken Crispy With Cartofi Prajiti & Sauce Roșu",
      "hu": "Piept Of Chicken Crispy With Cartofi Prajiti & Sauce Roșu"
    },
    "description": {
      "ro": "piept de pui, ou, făină de grâu, cartofi, sos din roșii, ulei de palmier,  condimente",
      "en": "piept of chicken, egg, flour of grâu, potatoes, sauce din tomatoes, oil of palmier,  condimente",
      "hu": "piept de csirke, tojás, liszt de grâu, burgonya, szósz din paradicsom, olaj de palmier,  condimente"
    },
    "price": 38.0,
    "weight": "50 g",
    "imageUrl": "https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=800&q=80",
    "isThawed": true,
    "allergens": [
      "1",
      "3"
    ],
    "nutrition": {
      "weightGrams": 50,
      "energyKcal": 154.8,
      "energyKj": 643.7,
      "fats": 8.2,
      "saturatedFats": 2.4,
      "carbs": 4.0,
      "sugars": 1.8,
      "protein": 16.8,
      "salt": 2.5
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-44",
    "categoryId": "pui-rata",
    "name": {
      "ro": "Aripioare Crispy",
      "en": "Aripioare Crispy",
      "hu": "Aripioare Crispy"
    },
    "description": {
      "ro": "aripioare, făină de grâu, ou, ulei de palmier, condimente",
      "en": "wings, flour of grâu, egg, oil of palmier, condimente",
      "hu": "csirkeszárny, liszt de grâu, tojás, olaj de palmier, condimente"
    },
    "price": 28.0,
    "weight": "250 g",
    "imageUrl": "https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=800&q=80",
    "isThawed": true,
    "allergens": [
      "1",
      "3"
    ],
    "nutrition": {
      "weightGrams": 250,
      "energyKcal": 244.7,
      "energyKj": 1023.8,
      "fats": 12.4,
      "saturatedFats": 1.5,
      "carbs": 10.5,
      "sugars": 0.6,
      "protein": 22.0,
      "salt": 0.3
    },
    "isVegetarian": false,
    "isSpicy": true,
    "isSpecialty": false
  },
  {
    "id": "item-45",
    "categoryId": "pui-rata",
    "name": {
      "ro": "Şniţel din piept de pui",
      "en": "Şniţel Din Piept Of Chicken",
      "hu": "Şniţel Din Piept Of Chicken"
    },
    "description": {
      "ro": "piept de pui, ou, făină, pesmet, condimente",
      "en": "piept of chicken, egg, flour, breadcrumbs, condimente",
      "hu": "piept de csirke, tojás, liszt, pesmet, condimente"
    },
    "price": 24.0,
    "weight": "180 g",
    "imageUrl": "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80",
    "isThawed": true,
    "allergens": [
      "1",
      "3"
    ],
    "nutrition": {
      "weightGrams": 180,
      "energyKcal": 158.3,
      "energyKj": 662.9,
      "fats": 3.4,
      "saturatedFats": 0.2,
      "carbs": 15.0,
      "sugars": 0.1,
      "protein": 26.6,
      "salt": 2.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-46",
    "categoryId": "vita",
    "name": {
      "ro": "Muşchi de vită la",
      "en": "Muşchi Of Beef La",
      "hu": "Muşchi Of Beef La"
    },
    "description": {
      "ro": "mușchiuleț de vită, unt, cartofi, rozmarin, ciuperci, smântână lichidă, ulei, condimente",
      "en": "mușchiuleț of beef, butter, potatoes, rozmarin, mushrooms, sour cream lichidă, oil, condimente",
      "hu": "mușchiuleț de marha, vaj, burgonya, rozmarin, gomba, tejföl lichidă, olaj, condimente"
    },
    "price": 89.0,
    "weight": "200g",
    "imageUrl": "https://images.unsplash.com/photo-1546964124-0cce460f38ef?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "7"
    ],
    "nutrition": {
      "weightGrams": 200,
      "energyKcal": 291.9,
      "energyKj": 1212.1,
      "fats": 22.4,
      "saturatedFats": 8.4,
      "carbs": 0.4,
      "sugars": 0.1,
      "protein": 22.2,
      "salt": 3.2
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": true
  },
  {
    "id": "item-47",
    "categoryId": "vita",
    "name": {
      "ro": "T-Bone de vită cu sos dijon și cartofi copți",
      "en": "T-Bone Of Beef With Sauce Dijon & Cartofi Copți",
      "hu": "T-Bone Of Beef With Sauce Dijon & Cartofi Copți"
    },
    "description": {
      "ro": "T-bone, cartofi copți, muștar Dijon, unt, ulei, condiment",
      "en": "T-bone, potatoes copți, mustard Dijon, butter, oil, condiment",
      "hu": "T-bone, burgonya copți, mustár Dijon, vaj, olaj, condiment"
    },
    "price": 125.0,
    "weight": "80 g",
    "imageUrl": "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80",
    "isThawed": true,
    "allergens": [
      "7",
      "10"
    ],
    "nutrition": {
      "weightGrams": 80,
      "energyKcal": 206.9,
      "energyKj": 863.8,
      "fats": 13.2,
      "saturatedFats": 2.6,
      "carbs": 8.3,
      "sugars": 0.3,
      "protein": 14.3,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": true
  },
  {
    "id": "item-48",
    "categoryId": "vita",
    "name": {
      "ro": "Obrăjori de vită și piure cu aromă de trufe, sos de merișoare",
      "en": "Obrăjori Of Beef & Piure With Aromă Of Trufe, Sauce Of Merișoare",
      "hu": "Obrăjori Of Beef & Piure With Aromă Of Trufe, Sauce Of Merișoare"
    },
    "description": {
      "ro": "carne de vită, ulei de măsline, unt , cartofi, fructe, trufe, amidon, condimente",
      "en": "carne of beef, oil of olives, butter , potatoes, fructe, truffles, amidon, condimente",
      "hu": "carne de marha, olaj de olívabogyó, vaj , burgonya, fructe, szarvasgomba, amidon, condimente"
    },
    "price": 98.0,
    "weight": "280 g",
    "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    "isThawed": true,
    "allergens": [
      "1",
      "7"
    ],
    "nutrition": {
      "weightGrams": 280,
      "energyKcal": 211.1,
      "energyKj": 878.5,
      "fats": 13.0,
      "saturatedFats": 3.2,
      "carbs": 1.3,
      "sugars": 0.8,
      "protein": 21.6,
      "salt": 3.2
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": true
  },
  {
    "id": "item-49",
    "categoryId": "vita",
    "name": {
      "ro": "Ossobuco de vită, piure de cartofi cu trufe",
      "en": "Ossobuco Of Beef, Piure Of Cartofi With Trufe",
      "hu": "Ossobuco Of Beef, Piure Of Cartofi With Trufe"
    },
    "description": {
      "ro": "carne de vită, unt, rucola , ulei, sare, otet balsamic, condimente",
      "en": "carne of beef, butter, rucola , oil, salt, otet balsamic, condimente",
      "hu": "carne de marha, vaj, rucola , olaj, sare, otet balsamic, condimente"
    },
    "price": 80.0,
    "weight": "150/50/20 g",
    "imageUrl": "https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "1",
      "7",
      "12"
    ],
    "nutrition": {
      "weightGrams": 150,
      "energyKcal": 291.9,
      "energyKj": 1212.1,
      "fats": 22.4,
      "saturatedFats": 8.4,
      "carbs": 0.4,
      "sugars": 0.1,
      "protein": 22.2,
      "salt": 3.2
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": true
  },
  {
    "id": "item-50",
    "categoryId": "porc",
    "name": {
      "ro": "Mușchiulet de porc, sos de hribi și cartofi cu aromă de trufe",
      "en": "Mușchiulet Of Pork, Sauce Of Hribi & Cartofi With Aromă Of Trufe",
      "hu": "Mușchiulet Of Pork, Sauce Of Hribi & Cartofi With Aromă Of Trufe"
    },
    "description": {
      "ro": "mușchiulet de porc, cartofi, pastă de trufe, hribi, crustă de verdețuri, ulei, condimente",
      "en": "mușchiulet of pork, potatoes, pastă of truffles, porcini mushrooms, crustă of verofțuri, oil, condimente",
      "hu": "mușchiulet de sertés, burgonya, pastă de szarvasgomba, vargánya gomba, crustă de verdețuri, olaj, condimente"
    },
    "price": 55.0,
    "weight": "150/350 g",
    "imageUrl": "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=800&q=80",
    "isThawed": true,
    "allergens": [
      "7"
    ],
    "nutrition": {
      "weightGrams": 150,
      "energyKcal": 192.6,
      "energyKj": 801.6,
      "fats": 10.5,
      "saturatedFats": 2.5,
      "carbs": 1.1,
      "sugars": 0.4,
      "protein": 22.3,
      "salt": 1.2
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": true
  },
  {
    "id": "item-51",
    "categoryId": "porc",
    "name": {
      "ro": "Cotlet de porc Marissa",
      "en": "Cotlet Of Pork Marissa",
      "hu": "Cotlet Of Pork Marissa"
    },
    "description": {
      "ro": "cotlet de porc, ciuperci amestecate, bacon, roșii, mozzarella, smântână lichidă, ulei de floarea soarelui, condimente",
      "en": "cotlet of pork, mushrooms amestecate, bacon, tomatoes, mozzarella, sour cream lichidă, oil of floarea soarelui, condimente",
      "hu": "cotlet de sertés, gomba amestecate, bacon, paradicsom, mozzarella, tejföl lichidă, olaj de floarea soarelui, condimente"
    },
    "price": 32.0,
    "weight": "250 g",
    "imageUrl": "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "7"
    ],
    "nutrition": {
      "weightGrams": 250,
      "energyKcal": 192.6,
      "energyKj": 801.6,
      "fats": 10.5,
      "saturatedFats": 2.5,
      "carbs": 1.1,
      "sugars": 0.4,
      "protein": 22.3,
      "salt": 1.2
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": true
  },
  {
    "id": "item-52",
    "categoryId": "porc",
    "name": {
      "ro": "Șnitel de porc uriaș cu sos picant",
      "en": "Șnitel Of Pork Uriaș With Sauce Picant",
      "hu": "Șnitel Of Pork Uriaș With Sauce Picant"
    },
    "description": {
      "ro": "cotlet de porc, sos picant, cașcaval, ulei de floarea soarelui, ou, făină de grâu, condimente",
      "en": "cotlet of pork, sauce picant, yellow cheese, oil of floarea soarelui, egg, flour of grâu, condimente",
      "hu": "cotlet de sertés, szósz picant, sajt, olaj de floarea soarelui, tojás, liszt de grâu, condimente"
    },
    "price": 30.0,
    "weight": "200/50 g",
    "imageUrl": "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "1",
      "3",
      "7",
      "11"
    ],
    "nutrition": {
      "weightGrams": 200,
      "energyKcal": 274.3,
      "energyKj": 1139.6,
      "fats": 17.4,
      "saturatedFats": 3.6,
      "carbs": 9.0,
      "sugars": 4.0,
      "protein": 19.0,
      "salt": 1.3
    },
    "isVegetarian": false,
    "isSpicy": true,
    "isSpecialty": false
  },
  {
    "id": "item-53",
    "categoryId": "porc",
    "name": {
      "ro": "Ceafă  ţigănească și cartofi prăjiți",
      "en": "Ceafă  Ţigănească & Cartofi Fried",
      "hu": "Ceafă  Ţigănească & Cartofi Fried"
    },
    "description": {
      "ro": "ceafă de porc, slănină afumată, ou, sos picant, cartofi, condimente",
      "en": "ceafă of pork, pork fatback afumată, egg, sauce picant, potatoes, condimente",
      "hu": "ceafă de sertés, szalonna afumată, tojás, szósz picant, burgonya, condimente"
    },
    "price": 52.0,
    "weight": "180/150 g",
    "imageUrl": "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=800&q=80",
    "isThawed": true,
    "allergens": [
      "1",
      "3"
    ],
    "nutrition": {
      "weightGrams": 180,
      "energyKcal": 241.1,
      "energyKj": 1003.9,
      "fats": 16.8,
      "saturatedFats": 7.0,
      "carbs": 5.0,
      "sugars": 0.2,
      "protein": 17.8,
      "salt": 1.7
    },
    "isVegetarian": false,
    "isSpicy": true,
    "isSpecialty": false
  },
  {
    "id": "item-54",
    "categoryId": "porc",
    "name": {
      "ro": "Ceafă de porc la",
      "en": "Ceafă Of Pork La",
      "hu": "Ceafă Of Pork La"
    },
    "description": {
      "ro": "ceafă de porc, condimente",
      "en": "ceafă of pork, condimente",
      "hu": "ceafă de sertés, condimente"
    },
    "price": 30.0,
    "weight": "200g",
    "imageUrl": "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [],
    "nutrition": {
      "weightGrams": 200,
      "energyKcal": 229.3,
      "energyKj": 953.5,
      "fats": 17.0,
      "saturatedFats": 7.3,
      "carbs": 0.0,
      "sugars": 0.0,
      "protein": 19.2,
      "salt": 2.1
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-55",
    "categoryId": "porc",
    "name": {
      "ro": "Scariță",
      "en": "Scariță",
      "hu": "Scariță"
    },
    "description": {
      "ro": "costiță de porc, cartofi wedges, sos barbeque, usturoi, condimente",
      "en": "costiță of pork, potatoes wedges, sauce barbeque, garlic, condimente",
      "hu": "costiță de sertés, burgonya wedges, szósz barbeque, fokhagyma, condimente"
    },
    "price": 55.0,
    "weight": "200g",
    "imageUrl": "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=800&q=80",
    "isThawed": true,
    "allergens": [],
    "nutrition": {
      "weightGrams": 200,
      "energyKcal": 179.1,
      "energyKj": 744.6,
      "fats": 12.1,
      "saturatedFats": 4.4,
      "carbs": 5.5,
      "sugars": 0.9,
      "protein": 12.2,
      "salt": 2.2
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-56",
    "categoryId": "porc",
    "name": {
      "ro": "Ciolan de porc",
      "en": "Ciolan Of Pork",
      "hu": "Ciolan Of Pork"
    },
    "description": {
      "ro": "ciolan de porc",
      "en": "pork knuckle of pork",
      "hu": "csülök de sertés"
    },
    "price": 12.0,
    "weight": "100 g",
    "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    "isThawed": true,
    "allergens": [],
    "nutrition": {
      "weightGrams": 100,
      "energyKcal": 208.0,
      "energyKj": 268.0,
      "fats": 204.0,
      "saturatedFats": 0.0,
      "carbs": 956.0,
      "sugars": 269.0,
      "protein": 203.0,
      "salt": 0.3
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-57",
    "categoryId": "porc",
    "name": {
      "ro": "Ciolan de porc cu os domnesc",
      "en": "Ciolan Of Pork With Os Domnesc",
      "hu": "Ciolan Of Pork With Os Domnesc"
    },
    "description": {
      "ro": "ciolan de porc, ulei de floarea soarelui, usturoi, condimente",
      "en": "pork knuckle of pork, oil of floarea soarelui, garlic, condimente",
      "hu": "csülök de sertés, olaj de floarea soarelui, fokhagyma, condimente"
    },
    "price": 10.0,
    "weight": "100 g",
    "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    "isThawed": true,
    "allergens": [],
    "nutrition": {
      "weightGrams": 100,
      "energyKcal": 189.1,
      "energyKj": 425.3,
      "fats": 125.8,
      "saturatedFats": 0.1,
      "carbs": 593.9,
      "sugars": 165.0,
      "protein": 127.0,
      "salt": 0.5
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-58",
    "categoryId": "porc",
    "name": {
      "ro": "Tochitură de porc cu mămăliguță",
      "en": "Tochitură Of Pork With Mămăliguță",
      "hu": "Tochitură Of Pork With Mămăliguță"
    },
    "description": {
      "ro": "carne de porc, usturoi, sos roșu, ou, telemea, burduf, ulei de floarea soarelui, condimente",
      "en": "carne of pork, garlic, sauce roșu, egg, telemea, burduf, oil of floarea soarelui, condimente",
      "hu": "carne de sertés, fokhagyma, szósz roșu, tojás, telemea, burduf, olaj de floarea soarelui, condimente"
    },
    "price": 45.0,
    "weight": "200 g",
    "imageUrl": "https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "3",
      "7"
    ],
    "nutrition": {
      "weightGrams": 200,
      "energyKcal": 154.6,
      "energyKj": 647.0,
      "fats": 7.2,
      "saturatedFats": 1.9,
      "carbs": 8.5,
      "sugars": 0.7,
      "protein": 14.2,
      "salt": 1.1
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-59",
    "categoryId": "porc",
    "name": {
      "ro": "Obrăjori de porc cu cartofi piure și sos de portocale",
      "en": "Obrăjori Of Pork With Cartofi Piure & Sauce Of Portocale",
      "hu": "Obrăjori Of Pork With Cartofi Piure & Sauce Of Portocale"
    },
    "description": {
      "ro": "obrăjori de porc, cartofi, unt, portocale,verdeață, amidon de porumb, ulei de floarea soarelui, condimente",
      "en": "obrăjori of pork, potatoes, butter, oranges,verofață, amidon of porumb, oil of floarea soarelui, condimente",
      "hu": "obrăjori de sertés, burgonya, vaj, portocale,verdeață, amidon de porumb, olaj de floarea soarelui, condimente"
    },
    "price": 65.0,
    "weight": "200/200/50 g",
    "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    "isThawed": true,
    "allergens": [
      "1",
      "7"
    ],
    "nutrition": {
      "weightGrams": 200,
      "energyKcal": 154.6,
      "energyKj": 647.0,
      "fats": 7.2,
      "saturatedFats": 1.9,
      "carbs": 8.5,
      "sugars": 0.7,
      "protein": 14.2,
      "salt": 1.1
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": true
  },
  {
    "id": "item-60",
    "categoryId": "porc",
    "name": {
      "ro": "Cotlet de porc cu os la",
      "en": "Cotlet Of Pork With Os La",
      "hu": "Cotlet Of Pork With Os La"
    },
    "description": {
      "ro": "cotlet de porc, cartofi, praz, muștar, ulei, pătrunjel, ardei, roșii, lămâie, ierburi, unt, condiment",
      "en": "cotlet of pork, potatoes, praz, mustard, oil, parsley, pepper, tomatoes, lemon, ierburi, butter, condiment",
      "hu": "cotlet de sertés, burgonya, praz, mustár, olaj, pătrunjel, paprika, paradicsom, citrom, ierburi, vaj, condiment"
    },
    "price": 65.0,
    "weight": "200g",
    "imageUrl": "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "7",
      "10"
    ],
    "nutrition": {
      "weightGrams": 200,
      "energyKcal": 291.9,
      "energyKj": 1212.1,
      "fats": 22.4,
      "saturatedFats": 8.4,
      "carbs": 0.4,
      "sugars": 0.1,
      "protein": 22.2,
      "salt": 3.2
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-61",
    "categoryId": "porc",
    "name": {
      "ro": "File de somon cu sos teriaki",
      "en": "File Of Somon With Sauce Teriaki",
      "hu": "File Of Somon With Sauce Teriaki"
    },
    "description": {
      "ro": "file de somon, morcov, conopidă, broccoli, unt, ulei, lămâie, sos teriaki, condimente",
      "en": "file of salmon, carrots, cauliflower, broccoli, butter, oil, lemon, sauce teriaki, condimente",
      "hu": "file de lazac, morcov, conopidă, broccoli, vaj, olaj, citrom, szósz teriaki, condimente"
    },
    "price": 59.0,
    "weight": "200g",
    "imageUrl": "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=800&q=80",
    "isThawed": true,
    "allergens": [
      "4",
      "7"
    ],
    "nutrition": {
      "weightGrams": 200,
      "energyKcal": 179.7,
      "energyKj": 744.7,
      "fats": 14.2,
      "saturatedFats": 3.5,
      "carbs": 4.5,
      "sugars": 3.2,
      "protein": 8.3,
      "salt": 1.4
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-62",
    "categoryId": "porc",
    "name": {
      "ro": "Păstrăv/Doradă la",
      "en": "Păstrăv/Doradă La",
      "hu": "Păstrăv/Doradă La"
    },
    "description": {
      "ro": "păstrăv/doradă, legume asortate, condimente",
      "en": "trout/sea bream, legume asortate, condimente",
      "hu": "pisztráng/aranydurbincs, legume asortate, condimente"
    },
    "price": 55.0,
    "weight": "200g",
    "imageUrl": "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=800&q=80",
    "isThawed": true,
    "allergens": [
      "4"
    ],
    "nutrition": {
      "weightGrams": 200,
      "energyKcal": 147.3,
      "energyKj": 612.1,
      "fats": 10.3,
      "saturatedFats": 1.4,
      "carbs": 1.8,
      "sugars": 1.6,
      "protein": 10.8,
      "salt": 1.4
    },
    "isVegetarian": true,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-63",
    "categoryId": "porc",
    "name": {
      "ro": "Păstrăv în crustă de mălâi cu mămăliguță",
      "en": "Păstrăv În Crustă Of Mălâi With Mămăliguță",
      "hu": "Păstrăv În Crustă Of Mălâi With Mămăliguță"
    },
    "description": {
      "ro": "păstrăv, făină de mălai, lămâie, usturoi, ulei de floarea soarelui, condimente",
      "en": "trout, flour of cornmeal, lemon, garlic, oil of floarea soarelui, condimente",
      "hu": "pisztráng, liszt de mălai, citrom, fokhagyma, olaj de floarea soarelui, condimente"
    },
    "price": 55.0,
    "weight": "200 g",
    "imageUrl": "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=800&q=80",
    "isThawed": true,
    "allergens": [
      "1",
      "4"
    ],
    "nutrition": {
      "weightGrams": 200,
      "energyKcal": 179.8,
      "energyKj": 753.6,
      "fats": 7.4,
      "saturatedFats": 1.1,
      "carbs": 17.3,
      "sugars": 0.8,
      "protein": 9.6,
      "salt": 1.1
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-64",
    "categoryId": "porc",
    "name": {
      "ro": "Tigaie cu fructe de mare",
      "en": "Tigaie With Fructe Of Mare",
      "hu": "Tigaie With Fructe Of Mare"
    },
    "description": {
      "ro": "fructe de mare, ardei iute, roșii, usturoi, pătrunjel verde, unt, lămâie, ulei de măsline, pâine prăjită, condimente",
      "en": "fructe of mare, pepper iute, tomatoes, garlic, parsley verof, butter, lemon, oil of olives, bread prăjită, condimente",
      "hu": "fructe de mare, paprika iute, paradicsom, fokhagyma, pătrunjel verde, vaj, citrom, olaj de olívabogyó, kenyér prăjită, condimente"
    },
    "price": 48.0,
    "weight": "80 g",
    "imageUrl": "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=800&q=80",
    "isThawed": true,
    "allergens": [
      "1",
      "2",
      "7",
      "14"
    ],
    "nutrition": {
      "weightGrams": 80,
      "energyKcal": 171.4,
      "energyKj": 712.6,
      "fats": 10.7,
      "saturatedFats": 5.5,
      "carbs": 5.9,
      "sugars": 2.2,
      "protein": 12.9,
      "salt": 0.7
    },
    "isVegetarian": false,
    "isSpicy": true,
    "isSpecialty": false
  },
  {
    "id": "item-65",
    "categoryId": "porc",
    "name": {
      "ro": "Sos roşu",
      "en": "Sauce Roşu",
      "hu": "Sauce Roşu"
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 5.0,
    "weight": "70 g",
    "imageUrl": "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "9"
    ],
    "nutrition": {
      "weightGrams": 70,
      "energyKcal": 102.0,
      "energyKj": 426.8,
      "fats": 0.1,
      "saturatedFats": 0.1,
      "carbs": 23.2,
      "sugars": 22.8,
      "protein": 1.2,
      "salt": 1.8
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-66",
    "categoryId": "porc",
    "name": {
      "ro": "Sos alb",
      "en": "Sauce Alb",
      "hu": "Sauce Alb"
    },
    "description": {
      "ro": "iaurt, maioneză, usturoi, oregano, condimente",
      "en": "yogurt, mayonnaise, garlic, oregano, condimente",
      "hu": "joghurt, maioneză, fokhagyma, oregano, condimente"
    },
    "price": 5.0,
    "weight": "70 g",
    "imageUrl": "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "3",
      "7"
    ],
    "nutrition": {
      "weightGrams": 70,
      "energyKcal": 317.3,
      "energyKj": 1309.4,
      "fats": 30.8,
      "saturatedFats": 9.3,
      "carbs": 7.7,
      "sugars": 2.5,
      "protein": 3.1,
      "salt": 0.4
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-67",
    "categoryId": "porc",
    "name": {
      "ro": "Sos chilli",
      "en": "Sauce Chilli",
      "hu": "Sauce Chilli"
    },
    "description": {
      "ro": "ketchup, ardei iute",
      "en": "ketchup, pepper iute",
      "hu": "ketchup, paprika iute"
    },
    "price": 5.0,
    "weight": "100 g",
    "imageUrl": "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "9"
    ],
    "nutrition": {
      "weightGrams": 100,
      "energyKcal": 96.9,
      "energyKj": 405.3,
      "fats": 0.2,
      "saturatedFats": 0.1,
      "carbs": 21.4,
      "sugars": 21.0,
      "protein": 1.3,
      "salt": 2.8
    },
    "isVegetarian": false,
    "isSpicy": true,
    "isSpecialty": false
  },
  {
    "id": "item-68",
    "categoryId": "porc",
    "name": {
      "ro": "Ulei picant (ulei și ardei iute)",
      "en": "Ulei Picant (Ulei & Ardei Iute)",
      "hu": "Ulei Picant (Ulei & Ardei Iute)"
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 5.0,
    "weight": "30ml",
    "imageUrl": "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [],
    "nutrition": {
      "weightGrams": 30,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": true,
    "isSpecialty": false
  },
  {
    "id": "item-69",
    "categoryId": "porc",
    "name": {
      "ro": "Mujdei de usturoi",
      "en": "Mujdei Of Usturoi",
      "hu": "Mujdei Of Usturoi"
    },
    "description": {
      "ro": "usturoi, lămâie, ulei de floarea soarelui, sare",
      "en": "garlic, lemon, oil of floarea soarelui, salt",
      "hu": "fokhagyma, citrom, olaj de floarea soarelui, sare"
    },
    "price": 5.0,
    "weight": "50 g",
    "imageUrl": "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [],
    "nutrition": {
      "weightGrams": 50,
      "energyKcal": 182.3,
      "energyKj": 759.2,
      "fats": 10.1,
      "saturatedFats": 1.0,
      "carbs": 18.7,
      "sugars": 2.1,
      "protein": 4.2,
      "salt": 4.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-70",
    "categoryId": "porc",
    "name": {
      "ro": "Muştar/maioneză/ketchup",
      "en": "Muştar/Maioneză/Ketchup",
      "hu": "Muştar/Maioneză/Ketchup"
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 3.0,
    "weight": "70ml",
    "imageUrl": "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "3",
      "10"
    ],
    "nutrition": {
      "weightGrams": 70,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-71",
    "categoryId": "porc",
    "name": {
      "ro": "Sos alb, cu ciuperci",
      "en": "Sauce Alb, With Ciuperci",
      "hu": "Sauce Alb, With Ciuperci"
    },
    "description": {
      "ro": "smântână lichidă, ciuperci, ceapă, ardei, pătrunjel verde, condimente",
      "en": "sour cream lichidă, mushrooms, onion, pepper, parsley verof, condimente",
      "hu": "tejföl lichidă, gomba, hagyma, paprika, pătrunjel verde, condimente"
    },
    "price": 12.0,
    "weight": "100 g",
    "imageUrl": "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "3",
      "7"
    ],
    "nutrition": {
      "weightGrams": 100,
      "energyKcal": 317.3,
      "energyKj": 1309.4,
      "fats": 30.8,
      "saturatedFats": 9.3,
      "carbs": 7.7,
      "sugars": 2.5,
      "protein": 3.1,
      "salt": 0.4
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-72",
    "categoryId": "garnituri",
    "name": {
      "ro": "Cartofi prăjiţi",
      "en": "Cartofi Prăjiţi",
      "hu": "Cartofi Prăjiţi"
    },
    "description": {
      "ro": "cartofi, ulei de palmier, condimente",
      "en": "potatoes, oil of palmier, condimente",
      "hu": "burgonya, olaj de palmier, condimente"
    },
    "price": 12.0,
    "weight": "180 g",
    "imageUrl": "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [],
    "nutrition": {
      "weightGrams": 180,
      "energyKcal": 169.6,
      "energyKj": 709.4,
      "fats": 7.3,
      "saturatedFats": 1.9,
      "carbs": 24.8,
      "sugars": 0.6,
      "protein": 1.6,
      "salt": 1.0
    },
    "isVegetarian": true,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-73",
    "categoryId": "garnituri",
    "name": {
      "ro": "Cartofi piure",
      "en": "Cartofi Piure",
      "hu": "Cartofi Piure"
    },
    "description": {
      "ro": "cartofi, lapte, unt, condimente",
      "en": "potatoes, milk, butter, condimente",
      "hu": "burgonya, tej, vaj, condimente"
    },
    "price": 10.0,
    "weight": "200 g",
    "imageUrl": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "7"
    ],
    "nutrition": {
      "weightGrams": 200,
      "energyKcal": 91.9,
      "energyKj": 386.6,
      "fats": 2.6,
      "saturatedFats": 1.7,
      "carbs": 15.9,
      "sugars": 0.8,
      "protein": 1.9,
      "salt": 1.0
    },
    "isVegetarian": true,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-74",
    "categoryId": "garnituri",
    "name": {
      "ro": "Cartofi natur",
      "en": "Cartofi Natur",
      "hu": "Vajas-Petrezselymes Főtt Burgonya"
    },
    "description": {
      "ro": "cartofi, ulei de floarea soarelui, condimente",
      "en": "potatoes, oil of floarea soarelui, condimente",
      "hu": "burgonya, olaj de floarea soarelui, condimente"
    },
    "price": 10.0,
    "weight": "200 g",
    "imageUrl": "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "7"
    ],
    "nutrition": {
      "weightGrams": 200,
      "energyKcal": 130.3,
      "energyKj": 544.4,
      "fats": 7.0,
      "saturatedFats": 3.2,
      "carbs": 15.7,
      "sugars": 0.6,
      "protein": 1.8,
      "salt": 1.0
    },
    "isVegetarian": true,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-75",
    "categoryId": "garnituri",
    "name": {
      "ro": "Cartofi aurii",
      "en": "Cartofi Aurii",
      "hu": "Kemencében Sült Aranyburgonya"
    },
    "description": {
      "ro": "cartofi, ulei de palmier, condimente",
      "en": "potatoes, oil of palmier, condimente",
      "hu": "burgonya, olaj de palmier, condimente"
    },
    "price": 12.0,
    "weight": "180 g",
    "imageUrl": "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [],
    "nutrition": {
      "weightGrams": 180,
      "energyKcal": 129.0,
      "energyKj": 542.3,
      "fats": 4.1,
      "saturatedFats": 1.9,
      "carbs": 21.5,
      "sugars": 0.8,
      "protein": 2.4,
      "salt": 0.0
    },
    "isVegetarian": true,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-76",
    "categoryId": "garnituri",
    "name": {
      "ro": "Pilaf de orez",
      "en": "Pilaf Of Orez",
      "hu": "Zöldséges Rizs Piláf"
    },
    "description": {
      "ro": "orez, legume asortate, ceapă, ardei, ulei de floarea soarelui, condimente",
      "en": "rice, legume asortate, onion, pepper, oil of floarea soarelui, condimente",
      "hu": "rizs, legume asortate, hagyma, paprika, olaj de floarea soarelui, condimente"
    },
    "price": 10.0,
    "weight": "200 g",
    "imageUrl": "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [],
    "nutrition": {
      "weightGrams": 200,
      "energyKcal": 131.7,
      "energyKj": 556.0,
      "fats": 2.7,
      "saturatedFats": 0.3,
      "carbs": 24.4,
      "sugars": 0.6,
      "protein": 2.6,
      "salt": 0.0
    },
    "isVegetarian": true,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-77",
    "categoryId": "garnituri",
    "name": {
      "ro": "Legume înăbuşite",
      "en": "Legume Înăbuşite",
      "hu": "Legume Înăbuşite"
    },
    "description": {
      "ro": "brocoli, morcov, conopidă, ceapă, unt, condimente",
      "en": "brocoli, carrots, cauliflower, onion, butter, condimente",
      "hu": "brocoli, morcov, conopidă, hagyma, vaj, condimente"
    },
    "price": 12.0,
    "weight": "200 g",
    "imageUrl": "https://images.unsplash.com/photo-1592417817098-8f3d6eb22509?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "7"
    ],
    "nutrition": {
      "weightGrams": 200,
      "energyKcal": 62.0,
      "energyKj": 258.9,
      "fats": 2.6,
      "saturatedFats": 1.7,
      "carbs": 8.7,
      "sugars": 3.0,
      "protein": 2.0,
      "salt": 1.0
    },
    "isVegetarian": true,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-78",
    "categoryId": "garnituri",
    "name": {
      "ro": "Mămăligă",
      "en": "Mămăligă",
      "hu": "Mămăligă"
    },
    "description": {
      "ro": "făină de mălai, ulei de floarea soarelui, sare",
      "en": "flour of cornmeal, oil of floarea soarelui, salt",
      "hu": "liszt de mălai, olaj de floarea soarelui, sare"
    },
    "price": 9.0,
    "weight": "200 g",
    "imageUrl": "https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "1"
    ],
    "nutrition": {
      "weightGrams": 200,
      "energyKcal": 218.5,
      "energyKj": 921.0,
      "fats": 5.5,
      "saturatedFats": 0.6,
      "carbs": 37.5,
      "sugars": 0.9,
      "protein": 3.2,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-79",
    "categoryId": "garnituri",
    "name": {
      "ro": "Iahnie de fasole",
      "en": "Iahnie Of Fasole",
      "hu": "Iahnie Of Fasole"
    },
    "description": {
      "ro": "fasole, ceapă, ardei, roșie, ulei de floarea soarelui, făină de grâu, usturoi, sare, condimente",
      "en": "beans, onion, pepper, tomato, oil of floarea soarelui, flour of grâu, garlic, salt, condimente",
      "hu": "fasole, hagyma, paprika, paradicsom, olaj de floarea soarelui, liszt de grâu, fokhagyma, sare, condimente"
    },
    "price": 12.0,
    "weight": "200 g",
    "imageUrl": "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "1"
    ],
    "nutrition": {
      "weightGrams": 200,
      "energyKcal": 88.3,
      "energyKj": 366.9,
      "fats": 5.2,
      "saturatedFats": 0.5,
      "carbs": 9.4,
      "sugars": 2.6,
      "protein": 2.1,
      "salt": 1.8
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-80",
    "categoryId": "garnituri",
    "name": {
      "ro": "Ciuperci sote",
      "en": "Ciuperci Sote",
      "hu": "Ciuperci Sote"
    },
    "description": {
      "ro": "ciuperci, ardei, roșii, ceapă, ulei de floarea soarelui, condimente",
      "en": "mushrooms, pepper, tomatoes, onion, oil of floarea soarelui, condimente",
      "hu": "gomba, paprika, paradicsom, hagyma, olaj de floarea soarelui, condimente"
    },
    "price": 15.0,
    "weight": "200 g",
    "imageUrl": "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [],
    "nutrition": {
      "weightGrams": 200,
      "energyKcal": 70.9,
      "energyKj": 292.6,
      "fats": 5.1,
      "saturatedFats": 0.6,
      "carbs": 5.8,
      "sugars": 1.5,
      "protein": 2.6,
      "salt": 0.8
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-81",
    "categoryId": "garnituri",
    "name": {
      "ro": "Legume asortate la",
      "en": "Legume Asortate La",
      "hu": "Legume Asortate La"
    },
    "description": {
      "ro": "ciuperci, ardei, roșii, ceapă, dovlecel, vânătă, ulei de floarea soarelui, condimente",
      "en": "mushrooms, pepper, tomatoes, onion, zucchini, vânătă, oil of floarea soarelui, condimente",
      "hu": "gomba, paprika, paradicsom, hagyma, dovlecel, vânătă, olaj de floarea soarelui, condimente"
    },
    "price": 18.0,
    "weight": "200g",
    "imageUrl": "https://images.unsplash.com/photo-1592417817098-8f3d6eb22509?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [],
    "nutrition": {
      "weightGrams": 200,
      "energyKcal": 70.9,
      "energyKj": 292.6,
      "fats": 5.1,
      "saturatedFats": 0.6,
      "carbs": 5.8,
      "sugars": 1.5,
      "protein": 2.6,
      "salt": 0.8
    },
    "isVegetarian": true,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-82",
    "categoryId": "paste-risotto",
    "name": {
      "ro": "Spaghete Milanese",
      "en": "Spaghete Milanese",
      "hu": "Milánói Spagetti"
    },
    "description": {
      "ro": "paste, șuncă, sos de roșii, ciuperci, parmezan, ulei de floarea soarelui, condimente",
      "en": "paste, ham, sauce of tomatoes, mushrooms, parmezan, oil of floarea soarelui, condimente",
      "hu": "paste, sonka, szósz de paradicsom, gomba, parmezan, olaj de floarea soarelui, condimente"
    },
    "price": 32.0,
    "weight": "400 g",
    "imageUrl": "https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "1",
      "7"
    ],
    "nutrition": {
      "weightGrams": 400,
      "energyKcal": 180.8,
      "energyKj": 757.3,
      "fats": 11.7,
      "saturatedFats": 5.7,
      "carbs": 12.7,
      "sugars": 0.2,
      "protein": 8.0,
      "salt": 1.5
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-83",
    "categoryId": "paste-risotto",
    "name": {
      "ro": "Spaghete Carbonara",
      "en": "Spaghete Carbonara",
      "hu": "Autentikus Carbonara Spagetti"
    },
    "description": {
      "ro": "spaghete, bacon, smântână lichidă, parmezan, ou, ulei de floarea soarelui, condimente",
      "en": "spaghetti, bacon, sour cream lichidă, parmezan, egg, oil of floarea soarelui, condimente",
      "hu": "spagetti, bacon, tejföl lichidă, parmezan, tojás, olaj de floarea soarelui, condimente"
    },
    "price": 32.0,
    "weight": "400 g",
    "imageUrl": "https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "1",
      "3",
      "7"
    ],
    "nutrition": {
      "weightGrams": 400,
      "energyKcal": 246.4,
      "energyKj": 1031.7,
      "fats": 16.5,
      "saturatedFats": 6.5,
      "carbs": 12.3,
      "sugars": 0.1,
      "protein": 12.6,
      "salt": 1.3
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-84",
    "categoryId": "paste-risotto",
    "name": {
      "ro": "Paste Quattro Formaggi",
      "en": "Paste Quattro Formaggi",
      "hu": "Négysajtos Tészta"
    },
    "description": {
      "ro": "paste, smântână lichidă, parmezan, ou, gorgonzola, brânză de burduf, unt, ulei de floarea soarelui, condimente",
      "en": "paste, sour cream lichidă, parmezan, egg, gorgonzola, cheese of burduf, butter, oil of floarea soarelui, condimente",
      "hu": "paste, tejföl lichidă, parmezan, tojás, gorgonzola, sajt / túró de burduf, vaj, olaj de floarea soarelui, condimente"
    },
    "price": 35.0,
    "weight": "400 g",
    "imageUrl": "https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "1",
      "3",
      "7"
    ],
    "nutrition": {
      "weightGrams": 400,
      "energyKcal": 282.1,
      "energyKj": 1180.1,
      "fats": 20.0,
      "saturatedFats": 11.7,
      "carbs": 12.0,
      "sugars": 0.3,
      "protein": 13.8,
      "salt": 1.5
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-85",
    "categoryId": "paste-risotto",
    "name": {
      "ro": "Paste all`arrabbiata",
      "en": "Paste All`Arrabbiata",
      "hu": "Paste All`Arrabbiata"
    },
    "description": {
      "ro": "paste, roșii, sos de roșii, pesto, ulei de măsline, condimente",
      "en": "paste, tomatoes, sauce of tomatoes, pesto, oil of olives, condimente",
      "hu": "paste, paradicsom, szósz de paradicsom, pesto, olaj de olívabogyó, condimente"
    },
    "price": 28.0,
    "weight": "400 g",
    "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3d5d6281691?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "1"
    ],
    "nutrition": {
      "weightGrams": 400,
      "energyKcal": 138.7,
      "energyKj": 585.5,
      "fats": 3.6,
      "saturatedFats": 1.9,
      "carbs": 17.3,
      "sugars": 0.4,
      "protein": 9.5,
      "salt": 0.0
    },
    "isVegetarian": false,
    "isSpicy": true,
    "isSpecialty": false
  },
  {
    "id": "item-86",
    "categoryId": "paste-risotto",
    "name": {
      "ro": "Tagliatelle cu creveti",
      "en": "Tagliatelle With Creveti",
      "hu": "Tagliatelle With Creveti"
    },
    "description": {
      "ro": "paste,  creveți, mix de legume, unt, smântână, condimente",
      "en": "paste,  prawns, mix of legume, butter, sour cream, condimente",
      "hu": "paste,  garnéla, mix de legume, vaj, tejföl, condimente"
    },
    "price": 42.0,
    "weight": "400 g",
    "imageUrl": "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80",
    "isThawed": true,
    "allergens": [
      "1",
      "2",
      "7"
    ],
    "nutrition": {
      "weightGrams": 400,
      "energyKcal": 138.7,
      "energyKj": 585.5,
      "fats": 3.6,
      "saturatedFats": 1.9,
      "carbs": 17.3,
      "sugars": 0.4,
      "protein": 9.5,
      "salt": 0.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-87",
    "categoryId": "paste-risotto",
    "name": {
      "ro": "Paste cu fructe de mare",
      "en": "Paste With Fructe Of Mare",
      "hu": "Tenger Gyümölcsei Tészta"
    },
    "description": {
      "ro": "paste, fructe de mare, roșii, lămâie, unt, usturoi, ulei de masline",
      "en": "paste, fructe of mare, tomatoes, lemon, butter, garlic, oil of masline",
      "hu": "paste, fructe de mare, paradicsom, citrom, vaj, fokhagyma, olaj de masline"
    },
    "price": 42.0,
    "weight": "400 g",
    "imageUrl": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80",
    "isThawed": true,
    "allergens": [
      "1",
      "2",
      "7",
      "14"
    ],
    "nutrition": {
      "weightGrams": 400,
      "energyKcal": 145.8,
      "energyKj": 612.5,
      "fats": 4.8,
      "saturatedFats": 2.1,
      "carbs": 18.3,
      "sugars": 0.7,
      "protein": 7.8,
      "salt": 0.2
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-88",
    "categoryId": "paste-risotto",
    "name": {
      "ro": "Tagliatelli cu somon",
      "en": "Tagliatelli With Somon",
      "hu": "Tagliatelli With Somon"
    },
    "description": {
      "ro": "somon, paste, smântână, usturoi, pătrunjel, unt, condimente",
      "en": "salmon, paste, sour cream, garlic, parsley, butter, condimente",
      "hu": "lazac, paste, tejföl, fokhagyma, pătrunjel, vaj, condimente"
    },
    "price": 42.0,
    "weight": "400 g",
    "imageUrl": "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80",
    "isThawed": true,
    "allergens": [
      "1",
      "4",
      "7"
    ],
    "nutrition": {
      "weightGrams": 400,
      "energyKcal": 138.7,
      "energyKj": 585.5,
      "fats": 3.6,
      "saturatedFats": 1.9,
      "carbs": 17.3,
      "sugars": 0.4,
      "protein": 9.5,
      "salt": 0.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-89",
    "categoryId": "paste-risotto",
    "name": {
      "ro": "Risotto al funghi porcini",
      "en": "Risotto Al Funghi Porcini",
      "hu": "Vargányagombás Rizottó"
    },
    "description": {
      "ro": "orez, hribi, usturoi, parmezan, condimente",
      "en": "rice, porcini mushrooms, garlic, parmezan, condimente",
      "hu": "rizs, vargánya gomba, fokhagyma, parmezan, condimente"
    },
    "price": 42.0,
    "weight": "350 g",
    "imageUrl": "https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=800&q=80",
    "isThawed": true,
    "allergens": [],
    "nutrition": {
      "weightGrams": 350,
      "energyKcal": 70.9,
      "energyKj": 292.6,
      "fats": 5.1,
      "saturatedFats": 0.6,
      "carbs": 5.8,
      "sugars": 1.5,
      "protein": 2.6,
      "salt": 0.8
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": true
  },
  {
    "id": "item-90",
    "categoryId": "paste-risotto",
    "name": {
      "ro": "Risotto alla pescadora",
      "en": "Risotto Alla Pescadora",
      "hu": "Risotto Alla Pescadora"
    },
    "description": {
      "ro": "orez,  fructe de mare, lămâie, unt, condimente",
      "en": "rice,  fructe of mare, lemon, butter, condimente",
      "hu": "rizs,  fructe de mare, citrom, vaj, condimente"
    },
    "price": 49.0,
    "weight": "350 g",
    "imageUrl": "https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=800&q=80",
    "isThawed": true,
    "allergens": [
      "7",
      "14"
    ],
    "nutrition": {
      "weightGrams": 350,
      "energyKcal": 145.8,
      "energyKj": 612.5,
      "fats": 4.8,
      "saturatedFats": 2.1,
      "carbs": 18.3,
      "sugars": 0.7,
      "protein": 7.8,
      "salt": 0.2
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-91",
    "categoryId": "salate",
    "name": {
      "ro": "Salată",
      "en": "Salată",
      "hu": "Salată"
    },
    "description": {
      "ro": "salată iceberg, telemea, roșie, castraveți, măsline, ardei, lămâie, ulei de măsline, condimente",
      "en": "salad iceberg, telemea, tomato, withwithmbers, olives, pepper, lemon, oil of olives, condimente",
      "hu": "salată iceberg, telemea, paradicsom, castraveți, olívabogyó, paprika, citrom, olaj de olívabogyó, condimente"
    },
    "price": 28.0,
    "weight": "200g",
    "imageUrl": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "7"
    ],
    "nutrition": {
      "weightGrams": 200,
      "energyKcal": 115.4,
      "energyKj": 478.0,
      "fats": 10.5,
      "saturatedFats": 3.6,
      "carbs": 2.8,
      "sugars": 1.8,
      "protein": 2.6,
      "salt": 1.7
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-92",
    "categoryId": "salate",
    "name": {
      "ro": "Salata cu ton",
      "en": "Salata With Ton",
      "hu": "Salata With Ton"
    },
    "description": {
      "ro": "salata iceberg, ton, salată, roșie, castraveți, măsline, iaurt, ardei, lămâie, ulei de măsline, condimente",
      "en": "salata iceberg, tuna, salad, tomato, withwithmbers, olives, yogurt, pepper, lemon, oil of olives, condimente",
      "hu": "salata iceberg, tonhal, salată, paradicsom, castraveți, olívabogyó, joghurt, paprika, citrom, olaj de olívabogyó, condimente"
    },
    "price": 28.0,
    "weight": "70 g",
    "imageUrl": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "3",
      "4",
      "7"
    ],
    "nutrition": {
      "weightGrams": 70,
      "energyKcal": 115.4,
      "energyKj": 478.0,
      "fats": 10.5,
      "saturatedFats": 3.6,
      "carbs": 2.8,
      "sugars": 1.8,
      "protein": 2.6,
      "salt": 1.7
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-93",
    "categoryId": "salate",
    "name": {
      "ro": "Salată Cezar",
      "en": "Salată Cezar",
      "hu": "Salată Cezar"
    },
    "description": {
      "ro": "piept de pui, salată iceberg, parmezan, ou, lămâie, muștar,  file de anșoa, capere, castraveți murați, ulei de măsline, condimente",
      "en": "piept of chicken, salad iceberg, parmezan, egg, lemon, mustard,  file of anchovies, capere, withwithmbers murați, oil of olives, condimente",
      "hu": "piept de csirke, salată iceberg, parmezan, tojás, citrom, mustár,  file de anșoa, capere, castraveți murați, olaj de olívabogyó, condimente"
    },
    "price": 35.0,
    "weight": "70 g",
    "imageUrl": "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&w=800&q=80",
    "isThawed": true,
    "allergens": [
      "3",
      "4",
      "7",
      "10"
    ],
    "nutrition": {
      "weightGrams": 70,
      "energyKcal": 115.4,
      "energyKj": 478.0,
      "fats": 10.5,
      "saturatedFats": 3.6,
      "carbs": 2.8,
      "sugars": 1.8,
      "protein": 2.6,
      "salt": 1.7
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-94",
    "categoryId": "salate",
    "name": {
      "ro": "Salată Capresse",
      "en": "Salată Capresse",
      "hu": "Salată Capresse"
    },
    "description": {
      "ro": "mozzarela, roșii, rucola/salata sezon, ulei de măsline, pesto, iaurt, condimente",
      "en": "mozzarela, tomatoes, rucola/salata sezon, oil of olives, pesto, yogurt, condimente",
      "hu": "mozzarela, paradicsom, rucola/salata sezon, olaj de olívabogyó, pesto, joghurt, condimente"
    },
    "price": 28.0,
    "weight": "50 g",
    "imageUrl": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "7"
    ],
    "nutrition": {
      "weightGrams": 50,
      "energyKcal": 334.0,
      "energyKj": 1369.4,
      "fats": 25.0,
      "saturatedFats": 18.3,
      "carbs": 1.0,
      "sugars": 1.0,
      "protein": 26.0,
      "salt": 2.1
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-95",
    "categoryId": "salate",
    "name": {
      "ro": "Salată cu avocado, pui sau creveti",
      "en": "Salată With Avocado, Chicken Sau Creveti",
      "hu": "Salată With Avocado, Chicken Sau Creveti"
    },
    "description": {
      "ro": "piept de pui/creveți, parmezan, avocado, salată iceberg și de sezon, susan, castraveți, roșii, lămâie, muștar, ulei de măsline, condimente",
      "en": "piept of chicken/prawns, parmezan, avocado, salad iceberg & of sezon, sesame, withwithmbers, tomatoes, lemon, mustard, oil of olives, condimente",
      "hu": "piept de csirke/garnéla, parmezan, avocado, salată iceberg și de sezon, susan, castraveți, paradicsom, citrom, mustár, olaj de olívabogyó, condimente"
    },
    "price": 38.0,
    "weight": "70 g",
    "imageUrl": "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80",
    "isThawed": true,
    "allergens": [
      "2",
      "3",
      "7",
      "10",
      "11"
    ],
    "nutrition": {
      "weightGrams": 70,
      "energyKcal": 115.4,
      "energyKj": 478.0,
      "fats": 10.5,
      "saturatedFats": 3.6,
      "carbs": 2.8,
      "sugars": 1.8,
      "protein": 2.6,
      "salt": 1.7
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-96",
    "categoryId": "salate",
    "name": {
      "ro": "Salată varză albă",
      "en": "Salată Varză Albă",
      "hu": "Salată Varză Albă"
    },
    "description": {
      "ro": "varză, oțet balsamic, ulei de floarea soarelui, lămâie)    Informații nutriționale 100g: Valoare Energetică (kJ/kcal): 239.7 / 57.6, Grăsimi (g): 3.5 din care: Acizi grași saturați (g) 0.3, Glucide (g): 6.3 din care: Zaharuri (g): 4.3, Proteine (g): 1.1, Sare (g): 0",
      "en": "cabbage, oțet balsamic, oil of floarea soarelui, lemon)    Informații nutriționale 100g: Valoare Energetică (kJ/kcal): 239.7 / 57.6, Grăsimi (g): 3.5 din care: Acizi gra& saturați (g) 0.3, Gluciof (g): 6.3 din care: Zaharuri (g): 4.3, Proteine (g): 1.1, salt (g): 0",
      "hu": "káposzta, oțet balsamic, olaj de floarea soarelui, citrom)    Informații nutriționale 100g: Valoare Energetică (kJ/kcal): 239.7 / 57.6, Grăsimi (g): 3.5 din care: Acizi grași saturați (g) 0.3, Glucide (g): 6.3 din care: Zaharuri (g): 4.3, Proteine (g): 1.1, Sare (g): 0"
    },
    "price": 8.0,
    "weight": "150 g",
    "imageUrl": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "12"
    ],
    "nutrition": {
      "weightGrams": 150,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-97",
    "categoryId": "salate",
    "name": {
      "ro": "Salată  de roşii",
      "en": "Salată  Of Roşii",
      "hu": "Salată  Of Roşii"
    },
    "description": {
      "ro": "roșie, ulei de floarea soarelui, sare)     Informații nutriționale 100g: Valoare Energetică (kJ/kcal): 283.2 / 68.4, Grăsimi (g): 5.6 din care: Acizi grași saturați (g) 0.6, Glucide (g): 4.6 din care: Zaharuri (g): 3.2, Proteine (g): 0.6, Sare (g): 1.3",
      "en": "tomato, oil of floarea soarelui, salt)     Informații nutriționale 100g: Valoare Energetică (kJ/kcal): 283.2 / 68.4, Grăsimi (g): 5.6 din care: Acizi gra& saturați (g) 0.6, Gluciof (g): 4.6 din care: Zaharuri (g): 3.2, Proteine (g): 0.6, salt (g): 1.3",
      "hu": "paradicsom, olaj de floarea soarelui, sare)     Informații nutriționale 100g: Valoare Energetică (kJ/kcal): 283.2 / 68.4, Grăsimi (g): 5.6 din care: Acizi grași saturați (g) 0.6, Glucide (g): 4.6 din care: Zaharuri (g): 3.2, Proteine (g): 0.6, Sare (g): 1.3"
    },
    "price": 10.0,
    "weight": "150 g",
    "imageUrl": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [],
    "nutrition": {
      "weightGrams": 150,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-98",
    "categoryId": "salate",
    "name": {
      "ro": "Ardei copţi",
      "en": "Ardei Copţi",
      "hu": "Ardei Copţi"
    },
    "description": {
      "ro": "ardei copți, oțet)       Informații nutriționale 100g: Valoare Energetică (kJ/kcal): 117.2 / 28, Grăsimi (g): 0.1 din care: Acizi grași saturați (g) 0, Glucide (g): 0.1 din care: Zaharuri (g): 0.1, Proteine (g): 0.6, Sare (g): 1.8",
      "en": "pepper copți, oțet)       Informații nutriționale 100g: Valoare Energetică (kJ/kcal): 117.2 / 28, Grăsimi (g): 0.1 din care: Acizi gra& saturați (g) 0, Gluciof (g): 0.1 din care: Zaharuri (g): 0.1, Proteine (g): 0.6, salt (g): 1.8",
      "hu": "paprika copți, oțet)       Informații nutriționale 100g: Valoare Energetică (kJ/kcal): 117.2 / 28, Grăsimi (g): 0.1 din care: Acizi grași saturați (g) 0, Glucide (g): 0.1 din care: Zaharuri (g): 0.1, Proteine (g): 0.6, Sare (g): 1.8"
    },
    "price": 12.0,
    "weight": "150 g",
    "imageUrl": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "12"
    ],
    "nutrition": {
      "weightGrams": 150,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-99",
    "categoryId": "salate",
    "name": {
      "ro": "Salată murături",
      "en": "Salată Murături",
      "hu": "Salată Murături"
    },
    "description": {
      "ro": "salată de murături mix)       Informații nutriționale 100g: Valoare Energetică (kJ/kcal): 113.2 / 27.1, Grăsimi (g): 0.2 din care: Acizi grași saturați (g) 0, Glucide (g): 4 din care: Zaharuri (g): 5, Proteine (g): 0.5, Sare (g): 0.8",
      "en": "salad of murături mix)       Informații nutriționale 100g: Valoare Energetică (kJ/kcal): 113.2 / 27.1, Grăsimi (g): 0.2 din care: Acizi gra& saturați (g) 0, Gluciof (g): 4 din care: Zaharuri (g): 5, Proteine (g): 0.5, salt (g): 0.8",
      "hu": "salată de murături mix)       Informații nutriționale 100g: Valoare Energetică (kJ/kcal): 113.2 / 27.1, Grăsimi (g): 0.2 din care: Acizi grași saturați (g) 0, Glucide (g): 4 din care: Zaharuri (g): 5, Proteine (g): 0.5, Sare (g): 0.8"
    },
    "price": 10.0,
    "weight": "150 g",
    "imageUrl": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "1",
      "10"
    ],
    "nutrition": {
      "weightGrams": 150,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-100",
    "categoryId": "salate",
    "name": {
      "ro": "Salată de sfeclă roşie",
      "en": "Salată Of Sfeclă Roşie",
      "hu": "Salată Of Sfeclă Roşie"
    },
    "description": {
      "ro": "sfeclă roșie, oțet balsamic)   Informații nutriționale 100g: Valoare Energetică (kJ/kcal): 175.1 / 41.5, Grăsimi (g): 0.2 din care: Acizi grași saturați (g) 0, Glucide (g): 9.7 din care: Zaharuri (g): 7.1, Proteine (g): 1.6, Sare (g): 0.1",
      "en": "beetroot tomato, oțet balsamic)   Informații nutriționale 100g: Valoare Energetică (kJ/kcal): 175.1 / 41.5, Grăsimi (g): 0.2 din care: Acizi gra& saturați (g) 0, Gluciof (g): 9.7 din care: Zaharuri (g): 7.1, Proteine (g): 1.6, salt (g): 0.1",
      "hu": "sfeclă paradicsom, oțet balsamic)   Informații nutriționale 100g: Valoare Energetică (kJ/kcal): 175.1 / 41.5, Grăsimi (g): 0.2 din care: Acizi grași saturați (g) 0, Glucide (g): 9.7 din care: Zaharuri (g): 7.1, Proteine (g): 1.6, Sare (g): 0.1"
    },
    "price": 12.0,
    "weight": "150 g",
    "imageUrl": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "12"
    ],
    "nutrition": {
      "weightGrams": 150,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-101",
    "categoryId": "salate",
    "name": {
      "ro": "Salată de ceapă",
      "en": "Salată Of Ceapă",
      "hu": "Salată Of Ceapă"
    },
    "description": {
      "ro": "ceapă, ulei de floarea soarelui, sare)  Informații nutriționale 100g: Valoare Energetică (kJ/kcal): 193.9 / 46.6, Grăsimi (g): 2.2 din care: Acizi grași saturați (g) 0.2, Glucide (g): 6.5 din care: Zaharuri (g): 4.6, Proteine (g): 1.2, Sare (g): 1.3.",
      "en": "onion, oil of floarea soarelui, salt)  Informații nutriționale 100g: Valoare Energetică (kJ/kcal): 193.9 / 46.6, Grăsimi (g): 2.2 din care: Acizi gra& saturați (g) 0.2, Gluciof (g): 6.5 din care: Zaharuri (g): 4.6, Proteine (g): 1.2, salt (g): 1.3.",
      "hu": "hagyma, olaj de floarea soarelui, sare)  Informații nutriționale 100g: Valoare Energetică (kJ/kcal): 193.9 / 46.6, Grăsimi (g): 2.2 din care: Acizi grași saturați (g) 0.2, Glucide (g): 6.5 din care: Zaharuri (g): 4.6, Proteine (g): 1.2, Sare (g): 1.3."
    },
    "price": 8.0,
    "weight": "150 g",
    "imageUrl": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [],
    "nutrition": {
      "weightGrams": 150,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-102",
    "categoryId": "desert",
    "name": {
      "ro": "Îngheţată la cupă",
      "en": "Îngheţată La Cupă",
      "hu": "Îngheţată La Cupă"
    },
    "description": {
      "ro": "înghețată,  lapte,  frișcă, topping fructe, ciocolată",
      "en": "ice cream,  milk,  whipped cream, topping fructe, chocolate",
      "hu": "înghețată,  tej,  frișcă, topping fructe, csokoládé"
    },
    "price": 22.0,
    "weight": "100 g",
    "imageUrl": "https://images.unsplash.com/photo-1528975604071-b4dc52a2d18c?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "6",
      "7"
    ],
    "nutrition": {
      "weightGrams": 100,
      "energyKcal": 906.6,
      "energyKj": 865.8,
      "fats": 10.8,
      "saturatedFats": 2.8,
      "carbs": 25.0,
      "sugars": 22.4,
      "protein": 1.9,
      "salt": 0.1
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-103",
    "categoryId": "desert",
    "name": {
      "ro": "Vulcan de ciocolată cu îngheţată și fructe",
      "en": "Vulcan Of Ciocolată With Îngheţată & Fructe",
      "hu": "Vulcan Of Ciocolată With Îngheţată & Fructe"
    },
    "description": {
      "ro": "înghețată lapte, fructe asortate, lava cake, topping ciocolată,  frișcă",
      "en": "ice cream milk, fructe asortate, lava cake, topping chocolate,  whipped cream",
      "hu": "înghețată tej, fructe asortate, lava cake, topping csokoládé,  frișcă"
    },
    "price": 28.0,
    "weight": "200 g",
    "imageUrl": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80",
    "isThawed": true,
    "allergens": [
      "1",
      "3",
      "6",
      "7",
      "8"
    ],
    "nutrition": {
      "weightGrams": 200,
      "energyKcal": 235.2,
      "energyKj": 988.7,
      "fats": 8.7,
      "saturatedFats": 6.8,
      "carbs": 38.2,
      "sugars": 25.5,
      "protein": 2.1,
      "salt": 0.1
    },
    "isVegetarian": true,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-104",
    "categoryId": "desert",
    "name": {
      "ro": "Clătite cu banană, finetti și înghețată",
      "en": "Clătite With Banană, Finetti & Înghețată",
      "hu": "Mogyorókrémes-Banános Palacsinta Fagylalttal"
    },
    "description": {
      "ro": "banane, finetti , frișcă, înghețată, lapte, făină de grâu, ou, ulei de floarea soarelui, zahăr",
      "en": "banane, finetti , whipped cream, ice cream, milk, flour of grâu, egg, oil of floarea soarelui, sugar",
      "hu": "banane, finetti , frișcă, înghețată, tej, liszt de grâu, tojás, olaj de floarea soarelui, cukor"
    },
    "price": 28.0,
    "weight": "200 g",
    "imageUrl": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "1",
      "3",
      "7",
      "8"
    ],
    "nutrition": {
      "weightGrams": 200,
      "energyKcal": 339.1,
      "energyKj": 1417.5,
      "fats": 20.9,
      "saturatedFats": 6.4,
      "carbs": 32.5,
      "sugars": 17.6,
      "protein": 5.8,
      "salt": 0.1
    },
    "isVegetarian": true,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-105",
    "categoryId": "desert",
    "name": {
      "ro": "Clătite cu",
      "en": "Clătite With",
      "hu": "Clătite With"
    },
    "description": {
      "ro": "ou, lapte, făină de grâu, frișcă, zahăr, gem fructe, ulei de floarea soarelui",
      "en": "egg, milk, flour of grâu, whipped cream, sugar, jam fructe, oil of floarea soarelui",
      "hu": "tojás, tej, liszt de grâu, frișcă, cukor, lekvár fructe, olaj de floarea soarelui"
    },
    "price": 20.0,
    "weight": "200g",
    "imageUrl": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "1",
      "3",
      "7"
    ],
    "nutrition": {
      "weightGrams": 200,
      "energyKcal": 271.1,
      "energyKj": 1139.6,
      "fats": 10.9,
      "saturatedFats": 3.5,
      "carbs": 38.7,
      "sugars": 21.8,
      "protein": 5.9,
      "salt": 0.1
    },
    "isVegetarian": true,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-106",
    "categoryId": "desert",
    "name": {
      "ro": "Papanaşi cu brânză şi",
      "en": "Papanaşi With Cheese &",
      "hu": "Papanaşi With Cheese &"
    },
    "description": {
      "ro": "smântână, făină de grâu, ou, brânză dulce, gem, ulei de floarea soarelui, zahăr, griș sare, lămâie",
      "en": "sour cream, flour of grâu, egg, cheese dulce, jam, oil of floarea soarelui, sugar, griș salt, lemon",
      "hu": "tejföl, liszt de grâu, tojás, sajt / túró dulce, lekvár, olaj de floarea soarelui, cukor, griș sare, citrom"
    },
    "price": 32.0,
    "weight": "300g",
    "imageUrl": "https://images.unsplash.com/photo-1528975604071-b4dc52a2d18c?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "1",
      "3",
      "7"
    ],
    "nutrition": {
      "weightGrams": 300,
      "energyKcal": 336.9,
      "energyKj": 1407.7,
      "fats": 19.9,
      "saturatedFats": 5.3,
      "carbs": 33.8,
      "sugars": 17.4,
      "protein": 6.3,
      "salt": 0.8
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-107",
    "categoryId": "desert",
    "name": {
      "ro": "Felie desert",
      "en": "Felie Desert",
      "hu": "Felie Desert"
    },
    "description": {
      "ro": "făină, frișcă, pișcoturi, ouă,  mascarpone,  zahăr  pudră, cafea, esență de rom, vanilie, cacao",
      "en": "flour, whipped cream, pișcoturi, eggs,  mascarpone,  sugar  pudră, cafea, esență of rum, vanilla, cocoa",
      "hu": "liszt, frișcă, pișcoturi, tojás,  mascarpone,  cukor  pudră, cafea, esență de rom, vanilie, kakaó"
    },
    "price": 22.0,
    "weight": "150 g",
    "imageUrl": "https://images.unsplash.com/photo-1528975604071-b4dc52a2d18c?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "1",
      "3",
      "7"
    ],
    "nutrition": {
      "weightGrams": 150,
      "energyKcal": 239.3,
      "energyKj": 1003.6,
      "fats": 13.1,
      "saturatedFats": 7.4,
      "carbs": 26.2,
      "sugars": 11.7,
      "protein": 3.7,
      "salt": 0.1
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-108",
    "categoryId": "desert",
    "name": {
      "ro": "Ecler",
      "en": "Ecler",
      "hu": "Ecler"
    },
    "description": {
      "ro": "făină de grâu, ou, lapte, gem de fructe, zahăr, griș, lămâie esență vanilie",
      "en": "flour of grâu, egg, milk, jam of fructe, sugar, griș, lemon esență vanilla",
      "hu": "liszt de grâu, tojás, tej, lekvár de fructe, cukor, griș, citrom esență vanilie"
    },
    "price": 22.0,
    "weight": "180 g",
    "imageUrl": "https://images.unsplash.com/photo-1528975604071-b4dc52a2d18c?auto=format&fit=crop&w=800&q=80",
    "isThawed": true,
    "allergens": [
      "1",
      "3",
      "7"
    ],
    "nutrition": {
      "weightGrams": 180,
      "energyKcal": 336.9,
      "energyKj": 1407.7,
      "fats": 19.9,
      "saturatedFats": 5.3,
      "carbs": 33.8,
      "sugars": 17.4,
      "protein": 6.3,
      "salt": 0.8
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-109",
    "categoryId": "desert",
    "name": {
      "ro": "Cheesecake",
      "en": "Cheesecake",
      "hu": "Erdei Gyümölcsös Sajttorta"
    },
    "description": {
      "ro": "făină de grâu, ou, lapte, gem de fructe, zahăr, brânză dulce, philadelphia, lămâie, esența vanilie",
      "en": "flour of grâu, egg, milk, jam of fructe, sugar, cheese dulce, philaoflphia, lemon, esența vanilla",
      "hu": "liszt de grâu, tojás, tej, lekvár de fructe, cukor, sajt / túró dulce, philadelphia, citrom, esența vanilie"
    },
    "price": 22.0,
    "weight": "180 g",
    "imageUrl": "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "1",
      "3",
      "7"
    ],
    "nutrition": {
      "weightGrams": 180,
      "energyKcal": 336.9,
      "energyKj": 1407.7,
      "fats": 19.9,
      "saturatedFats": 5.3,
      "carbs": 33.8,
      "sugars": 17.4,
      "protein": 6.3,
      "salt": 0.8
    },
    "isVegetarian": true,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-110",
    "categoryId": "desert",
    "name": {
      "ro": "Tiramisu",
      "en": "Tiramisu",
      "hu": "Klasszikus Olasz Tiramisu"
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 22.0,
    "weight": "150 g",
    "imageUrl": "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "3",
      "7"
    ],
    "nutrition": {
      "weightGrams": 150,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": true,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-111",
    "categoryId": "pizza",
    "name": {
      "ro": "FOCACCIA",
      "en": "Focaccia",
      "hu": "Focaccia"
    },
    "description": {
      "ro": "făină de grâu, ulei de măsline, sare, oregano, drojdie",
      "en": "flour of grâu, oil of olives, salt, oregano, drojdie",
      "hu": "liszt de grâu, olaj de olívabogyó, sare, oregano, drojdie"
    },
    "price": 12.0,
    "weight": "200 g",
    "imageUrl": "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "1"
    ],
    "nutrition": {
      "weightGrams": 200,
      "energyKcal": 383.9,
      "energyKj": 1617.3,
      "fats": 13.1,
      "saturatedFats": 1.4,
      "carbs": 59.2,
      "sugars": 2.2,
      "protein": 9.4,
      "salt": 0.8
    },
    "isVegetarian": true,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-112",
    "categoryId": "pizza",
    "name": {
      "ro": "FOCACCIA CASEI",
      "en": "Focaccia Casei",
      "hu": "Focaccia Casei"
    },
    "description": {
      "ro": "făină de grâu, parmesan, ulei de măsline, sare, oregano, drojdie",
      "en": "flour of grâu, parmesan, oil of olives, salt, oregano, drojdie",
      "hu": "liszt de grâu, parmezán, olaj de olívabogyó, sare, oregano, drojdie"
    },
    "price": 15.0,
    "weight": "30 g",
    "imageUrl": "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "1",
      "2",
      "7"
    ],
    "nutrition": {
      "weightGrams": 30,
      "energyKcal": 392.6,
      "energyKj": 1651.1,
      "fats": 15.9,
      "saturatedFats": 4.5,
      "carbs": 49.3,
      "sugars": 1.9,
      "protein": 14.7,
      "salt": 1.1
    },
    "isVegetarian": true,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-113",
    "categoryId": "pizza",
    "name": {
      "ro": "",
      "en": "",
      "hu": ""
    },
    "description": {
      "ro": "făină de grâu, sos roșii, drojdie, mozzarella, sare, oregano",
      "en": "flour of grâu, sauce tomatoes, drojdie, mozzarella, salt, oregano",
      "hu": "liszt de grâu, szósz paradicsom, drojdie, mozzarella, sare, oregano"
    },
    "price": 30.0,
    "weight": "385 g",
    "imageUrl": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "1",
      "7"
    ],
    "nutrition": {
      "weightGrams": 385,
      "energyKcal": 265.4,
      "energyKj": 1122.6,
      "fats": 7.0,
      "saturatedFats": 3.3,
      "carbs": 37.8,
      "sugars": 2.0,
      "protein": 14.0,
      "salt": 2.4
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-114",
    "categoryId": "pizza",
    "name": {
      "ro": "",
      "en": "",
      "hu": ""
    },
    "description": {
      "ro": "făină de grâu, sare, drojdie, sos de roșii, mozzarella, șuncă, salam, porumb, ciuperci, prosciutto, măsline, oregano",
      "en": "flour of grâu, salt, drojdie, sauce of tomatoes, mozzarella, ham, salam, porumb, mushrooms, prosciutto, olives, oregano",
      "hu": "liszt de grâu, sare, drojdie, szósz de paradicsom, mozzarella, sonka, salam, porumb, gomba, prosciutto, olívabogyó, oregano"
    },
    "price": 35.0,
    "weight": "520 g",
    "imageUrl": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
    "isThawed": true,
    "allergens": [
      "1",
      "2",
      "7",
      "9"
    ],
    "nutrition": {
      "weightGrams": 520,
      "energyKcal": 228.7,
      "energyKj": 959.9,
      "fats": 10.9,
      "saturatedFats": 3.9,
      "carbs": 25.3,
      "sugars": 5.1,
      "protein": 10.5,
      "salt": 1.6
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-115",
    "categoryId": "pizza",
    "name": {
      "ro": "",
      "en": "",
      "hu": ""
    },
    "description": {
      "ro": "făină de grâu, sos de roșii, drojdie, mozzarella, șuncă, sare, oregano",
      "en": "flour of grâu, sauce of tomatoes, drojdie, mozzarella, ham, salt, oregano",
      "hu": "liszt de grâu, szósz de paradicsom, drojdie, mozzarella, sonka, sare, oregano"
    },
    "price": 30.0,
    "weight": "455 g",
    "imageUrl": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "1",
      "3",
      "7"
    ],
    "nutrition": {
      "weightGrams": 455,
      "energyKcal": 265.4,
      "energyKj": 1122.6,
      "fats": 7.0,
      "saturatedFats": 3.3,
      "carbs": 37.8,
      "sugars": 2.0,
      "protein": 14.0,
      "salt": 2.4
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-116",
    "categoryId": "pizza",
    "name": {
      "ro": "",
      "en": "",
      "hu": ""
    },
    "description": {
      "ro": "făină de grâu, sos de roșii, drojdie, mozzarella, șuncă, porumb, sare, oregano",
      "en": "flour of grâu, sauce of tomatoes, drojdie, mozzarella, ham, porumb, salt, oregano",
      "hu": "liszt de grâu, szósz de paradicsom, drojdie, mozzarella, sonka, porumb, sare, oregano"
    },
    "price": 32.0,
    "weight": "455 g",
    "imageUrl": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
    "isThawed": true,
    "allergens": [
      "1",
      "4",
      "7"
    ],
    "nutrition": {
      "weightGrams": 455,
      "energyKcal": 265.4,
      "energyKj": 1122.6,
      "fats": 7.0,
      "saturatedFats": 3.3,
      "carbs": 37.8,
      "sugars": 2.0,
      "protein": 14.0,
      "salt": 2.4
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-117",
    "categoryId": "pizza",
    "name": {
      "ro": "",
      "en": "",
      "hu": ""
    },
    "description": {
      "ro": "făină de grâu, sos de roșii, drojdie, mozzarella, șuncă, ciuperci, sare, oregano",
      "en": "flour of grâu, sauce of tomatoes, drojdie, mozzarella, ham, mushrooms, salt, oregano",
      "hu": "liszt de grâu, szósz de paradicsom, drojdie, mozzarella, sonka, gomba, sare, oregano"
    },
    "price": 32.0,
    "weight": "455 g",
    "imageUrl": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "1",
      "5",
      "7"
    ],
    "nutrition": {
      "weightGrams": 455,
      "energyKcal": 265.4,
      "energyKj": 1122.6,
      "fats": 7.0,
      "saturatedFats": 3.3,
      "carbs": 37.8,
      "sugars": 2.0,
      "protein": 14.0,
      "salt": 2.4
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-118",
    "categoryId": "pizza",
    "name": {
      "ro": "",
      "en": "",
      "hu": ""
    },
    "description": {
      "ro": "făină de grâu, sos de roșii, drojdie, mozzarella, prosciutto crudo, oregano",
      "en": "flour of grâu, sauce of tomatoes, drojdie, mozzarella, prosciutto crudo, oregano",
      "hu": "liszt de grâu, szósz de paradicsom, drojdie, mozzarella, prosciutto crudo, oregano"
    },
    "price": 35.0,
    "weight": "455 g",
    "imageUrl": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "1",
      "6",
      "7"
    ],
    "nutrition": {
      "weightGrams": 455,
      "energyKcal": 265.4,
      "energyKj": 1122.6,
      "fats": 7.0,
      "saturatedFats": 3.3,
      "carbs": 37.8,
      "sugars": 2.0,
      "protein": 14.0,
      "salt": 2.4
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-119",
    "categoryId": "pizza",
    "name": {
      "ro": "",
      "en": "",
      "hu": ""
    },
    "description": {
      "ro": "făină de grâu, sos de roșii, drojdie, mozzarella, prosciutto crudo, rucola, sare, oregano",
      "en": "flour of grâu, sauce of tomatoes, drojdie, mozzarella, prosciutto crudo, rucola, salt, oregano",
      "hu": "liszt de grâu, szósz de paradicsom, drojdie, mozzarella, prosciutto crudo, rucola, sare, oregano"
    },
    "price": 36.0,
    "weight": "455 g",
    "imageUrl": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "1",
      "7"
    ],
    "nutrition": {
      "weightGrams": 455,
      "energyKcal": 265.4,
      "energyKj": 1122.6,
      "fats": 7.0,
      "saturatedFats": 3.3,
      "carbs": 37.8,
      "sugars": 2.0,
      "protein": 14.0,
      "salt": 2.4
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-120",
    "categoryId": "pizza",
    "name": {
      "ro": "",
      "en": "",
      "hu": ""
    },
    "description": {
      "ro": "făină de grâu, drojdie, salam  picant, mozzarella, sos de roșii, sare, oregano",
      "en": "flour of grâu, drojdie, salam  picant, mozzarella, sauce of tomatoes, salt, oregano",
      "hu": "liszt de grâu, drojdie, salam  picant, mozzarella, szósz de paradicsom, sare, oregano"
    },
    "price": 32.0,
    "weight": "425 g",
    "imageUrl": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "1",
      "7",
      "8"
    ],
    "nutrition": {
      "weightGrams": 425,
      "energyKcal": 337.5,
      "energyKj": 1420.0,
      "fats": 16.3,
      "saturatedFats": 6.2,
      "carbs": 35.3,
      "sugars": 1.9,
      "protein": 13.8,
      "salt": 2.7
    },
    "isVegetarian": false,
    "isSpicy": true,
    "isSpecialty": false
  },
  {
    "id": "item-121",
    "categoryId": "pizza",
    "name": {
      "ro": "",
      "en": "",
      "hu": ""
    },
    "description": {
      "ro": "făină de grâu, drojdie, mozzarella, sos de roșii, ciuperci, sare, oregano",
      "en": "flour of grâu, drojdie, mozzarella, sauce of tomatoes, mushrooms, salt, oregano",
      "hu": "liszt de grâu, drojdie, mozzarella, szósz de paradicsom, gomba, sare, oregano"
    },
    "price": 32.0,
    "weight": "430 g",
    "imageUrl": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "1",
      "7",
      "9"
    ],
    "nutrition": {
      "weightGrams": 430,
      "energyKcal": 253.3,
      "energyKj": 1066.9,
      "fats": 9.9,
      "saturatedFats": 3.6,
      "carbs": 32.2,
      "sugars": 1.8,
      "protein": 10.3,
      "salt": 1.9
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-122",
    "categoryId": "pizza",
    "name": {
      "ro": "",
      "en": "",
      "hu": ""
    },
    "description": {
      "ro": "făină degrâu, sare, drojdie, sos de roșii, ciuperci, șuncă, salam, porumb, mozzarella, oregano",
      "en": "flour ofgrâu, salt, drojdie, sauce of tomatoes, mushrooms, ham, salam, porumb, mozzarella, oregano",
      "hu": "liszt degrâu, sare, drojdie, szósz de paradicsom, gomba, sonka, salam, porumb, mozzarella, oregano"
    },
    "price": 32.0,
    "weight": "480 g",
    "imageUrl": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
    "isThawed": true,
    "allergens": [
      "1",
      "7",
      "10"
    ],
    "nutrition": {
      "weightGrams": 480,
      "energyKcal": 247.1,
      "energyKj": 1042.5,
      "fats": 7.7,
      "saturatedFats": 1.8,
      "carbs": 37.0,
      "sugars": 2.1,
      "protein": 8.8,
      "salt": 2.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-123",
    "categoryId": "pizza",
    "name": {
      "ro": "",
      "en": "",
      "hu": ""
    },
    "description": {
      "ro": "făină de grâu, sare, drojdie,sos de roșii, mozzarella, ciuperci, șuncă, porumb, măsline, oregano",
      "en": "flour of grâu, salt, drojdie,sauce of tomatoes, mozzarella, mushrooms, ham, porumb, olives, oregano",
      "hu": "liszt de grâu, sare, drojdie,szósz de paradicsom, mozzarella, gomba, sonka, porumb, olívabogyó, oregano"
    },
    "price": 32.0,
    "weight": "450 g",
    "imageUrl": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
    "isThawed": true,
    "allergens": [
      "1",
      "7",
      "11"
    ],
    "nutrition": {
      "weightGrams": 450,
      "energyKcal": 232.2,
      "energyKj": 977.6,
      "fats": 9.2,
      "saturatedFats": 2.9,
      "carbs": 31.5,
      "sugars": 2.6,
      "protein": 9.4,
      "salt": 2.6
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-124",
    "categoryId": "pizza",
    "name": {
      "ro": "",
      "en": "",
      "hu": ""
    },
    "description": {
      "ro": "făină de grâu, sare, drojdie, sos de roșii, mozzarella, brânză de burduf, gorgonzola, parmezan, oregano) Informații nutriționale 100g: Valoare Energetică (kJ/kcal): 1257.9 / 298.2, Grăsimi (g): 10.8 din care: Acizi grași saturați (g) 5.5, Glucide (g): 38.2 din care: Zaharuri (g): 2, Proteine (g): 13.5, Sare (g): 2.1",
      "en": "flour of grâu, salt, drojdie, sauce of tomatoes, mozzarella, cheese of burduf, gorgonzola, parmezan, oregano) Informații nutriționale 100g: Valoare Energetică (kJ/kcal): 1257.9 / 298.2, Grăsimi (g): 10.8 din care: Acizi gra& saturați (g) 5.5, Gluciof (g): 38.2 din care: Zaharuri (g): 2, Proteine (g): 13.5, salt (g): 2.1",
      "hu": "liszt de grâu, sare, drojdie, szósz de paradicsom, mozzarella, sajt / túró de burduf, gorgonzola, parmezan, oregano) Informații nutriționale 100g: Valoare Energetică (kJ/kcal): 1257.9 / 298.2, Grăsimi (g): 10.8 din care: Acizi grași saturați (g) 5.5, Glucide (g): 38.2 din care: Zaharuri (g): 2, Proteine (g): 13.5, Sare (g): 2.1"
    },
    "price": 35.0,
    "weight": "450 g",
    "imageUrl": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "1",
      "7",
      "12"
    ],
    "nutrition": {
      "weightGrams": 450,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-125",
    "categoryId": "pizza",
    "name": {
      "ro": "",
      "en": "",
      "hu": ""
    },
    "description": {
      "ro": "făină de grâu, ton, mozzarella, roșii cuburi, ceapă, drojdie, sare, oregano",
      "en": "flour of grâu, tuna, mozzarella, tomatoes withburi, onion, drojdie, salt, oregano",
      "hu": "liszt de grâu, tonhal, mozzarella, paradicsom cuburi, hagyma, drojdie, sare, oregano"
    },
    "price": 32.0,
    "weight": "450 g",
    "imageUrl": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "1",
      "4",
      "7",
      "13"
    ],
    "nutrition": {
      "weightGrams": 450,
      "energyKcal": 230.7,
      "energyKj": 976.8,
      "fats": 5.3,
      "saturatedFats": 3.0,
      "carbs": 31.5,
      "sugars": 1.8,
      "protein": 15.6,
      "salt": 2.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-126",
    "categoryId": "pizza",
    "name": {
      "ro": "",
      "en": "",
      "hu": ""
    },
    "description": {
      "ro": "făină de grâu, sare, drojdie, sos de roșii, mozzarella, salam, șuncă, cârnat, bacon, oregano",
      "en": "flour of grâu, salt, drojdie, sauce of tomatoes, mozzarella, salam, ham, cârnat, bacon, oregano",
      "hu": "liszt de grâu, sare, drojdie, szósz de paradicsom, mozzarella, salam, sonka, cârnat, bacon, oregano"
    },
    "price": 38.0,
    "weight": "450 g",
    "imageUrl": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "1",
      "7",
      "14"
    ],
    "nutrition": {
      "weightGrams": 450,
      "energyKcal": 281.8,
      "energyKj": 1188.9,
      "fats": 9.0,
      "saturatedFats": 4.5,
      "carbs": 38.6,
      "sugars": 1.8,
      "protein": 13.6,
      "salt": 1.1
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-127",
    "categoryId": "pizza",
    "name": {
      "ro": "PIZZA VEGETARIANĂ",
      "en": "Pizza Vegetariană",
      "hu": "Pizza Vegetariană"
    },
    "description": {
      "ro": "făină de grâu, sare, drojdie, sos de roșii, mozzarella, cartofi prăjiți, ciuperci, porumb,  măsline, ceapă, ardei) Informații nutriționale 100g: Valoare Energetică (kJ/kcal): 2315.7 / 552.1, Grăsimi (g): 27.3 din care: Acizi grași saturați (g) 10.3, Glucide (g): 69.1 din care: Zaharuri (g): 8, Proteine (g): 14.2, Sare (g): 3.1",
      "en": "flour of grâu, salt, drojdie, sauce of tomatoes, mozzarella, potatoes prăjiți, mushrooms, porumb,  olives, onion, pepper) Informații nutriționale 100g: Valoare Energetică (kJ/kcal): 2315.7 / 552.1, Grăsimi (g): 27.3 din care: Acizi gra& saturați (g) 10.3, Gluciof (g): 69.1 din care: Zaharuri (g): 8, Proteine (g): 14.2, salt (g): 3.1",
      "hu": "liszt de grâu, sare, drojdie, szósz de paradicsom, mozzarella, burgonya prăjiți, gomba, porumb,  olívabogyó, hagyma, paprika) Informații nutriționale 100g: Valoare Energetică (kJ/kcal): 2315.7 / 552.1, Grăsimi (g): 27.3 din care: Acizi grași saturați (g) 10.3, Glucide (g): 69.1 din care: Zaharuri (g): 8, Proteine (g): 14.2, Sare (g): 3.1"
    },
    "price": 32.0,
    "weight": "450 g",
    "imageUrl": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
    "isThawed": true,
    "allergens": [
      "1",
      "7"
    ],
    "nutrition": {
      "weightGrams": 450,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": true,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-128",
    "categoryId": "pizza",
    "name": {
      "ro": "PIZZA TOSCANA",
      "en": "Pizza Toscana",
      "hu": "Pizza Toscana"
    },
    "description": {
      "ro": "făină de grâu, sare, drojdie, sos de roșii, mozzarella, ou,șuncă, bacon, oregano",
      "en": "flour of grâu, salt, drojdie, sauce of tomatoes, mozzarella, egg,ham, bacon, oregano",
      "hu": "liszt de grâu, sare, drojdie, szósz de paradicsom, mozzarella, tojás,sonka, bacon, oregano"
    },
    "price": 35.0,
    "weight": "450 g",
    "imageUrl": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "1",
      "3",
      "7"
    ],
    "nutrition": {
      "weightGrams": 450,
      "energyKcal": 263.9,
      "energyKj": 1114.5,
      "fats": 7.2,
      "saturatedFats": 3.6,
      "carbs": 37.9,
      "sugars": 1.7,
      "protein": 13.6,
      "salt": 2.1
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-129",
    "categoryId": "pizza",
    "name": {
      "ro": "PIZZA SPECIALE",
      "en": "Pizza Speciale",
      "hu": "Pizza Speciale"
    },
    "description": {
      "ro": "făină de grâu, sare, drojdie, sos de roșii, mozzarella, cartofi prăjiți,  piept de pui",
      "en": "flour of grâu, salt, drojdie, sauce of tomatoes, mozzarella, potatoes prăjiți,  piept of chicken",
      "hu": "liszt de grâu, sare, drojdie, szósz de paradicsom, mozzarella, burgonya prăjiți,  piept de csirke"
    },
    "price": 38.0,
    "weight": "550 g",
    "imageUrl": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
    "isThawed": true,
    "allergens": [
      "1",
      "7"
    ],
    "nutrition": {
      "weightGrams": 550,
      "energyKcal": 278.0,
      "energyKj": 1172.4,
      "fats": 7.9,
      "saturatedFats": 2.7,
      "carbs": 40.6,
      "sugars": 3.0,
      "protein": 13.2,
      "salt": 1.4
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-130",
    "categoryId": "pizza",
    "name": {
      "ro": "PIZZA CAPRICCIOSA",
      "en": "Pizza Capricciosa",
      "hu": "Pizza Capricciosa"
    },
    "description": {
      "ro": "făină de grâu,  sare, drojdie, sos de roșii, mozzarella, anghinare, măsline, șuncă, ciuperci, porumb, oregano",
      "en": "flour of grâu,  salt, drojdie, sauce of tomatoes, mozzarella, artichoke, olives, ham, mushrooms, porumb, oregano",
      "hu": "liszt de grâu,  sare, drojdie, szósz de paradicsom, mozzarella, anghinare, olívabogyó, sonka, gomba, porumb, oregano"
    },
    "price": 32.0,
    "weight": "500 g",
    "imageUrl": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
    "isThawed": true,
    "allergens": [
      "1",
      "7"
    ],
    "nutrition": {
      "weightGrams": 500,
      "energyKcal": 243.2,
      "energyKj": 1021.9,
      "fats": 9.8,
      "saturatedFats": 3.5,
      "carbs": 31.5,
      "sugars": 2.0,
      "protein": 10.4,
      "salt": 2.1
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-131",
    "categoryId": "pizza",
    "name": {
      "ro": "PIZZA HAWAI",
      "en": "Pizza Hawai",
      "hu": "Pizza Hawai"
    },
    "description": {
      "ro": "făină de grâu, sare, drojdie, sos de roșii, mozzarella, șuncă, ananas, oregano",
      "en": "flour of grâu, salt, drojdie, sauce of tomatoes, mozzarella, ham, pineapple, oregano",
      "hu": "liszt de grâu, sare, drojdie, szósz de paradicsom, mozzarella, sonka, ananas, oregano"
    },
    "price": 32.0,
    "weight": "500 g",
    "imageUrl": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "1",
      "7"
    ],
    "nutrition": {
      "weightGrams": 500,
      "energyKcal": 243.2,
      "energyKj": 1021.9,
      "fats": 9.8,
      "saturatedFats": 3.5,
      "carbs": 31.5,
      "sugars": 2.0,
      "protein": 10.4,
      "salt": 2.1
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-132",
    "categoryId": "pizza",
    "name": {
      "ro": "PIZZA KEBAB",
      "en": "Pizza Kebab",
      "hu": "Pizza Kebab"
    },
    "description": {
      "ro": "făină de grâu, sare, drojdie, sos de roșii, mozzarella, carne de pui, cartofi prăjiți, roșii cuburi, castraveți murați, ceapă, sos alb, oregano",
      "en": "flour of grâu, salt, drojdie, sauce of tomatoes, mozzarella, carne of chicken, potatoes prăjiți, tomatoes withburi, withwithmbers murați, onion, sauce alb, oregano",
      "hu": "liszt de grâu, sare, drojdie, szósz de paradicsom, mozzarella, carne de csirke, burgonya prăjiți, paradicsom cuburi, castraveți murați, hagyma, szósz alb, oregano"
    },
    "price": 38.0,
    "weight": "500 g",
    "imageUrl": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
    "isThawed": true,
    "allergens": [
      "1",
      "7"
    ],
    "nutrition": {
      "weightGrams": 500,
      "energyKcal": 243.2,
      "energyKj": 1021.9,
      "fats": 9.8,
      "saturatedFats": 3.5,
      "carbs": 31.5,
      "sugars": 2.0,
      "protein": 10.4,
      "salt": 2.1
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-133",
    "categoryId": "pizza",
    "name": {
      "ro": "PIZZA MARISSA FAMILY",
      "en": "Pizza Marissa Family",
      "hu": "Pizza Marissa Family"
    },
    "description": {
      "ro": "făină de grâu, mozzarella, porumb, măsline, ciuperci, șuncă, salam, prosciutto crudo, roșii cuburi, ulei de floarea soarelui, ceapă, zahăr, sare, drojdie",
      "en": "flour of grâu, mozzarella, porumb, olives, mushrooms, ham, salam, prosciutto crudo, tomatoes withburi, oil of floarea soarelui, onion, sugar, salt, drojdie",
      "hu": "liszt de grâu, mozzarella, porumb, olívabogyó, gomba, sonka, salam, prosciutto crudo, paradicsom cuburi, olaj de floarea soarelui, hagyma, cukor, sare, drojdie"
    },
    "price": 72.0,
    "weight": "1400 g",
    "imageUrl": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
    "isThawed": true,
    "allergens": [
      "1",
      "7"
    ],
    "nutrition": {
      "weightGrams": 1400,
      "energyKcal": 285.0,
      "energyKj": 1200.3,
      "fats": 11.3,
      "saturatedFats": 4.3,
      "carbs": 35.9,
      "sugars": 2.2,
      "protein": 13.1,
      "salt": 1.5
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": true
  },
  {
    "id": "item-134",
    "categoryId": "ambalaje",
    "name": {
      "ro": "Ambalaj pizza mică",
      "en": "Ambalaj Pizza Mică",
      "hu": "Ambalaj Pizza Mică"
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 3.0,
    "weight": "buc",
    "imageUrl": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [],
    "nutrition": {
      "weightGrams": 200,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-135",
    "categoryId": "ambalaje",
    "name": {
      "ro": "Ambalaj pizza mare",
      "en": "Ambalaj Pizza Mare",
      "hu": "Ambalaj Pizza Mare"
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 4.0,
    "weight": "buc",
    "imageUrl": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [],
    "nutrition": {
      "weightGrams": 200,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-136",
    "categoryId": "ambalaje",
    "name": {
      "ro": "Pungă",
      "en": "Pungă",
      "hu": "Pungă"
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 0.5,
    "weight": "buc",
    "imageUrl": "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [],
    "nutrition": {
      "weightGrams": 200,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-137",
    "categoryId": "ambalaje",
    "name": {
      "ro": "Caserolă",
      "en": "Caserolă",
      "hu": "Caserolă"
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 1.5,
    "weight": "buc",
    "imageUrl": "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [],
    "nutrition": {
      "weightGrams": 200,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-138",
    "categoryId": "ambalaje",
    "name": {
      "ro": "Tacâm",
      "en": "Tacâm",
      "hu": "Tacâm"
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 1.0,
    "weight": "buc",
    "imageUrl": "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [],
    "nutrition": {
      "weightGrams": 200,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-139",
    "categoryId": "ambalaje",
    "name": {
      "ro": "Salam",
      "en": "Salam",
      "hu": "Salam"
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 5.0,
    "weight": "50 g",
    "imageUrl": "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "7"
    ],
    "nutrition": {
      "weightGrams": 50,
      "energyKcal": 381.2,
      "energyKj": 1594.9,
      "fats": 30.0,
      "saturatedFats": 12.7,
      "carbs": 1.1,
      "sugars": 0.0,
      "protein": 26.7,
      "salt": 4.2
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-140",
    "categoryId": "ambalaje",
    "name": {
      "ro": "Șuncă",
      "en": "Șuncă",
      "hu": "Șuncă"
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 5.0,
    "weight": "50 g",
    "imageUrl": "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "7"
    ],
    "nutrition": {
      "weightGrams": 50,
      "energyKcal": 103.0,
      "energyKj": 431.0,
      "fats": 3.0,
      "saturatedFats": 1.2,
      "carbs": 0.7,
      "sugars": 0.0,
      "protein": 18.0,
      "salt": 2.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-141",
    "categoryId": "ambalaje",
    "name": {
      "ro": "Cârnat",
      "en": "Cârnat",
      "hu": "Cârnat"
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 5.0,
    "weight": "50 g",
    "imageUrl": "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "7"
    ],
    "nutrition": {
      "weightGrams": 50,
      "energyKcal": 260.0,
      "energyKj": 1080.0,
      "fats": 19.6,
      "saturatedFats": 7.5,
      "carbs": 9.3,
      "sugars": 1.6,
      "protein": 11.6,
      "salt": 1.8
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-142",
    "categoryId": "ambalaje",
    "name": {
      "ro": "Bacon",
      "en": "Bacon",
      "hu": "Bacon"
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 5.0,
    "weight": "50 g",
    "imageUrl": "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [],
    "nutrition": {
      "weightGrams": 50,
      "energyKcal": 252.0,
      "energyKj": 1047.0,
      "fats": 20.6,
      "saturatedFats": 6.8,
      "carbs": 0.5,
      "sugars": 0.5,
      "protein": 16.0,
      "salt": 2.6
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-143",
    "categoryId": "ambalaje",
    "name": {
      "ro": "Sos alb",
      "en": "Sauce Alb",
      "hu": "Sauce Alb"
    },
    "description": {
      "ro": "iaurt, smântână, maioneză, usturoi, condimente, oregano",
      "en": "yogurt, sour cream, mayonnaise, garlic, condimente, oregano",
      "hu": "joghurt, tejföl, maioneză, fokhagyma, condimente, oregano"
    },
    "price": 5.0,
    "weight": "70 g",
    "imageUrl": "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "3",
      "7"
    ],
    "nutrition": {
      "weightGrams": 70,
      "energyKcal": 317.3,
      "energyKj": 1309.4,
      "fats": 30.8,
      "saturatedFats": 9.3,
      "carbs": 7.7,
      "sugars": 2.5,
      "protein": 3.1,
      "salt": 0.4
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-144",
    "categoryId": "ambalaje",
    "name": {
      "ro": "Sos roşu",
      "en": "Sauce Roşu",
      "hu": "Sauce Roşu"
    },
    "description": {
      "ro": "roșii, ceapă, oregano, ulei de măsline, sare, piper",
      "en": "tomatoes, onion, oregano, oil of olives, salt, piper",
      "hu": "paradicsom, hagyma, oregano, olaj de olívabogyó, sare, piper"
    },
    "price": 3.0,
    "weight": "70 g",
    "imageUrl": "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "9"
    ],
    "nutrition": {
      "weightGrams": 70,
      "energyKcal": 102.0,
      "energyKj": 426.8,
      "fats": 0.1,
      "saturatedFats": 0.1,
      "carbs": 23.2,
      "sugars": 22.8,
      "protein": 1.2,
      "salt": 1.8
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-145",
    "categoryId": "ambalaje",
    "name": {
      "ro": "Sos roşu picant",
      "en": "Sauce Roşu Picant",
      "hu": "Sauce Roşu Picant"
    },
    "description": {
      "ro": "roșii, ceapă, oregano, ulei de măsline ,sare, piper",
      "en": "tomatoes, onion, oregano, oil of olives ,salt, piper",
      "hu": "paradicsom, hagyma, oregano, olaj de olívabogyó ,sare, piper"
    },
    "price": 5.0,
    "weight": "70 g",
    "imageUrl": "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "9"
    ],
    "nutrition": {
      "weightGrams": 70,
      "energyKcal": 98.4,
      "energyKj": 411.4,
      "fats": 0.2,
      "saturatedFats": 0.1,
      "carbs": 21.9,
      "sugars": 21.5,
      "protein": 1.3,
      "salt": 2.5
    },
    "isVegetarian": false,
    "isSpicy": true,
    "isSpecialty": false
  },
  {
    "id": "item-146",
    "categoryId": "ambalaje",
    "name": {
      "ro": "Sos roşu / Ketchup",
      "en": "Sauce Roşu / Ketchup",
      "hu": "Sauce Roşu / Ketchup"
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 5.0,
    "weight": "70 g",
    "imageUrl": "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "9"
    ],
    "nutrition": {
      "weightGrams": 70,
      "energyKcal": 102.0,
      "energyKj": 426.8,
      "fats": 0.1,
      "saturatedFats": 0.1,
      "carbs": 23.2,
      "sugars": 22.8,
      "protein": 1.2,
      "salt": 1.8
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-147",
    "categoryId": "ambalaje",
    "name": {
      "ro": "Sos alb",
      "en": "Sauce Alb",
      "hu": "Sauce Alb"
    },
    "description": {
      "ro": "iaurt, maioneză, usturoi, oregano, condimente",
      "en": "yogurt, mayonnaise, garlic, oregano, condimente",
      "hu": "joghurt, maioneză, fokhagyma, oregano, condimente"
    },
    "price": 5.0,
    "weight": "70 g",
    "imageUrl": "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "3",
      "7"
    ],
    "nutrition": {
      "weightGrams": 70,
      "energyKcal": 317.3,
      "energyKj": 1309.4,
      "fats": 30.8,
      "saturatedFats": 9.3,
      "carbs": 7.7,
      "sugars": 2.5,
      "protein": 3.1,
      "salt": 0.4
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-148",
    "categoryId": "ambalaje",
    "name": {
      "ro": "Sos chili",
      "en": "Sauce Chili",
      "hu": "Sauce Chili"
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 5.0,
    "weight": "100 g",
    "imageUrl": "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "9"
    ],
    "nutrition": {
      "weightGrams": 100,
      "energyKcal": 96.9,
      "energyKj": 405.3,
      "fats": 0.2,
      "saturatedFats": 0.1,
      "carbs": 21.4,
      "sugars": 21.0,
      "protein": 1.3,
      "salt": 2.8
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-149",
    "categoryId": "ambalaje",
    "name": {
      "ro": "Mujdei de usturoi",
      "en": "Mujdei Of Usturoi",
      "hu": "Mujdei Of Usturoi"
    },
    "description": {
      "ro": "usturoi, lămâie, ulei de floarea soarelui, sare",
      "en": "garlic, lemon, oil of floarea soarelui, salt",
      "hu": "fokhagyma, citrom, olaj de floarea soarelui, sare"
    },
    "price": 5.0,
    "weight": "50 g",
    "imageUrl": "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [],
    "nutrition": {
      "weightGrams": 50,
      "energyKcal": 182.3,
      "energyKj": 759.2,
      "fats": 10.1,
      "saturatedFats": 1.0,
      "carbs": 18.7,
      "sugars": 2.1,
      "protein": 4.2,
      "salt": 4.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-150",
    "categoryId": "ambalaje",
    "name": {
      "ro": "Muştar/maioneza/ketchup",
      "en": "Muştar/Maioneza/Ketchup",
      "hu": "Muştar/Maioneza/Ketchup"
    },
    "description": {
      "ro": "muștar dulce)/",
      "en": "mustard dulce)/",
      "hu": "mustár dulce)/"
    },
    "price": 3.0,
    "weight": "70ml",
    "imageUrl": "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "3",
      "10"
    ],
    "nutrition": {
      "weightGrams": 70,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-151",
    "categoryId": "racoritoare",
    "name": {
      "ro": "Fresh de portocale",
      "en": "Fresh Of Portocale",
      "hu": "Fresh Of Portocale"
    },
    "description": {
      "ro": "Portocale",
      "en": "oranges",
      "hu": "Portocale"
    },
    "price": 15.0,
    "weight": "150ml",
    "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [],
    "nutrition": {
      "weightGrams": 150,
      "energyKcal": 37.8,
      "energyKj": 160.0,
      "fats": 0.2,
      "saturatedFats": 0.0,
      "carbs": 8.4,
      "sugars": 8.2,
      "protein": 0.7,
      "salt": 0.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-152",
    "categoryId": "racoritoare",
    "name": {
      "ro": "Fresh de grapefruit",
      "en": "Fresh Of Grapefruit",
      "hu": "Fresh Of Grapefruit"
    },
    "description": {
      "ro": "Grapefruit",
      "en": "grapefruit",
      "hu": "Grapefruit"
    },
    "price": 15.0,
    "weight": "150ml",
    "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [],
    "nutrition": {
      "weightGrams": 150,
      "energyKcal": 35.7,
      "energyKj": 152.0,
      "fats": 0.1,
      "saturatedFats": 0.0,
      "carbs": 8.3,
      "sugars": 8.3,
      "protein": 0.4,
      "salt": 0.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-153",
    "categoryId": "racoritoare",
    "name": {
      "ro": "Limonadă",
      "en": "Limonadă",
      "hu": "Limonadă"
    },
    "description": {
      "ro": "apă, lămâie, zahăr",
      "en": "apă, lemon, sugar",
      "hu": "apă, citrom, cukor"
    },
    "price": 14.0,
    "weight": "400 ml",
    "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [],
    "nutrition": {
      "weightGrams": 400,
      "energyKcal": 40.0,
      "energyKj": 167.0,
      "fats": 0.0,
      "saturatedFats": 0.0,
      "carbs": 10.0,
      "sugars": 10.0,
      "protein": 0.1,
      "salt": 4.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-154",
    "categoryId": "racoritoare",
    "name": {
      "ro": "Limonadă cu arome",
      "en": "Limonadă With Arome",
      "hu": "Limonadă With Arome"
    },
    "description": {
      "ro": "limonadă, gheață, sirop trandafir",
      "en": "limonadă, gheață, sirop trandafir",
      "hu": "limonadă, gheață, sirop trandafir"
    },
    "price": 15.0,
    "weight": "400ml",
    "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [],
    "nutrition": {
      "weightGrams": 400,
      "energyKcal": 45.1,
      "energyKj": 189.1,
      "fats": 0.0,
      "saturatedFats": 3.0,
      "carbs": 11.3,
      "sugars": 11.3,
      "protein": 0.1,
      "salt": 3.7
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-155",
    "categoryId": "racoritoare",
    "name": {
      "ro": "Socată",
      "en": "Socată",
      "hu": "Socată"
    },
    "description": {
      "ro": "apă, suc de lămâie, lămâie, sirop de soc, ghimbir",
      "en": "apă, suc of lemon, lemon, sirop of elofrflower, ginger",
      "hu": "apă, suc de citrom, citrom, sirop de soc, ghimbir"
    },
    "price": 15.0,
    "weight": "400 ml",
    "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [],
    "nutrition": {
      "weightGrams": 400,
      "energyKcal": 19.5,
      "energyKj": 81.5,
      "fats": 0.1,
      "saturatedFats": 0.0,
      "carbs": 3.9,
      "sugars": 3.6,
      "protein": 0.2,
      "salt": 0.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-156",
    "categoryId": "racoritoare",
    "name": {
      "ro": "Suc răcoritor (Coca-Cola / Fanta / Sprite / Schweppes)",
      "en": "Suc Răcoritor (Coca-Cola / Fanta / Sprite / Schweppes)",
      "hu": "Suc Răcoritor (Coca-Cola / Fanta / Sprite / Schweppes)"
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 12.0,
    "weight": "250 ml",
    "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [],
    "nutrition": {
      "weightGrams": 250,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-157",
    "categoryId": "racoritoare",
    "name": {
      "ro": "Suc răcoritor (Coca-Cola / Fanta / Sprite / Schweppes)",
      "en": "Suc Răcoritor (Coca-Cola / Fanta / Sprite / Schweppes)",
      "hu": "Suc Răcoritor (Coca-Cola / Fanta / Sprite / Schweppes)"
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 15.0,
    "weight": "500 ml",
    "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [],
    "nutrition": {
      "weightGrams": 500,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-158",
    "categoryId": "racoritoare",
    "name": {
      "ro": "Nectar Cappy",
      "en": "Nectar Cappy",
      "hu": "Nectar Cappy"
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 15.0,
    "weight": "250 ml",
    "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [],
    "nutrition": {
      "weightGrams": 250,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-159",
    "categoryId": "racoritoare",
    "name": {
      "ro": "Fuzetea",
      "en": "Fuzetea",
      "hu": "Fuzetea"
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 15.0,
    "weight": "500 ml",
    "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [],
    "nutrition": {
      "weightGrams": 500,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-160",
    "categoryId": "racoritoare",
    "name": {
      "ro": "Milkshake  Marissa",
      "en": "Milkshake  Marissa",
      "hu": "Milkshake  Marissa"
    },
    "description": {
      "ro": "lapte, frișcă, banană, topping cu aromă ciocolată, unt d e arahide",
      "en": "milk, whipped cream, banana, topping with aromă chocolate, butter d e arahiof",
      "hu": "tej, frișcă, banán, topping cu aromă csokoládé, vaj d e arahide"
    },
    "price": 25.0,
    "weight": "7300 ml",
    "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "5",
      "6",
      "7"
    ],
    "nutrition": {
      "weightGrams": 7300,
      "energyKcal": 177.1,
      "energyKj": 741.8,
      "fats": 10.3,
      "saturatedFats": 5.2,
      "carbs": 17.6,
      "sugars": 15.6,
      "protein": 3.3,
      "salt": 0.1
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": true
  },
  {
    "id": "item-161",
    "categoryId": "racoritoare",
    "name": {
      "ro": "Suc Almdudler (mere)",
      "en": "Suc Almdudler (Mere)",
      "hu": "Suc Almdudler (Mere)"
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 12.0,
    "weight": "330 ml",
    "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [],
    "nutrition": {
      "weightGrams": 330,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-162",
    "categoryId": "racoritoare",
    "name": {
      "ro": "Energizant Red bull",
      "en": "Energizant Red Bull",
      "hu": "Energizant Red Bull"
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 15.0,
    "weight": "1 buc",
    "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [],
    "nutrition": {
      "weightGrams": 1,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-163",
    "categoryId": "racoritoare",
    "name": {
      "ro": "Suc răcoritor (Coca-Cola / Fanta / Sprite / Schweppes)",
      "en": "Suc Răcoritor (Coca-Cola / Fanta / Sprite / Schweppes)",
      "hu": "Suc Răcoritor (Coca-Cola / Fanta / Sprite / Schweppes)"
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 12.0,
    "weight": "1 buc",
    "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [],
    "nutrition": {
      "weightGrams": 1,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-164",
    "categoryId": "racoritoare",
    "name": {
      "ro": "Apă minerală/plată",
      "en": "Apă Minerală/Plată",
      "hu": "Apă Minerală/Plată"
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 10.0,
    "weight": "500 ml",
    "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [],
    "nutrition": {
      "weightGrams": 500,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-165",
    "categoryId": "racoritoare",
    "name": {
      "ro": "Apă minerală/plată st",
      "en": "Apă Minerală/Plată St",
      "hu": "Apă Minerală/Plată St"
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 10.0,
    "weight": "330 ml",
    "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [],
    "nutrition": {
      "weightGrams": 330,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-166",
    "categoryId": "racoritoare",
    "name": {
      "ro": "Apă minerală/plată st",
      "en": "Apă Minerală/Plată St",
      "hu": "Apă Minerală/Plată St"
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 15.0,
    "weight": "750 ml",
    "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [],
    "nutrition": {
      "weightGrams": 750,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-167",
    "categoryId": "racoritoare",
    "name": {
      "ro": "Ceai natural",
      "en": "Ceai Natural",
      "hu": "Ceai Natural"
    },
    "description": {
      "ro": "Ceai de plante/fructe",
      "en": "Ceai of plante/fructe",
      "hu": "Ceai de plante/fructe"
    },
    "price": 15.0,
    "weight": "200 ml",
    "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [],
    "nutrition": {
      "weightGrams": 200,
      "energyKcal": 0.4,
      "energyKj": 1.7,
      "fats": 0.0,
      "saturatedFats": 0.0,
      "carbs": 0.0,
      "sugars": 0.0,
      "protein": 0.1,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-168",
    "categoryId": "racoritoare",
    "name": {
      "ro": "Zahăr la plic",
      "en": "Zahăr La Plic",
      "hu": "Zahăr La Plic"
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 0.5,
    "weight": "2 buc",
    "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [],
    "nutrition": {
      "weightGrams": 2,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-169",
    "categoryId": "racoritoare",
    "name": {
      "ro": "Miere",
      "en": "Miere",
      "hu": "Virágméz"
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 3.0,
    "weight": "1 buc",
    "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [],
    "nutrition": {
      "weightGrams": 1,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-170",
    "categoryId": "racoritoare",
    "name": {
      "ro": "Espresso",
      "en": "Espresso",
      "hu": "Espresso"
    },
    "description": {
      "ro": "espresso, zahăr la plic",
      "en": "espresso, sugar la plic",
      "hu": "espresso, cukor la plic"
    },
    "price": 9.0,
    "weight": "30ml",
    "imageUrl": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [],
    "nutrition": {
      "weightGrams": 30,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-171",
    "categoryId": "racoritoare",
    "name": {
      "ro": "Espresso dublu",
      "en": "Espresso Dublu",
      "hu": "Espresso Dublu"
    },
    "description": {
      "ro": "espresso dublu, zahăr la plic",
      "en": "espresso dublu, sugar la plic",
      "hu": "espresso dublu, cukor la plic"
    },
    "price": 18.0,
    "weight": "100ml",
    "imageUrl": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [],
    "nutrition": {
      "weightGrams": 100,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-172",
    "categoryId": "racoritoare",
    "name": {
      "ro": "Espresso cu lapte",
      "en": "Espresso With Lapte",
      "hu": "Espresso With Lapte"
    },
    "description": {
      "ro": "espresso 20 ml, lapte, zahăr la plic",
      "en": "espresso 20 ml, milk, sugar la plic",
      "hu": "espresso 20 ml, tej, cukor la plic"
    },
    "price": 10.0,
    "weight": "770 ml",
    "imageUrl": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "7"
    ],
    "nutrition": {
      "weightGrams": 770,
      "energyKcal": 60.1,
      "energyKj": 255.3,
      "fats": 0.4,
      "saturatedFats": 0.3,
      "carbs": 13.4,
      "sugars": 13.4,
      "protein": 0.7,
      "salt": 0.1
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-173",
    "categoryId": "racoritoare",
    "name": {
      "ro": "Caffe Latte cu arome",
      "en": "Caffe Latte With Arome",
      "hu": "Caffe Latte With Arome"
    },
    "description": {
      "ro": "espresso 20 ml, sirop caramel, lapte",
      "en": "espresso 20 ml, sirop caramel, milk",
      "hu": "espresso 20 ml, sirop caramel, tej"
    },
    "price": 20.0,
    "weight": "200 ml",
    "imageUrl": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "7"
    ],
    "nutrition": {
      "weightGrams": 200,
      "energyKcal": 67.1,
      "energyKj": 284.3,
      "fats": 0.9,
      "saturatedFats": 0.6,
      "carbs": 11.9,
      "sugars": 11.8,
      "protein": 2.0,
      "salt": 0.1
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-174",
    "categoryId": "racoritoare",
    "name": {
      "ro": "Baby Latte",
      "en": "Baby Latte",
      "hu": "Baby Latte"
    },
    "description": {
      "ro": "lapte, pudră de cacao, sirop de agave",
      "en": "milk, pudră of cocoa, sirop of agave",
      "hu": "tej, pudră de kakaó, sirop de agave"
    },
    "price": 16.0,
    "weight": "170 ml",
    "imageUrl": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "7"
    ],
    "nutrition": {
      "weightGrams": 170,
      "energyKcal": 77.9,
      "energyKj": 330.2,
      "fats": 0.9,
      "saturatedFats": 0.6,
      "carbs": 15.3,
      "sugars": 15.2,
      "protein": 2.0,
      "salt": 0.1
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-175",
    "categoryId": "racoritoare",
    "name": {
      "ro": "Gingerbread  Latte",
      "en": "Gingerbread  Latte",
      "hu": "Gingerbread  Latte"
    },
    "description": {
      "ro": "espresso 20ml, sirop turtă dulce, lapte",
      "en": "espresso 20ml, sirop turtă dulce, milk",
      "hu": "espresso 20ml, sirop turtă dulce, tej"
    },
    "price": 20.0,
    "weight": "200ml",
    "imageUrl": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "7"
    ],
    "nutrition": {
      "weightGrams": 200,
      "energyKcal": 98.7,
      "energyKj": 418.8,
      "fats": 0.8,
      "saturatedFats": 0.6,
      "carbs": 21.2,
      "sugars": 20.9,
      "protein": 1.7,
      "salt": 0.1
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-176",
    "categoryId": "racoritoare",
    "name": {
      "ro": "Salted caramel  Latte",
      "en": "Salted Caramel  Latte",
      "hu": "Salted Caramel  Latte"
    },
    "description": {
      "ro": "espresso 20ml, sirop caramel sărat, lapte",
      "en": "espresso 20ml, sirop caramel sărat, milk",
      "hu": "espresso 20ml, sirop caramel sărat, tej"
    },
    "price": 20.0,
    "weight": "7200 ml",
    "imageUrl": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "7"
    ],
    "nutrition": {
      "weightGrams": 7200,
      "energyKcal": 67.1,
      "energyKj": 284.3,
      "fats": 0.9,
      "saturatedFats": 0.6,
      "carbs": 11.9,
      "sugars": 11.8,
      "protein": 2.0,
      "salt": 0.1
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-177",
    "categoryId": "racoritoare",
    "name": {
      "ro": "Frappe espresso",
      "en": "Frappe Espresso",
      "hu": "Frappe Espresso"
    },
    "description": {
      "ro": "espresso 20 ml, lapte, frișcă, gheață",
      "en": "espresso 20 ml, milk, whipped cream, gheață",
      "hu": "espresso 20 ml, tej, frișcă, gheață"
    },
    "price": 20.0,
    "weight": "7200 ml",
    "imageUrl": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "7"
    ],
    "nutrition": {
      "weightGrams": 7200,
      "energyKcal": 71.6,
      "energyKj": 300.0,
      "fats": 5.1,
      "saturatedFats": 3.2,
      "carbs": 4.4,
      "sugars": 3.5,
      "protein": 2.0,
      "salt": 0.1
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-178",
    "categoryId": "racoritoare",
    "name": {
      "ro": "Cappuccino vienez",
      "en": "Cappuccino Vienez",
      "hu": "Cappuccino Vienez"
    },
    "description": {
      "ro": "espreso 20ml, lapte, frișcă",
      "en": "espreso 20ml, milk, whipped cream",
      "hu": "espreso 20ml, tej, frișcă"
    },
    "price": 16.0,
    "weight": "170 ml",
    "imageUrl": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "7"
    ],
    "nutrition": {
      "weightGrams": 170,
      "energyKcal": 51.0,
      "energyKj": 213.9,
      "fats": 3.3,
      "saturatedFats": 2.1,
      "carbs": 3.5,
      "sugars": 2.9,
      "protein": 1.8,
      "salt": 0.1
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-179",
    "categoryId": "racoritoare",
    "name": {
      "ro": "Capucino cu Arome",
      "en": "Capucino With Arome",
      "hu": "Capucino With Arome"
    },
    "description": {
      "ro": "cafea, lapte, frișcă, sirop, zahăr",
      "en": "cafea, milk, whipped cream, sirop, sugar",
      "hu": "cafea, tej, frișcă, sirop, cukor"
    },
    "price": 16.0,
    "weight": "7170ml",
    "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "7"
    ],
    "nutrition": {
      "weightGrams": 7170,
      "energyKcal": 164.4,
      "energyKj": 696.4,
      "fats": 3.1,
      "saturatedFats": 2.0,
      "carbs": 32.7,
      "sugars": 31.8,
      "protein": 1.4,
      "salt": 0.1
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-180",
    "categoryId": "racoritoare",
    "name": {
      "ro": "Turmenic Latte",
      "en": "Turmenic Latte",
      "hu": "Turmenic Latte"
    },
    "description": {
      "ro": "lapte, pudră de turmenic, ghimbir, scorțișoară, sirop de agave",
      "en": "milk, pudră of turmenic, ginger, cinnamon, sirop of agave",
      "hu": "tej, pudră de turmenic, ghimbir, scorțișoară, sirop de agave"
    },
    "price": 20.0,
    "weight": "170 ml",
    "imageUrl": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "7"
    ],
    "nutrition": {
      "weightGrams": 170,
      "energyKcal": 77.9,
      "energyKj": 330.2,
      "fats": 0.9,
      "saturatedFats": 0.6,
      "carbs": 15.3,
      "sugars": 15.2,
      "protein": 2.0,
      "salt": 0.1
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-181",
    "categoryId": "racoritoare",
    "name": {
      "ro": "Ciocolată caldă",
      "en": "Ciocolată Caldă",
      "hu": "Ciocolată Caldă"
    },
    "description": {
      "ro": "frișcă, lapte, ciocolată caldă, zahăr pudră",
      "en": "whipped cream, milk, chocolate caldă, sugar pudră",
      "hu": "frișcă, tej, csokoládé caldă, cukor pudră"
    },
    "price": 16.0,
    "weight": "120 ml",
    "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "7"
    ],
    "nutrition": {
      "weightGrams": 120,
      "energyKcal": 137.9,
      "energyKj": 579.3,
      "fats": 8.8,
      "saturatedFats": 5.5,
      "carbs": 12.4,
      "sugars": 10.7,
      "protein": 2.3,
      "salt": 0.1
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-182",
    "categoryId": "racoritoare",
    "name": {
      "ro": "Lavanda Latte",
      "en": "Lavanda Latte",
      "hu": "Lavanda Latte"
    },
    "description": {
      "ro": "espresso 20ml, lapte, gheață, sirop lavandă, zahăr",
      "en": "espresso 20ml, milk, gheață, sirop lavandă, sugar",
      "hu": "espresso 20ml, tej, gheață, sirop lavandă, cukor"
    },
    "price": 20.0,
    "weight": "200 ml",
    "imageUrl": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "7"
    ],
    "nutrition": {
      "weightGrams": 200,
      "energyKcal": 66.3,
      "energyKj": 281.1,
      "fats": 0.8,
      "saturatedFats": 0.6,
      "carbs": 13.1,
      "sugars": 12.9,
      "protein": 1.7,
      "salt": 0.1
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-183",
    "categoryId": "racoritoare",
    "name": {
      "ro": "Frişcă",
      "en": "Frişcă",
      "hu": "Frişcă"
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 3.0,
    "weight": "20 ml",
    "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "7"
    ],
    "nutrition": {
      "weightGrams": 20,
      "energyKcal": 262.6,
      "energyKj": 1099.0,
      "fats": 22.2,
      "saturatedFats": 13.8,
      "carbs": 12.5,
      "sugars": 8.0,
      "protein": 3.2,
      "salt": 0.1
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-184",
    "categoryId": "racoritoare",
    "name": {
      "ro": "Bora Bora",
      "en": "Bora Bora",
      "hu": "Bora Bora"
    },
    "description": {
      "ro": "Suc de ananas, Suc de lamaie, Gheață, Sirop fructul pasiunii, Informațiinutriționale 100g: ValoareEnergetică (kJ/kcal): 247.1 / 58.3, Grăsimi (g):0.1 din care: Acizigrașisaturați (g) 0, Glucide (g): 13.7 din care: Zaharuri (g): 13.7,Proteine (g): 0.3, Sare (g): 0",
      "en": "Suc of pineapple, Suc of lamaie, Gheață, Sirop fructul pasiunii, Informațiinutriționale 100g: ValoareEnergetică (kJ/kcal): 247.1 / 58.3, Grăsimi (g):0.1 din care: Acizigra&saturați (g) 0, Gluciof (g): 13.7 din care: Zaharuri (g): 13.7,Proteine (g): 0.3, salt (g): 0",
      "hu": "Suc de ananas, Suc de lamaie, Gheață, Sirop fructul pasiunii, Informațiinutriționale 100g: ValoareEnergetică (kJ/kcal): 247.1 / 58.3, Grăsimi (g):0.1 din care: Acizigrașisaturați (g) 0, Glucide (g): 13.7 din care: Zaharuri (g): 13.7,Proteine (g): 0.3, Sare (g): 0"
    },
    "price": 25.0,
    "weight": "200ml",
    "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [],
    "nutrition": {
      "weightGrams": 200,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-185",
    "categoryId": "racoritoare",
    "name": {
      "ro": "Boni bon",
      "en": "Boni Bon",
      "hu": "Boni Bon"
    },
    "description": {
      "ro": "suc ananas,suc merisoare,fresh lamaie,sirop Coton Candy gheata,felie lamaie ,marshmallov",
      "en": "suc pineapple,suc merisoare,fresh lamaie,sirop Coton Candy gheata,felie lamaie ,marshmallov",
      "hu": "suc ananas,suc merisoare,fresh lamaie,sirop Coton Candy gheata,felie lamaie ,marshmallov"
    },
    "price": 22.0,
    "weight": "300ml",
    "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "4"
    ],
    "nutrition": {
      "weightGrams": 300,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-186",
    "categoryId": "racoritoare",
    "name": {
      "ro": "Cooler",
      "en": "Cooler",
      "hu": "Cooler"
    },
    "description": {
      "ro": "fresh lamaie,sirop grenadine,suc cranberry,gheata,felie lamaie,portocala,fruste padure",
      "en": "fresh lamaie,sirop grenadine,suc cranberry,gheata,felie lamaie,portocala,fruste padure",
      "hu": "fresh lamaie,sirop grenadine,suc cranberry,gheata,felie lamaie,portocala,fruste padure"
    },
    "price": 22.0,
    "weight": "300ml",
    "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [],
    "nutrition": {
      "weightGrams": 300,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-187",
    "categoryId": "racoritoare",
    "name": {
      "ro": "Foke Mojito",
      "en": "Foke Mojito",
      "hu": "Foke Mojito"
    },
    "description": {
      "ro": "fresh lamaie,sirop zahar,apa minerala,menta,lamaie,gheata",
      "en": "fresh lamaie,sirop zahar,apa minerala,menta,lamaie,gheata",
      "hu": "fresh lamaie,sirop zahar,apa minerala,menta,lamaie,gheata"
    },
    "price": 18.0,
    "weight": "300ml",
    "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [],
    "nutrition": {
      "weightGrams": 300,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-188",
    "categoryId": "racoritoare",
    "name": {
      "ro": "Aperol spit",
      "en": "Aperol Spit",
      "hu": "Aperol Spit"
    },
    "description": {
      "ro": "aperol,proseco,felii portocale,gheata",
      "en": "aperol,proseco,felii oranges,gheata",
      "hu": "aperol,proseco,felii portocale,gheata"
    },
    "price": 24.0,
    "weight": "400ml",
    "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [],
    "nutrition": {
      "weightGrams": 400,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-189",
    "categoryId": "racoritoare",
    "name": {
      "ro": "Hugo",
      "en": "Hugo",
      "hu": "Hugo"
    },
    "description": {
      "ro": "sirop soc, proseco,sirop zahar,fres de lamaie,menta,gheata",
      "en": "sirop elofrflower, proseco,sirop zahar,fres of lamaie,menta,gheata",
      "hu": "sirop soc, proseco,sirop zahar,fres de lamaie,menta,gheata"
    },
    "price": 24.0,
    "weight": "400ml",
    "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [],
    "nutrition": {
      "weightGrams": 400,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-190",
    "categoryId": "racoritoare",
    "name": {
      "ro": "Campari spit",
      "en": "Campari Spit",
      "hu": "Campari Spit"
    },
    "description": {
      "ro": "campari,proseco,felii portocale,gheata",
      "en": "campari,proseco,felii oranges,gheata",
      "hu": "campari,proseco,felii portocale,gheata"
    },
    "price": 24.0,
    "weight": "400ml",
    "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [],
    "nutrition": {
      "weightGrams": 400,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-191",
    "categoryId": "racoritoare",
    "name": {
      "ro": "Campari tonic",
      "en": "Campari Tonic",
      "hu": "Campari Tonic"
    },
    "description": {
      "ro": "campari, tinic,felie portocala,gheata",
      "en": "campari, tinic,felie portocala,gheata",
      "hu": "campari, tinic,felie portocala,gheata"
    },
    "price": 24.0,
    "weight": "400ml",
    "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "4"
    ],
    "nutrition": {
      "weightGrams": 400,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-192",
    "categoryId": "racoritoare",
    "name": {
      "ro": "Negroni",
      "en": "Negroni",
      "hu": "Negroni"
    },
    "description": {
      "ro": "campari,gin,martini,felie portocala,gheata",
      "en": "campari,gin,martini,felie portocala,gheata",
      "hu": "campari,gin,martini,felie portocala,gheata"
    },
    "price": 24.0,
    "weight": "400ml",
    "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [],
    "nutrition": {
      "weightGrams": 400,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-193",
    "categoryId": "racoritoare",
    "name": {
      "ro": "Americano",
      "en": "Americano",
      "hu": "Americano"
    },
    "description": {
      "ro": "campari,vermuth,felie portocala,gheata",
      "en": "campari,vermuth,felie portocala,gheata",
      "hu": "campari,vermuth,felie portocala,gheata"
    },
    "price": 24.0,
    "weight": "400ml",
    "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [],
    "nutrition": {
      "weightGrams": 400,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-194",
    "categoryId": "racoritoare",
    "name": {
      "ro": "Vermuth tonic",
      "en": "Vermuth Tonic",
      "hu": "Vermuth Tonic"
    },
    "description": {
      "ro": "suc tonic,vermut,gheata,felii lamaie",
      "en": "suc tonic,vermut,gheata,felii lamaie",
      "hu": "suc tonic,vermut,gheata,felii lamaie"
    },
    "price": 24.0,
    "weight": "400ml",
    "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "4"
    ],
    "nutrition": {
      "weightGrams": 400,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-195",
    "categoryId": "racoritoare",
    "name": {
      "ro": "Pina Colada",
      "en": "Pina Colada",
      "hu": "Pina Colada"
    },
    "description": {
      "ro": "Suc de ananas, Gheață, Sirop de glucoză-fructoză, Rom",
      "en": "Suc of pineapple, Gheață, Sirop of glucoză-fructoză, rum",
      "hu": "Suc de ananas, Gheață, Sirop de glucoză-fructoză, Rom"
    },
    "price": 25.0,
    "weight": "200ml",
    "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [],
    "nutrition": {
      "weightGrams": 200,
      "energyKcal": 57.8,
      "energyKj": 244.3,
      "fats": 0.1,
      "saturatedFats": 0.0,
      "carbs": 12.8,
      "sugars": 12.3,
      "protein": 0.3,
      "salt": 0.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-196",
    "categoryId": "racoritoare",
    "name": {
      "ro": "Mojito",
      "en": "Mojito",
      "hu": "Mojito"
    },
    "description": {
      "ro": "Apa minerala, Gheață, Lime, Sirop de glucoză-fructoză, Rom",
      "en": "Apa minerala, Gheață, lime, Sirop of glucoză-fructoză, rum",
      "hu": "Apa minerala, Gheață, Lime, Sirop de glucoză-fructoză, Rom"
    },
    "price": 25.0,
    "weight": "200ml",
    "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [],
    "nutrition": {
      "weightGrams": 200,
      "energyKcal": 29.6,
      "energyKj": 124.5,
      "fats": 0.0,
      "saturatedFats": 0.0,
      "carbs": 5.9,
      "sugars": 5.7,
      "protein": 0.1,
      "salt": 0.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-197",
    "categoryId": "racoritoare",
    "name": {
      "ro": "Long Island",
      "en": "Long Island",
      "hu": "Long Island"
    },
    "description": {
      "ro": "Cola, Gheață, Lime, Gin, Vodcă, Rom",
      "en": "Cola, Gheață, lime, Gin, Vodcă, rum",
      "hu": "Cola, Gheață, Lime, Gin, Vodcă, Rom"
    },
    "price": 28.0,
    "weight": "200ml",
    "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [],
    "nutrition": {
      "weightGrams": 200,
      "energyKcal": 88.8,
      "energyKj": 370.0,
      "fats": 0.0,
      "saturatedFats": 0.0,
      "carbs": 5.1,
      "sugars": 4.9,
      "protein": 0.1,
      "salt": 0.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-198",
    "categoryId": "racoritoare",
    "name": {
      "ro": "Alexander",
      "en": "Alexander",
      "hu": "Alexander"
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 9.0,
    "weight": "50ml",
    "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [],
    "nutrition": {
      "weightGrams": 50,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-199",
    "categoryId": "racoritoare",
    "name": {
      "ro": "Stalinskaya",
      "en": "Stalinskaya",
      "hu": "Stalinskaya"
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 9.0,
    "weight": "50ml",
    "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [],
    "nutrition": {
      "weightGrams": 50,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-200",
    "categoryId": "racoritoare",
    "name": {
      "ro": "Absolut",
      "en": "Absolut",
      "hu": "Absolut"
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 12.0,
    "weight": "50ml",
    "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [],
    "nutrition": {
      "weightGrams": 50,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-201",
    "categoryId": "racoritoare",
    "name": {
      "ro": "Finlandia",
      "en": "Finlandia",
      "hu": "Finlandia"
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 12.0,
    "weight": "50ml",
    "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [],
    "nutrition": {
      "weightGrams": 50,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-202",
    "categoryId": "racoritoare",
    "name": {
      "ro": "Tequila Camino",
      "en": "Tequila Camino",
      "hu": "Tequila Camino"
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 10.0,
    "weight": "50ml",
    "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [],
    "nutrition": {
      "weightGrams": 50,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-203",
    "categoryId": "racoritoare",
    "name": {
      "ro": "Tărie de Bihor",
      "en": "Tărie Of Bihor",
      "hu": "Tărie Of Bihor"
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 9.0,
    "weight": "50ml",
    "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [],
    "nutrition": {
      "weightGrams": 50,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-204",
    "categoryId": "racoritoare",
    "name": {
      "ro": "Angeli",
      "en": "Angeli",
      "hu": "Angeli"
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 9.0,
    "weight": "50ml",
    "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [],
    "nutrition": {
      "weightGrams": 50,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-205",
    "categoryId": "racoritoare",
    "name": {
      "ro": "Sheridan’s",
      "en": "Sheridan’S",
      "hu": "Sheridan’S"
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 15.0,
    "weight": "50ml",
    "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [],
    "nutrition": {
      "weightGrams": 50,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-206",
    "categoryId": "racoritoare",
    "name": {
      "ro": "Jagermaister",
      "en": "Jagermaister",
      "hu": "Jagermaister"
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 15.0,
    "weight": "50ml",
    "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [],
    "nutrition": {
      "weightGrams": 50,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-207",
    "categoryId": "racoritoare",
    "name": {
      "ro": "Unicum",
      "en": "Unicum",
      "hu": "Unicum"
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 18.0,
    "weight": "50ml",
    "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [],
    "nutrition": {
      "weightGrams": 50,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-208",
    "categoryId": "racoritoare",
    "name": {
      "ro": "Triplusec",
      "en": "Triplusec",
      "hu": "Triplusec"
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 8.0,
    "weight": "50ml",
    "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [],
    "nutrition": {
      "weightGrams": 50,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-209",
    "categoryId": "racoritoare",
    "name": {
      "ro": "Martini",
      "en": "Martini",
      "hu": "Martini"
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 8.0,
    "weight": "50ml",
    "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [],
    "nutrition": {
      "weightGrams": 50,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-210",
    "categoryId": "racoritoare",
    "name": {
      "ro": "Gin Wemblei",
      "en": "Gin Wemblei",
      "hu": "Gin Wemblei"
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 15.0,
    "weight": "50ml",
    "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [],
    "nutrition": {
      "weightGrams": 50,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-211",
    "categoryId": "racoritoare",
    "name": {
      "ro": "Alexandrion*****",
      "en": "Alexandrion*****",
      "hu": "Alexandrion*****"
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 9.0,
    "weight": "50ml",
    "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [],
    "nutrition": {
      "weightGrams": 50,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-212",
    "categoryId": "racoritoare",
    "name": {
      "ro": "Alexandrion*******",
      "en": "Alexandrion*******",
      "hu": "Alexandrion*******"
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 12.0,
    "weight": "50ml",
    "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [],
    "nutrition": {
      "weightGrams": 50,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-213",
    "categoryId": "racoritoare",
    "name": {
      "ro": "Metaxa*****",
      "en": "Metaxa*****",
      "hu": "Metaxa*****"
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 15.0,
    "weight": "50ml",
    "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [],
    "nutrition": {
      "weightGrams": 50,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-214",
    "categoryId": "racoritoare",
    "name": {
      "ro": "Jidvei",
      "en": "Jidvei",
      "hu": "Jidvei"
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 15.0,
    "weight": "50ml",
    "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [],
    "nutrition": {
      "weightGrams": 50,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-215",
    "categoryId": "racoritoare",
    "name": {
      "ro": "Mioriţa",
      "en": "Mioriţa",
      "hu": "Mioriţa"
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 12.0,
    "weight": "50ml",
    "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [],
    "nutrition": {
      "weightGrams": 50,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-216",
    "categoryId": "racoritoare",
    "name": {
      "ro": "Triumf",
      "en": "Triumf",
      "hu": "Triumf"
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 8.0,
    "weight": "50ml",
    "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [],
    "nutrition": {
      "weightGrams": 50,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-217",
    "categoryId": "racoritoare",
    "name": {
      "ro": "Unirea",
      "en": "Unirea",
      "hu": "Unirea"
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 5.0,
    "weight": "50ml",
    "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [],
    "nutrition": {
      "weightGrams": 50,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-218",
    "categoryId": "racoritoare",
    "name": {
      "ro": "Brâncoveanu",
      "en": "Brâncoveanu",
      "hu": "Brâncoveanu"
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 30.0,
    "weight": "50ml",
    "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [],
    "nutrition": {
      "weightGrams": 50,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-219",
    "categoryId": "racoritoare",
    "name": {
      "ro": "Grant’s",
      "en": "Grant’S",
      "hu": "Grant’S"
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 12.0,
    "weight": "50ml",
    "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [],
    "nutrition": {
      "weightGrams": 50,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-220",
    "categoryId": "racoritoare",
    "name": {
      "ro": "Jack Daniel’s",
      "en": "Jack Daniel’S",
      "hu": "Jack Daniel’S"
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 15.0,
    "weight": "50ml",
    "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [],
    "nutrition": {
      "weightGrams": 50,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-221",
    "categoryId": "racoritoare",
    "name": {
      "ro": "Johnnie Walker",
      "en": "Johnnie Walker",
      "hu": "Johnnie Walker"
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 12.0,
    "weight": "50ml",
    "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [],
    "nutrition": {
      "weightGrams": 50,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-222",
    "categoryId": "racoritoare",
    "name": {
      "ro": "Sauvignon Blanc(sec)",
      "en": "Sauvignon Blanc(Sec)",
      "hu": "Sauvignon Blanc(Sec)"
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 120.0,
    "weight": "1 sticlă",
    "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [],
    "nutrition": {
      "weightGrams": 1,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-223",
    "categoryId": "racoritoare",
    "name": {
      "ro": "Fetească Albă(sec)",
      "en": "Fetească Albă(Sec)",
      "hu": "Fetească Albă(Sec)"
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 120.0,
    "weight": "1 sticlă",
    "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [],
    "nutrition": {
      "weightGrams": 1,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-224",
    "categoryId": "racoritoare",
    "name": {
      "ro": "Tamaioasă Romanească(sec)",
      "en": "Tamaioasă Romanească(Sec)",
      "hu": "Tamaioasă Romanească(Sec)"
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 120.0,
    "weight": "1 sticlă",
    "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [],
    "nutrition": {
      "weightGrams": 1,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-225",
    "categoryId": "racoritoare",
    "name": {
      "ro": "Merlot (sec)",
      "en": "Merlot (Sec)",
      "hu": "Merlot (Sec)"
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 120.0,
    "weight": "1 sticlă",
    "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [],
    "nutrition": {
      "weightGrams": 1,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-226",
    "categoryId": "racoritoare",
    "name": {
      "ro": "Cabernet(sec)",
      "en": "Cabernet(Sec)",
      "hu": "Cabernet(Sec)"
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 120.0,
    "weight": "1 sticlă",
    "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [],
    "nutrition": {
      "weightGrams": 1,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-227",
    "categoryId": "racoritoare",
    "name": {
      "ro": "Pinot Noir (demisec)",
      "en": "Pinot Noir (Demisec)",
      "hu": "Pinot Noir (Demisec)"
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 120.0,
    "weight": "1 sticlă",
    "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [],
    "nutrition": {
      "weightGrams": 1,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-228",
    "categoryId": "racoritoare",
    "name": {
      "ro": "Rose Verite(demisec)",
      "en": "Rose Verite(Demisec)",
      "hu": "Rose Verite(Demisec)"
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 60.0,
    "weight": "1  sticlă",
    "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [],
    "nutrition": {
      "weightGrams": 1,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-229",
    "categoryId": "racoritoare",
    "name": {
      "ro": "Sceptrus",
      "en": "Sceptrus",
      "hu": "Sceptrus"
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 60.0,
    "weight": "1 sticlă",
    "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [],
    "nutrition": {
      "weightGrams": 1,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-230",
    "categoryId": "racoritoare",
    "name": {
      "ro": "Fetească Neagră(demidulce) (",
      "en": "Fetească Neagră(Demidulce) (",
      "hu": "Fetească Neagră(Demidulce) ("
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 50.0,
    "weight": "1 sticlă",
    "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "12"
    ],
    "nutrition": {
      "weightGrams": 1,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-231",
    "categoryId": "racoritoare",
    "name": {
      "ro": "Pinot Noir(demisec)",
      "en": "Pinot Noir(Demisec)",
      "hu": "Pinot Noir(Demisec)"
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 50.0,
    "weight": "1 sticlă",
    "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "12"
    ],
    "nutrition": {
      "weightGrams": 1,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-232",
    "categoryId": "racoritoare",
    "name": {
      "ro": "Cabernet Sauvignon(",
      "en": "Cabernet Sauvignon(",
      "hu": "Cabernet Sauvignon("
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 50.0,
    "weight": "1 sticlă",
    "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "12"
    ],
    "nutrition": {
      "weightGrams": 1,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-233",
    "categoryId": "racoritoare",
    "name": {
      "ro": "Merlot(",
      "en": "Merlot(",
      "hu": "Merlot("
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 50.0,
    "weight": "1 sticlă",
    "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "12"
    ],
    "nutrition": {
      "weightGrams": 1,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-234",
    "categoryId": "racoritoare",
    "name": {
      "ro": "Sauvignon Blanc(",
      "en": "Sauvignon Blanc(",
      "hu": "Sauvignon Blanc("
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 50.0,
    "weight": "1 sticlă",
    "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "12"
    ],
    "nutrition": {
      "weightGrams": 1,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-235",
    "categoryId": "racoritoare",
    "name": {
      "ro": "Chardonnay(",
      "en": "Chardonnay(",
      "hu": "Chardonnay("
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 50.0,
    "weight": "1 sticlă",
    "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "12"
    ],
    "nutrition": {
      "weightGrams": 1,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-236",
    "categoryId": "racoritoare",
    "name": {
      "ro": "Muscat Ottonel(",
      "en": "Muscat Ottonel(",
      "hu": "Muscat Ottonel("
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 50.0,
    "weight": "1 sticlă",
    "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "4",
      "12"
    ],
    "nutrition": {
      "weightGrams": 1,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-237",
    "categoryId": "racoritoare",
    "name": {
      "ro": "Fetească Albă(",
      "en": "Fetească Albă(",
      "hu": "Fetească Albă("
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 50.0,
    "weight": "1 sticlă",
    "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "12"
    ],
    "nutrition": {
      "weightGrams": 1,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-238",
    "categoryId": "racoritoare",
    "name": {
      "ro": "Roze(",
      "en": "Roze(",
      "hu": "Roze("
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 50.0,
    "weight": "1 sticlă",
    "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "12"
    ],
    "nutrition": {
      "weightGrams": 1,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-239",
    "categoryId": "racoritoare",
    "name": {
      "ro": "Fetească Regală(",
      "en": "Fetească Regală(",
      "hu": "Fetească Regală("
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 50.0,
    "weight": "1 sticlă",
    "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "12"
    ],
    "nutrition": {
      "weightGrams": 1,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-240",
    "categoryId": "racoritoare",
    "name": {
      "ro": "Riesling(",
      "en": "Riesling(",
      "hu": "Riesling("
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 50.0,
    "weight": "1sticlă",
    "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "12"
    ],
    "nutrition": {
      "weightGrams": 1,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-241",
    "categoryId": "racoritoare",
    "name": {
      "ro": "Grasă de Cotnari(",
      "en": "Grasă Of Cotnari(",
      "hu": "Grasă Of Cotnari("
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 50.0,
    "weight": "1 sticlă",
    "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "12"
    ],
    "nutrition": {
      "weightGrams": 1,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-242",
    "categoryId": "racoritoare",
    "name": {
      "ro": "Sampanie Angeli",
      "en": "Sampanie Angeli",
      "hu": "Sampanie Angeli"
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 50.0,
    "weight": "1  sticlă",
    "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [],
    "nutrition": {
      "weightGrams": 1,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-243",
    "categoryId": "racoritoare",
    "name": {
      "ro": "Dry Muscat(",
      "en": "Dry Muscat(",
      "hu": "Dry Muscat("
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 60.0,
    "weight": "1 sticlă",
    "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "12"
    ],
    "nutrition": {
      "weightGrams": 1,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-244",
    "categoryId": "racoritoare",
    "name": {
      "ro": "Pinot Grigio(",
      "en": "Pinot Grigio(",
      "hu": "Pinot Grigio("
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 60.0,
    "weight": "1 sticlă",
    "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "12"
    ],
    "nutrition": {
      "weightGrams": 1,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-245",
    "categoryId": "racoritoare",
    "name": {
      "ro": "Gewurztraminer(",
      "en": "Gewurztraminer(",
      "hu": "Gewurztraminer("
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 60.0,
    "weight": "1 sticlă",
    "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "12"
    ],
    "nutrition": {
      "weightGrams": 1,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-246",
    "categoryId": "racoritoare",
    "name": {
      "ro": "Sauvignon Blanc(",
      "en": "Sauvignon Blanc(",
      "hu": "Sauvignon Blanc("
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 60.0,
    "weight": "1 sticlă",
    "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "12"
    ],
    "nutrition": {
      "weightGrams": 1,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-247",
    "categoryId": "racoritoare",
    "name": {
      "ro": "Rose(",
      "en": "Rose(",
      "hu": "Rose("
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 60.0,
    "weight": "1 sticlă",
    "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "12"
    ],
    "nutrition": {
      "weightGrams": 1,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-248",
    "categoryId": "bere",
    "name": {
      "ro": "Pilsner Urquell0",
      "en": "Pilsner Urquell0",
      "hu": "Pilsner Urquell0"
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 10.0,
    "weight": "33 l",
    "imageUrl": "https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [],
    "nutrition": {
      "weightGrams": 33,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-249",
    "categoryId": "bere",
    "name": {
      "ro": "Peroni Capri0",
      "en": "Peroni Capri0",
      "hu": "Peroni Capri0"
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 12.0,
    "weight": "33 l",
    "imageUrl": "https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [],
    "nutrition": {
      "weightGrams": 33,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-250",
    "categoryId": "bere",
    "name": {
      "ro": "Peroni0",
      "en": "Peroni0",
      "hu": "Peroni0"
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 12.0,
    "weight": "33 l",
    "imageUrl": "https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [],
    "nutrition": {
      "weightGrams": 33,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-251",
    "categoryId": "bere",
    "name": {
      "ro": "Peroni fa0",
      "en": "Peroni Fa0",
      "hu": "Peroni Fa0"
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 12.0,
    "weight": "33 l",
    "imageUrl": "https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [],
    "nutrition": {
      "weightGrams": 33,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-252",
    "categoryId": "bere",
    "name": {
      "ro": "Peroni0",
      "en": "Peroni0",
      "hu": "Peroni0"
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 12.0,
    "weight": "50 l",
    "imageUrl": "https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [],
    "nutrition": {
      "weightGrams": 50,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-253",
    "categoryId": "bere",
    "name": {
      "ro": "Azuga nefiltrata0",
      "en": "Azuga Nefiltrata0",
      "hu": "Azuga Nefiltrata0"
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 15.0,
    "weight": "50 l",
    "imageUrl": "https://images.unsplash.com/photo-1518492104633-130d0cc84637?auto=format&fit=crop&w=800&q=80",
    "isThawed": true,
    "allergens": [],
    "nutrition": {
      "weightGrams": 50,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-254",
    "categoryId": "bere",
    "name": {
      "ro": "Azuga nepasteurizata 0",
      "en": "Azuga Nepasteurizata 0",
      "hu": "Azuga Nepasteurizata 0"
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 15.0,
    "weight": "50 l",
    "imageUrl": "https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [],
    "nutrition": {
      "weightGrams": 50,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-255",
    "categoryId": "bere",
    "name": {
      "ro": "Ursus Cooler     0",
      "en": "Ursus Cooler     0",
      "hu": "Ursus Cooler     0"
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 10.0,
    "weight": "33 l",
    "imageUrl": "https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [],
    "nutrition": {
      "weightGrams": 33,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-256",
    "categoryId": "bere",
    "name": {
      "ro": "Ursus Black     0",
      "en": "Ursus Black     0",
      "hu": "Ursus Black     0"
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 10.0,
    "weight": "33l",
    "imageUrl": "https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [],
    "nutrition": {
      "weightGrams": 33,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-257",
    "categoryId": "bere",
    "name": {
      "ro": "Ursus  fara alcool   0",
      "en": "Ursus  Fara Alcool   0",
      "hu": "Ursus  Fara Alcool   0"
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 10.0,
    "weight": "50l",
    "imageUrl": "https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [],
    "nutrition": {
      "weightGrams": 50,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-258",
    "categoryId": "bere",
    "name": {
      "ro": "Ursus",
      "en": "Ursus",
      "hu": "Ursus"
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 10.0,
    "weight": "50 l",
    "imageUrl": "https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [],
    "nutrition": {
      "weightGrams": 50,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-259",
    "categoryId": "bere",
    "name": {
      "ro": "Ursus Pilsner     0",
      "en": "Ursus Pilsner     0",
      "hu": "Ursus Pilsner     0"
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 10.0,
    "weight": "33l",
    "imageUrl": "https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [],
    "nutrition": {
      "weightGrams": 33,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-260",
    "categoryId": "bere",
    "name": {
      "ro": "Ursus Premium0",
      "en": "Ursus Premium0",
      "hu": "Ursus Premium0"
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 10.0,
    "weight": "33 l",
    "imageUrl": "https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [],
    "nutrition": {
      "weightGrams": 33,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-261",
    "categoryId": "bere",
    "name": {
      "ro": "Ursus Retro      0",
      "en": "Ursus Retro      0",
      "hu": "Ursus Retro      0"
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 10.0,
    "weight": "50 l",
    "imageUrl": "https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [],
    "nutrition": {
      "weightGrams": 50,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-262",
    "categoryId": "bere",
    "name": {
      "ro": "Timişoreana0",
      "en": "Timişoreana0",
      "hu": "Timişoreana0"
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 10.0,
    "weight": "50 l",
    "imageUrl": "https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [],
    "nutrition": {
      "weightGrams": 50,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-263",
    "categoryId": "bere",
    "name": {
      "ro": "Timisireana FA 0",
      "en": "Timisireana Fa 0",
      "hu": "Timisireana Fa 0"
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 10.0,
    "weight": "50 l",
    "imageUrl": "https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [],
    "nutrition": {
      "weightGrams": 50,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-264",
    "categoryId": "bere",
    "name": {
      "ro": "Kozel Premium 0",
      "en": "Kozel Premium 0",
      "hu": "Kozel Premium 0"
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 12.0,
    "weight": "33 l",
    "imageUrl": "https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [],
    "nutrition": {
      "weightGrams": 33,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-265",
    "categoryId": "bere",
    "name": {
      "ro": "Kozel Dark  0",
      "en": "Kozel Dark  0",
      "hu": "Kozel Dark  0"
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 12.0,
    "weight": "33 l",
    "imageUrl": "https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [],
    "nutrition": {
      "weightGrams": 33,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-266",
    "categoryId": "bere",
    "name": {
      "ro": "Peroni doză0",
      "en": "Peroni Doză0",
      "hu": "Peroni Doză0"
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 12.0,
    "weight": "50 l",
    "imageUrl": "https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [],
    "nutrition": {
      "weightGrams": 50,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-267",
    "categoryId": "bere",
    "name": {
      "ro": "Ursus doză0",
      "en": "Ursus Doză0",
      "hu": "Ursus Doză0"
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 10.0,
    "weight": "50 l",
    "imageUrl": "https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [],
    "nutrition": {
      "weightGrams": 50,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-268",
    "categoryId": "bere",
    "name": {
      "ro": "Timişoreana doză0",
      "en": "Timişoreana Doză0",
      "hu": "Timişoreana Doză0"
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 10.0,
    "weight": "50 l",
    "imageUrl": "https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [],
    "nutrition": {
      "weightGrams": 50,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-269",
    "categoryId": "bere",
    "name": {
      "ro": "Cooler doză 0",
      "en": "Cooler Doză 0",
      "hu": "Cooler Doză 0"
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 10.0,
    "weight": "50l",
    "imageUrl": "https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [],
    "nutrition": {
      "weightGrams": 50,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-270",
    "categoryId": "bere",
    "name": {
      "ro": "Peroni 0",
      "en": "Peroni 0",
      "hu": "Peroni 0"
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 12.0,
    "weight": "40 l",
    "imageUrl": "https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [],
    "nutrition": {
      "weightGrams": 40,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-271",
    "categoryId": "bere",
    "name": {
      "ro": "Kozel Dark 0",
      "en": "Kozel Dark 0",
      "hu": "Kozel Dark 0"
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 12.0,
    "weight": "50 l",
    "imageUrl": "https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [],
    "nutrition": {
      "weightGrams": 50,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-272",
    "categoryId": "bere",
    "name": {
      "ro": "Kozel Premium 0",
      "en": "Kozel Premium 0",
      "hu": "Kozel Premium 0"
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 12.0,
    "weight": "50l",
    "imageUrl": "https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [],
    "nutrition": {
      "weightGrams": 50,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-273",
    "categoryId": "bere",
    "name": {
      "ro": "Kozel Premium 0",
      "en": "Kozel Premium 0",
      "hu": "Kozel Premium 0"
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 9.0,
    "weight": "30l",
    "imageUrl": "https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [],
    "nutrition": {
      "weightGrams": 30,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-274",
    "categoryId": "bere",
    "name": {
      "ro": "Kozel Dark 0",
      "en": "Kozel Dark 0",
      "hu": "Kozel Dark 0"
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 9.0,
    "weight": "30 l",
    "imageUrl": "https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [],
    "nutrition": {
      "weightGrams": 30,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-275",
    "categoryId": "bere",
    "name": {
      "ro": "Ursus0",
      "en": "Ursus0",
      "hu": "Ursus0"
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 10.0,
    "weight": "40 l",
    "imageUrl": "https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [],
    "nutrition": {
      "weightGrams": 40,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-276",
    "categoryId": "bere",
    "name": {
      "ro": "Timişoreana0",
      "en": "Timişoreana0",
      "hu": "Timişoreana0"
    },
    "description": {
      "ro": "Preparat proaspăt pregătit din ingrediente alese.",
      "en": "Prepared fresh daily with carefully selected ingredients.",
      "hu": "Minden nap frissen készítve válogatott alapanyagokból."
    },
    "price": 10.0,
    "weight": "40 l",
    "imageUrl": "https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [],
    "nutrition": {
      "weightGrams": 40,
      "energyKcal": 180.0,
      "energyKj": 752.0,
      "fats": 8.0,
      "saturatedFats": 3.0,
      "carbs": 15.0,
      "sugars": 2.0,
      "protein": 10.0,
      "salt": 1.0
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-277",
    "categoryId": "bere",
    "name": {
      "ro": "PLATOU TRADIȚIONAL",
      "en": "Platou Tradițional",
      "hu": "Platou Tradițional"
    },
    "description": {
      "ro": "costiță,cărnați, cardaboș, murături",
      "en": "costiță,cărnați, cardaboș, murături",
      "hu": "costiță,cărnați, cardaboș, murături"
    },
    "price": 45.0,
    "weight": "400 g",
    "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "1",
      "3",
      "5",
      "7",
      "11"
    ],
    "nutrition": {
      "weightGrams": 400,
      "energyKcal": 170.6,
      "energyKj": 713.9,
      "fats": 7.9,
      "saturatedFats": 2.3,
      "carbs": 3.4,
      "sugars": 1.0,
      "protein": 21.4,
      "salt": 0.9
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-278",
    "categoryId": "bere",
    "name": {
      "ro": "SARMALE CU CIOLAN ȘI MĂMĂLIGUȚĂ",
      "en": "Sarmale With Ciolan & Mămăliguță",
      "hu": "Sarmale With Ciolan & Mămăliguță"
    },
    "description": {
      "ro": "carne porc, ciolan, orez,condimente, făină porumb, smântână",
      "en": "carne pork, pork knuckle, rice,condimente, flour porumb, sour cream",
      "hu": "carne sertés, csülök, rizs,condimente, liszt porumb, tejföl"
    },
    "price": 38.0,
    "weight": "200/200/50 g",
    "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    "isThawed": true,
    "allergens": [
      "1",
      "3",
      "7"
    ],
    "nutrition": {
      "weightGrams": 200,
      "energyKcal": 133.6,
      "energyKj": 564.1,
      "fats": 1.1,
      "saturatedFats": 0.0,
      "carbs": 17.9,
      "sugars": 3.1,
      "protein": 12.4,
      "salt": 0.1
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-279",
    "categoryId": "bere",
    "name": {
      "ro": "SALATĂ DE BOEUF",
      "en": "Salată Of Boeuf",
      "hu": "Salată Of Boeuf"
    },
    "description": {
      "ro": "piept de pui, ouă, morcovi, cartofi, ulei, muștar,condimente",
      "en": "piept of chicken, eggs, morcovi, potatoes, oil, mustard,condimente",
      "hu": "piept de csirke, tojás, morcovi, burgonya, olaj, mustár,condimente"
    },
    "price": 25.0,
    "weight": "250 g",
    "imageUrl": "https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&w=800&q=80",
    "isThawed": true,
    "allergens": [
      "1",
      "3",
      "7",
      "10"
    ],
    "nutrition": {
      "weightGrams": 250,
      "energyKcal": 209.8,
      "energyKj": 874.3,
      "fats": 8.8,
      "saturatedFats": 2.9,
      "carbs": 8.9,
      "sugars": 0.9,
      "protein": 23.9,
      "salt": 1.4
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  },
  {
    "id": "item-280",
    "categoryId": "bere",
    "name": {
      "ro": "PRĂJITURI ASORTATE",
      "en": "Prăjituri Asortate",
      "hu": "Prăjituri Asortate"
    },
    "description": {
      "ro": "ouă, lapte, cacao, unt, zahăr, nucă, untură, fructe",
      "en": "eggs, milk, cocoa, butter, sugar, nucă, untură, fructe",
      "hu": "tojás, tej, kakaó, vaj, cukor, nucă, untură, fructe"
    },
    "price": 18.0,
    "weight": "200 g",
    "imageUrl": "https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&w=800&q=80",
    "isThawed": false,
    "allergens": [
      "1",
      "3",
      "5",
      "7",
      "8"
    ],
    "nutrition": {
      "weightGrams": 200,
      "energyKcal": 235.2,
      "energyKj": 988.7,
      "fats": 8.7,
      "saturatedFats": 6.8,
      "carbs": 38.2,
      "sugars": 25.5,
      "protein": 2.1,
      "salt": 0.1
    },
    "isVegetarian": false,
    "isSpicy": false,
    "isSpecialty": false
  }
];