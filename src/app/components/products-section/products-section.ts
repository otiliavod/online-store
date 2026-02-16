import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { SiteContentService } from '../../data/site-content.service';
import { ProductCardComponent } from '../product-card/product-card';
import { Product, RoutePath } from '../../data/site-content.models';
import {Button} from 'primeng/button';

@Component({
  selector: 'app-products-section',
  standalone: true,
  imports: [CommonModule, ProductCardComponent, Button],
  templateUrl: './products-section.html',
  styleUrl: './products-section.scss',
})
export class ProductsSectionComponent {
  readonly products: Product[];

  constructor(
    private readonly siteContent: SiteContentService,
    private readonly router: Router
  ) {
    this.products = this.siteContent.getProducts();
  }

  goTo(path: RoutePath) {
    this.router.navigate(path ? ['/', path] : ['/']);
  }
}
