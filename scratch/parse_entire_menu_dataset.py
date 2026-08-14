import json
import re
import sys

# Ensure UTF-8 output
sys.stdout.reconfigure(encoding='utf-8')

with open('scratch/parsed_docx_elements.json', 'r', encoding='utf-8') as f:
    elements = json.load(f)

lines = [e['text'].strip() for e in elements if e['text'].strip()]

# Allergen Mapping helper
def detect_allergens(ingredients_str):
    ing = ingredients_str.lower()
    algs = set()
    if any(k in ing for k in ['grâu', 'grau', 'făină', 'faina', 'pesmet', 'chiflă', 'chifla', 'pâine', 'paine', 'blat', 'spaghete', 'penne', 'tagliatelle', 'croissant', 'cereale', 'orz', 'gluten']):
        algs.add(1) # Gluten
    if any(k in ing for k in ['creveți', 'creveti', 'rac', 'homar', 'crab', 'crustacee']):
        algs.add(2) # Crustacee
    if any(k in ing for k in ['ou', 'ouă', 'oua', 'gălbenuș', 'galbenus', 'albuș', 'albus', 'maioneză', 'maioneza']):
        algs.add(3) # Ouă
    if any(k in ing for k in ['pește', 'peste', 'somon', 'păstrăv', 'pastrav', 'doradă', 'dorada', 'ton', 'anșoa', 'ansoa']):
        algs.add(4) # Pește
    if any(k in ing for k in ['arahide', 'alune de pământ']):
        algs.add(5) # Arahide
    if any(k in ing for k in ['soia', 'sos soia', 'tofu']):
        algs.add(6) # Soia
    if any(k in ing for k in ['lapte', 'smântână', 'smantana', 'unt', 'cașcaval', 'cascaval', 'brânză', 'branza', 'telemea', 'mozzarella', 'parmesan', 'parmigiano', 'gorgonzola', 'cheddar', 'feta', 'iaurt', 'frișcă', 'frisca', 'mascarpone', 'lactoză']):
        algs.add(7) # Lapte/Lactoză
    if any(k in ing for k in ['nucă', 'nuca', 'nuci', 'migdale', 'fistic', 'caju', 'alune']):
        algs.add(8) # Fructe cu coajă
    if any(k in ing for k in ['țelină', 'telina']):
        algs.add(9) # Țelină
    if any(k in ing for k in ['muștar', 'mustar']):
        algs.add(10) # Muștar
    if any(k in ing for k in ['susan', 'semințe susan']):
        algs.add(11) # Susan
    if any(k in ing for k in ['sulfiți', 'sulfiti', 'vin', 'oțet', 'otet', 'bere']):
        algs.add(12) # Sulfiți
    if any(k in ing for k in ['lupin']):
        algs.add(13) # Lupin
    if any(k in ing for k in ['calamar', 'caracatiță', 'caracatita', 'scoici', 'stridii', 'moluște', 'moluste']):
        algs.add(14) # Moluște
    return sorted(list(algs))

# Frozen helper
def detect_frozen(ingredients_str, name_str):
    combined = (name_str + " " + ingredients_str).lower()
    frozen_keywords = ['pui', 'rață', 'rata', 'obrăjori', 'obrajori', 't-bone', 'mușchiuleț porc', 'muschiulet porc', 'ciolan', 'mici', 'somon', 'păstrăv', 'pastrav', 'doradă', 'dorada', 'creveți', 'creveti', 'calamar', 'fructe de mare', 'broccoli', 'spanac', 'mazăre', 'mazare', 'hribi', 'fructe de pădure', 'fructe de padure', 'porumb', 'avocado', 'lava cake', 'papanași', 'papanasi', 'ecler', 'gogoși', 'gogosi', 'crispy', 'nuggets', 'cartofi prăjiți', 'cartofi prajiti', 'wedges', 'cașcaval pane', 'cascaval pane']
    return any(k in combined for k in frozen_keywords)

