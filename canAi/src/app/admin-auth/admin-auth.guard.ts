import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AdminAuthService } from '../services/admin-auth.service'; // Asegúrate de que el servicio AdminAuthService esté importado correctamente

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {

  constructor(
    private adminAuthService: AdminAuthService,
    private router: Router
  ) {}

  canActivate(): boolean {
    if (this.adminAuthService.isLoggedInAdmin()) {
      return true; // Permite la navegación si el administrador está autenticado
    } else {
      this.router.navigate(['/loginadmin']); // Redirige al login del admin si no está autenticado
      return false;
    }
  }
}
