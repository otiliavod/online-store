import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

import { CategoryCard, RoutePath } from '../../data/site-content.models';

@Component({
  selector: 'app-category-card',
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule],
  templateUrl: './category-card.html',
  styleUrl: './category-card.scss',
})
export class CategoryCardComponent {
  @Input({ required: true }) item!: CategoryCard;

  constructor(private readonly router: Router) {}

  goTo(path: RoutePath) {
    this.router.navigate(path ? ['/', path] : ['/']);
  }
}
