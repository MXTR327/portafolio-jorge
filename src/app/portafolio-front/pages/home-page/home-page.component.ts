import { Component, inject } from '@angular/core';
import { LinksService } from '@shared/services/links.service';
import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  selector: 'home-page',
  imports: [SvgIconComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent
{
  linksService = inject(LinksService);
  imgUrl: string = '/assets/images';
  imagen: string = `${this.imgUrl}/perfil.png`;
}
