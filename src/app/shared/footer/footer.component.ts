import { Component } from '@angular/core';
import { SvgIconComponent } from 'angular-svg-icon';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'front-footer',
  imports: [SvgIconComponent, RouterLink, RouterLinkActive],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent
{
  year: Number = new Date().getFullYear();

  logoMaxSvg = 'assets/icons/logo-maxsrv.svg';
  logoMaxSvgStyles = { height: '2.2rem', fill: 'white' };

  logoGmailSvg = 'assets/icons/logo-gmail.svg';
  logoGmailSvgStyles = { height: '1rem' };

  logoFbSvg = 'assets/icons/logo-fb.svg';
  logoFbSvgStyles = { height: '1.15rem' };

  logoWhatsappSvg = 'assets/icons/logo-whatsapp.svg';
  logoWhatsappSvgStyles = { height: '1.3rem' };

  message: string =
    'Hola mi nombre es (nombre),%0A' +
    'Vivo en (lugar),%0A' +
    'Me gustaría que conversemos para hablar sobre un trabajo de ...';

  email: string = 'ramsua.jorlui@gmail.com';
  hrefGmail: string = `https://mail.google.com/mail/?view=cm&to=${this.email}&su=Consulta&body=${this.message}`;

  facebook: string = 'jorje.ramirez.71619';
  hrefFb: string = `https://www.facebook.com/${this.facebook}`;

  phone: string = '992901012';
  hrefWhatsapp: string = `https://api.whatsapp.com/send/?phone=${this.phone}&text=${this.message}`;
}
