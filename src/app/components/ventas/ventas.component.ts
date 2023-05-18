import { Component } from '@angular/core';
import { CarritoService } from 'src/app/services/carrito.service';
import { RostroService } from 'src/app/services/rostro.service';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent {
  constructor(private servicio:  RostroService, private carrito:  CarritoService ) {}
  
  dataVentas: any;
 

  ngOnInit() {
    this.servicio.getRostro().subscribe(rostro => {
      this.dataVentas = rostro;
    })



  }



}
