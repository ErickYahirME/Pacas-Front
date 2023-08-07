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

import { AdminCrudComponent } from './vendedor/admin-crud/admin-crud.component';

import { CrudGeneroComponent } from './admin/crud-genero/crud-genero.component';
import { HttpClientModule } from '@angular/common/http';
import { CrudClotheComponent } from './admin/crud-clothe/crud-clothe.component';


const routes: Routes = [
  {
    path: 'inicio-Vendedor',
    component: AdminCrudComponent
  },
  {
  path: 'addProduct/id',
  component: AddEditProductComponent
  },
  {
  path: 'editProduct/:id',
  component: AddEditProductComponent
  },


  {
  path: 'addClothe/id',
  component: ClotheComponent
  },
  {
  path: 'editClothe/id',
  component: ClotheComponent
  },

  {path: 'addClothe', component: ClotheComponent},

  {
    path: 'addGenere/id', 
    component: GenereComponent
  },
  {
    path: 'editGenere/id', 
    component: GenereComponent
  },
  {
    path: 'crudGenere', 
    component: CrudGeneroComponent
  },

]


@NgModule({
  declarations: [
    VendedorComponent,
    AddEditProductComponent,
    ClotheComponent,
    GenereComponent,
    RoleComponent,
    SizeComponent,
    AdminComponent,

    AdminCrudComponent,


    CrudGeneroComponent,
        CrudClotheComponent,

  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,


    HttpClientModule

  ],
  exports: [
  VendedorComponent,
  AddEditProductComponent]
})
export class CrudModule { }
