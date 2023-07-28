import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToolsService {
  api = 'http://127.0.0.1:8000/api/';
  constructor(
    private http: HttpClient
  ) { }

  setToken(data:string){
    localStorage.setItem('token', data);
  }

  removeToken(data:string){
    localStorage.removeItem('token');
  }

  validarToken(token: string):Observable<Request>{
    return this.http.post<Request>(`${this.api}user/token`, {token});
  }



}
