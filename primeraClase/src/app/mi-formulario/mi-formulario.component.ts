import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-mi-formulario',
  templateUrl: './mi-formulario.component.html',
  styleUrls: ['./mi-formulario.component.css']
})
export class MiFormularioComponent implements OnInit {
  public emailControl: FormControl = new FormControl('');
  public passwordControl: FormControl = new FormControl('');
  public form: FormGroup = new FormGroup({
    'emailControl': this.emailControl,
    'passwordControl': this.passwordControl
  });


  constructor() {
    // este metodo nos ayuda agregar nuevos controls a un FormGroup existente
    //this.form.addControl('emailControl', this.emailControl);
  }

  ngOnInit() {
  }

  public save() {
    console.log(this.form.value);
  }

}
