import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { UserProfileComponent } from '../auth/user-profile/user-profile.component';

const routes = [

  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'profile-user',
  component: UserProfileComponent
  },


]

@NgModule({
  declarations: [
    HomeComponent,
    CardComponent,
    ProductsComponent,
    UserProfileComponent

  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    HomeComponent,
    CardComponent,
    ProductsComponent,
    UserProfileComponent
  ]
})
export class ComponentsModule { }
