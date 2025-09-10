import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  viewChildren,
} from '@angular/core';
import { NavbarComponent } from '@portafolio-front/components/front-navbar/navbar.component';
import { AboutUsPageComponent } from '@portafolio-front/pages/about-us-page/about-us-page.component';
import { ContactPageComponent } from '@portafolio-front/pages/contact-page/contact-page.component';
import { HomePageComponent } from '@portafolio-front/pages/home-page/home-page.component';
import { ProjectsPageComponent } from '@portafolio-front/pages/projects-page/projects-page.component';
import { ServicesPageComponent } from '@portafolio-front/pages/services-page/services-page.component';
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
    NavbarComponent,
  ],
  templateUrl: './portafolio-front-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    '(window:scroll)': 'onScroll()',
  },
})
export class PortafolioFrontLayoutComponent
{
  private readonly _activeSectionService = inject(ActiveSectionService);

  private readonly _childrensElRefs = viewChildren<{
    elementRef: ElementRef<HTMLElement>;
  }>('section');

  onScroll()
  {
    const VIEWPORT_CENTER = window.innerHeight * 0.6;
    const activeSection = this._childrensElRefs().find((section) =>
    {
      const rect = section.elementRef.nativeElement.getBoundingClientRect();
      return rect.top <= VIEWPORT_CENTER && rect.bottom >= VIEWPORT_CENTER;
    });

    this._activeSectionService.section = activeSection?.elementRef.nativeElement.id ?? '';
  }
}
