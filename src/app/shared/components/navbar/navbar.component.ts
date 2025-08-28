import { Component, computed, effect, inject } from '@angular/core';
import { SvgIconComponent } from 'angular-svg-icon';
import { ActiveSectionService } from '@shared/services/active-section.service';
import { LinkPage, LinksRouteService } from '@shared/services/links-route.service';

@Component({
  selector: 'front-navbar',
  imports: [SvgIconComponent],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent
{
  // Servicios (inyectados)
  private readonly _activeSectionService = inject(ActiveSectionService);
  private readonly _linksService = inject(LinksRouteService);

  // Data de servicios
  readonly linksPages: readonly LinkPage[] = this._linksService.linksPages;

  // Reactive/computed states
  readonly visibleSections = computed(() => this._activeSectionService.visibleSections);
  readonly activeSecion = computed(() => this._activeSectionService.activeSection);

  // Configuracion estatica y constantes
  private readonly _icoUrl: string = 'assets/icons';
  readonly icoHamburberSrc: string = `${this._icoUrl}/icon-menu-hamburger.svg`;
  readonly icoCloseSrc: string = `${this._icoUrl}/icon-menu-close.svg`;
  readonly icoWhatsappSrc: string = `${this._icoUrl}/icon-logo-whatsapp.svg`;
  readonly phone: string = '992901012';

  // Estilos
  readonly icoHamburgerStyle: Record<string, string> = { width: '20px', height: '20px' };
  readonly icoCloseStyle: Record<string, string> = { width: '20px', height: '20px' };
  readonly icoWhatsappStyle: Record<string, string> = { height: '1.3rem' };

  // Metodos (public for template)
  public getByName(name: string): LinkPage | undefined
  {
    return this._linksService.getByName(name);
  }
  public scrollTo(href: string): void
  {
    this._linksService.gotoAnchor(href);
  }
}
