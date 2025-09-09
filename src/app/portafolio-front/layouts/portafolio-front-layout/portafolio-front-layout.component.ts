import { ChangeDetectionStrategy, Component, inject, viewChild } from '@angular/core';
import { NavbarComponent } from '@portafolio-front/components/front-navbar/navbar.component';
import { AboutUsPageComponent } from '@portafolio-front/pages/about-us-page/about-us-page.component';
import { ContactPageComponent } from '@portafolio-front/pages/contact-page/contact-page.component';
import { HomePageComponent } from '@portafolio-front/pages/home-page/home-page.component';
import { ProjectsPageComponent } from '@portafolio-front/pages/projects-page/projects-page.component';
import { ServicesPageComponent } from '@portafolio-front/pages/services-page/services-page.component';
import { BackToTopComponent } from '@shared/components/back-to-top/back-to-top.component';
import { FooterComponent } from '@shared/components/footer/footer.component';
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
  private readonly _aboutUsElRef = viewChild<AboutUsPageComponent>(AboutUsPageComponent);
  private readonly _activeSectionService = inject(ActiveSectionService);
  private readonly _contactElRef = viewChild<ContactPageComponent>(ContactPageComponent);
  private readonly _footerElRef = viewChild<FooterComponent>(FooterComponent);
  private readonly _homeElRef = viewChild<HomePageComponent>(HomePageComponent);
  private readonly _projectsElRef = viewChild<ProjectsPageComponent>(ProjectsPageComponent);
  private readonly _servicesElRef = viewChild<ServicesPageComponent>(ServicesPageComponent);

  onScroll()
  {
    const sections: { el: HTMLElement | undefined }[] = [
      { el: this._homeElRef()?.elementRef.nativeElement },
      { el: this._aboutUsElRef()?.elementRef.nativeElement },
      { el: this._servicesElRef()?.elementRef.nativeElement },
      { el: this._projectsElRef()?.elementRef.nativeElement },
      { el: this._contactElRef()?.elementRef.nativeElement },
      { el: this._footerElRef()?.elementRef.nativeElement },
    ];

    const activeSection = sections.find((section) =>
    {
      if (!section.el) return false;

      const rect = section.el.getBoundingClientRect();

      return window.innerHeight > rect.top && rect.top >= (section.el.offsetHeight / 2) * -1;
    });

    this._activeSectionService.section = activeSection?.el?.id ?? '';
  }
}
