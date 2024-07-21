import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private Urls = 'htpp://127.0.0.1:5000';
  private UrlsOuth = 'http://127.0.0.1:5000' //from google


  constructor(private http:HttpClient) { }

  login(email: string, password: string) {
    return this.http.post<any>(`${this.Urls}/api/login`, {correo: email, password: password});
    }

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
      estado: number){
        return this.http.post<any>(`${this.Urls}/adduser`, {
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

      createUser(email: string, name: string, googleId: string): Observable<any> {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const body = { email, name, googleId };
  
        return this.http.post<any>(`${this.UrlsOuth}/api/users/google`, body, { headers });
      }
}
