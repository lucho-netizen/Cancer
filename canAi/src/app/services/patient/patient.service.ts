import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private Urls = 'http://127.0.0.1:5000/apia/patients';

   constructor(
    private http: HttpClient
   ) {  }

   getPatients(): Observable<any> {
    return this.http.get<any>(this.Urls)
   }
}
