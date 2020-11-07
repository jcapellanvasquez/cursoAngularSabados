import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EjemplosServiciosRoutingModule } from './ejemplos-servicios-routing.module';
import { EjemploServicioComponent } from './ejemplo-servicio/ejemplo-servicio.component';
import {DataService} from './data.service';

@NgModule({
  declarations: [EjemploServicioComponent],
  imports: [
    CommonModule,
    EjemplosServiciosRoutingModule
  ],
})
export class EjemplosServiciosModule { }