# Estimate Nutrition helper per 100g
def estimate_nutrition(category_id, name_str, ingredients_str):
    text = (name_str + " " + ingredients_str).lower()
    
    # Defaults
    kcal = 180
    kj = int(kcal * 4.184)
    fats = 8.5
    sat_fats = 3.2
    carbs = 18.0
    sugars = 2.5
    protein = 9.5
    salt = 1.1

    if category_id == 'mic-dejun':
        kcal, fats, sat_fats, carbs, sugars, protein, salt = 230, 15.0, 6.2, 12.0, 2.0, 12.5, 1.4
    elif category_id in ['pui-rata', 'vita', 'porc']:
        kcal, fats, sat_fats, carbs, sugars, protein, salt = 220, 14.0, 5.5, 2.5, 0.5, 21.0, 1.2
    elif category_id == 'peste':
        kcal, fats, sat_fats, carbs, sugars, protein, salt = 160, 7.5, 1.8, 4.0, 1.0, 18.0, 1.0
    elif category_id in ['paste-risotto', 'pizza']:
        kcal, fats, sat_fats, carbs, sugars, protein, salt = 240, 10.5, 5.0, 26.0, 2.4, 10.8, 1.3
    elif category_id == 'ciorbe':
        kcal, fats, sat_fats, carbs, sugars, protein, salt = 110, 6.5, 3.2, 4.5, 1.8, 7.5, 1.1
    elif category_id == 'salate':
        kcal, fats, sat_fats, carbs, sugars, protein, salt = 135, 9.2, 3.5, 6.5, 3.0, 6.8, 1.0
    elif category_id == 'garnituri':
        if 'cartof' in text:
            kcal, fats, sat_fats, carbs, sugars, protein, salt = 190, 8.5, 1.2, 26.0, 0.6, 2.6, 0.9
        else:
            kcal, fats, sat_fats, carbs, sugars, protein, salt = 110, 3.5, 1.0, 16.0, 1.8, 3.0, 0.8
    elif category_id == 'desert':
        kcal, fats, sat_fats, carbs, sugars, protein, salt = 310, 14.5, 8.2, 38.0, 24.0, 5.8, 0.3
    elif category_id in ['racoritoare', 'cocktailuri', 'vinuri', 'bere']:
        if 'espresso' in text or 'cafea' in text:
            kcal, fats, sat_fats, carbs, sugars, protein, salt = 4, 0.0, 0.0, 0.5, 0.0, 0.3, 0.0
        elif 'apa' in text or 'apă' in text:
            kcal, fats, sat_fats, carbs, sugars, protein, salt = 0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0
        elif 'fresh' in text or 'limonadă' in text or 'limonada' in text:
            kcal, fats, sat_fats, carbs, sugars, protein, salt = 42, 0.1, 0.0, 10.5, 9.5, 0.3, 0.01
        elif 'vin' in text:
            kcal, fats, sat_fats, carbs, sugars, protein, salt = 78, 0.0, 0.0, 2.2, 0.8, 0.1, 0.01
        elif 'bere' in text:
            kcal, fats, sat_fats, carbs, sugars, protein, salt = 42, 0.0, 0.0, 3.4, 0.2, 0.4, 0.01
        else:
            kcal, fats, sat_fats, carbs, sugars, protein, salt = 50, 0.0, 0.0, 12.0, 11.5, 0.1, 0.01
    elif category_id == 'ambalaje':
        kcal, fats, sat_fats, carbs, sugars, protein, salt = 0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0

    return {
        "energyKcal": kcal,
        "energyKj": int(kcal * 4.184),
        "fats": fats,
        "saturatedFats": sat_fats,
        "carbs": carbs,
        "sugars": sugars,
        "protein": protein,
        "salt": salt
    }

