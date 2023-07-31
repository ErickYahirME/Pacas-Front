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
    //JSON.parse(localStorage.getItem('favoritos')  || '[]') || [];
    localStorage.setItem('token', data || '[]' );
  }

  getToken(){
    return localStorage.getItem('token' || '[]');
  }

  removeToken(data:string){
    localStorage.removeItem('token');
  }

  validarToken(token: string):Observable<Boolean>{
    return this.http.post<Boolean>(`${this.api}validarToken`, {token});
  }

  getIdUser(id:number){
    localStorage.setItem('id', id.toString());
  }


}
