import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { PrincipalComponent } from './pages/compartilhado/principal/principal.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes), LoginComponent, HomeComponent, PrincipalComponent],
  exports: [RouterModule]
})
export class AppRoutingModule { }
