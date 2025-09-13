import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ITimeRange } from '@sobre-nosotros/interfaces/time-range.interface';

import { TimelineItemComponent } from '../timeline-item/timeline-item.component';

@Component({
  selector: 'app-about-us-timeline',
  imports: [TimelineItemComponent],
  templateUrl: './about-us-timeline.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutUsTimelineComponent
{
  readonly currentYear: number = new Date().getFullYear();

  private readonly _imgPath: string = 'assets/images';
  private readonly _imgAboutUsPath: string = `${this._imgPath}/about-us`;

  readonly timeRanges: ITimeRange[] = [
    {
      description: `Primeros años como aprendiz en obra, descubriendo las bases de la
      construcción y ganando experiencia práctica en el día a día tanto
      con maestros como empresas.`,
      imagePath: `${this._imgAboutUsPath}/aprendiendo.png`,
      title: 'Aprendiendo del oficio',
      yearRange: '2005-2006',
    },
    {
      description: `Encargos pequeños de remodelación y construcción.
      Cada trabajo fue un paso para consolidar técnica y reputación en la provincia.`,
      imagePath: `${this._imgAboutUsPath}/planificando.png`,
      title: 'Primeros proyectos propios',
      yearRange: '2007-2010',
    },
    {
      description: `Experiencia en mejoras de hogares: cocinas, patios y ampliaciones.
      Atención a los detalles y a la satisfacción del cliente tanto en ceramicos como porcelanatos.`,
      imagePath: `${this._imgAboutUsPath}/especializacion.png`,
      title: 'Especialización en remodelaciones',
      yearRange: '2011-2014',
    },
    {
      description: `Desarrollo de hogares familiares completos,
      desde cimientos hasta acabados, garantizando calidad y seguridad en cada proyecto.`,
      imagePath: `${this._imgAboutUsPath}/construyendo-vivienda.png`,
      title: 'Construcción de viviendas',
      yearRange: '2015-2018',
    },
    {
      description: `Participación en proyectos de impacto social: colegios,
      centros vecinales y espacios para la comunidad.`,
      imagePath: `${this._imgAboutUsPath}/obra-comunitaria.png`,
      title: 'Obras comunitarias',
      yearRange: '2019-2022',
    },
    {
      description: `Dando forma a proyectos que buscan mejorar la vida de las
      familias y comunidades, con mirada puesta en el mañana.`,
      imagePath: `${this._imgAboutUsPath}/obra-grande.png`,
      title: 'Construyendo futuro',
      yearRange: `2023-${this.currentYear.toString()}`,
    },
    {
      description: '¡Contactanos y se parte de nuestra historia!',
      imagePath: '',
      title: '',
      yearRange: '',
    },
  ];
}
