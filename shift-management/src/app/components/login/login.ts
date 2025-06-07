import { Component } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
})
export class LoginComponent {

  admin = {
    username: '',
    password: ''
  }
  constructor(private authService: AuthService) { }
  loginError: Boolean = false;

  onSubmit(form: any) {
    if (form.valid && !form.form.markAllAsTouched()) {
      this.loginError = false;
      this.authService.login(form.value);
    } else {
      this.loginError = true;
    }

  }
}
