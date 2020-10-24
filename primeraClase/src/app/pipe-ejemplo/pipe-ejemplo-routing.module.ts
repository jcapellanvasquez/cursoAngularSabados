import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {Ejemplo1Component} from './ejemplo1/ejemplo1.component';

const routes: Routes = [
  {path: '', component: Ejemplo1Component},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PipeEjemploRoutingModule {
}
