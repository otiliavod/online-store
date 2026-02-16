import { HeroContent, NavItem, CategoriesSectionContent, Product } from './site-content.models';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '' },
  { label: 'Categories', path: 'categories' },
  { label: 'Products', path: 'products' },
  { label: 'Contact', path: 'contact' },
];

export const HERO_CONTENT: HeroContent = {
  eyebrow: 'HANDMADE WITH LOVE',
  title: 'Online Store for',
  titleAccent: 'every moment',
  subtitle:
    'Discover products crafted with care — a clean Angular 21 + PrimeNG storefront built with reusable components.',

  primaryCtaLabel: 'Explore products',
  primaryCtaTarget: 'products',

  secondaryCtaLabel: 'See categories',
  secondaryCtaTarget: 'categories',

  stats: [
    { value: '500+', label: 'Products' },
    { value: '100+', label: 'Happy clients' },
    { value: '5★', label: 'Premium quality' },
  ],
};

export const CATEGORIES_SECTION: CategoriesSectionContent = {
  title: 'Categoriile noastre',
  subtitle:
    'Descoperă colecțiile noastre de genți handmade, fiecare categorie fiind gândită pentru diferite nevoi și stiluri de viață.',
  items: [
    {
      title: 'Genți Tote',
      description: 'Genți spațioase și elegante, perfecte pentru zi cu zi',
      imageUrl: 'assets/tote-bag.jpg',
      productCount: 24,
      ctaLabel: 'Vezi produsele',
      ctaTarget: 'products',
    },
    {
      title: 'Genți Crossbody',
      description: 'Confort și stil pentru o viață în mișcare',
      imageUrl: 'assets/crossbody-bag.jpg',
      productCount: 18,
      ctaLabel: 'Vezi produsele',
      ctaTarget: 'products',
    },
    {
      title: 'Poșete Clutch',
      description: 'Elegantă rafinată pentru ocazii speciale',
      imageUrl: 'assets/clutch-bag.jpg',
      productCount: 12,
      ctaLabel: 'Vezi produsele',
      ctaTarget: 'products',
    },
  ],
  promo: {
    title: 'Colecția nouă de primăvară',
    description:
      'Descoperă cea mai recentă colecție cu culori vibrante și modele fresh, perfecte pentru sezonul călduros.',
    ctaLabel: 'Vezi colecția',
    ctaTarget: 'products',
    variant: 'warm',
  },
};

export const PRODUCTS: Product[] = [
  {
    id: 'tote-classic',
    title: 'Geantă Tote Clasică',
    imageUrl: 'assets/tote-bag.jpg',
    price: 299,
    oldPrice: 399,
    rating: 4.5,
    reviewsCount: 24,
    isNew: true,
    discountPercent: 25,
  },
  {
    id: 'crossbody-elegant',
    title: 'Crossbody Elegantă',
    imageUrl: 'assets/crossbody-bag.jpg',
    price: 249,
    rating: 4.5,
    reviewsCount: 18,
  },
  {
    id: 'clutch-premium',
    title: 'Clutch Premium',
    imageUrl: 'assets/clutch-bag.jpg',
    price: 199,
    rating: 4.5,
    reviewsCount: 12,
    isNew: true,
  },
  {
    id: 'tote-artizanal',
    title: 'Tote Artizanală Maro',
    imageUrl: 'assets/tote-bag.jpg',
    price: 329,
    rating: 4.5,
    reviewsCount: 31,
  },
  {
    id: 'mini-crossbody',
    title: 'Mini Crossbody',
    imageUrl: 'assets/crossbody-bag.jpg',
    price: 179,
    oldPrice: 229,
    rating: 4.5,
    reviewsCount: 15,
    discountPercent: 22,
  },
  {
    id: 'clutch-seara',
    title: 'Clutch de Seară',
    imageUrl: 'assets/clutch-bag.jpg',
    price: 269,
    rating: 4.5,
    reviewsCount: 22,
  },
];
