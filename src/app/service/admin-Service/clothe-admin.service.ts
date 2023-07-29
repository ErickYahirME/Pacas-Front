import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const token = localStorage.getItem('token');
const headers = new HttpHeaders({
  'Authorization': `Bearer ${token}`
});

@Injectable({
  providedIn: 'root'
})
export class ClotheAdminService {
  api = 'http://127.0.0.1:8000/api/';

  constructor(
    private http : HttpClient
  ) { }

  getClothe():Observable<Request>{
    return this.http.get<Request>(`${this.api}tipoRopa`, {headers});
  }

  getClotheById(id:number):Observable<Request>{
    return this.http.get<Request>(`${this.api}tipoRopa/${id}`, {headers});
  }

  addClothe(clothe:any):Observable<Request>{
    return this.http.post<Request>(`${this.api}addTipoRopa`, clothe, {headers});
  }

  updateClothe(clothe:any, id:number):Observable<Request>{
    return this.http.put<Request>(`${this.api}updateTypeClothe/${id}`, clothe, {headers});
  }

  deleteClothe(id:number):Observable<Request>{
    return this.http.delete<Request>(`${this.api}deleteTypeClothe/${id}`, {headers});
  }
}
