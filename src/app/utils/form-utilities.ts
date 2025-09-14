import { FormGroup, ValidationErrors } from '@angular/forms';

export const formUtilities = {
  getFieldError(form: FormGroup, fieldName: string): string
  {
    const errors = form.controls[fieldName].errors ?? {};
    return formUtilities.getTextError(errors);
  },
  getTextError(errors: ValidationErrors): string
  {
    for (const KEY of Object.keys(errors))
    {
      switch (KEY)
      {
        case 'maxlength':
        {
          const error = errors['maxlength'] as { actualLength: string; requiredLength: string };
          return `${error.actualLength} caractéres supera el máximo de ${error.requiredLength} caractéres.`;
        }
        case 'pattern':
        {
          const error = errors['pattern'] as { actualValue: string; requiredPattern: string };
          switch (error.requiredPattern)
          {
            case formUtilities.regexEmail:
              return 'El valor no luce como un correo electrónico';
            case formUtilities.regexFullName:
              return 'El valor no luce como un nombre y apellido';
            case formUtilities.regexPhone:
              return 'Valor no luce como un teléfono';
            default:
              return 'Error de patrón contra expresión regular';
          }
        }
        case 'required':
          return 'Este campo no puede estar vacío';
        default:
          return `Validación no controlada ${KEY}`;
      }
    }
    return '';
  },
  isValidField(form: FormGroup, fieldName: string): boolean
  {
    return !!form.controls[fieldName].errors && form.controls[fieldName].touched;
  },

  regexEmail: String.raw`^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$`,
  regexFullName: '^([A-Za-zÁÉÍÓÚáéíóúÑñ]+) ([A-Za-zÁÉÍÓÚáéíóúÑñ]+)$',
  regexPhone: String.raw`^(?:\+51)?\s?(?:[0-9]{9})$`,
};
