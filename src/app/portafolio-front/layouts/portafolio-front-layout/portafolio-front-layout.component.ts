import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '@shared/footer/footer.component';
import { NavbarComponent } from '@shared/navbar/navbar.component';

@Component({
  selector: 'app-portafolio-front-layout',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './portafolio-front-layout.component.html',
})
export class PortafolioFrontLayoutComponent
{}
