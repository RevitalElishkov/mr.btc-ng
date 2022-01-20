import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { MainAppComponent } from './pages/main-app/main-app.component';

const routes: Routes = [
  { path: 'contact/:id', component: ContactDetailsComponent ,canActivate: [AuthGuard] },
  { path: 'contact', component: ContactPageComponent, canActivate: [AuthGuard]} ,
  { path: 'edit/:id', component: ContactEditComponent, canActivate: [AuthGuard]},
  { path: 'edit', component: ContactEditComponent, canActivate: [AuthGuard]},
  { path: 'home', component: MainAppComponent, canActivate: [AuthGuard]},
  { path: '', component: LoginPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
