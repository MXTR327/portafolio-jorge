import { Component, inject } from '@angular/core';
import { SvgIconComponent } from 'angular-svg-icon';
import { LinkPage, LinksRouteService } from '@shared/services/links-route.service';
import { LinksContactService, SocialLink } from '@shared/services/links-contact.service';

@Component({
  selector: 'front-footer',
  imports: [SvgIconComponent],
  templateUrl: './footer.component.html',
})
export class FooterComponent
{
  // Servicios (inyectados)
  private readonly _linksService = inject(LinksRouteService);
  private readonly _linksContactService = inject(LinksContactService);

  // Data de servicios
  readonly linksPages: readonly LinkPage[] = this._linksService.linksPages;
  readonly socialLinks: SocialLink[] = this._linksContactService.socialLinks;

  // Reactive/computed states
  //

  // Configuracion estatica y constantes
  readonly year: Number = new Date().getFullYear();
  readonly lugar: string = `${this._linksContactService.country}, ${this._linksContactService.city}`;
  readonly calle: string = `${this._linksContactService.street}, #${this._linksContactService.streetNumber}`;
  readonly phone: string = this._linksContactService.phone;

  // Estilos
  readonly icoMaxStyle: Record<string, string> = { height: '40px', fill: 'white' };

  // Metodos (public for template)
  public scrollTo(href: string): void
  {
    this._linksService.gotoAnchor(href);
  }
}
