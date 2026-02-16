import { Routes } from '@angular/router';
import { Home } from './components/home/home';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'categories', loadComponent: () => import('./components/categories/categories').then(m => m.Categories) },
  { path: 'products', loadComponent: () => import('./components/products/products').then(m => m.Products) },
  //{ path: 'login', loadComponent: () => import('./components/login/login').then(m => m.Login) },
  //{ path: 'cart', loadComponent: () => import('./components/cart/cart').then(m => m.Cart) },

  { path: '**', redirectTo: '' },
];
