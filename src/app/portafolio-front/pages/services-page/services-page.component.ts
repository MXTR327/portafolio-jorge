import { Component, inject } from '@angular/core';
import { ActiveSectionService } from '@shared/services/active-section.service';
import { SvgIconComponent } from 'angular-svg-icon';

interface ServiceItem
{
  description: string;
  iconPath: string;
  title: string;
}

@Component({
  imports: [SvgIconComponent],
  selector: 'app-services-page',
  templateUrl: './services-page.component.html',
})
export class ServicesPageComponent
{
  readonly icoStyle: Record<string, string> = {
    fill: 'rgb(40, 74, 226)',
    height: '40px',
  };

  private readonly _iconsPath: string = 'assets/icons/services';


  readonly services: ServiceItem[] = [
    {
      description:
        'Levantamos viviendas completas desde los cimientos hasta los acabados, con calidad y seguridad.',
      iconPath: `${this._iconsPath}/icon-casa.svg`,
      title: 'Construcción de Casas',
    },
    {
      description:
        'Hacemos crecer su casa con un nuevo piso, habitaciones o ambientes adicionales.',
      iconPath: `${this._iconsPath}/icon-ampliacion.svg`,
      title: 'Ampliaciones',
    },
    {
      description:
        'Renovamos cocinas, baños y fachadas para darles un aspecto moderno y resistente.',
      iconPath: `${this._iconsPath}/icon-remodelacion.svg`,
      title: 'Remodelaciones',
    },
    {
      description:
        'Construcción de muros sólidos y cercos perimétricos que brindan seguridad y privacidad.',
      iconPath: `${this._iconsPath}/icon-muro.svg`,
      title: 'Muros y Cercos',
    },
    {
      description:
        'Instalación de mayólica, porcelanato y cemento pulido para un acabado duradero.',
      iconPath: `${this._iconsPath}/icon-piso.svg`,
      title: 'Pisos y Acabados',
    },
    {
      description: 'Techos de loza aligerada o metálicos, adaptados a la necesidad del cliente.',
      iconPath: `${this._iconsPath}/icon-techo.svg`,
      title: 'Techos',
    },
    {
      description:
        'Reparaciones de grietas, humedad o estructuras para alargar la vida útil de su casa.',
      iconPath: `${this._iconsPath}/icon-mantenimiento.svg`,
      title: 'Mantenimiento',
    },
    {
      description:
        'Colocación de cerámicos, porcelanatos, enchapes y detalles que realzan cada espacio.',
      iconPath: `${this._iconsPath}/icon-acabados.svg`,
      title: 'Acabados Finos',
    },
  ];

  private readonly _activeSectionService = inject(ActiveSectionService);
}
