import { Component, computed, inject } from '@angular/core';
import { ServiceCardComponent } from '@servicios/components/service-card/service-card.component';
import { ActiveSectionService } from '@shared/services/active-section.service';

@Component({
  selector: 'services-page',
  imports: [ServiceCardComponent],
  templateUrl: './services-page.component.html',
  styleUrl: './services-page.component.css',
})
export class ServicesPageComponent
{
  // Servicios (inyectados)
  private readonly _activeSectionService = inject(ActiveSectionService);

  // Reactive/computed states
  readonly isSectionActive = computed(
    () => this._activeSectionService.activeSection === 'services',
  );

  // Configuracion estatica y constantes
  private readonly _imgPath: string = 'assets/images';
  readonly services = [
    {
      image: `${this._imgPath}/escalera.png`,
      service: 'Construccion de viviendas',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem sapiente omnis dignissimos excepturi veritatis accusamus harum officia illo deserunt mollitia quibusdam autem asperiores incidunt nam quam tempora, voluptatum modi repudiandae!',
    },
    {
      image: `${this._imgPath}/lavadero.png`,
      service: 'Construccion de mas',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem sapiente omnis dignissimos excepturi veritatis accusamus harum officia illo deserunt mollitia quibusdam autem asperiores incidunt nam quam tempora, voluptatum modi repudiandae!',
    },
    {
      image: `${this._imgPath}/lavadero2.png`,
      service: 'Lavadero enchapado negro',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem sapiente omnis dignissimos excepturi veritatis accusamus harum officia illo deserunt mollitia quibusdam autem asperiores incidunt nam quam tempora, voluptatum modi repudiandae!',
    },
  ];
  // Metodos (public for template)
}
