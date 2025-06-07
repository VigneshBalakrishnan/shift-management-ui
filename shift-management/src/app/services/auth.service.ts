import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticated = true;
  private authSecretKey = 'Bearer Token';

  constructor() {
    // this.isAuthenticated = !!localStorage.getItem(this.authSecretKey);
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }

  login(admin: any): boolean {
    console.log(admin);

    return true;

  }

  logout(): void {
    localStorage.removeItem(this.authSecretKey);
    this.isAuthenticated = false;
  }
}