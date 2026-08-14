import json
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open('scratch/parsed_docx_elements.json', 'r', encoding='utf-8') as f:
    elements = json.load(f)

lines = [e['text'].strip() for e in elements if e['text'].strip()]

# Allergen detector
def get_allergens(ing_text):
    ing = ing_text.lower()
    algs = set()
    if any(k in ing for k in ['grâu', 'grau', 'făină', 'faina', 'pesmet', 'chiflă', 'chifla', 'pâine', 'paine', 'blat', 'spaghete', 'penne', 'tagliatelle', 'croissant', 'cereale', 'orz', 'gluten', 'foietaj', 'focaccia', 'biscuiți', 'biscuiti', 'pișcoturi', 'piscoturi', 'savoiardi']):
        algs.add(1)
    if any(k in ing for k in ['creveți', 'creveti', 'rac', 'homar', 'crab', 'crustacee']):
        algs.add(2)
    if any(k in ing for k in ['ou', 'ouă', 'oua', 'gălbenuș', 'galbenus', 'albuș', 'albus', 'maioneză', 'maioneza', 'ecler', 'lava cake', 'papanași', 'papanasi', 'tiramisu', 'omletă', 'omleta', 'ochiuri']):
        algs.add(3)
    if any(k in ing for k in ['pește', 'peste', 'somon', 'păstrăv', 'pastrav', 'doradă', 'dorada', 'ton', 'anșoa', 'ansoa']):
        algs.add(4)
    if any(k in ing for k in ['arahide']):
        algs.add(5)
    if any(k in ing for k in ['soia', 'sos soia', 'tofu', 'teriyaki']):
        algs.add(6)
    if any(k in ing for k in ['lapte', 'smântână', 'smantana', 'unt', 'cașcaval', 'cascaval', 'brânză', 'branza', 'telemea', 'mozzarella', 'parmesan', 'parmigiano', 'gorgonzola', 'cheddar', 'feta', 'iaurt', 'frișcă', 'frisca', 'mascarpone', 'lactoză', 'lactoza', 'cheesecake']):
        algs.add(7)
    if any(k in ing for k in ['nucă', 'nuca', 'nuci', 'migdale', 'fistic', 'caju', 'alune', 'finetti', 'nutella']):
        algs.add(8)
    if any(k in ing for k in ['țelină', 'telina', 'radacinoase']):
        algs.add(9)
    if any(k in ing for k in ['muștar', 'mustar', 'dijon', 'mici']):
        algs.add(10)
    if any(k in ing for k in ['susan', 'semințe susan']):
        algs.add(11)
    if any(k in ing for k in ['sulfiți', 'sulfiti', 'vin', 'oțet', 'otet', 'bere', 'prosecco']):
        algs.add(12)
    if any(k in ing for k in ['lupin']):
        algs.add(13)
    if any(k in ing for k in ['calamar', 'caracatiță', 'caracatita', 'scoici', 'stridii', 'moluște', 'moluste']):
        algs.add(14)
    return sorted(list(algs))

# Frozen detector
def get_frozen(name, ing):
    c = (name + " " + ing).lower()
    kw = ['pui', 'rață', 'rata', 'obrăjori', 'obrajori', 't-bone', 'mușchiuleț porc', 'muschiulet porc', 'ciolan', 'mici', 'somon', 'păstrăv', 'pastrav', 'doradă', 'dorada', 'creveți', 'creveti', 'calamar', 'fructe de mare', 'broccoli', 'spanac', 'mazăre', 'mazare', 'hribi', 'fructe de pădure', 'fructe de padure', 'porumb', 'avocado', 'lava cake', 'papanași', 'papanasi', 'ecler', 'gogoși', 'gogosi', 'crispy', 'nuggets', 'cartofi prăjiți', 'cartofi prajiti', 'wedges', 'cașcaval pane', 'cascaval pane']
    return any(k in c for k in kw)

