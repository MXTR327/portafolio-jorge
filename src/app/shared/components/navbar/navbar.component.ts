import { NgClass } from '@angular/common';
import { Component, computed, ElementRef, inject, QueryList, ViewChildren } from '@angular/core';
import { ActiveSectionService } from '@shared/services/active-section.service';
import { LinkPage, LinksService } from '@shared/services/links.service';
import { ScrollStateService } from '@shared/services/scroll-state.service';
import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  selector: 'front-navbar',
  imports: [SvgIconComponent, NgClass],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent
{
  linksService: LinksService = inject(LinksService);
  linksPages: readonly LinkPage[] = this.linksService.linksPages;

  private activeSvc = inject(ActiveSectionService);
  activeSection = computed(() => this.activeSvc.active());

  scrollTo(href: string)
  {
    const id = href.startsWith('#') ? href.slice(1) : href;
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  isActive(href: string): boolean
  {
    return this.activeSection() === href;
  }

  icoUrl: string = 'assets/icons';
  icoHamburberSrc: string = `${this.icoUrl}/icon-menu-hamburger.svg`;
  icoCloseSrc: string = `${this.icoUrl}/icon-menu-close.svg`;
  icoWhatsappSrc: string = `${this.icoUrl}/icon-logo-whatsapp.svg`;
  phone: string = '992901012';

  icoHamburgerStyle: Record<string, string> = {
    width: '20px',
    height: '20px',
  };
  icoCloseStyle: Record<string, string> = {
    width: '20px',
    height: '20px',
  };
  icoWhatsappStyle: Record<string, string> = { height: '1.3rem' };
}
