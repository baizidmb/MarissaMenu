export type Language = 'ro' | 'en' | 'hu';

export interface NutritionalInfo {
  weightGrams: number;
  energyKcal: number;
  energyKj: number;
  fats: number;
  saturatedFats: number;
  carbs: number;
  sugars: number;
  protein: number;
  salt: number;
}

export interface MenuItem {
  id: string;
  categoryId: string;
  name: Record<Language, string>;
  description: Record<Language, string>;
  price: number;
  weight: string;
  imageUrl?: string;
  isThawed?: boolean;
  allergens: string[];
  nutrition: NutritionalInfo;
  isVegetarian?: boolean;
  isSpicy?: boolean;
  isSpecialty?: boolean;
}

export interface Category {
  id: string;
  name: Record<Language, string>;
  icon: string;
  description?: Record<Language, string>;
}

export interface AllergenInfo {
  id: number;
  code: string;
  name: Record<Language, string>;
  details: Record<Language, string>;
}

export interface HotelInfo {
  name: string;
  address: string;
  town: string;
  county: string;
  country: string;
  slogan: Record<Language, string>;
  logoUrl: string;
  logoFavicon: string;
  website: string;
  email: string;
  phoneReceptie: string;
  phoneFix1: string;
  phoneFix2: string;
  wifiSsid: string;
  wifiPass: string;
}
