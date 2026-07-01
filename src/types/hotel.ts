export type ReviewType = "Families" | "Couples" | "Solo" | "Business";

export interface HotelMetrics {
  cleanliness: number;
  food: number;
  kidsFriendly: number;
  petFriendly: number;
  fitness: number;
  nearbyAttractions: number;
  safety: number;
  valueForMoney: number;
  quietPrivacy: number;
  serviceQuality: number;
}

export interface ProviderPrice {
  provider: string;
  price: number;
}

export interface ReviewItem {
  id: string;
  reviewerName: string;
  reviewerType: ReviewType;
  rating: number;
  text: string;
  date: string;
}

export interface Attraction {
  id: string;
  name: string;
  distanceKm: number;
  travelTime: string;
}

export interface TrendPoint {
  label: string;
  rating: number;
}

export interface Hotel {
  id: string;
  name: string;
  location: string;
  pricePerNight: number;
  rating: number;
  image: string;
  gallery: string[];
  description: string;
  amenities: string[];
  providerPrices: ProviderPrice[];
  metrics: HotelMetrics;
  trendMonthly: TrendPoint[];
  aiSummary: string[];
  reviews: ReviewItem[];
  nearbyAttractions: Attraction[];
}

export type PreferenceKey = keyof HotelMetrics;

export type PreferenceWeights = Record<PreferenceKey, number>;
