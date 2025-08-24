import { ViewportScroller } from '@angular/common';
import { Component, inject } from '@angular/core';
import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  selector: 'front-navbar',
  imports: [SvgIconComponent],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent
{
  private viewportScroller = inject(ViewportScroller);

  public gotoAnchor(anchorName: string): void
  {
    this.viewportScroller.setOffset([0, 67]);
    this.viewportScroller.scrollToAnchor(anchorName);
  }

  icoUrl = 'assets/icons';

  icoHamburberSrc = `${this.icoUrl}/icon-menu-hamburger.svg`;
  icoHamburgerStyle = {
    width: '24px',
    height: '24px',
  };
  icoCloseSrc = `${this.icoUrl}/icon-menu-close.svg`;
  icoCloseStyle = {
    width: '24px',
    height: '24px',
  };

  icoWhatsappSrc = `${this.icoUrl}/icon-logo-whatsapp.svg`;
  icoWhatsappStyle = { height: '1.3rem' };

  phone: string = '992901012';
}
