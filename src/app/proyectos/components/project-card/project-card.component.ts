import { Component, input } from '@angular/core';
import { Project } from '@proyectos/interfaces/project.interface';

@Component({
  imports: [],
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
})
export class ProjectCardComponent
{
  project = input.required<Project>();
}
