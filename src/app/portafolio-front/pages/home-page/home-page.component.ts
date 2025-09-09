import { ChangeDetectionStrategy, Component, ElementRef, inject } from '@angular/core';
import { LinksRouteService } from '@shared/services/links-route.service';
import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  selector: 'app-home-page',
  imports: [SvgIconComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent
{
  elementRef = inject<ElementRef<HTMLElement>>(ElementRef<HTMLElement>);

  private readonly _iconsHomePath: string = 'assets/icons/home';
  readonly iconWorkerPath: string = `${this._iconsHomePath}/icon-worker.svg`;

  private readonly _linksRouteService = inject(LinksRouteService);
  readonly goToAnchorById = (anchorId: string) =>
  {
    this._linksRouteService.goToAnchorById(anchorId);
  };
}
