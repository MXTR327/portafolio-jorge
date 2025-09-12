import { ChangeDetectionStrategy, Component, ElementRef, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ILinkPage } from '@shared/interfaces/link-page.interface';
import { ISocialLink } from '@shared/interfaces/social-link.interface';
import { IInfoPerson, LinksContactService } from '@shared/services/links-contact.service';
import { LinksRouteService } from '@shared/services/links-route.service';
import { SvgIconComponent } from 'angular-svg-icon';

import { RedesContactoComponent } from '../redes-contacto/redes-contacto.component';

@Component({
  selector: 'app-front-footer',
  imports: [SvgIconComponent, RedesContactoComponent, RouterLink],
  templateUrl: './footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent
{
  elementRef = inject<ElementRef<HTMLElement>>(ElementRef<HTMLElement>);

  readonly iconMaxPath: string = 'assets/icons/shared/icon-logo-max.svg';

  readonly iconMaxStyle: Record<string, string> = { height: '40px' };

  private readonly _linksRouteService = inject(LinksRouteService);
  readonly pagesList: readonly ILinkPage[] = this._linksRouteService.pages;

  private readonly _linksContactService = inject(LinksContactService);
  private readonly _infoPerson: IInfoPerson = this._linksContactService.infoPerson;

  readonly phone: string = this._infoPerson.phone;
  readonly place: string = `${this._infoPerson.country}, ${this._infoPerson.city}`;
  readonly socialLinks: readonly ISocialLink[] = this._linksContactService.socialLinks;
  readonly street: string = `${this._infoPerson.street}, #${this._infoPerson.streetNumber}`;
  readonly year: number = new Date().getFullYear();
}
