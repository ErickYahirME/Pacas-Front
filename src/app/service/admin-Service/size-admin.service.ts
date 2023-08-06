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
export class SizeAdminService {
  api = 'http://127.0.0.1:8000/api/';
  constructor(
    private http : HttpClient
  ) { }

  getSize():Observable<Request>{
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<Request>(`${this.api}talla`, {headers});
  }

  getSizeById(id:number):Observable<Request>{
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<Request>(`${this.api}talla/${id}`, {headers});
  }

  addSize(size:any):Observable<Request>{
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.post<Request>(`${this.api}addTalla`, size, {headers});
  }

  updateSize(id:number, size:any):Observable<Request>{
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.put<Request>(`${this.api}updateTalla/${id}`, size, {headers});
  }

  deleteSize(id:number):Observable<Request>{
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.delete<Request>(`${this.api}deleteTalla/${id}`, {headers});
  }
}
