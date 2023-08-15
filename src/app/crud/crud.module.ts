import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendedorComponent } from './vendedor/vendedor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AddEditProductComponent } from './vendedor/add-edit-product/add-edit-product.component';
import { SharedModule } from '../shared/shared.module';
import { ClotheComponent } from './admin/clothe/clothe.component';
import { GenereComponent } from './admin/genere/genere.component';
import { RoleComponent } from './admin/role/role.component';
import { SizeComponent } from './admin/size/size.component';
import { AdminComponent } from './admin/admin.component';
import { ShowSizeComponent } from './admin/show-size/show-size.component';
import { EditSizeComponent } from './admin/edit-size/edit-size.component';

import { AdminCrudComponent } from './vendedor/admin-crud/admin-crud.component';

import { CrudGeneroComponent } from './admin/crud-genero/crud-genero.component';
import { HttpClientModule } from '@angular/common/http';
import { CrudClotheComponent } from './admin/crud-clothe/crud-clothe.component';
import { ShowRoleComponent } from './admin/show-role/show-role.component';
import { EditRoleComponent } from './admin/edit-role/edit-role.component';
import { EditGenereComponent } from './admin/edit-genere/edit-genere.component';
import { EditClotheComponent } from './admin/edit-clothe/edit-clothe.component';


const routes: Routes = [
  {
    path: 'inicio-Vendedor',
    component: AdminCrudComponent
  },
  {
  path: 'addProduct',
  component: AddEditProductComponent
  },
  {
  path: 'editProduct/:id',
  component: AddEditProductComponent
  },


  // Rutas de tipo de ropa 
  {
  path: 'addClothe',
  component: ClotheComponent
  },
  {
  path: 'editClothe/:id',
  component: EditClotheComponent
  },

  {
    path: 'crudClothe', 
    component: CrudClotheComponent
  },

  // Rutas de Genero
  {
    path: 'addGenere', 
    component: GenereComponent
  },
  {
    path: 'editGenere/:id', 
    component: EditGenereComponent
  },
  {
    path: 'crudGenere', 
    component: CrudGeneroComponent
  },

  // Rutas de talla
  {
    path: 'addSize',
    component: SizeComponent
  },
  {
    path: 'showSize',
    component: ShowSizeComponent
  },
  {
    path: 'editSize/:id',
    component: EditSizeComponent
  },

  // Rutas de rol
  {
    path: 'addRole',
    component: RoleComponent
  },
  {
    path: 'showRole',
    component: ShowRoleComponent
  },
  {
    path: 'editRole/:id',
    component: EditRoleComponent
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
    ShowSizeComponent,
    EditSizeComponent,
    ShowRoleComponent,
    EditRoleComponent,


    CrudGeneroComponent,
        CrudClotheComponent,
        EditGenereComponent,
        EditClotheComponent,

  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    FormsModule,
    HttpClientModule

  ],
  exports: [
  VendedorComponent,
  AddEditProductComponent]
})
export class CrudModule { }
