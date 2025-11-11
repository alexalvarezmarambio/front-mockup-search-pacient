import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';
import { rutValidate } from './rut-helpers';

export function validateRut(control: AbstractControl): { [key: string]: boolean } | null {
  return rutValidate(control.value) ? null : { invalidRut: true };
}

@Directive({
  selector: '[validateRut][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: RutValidatorDirective, multi: true },
  ],
})
export class RutValidatorDirective implements Validator {
  validate(control: AbstractControl): {[key: string]: boolean} | null {
    return validateRut(control);
  }
}
