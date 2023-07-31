import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecuperarPassComponent } from './recuperar-pass/recuperar-pass.component';
import { VentasPComponent } from './ventas-p/ventas-p.component';
import { FooterComponent } from './footer/footer.component';
import { ListaClotheComponent } from './Crud-Clothes/lista-clothe/lista-clothe.component';
import { AddClotheComponent } from './Crud-Clothes/add-clothe/add-clothe.component';
import { ModificClotheComponent } from './Crud-Clothes/modific-clothe/modific-clothe.component';

@NgModule({
  declarations: [
    AppComponent,
    RecuperarPassComponent,
    VentasPComponent,
    FooterComponent,
    ListaClotheComponent,
    AddClotheComponent,
    ModificClotheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
