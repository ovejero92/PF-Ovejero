import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'formFieldValidationErrors'
})
export class FormFieldValidationErrorsPipe implements PipeTransform {

  transform(value: ValidationErrors | undefined | null, ...args: unknown[]): unknown {
    if(value) {
      let messages:string[] = []
      for (const key in value) {
        if (Object.prototype.hasOwnProperty.call(value, key)) {
          const errorDetail = value[key];
          if(key === 'required') messages.push('este campo es requerido')
          if(key === 'pattern') messages.push('no cumple con el formato requerido')
          if (key === 'maxlenght') messages.push(`no puede terner mas de ${errorDetail.requiredLength} caracteres`)
          if (key === 'minlenght') messages.push(`debe tener minimo ${errorDetail.requiredLength} caracteres`)
          }
      }
      return messages.join('. ')
    }
    return null;

  }

}
