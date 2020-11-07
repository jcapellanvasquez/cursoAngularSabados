import {Component} from '@angular/core';
import {LoginService} from './authenticate/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'primeraClase';

  public puesto: string = 'Profesor';

  constructor(public loginService: LoginService) {
  }

  public escucharEvento(nombre: string) {
    alert(nombre);
  }

  public logout() {
    this.loginService.logout();
  }
}
