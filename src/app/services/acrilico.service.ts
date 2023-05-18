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

  postAcrilico(user:any):Observable <any>  {
    return this.http.post(this.API_ACRILICO, user)
  }
  putAcrilico(user: any, id:number): Observable <any>{
    this.API_ACRILICO= `${this.API_ACRILICO}/${user.id}`
    
    return this.http.put(this.API_ACRILICO, user)
  }
  deleteAcrilico(id: number): Observable <any>{
    this.API_ACRILICO= `${this.API_ACRILICO}/${id}`
    return this.http.delete(this.API_ACRILICO)
  }

}