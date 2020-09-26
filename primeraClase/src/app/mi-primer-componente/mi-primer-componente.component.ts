import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-mi-primer-componente',
  templateUrl: './mi-primer-componente.component.html',
  styleUrls: ['./mi-primer-componente.component.css']
})
export class MiPrimerComponenteComponent implements OnInit {
  public nombre: string = 'Julio J. Capellan';
  public bio: string  = "Desarrollador web";
  public nombreEnTextbox: string = "";

  constructor() {
  }

  ngOnInit() {
  }

  public getFormatedName() {
    return 'Ing. ' + this.nombre;
  }

  public getFormatedNameByParam(honorifico: string) {
    //Utilizando interpolacion de string con backtrip
    return `${honorifico} ${this.nombre}`;
  }



}
