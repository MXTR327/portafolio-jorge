import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  viewChildren,
} from '@angular/core';
import { AboutUsPageComponent } from '@portafolio-front/pages/about-us-page/about-us-page.component';
import { ContactPageComponent } from '@portafolio-front/pages/contact-page/contact-page.component';
import { HomePageComponent } from '@portafolio-front/pages/home-page/home-page.component';
import { ProjectsPageComponent } from '@portafolio-front/pages/projects-page/projects-page.component';
import { ServicesPageComponent } from '@portafolio-front/pages/services-page/services-page.component';
import { ActiveSectionService } from '@shared/services/active-section.service';

import { BackToTopComponent } from '../back-to-top/back-to-top.component';

@Component({
  selector: 'app-landing-page',
  imports: [
    HomePageComponent,
    AboutUsPageComponent,
    ServicesPageComponent,
    ProjectsPageComponent,
    ContactPageComponent,
    BackToTopComponent,
  ],
  templateUrl: './landing-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    '(window:scroll)': 'onScroll()',
  },
})
export class LandingPageComponent
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

    this._activeSectionService.activeSection.set(activeSection?.elementRef.nativeElement.id ?? '');
  }
}
