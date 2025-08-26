import { Component, inject } from '@angular/core';
import { linkPage, LinksService } from '@shared/services/links.service';
import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  selector: 'front-navbar',
  imports: [SvgIconComponent],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent
{
  linksService = inject(LinksService);
  linksPages: linkPage[] = this.linksService.linksPages;

  icoUrl: string = 'assets/icons';
  icoHamburberSrc: string = `${this.icoUrl}/icon-menu-hamburger.svg`;
  icoCloseSrc: string = `${this.icoUrl}/icon-menu-close.svg`;
  icoWhatsappSrc: string = `${this.icoUrl}/icon-logo-whatsapp.svg`;
  phone: string = '992901012';

  icoHamburgerStyle: Record<string, string> = {
    width: '20px',
    height: '20px',
  };
  icoCloseStyle: Record<string, string> = {
    width: '20px',
    height: '20px',
  };
  icoWhatsappStyle: Record<string, string> = { height: '1.3rem' };
}
