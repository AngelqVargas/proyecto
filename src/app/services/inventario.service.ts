import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class InventarioService {

  constructor(private http:HttpClient) { }

  private API_INVENTARIO='http://localhost:3000/'

  getInventario():Observable <any>  {
    return this.http.get(this.API_INVENTARIO)
  }
}
