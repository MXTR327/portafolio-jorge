import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '@shared/components/footer/footer.component';
import { NavbarComponent } from '@shared/components/navbar/navbar.component';
import { AboutUsPageComponent } from '../../pages/about-us-page/about-us-page.component';
import { ServicesPageComponent } from '../../pages/services-page/services-page.component';
import { ProjectsPageComponent } from '../../pages/projects-page/projects-page.component';
import { HomePageComponent } from '../../pages/home-page/home-page.component';
import { ContactPageComponent } from "../../pages/contact-page/contact-page.component";

@Component({
  selector: 'app-portafolio-front-layout',
  imports: [
    AboutUsPageComponent,
    ServicesPageComponent,
    ProjectsPageComponent,
    HomePageComponent,
    ContactPageComponent
],
  templateUrl: './portafolio-front-layout.component.html',
})
export class PortafolioFrontLayoutComponent
{}
