import { Component, input } from '@angular/core';

@Component( {
  selector: 'service-card',
  imports: [],
  templateUrl: './service-card.component.html',
} )
export class ServiceCardComponent
{
  service = input.required<{ image: string, title: string, description: string }>();
}
