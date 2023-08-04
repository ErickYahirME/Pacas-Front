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
export class RoleAdminService {
  api = 'http://127.0.0.1:8000/api/';

  constructor(
    private http : HttpClient
  ) { }
  
  //getRole():Observable<Request>{
    //return this.http.get<Request>(`${this.api}rol`, {headers});
 // }

  //getRoleById(id:number):Observable<Request>{
    //return this.http.get<Request>(`${this.api}rol/${id}`, {headers});
  //}

  //addRole(role:any):Observable<Request>{
    //return this.http.post<Request>(`${this.api}addrol`, role, {headers});
  //}

  //updateRole(role:any, id:number):Observable<Request>{
    //return this.http.put<Request>(`${this.api}updaterol/${id}`, role, {headers});
  //}

  //deleteRole(id:number):Observable<Request>{
    //return this.http.delete<Request>(`${this.api}deleterol/${id}`, {headers});
 // }
  
}
