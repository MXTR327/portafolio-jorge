import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LinksContactService, SocialLink } from '@shared/services/links-contact.service';
import { SvgIconComponent } from 'angular-svg-icon';
import { formUtilities } from 'src/app/utils/form-utilities';

@Component({
  imports: [ReactiveFormsModule, SvgIconComponent],
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
})
export class ContactPageComponent
{
  private readonly _linksContactService = inject(LinksContactService);
  readonly calle: string = `${this._linksContactService.street}, #${this._linksContactService.streetNumber}`;
  readonly formUtils = formUtilities;

  private readonly _iconsPath: string = 'assets/icons';
  readonly iconDescriptionPath: string = `${this._iconsPath}/forms/icon-description.svg`;
  readonly iconErrorPath: string = `${this._iconsPath}/forms/icon-error.svg`;
  readonly iconErrorStyle: Record<string, string> = { height: '16px' };
  readonly iconMailPath: string = `${this._iconsPath}/forms/icon-mail.svg`;
  readonly iconNamePath: string = `${this._iconsPath}/forms/icon-name.svg`;
  readonly iconPhonePath: string = `${this._iconsPath}/forms/icon-phone.svg`;
  readonly iconPlanePath: string = `${this._iconsPath}/shared/icon-paper-plane.svg`;
  readonly iconPlaneStyle: Record<string, string> = { height: '15px' };
  readonly iconStyle: Record<string, string> = { height: '18px' };

  readonly lugar: string = `${this._linksContactService.country}, ${this._linksContactService.city}`;

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

  readonly phone: string = this._linksContactService.phone;
  readonly socialLinks: SocialLink[] = this._linksContactService.socialLinks;

  onSubmit()
  {
    this.myForm.markAllAsTouched();
    console.log(this.myForm.value);
  }
}
