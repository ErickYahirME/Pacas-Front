import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterLink, RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  {
    path: 'header',
  component: HeaderComponent
  },
  {
    path: 'footer',
  component: FooterComponent
  },
  // {
  //   path: '**',
  //   redirectTo: 'login',
  // }
]

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    RouterLink
  ],
  exports: [
    HeaderComponent,
    FooterComponent
    ]

})
export class SharedModule { }
