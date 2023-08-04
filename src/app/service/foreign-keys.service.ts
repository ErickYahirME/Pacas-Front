import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const token = localStorage.getItem('token');
const headers = new HttpHeaders({
  'Authorization': `Bearer ${token}`
});

@Injectable({
  providedIn: 'root'
})
export class ForeignKeysService {
  api = 'http://127.0.0.1:8000/api/';
  constructor(
    private http : HttpClient
  ) { }

  getSize(){
    return this.http.get(`${this.api}talla`, {headers});
  }

  getSizeById(id:number){
    return this.http.get(`${this.api}talla/${id}`, {headers});
  }

  getTypeClothes(){
    return this.http.get(`${this.api}tipoRopa`, {headers});
  }

  getTypeClothesById(id:number){
    return this.http.get(`${this.api}tipoRopa/${id}`, {headers});
  }
}
