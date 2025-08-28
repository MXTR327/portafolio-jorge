import { Component, computed, inject } from '@angular/core';
import { SvgIconComponent } from 'angular-svg-icon';
import { LinksContactService, SocialLink } from '@shared/services/links-contact.service';
import { ActiveSectionService } from '@shared/services/active-section.service';

@Component({
  selector: 'contact-page',
  imports: [SvgIconComponent],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css',
})
export class ContactPageComponent
{
  // Servicios (inyectados)
  private readonly _linksContactService = inject(LinksContactService);
  private readonly _activeSectionService = inject(ActiveSectionService);

  // Data de servicios
  readonly socialLinks: SocialLink[] = this._linksContactService.socialLinks;

  // Reactive/computed states
  readonly isSectionActive = computed(
    () => this._activeSectionService.activeSection === 'contact',
  );
  // Configuracion estatica y constantes
  readonly lugar: string = `${this._linksContactService.country}, ${this._linksContactService.city}`;
  readonly calle: string = `${this._linksContactService.street}, #${this._linksContactService.streetNumber}`;
  readonly phone: string = this._linksContactService.phone;
}
