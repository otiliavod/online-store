import { CommonModule } from '@angular/common';
import { Component, HostListener, inject } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { filter } from 'rxjs/operators';

import { ButtonModule } from 'primeng/button';
import { BadgeModule } from 'primeng/badge';
import { InputTextModule } from 'primeng/inputtext';

import { SiteContentService } from '../../data/site-content.service';
import { NavItem } from '../../data/site-content.models';
import { CartService } from '../../services/cart.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, ButtonModule, BadgeModule, InputTextModule],
  templateUrl: './navigation.html',
  styleUrl: './navigation.scss',
})
export class Navigation {
  private readonly content = inject(SiteContentService);
  private readonly router = inject(Router);

  cart = inject(CartService);
  navItems: NavItem[] = this.content.getNavItems();
  auth = inject(AuthService);

  isHome = true;
  isScrolled = false;

  // tweak if you want it to turn solid earlier/later
  private readonly solidAtPx = 24;

  constructor() {
    this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe(() => {
        this.isHome = this.router.url === '/';
        this.updateScrolledState();
      });

    // initial state on first load
    this.updateScrolledState();
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.updateScrolledState();
  }

  private updateScrolledState(): void {
    const y = window.scrollY || document.documentElement.scrollTop || 0;
    this.isScrolled = y > this.solidAtPx;
  }
}
