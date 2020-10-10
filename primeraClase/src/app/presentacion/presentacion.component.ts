import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.component.html',
  styleUrls: ['./presentacion.component.css']
})
export class PresentacionComponent implements OnInit {

  @Input()
  public nombre: string = '';

  @Input()
  public puesto: string = '';

  @Output()
  public  miEvento: EventEmitter<string> = new EventEmitter<string>();


  constructor() {
  }

  ngOnInit() {
  }

  public emitirEvento() {
    this.miEvento.emit(this.nombre);
  }

}
