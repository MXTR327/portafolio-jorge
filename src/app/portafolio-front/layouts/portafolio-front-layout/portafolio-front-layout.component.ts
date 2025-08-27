import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { AboutUsPageComponent } from '../../pages/about-us-page/about-us-page.component';
import { ContactPageComponent } from '../../pages/contact-page/contact-page.component';
import { HomePageComponent } from '../../pages/home-page/home-page.component';
import { ProjectsPageComponent } from '../../pages/projects-page/projects-page.component';
import { ServicesPageComponent } from '../../pages/services-page/services-page.component';
import { BackToTopComponent } from '@shared/components/back-to-top/back-to-top.component';
import { ActiveSectionService } from '@shared/services/active-section.service';

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
export class PortafolioFrontLayoutComponent implements AfterViewInit
{
  private activeSvc = inject(ActiveSectionService);

  @ViewChildren('observeSection') sectionRefs!: QueryList<ElementRef<HTMLElement>>;

  ngAfterViewInit()
  {
    const observer = new IntersectionObserver(
      (entries) =>
      {
        for (const entry of entries)
        {
          if (entry.isIntersecting)
          {
            const id = (entry.target as HTMLElement).id;
            if (id)
            {
              this.activeSvc.setActive(id);
            }
          }
        }
      },
      {
        // Ajusta si tienes navbar fijo. El bottom negativo
        // reduce el umbral visible útil y mejora la UX.
        root: null,
        threshold: 0.5,
        rootMargin: '0px 0px -25% 0px',
      },
    );

    this.sectionRefs.forEach((ref) =>
    {
      const el = ref.nativeElement as HTMLElement;
      observer.observe(el);
    });
  }
}
