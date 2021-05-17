import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor(private hc1:HttpClient) { }
  getClientUserData():Observable<any>{
    return this.hc1.get('https://jsonplaceholder.typicode.com/users')
  }

}
