import { Component, inject } from '@angular/core';
import { LinksContactService, SocialLink } from '@shared/services/links-contact.service';
import { LinkPage, LinksRouteService } from '@shared/services/links-route.service';
import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  imports: [SvgIconComponent],
  selector: 'app-front-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent
{
  private readonly _linksContactService = inject(LinksContactService);
  readonly calle: string = `${this._linksContactService.street}, #${this._linksContactService.streetNumber}`;

  readonly icoMaxStyle: Record<string, string> = { height: '40px' };
  private readonly _linksService = inject(LinksRouteService);


  readonly linksPages: readonly LinkPage[] = this._linksService.linksPages;
  readonly lugar: string = `${this._linksContactService.country}, ${this._linksContactService.city}`;
  readonly phone: string = this._linksContactService.phone;
  readonly socialLinks: SocialLink[] = this._linksContactService.socialLinks;

  readonly year: number = new Date().getFullYear();

  public scrollTo(href: string): void
  {
    this._linksService.gotoAnchor(href);
  }
}
