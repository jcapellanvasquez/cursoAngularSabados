import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {MiPrimerComponenteComponent} from './mi-primer-componente/mi-primer-componente.component';
import {DirectivasStructuralesComponent} from './directivas-structurales/directivas-structurales.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PresentacionComponent} from './presentacion/presentacion.component';
import {RouterModule} from '@angular/router';
import {MiFormularioComponent} from './mi-formulario/mi-formulario.component';
import {HttpClientModule} from '@angular/common/http';
import {environment} from '../environments/environment';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {LoginGuard} from './guards/login.guard';

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
      {path: '', component: PresentacionComponent, canActivate:[LoginGuard]},
      {path: 'mi-formulario', component: MiFormularioComponent},
      {path: 'mi-formulario/:nombre', component: MiFormularioComponent},
      {path: 'pipe', loadChildren: './pipe-ejemplo/pipe-ejemplo.module#PipeEjemploModule'},
      {path: 'login', loadChildren: './authenticate/authenticate.module#AuthenticateModule', canActivate:[LoginGuard]},
      {path: 'ejemplos-servicios', loadChildren: './ejemplos-servicios/ejemplos-servicios.module#EjemplosServiciosModule'},
    ], {enableTracing: false}),
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
