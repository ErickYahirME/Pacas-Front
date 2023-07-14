import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecuperarPassComponent } from './recuperar-pass/recuperar-pass.component';
import { VentasPComponent } from './ventas-p/ventas-p.component';

@NgModule({
  declarations: [
    AppComponent,
    RecuperarPassComponent,
    VentasPComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
