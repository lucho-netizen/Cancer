import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';


@Injectable({ providedIn: 'root' })

export class RoleGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot  
  ):Observable<boolean> {
    const expectedRole = route.data['expectedRole'];
    return this.authService.getUserRole().pipe(
      take(1),
      map(role => {
        if (role !== expectedRole) {
          this.router.navigate(['/login']);
          return false;
        }
        return true;
      })
    );
  }
}