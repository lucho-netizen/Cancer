import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AdminAuthService } from '../../services/admin-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private adminAuthService: AdminAuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (this.authService.isLoggedIn()){
      this.logout();
    } else if(this.adminAuthService.isLoggedInAdmin()){
      this.logoutAdmin();
    }
    else {
      console.error('Sesión no identificada o inválida');
      this.router.navigate(['/login']); // Redirigir a la página de login por precaución
    }
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  logoutAdmin(): void {
    this.adminAuthService.logoutAdmin();
    this.router.navigate(['/loginadmin']);
  }
}
