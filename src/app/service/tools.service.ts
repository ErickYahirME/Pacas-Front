import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToolsService {

  constructor(
    private http: HttpClient
  ) { }



  setToken(data:string){
    localStorage.setItem('token', data);
  }


}
