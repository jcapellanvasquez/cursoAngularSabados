import {AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn} from '@angular/forms';

export class MyValidators {
  static samePassword(): ValidatorFn {
    return function(control: FormGroup): ValidationErrors | null {
      const passwordControl: AbstractControl = control.get('passwordControl');
      const confirmarPasswordControl: AbstractControl = control.get('confirmarPasswordControl');
      let resultado: ValidationErrors = null;

      if (passwordControl.value !== confirmarPasswordControl.value) {
        resultado = {'samePasswordError': 'Las contrasenas no coninciden'};

      }

      return resultado;
    };
  }
}
