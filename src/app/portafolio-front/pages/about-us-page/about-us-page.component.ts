import { Component, computed, inject, Signal } from '@angular/core';
import { ActiveSectionService } from '@shared/services/active-section.service';

interface timeRangeData
{
  yearRange: string;
  title: string;
  description: string;
  imageUrl: string;
}

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
  readonly isSectionActive: Signal<boolean> = computed(
    () => this._activeSectionService.activeSection === 'about-us',
  );

  // Configuracion estatica y constantes
  private readonly _imgPath: string = '/assets/images';
  readonly currentYear: number = new Date().getFullYear();
  readonly timeRanges: timeRangeData[] = [
    {
      yearRange: '2005-2006',
      title: 'Aprendiendo del oficio',
      description:
        'Primeros años como aprendiz en obra, descubriendo las bases de la construcción y ganando experiencia práctica en el día a día.',
      imageUrl: `${this._imgPath}/aprendiendo.png`,
    },
    {
      yearRange: '2007-2010',
      title: 'Primeros proyectos propios',
      description:
        'Encargos pequeños de remodelación y construcción. Cada trabajo fue un paso para consolidar técnica y reputación en el barrio.',
      imageUrl: `${this._imgPath}/planificando.png`,
    },
    {
      yearRange: '2011-2014',
      title: 'Especialización en remodelaciones',
      description:
        'Experiencia en mejoras de hogares: cocinas, patios y ampliaciones. Atención a los detalles y a la satisfacción del cliente.',
      imageUrl: `${this._imgPath}/especializacion.png`,
    },
    {
      yearRange: '2015-2018',
      title: 'Construcción de viviendas',
      description:
        'Desarrollo de hogares familiares completos, desde cimientos hasta acabados, garantizando calidad y seguridad en cada proyecto.',
      imageUrl: `${this._imgPath}/construyendo-vivienda.png`,
    },
    {
      yearRange: '2019-2022',
      title: 'Obras comunitarias',
      description:
        'Participación en proyectos de impacto social: colegios, centros vecinales y espacios para la comunidad.',
      imageUrl: `${this._imgPath}/obra-comunitaria.png`,
    },
    {
      yearRange: '2023-' + this.currentYear,
      title: 'Construyendo futuro',
      description:
        'Dando forma a proyectos que buscan mejorar la vida de las familias y comunidades, con mirada puesta en el mañana.',
      imageUrl: `${this._imgPath}/obra-grande.png`,
    },
    {
      yearRange: '',
      title: '',
      description: '¡Ven y se parte de nuestra historia!',
      imageUrl: '',
    },
  ];
}
