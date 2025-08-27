import { Component, inject } from '@angular/core';
import { LinksService, LinkPage } from '@shared/services/links.service';
import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  selector: 'back-to-top',
  imports: [SvgIconComponent],
  templateUrl: './back-to-top.component.html',
  styleUrl: './back-to-top.component.css',
})
export class BackToTopComponent
{
  linksService: LinksService = inject(LinksService);
  linksPages: readonly LinkPage[] = this.linksService.linksPages;
}
