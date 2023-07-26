import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { login, user, userGeneral, userResponse } from '../interface';
import { Observable } from 'rxjs';
import { environment} from 'src/environments/environment';


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
    return this.http.get(`${this.api}profile`);
  }


  // validarToken(token: string):Observable<Request>{
  //   return this.http.post<Request>(`${this.api}user/token`, {token});
  // }

  // updateUser(id:number, updateUser : user){
  //   return this.http.put(`${this.api}user/${id}`, updateUser);
  // }
}
