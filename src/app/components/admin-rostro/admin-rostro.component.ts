import { Component } from '@angular/core';
import { RostroService } from 'src/app/services/rostro.service';

@Component({
  selector: 'app-admin-rostro',
  templateUrl: './admin-rostro.component.html',
  styleUrls: ['./admin-rostro.component.css']
})
export class AdminRostroComponent {
  constructor(private servicio: RostroService) {}

  dataRostro: any;
  ngOnInit() {
    this.servicio.getRostro().subscribe(rostro => {
      this.dataRostro= rostro;
    })

 

  }

}
