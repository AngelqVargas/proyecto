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

  postCabello(user:any):Observable <any>  {
    return this.http.post(this.API_CABELLO, user)
  }
  putCabello(user: any, id:number): Observable <any>{
    this.API_CABELLO= `${this.API_CABELLO}/${user.id}`
    
    return this.http.put(this.API_CABELLO, user)
  }
  deleteCabello(id: number): Observable <any>{
    this.API_CABELLO= `${this.API_CABELLO}/${id}`
    return this.http.delete(this.API_CABELLO)
  }


}