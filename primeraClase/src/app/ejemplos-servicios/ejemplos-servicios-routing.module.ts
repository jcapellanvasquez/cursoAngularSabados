import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EjemploServicioComponent} from './ejemplo-servicio/ejemplo-servicio.component';

const routes: Routes = [
  {path:'', component:EjemploServicioComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EjemplosServiciosRoutingModule { }
