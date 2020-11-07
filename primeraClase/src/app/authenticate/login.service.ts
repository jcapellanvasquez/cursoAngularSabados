import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AngularFireAuth} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, public authService: AngularFireAuth) { }

  public signIn() {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }

  public logout() {
    this.authService.auth.signOut();
  }

}
