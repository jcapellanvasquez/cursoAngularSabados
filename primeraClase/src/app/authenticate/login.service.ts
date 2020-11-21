import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AngularFireAuth} from '@angular/fire/auth';
import {Observable, of} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';

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

  public isLogin(): Observable<boolean> {

    return this.authService.authState.pipe(
      switchMap(
        user => of(user !== null)
      ),
      catchError(err => of(false))
    )
  }

}
