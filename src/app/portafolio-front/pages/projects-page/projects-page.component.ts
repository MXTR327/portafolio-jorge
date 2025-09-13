import { ChangeDetectionStrategy, Component, ElementRef, inject, signal } from '@angular/core';
import { ProjectService } from '@portafolio-front/services/project.service';
import { ProjectCardComponent } from '@proyectos/components/project-card/project-card.component';
import { SvgIconComponent } from 'angular-svg-icon';
@Component({
  selector: 'app-projects-page',
  imports: [ProjectCardComponent, SvgIconComponent],
  templateUrl: './projects-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsPageComponent
{
  elementRef = inject<ElementRef<HTMLElement>>(ElementRef<HTMLElement>);

  private readonly _iconsPath: string = 'assets/icons';
  readonly iconAddPath: string = `${this._iconsPath}/proyectos/icon-add.svg`;

  readonly isShowMore = signal<boolean>(false);

  private readonly _projectService = inject(ProjectService);
  readonly projectsOrderedByDate = this._projectService.getProjectsOrderedByDate();
}
