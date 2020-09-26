import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MiPrimerComponenteComponent } from './mi-primer-componente/mi-primer-componente.component';
import {FormsModule} from '@angular/forms';
import { DirectivasStructuralesComponent } from './directivas-structurales/directivas-structurales.component';

@NgModule({
  declarations: [
    AppComponent,
    MiPrimerComponenteComponent,
    DirectivasStructuralesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
