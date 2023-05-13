import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProductosComponent } from './components/productos/productos.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { OfertasComponent } from './components/ofertas/ofertas.component';
import { ContactosComponent } from './components/contactos/contactos.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Error404Component } from './components/error404/error404.component';
import { AcrilicoComponent } from './components/acrilico/acrilico.component';
import { CabelloComponent } from './components/cabello/cabello.component';
import { RostroComponent } from './components/rostro/rostro.component';
import { FooterComponent } from './components/footer/footer.component';
import { UbicacionComponent } from './components/ubicacion/ubicacion.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductosComponent,
    NosotrosComponent,
    OfertasComponent,
    ContactosComponent,
    NavbarComponent,
    Error404Component,
    AcrilicoComponent,
    CabelloComponent,
    RostroComponent,
    FooterComponent,
    UbicacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
