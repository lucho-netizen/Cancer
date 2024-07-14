import { Component } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrl: '../../../../assets/css/login.css'
})
export class AdduserComponent {

  nombre: string = '';
  apellido: string = '';
  tipo_documento: string = '';
  phone_number: number = 0;
  identification: number = 0;
  email: string = '';
  edad: number = 0;
  peso: number = 0;
  correo: string = '';
  password: string = '';
  id_role: number = 1;
  estado: number = 1;
  errorMessage: string = '';


  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router

  ) { }

  onSubmit(): void {
    if (this.nombre &&
      this.apellido
      && this.tipo_documento
      && this.phone_number
      && this.identification
      && this.edad
      && this.email
      && this.password
      && this.id_role
      && this.estado) {
      this.authService.addUser(
        this.nombre,
        this.apellido,
        this.tipo_documento,
        this.phone_number,
        this.identification,
        this.email,
        this.edad,
        this.peso,
        this.password,
        this.id_role,
        this.estado
      ).subscribe(

        (response: any) => {
          if (response && response.token) {
            this.authService.setToken(response.token); // Guarda el token utilizando AuthService
            this.router.navigate(['/dashboard']); // Redirige al dashboard después del registro exitoso
          }
          else {
            this.errorMessage = 'Error al Registrarse!'
          }
        },
        (error) => {
          console.error('Error en el login:', error);
          this.errorMessage = 'Error en el servidor. Por favor, inténtelo de nuevo más tarde.'; // Manejo de errores HTTP
        }
      );
    } else {
      this.errorMessage = 'Por favor, ingrese su correo electrónico y contraseña.';
    }
  }
}