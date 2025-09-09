import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { IProject } from '@proyectos/interfaces/project.interface';

@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectCardComponent
{
  readonly project = input.required<IProject>();
}
