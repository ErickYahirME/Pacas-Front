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
export class ProductService {

  api = 'http://127.0.0.1:8000/api/';
  constructor(
    private http : HttpClient
  ) { }

  getProduct():Observable<Request>{
    return this.http.get<Request>(`${this.api}allProduct`);
  }

  getProductById(id:number):Observable<Request>{
    return this.http.get<Request>(`${this.api}product/${id}`);
  }

  addProduct(product:any):Observable<Request>{
    return this.http.post<Request>(`${this.api}addProduct`, product);
  }

  updateProduct(product:any):Observable<Request>{
    return this.http.put<Request>(`${this.api}updateProduct`, product);
  }

  deleteProduct(id:number):Observable<Request>{
    return this.http.delete<Request>(`${this.api}deleteProduct/${id}`);
  }

  getProductByAuthor(authorId:number):Observable<Request>{
    return this.http.get<Request>(`${this.api}product/author/${authorId}`);
  }

}
