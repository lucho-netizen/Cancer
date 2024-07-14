import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/patients/nav/nav.component';
import { AdduserComponent } from './components/patients/adduser/adduser.component';
import { LoginComponent } from './components/patients/login/login.component';
import { LoginAdminComponent } from './components/admin/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { ChatbotComponent } from './components/patients/chatbot/chatbot.component';
import { DashboardComponent } from './components/patients/dashboard/dashboard.component';
import { AdminDashboardComponent } from './components/admin/dashboard/dashboard/dashboard.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/patients/footer/footer.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { AdminAuthGuard } from './admin-auth/admin-auth.guard'; // Importa el guardia de rutas
import { AdminPatientsComponent } from './components/admin/dashboard/patients/patients.component';
import { AdminNavComponent } from './components/admin/nav/nav.component';
import { PatientService } from './services/patient/patient.service';




@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AdduserComponent,
    LoginComponent,
    LoginAdminComponent,
    ChatbotComponent,
    FooterComponent,
    LogoutComponent,
    DashboardComponent,
    AdminDashboardComponent,
    AdminPatientsComponent,
    AdminNavComponent
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'index', component: AppComponent },
      { path: 'login', component: LoginComponent },
      { path: 'adduser', component: AdduserComponent },  // Asegúrate de tener estos componentes
      { path: 'admin', component: LoginAdminComponent },  // Asegúrate de tener estos componentes
      { path: 'dashboard', component: DashboardComponent },  // Ruta de redirección después del login exitoso
      { path: 'dashboardadmin', component: AdminDashboardComponent},
      { path: '', redirectTo: '/index', pathMatch: 'full' }
    ])
    

  ],

  bootstrap: [AppComponent, AdminPatientsComponent],

  providers: [
    provideAnimationsAsync(),
    PatientService
  
  ]
  
})
export class AppModule { }
