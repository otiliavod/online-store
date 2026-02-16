import { Component } from '@angular/core';
import { Hero } from '../hero/hero';
import {CategoriesSectionComponent} from '../categories-section/categories-section';
import {ProductsSectionComponent} from '../products-section/products-section';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Hero, CategoriesSectionComponent, ProductsSectionComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
