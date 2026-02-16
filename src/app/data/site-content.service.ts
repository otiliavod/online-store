import { Injectable } from '@angular/core';
import {CATEGORIES_SECTION, HERO_CONTENT, NAV_ITEMS, PRODUCTS} from './site-content';
import { HeroContent, NavItem, CategoriesSectionContent, Product } from './site-content.models';

@Injectable({ providedIn: 'root' })
export class SiteContentService {
  getNavItems(): NavItem[] {
    return NAV_ITEMS;
  }

  getHeroContent(): HeroContent {
    return HERO_CONTENT;
  }

  getCategoriesSection(): CategoriesSectionContent {
    return CATEGORIES_SECTION;
  }

  getProducts(): Product[] {
    return PRODUCTS;
  }
}
