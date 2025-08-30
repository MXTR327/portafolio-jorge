import { Component, computed, inject } from '@angular/core';
import { ActiveSectionService } from '@shared/services/active-section.service';
import { SvgIconComponent } from 'angular-svg-icon';

interface ServiceItem
{
  title: string;
  description: string;
  iconPath: string;
}

@Component({
  selector: 'services-page',
  imports: [SvgIconComponent],
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
  private readonly _iconsPath: string = 'assets/icons/services';

  readonly services: ServiceItem[] = [
    {
      title: 'Construcción de Casas',
      description:
        'Levantamos viviendas completas desde los cimientos hasta los acabados, con calidad y seguridad.',
      iconPath: `${this._iconsPath}/icon-casa.svg`,
    },
    {
      title: 'Ampliaciones',
      description:
        'Hacemos crecer su casa con un nuevo piso, habitaciones o ambientes adicionales.',
      iconPath: `${this._iconsPath}/icon-ampliacion.svg`,
    },
    {
      title: 'Remodelaciones',
      description:
        'Renovamos cocinas, baños y fachadas para darles un aspecto moderno y resistente.',
      iconPath: `${this._iconsPath}/icon-remodelacion.svg`,
    },
    {
      title: 'Muros y Cercos',
      description:
        'Construcción de muros sólidos y cercos perimétricos que brindan seguridad y privacidad.',
      iconPath: `${this._iconsPath}/icon-muro.svg`,
    },
    {
      title: 'Pisos y Acabados',
      description:
        'Instalación de mayólica, porcelanato y cemento pulido para un acabado duradero.',
      iconPath: `${this._iconsPath}/icon-piso.svg`,
    },
    {
      title: 'Techos',
      description: 'Techos de loza aligerada o metálicos, adaptados a la necesidad del cliente.',
      iconPath: `${this._iconsPath}/icon-techo.svg`,
    },
    {
      title: 'Mantenimiento',
      description:
        'Reparaciones de grietas, humedad o estructuras para alargar la vida útil de su casa.',
      iconPath: `${this._iconsPath}/icon-mantenimiento.svg`,
    },
    {
      title: 'Acabados Finos',
      description:
        'Colocación de cerámicos, porcelanatos, enchapes y detalles que realzan cada espacio.',
      iconPath: `${this._iconsPath}/icon-acabados.svg`,
    },
  ];

  // Estilos
  readonly icoStyle: Record<string, string> = {
    height: '40px',
    fill: 'rgb(40, 74, 226)',
  };

  // Metodos (public for template)
}
