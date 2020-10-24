import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo1',
  templateUrl: './ejemplo1.component.html',
  styleUrls: ['./ejemplo1.component.css']
})
export class Ejemplo1Component implements OnInit {
  public objeto: any = {nombre: 'un nombre', apellido: 'un apellido', fechaInicial: new Date(), sueldo: 2000000, bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod'};
  constructor() { }

  ngOnInit() {
  }

}
