import { SlicePipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { Project } from '@proyectos/interfaces/project.interface';

@Component({
  imports: [SlicePipe],
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
})
export class ProjectCardComponent
{
  project = input.required<Project>();
}
