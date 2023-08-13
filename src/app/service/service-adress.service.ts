import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceAdressService {

  api = 'http://127.0.0.1:8000/api/';

  constructor(
    private http: HttpClient
  ) { }

  getAdressByIdUser(id:number){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<any>(`${this.api}getAddressByUser/${id}`, { headers });
  }

  addAdress(address:any){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.post<any>(`${this.api}addAddress`, address, { headers });
  }

  }


