import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MiPrimerComponenteComponent } from './mi-primer-componente/mi-primer-componente.component';
import { DirectivasStructuralesComponent } from './directivas-structurales/directivas-structurales.component';
import {FormsModule} from '@angular/forms';
import { PresentacionComponent } from './presentacion/presentacion.component';

@NgModule({
  declarations: [
    AppComponent,
    MiPrimerComponenteComponent,
    DirectivasStructuralesComponent,
    PresentacionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
