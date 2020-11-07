import {Component, OnInit} from '@angular/core';
import {DataService} from '../../ejemplos-servicios/data.service';
import {LoginService} from '../login.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';
import {auth} from 'firebase/app';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public form: FormGroup;
  public user$: Observable<any>;
  constructor(public loginService: LoginService,
              private formBuilder: FormBuilder,
              private router: Router,
              private authService: AngularFireAuth
  ) {
    this.form = this.formBuilder.group({
      username:[''],
      password: ['']
    });

    this.user$ = this.authService.authState
  }

  ngOnInit() {

    if (this.user$) {
      this.user$.subscribe(console.log)
    }

  }

  login() {
    this.loginService.signIn().subscribe(users => {
      let usuarios: any[] = <any[]>users;
      if (usuarios.find( user => this.form.get('username').value === user.username)) {
        console.log('usuario encontrado');
        this.router.navigate(['/'])
      } else {
        console.log('usuario no encontrado')
      }
    });
  }

  loginWithGoogle() {
    this.authService.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

}
