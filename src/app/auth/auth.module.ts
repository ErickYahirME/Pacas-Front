import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';

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
  //   path: '**',
  //   redirectTo: 'login',
  // }
]

@NgModule({
  declarations: [
    LoginComponent,
    RegistroComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    ComponentsModule

  ],
  exports: [
    LoginComponent,
    RegistroComponent
  ]
})
export class AuthModule { }
