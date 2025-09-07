import { Component, HostListener, inject, input } from '@angular/core';
import { HomePageComponent } from '@portafolio-front/pages/home-page/home-page.component';
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
  homeComponentRef = input.required<HomePageComponent>();

  private readonly _footerEl = document.querySelector('app-front-footer');

  private readonly _linksRouteService = inject(LinksRouteService);

  public readonly goToAnchorById = (anchorId: string) =>
    this._linksRouteService.goToAnchorById(anchorId);

  @HostListener('window:scroll', [])
  public readonly isOnFooter = (): boolean =>
    window.innerHeight > this._footerEl!.getBoundingClientRect().top;

  public readonly isScrolled = (): boolean => window.scrollY < 100;
}
