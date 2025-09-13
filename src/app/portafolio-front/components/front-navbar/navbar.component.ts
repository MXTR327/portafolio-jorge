import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ILinkPage } from '@shared/interfaces/link-page.interface';
import { ActiveSectionService } from '@shared/services/active-section.service';
import { LinksRouteService } from '@shared/services/links-route.service';
import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  selector: 'app-front-navbar',
  imports: [SvgIconComponent, RouterLink],
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent
{
  readonly activeSectionService = inject(ActiveSectionService);
  readonly activeSection = this.activeSectionService.activeSection;

  private readonly _iconsNavbarPath: string = 'assets/icons/navbar';

  readonly icoCallPath: string = `${this._iconsNavbarPath}/icon-call.svg`;
  readonly icoCallStyle: Record<string, string> = { height: '20px' };

  readonly icoClosePath: string = `${this._iconsNavbarPath}/icon-menu-close.svg`;
  readonly icoCloseStyle: Record<string, string> = { height: '20px' };

  readonly icoHamburberPath: string = `${this._iconsNavbarPath}/icon-menu-hamburger.svg`;
  readonly icoHamburgerStyle: Record<string, string> = { height: '20px' };

  private readonly _linksRouteService = inject(LinksRouteService);
  readonly pagesList: readonly ILinkPage[] = this._linksRouteService.pages;
}
