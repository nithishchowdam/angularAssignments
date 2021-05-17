import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetaildataService{

  constructor(private hc2:HttpClient) { }
  getClientDetailData():Observable<any>{
    return this.hc2.get('https://reqres.in/api/unknown')
  }
}
