import { AbstractControl, FormArray, FormGroup, ValidationErrors } from '@angular/forms';

async function sleep()
{
  return new Promise((resolve) =>
  {
    setTimeout(() =>
    {
      resolve(true);
    }, 2500);
  });
}

export const formUtilities = {
  async checkingServerResponse(control: AbstractControl): Promise<undefined | ValidationErrors>
  {
    console.log('validando contra servidor');

    await sleep();

    const formValue = control.value as string;

    if (formValue === 'hola@mundo.com')
    {
      return {
        emailTaken: true,
      };
    }

    return undefined;
  },
  

  emailPattern: String.raw`^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$`,

  getFieldError(form: FormGroup, fieldName: string): string | undefined
  {
    if (!form.controls[fieldName]) return undefined;
    const errors = form.controls[fieldName].errors ?? {};

    return formUtilities.getTextError(errors);
  },

  getFieldErrorInArray(formArray: FormArray, index: number): string | undefined
  {
    if (formArray.controls.length === 0) return undefined;

    const errors = formArray.controls[index].errors ?? {};

    return formUtilities.getTextError(errors);
  },

  getTextError(errors: ValidationErrors): string | undefined
  {
    for (const key of Object.keys(errors))
    {
      switch (key)
      {
        case 'email':
        {
          return 'El valor ingresado no es un correo electrónico';
        }

        case 'emailTaken':
        {
          return 'El correo electrónico ya está siendo usado por otro usuario';
        }

        case 'min':
        {
          const error = errors['min'] as { actual: number; min: number };
          return `Valor mínimo de ${error.min}.`;
        }

        case 'minlength':
        {
          const error = errors['minlength'] as { actualLength: number; requiredLength: number };
          return `Mínimo de ${error.requiredLength} caracteres.`;
        }

        case 'notStrider':
        {
          return 'No se puede usar el username de strider en la app';
        }

        case 'pattern':
        {
          const error = errors['pattern'] as { actualValue: string; requiredPattern: string };
          if (error.requiredPattern === formUtilities.emailPattern)
            return 'El valor ingresado no luce como un correo electrónico';
          return 'Error de patrón contra expresión regular';
        }

        case 'required':
        {
          return 'Este campo es requerido';
        }

        default:
        {
          return `Error de validación no controlado ${key}`;
        }
      }
    }
    return undefined;
  },

  isFieldOneEqualFieldTwo(field1: string, field2: string)
  {
    return (formGroup: AbstractControl) =>
    {
      const field1Value = formGroup.get(field1)?.value as string;
      const field2Value = formGroup.get(field2)?.value as string;

      return field1Value === field2Value ? undefined : { fieldsNotEqual: true };
    };
  },

  isValidField(form: FormGroup, fieldName: string): boolean | null
  {
    return !!form.controls[fieldName].errors && form.controls[fieldName].touched;
  },

  isValidFieldInArray(formArray: FormArray, index: number)
  {
    return formArray.controls[index].errors && formArray.controls[index].touched;
  },
  namePattern: '([a-zA-Z]+) ([a-zA-Z]+)',
  notOnlySpacesPattern: '^[a-zA-Z0-9]+$',

  notStrider(control: AbstractControl): undefined | ValidationErrors
  {
    const value = control.value as string;

    return value.toLowerCase() === 'strider' ? { notStrider: true } : undefined;
  },
};
