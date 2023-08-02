import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecuperarPassComponent } from './recuperar-pass/recuperar-pass.component';
import { VentasPComponent } from './ventas-p/ventas-p.component';
import { FooterComponent } from './footer/footer.component';
import { ListaClotheComponent } from './Crud-Clothes/lista-clothe/lista-clothe.component';
import { AddClotheComponent } from './Crud-Clothes/add-clothe/add-clothe.component';
import { ModificClotheComponent } from './Crud-Clothes/modific-clothe/modific-clothe.component';

const routes: Routes = [
  {path:'recuperarpass', component: RecuperarPassComponent},
  {path:'ventasp', component: VentasPComponent},
  {path:'footer', component:FooterComponent},
  {path:'listasClothe', component:ListaClotheComponent},
  {path:'add-Clothe', component:AddClotheComponent},
  {path:'modificropa', component:ModificClotheComponent},
  {path:'listaderopa', component:ListaClotheComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
