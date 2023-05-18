import { Component } from '@angular/core';
import { AcrilicoService } from 'src/app/services/acrilico.service';

@Component({
  selector: 'app-admin-acrilico',
  templateUrl: './admin-acrilico.component.html',
  styleUrls: ['./admin-acrilico.component.css']
})
export class AdminAcrilicoComponent {
  constructor(private servicio: AcrilicoService) {}

  dataAcrilico: any;
  ngOnInit() {
    this.servicio.getAcrilico().subscribe(acrilico => {
      this.dataAcrilico= acrilico;
    })

 

  }

}
