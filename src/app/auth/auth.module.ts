import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { UserProfileComponent } from './user-profile/user-profile.component';

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
  {
    path: 'profile-user',
  component: UserProfileComponent
  },
  {
    path: '**',
    redirectTo: 'login',
  }
]

@NgModule({
  declarations: [
    LoginComponent,
    RegistroComponent,
    UserProfileComponent
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
