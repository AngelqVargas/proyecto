import { Component } from '@angular/core';
import { AcrilicoService } from 'src/app/services/acrilico.service';

@Component({
  selector: 'app-acrilico',
  templateUrl: './acrilico.component.html',
  styleUrls: ['./acrilico.component.css']
})
export class AcrilicoComponent {

  constructor(private servicio: AcrilicoService) {}
  
  dataAcrilico: any;

  ngOnInit() {
    this.servicio.getAcrilico().subscribe(acrilico => {
      this.dataAcrilico = acrilico;
    })
  }
}