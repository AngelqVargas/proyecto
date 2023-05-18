import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RostroService } from 'src/app/services/rostro.service';

@Component({
  selector: 'app-form-rostro',
  templateUrl: './form-rostro.component.html',
  styleUrls: ['./form-rostro.component.css']
})
export class FormRostroComponent {
  constructor(private servicio: RostroService){}

 guardarRostro (id:string, nom: string, precio: string, cantidad: string){
  const ide:number=parseInt(id)
  const tem={
    "id":ide,
    "nombre": nom,
    "precio": precio,
    "cantidad": cantidad
  }
  this.servicio.postRostro(tem).subscribe();
 }

 actualizarRostro(id:string, nom: string, precio: string, cantidad: string){
  const ide:number= parseInt(id)
  const tem={
    "id":ide,
    "nombre": nom,
    "precio": precio,
    "cantidad": cantidad
  }
  this.servicio.putRostro(tem, ide).subscribe();
 }
 eliminarRostro(id:string){
  const ide: number=parseInt(id)
  this.servicio.deleteRostro(ide).subscribe();
 }


}
