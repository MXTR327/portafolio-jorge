import { Component, computed, inject } from '@angular/core';
import { ActiveSectionService } from '@shared/services/active-section.service';

@Component({
  selector: 'about-us-page',
  imports: [],
  templateUrl: './about-us-page.component.html',
  styleUrl: './about-us-page.component.css',
})
export class AboutUsPageComponent
{
  // Servicios (inyectados)
  private readonly _activeSectionService = inject(ActiveSectionService);

  // Reactive/computed states
  readonly isSectionActive = computed(
    () => this._activeSectionService.activeSection === 'about-us',
  );
}
