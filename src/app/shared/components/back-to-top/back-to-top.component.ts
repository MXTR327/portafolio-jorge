import { Component, HostListener, inject } from '@angular/core';
import { LinksRouteService } from '@shared/services/links-route.service';
import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  imports: [SvgIconComponent],
  selector: 'app-back-to-top',
  styleUrl: './back-to-top.component.css',
  templateUrl: './back-to-top.component.html',
})
export class BackToTopComponent
{
  private readonly _linksRouteService = inject(LinksRouteService);

  public readonly goToAnchorById = (anchorId: string) =>
    this._linksRouteService.goToAnchorById(anchorId);

  @HostListener('window:scroll', [])
  public readonly isNearTop = (): boolean => window.scrollY < 300;
}
