import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MethodPayServiceService {

  api = 'http://127.0.0.1:8000/api/';
  constructor(
    private http : HttpClient
  ) { }

  addMethodPay(method:any){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
    });
    return this.http.post(`${this.api}addPaymentMethod`, method, {headers});
  }
}
