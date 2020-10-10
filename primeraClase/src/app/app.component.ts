import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'primeraClase';

  public puesto: string = 'Profesor';

  public escucharEvento(nombre: string) {
    alert(nombre);
  }
}