# Nutrition estimator
def get_nutrition(cat_id, name, ing):
    c = (name + " " + ing).lower()
    kcal = 185
    fats, sat_fats, carbs, sugars, protein, salt = 9.0, 3.5, 18.0, 2.5, 9.0, 1.1

    if cat_id == 'mic-dejun':
        kcal, fats, sat_fats, carbs, sugars, protein, salt = 235, 15.5, 6.5, 12.5, 2.0, 12.0, 1.4
    elif cat_id in ['pui-rata', 'vita', 'porc']:
        kcal, fats, sat_fats, carbs, sugars, protein, salt = 225, 14.5, 5.8, 2.8, 0.6, 21.5, 1.2
    elif cat_id == 'peste':
        kcal, fats, sat_fats, carbs, sugars, protein, salt = 165, 8.0, 1.9, 4.2, 1.1, 18.5, 1.0
    elif cat_id in ['paste-risotto', 'pizza']:
        kcal, fats, sat_fats, carbs, sugars, protein, salt = 245, 10.8, 5.2, 26.5, 2.5, 11.0, 1.3
    elif cat_id == 'ciorbe':
        kcal, fats, sat_fats, carbs, sugars, protein, salt = 115, 6.8, 3.4, 4.8, 1.9, 7.8, 1.1
    elif cat_id == 'salate':
        kcal, fats, sat_fats, carbs, sugars, protein, salt = 140, 9.5, 3.6, 6.8, 3.2, 7.0, 1.0
    elif cat_id == 'garnituri':
        if 'cartof' in c:
            kcal, fats, sat_fats, carbs, sugars, protein, salt = 195, 8.8, 1.3, 26.5, 0.6, 2.7, 0.9
        else:
            kcal, fats, sat_fats, carbs, sugars, protein, salt = 115, 3.8, 1.1, 16.5, 1.9, 3.1, 0.8
    elif cat_id == 'desert':
        kcal, fats, sat_fats, carbs, sugars, protein, salt = 315, 14.8, 8.4, 38.5, 24.5, 5.9, 0.3
    elif cat_id in ['racoritoare', 'cocktailuri', 'vinuri', 'bere']:
        if 'espresso' in c or 'cafea' in c:
            kcal, fats, sat_fats, carbs, sugars, protein, salt = 4, 0.0, 0.0, 0.5, 0.0, 0.3, 0.0
        elif 'apa' in c or 'apă' in c:
            kcal, fats, sat_fats, carbs, sugars, protein, salt = 0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0
        elif 'fresh' in c or 'limonadă' in c or 'limonada' in c:
            kcal, fats, sat_fats, carbs, sugars, protein, salt = 45, 0.1, 0.0, 10.8, 9.8, 0.3, 0.01
        elif 'vin' in c:
            kcal, fats, sat_fats, carbs, sugars, protein, salt = 78, 0.0, 0.0, 2.2, 0.8, 0.1, 0.01
        elif 'bere' in c:
            kcal, fats, sat_fats, carbs, sugars, protein, salt = 42, 0.0, 0.0, 3.4, 0.2, 0.4, 0.01
        else:
            kcal, fats, sat_fats, carbs, sugars, protein, salt = 52, 0.0, 0.0, 12.5, 12.0, 0.1, 0.01
    elif cat_id == 'ambalaje':
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

# English translations
def translate_name(name):
    n = name.strip()
    repl = {
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
        "Espresso Scurt / Lung": "Single / Double Espresso Shot",
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

    if n in repl:
        return repl[n]
    
    # Generic clean translation
    return n.replace('cu', 'with').replace('și', '&').replace('de', 'of').replace('fără', 'without')

def translate_ing(ing):
    i = ing.strip()
    words = {
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
        "găluște": "dumplings", "boia": "paprika", "porc": "pork", "ciolan": "pork knuckle",
        "grătar": "grilled", "oregano": "oregano", "hribi": "porcini mushrooms", "rață": "duck",
        "varză": "cabbage", "sos": "sauce", "orez": "rice", "aripioare": "wings",
        "șnițel": "schnitzel", "antricot": "ribeye", "os": "bone", "sare": "salt",
        "vin": "wine", "trufe": "truffles", "piure": "mashed potatoes", "coaste": "ribs",
        "păstrăv": "trout", "doradă": "sea bream", "lămâie": "lemon", "mălai": "cornmeal",
        "creveți": "prawns", "calamar": "squid", "caracatiță": "octopus", "pătrunjel": "parsley",
        "spaghete": "spaghetti", "parmesan": "parmesan", "mozzarella": "mozzarella",
        "gorgonzola": "gorgonzola", "dovlecel": "zucchini", "mărar": "dill", "anghinare": "artichoke",
        "ananas": "pineapple", "kebab": "kebab", "ulei": "oil", "broccli": "broccoli",
        "conopidă": "cauliflower", "vinete": "eggplant", "ketchup": "ketchup", "maioneză": "mayonnaise",
        "feta": "feta", "măsline": "olives", "ton": "tuna", "crutoane": "croutons",
        "anșoa": "anchovies", "pesto": "pesto", "busuioc": "basil", "susan": "sesame",
        "hrean": "horseradish", "sfeclă": "beetroot", "înghețată": "ice cream", "vanilie": "vanilla",
        "ciocolată": "chocolate", "fistic": "pistachio", "frișcă": "whipped cream",
        "banană": "banana", "gogoși": "donuts", "ecler": "eclair", "mascarpone": "mascarpone",
        "sarmale": "cabbage rolls", "portocale": "oranges", "grapefruit": "grapefruit",
        "mentă": "mint", "zmeură": "raspberry", "mango": "mango", "soc": "elderflower",
        "espresso": "espresso", "turmeric": "turmeric", "ghimbir": "ginger",
        "scorțișoară": "cinnamon", "maracuja": "passionfruit", "lime": "lime",
        "prosecco": "prosecco", "rom": "rum"
    }

    res = i
    for ro_w, en_w in words.items():
        res = re.sub(r'\b' + ro_w + r'\b', en_w, res, flags=re.IGNORECASE)
    return res.replace('cu', 'with').replace('și', '&').replace('de', 'of').replace('fără', 'without')

print("Generator helpers ready!")
