import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RostroService {
  getAcrilico() {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) { }

  private API_ROSTRO='http://localhost:3000/Cuidado_facial'

  getRostro():Observable <any>  {
    return this.http.get(this.API_ROSTRO)
  }

  postRostro(user:any):Observable <any>  {
    return this.http.post(this.API_ROSTRO, user)
  }

  updateRostro(rostro: any): Observable <any>{
    this.API_ROSTRO= `${this.API_ROSTRO}/${rostro.id}`
    return this.http.put(this.API_ROSTRO, rostro)
  }
  deleteRostro(id: any): Observable <any>{
    this.API_ROSTRO= `${this.API_ROSTRO}/${id}`
    return this.http.delete(this.API_ROSTRO)
  }
}