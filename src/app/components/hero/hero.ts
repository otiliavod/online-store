import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';

import { SiteContentService } from '../../data/site-content.service';
import { HeroContent, RoutePath } from '../../data/site-content.models';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  private readonly contentService = inject(SiteContentService);
  private readonly router = inject(Router);

  content: HeroContent = this.contentService.getHeroContent();

  heroImageUrl = 'assets/hero-bags.jpg';

  goTo(path: RoutePath): void {
    this.router.navigateByUrl(path === '' ? '/' : `/${path}`);
  }
}
