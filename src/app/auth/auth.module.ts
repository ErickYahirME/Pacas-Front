import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: 'login',
  component: LoginComponent
  },
  {
    path: 'register',
  component: RegistroComponent
  },
  // {
  //   path: 'forgot-password',
  // component:
  // },
  // {
  //   path: 'profile-user',
  // component:
  // },
  {
    path: '**',
    redirectTo: 'login',
  }
]

@NgModule({
  declarations: [
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule

  ],
  exports: [
    LoginComponent,
    RegistroComponent
  ]
})
export class AuthModule { }
