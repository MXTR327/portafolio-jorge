import { Component, inject } from '@angular/core';
import {
  InfoPerson,
  LinksContactService,
  SocialLink,
} from '@shared/services/links-contact.service';
import { LinkPage, LinksRouteService } from '@shared/services/links-route.service';
import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  imports: [SvgIconComponent],
  selector: 'app-front-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent
{
  readonly iconMaxPath: string = 'assets/icons/shared/icon-logo-max.svg';

  readonly iconMaxStyle: Record<string, string> = { height: '40px' };
  private readonly _linksContactService = inject(LinksContactService);

  readonly infoPerson: InfoPerson = this._linksContactService.infoPerson;
  private readonly _linksRouteService = inject(LinksRouteService);

  readonly linksPages: readonly LinkPage[] = this._linksRouteService.linksPages;
  readonly phone: string = this.infoPerson.phone;

  readonly place: string = `${this.infoPerson.country}, ${this.infoPerson.city}`;
  readonly socialLinks: readonly SocialLink[] = this._linksContactService.socialLinks;
  readonly street: string = `${this.infoPerson.street}, #${this.infoPerson.streetNumber}`;
  readonly year: number = new Date().getFullYear();

  public readonly goToAnchorById = (anchorId: string) =>
    this._linksRouteService.goToAnchorById(anchorId);
}
