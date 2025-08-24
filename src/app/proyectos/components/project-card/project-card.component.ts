import { SlicePipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { Project } from '@proyectos/interfaces/project.interface';

@Component({
  selector: 'project-card',
  imports: [SlicePipe],
  templateUrl: './project-card.component.html',
})
export class ProjectCardComponent
{
  project = input.required<Project>();
}
