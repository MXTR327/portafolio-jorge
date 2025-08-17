import { Component } from '@angular/core';

@Component( {
  selector: 'front-footer',
  imports: [],
  templateUrl: './footer.component.html',
} )
export class FooterComponent
{
  year: Number = new Date().getFullYear();

  email: string = 'ramsua.jorlui@gmail.com';
  facebook: string = 'jorje.ramirez.71619';
  phone: string = '992901012';

  message: string = 'Hola mi nombre es [Nombre], vivo en [Ciudad], me gustaría contactarte para hablar sobre un trabajo de [...].';
}
