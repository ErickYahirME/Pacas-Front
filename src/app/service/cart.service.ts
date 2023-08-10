import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// const token = localStorage.getItem('token');
// const headers = new HttpHeaders({
//   'Authorization': `Bearer ${token}`
// });

@Injectable({
  providedIn: 'root'
})
export class CartService {
  api = 'http://127.0.0.1:8000/api/';
  constructor(
    private http : HttpClient
  ) { }

  getCartById(id: number):Observable<Request>{
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<Request>(`${this.api}cart/${id}`, {headers});
  }

  getCartByIdUser(id: number):Observable<Request>{
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<Request>(`${this.api}cart/user/${id}`, {headers});
  }

  addCart(cart: any):Observable<Request>{
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.post<Request>(`${this.api}addCart`, cart, {headers});
  }

  updateCart(id:number,cart: any):Observable<Request>{
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.put<Request>(`${this.api}updateCart/${id}`, cart, {headers});
  }

  deleteCart(id: number){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.delete(`${this.api}deleteCart/${id}`, {headers});
  }
}
