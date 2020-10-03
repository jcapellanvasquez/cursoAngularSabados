import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-directivas-structurales',
  templateUrl: './directivas-structurales.component.html',
  styleUrls: [
    './directivas-structurales.component.css',
  ]
})
export class DirectivasStructuralesComponent implements OnInit, OnChanges {
  public nombreEnTextbox: string = '';
  public nombres: any[] = [
    'Julio',
    'Maria',
    'Pedro',
    'Juan'
  ];

  public nuevoNombre: string = '';

  constructor() {

  }

  public ngOnInit() {
    console.log('ngOnInit');
  }

  public agregarNombre() {
    this.nombres.push(this.nuevoNombre);
    this.nuevoNombre = '';
  }

  public alertarNombre(nombre: string) {
    alert(nombre);
  }

  public ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
}
