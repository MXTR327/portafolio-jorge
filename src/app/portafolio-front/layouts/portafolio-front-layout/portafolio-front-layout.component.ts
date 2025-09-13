import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '@portafolio-front/components/front-navbar/navbar.component';

@Component({
  selector: 'app-portafolio-front-layout',
  imports: [NavbarComponent, RouterOutlet],
  templateUrl: './portafolio-front-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class PortafolioFrontLayoutComponent
{}
