import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CajeroComponent } from './cajero/cajero.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';

@NgModule({
  declarations: [
    AppComponent,
    CajeroComponent,
    InicioSesionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
