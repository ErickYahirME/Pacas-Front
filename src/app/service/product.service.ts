import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { productGET } from '../product';

// const token = localStorage.getItem('token');
// const headers = new HttpHeaders({
//   'Authorization': `Bearer ${token}`
// });
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  api = 'http://127.0.0.1:8000/api/';
  constructor(
    private http : HttpClient
  ) { }

  getProduct():Observable<productGET[]>{
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
    });
    return this.http.get<productGET[]>(`${this.api}allProduct`, {headers});
  }

  getProductById(id:number):Observable<Request>{
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<Request>(`${this.api}product/${id}`, {headers});
  }

  addProduct(product:any):Observable<Request>{
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.post<Request>(`${this.api}addProduct`, product, {headers});
  }

  updateProduct(id:number,product:any):Observable<Request>{
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.put<Request>(`${this.api}updateProduct/${id}`, product, {headers});
  }

  deleteProduct(id:number):Observable<Request>{
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.delete<Request>(`${this.api}deleteProduct/${id}`, {headers});
  }

  getProductByAuthor(authorId:number):Observable<productGET[]>{
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<productGET[]>(`${this.api}product/author/${authorId}`, {headers});
  }

}
