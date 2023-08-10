import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CardCarritoComponent } from './card-carrito/card-carrito.component';
import { CarritoComponent } from './carrito/carrito.component';
import { ComprasComponent } from './compras/compras.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ProcederCompraComponent } from './proceder-compra/proceder-compra.component';

const routes: Routes = [
  {
    path: 'card-carrito',
  component: CardCarritoComponent
  },
  {
    path: 'carrito',
  component: CarritoComponent
  },
  {
    path: 'compras',
  component: ComprasComponent
  },
  {
    path: 'proceder-compra',
    component: ProcederCompraComponent
  },
  {
    path: '**',
    redirectTo: 'home/products',
  }
]

@NgModule({

  declarations: [
    CardCarritoComponent,
    CarritoComponent,
    ComprasComponent,
    ProcederCompraComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    SharedModule,
  ],
  exports: [
  CardCarritoComponent,
  CarritoComponent,
  ComprasComponent
  ]

})

export class ComprasModule { }
