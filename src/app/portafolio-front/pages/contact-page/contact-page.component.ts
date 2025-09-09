import { ChangeDetectionStrategy, Component, ElementRef, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormInputComponent } from '@portafolio-front/components/form-input/form-input.component';
import { ISocialLink, LinksContactService } from '@shared/services/links-contact.service';
import { SvgIconComponent } from 'angular-svg-icon';
import { formUtilities } from 'src/app/utils/form-utilities';

@Component({
  selector: 'app-contact-page',
  imports: [ReactiveFormsModule, SvgIconComponent, FormInputComponent],
  templateUrl: './contact-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactPageComponent
{
  elementRef = inject<ElementRef<HTMLElement>>(ElementRef<HTMLElement>);

  readonly formUtils = formUtilities;

  private readonly _iconsPath: string = 'assets/icons';
  readonly iconChargingPhonePath: string = `${this._iconsPath}/contactenos/icon-charging-phone.svg`;
  readonly iconDescriptionPath: string = `${this._iconsPath}/forms/icon-description.svg`;
  readonly iconMailAlertPath: string = `${this._iconsPath}/forms/icon-mail-alert.svg`;
  readonly iconMailClosedPath: string = `${this._iconsPath}/contactenos/icon-mail-closed.svg`;
  readonly iconNamePath: string = `${this._iconsPath}/forms/icon-name.svg`;
  readonly iconPhonePath: string = `${this._iconsPath}/forms/icon-phone.svg`;
  readonly iconPlanePath: string = `${this._iconsPath}/shared/icon-paper-plane.svg`;
  readonly iconSpotPath: string = `${this._iconsPath}/contactenos/icon-spot.svg`;

  private readonly _linksContactService = inject(LinksContactService);
  private readonly _infoPerson = (label: string, text: string, iconPath: string) => ({
    iconPath,
    label,
    text,
  });
  readonly infosPerson = [
    this._infoPerson(
      'Teléfono',
      `(+51) ${this._linksContactService.infoPerson.phone}`,
      this.iconChargingPhonePath,
    ),
    this._infoPerson('Email', this._linksContactService.infoPerson.email, this.iconMailClosedPath),
    this._infoPerson(
      'Ubícanos En',
      `${this._linksContactService.infoPerson.country}, ${this._linksContactService.infoPerson.city}
      ${this._linksContactService.infoPerson.street}, ${this._linksContactService.infoPerson.streetNumber}`,
      this.iconSpotPath,
    ),
  ];

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

  readonly socialLinks: readonly ISocialLink[] = this._linksContactService.socialLinks;

  onSubmit = (): void =>
  {
    this.myForm.markAllAsTouched();
    console.log(this.myForm.value);
  };
}
