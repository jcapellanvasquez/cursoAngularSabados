import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-ejemplo-servicio',
  templateUrl: './ejemplo-servicio.component.html',
  styleUrls: ['./ejemplo-servicio.component.css']
})
export class EjemploServicioComponent implements OnInit {

  constructor(public dataService: DataService) {
  }

  ngOnInit() {
  }

  buscarDatos() {
    this.dataService.getDatos().subscribe(function(datos) {
      console.log(datos);
    });
  }

}
