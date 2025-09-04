import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  InfoPerson,
  LinksContactService,
  SocialLink,
} from '@shared/services/links-contact.service';
import { SvgIconComponent } from 'angular-svg-icon';
import { formUtilities } from 'src/app/utils/form-utilities';

@Component({
  imports: [ReactiveFormsModule, SvgIconComponent],
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
})
export class ContactPageComponent
{
  readonly formUtils = formUtilities;

  private readonly _iconsPath: string = 'assets/icons';

  readonly iconChargingPhonePath: string = `${this._iconsPath}/contactenos/icon-charging-phone.svg`;
  readonly iconDescriptionPath: string = `${this._iconsPath}/forms/icon-description.svg`;
  readonly iconErrorPath: string = `${this._iconsPath}/forms/icon-error.svg`;
  readonly iconErrorStyle: Record<string, string> = { height: '16px' };
  readonly iconMailAlertPath: string = `${this._iconsPath}/forms/icon-mail-alert.svg`;
  readonly iconMailClosedPath: string = `${this._iconsPath}/contactenos/icon-mail-closed.svg`;
  readonly iconNamePath: string = `${this._iconsPath}/forms/icon-name.svg`;
  readonly iconPhonePath: string = `${this._iconsPath}/forms/icon-phone.svg`;
  readonly iconPlanePath: string = `${this._iconsPath}/shared/icon-paper-plane.svg`;
  readonly iconSpotPath: string = `${this._iconsPath}/contactenos/icon-spot.svg`;
  readonly iconStyle: Record<string, string> = { height: '18px' };

  private readonly _linksContactService = inject(LinksContactService);
  readonly infoPerson: InfoPerson = this._linksContactService.infoPerson;

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

  readonly socialLinks: readonly SocialLink[] = this._linksContactService.socialLinks;

  public readonly onSubmit = (): void =>
  {
    this.myForm.markAllAsTouched();
    console.log(this.myForm.value);
  };
}
