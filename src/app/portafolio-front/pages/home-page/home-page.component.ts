import { Component, computed, inject } from '@angular/core';
import { ActiveSectionService } from '@shared/services/active-section.service';
import { LinksRouteService } from '@shared/services/links-route.service';
import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  selector: 'home-page',
  imports: [SvgIconComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent
{
  // Servicios (inyectados)
  private readonly _activeSectionService = inject(ActiveSectionService);
  private readonly _linksRouteService = inject(LinksRouteService);

  // Reactive/computed states
  readonly isSectionActive = computed(
    () => this._activeSectionService.activeSection === 'home',
  );
  // Configuracion estatica y constantes
  //

  // Metodos (public for template)
  gotoAnchor(section: string): void
  {
    this._linksRouteService.gotoAnchor(section);
  }
}
