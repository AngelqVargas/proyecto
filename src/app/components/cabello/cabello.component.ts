import { Component } from '@angular/core';
import { CabelloService } from 'src/app/services/cabello.service';

@Component({
  selector: 'app-cabello',
  templateUrl: './cabello.component.html',
  styleUrls: ['./cabello.component.css']
})
export class CabelloComponent {

  constructor(private servicio: CabelloService) {}
  
  dataCabello: any;

  ngOnInit() {
    this.servicio.getCabello().subscribe(cabello => {
      this.dataCabello = cabello;
    })
  }
}