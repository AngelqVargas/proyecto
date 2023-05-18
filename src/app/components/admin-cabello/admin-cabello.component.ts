import { Component } from '@angular/core';
import { CabelloService } from 'src/app/services/cabello.service';

@Component({
  selector: 'app-admin-cabello',
  templateUrl: './admin-cabello.component.html',
  styleUrls: ['./admin-cabello.component.css']
})
export class AdminCabelloComponent {
  constructor(private servicio: CabelloService) {}

  dataCabello: any;
  ngOnInit() {
    this.servicio.getCabello().subscribe(cabello => {
      this.dataCabello= cabello;
    })

 

  }

}