# English translation helper dictionary
def translate_text(ro_text, is_name=False):
    t = ro_text.strip()
    
    # Common item names
    name_map = {
        "Mic Dejun Clasic": "Classic Breakfast",
        "Mic Dejun cu Cartofi și Slănină": "Pan-Fried Potatoes & Bacon Breakfast",
        "Omletă cu Șuncă și Cașcaval": "Ham & Cheese Omelette",
        "Omletă Țărănească": "Farmer's Omelette",
        "Marissa Breakfast Special": "Marissa Special Gourmet Breakfast",
        "Platou Mic Dejun Divers": "Assorted Breakfast Platter",
        "Bruschete cu Roșii și Usturoi": "Tomato & Garlic Bruschetta",
        "Bacon / Slănină Prăjită": "Crispy Bacon / Fried Pork Fatback",
        "Cremvurști Fierți": "Boiled Frankfurters",
        "Telemea de Vacă / Oaie": "Romanian Salted Feta Cheese (Telemea)",
        "Cașcaval Rucăr": "Traditional Romanian Yellow Cheese",
        "Lapte Proaspăt": "Fresh Whole Milk",
        "Iaurt Natural": "Natural Creamy Yogurt",
        "Unt Porție": "Butter Portion",
        "Cacao cu Lapte": "Hot Cocoa with Milk",
        "Cereale cu Lapte": "Cereal Bowl with Milk",
        "Gem de Afine / Căpșuni": "Blueberry / Strawberry Jam",
        "Miere de Polifloră": "Pure Honey Portion",
        "Mici Tradiționali": "Traditional Romanian Mici (Minced Rolls)",
        "Cașcaval Pane": "Fried Breaded Yellow Cheese",
        "Mămăligă cu Brânză și Smântână": "Polenta with Cottage Cheese & Sour Cream",
        "Burger de Vită Black Angus": "Black Angus Beef Burger",
        "Burger Crispy Chicken": "Crispy Chicken Burger",
        "Shaorma la Farfurie Marissa": "Marissa Platter Shaorma",
        "Ciorbă de Burtă": "Traditional Romanian Tripe Soup",
        "Ciorbă Rădăuțeană de Pui": "Garlic Chicken Soup (Rădăuțeană)",
        "Babgulyas Tradițional Ardelean": "Traditional Transylvanian Bean Goulash",
        "Ciorbă Țărănească de Porc": "Farmer's Pork Soup",
        "Ciorbă de Fasole cu Afumătură": "Bean Soup with Smoked Pork",
        "Smântână Proaspătă": "Fresh Sour Cream",
        "Ardei Iute Proaspăt / Murat": "Fresh / Pickled Hot Pepper",
        "Pâine de Casă": "Homemade Bread",
        "Pâinici Rumenite cu Usturoi": "Toasted Garlic Buns",
        "Platou Marissa (2 persoane)": "Marissa Platter (2 Persons)",
        "Platoul Gurmandului (4 persoane)": "Gourmand Platter (4 Persons)",
        "Platoul Bucătarului": "Chef's Special Platter",
        "Piept de Pui la Grătar": "Grilled Chicken Breast",
        "Pulpe de Pui Dezosate la Grătar": "Grilled Boneless Chicken Thighs",
        "Piept / Pulpă de Rață cu Varză Roșie": "Duck Breast / Leg with Red Cabbage",
        "Escalop de Pui cu Ciuperci și Piure": "Chicken Escalope with Mushroom Sauce & Mashed Potatoes",
        "Piept de Pui cu Sos de Cașcaval": "Chicken Breast in Cheese Sauce",
        "Piept Crispy cu Cartofi Prăjiți": "Crispy Chicken Tenders with French Fries",
        "Aripioare Crispy Picante": "Spicy Crispy Wings",
        "Șnițel de Pui în Crustă de Pesmet": "Chicken Schnitzel in Breadcrumbs",
        "Mușchi de Vită cu Sos de Hribi": "Beef Tenderloin with Porcini Mushroom Sauce",
        "T-Bone Steak de Vită Premium": "Premium Beef T-Bone Steak",
        "Obrăjori de Vită cu Piure de Trufe": "Beef Cheeks with Truffle Mashed Potatoes",
        "Ossobuco de Vită la Cuptor": "Baked Beef Ossobuco",
        "Mușchiuleț de Porc cu Hribi și Trufe": "Pork Tenderloin with Porcini & Truffles",
        "Cotlet Marissa la Grătar": "Grilled Marissa Pork Chop",
        "Șnițel Uriaș de Porc": "Giant Pork Schnitzel",
        "Ceafă Țigănească cu Slănină și Usturoi": "Gypsy-Style Pork Neck with Bacon & Garlic",
        "Ceafă de Porc la Grătar": "Grilled Pork Neck",
        "Scăriță Gigant de Porc Barbecue": "Giant BBQ Pork Ribs",
        "Ciolan de Porc Rumenit (per 100g)": "Roasted Pork Knuckle (per 100g)",
        "Ciolan cu Os Domnesc (per 100g)": "Royal Smoked Pork Knuckle (per 100g)",
        "Tochitură Moldovenească de Porc": "Traditional Moldavian Pork Stew (Tochitură)",
        "Obrăjori de Porc cu Sos de Portocale": "Pork Cheeks in Orange Sauce",
        "Cotlet cu Os și Sos Dijon": "Bone-in Pork Chop with Dijon Sauce",
        "File de Somon Teriyaki": "Teriyaki Salmon Fillet",
        "Păstrăv / Doradă la Grătar": "Grilled Trout / Sea Bream",
        "Păstrăv Prăjit în Crustă de Mălai": "Fried Cornmeal-Crusted Trout",
        "Tigaie Picantă cu Fructe de Mare": "Spicy Seafood Pan",
        "Spaghete Milanese": "Spaghetti Milanese",
        "Spaghete Carbonara Autentice": "Authentic Spaghetti Carbonara",
        "Paste Quattro Formaggi": "Pasta Quattro Formaggi",
        "Penne All'Arrabbiata": "Penne All'Arrabbiata",
        "Tagliatelle cu Creveți și Dovlecei": "Tagliatelle with Prawns & Zucchini",
        "Paste cu Fructe de Mare": "Seafood Pasta",
        "Tagliatelle cu Somon și Smântână": "Tagliatelle with Salmon & Cream",
        "Risotto al Funghi Porcini": "Porcini Mushroom Risotto",
        "Risotto Alla Pescadora": "Seafood Risotto Alla Pescadora",
        "Focaccia Simplă cu Ulei și Oregano": "Plain Focaccia with Olive Oil & Oregano",
        "Focaccia Casei cu Usturoi și Parmesan": "House Focaccia with Garlic & Parmesan",
        "Pizza Margherita": "Pizza Margherita",
        "Pizza Marissa Specială": "Marissa House Special Pizza",
        "Pizza Prosciutto": "Pizza Prosciutto",
        "Pizza Prosciutto e Mais": "Pizza Prosciutto e Mais",
        "Pizza Prosciutto e Funghi": "Pizza Prosciutto e Funghi",
        "Pizza Prosciutto Crudo": "Pizza Prosciutto Crudo",
        "Pizza Prosciutto Crudo e Rucola": "Pizza Prosciutto Crudo e Rucola",
        "Pizza Diavola Picantă": "Spicy Pizza Diavola",
        "Pizza Funghi": "Pizza Funghi",
        "Pizza California": "Pizza California",
        "Pizza Quattro Stagioni": "Pizza Quattro Stagioni",
        "Pizza Quattro Formaggi": "Pizza Quattro Formaggi",
        "Pizza Tonno e Cipolla": "Pizza Tonno e Cipolla",
        "Pizza Quattro Carni": "Pizza Quattro Carni",
        "Pizza Vegetariană": "Vegetarian Pizza",
        "Pizza Toscana": "Pizza Toscana",
        "Pizza Speciale Chef": "Chef's Special Pizza",
        "Pizza Capricciosa": "Pizza Capricciosa",
        "Pizza Hawaii": "Pizza Hawaii",
        "Pizza Kebab": "Pizza Kebab",
        "Pizza Marissa Family (XXL)": "Marissa Family Pizza (XXL)",
        "Cartofi Prăjiți Proaspeți": "Fresh French Fries",
        "Piure Cremos de Cartofi": "Creamy Mashed Potatoes",
        "Cartofi Natur cu Unt și Pătrunjel": "Boiled Potatoes with Butter & Parsley",
        "Cartofi Aurii la Cuptor": "Golden Oven-Roasted Potato Wedges",
        "Pilaf de Orez cu Legume": "Rice Pilaf with Vegetables",
        "Legume Înăbușite în Unt": "Butter-Steamed Vegetables",
        "Mămăliguță Caldă": "Warm Romanian Polenta",
        "Iahnie de Fasole": "Traditional Romanian Bean Stew",
        "Ciuperci Sote cu Usturoi": "Sautéed Mushrooms with Garlic",
        "Legume la Grătar": "Grilled Vegetables",
        "Sos Roșu / Ketchup": "Tomato Sauce / Ketchup",
        "Sos Alb de Usturoi cu Smântână": "Garlic Cream Sauce",
        "Sos Chilli Picant": "Spicy Chilli Sauce",
        "Ulei Infuzat Picant": "Spicy Infused Olive Oil",
        "Mujdei Tradițional de Usturoi": "Traditional Garlic Mujdei",
        "Muștar / Maioneză": "Mustard / Mayonnaise",
        "Sos Alb cu Ciuperci Hribi": "White Porcini Mushroom Cream Sauce",
        "Salată Grecească": "Greek Salad",
        "Salată cu Ton": "Tuna Salad",
        "Salată Cezar cu Pui": "Chicken Caesar Salad",
        "Salată Caprese": "Caprese Salad",
        "Salată Gourmet cu Avocado și Creveți": "Gourmet Avocado & Prawn Salad",
        "Salată de Varză Albă": "Fresh White Cabbage Salad",
        "Salată de Roșii cu Brânză Rasă": "Fresh Tomato Salad with Grated Cheese",
        "Ardei Copți cu Usturoi": "Roasted Peppers with Garlic",
        "Salată de Murături Asortate": "Assorted Pickles Salad",
        "Salată de Sfeclă Roșie cu Hrean": "Beetroot Salad with Horseradish",
        "Salată de Ceapă Roșie": "Red Onion Salad",
        "Înghețată Sortată la Cupă": "Assorted Ice Cream Scoop",
        "Vulcan de Ciocolată (Lava Cake)": "Molten Chocolate Lava Cake",
        "Clătite cu Banană și Finetti": "Pancakes with Banana & Chocolate",
        "Clătite cu Gem de Afine / Vișine": "Pancakes with Blueberry / Sour Cherry Jam",
        "Papanași Tradiționali cu Brânză și Gem": "Traditional Romanian Papanași Donuts",
        "Felie Desertul Casei": "Slice of House Cake",
        "Ecler cu Ciocolată și Fistic": "Chocolate & Pistachio Eclair",
        "Cheesecake cu Fructe de Pădure": "Berry Cheesecake",
        "Tiramisu Clasic Italian": "Classic Italian Tiramisu",
        "Platou Tradițional de Sărbători": "Festive Traditional Platter",
        "Sarmale cu Ciolan și Mămăliguță": "Cabbage Rolls with Pork Knuckle & Polenta",
        "Salată de Boeuf Tradițională": "Traditional Romanian Boeuf Salad",
        "Prăjituri Asortate de Casă": "Assorted Homemade Pastries",
        "Fresh de Portocale / Grapefruit": "Fresh Orange / Grapefruit Juice",
        "Limonadă Clasică cu Miere": "Classic Honey Lemonade",
        "Limonadă cu Arome (Zmeură / Mango)": "Flavored Lemonade (Raspberry / Mango)",
        "Socată de Casă": "Traditional Elderflower Cordial (Socată)",
        "Gama Coca-Cola / Fanta / Sprite / Schweppes": "Coca-Cola / Fanta / Sprite / Schweppes Range",
        "Cappy Nectar (Portocale / Piersici)": "Cappy Fruit Nectar",
        "Fuzetea (Lămâie / Piersică)": "Fuzetea Ice Tea",
        "Milkshake Marissa (Ciocolată / Căpșuni)": "Marissa Milkshake (Chocolate / Strawberry)",
        "Almdudler": "Almdudler Austrian Herbal Soda",
        "Red Bull Energy Drink": "Red Bull Energy Drink",
        "Apă Minerală Plată / Carbogazoasă (Dorna/Bucovina)": "Still / Sparkling Mineral Water",
        "Garanție Ambalaj SGR": "SGR Container Deposit",
        "Espresso Scurt / Lung": "Single / Double Espresso",
        "Espresso Dublu": "Double Espresso Shot",
        "Espresso Macchiato / cu Lapte": "Espresso Macchiato / Milk",
        "Caffe Latte cu Arome (Vanilie / Caramel)": "Flavored Caffe Latte",
        "Baby Latte (Fără Cafeină)": "Decaf Baby Latte",
        "Gingerbread Latte": "Gingerbread Latte",
        "Salted Caramel Latte": "Salted Caramel Latte",
        "Frappe Espresso": "Iced Espresso Frappe",
        "Cappuccino Vienez": "Viennese Cappuccino",
        "Turmeric Latte (Golden Milk)": "Golden Turmeric Milk Latte",
        "Ciocolată Caldă (Albă / Neagră)": "Hot Chocolate (White / Dark)",
        "Lavanda Latte Signature": "Signature Lavender Latte",
        "Bora Bora (Non-Alcoolic)": "Bora Bora Mocktail",
        "Boni Bon Signature (Non-Alcoolic)": "Boni Bon Mocktail",
        "Aperol Spritz": "Aperol Spritz",
        "Hugo Spritz": "Hugo Spritz",
        "Pina Colada": "Pina Colada",
        "Mojito Clasic": "Classic Mojito",
        "Spirtoase Fine / Tării (Absolut, Jägermeister, Alexandrion, etc.)": "Fine Spirits & Liqueurs",
        "Gama Vincon Comoara Pivniței (Ediție Colecție)": "Vincon Treasury Wine Selection",
        "Beciul Domnesc (Fetească Neagră / Sauvignon Blanc)": "Beciul Domnesc Wine Collection",
        "Jidvei Traditional / Castel": "Jidvei Traditional Wines",
        "Pilsner Urquell / Peroni Nastro Azzurro": "Pilsner Urquell / Peroni Lager",
        "Ursus Premium / Timișoreana Draft / Sticlă": "Ursus Premium / Timișoreana Draft/Bottle",
        "Cutie Pizza Mică": "Small Pizza Box",
        "Cutie Pizza Mare / Family": "Large Pizza Box",
        "Caserolă Termică Alimentară": "Thermal Takeaway Container",
        "Set Tacâmuri Unică Folosință Sigilate": "Disposable Cutlery Set",
        "Pungă Biodegradabilă Transport": "Biodegradable Carrier Bag"
    }

    if is_name and t in name_map:
        return name_map[t]
    
    # Generic word replacement for ingredients
    ing_map = {
        "ouă": "eggs", "ou": "egg", "bacon": "bacon", "roșie": "tomato", "roșii": "tomatoes",
        "castravete": "cucumber", "castraveți": "cucumbers", "brânză": "cheese", "pâine": "bread",
        "cartofi": "potatoes", "slănină": "pork fatback", "ceapă": "onion", "șuncă": "ham",
        "cașcaval": "yellow cheese", "unt": "butter", "cârnați": "sausages", "ardei": "pepper",
        "ciuperci": "mushrooms", "croissant": "croissant", "cremă": "cream", "avocado": "avocado",
        "somon": "salmon", "gem": "jam", "usturoi": "garlic", "muștar": "mustard", "lapte": "milk",
        "iaurt": "yogurt", "cacao": "cocoa", "zahăr": "sugar", "miere": "honey", "mici": "mici skinless sausages",
        "pesmet": "breadcrumbs", "făină": "flour", "mămăligă": "polenta", "mămăliguță": "polenta",
        "smântână": "sour cream", "vită": "beef", "chiflă": "bun", "cheddar": "cheddar",
        "salată": "salad", "pui": "chicken", "lipie": "pita", "burtă": "tripe", "supă": "soup",
        "gălbenuș": "egg yolk", "țelină": "celery", "morcov": "carrots", "fasole": "beans",
        "găluște": "dumplings", "boia": "paprika", "porc": "pork", "borș": "sour borscht",
        "leuștean": "lovage", "ciolan": "pork knuckle", "tarhon": "tarragon", "ardei iute": "hot pepper",
        "grătar": "grilled", "oregano": "oregano", "hribi": "porcini mushrooms", "rață": "duck",
        "varză": "cabbage", "sos": "sauce", "orez": "rice", "pesmet": "breadcrumbs",
        "aripioare": "wings", "șnițel": "schnitzel", "antricot": "ribeye", "os": "bone",
        "sare": "salt", "vin": "wine", "trufe": "truffles", "piure": "mashed potatoes",
        "coaste": "ribs", "șorici": "pork rind", "bere": "beer", "chimen": "caraway",
        "păstrăv": "trout", "doradă": "sea bream", "lămâie": "lemon", "mălai": "cornmeal",
        "creveți": "prawns", "calamar": "squid", "caracatiță": "octopus", "pătrunjel": "parsley",
        "spaghete": "spaghetti", "parmesan": "parmesan", "pecorino": "pecorino", "piper": "pepper",
        "mozzarella": "mozzarella", "gorgonzola": "gorgonzola", "dovlecel": "zucchini",
        "mărar": "dill", "anghinare": "artichoke", "ananas": "pineapple", "kebab": "kebab",
        "ulei": "oil", "broccli": "broccoli", "conopidă": "cauliflower", "vinete": "eggplant",
        "ketchup": "ketchup", "maioneză": "mayonnaise", "feta": "feta", "măsline": "olives",
        "ton": "tuna", "crutoane": "croutons", "anșoa": "anchovies", "pesto": "pesto",
        "busuioc": "basil", "susan": "sesame", "hrean": "horseradish", "sfeclă": "beetroot",
        "înghețată": "ice cream", "vanilie": "vanilla", "ciocolată": "chocolate",
        "fistic": "pistachio", "frișcă": "whipped cream", "banană": "banana", "gogoși": "donuts",
        "ecler": "eclair", "mascarpone": "mascarpone", "tobă": "toba pork jelly",
        "lebăr": "lebar liver pate", "jumări": "pork cracklings", "sarmale": "cabbage rolls",
        "portocale": "oranges", "grapefruit": "grapefruit", "mentă": "mint", "zmeură": "raspberry",
        "mango": "mango", "soc": "elderflower", "taurină": "taurine", "cafeină": "caffeine",
        "apa": "water", "apă": "water", "espresso": "espresso", "turmeric": "turmeric",
        "ghimbir": "ginger", "scorțișoară": "cinnamon", "maracuja": "passionfruit",
        "grenadină": "grenadine", "lime": "lime", "prosecco": "prosecco", "rom": "rum"
    }

    words = re.findall(r'\b\w+\b', ro_text)
    translated_words = [ing_map.get(w.lower(), w) for w in words]
    return " ".join(translated_words)

print("Helper functions compiled cleanly!")
