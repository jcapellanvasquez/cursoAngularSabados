import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {MiPrimerComponenteComponent} from './mi-primer-componente/mi-primer-componente.component';
import {DirectivasStructuralesComponent} from './directivas-structurales/directivas-structurales.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PresentacionComponent} from './presentacion/presentacion.component';
import {RouterModule} from '@angular/router';
import {MiFormularioComponent} from './mi-formulario/mi-formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    MiPrimerComponenteComponent,
    DirectivasStructuralesComponent,
    PresentacionComponent,
    MiFormularioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '', component: PresentacionComponent},
      {path: 'mi-formulario', component: MiFormularioComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
