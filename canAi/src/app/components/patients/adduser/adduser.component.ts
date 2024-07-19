import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrl: '../../../../assets/css/login.css'
})
export class AdduserComponent  implements OnInit{

  addUserForm: FormGroup;
  errorMessage: string = '';



  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ){
    this.addUserForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: [''],
      tipo_documento: [''],
      celular: ['', Validators.required],
      identificacion: [''],
      edad: [''],
      peso: [''],
      correo: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['']
    }, { validator: this.passwordMatchValidator });
  }

  
    ngOnInit(): void {}
  
    passwordMatchValidator(formGroup: FormGroup) {
      const password = formGroup.get('password')?.value;
      const confirmPassword = formGroup.get('confirmPassword')?.value;
      if (password !== confirmPassword) {
        formGroup.get('confirmPassword')?.setErrors({ passwordMismatch: true });
      } else {
        formGroup.get('confirmPassword')?.setErrors(null);
      }
      return null;
    }

    onSubmit(): void {
      if (this.addUserForm.valid) {
        const { nombre, apellido, tipo_documento, celular, identificacion, edad, peso, correo, password, id_role, estado } = this.addUserForm.value;
        this.authService.addUser(
          nombre,
          apellido,
          tipo_documento,
          celular,
          identificacion,
          correo,
          edad,
          peso,
          password,
          id_role,
          estado
        ).subscribe(
          (response: any) => {
            if (response && response.token) {
              this.authService.setToken(response.token); // Guarda el token utilizando AuthService
              this.router.navigate(['/dashboard']); // Redirige al dashboard después del registro exitoso
            } else {
              this.errorMessage = 'Error al Registrarse!';
            }
          },
          (error) => {
            console.error('Error en el login:', error);
            this.errorMessage = 'Error en el servidor. Por favor, inténtelo de nuevo más tarde.'; // Manejo de errores HTTP
          }
        );
      } else {
        this.errorMessage = 'Por favor, complete todos los campos requeridos.';
      }
    }
  }