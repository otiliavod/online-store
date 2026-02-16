import { CommonModule } from '@angular/common';
import { Component, HostListener, inject, signal, computed } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { filter } from 'rxjs/operators';

import { ButtonModule } from 'primeng/button';
import { BadgeModule } from 'primeng/badge';
import { InputTextModule } from 'primeng/inputtext';
import { DrawerModule } from 'primeng/drawer';

import { SiteContentService } from '../../data/site-content.service';
import { NavItem } from '../../data/site-content.models';
import { CartService } from '../../services/cart.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    ButtonModule,
    BadgeModule,
    InputTextModule,
    DrawerModule,
  ],
  templateUrl: './navigation.html',
  styleUrl: './navigation.scss',
})
export class Navigation {
  private readonly content = inject(SiteContentService);
  private readonly router = inject(Router);

  cart = inject(CartService);
  auth = inject(AuthService);

  navItems: NavItem[] = this.content.getNavItems();

  isHome = true;
  isScrolled = false;

  private readonly solidAtPx = 24;

  // Mobile menu
  mobileOpen = signal(false);
  isMobile = signal(window.innerWidth < 900); // tweak breakpoint
  showInlineLinks = computed(() => !this.isMobile());

  constructor() {
    this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe(() => {
        this.isHome = this.router.url === '/';
        this.updateScrolledState();
        this.mobileOpen.set(false); // close menu on navigation
      });

    this.updateScrolledState();
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.updateScrolledState();
  }

  @HostListener('window:resize')
  onResize(): void {
    const mobile = window.innerWidth < 900;
    this.isMobile.set(mobile);
    if (!mobile) this.mobileOpen.set(false);
  }

  openMobile() { this.mobileOpen.set(true); }
  closeMobile() { this.mobileOpen.set(false); }

  private updateScrolledState(): void {
    const y = window.scrollY || document.documentElement.scrollTop || 0;
    this.isScrolled = y > this.solidAtPx;
  }
}
