export interface MenuItem {
  id: string;
  name: string;
  description: string;
  priceTag?: string; // e.g. "From ₦2,500"
  tags: string[];
  waPhrase: string; // The text parameter to send on WhatsApp
  image: string; // Path or url
  badge?: string; // e.g. "Highly Popular" or "Fiery Hot"
}

export interface Testimonial {
  id: string;
  name: string;
  role: string; // e.g. "Gwarinpa"
  stars: number;
  quote: string;
}

export interface CateringEvent {
  id: string;
  title: string;
  description: string;
  emoji: string;
}

export interface CateringBenefit {
  id: string;
  title: string;
  description: string;
}

export interface DeliveryZone {
  zone: string;
  areas: string[];
}
