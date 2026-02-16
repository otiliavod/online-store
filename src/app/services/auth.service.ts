import { Injectable, computed, signal } from '@angular/core';

export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload {
  email: string;
  password: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  isOpen = signal(false);

  // later: replace with JWT/user model
  userEmail = signal<string | null>(null);
  isLoggedIn = computed(() => !!this.userEmail());

  open(): void { this.isOpen.set(true); }
  close(): void { this.isOpen.set(false); }

  // demo methods for now
  login(payload: LoginPayload): void {
    // TODO: call backend
    this.userEmail.set(payload.email);
    this.close();
  }

  register(payload: RegisterPayload): void {
    // TODO: call backend
    this.userEmail.set(payload.email);
    this.close();
  }

  logout(): void {
    this.userEmail.set(null);
  }
}
