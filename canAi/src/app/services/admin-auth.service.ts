import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthService {

  private TOKETN_KEY = '%TGBNME.9.S$';

  private adminApiUrl = 'http://127.0.0.1:5000/apia'; // URL específica para el admin

  constructor(
    private http: HttpClient,
    private router: Router
    ) { }

  
    loginAdmin(email: string, password: string) {
    return this.http.post<any>(`${this.adminApiUrl}/loginadmin`, { correo: email, password: password })
    .pipe(
      tap(response => {
        if(response && response.token){
          this.setTokenAdmin(response.token);
          // this.router.navigate(['/dashboardadmin'])
        }
      }),
      catchError((error)=> {
        if (error.status === 403){
          return throwError('Acceso Denegado!')

        } else if 
           (error.status === 404){
          return throwError('Users no found');
        }
          return throwError('Error al iniciar sesión!');
      })
    );
  }
  
  getTokenAdmin(): string | null  {
    return localStorage.getItem(this.TOKETN_KEY);
  }

  setTokenAdmin(token: string):void {
    localStorage.setItem(this.TOKETN_KEY, token);
  }

  isLoggedInAdmin(): boolean {
    return this.getTokenAdmin() !== null;
  }

  logoutAdmin(): void {
    localStorage.removeItem(this.TOKETN_KEY);
    this.router.navigate(['/loginadmin'])
  }
}
