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
export class GenereAdminService {

  api = 'http://127.0.0.1:8000/api/';

  constructor(
    private http : HttpClient
  ) { }

  getGenere(){
    return this.http.get(`${this.api}genero`, {headers});
  }

  getGenereById(id:number):Observable<Request>{
    return this.http.get<Request>(`${this.api}genero/${id}`, {headers});
  }

  addGenere(genere:any):Observable<Request>{
    return this.http.post<Request>(`${this.api}addGenero`, genere, {headers});
  }

  updateGenere(id:number, genere:any):Observable<Request>{
    return this.http.put<Request>(`${this.api}updateGenero/${id}`, genere, {headers});
  }

  deleteGenere(id:number):Observable<Request>{
    return this.http.delete<Request>(`${this.api}deleteGenero/${id}`, {headers});
  }
}
