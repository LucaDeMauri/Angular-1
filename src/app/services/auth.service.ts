import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = false;
  private userRole: string | null = null;

  constructor() {}

  // Simula il login con ruoli (admin o user)
  login(username: string, password: string): boolean {
    if (username === 'admin' && password === 'admin') {
      this.isAuthenticated = true;
      this.userRole = 'admin';
      return true;
    } else if (username === 'user' && password === 'user') {
      this.isAuthenticated = true;
      this.userRole = 'user';
      return true;
    }
    return false;
  }

  // Controlla se l'utente è autenticato
  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  // Controlla se l'utente è un amministratore
  isAdmin(): boolean {
    return this.userRole === 'admin';
  }

  // Esegue il logout
  logout(): void {
    this.isAuthenticated = false;
    this.userRole = null;
  }
}
