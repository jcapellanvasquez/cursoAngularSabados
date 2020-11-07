import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public nombre: string ='Data Service';
  constructor(private http: HttpClient) {

  }

  public getDatos() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }



}
