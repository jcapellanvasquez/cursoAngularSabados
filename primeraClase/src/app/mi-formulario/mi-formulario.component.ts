import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MyValidators} from '../my-validators';

@Component({
  selector: 'app-mi-formulario',
  templateUrl: './mi-formulario.component.html',
  styleUrls: ['./mi-formulario.component.css']
})
export class MiFormularioComponent implements OnInit {
  public nombreControl: FormControl = new FormControl('', [Validators.maxLength(20), Validators.required]);
  public apellidoControl: FormControl = new FormControl('', Validators.maxLength(20));
  public emailControl: FormControl = new FormControl('', Validators.email);
  public passwordControl: FormControl = new FormControl('', [Validators.minLength(5), Validators.maxLength(10)]);
  public confirmarPasswordControl: FormControl = new FormControl('', [Validators.minLength(5), Validators.maxLength(10)]);
  public form: FormGroup = new FormGroup({
    'nombreControl': this.nombreControl,
    'apellidoControl': this.apellidoControl,
    'emailControl': this.emailControl,
    'passwordControl': this.passwordControl,
    'confirmarPasswordControl': this.confirmarPasswordControl
  }, {validators: MyValidators.samePassword()});


  constructor() {
    // este metodo nos ayuda agregar nuevos controls a un FormGroup existente
    //this.form.addControl('emailControl', this.emailControl);
  }

  ngOnInit() {
  }

  public save() {
    this.nombreControl.markAsTouched();
    this.form.markAsTouched();
    console.log(this.form);
  }


}
