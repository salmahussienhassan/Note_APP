import { constant } from './../auth/constant';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private _HttpClient:HttpClient) { }

addNote(data:any):Observable<any>{

return this._HttpClient.post(`${constant.baseUrl}/api/v1/notes`,data) }

getUserNotes():Observable<any>{

    return this._HttpClient.get(`${constant.baseUrl}/api/v1/notes`) }

deleteNotes(id:string):Observable<any>{

      return this._HttpClient.delete(`${constant.baseUrl}/api/v1/notes/${id}`) }

updateNote(data:any,id:any):Observable<any>{

        return this._HttpClient.put(`${constant.baseUrl}/api/v1/notes/${id}`,data) }
}
