import { Component, inject } from '@angular/core';
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
  linksService: LinksRouteService = inject(LinksRouteService);
  linksPages: readonly LinkPage[] = this.linksService.linksPages;
}
