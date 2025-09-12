import { ChangeDetectionStrategy, Component, ElementRef, inject } from '@angular/core';
import { ContactFormComponent } from '@contactenos/components/contact-form/contact-form.component';
import { RedesContactoComponent } from '@shared/components/redes-contacto/redes-contacto.component';
import { LinksContactService } from '@shared/services/links-contact.service';
import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  selector: 'app-contact-page',
  imports: [SvgIconComponent, ContactFormComponent, RedesContactoComponent],
  templateUrl: './contact-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactPageComponent
{
  elementRef = inject<ElementRef<HTMLElement>>(ElementRef<HTMLElement>);

  private readonly _iconsPath: string = 'assets/icons';
  readonly iconChargingPhonePath: string = `${this._iconsPath}/contactenos/icon-charging-phone.svg`;
  readonly iconMailClosedPath: string = `${this._iconsPath}/contactenos/icon-mail-closed.svg`;
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
}
