import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CabelloService {

  constructor(private http:HttpClient) { }

  private API_CABELLO='http://localhost:3000/Cuidado_capilar'

  getCabello():Observable <any>  {
    return this.http.get(this.API_CABELLO)
  }

  postRostro(user:any):Observable <any>  {
    return this.http.post(this.API_CABELLO, user)
  }
}