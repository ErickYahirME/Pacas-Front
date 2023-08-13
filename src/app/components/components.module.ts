import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { UserProfileComponent } from '../auth/user-profile/user-profile.component';
import { ServiceClientComponent } from './service-client/service-client.component';
import { TarjetaModalComponent } from './tarjeta-modal/tarjeta-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes = [

  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'profile-user',
  component: UserProfileComponent
  },
  {
    path: 'servicio-cliente',
    component: ServiceClientComponent
  }


]

@NgModule({
  declarations: [
    HomeComponent,
    CardComponent,
    ProductsComponent,
    UserProfileComponent,
    ServiceClientComponent,
    TarjetaModalComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    HomeComponent,
    CardComponent,
    ProductsComponent,
    UserProfileComponent,
    ServiceClientComponent,
    TarjetaModalComponent,
  ]
})
export class ComponentsModule { }
