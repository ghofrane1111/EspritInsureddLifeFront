import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:9090/api/auth/login';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    const url = `${this.apiUrl}?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`;
    return this.http.post(url, {});
  }

  saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
  }

  getUserRole(): string | null {
    const token = this.getToken();
    if (!token) return null;

    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload?.role || null;
    } catch (e) {
      console.error('Erreur lors du décodage du token', e);
      return null;
    }
  }
  forgotPassword(email: string): Observable<any> {
    const url = `http://localhost:9090/api/auth/forgot-password?email=${encodeURIComponent(email)}`;
    return this.http.post(url, {}); // Post sans body, juste pour respecter Swagger
  }
  resetPassword(token: string, newPassword: string): Observable<any> {
    const url = `http://localhost:9090/api/auth/reset-password?token=${encodeURIComponent(token)}&newPassword=${encodeURIComponent(newPassword)}`;
    return this.http.post(url, {}); // 👈 POST sans body
  }
}

