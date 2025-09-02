import { Component, computed, inject } from '@angular/core';
import { ActiveSectionService } from '@shared/services/active-section.service';
import { LinkPage, LinksRouteService } from '@shared/services/links-route.service';
import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  imports: [SvgIconComponent],
  selector: 'app-front-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent
{
  readonly activeSecion = computed(this._getActiveSection.bind(this));

  private readonly _iconsPath: string = 'assets/icons/navbar';
  readonly icoCallPath: string = `${this._iconsPath}/icon-call.svg`;

  readonly icoCallStyle: Record<string, string> = { height: '20px' };
  readonly icoClosePath: string = `${this._iconsPath}/icon-menu-close.svg`;

  readonly icoCloseStyle: Record<string, string> = { height: '20px' };
  readonly icoHamburberPath: string = `${this._iconsPath}/icon-menu-hamburger.svg`;

  readonly icoHamburgerStyle: Record<string, string> = { height: '20px' };
  private readonly _linksRouteService = inject(LinksRouteService);
  readonly linksPages: readonly LinkPage[] = this._linksRouteService.linksPages;
  private readonly _activeSectionService = inject( ActiveSectionService );

  public getByName(name: string): LinkPage | undefined
  {
    return this._linksRouteService.getByName(name);
  }

  public scrollTo(href: string): void
  {
    this._linksRouteService.gotoAnchor(href);
  }
  private _getActiveSection(): string
  {
    return this._activeSectionService.activeSection;
  }


}
