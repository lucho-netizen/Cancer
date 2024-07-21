import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { UserService } from '../../../services/user.service';
import { Title } from '@angular/platform-browser';

// Google Oauth
import { SocialAuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';

declare const google: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: '../../../../assets/css/login.css'
})

export class LoginComponent implements OnInit { 

  email: string = '';
  password: string = '';
  errorMessage: string = '';
  user: SocialUser | undefined;
  loggedIn: boolean | undefined = false;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private GoogleAuthService: SocialAuthService,
    private router: Router,
    private titleService: Title
  ) { }
 


  setTitle(newTitle: string){
    this.titleService.setTitle(newTitle);
  }

  getPageTitle(): string {
    return this.titleService.getTitle();
  }

  // ngOnInit(): void {
  //   // this.GoogleAuthService.authState.subscribe((user) => {
  //   //   this.user = user;
  //   //   this.loggedIn = (user != null);
  //   //   console.log(this.user)
  //   // });

        //descomentar/    
  //   (window as any).onGoogleSignIn = (googleUser: any) => {
  //     const idToken = googleUser.getIdToken().id_token;
  //     this.authService.loginWithGoogle(idToken).subscribe(
  //       (response: any) => {
  //        console.log('Login Successful, token:', response.token);
  //        this.authService.setToken(response.token);
  //         this.router.navigate(['/dashboard']); // Redirige al dashboard después del login exitoso
  //       },
  //       (error: any) => {
  //         console.error('Error en el login:', error);
  //         this.errorMessage = 'Error en el servidor. Por favor, inténtelo de nuevo más tarde.'; // Manejo de errores HTTP
  //       }
  //     )
  //   }
   
  // }


  ngOnInit(): void {
    google.accounts.id.initialize({
      client_id: '236412742841-kb5urirqrtgs16j06m7sifcrgqu8psbf.apps.googleusercontent.com',
      callback: (response: any) => this.handleCredentialResponse(response)
    });
    google.accounts.id.renderButton(
      document.getElementById('buttonDiv'),
      { theme: 'outline', size: 'large' }  // customization attributes
    );
    google.accounts.id.prompt(); // also display the One Tap dialog
  }

  handleCredentialResponse(response: any) {
    this.authService.loginWithGoogle(response.credential).subscribe(
      (response: any) => {
        if(response && response.token) {
          this.authService.setToken(response.token);
          this.router.navigate(['/dashboard']);
        }
        else {
          this.errorMessage = 'Credenciales inválidas'; // Mensaje de error si las credenciales son incorrectas

        }
      },
      (error: any) => {
        console.error('Login failed:', error);
      }
    );
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

  // signInWithGoogle():void {
  //   this.GoogleSerive.signIn(GoogleLoginProvider.PROVIDER_ID)
  //    .then((user) => {
  //       console.log('Google Sign-in success', user);
  //       this.userService.createUser(user.email, user.name, user.id)
  //        .subscribe(
  //           (response: any) => {
  //             console.log('Usuario creado con éxito:', response);
  //             this.authService.setToken(response.token); // Guarda el token utilizando AuthService
  //             this.router.navigate(['/dashboard']); // Redirige al dashboard después del login exitoso
  //           },
  //           (error: any) => {
  //             console.error('Error en el registro:', error);
  //             this.errorMessage = 'Error en el servidor. Por favor, inténtelo de nuevo más tarde.'; // Manejo de errores HTTP
  //           }
  //         );
  //     })
  //    .catch((error) => console.error('Google Sign-in errror', error));
  // }

  
  // signInWithGoogle(): void {
  //   this.GoogleAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).catch((error) => {
  //     console.error('Google Sign-in error', error);
  //   });
  // }


}