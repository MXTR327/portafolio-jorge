/* eslint-disable unicorn/no-null */
import { ChangeDetectionStrategy, Component, inject, signal, viewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IEmailjsTemplateInterface } from '@contactenos/interfaces/emailjs-template.interface';
import { IFormContactInterface } from '@contactenos/interfaces/form-contact.interface';
import { SvgIconComponent } from 'angular-svg-icon';
import { RecaptchaComponent, RecaptchaModule } from 'ng-recaptcha';
import { formUtilities } from 'src/app/utils/form-utilities';

import { EmailService } from '../../services/email.service';
import { FormInputComponent } from '../form-input/form-input.component';

@Component({
  selector: 'app-contact-form',
  imports: [FormInputComponent, ReactiveFormsModule, SvgIconComponent, RecaptchaModule],
  templateUrl: './contact-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactFormComponent
{
  readonly captchaToken = signal<null | string>(null);

  readonly formUtils = formUtilities;
  private readonly _iconsPath: string = 'assets/icons';

  readonly iconDescriptionPath: string = `${this._iconsPath}/forms/icon-description.svg`;
  readonly iconMailAlertPath: string = `${this._iconsPath}/forms/icon-mail-alert.svg`;
  readonly iconNamePath: string = `${this._iconsPath}/forms/icon-name.svg`;
  readonly iconPhonePath: string = `${this._iconsPath}/forms/icon-phone.svg`;
  readonly iconPlanePath: string = `${this._iconsPath}/shared/icon-paper-plane.svg`;
  private readonly _inputField = (
    id: string,
    placeholder: string,
    iconPath: string,
    type: 'input' | 'textarea' = 'input',
  ) => ({
    iconPath,
    id,
    placeholder,
    type,
  });
  readonly inputFieldsData = [
    this._inputField('name', 'Nombre y Apellido*', this.iconNamePath),
    this._inputField('phone', '+51 123321323*', this.iconPhonePath),
    this._inputField('email', 'email@email.com*', this.iconMailAlertPath),
    this._inputField('message', 'Mensaje*', this.iconDescriptionPath, 'textarea'),
  ];
  readonly isPosting = signal(false);

  private readonly _formBuilder = inject(FormBuilder);

  myForm: FormGroup = this._formBuilder.group({
    email: ['', [Validators.required, Validators.pattern(formUtilities.regexEmail)]],
    message: ['', [Validators.required, Validators.maxLength(500)]],
    name: ['', [Validators.required, Validators.pattern(formUtilities.regexFullName)]],
    phone: ['', [Validators.required, Validators.pattern(formUtilities.regexPhone)]],
  });

  private readonly _emailService = inject(EmailService);
  private readonly _recaptchaComponentElRef = viewChild<RecaptchaComponent>(RecaptchaComponent);

  onSubmit = (): void =>
  {
    this.myForm.markAllAsTouched();
    if (this.myForm.invalid) return;

    const formValue = this.myForm.value as IFormContactInterface;

    const formData: IEmailjsTemplateInterface = {
      email: formValue.email,
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'g-recaptcha-response': this.captchaToken(),
      message: `Numero De Contacto: ${formValue.phone} \n\n ${formValue.message}`,
      name: formValue.name,
      time: new Date().toLocaleString(),
      title: 'Nuevo Mensaje desde Pagina Web',
    };
    this.isPosting.set(true);

    this._emailService
      .sendEmail(formData)
      .then(() =>
      {
        this.myForm.reset();
        alert('Correo se envió correctamente');
      })
      .catch((error: unknown) =>
      {
        let errorMessage = 'Error desconocido al enviar el correo.';
        if (error instanceof Error) errorMessage = error.message;
        else if (typeof error === 'string') errorMessage = error;
        else if (typeof error === 'object' && error !== null && 'text' in error)
          errorMessage = (error as { text: string }).text;
        alert(`Error: ${errorMessage}`);
      })
      .finally(() =>
      {
        this.captchaToken.set(null);
        this._recaptchaComponentElRef()?.reset();
        this.isPosting.set(false);
      });
  };
}
