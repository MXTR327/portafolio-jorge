import { AfterViewInit, Component, ElementRef, inject, viewChildren } from '@angular/core';
import { AboutUsPageComponent } from '../../pages/about-us-page/about-us-page.component';
import { ContactPageComponent } from '../../pages/contact-page/contact-page.component';
import { HomePageComponent } from '../../pages/home-page/home-page.component';
import { ProjectsPageComponent } from '../../pages/projects-page/projects-page.component';
import { ServicesPageComponent } from '../../pages/services-page/services-page.component';
import { BackToTopComponent } from '@shared/components/back-to-top/back-to-top.component';
import { ActiveSectionService } from '@shared/services/active-section.service';
// import { ScrollTrackerDirective } from '@shared/Directives/scroll-tracker.directive';

@Component({
  selector: 'app-portafolio-front-layout',
  imports: [
    AboutUsPageComponent,
    ServicesPageComponent,
    ProjectsPageComponent,
    HomePageComponent,
    ContactPageComponent,
    BackToTopComponent,
  ],
  templateUrl: './portafolio-front-layout.component.html',
})
export class PortafolioFrontLayoutComponent
{
  // Servicios
  private readonly _activeSectionService = inject(ActiveSectionService);
}
