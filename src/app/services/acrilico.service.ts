import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AcrilicoService {

  constructor(private http:HttpClient) { }

  private API_ACRILICO='http://localhost:3000/Esmaltes_de_unias'

  getAcrilico():Observable <any>  {
    return this.http.get(this.API_ACRILICO)
  }

  postRostro(user:any):Observable <any>  {
    return this.http.post(this.API_ACRILICO, user)
  }

}