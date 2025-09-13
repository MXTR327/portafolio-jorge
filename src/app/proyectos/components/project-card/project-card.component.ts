import { SlicePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IProject } from '@proyectos/interfaces/project.interface';

@Component({
  selector: 'app-project-card',
  imports: [SlicePipe, RouterLink],
  templateUrl: './project-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectCardComponent
{
  readonly project = input.required<IProject>();
}
