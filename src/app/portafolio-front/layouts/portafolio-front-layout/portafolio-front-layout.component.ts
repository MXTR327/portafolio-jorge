import { AfterViewInit, Component, ElementRef, inject, viewChildren } from '@angular/core';
import { NavbarComponent } from '@portafolio-front/components/front-navbar/navbar.component';
import { AboutUsPageComponent } from '@portafolio-front/pages/about-us-page/about-us-page.component';
import { ContactPageComponent } from '@portafolio-front/pages/contact-page/contact-page.component';
import { HomePageComponent } from '@portafolio-front/pages/home-page/home-page.component';
import { ProjectsPageComponent } from '@portafolio-front/pages/projects-page/projects-page.component';
import { ServicesPageComponent } from '@portafolio-front/pages/services-page/services-page.component';
import { BackToTopComponent } from '@shared/components/back-to-top/back-to-top.component';
import { ActiveSectionService } from '@shared/services/active-section.service';

@Component({
  imports: [
    AboutUsPageComponent,
    ServicesPageComponent,
    ProjectsPageComponent,
    HomePageComponent,
    ContactPageComponent,
    BackToTopComponent,
    NavbarComponent
],
  selector: 'app-portafolio-front-layout',
  templateUrl: './portafolio-front-layout.component.html',
})
export class PortafolioFrontLayoutComponent implements AfterViewInit
{
  private readonly _activeSectionService = inject(ActiveSectionService);

  private readonly _sectionsRef = viewChildren<ElementRef<HTMLElement>>('observeSection');

  ngAfterViewInit(): void
  {
    const sections = this._sectionsRef();
    if (!sections || sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) =>
      {
        for (const entry of entries)
        {
          const id = (entry.target as HTMLElement).id;
          if (!id) continue;

          if (entry.isIntersecting && entry.intersectionRatio >= 0.5)
          {
            this._activeSectionService.setActive(id);
          }
        }
      },
      {
        root: undefined,
        threshold: [0.1, 0.5],
      },
    );

    for (const section of sections)
    {
      const nativeElement = section.nativeElement;
      observer.observe(nativeElement);
    }
  }
}
