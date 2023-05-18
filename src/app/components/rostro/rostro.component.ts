import { Component } from '@angular/core';
import { RostroService } from 'src/app/services/rostro.service';

@Component({
  selector: 'app-rostro',
  templateUrl: './rostro.component.html',
  styleUrls: ['./rostro.component.css']
})
export class RostroComponent {

  constructor(private servicio: RostroService) {}
  
  dataRostro: any;
  

  ngOnInit() {
    this.servicio.getRostro().subscribe(rostro => {
      this.dataRostro = rostro;
    })



  }
}