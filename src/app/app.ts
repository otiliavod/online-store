import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navigation } from './components/navigation/navigation';
import { CartDrawer } from './components/cart-drawer/cart-drawer';
import { LoginModal } from './components/login-modal/login-modal';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navigation, CartDrawer, LoginModal],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('online-store');
}
