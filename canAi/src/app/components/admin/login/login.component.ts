import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../services/admin.service';
import { Router } from '@angular/router';
import { AdminAuthService } from '../../../services/admin-auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: '../../../../assets/css/login.css'
})
export class LoginAdminComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  // isLoggedIn: boolean = false;
  loginMessage: string = '';

  constructor(
    private AdminauthService: AdminAuthService,
    private AdminService: AdminService,
    private router: Router
  ) { }

 
  onSubmit(): void {
    if (this.email && this.password) {
      this.AdminauthService.loginAdmin(this.email, this.password)
        .subscribe(
          (response: any) => {
            if (response && response.token) {
              this.AdminauthService.setTokenAdmin(response.token); // Guarda el token utilizando AuthService
              this.loginMessage = 'Loggeding Susessfull!'
              this.router.navigate(['/dashboardadmin']); // Redirige al dashboard después del login exitoso
            } else {
              this.errorMessage = 'Credenciales inválidas'; // Mensaje de error si las credenciales son incorrectas
            }
          },
          (error) => {
            if (error === 'Acceso Denegado!') {
              this.errorMessage = 'Acceso Denegado!'; // Mensaje de error si el usuario no tiene permisos de administrador
            }
            else if (error.status === 404) {
              this.errorMessage = 'Users no found';
            } else {

              this.router.navigate(['/admin'])
              this.errorMessage = 'Error en el servidor. Por favor, inténtelo de nuevo más tarde.'; // Manejo de errores HTTP
            }
          }
        );
    } else {
      this.errorMessage = 'Por favor, ingrese su correo electrónico y contraseña.';
    }
  }

  // onSubmit(): void {
  //   if (this.email && this.password) {
  //     this.AdminauthService.loginAdmin(this.email, this.password)
  //       .subscribe(
  //         (response: any) => {
  //           if (response && response.token) {
  //             this.AdminauthService.setTokenAdmin(response.token); // Guarda el token utilizando AuthService
  //             this.router.navigate(['/dashboardadmin']); // Redirige al dashboard después del login exitoso
  //           } else {
  //             this.errorMessage = 'Credenciales inválidas'; // Mensaje de error si las credenciales son incorrectas
  //           }
  //         },
  //         (error) => {
  //           console.error('Error en el login:', error);
  //           this.errorMessage = 'Error en el servidor. Por favor, inténtelo de nuevo más tarde.'; // Manejo de errores HTTP
  //         }
  //       );
  //   } else {
  //     this.errorMessage = 'Por favor, ingrese su correo electrónico y contraseña.';
  //   }
  // }
}