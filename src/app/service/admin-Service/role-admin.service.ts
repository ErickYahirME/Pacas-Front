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
export class RoleAdminService {
  api = 'http://127.0.0.1:8000/api/';
  constructor(
    private http : HttpClient
  ) { }

  getRole():Observable<Request>{
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<Request>(`${this.api}role`, {headers});
  }

  getRoleById(id:number):Observable<Request>{
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<Request>(`${this.api}role/${id}`, {headers});
  }

  addRole(role:any):Observable<Request>{
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.post<Request>(`${this.api}addRole`, role, {headers});
  }

  updateRole(id:number, role:any):Observable<Request>{
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.put<Request>(`${this.api}updateRole/${id}`, role, {headers});
  }

  deleteRole(id:number):Observable<Request>{
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.delete<Request>(`${this.api}deleteRole/${id}`, {headers});
  }
}
