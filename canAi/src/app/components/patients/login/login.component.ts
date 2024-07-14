import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { UserService } from '../../../services/user.service';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: '../../../../assets/css/login.css'
})
export class LoginComponent {

  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router,
    private titleService: Title
  ) { }
 


  setTitle(newTitle: string){
    this.titleService.setTitle(newTitle);
  }

  getPageTitle(): string {
    return this.titleService.getTitle();
  }

  onSubmit(): void {
    if (this.email && this.password) {
      this.authService.login(this.email, this.password)
        .subscribe(
          (response: any) => {
            if (response && response.token) {
              this.authService.setToken(response.token); // Guarda el token utilizando AuthService
              this.router.navigate(['/dashboard']); // Redirige al dashboard después del login exitoso
            } else {
              this.errorMessage = 'Credenciales inválidas'; // Mensaje de error si las credenciales son incorrectas
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