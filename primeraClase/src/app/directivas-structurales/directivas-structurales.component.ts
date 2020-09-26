import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-directivas-structurales',
  templateUrl: './directivas-structurales.component.html',
  styleUrls: [
    './directivas-structurales.component.css',
  ]
})
export class DirectivasStructuralesComponent implements OnInit {
  public nombreEnTextbox: string = '';
  public nombres: any[] = [
    'Julio',
    'Maria',
    'Pedro',
    'Juan'
  ];

  constructor() {

  }

  ngOnInit() {
  }

}
