import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminAuthService } from '../../../services/admin-auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: '../../../../assets/css/login.css'
})
export class LoginAdminComponent implements OnInit {
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  loginMessage: string = '';

  constructor(
    private AdminauthService: AdminAuthService,
     private router: Router
  ) { }
  
  // Este método es necesario para implementar OnInit en Angular
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

 
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
            if (error.status === 403) {
              this.errorMessage = 'Acceso no autorizado';
            } if (error.status === 404) {
              this.errorMessage = 'Usuario no encontrado';
            } else {
              this.errorMessage = 'Error al iniciar sesión';
            }
          }
        );
    } else {
      this.errorMessage = 'Por favor, ingrese su correo electrónico y contraseña.';
    }
  }

}