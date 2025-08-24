import { Component, inject } from '@angular/core';
import { SvgIconComponent } from 'angular-svg-icon';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'front-footer',
  imports: [SvgIconComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent
{
  year: Number = new Date().getFullYear();

  private viewportScroller = inject(ViewportScroller);

  public gotoAnchor(anchorName: string): void
  {
    this.viewportScroller.setOffset([0, 67]);
    this.viewportScroller.scrollToAnchor(anchorName);
  }

  icoUrl = 'assets/icons';
  icoMaxSrc = `${this.icoUrl}/icon-logo-max.svg`;
  icoMaxStyle = { height: '35px', fill: 'white' };

  icoFacebookSrc = `${this.icoUrl}/icon-logo-facebook.svg`;
  icoFacebookStyle = { height: '16px' };

  icoGmailSrc = `${this.icoUrl}/icon-logo-gmail.svg`;
  icoGmailStyle = { height: '15px' };

  icoWhatsappSrc = `${this.icoUrl}/icon-logo-whatsapp.svg`;
  icoWhatsappStyle = { height: '16px' };

  message: string =
    'Hola mi nombre es (nombre),%0A' +
    'Vivo en (lugar),%0A' +
    'Me gustaría que conversemos para hablar sobre un trabajo de ...';

  email: string = 'ramsua.jorlui@gmail.com';
  gmailHref: string = `https://mail.google.com/mail/?view=cm&to=${this.email}&su=Consulta&body=${this.message}`;

  facebook: string = 'jorje.ramirez.71619';
  facebookHref: string = `https://www.facebook.com/${this.facebook}`;

  phone: string = '992901012';
  whatsappHref: string = `https://api.whatsapp.com/send/?phone=${this.phone}&text=${this.message}`;
}
