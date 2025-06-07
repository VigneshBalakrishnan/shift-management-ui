import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticated = true;
  private authSecretKey = 'Bearer Token';

  constructor(private router: Router) {
    this.isAuthenticated = !!localStorage.getItem('token');
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }

  login(admin: any): any {
    console.log(admin);
    
    localStorage.setItem('token','test123')
    this.router.navigateByUrl('/dashboard');
  }

  logout(): void {
    localStorage.removeItem(this.authSecretKey);
    this.isAuthenticated = false;
  }
}