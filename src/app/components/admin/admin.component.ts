import { Component } from '@angular/core';
import { AcrilicoService } from 'src/app/services/acrilico.service';
import { CabelloService } from 'src/app/services/cabello.service';
import { RostroService } from 'src/app/services/rostro.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {


  constructor(private servicio: RostroService){}
 

  dataRostro:any;
  dataAcrilico: any;
  dataCabello: any;

  ngOnInit() {
    this.servicio.getRostro().subscribe(rostro => {
      this.dataRostro= rostro;
    })

 

  }


  



}
