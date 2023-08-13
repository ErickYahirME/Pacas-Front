import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComprasServiceService {

  api = 'http://localhost:3000/api';

  constructor(
    private http: HttpClient
    ) {}

  addPurchaseWithProducts(purchaseData: any): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.post(`${this.api}/addShoppingByUser`, purchaseData, { headers });
  }
}
