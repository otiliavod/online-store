import { CommonModule } from '@angular/common';
import {Component, inject, ViewEncapsulation} from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Dialog } from 'primeng/dialog';
import { InputText } from 'primeng/inputtext';
import { Password } from 'primeng/password';
import { ButtonModule } from 'primeng/button';

import { AuthService } from '../../services/auth.service';

type AuthMode = 'login' | 'register';

@Component({
  selector: 'app-login-modal',
  standalone: true,
  imports: [CommonModule, FormsModule, Dialog, InputText, Password, ButtonModule],
  templateUrl: './login-modal.html',
  styleUrl: './login-modal.scss',
  encapsulation: ViewEncapsulation.None,
})
export class LoginModal {
  auth = inject(AuthService);

  mode: AuthMode = 'login';

  loginEmail = '';
  loginPassword = '';

  regEmail = '';
  regPassword = '';

  setMode(m: AuthMode): void {
    this.mode = m;
  }

  submitLogin(): void {
    this.auth.login({ email: this.loginEmail.trim(), password: this.loginPassword });
  }

  submitRegister(): void {
    this.auth.register({ email: this.regEmail.trim(), password: this.regPassword });
  }
}
