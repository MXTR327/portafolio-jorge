import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SvgIconComponent } from 'angular-svg-icon';
import { formUtilities } from 'src/app/utils/form-utilities';

import { FormInputComponent } from '../form-input/form-input.component';

@Component({
  selector: 'app-contact-form',
  imports: [FormInputComponent, ReactiveFormsModule, SvgIconComponent],
  templateUrl: './contact-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactFormComponent
{
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
    this._inputField('name', 'Nombre*', this.iconNamePath),
    this._inputField('phone', 'Teléfono*', this.iconPhonePath),
    this._inputField('email', 'Email@email.com*', this.iconMailAlertPath),
    this._inputField('message', 'Mensaje*', this.iconDescriptionPath, 'textarea'),
  ];

  private readonly _fb = inject(FormBuilder);
  myForm: FormGroup = this._fb.group({
    email: [
      '',
      [Validators.required, Validators.pattern(formUtilities.emailPattern)],
      [formUtilities.checkingServerResponse.bind(formUtilities)],
    ],
    message: ['', [Validators.required]],
    name: ['', [Validators.required, Validators.pattern(formUtilities.namePattern)]],
    phone: ['', [Validators.required, Validators.minLength(9)]],
  });

  onSubmit = (): void =>
  {
    this.myForm.markAllAsTouched();
    console.log(this.myForm.value);
  };
}
