import {Component, OnInit} from '@angular/core';
import {DataService} from '../../ejemplos-servicios/data.service';
import {LoginService} from '../login.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';
import {auth} from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public form: FormGroup;
  constructor(public loginService: LoginService,
              private formBuilder: FormBuilder,
              private router: Router,
              private auth: AngularFireAuth
  ) {
    this.form = this.formBuilder.group({
      username:[''],
      password: ['']
    });
  }

  ngOnInit() {

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
    this.auth.auth.signInWithPopup(new auth.GoogleAuthProvider())
  }

}
