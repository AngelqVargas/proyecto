import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ContactosComponent } from './components/contactos/contactos.component';
import { Error404Component } from './components/error404/error404.component';
import { ProductosComponent } from './components/productos/productos.component';
import { UbicacionComponent } from './components/ubicacion/ubicacion.component';
import { OfertasComponent } from './components/ofertas/ofertas.component';
import { RostroComponent } from './components/rostro/rostro.component';
import { AcrilicoComponent } from './components/acrilico/acrilico.component';
import { CabelloComponent } from './components/cabello/cabello.component';
import { AdminComponent } from './components/admin/admin.component';
import { FormRostroComponent } from './components/form-rostro/form-rostro.component';

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
  {path:'admin', component: AdminComponent},
  {path:'form-rotro', component: FormRostroComponent},

  { path: 'formRostro/:id', component:FormRostroComponent},
  {path:'rostro', component: RostroComponent},
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
