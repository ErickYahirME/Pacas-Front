import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { login, user, userGeneral, userResponse } from '../interface';
import { Observable } from 'rxjs';
import { environment} from 'src/environments/environment';

const token = localStorage.getItem('token');
const headers = new HttpHeaders({
  'Authorization': `Bearer ${token}`
});

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  api = 'http://127.0.0.1:8000/api/';

  constructor(
    private http: HttpClient
  ) { }

  login(login: login):Observable<userResponse>{
    return this.http.post<userResponse>(`${this.api}login`, login);
  }

  register(register: user):Observable<Request>{
    return this.http.post<Request>(`${this.api}register`, register);
  }

  profileUser(){
    return this.http.get(`${this.api}profile`, {headers});
  }

  logout(){
    return this.http.post(`${this.api}logout`,{headers})
  }
}
