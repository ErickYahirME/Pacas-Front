import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecuperarPassComponent } from './recuperar-pass/recuperar-pass.component';
import { VentasPComponent } from './ventas-p/ventas-p.component';

const routes: Routes = [
  {path:'recuperarpass', component: RecuperarPassComponent},
  {path:'ventasp', component: VentasPComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
