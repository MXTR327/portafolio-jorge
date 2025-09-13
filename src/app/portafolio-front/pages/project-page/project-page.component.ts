import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '@portafolio-front/services/project.service';
import { ProjectSliderComponent } from '@proyectos/components/project-slider/project-slider.component';
import { IProject } from '@proyectos/interfaces/project.interface';
import { of } from 'rxjs';

@Component({
  selector: 'app-project-page',
  imports: [ProjectSliderComponent],
  templateUrl: './project-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectPageComponent
{
  activatedRoute = inject<ActivatedRoute>(ActivatedRoute);
  projectId = this.activatedRoute.snapshot.params['id'] as string;
  private readonly _projectService = inject(ProjectService);

  projectResource = rxResource<IProject | undefined, string>({
    params: () => this.projectId,

    stream: ({ params }) => of(this._projectService.getProjectById(Number(params))),
  });
}
