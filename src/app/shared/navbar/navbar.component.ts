import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component( {
  selector: 'front-navbar',
  imports: [ RouterLink, RouterLinkActive ],
  templateUrl: './navbar.component.html',
} )
export class NavbarComponent
{
  phone: string = '992901012';
  message: string = 'Hola mi nombre es [Nombre], vivo en [Ciudad], me gustaría contactarte para hablar sobre un trabajo de [...].';
}
