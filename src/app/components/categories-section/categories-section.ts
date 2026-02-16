import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { SiteContentService } from '../../data/site-content.service';
import { CategoriesSectionContent, RoutePath } from '../../data/site-content.models';
import { CategoryCardComponent } from '../category-card/category-card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-categories-section',
  standalone: true,
  imports: [CommonModule, CategoryCardComponent, ButtonModule],
  templateUrl: './categories-section.html',
  styleUrl: './categories-section.scss',
})
export class CategoriesSectionComponent {
  readonly content: CategoriesSectionContent;

  constructor(
    private readonly siteContent: SiteContentService,
    private readonly router: Router
  ) {
    this.content = this.siteContent.getCategoriesSection();
  }

  goTo(path: RoutePath) {
    this.router.navigate(path ? ['/', path] : ['/']);
  }
}
