import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { PrivadoComponent } from './components/privado/privado.component';
import { LoginComponent } from './components/login/login.component';
import { LoginGuard } from './guards/login.guard';
import { ContactosComponent } from './components/contactos/contactos.component';
import { Error404Component } from './components/error404/error404.component';
import { ProductosComponent } from './components/productos/productos.component';
import { UbicacionComponent } from './components/ubicacion/ubicacion.component';
import { OfertasComponent } from './components/ofertas/ofertas.component';
import { RostroComponent } from './components/rostro/rostro.component';
import { AcrilicoComponent } from './components/acrilico/acrilico.component';
import { CabelloComponent } from './components/cabello/cabello.component';
import { RegistroComponent } from './components/registro/registro.component';


const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'nosotros', component: NosotrosComponent},
  {path:'contactos', component: ContactosComponent},
  {path:'ofertas', component: OfertasComponent},
  {path:'error404', component: Error404Component},
  {path:'productos', component: ProductosComponent},
  {path:'ubicacion', component: UbicacionComponent},
  {path:'cabello', component: CabelloComponent},
  {path:'acrilico', component: AcrilicoComponent},
  {path:'rostro', component: RostroComponent},
  {path:'login', component: LoginComponent},
  {path:'privado', component:PrivadoComponent, canActivate:[LoginGuard]},
  {path:'registro', component:RegistroComponent},
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }