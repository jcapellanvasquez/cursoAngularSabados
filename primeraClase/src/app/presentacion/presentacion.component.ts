import {Component, Input, OnInit} from '@angular/core';

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

  constructor() {
  }

  ngOnInit() {
  }

}
