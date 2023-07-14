import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarritoComponent } from './carrito/carrito.component';
import { ComprasComponent } from './compras/compras.component';
import { RouterModule } from '@angular/router';
import { CardCarritoComponent } from './card-carrito/card-carrito.component';

@NgModule({
  declarations: [
    AppComponent,
    CarritoComponent,
    ComprasComponent,
    CardCarritoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
