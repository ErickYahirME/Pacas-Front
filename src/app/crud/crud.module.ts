import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendedorComponent } from './vendedor/vendedor.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AddEditProductComponent } from './vendedor/add-edit-product/add-edit-product.component';
import { SharedModule } from '../shared/shared.module';
import { ClotheComponent } from './admin/clothe/clothe.component';
import { GenereComponent } from './admin/genere/genere.component';
import { RoleComponent } from './admin/role/role.component';
import { SizeComponent } from './admin/size/size.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {path: 'addProduct', component: AddEditProductComponent},
  {path: 'editProduct/:id', component: AddEditProductComponent},

  {path: 'addClothe', component: ClotheComponent},
  {path: 'addGenere', component: GenereComponent},
]


@NgModule({
  declarations: [
    VendedorComponent,
    AddEditProductComponent,
    ClotheComponent,
    GenereComponent,
    RoleComponent,
    SizeComponent,
    AdminComponent
  ],
  imports: [
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports: [
  VendedorComponent,
  AddEditProductComponent]
})
export class CrudModule { }
