import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes y Guards para Admin
import { LoginAdminComponent } from './components/admin/login/login.component';
import { AdminDashboardComponent } from './components/admin/dashboard/dashboard/dashboard.component';
import { AdminAuthGuard } from './admin-auth/admin-auth.guard';
import { AdminNavComponent } from './components/admin/nav/nav.component';
import { AdminPatientsComponent } from './components/admin/dashboard/patients/patients.component';
import { AdminReportComponent } from './components/admin/dashboard/reports/reports.component';




// Componentes y Guards para Patients
import { AppComponent } from './app.component';
import { NavComponent } from './components/patients/nav/nav.component';
import { AdduserComponent } from './components/patients/adduser/adduser.component';
import { LoginComponent } from './components/patients/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { ChatbotComponent } from './components/patients/chatbot/chatbot.component';
import { DashboardComponent } from './components/patients/dashboard/dashboard.component';
import { ChatComponent } from './components/patients/chat/chat.component';
import { AuthGuard } from './guards/auth.guard';
import { RoleGuard } from './guards/role.guard';

// Rutas
const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'index', component: AppComponent },
  { path: 'nav', component: NavComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard, RoleGuard], data: { expectRole: 'user' } },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'adduser', component: AdduserComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'chatbot', component: ChatbotComponent },
  // Rutas específicas para Admin
  { path: 'loginadmin', component: LoginAdminComponent },
  { path: 'dashboardadmin', component: AdminDashboardComponent, canActivate: [AdminAuthGuard], data: { title: 'Dashboard' } },
  { path: 'adminpatients', component: AdminPatientsComponent },
  { path: 'navadmin', component: AdminNavComponent },
  { path: 'adminreports', component: AdminReportComponent },
  { path: 'patients', component: AdminPatientsComponent },

  { path: '**', component: AppComponent }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
