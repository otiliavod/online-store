export type RoutePath = '' | 'categories' | 'products' | 'login' | 'cart' | 'contact';

export interface NavItem {
  label: string;
  path: RoutePath;
}

export interface HeroStatItem {
  value: string;
  label: string;
}

export interface HeroContent {
  eyebrow: string;
  title: string;
  titleAccent?: string;
  subtitle: string;
  primaryCtaLabel: string;
  primaryCtaTarget: RoutePath;
  secondaryCtaLabel: string;
  secondaryCtaTarget: RoutePath;
  stats: HeroStatItem[];
}

export interface CategoryCard {
  title: string;
  description: string;
  imageUrl: string;
  productCount: number;
  ctaLabel: string;
  ctaTarget: RoutePath;
}

export interface PromoBannerContent {
  title: string;
  description: string;
  ctaLabel: string;
  ctaTarget: RoutePath;

  variant?: 'light' | 'warm';
}

export interface CategoriesSectionContent {
  title: string;
  subtitle: string;
  items: CategoryCard[];
  promo?: PromoBannerContent;
}

export interface Product {
  id: string;
  title: string;
  imageUrl: string;

  price: number;
  oldPrice?: number;

  rating: number;        // 0–5
  reviewsCount: number;

  isNew?: boolean;
  discountPercent?: number;
}
