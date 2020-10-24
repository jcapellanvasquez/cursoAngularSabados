import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipeEjemploRoutingModule } from './pipe-ejemplo-routing.module';
import { Ejemplo1Component } from './ejemplo1/ejemplo1.component';
import { CutTextPipe } from './cut-text.pipe';

@NgModule({
  declarations: [Ejemplo1Component, CutTextPipe],
  imports: [
    CommonModule,
    PipeEjemploRoutingModule
  ]
})
export class PipeEjemploModule { }
