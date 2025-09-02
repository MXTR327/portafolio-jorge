import { Component, HostListener, inject, signal } from '@angular/core';
import { ActiveSectionService } from '@shared/services/active-section.service';
import { LinkPage, LinksRouteService } from '@shared/services/links-route.service';
import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  imports: [SvgIconComponent],
  selector: 'app-back-to-top',
  styleUrl: './back-to-top.component.css',
  templateUrl: './back-to-top.component.html',
})
export class BackToTopComponent
{
  readonly isButtonVisible = signal<boolean>( false );

  private readonly _activeSectionService = inject(ActiveSectionService);

  private readonly _linksRouteService = inject(LinksRouteService);
  public getByName(name: string): LinkPage | undefined
  {
    return this._linksRouteService.getByName(name);
  }

  @HostListener('window:scroll', [])
  onWindowScroll()
  {
    this.isButtonVisible.set(window.scrollY < 300);
  }

  public scrollTo(href: string): void
  {
    this._linksRouteService.gotoAnchor(href);
  }

  private readonly _computeActiveSection = () => this._activeSectionService.activeSection;
}
