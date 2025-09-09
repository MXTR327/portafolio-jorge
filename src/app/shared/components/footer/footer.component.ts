import { ChangeDetectionStrategy, Component, ElementRef, inject } from '@angular/core';
import {
  IInfoPerson,
  ISocialLink,
  LinksContactService,
} from '@shared/services/links-contact.service';
import { ILinkPage, LinksRouteService } from '@shared/services/links-route.service';
import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  selector: 'app-front-footer',
  imports: [SvgIconComponent],
  templateUrl: './footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent
{
  elementRef = inject<ElementRef<HTMLElement>>(ElementRef<HTMLElement>);

  readonly iconMaxPath: string = 'assets/icons/shared/icon-logo-max.svg';

  readonly iconMaxStyle: Record<string, string> = { height: '40px' };
  private readonly _linksRouteService = inject(LinksRouteService);

  readonly linksPages: readonly ILinkPage[] = this._linksRouteService.linksPages;

  private readonly _linksContactService = inject(LinksContactService);
  private readonly _infoPerson: IInfoPerson = this._linksContactService.infoPerson;

  readonly phone: string = this._infoPerson.phone;
  readonly place: string = `${this._infoPerson.country}, ${this._infoPerson.city}`;
  readonly socialLinks: readonly ISocialLink[] = this._linksContactService.socialLinks;
  readonly street: string = `${this._infoPerson.street}, #${this._infoPerson.streetNumber}`;
  readonly year: number = new Date().getFullYear();

  readonly goToAnchorById = (anchorId: string) =>
  {
    this._linksRouteService.goToAnchorById(anchorId);
  };
}
