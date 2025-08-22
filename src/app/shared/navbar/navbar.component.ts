import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  selector: 'front-navbar',
  imports: [RouterLink, RouterLinkActive, SvgIconComponent],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent
{
  logoWhatsappSvg = 'assets/icons/logo-whatsapp.svg';
  logoWhatsappSvgStyles = { height: '1.4rem' };

  message: string =
    'Hola mi nombre es (nombre),%0A' +
    'Vivo en (lugar),%0A' +
    'Me gustaría que conversemos para hablar sobre un trabajo de ...';

  phone: string = '992901012';
  hrefWhatsapp: string = `https://api.whatsapp.com/send/?phone=${this.phone}&text=${this.message}`;
}
