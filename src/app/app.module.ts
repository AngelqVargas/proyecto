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
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './components/admin/admin.component';
import { FormComponent } from './components/form/form.component';
import { AdminRostroComponent } from './components/admin-rostro/admin-rostro.component';
import { AdminAcrilicoComponent } from './components/admin-acrilico/admin-acrilico.component';
import { AdminCabelloComponent } from './components/admin-cabello/admin-cabello.component';
import { AdminCabellolsComponent } from './components/admin-cabellols/admin-cabellols.component';
import { FormRostroComponent } from './components/form-rostro/form-rostro.component'

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
    UbicacionComponent,
    AdminComponent,
    FormComponent,
    AdminRostroComponent,
    AdminAcrilicoComponent,
    AdminCabelloComponent,
    AdminCabellolsComponent,
    FormRostroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
