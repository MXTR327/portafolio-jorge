import { Component, inject } from '@angular/core';
import { LinksRouteService } from '@shared/services/links-route.service';
import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  imports: [SvgIconComponent],
  selector: 'app-home-page',
  styleUrl: './home-page.component.css',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent
{
  private readonly _iconsHomePath: string = 'assets/icons/home';
  readonly iconWorkerPath: string = `${this._iconsHomePath}/icon-worker.svg`;

  private readonly _linksRouteService = inject(LinksRouteService);
  public readonly goToAnchorById = (anchorId: string) =>
    this._linksRouteService.goToAnchorById(anchorId);
}
