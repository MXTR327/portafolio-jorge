import { Component, computed, inject } from '@angular/core';
import { ActiveSectionService } from '@shared/services/active-section.service';
import { LinkPage, LinksRouteService } from '@shared/services/links-route.service';
import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  selector: 'back-to-top',
  imports: [SvgIconComponent],
  templateUrl: './back-to-top.component.html',
  styleUrl: './back-to-top.component.css',
})
export class BackToTopComponent
{
  // Servicios (inyectados)
  private readonly _activeSectionService = inject(ActiveSectionService);
  private readonly _linksRouteService = inject(LinksRouteService);

  // Data de servicios
  //

  // Reactive/computed states
  readonly isSectionActive = computed(() => this._activeSectionService.activeSection === 'home');

  // Metodos (public for template)
  public getByName(name: string): LinkPage | undefined
  {
    return this._linksRouteService.getByName(name);
  }
  public scrollTo(href: string): void
  {
    this._linksRouteService.gotoAnchor(href);
  }
}
