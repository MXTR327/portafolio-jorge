import { SlicePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, inject } from '@angular/core';
import { ProjectCardComponent } from '@proyectos/components/project-card/project-card.component';
import { IProject } from '@proyectos/interfaces/project.interface';
import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  selector: 'app-projects-page',
  imports: [ProjectCardComponent, SvgIconComponent, SlicePipe],
  templateUrl: './projects-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsPageComponent
{
  elementRef = inject<ElementRef<HTMLElement>>(ElementRef<HTMLElement>);

  private readonly _iconsPath: string = 'assets/icons';
  readonly iconPlanePath: string = `${this._iconsPath}/shared/icon-paper-plane.svg`;

  private readonly _imgPath: string = 'assets/images';

  readonly projectsList: IProject[] = [
    {
      date: 'Julio 16, 2025',
      description:
        'Proyecto de remodelación en el que se instaló una escalera con mayólica artesanal. El trabajo incluyó diseño personalizado, nivelación de superficies y acabado brillante para mayor durabilidad.',
      imagePath: `${this._imgPath}/escalera.png`,
      subtitle: 'Detalles que transforman espacios',
      title: 'Escalera con mayólica decorativa',
    },
    {
      date: 'Agosto 5, 2025',
      description:
        'Construcción de un lavadero enchapado con cerámica clara. El proceso contempló instalación de drenaje, acabado estético y sellado de juntas para resistencia al agua.',
      imagePath: `${this._imgPath}/lavadero.png`,
      subtitle: 'Practicidad con estilo propio',
      title: 'Lavadero enchapado en cerámica',
    },
    {
      date: 'Septiembre 1, 2025',
      description:
        'Diseño moderno de lavadero con enchape negro mate. Se aplicó un estilo minimalista, priorizando la limpieza visual y la resistencia de los materiales.',
      imagePath: `${this._imgPath}/lavadero2.png`,
      subtitle: 'Minimalismo con carácter',
      title: 'Lavadero enchapado negro mate',
    },
  ];
}
