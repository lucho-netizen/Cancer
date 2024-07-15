import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
  export class AuthService {

    private TOKETN_KEY = '%TGBNME.9';
    private apiUrl = 'http://127.0.0.1:5000/api'; // Ajusta la URL del backend según tu configuración
    

    private loggedIn$ = new BehaviorSubject<boolean>(this.isLoggedIn());
    

    constructor(
      private http: HttpClient,
      private router: Router
    ) { }

    login(email: string, password: string): Observable<any> {
      return this.http.post<any>(`${this.apiUrl}/login`, { correo: email, password: password }).pipe(
        tap(response => {
          this.setToken(response.token);
          this.loggedIn$.next(true);
          })
      );
    }
    //Add user

    addUser(
      nombre: string,
      apellido: string,
      tipo_documento: string,
      phone_number: number,
      identification: number,
      email: string,
      edad: number,
      peso: number,
      password: string,
      id_role: number,
      estado: number) {
      return this.http.post<any>(`${this.apiUrl}/adduser`, {
        nombre: nombre,
        apellido: apellido,
        tipo_documento: tipo_documento,
        celular: phone_number,
        identificacion: identification,
        edad: edad,
        peso: peso,
        correo: email,
        password: password,
        id_role: id_role,
        estado: estado
      });
    }

    getToken(): string | null {
      return localStorage.getItem(this.TOKETN_KEY);
    }

    setToken(token: string): void {
      localStorage.setItem(this.TOKETN_KEY, token);
    }

    
    isLoggedIn(): boolean {
      //this.isLoggedIn$.asObservable(); //Si algo eliminar esta línea.
      return this.getToken() !== null;
    }

    getLoggedIn(): Observable<boolean> {
      return this.loggedIn$.asObservable();
    }

    
    logout(): void {
      localStorage.removeItem(this.TOKETN_KEY);
         this.router.navigate(['/login']);

    }

  }
