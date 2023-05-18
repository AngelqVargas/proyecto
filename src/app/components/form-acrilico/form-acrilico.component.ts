import { Component } from '@angular/core';
import { AcrilicoService } from 'src/app/services/acrilico.service';

@Component({
  selector: 'app-form-acrilico',
  templateUrl: './form-acrilico.component.html',
  styleUrls: ['./form-acrilico.component.css']
})
export class FormAcrilicoComponent {

  constructor(private servicio: AcrilicoService){}

 guardarAcrilico (id:string, nom: string, precio: string, cantidad: string){
  const ide:number=parseInt(id)
  const tem={
    "id":ide,
    "nombre": nom,
    "precio": precio,
    "cantidad": cantidad
  }
  this.servicio.postAcrilico(tem).subscribe();
 }

 actualizarAcrilico(id:string, nom: string, precio: string, cantidad: string){
  const ide:number= parseInt(id)
  const tem={
    "id":ide,
    "nombre": nom,
    "precio": precio,
    "cantidad": cantidad
  }
  this.servicio.putAcrilico(tem, ide).subscribe();
 }
 eliminarAcrilico(id:string){
  const ide: number=parseInt(id)
  this.servicio.deleteAcrilico(ide).subscribe();
 }


}
