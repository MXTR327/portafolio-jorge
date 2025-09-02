import { Component, inject } from '@angular/core';
import { LinksRouteService } from '@shared/services/links-route.service';
import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  imports: [SvgIconComponent],
  selector: 'app-home-page',
  standalone: true,
  styleUrl: './home-page.component.css',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent
{
  private readonly _linksRouteService = inject(LinksRouteService);

  gotoAnchor(section: string): void
  {
    this._linksRouteService.gotoAnchor(section);
  }
}
