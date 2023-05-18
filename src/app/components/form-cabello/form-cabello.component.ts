import { Component } from '@angular/core';
import { CabelloService } from 'src/app/services/cabello.service';

@Component({
  selector: 'app-form-cabello',
  templateUrl: './form-cabello.component.html',
  styleUrls: ['./form-cabello.component.css']
})
export class FormCabelloComponent {

  constructor(private servicio: CabelloService){}

 guardarCabello(id:string, nom: string, precio: string, cantidad: string){
  const ide:number=parseInt(id)
  const tem={
    "id":ide,
    "nombre": nom,
    "precio": precio,
    "cantidad": cantidad
  }
  this.servicio.postCabello(tem).subscribe();
 }

 actualizarCabello(id:string, nom: string, precio: string, cantidad: string){
  const ide:number= parseInt(id)
  const tem={
    "id":ide,
    "nombre": nom,
    "precio": precio,
    "cantidad": cantidad
  }
  this.servicio.putCabello(tem, ide).subscribe();
 }
 eliminarCabello(id:string){
  const ide: number=parseInt(id)
  this.servicio.deleteCabello(ide).subscribe();
 }


}
