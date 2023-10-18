import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { constant } from './constant';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient,private _Router:Router) { }

login(data:any):Observable<any>{
  return this._HttpClient.post(`${constant.baseUrl}/api/v1/users/signIn`,data)
}

signUp(data:any):Observable<any>{
  return this._HttpClient.post(`${constant.baseUrl}/api/v1/users/signUp`,data)
}

logOut(){
  localStorage.removeItem('token')
  this._Router.navigate(['/login'])
}
}
